const BASE = process.env.RESO_BASE_URL;
const TOKEN = process.env.RESO_TOKEN;
const PROVIDER = process.env.RESO_PROVIDER || "spark";

async function odata(path: string, params: Record<string, string | number> = {}) {
  if (!BASE || !TOKEN) return { value: mockListings };
  const url = new URL(path, BASE.endsWith("/") ? BASE : BASE + "/");
  Object.entries(params).forEach(([k, v]) => url.searchParams.set(k, String(v)));
  const headers: Record<string, string> = { "Authorization": `Bearer ${TOKEN}` };
  const res = await fetch(url.toString(), { method: "GET", headers, cache: "no-store" });
  if (!res.ok) throw new Error(await res.text());
  return res.json();
}

export async function searchListings(q: string) {
  if (!BASE || !TOKEN) return mockListings;
  const filter = q ? `contains(City,'${q}') or contains(UnparsedAddress,'${q}')` : "StandardStatus eq 'Active'";
  const data = await odata("Property", {
    "$top": 24,
    "$orderby": "ModificationTimestamp desc",
    "$select": "ListingKey,ListingId,StandardStatus,UnparsedAddress,City,PostalCode,ListPrice,BedroomsTotal,BathroomsTotalInteger,LivingArea",
    "$filter": filter
  });
  return data.value ?? [];
}

export async function fetchListingById(id: string) {
  if (!BASE || !TOKEN) return mockListings.find(x => x.ListingKey === id);
  const data = await odata("Property", { "$top": 1, "$filter": `ListingKey eq '${id}'` });
  return (data.value && data.value[0]) || null;
}

const mockListings = [
  { ListingKey: "BC-1001", ListingId: "2300001", StandardStatus: "Active", UnparsedAddress: "123 Lakeview Dr", City: "Battle Creek", PostalCode: "49015", ListPrice: 275000, BedroomsTotal: 3, BathroomsTotalInteger: 2, LivingArea: 1600 },
  { ListingKey: "BC-1002", ListingId: "2300002", StandardStatus: "Active", UnparsedAddress: "456 Maple St", City: "Marshall", PostalCode: "49068", ListPrice: 329900, BedroomsTotal: 4, BathroomsTotalInteger: 2, LivingArea: 2050 },
  { ListingKey: "BC-1003", ListingId: "2300003", StandardStatus: "Active", UnparsedAddress: "789 Capital Ave NE", City: "Battle Creek", PostalCode: "49017", ListPrice: 189900, BedroomsTotal: 3, BathroomsTotalInteger: 1, LivingArea: 1240 }
];
