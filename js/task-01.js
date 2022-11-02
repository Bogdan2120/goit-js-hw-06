const numberOfCategorisEl = document.querySelectorAll('ul#categories li.item');
console.log(`Number of categories: ${numberOfCategorisEl.length}`);

const itemsListEl = document.querySelectorAll('li.item');
itemsListEl.forEach(item => {
  console.log(`Category: ${item.firstElementChild.textContent}`);
  console.log(`Elements: ${item.lastElementChild.children.length}`);
});
