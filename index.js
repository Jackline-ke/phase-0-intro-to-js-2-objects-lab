// Write your solution in this file!

function updateEmployeeWithKeyAndValue(obj, key, value){
    return {
        ...obj, [key]: value,
    }
}

function  destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
   obj[key] = value;
   return obj;
}

function  deleteFromEmployeeByKey(obj, key){
    const newEmployee = {...obj}
    delete newEmployee[key];
    return newEmployee;
}
function  destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;

}

const employee = {
    name:"Qlynn",
    streetAddress: '00100',
}
