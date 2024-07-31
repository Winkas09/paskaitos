// function createPerson(name, lastname, age) {
//   return {
//     name,
//     lastname,
//     age,
//   };
// }
// console.log(createPerson("Vardenis", "Pavardenis", 25));
// console.log(createPerson("Jonas", "Jonaitis", 30));

// function printCarInfo(car) {
//   return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}`;
// }
// console.log(printCarInfo({ brand: "Audi", model: "A4", year: 2005 }));

// const printEmployeeInfo = (employees) => {
//   const names = Object.keys(employees);
//   names.forEach((name) => {
//     console.log(`Name: ${name}, Position: ${employees[name]}`);
//   });
// };
// printEmployeeInfo({ Jonas: "Engineer", Petras: "Manager" });

// const findBook = (books, searchQuery) => books.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));
// console.log(
//   findBook(
//     [
//       { title: "Haris Poteris ir išminties akmuo", author: "J.K. Rowling" },
//       { title: "Hobitas", author: "J.R.R. Tolkien" },
//     ],
//     "Poteris"
//   )
// );

// function Car(brand, model, engine, basePrice) {
//   this.brand = brand;
//   this.model = model;
//   this.engine = engine;
//   this.basePrice = basePrice;
//   this.turnOn = function () {
//     console.log("vroom vroom");
//   };
//   this.getPrice = function () {
//     let finalPrice = this.basePrice;
//     if (this.engine.toLowerCase() === "electric") {
//       finalPrice += 10000;
//     } else if (this.engine.toLowerCase() === "diesel") {
//       finalPrice += 5000;
//     }
//     return finalPrice;
//   };
// }

// // Create two car objects
// const car1 = new Car("Audi", "A4", "Electric", 20000);
// console.log(car1);
// car1.turnOn();
// console.log(car1.getPrice());

// const car2 = new Car("BMW", "320d", "Diesel", 15000);
// console.log(car2);
// car2.turnOn();
// console.log(car2.getPrice());

// class BankAccount {
//   constructor(ownerName, balance = 0) {
//     this.ownerName = ownerName;
//     this.balance = balance;
//   }

//   deposit(amount) {
//     this.balance += amount;
//   }

//   withdraw(amount) {
//     this.balance -= amount;
//   }
// }

// const account = new BankAccount("Jonas");
// account.deposit(100);
// account.withdraw(30);
// console.log(account.balance); // 70

// class Book {
//   constructor(title, author, year) {
//     this.title = title;
//     this.author = author;
//     this.year = year;
//   }
//   getSummary() {
//     return `${this.title} by ${this.author} published in ${this.year}`;
//   }
// }

// const book1 = new Book("Book Title", "Author Name", "2023");
// console.log(book1.getSummary()); // "Book Title by Author Name published in 2023"

// class MusicStudent {
//   constructor(name, instrument, level = "Beginner") {
//     this.name = name;
//     this.instrument = instrument;
//     this.level = level;
//   }
//   practice() {
//     if (this.level === "Beginner") {
//       this.level = "Intermediate";
//     } else if (this.level === "Intermediate") {
//       this.level = "Advanced";
//     }
//   }
// }

// const student = new MusicStudent("Anna", "piano");
// student.practice();
// console.log(`${student.name}, ${student.instrument}, ${student.level}`); // "Anna, piano, intermediate"

class ShoppingCart {
  constructor() {
    this.items = [];
  }
  addItem(item) {
    this.items.push(item);
  }
  removeItem(itemName) {
    this.items = this.items.filter((item) => item.name !== itemName);
  }
  calculateTotal() {
    return this.items.reduce((total, item) => total + item.price, 0);
  }
}

const cart = new ShoppingCart();
cart.addItem({ name: "Apple", price: 0.99 });
cart.addItem({ name: "Bread", price: 1.29 });
console.log(cart.calculateTotal()); // 2.28
cart.removeItem("Apple");
console.log(cart.calculateTotal()); // 1.29

class MovieTheater {
  constructor(rows, seatsPerRow) {
    this.rows = rows;
    this.seatsPerRow = seatsPerRow;
    this.seats = Array.from({ length: rows }, () => Array(seatsPerRow).fill(false));
  }

  bookSeat(row, seat) {
    if (this.seats[row][seat]) {
      return "Seat is already booked";
    }
    this.seats[row][seat] = true;
    return "Seat booked";
  }

  cancelBooking(row, seat) {
    if (!this.seats[row][seat]) {
      return "Seat is not booked";
    }
    this.seats[row][seat] = false;
    return "Booking canceled";
  }

  checkAvailability(row, seat) {
    return !this.seats[row][seat];
  }
}

const theater = new MovieTheater(5, 5);
theater.bookSeat(2, 3);
console.log(theater.checkAvailability(2, 3)); // false
theater.cancelBooking(2, 3);
console.log(theater.checkAvailability(2, 3)); // true
theater.bookSeat(2, 3);
console.log(theater.bookSeat(2, 3)); // "Seat is already booked"
console.log(theater.cancelBooking(2, 3)); // "Booking canceled"
console.log(theater.cancelBooking(2, 3)); // "Seat is not booked"

class Book {
  constructor(title, author, year) {
    this.title = title;
    this.author = author;
    this.year = year;
  }
  getSummary() {
    return `${this.title} by ${this.author} published in ${this.year}`;
  }
}

class Library {
  constructor() {
    this.books = [];
    this.lentBooks = new Map();
  }

  addBook(book) {
    this.books.push(book);
  }

  lendBook(bookTitle, userName) {
    const book = this.books.find((book) => book.title === bookTitle);
    if (book) {
      this.lentBooks.set(book, userName);
      this.books = this.books.filter((b) => b !== book);
    } else {
      console.log("Book not found");
    }
  }

  returnBook(bookTitle) {
    const book = Array.from(this.lentBooks.keys()).find((book) => book.title === bookTitle);
    if (book) {
      this.books.push(book);
      this.lentBooks.delete(book);
    } else {
      console.log("Book not found");
    }
  }

  listAvailableBooks() {
    this.books.forEach((book) => {
      console.log(book.getSummary());
    });
  }
}

const library = new Library();
library.addBook(new Book("Book1", "Author1", "2020"));
library.addBook(new Book("Book2", "Author2", "2021"));
library.lendBook("Book1", "User1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021"
library.returnBook("Book1");
library.listAvailableBooks(); // "Book2 by Author2 published in 2021", "Book1 by Author1 published in 2020"
library.returnBook("Book1"); // "Book not found"
library.lendBook("Book3", "User1"); // "Book not found"
