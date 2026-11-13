function defaultTasks() {
    return [
        { title: "Préparer le cours DevOps", done: true },
        { title: "Corriger les TP", done: false },
        { title: "Préparer la séance 2", done: false },
        { title: "Apprendre Git et GitHub", done: false }
    ];
}
function addTask(tasks, title) {
    const clean = title.trim();
    if (clean === "") return tasks;
    tasks.push({ title: clean, done: false });
    return tasks;
}
function toggleTask(tasks, index) {
    tasks[index].done = !tasks[index].done;
    return tasks;
}
function removeTask(tasks, index) {
    tasks.splice(index, 1);
    return tasks;
}
if (typeof module !== "undefined") {
    module.exports = { defaultTasks, addTask, toggleTask, removeTask };
}