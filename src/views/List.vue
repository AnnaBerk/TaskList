<template>
  <div >
   <h1>List</h1>

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
  <tr v-for="(task, ind) of tasks" :key="task.id">
    <td>{{ind+1}}</td>
    <td>{{task.title}}</td>
    <td>{{new Date(task.date).toLocaleDateString()}}</td>
    <td class="description-cell"><div class="description">{{task.description}}</div></td>
    <td>{{task.status}}</td>
    <router-link tag="button" class="btn btn-small" :to="'/task/'+task.id">
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
  computed:{
    tasks(){
      return this.$store.getters.tasks
    }
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