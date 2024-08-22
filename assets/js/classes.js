class Book {
  constructor(
    id,
    author,
    title,
    year,
    pages,
    shelfNumber = null,
    userId = null
  ) {
    this.id = id;
    this.author = author;
    this.title = title;
    this.year = year;
    this.pages = pages;
    this.shelfNumber = shelfNumber;
    this.userId = userId;
  }

  isVacant() {
    return this.shelfNumber !== null && this.userId === null;
  }

  getRent(userId) {
    if (this.isVacant()) {
      this.shelfNumber = null;
      this.userId = userId;
    } else {
      console.log("Книгу уже взял чиать другой пользователь");
    }
  }
}

class User {
  constructor(id, firstName, lastName, address) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.address = address;
  }
}

const book1 = new Book(
  1,
  "Дж. Роулинг",
  " Гарри Поттер и философский камень",
  1997,
  500,
  4
);
const user1 = new User(1, "Анна", "Нечай", "Запорожье, ул.Украинская 57");

console.log(book1.isVacant());

book1.getRent(user1.id);
console.log(book1.isVacant());
console.log(book1);

// 2
class Animal {
  constructor(name) {
    this.name = name;
  }

  hunting() {
    console.log("Зараз дожену здобич!");
  }

  growl() {
    console.log("Грррррр!");
  }
}

class Tiger extends Animal {
  constructor(name) {
    super(name);
  }

  hunting() {
    console.log(`${this.name} з’їсть тебе!`);
  }

  growl() {
    console.log(`${this.name} ричить: Ррррр!`);
  }
}

class Wolf extends Animal {
  constructor(name) {
    super(name);
  }

  hunting() {
    console.log(`${this.name} переслідує свою здобич!`);
  }

  growl() {
    console.log(`${this.name} ричить: Ау-у-у-у!`);
  }
}

const tiger1 = new Tiger("Білий тигр");
const tiger2 = new Tiger("Амурський тигр");

const wolf1 = new Wolf("Червоний вовк");
const wolf2 = new Wolf("Полярний вовк");

tiger1.hunting();
tiger1.growl();

wolf1.hunting();
wolf1.growl();
