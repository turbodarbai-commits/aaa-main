// warranty.js

function showWarrantyPDF(containerId, pdfPath) {
  const container = document.getElementById(containerId);
  if (!container) return;

  container.innerHTML = `
    <iframe src="${pdfPath}" width="100%" height="600px" style="border:none;"></iframe>
  `;
}

// Auto-run on page load
document.addEventListener("DOMContentLoaded", () => {
  // Replace "warranty.pdf" with the path/URL of your PDF
  showWarrantyPDF("warranty-container", "warranty.pdf");
});
