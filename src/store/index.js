import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks:JSON.parse(localStorage.getItem('tasks') || '[]')
  },
  mutations: {
    createTask(state, task){
      state.tasks.push(task)

      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    updateTask(state, {id, description, date}){
      const tasks = state.tasks.concat()

      const ind = tasks.findIndex(t=>t.id ===id)
      const task = tasks[ind]

      const status = new Date(date)>new Date()? 'active':'outdated'
      tasks[ind] = {...task, date, description, status}

      state.tasks = tasks
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    },
    completeTask(state, id){
      const ind = state.tasks.findIndex(t => t.id ===id)
      state.tasks[ind].status = 'completed'
      localStorage.setItem('tasks', JSON.stringify(state.tasks))
    }

  },
  actions: {
    createTask({commit},task){
      commit('createTask',task)
    },
    updateTask({commit},task){
      commit('updateTask',task)
    },
    completeTask({commit},id){
      commit('completeTask',id)
    }
  },
  getters: {
    tasks: s => s.tasks,
    taskById:s => id => s.tasks.find(t =>t.id === id)
  },
  modules: {
  }
})
