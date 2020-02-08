<template>
  <div class="row">
    <div v-if="task" class="col s6 offset-s3">
   <h1>{{task.title}}</h1>

    <form @submit.prevent="submitHandler">

        <div class="chips" ref="chips"></div>
         <div class="input-field ">
          <textarea style="min-height:150px" v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="textarea1">Description</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/1800</span>
        </div>
        
  <input type="text" ref="datepicker">
  <div v-if="task.status !== 'completed'">
      <button class="btn" type="submit" style="margin-right:1rem">Update</button>
      <button class="btn blue" type="button" v-on:click="completeTask">Complete task</button>     
   </div>
      </form>
  </div>
  <p v-else>Task not found</p>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
computed:{
  task(){
    return this.$store.getters.taskById(+this.$route.params.id)
  }
},

  data:()=>({
    description:'',
    chips:null,
    date:null,
  }),
  mounted(){
    this.description = this.task.description
    // eslint-disable-next-line no-undef
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder:'Task tags',
      data: this.task.tags
    })
    // eslint-disable-next-line no-undef
    this.date = M.Datepicker.init(this.$refs.datepicker,{
      format: 'dd.mm.yyyy',
      defaultDate:new Date(this.task.date),
      setDefaultDate: true    
    })
    setTimeout(()=>{
      // eslint-disable-next-line no-undef
      M.updateTextFields()
    },0)
  },
  methods:{
    submitHandler(){
     this.$store.dispatch('updateTask', {
       id: this.task.id,
       description: this.description,
       date: this.date.date
     })
   
      this.$router.push('/list')
    },
  
  completeTask(){
    this.$store.dispatch('completeTask',this.task.id)
    this.$router.push('/list')
  }
  },
  destroyed(){
    if(this.date && this.date.destroy){
      this.date.destroy()
    }
    if(this.chips && this.chips.destroy){
      this.chips.destroy()
    }
  }
 
}
</script>s