var colorPalette = ['#c7875f', '#e66d7', '#5beb37', '#9469fb', '#040f6a', '#e93e7f', '#0c103c','#401b1','#1c68ca', '#8a2a5', '#84c331', '#731070', '#9af818', '#590176', '#43bd92','#0db1a', '#928702', '#61aaf', '#2c310d', '#28c03b', '#312b7f', '#777454', '#6da485','#a2377', '#bccf7a', '#ee340'];

$(document).ready(function() {
  changeBackground();
  setInterval(changeBackground, 3000);
});
var changeBackground = function() {
  var newColor;
  do {
    var colorIndex = Math.floor(Math.random() * colorPalette.length);
    newColor = colorPalette[colorIndex];
  }
  while (newColor === rgb2hex($("body").css("background-color")))

$("body").css("background-color", newColor);
}


function rgb2hex(rgb) {
    if (/^#[0-9A-F]{6}$/i.test(rgb)) return rgb;

    rgb = rgb.match(/^rgb\((\d+),\s*(\d+),\s*(\d+)\)$/);
    function hex(x) {
        return ("0" + parseInt(x).toString(16)).slice(-2);
    }
    return "#" + hex(rgb[1]) + hex(rgb[2]) + hex(rgb[3]);
}
