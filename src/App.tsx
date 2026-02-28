/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { 
  Youtube, 
  TrendingUp, 
  Users, 
  Video, 
  Mic, 
  Globe, 
  Image as ImageIcon, 
  CheckCircle2, 
  ShieldCheck, 
  ArrowRight,
  Zap,
  DollarSign
} from "lucide-react";

const Section = ({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) => (
  <section id={id} className={`py-20 px-6 ${className}`}>
    <div className="max-w-5xl mx-auto">
      {children}
    </div>
  </section>
);

const FeatureCard = ({ icon: Icon, title, description }: { icon: any; title: string; description: string }) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-2xl hover:border-emerald-500/50 transition-colors group"
  >
    <div className="w-12 h-12 bg-emerald-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="text-emerald-500 w-6 h-6" />
    </div>
    <h3 className="font-display text-2xl mb-4 tracking-wide uppercase">{title}</h3>
    <p className="text-zinc-400 leading-relaxed">{description}</p>
  </motion.div>
);

export default function App() {
  return (
    <div className="min-h-screen bg-[#050505] text-white font-sans selection:bg-emerald-500 selection:text-black">
      {/* 1. Dobra Principal (Header) */}
      <header className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-20">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-500/10 blur-[120px] rounded-full" />
        </div>

        <Section className="relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-zinc-900 border border-zinc-800 mb-8"
          >
            <Youtube className="text-red-500 w-5 h-5" />
            <span className="text-xs font-semibold tracking-widest uppercase text-zinc-400">Desafio de 30 Dias</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="font-display text-5xl md:text-8xl mb-8 leading-[0.9] tracking-tight uppercase"
          >
            Crie um Império no YouTube <br />
            <span className="text-emerald-500">Sem Mostrar o Rosto</span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-zinc-400 max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            O método prático de 30 dias para dominar a Inteligência Artificial e construir canais lucrativos que trabalham para você 24h por dia.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="flex flex-col items-center gap-4"
          >
            <a 
              href="https://pay.wiapy.com/YcRxZetYVn"
              className="group relative inline-flex items-center justify-center px-8 py-5 font-display text-xl bg-emerald-500 text-black rounded-xl hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(16,185,129,0.3)]"
            >
              QUERO COMEÇAR O DESAFIO AGORA - R$ 47,90
              <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
            <p className="text-xs text-zinc-500 uppercase tracking-widest flex items-center gap-2">
              <ShieldCheck className="w-4 h-4" /> Pagamento Seguro & Acesso Imediato
            </p>
          </motion.div>

          {/* Social Proof / Improved Dashboard Image */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-20 relative max-w-4xl mx-auto"
          >
            <div className="absolute inset-0 bg-emerald-500/20 blur-[100px] -z-10" />
            <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-2 shadow-2xl overflow-hidden group">
              <div className="bg-zinc-950 rounded-xl overflow-hidden relative aspect-[16/9]">
                <img 
                  src="https://images.unsplash.com/photo-1611162616475-46b635cb6868?auto=format&fit=crop&q=80&w=1200" 
                  alt="YouTube Monetization" 
                  className="w-full h-full object-cover opacity-20 group-hover:scale-105 transition-transform duration-1000"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-zinc-950 via-zinc-950/60 to-emerald-900/20" />
                
                {/* Floating Decorative Elements */}
                <div className="absolute top-10 right-10 w-32 h-32 bg-emerald-500/10 blur-3xl rounded-full animate-pulse" />
                <div className="absolute bottom-10 left-10 w-40 h-40 bg-blue-500/10 blur-3xl rounded-full animate-pulse" />

                {/* YouTube Studio Header Mock */}
                <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between border-b border-white/5 bg-zinc-950/40 backdrop-blur-md">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(220,38,38,0.5)]">
                      <Youtube className="w-5 h-5 text-white" />
                    </div>
                    <div className="hidden md:block">
                      <div className="h-2 w-24 bg-zinc-700 rounded-full mb-1.5" />
                      <div className="h-1.5 w-16 bg-zinc-800 rounded-full" />
                    </div>
                  </div>
                  <div className="flex gap-3">
                    <div className="h-8 w-24 bg-zinc-800/50 rounded-lg border border-white/5" />
                    <div className="h-8 w-8 bg-zinc-800/50 rounded-lg border border-white/5" />
                  </div>
                </div>

                <div className="absolute bottom-0 left-0 right-0 p-8 pt-20">
                  <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
                    <div className="space-y-2">
                      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 mb-2">
                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-ping" />
                        <span className="text-emerald-500 text-[10px] font-bold uppercase tracking-[0.2em]">Canal Ativo & Monetizado</span>
                      </div>
                      <h3 className="font-display text-4xl md:text-6xl uppercase tracking-tighter leading-none">
                        Resultados <span className="text-emerald-500">Reais</span>
                      </h3>
                    </div>
                    <div className="text-right hidden md:block">
                      <p className="text-zinc-500 text-xs uppercase tracking-widest mb-1">Últimos 28 dias</p>
                      <p className="font-display text-2xl text-emerald-500">+R$ 24.892,10</p>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-zinc-900/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group/card"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                        <TrendingUp className="w-12 h-12" />
                      </div>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-[0.15em] mb-2 font-bold">Visualizações</p>
                      <p className="font-display text-3xl text-white">2.480.192</p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="text-emerald-500 text-[10px] font-bold">↑ 12.4%</span>
                        <span className="text-zinc-600 text-[10px]">vs. período anterior</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-zinc-900/40 backdrop-blur-xl p-6 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden group/card"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                        <Users className="w-12 h-12" />
                      </div>
                      <p className="text-zinc-500 text-[10px] uppercase tracking-[0.15em] mb-2 font-bold">Inscritos</p>
                      <p className="font-display text-3xl text-white">+48.203</p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="text-emerald-500 text-[10px] font-bold">↑ 8.1%</span>
                        <span className="text-zinc-600 text-[10px]">vs. período anterior</span>
                      </div>
                    </motion.div>

                    <motion.div 
                      whileHover={{ y: -5 }}
                      className="bg-emerald-500/5 backdrop-blur-xl p-6 rounded-2xl border border-emerald-500/20 shadow-2xl relative overflow-hidden group/card"
                    >
                      <div className="absolute top-0 right-0 p-4 opacity-10 group-hover/card:opacity-20 transition-opacity">
                        <DollarSign className="w-12 h-12 text-emerald-500" />
                      </div>
                      <p className="text-emerald-500/60 text-[10px] uppercase tracking-[0.15em] mb-2 font-bold">Receita Estimada</p>
                      <p className="font-display text-3xl text-emerald-500">R$ 24.892,10</p>
                      <div className="flex items-center gap-1 mt-2">
                        <span className="text-emerald-500 text-[10px] font-bold">RPM: R$ 10,04</span>
                        <span className="text-zinc-600 text-[10px] ml-auto">Lucro Líquido</span>
                      </div>
                    </motion.div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      </header>

      {/* 2. Para Quem é Este Desafio (Identificação) */}
      <Section className="bg-zinc-950/50">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
            Para Quem é Este <span className="text-emerald-500">Desafio?</span>
          </h2>
          <p className="text-zinc-500 uppercase tracking-widest text-sm">Identifique-se com um dos perfis abaixo</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {[
            "Quem busca uma renda extra sólida sem precisar aparecer na câmera.",
            "Pessoas tímidas que têm vergonha de gravar vídeos ou falar em público.",
            "Quem já tentou criar canais e travou na hora de criar conteúdo constante.",
            "Empreendedores que querem automatizar canais de nicho (notícias, curiosidades, etc).",
            "Quem quer ganhar em dólar ou euro com a estratégia de internacionalização.",
            "Quem deseja dominar as ferramentas de IA mais poderosas do mercado atual."
          ].map((item, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-start gap-4 p-6 bg-zinc-900/30 border border-zinc-800/50 rounded-xl"
            >
              <CheckCircle2 className="text-emerald-500 w-6 h-6 shrink-0 mt-1" />
              <p className="text-zinc-300 text-lg">{item}</p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* 3. O Que Você Vai Dominar em 30 Dias (Os Pilares) */}
      <Section>
        <div className="text-center mb-20">
          <h2 className="font-display text-4xl md:text-6xl uppercase mb-6 tracking-tight">
            O Que Você Vai <span className="text-emerald-500">Dominar</span>
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Um passo a passo blindado para você sair do zero e ter seu canal rodando de forma profissional.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={Zap}
            title="Roteiros Magnéticos"
            description="Como criar roteiros limpos, sem marcações confusas, que prendem a atenção do primeiro ao último segundo."
          />
          <FeatureCard 
            icon={Video}
            title="Domínio Visual com IA"
            description="Comandos exatos para gerar imagens de alto impacto e criar animações fluidas que retêm o público."
          />
          <FeatureCard 
            icon={Mic}
            title="Vozes Humanizadas"
            description="Como configurar ferramentas de conversão de texto em voz para soar de forma natural e envolvente."
          />
          <FeatureCard 
            icon={Globe}
            title="Internacionalização"
            description="O segredo para traduzir e adaptar seu conteúdo para qualquer idioma, multiplicando seus ganhos em dólar."
          />
          <FeatureCard 
            icon={ImageIcon}
            title="Thumbnails Explosivas"
            description="Segredos de design e posicionamento de texto para garantir um CTR (taxa de clique) impossível de ignorar."
          />
          <FeatureCard 
            icon={Users}
            title="Comunidade & Suporte"
            description="Acesso a estratégias validadas e suporte para tirar suas dúvidas durante toda a jornada de 30 dias."
          />
        </div>
      </Section>

      {/* 4. Oferta Irresistível e Ancoragem de Preço */}
      <Section id="oferta" className="relative">
        <div className="absolute inset-0 bg-emerald-500/5 blur-[150px] pointer-events-none" />
        
        <div className="bg-zinc-900 border-2 border-emerald-500/30 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 bg-emerald-500 text-black font-display px-6 py-2 rounded-bl-2xl uppercase tracking-widest text-sm">
            Oferta Limitada
          </div>

          <h2 className="font-display text-4xl md:text-7xl uppercase mb-8">
            Tudo Isso Por Apenas <br />
            <span className="text-emerald-500">R$ 47,90</span>
          </h2>

          <div className="max-w-md mx-auto mb-12 space-y-4">
            <div className="flex justify-between text-zinc-500 line-through text-lg">
              <span>Preço Original</span>
              <span>R$ 497,00</span>
            </div>
            <div className="flex justify-between text-emerald-500 font-bold text-2xl">
              <span>Preço Hoje</span>
              <span>R$ 47,90</span>
            </div>
            <div className="h-px bg-zinc-800 w-full" />
            <p className="text-zinc-400 text-sm">
              Você está economizando <strong>R$ 449,10</strong> ao garantir sua vaga agora.
            </p>
          </div>

          <div className="flex flex-col items-center gap-6">
            <a 
              href="https://pay.wiapy.com/YcRxZetYVn"
              className="group relative w-full max-w-md inline-flex items-center justify-center px-8 py-6 font-display text-2xl bg-emerald-500 text-black rounded-2xl hover:bg-emerald-400 transition-all hover:scale-105 active:scale-95 shadow-[0_0_50px_rgba(16,185,129,0.4)]"
            >
              QUERO MEU ACESSO AGORA
              <ArrowRight className="ml-2 w-6 h-6 group-hover:translate-x-1 transition-transform" />
            </a>
            
            <div className="flex flex-wrap justify-center gap-8 mt-4">
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <ShieldCheck className="text-emerald-500 w-5 h-5" />
                Garantia de 7 Dias
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <DollarSign className="text-emerald-500 w-5 h-5" />
                Pagamento Único
              </div>
              <div className="flex items-center gap-2 text-zinc-400 text-sm">
                <Zap className="text-emerald-500 w-5 h-5" />
                Acesso Vitalício
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* 5. Rodapé (Footer) */}
      <footer className="py-12 border-t border-zinc-900 text-center">
        <div className="max-w-5xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="text-left">
              <h3 className="font-display text-2xl uppercase mb-2">Desafio 30 Dias</h3>
              <p className="text-zinc-500 text-sm max-w-xs">
                O guia definitivo para criar, automatizar e monetizar canais dark no YouTube.
              </p>
            </div>
            
            <div className="flex flex-col items-center md:items-end gap-4">
              <div className="flex items-center gap-2 text-zinc-400">
                <ShieldCheck className="w-5 h-5" />
                <span>Satisfação Garantida ou seu Dinheiro de Volta</span>
              </div>
              <p className="text-zinc-600 text-xs uppercase tracking-widest">
                © 2026 Desafio Canais Dark. Todos os direitos reservados.
              </p>
            </div>
          </div>
          
          <div className="mt-12 pt-8 border-t border-zinc-900/50 text-zinc-700 text-[10px] leading-relaxed max-w-3xl mx-auto">
            Este site não faz parte do Google ou do YouTube. Além disso, este site NÃO é endossado pelo Google ou pelo YouTube de qualquer forma. YouTube é uma marca comercial da Google, Inc. Os resultados podem variar de pessoa para pessoa.
          </div>
        </div>
      </footer>
    </div>
  );
}
