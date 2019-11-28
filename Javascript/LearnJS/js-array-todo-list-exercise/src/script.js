

const todos = [
  'buy milk',
  'clean kitchen',
  'learn js',
]


const btn = document.querySelector('input[type="submit"]');
const newInput = document.querySelector('input[type="text"]');
const uList = document.querySelector('ul');

btn.addEventListener('click', creatItem);
function appendItem (item) {
  const newLiItem = document.createElement('li');
  newLiItem.textContent = item;
  uList.appendChild(newLiItem)
};

const renderList = () => {
  uList.innerHTML = "";
  todos.forEach(item => appendItem(item));
}

function creatItem () {
  event.preventDefault();
  todos.push(newInput.value)
  console.log(todos)
  renderList();
}


uList.addEventListener('click', removeItem);
function removeItem(e) {
  console.log(e.target.tagName);
  if (e.target.tagName === 'LI') {
    let index = todos.indexOf(e.target.textContent);
    todos.splice(index, 1);
    console.log(todos);
    renderList();
  }
}

renderList();