# SASS-BEM - Переменные

Для объявления и использования переменных (кастомных свойств) служат миксин `var-def` и функция `var-use` соответственно.

Миксин `var-def` принимает имя и значение переменной. Значение остается без изменений, а для имени будет создан префикс в виде сущности, в которой вызван миксин. Например:

```
+block(test)
	+var-def(size, 10px)
```

```
.test {--test_size: 10px}
```

Сущность, для которой объявляется переменная, всегда зависит от текущего контекста и не может быть изменена. Потому что если вы пишете правильный css, такой необходимости возникать не должно.

Функция `var-use` возвращает строку `var(--<имя_переменной>)`, где имя переменной зависит от контекста со следующим приоритетом по убыванию: *явно заданный контекст - основа - текущий контекст*. В явном контексте можно задать блок по умолчанию, используя `skip-symbol`. Также имеется возможность задать fallback-значение. Например:

```
+block(test)
	width: var-use(size)
	+elem(inside)
		width: var-use(size, (block: _), 20px)
```

```
.test {width: var(--test_size)}
.test__inside {width: var(--test_size, 20px)}
```

Вы можете создавать переменные для блоков и элементов, но не для модификаторов. Модификаторы, как правило, используются для изменения значений существующих переменных.