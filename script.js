
const student = {
    name: "Lana Teibo",
    age: 20,
    enrolled: true,
    courses: ["Web programming", "JavaScript", "Operating System"],
  
    
    displayInfo: function() {
      return `${this.name}, Age: ${this.age}, Enrolled: ${this.enrolled}`;
    }
  };
  
  
  console.log(student.name); 
  console.log(student.age);  
  console.log(student.displayInfo());  
  