<template>
  <div class="">

  <div class="header-bar"><h1>RightQuick</h1></div>
  <div class="container" style="width: 900px; margin: 0 auto;">
    <text-input
      @inPlay="toggleChart">
    </text-input>
    <br>
    <chart
      v-if="showChart == true"
      :beginzero="true"
      :width="300"
      :height="120">
    </chart>
  </div>
</div>
</template>

<script>
import TextInput from '../components/TextInput'
import Chart from '../components/Chart'

export default {
  components: {
    TextInput,
    Chart,
  },
  data() {
    return {
      dataLength: this.$store.state.accuracyRecord.length,
      showChart: true,
    }
  },
  methods: {
    toggleChart(value) {
      console.log(this.dataLength, 'data');
      console.log(this.showChart, 'chart');
      this.showChart = value
    }
  }
}
</script>

<style media="screen">
  h1 {
    font-family: 'Oswald', sans-serif;
    font-size: 40px;
    margin: 0px;
    padding: 10px;
  }

  .header-bar {
    width: 100%;
    height: 78px;
    border-bottom: 1px solid rgb(224, 224, 224);
  }

  #sentenceContainer {
    margin: 0 auto;
    text-align: center;
    font-size: 32px;
    height: 40px;
    margin-top: 43px;
  }

  #timerContainer {
    margin: 0 auto;
    text-align: center;
    font-size: 26px;
    margin-top: 50px;
    height: 40px;
  }

  #simContainer {
    margin: 0 auto;
    text-align: center;
    font-size: 26px;
    margin-top: 40px;
    margin-bottom: 40px;
    height: 40px;
  }

  #enterContainer {
    margin: 0 auto;
    text-align: center;
    font-size: 26px;
    margin-top: 40px;
    height: 40px;
  }

  #bspaceContainer {
    margin: 0 auto;
    text-align: center;
    font-size: 26px;
    height: 40px;
    margin-bottom: 50px;
  }


</style>
