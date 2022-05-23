# SASS-BEM - Функция `var-use`

`string var-use(string $name, FlexEntity $entity = null, mixed $default = null)`

Возвращает валидный вызов css-функции `var` с обращением к переменной, созданной из `$name` и `$entity`. По умолчанию вместо `$entity` будет использована база. Также присутствует возможность задать для переменной значение по умолчанию (fallback) через параметр `$default`.