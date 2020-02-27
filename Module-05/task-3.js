class Storage {
  constructor(array) {
    this.items = array;
  }

  getItems(newArray) {
    newArray = this.items;
    return newArray;
  }
  addItem(itemAdd) {
    this.items.push(itemAdd);
    return this.items;
  }
  removeItem(itemRem) {
    this.items = this.items.filter(item => item !== itemRem);
  }
}

const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
