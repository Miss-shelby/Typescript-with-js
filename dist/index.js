"use strict";
let sales = 123456789;
let course = 'Typescript';
let is_published = true;
let level;
level = 1;
level = 'beginner';
function render(document) {
    console.log(document);
}
let numbers = [1, 2, 3, 4];
let number = [];
number[0] = 2;
number[1] = 4;
numbers.forEach(n => n.toFixed);
let user = [23, 'Ammie'];
user[1].length;
let mySize = 2;
console.log(mySize);
function calculateTax(income, taxYear) {
    if ((taxYear || 2022) < 2022)
        return income * 1.2;
    return income * 1.3;
}
calculateTax(10000);
let employees = {
    id: 1,
    name: 'cynthia',
    retire: (date) => {
        console.log(date);
    }
};
let employee = {
    id: 1,
    name: 'cynthia',
    retire: (date) => {
        console.log(date);
    }
};
function kgToLbs(weight) {
    if (typeof weight === 'number') {
        return weight * 2.2;
    }
    else
        return parseInt(weight) * 2.2;
}
kgToLbs(10);
kgToLbs('10kg');
let textBox = {
    drag: () => { },
    resize: () => { }
};
let quantity = 100;
let measurement = 'cm';
function greetUser(name) {
    if (name) {
        console.log(name.toLowerCase());
    }
    else {
        console.log("Holla ");
    }
}
greetUser('dave');
function getCustomer(id) {
    return id === 0 ? null : { birthday: new Date() };
}
let customer = getCustomer(0);
console.log(customer === null || customer === void 0 ? void 0 : customer.birthday);
//# sourceMappingURL=index.js.map