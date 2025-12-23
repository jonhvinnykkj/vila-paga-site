"use client";

import { motion } from "framer-motion";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { MedievalBorder } from "@/components/ui/MedievalBorder";
import { OrnateButton } from "@/components/ui/OrnateButton";
import { FloatingRunes } from "@/components/effects/FloatingRunes";

const events = [
  {
    date: "21 Dez",
    name: "Yule - Solstício de Inverno",
    description: "Celebração do renascimento do Sol e a noite mais longa",
    type: "Sabbat",
  },
  {
    date: "02 Fev",
    name: "Imbolc",
    description: "Festival da luz crescente e purificação",
    type: "Sabbat",
  },
  {
    date: "21 Mar",
    name: "Ostara - Equinócio de Primavera",
    description: "Celebração do equilíbrio e fertilidade",
    type: "Sabbat",
  },
  {
    date: "01 Mai",
    name: "Beltane",
    description: "Festival do fogo sagrado e união",
    type: "Sabbat",
  },
];

export function EventsSection() {
  const { ref, isInView } = useScrollAnimation();

  return (
    <section id="eventos" className="relative py-24 bg-cream-100 overflow-hidden">
      {/* Floating Runes */}
      <FloatingRunes count={8} className="opacity-20" />

      {/* Leaf Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='80' height='80' viewBox='0 0 80 80' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 10C40 10 30 30 40 50C50 30 40 10 40 10Z' fill='none' stroke='%231a4d2e' stroke-width='1'/%3E%3Cpath d='M40 50L40 70' stroke='%231a4d2e' stroke-width='1'/%3E%3C/svg%3E")`,
            backgroundSize: "80px 80px",
          }}
        />
      </div>

      <div ref={ref} className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-display text-4xl md:text-5xl text-earth-900 mb-4">
            Próximos <span className="text-gold-gradient">Eventos</span>
          </h2>
          <p className="font-body text-lg text-earth-600 max-w-xl mx-auto">
            Participe das celebrações da Roda do Ano
          </p>
        </motion.div>

        {/* Events Timeline with Medieval Border */}
        <MedievalBorder variant="full" className="p-6 md:p-10 bg-white/50 backdrop-blur-sm">
          <div className="relative">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-gold-400 via-gold-400 to-transparent hidden md:block" />

          <div className="space-y-8">
            {events.map((event, index) => (
              <motion.div
                key={event.name}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Event Card */}
                <div
                  className={`w-full md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? "md:pr-8" : "md:pl-8"
                  }`}
                >
                  <div className="group bg-white rounded-xl p-6 shadow-lg shadow-earth-900/5 border border-cream-300 hover:border-gold-400/50 hover:shadow-xl transition-all">
                    <div className="flex items-start gap-4">
                      {/* Date Box */}
                      <div className="flex-shrink-0 w-16 h-16 bg-gradient-to-br from-forest-800 to-forest-900 rounded-lg flex flex-col items-center justify-center text-cream-100 group-hover:shadow-lg group-hover:shadow-gold-400/20 transition-shadow">
                        <span className="font-display text-xl font-bold leading-none">
                          {event.date.split(" ")[0]}
                        </span>
                        <span className="font-body text-xs uppercase">
                          {event.date.split(" ")[1]}
                        </span>
                      </div>

                      {/* Content */}
                      <div className="flex-1">
                        <span className="inline-block px-2 py-0.5 bg-gold-400/20 text-gold-500 text-xs font-display uppercase tracking-wider rounded mb-2">
                          {event.type}
                        </span>
                        <h3 className="font-display text-lg text-earth-900 mb-1 group-hover:text-forest-700 transition-colors">
                          {event.name}
                        </h3>
                        <p className="font-body text-sm text-earth-600">
                          {event.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center Dot */}
                <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-gold-400 border-4 border-cream-100 shadow-lg hidden md:block" />
              </motion.div>
            ))}
            </div>
          </div>
        </MedievalBorder>

        {/* View All Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
          className="text-center mt-12"
        >
          <OrnateButton href="#eventos">
            Ver todos os eventos
          </OrnateButton>
        </motion.div>
      </div>
    </section>
  );
}
