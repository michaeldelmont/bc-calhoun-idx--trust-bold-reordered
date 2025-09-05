import { fetchListingById } from "@/lib/reso";

export default async function ListingPage({ params }: { params: { id: string } }) {
  const data = await fetchListingById(params.id);
  return (
    <div className="grid" style={{gap:12}}>
      <h1 style={{fontSize:24,fontWeight:600}}>{data?.UnparsedAddress || "Listing"}</h1>
      <div className="disclaimer">{data?.City} {data?.PostalCode}</div>
      <div style={{fontWeight:700,fontSize:20}}>{data?.ListPrice ? `$${data.ListPrice.toLocaleString()}` : "—"}</div>
      <pre className="card" style={{overflow:'auto'}}>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
