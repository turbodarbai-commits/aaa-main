import React, { useState } from "react"
import { Link } from "gatsby"
import logo from "../../static/images/turbo.png"

const products = [
  {
    code: "713673-5006S",
    image: "/images/713673-5006S.png",
    desc: "Restored turbo • Balanced CHRA • VNT calibrated • 6-month warranty",
  },
  {
    code: "717858-0007",
    image: "/images/717858-0007.png",
    desc: "Balanced CHRA • 6-month warranty • Ready to install",
  },
  {
    code: "787556-0017",
    image: "/images/787556-0017.png",
    desc: "Restored turbo, balanced, tested",
  },
]

export default function Shop() {
  const [search, setSearch] = useState("")

  const filtered = products.filter(product =>
    product.code.toLowerCase().includes(search.toLowerCase()) ||
    product.desc.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div>
      {/* HEADER */}
      <header className="header">
        <img src={logo} alt="Turbo darbai" className="logo" />
        <nav>
          <Link to="/">Home</Link>
          <Link to="/shop">Shop</Link>
          <Link to="/request-quote">Request a Quote</Link>
          <Link to="/warranty">Warranty</Link>
        </nav>
      </header>

      {/* HERO */}
      <section className="hero">
        <h1>Our Turbocharger Catalog</h1>
        <p>Find the right turbo for your car • Balanced • Calibrated • Tested</p>

        {/* SEARCH BAR */}
        <input
          type="text"
          placeholder="Search by code or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="search-bar"
        />
      </section>

      {/* PRODUCT GRID */}
      <section className="section">
        <h2>Featured Turbos</h2>
        <div className="cards">
          {filtered.map((product) => (
            <div key={product.code} className="card">
              <img
                src={product.image}
                alt={product.code}
                className="product-img"
              />
              <h3>Turbo Code: {product.code}</h3>
              <p>{product.desc}</p>
              <div className="actions">
                <Link to={`/product?id=${product.code}`}>View Details</Link>
                <Link to="/request-quote">Request a Quote</Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer>
        <p>
          © {new Date().getFullYear()} Turbo darbai | Call: +370 638 02118 | 
          Email: turbodarbai@gmail.com
        </p>
      </footer>
    </div>
  )
}
