const dscc = window.dscc;

const config = {
  data: {
    metrics: [
      {
        id: "value",
        name: "Silo Value",
        description: "Value to fill silo (0-100)"
      }
    ],
    dimensions: []
  },
  style: {}
};

// REGISTER KE LOOKER
dscc.registerVisualization(config);

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
