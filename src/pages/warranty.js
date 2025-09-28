// src/pages/warranty.js

import React from "react";

export default function Warranty() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Warranty PDF</h1>
      <iframe
        src="/warranty.pdf"   // Place warranty.pdf in the "public" folder
        width="100%"
        height="600px"
        style={{ border: "none" }}
        title="Warranty Document"
      />
    </div>
  );
}

});
