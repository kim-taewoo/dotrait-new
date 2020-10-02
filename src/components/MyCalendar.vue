<template>
  <v-container fill-height fluid>
    <v-toolbar
      class="white"
      app
      dense
      flat
    >
      MY 캘린더
    </v-toolbar>
    <v-layout wrap justify-center align-center>
      <v-flex>
        <div class="px-3 pt-3">
          <h2 class="subheading font-weight-bold">추천 스케쥴</h2>
        </div>
        <v-card class="pt-3">
          <v-flex xs12 class="cs-cal-heatmap-container">
            <div id="cal-heatmap" style="overflowX:hidden;"></div>
          </v-flex>
          <v-layout>
            <v-flex class="xs12 text-xs-right">
              <v-btn icon id="preBtn" ><v-icon>arrow_left</v-icon></v-btn>
              <v-btn icon id="nextBtn" ><v-icon>arrow_right</v-icon></v-btn>
            </v-flex>

          </v-layout>

        </v-card>

        <v-btn @click="handleAuthClick">로그인</v-btn>
        <v-btn @click="handleSignoutClick">로그아웃</v-btn>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
import moment from 'moment'
const CLIENT_ID = '221913700182-scpsr8uka7v510p5ruol9m0bk9ivnk5u.apps.googleusercontent.com';
const API_KEY = 'AIzaSyA41zsgpaf9eQ8_eIT3GR9gpOmBX-ts4TU';

const DISCOVERY_DOCS = ["https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"];
const SCOPES = "https://www.googleapis.com/auth/calendar.events";

export default {
  data () {
    return {
      gApi: undefined,
      heatmapData: {},
      items: undefined,
      currentColor: '#BD0034'
    }
  },
  mounted () {
    this.drawHeatmap()
  },
  created () {
    this.gApi = gapi
    this.handleClientLoad()


    var now = moment().endOf('day').add(3, 'month').toDate();
    var yearAgo = moment().startOf('day').subtract(1, 'year').toDate();

    this.heatmapData = d3.time.days(yearAgo, now).map(function (dateElement) {
      // console.log(dateElement.getDay())
      return {
        date: +new Date(dateElement),
        count: (dateElement.getDay() !== 0 && dateElement.getDay() !== 6) ? Math.floor(Math.random() * 6) : Math.floor(Math.random() * 2)
      };
    });
  },
  methods: {
    handleAuthClick(event) {
      this.gApi.auth2.getAuthInstance().signIn();
    },

    handleSignoutClick(event) {
      this.gApi.auth2.getAuthInstance().signOut();
    },

    handleClientLoad () {
      this.gApi.load('client:auth2', this.initClient)
    },
    initClient () {
      this.gApi.client.init({
        apiKey: API_KEY,
        clientId: CLIENT_ID,
        discoveryDocs: DISCOVERY_DOCS,
        scope: SCOPES
      }).then(() => {
        // Listen for sign-in state changes.
        this.gApi.auth2.getAuthInstance().isSignedIn.listen(this.updateSigninStatus);

        // Handle the initial sign-in state.
        this.updateSigninStatus(this.gApi.auth2.getAuthInstance().isSignedIn.get());
      }, function(error) {
        console.log(JSON.stringify(error, null, 2));
      });
    },
    updateSigninStatus (isSignedIn) {
      if (isSignedIn) {
        // authorizeButton.style.display = 'none';
        // signoutButton.style.display = 'block';
        this.listUpcomingEvents();
      } else {
        // authorizeButton.style.display = 'block';
        // signoutButton.style.display = 'none';
      }
    },
    listUpcomingEvents () {
      this.gApi.client.calendar.events.list({
        'calendarId': 'primary',
        'timeMin': (new Date()).toISOString(),
        'showDeleted': false,
        'singleEvents': true,
        'maxResults': 10,
        'orderBy': 'startTime'
      }).then(function(response) {
        var events = response.result.items;
        console.log('Upcoming events:');

        if (events.length > 0) {
          for (i = 0; i < events.length; i++) {
            var event = events[i];
            var when = event.start.dateTime;
            if (!when) {
              when = event.start.date;
            }
            console.log(event.summary + ' (' + when + ')')
          }
        } else {
          console.log('No upcoming events found.');
        }
      });
    },

    drawHeatmap () {
      d3.select('svg').remove(); // remove the existing chart, if it exists

      var cal = new CalHeatMap();
      cal.init({
        itemSelector: "#cal-heatmap",
        domain: "month",
        // subDomain: "day",
        range: 2,
        domainMargin: 8,
        cellSize: 28,
        displayLegend: false,
        nextSelector: "#nextBtn",
        previousSelector: "#preBtn",
        domainGutter: 0,
        // subDomain:'x_day',
        weekStartOnMonday: true,
        domainLabelFormat: "%Y-%m",
        subDomainTextFormat: '%d',
        // legend: [1, 2, 3, 4],
        // legendColors: ["#eeeeee", this.currentColor],
        // legendCellSize: 14,
        data: this.heatmapData,
        // dataType: "json",
        afterLoadData: this.parseData,
        onClick: function(date, nb) {
          console.log(date, nb)
        }
      });
    }
  }
}
</script>

<style>
.cs-cal-heatmap-container {
  width: 100%;
  width: 100vw;
  overflow-x: hidden;
}
.cal-heatmap-container {
  margin: 0 auto;
  width: 1;
  overflow: hidden;
}
.empty-calendar .graph .graph-rect {
  fill: #afd9ee;
}
</style>
