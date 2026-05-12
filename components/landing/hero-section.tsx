"use client"

import { MessageCircle, Bot, ArrowRight, Flame, Check } from "lucide-react"

const WHATSAPP_LINK = "https://wa.me/1234567890?text=Hola!%20Quiero%20unirme%20al%20canal%20de%20trading"

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col bg-[#0a0a0a]">
      {/* Header */}
      <header className="flex items-center justify-between px-6 py-4">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[#25D366] rounded-lg flex items-center justify-center">
            <MessageCircle className="w-5 h-5 text-black" />
          </div>
          <span className="text-white font-semibold text-lg">CapitalBTC</span>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2 text-sm text-gray-400">
            <span className="w-2 h-2 bg-[#25D366] rounded-full animate-pulse" />
            <span>142 personas viendo</span>
          </div>
          <div className="flex items-center gap-1.5 bg-red-500/20 border border-red-500/50 rounded-full px-3 py-1">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-red-500 text-xs font-semibold">EN VIVO</span>
          </div>
        </div>
      </header>

      {/* Main content */}
      <div className="flex-1 flex items-center justify-center px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Urgency badge */}
          <div className="inline-flex items-center gap-2 bg-[#25D366]/20 border border-[#25D366]/50 rounded-full px-5 py-2.5 mb-8">
            <Flame className="w-4 h-4 text-[#25D366]" />
            <span className="text-[#25D366] font-semibold text-sm tracking-wide">
              SOLO 23 CUPOS - CERRAMOS HOY
            </span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-2 leading-tight">
            El Primer Club de Trading
          </h1>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#25D366] mb-6">
            Impulsado por IA
          </h2>

          {/* Subheading */}
          <p className="text-lg text-gray-400 mb-10">
            Robots auditados operando <span className="text-[#25D366] font-semibold">24/7</span> y senales premium directo a tu WhatsApp
          </p>

          {/* Stats boxes */}
          <div className="flex justify-center gap-1 mb-8">
            <div className="bg-[#111111] border border-[#222222] rounded-l-xl px-8 py-5 min-w-[140px]">
              <div className="text-3xl md:text-4xl font-bold text-[#25D366]">+234%</div>
              <div className="text-xs text-gray-500 mt-1">Rendimiento<br />Auditado</div>
            </div>
            <div className="bg-[#111111] border-y border-[#222222] px-8 py-5 min-w-[140px]">
              <div className="text-3xl md:text-4xl font-bold text-white">89%</div>
              <div className="text-xs text-gray-500 mt-1">Win Rate</div>
            </div>
            <div className="bg-[#111111] border border-[#222222] rounded-r-xl px-8 py-5 min-w-[140px]">
              <div className="text-3xl md:text-4xl font-bold text-[#25D366]">2,847</div>
              <div className="text-xs text-gray-500 mt-1">Miembros VIP</div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col gap-3 max-w-md mx-auto mb-6">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-lg py-4 px-8 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)]"
            >
              <MessageCircle className="w-5 h-5" />
              ACCEDER AL CANAL GRATIS
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-[#111111] hover:bg-[#1a1a1a] text-white font-medium text-lg py-4 px-8 rounded-xl border border-[#333333] transition-all duration-300"
            >
              <Bot className="w-5 h-5" />
              Quiero mi Robot de Trading
            </a>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-500 mb-8">
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#25D366]" />
              100% Gratis
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#25D366]" />
              Sin Tarjeta
            </span>
            <span className="flex items-center gap-2">
              <Check className="w-4 h-4 text-[#25D366]" />
              Acceso Inmediato
            </span>
          </div>

          {/* Social proof avatars */}
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="flex -space-x-2">
              <div className="w-9 h-9 rounded-full bg-orange-500 border-2 border-[#0a0a0a] flex items-center justify-center text-sm font-bold text-white">
                C
              </div>
              <div className="w-9 h-9 rounded-full bg-emerald-500 border-2 border-[#0a0a0a] flex items-center justify-center text-sm font-bold text-white">
                A
              </div>
              <div className="w-9 h-9 rounded-full bg-blue-500 border-2 border-[#0a0a0a] flex items-center justify-center text-sm font-bold text-white">
                M
              </div>
              <div className="w-9 h-9 rounded-full bg-[#25D366] border-2 border-[#0a0a0a] flex items-center justify-center text-sm font-bold text-black">
                +
              </div>
            </div>
            <span className="text-sm text-gray-500">
              <span className="text-white font-medium">+47 personas</span> se unieron en las ultimas 24h
            </span>
          </div>

          {/* Live indicator */}
          <div className="flex items-center justify-center gap-2 text-red-400">
            <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm">
              El robot esta operando AHORA. No esperes a que sea tarde.
            </span>
          </div>
        </div>
      </div>

      {/* Footer disclaimer */}
      <footer className="text-center py-4 px-4">
        <p className="text-xs text-gray-600">
          Trading conlleva riesgos. Resultados pasados no garantizan futuros.
        </p>
      </footer>
    </section>
  )
}
