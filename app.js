var fs = require('fs'),
  vertexCount = 0,
  matrix;

fs.readFile('graph.json', function (err, data) {
  if (err) {
    return console.error(err);
  }
  createMatrix(JSON.parse(data));
});

function createEmptyMatrix () {
  "use strict";
  matrix  = [];
  for (let i = 0; i < vertexCount; i++) {
    matrix.push([]);
    for (let j = 0; j < vertexCount; j++) {
      matrix[i].push(0);
    }
  }
}

function createMatrix (network) {
  vertexCount = network.length;
  createEmptyMatrix();
  network[0].forEach(function (edge) {

  });
}