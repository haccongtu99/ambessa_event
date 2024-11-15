$(document).ready(function () {
	// Define the content for each skill
	const skills = {
		Passive: {
			title: 'Passive - Your Passive Skill Title',
			description: `<span>Nội tại:</span> Ambessa nhận hiệu ứng Xuyên Giáp và các Kỹ Năng sẽ hồi lại máu cho vị tướng này.`,
			activation: `<span>Kích hoạt: </span> Ambessa receives passive effects that grant armor penetration and restore health for each skill use.`,
			videoSrc: './assets/video/passive.mp4',
		},
		Q: {
			title: 'Q - Skill Q Title',
			description: `<span>Nội tại:</span> Q skill description goes here.`,
			activation: `<span>Kích hoạt: </span> Activation effect for skill Q goes here.`,
			videoSrc: './assets/video/Q.mp4',
		},
		W: {
			title: 'W - Skill W Title',
			description: `<span>Nội tại:</span> W skill description goes here.`,
			activation: `<span>Kích hoạt: </span> Activation effect for skill W goes here.`,
			videoSrc: './assets/video/W.mp4',
		},
		E: {
			title: 'E - Skill E Title',
			description: `<span>Nội tại:</span> E skill description goes here.`,
			activation: `<span>Kích hoạt: </span> Activation effect for skill E goes here.`,
			videoSrc: './assets/video/E.mp4',
		},
		R: {
			title: 'R - Hành Quyết Công Khai',
			description: `<span>Nội tại:</span> Ambessa nhận hiệu ứng Xuyên Giáp và các Kỹ Năng sẽ hồi lại máu cho vị tướng này.`,
			activation: `<span>Kích hoạt: </span> Ambessa trở nên không thể ngăn cản và dịch chuyển đến vị trí tướng địch xa nhất trên một đường thẳng. Bà áp chế mục tiêu, sau đó nện chúng xuống mặt đất để gây sát thương và Làm Choáng.`,
			videoSrc: './assets/video/R.mp4',
		},
	};

	// Function to update the skill content and video based on skillKey
	function updateSkillContent(skillKey) {
		if (skills[skillKey]) {
			// Update the h3 and p content
			$('.skill_content h3').html(skills[skillKey].title);
			$('.skill_content p').eq(0).html(skills[skillKey].description);
			$('.skill_content p').eq(1).html(skills[skillKey].activation);

			// Update the video source
			$('.video-container video source').attr('src', skills[skillKey].videoSrc);
			$('.video-container video')[0].load(); // Reload the video with the new source
		}
	}

	// Function to update the skill image source to active version
	function updateSkillImage(skillKey) {
		$('.skill_img img').each(function () {
			const originalSrc = $(this).attr('src').replace('-active.svg', '.svg');
			$(this).attr('src', originalSrc); // Reset to original image
			$(this).removeAttr('data-selected'); // Remove the selected attribute
		});

		// Set the clicked skill image to the active version and add the data-selected attribute
		const activeImage = $(`#${skillKey} img`);
		const activeSrc = activeImage.attr('src').replace('.svg', '-active.svg');
		activeImage.attr('src', activeSrc);
		activeImage.attr('data-selected', 'true');
	}
	
	// Set default content to "Passive" on page load
	updateSkillContent('Passive');
	updateSkillImage('Passive');

	// Add click event listener for each skill image
	$('.skill_img').on('click', function () {
		// Get the id of the clicked element to identify the skill
		const skillKey = $(this).attr('id');

		// Update content based on the selected skill
		updateSkillContent(skillKey);

		// Update the skill image
		updateSkillImage(skillKey);
	});

	// Add hover effect to change the image source to active version only if not already active
	$('.skill_img').hover(
		function () {
			// On hover in, check if the image is already active
			const skillKey = $(this).attr('id');
			const activeImage = $(this).find('img');
			const activeSrc = activeImage.attr('src').replace('.svg', '-active.svg');

			// Only change the image to active version if it is not already active
			if (!activeImage.attr('data-selected')) {
				activeImage.attr('src', activeSrc);
			}
		},
		function () {
			// On hover out, revert the image to the default version if it is not already selected
			const skillKey = $(this).attr('id');
			const activeImage = $(this).find('img');

			// Only revert if the image is not active (i.e., not selected)
			if (!activeImage.attr('data-selected')) {
				const originalSrc = activeImage
					.attr('src')
					.replace('-active.svg', '.svg');
				activeImage.attr('src', originalSrc);
			}
		}
	);
});
