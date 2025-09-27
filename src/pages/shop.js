// src/pages/shop.js
import React from "react"
import products from "../data/products.json"
import { Link } from "gatsby"

const Shop = () => (
  <div style={{ maxWidth: 1000, margin: "0 auto", padding: 20 }}>
    <h1>Our Turbos</h1>
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(280px,1fr))", gap: 16 }}>
      {products.map(p => (
        <div key={p.id} style={{ border: "1px solid #eee", padding: 12 }}>
          <img src={p.images[0]} alt={p.title} style={{ width: "100%", height: 200, objectFit: "contain" }} />
          <h3>{p.title}</h3>
          <p>{p.shortDescription}</p>
          <p><strong>Turbo Code:</strong> {p.sku}</p>
          <Link to={`/product/${p.id}`}>View details</Link>
          {" | "}
          <a href={`/request-quote?sku=${encodeURIComponent(p.sku)}&title=${encodeURIComponent(p.title)}`}>Request a Quote</a>
        </div>
      ))}
    </div>
  </div>
)

export default Shop
