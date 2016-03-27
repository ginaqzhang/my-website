/*
 * ginawebsite.js
 */

var FishBoxes = (function() {
	var myData = {};
	var boxHeight = 96;
	var boxWidth = 96;
	var resizeTimeout;
	var animationDuration = 2500;

	var suffixes = ['GG', 'GP', 'GR', 'GY', 'PG', 'PP', 'PR', 'PY', 'RG',
		'RP', 'RR', 'RY', 'YG', 'YP', 'YR', 'YY'];

	myData.init = function(t) {
		myData.target = t || '#fishes';
		var $target = $(myData.target);
		$target.html('');
		addBoxes();
		$(window).resize(handleResize);
		$target.on('mouseover', '.fish-box', randomFish);
		$target.on('click', swimAway);
	};

	var clearBoxes = function(reAdd) {
		$('.fish-box').addClass('gone');
		setTimeout(function() {
			$(myData.target).html('');
			if (reAdd) {
				addBoxes();
			}
		}, animationDuration);
	};

	var addBoxes = function() {
		var $target = $(myData.target);
		myData.width = $target.width();	
		myData.height = $target.height();
		for (var i = 0; i < Math.ceil(myData.height / boxHeight); ++i) {
			$target.append('<div class="fish-row"></div>');
		}
		for (var i = 0; i < Math.ceil(myData.width / boxWidth); ++i) {
			$('.fish-row').append('<div class="fish-box"></div>');
		}
	};

	var handleResize = function() {
		clearBoxes(false);
		clearTimeout(resizeTimeout);
		resizeTimeout = setTimeout(function() {
			addBoxes();
			isResizing = false;
		}, animationDuration);
	};

	var randomFish = function() {
		myData.randomFish(this);
	};

	myData.randomFish = function(target) {
		var suffix = suffixes[Math.floor(Math.random() * suffixes.length)];
		$(target).css('background-image', 'url("assets/fish/fish' + suffix + '.svg")');
	};

	var swimAway = function() {
		clearBoxes(true);
		$(myData.target).off('click');
		setTimeout(function() {
			$(myData.target).on('click', swimAway);
		}, animationDuration);
	};

	return myData;
})();

var ContactForm = (function() {
	var myForm = {};

	var updateStatus = function(validationStatus) {
		if (myForm.isValid != validationStatus) {
			var $submitButton = $(myForm.target).find('button').first();
			$submitButton.toggleClass('hidden');
			myForm.isValid = validationStatus;
		}
	}

	var validate = function(changed) {
		var isValidName = myForm.nameField.val().length > 0;
		var isValidEmail = (/.+@.+\..+/i).test(myForm.emailField.val());
		var isValidMsg = myForm.msgField.val().length > 0;
		updateStatus(isValidName && isValidEmail && isValidMsg);
	}

	var showWaitingAnimation = function() {
		var $target = $(myForm.target);
		$target.find('.input-wrapper').addClass('hidden');
		$target.find('.waiting-dots').removeClass('hidden');
	}

	var showConfirmation = function(success) {
		var $target = $(myForm.target);
		$confirmation = $target.find('.confirmation').first();
		if (success) {
			$confirmation.html(
				'Thanks for reaching out! I\'ll respond as soon as possible.'
			);
		} else {
			$confirmation.html(
				'Oops! There was an error while sending. Reload the page to retry.'
			);
		}
		$target.find('.waiting-dots').addClass('hidden');
		$confirmation.removeClass('hidden');
	}

	var submissionUrl = 'contact.php';

	myForm.init = function(options) {
		options = options || {};
		myForm.target = options.target || '#contact-form';
		myForm.isValid = false;

		var $target = $(myForm.target);
		myForm.nameField = $target.find('#name-input');
		myForm.emailField = $target.find('#email-input');
		myForm.msgField = $target.find('#msg-input');

		myForm.nameField.on('input', function() {
			validate();
		});
		myForm.emailField.on('input', function() {
			validate();
		});
		myForm.msgField.on('input', function() {
			validate();
		});
	}

	myForm.submit = function() {
		if (myForm.isValid) {
			showWaitingAnimation();
			var params = {
				name: myForm.nameField.val(),
				email: myForm.emailField.val(),
				msg: myForm.msgField.val()
			}
			$.post(submissionUrl, params, function(data) {
				showConfirmation(data.success);
			}, 'json');
		}
		return false;
	}

	return myForm;
})();

$(document).ready(function () {
	FishBoxes.init();
	ContactForm.init();

	$('.arrow-wrapper').on('click', function() {
		$('.bigboxes').removeClass('shifted');
		$(this).parent().addClass('shifted');
		return false;
	});

	$('.arrow').on('click', function() {
		$('.bigboxes').removeClass('shifted');
		$(this).parent().parent().addClass('shifted');
		return false;
	})

	$('.bigboxes').on('click', function() {
		$(this).removeClass('shifted');
	});

	$(window).resize(function() {
		$('.bigboxes').removeClass('shifted');
	})

	FishBoxes.randomFish('#bottomfish');
	$('#bottomfish').on('mouseover click', function() {
		FishBoxes.randomFish('#bottomfish');
	});
});
