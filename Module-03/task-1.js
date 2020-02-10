const user = {
  name: 'Mango',
  age: 20,
  hobby: 'html',
  premium: true,
};
user.mood = 'happy';
user.hobby = 'skydiving';
user.premium = 'false';
const row = Object.entries(user);

for (const element of row) {
  const key = element[0];
  const value = element[1];
  console.log(`${key} : ${value}`);
}
