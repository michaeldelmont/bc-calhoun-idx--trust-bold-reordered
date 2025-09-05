
import SellForm from '@/components/SellForm';

export default function SellPage() {
  return (
    <main className="container mx-auto max-w-2xl p-6">
      <h1 className="text-2xl font-semibold mb-4">Get Your Home’s Value</h1>
      <SellForm />
    </main>
  );
}


export const metadata = { title: "Sell — Home Valuation" };

export default function SellPage() {
  return (
    <div className="grid" style={{gap:16,maxWidth:720}}>
      <h1 style={{fontSize:24,fontWeight:700}}>Get your home’s value</h1>
      <p className="disclaimer">I’ll prepare a custom valuation for your Calhoun County home—no pressure, no spam.</p>
      <form className="grid" style={{gap:12}} onSubmit={(e)=>e.preventDefault()}>
        <input className="card" placeholder="Street address" required />
        <div className="grid cols-2">
          <input className="card" placeholder="City" required />
          <input className="card" placeholder="ZIP" required />
        </div>
        <input className="card" placeholder="Full name" required />
        <input className="card" placeholder="Email" type="email" required />
        <input className="card" placeholder="Phone" type="tel" />
        <textarea className="card" placeholder="Tell me about your home (updates, features, timing)"></textarea>
        <button className="btn secondary" type="submit">Request valuation</button>
      </form>
      <p className="disclaimer">By submitting, you agree to be contacted about your request. Your info is kept private.</p>
    </div>
  );
}
