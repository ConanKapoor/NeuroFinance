'use strict';
jQuery(document).ready(function($) {
	var firstsection = $(".first-section");
	var secondsection = $(".second-section");
	var thirdsection = $(".third-section");
	var fourthsection = $(".fourth-section");
	var fifthsection = $(".fivth-section");
	var sixthsection = $(".sixth-section");

	const sections = [ firstsection,secondsection,thirdsection,fourthsection,fifthsection,sixthsection];
	var addClass = function(cl){
		cl.addClass("blur");
	}
	var removeClass = function(cl){
		cl.removeClass("blur");
	}
	var addWayPoints= function(cl){
		new Waypoint({
		  element: cl,
		  handler: function(direction) {
				if(direction=="down"){
					removeClass(cl);
					for(var i=0;i<sections.length;i++){
						if(sections[i]!=cl){
							addClass(sections[i]);
						}
					}
				}
		  },
		  offset: '30%'
		});

		new Waypoint({
		  element: cl,
		  handler: function(direction) {
				if(direction=="up"){
					removeClass(cl);
					for(var i=0;i<sections.length;i++){
						if(sections[i]!=cl){
							addClass(sections[i]);
						}
					}
				}
		  },
		  offset: '-30%'
		});
	};
	addWayPoints(firstsection);
	addWayPoints(secondsection);
	addWayPoints(thirdsection);
	addWayPoints(fourthsection);
	addWayPoints(fifthsection);
	addWayPoints(sixthsection);
	const second_section_pics = {"inp" :false }
	var x = function(){
		var all = $("#second-all")
		var inp = $("#inp");
		var inp_arr = $("#inp-arr");
		var system = $("#system");
		var inp_up = $("#inp-up");
		var inp_up_arr = $("#inp-up-arr")
		var mid = $("#inp-up");
		var out_arr =$("#out-arr");
		var out = $("#out");
		const fast = "slow";
		const slow = "slow";
		/*inp.fadeTo(fast,0);
		inp_arr.fadeTo(fast,0);
		mid.fadeTo(fast,0);
		out_arr.fadeTo(fast,0);
		out.fadeTo(fast,0,()=>{
			inp.fadeTo(slow,1,()=>{
				inp_arr.fadeTo(slow,1,()=>{
					mid.fadeTo(slow,1,()=>{
							out_arr.fadeTo(slow,1,()=>{
								out.fadeTo(slow,1,()=>{
									x();
								});
							});
					});
				});
			});
		});*/
		inp.fadeTo(fast,0);
		inp_arr.fadeTo(fast,0);
		inp_up.fadeTo(fast,0);
		inp_up_arr.fadeTo(fast,0);
		system.fadeTo(fast,0);
		out_arr.fadeTo(fast,0);
		out.fadeTo(slow,0,()=>{
			system.fadeTo(slow,1,()=>{
				inp.fadeTo(slow,1,()=>{
					inp_arr.fadeTo(slow,1,()=>{
						inp_up.fadeTo(slow,1,()=>{
							inp_up_arr.fadeTo(slow,1,()=>{
								out_arr.fadeTo(slow,1,()=>{
									out.fadeTo(slow,1,()=>{
										x();
									});
								});
							});
						});
					});
				});
			});
		})
	};
	x();
});
