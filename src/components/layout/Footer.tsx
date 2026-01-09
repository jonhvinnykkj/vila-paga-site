"use client";

import { motion } from "framer-motion";
import { Pentagram } from "@/components/ui/Pentagram";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-earth-900 text-cream-200 overflow-hidden">
      {/* Top Decorative Border */}
      <div className="h-1 bg-gradient-to-r from-forest-700 via-gold-400 to-forest-700" />

      {/* Main Footer Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Brand Column */}
          <div className="md:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <Pentagram size={40} color="#d4af37" animated={false} strokeWidth={1.5} />
              <div>
                <h3 className="font-display text-xl text-gold-400">Vila Pagã</h3>
                <p className="font-body text-xs text-cream-400">Piauí - Brasil</p>
              </div>
            </div>
            <p className="font-body text-sm text-cream-400 leading-relaxed">
              Um refúgio sagrado dedicado às tradições pagãs, espiritualidade e
              conexão profunda com a natureza.
            </p>
          </div>

          {/* Navigation Column */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-gold-400 mb-4">
              Navegação
            </h4>
            <ul className="space-y-2">
              {["Home", "Atrativos", "Visite", "Eventos"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase()}`}
                    className="font-body text-sm text-cream-400 hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Column */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-gold-400 mb-4">
              Recursos
            </h4>
            <ul className="space-y-2">
              {["Círculo Piaga", "Biblioteca", "Mapa", "Vídeos"].map((item) => (
                <li key={item}>
                  <a
                    href={`#${item.toLowerCase().replace(" ", "-")}`}
                    className="font-body text-sm text-cream-400 hover:text-gold-400 transition-colors"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-display text-sm uppercase tracking-wider text-gold-400 mb-4">
              Newsletter
            </h4>
            <p className="font-body text-sm text-cream-400 mb-4">
              Receba novidades sobre eventos e celebrações.
            </p>
            <form className="flex gap-2" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Seu email"
                className="flex-1 px-3 py-2 bg-earth-800 border border-earth-700 rounded text-sm text-cream-100 placeholder:text-cream-500 focus:outline-none focus:border-gold-400 transition-colors"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-gold-400 text-earth-900 rounded font-display text-sm uppercase tracking-wider hover:bg-gold-300 transition-colors"
              >
                Ok
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-earth-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            {/* Copyright */}
            <p className="font-body text-xs text-cream-500">
              © {currentYear} Vila Pagã. Todos os direitos reservados.
            </p>

            {/* Decorative Element */}
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-earth-700" />
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              >
                <svg className="w-4 h-4 text-gold-400/50" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2L14.5 9.5L22 12L14.5 14.5L12 22L9.5 14.5L2 12L9.5 9.5L12 2Z" />
                </svg>
              </motion.div>
              <div className="w-8 h-px bg-earth-700" />
            </div>

            {/* Legal Links */}
            <div className="flex items-center gap-4 text-xs">
              <a href="#" className="text-cream-500 hover:text-gold-400 transition-colors">
                Privacidade
              </a>
              <span className="text-earth-700">•</span>
              <a href="#" className="text-cream-500 hover:text-gold-400 transition-colors">
                Termos
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Background Decoration */}
      <div className="absolute bottom-0 left-0 right-0 h-32 pointer-events-none opacity-5">
        <svg className="w-full h-full" viewBox="0 0 1200 100" preserveAspectRatio="none">
          <path
            d="M0 100 Q300 50 600 80 T1200 100 V100 H0 Z"
            fill="currentColor"
            className="text-forest-700"
          />
        </svg>
      </div>
    </footer>
  );
}
