<template>
  <div class="park-show">
    <!-- Page Title
		============================================= -->
    <section id="page-title">
      <div class="container clearfix">
        <br />
        <br />
        <h1>Park: {{ park.name }}</h1>
        <br />
        <h3>Facility: {{ park.facility }}</h3>
        <!-- <ol class="breadcrumb">
					<li class="breadcrumb-item"><a href="#">Home</a></li>
					<li class="breadcrumb-item"><a href="#">Events</a></li>
					<li class="breadcrumb-item active" aria-current="page">Event Single</li>
				</ol> -->
        <br />
      </div>
    </section>
    <!-- #page-title end -->
    <!-- Content
		============================================= -->
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="single-event">
            <div class="row col-mb-50">
              <div class="col-md-8 col-lg-9">
                <div class="entry-image mb-0">
                  <img v-bind:src="park.image" v-bind:alt="park.name" />
                </div>
              </div>

              <div class="col-md-4 col-lg-3">
                <div class="card event-meta mb-3">
                  <div class="card-header"><h5 class="mb-0">Park Info:</h5></div>
                  <div class="card-body">
                    <ul class="iconlist mb-0">
                      <li>DISTRICT: {{ park.district }}</li>
                      <li>
                        <i class="icon-time"></i>
                        Park Hours: {{ park.hours }}
                      </li>
                      <li>
                        <i class="icon-map-marker2"></i>
                        {{ park.address }}
                      </li>
                      <li>
                        <strong>Indoor: {{ park.indoor }} | Outdoor: {{ park.outdoor }}</strong>
                      </li>
                    </ul>
                  </div>
                </div>
                <a href="/" class="btn btn-success w-100 btn-lg">Back To Home</a>
              </div>

              <div class="w-100"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- #content end -->
    <!-- <div>
      <h1>{{ park.name }}</h1>
      <h3>DISTRICT: {{ park.district }}</h3>
      <h4>Facility: {{ park.facility }}</h4>
      <p>Address: {{ park.address }}</p>
      <p>Indoor: {{ park.indoor }} | Outdoor: {{ park.outdoor }}</p>
      <p>Park Hours: {{ park.hours }}</p>
      <img v-bind:src="park.image" v-bind:alt="park.name" />
    </div>
    <router-link to="/">Back To All Parks</router-link> -->
    <hr />
    <section id="page-title" class="page-title-center">
      <div class="container clearfix">
        <br />
        <br />
        <h2>UPCOMING PARK EVENTS AT {{ park.name }} PARK:</h2>
        <br />
        <h3>Facility: {{ park.facility }}</h3>
        <br />
      </div>
    </section>
    <hr />
    <!-- <p>{{ park.park_events }}</p> -->
    <!-- Content
		============================================= -->
    <section id="content">
      <div class="content-wrap">
        <div class="container clearfix">
          <div class="row">
            <div class="entry event col-12" v-for="event in events" :key="event.id">
              <div class="grid-inner row align-items-center g-0 p-4 park-event">
                <div class="col-md-4 mb-md-0"></div>
                <div class="col-md-8 ps-md-4">
                  <div class="entry-title title-sm">
                    <h2>
                      <a href="#">Event Name: {{ event.event_name }}</a>
                    </h2>
                  </div>
                  <div class="entry-meta">
                    <ul>
                      <li><span class="badge bg-warning text-dark px-1 py-1">Private</span></li>
                      <li>
                        <a href="#">
                          <i class="icon-time"></i>
                          Time: {{ event.time }}
                        </a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="icon-map-marker2"></i>
                          Date: {{ event.date }}
                        </a>
                      </li>
                    </ul>
                  </div>
                  <div class="entry-content">
                    <h3>Attending:</h3>
                    <p>
                      {{ event.attending }}
                    </p>
                    <a href="/signup" class="btn btn-secondary" disabled="disabled">Signup To Create Park Event!</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <!-- #content end -->
    <!-- <div v-for="event in events" :key="event.id">
      <h3>Event Name: {{ event.event_name }}</h3>
      <p>Date: {{ event.date }}</p>
      <p>Time: {{ event.time }}</p>
      <h3>Attending:</h3>
      <p>{{ event.attending }}</p>
    </div> -->
  </div>
</template>
<style>
.park-event:hover {
  background: #1abc9c;
}
</style>
<script>
import axios from "axios";
export default {
  data: function () {
    return {
      park: {},
      users: [],
      events: [],
    };
  },
  created: function () {
    axios.get("/parks/" + this.$route.params.id).then((response) => {
      console.log("park show", response);
      this.park = response.data;
      this.events = response.data.park_events;
      this.users = response.data.users;
      console.log(response.data.park_events);
      console.log(response.data.users);
    });
  },
  methods: {},
};
</script>
