# SASS-BEM - Быстрый старт

Для начала стоит принять тот факт, что большинство селекторов будут заменены на миксины. Вы больше не пишете классы - вы пишете блоки, элементы и модификаторы.

Крайне рекомендуется использовать синтаксис sass и сокращенные вызовы миксинов ("+" вместо "@include"). Это делает код на sass-bem более лаконичным и понятным.

Итак, чтобы задекларировать блок, достаточно вызвать миксин `block`:

```
+block(test)
	display: flex
```

```
.test {display: flex}
```

Элементы и модификаторы описываются через миксины `elem` и `mod` соответственно. Они анализируют текущий контекст, и генерируют селектор на его основе:

```
+block(test)
	display: flex
	+elem(inside)
		flex-basis: 10px
		+mod(size big)
			flex-basis: 20px
	+mod(state active)
		background-color: white
```

```
.test {display: flex}
.test__inside {flex-basis: 10px}
.test__inside_size_big {flex-basis: 20px}
.test_state_active {background-color: white}
```

Вы также можете сколько угодно вкладывать данные миксины друг в друга. Если селектор не может скомбинироваться с тем, что уже есть, он будет вложен:

```
+block(test)
	+mod(state active)
		+elem(inside)
			height: 10px
		+mod(accent high)
			background-color: black
```

```
.test_state_active .test__inside {height: 10px}
.test_state_active.test_accent_high {background-color: black}
```

Библиотека sass-bem предостовляет еще множество возможностей. Настоятельно рекомендую ознакомится с ними.