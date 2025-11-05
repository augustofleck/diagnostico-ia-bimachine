"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"
import { User, Check, CheckCheck, ExternalLink, AlertCircle } from "lucide-react"
import Image from "next/image"
import type { JSX } from "react/jsx-runtime"

type Step = "welcome" | "start" | "question1" | "question2" | "question3" | "form" | "success"

interface FormData {
  faturamento: string
  iniciativasIA: string
  bi: string
  nome: string
  celular: string
  email: string
  empresa: string
  cargo: string
}

interface FormErrors {
  nome?: string
  email?: string
  celular?: string
  empresa?: string
  cargo?: string
}

interface Message {
  type: "bot" | "user"
  content: string | JSX.Element
  timestamp: Date
  read?: boolean
}

export function ChatInterface() {
  const [step, setStep] = useState<Step>("welcome")
  const [messages, setMessages] = useState<Message[]>([])
  const [formData, setFormData] = useState<FormData>({
    faturamento: "",
    iniciativasIA: "",
    bi: "",
    nome: "",
    celular: "",
    email: "",
    empresa: "",
    cargo: "",
  })
  const [formErrors, setFormErrors] = useState<FormErrors>({})
  const [isTyping, setIsTyping] = useState(false)
  const [showingMessageIndex, setShowingMessageIndex] = useState(-1)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const chatContainerRef = useRef<HTMLDivElement>(null)
  const mainFormRef = useRef<HTMLFormElement>(null)

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

  useEffect(() => {
    scrollToBottom()
  }, [messages, isTyping])

  useEffect(() => {
    if (messages.length > 0) {
      const timer = setTimeout(() => {
        setMessages((prev) =>
          prev.map((msg, idx) => (idx === prev.length - 1 && msg.type === "user" ? { ...msg, read: true } : msg)),
        )
      }, 500)
      return () => clearTimeout(timer)
    }
  }, [messages.length])

  useEffect(() => {
    addBotMessage(
      "Olá! 👋 Eu sou a ADA.IA, especialista em diagnóstico de IA da BIMachine.\n\nVi que você veio do nosso vídeo e quer descobrir onde aplicar IA com segurança e governabilidade, certo?\n\nAqui na BIMachine, desenvolvemos uma plataforma de diagnóstico e planejamento que mapeia sua operação e mostra exatamente:\n\n✓ Onde aplicar IA e Analytics\n✓ Quais processos automatizar primeiro\n✓ Qual o ROI esperado de cada caso de uso\n\nVou te fazer apenas 3 perguntas rápidas para entender o momento da sua empresa e garantir o melhor atendimento para você.\n\nLeva menos de 1 minuto. Vamos começar?",
    )

    setTimeout(() => {
      setStep("start")
    }, 2500)
  }, [])

  const addBotMessage = (content: string | JSX.Element, delay = 1000) => {
    setIsTyping(true)
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          content,
          timestamp: new Date(),
        },
      ])
      setIsTyping(false)
      setShowingMessageIndex((prev) => prev + 1)
    }, delay)
  }

  const addUserMessage = (content: string) => {
    setMessages((prev) => [
      ...prev,
      {
        type: "user",
        content,
        timestamp: new Date(),
        read: false,
      },
    ])
    setShowingMessageIndex((prev) => prev + 1)
  }

  const handleStart = () => {
    addUserMessage("Vamos lá! 🚀")
    setStep("question1")
    addBotMessage(
      "Perfeito! Primeira pergunta:\n\nSua empresa tem faturamento superior a R$ 200 mil por mês?\n\nIsso me ajuda a entender o porte e preparar recomendações adequadas para sua realidade.",
      1500,
    )
  }

  const handleQuestion1Answer = (answer: "sim" | "nao") => {
    const answerText = answer === "sim" ? "✓ Sim, temos" : "✗ Não temos"
    addUserMessage(answerText)
    setFormData({ ...formData, faturamento: answer })

    if (answer === "sim") {
      addBotMessage(
        "Ótimo! Empresas nesse porte costumam ter processos estruturados onde IA gera grande impacto. 😊\n\nAgora me conta: sua empresa já tem alguma iniciativa de Inteligência Artificial em andamento?\n\n(Pode ser piloto, testes, ferramentas com IA, chatbots, etc.)",
        1200,
      )
    } else {
      addBotMessage(
        "Entendi! Vamos focar em casos de uso com ROI mais rápido e implementação simplificada. 😊\n\nÚltima pergunta: sua empresa já tem uma ferramenta de BI ou Analytics implementada?\n\n(Dashboards, relatórios automatizados, plataformas de dados, etc.)",
        1200,
      )
    }

    setTimeout(() => {
      setStep("question2")
    }, 1300)
  }

  const handleQuestion2Answer = (answer: "sim" | "nao") => {
    const answerText = answer === "sim" ? "✓ Sim, já temos" : "✗ Ainda não"
    addUserMessage(answerText)
    setFormData({ ...formData, iniciativasIA: answer })

    if (answer === "sim") {
      addBotMessage(
        "Que bom! Então você já entende o potencial da IA. Vamos identificar como ampliar e otimizar essas iniciativas. 🚀\n\nÚltima pergunta: sua empresa já tem uma ferramenta de BI ou Analytics implementada?\n\n(Dashboards, relatórios automatizados, plataformas de dados, etc.)",
        1200,
      )
    } else {
      addBotMessage(
        "Perfeito! Você está no momento certo para começar do jeito certo — com planejamento estratégico. 🎯\n\nÚltima pergunta: sua empresa já tem uma ferramenta de BI ou Analytics implementada?\n\n(Dashboards, relatórios automatizados, plataformas de dados, etc.)",
        1200,
      )
    }

    setTimeout(() => {
      setStep("question3")
    }, 1300)
  }

  const handleQuestion3Answer = (answer: "sim" | "nao") => {
    const answerText = answer === "sim" ? "✓ Sim, temos BI" : "✗ Não temos"
    addUserMessage(answerText)
    setFormData({ ...formData, bi: answer })

    if (answer === "sim") {
      addBotMessage(
        "Excelente! Ter dados estruturados é a base perfeita para aplicar IA com assertividade. Você já está um passo à frente. ✨\n\nCom essas informações, já consigo te encaminhar para um especialista direcionado para o seu cenário.\n\nAgora preciso apenas dos seus dados de contato para que nossa equipe entre em contato com você:",
        1200,
      )
    } else {
      addBotMessage(
        "Entendi! Isso significa que há uma oportunidade ainda maior — podemos estruturar dados E aplicar IA de forma integrada. 💡\n\nCom essas informações, já consigo te encaminhar para um especialista direcionado para o seu cenário.\n\nAgora preciso apenas dos seus dados de contato para que nossa equipe entre em contato com você:",
        1200,
      )
    }

    setTimeout(() => {
      setStep("form")
    }, 1300)
  }

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validatePhone = (phone: string): boolean => {
    const cleanPhone = phone.replace(/\D/g, "")
    return cleanPhone.length >= 10 && cleanPhone.length <= 11
  }

  const validateName = (name: string): boolean => {
    const nameRegex = /^[a-zA-ZÀ-ÿ\s]{2,}$/
    return nameRegex.test(name.trim())
  }

  const validateCompany = (company: string): boolean => {
    return company.trim().length >= 2
  }

  const validateForm = (): boolean => {
    const errors: FormErrors = {}

    if (!validateName(formData.nome)) {
      errors.nome = "Nome deve conter apenas letras e ter pelo menos 2 caracteres"
    }

    if (!validateEmail(formData.email)) {
      errors.email = "E-mail inválido. Use o formato: seu@empresa.com"
    }

    if (!validatePhone(formData.celular)) {
      errors.celular = "Telefone inválido. Digite um número válido com DDD"
    }

    if (!validateCompany(formData.empresa)) {
      errors.empresa = "Nome da empresa deve ter pelo menos 2 caracteres"
    }

    if (!formData.cargo) {
      errors.cargo = "Selecione seu cargo/função"
    }

    setFormErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value,
    })

    if (formErrors[name as keyof FormErrors]) {
      setFormErrors({
        ...formErrors,
        [name]: undefined,
      })
    }
  }

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    let value = e.target.value.replace(/\D/g, "")

    if (value.length <= 11) {
      if (value.length <= 2) {
        value = value
      } else if (value.length <= 6) {
        value = `(${value.slice(0, 2)}) ${value.slice(2)}`
      } else if (value.length <= 10) {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 6)}-${value.slice(6)}`
      } else {
        value = `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`
      }
    }

    setFormData({
      ...formData,
      celular: value,
    })

    if (formErrors.celular) {
      setFormErrors({
        ...formErrors,
        celular: undefined,
      })
    }
  }

  const handleFormSubmit = async (e: React.FormEvent) => {
    e.preventDefault()

    if (!validateForm()) {
      console.log("[v0] Formulário contém erros de validação:", formErrors)
      return
    }

    console.log("[v0] Iniciando submissão do formulário")
    console.log("[v0] Valores do formData:", formData)

    if (mainFormRef.current) {
      const personalNoteInput = mainFormRef.current.querySelector('input[name="personal_note"]') as HTMLInputElement
      if (personalNoteInput) {
        const diagnostico = `DIAGNÓSTICO DE IA - BIMachine

📊 Faturamento mensal superior a R$ 200 mil: ${formData.faturamento === "sim" ? "Sim" : "Não"}
🤖 Já possui iniciativas de IA em andamento: ${formData.iniciativasIA === "sim" ? "Sim" : "Não"}
📈 Possui ferramenta de BI/Analytics implementada: ${formData.bi === "sim" ? "Sim" : "Não"}

Origem: Diagnóstico IA - Chat Interativo`
        personalNoteInput.value = diagnostico
        console.log("[v0] Definindo personal_note com diagnóstico formatado:", diagnostico)
      }

      const formDataObj = new FormData(mainFormRef.current)
      console.log("[v0] Dados que serão enviados:")
      formDataObj.forEach((value, key) => {
        console.log(`  ${key}: ${value}`)
      })

      console.log("[v0] Submetendo form para o iframe...")
      mainFormRef.current.submit()
    }

    setIsSubmitting(true)

    setTimeout(() => {
      addUserMessage(`${formData.nome} - ${formData.empresa}`)
      setStep("success")
      addBotMessage(
        "Pronto! Tudo certo por aqui!\n\nRecebemos suas informações e nossa equipe já está preparando seu diagnóstico personalizado.\n\nVocê receberá nosso contato em até 15 minutos\n\nEnquanto aguarda, que tal conhecer um pouco mais sobre nossas soluções?",
        1500,
      )
      setIsSubmitting(false)
    }, 2000)
  }

  return (
    <div className="max-w-5xl mx-auto px-3 sm:px-4 py-4 sm:py-6 md:py-8 lg:py-12 min-h-screen flex items-center">
      <iframe name="form-target-iframe" style={{ display: "none" }} title="Form submission target" />

      <div className="w-full bg-white/95 backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-2xl overflow-hidden min-h-[600px] sm:min-h-[700px] flex flex-col">
        <div className="bg-gradient-to-r from-blue-600 via-blue-700 to-purple-600 text-white p-3 sm:p-4 md:p-6 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/10" />
          <div className="relative flex items-center justify-between gap-2">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4 min-w-0">
              <div className="relative flex-shrink-0">
                <div className="w-11 h-11 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full overflow-hidden shadow-lg">
                  <Image src="/images/ada-avatar.png" alt="ADA.IA" width={56} height={56} className="object-cover" />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 sm:w-4 sm:h-4 bg-green-400 rounded-full border-2 border-white animate-pulse shadow-lg" />
              </div>
              <div className="min-w-0">
                <h2 className="text-base sm:text-lg md:text-xl font-bold tracking-tight truncate">ADA.IA</h2>
                <p className="text-xs sm:text-sm text-blue-100 font-medium truncate">
                  Especialista em IA e Analytics • Online
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1.5 sm:gap-2 flex-shrink-0">
              <Image
                src="/images/bimachine-logo-dark.png"
                alt="BIMachine"
                width={100}
                height={32}
                className="h-5 sm:h-6 md:h-7 w-auto opacity-90"
              />
              <Image
                src="/images/iamachine-logo.png"
                alt="iAMachine"
                width={80}
                height={32}
                className="h-4 sm:h-5 md:h-6 w-auto opacity-90"
              />
            </div>
          </div>
        </div>

        <div
          ref={chatContainerRef}
          className="flex-1 overflow-y-auto p-3 sm:p-4 md:p-6 lg:p-8 space-y-4 sm:space-y-5 bg-gradient-to-b from-gray-50 to-white"
        >
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === "user" ? "justify-end" : "justify-start"} ${
                index === showingMessageIndex ? "animate-slide-in" : ""
              }`}
              style={{
                animation: index === showingMessageIndex ? "slideIn 0.3s ease-out" : "none",
              }}
            >
              <div
                className={`flex gap-2 sm:gap-3 max-w-[95%] sm:max-w-[85%] lg:max-w-[75%] ${
                  message.type === "user" ? "flex-row-reverse" : "flex-row"
                }`}
              >
                <div className="flex-shrink-0">
                  {message.type === "bot" ? (
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full overflow-hidden shadow-md transition-transform hover:scale-110">
                      <Image
                        src="/images/ada-avatar.png"
                        alt="ADA.IA"
                        width={44}
                        height={44}
                        className="object-cover"
                      />
                    </div>
                  ) : (
                    <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full bg-gradient-to-br from-gray-300 to-gray-400 flex items-center justify-center shadow-md transition-transform hover:scale-110">
                      <User className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 text-white" />
                    </div>
                  )}
                </div>
                <div
                  className={`rounded-xl sm:rounded-2xl px-3 py-2.5 sm:px-4 sm:py-3 md:px-5 md:py-4 transition-all hover:shadow-xl ${
                    message.type === "bot"
                      ? "bg-white text-gray-800 shadow-lg border border-gray-100"
                      : "bg-gradient-to-br from-blue-600 to-blue-700 text-white shadow-lg"
                  }`}
                >
                  <div className="text-sm sm:text-base md:text-[15px] whitespace-pre-line leading-relaxed font-medium">
                    {message.content}
                  </div>
                  {message.type === "user" && (
                    <div className="flex justify-end mt-1 sm:mt-1.5">
                      {message.read ? (
                        <CheckCheck className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-200" />
                      ) : (
                        <Check className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-200" />
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex justify-start animate-fade-in">
              <div className="flex gap-2 sm:gap-3">
                <div className="w-8 h-8 sm:w-9 sm:h-9 md:w-11 md:h-11 rounded-full overflow-hidden shadow-md">
                  <Image src="/images/ada-avatar.png" alt="ADA.IA" width={44} height={44} className="object-cover" />
                </div>
                <div className="bg-white rounded-xl sm:rounded-2xl px-4 py-3 sm:px-5 sm:py-4 shadow-lg border border-gray-100">
                  <div className="flex gap-1.5">
                    <div
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "0ms" }}
                    />
                    <div
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "150ms" }}
                    />
                    <div
                      className="w-2 h-2 sm:w-2.5 sm:h-2.5 bg-blue-400 rounded-full animate-bounce"
                      style={{ animationDelay: "300ms" }}
                    />
                  </div>
                </div>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="p-3 sm:p-4 md:p-6 lg:p-8 bg-white">
          <form
            ref={mainFormRef}
            onSubmit={handleFormSubmit}
            action="/api/submit-form"
            method="POST"
            target="form-target-iframe"
            className={`space-y-3 sm:space-y-4 ${step === "form" && !isTyping ? "animate-fade-in" : "hidden"}`}
            id="diagnostico-ia-form"
            data-form-name="Diagnóstico IA BIMachine"
            data-form-type="lead-capture"
            data-rd-form="true"
            noValidate
          >
            <div className="text-center mb-3 sm:mb-4">
              <h3 className="text-sm sm:text-base md:text-lg font-semibold text-gray-700 leading-snug">
                Preciso de mais algumas informações para nossa equipe atender você
              </h3>
            </div>

            <input type="hidden" name="traffic_source" value="Diagnóstico IA" />
            <input type="hidden" name="identificador" value="Diagnóstico IA" />
            <input type="hidden" name="personal_note" value="" />

            <input
              type="hidden"
              name="faturamento_mensal_maior_200k"
              value={formData.faturamento === "sim" ? "SIM" : "NAO"}
            />
            <input
              type="hidden"
              name="possui_iniciativas_ia"
              value={formData.iniciativasIA === "sim" ? "SIM" : "NAO"}
            />
            <input type="hidden" name="possui_ferramenta_bi_analytics" value={formData.bi === "sim" ? "SIM" : "NAO"} />

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 sm:gap-3">
              <div className="sm:col-span-2">
                <label htmlFor="nome-input" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Nome completo*
                </label>
                <input
                  type="text"
                  id="nome-input"
                  name="nome"
                  value={formData.nome}
                  onChange={handleInputChange}
                  required
                  minLength={2}
                  pattern="[a-zA-ZÀ-ÿ\s]+"
                  className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm font-medium shadow-sm hover:border-gray-400 bg-white ${
                    formErrors.nome ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Seu nome completo"
                />
                {formErrors.nome && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-red-600">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.nome}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="email-input" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  E-mail corporativo*
                </label>
                <input
                  type="email"
                  id="email-input"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm font-medium shadow-sm hover:border-gray-400 bg-white ${
                    formErrors.email ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="seu@empresa.com"
                />
                {formErrors.email && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-red-600">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.email}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="celular-input" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Celular/WhatsApp*
                </label>
                <input
                  type="tel"
                  id="celular-input"
                  name="celular"
                  value={formData.celular}
                  onChange={handlePhoneChange}
                  required
                  maxLength={15}
                  className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm font-medium shadow-sm hover:border-gray-400 bg-white ${
                    formErrors.celular ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="(00) 00000-0000"
                />
                {formErrors.celular && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-red-600">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.celular}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="empresa-input" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Empresa*
                </label>
                <input
                  type="text"
                  id="empresa-input"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleInputChange}
                  required
                  minLength={2}
                  className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm font-medium shadow-sm hover:border-gray-400 bg-white ${
                    formErrors.empresa ? "border-red-500" : "border-gray-300"
                  }`}
                  placeholder="Nome da empresa"
                />
                {formErrors.empresa && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-red-600">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.empresa}</span>
                  </div>
                )}
              </div>

              <div>
                <label htmlFor="cargo-input" className="block text-xs sm:text-sm font-semibold text-gray-700 mb-1.5">
                  Seu cargo/função*
                </label>
                <select
                  id="cargo-input"
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleInputChange}
                  required
                  className={`w-full px-3 py-2 sm:px-3.5 sm:py-2.5 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all text-sm font-medium shadow-sm hover:border-gray-400 bg-white ${
                    formErrors.cargo ? "border-red-500" : "border-gray-300"
                  }`}
                >
                  <option value="">Selecione...</option>
                  <option value="diretor">Diretor(a)</option>
                  <option value="gerente">Gerente</option>
                  <option value="coordenador">Coordenador(a)</option>
                  <option value="analista">Analista</option>
                  <option value="socio">Sócio/Proprietário(a)</option>
                  <option value="outro">Outro</option>
                </select>
                {formErrors.cargo && (
                  <div className="flex items-center gap-1 mt-1 text-xs text-red-600">
                    <AlertCircle className="w-3 h-3" />
                    <span>{formErrors.cargo}</span>
                  </div>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-3 sm:px-5 sm:py-3.5 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 mt-2"
            >
              {isSubmitting ? "Enviando... ⏳" : "Quero Falar com um Especialista Agora! 🚀"}
            </button>
          </form>

          {step === "start" && !isTyping && (
            <div className="space-y-3 animate-fade-in">
              <button
                onClick={handleStart}
                className="w-full bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-base sm:text-lg hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
              >
                Vamos lá! 🚀
              </button>
            </div>
          )}

          {step === "question1" && !isTyping && (
            <div className="space-y-2.5 sm:space-y-3 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleQuestion1Answer("sim")}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
                >
                  ✓ Sim, temos
                </button>
                <button
                  onClick={() => handleQuestion1Answer("nao")}
                  className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:from-gray-500 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
                >
                  ✗ Não temos
                </button>
              </div>
            </div>
          )}

          {step === "question2" && !isTyping && (
            <div className="space-y-2.5 sm:space-y-3 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleQuestion2Answer("sim")}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
                >
                  ✓ Sim, já temos
                </button>
                <button
                  onClick={() => handleQuestion2Answer("nao")}
                  className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:from-gray-500 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
                >
                  ✗ Ainda não
                </button>
              </div>
            </div>
          )}

          {step === "question3" && !isTyping && (
            <div className="space-y-2.5 sm:space-y-3 animate-fade-in">
              <div className="flex flex-col sm:flex-row gap-2.5 sm:gap-3">
                <button
                  onClick={() => handleQuestion3Answer("sim")}
                  className="flex-1 bg-gradient-to-r from-green-500 to-green-600 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:from-green-600 hover:to-green-700 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
                >
                  ✓ Sim, temos BI
                </button>
                <button
                  onClick={() => handleQuestion3Answer("nao")}
                  className="flex-1 bg-gradient-to-r from-gray-400 to-gray-500 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-sm sm:text-base hover:from-gray-500 hover:to-gray-600 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
                >
                  ✗ Não temos
                </button>
              </div>
            </div>
          )}

          {step === "success" && !isTyping && (
            <div className="space-y-5 sm:space-y-6 animate-fade-in">
              <div className="text-center">
                <div className="inline-flex items-center gap-2 bg-green-50 text-green-700 px-5 py-2.5 sm:px-6 sm:py-3 rounded-xl font-bold text-sm sm:text-base md:text-lg border-2 border-green-200 mb-4 sm:mb-6">
                  <Check className="w-4 h-4 sm:w-5 sm:h-5" />
                  Informações enviadas com sucesso!
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                <a
                  href="https://www.bimachine.com.br"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:from-blue-700 hover:to-blue-800 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
                >
                  Nosso Site
                  <ExternalLink className="w-4 h-4" />
                </a>
                <a
                  href="https://register.bimachine.com/"
                  className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 text-white px-5 py-3.5 sm:px-6 sm:py-4 rounded-xl font-bold text-sm sm:text-base md:text-lg hover:from-purple-700 hover:to-purple-800 transition-all shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-95 touch-manipulation"
                >
                  Teste nossa solução analytics grátis
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
