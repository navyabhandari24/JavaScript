const course = {
    coursename : "Javascript",
    price : "999",
    courseInstructor : "Navya"
}
// object destructuring
const {courseInstructor: instructor} = course
console.log(instructor);

