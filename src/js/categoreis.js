import { categories } from './data/categoriesData';

export function getCategoryPath(category, categories) {
	const parent = getParent(category.parent, categories);
	console.log(parent);
	return category.parent
		? [...getCategoryPath(parent, categories), category]
		: [];
}

function getParent(parentId, categoreis) {
	const parent = categories.find((element) => element.id == parentId);
	if (parent) {
		return parent;
	}
	return null;
}

// console.log(getParent(categories[10].parent, categories));
const cat = categories.find((el) => el.id === 2769);
console.log(getCategoryPath(cat, categories));
