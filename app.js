var fs = require('fs'),
  graphColoring = require('./graphColoring'),
  vertexCount = 0,
  matrix,

  /**
   * Добаляет элемент в очередь с учётом
   * уже находящихся в ней элементов и информации о посещении
   * @param queue - текущее состояние очереди
   * @param edges - список элементов, которые нужно добавить
   * @param visited - список элементов, которые не нужно добавлять
   * @returns {Array} - новая очередь
   */
  addToQueue = function (queue, edges, visited) {
    var exist, newQueue = queue;
    edges.forEach(function(edge) {
      if (!visited[edge]) {
        exist = false;
        queue.forEach(function (elem) {
          if (elem === edge) {
            exist = true;
          }
        });
        if (!exist) {
          newQueue.push(edge);
        }
      }
    });
    return newQueue;
  };

fs.readFile('graph.json', function (err, data) {
  if (err) {
    return console.error(err);
  }
  var network = JSON.parse(data.toString());
  vertexCount = network.computers.length + 1;
  createMatrix(network);
});

/**
 * Создаём пустую матрицу, заполняем диагональ единицами
 */
function createEmptyMatrix () {
  matrix  = [];
  for (var i = 0; i < vertexCount; i++) {
    matrix[i] = [];
    for (var j = 0; j < vertexCount; j++) {
      matrix[i][j] = i === j ? 1 : 0;
    }
  }
}

/**
 * Функция заполняет информацию о рёбрах в матрице смежности
 * @param {Number} v - текущее ребро
 * @param {Array} edges - список смежных вершин 
 */
function fillMatrix (v, edges) {
  edges.forEach(function (edge) {
    matrix[v][edge] = 1;
    matrix[edge][v] = 1;
  });
}

/**
 * Создаём матрицу смежности 
 * @param network
 */
function createMatrix (network) {
  createEmptyMatrix();
  var queue = network.current.edges,
    visit = [];
  visit[0] = true;
  fillMatrix(0, queue);
  while (queue.length > 0) {
    visit[queue[0]] = true;
    fillMatrix(queue[0], network.computers[queue[0] - 1].edges);
    queue = addToQueue(queue, network.computers[queue[0] - 1].edges, visit);
    queue.splice(0, 1);
  }
  var colors = graphColoring(matrix);
  console.log('Цвет каждого компьютера: ' + colors.join(' '));
}