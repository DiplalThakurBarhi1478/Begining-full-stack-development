class Parent {  // creating a parent class
    hello(){
        console.log("hello");
    }
}

class Child extends Parent{ 
    // creating a child class which will inherit some properties and method from the parent class
    // will inherit everything form the parent class

}

let childObj = new Child(); // creating child object

console.log(childObj.hello()); // printing the parent method using the child object