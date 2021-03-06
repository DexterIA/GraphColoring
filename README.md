# Graph Coloring
Ну это не совсем раскраска графа, но смысл в этом

## Формулировка проблемы

Компьютерная сеть имеет произвольную топологию, представимую некоторым связным графом, где вершины представляют компьютеры, а рёбра — связи между компьютерами. Изначально каждый компьютер знает свой уникальный ID и смежные рёбра. Два смежных компьютера могут обмениваться произвольными сообщениями.
Нужно раскрасить (сопоставить числа от 1 до k) вершины графа в минимальное число цветов (k → min), чтоб в графе не было смежных вершин одного цвета.
Требуется разработать алгоритм, работающий на произвольном компьютере сети, по окончании которого компьютер должен знать свой цвет.<br>
Множество компьютеров можно моделировать с помощью процессов, потоков или программно, главное — рабочий алгоритм.

## Содержание индивидуального задания

Требуется разработать алгоритм решения сформулированной задачи.
Ввести адекватный для задачи параметр – размер входных данных (при необходимости – два или три параметра сложности входных данных). Дать теоретическую оценку сложности алгоритма в зависимости от этого параметра. Реализовать алгоритм в виде программы на одном из универсальных языков программирования и произвести экспериментальные замеры времени работы программы, рассчитанные на нескольких разных значениях параметра.
По данным замеров должны быть построены три экспериментальные оценки функции сложности алгоритма – минимальная, максимальная и средняя (среднестатистическая) сложности.

## Содержание отчёта по заданию

Титульный лист.
Формулировка проблемы (задачи).
Разработанный алгоритм в полуформализованном виде (не на языке программирования) с использованием традиционной математической нотации и действий, кратко записанных на русском языке; текст должен быть структурирован подобно программе.
Теоретические оценки сложности алгоритма, записанные формулами.
Графики экспериментальных оценок функций сложности алгоритма.
Текст программы, реализующей алгоритм.
Ссылки на использованную литературу.
