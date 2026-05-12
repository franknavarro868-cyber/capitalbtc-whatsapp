import { NextRequest, NextResponse } from "next/server"

const PIXEL_ID = process.env.NEXT_PUBLIC_META_PIXEL_ID || "25932062093148144"
const ACCESS_TOKEN = process.env.META_ACCESS_TOKEN

interface MetaEventData {
  event_name: string
  event_time: number
  action_source: string
  event_source_url: string
  event_id: string
  user_data: {
    client_ip_address?: string
    client_user_agent?: string
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const { event_id, event_source_url } = body

    if (!ACCESS_TOKEN) {
      console.error("META_ACCESS_TOKEN is not configured")
      return NextResponse.json(
        { error: "Server configuration error" },
        { status: 500 }
      )
    }

    if (!event_id) {
      return NextResponse.json(
        { error: "event_id is required" },
        { status: 400 }
      )
    }

    // Get client info from headers
    const clientIp =
      request.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
      request.headers.get("x-real-ip") ||
      ""
    const userAgent = request.headers.get("user-agent") || ""

    const eventData: MetaEventData = {
      event_name: "Lead",
      event_time: Math.floor(Date.now() / 1000),
      action_source: "website",
      event_source_url: event_source_url || "",
      event_id: event_id,
      user_data: {
        client_ip_address: clientIp,
        client_user_agent: userAgent,
      },
    }

    const response = await fetch(
      `https://graph.facebook.com/v18.0/${PIXEL_ID}/events`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          data: [eventData],
          access_token: ACCESS_TOKEN,
        }),
      }
    )

    const result = await response.json()

    if (!response.ok) {
      console.error("Meta CAPI error:", result)
      return NextResponse.json(
        { error: "Failed to send event to Meta" },
        { status: response.status }
      )
    }

    return NextResponse.json({ success: true, result })
  } catch (error) {
    console.error("Meta CAPI route error:", error)
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    )
  }
}
