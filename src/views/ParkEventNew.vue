<template>
  <div class="park-event-new">
    <section
      id="page-title"
      class="page-title-parallax page-title-dark"
      style="background-image: url('images/chicago-park.jpg'); background-size: cover; padding: 120px 0"
      data-bottom-top="background-position:0px 0px;"
      data-top-bottom="background-position:0px -300px;"
    >
      <div class="container clearfix new-event-title">
        <h1>Add A Park Event To Your Schedule!</h1>
      </div>
    </section>
    <br />
    <div class="weather-widget">
      <br />
      <!-- weather widget start -->
      <a target="_blank" href="https://www.booked.net/weather/chicago-18041">
        <img
          src="https://w.bookcdn.com/weather/picture/3_18041_0_1_137AE9_430_ffffff_333333_08488D_1_ffffff_333333_0_6.png?scode=124&domid=w209&anc_id=14981"
          alt="booked.net"
        />
      </a>
      <!-- weather widget end -->
    </div>
    <br />
    <hr />
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="row gutter-40 col-mb-80">
            <div>
              <h1 class="create-park-head">Create Park Event</h1>
              <form class="create-park-event" style="max-width: 25rem" v-on:submit.prevent="createParkEvent()">
                <div class="form-group">
                  <ul>
                    <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
                  </ul>
                  <ul class="create-park-form">
                    <li>
                      <label for="exampleFormControlSelect1">Park Name:</label>
                      <input class="form-control" type="text" v-model="newParkEventParams.name" />
                    </li>
                    <li>
                      <label for="exampleFormControlSelect1">Park ID:</label>
                      <input class="form-control" type="text" v-model="newParkEventParams.park_id" />
                    </li>
                    <li>
                      <label for="exampleFormControlSelect1">Event Name:</label>
                      <input class="form-control" type="text" v-model="newParkEventParams.event_name" />
                    </li>
                    <li>
                      <label for="exampleFormControlSelect1">Facility:</label>
                      <input class="form-control" type="text" v-model="newParkEventParams.facility" />
                    </li>
                    <li>
                      <label for="exampleFormControlSelect1">Date:</label>
                      <input class="form-control" type="text" v-model="newParkEventParams.date" />
                    </li>
                    <li>
                      <label for="exampleFormControlSelect1">Time:</label>
                      <input class="form-control" type="text" v-model="newParkEventParams.time" />
                    </li>
                    <li>
                      <label for="exampleFormControlSelect1">Attending:</label>
                      <input class="form-control" type="text" v-model="newParkEventParams.attending" />
                    </li>
                    <br />
                    <!-- <a type="submit" value="Create" class="button button-3d button-large button-rounded button-aqua">
                      Create
                    </a> -->

                    <input type="submit" value="Create" class="btn btn-primary mt-3" />
                  </ul>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <br />
        <h1>Search by Park Name:</h1>
        <br />
        Search:
        <input class="park_event_search" type="text" v-model="search" placeholder="search park name.." />
        <br />
        <br />
        <br />
      </div>
    </section>
    <section id="content">
      <div>
        <div class="container clearfix">
          <div class="table-responsive">
            <table id="datatable1" class="table table-striped table-bordered" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th>Park Name</th>
                  <th>Park ID</th>
                  <th>District</th>
                  <th>Facility</th>
                  <th>Address</th>
                  <th>Hours</th>
                  <th>Info</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="park in filterBy(parks, search, 'name')" v-bind:key="park.id">
                  <td>{{ park.name }}</td>
                  <td>{{ park.id }}</td>
                  <td>{{ park.district }}</td>
                  <td>{{ park.facility }}</td>
                  <td>{{ park.address }}</td>
                  <td>{{ park.hours }}</td>
                  <td><router-link v-bind:to="`/parks/${park.id}`">More Info</router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <br />
        <h1>Or</h1>
        <br />
        <h1>Filter Search For Parks By District, Facility, Indoor/Outdoor!</h1>
        <br />
        <br />
        District Map -
        <i>(Click for Full Image)</i>
        <div>
          <a href="https://wikitravel.org/upload/shared//b/b3/Chicago_neighborhoods_map.png" target="_blank">
            <img class="map element" src="../assets/Chicago_neighborhoods_map.png" alt="" />
          </a>
        </div>
        <br />
        <br />
        <section id="page-title" class="page-title-center">
          <div>
            <div class="container clearfix">
              <div class="row gutter-40 col-mb-80">
                <div class="postcontent col-lg-12">
                  <form style="max-width: 35rem" class="filter-search">
                    <div class="form-group">
                      <h1>Search:</h1>
                      <br />
                      <label for="exampleFormControlSelect1">District:</label>
                      <select class="form-select" id="exampleFormControlSelect1" v-model="selectedDistrict">
                        <option value="">--Select a District--</option>
                        <option value="FAR NORTH SIDE">FAR NORTH SIDE</option>
                        <option value="NORTHWEST SIDE">NORTHWEST SIDE</option>
                        <option value="NORTH SIDE">NORTH SIDE</option>
                        <option value="CENTRAL CHICAGO">CENTRAL CHICAGO</option>
                        <option value="WEST SIDE">WEST SIDE</option>
                        <option value="SOUTHWEST SIDE">SOUTHWEST SIDE</option>
                        <option value="SOUTH SIDE">SOUTH SIDE</option>
                        <option value="FAR SOUTHWEST SIDE">FAR SOUTHWEST SIDE</option>
                        <option value="FAR SOUTHEAST SIDE">FAR SOUTHEAST SIDE</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Facility:</label>
                      <select class="form-select" id="exampleFormControlSelect1" v-model="selectedFacility">
                        <option value="">--Select a Facility--</option>
                        <option value="BASEBALL">BASEBALL</option>
                        <option value="BASKETBALL">BASKETBALL</option>
                        <option value="BEACH">BEACH</option>
                        <option value="BOXING">BOXING</option>
                        <option value="COMMUNITY GARDEN">COMMUNITY GARDEN</option>
                        <option value="FITNESS CENTER">FITNESS CENTER</option>
                        <option value="FOOTBALL">FOOTBALL</option>
                        <option value="GYMNASIUM">GYMNASIUM</option>
                        <option value="HANDBALL">HANDBALL</option>
                        <option value="HORSESHOE">HORSESHOE</option>
                        <option value="ICESKATING">ICESKATING</option>
                        <option value="PLAYGROUND">PLAYGROUND</option>
                        <option value="POOL">POOL</option>
                        <option value="ROLLER COURT">ROLLER COURT</option>
                        <option value="SOCCER">SOCCER</option>
                        <option value="SOFTBALL">SOFTBALL</option>
                        <option value="TENNIS">TENNIS</option>
                        <option value="TRACK">TRACK</option>
                        <option value="TURF FIELD">TURF FIELD</option>
                        <option value="VOLLEYBALL">VOLLEYBALL</option>
                      </select>
                    </div>
                    <div class="form-group">
                      <label for="exampleFormControlSelect1">Indoor/Outdoor:</label>
                      <select class="form-select" id="exampleFormControlSelect1">
                        <option value="">--Select Indoor/Outdoor--</option>
                        <option value="YES">INDOOR</option>
                        <option value="YES">OUTDOOR</option>
                      </select>
                    </div>
                  </form>
                  <div>
                    <button class="btn btn-primary mt-3 create-button" @click="searchFilter">Search</button>
                  </div>
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
    <section id="content">
      <div>
        <div class="container clearfix">
          <div class="table-responsive">
            <table id="datatable1" class="table table-striped table-bordered" cellspacing="0" width="100%">
              <thead>
                <tr>
                  <th>Park Name</th>
                  <th>District</th>
                  <th>Facility</th>
                  <th>Park ID</th>
                  <th>Address</th>
                  <th>Hours</th>
                  <th>Indoor</th>
                  <th>Outdoor</th>
                  <th>Info</th>
                </tr>
              </thead>

              <tbody>
                <tr v-for="park in searchResult" :key="park.id">
                  <td>{{ park.name }}</td>
                  <td>{{ park.district }}</td>
                  <td>{{ park.facility }}</td>
                  <td>{{ park.id }}</td>
                  <td>{{ park.address }}</td>
                  <td>{{ park.hours }}</td>
                  <td>{{ park.indoor }}</td>
                  <td>{{ park.outdoor }}</td>
                  <td><router-link v-bind:to="`/parks/${park.id}`">More Info</router-link></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <br />
        <br />
        <h1>Chicago Park Facility Map</h1>
        <br />
        <p>Click The Blue Arrow To Search By Address</p>
        <br />
        <div class="info">
          <div class="element">
            <p style="margin-bottom: 3px">
              <a
                href="https://data.cityofchicago.org/Parks-Recreation/Parks-Chicago-Park-District-Facilities-current-/5yyk-qt9y"
                target="_blank"
                style="font-size: 12px; font-weight: bold; text-decoration: none; color: #333333; font-family: arial"
              ></a>
            </p>
            <iframe
              width="900px"
              title="Parks - Chicago Park District Facilities (current)"
              height="500px"
              src="https://data.cityofchicago.org/w/5yyk-qt9y/3q3f-6823?cur=pBqSF35NdLs&from=root"
              frameborder="0"
              scrolling="no"
            >
              <a
                href="https://data.cityofchicago.org/Parks-Recreation/Parks-Chicago-Park-District-Facilities-current-/5yyk-qt9y"
                title="Parks - Chicago Park District Facilities (current)"
                target="_blank"
              >
                Parks - Chicago Park District Facilities (current)
              </a>
            </iframe>
            <p><a href="http://www.socrata.com/" target="_blank">Powered by Socrata</a></p>
          </div>
        </div>
        <br />
      </div>
    </section>
  </div>
</template>
<style>
.create-park-form {
  list-style-type: none;
}
.new-event-title {
  text-align: center;
}
.park_event_search {
  width: 400px;
}
.create-park-event {
  margin: 0 auto;
  text-align: center;
}
.create-park-head {
  text-align: center;
}
.weather-widget {
  text-align: center;
}
</style>

<script>
import axios from "axios";
import Vue from "vue";
import Vue2Filters from "vue2-filters";

Vue.use(Vue2Filters);

export default {
  data: function () {
    return {
      newParkEventParams: {},
      errors: [],
      parks: [],
      search: "",
      selectedDistrict: "",
      selectedFacility: "",
      selectedInOut: "",
      searchResult: [],
    };
  },
  mixins: [Vue2Filters.mixin],
  created: function () {
    this.indexParks();
  },
  methods: {
    createParkEvent: function () {
      axios
        .post("/park_events", this.newParkEventParams)
        .then((response) => {
          console.log("park event create", response);
          this.$router.push("/park_events");
        })
        .catch((error) => {
          console.log("park event create error", error.response);
          this.errors = error.response.data.errors;
        });
    },
    indexParks: function () {
      axios.get("/parks").then((response) => {
        console.log("parks index", response);
        this.parks = response.data;
      });
    },
    searchFilter: function () {
      let filterDistrict = this.selectedDistrict,
        filterFacility = this.selectedFacility;
      this.searchResult = this.parks.filter(function (park) {
        let filtered = true;
        if (filterDistrict && filterDistrict.length > 0) {
          filtered = park.district == filterDistrict;
        }
        if (filtered) {
          if (filterFacility && filterFacility.length > 0) {
            filtered = park.facility == filterFacility;
          }
        }
        return filtered;
      });
    },
  },
  mounted() {
    this.searchFilter();
  },
};
</script>
