const dscc = require('@google/dscc');
const d3 = window.d3;

const drawViz = (data) => {
  d3.select('#viz').selectAll('*').remove();

  const stock = data.tables.DEFAULT[0].stock;
  const capacity = data.tables.DEFAULT[0].capacity;

  const percent = Math.min(stock / capacity, 1);

  const width = 200;
  const height = 300;
  const fillHeight = height * percent;

  const svg = d3.select('#viz')
    .append('svg')
    .attr('width', width)
    .attr('height', height + 40);

  // BODY SILO
  svg.append('rect')
    .attr('x', 40)
    .attr('y', 20)
    .attr('width', 120)
    .attr('height', height)
    .attr('rx', 20)
    .attr('fill', 'none')
    .attr('stroke', '#444')
    .attr('stroke-width', 3);

  // ISI SILO
  svg.append('rect')
    .attr('x', 40)
    .attr('y', 20 + (height - fillHeight))
    .attr('width', 120)
    .attr('height', fillHeight)
    .attr('rx', 20)
    .attr('fill', '#4da6ff')
    .attr('opacity', 0.7);

  // TEKS
  svg.append('text')
    .attr('x', width / 2)
    .attr('y', height / 2)
    .attr('text-anchor', 'middle')
    .attr('font-size', '20px')
    .attr('font-weight', 'bold')
    .text(stock.toLocaleString());
};

dscc.subscribeToData(drawViz, { transform: dscc.objectTransform });
