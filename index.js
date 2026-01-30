// Gunakan link CDN yang stabil untuk dscc
const dsccUrl = "https://ajax.googleapis.com/ajax/libs/dscc/1.50.0/dscc.min.js";

const loadScript = (url) => {
  return new Promise((resolve) => {
    const script = document.createElement('script');
    script.src = url;
    script.onload = resolve;
    document.head.appendChild(script);
  });
};

async function render() {
  await loadScript(dsccUrl);
  
  const drawViz = (data) => {
    // Membuat tampilan sederhana untuk tes
    document.body.innerHTML = `
      <div style="padding: 20px; background: #f4f4f4; border: 2px solid #4285F4; border-radius: 10px;">
        <h2 style="color: #4285F4;">Silo Viz Berhasil!</h2>
        <p>Data yang masuk: <strong>${data.tables.DEFAULT.length} baris</strong></p>
        <pre>${JSON.stringify(data.tables.DEFAULT[0], null, 2)}</pre>
      </div>
    `;
  };

  window.dscc.subscribeToData(drawViz, {transform: window.dscc.tableTransform});
}

render();
