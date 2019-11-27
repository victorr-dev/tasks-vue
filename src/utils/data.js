const createTasks = () => {
  let tareas = []
  for (let index = 0; index < 10; index++) {
    let tarea = {
      name: `Tarea ${index}`,
      user: {
        name: 'Victor',
        email: 'victor.ruiz@axity.com'
      },
      type: 'ToDo',
      priority: index,
      id: index
    }

    tareas.push(tarea)
  }

  return tareas
}

const listTasks = createTasks()

export default listTasks
