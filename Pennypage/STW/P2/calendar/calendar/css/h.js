$("span").not(".c").click(function() {
  var n = Number($("strong").attr("data-n"))+1;
  $("strong").html(
    a(n,1)+"<i></i>"
  ).attr("data-n",n);
});

function a(a,b){b=Math.pow(10,b);var c=["k","m","b","t"];for(var i=c.length-1;i>=0;i--){var d=Math.pow(10,(i+1)*3);if(d<=a){a=Math.round(a*b/d)/b;if((a==1000)&&(i<c.length-1)){a=1;i++}a+=c[i];break}}return a}