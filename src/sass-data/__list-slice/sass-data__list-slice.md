# Функция `list-slice`

`list list-slice(list $input, number $start = 1, number $end = -1)`

Возвращет часть списка `$input`, начиная с индекса `$start` и заканчивая индексом `$end`. При отрицательном значении `$end` конечный индекс будет получен путем вычитания переданного числа из длины списка + 1.