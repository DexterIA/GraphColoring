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
  matrix  = [];
  for (var i = 0; i < vertexCount; i++) {
    matrix.push([]);
    for (var j = 0; j < vertexCount; j++) {
      matrix[i].push(0);
    }
  }
}

function createMatrix (network) {
  vertexCount = network.computers.length + 1;
  network.computers.forEach(function(computer) {
    computer.getEdges = function () {
      return this.edges;
    }
  });

  network.computers.forEach(function (computer) {
    console.log(computer.getEdges().join(' '));
  });

  //createEmptyMatrix();
  //network[0].forEach(function (edge) {
  //
  //});
}