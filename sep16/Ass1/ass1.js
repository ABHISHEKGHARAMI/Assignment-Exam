//Requirements: Program to demonstrate default and parameterized constructor.
class Greeting{
    constructor(){
        this.name= 'S1';
        this.age= 24;
        this.address = 'Moon';
    }
    print(){
        console.log("hello there!");
    }
}


//paramitarized constructer
class Person{
    name;
    age;
    address;

    //paramitarized constrcuter
    constructor(name,age,address){
        this.name = name;
        this.age = age;
        this.address = address;
    }
}
//calling
const g1 = new Greeting();
console.log(g1);

//calling paramiatrized constructer
const p1 = new Person('Abhishek',23,'West-bengal');
console.log(p1.name,p1.age,p1.address);