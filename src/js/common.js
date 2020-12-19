import axios from 'axios';
import { stackOverflow, dataRecursive } from './data';
import { array, tree } from './nina';
import { parse, stringify } from 'flatted';
import { flatTree } from './flatTree';

// const result = axios
// 	.get('http://localhost:8000/testcategory/testcategories/')
// 	.then((r) => {
// 		console.log(r.data);
// 	});

const res = async () => {
	const promise = await axios.get(
		//'http://localhost:8000/testcategory/categories-for-testes/'
		'http://localhost:8000/testcategory/testcategories/'
	);

	return promise.data;
};

async function getTree() {
	const list = await res();

	var map = {},
		node,
		roots = [],
		i;

	for (i = 0; i < list.length; i += 1) {
		map[list[i].id] = i; // initialize the map
		list[i].children = []; // initialize the children
		list[i].superParent = null;
	}

	for (i = 0; i < list.length; i += 1) {
		node = list[i];
		if (node.parent !== null) {
			const parentNode = Object.assign(
				{},
				list.find((el) => el.parent === node.parent)
			);
			list[i].superParent = parentNode;
			// if you have dangling branches check that map[node.parentId] exists
			// console.log(node.parent);
			// list[map[node.parent]].superParent = node;

			list[map[node.parent]].children.push(node);
		} else {
			roots.push(node);
		}
	}

	document.getElementById('app').innerHTML = `
        <h1>Hello World!</h1>
        <pre>
        ${JSON.stringify(roots, undefined, 2)}
        </pre>
        `;
}
// let t0 = performance.now();
// getTree();
// let t1 = performance.now();
// console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');

const treeify = (arr) => {
	const tree = [];
	const lookup = {};
	// Initialize lookup table with each array item's id as key and
	// its children initialized to an empty array
	arr.forEach((o) => {
		lookup[o.id] = o;
		lookup[o.id].children = [];
	});
	// console.log(lookup, 'Lookup object');
	arr.forEach((o) => {
		// If the item has a parent we
		// 1. access it in constant time now that we have a lookup table
		// 2. since children is preconfigured, we simply push the item
		if (o.parent !== null) {
			lookup[o.parent.id].children.push(o);
		} else {
			// no o.parent so this is a "root at the top level of our tree
			tree.push(o);
		}
	});
	return tree;
};

// from stack overflow
const data = [
	{ id: 1, title: 'home', parent: null },
	{ id: 2, title: 'about', parent: null },
	{ id: 3, title: 'team', parent: 2 },
	{ id: 4, title: 'company', parent: 2 },
	{ id: 5, title: 'department', parent: 4 },
];

const treeifyR = (data, pid = null, parent = null) => {
	return data.reduce((r, e) => {
		if (e.parent === pid) {
			const o = { ...e };
			if (parent) o.parent = parent;

			const children = treeifyR(data, e.id, e);
			if (children.length) o.children = children;

			r.push(o);
		}

		return r;
	}, []);
};

// const result = treeify(data);
// console.log(JSON.stringify(result, 0, 4))

let t0 = performance.now();

res().then((result) => {
	console.log(result);
	const tree = treeify(result);
	// console.log(flatTree(dataRecursive));

	document.getElementById('app').innerHTML = `
        <h1>Hello World!</h1>
        <pre>
        ${JSON.stringify(tree, undefined, 4)}
        </pre>
        `;
});
let t1 = performance.now();
console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');

// console.log(flatTree(dataRecursive));
// let t0 = performance.now();
// res().then((result) => {
// 	// console.log(result);
// 	const res = tree(result, null);
// 	let fin = fclone(res);
// 	console.log(stringify(res, res.parent));

// 	document.getElementById('app').innerHTML = `
// 	        <h1>Hello World!</h1>
// 	        <pre>
// 	        ${JSON.parse(stringify(res)}
// 	        </pre>
// 	        `;
// });

// let t1 = performance.now();
// console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
