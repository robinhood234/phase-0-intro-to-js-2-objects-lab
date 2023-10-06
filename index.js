// Write your solution in this file!
const employee = {
  name:'Robin',
  streetAddress:'Naivasha',
}

function updateEmployeeWithKeyAndValue(employee, key, value){
  return {...employee, name:'Sam',streetAddress:'11 Broadway'}
}
function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
  
  employee.name = 'Sam'
  employee.streetAddress = '12 Broadway'
return employee;
}
function deleteFromEmployeeByKey(employee, key) {
  const newEmployee = { ...employee.name};
  delete newEmployee[0];
  return newEmployee;
}
function destructivelyDeleteFromEmployeeByKey(employee, key) {
  employee.name
  delete employee.name;
  return employee;
}
