import React from "react"
import { Link } from "gatsby"
import logo from "../../images/turbo.png"

export default function Home() {
  return (
    <div>
      <header>
        <img src={logo} alt="Turbo darbai" />
        <nav>
          <Link to="/shop">Shop</Link>
          <Link to="/request-quote">Request a Quote</Link>
          <Link to="/warranty">Warranty</Link>
        </nav>
      </header>

      <section className="hero">
        <h1>Restored & Calibrated Turbochargers</h1>
        <p>Balanced CHRA • VNT calibrated • 6-Month Warranty</p>
      </section>

      <section className="section">
        <h2>Featured Turbos</h2>
        <div className="cards">
          <div className="card">
            <img src="/images/713673-5006S-1.jpg" alt="Turbo 713673-5006S" />
            <h3>Turbo Code: 713673-5006S</h3>
            <p>VW Passat 1.9 TDI • Balanced & Calibrated</p>
            <Link to="/product?id=713673-5006S">View Details</Link>
          </div>
          <div className="card">
            <img src="/images/717858-0007-1.jpg" alt="Turbo 717858-0007" />
            <h3>Turbo Code: 717858-0007</h3>
            <p>Audi A4 2.0 TDI • Ready to Install</p>
            <Link to="/product?id=717858-0007">View Details</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <h2>How It Works</h2>
        <ol>
          <li>We source balanced CHRAs and restore housings</li>
          <li>We calibrate VNT & test every turbo</li>
          <li>We ship with a 6-month warranty</li>
        </ol>
      </section>

      <footer>
        <p>
          © {new Date().getFullYear()} Turbo darbai | Call: +370 638 02118 | 
          Email: turbodarbai@gmail.com
        </p>
      </footer>
    </div>
  )
}
