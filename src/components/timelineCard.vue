<template>
  <v-card color="white" class="ma-2 post">
    <v-layout row wrap>
      <v-flex xs12 class="pa-2">
        <div class="font-weight-bold grey--text text--darken-3">{{x.details.when}}</div>
        <v-divider></v-divider>
      </v-flex>
      <v-flex class="pa-2">
        <span>
          <v-icon color="primary">location_on</v-icon>{{x.details.where}}
        </span>
        <span class="mx-2">
          <v-icon color="cyan">person</v-icon>{{x.details.who}}
        </span>
        <span class="mx-1">
          <v-icon color="blue-grey">help</v-icon>{{x.details.what}}
        </span>
      </v-flex>


      <v-flex xs12>
      
      </v-flex>
      <v-flex class="xs12">
        <p class="pa-4">{{x.details.des}}</p>

      </v-flex>
      <!-- <v-flex xs5>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/halcyon.png"
          height="125px"
          contain
        ></v-img>
      </v-flex> -->
    </v-layout>
    <v-divider light></v-divider>
    <v-card-actions class="py-1 px-3">
      이 기록 평가
      <v-spacer></v-spacer>
      <v-rating v-model="rating" color="amber" background-color="amber lighten-3"></v-rating>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['x'],
  data () {
    return {
      rating: 3
    }
  }
}
</script>
