export const metadata = { title: "Bedford Township Homes — Battle Creek & Calhoun County" };

export default function Page() {
  const city = "Bedford Township";
  const query = encodeURIComponent(city);
  return (
    <div className="grid" style={{gap:16}}>
      <h1 style={{fontSize:24,fontWeight:700}}>Bedford Township Homes</h1>
      <p className="disclaimer">Live market overview, active listings, and local insights for Bedford Township.</p>
      <div className="card">
        <h2 style={{marginTop:0}}>Search Bedford Township Listings</h2>
        <a className="btn secondary" href={`/search?q=${query}`}>View Bedford Township listings</a>
      </div>
      <div className="card">
        <h2 style={{marginTop:0}}>Thinking of selling in Bedford Township?</h2>
        <p>Get a custom price opinion that accounts for condition, upgrades, and location—not just an automated estimate.</p>
        <a className="btn" href="/sell">Get your value</a>
      </div>
    </div>
  );
}