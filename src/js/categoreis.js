import { categories } from './data/categoriesData';
import { makeTree } from './flatTree';

export function prepareCategory(category, depth) {
  let children;

  if (depth && depth > 0) {
    children = (category.children || []).map((x) =>
      prepareCategory(x, depth - 1)
    );
  }

  let parent;

  if (category.parent) {
    parent = prepareCategory(category.parent);
  } else if (category.parent === null) {
    parent = null;
  }

  return JSON.parse(
    JSON.stringify({
      ...category,
      parent,
      children,
    })
  );
}
const myCat = categories.find((item) => item.id === 34);
// console.log(myCat);
// const smt = categories.filter((item) => item.parent === myCat.id);
// console.log(smt);

function searchTree(element, matchingTitle) {
  if (element.slug == matchingTitle) {
    return element;
  } else if (element.children != null) {
    var i;
    var result = null;
    for (i = 0; result == null && i < element.children.length; i++) {
      result = searchTree(element.children[i], matchingTitle);
    }
    return result;
  }
  return null;
}

const tree = makeTree(categories);
console.log(tree, 'Im here');
const s = searchTree(tree[0], 'transmissija');
console.log(s);
