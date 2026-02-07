# CorebitOps

Next.js application deployed to Azure Container Apps with CI/CD via GitHub Actions.

## Project Structure

```
corebitops/
├── app/                    # Next.js app directory
├── components/             # React components
├── terraform/              # Infrastructure as Code
│   ├── main.tf             # Azure resources
│   ├── outputs.tf          # Terraform outputs
│   └── .gitignore          # Terraform-specific ignores
├── .github/workflows/
│   ├── deploy.yml          # App CI/CD pipeline
│   └── terraform.yml       # Infrastructure CI/CD
├── Dockerfile              # Multi-stage Docker build
├── .dockerignore           # Docker build exclusions
└── next.config.js          # Next.js config (standalone output)
```

## Prerequisites

- Node.js 20+
- Docker
- Azure CLI (`az`)
- Terraform 1.0+
- GitHub CLI (`gh`)

## Local Development

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Docker Build

```bash
docker build -t corebitops .
docker run -p 3000:3000 corebitops
```

## Infrastructure

### Azure Resources

| Resource | Name | Purpose |
|----------|------|---------|
| Resource Group | rg-corebitops | Container for all resources |
| Container Registry | corebitopsacr | Docker image storage |
| Container Apps Environment | corebitops-env | Hosting environment |
| Container App | corebitops-app | Running application |
| Log Analytics | workspace-rgcorebitopsZ16H | Logs and monitoring |
| Storage Account | corebitopstfstate | Terraform state backend |

### Terraform Commands

```bash
cd terraform

# Initialize
terraform init

# Preview changes
terraform plan

# Apply changes
terraform apply

# View outputs
terraform output

# Get ACR password
terraform output -raw acr_admin_password
```

### Estimated Monthly Cost

| Resource | Cost |
|----------|------|
| Container Registry (Basic) | ~$5 |
| Container Apps (scales to zero) | ~$0-10 |
| **Total** | **~$5-15/month** |

## CI/CD Setup

### 1. Create GitHub Repository

```bash
gh auth login
gh repo create corebitops --public --source=. --remote=origin --push
```

### 2. Create Service Principal

```bash
SUB_ID=$(az account show --query id -o tsv)
az ad sp create-for-rbac --name "sp-corebitops-github" --role contributor \
  --scopes /subscriptions/$SUB_ID/resourceGroups/rg-corebitops --sdk-auth
```

Save the JSON output.

### 3. Configure GitHub Secrets

Go to **Settings > Secrets and variables > Actions** and add:

| Secret | Value |
|--------|-------|
| `AZURE_CREDENTIALS` | JSON from service principal |
| `ACR_LOGIN_SERVER` | `corebitopsacr.azurecr.io` |
| `ACR_USERNAME` | `corebitopsacr` |
| `ACR_PASSWORD` | Run: `terraform output -raw acr_admin_password` |
| `RESOURCE_GROUP` | `rg-corebitops` |
| `CONTAINER_APP_NAME` | `corebitops-app` |

### 4. Deploy

Push to `main` branch to trigger deployment:

```bash
git add .
git commit -m "Deploy"
git push origin main
```

## CI/CD Workflows

### Application (`deploy.yml`)
- **Trigger**: Push to `main`
- **Actions**: Build Docker image → Push to ACR → Deploy to Container Apps

### Infrastructure (`terraform.yml`)
- **Trigger**: Push to `main` with changes in `terraform/`
- **Actions**:
  - `terraform plan` on pull requests
  - `terraform apply` on merge to main
- **State**: Stored in Azure Storage (`corebitopstfstate`)

## Application URL

https://corebitops-app.jollyplant-fff82c23.westeurope.azurecontainerapps.io

## Useful Commands

```bash
# Get app URL
az containerapp show --name corebitops-app --resource-group rg-corebitops \
  --query properties.configuration.ingress.fqdn -o tsv

# View logs
az containerapp logs show --name corebitops-app --resource-group rg-corebitops

# Scale manually
az containerapp update --name corebitops-app --resource-group rg-corebitops \
  --min-replicas 1 --max-replicas 5

# Restart app
az containerapp revision restart --name corebitops-app --resource-group rg-corebitops

# Destroy all resources
cd terraform && terraform destroy
```
