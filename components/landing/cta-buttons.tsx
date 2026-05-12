"use client"

import { trackLeadEvent } from "@/components/meta-pixel"

const WHATSAPP_LINK = "https://wa.link/chejub"

function generateEventId() {
  return `lead_${Date.now()}_${Math.random().toString(36).substring(2, 9)}`
}

async function handleCtaClick() {
  const eventId = generateEventId()
  const eventSourceUrl = typeof window !== "undefined" ? window.location.href : ""

  trackLeadEvent(eventId)

  try {
    await fetch("/api/meta-lead", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        event_id: eventId,
        event_source_url: eventSourceUrl,
      }),
    })
  } catch (error) {
    console.error("Failed to send CAPI event:", error)
  }
}

export function CtaButtons() {
  return (
    <div className="flex flex-col gap-3 max-w-md mx-auto mb-6 px-2">
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCtaClick}
        className="flex items-center justify-center gap-2 sm:gap-3 bg-[#25D366] hover:bg-[#20bd5a] text-black font-bold text-base sm:text-lg py-4 px-4 sm:px-8 rounded-xl transition-all duration-300 shadow-[0_0_30px_rgba(37,211,102,0.3)] hover:shadow-[0_0_40px_rgba(37,211,102,0.5)] w-full"
      >
        <svg className="w-5 h-5 shrink-0" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
          <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/>
        </svg>
        <span className="whitespace-nowrap">ACCEDER AL CANAL GRATIS</span>
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-7-7l7 7-7 7"/>
        </svg>
      </a>
      <a
        href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        onClick={handleCtaClick}
        className="flex items-center justify-center gap-2 sm:gap-3 bg-[#111111] hover:bg-[#1a1a1a] text-white font-medium text-base sm:text-lg py-4 px-4 sm:px-8 rounded-xl border border-[#333333] transition-all duration-300 w-full"
      >
        <svg className="w-5 h-5 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 2a4 4 0 0 1 4 4v1a3 3 0 0 0 3 3 1 1 0 0 1 1 1v2a1 1 0 0 1-1 1 3 3 0 0 0-3 3v1a4 4 0 0 1-8 0v-1a3 3 0 0 0-3-3 1 1 0 0 1-1-1v-2a1 1 0 0 1 1-1 3 3 0 0 0 3-3V6a4 4 0 0 1 4-4z"/>
          <circle cx="12" cy="9" r="2"/>
        </svg>
        <span>Quiero mi Robot de Trading</span>
      </a>
    </div>
  )
}
