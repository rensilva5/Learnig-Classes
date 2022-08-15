class Human {
    name = ''  // it goes w/ line (this.name = name)
    grade = 100

    constructor(name) {
        this.name = name
    }

    sayHi() {
        return `my name is ${this.name}! ` 
    }
}

class Teacher extends Human {
    curentlyTeaching = 'yes'
    sayHi() {       // overriding old sayHi
        return `Hi I am proffesor ${this.name}! `
    }
}

class Student extends Human {
    // name = ''  // it goes w/ line (this.name = name)
    grade = 100
    }
    // sayHi() {
    //     return `my name is ${this.name}! ` 
    // }


let student1 = new Student('Bobby')
let teacher = new Teacher('Jennifer')

console.log(teacher.name)
console.log(teacher.sayHi())
console.log(student1.sayHi())