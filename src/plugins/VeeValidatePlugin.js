import { defineRule, Form, ErrorMessage, Field, configure } from 'vee-validate'
import { localize } from '@vee-validate/rules'

export default (app) => {
  defineRule('required', (value) => {
    if (value && value.trim()) return true
    return false
  })

  defineRule('unique', async (value) => {
    // check if username exist
  })

  configure({
    generateMessage: localize('en', {
      messages: {
        required: '{field} is required'
      }
    })
  })

  app.component('VeeForm', Form)
  app.component('VeeField', Field)
  app.component('VeeErrorMessage', ErrorMessage)
}

// use as
{ /* <VeeField name="name" type="text" rules="required" /> */ }
