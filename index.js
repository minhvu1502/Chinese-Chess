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
const space = 57;
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
var ctx = canvas.getContext("2d");
ctx.stroke();

$(document).ready(function () {
  var content = document.getElementById("content");
  var style = document.createElement("style");
  initPieceRed.map((item, index) => {
    item.backgroundUrl = rootPath + item.name + ext;
  });
  initPieceRed.map((item, index) => {
    var element = document.createElement("button");
    style.innerHTML = "#btn-"+index+" { background-image: url('"+item.backgroundUrl+"'); }";
    document.head.appendChild(style);
    element.setAttribute("class", "piece");
    element.setAttribute("id", 'btn-'+index);
    content.appendChild(element);
  });

});
function btn_Click(event, id) {
  console.log(event);
  var myButton =  document.getElementById(String(id));
  var style = document.createElement("style");
  style.innerHTML = "#"+id+" {top: 0px; left: 0px;background: green}";
  console.log(style);
  console.log(myButton);
}
