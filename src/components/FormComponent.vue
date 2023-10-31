<script>
import { computed, reactive } from 'vue';
import { state, loginTime, resetUser, updateUser } from '../store';

export default {
  props: {
    disabled: Boolean,
  },
  setup() {
    const user = computed(() => state.user);

    return {
      user,
      loginTime,
    };
  },
};
</script>

<template>
<form class="col-4">
  <div class="mb-4 mt-5">
    <label for="firstName" class="form-label">First Name</label>
    <input type="text" id="firstName" v-model="user.firstName" :disabled="disabled" class="form-control" />
  </div>

  <div class="mb-4">
    <label for="lastName" class="form-label">Last Name</label>
    <input type="text" id="lastName" v-model="user.lastName" :disabled="disabled" class="form-control" />
  </div>

  <div class="mb-4">
    <label for="studentCode" class="form-label">Student Code</label>
    <input type="text" id="studentCode" v-model="user.studentCode" :disabled="disabled" class="form-control" />
  </div>

  <div class="mb-4">
    <label class="form-label">Logged in at</label>
    <ul>
      <li v-for="timestamp in user.loggedAt" :key="timestamp">{{ timestamp }}</li>
    </ul>
  </div>
</form>
</template>
  
<style>
form {
  margin: 0;
  padding: 0;
  color: #ffffff;
}

form .form-control {
  background-color: #464157;
  border: none;
  border-radius: 2px;
  color: #ffffff;
}

form .form-control:disabled {
  background-color: #22202B;
  border: none;
  border-radius: 2px;
  color: #ffffff;
}
</style>
