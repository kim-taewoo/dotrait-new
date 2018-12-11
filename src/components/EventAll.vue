<template>
  <div>

    <v-toolbar
      class="white"
      app
      dense
      flat
    >
      <v-btn style="left:10px;bottom:0px;" icon absolute><v-icon>view_headline</v-icon></v-btn>
      <v-btn :ripple="false" @click.stop="locDialog = true" class="location-btn" small flat><v-icon color="#BD0034" class="mr-1" small>room</v-icon><span></span> 서울특별시 종로구 혜화동 <v-icon small>arrow_drop_down</v-icon></v-btn>
      <v-dialog
        v-model="locDialog"
        max-width="290"
      >
        <v-card>
          <v-card-title class="px-0 subheading font-weight-bold justify-center">내 위치 정하기</v-card-title>
          <v-divider></v-divider>
          <div>
            <v-container class="pa-0">
              <v-layout>
                <v-flex class="py-3 text-xs-center">
                  <v-btn class="location-btn" icon><v-icon big color="#BD0034">near_me</v-icon></v-btn>
                  <div class="mt-2">현위치로 검색</div>
                </v-flex>
                <v-flex class="py-3 text-xs-center">
                  <v-btn class="location-btn" icon><v-icon big color="#BD0034">map</v-icon></v-btn>
                  <div class="mt-2">지역 설정하기</div>
                </v-flex>
              </v-layout>
            </v-container>
          </div>
        </v-card>
      </v-dialog>
      <!-- <v-toolbar-title>D<span style="color:#BD0034">O</span>TRAIT</v-toolbar-title> -->
      <!-- <div>DOTRAIT</div> -->
      <v-btn style="right:10px;bottom:0px;" icon absolute><v-icon>search</v-icon></v-btn>
    </v-toolbar>
    <div class="py-2 px-0">
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
      <div class="pa-0">
        <div class="px-3 pt-3">
          <h2 class="subheading font-weight-bold">추천 스케쥴</h2>
        </div>
        <div class="cs-swiper-wrapper">
          <swiper :options="swiperOption">

            <swiper-slide class="recommend-card-wrap" v-for="(rec,index) in 5" :key="index">
              <v-card height="235" class="recommend-card">
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
                  <div class="recommend-card-content">
                    <span class="grey--text">Number 10</span><br>
                    <span>Whitehaven Beach</span><br>
                    <span>Whitsunday Island, Whitsunday Islands Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero soluta ad quos magnam quod necessitatibus, quo sint. Quod ad quam totam deleniti eos animi ab nemo exercitationem veritatis, fugiat et.</span>
                  </div>
                </v-card-title>
              </v-card>
            </swiper-slide>
            
          </swiper>
        </div>
      </div>
      <div class="pa-0">
        <v-layout>
          <v-flex>
            <div class="px-3 pt-3">
              <h2 class="subheading font-weight-bold">오픈 피드</h2>
            </div>

            <v-container class="pt-2">
              <v-layout>
                <v-flex class="px-3">
                  <v-card style="border-radius:8px;" class="my-3" v-for="(card, index) in 6" :key="index">
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
      </div>
    </div>
  </div>
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
      locDialog: false,
      swiperOption: {
        // centeredSlides: true,
        freeMode: true,
        slidesPerView: 2,
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
  /* width: 100%; */
  position: relative;
  margin-top: 10px;
}

.swiper-container {
  /* width: 100%; */
  min-height: 250px;
  border-bottom: 3px solid #ccc;
}

.swiper-slide:nth-child(1) {
    margin-left: 10px;
}

.recommend-card-wrap {
  width: 48% !important;
}

.recommend-card {
  border-radius: 10px !important;
}

.recommend-card-content {
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
}
.location-btn::before {
  opacity: 0;
}
</style>

