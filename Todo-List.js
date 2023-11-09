let input = prompt('Was möchtest du machen?');
const todo = ['Räum dein Zimmer auf'];
while (input !== 'stop' && input !== 's') {
    if (input === 'liste') {
        console.log('*****************')
        for (let i = 0; i < todo.length; i++) {
            console.log(`${i}: ${todo[i]}`);
        }
        console.log('*****************')
    } else if (input === 'neu') {
        const newTodo = prompt('Ok, was willst du hinzufügen?');
        todo.push(newTodo);
        console.log(`${newTodo} wurde der Liste hinzugefügt!`)
    } else if (input === 'löschen') {
        const index = parseInt(prompt('Ok, schreibe den Index zum Löschen:'));
        if (!Number.isNaN(index)) {
            if (!Number > todos.length) {
                const deletes = todos.splice(index, 1);
                console.log(`${deletes[0]} was deleted`);
            } else { console.log("Invalid Index") }
        } else {
            console.log("Unknown Index");
        }
    }
    input = prompt('Was willst du noch tun?')
}
console.log('App wurde beendet!')