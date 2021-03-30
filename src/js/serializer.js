const filters = {
  brands: 'mando,angara',
  cars_model: 'jag,bmw',
  price: '2227, 8447',
};

function makeFiltersQueryString(filters) {
  let string = '';
  const mp = Object.entries(filters);
  mp.forEach(([key, value], i) => {
    const amp = mp.length - 1 === i ? '' : '&';
    string += key + '=' + value + amp;
  });
  return string;
}

const qs = makeFiltersQueryString(filters);
console.log('%c ' + qs, 'background: #222; color: #bada55');

export function render(string) {
  document.getElementById('app').innerHTML = `
    <h1>Hello World!</h1>
      <div id='collapse' class='builtUrl'>
      ${string.some}
      </div>
`;
}

render({ some: qs });
