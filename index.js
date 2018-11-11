
function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget() {
  return document.querySelector('.target');
}

function increaseRankBy(n) {
  var ranks = document.querySelectorAll('ul.ranked-list li');
  for (var i = 0; i < ranks.length; i++) {
    ranks[i].innerHTML = parseInt(ranks[i].innerHTML) + parseInt(n);
  }
}

// function deepestChild() {
//   var boo = document.querySelector('div#grand-node');
  
// }

function deepestChild() {
  var y = document.querySelector('div#grand-node');
  function retrieve(x){
    while (x.children[0]) {
    var a = x.children[0];
    x = a; }
    return x}
return retrieve(y).innerText;
}