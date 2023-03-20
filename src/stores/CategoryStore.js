import { defineStore } from 'pinia'
import sourceData from '@/data.json'

export const useCategoryStore = defineStore('CategoryStore', {
  state: () => {
    return {
      categories: sourceData.categories
    }
  },
  getters: {},
  actions: {}
})
