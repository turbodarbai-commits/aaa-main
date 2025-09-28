// Example snippet to paste into your page where the products map happens
import React from "react"
import products from "../data/products.json"  // adjust path if needed
import { Link } from "gatsby"

const Shop = () => (
  <div style={{ maxWidth: 1100, margin: "0 auto" }}>
    <h2 style={{ color: "#e63946", marginLeft: 24 }}>Featured Turbos</h2>

    <div className="products-container">
      {products.map(p => (
        <div className="product-card" key={p.id}>
          <div className="product-image-wrap">
            {/* Use /images/... which maps to static/images/ on Netlify */}
            <img
              className="product-img"
              src={p.images && p.images.length ? p.images[0] : "/images/no-image.jpg"}
              alt={p.title}
            />
          </div>

          <h3>Turbo Code: {p.sku}</h3>
          <p style={{ fontSize: "0.9rem", color: "#666", marginBottom: 8 }}>{p.shortDescription}</p>

          <div className="card-footer">
            <Link to={`/product?id=${encodeURIComponent(p.id)}`} style={{ color: "#e63946", textDecoration: "none", fontWeight: "600" }}>
              View Details
            </Link>
            {" • "}
            <a href={`/request-quote?sku=${encodeURIComponent(p.sku)}&title=${encodeURIComponent(p.title)}`} style={{ color: "#333", textDecoration: "none", marginLeft: 8 }}>
              Request a Quote
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
)

export default Shop
