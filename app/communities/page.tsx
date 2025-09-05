const items = [
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
export default function Communities() {
  return (
    <div>
      <h1 style={{fontSize:24,fontWeight:600,marginBottom:12}}>Communities in Calhoun County</h1>
      <div className="grid cols-3">
        {items.map(x => (
          <a key={x.slug} className="card" href={`/communities/${x.slug}`}>
            <div style={{fontWeight:600}}>{x.label}</div>
            <div className="disclaimer">Market guide & listings</div>
          </a>
        ))}
      </div>
    </div>
  );
}
