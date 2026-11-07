const employee = {   // employee object
    calcuTax(){
        console.log("Salary will be deducted by 10%");
    }
}

const Rohan = {      // Rohan object
    salary : 45000
}

Rohan.__proto__ = employee;  // creating prototype of employee object inside employee object.

