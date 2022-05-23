# SASS-BEM - Функция `color-use`

`string color-use(string $name, FlexEntity $entity = null, number $alpha = 1)`
`string color-use(string $name, number $alpha)`

Использует цветовую переменную, объявленную с помощью миксина `color-def`. Генерация названия переменной происходит аналогично `var-use`. Альфа-канал будет умножен на `$alpha`.