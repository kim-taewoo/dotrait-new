<template>
  <v-app class="white">
 
    <!-- <v-toolbar
      class="white"
      app
      dense
      flat
    >
      <v-btn style="left:10px;bottom:0px;" icon absolute><v-icon>view_headline</v-icon></v-btn>
      <v-btn class="location-btn" small flat><v-icon class="mr-1" small>room</v-icon><span></span> 서울특별시 종로구 혜화동 <v-icon small>arrow_drop_down</v-icon></v-btn>

      <v-btn style="right:10px;bottom:0px;" icon absolute><v-icon>search</v-icon></v-btn>
    </v-toolbar> -->
    <v-content>
      <router-view/>
    </v-content>

    <v-bottom-nav
      app
      :value="true"
      color="#BD0034"
    >
      <v-btn exact :to="{name: 'MyCalendar'}" flat color="white">
        <span>나의 스케쥴</span>
        <v-icon>account_circle</v-icon>
      </v-btn>

      <v-btn exact :to="{name:'NewEvent'}" flat color="white">
        <span>내가 추천하기</span>
        <v-icon>add</v-icon>
      </v-btn>

      <v-btn exact :to="{name:'EventAll'}" flat color="white">
        <span>스케쥴 추천</span>
        <v-icon>event</v-icon>
      </v-btn>
    </v-bottom-nav>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      activeBtn: 0,
    }
  },
  name: 'App'
}
</script>

<style>
html { overflow-y: auto }
.v-toolbar__content {
  justify-content: center;
  text-align: center;
  border-bottom: 1px solid rgb(165, 165, 165);
}

</style>
