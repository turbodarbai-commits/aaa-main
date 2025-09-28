// src/pages/index.js
import React from "react"
import { Link } from "gatsby"

const IndexPage = () => (
  <div style={{ maxWidth: 980, margin: "0 auto", padding: 20 }}>
    <header style={{ textAlign: "center", marginBottom: 20 }}>
      <img src="/images/logo-small.png" alt="Turbo darbai" style={{ height: 80 }} />
      <h1>Turbo darbai</h1>
      <p>Restored & calibrated turbochargers — Balanced CHRA • VNT calibrated • 6-month warranty</p>
      <p><strong>Call:</strong> +370 638 02118 • <strong>Email:</strong> turbodarbai@gmail.com</p>
      <nav style={{ marginTop: 10 }}>
        <Link to="/shop" style={{ marginRight: 12 }}>Shop</Link>
        <Link to="/request-quote">Request a Quote</Link>
        <Link to="/warranty" style={{ marginLeft: 12 }}>Warranty</Link>
      </nav>
    </header>

    <main>
      <section>
        <h2>Featured Turbos</h2>
        <div id="featured"></div>
        <p><Link to="/shop">Browse all turbos</Link></p>
      </section>

      <section style={{ marginTop: 30 }}>
        <h2>How it works</h2>
        <ol>
          <li>We source balanced CHRAs and restore housings</li>
          <li>We calibrate VNT & test every turbo</li>
          <li>We ship with a 6-month warranty</li>
        </ol>
      </section>
    </main>
  </div>
)

export default IndexPage
