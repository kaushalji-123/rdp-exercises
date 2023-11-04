// const employees = [
//   {
//     name: 'John Doe',
//     age: 30,
//     city: 'New York',
//     occupation: 'Software Engineer'
//   },
//   {
//     name: 'Jane Smith',
//     age: 25,
//     city: 'San Francisco',
//     occupation: 'Web Developer'
//   },
//   {
//     name: 'Bob Johnson',
//     age: 40,
//     city: 'Los Angeles',
//     occupation: 'Data Scientist'
//   }
// ];

// const updatedEmployees = employees.map((employee) => {
//   employee.city = "New York";
//   return employee;
// });

// console.log(employees);
// console.log()

//            Explanation 

/* Ans : Okay from my perspective there is an `employees`  array that
 contains the objects or elements such as name, age, city, and 
 occupation and we are printing the `employees` as
  but here if we want to update any objects into the `employees` 
  rather than updating every change to the original employees 
  code here we created a new array "updatedEmployees " and
   with the help of "map" function we updated the city object of 
   the original array without modifying the original code.*/
function deepCopy(obj) {
  if (typeof obj !== 'object' || obj === null) {
    return obj;
  }

  if (Array.isArray(obj)) {
    return obj.map(deepCopy);
  }

  const copy = {};
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      copy[key] = deepCopy(obj[key]);
    }
  }

  return copy;
}

let DoCode = {
  laptop: "open",
  battery: 100,
  mind: "learning",
  distract: {
    first: "mobile",
    second: "gf",
  },
  function(coding) {
    return {
      name: "Divyanshu Kaushal",
      message: "Let's Start!",
    };
  },
};

let NoCode = deepCopy(DoCode);

NoCode.mind = "sleepy";
NoCode.distract.first = "Reel";

NoCode.function = function(code) {
  return {
    name: "Your Name",
    message: "let's do",
  };
};

console.log("DoCode:", DoCode);
console.log("NoCode:", NoCode);