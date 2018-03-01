

<script>
import { Bar, Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: ['options'],
  data() {
    return {
      xAxis:[],
      options: {
        scales: {
          xAxes: [{
            scaleLabel: {
              display: true,
              labelString: 'Attempt'
            }
          }]
        }
      }
    }
  },
  mounted () {
    this.createChart(this.options);
  },
  methods: {
    calcX() {
      this.xAxis = [];
      let start = 1
      for (var i = 0; i < this.$store.state.accuracyRecord.length; i++) {
        this.xAxis.push(start.toString())
        start++
      }
    },
    createChart() {
      this.calcX();
      // Overwriting base render method with actual data.
      this.renderChart({
        labels: this.xAxis,
        datasets: [
          {
            label: 'Accuracy',
            borderColor: '#f87979',
            data: this.$store.state.accuracyRecord
          },
          {
            label: 'Deletes',
            borderColor: 'blue',
            data: this.$store.state.backSpaceRecord
          },
          {
            label: 'Words Per Minute',
            borderColor: 'green',
            data: this.$store.state.wpmRecord
          }
        ],
      })
    }
  }
}

</script>

<style>

</style>
