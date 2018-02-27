<template>
  <div id="body" @keyup="start($event)">
    <div id="sentenceContainer" v-model="givenSentence"></div>
    <br>
    <input autocomplete="off" id="inputText" v-model="answer" class="text-input" name="name" rows="1" cols="50" autofocus></input>
    <div id="enterContainer" style="text-align:center">Press enter to start</div>
  </div>
</template>

<script>

var stringSimilarity = require('string-similarity');

export default {
  data() {
    return {
       words: ["JUMPILY", "PHONILY", "HOKILY", "HOMILY", "HOMINY", "JIMPLY", "JOKILY", "LINKUP", "MOUJIK", "MOULIN", "NYMPHO", "PHYLON", "PHYLUM", "PINKLY", "PLUNKY", "POKILY", "PUNILY", "UNHOLY", "UPLINK", "HILUM", "HINKY", "HIPLY", "HOKUM", "HONKY", "HULKY", "HUMPY", "HUNKY", "IMPLY", "JIMPY", "JUMPY", "JUNKY", "JUPON", "KHOUM", "LINKY", "LINUM", "LUMPY", "LUPIN", "LYMPH", "MILKY", "MUHLY", "MUJIK", "NOILY", "NYMPH", "ONIUM", "OPIUM", "PHONY", "PINKO", "PINKY", "PLINK", "PLONK", "PLUMY", "PLUNK", "POILU", "PULIK", "PUNJI", "PUNKY", "PYLON", "UNHIP", "YUPON", "HOLK", "HOLM", "HOLP", "HOLY", "HOMY", "HONK", "HULK", "HUMP", "HUNK", "HYMN", "HYPO", "IKON", "INKY", "INLY", "JIMP", "JINK", "JOHN", "JOIN", "JOKY", "JOUK", "JUMP", "JUNK", "KILN", "KILO", "KINO", "KNOP", "KOHL", "KOJI", "KOPH", "LIMN", "LIMO", "LIMP", "LIMY", "LINK", "LINO", "LINY", "LION", "LOIN", "LOUP", "LUMP", "LUNK", "LUNY", "MILK", "MILO", "MINK", "MOIL", "MOLY", "MONK", "MONY", "MOPY", "MUNI", "MUON", "NOIL", "OILY", "OINK", "ONLY", "OUPH", "PHON", "PILY", "PINK", "PINY", "PION", "PLOY", "PLUM", "POKY", "POLY", "PONY", "PULI", "PUNK", "PUNY", "PYIN", "UPON", "YOLK", "YONI", "HIM", "HIN", "HIP", "HON", "HOP", "HOY", "HUM", "HUN", "HUP", "HYP", "ILK", "IMP", "INK", "ION", "JIN", "JOY", "JUN", "KHI", "KIN", "KIP", "KOI", "KOP", "LIN", "LIP", "LOP", "LUM", "MHO", "MIL", "MOL", "MON", "MOP", "MUN", "NIL", "NIM", "NIP", "NOH", "NOM", "OHM", "OIL", "PHI", "PIN", "PIU", "PLY", "POH", "POI", "POL", "POM", "PUL", "PUN", "UMP", "UPO", "YIN", "YIP", "YOK", "YOM", "YON", "YOU", "YUK", "YUM", "YUP", "HI", "HM", "HO", "IN", "JO", "KI", "LI", "LO", "MI", "MO", "MU", "MY", "NO", "NU", "OH", "OI", "OM", "ON", "OP", "OY", "PI", "UH", "UM", "UN", "UP", "YO"],
       counter: 0,
       backspace: 0,
       scores: [],
       playing: false,
       givenSentence: "",
       answer: "",
       running: true,
    }
  },
  methods: {
    start(e) {
      if(e.which == 13) {
        this.playing = !this.playing;
        this.playGame(10)
        this.timer()
      }
      if(e.which == 8) {
        this.backspace ++
      }
    },
    sentenceLength() {
      var randLength = Math.floor((Math.random() * 219));
      return randLength;
    },
    playGame(input) {
      if (this.playing == true) {
        this.$emit('inPlay', false)
        this.sentence = [];
        document.getElementById('enterContainer').innerHTML = "Press enter to stop"
        this.answer = ""
        document.getElementById('sentenceContainer').innerHTML = this.sentence.toString();
        this.givenSentence = ""
        this.counter = 0;
        this.backspace = 0;

        for (var i = 0; i < input; i++) {
          this.sentence.push(" " + this.words[this.sentenceLength()]);
        }
        let s = this.sentence.toString().replace(/,/g , "").toLowerCase();
        document.getElementById('sentenceContainer').innerHTML = s
        this.givenSentence = s;
      } else {
        return
      }
    },
    timer() {

      var intId = setInterval(function(){ myTimer() }, 100);

      var $this = this;

      function myTimer() {

        if ($this.playing) {
          $this.counter = $this.counter + 0.1;;
        } else {
          clearInterval(intId);
          if ($this.running) {
            let words = $this.answer.split(" ").length - 1
            var wpm = Math.round(((60/$this.counter * words)*100)/100);
            let sim = Math.round(($this.testSimilarity())*100);
            $this.$store.commit('ADDBACKSPACE', $this.backspace)
            $this.$store.commit('ADDACCURACY', sim)
            $this.$store.commit('ADDWPM', wpm)
            $this.$emit('inPlay', true)
            document.getElementById('enterContainer').innerHTML = "Press enter to start a new round"
          }
          $this.running = !$this.running;
        }
      }
    },
    testSimilarity() {
      var similarity = stringSimilarity.compareTwoStrings(this.givenSentence, this.answer);
      return similarity
    }
  }
}

</script>

<style>

  .text-input {
    margin: 0 auto;
    display: inherit;
    font-size: 31px;
    width: 708px;
    border-top: 0px;
    border-left: 0px;
    border-right: 0px;
    border-bottom: 2px solid rgb(200, 200, 200);
  }

  input:focus {
    outline: none;
  }

</style>
