<template>
  <div id="app">
      <div v-if="login">
	<router-view></router-view>
  	</div>
  <div v-else>
	  <login></login>
  </div>
  </div>
</template>

<script>
import '../components'

export default {
	data(){
		return {
			login:false,
		}
	},
   components: {
	
  },
  mounted(){
	  let user = localStorage.getItem('user')
	  user?this.login=true:this.login=false
  }
}



</script>

<style>
</style>
