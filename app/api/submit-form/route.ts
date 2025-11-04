import { NextResponse } from "next/server"

export async function POST(request: Request) {
  try {
    const data = await request.json()

    // Log dos dados recebidos
    console.log("📋 Novo lead recebido:", {
      timestamp: new Date().toISOString(),
      ...data,
    })

    // TODO: Aqui você pode integrar com:
    // - Serviço de email (SendGrid, Resend, etc)
    // - CRM (HubSpot, Salesforce, RD Station, etc)
    // - Banco de dados (Supabase, PostgreSQL, etc)
    // - Webhook para outras ferramentas

    // Exemplo de estrutura para enviar email:
    // await sendEmail({
    //   to: 'contato@bimachine.com.br',
    //   subject: `Novo Lead: ${data.nome} - ${data.empresa}`,
    //   body: `
    //     Nome: ${data.nome}
    //     Email: ${data.email}
    //     Celular: ${data.celular}
    //     Empresa: ${data.empresa}
    //     Cargo: ${data.cargo}
    //     Faturamento > R$200k: ${data.faturamento}
    //     Iniciativas IA: ${data.iniciativasIA}
    //     Tem BI: ${data.bi}
    //   `
    // })

    // Retorna sucesso
    return NextResponse.json(
      {
        success: true,
        message: "Dados recebidos com sucesso!",
      },
      { status: 200 },
    )
  } catch (error) {
    console.error("❌ Erro ao processar formulário:", error)
    return NextResponse.json(
      {
        success: false,
        message: "Erro ao processar os dados. Tente novamente.",
      },
      { status: 500 },
    )
  }
}
