Vue.component('accordion', {
  template: '#accordion',
  props: ['initOpen'],
  data () {
    return {
      open: false
    }
  },
  methods: {
    toggle () {
      this.open = !this.open
    }
  },
  created () {
    this.open = !!this.initOpen
  }
})

const app = new Vue({
  el: '#app'
})
