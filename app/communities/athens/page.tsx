export const metadata = { title: "Athens Homes — Battle Creek & Calhoun County" };

export default function Page() {
  const city = "Athens";
  const query = encodeURIComponent(city);
  return (
    <div className="grid" style={{gap:16}}>
      <h1 style={{fontSize:24,fontWeight:700}}>Athens Homes</h1>
      <p className="disclaimer">Live market overview, active listings, and local insights for Athens.</p>
      <div className="card">
        <h2 style={{marginTop:0}}>Search Athens Listings</h2>
        <a className="btn secondary" href={`/search?q=${query}`}>View Athens listings</a>
      </div>
      <div className="card">
        <h2 style={{marginTop:0}}>Thinking of selling in Athens?</h2>
        <p>Get a custom price opinion that accounts for condition, upgrades, and location—not just an automated estimate.</p>
        <a className="btn" href="/sell">Get your value</a>
      </div>
    </div>
  );
}