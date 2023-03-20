const PageScrollDirective = {
  mounted (el, binding) {
    el.__PageScroll__ = binding.value
    // use debouncing from lodash to limit the number of times this fires in a particular time frame

    document.addEventListener('scroll', el.__PageScroll__)
  },

  unmounted (el) {
    document.removeEventListener('scroll', el.__PageScroll__)
  }
}

export default (app) => {
  app.directive('page-scroll', PageScrollDirective)
}
