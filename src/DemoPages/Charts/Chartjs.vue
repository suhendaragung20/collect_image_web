<template>
  <div>
    <page-title :heading=heading :subheading=subheading :icon=icon></page-title>
    <div class="content">
        <b-row>
          <b-col md="6">
            <b-card title="Eye images" class="main-card mb-3">
              <doughnut></doughnut>
            </b-card>
          </b-col>
          <b-col md="6">
            <b-card title="Data Collected" class="main-card mb-3">
              <lineeg></lineeg>
            </b-card>
          </b-col>
        </b-row>
    </div>
  </div>
</template>

<script>

  import PageTitle from "../../Layout/Components/PageTitle.vue";

  import doughnut from './Chartjs/Doughnut'
  import lineeg from './Chartjs/Line'

  export default {
    components: {
      PageTitle,
      doughnut,
      lineeg,
    },
    data: () => ({
      heading: 'Eye Disease Prediction [Project]',
      subheading: 'Web apps untuk collecting dataset image',
      icon: 'pe-7s-bandaid icon-gradient bg-amy-crisp',
    }),


  }
</script>
