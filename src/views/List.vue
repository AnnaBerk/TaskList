<template>
  <div >
   <h1>List</h1>
   <div class="row">
  <div class="input-field s6 col"> 
   <select ref="select" v-model="filter">
      <option value="" disabled selected>Choose your option</option>
      <option value="active">active</option>
      <option value="outdated">outdated</option>
      <option value="completed">completed</option>
    </select>
    <label >Status filter</label>
</div> 
</div>
<button v-if="filter" class="btn btn-small" @click="filter = null">Clear filter</button>
   <hr>
   <table v-if="tasks.length">
<thead>
  <tr>
    <th>#</th>
    <th>Title</th>
    <th>Date</th>
    <th>Description</th>
    <th>Status</th>
    <th>Open</th>
  </tr>
</thead>
<tbody>
  <tr v-for="(task, ind) of displayTasks" :key="task.id">
    <td>{{ind+1}}</td>
    <td>{{task.title}}</td>
    <td>{{new Date(task.date).toLocaleDateString()}}</td>
    <td class="description-cell"><div class="description">{{task.description}}</div></td>
    <td>{{task.status}}</td>
    <router-link tag="button" class="btn btn-small" :to="'/task/'+ task.id">
      Open
    </router-link>
  </tr>
</tbody>
   </table>
   <p v-else>No tasks</p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  data:()=>({
    filter:null,
  }),
  computed:{
    tasks(){
      
      return this.$store.getters.tasks
   },
   displayTasks(){
     return this.tasks.filter(t=>{
       if(!this.filter){
         return true
       }
       return t.status === this.filter
     })
   }
  },
  mounted(){
    // eslint-disable-next-line no-undef
    M.FormSelect.init(this.$refs.select)
  }
  
}
</script>

<style lang="scss" scoped>
.description{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.description-cell{
  max-width: 400px;
}
</style>