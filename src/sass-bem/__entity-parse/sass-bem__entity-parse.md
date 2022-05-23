# SASS-BEM - Функция `entity-parse`

`Entity entity-parse(FlexEntity $entity, list $expect = ("block", "elem", "mod", "val"))`

Преобразует `FlexEntity` в `Entity`. На выходе будут только поля, заданные в `$expect`.