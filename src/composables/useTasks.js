import { ref } from 'vue'

export function useTasks() {
  const tasks = ref([
    { id: 1, title: 'Website Design', priority: 'High', progress: 90, date: '26 Apr', attachments: 5, comments: 3, team: 5, status: 'pending' },
    { id: 2, title: 'Make a Wireframe', priority: 'Low', progress: 30, date: '28 Apr', attachments: 7, comments: 8, team: 4, status: 'pending' },
    { id: 3, title: 'Project Management', priority: 'Normal', progress: 75, date: '13 Sep', attachments: 6, comments: 5, team: 6, status: 'pending' },
    { id: 4, title: 'Website Redesign', priority: 'High', progress: 70, date: '17 Sep', attachments: 2, comments: 8, team: 8, status: 'inprogress' },
    { id: 5, title: 'Logo Redesign', priority: 'Normal', progress: 75, date: '12 Sep', attachments: 6, comments: 5, team: 9, status: 'inprogress' },
    { id: 6, title: 'Project Management', priority: 'High', progress: 40, date: '17 Apr', attachments: 7, comments: 8, team: 3, status: 'inprogress' },
    { id: 7, title: 'Website Redesign', priority: 'High', progress: 60, date: '17 Apr', attachments: 6, comments: 2, team: 5, status: 'onhold' },
    { id: 8, title: 'Website Redesign', priority: 'Low', progress: 65, date: '17 Apr', attachments: 6, comments: 2, team: 6, status: 'onhold' },
    { id: 9, title: 'Website Redesign', priority: 'High', progress: 60, date: '17 Apr', attachments: 6, comments: 2, team: 2, status: 'onhold' }
  ])

  const addTask = (task) => {
    tasks.value.push({ ...task, id: Date.now() })
  }

  const updateTask = (id, updates) => {
    const index = tasks.value.findIndex(t => t.id === id)
    if (index !== -1) {
      tasks.value[index] = { ...tasks.value[index], ...updates }
    }
  }

  const deleteTask = (id) => {
    tasks.value = tasks.value.filter(t => t.id !== id)
  }

  return {
    tasks,
    addTask,
    updateTask,
    deleteTask
  }
}