<template>
  <div class="parks-index">
    <section
      id="page-title"
      class="page-title-parallax page-title-dark"
      style="background-image: url('images/parallax/8.jpg'); background-size: cover; padding: 120px 0"
      data-bottom-top="background-position:0px 0px;"
      data-top-bottom="background-position:0px -300px;"
    >
      <div class="container clearfix home-title">
        <section class="page-title-center">
          <div class="container clearfix">
            <br />
            <h1 class="park312-head-title">PARK 312</h1>
          </div>
        </section>
        <!-- <br />
        <br />
        <br />
        <br />
        <br /> -->
      </div>
    </section>

    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <hr />
        <h5>
          <span>Search For Parks And Find Park Events In Chicago</span>
        </h5>
        <h5><span>Or</span></h5>
        <h5>
          <span>
            <router-link v-bind:to="`/signup`">Signup</router-link>
            To Create Your Own Park Events!
          </span>
        </h5>
        <hr />
        <br />
        <br />
        <h1>Search For Parks By District, Facility, And Indoor/Outdoor</h1>
        <br />
        <br />
        <strong>District Map -</strong>
        <i>(Click for Full Image)</i>
        <br />
        <br />
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
                        <option value="GYMNASTIC">GYMNASTIC</option>
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
                      <select class="form-select" id="exampleFormControlSelect1" v-model="selectedIn">
                        <option value="">--Select Indoor/Outdoor--</option>
                        <option value="YES">INDOOR</option>
                        <option value="NO">OUTDOOR</option>
                      </select>
                    </div>
                  </form>
                  <div>
                    <button
                      class="btn btn-primary mt-3 create-button"
                      @click="
                        searchFilter();
                        activeTable();
                      "
                    >
                      Search
                    </button>
                  </div>
                  <br />
                  <div>
                    <p>
                      <span>Select from the dropdown menu and click Search to populate table</span>
                    </p>
                  </div>
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
            <table
              v-if="showTable"
              id="datatable1"
              class="table table1 table-striped table-bordered"
              cellspacing="0"
              width="100%"
            >
              <thead class="head">
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
                  <td>
                    <router-link v-bind:to="`/parks/${park.id}`">More Info</router-link>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
    <br />
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <h1>Or</h1>
        <br />
        <h1>Search by Park Name:</h1>
        <br />
        Search:
        <input class="home_id" type="text" v-model="search" placeholder="try 'Bell' basketball facility.." />
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
                <tr v-for="park in filterBy(parks, search, 'name')" v-bind:key="park.id">
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
                <div class="atomSpinner" v-if="loading">
                  <atom-spinner :animation-duration="1000" :size="60" :color="'#1ABC9C'" />
                </div>
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
        <p><span>Click The Blue Arrow To Search By Address</span></p>
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
              width="400px"
              title="Parks - Chicago Park District Facilities (current)"
              height="600px"
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
    <br />
  </div>
</template>

<style>
.spinner {
  margin: 0;
  display: flex;
  justify-content: center;
}
.create-button {
  margin: 0 !important;
}
.filter-search {
  display: inline-block;
}
.home-screen-title {
  margin: 0 0 0 0;
}
.home-title {
  text-align: center;
  text-shadow: 2px 2px 2px black;
  margin-bottom: 16rem;
}
.park312-title {
  width: 25%;
  margin: auto;
  display: inline-flex;
  background-color: white;
}
.park312-head-title {
  margin: 0;
  padding-bottom: 10rem !important;
  margin-bottom: 34rem !important;
}
.page-title-312 {
  background-color: #444;
}
.home_id {
  width: 400px;
}
.map {
  width: auto;
  height: 350px;
  box-shadow: 3px 3px 3px black;
}
.map:hover {
  -moz-box-shadow: 0 0 10px black;
  -webkit-box-shadow: 0 0 10px black;
  box-shadow: 0 0 10px black;
}
table {
  overflow-y: scroll;
  height: 450px;
  display: block;
  border: 1px solid;
  margin-top: 50px;
}
tr:nth-child(even) {
  background-color: #f2f2f2;
}
th {
  background: white;
  /* position: sticky;
  top: 0;
  margin: auto; */
}
/* .info {
  display: flex;
} */
</style>

<script>
import Vue from "vue";
import Vue2Filters from "vue2-filters";
import { AtomSpinner } from "epic-spinners";

Vue.use(Vue2Filters);

import axios from "axios";
export default {
  components: {
    AtomSpinner,
  },
  data: function () {
    return {
      showTable: false,
      parks: [],
      search: "",
      selectedDistrict: "",
      selectedFacility: "",
      selectedIn: "",
      searchResult: [],
      loading: false,
    };
  },
  mixins: [Vue2Filters.mixin],
  created: function () {
    this.indexParks();
  },
  methods: {
    indexParks: function () {
      this.loading = true;
      axios
        .get("/parks")
        .then((response) => {
          console.log("parks index", response);
          this.parks = response.data;
        })
        .finally(() => (this.loading = false));
    },
    activeTable: function () {
      this.showTable = true;
    },
    searchFilter: function () {
      let filterDistrict = this.selectedDistrict,
        filterFacility = this.selectedFacility,
        filterIn = this.selectedIn;
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
        if (filtered) {
          if (filterIn && filterIn.length > 0) {
            filtered = park.indoor == filterIn;
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
