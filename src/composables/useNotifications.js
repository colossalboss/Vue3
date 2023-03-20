import { reactive } from "vue"

const notifications = reactive([])

const addNotification = notification => {
  notification.push({
    ...notification,
    id: 3
  })
}

const removeNotification = id => {
  // findIndex
  // remove with splice
}

export default function () {
  return {
    notifications
  }
}
