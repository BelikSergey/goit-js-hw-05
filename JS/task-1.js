"use strict";
//
// лажа с десктопом github
const Account = function (login, email) {
  this.login = login;
  this.email = email;
};
Account.prototype.getInfo = function () {
  return `login: ${this.login}, email: ${this.email}`;
  // login: Poly, email: poly@mail.com
};

console.log(typeof Account.prototype.getInfo);
// 'function'

const mango = new Account("Mangozedog", "mango@dog.woof");
console.log(mango.getInfo());
// 'login : Mangozedog, email: mango@dog.woof'

const poly = new Account("Poly", "poly@mail.com");
console.log(poly.getInfo());
// 'login : Poly, email: poly@mail.com'
