<template>
  <div v-if="asyncDataStatus_ready">
    <ThreadList :threads="threads"/>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import ThreadList from '@/components/ThreadList'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  components: {
    ThreadList
  },

  mixins: [asyncDataStatus],

  data () {
    return {
      threads: sourceData.threads
    }
  },

  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },

    userById (userId) {
      return this.users.find(u => u.id === userId)
    }
  },

  created () {
    setTimeout(() => {
      this.asyncDataStatus_fetched()
    }, 2000)
  }
}
</script>

<style scoped></style>
