import "jsr:@supabase/functions-js/edge-runtime.d.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization, X-Client-Info, Apikey",
};

const SYSTEM_PROMPT = `You are the BBC (British Board of Coaching) virtual assistant. You help visitors with questions about coaching programs, accreditation, CPD, membership, coaching certifications, and how to become a coach or find coaching.

Key facts about BBC:
- BBC offers three institutional pathways: Certified BBC Trainer, School/Academy Accreditation, and Curriculum Certification.
- Coaching qualifications: Associate Certified Coach (ACC), Professional Certified Coach (PCQ), and Master Certified Coach (MCQ), aligned with ICF standards.
- BBC offers CPD (Continuing Professional Development) programs, community membership, resources, and a coaching summit.
- Visitors can apply to become a coach, get coaching, or verify credentials on the website.

Guidelines:
- Be warm, professional, and concise.
- Answer in plain language; avoid jargon.
- If you don't know something specific (like exact pricing or dates), suggest the visitor use the contact form on the website.
- Keep responses short — a few sentences unless the question needs more detail.
- Never invent prices, dates, or policies. If unsure, say so and point them to contact.`;

Deno.serve(async (req: Request) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { status: 200, headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();

    if (!Array.isArray(messages)) {
      return new Response(
        JSON.stringify({ error: "messages must be an array" }),
        { status: 400, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const apiKey = Deno.env.get("ANTHROPIC_API_KEY");
    if (!apiKey) {
      return new Response(
        JSON.stringify({ error: "AI service not configured" }),
        { status: 503, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const anthropicMessages = messages
      .filter((m: { role: string; content: string }) => m.role && m.content)
      .slice(-12)
      .map((m: { role: string; content: string }) => ({
        role: m.role === "assistant" ? "assistant" : "user",
        content: m.content,
      }));

    const response = await fetch("https://api.anthropic.com/v1/messages", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
        "anthropic-version": "2023-06-01",
      },
      body: JSON.stringify({
        model: "claude-3-5-haiku-20241022",
        max_tokens: 512,
        system: SYSTEM_PROMPT,
        messages: anthropicMessages,
      }),
    });

    if (!response.ok) {
      const errText = await response.text();
      return new Response(
        JSON.stringify({ error: "AI request failed" }),
        { status: 502, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    const data = await response.json();
    const reply = data.content?.[0]?.text || "I'm sorry, I couldn't generate a response.";

    return new Response(
      JSON.stringify({ reply }),
      { headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  } catch (err) {
    return new Response(
      JSON.stringify({ error: "Something went wrong" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
