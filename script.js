document.onkeypress = function (evt) {
    evt = evt || window.event;
    var charCode = evt.keyCode || evt.which;
    var charStr = String.fromCharCode(charCode);
    document.getElementById("output").innerHTML = charStr+" = "+charCode
    document.getElementById("hidden-copy").value = charCode
};
function copy() {
  console.log("copied")
  var copyText = document.querySelector("#hidden-copy");
  /* copyText.select();
  document.execCommand("copy"); */
  /* Select the text field */
  copyText.select();
  copyText.setSelectionRange(0, 99999); /*For mobile devices*/
  document.execCommand("copy");
}