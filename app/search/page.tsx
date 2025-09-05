"use client";
import { useEffect, useState } from "react";

type Listing = {
  ListingKey: string;
  ListingId?: string;
  StandardStatus?: string;
  UnparsedAddress?: string;
  City?: string;
  PostalCode?: string;
  ListPrice?: number;
  BedroomsTotal?: number;
  BathroomsTotalInteger?: number;
  LivingArea?: number;
};

export default function SearchPage() {
  const [q, setQ] = useState<string>("Battle Creek");
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<Listing[]>([]);

  async function runSearch() {
    setLoading(true);
    const res = await fetch(`/api/listings/search?q=${encodeURIComponent(q)}`);
    const json = await res.json();
    setData(json.results || []);
    setLoading(false);
  }

  useEffect(() => { runSearch(); }, []);

  return (
    <div className="grid" style={{gap:16}}>
      <h1 style={{fontSize:24,fontWeight:600}}>Search Homes</h1>
      <div style={{display:'flex',gap:8}}>
        <input className="card" style={{flex:1}} placeholder="City, neighborhood, address…" value={q} onChange={(e)=>setQ(e.target.value)} onKeyDown={(e)=>e.key==='Enter'&&runSearch()} />
        <button className="btn secondary" onClick={runSearch}>{loading ? "Searching…" : "Search"}</button>
      </div>
      <ul className="grid cols-2">
        {data.map(l => (
          <li key={l.ListingKey} className="card">
            <div style={{fontWeight:600}}>{l.UnparsedAddress || "Address withheld"}</div>
            <div className="disclaimer">{l.City} {l.PostalCode} • {l.StandardStatus || "Active"}</div>
            <div style={{fontWeight:700,fontSize:18,marginTop:8}}>{l.ListPrice ? `$${l.ListPrice.toLocaleString()}` : "—"}</div>
            <div className="disclaimer">{l.BedroomsTotal ?? "—"} bd • {l.BathroomsTotalInteger ?? "—"} ba • {l.LivingArea ?? "—"} sqft</div>
            <a className="btn" style={{marginTop:12}} href={`/listing/${encodeURIComponent(l.ListingKey)}`}>View Details</a>
          </li>
        ))}
      </ul>
    </div>
  );
}
