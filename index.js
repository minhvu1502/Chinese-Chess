class Piece {
  constructor(name, position, backgroundUrl) {
    this.name = name;
    this.backgroundUrl = backgroundUrl;
    this.position = position;
  }

  moveTo(newPos) {
    this.position = newPos;
  }

  // return a copy of a piece
  copy() {
    return new Piece(this.name, this.position, this.backgroundUrl);
  }
}
const initPieceRed = [
  new Piece("90.01", [1, 1]),
  new Piece("90.01", [1, 9]),
  new Piece("50.01", [3, 2]),
  new Piece("50.01", [3, 8]),
  new Piece("40.01", [1, 2]),
  new Piece("40.01", [1, 8]),
  new Piece("25.01", [1, 3]),
  new Piece("25.01", [1, 7]),
  new Piece("20.01", [1, 4]),
  new Piece("20.01", [1, 6]),
  new Piece("10.01", [4, 1]),
  new Piece("10.01", [4, 3]),
  new Piece("10.01", [4, 5]),
  new Piece("10.01", [4, 7]),
  new Piece("10.01", [4, 9]),
  new Piece("999999999.01", [1, 5]),
];
const ext = ".png";
const rootPath = "./img/";
const spaceX = 57;
const spaceY = 57;
const initPieceBlack = [
  new Piece("90.00", [10, 1]),
  new Piece("90.00", [10, 9]),
  new Piece("50.00", [8, 2]),
  new Piece("50.00", [8, 8]),
  new Piece("40.00", [10, 2]),
  new Piece("40.00", [10, 8]),
  new Piece("25.00", [10, 3]),
  new Piece("25.00", [10, 7]),
  new Piece("20.00", [10, 4]),
  new Piece("20.00", [10, 6]),
  new Piece("10.00", [7, 1]),
  new Piece("10.00", [7, 3]),
  new Piece("10.00", [7, 5]),
  new Piece("10.00", [7, 7]),
  new Piece("10.00", [7, 9]),
  new Piece("999999999.00", [10, 5]),
];

var canvas = document.getElementById("myCanvas");


$(document).ready(function () {
  init(initPieceRed, 1);
  init(initPieceBlack, -1);
});
function btn_Click(event, id) {
  var myButton = document.getElementById(String(id));
  myButton.style.opacity = 0.8;
  canvas.onclick = function(ev) {
    myButton.style.opacity = 1;
    var y = ev.clientX - canvas.offsetTop;
    var x = ev.clientY - canvas.offsetLeft;
    console.log(x);
    console.log(y);
    myButton.style.top = "" + (x-16) + "px";
    myButton.style.left = "" + (y-140) + "px";
  }
  // document.onmousedown = function (event) {
  //   const rect = canvas.getBoundingClientRect();
  //   const x = event.clientX - rect.left;
  //   const y = event.clientY - rect.top;
  //   myButton.style.top = "" + x + "px";
  //   myButton.style.left = "" + y + "px";
  //   console.log("x: " + x + " y: " + y);
  //   myButton.style.opacity = 1;
  // };
}

function init(listPiece = [], type) {
  var content = document.getElementById("content");
  var style = document.createElement("style");
  var styleCss = "";
  listPiece.map((item, index) => {
    item.backgroundUrl = rootPath + item.name + ext;
  });
  listPiece.map((item, index) => {
    var element = document.createElement("button");
    styleCss +=
      "#btn-" +
      index +
      type +
      " { background-image: url('" +
      item.backgroundUrl +
      "'); } ";
    element.setAttribute("class", "piece");
    element.setAttribute("onclick", "btn_Click(event, this.id)");
    element.setAttribute("id", "btn-" + index + type);
    var x = (item.position[0] - 1) * spaceX;
    var y = (item.position[1] - 1) * spaceY;
    element.style.top = "" + x + "px";
    element.style.left = "" + (y+10) + "px";
    content.appendChild(element);
  });
  style.innerHTML = styleCss;
  document.head.appendChild(style);
}
