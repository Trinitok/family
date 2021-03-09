<template>
  <div id="app">
      <h1>Please Click One of the People on the Nav Bar</h1>
  </div>
</template>

<script>

export default {
  name: 'Home',
  components: {
  },
  data() {
    return {
    }
  },
  /**
   * For axios requests please use the following URL to find stuff
   * https://my-json-server.typicode.com/Trinitok/test-job-json/jobs
   */
  methods: {
    
  },
  /**
   * This is the data that will be used to render the web page
   */
  created() {
    
  },
  inject: [
  ],
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 7px 20px;
  cursor: pointer;
}

.btn:hover {
  background: #666;
}
</style>
