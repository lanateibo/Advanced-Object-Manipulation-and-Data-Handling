
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



const studentClone = { ...student, graduationYear: 2026 };

console.log(studentClone); 




const newCourses = ["Data Analyst", "Problem Solving"];
const allCourses = [...student.courses, ...newCourses];

console.log(allCourses);



student.addCourse = function(course) {
    this.courses.push(course);
  };

student.addCourse("Python");
console.log(student.courses); 



student.totalCourses = function() {
    return this.courses.length;
  };

  console.log(student.totalCourses()); 



  

// Bonus Task
const total = scores.reduce((accumulator, current) => accumulator + current, 0);

const average = total / scores.length;

console.log(`Average Score: ${average}`); 
