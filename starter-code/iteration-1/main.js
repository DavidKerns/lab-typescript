var myArray = [];
var addTask = (function () {
    function addTast(task) {
        this.task.push(myArray);
    }
});
var listAllTasks = (function () {
    myArray.forEach(function (task) { console.log(task); });
});
var deleteTask = (function () {
    function deleteTask(task) {
        this.task.splice(myArray);
    }
});
console.log("Number of items:", addTask('This is our first task'));
console.log("Number of items:", addTask('Eat pizza 🍕 yummy!!!'));
console.log("Number of items:", addTask('Finish this iteration 1!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 2!! 🤓'));
console.log("Number of items:", addTask('Finish this iteration 3!! 🤓'));
listAllTasks();
console.log("Number of items:", deleteTask('Finish this iteration 1!! 🤓'));
listAllTasks();
