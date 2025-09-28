import React from "react"
import { Link } from "gatsby"

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
  return (
    <div className="shop-container">
      <h1 style={{ textAlign: "center", marginBottom: "32px", color: "#c1002b" }}>
        Featured Turbos
      </h1>
      <div className="shop-grid">
        {products.map((product) => (
          <div key={product.code} className="shop-card">
            <div className="product-image-wrap">
              <img
                src={product.image}
                alt={product.code}
                className="product-img"
              />
            </div>
            <h3>Turbo Code: {product.code}</h3>
            <p>{product.desc}</p>
            <div className="actions">
              <Link to={`/product?id=${product.code}`}>View Details</Link>
              <Link to="/request-quote">Request a Quote</Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
