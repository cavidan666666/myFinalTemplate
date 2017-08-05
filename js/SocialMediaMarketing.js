var progressbar = $(".progresss")

for (var i = 0; i < progressbar.length; i++) {
	progressbar[i].addEventListener("click",function(){
		var element = $(this).index();
		for (var c = progressbar.length; c > element; c--) {
			$(progressbar[c]).removeClass("change");
		}
		for (var d = 0; d <= element; d++) {
			$(progressbar[d]).attr("class", "change");
		}
	})
}




var myHover = document.querySelector(".dmColInput");
myHover.style.backgroundColor = "rgba(0,0,0,0.0)";
myHover.style.padding = "10px";
myHover.style.border = "2px solid #53B778 ";
myHover.style.color = "white";
myHover.style.marginBottom = "50px";




myHover.addEventListener("mouseover", function(){
	this.style.backgroundColor = "#53B778";
	 this.style.transition = "0.2s ease-in";
	 this.style.color="white";
	
})


myHover.addEventListener("mouseleave", function(){
	this.style.backgroundColor = "rgba(0,0,0,0.0)";
	 this.style.transition = "0.2s ease-in";
	 this.style.color="white";
	
})