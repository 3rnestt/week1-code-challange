//Promt the user to input a number for their grade between 0 and 100
let studentMarks = prompt("Please enter the student's marks between 0 and 100:");

// Convert the input to a number
studentMarks = Number(studentMarks);

// Check the grade based on the marks and return a  Grade
if (studentMarks > 79) {
  console.log("Grade A");
} else if (studentMarks >= 60 && studentMarks <= 79) {
  console.log("Grade B");
} else if (studentMarks >= 49 && studentMarks <= 59) {
  console.log("Grade C");
} else if (studentMarks >= 40 && studentMarks <= 49) {
  console.log("Grade D");
} else if (studentMarks < 40 ){
  console.log("Grade E");
}