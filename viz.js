// LOAD LOOKER STUDIO SDK
importScripts(
  "https://www.gstatic.com/lookerstudio/js/viz.js"
);

const dscc = window.dscc;

// REGISTER VISUALIZATION
dscc.registerVisualization({
  data: {
    metrics: [
      {
        id: "value",
        name: "Value",
        description: "Silo fill percentage (0-100)"
      }
    ],
    dimensions: []
  }
});

// SUBSCRIBE DATA
dscc.subscribeToData(draw, { transform: dscc.objectTransform });

function draw(data) {
  const container = document.getElementById("viz");
  container.innerHTML = "";

  if (!data.tables.DEFAULT || data.tables.DEFAULT.length === 0) {
    container.innerHTML = "No data";
    return;
  }

  const value = data.tables.DEFAULT[0].value || 0;

  const silo = document.createElement("div");
  silo.className = "silo";

  const fill = document.createElement("div");
  fill.className = "fill";
  fill.style.height = Math.min(value, 100) + "%";

  silo.appendChild(fill);
  container.appendChild(silo);
}
