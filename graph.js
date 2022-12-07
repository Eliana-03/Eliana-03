"use strict";

const data = {
  nodes: [
    { id: 1, name: "HTML", family: 1 },
    { id: 2, name: "Python", family: 2 },
    { id: 3, name: "CSS", family: 1 },
    { id: 4, name: "Bootstrap", family: 1 },
    { id: 5, name: "Java", family: 2 },
    { id: 6, name: "Gold", family: 2 },
    { id: 7, name: "JS", family: 1 }
  ],
  links: [
    { source: 1, target: 3 },
    { source: 3, target: 4 },
    { source: 1, target: 7 },

    { source: 2, target: 5 },
    { source: 5, target: 6 }
  ]
};

const height = 600;
const width = 600;

const drag = simulation => {
  function dragstarted(d) {
    if (!d3.event.active) simulation.alphaTarget(0.3).restart();
    d.fx = d.x;
    d.fy = d.y;
  }

  function dragged(d) {
    d.fx = d3.event.x;
    d.fy = d3.event.y;
  }

  function dragended(d) {
    if (!d3.event.active) simulation.alphaTarget(0);
    d.fx = null;
    d.fy = null;
  }

  return d3
    .drag()
    .on("start", dragstarted)
    .on("drag", dragged)
    .on("end", dragended);
};

const simulation = d3
  .forceSimulation(data.nodes)
  .force(
    "link",
    d3
      .forceLink(data.links)
      .id(d => d.id)
      .strength(0.15)
  )
  .force("charge", d3.forceManyBody().strength(-50))
  .force("center", d3.forceCenter(width / 2, height / 2))
  .force(
    "collide",
    d3
      .forceCollide()
      .radius(80)
      .iterations(2)
  );

const svg = d3
  .select("#graphContainer")
  .append("svg")
  .attr("viewBox", [0, 0, width, height]);
svg.attr("id", "graph");
svg.style("overflow", "visible");

const link = svg
  .append("g")
  .attr("stroke", "#999")
  .attr("stroke-opacity", 0.6)
  .selectAll("line")
  .data(data.links)
  .join("line")
  .attr("stroke-width", 1);

const node = svg
  .append("g")
  .selectAll("g")
  .data(data.nodes)
  .join("g")
  .attr("class", "node")
  .append("circle")
  .attr("stroke", "#fff")
  .attr("stroke-width", 1)
  .attr("r", 40)
  .attr("fill", d => randomBaseColor(d.family))
  .call(drag(simulation));

var linkText = svg
  .selectAll(".node")
  .append("text")
  .attr("class", "node-label")
  .text(d => d.name)
  .style("fill", "#eeeeee")
  .style("font-size", 18)
  .style("pointer-events", "none");

simulation.on("tick", () => {
  link
    .attr("x1", d => d.source.x)
    .attr("y1", d => d.source.y)
    .attr("x2", d => d.target.x)
    .attr("y2", d => d.target.y);

  node.attr("cx", d => d.x).attr("cy", d => d.y);

  linkText
    .attr("x", function(d) {
      return d.x - 15;
    })
    .attr("y", function(d) {
      return d.y;
    });
});
