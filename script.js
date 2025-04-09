
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
  

  
const studentJSON = JSON.stringify(student);
console.log(studentJSON);


const studentObj = JSON.parse(studentJSON);
console.log(studentObj);



const { name, courses } = student;

console.log(student.name); 
console.log(courses); 



const scores = [85, 92, 78, 90];
const [score1, score2] = scores;

console.log(score1); 
console.log(score2); 