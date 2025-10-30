import React, { useState } from 'react';
import { Search, Lightbulb, FileText, TrendingUp, Target, DollarSign, Users } from 'lucide-react';

export default function DiagnosticoIA() {
  const [formData, setFormData] = useState({
    nome: '',
    celular: '',
    email: '',
    empresa: '',
    cargo: '',
    auxilio: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Aqui você pode integrar com seu sistema de captura de leads
    // Por exemplo: enviar para API, Google Sheets, RD Station, etc.
    
    console.log('Form submitted:', formData);
    alert('Diagnóstico solicitado! Entraremos em contato em breve.');
    
    // Limpar formulário após envio
    setFormData({
      nome: '',
      celular: '',
      email: '',
      empresa: '',
      cargo: '',
      auxilio: ''
    });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-20 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            <span className="text-red-600">90%</span> dos projetos de IA corporativa{' '}
            <span className="text-red-600">falham.</span>
            <br />
            <span className="text-blue-600">Descubra onde aplicar — antes de gastar.</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
            Diagnóstico gratuito e personalizado que mapeia seus processos, identifica gargalos reais 
            e mostra onde IA gera ROI mensurável na sua operação — sem risco, sem compromisso.
          </p>
          <a 
            href="#formulario" 
            className="inline-block bg-blue-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl"
          >
            Quero meu diagnóstico gratuito!
          </a>
        </div>
      </section>

      {/* Problema Section */}
      <section className="bg-blue-600 text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold mb-6">Pare de testar IA no escuro!</h2>
          <p className="text-lg mb-4 leading-relaxed">
            Muitas empresas investem em inteligência artificial sem saber onde ela realmente 
            faz diferença — e acabam gastando tempo e recursos em lugares errados.
          </p>
          <p className="text-lg leading-relaxed">
            Nosso diagnóstico revela os pontos certos para aplicar IA e gerar retorno real, 
            com clareza, previsibilidade e integração total aos seus sistemas.
          </p>
        </div>
      </section>

      {/* 3 Passos Section */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Em <span className="text-blue-600">três</span> passos simples:
            </h2>
            <p className="text-xl text-gray-600">
              Você entende o potencial real da IA na sua operação.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Passo 1 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-blue-500">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Search className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Mapeamento de processos críticos
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Identificamos os processos que consomem mais tempo, geram mais erro 
                ou travam decisões na sua operação.
              </p>
            </div>

            {/* Passo 2 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-green-500">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <Lightbulb className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Análise de viabilidade com IA
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Avaliamos quais processos podem ser automatizados ou otimizados com IA, 
                estimando o ROI real de cada caso de uso.
              </p>
            </div>

            {/* Passo 3 */}
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-all border-t-4 border-purple-500">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mb-6 mx-auto">
                <FileText className="w-8 h-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
                Plano executável e priorizado
              </h3>
              <p className="text-gray-600 text-center leading-relaxed">
                Você recebe um documento claro: quais processos automatizar primeiro, 
                esforço técnico estimado, ROI esperado e próximos passos.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Prova Social */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">
            Inteligência analítica que você já conhece.
            <br />
            <span className="text-blue-600">Agora potencializada por IA.</span>
          </h2>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto">
            A BIMachine é referência em inteligência analítica corporativa há mais de 15 anos, 
            com mais de 500 empresas transformando dados em resultados.
          </p>
          <p className="text-lg text-gray-600 leading-relaxed max-w-3xl mx-auto mt-4">
            Agora, levamos essa expertise para o próximo nível: diagnóstico estratégico 
            de onde e como aplicar IA na sua operação — com segurança, governança e ROI comprovado.
          </p>
        </div>
      </section>

      {/* Casos de Uso */}
      <section className="py-20 px-4 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Onde a IA já gera resultado hoje</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cada empresa é única, mas esses são exemplos reais de onde IA tem gerado 
              ROI em operações como a sua:
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-8">
            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-3">
                <TrendingUp className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Forecast mais preciso e previsível</h3>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-3">
                <Target className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Priorização automática de leads</h3>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-3">
                <DollarSign className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Copiloto financeiro por loja e região</h3>
              </div>
            </div>

            <div className="bg-gray-800 p-6 rounded-lg border border-gray-700 hover:border-blue-500 transition-all">
              <div className="flex items-center mb-3">
                <Users className="w-6 h-6 text-blue-400 mr-3" />
                <h3 className="text-xl font-semibold">Atendimento em segundos com IA</h3>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-300 text-lg">
            No seu diagnóstico, vamos identificar os casos específicos da sua operação — 
            com base nos seus dados, processos e metas.
          </p>
          <p className="text-center text-gray-400 mt-4">
            Tudo conectado aos sistemas que você já usa, com segurança e governança.
          </p>
        </div>
      </section>

      {/* CTA + Formulário */}
      <section id="formulario" className="py-20 px-4 bg-gradient-to-br from-blue-50 to-white">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Pare de apostar. Comece a ter certeza.
            </h2>
            <p className="text-xl text-gray-600">
              Preencha o formulário e receba seu diagnóstico personalizado — 
              100% gratuito, sem compromisso.
            </p>
          </div>

          <div className="bg-white p-8 rounded-2xl shadow-xl">
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Nome*</label>
                <input
                  type="text"
                  name="nome"
                  value={formData.nome}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Seu nome completo"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Celular*</label>
                <input
                  type="tel"
                  name="celular"
                  value={formData.celular}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="(00) 00000-0000"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Email*</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="seu@email.com"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-semibold mb-2">Empresa*</label>
                <input
                  type="text"
                  name="empresa"
                  value={formData.empresa}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Nome da empresa"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-gray-700 font-semibold mb-2">Cargo*</label>
                <select
                  name="cargo"
                  value={formData.cargo}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
                <label className="block text-gray-700 font-semibold mb-2">
                  De que forma podemos auxiliar você?*
                </label>
                <select
                  name="auxilio"
                  value={formData.auxilio}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
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
              onClick={handleSubmit}
              className="w-full bg-blue-600 text-white py-4 rounded-lg text-lg font-bold hover:bg-blue-700 transition-all shadow-lg hover:shadow-xl cursor-pointer"
            >
              QUERO PARTICIPAR!
            </button>

            <div className="mt-6 text-center text-gray-600">
              <p className="flex items-center justify-center gap-4 flex-wrap">
                <span>✓ Sem custo</span>
                <span>✓ Sem compromisso</span>
                <span>✓ 100% personalizado</span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="mb-2">© 2025 BIMachine - Todos os direitos reservados</p>
          <p className="text-sm">
            Inteligência Analítica e IA Corporativa
          </p>
        </div>
      </footer>
    </div>
  );
}