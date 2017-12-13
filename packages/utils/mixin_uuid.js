export default {
  created :function() {
    this.uuid = Math.random().toString(36).substring(3, 8)
  }
}
