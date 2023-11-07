let input = prompt('Was möchtest du machen?');
const todo = ['Räum dein Zimmer auf'];
while (input !== 'stop' && input !== 'q') {
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
            const deleted = todos.splice(index, 1);
            console.log(`Ok, wurde gelöscht ${deleted[0]}`);
        } else {
            console.log('Unknown index')
        }
    }
    input = prompt('Was willst du noch tun?')
}
console.log('App wurde beendet!')