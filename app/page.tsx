import brand from '../brand.config.json';

const communities = [
  { slug: "battle-creek", label: "Battle Creek" },
  { slug: "lakeview", label: "Lakeview" },
  { slug: "marshall", label: "Marshall" },
  { slug: "albion", label: "Albion" },
  { slug: "springfield", label: "Springfield" },
  { slug: "bedford-township", label: "Bedford Township" },
  { slug: "pennfield-township", label: "Pennfield Township" },
  { slug: "emmett-township", label: "Emmett Township" },
  { slug: "athens", label: "Athens" },
  { slug: "tekonsha", label: "Tekonsha" },
  { slug: "homer", label: "Homer" }
];

export default function Home() {
  return (
    <div className="grid" style={{gap:24}}>
      <section className="hero">
        <div style={{display:'grid',gridTemplateColumns:'1.2fr .8fr',gap:24,alignItems:'center'}}>
          <div>
            <h1>Battle Creek & Calhoun County Home Search</h1>
            <p>Instant search, saved favorites & alerts, plus local guides written by {brand.brandName}.</p>
            <div style={{display:'flex',gap:12}}>
              <a className="btn secondary" href="/search">Start Searching</a>
              <a className="btn" href="/sell">Get Your Home Value</a>
            </div>
          </div>
          <div className="card" style={{color:'var(--neutral-dark)', background:'#fff'}}>
            <div className="brand-row" style={{marginBottom:12}}>
              <img src={brand.headshotUrl} alt="Headshot" style={{height:64,width:64,borderRadius:12,objectFit:'cover'}} />
              <div>
                <div style={{fontWeight:600}}>{brand.brandName}</div>
                <div className="badge">{brand.brokerageName}</div>
              </div>
            </div>
            <p className="disclaimer">Focused on Calhoun County buyers & sellers—Battle Creek, Lakeview, Marshall, Albion, Tekonsha and more.</p>
            <a className="btn" href="/contact">Book a Call</a>
          </div>
        </div>
      </section>

      <section>
        <h2 style={{fontSize:22,margin:'0 0 12px', color:'var(--neutral-dark)'}}>Popular Communities</h2>
        <div className="grid cols-3">
          {communities.map(c => (
            <a key={c.slug} className="card" href={`/communities/${c.slug}`}>
              <div style={{fontWeight:600}}>{c.label}</div>
              <div className="disclaimer">Guides • Market stats • Active listings</div>
            </a>
          ))}
        </div>
      </section>
    </div>
  );
}
