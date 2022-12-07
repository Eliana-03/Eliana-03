"use strict";

var select = function(s) {
  return document.querySelectorAll(s);
};

const changeColors = () => {
  var svgItems = select(".randomColor");
  svgItems.forEach(item => {
    item.style.fill = randomColor();
  });
};

var colors = [
  "#f5d67b",
  "#72e0d1",
  "#ee883b",
  "#be84ff",
  "#d44f4a",
  "#63b660",
  "#4aa8a4",
  "#f6aa0e",
  "#eeeeee",
  "#5c5e67",
  "#cdd3de",
  "#65737e",
  "#c594c5",
  "#fac85f",
  "#5fb3b3",
  "#99c794",
  "#eb606b",
  "#f99157",
  "#6699cc",
  "#a6a9bc",
  "#e3c18a",
  "#fedd5c",
  "#f8be53",
  "#71cfc7",
  "#79f6fe",
  "#81c7fe",
  "#5190f2",
  "#3856a8",
  "#8d6ee3",
  "#da8ff3",
  "#d47db8",
  "#fe8a77",
  "#f96e58",
  "#fd7b64",
  "#de6350",
  "#ad6e71",
  "#7e373b",
  "#a9f98f",
  "#97cb70",
  "#498d79"
];

const filteredColors = [
  "#f8be53",
  "#d44f4a",
  "#97cb70",
  "#da8ff3",
  "#4aa8a4",
  "#5190f2",
  "#ee883b"
];

var randomColor = function() {
  return colors[Math.floor(Math.random() * colors.length)];
};
// eslint-disable-next-line no-unused-vars
var randomBaseColor = function() {
  return filteredColors[Math.floor(Math.random() * filteredColors.length)];
};
// eslint-disable-next-line no-unused-vars
var orderedColor = function(id) {
  return colors[id % colors.length];
};

// eslint-disable-next-line no-unused-vars
var orderedBaseColor = function(id) {
  return filteredColors[id % filteredColors.length];
};

setTimeout(changeColors, 500);
setInterval(changeColors, 2000);
