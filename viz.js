const dscc = window.dscc;

dscc.subscribeToData(draw, { transform: dscc.objectTransform });

function draw(data) {
  const container = document.getElementById("viz");
  container.innerHTML = "";

  const value = data.tables.DEFAULT[0]?.metric[0] || 0;

  const silo = document.createElement("div");
  silo.className = "silo";

  const fill = document.createElement("div");
  fill.className = "fill";
  fill.style.height = Math.min(value, 100) + "%";

  silo.appendChild(fill);
  container.appendChild(silo);
}
