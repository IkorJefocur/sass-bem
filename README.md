# SASS-BEM

Библиотека, дающая возможность писать правильный (по мнению автора) css в терминах БЭМ.

Подробная документация находится в папке `docs`. Для более подробного ознакомления с API есть документация на каждый отдельный элемент.

Структура документации в `docs`:

**`quick-start.md`**: Быстрый старт, который не даст вам абсолютно никакой полезной информации.

**`formats.md`**: Форматы (типы данных), которые неоднократно используется в библиотеке.

**`base-context.md`**: Два важнейших понятия - база и контекст.

**`build-system.md`**: Система сборки по декларации - киллер-фича sass-bem.

**`vars.md`**: Переменные (кастомные свойства) в рамках sass-bem и БЭМ методологии в целом.

**`presets.md`**: Пресеты, основанные на extend - мощный способ инкапсуляции и DRY.

**`config.md`**: Если вдруг захочется изменить неймнг или другие глобальные параметры.

## Использование

```sh
npm i sass-bem --save-dev
```

Собранная библиотека находится в файле `_index.sass`. Ее можно использовать через `@use/@include`.

Для использования в сборке проекта по БЭМ необходимо включить папку `src` как уровень переопределения со структурой *nested*.