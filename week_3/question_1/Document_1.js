const employees = [
  {
    name: 'John Doe',
    age: 30,
    city: 'New York',
    occupation: 'Software Engineer'
  },
  {
    name: 'Jane Smith',
    age: 25,
    city: 'San Francisco',
    occupation: 'Web Developer'
  },
  {
    name: 'Bob Johnson',
    age: 40,
    city: 'Los Angeles',
    occupation: 'Data Scientist'
  }
];

const updatedEmployees = employees.map((employee) => {
  employee.city = "New York";
  return employee;
});

console.log(employees);
console.log()

//            Explanation 

/* Ans : Okay from my perspective there is an `employees`  array that
 contains the objects or elements such as name, age, city, and 
 occupation and we are printing the `employees` as
  but here if we want to update any objects into the `employees` 
  rather than updating every change to the original employees 
  code here we created a new array "updatedEmployees " and
   with the help of "map" function we updated the city object of 
   the original array without modifying the original code.*/