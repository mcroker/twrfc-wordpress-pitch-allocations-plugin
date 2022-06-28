jQuery(window).resize(function(){
  resize_pitch();
})


jQuery(window).ready(function(){
  resize_pitch();
})

function resize_pitch() {
  jQuery('.pitchlabel').textfill({
    minFontPixels: 10,
    maxFontPixels: 24,
    allowOverflow: true
  });
}
