//Requirements: Program to demonstrate different ways of creating objects.
const employee = { firstName: "Brian", lastName: "Dean", age: 50, company: "Google" };
console.log(employee);
// creating objects
const facebook = new Object();
facebook.firstName = 'Haron';
facebook.lastName = 'Den';
facebook.age = 24;
facebook.company = 'Facebook';
console.log(facebook);

const employee1 = {
    details: function () {
        console.log(`FirstName: ${this.firstName}, LastName: ${this.lastName}, Company: ${this.company}`)
    }
}
 
const e = Object.create(employee1)
e.firstName = "Harry"
e.lastName = "Cruise"
e.company = "Amazon"
e.details();