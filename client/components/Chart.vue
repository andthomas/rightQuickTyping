

<script>
import { Bar, Line } from 'vue-chartjs'
export default {
  extends: Line,
  props: ['options'],
  data() {
    return {
      xAxis:[],
    }
  },
  mounted () {
    this.createChart();
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
        options: {
           responsive: false,
           beginAtZero: true
        }
      })
    }
  },
  watch: {
    update: function() {
      this.createChart()
      console.log('////// state updated ///////');
    },
    deep: true,
  },
  // computed: {
  //    ...mapGetters({
  //      update: 'getState'
  //    })
  //  }
}

</script>

<style>

</style>
