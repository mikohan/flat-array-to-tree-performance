import axios from 'axios';
import { data } from './data';

// const result = axios
// 	.get('http://localhost:8000/testcategory/categories/')
// 	.then((r) => {
// 		console.log(r.data);
// 	});

const res = async () => {
	const promise = await axios.get(
		'http://localhost:8000/testcategory/categories/'
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
	}

	for (i = 0; i < list.length; i += 1) {
		node = list[i];
		if (node.parent !== null) {
			// if you have dangling branches check that map[node.parentId] exists
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
let t0 = performance.now();
getTree();
let t1 = performance.now();
console.log('Call to doSomething took ' + (t1 - t0) + ' milliseconds.');
