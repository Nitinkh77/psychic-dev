export type ContactPayload = { name: string; phone: string; email: string; service: string; message: string };
// Backend-ready: replace the body with fetch("/api/contact", { method:"POST", body: JSON.stringify(p) })
export async function submitContactForm(p: ContactPayload): Promise<{ ok: boolean }> {
  await new Promise(r => setTimeout(r, 900)); console.info("contact (simulated)", p); return { ok: true };
}

// Backend-ready: replace with fetch("/api/callback", { method:"POST", body: JSON.stringify({ phone }) })
export async function requestCallback(phone: string): Promise<{ ok: boolean }> {
  await new Promise(r => setTimeout(r, 700)); console.info("callback (simulated)", phone); return { ok: true };
}
