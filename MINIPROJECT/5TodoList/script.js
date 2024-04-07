let input = prompt("what would you like to do");
const todo = ["Go to Club", "Talk To Girl"];

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("*******************");
    for (let i = 0; i < todo.length; i++) {
      console.log(`${i}  : ${todo[i]}`);
    }
    console.log("*******************");
  } else if (input === "new") {
    const newTodo = prompt("Ok What is the new todo ?");
    todo.push(newTodo);
    console.log(`${newTodo} added to list`);
  } else if (input === "delete") {
    const index = parseInt(prompt("ok enter an index "));
    if (!Number.isNaN(index)) {
      const deleted = todo.splice(index, 1);
      console.log(`ok deleted ${deleted}`);
    } else {
      console.log("UNknown index");
    }
  }

  input = prompt("what would you like to do");
}
