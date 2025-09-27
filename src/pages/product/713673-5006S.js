// src/pages/product.js
import React from "react"
import queryString from "query-string"
import products from "../data/products.json"

const ProductPage = ({ location }) => {
  const params = queryString.parse(location.search)
  const id = params.id
  const product = products.find(p => p.id === id)
  if (!product) return <div>Product not found</div>
  return (
    <div style={{ maxWidth: 900, margin: "0 auto", padding: 20 }}>
      <h1>{product.title}</h1>
      <img src={product.images[0]} alt={product.title} style={{ width: 400, height: 300, objectFit: "contain" }} />
      <p>{product.fullDescription}</p>
      <p><strong>Turbo Code:</strong> {product.sku}</p>
      <a href={`/request-quote?sku=${encodeURIComponent(product.sku)}&title=${encodeURIComponent(product.title)}`}>Request a Quote</a>
    </div>
  )
}

export default ProductPage
