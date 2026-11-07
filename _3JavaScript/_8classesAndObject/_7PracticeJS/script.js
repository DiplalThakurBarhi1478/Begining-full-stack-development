class User{                   // creating user class
    constructor(name, email){ // using constructor to immediately store the name and email once the object is created.
        this.name = name;
        this.email = email;
    }

    viewData(){             // this is method that will print the data 
        console.log(this.name);
        console.log(this.email);
    }
}

class Admin extends User{    // created child class
    constructor(name, email){ 
        super(name, email);
    }

    editData(){             // editing the data
        this.name = prompt("Name you want : ");
        this.email = prompt("Email you want : ");
    }
}

let userObj = new Admin("Diplal", "023neb750@sxc.edu.np");

