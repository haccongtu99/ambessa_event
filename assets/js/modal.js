'use strict';
import { isMobileDevice } from './useDevice.js';

// This update is not the best solution, but we need complete this task in short time

function isMobileScreen() {
	return window.innerWidth <= 390;
}

function isMobile() {
	return isMobileDevice() || isMobileScreen();
}

let modalTag = 'modal';
let modalName = 'modal';

function handleOpenModalWhenClickChamp() {
	const champ_contents = {
		'jinx-3': {
			name: 'Jinx',
			role: 'ad',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/jinx-ava.svg',
			description: 'Jinx bị giằng xé giữa hai nhân cách: cô gái cứng rắn, mạnh mẽ do Silco nuôi dạy và bé gái nhút nhát, bé bỏng được người chị Vi bao bọc. Sau khi chấp nhận mình là con quái vật do Vi tạo ra, Jinx trở thành một cái xác không hồn, một "Jinx" bị nguyền rủa và phá hủy mọi thứ.',
			diff_level: 'Trung bình',
			skill: './assets/img/vng/frame3/modal/jinx-skill.svg',
		},
		'jayce-3': {
			name: 'Jayce',
			role: 'top',
			level: 3,
			avatar: './assets/img/vng/frame3/modal/jayce-ava.svg',
			description: 'Jayce, nhà phát minh tài năng, dùng cây búa Hextech để bảo vệ Piltover bằng sức mạnh và trí tuệ. Dù được tôn vinh như anh hùng, anh không màng danh tiếng, luôn hành động với trái tim chính trực, khiến ai cũng phải biết ơn vì sự bảo vệ của anh cho Thành Phố Tân Tiến.',
			skill: './assets/img/vng/frame3/modal/jayce-skill.svg',
			diff_level: 'Trung bình',
		},
		'viktor-3': {
			name: 'viktor',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/viktor-ava.svg',
			description: 'Là sứ giả của kỷ nguyên công nghệ mới, Viktor dành cả đời cho sự tiến bộ của nhân loại. Với niềm tin mãnh liệt rằng chỉ có công nghệ mới giúp con người khai phá tối đa tiềm năng, Viktor trở thành biểu tượng lý tưởng cho dân Zaun. Sở hữu cơ thể được nâng cấp bởi sắt thép và khoa học, hắn không ngừng theo đuổi viễn cảnh tương lai rực rỡ mà mình mơ ước.',
			skill: './assets/img/vng/frame3/modal/viktor-skill.svg',
			diff_level: 'Trung bình',
		},
		'heimerdinger-3': {
			name: 'heimerdinger',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/heimerdinger-ava.svg',
			description: 'Được biết tới là một trong những nhà phát minh uy tín nhất Piltover. Heimerdinger đã từng cảnh báo Hội Đồng Piltover về sự nguy hiểm khi sử dụng ma thuật mà không có giải pháp phòng hộ cụ thể. Học hỏi từ những sai lầm của mình, ông truyền cảm hứng cho Ekko tiếp tục hành trình tìm kiếm giải pháp và hỗ trợ cậu trong việc đối phó những thách thức.',
			skill: './assets/img/vng/frame3/modal/heimerdinger-skill.svg',
			diff_level: 'Trung bình',
		},
		'ekko-3': {
			name: 'ekko',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/ekko-ava.svg',
			description: 'Ekko là người sáng lập Ánh Lửa, một nhóm người xứ Zaun xây dựng một ngôi nhà mới mà họ cần bảo vệ. Cậu ấy kết bạn một cách không ngờ tới với Heimerdinger, cùng nhau họ hướng đến việc biến Zaun trở thành một nơi tốt đẹp hơn.',
			skill: './assets/img/vng/frame3/modal/ekko-skill.svg',
			diff_level: 'Trung bình',
		},
		'vi-3': {
			name: 'vi',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/vi-ava.svg',
			description: 'Từng là tội phạm đường phố từ Zaun, Vi là cô gái nóng tính, bốc đồng và đáng sợ. Khi nhận ra em gái mình, Powder, đã hoàn toàn biến chất, Vi quyết định hợp tác cùng Caitlyn trong đội Cảnh Binh, sẵn sàng đối đầu với chính người em mà cô từng yêu thương.',
			skill: './assets/img/vng/frame3/modal/vi-skill.svg',
			diff_level: 'Trung bình',
		},
		'caitlyn-3': {
			name: 'caitlyn',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/caitlyn-ava.svg',
			description: 'Caitlyn là một Cảnh Binh tới từ Piltover. Cô từng sử dụng năng lực điều tra của mình để vạch trần nguồn gốc sự tha hóa tại Zaun và Piltover, nhưng sau cuộc tấn công của Jinx vào hội đồng, cô đã từ bỏ mọi hy vọng về hòa bình.',
			skill: './assets/img/vng/frame3/modal/caitlyn-skill.svg',
			diff_level: 'Trung bình',
		},
		'ambessa-3': {
			name: 'ambessa',
			role: 'top',
			level: 2,
			avatar: './assets/img/vng/frame3/modal/ambessa-ava.svg',
			description: 'Ambessa, một chiến binh Noxus và là mẹ của Mel, thề sẽ bảo vệ thanh danh cho gia đình của mình... ngay cả khi điều đó đi ngược lại với mong muốn của con gái bà.',
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
		// Temp solution
		if (!isMobile()) {
			$('.champion-name').html(content.name);
			$('.champion-description').html(content.description);
			$('.champion-role p').attr('src', content.role);
			$('.champion-role img').attr('src', content.skill);
			$('.champion-level').attr(
				'src',
				`./assets/img/vng/frame3/modal/level-${content.level}.svg`
			);
			$('.champion-avatar img')
				.attr('src', content.avatar)
				.css('width', '400px')
				.css('height', '400px')
				.css('object-fit', 'cover');
		} else {
			$('.modal-infso h1').html(content.name);
			$('.modal-description').html(content.description);
			$('.modal-role p').html(content.role);
			$('.modal-role img').attr('src', content.skill);
			$('.modal-info img').eq(0).attr('src', content.avatar);
			$('.modal-level img').attr(
				'src',
				`./assets/img/vng/frame3/modal/level-${content.level}.svg`
			);
		}
		// Extract the path from the URL
		const pathMatch = currentBg.match(/url\(["']?(.+?)["']?\)/);
		if (pathMatch) {
			const basePath = pathMatch[1].replace('.png', ''); // Remove the .png extension

			const isBasePathHover = basePath.includes('_hover');
			// Append "_hover" to the base path
			const hoverPath = isBasePathHover ? `${basePath}.png` : `${basePath}_hover.png`;

			// Open the modal
			$(`#${modalTag}`).fadeIn().css('display', 'flex');

			// Set the new background image for the modal
			$('.modal-background').css('background-image', `url(${hoverPath})`);
		}
	});

	// Close the modal
	$('.close').on('click', function () {
		$(`#${modalTag}`).fadeOut();
	});
}

function handleModal() {
	modalTag = isMobile() ? 'modal' : 'modal-desktop';
	modalName = isMobile() ? 'modal' : 'modal-desktop';
	// Close modal when clicking outside modal-content
	$(window).click(function (e) {
		if ($(e.target).is(`#${modalName}`)) {
			$(`#${modalName}`).fadeOut();
		}
	});
	
	// Add close button functionality
	$(`#${modalTag} .close`).click(function () {
		$(`#${modalTag}`).fadeOut();
	});
}

$(document).ready(function () {
	handleModal();
	handleOpenModalWhenClickChamp();
	window.addEventListener('resize', handleModal);
});