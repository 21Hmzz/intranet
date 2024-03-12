<template>
  <section>
    <h1>
      Users List
    </h1>
    <div>
      <ul>
        <li v-for="user in users" :key="user.id">
          {{ user.username }}
        </li>
      </ul>
    </div>
  </section>
</template>

<script setup lang="ts">

import type {User} from "@/types";
import {onMounted, ref} from "vue";
import {getUsers} from "@/tools/users";

const users = ref<User[]>([])

onMounted(() => {
  getUsers().then((data) => {
    users.value = data
    console.log(data)
  })
})
</script>