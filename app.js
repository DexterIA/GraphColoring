var fs = require('fs'),
  computers = [];

fs.readFile('input.txt', function (err, data) {
  if (err) {
    return console.error(err);
  }
  parseInput(data.toString());
});

function parseInput (file) {
  var linesArray = file.split('\n'), edges = [];
  linesArray.forEach(function (line) {
    edges = line.split(' ');

  });
}