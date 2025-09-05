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
