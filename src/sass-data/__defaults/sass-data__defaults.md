# Функция `defaults`

`list|map defaults(list|map $source, list|map $defaults, mixed $skipper = null)`

Меняет в `$source` все ключи (индексы) со значением `$skipper` на аналогичные в `$defaults`. Аргументы `$source` и `$defaults` должны иметь одинаковый тип.