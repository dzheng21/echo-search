// constants
var LINE_OFFSET = 8;
var CORNER_RADIUS = 8;
var OFFSET_H = 30;

// divs
var introDiv       = document.getElementById("intro_row");
var descriptionDiv = document.getElementById("description_row");
var purposeDiv     = document.querySelector("#purpose_row");
var worksDiv       = document.querySelector("#works_row");
var partnersDiv    = document.querySelector("#partners_row");

// lines to draw
var line1 = document.querySelector("#line1");
var line2 = document.querySelector("#line2");
var line3 = document.querySelector("#line3");
var lines = [line1,line2,line3];

// draw the lines
var drawLines = function(lineNum = 0) {
    if (lineNum < 0 || lineNum > 3) {
        return;
    }

  var dStr =
      // Lines from intro section to description section
      "M" + introDiv.offsetLeft + "," + (introDiv.offsetTop + LINE_OFFSET + (LINE_OFFSET * (3-lineNum))) + " " +
      "H" + descriptionDiv.offsetLeft + " " +
      "q" + (-1*CORNER_RADIUS*(lineNum + 1)) + ",0 " + (-1*CORNER_RADIUS*(lineNum + 1)) + "," + CORNER_RADIUS*(lineNum + 1) + " " +
      "V" + (descriptionDiv.offsetTop + OFFSET_H - (3-lineNum)) + " " +
      "q0," + CORNER_RADIUS*(lineNum + 1) + " " + CORNER_RADIUS*(lineNum + 1) + "," + CORNER_RADIUS*(lineNum + 1) + " " +

      // Lines from desciption section to purpose section
      "M" + (descriptionDiv.offsetLeft + descriptionDiv.offsetWidth) + "," + (descriptionDiv.offsetTop + descriptionDiv.offsetHeight - OFFSET_H - (LINE_OFFSET * (lineNum+1))) + " " +
      "q" + CORNER_RADIUS*(lineNum + 1) + ",0 " + CORNER_RADIUS*(lineNum + 1) + "," + CORNER_RADIUS*(lineNum + 1) + " " +
      "V" + (purposeDiv.offsetTop + OFFSET_H - (3-lineNum)) + " " +
      "q0," + CORNER_RADIUS*(lineNum + 1) + " " + (-1*CORNER_RADIUS*(lineNum + 1)) + "," + CORNER_RADIUS*(lineNum + 1) + " " +

      // Lines from purpose section to works section
      "M" + purposeDiv.offsetLeft + "," + (purposeDiv.offsetTop + purposeDiv.offsetHeight - OFFSET_H - (LINE_OFFSET * (lineNum + 1))) + " " +
      "q" + (-1*CORNER_RADIUS*(lineNum + 1)) + ",0 " + (-1*CORNER_RADIUS*(lineNum + 1)) + "," + CORNER_RADIUS*(lineNum + 1) + " " +
      "V" + (worksDiv.offsetTop + OFFSET_H - (3-lineNum)) + " " +
      "q0," + CORNER_RADIUS*(lineNum + 1) + " " + CORNER_RADIUS*(lineNum + 1) + "," + CORNER_RADIUS*(lineNum + 1) + " " +

      // Lines from works section to partners section
      "M" + (worksDiv.offsetLeft + worksDiv.offsetWidth) + "," + (worksDiv.offsetTop + worksDiv.offsetHeight - OFFSET_H - (LINE_OFFSET * (lineNum+1))) + " " +
      "q" + CORNER_RADIUS*(lineNum + 1) + ",0 " + CORNER_RADIUS*(lineNum + 1) + "," + CORNER_RADIUS*(lineNum + 1) + " " +
      "V" + (partnersDiv.offsetTop + OFFSET_H*2 - LINE_OFFSET*1.5);

  // add d path string to line svg according to its line number,
  // allows the site to draw the lines
  lines[lineNum].setAttribute("d", dStr);
};

// give time for page to load before drawing lines
setInterval(function(){ drawLines(0); }, 250);
setInterval(function(){ drawLines(1); }, 250);
setInterval(function(){ drawLines(2); }, 250);

// redraw lines when page is resized
function onResize() {
    drawLines(0);
    drawLines(1);
    drawLines(2);
}

// listener to redraw lines when page is resized
window.addEventListener("resize", onResize);
