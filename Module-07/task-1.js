const count = document.getElementById('categories').childElementCount;
console.log(`В списке ${count} категории.`);

const categories = document.querySelector('#categories');

const str = [...categories.children]
  .map(
    e =>
      `Категория - ${e.children[0].textContent}, количество елементов - ${e.children[1].children.length}`,
  )
  .join('\n');
console.log(str);
