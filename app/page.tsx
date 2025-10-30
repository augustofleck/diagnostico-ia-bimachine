"use client"

import { useState, type FormEvent, type ChangeEvent } from "react"
import { Search, Lightbulb, FileText, TrendingUp, Target, DollarSign, Users } from "lucide-react"
import { Header } from "@/components/header"

interface FormData {
  nome: string
  celular: string
  email: string
  empresa: string
  cargo: string
  auxilio: string
}

export default function DiagnosticoIA() {
  const [formData, setFormData] = useState<FormData>({
    nome: "",
    celular: "",
    email: "",
    empresa: "",
    cargo: "",
    auxilio: "",
  })

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    // Aqui você pode integrar com seu sistema de captura de leads
    // Por exemplo: enviar para API, Google Sheets, RD Station, etc.

    console.log("Form submitted:", formData)
    alert("Diagnóstico solicitado! Entraremos em contato em breve.")

    // Limpar formulário após envio
    setFormData({
      nome: "",
      celular: "",
      email: "",
      empresa: "",
      cargo: "",
      auxilio: "",
    })
  }

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header Component */}
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-12 sm:py-16 md:py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-4 sm:mb-6 text-balance leading-tight">
            <span className="text-red-600">90%</span> dos projetos de IA corporativa{" "}
            <span className="text-red-600">falham.</span>
            <br />
            <span className="text-blue-600">Descubra onde aplicar — antes de gastar.</span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 sm:mb-8 leading-relaxed max-w-3xl mx-auto text-pretty px-2">
            Diagnóstico gratuito e personalizado que mapeia seus processos, identifica gargalos reais e mostra onde IA
            gera ROI mensurável na sua operação — sem risco, sem compromisso.
          </p>
          <a
            href="#formulario"
            className="inline-block bg-blue-600 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg text-base sm:text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl touch-manipulation"
          >
            Quero meu diagnóstico gratuito!
          </a>
        </div>
      </section>

      {/* Problema Section */}
      <section className="bg-blue-600 text-white py-12 sm:py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">Pare de testar IA no escuro!</h2>
          <p className="text-base sm:text-lg mb-3 sm:mb-4 leading-relaxed">
            Muitas empresas investem em inteligência artificial sem saber onde ela realmente faz diferença — e acabam
            gastando tempo e recursos em lugares errados.
          </p>
          <p className="text-base sm:text-lg leading-relaxed">
            Nosso diagnóstico revela os pontos certos para aplicar IA e gerar retorno real, com clareza, previsibilidade
            e integração total aos seus sistemas.
          </p>
        </div>
      </section>

      {/* 3 Passos Section */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10 sm:mb-12 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4">
              Em <span className="text-blue-600">três</span> passos simples:
            </h2>
            <p className="text-lg sm:text-xl text-gray-600 px-2">
              Você entende o potencial real da IA na sua operação.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            {/* Passo 1 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-500">
              <div className="bg-blue-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Search className="w-7 h-7 sm:w-8 sm:h-8 text-blue-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Mapeamento de processos críticos
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Identificamos os processos que consomem mais tempo, geram mais erro ou travam decisões na sua operação.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-green-500">
              <div className="bg-green-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <Lightbulb className="w-7 h-7 sm:w-8 sm:h-8 text-green-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Análise de viabilidade com IA
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Avaliamos quais processos podem ser automatizados ou otimizados com IA, estimando o ROI real de cada
                caso de uso.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white p-6 sm:p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-500">
              <div className="bg-purple-100 w-14 h-14 sm:w-16 sm:h-16 rounded-full flex items-center justify-center mb-4 sm:mb-6 mx-auto">
                <FileText className="w-7 h-7 sm:w-8 sm:h-8 text-purple-600" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-gray-900 mb-3 sm:mb-4 text-center">
                Plano executável e priorizado
              </h3>
              <p className="text-sm sm:text-base text-gray-600 text-center leading-relaxed">
                Você recebe um documento claro: quais processos automatizar primeiro, esforço técnico estimado, ROI
                esperado e próximos passos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-12 sm:py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 leading-tight">
            Inteligência analítica que você já conhece.
            <br />
            <span className="text-blue-600">Agora potencializada por IA.</span>
          </h2>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto px-2">
            A BIMachine é referência em inteligência analítica corporativa há mais de 15 anos, com mais de 500 empresas
            transformando dados em resultados.
          </p>
          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-3 sm:mt-4 px-2">
            Agora, levamos essa expertise para o próximo nível: diagnóstico estratégico de onde e como aplicar IA na sua
            operação — com segurança, governança e ROI comprovado.
          </p>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-12 sm:py-16 md:py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">
              Onde a IA já gera resultado hoje
            </h2>
            <p className="text-base sm:text-lg text-gray-300 max-w-3xl mx-auto px-2">
              Cada empresa é única, mas esses são exemplos reais de onde IA tem gerado ROI em operações como a sua:
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-8">
            <div className="bg-gray-800 p-5 sm:p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-2 sm:mb-3">
                <TrendingUp className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 sm:mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Forecast mais preciso e previsível</h3>
              </div>
            </div>

            <div className="bg-gray-800 p-5 sm:p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-2 sm:mb-3">
                <Target className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 sm:mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Priorização automática de leads</h3>
              </div>
            </div>

            <div className="bg-gray-800 p-5 sm:p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-2 sm:mb-3">
                <DollarSign className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 sm:mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Copiloto financeiro por loja e região</h3>
              </div>
            </div>

            <div className="bg-gray-800 p-5 sm:p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-2 sm:mb-3">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 text-blue-400 mr-2 sm:mr-3 flex-shrink-0" />
                <h3 className="text-lg sm:text-xl font-semibold">Atendimento em segundos com IA</h3>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-300 text-base sm:text-lg px-2">
            No seu diagnóstico, vamos identificar os casos específicos da sua operação — com base nos seus dados,
            processos e metas.
          </p>
          <p className="text-center text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base px-2">
            Tudo conectado aos sistemas que você já usa, com segurança e governança.
          </p>
        </div>
      </section>

      {/* CTA + Formulário */}
      <section id="formulario" className="py-12 sm:py-16 md:py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mb-3 sm:mb-4 px-2">
              Pare de apostar. Comece a ter certeza.
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-gray-600 px-2">
              Preencha o formulário e receba seu diagnóstico personalizado — 100% gratuito, sem compromisso.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="bg-white p-6 sm:p-8 rounded-2xl shadow-xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label htmlFor="nome" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Nome*
                </label>
                <input
                  type="text"
                  id="nome"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label htmlFor="celular" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Celular*
                </label>
                <input
                  type="tel"
                  id="celular"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-4 sm:mb-6">
              <div>
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Email*
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label htmlFor="empresa" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Empresa*
                </label>
                <input
                  type="text"
                  id="empresa"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                  placeholder="Nome da empresa"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-6 sm:mb-6">
              <div>
                <label htmlFor="cargo" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  Cargo*
                </label>
                <select
                  id="cargo"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                >
                  <option value="">Selecione</option>
                  <option value="diretor">Diretor</option>
                  <option value="gerente">Gerente</option>
                  <option value="coordenador">Coordenador</option>
                  <option value="analista">Analista</option>
                  <option value="outro">Outro</option>
                </select>
              </div>

              <div>
                <label htmlFor="auxilio" className="block text-gray-700 font-semibold mb-2 text-sm sm:text-base">
                  De que forma podemos auxiliar você?*
                </label>
                <select
                  id="auxilio"
                  name="auxilio"
                  value={formData.auxilio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 sm:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base"
                >
                  <option value="">Selecione</option>
                  <option value="diagnostico">Diagnóstico de IA</option>
                  <option value="implementacao">Implementação de IA</option>
                  <option value="consultoria">Consultoria</option>
                  <option value="outro">Outro</option>
                </select>
              </div>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 sm:py-4 rounded-lg text-base sm:text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl touch-manipulation"
            >
              QUERO PARTICIPAR!
            </button>

            <div className="mt-4 sm:mt-6 text-center text-gray-600">
              <p className="flex items-center justify-center gap-3 sm:gap-4 flex-wrap text-sm sm:text-base">
                <span>✓ Sem custo</span>
                <span>✓ Sem compromisso</span>
                <span>✓ 100% personalizado</span>
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-6 sm:py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2 text-sm sm:text-base">© 2025 BIMachine - Todos os direitos reservados</p>
          <p className="text-xs sm:text-sm">Inteligência Analítica e IA Corporativa</p>
        </div>
      </footer>
    </div>
  )
}
