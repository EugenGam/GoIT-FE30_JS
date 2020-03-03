import users from './users.js';
const getUserNames = users => {
  const arr = [];
  users.forEach(element => {
    arr.push(element.name);
  });
  return arr;
};

console.log(getUserNames(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Ross Vazquez', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony' ]

const getUsersWithEyeColor = (users, color) => {
  const arr = [];
  users.forEach(element => {
    if (element.eyeColor === color) {
      arr.push(element);
    }
  });
  return arr;
};

console.log(getUsersWithEyeColor(users, 'blue')); // [объект Moore Hensley, объект Sharlene Bush, объект Carey Barr]

const getUsersWithGender = (users, gender) => {
  const arr = [];
  users.forEach(element => {
    if (element.gender === gender) {
      arr.push(element.name);
    }
  });
  return arr;
};

console.log(getUsersWithGender(users, 'male')); // [ 'Moore Hensley', 'Ross Vazquez', 'Carey Barr', 'Blackburn Dotson' ]

const getInactiveUsers = users => {
  const arr = [];
  users.forEach(element => {
    if (element.isActive === false) {
      arr.push(element);
    }
  });
  return arr;
};

console.log(getInactiveUsers(users)); // [объект Moore Hensley, объект Ross Vazquez, объект Blackburn Dotson]

const getUserWithEmail = (users, email) => {
  const result = users.filter(user => user.email === email);
  return result;
};

console.log(getUserWithEmail(users, 'shereeanthony@kog.com')); // {объект пользователя Sheree Anthony}
console.log(getUserWithEmail(users, 'elmahead@omatom.com')); // {объект пользователя Elma Head}

const getUsersWithAge = (users, min, max) => {
  const result = users.filter(user => user.age > min && user.age < max);
  return result;
};

console.log(getUsersWithAge(users, 20, 30)); // [объект Ross Vazquez, объект Elma Head, объект Carey Barr]

console.log(getUsersWithAge(users, 30, 40));
// [объект Moore Hensley, объект Sharlene Bush, объект Blackburn Dotson, объект Sheree Anthony]

const calculateTotalBalance = users => {
  let sum = 0;
  users.forEach(element => {
    sum = sum + element.balance;
  });
  return sum;
};

console.log(calculateTotalBalance(users)); // 20916

const getUsersWithFriend = (users, friendName) => {
  let arr = [];
  arr.push(
    users.filter(user => user.friends.some(frnd => frnd === friendName)),
  );
  return arr;
};

console.log(getUsersWithFriend(users, 'Briana Decker')); // [ 'Sharlene Bush', 'Sheree Anthony' ]
console.log(getUsersWithFriend(users, 'Goldie Gentry')); // [ 'Elma Head', 'Sheree Anthony' ]

const getNamesSortedByFriendsCount = users => {
  let arr = [];
  users.forEach(element => {
    arr.push(element.friends.length + element.name);
    return arr;
  });
  arr.sort();
  const result = [];
  arr.forEach(element => {
    result.push(element.slice(1));
  });
  return result;
};

console.log(getNamesSortedByFriendsCount(users));
// [ 'Moore Hensley', 'Sharlene Bush', 'Elma Head', 'Carey Barr', 'Blackburn Dotson', 'Sheree Anthony', 'Ross Vazquez' ]

const getSortedUniqueSkills = users => {
  let arr = [];
  users.forEach(user => {
    user.skills.forEach(element => {
      arr.push(element);
      return arr;
    });
  });
  const newarr = [];
  arr.forEach((element, index) => {
    if (arr.indexOf(element) === index) {
      newarr.push(element);
    }
  });
  newarr.sort();
  return newarr;
};

console.log(getSortedUniqueSkills(users));
// [ 'adipisicing', 'amet', 'anim', 'commodo', 'culpa', 'elit', 'ex', 'ipsum', 'irure', 'laborum', 'lorem', 'mollit', 'non', 'nostrud', 'nulla', 'proident', 'tempor', 'velit', 'veniam' ]
