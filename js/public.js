// var jq = document.createElement("script");

// jq.addEventListener("load", proceed); // pass my hoisted function
// jq.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/3.1.1/jquery.min.js";
// document.querySelector("head").appendChild(jq);

// function proceed () {
//   // jQuery load complete, do your magic
//   $(document).ready(function(){

//     /*--- Variables */
//       //breakpoint between small and medium viewports
//       var smallViewport = 680;
//       //define the height of the fixed bg image
//       var imgHeight= 926;
//       var minHeight= 768;
//     /*---*/

//     /*--- functions */
//       //finds out how wide the scrollbar is, as css calculates viewport differently from JS
//       function scrollbarWidth() {
//         var $inner = $('<div style="width: 100%; height:200px;">test</div>'),
//           $outer = $('<div style="width:200px;height:150px; position: absolute; top: 0; left: 0; visibility: hidden; overflow:hidden;"></div>').append($inner),
//           inner = $inner[0],
//           outer = $outer[0];

//         $('body').append(outer);
//         var width1 = inner.offsetWidth;
//         $outer.css('overflow', 'scroll');
//         var width2 = outer.clientWidth;
//         $outer.remove();

//         return (width1 - width2);
//       }

//       function backgroundImage() {
//         if (window.innerHeight < minHeight) {
//           $('#footer-spacer').css( { "margin-bottom" : '-' + minHeight + 'px' });
//         } else if (window.innerHeight < imgHeight) {
//           $('#footer-spacer').css( { "margin-bottom" : '-' + window.innerHeight + 'px' });
//         } else {
//           $('#footer-spacer').css( { "margin-bottom" : '-' + imgHeight + 'px' });
//         }
//       }



//       function backgroundImageInspector() {
//         var txt=document.getElementById("footer-spacer");
//         txt.innerHTML=window.innerHeight+" "+ txt.style.cssText;
//       }

//     /*--- responsive conditionals: load time */

//       backgroundImage();
//       backgroundImageInspector();

//       //change menu style based on viewport size
//       if (window.innerWidth <= (smallViewport + scrollbarWidth()) ) {

//       }
//       if (window.innerWidth > (smallViewport + scrollbarWidth()) ) {

//       }
//     /*---*/

//     /*--- responsive conditionals: on resize */
//       $(window).resize(function(){

//         backgroundImage();
//         backgroundImageInspector();
//         //flip between small and large size menu on screen resize
//         if(window.innerWidth <= (smallViewport + scrollbarWidth()) ) {

//         }
//         if(window.innerWidth > (smallViewport + scrollbarWidth()) ) {

//         }

//       });

//   });
// }




