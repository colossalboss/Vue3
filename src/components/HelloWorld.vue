<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <!-- <AppFormField v-model="form.name" name="name" label="Name" rules="required" />
    <AppFormField v-model="form.username" name="username" label="Username" rules="required" />
    <AppFormField v-model="form.email" name="email" label="Email" rules="required|email" type="email" />
    <AppFormField v-model="form.password" name="password" label="Password" rules="required|min:8" type="password" /> -->

    <!-- <AppFormField label="Location" name="location" v-model="activeUser.location" list="locations" @mouseenter="loadLocationOptions"/>
      <datalist id="locations">
        <option v-for="location in locationOptions" :value="location.name.common" :key="location.name.common" />
      </datalist> -->
  </div>
</template>

<script setup>
import { useCategoryStore } from '@/stores/CategoryStore'
import { storeToRefs } from 'pinia'

const { categories } = storeToRefs(useCategoryStore())
console.log(categories.value, 'AREA')
const msg = ''

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}</style>
