// This the initial state of the app
const todos = [
  'buy milk',
  'clean kitchen',
  'learn js',
]

const btn = document.getElementById('btn1');
const uList = document.getElementById('list1');
let clickNum = 3;

btn.addEventListener('click', creatItem);

function creatItem () {
  clickNum += 1; 
  todos.push("Todo n." + clickNum)
  uList.innerHTML = "";
  todos.forEach(function(item){
  appendItem(item)});
}

function appendItem (item) {
  const newLiItem = document.createElement('li');
  newLiItem.textContent = item;
  uList.appendChild(newLiItem)
};

uList.addEventListener('click', removeItem);
function removeItem(e) {
  console.log(e.target.tagName);
  if (e.target.tagName === 'LI') {
    let index = todos.indexOf(e.target.textContent);
    todos.splice(index, 1);
    console.log(todos);
    uList.innerHTML = '';
    todos.forEach(function(item) {
      appendItem(item);
    });
  }
}
