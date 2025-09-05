'use client';

import { useState } from 'react';

type Status = { ok: boolean; message: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get('company')) { // honeypot
      setPending(false);
      form.reset();
      setStatus({ ok: true, message: 'Thanks! We’ll be in touch.' });
      return;
    }

    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();
    const message = String(formData.get('message') || '').trim();
    if (!name || !email || !message) {
      setPending(false);
      setStatus({ ok: false, message: 'Please complete all required fields.' });
      return;
    }

    try {
      const res = await fetch('/api/contact', { method: 'POST', body: formData });
      if (!res.ok) throw new Error(await res.text());
      setStatus({ ok: true, message: 'Thanks! We’ll be in touch.' });
      form.reset();
    } catch (err: any) {
      setStatus({ ok: false, message: err?.message ?? 'Something went wrong.' });
    } finally {
      setPending(false);
    }
  }

  return (
    <form className="grid" style={{ gap: 12 }} onSubmit={onSubmit} noValidate>
      <div>
        <label htmlFor="name" className="block text-sm font-medium">Name *</label>
        <input id="name" name="name" required placeholder="Your name" className="w-full border rounded p-2" />
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email *</label>
        <input id="email" name="email" type="email" required placeholder="you@example.com" className="w-full border rounded p-2" />
      </div>
      <div>
        <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
        <input id="phone" name="phone" placeholder="(optional)" className="w-full border rounded p-2" />
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium">How can I help? *</label>
        <textarea id="message" name="message" required rows={5} className="w-full border rounded p-2" />
      </div>

      {/* Honeypot (hidden) */}
      <input
        type="text" name="company" tabIndex={-1} autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
        aria-hidden="true"
      />

      <button type="submit" className="rounded bg-black text-white px-4 py-2 disabled:opacity-60" disabled={pending}>
        {pending ? 'Sending…' : 'Send'}
      </button>

      {status && (
        <p className={status.ok ? 'text-green-700' : 'text-red-700'} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
