import { NextRequest, NextResponse } from 'next/server'

const SYSTEM_PROMPT = `You are a helpful AI assistant for CoreBit Ops, a DevOps consulting company run by Nikos Zagkanas.

About CoreBit Ops:
- Services: Infrastructure as Code (Terraform), Configuration Management (Ansible), CI/CD Pipelines (Jenkins, Azure DevOps), Cloud Infrastructure (Azure, AWS), Technical Support
- Expertise: Terraform, Ansible, Azure, AWS, Docker, Kubernetes, Jenkins, Linux, Git
- Focus: Helping organizations streamline development workflows and build reliable, scalable infrastructure

Your role:
- Answer questions about DevOps, cloud infrastructure, and the services offered
- Be helpful, professional, and concise
- If someone wants to hire or discuss a project, encourage them to use the contact form or email info@corebitops.com
- Keep responses brief (2-3 sentences for simple questions, more for complex topics)
- You can discuss technical DevOps topics like Terraform, Docker, Kubernetes, CI/CD, cloud platforms, etc.

Do not:
- Make up specific pricing (say "pricing depends on project scope, let's discuss")
- Pretend to be human
- Share information not related to DevOps or the business`

export async function POST(request: NextRequest) {
  try {
    const { messages } = await request.json()

    if (!messages || !Array.isArray(messages)) {
      return NextResponse.json(
        { error: 'Messages are required' },
        { status: 400 }
      )
    }

    const response = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-api-key': process.env.ANTHROPIC_API_KEY || '',
        'anthropic-version': '2023-06-01',
      },
      body: JSON.stringify({
        model: 'claude-3-haiku-20240307',
        max_tokens: 500,
        system: SYSTEM_PROMPT,
        messages: messages,
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      console.error('Anthropic API error:', error)
      return NextResponse.json(
        { error: 'Failed to get response' },
        { status: 500 }
      )
    }

    const data = await response.json()
    return NextResponse.json({
      content: data.content[0].text,
    })
  } catch (error) {
    console.error('Chat error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
}
