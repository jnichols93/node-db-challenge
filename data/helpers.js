const db = require('./dbConfig');

module.exports = {
    addResource,
    addProject,
    addTask,
    getResources,
    getProjects,
    getTasks
}

function addResource(resource) {
    return db('resources')
    .insert(resource)
    .then(ids => {
        return ids
    });
}

function addProject(project) {
    return db('projects')
    .insert(project)
    .then(ids => {
        return ids
    });
}

function addTask(task, id) {
    const newTask = {
        ...task,
        project_id: id
    }
    return db('tasks')
    .insert(newTask)
    .then(ids => {
        return ids
    });
}

function getResources() {
    return db('resources')
}

function getProjects() {
    return db('projects')
    .then(data => {
        const updatedBoolArray = data.map(project => {
            if(project.completed){
                const updatedBool = {
                    ...project,
                    completed:"YOU DUN DID IT" 
                };
                return updatedBool;
            } else {
                const updatedBool = {
                    ...project,
                    completed: "AINT DID"
                };
                return updatedBool;
            }
        });
        return updatedBoolArray;
    })
}

function getTasks() {
    return db('tasks as t')
    .join('projects as p', 'p.id', 't.project_id')
    .select(
    't.id', 
    't.description', 
    't.notes', 
    't.completed',
    'p.name as project_name',
    'p.description as project_description')
    .then(data => {
        const updatedBoolArray = data.map(task => {
            if(task.completed){
                const updatedBool = {
                    ...task,
                    completed: true
                };
                return updatedBool;
            } else {
                const updatedBool = {
                    ...task,
                    completed: false
                };
                return updatedBool;
            }
        });
        return updatedBoolArray;
    })
} 