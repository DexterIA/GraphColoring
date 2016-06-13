var

  /**
   * Функция "сливает" две строки в матрице
   * @param {Array} ar1 - первая строка
   * @param {Array} ar2 - вторая строка
   * @returns {Array} - строка с поэлементной суммой двух строк
   */
  merge = function (ar1, ar2) {
    var res = [];
    for (var i = 0; i < ar1.length; i++) {
      res[i] = ar1[i] + ar2[i];
    }
    return res;
  },

  /**
   * Основной алгоритм раскраски графа
   * @param {Array} matrix - матрица смежности
   * @returns {Array} - массив вершин с указанием их цвета (число)
   */
  graphColoring = function (matrix) {
    var visit = [], k = 1, colored = [];
    for (var i = 0; i < matrix.length; i++) {
      if (!visit[i]) {
        visit[i] = true;
        for (var j = 0; j < matrix[i].length; j++) {
          if (!matrix[i][j]) {
            colored[i] = k;
            colored[j] = colored[j] || k;
            visit[j] = true;
            matrix[i] = merge(matrix[i], matrix[j]);
          }
        }
        k++;
      }
    }
    return colored;
  };

module.exports = graphColoring;

