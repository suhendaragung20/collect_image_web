import {Doughnut} from 'vue-chartjs'

export default {
  extends: Doughnut,
  mounted() {
    this.renderChart({
      labels: [
        'Labelled',
        'Unlabelled'
      ],
      datasets: [{
        data: [50, 100],
        backgroundColor: [
          '#71deb9',
          '#ef869e'
        ],
        hoverBackgroundColor: [
          '#4dd6a7',
          '#eb6886'
        ]
      }]
    }, {responsive: true, maintainAspectRatio: false})

  }
}
