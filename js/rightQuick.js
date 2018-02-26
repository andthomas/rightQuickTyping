var rightQuick = {
   words: ["JUMPILY", "PHONILY", "HOKILY", "HOMILY", "HOMINY", "JIMPLY", "JOKILY", "LINKUP", "MOUJIK", "MOULIN", "NYMPHO", "PHYLON", "PHYLUM", "PINKLY", "PLUNKY", "POKILY", "PUNILY", "UNHOLY", "UPLINK", "HILUM", "HINKY", "HIPLY", "HOKUM", "HONKY", "HULKY", "HUMPY", "HUNKY", "IMPLY", "JIMPY", "JUMPY", "JUNKY", "JUPON", "KHOUM", "LINKY", "LINUM", "LUMPY", "LUPIN", "LYMPH", "MILKY", "MUHLY", "MUJIK", "NOILY", "NYMPH", "ONIUM", "OPIUM", "PHONY", "PINKO", "PINKY", "PLINK", "PLONK", "PLUMY", "PLUNK", "POILU", "PULIK", "PUNJI", "PUNKY", "PYLON", "UNHIP", "YUPON", "HOLK", "HOLM", "HOLP", "HOLY", "HOMY", "HONK", "HULK", "HUMP", "HUNK", "HYMN", "HYPO", "IKON", "INKY", "INLY", "JIMP", "JINK", "JOHN", "JOIN", "JOKY", "JOUK", "JUMP", "JUNK", "KILN", "KILO", "KINO", "KNOP", "KOHL", "KOJI", "KOPH", "LIMN", "LIMO", "LIMP", "LIMY", "LINK", "LINO", "LINY", "LION", "LOIN", "LOUP", "LUMP", "LUNK", "LUNY", "MILK", "MILO", "MINK", "MOIL", "MOLY", "MONK", "MONY", "MOPY", "MUNI", "MUON", "NOIL", "OILY", "OINK", "ONLY", "OUPH", "PHON", "PILY", "PINK", "PINY", "PION", "PLOY", "PLUM", "POKY", "POLY", "PONY", "PULI", "PUNK", "PUNY", "PYIN", "UPON", "YOLK", "YONI", "HIM", "HIN", "HIP", "HON", "HOP", "HOY", "HUM", "HUN", "HUP", "HYP", "ILK", "IMP", "INK", "ION", "JIN", "JOY", "JUN", "KHI", "KIN", "KIP", "KOI", "KOP", "LIN", "LIP", "LOP", "LUM", "MHO", "MIL", "MOL", "MON", "MOP", "MUN", "NIL", "NIM", "NIP", "NOH", "NOM", "OHM", "OIL", "PHI", "PIN", "PIU", "PLY", "POH", "POI", "POL", "POM", "PUL", "PUN", "UMP", "UPO", "YIN", "YIP", "YOK", "YOM", "YON", "YOU", "YUK", "YUM", "YUP", "HI", "HM", "HO", "IN", "JO", "KI", "LI", "LO", "MI", "MO", "MU", "MY", "NO", "NU", "OH", "OI", "OM", "ON", "OP", "OY", "PI", "UH", "UM", "UN", "UP", "YO"],
  
  counter: 0,
  
  backspace: 0,
  
  scores: [],
  
  playing: false,
  
  sentenceLength: function() {
    var randLength = Math.floor((Math.random() * 219));
    return randLength;
  },
  
  play: function(input) {
    if (rightQuick.playing == true) {
      sentence = [];
      document.getElementById('timerContainer').innerHTML = 
      document.getElementById('inputText').value = 
      document.getElementById('enterContainer').innerHTML = 
      document.getElementById('sentenceContainer').innerHTML = sentence.toString();
      rightQuick.counter = 0;
      rightQuick.backspace = 0;
      
      for (var i = 0; i < input; i++) {
        sentence.push(" " + rightQuick.words[rightQuick.sentenceLength()]);
      }
      s = sentence.toString().replace(/,/g , "").toLowerCase();
      document.getElementById('sentenceContainer').innerHTML = s
    } else {
      return
    }
  },
  
  timer: function() {  
    
    var myVar = setInterval(function(){ myTimer() }, 100);

    function myTimer() {
      if (rightQuick.playing == true) {
        rightQuick.counter = rightQuick.counter + 0.1;;
      } else {
        var wpm = 60/rightQuick.counter * 9;
        document.getElementById('timerContainer').innerHTML = (Math.round(wpm * 100)/100) + " words per minute"
        document.getElementById('bspaceContainer').innerHTML = "Backspace was pressed " + rightQuick.backspace + " times"
        document.getElementById('enterContainer').innerHTML = "Press enter to start a new round"
        clearInterval(myVar);
      }
    }
  }
}
  
$('#body').keyup(function(e) {
  if(e.which == 13) {
    rightQuick.playing = !rightQuick.playing;
    rightQuick.play(10)
    rightQuick.timer()
  }
  if(e.which == 8) {
    rightQuick.backspace ++
  }
});

