
// 1
function hello() {
    console.log("Hello Everyone");
}

hello();


// 2
function welcome() {
    console.log("Welcome to JavaScript");
}

welcome();


// 3
function navi() {
    console.log("Dinesh");
}

navi();


// 4
function message() {
    console.log("Good Morning");
    console.log("Welcome");
    console.log("Have a nice day");
}

message();


// 5
function numbers() {

    for (let i = 1; i <= 5; i++) {
        console.log(i);
    }

}

numbers();


// 6
function check() {

    let age = 20;

    if (age >= 18) {
        console.log("Eligible");
    }

}

check();


// 7
function details() {

    console.log("Name: Dinesh");
    console.log("Qualification: BCA");
    console.log("Role: Developer");

}

details();


// 8
function company() {
    console.log("ABC Company");
}

company();


// 9
function welcomeUser() {
    console.log("Welcome User");
}

welcomeUser();
welcomeUser();
welcomeUser();


// 10
function firstFunction() {
    console.log("This is the first function");
}

function secondFunction() {
    console.log("This is the second function");
}

firstFunction();
secondFunction();


// 11
function parameterOne(value) {
    console.log(value);
}

parameterOne("Hello");


// 12
function twoParameters(a, b) {
    console.log(a);
    console.log(b);
}

twoParameters(10, 20);


// 13
function add(a, b) {
    console.log(a + b);
}

add(10, 20);


// 14
function sub(a, b) {
    console.log(a - b);
}

sub(20, 10);


// 15
function multiply(a, b) {
    console.log(a * b);
}

multiply(10, 5);


// 16
function divide(a, b) {
    console.log(a / b);
}

divide(20, 5);


// 17
function student(name, age) {

    console.log("Name:", name);
    console.log("Age:", age);

}

student("Dinesh", 25);


// 18
function employee(name, role, salary) {

    console.log("Name:", name);
    console.log("Role:", role);
    console.log("Salary:", salary);

}

employee("Dinesh", "Developer", 40000);


// 19
function fourParameters(a, b, c, d) {

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);

}

fourParameters(10, 20, 30, 40);


// 20
function sixParameters(a, b, c, d, e, f) {

    console.log(a);
    console.log(b);
    console.log(c);
    console.log(d);
    console.log(e);
    console.log(f);

}

sixParameters(10, 20, 30, 40, 50, 60);


// 21
function studentDetails(name, department = "Computer Science", cgpa) {

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);

}

studentDetails("Dinesh", undefined, 8.5);


// 22
function user(name, age = 18) {

    console.log("Name:", name);
    console.log("Age:", age);

}

user("Dinesh");


// 23
function employeeDetails(name, role = "Developer") {

    console.log("Name:", name);
    console.log("Role:", role);

}

employeeDetails("Dinesh");


// 24
function form(name, department, cgpa, disability = "no") {

    console.log("Name:", name);
    console.log("Department:", department);
    console.log("CGPA:", cgpa);
    console.log("Disability:", disability);

}

form("Dinesh", "Computer Science", 8.5);
form("Rahul", "BCA", 9.0, "yes");


// 25
function employeeInfo(name, salary, role = "Developer") {

    console.log("Name:", name);
    console.log("Salary:", salary);
    console.log("Role:", role);

}

employeeInfo("Dinesh", 40000);


// 26
function addition(a, b) {

    return a + b;

}

let answer26 = addition(10, 20);
console.log(answer26);


// 27
function subtraction(a, b) {

    return a - b;

}

let answer27 = subtraction(20, 10);
console.log(answer27);


// 28
function multiplication(a, b) {

    return a * b;

}

let answer28 = multiplication(10, 5);
console.log(answer28);


// 29
function division(a, b) {

    return a / b;

}

let answer29 = division(20, 5);
console.log(answer29);


// 30
function salary() {

    return 40000;

}

let salaryValue = salary();
console.log(salaryValue);


// 31
function employeeSalary(salary) {

    return salary;

}

let employeeSalaryValue = employeeSalary(50000);
console.log(employeeSalaryValue);


// 32
function personName() {

    return "Dinesh";

}

let returnedName = personName();
console.log(returnedName);


// 33
function result(marks) {

    if (marks >= 35) {
        return "Pass";
    } else {
        return "Fail";
    }

}

console.log(result(70));


// 34
function discount(price, discount) {

    return discount;

}

let discountValue = discount(1000, 20);
console.log(discountValue);


// 35
function operation(a, b) {

    return a + b;

}

function display(value) {

    console.log(value * 2);

}

let operationResult = operation(10, 20);

display(operationResult);


// 36
let outsideValue = "Hello JavaScript";

function showValue() {

    console.log(outsideValue);

}

showValue();


// 37
let person = {
    name: "Dinesh",
    designation: "Developer"
};

function showPerson() {

    console.log(person.name);
    console.log(person.designation);

}

showPerson();


// 38
let salaryAmount = 40000;

function addBonus() {

    let bonus = 5000;

    console.log(salaryAmount + bonus);

}

addBonus();


// 39
let employeeData = {
    name: "Dinesh",
    role: "Developer",
    salary: 40000
};

function showEmployee() {

    console.log(employeeData.name);
    console.log(employeeData.role);
    console.log(employeeData.salary);

}

showEmployee();


// 40
let commonValue = 100;

function first() {
    console.log(commonValue);
}

function second() {
    console.log(commonValue);
}

first();
second();


// 41
function namedFunction(value) {

    console.log(value);

}

namedFunction("Hello");


// 42
let anonymousFunction = function(value) {

    console.log(value);

};

anonymousFunction("Hello from Anonymous Function");


// 43
let arrowFunction = (value) => {

    console.log(value);

};

arrowFunction("Hello from Arrow Function");


// 44
let arrowAdd = (a, b) => {

    return a + b;

};

console.log(arrowAdd(10, 20));


// 45

function namedAdd(a, b) {

    return a + b;

}

let anonymousAdd = function(a, b) {

    return a + b;

};

let arrowAddFunction = (a, b) => {

    return a + b;

};

console.log(namedAdd(10, 20));
console.log(anonymousAdd(10, 20));
console.log(arrowAddFunction(10, 20));


// 46
(function () {

    console.log("Hello JavaScript");

})();


// 47
(function (name) {

    console.log("Hello " + name);

})("Dinesh");


// 48
(function (product, discount) {

    console.log(
        "Special Offer: " +
        product +
        " with " +
        discount +
        "% discount"
    );

})("Laptop", 20);


// 49
function addWithCallback(callback, a, b) {

    let result = a + b;

    console.log("Addition:", result);

    callback(a, b);

}

function callbackFunction(a, b) {

    console.log("Callback values:", a, b);

}

addWithCallback(callbackFunction, 10, 20);


// 50
function subCallback(a, b) {

    console.log("Subtraction:", a - b);

}

function addWithSubCallback(callback, a, b) {

    console.log("Addition:", a + b);

    callback(a, b);

}

addWithSubCallback(subCallback, 20, 10);
