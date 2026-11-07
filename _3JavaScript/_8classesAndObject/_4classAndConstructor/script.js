class Student{  // creating a student class
    constructor(){
        console.log("Constructor is attomatically called if new object is created.");
    }
    eat(){
        console.log("student is eating.");
    }
    study(){
        console.log("student is studying");
    }
    sleep(){
        console.log("student is sleeping");
    }
}

const Rohan = new Student();  
// creating an object.
// this will first call constructor automatically 

console.log(Rohan.study());
// this will call the study method and print inside it.

