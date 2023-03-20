<template>
  <div class="col-full" v-if="asyncDataStatus_ready">

    <div class="thread-list">

      <h2 class="list-title">Threads</h2>

      <div v-for="thread in threads" :key="thread.id" class="thread">
        <div>
          <p>
            <router-link :to="{ name: 'ThreadShow', params: { id: thread.id } }">{{ thread.title }}</router-link>
          </p>
          <p class="text-faded text-xsmall">
            By <a href="#">{{ userById(thread.userId).name }}</a>, {{ thread.publishedAt }}.
          </p>
        </div>

        <div class="activity">
          <p class="replies-count">
            {{ thread.posts.length }} replies
          </p>

          <img class="avatar-medium" :src="userById(thread.userId).avatar" alt="">

          <div>
            <p class="text-xsmall">
              <a href="#">{{ userById(thread.userId).name }}</a>
            </p>
            <p class="text-xsmall text-faded">{{ thread.publishedAt }}</p>
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
import sourceData from '@/data.json'
import asyncDataStatus from '@/mixins/asyncDataStatus'

export default {
  props: {
    threads: {
      type: Array,
      required: true
    }
  },
  mixins: [asyncDataStatus],
  data () {
    return {
      posts: sourceData.posts,
      users: sourceData.users
    }
  },
  methods: {
    postById (postId) {
      return this.posts.find(p => p.id === postId)
    },
    userById (userId) {
      return this.users.find(p => p.id === userId)
    }
  },
  created () {
    this.$emit('ready')
    setTimeout(() => {
      this.asyncDataStatus_fetched()
    }, 2000)
  }
}
</script>

<style scoped></style>
