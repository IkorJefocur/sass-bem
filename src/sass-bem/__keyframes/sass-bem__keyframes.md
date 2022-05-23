# SASS-BEM - Функция `keyframes`

`string keyframes(string $name, FlexEntity $entity = null)`

Возвращает имя ключевых кадров анимации с префиксом, основанном на `$entity` (база по умолчанию). Таким образом, минимизируется количество потенциальных конфликтов имен из реализаций разных сущностей.