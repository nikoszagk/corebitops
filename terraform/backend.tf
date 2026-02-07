terraform {
  backend "azurerm" {
    resource_group_name  = "rg-corebitops"
    storage_account_name = "corebitopstfstate"
    container_name       = "tfstate"
    key                  = "terraform.tfstate"
  }
}
