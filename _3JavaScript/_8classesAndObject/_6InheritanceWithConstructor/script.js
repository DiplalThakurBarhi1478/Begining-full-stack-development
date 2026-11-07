class Parent {  // creating a parent class
    constructor(){
        console.log("I am a constructor of Parent.");
    }
    eat(){
        console.log("eat");
    }

    sleep(){
        console.log("sleep");
    }
}

class Engineer extends Parent{ 
    // creating a child class which will inherit some properties and method from the parent class
    // will inherit everything form the parent class

    constructor() {
        super();                // this calls the parent constructo automatically .
        console.log("I am Engineer Constructor.");
    }
    work(){
        console.log("I am an Engineer.");
    }
}


const Diplal = new Engineer();
