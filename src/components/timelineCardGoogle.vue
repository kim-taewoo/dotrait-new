<template>
  <v-card class="mb-3 mx-3 elevation-2" color="white">
    <v-layout row wrap>
      <v-flex class="xs12 pa-3">
        <div><span class="font-weight-bold mr-2">제목 : </span> {{item.summary}}</div>
        <div><span class="font-weight-bold mr-2">시작시간 : </span> {{item.start.dateTime ? item.start.dateTime : item.start.date}}</div>
        <div><span class="font-weight-bold mr-2">종료시간 : </span> {{item.end.dateTime ? item.start.dateTime : item.start.date}}</div>
        <div><span class="font-weight-bold mr-2">기록한 날 : </span> {{item.created}}</div>
        
      </v-flex>
    </v-layout>
    <v-card-actions class="py-1 px-3">
      이 기록 평가
      <v-spacer></v-spacer>
      <v-rating v-model="rating" color="amber" background-color="amber lighten-3"></v-rating>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  props: ['item'],
  data () {
    return {
      rating: 3
    }
  }
}
</script>

