import ContactForm from '@/components/ContactForm';

export default function ContactPage() {
  return (
    <main className="container mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Contact Michael Delmont, Realtor®</h1>
      <ContactForm />
    </main>
  );
}

export const metadata = { title: "Contact" };

export default function ContactPage() {
  return (
    <div className="grid" style={{gap:12,maxWidth:720}}>
      <h1 style={{fontSize:24,fontWeight:700}}>Contact</h1>
      <p className="disclaimer">Questions about buying or selling in Battle Creek or elsewhere in Calhoun County? I’m here to help.</p>
      <form className="grid" style={{gap:12}} onSubmit={(e)=>e.preventDefault()}>
        <input className="card" placeholder="Name" required />
        <input className="card" placeholder="Email" type="email" required />
        <textarea className="card" placeholder="How can I help?" required />
        <button className="btn" type="submit">Send</button>
      </form>
    </div>
  );
}


