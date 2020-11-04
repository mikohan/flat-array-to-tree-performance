export const array = [
	{ id: 1, title: 'home', parent: null },
	{ id: 2, title: 'about', parent: null },
	{ id: 3, title: 'team', parent: 2 },
	{ id: 4, title: 'company', parent: 2 },
	{ id: 5, title: 'department', parent: 4 },
];

export const tree = function(data, root) {
	var t = {};
	data.forEach((o) => {
		Object.assign((t[o.id] = t[o.id] || {}), o);
		t[o.parent] = t[o.parent] || {};
		t[o.parent].children = t[o.parent].children || [];
		t[o.parent].children.push(t[o.id]);
		if (t[o.id].parent !== null) t[o.id].parent = t[t[o.id].parent];
	});
	return t[root].children;
};
