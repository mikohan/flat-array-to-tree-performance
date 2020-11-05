export function flatTree(categories) {
	let result = [];

	categories.forEach((category) => {
		result = [...result, category, ...flatTree(category.children)];
	});

	return result;
}
