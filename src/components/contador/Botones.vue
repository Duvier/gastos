<template>
	<main>
	    <v-btn
		    :loading="loading"
  			:disabled="loading"
  			@click.native="loader = 'loading'; disminuir()"
	    	color="default">Reducir</v-btn>
	    <v-btn
	    	:loading="loading1"
  			:disabled="loading1"
  			@click.native="loader = 'loading1'; aumentar()"
	    	color="success">Aumentar</v-btn>
	</main>
</template>
<script>
  export default {
    data () {
      return {
        loader: null,
        loading: false,
        loading1: false,
      }
    },
    methods: {
    	aumentar: function(){
    		this.$emit('');
    	},
    	disminuir: function(){
    		
    	}
    },
    watch: {
      loader () {
        const l = this.loader
        this[l] = !this[l]

        setTimeout(() => (this[l] = false), 1000)

        this.loader = null
      }
    }
  }
</script>
<style>

</style>