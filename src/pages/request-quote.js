// src/pages/request-quote.js
import React, { useEffect, useState } from "react"
import queryString from "query-string"

const RequestQuote = ({ location }) => {
  const [sku, setSku] = useState("")
  const [title, setTitle] = useState("")

  useEffect(() => {
    const params = queryString.parse(location.search)
    if (params.sku) setSku(params.sku)
    if (params.title) setTitle(params.title)
  }, [location.search])

  return (
    <div style={{ maxWidth: 700, margin: "0 auto", padding: 20 }}>
      <h1>Request a Quote</h1>

      {/* Netlify form - data-netlify attr needed */}
      <form name="quote-request" method="POST" data-netlify="true" netlify-honeypot="bot-field">
        <input type="hidden" name="form-name" value="quote-request" />
        <p style={{ display: "none" }}>
          <label>Don’t fill: <input name="bot-field" /></label>
        </p>

        <p>
          <label>Product: <input type="text" name="product" value={title} onChange={e => setTitle(e.target.value)} /></label>
        </p>
        <p>
          <label>SKU: <input type="text" name="sku" value={sku} onChange={e => setSku(e.target.value)} /></label>
        </p>
        <p>
          <label>Your name: <input type="text" name="name" required /></label>
        </p>
        <p>
          <label>Email: <input type="email" name="email" required /></label>
        </p>
        <p>
          <label>Phone: <input type="text" name="phone" /></label>
        </p>
        <p>
          <label>Message: <textarea name="message" rows="5" /></label>
        </p>
        <p>
          <button type="submit">Send Quote Request</button>
        </p>
      </form>
    </div>
  )
}

export default RequestQuote
