export function flatTree(categories) {
	let result = [];

	categories.forEach((category) => {
		result = [...result, category, ...flatTree(category.children)];
	});

	return result;
}
export function makeTree(cats) {
	const filtredArray = cats.filter((item) => {
		return item.count !== 0;
	});
	const list = filtredArray;
	const tree = [];
	const lookup = {};

	list.forEach((o) => {
		lookup[o.id] = o;
		lookup[o.id].children = [];
	});

	list.forEach((o) => {
		if (o.parent && o.parent !== null) {
			try {
				lookup[o.parent].children.push(o);
			} catch (e) {
				console.error(
					o,
					`Somethin fucks up in /endpoints/categories.ts line 108
			  seems to instance of category has no parent
			  check the database category id = ${o.id}!
			`,
					e
				);
			}
		} else {
			tree.push(o);
		}
	});
	const new_tree = Object.assign(tree);
	return tree;
}
