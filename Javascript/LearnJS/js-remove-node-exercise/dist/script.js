const items = document.querySelectorAll('ul li');

items.forEach(function(item) {
  item.addEventListener('click', () => item.remove())
});