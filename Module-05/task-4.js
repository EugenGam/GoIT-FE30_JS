class StringBuilder {
  constructor(string) {
    this.value = string;
  }
  append(stringAfter) {
    this.value += stringAfter;
  }

  prepend(stringBefore) {
    this.value = stringBefore + this.value;
  }

  pad(stringPad) {
    this.value = stringPad + this.value + stringPad;
  }
}

const builder = new StringBuilder('.');

builder.append('^');
console.log(builder.value); // '.^'

builder.prepend('^');
console.log(builder.value); // '^.^'

builder.pad('=');
console.log(builder.value); // '=^.^='
