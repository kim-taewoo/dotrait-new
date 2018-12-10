<template>
  <v-container fluid class="py-2 px-0">
    <div class="parent">
      <div class="child">
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
        <div class="card subheading">category</div>
      </div>
    </div>
    <v-container class="pa-0">
      <div class="px-3 pt-3">
        <h2 class="subheading font-weight-bold">추천 스케쥴</h2>
      </div>
      <div class="cs-swiper-wrapper">
        <swiper style="width:100%;" :options="swiperOption">

          <swiper-slide>
            <v-card>
              <v-img
                class="white--text"
                height="130px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <span class="grey--text">Number 10</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
                </div>
              </v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text"
                height="130px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <span class="grey--text">Number 10</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
                </div>
              </v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text"
                height="130px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <span class="grey--text">Number 10</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
                </div>
              </v-card-title>
            </v-card>
          </swiper-slide>
          <swiper-slide>
            <v-card>
              <v-img
                class="white--text"
                height="130px"
                src="https://cdn.vuetifyjs.com/images/cards/docks.jpg"
              >
                <v-container fill-height fluid>
                  <v-layout fill-height>
                    <v-flex xs12 align-end flexbox>
                      <span class="headline">Top 10 Australian beaches</span>
                    </v-flex>
                  </v-layout>
                </v-container>
              </v-img>
              <v-card-title>
                <div>
                  <span class="grey--text">Number 10</span><br>
                  <span>Whitehaven Beach</span><br>
                  <span>Whitsunday Island, Whitsunday Islands</span>
                </div>
              </v-card-title>
            </v-card>
          </swiper-slide>
        </swiper>
      </div>
    </v-container>
    <v-container class="pa-0">
      <v-layout>
        <v-flex>
          <div class="px-3 pt-3">
            <h2 class="subheading font-weight-bold">오픈 피드</h2>
          </div>

          <v-container class="pt-2">
            <v-layout>
              <v-flex>
                <v-card class="my-3" v-for="(card, index) in 6" :key="index">
                  <v-img
                    class="white--text"
                    height="150px"
                    src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
                  >
                    <v-container fill-height fluid>
                      <v-layout fill-height>
                        <v-flex xs12 align-end flexbox>
                          <span class="headline">Top 10 Australian beaches</span>
                        </v-flex>
                      </v-layout>
                    </v-container>
                  </v-img>
                  <v-card-title>
                    <div>
                      <span class="grey--text">Number 10</span><br>
                      <span>Whitehaven Beach</span><br>
                      <span>Whitsunday Island, Whitsunday Islands</span>
                    </div>
                  </v-card-title>
                </v-card>
              </v-flex>
            </v-layout>
          </v-container>
        </v-flex>
      </v-layout>
    </v-container>
  </v-container>
</template>

<script>
import 'swiper/dist/css/swiper.css'
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween: 10,
      }
    }
  }
}
</script>

<style>

.parent {
  width: 100%;
  width: 100vw;
  height: 36px;
  border-bottom: 1px solid rgb(165, 165, 165);
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
}
.child {
  height: 100%;
  box-sizing: content-box;
  margin-bottom: -50px;
  padding-bottom: 50px; 
  overflow-y: hidden;
  overflow-x: scroll;
  white-space: nowrap;
}
.card {
  display: inline-block;
  padding-left: 10px;
  padding-right: 10px;
}
.parent ::-webkit-scrollbar {
    display: none;
  }

.cs-swiper-wrapper {
  /* padding-left: 9px;
  padding-right: 9px; */
  position: relative;
  margin-top: 10px;
}

.swiper-container {
  width: 100%;
  min-height: 250px;
  border-bottom: 3px solid #ccc;
}

.swiper-slide {
  width: 81%;
}

.v-card {
  border-radius: 10px;
}
</style>

