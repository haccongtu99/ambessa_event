$(document).ready(function () {
	// Open modal
	$('#open-modal').click(function () {
		$('#modal').fadeIn();
	});

	// Close modal
	$('#close-modal').click(function () {
		$('#modal').fadeOut();
	});

	// Close modal when clicking outside modal-content
	$(window).click(function (e) {
		if ($(e.target).is('#modal')) {
			$('#modal').fadeOut();
		}
	});

	// Add close button functionality
	$('#modal .close').click(function () {
		$('#modal').fadeOut();
	});
});
