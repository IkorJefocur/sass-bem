# SASS-BEM - Функция `entity-normalize`

`Entity entity-nomralize(Entity $entity = null, Entity $defaults = null)`

Дополняет отсутствующие в `$entity` поля полями из `$defaults` (либо `current-entity`), чтобы получить полноценную сущность. Также учитывает поля со значением `skip-symbol`, гарантировано заменяя их на аналогичные в `$defaults`.