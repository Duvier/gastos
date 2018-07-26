<template>
	<main>
		<v-layout row wrap>
		  	<v-flex lg4 offset-lg1 class="text-xs-center">
				<botones></botones>
			</v-flex>
		  	<v-flex lg4 offset-lg1 class="text-xs-center">
			  	<v-card>
			  	  <v-card-text class="display-3 font-weight-medium">
			  	    Cantidad: {{ cantidad }}
			  	  </v-card-text>
			  	</v-card>
		  	</v-flex>
		</v-layout>
	</main>
</template>
<script>
import Botones from './Botones'
export default {
	components: {Botones},
	data () {
	  return {
	    cantidad: 0
	  }
	}
}
</script>
<style>

</style>