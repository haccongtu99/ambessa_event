'use strict';

$(document).ready(function () {
	// Open modal
	$('#open-modal').click(function () {
		$('#modal').fadeIn().css('display', 'flex');
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

$(document).ready(function () {
	const champ_contents = {
		'jinx-3': {
			name: 'Jinx',
			role: 'ad',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/jinx-ava.svg',
			description: 'Jinx, nhà phát minh',
			diff_level: 'Trung bình',
			skill: './assets/img/vng/frame3/modal/jinx-skill.svg',
		},
		'jayce-3': {
			name: 'Jayce',
			role: 'top',
			level: 3,
			avatar: './assets/img/vng/frame3/modal/jayce-ava.svg',
			description: 'Jayce, nhà phát minh',
			skill: './assets/img/vng/frame3/modal/jayce-skill.svg',
			diff_level: 'Trung bình',
		},
		'viktor-3': {
			name: 'viktor',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/viktor-ava.svg',
			description: 'viktor, nhà phát minh',
			skill: './assets/img/vng/frame3/modal/viktor-skill.svg',
			diff_level: 'Trung bình',
		},
		'heimerdinger-3': {
			name: 'heimerdinger',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/heimerdinger-ava.svg',
			description: 'heimerdinger, nhà phát minh',
			skill: './assets/img/vng/frame3/modal/heimerdinger-skill.svg',
			diff_level: 'Trung bình',
		},
		'ekko-3': {
			name: 'ekko',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/ekko-ava.svg',
			description: 'ekko, nhà phát minh',
			skill: './assets/img/vng/frame3/modal/ekko-skill.svg',
			diff_level: 'Trung bình',
		},
		'vi-3': {
			name: 'vi',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/vi-ava.svg',
			description: 'vi, nhà phát minh',
			skill: './assets/img/vng/frame3/modal/vi-skill.svg',
			diff_level: 'Trung bình',
		},
		'caitlyn-3': {
			name: 'caitlyn',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/caitlyn-ava.svg',
			description: 'caitlyn, nhà phát minh',
			skill: './assets/img/vng/frame3/modal/caitlyn-skill.svg',
			diff_level: 'Trung bình',
		},
		'mel-3': {
			name: 'mel',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/mel-ava.svg',
			description: 'mel, nhà phát minh',
			skill: './assets/img/vng/frame3/modal/mel-skill.svg',
			diff_level: 'Trung bình',
		},
		'ambessa-3': {
			name: 'ambessa',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/ambessa-ava.svg',
			description: 'ambessa, nhà phát minh',
			skill: './assets/img/vng/frame3/modal/ambessa-skill.svg',
			diff_level: 'Trung bình',
		},
	};

	$('.champion_item').on('click', function () {
		// Get the current background image URL
		const currentBg = $(this).css('background-image');
		const content = champ_contents[$(this).attr('id')];

		// First, deactivate all champion items (remove data-active)
		$('.champion_item').removeAttr('data-active');

		// Then, set the clicked item as active
		if ($(this).attr('data-active') !== 'true') {
			$(this).attr('data-active', 'true');
		}

		// Update the h3 and p content
		$('.modal-info h1').html(content.name);
		$('.modal-description').html(content.description);
		$('.modal-role p').html(content.role);
		$('.modal-role img').attr('src', content.skill);
		$('.modal-info img').eq(0).attr('src', content.avatar);
		$('.modal-level img').attr(
			'src',
			`./assets/img/vng/frame3/modal/level-${content.level}.svg`
		);

		// Extract the path from the URL
		const pathMatch = currentBg.match(/url\(["']?(.+?)["']?\)/);
		if (pathMatch) {
			const basePath = pathMatch[1].replace('.png', ''); // Remove the .png extension

			// Append "_hover" to the base path
			const hoverPath = `${basePath}_hover.png`;

			// Open the modal
			$('#modal').fadeIn().css('display', 'flex');

			// Set the new background image for the modal
			$('.modal-background').css('background-image', `url(${hoverPath})`);
		}
	});

	// Close the modal
	$('.close').on('click', function () {
		$('#modal').fadeOut();
	});
});
