<template>
  <div class="row">
    <div class="col s6 offset-s3">
      <h1>Create task</h1>
      <form>
         <div class="input-field">
          <input v-model="title" id="title" type="text" class="validate" required>
          <label for="title">Title</label>
          <span class="helper-text" data-error="Title is requiered" ></span>
        </div>
        <div class="chips" ref="chips"></div>
         <div class="input-field ">
          <textarea v-model="description" id="description" class="materialize-textarea"></textarea>
          <label for="textarea1">Textarea</label>
          <span class="character-counter" style="float: right; font-size: 12px;">{{description.length}}/1800</span>
        </div>
        
  <input type="text" ref="datepicker">
        
      </form>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src


export default {
  name: 'create',
  data:()=>({
    description:'',
    title:''
  }),
  mounted(){
    // eslint-disable-next-line no-undef
    M.Chips.init(this.$refs.chips, {
      placeholder:'Task tags'
    })
    // eslint-disable-next-line no-undef
    M.Datepicker.init(this.$refs.datepicker,{
      format: 'dd.mm.yyyy',
      defaultDate:new Date(),
      setDefaultDate: true    
    });

  }
 
}
</script>
