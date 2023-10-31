<script>
import FormComponent from './FormComponent.vue';

export default {
  data() {
    return {
      editActive: false,
    };
  },
  components: {
    FormComponent,
  },
  methods: {
    toggleEditForm() {
      this.editActive = !this.editActive;
    },
  },
};
</script>

<template>
<div class="about-me">
    <div class="row about-me">
        <div class="col-2 m-0 p-0">
            <h1>ABOUT ME</h1>
        </div>
        <div class="col-1 m-0 p-0">
            <div class="vl"></div>
        </div>
        <div class="col-3 m-0 p-0">
            <button class="edit-button" @click="toggleEditForm">{{ editActive ? 'CANCEL' : 'EDIT FORM' }}</button>
        </div>
    </div>
    <div class="row">
        <FormComponent :disabled="!editActive" />
    </div>
</div>
</template>

<style>
.about-me{
    padding: 20px;
}
.about-me h1 {
    font-size: 30px;
    color: white;
}


.edit-button {
    background-color: #7448E0;
    color: #ffffff;
    padding: 10px 40px;
    border-radius: 25px; 
    border: none;
    cursor: pointer;
}

.edit-button.active {
    background-color: #6540c3;

}

.vl {
    border-left: 1px solid #544F69;
    height: 40px;
    margin: 0 20px;
}
</style>
  
