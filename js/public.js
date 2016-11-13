
$imgheight= 926; //define the height of the fixed bg image
//onload
window.onload = function() {
  if (window.innerHeight < $imgheight) {
    document.getElementById('footer-spacer').style.marginBottom = '-'+window.innerHeight+'px';
  } else {
    document.getElementById('footer-spacer').style.marginBottom = '-'+$imgheight+'px';
  }
}
//onresize
window.onresize = function() {
  if (window.innerHeight < $imgheight) {
    document.getElementById('footer-spacer').style.marginBottom = '-'+window.innerHeight+'px';
  } else {
    document.getElementById('footer-spacer').style.marginBottom = '-'+$imgheight+'px';
  }
  //debug
  //var txt=document.getElementById("footer-spacer");
  //txt.innerHTML=window.innerHeight+" "+ txt.style.cssText;
}
