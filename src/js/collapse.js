import '../assets/scss/custom.scss';

const up = `<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-up" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"/>
</svg><span class="text-muted chevronName"> Collapse</span></div>`;

const down = `<div><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
            </svg><span class="text-muted chevronName">  Expand</span></div>`;

export function render() {
  document.getElementById('app').innerHTML = `
    <h1>Hello World!</h1>
      <div id='collapse' class='outerDiv'>
      </div>
      <div class='chevronDiv'>
      <span id="chevron"></span>
      </div>
`;
}

render({ some: 'string' });

const ch = document.getElementById('chevron');
console.log(ch);

const collapse = document.getElementById('collapse');
const div = document.createElement('div');
collapse.appendChild(div);
div.classList.add('innerDiv');
div.innerHTML = `<nav>
  <ul>
    <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
    <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
    <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
    <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
    <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
    <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
    <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
    <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
    <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
    <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
    <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
    <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
    <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
    <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
    <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
    <li><a href="#nowhere" title="Lorum ipsum dolor sit amet">Lorem</a></li>
    <li><a href="#nowhere" title="Aliquam tincidunt mauris eu risus">Aliquam</a></li>
    <li><a href="#nowhere" title="Morbi in sem quis dui placerat ornare">Morbi</a></li>
    <li><a href="#nowhere" title="Praesent dapibus, neque id cursus faucibus">Praesent</a></li>
    <li><a href="#nowhere" title="Pellentesque fermentum dolor">Pellentesque</a></li>
  </ul>
</nav>`;

const divHeight = div.offsetHeight;

const button = document.getElementById('chevron');

const compStyles = window.getComputedStyle(div);
const lineHeight = parseInt(compStyles.getPropertyValue('line-height'), 10);

const fiveLinesHeight = lineHeight * 5;

let tog = false;
const toggle = () => {
  if (tog) {
    div.style.height = divHeight + 'px';
    ch.innerHTML = up;
    tog = false;
  } else {
    div.style.height = fiveLinesHeight + 'px';
    ch.innerHTML = down;
    tog = true;
  }
};
toggle();

button.addEventListener('click', toggle);
