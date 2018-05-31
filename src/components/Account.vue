<template>
  <v-layout row>
    <v-flex xs12 sm6 offset-sm3 lg4>
      <v-card>
        <v-card-media src="https://yt3.ggpht.com/a-/AJLlDp05YBFKwPMD-rqIKWID7Ko3p0lV2M3t2BaU4g=s900-mo-c-c0xffffffff-rj-k-no" height="300px">
          <v-layout column class="media">
            <v-card-title>
              <v-spacer></v-spacer>
              <v-btn icon class="mr-3">
                <v-icon>photo_camera</v-icon>
              </v-btn>
              <v-btn icon>
                <v-icon>more_vert</v-icon>
              </v-btn>
            </v-card-title>
            <!-- <v-spacer></v-spacer>
            <v-card-title class="pl-5 pt-5">
              <div class="display-1 pl-5 pt-5">Duvier Marin Escobar</div>
            </v-card-title> -->
          </v-layout>
        </v-card-media>
        <v-list two-line>
          <v-list-tile @click="">
            <v-list-tile-content>
              <v-list-tile-title>Duvier Marin Escobar</v-list-tile-title>
              <v-list-tile-sub-title>Nombre</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">phone</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>(650) 555-1234</v-list-tile-title>
              <v-list-tile-sub-title>Celular</v-list-tile-sub-title>
            </v-list-tile-content>
            <v-list-tile-action>
              <v-icon>chat</v-icon>
            </v-list-tile-action>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">mail</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>duvierm24@gmail.com</v-list-tile-title>
              <v-list-tile-sub-title>Correo</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider inset></v-divider>
          <v-list-tile @click="">
            <v-list-tile-action>
              <v-icon color="indigo">location_on</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Manzana 18 casa 24</v-list-tile-title>
              <v-list-tile-sub-title>Pradera, Valle del Cauca</v-list-tile-sub-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-card>
    </v-flex>
  </v-layout>
</template>
<script>
  export default {
    data: () => ({
      items: [
          { header: 'Today' },
          {title: 'Duvier Marin'},
          {title: 'Otro usuario'},
          {title: 'Brunch this weekend'},
          {title: 'Brunch'},
        ]
    }),
    props: {
    }
  }
</script>