//dynamically create each page
//starting from the top left of the gallery each page has a number 0,1,2,3,4,5....
//This numbers are then used to dynamically generate the page...meaning that the arrays must all match
//title array 0 must correspond with body array 0, and the images as well.

//arrays for populating page
var titles = ["[ERR]rational", "Creative Mathematics", "Smart Glitchy Kitchen", "Game Design Residency","Alphabets Got Talent"];

var body = [
  //////////Errrational
            "[ERR]rational is an audio-visual artwork that is completely generated through mathematics.<br><br>"+ 
            "The term math tends to trigger negative memories for most, and that is due to how we are exposed to it. "+ 
            "It is presented to us as a convoluted set of rules that we must follow to achieve an arbitrary answer, but "+ 
            "in reality math is a rich and complex language. It is a way to explain the relationships that surround, and impact our lives.<br><br>"+
            "In this piece, I use the principles of signal processing to create 3D objects and tonal "+
            "patterns. By using mathematics as an artistic medium it becomes clear that we do not need to separate the arts and sciences as we do, "+
            "and should instead embrace the rich creative complexities of the field.<br><br>"+
            "<a href ='../Thesis/index.html' target = '_blank'><u>Click Here</u></a> to see the full project",
/////////////Creative Mathematics
            'As a study into both Unity and Mathematics, I developed a series of sketches to explore different perspectives of these topics. These sketches delve into varied aspects of both Unity and math. I cover mathematical'+
            ' topics ranging from trigonometry, fractals, and boid logic. For Unity I explore the line renderer, trail renderer, lighting, and shaders.',
////////////Smart Glitchy Kitchen
            'Smart Glitchy Kitchen is a physical game with a large scale controller where a rookie chef needs to prepare an apple pie by carefully following the instructions. What our beloved chef doesn’t know is that this new tech kitchen has lots of flaws and glitches. It seems easier than it is. <br><br>'+
            'In the end, Smart Glitchy Kitchen was exhibited in the independent game gallery called "Baby Castles". The game was too difficult for any one person, but it was great to see teams of people struggle to cook their pie in the alloted time.',
////////////Game Design Residency
            'During this Game Design Residency with the Staten Museum of Kunst in Copenhage, I collaborated with students from the "Royal Danish Academy of Fine Arts" to create this interactive game.<br><br>'+
            'The goal of this residency was to increase audience engagement. The museum saw that people, on average, would visit less than 2 of their exhibits. So, we created a game that would encourage exploration through the space<br><br>'+
            'Users would wear these masks, which would have prompts on them to explore the museum from a new perspective. Through testing we found that there was a significant increase in how far museum goers would explore along with them enjoying the experience of being part of the performance.',
 /////////////Alphabets Got Talent
            'Alphabets Got Talent is the product of a 48 hour Morse Code Game Jam by a team of two Parsons and two New York University students in partnership with The Adaptive Design Association and Google.<br><br>'+
            ' The goal of the project was to teach our client Morse code in a fun, interactive way using topics they were interested in. Our team was paired with an Adaptive Design client who had limited motor functions,'+
            ' so we used two simple switches, to represent the dot and dash of Morse code. These switches then utilized the Google Gboard Morse keyboard to control the output of letters. In the game, the user uses the switches'+
            ' to type a letter in Morse Code and an animal with the corresponding name would appear “dancing” and making animal noises. For example an elephant appearing when the user enters a dit (dot), the Morse code for “e.”',
]

//gallery links to work pages
var piecesOfWork = document.getElementsByClassName("work-link");

for (var i = 0; i < piecesOfWork.length; i++) {
  (function(index) {
      piecesOfWork[index].addEventListener("mousedown", function() {
          loadWorkPage(index);
        })
        piecesOfWork[index].addEventListener("mouseover", function(event) {
          event.target.style.cursor = "pointer";
        })
        piecesOfWork[index].addEventListener("mouseleave", function(event) {

        })
  })(i);
}


//The new Page
function loadWorkPage(index){
  console.log(index);
  window.name = index;
  window.location.href = "work.html";
}
function populatePage(){
  //name of this page
  var thisPage = window.name
  //text data for this page
  var workTitle = document.getElementById("work-text-title");
  var workBody = document.getElementById("work-text-body");
  //image data for this page
  var workImageLocation = document.getElementById("the-images");
  var workImages =[];
  var documentationImages=[
//////////////////////////////Errrational
                            ["https://i.imgur.com/maV2QIE.gif", 
                            "https://i.imgur.com/78YKZSA.gif", "https://i.imgur.com/t2E5sx9.gif", ],
////////////////////////////Creative Math
                            ["https://media2.giphy.com/media/UrVBjoqpqFQTB4tHlv/giphy.gif", "https://media0.giphy.com/media/VJxWtkyq5qAvgX617N/giphy.gif",
                            "https://media.giphy.com/media/m9p9CUiHlsvEv3Z3qR/giphy.gif", "https://media.giphy.com/media/YQ5hhyI5RgAvxNgID4/giphy.gif",
                          "https://media.giphy.com/media/f9Z0Kx7pHo39CpD7G9/giphy.gif","https://media2.giphy.com/media/dZFVIb5zmBte0MRWQ3/giphy.gif"],
////////////////////////////Smart Glitchy Kitchen                           
                            ["https://i.imgur.com/Nq1qr64.png", "https://i.imgur.com/73XFv06.jpg",
                            "https://i.imgur.com/E5TLoys.png", "https://i.imgur.com/8QNzw75.png",
                            "https://i.imgur.com/H9c9Req.jpg", "https://i.imgur.com/HRf7MUE.jpg",],
////////////////////////////Game Residency
                            ["https://i.imgur.com/lkOeAI6.jpg","https://i.imgur.com/wNNfxt3.jpg",
                            "https://i.imgur.com/GFG6hbk.jpg","https://i.imgur.com/xZN26EE.jpg",
                            "https://i.imgur.com/SPVaEwr.jpg","https://i.imgur.com/KqjM7CQ.jpg"],
 ////////////////////////////Alphabets Got Talent
                            ["https://i.imgur.com/qgUoh6r.png", "https://i.imgur.com/13fGFBA.png", 
                            "https://i.imgur.com/f8oLcQO.png", "https://i.imgur.com/6fghUD0.png"],
];
                          console.log(documentationImages[3].length)
  //other work data
  var otherWorks = document.getElementsByClassName("other-work");
  var color = ["#165f99", "#f5cb62", "#cc6155"];

  //title and body text
  workTitle.innerHTML = titles[thisPage];
  workBody.innerHTML = body[thisPage];


  //images for each page
  for(var i = 0; i<documentationImages[thisPage].length;i++){
    workImages[i]=document.createElement('img');
    workImages[i].src = documentationImages[thisPage][i];
    workImageLocation.appendChild(workImages[i]);
    workImageLocation.innerHTML += "<br><br>";
    // workImageLocation.appendChild("<br>");
  }
  //dynamic links for other works
  for(var i = 0; i<titles.length;i++){
    if(i!=thisPage){
      otherWorks[i].innerHTML = titles[i] + " / ";

      (function(index) {
        otherWorks[index].addEventListener("mousedown", function() {
            loadWorkPage(index);
          })
          otherWorks[index].addEventListener("mouseover", function(event) {
            event.target.style.cursor = "pointer";
            event.target.style.color = color[index % 3];
          })
          otherWorks[index].addEventListener("mouseleave", function(event) {

            event.target.style.color = "white";
          })
      })(i);
    }
  }
}
