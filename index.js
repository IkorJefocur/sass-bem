const formatters = {
	block: block => `b:${block}`,
	elem: elem => `e:${elem}`,
	modName: modName => `m:${modName}`,
	modVal: modVal => `v:${modVal}`,
	args: entity => `(${entity.join(',')})`,
	mixin: args => `+build(${args})`
};

module.exports = function*(decl) {
	for (const {block, elem, mod} of decl) {
		const formatKeys = {
			block, elem,
			modName: mod && mod.name,
			modVal: mod && mod.val
		};

		const entity = Object.entries(formatKeys)
			.filter(([type, value]) => value != null)
			.map(([type, value]) => formatters[type](value));

		yield formatters.mixin(formatters.args(entity));
	}
};