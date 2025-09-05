'use client';

import { useState } from 'react';

type Status = { ok: boolean; message: string };

export default function SellForm() {
  const [status, setStatus] = useState<Status | null>(null);
  const [pending, setPending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus(null);
    setPending(true);

    const form = e.currentTarget;
    const formData = new FormData(form);

    if (formData.get('website')) { // honeypot
      setPending(false);
      form.reset();
      setStatus({ ok: true, message: 'Thanks! We’ll be in touch.' });
      return;
    }

    const address = String(formData.get('address') || '').trim();
    const name = String(formData.get('name') || '').trim();
    const email = String(formData.get('email') || '').trim();

    if (!address || !name || !email) {
      setPending(false);
      setStatus({ ok: false, message: 'Please fill in address, name, and email.' });
      return;
    }

    try {
      const res = await fetch('/api/sell', { method: 'POST', body: formData });
      if (!res.ok) throw new Error(await res.text());
      setStatus({ ok: true, message: 'Got it! I’ll follow up with a pricing plan.' });
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
        <label htmlFor="address" className="block text-sm font-medium">Property Address *</label>
        <input id="address" name="address" required placeholder="123 Main St, Battle Creek, MI" className="w-full border rounded p-2" />
      </div>

      <div className="grid" style={{ gap: 8 }}>
        <div>
          <label htmlFor="beds" className="block text-sm font-medium">Beds</label>
          <input id="beds" name="beds" inputMode="numeric" placeholder="e.g., 3" className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="baths" className="block text-sm font-medium">Baths</label>
          <input id="baths" name="baths" inputMode="decimal" placeholder="e.g., 2" className="w-full border rounded p-2" />
        </div>
        <div>
          <label htmlFor="sqft" className="block text-sm font-medium">Square Feet</label>
          <input id="sqft" name="sqft" inputMode="numeric" placeholder="e.g., 1800" className="w-full border rounded p-2" />
        </div>
      </div>

      <div>
        <label htmlFor="name" className="block text-sm font-medium">Your Name *</label>
        <input id="name" name="name" required className="w-full border rounded p-2" />
      </div>

      <div>
        <label htmlFor="email" className="block text-sm font-medium">Email *</label>
        <input id="email" name="email" type="email" required className="w-full border rounded p-2" />
      </div>

      <div>
        <label htmlFor="phone" className="block text-sm font-medium">Phone</label>
        <input id="phone" name="phone" className="w-full border rounded p-2" />
      </div>

      <div>
        <label htmlFor="notes" className="block text-sm font-medium">Notes</label>
        <textarea id="notes" name="notes" rows={4} className="w-full border rounded p-2" />
      </div>

      {/* Honeypot */}
      <input
        type="text" name="website" tabIndex={-1} autoComplete="off"
        style={{ position: 'absolute', left: '-9999px', opacity: 0, height: 0, width: 0 }}
        aria-hidden="true"
      />

      <button type="submit" className="rounded bg-black text-white px-4 py-2 disabled:opacity-60" disabled={pending}>
        {pending ? 'Submitting…' : 'Get My Home Value'}
      </button>

      {status && (
        <p className={status.ok ? 'text-green-700' : 'text-red-700'} role="status">
          {status.message}
        </p>
      )}
    </form>
  );
}
