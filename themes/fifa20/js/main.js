//***************************
// by Pego Apps Entertainment
//**************************/
$(document).ready(function() {
	
	////////////////
	// Footer Popups
	////////////////	
	$(".popup-tos").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("button-click");
		}		
		$.magnificPopup.open({
			items: {
				src: '#terms-of-service',
			},
			type: 'inline',
			preloader: false,
			modal: false,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#terms-of-service').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});					
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
					if ($sound_setting == 1) {
						ion.sound.play("transition-end");
					}
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
					
				}
			}
		});	
	});
	$(".popup-contact").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("button-click");
		}		
		$.magnificPopup.open({
			items: {
				src: '#contact-us',
			},
			type: 'inline',
			preloader: false,
			modal: false,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#contact-us').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});					
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
					if ($sound_setting == 1) {
						ion.sound.play("transition-end");
					}
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
					
				}
			}
		});	
	});
    $(".popup-pp").click(function() {
		if ($sound_setting == 1) {
			ion.sound.play("button-click");
		}		
		$.magnificPopup.open({
			items: {
				src: '#privacy-policy',
			},
			type: 'inline',
			preloader: false,
			modal: false,
			removalDelay: 300,
			callbacks: {
				open: function() {
					$('#privacy-policy').addClass('bounceIn').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
						$(this).removeClass('bounceIn');
					});					
				},
				beforeClose: function() {
					this.content.addClass('animated fadeOutDown');
					if ($sound_setting == 1) {
						ion.sound.play("transition-end");
					}
				}, 
				close: function() {
					this.content.removeClass('animated fadeOutDown');
					
				}
			}
		});	
	});
	
});



}();
//***************************
// by Pego Apps Entertainment
//**************************/