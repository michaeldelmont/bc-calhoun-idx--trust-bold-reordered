import './globals.css';
import brand from '../brand.config.json';

export const metadata = {
  title: `Battle Creek & Calhoun County Real Estate — ${brand.brandName}`,
  description: "Fast, SEO-friendly home search, seller tools, and local guides for Calhoun County, MI."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <header>
          <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center'}}>
            <div className="brand-row">
              <img src={brand.logoUrl} alt={brand.brandName} />
              <span className="logo">{brand.brandName}</span>
            </div>
            <nav>
              <a href="/search">Search</a>
              <a href="/communities">Communities</a>
              <a href="/sell">Sell</a>
              <a href="/contact">Contact</a>
            </nav>
          </div>
        </header>
        <main className="container">{children}</main>
        <footer>
          <div className="container">
            <div className="brand-row" style={{justifyContent:'space-between'}}>
              <div>
                <div className="disclaimer">© {new Date().getFullYear()} {brand.brandName}. All Rights Reserved.</div>
                <div className="disclaimer">Equal Housing Opportunity. REALTOR® is a registered collective membership mark of the National Association of REALTORS®.</div>
              </div>
              <img src={brand.brokerLogoUrl} alt={brand.brokerageName} />
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
