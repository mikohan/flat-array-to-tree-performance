import { categories } from './data/categoriesData';

export function getCatPath(category, categories) {
	let mainCat;
	function getCategoryPath(category, categories) {
		let parent = getParent(category.parent, categories);
		if (category.parent === null) {
			mainCat = category;
		}
		return parent ? [...getCategoryPath(parent, categories), category] : [];
	}

	function getParent(parentId) {
		const parent = categories.find((element) => element.id == parentId);

		return parent;
	}

	const pathArr = getCategoryPath(cat, categories);
	const nArr = pathArr.push(mainCat);
	return pathArr;
}

const cat = categories.find((el) => el.id === 2769);
const path = getCatPath(cat, categories);
console.log(path);
