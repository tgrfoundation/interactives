// Scenes
var controller = new ScrollMagic.Controller({
	refreshInterval: 100
});

var sounds = {
	hover: new Howl({
    preload: false,
		src: ['sounds/hover.mp3'],
    html5: true
	}),
	boop: new Howl({
    preload: false,
		src: ['sounds/boop-calm.mp3'],
    html5: true
	}),
	good: new Howl({
    preload: false,
		src: ['sounds/good.mp3'],
    html5: true
	}),
	bad: new Howl({
    preload: false,
		src: ['sounds/bad.mp3'],
    html5: true
	}),
	down: new Howl({
    preload: false,
		src: ['sounds/button-down.mp3'],
		volume: 0.2,
    html5: true
	}),
	up: new Howl({
    preload: false,
		src: ['sounds/button-up.mp3'],
		volume: 0.2,
    html5: true
	}),
	transition: new Howl({
    preload: false,
		src: ['sounds/transition.mp3'],
		volume: 0.7,
    html5: true
	}),
	quake: new Howl({
    preload: false,
		src: ['sounds/quake.mp3'],
		volume: 0.7,
    html5: true
	}),
	drone: new Howl({
    preload: false,
		src: ['sounds/drone.mp3'],
		volume: 0.7,
    html5: true
	}),
	volcano: new Howl({
    preload: false,
		src: ['sounds/volcano.mp3'],
		volume: 0.7,
    html5: true
	})
};

anim8.save('slideUp', {
	keyframe: {
		'0': {
			'translateY': 30,
			'opacity': 0
		},
		'100': {
			'translateY': 0,
			'opacity': 1
		},
	},
});

var animations = {
	robot_attachments:  {
		intro: function () {
			this.animator('#robot_attachments .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#robot_attachments .blue', function() {
				this.play('fadeIn ~1s');
			});
			this.animator('#robot_attachments .attachment.attachment-wheels', function() {
				this.play('slideUp ~2s');
			});
			this.animator('#robot_attachments .attachment.attachment-wings', function() {
				this.play('slideUp ~2.1s');
			});
			this.animator('#robot_attachments .attachment.attachment-legs', function() {
				this.play('slideUp ~2.2s');
			});
			this.animator('#robot_attachments .attachment.attachment-first-aid', function() {
				this.play('slideUp ~2.3s');
			});
			this.animator('#robot_attachments .attachment.attachment-float', function() {
				this.play('slideUp ~2.4s');
			});
			this.animator('#robot_attachments .attachment.attachment-temp', function() {
				this.play('slideUp ~2.5s');
			});
			this.animator('#robot_attachments .attachment.attachment-depth', function() {
				this.play('slideUp ~2.6s');
			});
			this.animator('#robot_attachments .attachment.attachment-touch', function() {
				this.play('slideUp ~2.7s');
			});
			this.animator('#robot_attachments .attachment.attachment-sonic', function() {
				this.play('slideUp ~2.8s');
			});
			this.animator('#robot_attachments .attachment.attachment-prop', function() {
				this.play('slideUp ~2.9s');
			});
			this.animator('#robot_attachments .attachment.attachment-gyro', function() {
				this.play('slideUp ~3s');
			});
			this.animator('#robot_attachments .attachment.attachment-infrared', function() {
				this.play('slideUp ~3.1s');
			});

			this.animator('#robot_attachments .information-display', function() {
				this.play('fadeInRight ~3.2s');
			});

			this.animator('#robot_attachments .next', function() {
				this.play('fadeIn ~5s');
			});
		}
	},
	challenge_1_quiz: {
		intro: function() {
			this.animator('#challenge_1_quiz .scene', function() {
				this.play('fadeIn');
			});
			this.animator('#challenge_1_quiz .blue-heading', function() {
				this.play('fadeInUp ~1s');
			});
			this.animator('#challenge_1_quiz .question-container', function() {
				this.play('fadeIn ~2s');
			});
			this.animator('#challenge_1_quiz .outof.show-1', function() {
				this.play('fadeIn ~2s');
			});
		},
		completed_quiz: function() {
			setTimeout(function() {
				$('#challenge_1_quiz .quiz-wrapup').removeClass('hidden');
			}, 1000);
			this.animator('#challenge_1_quiz .congrats-screen', function() {
				this.play('fadeIn ~1s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .blue-heading', function() {
				this.play('fadeIn ~2s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .to-our', function() {
				this.play('fadeIn ~3s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .great-work', function() {
				this.play('fadeIn ~4s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .learned', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .now', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .twf', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .de', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .copyright', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#challenge_1_quiz .quiz-wrapup .continue', function() {
				this.play('fadeIn ~7s');
			});
			// TODO Show other shenanigans
		}
	},
	volcano_rescue_map: {
		intro: function () {
			setTimeout(function() {
				$('#volcano_rescue_map').removeClass('hidden');
			}, 100);
			this.animator('#volcano_rescue_map .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#volcano_rescue_map .mp-c2-icon', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#volcano_rescue_map .map-title', function () {
				this.play('fadeInRight ~2s');
			});
			this.animator('#volcano_rescue_map .title-underline', function () {
				this.play('fadeIn ~2s');
			});
			this.animator('#volcano_rescue_map .map-subtitle', function () {
				this.play('fadeInRight ~2.4s');
			});
			this.animator('#volcano_rescue_map .mp-drone', function () {
				this.play('fadeInLeft ~3s');
			});
			this.animator('#volcano_rescue_map .drone-label', function () {
				this.play('fadeInRight ~3s');
			});
			this.animator('#volcano_rescue_map .mission-alert', function () {
				this.play('fadeInUp ~3.7s');
			});
			this.animator('#volcano_rescue_map .mission-message', function () {
				this.play('fadeInUp ~3.9s');
			});
			this.animator('#volcano_rescue_map .mp-go', function () {
				this.play('fadeInUp ~4.1s');
			});
			this.animator('#volcano_rescue_map .spinning-earth-container', function () {
				this.play('fadeIn ~5s');
			});
		}
	},
	volcano_mission_debrief: {
		intro: function() {
			this.animator('#volcano_mission_debrief .scene', function() {
				this.play('fadeIn');
			});
			this.animator('#volcano_mission_debrief .mp-c2-icon-large', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#volcano_mission_debrief .debrief-title', function () {
				this.play('fadeInRight ~2s');
			});
			this.animator('#volcano_mission_debrief .debrief-alert', function () {
				this.play('fadeInUp ~3s');
			});
			this.animator('#volcano_mission_debrief .debrief-message', function () {
				this.play('fadeInUp ~3s');
			});
			this.animator('#volcano_mission_debrief .next', function() {
				this.play('fadeIn ~4s');
			});
			this.animators('#volcano_mission_debrief .progress > *', function() {
				this.sequence(250, 'linear').play('fadeInDown ~1s');
			});
		}
	},
	volcano_mission_questions: {
		intro: function() {
			this.animator('#volcano_mission_questions .scene', function() {
				this.play('fadeIn');
			});
			this.animator('#volcano_mission_questions .blue-heading', function() {
				this.play('fadeInUp ~1s');
			});
			this.animator('#volcano_mission_questions .question-container', function() {
				this.play('fadeIn ~2s');
			});
			this.animator('#volcano_mission_questions .outof.show-1', function() {
				this.play('fadeIn ~2s');
			});
		},
		completed_quiz: function() {
			this.animator('#volcano_mission_questions .quiz-wrapup .blue-heading', function() {
				this.play('fadeInUp');
			});
			this.animator('#volcano_mission_questions .quiz-wrapup .c2-drone', function() {
				this.play({
					keyframe: {
						'0': {scale: 0, translateX: 300, translateY: 200, easing : 'linear'},
						'100': {scale: 1, translateX: 0, translateY: 0, easing: 'linear'},
						// '99': {opacity: 1, scale: 3, translateX: -800, translateY: -800, easing: 'linear'},
						// '100': {opacity: 0}
					},
					scaleBases: {
						opacity: 1
					},
				}, {
					duration: 5000,
					delay: 1000
				});
			});
			this.animator('#volcano_mission_questions .next-vmq', function() {
				this.play('fadeIn ~4s');
			});
			// TODO Show other shenanigans
		}
	},
	volcano_tutorial_mission: {
		intro: function() {
			this.animator('#volcano_tutorial_mission .scene', function() {
				this.play('fadeIn');
			});
		}
	},
	volcano_get_sample_mission: {
		intro: function() {
			this.animator('#volcano_get_sample_mission .scene', function() {
				this.play('fadeIn');
			});
		}
	},
	volcano_congrats_screen: {
		intro: function () {
			this.animator('#volcano_congrats_screen .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#volcano_congrats_screen .blue-heading', function() {
				this.play('fadeIn ~2s');
			});
			this.animator('#volcano_congrats_screen .to-our', function() {
				this.play('fadeIn ~3s');
			});
			this.animator('#volcano_congrats_screen .great-work', function() {
				this.play('fadeIn ~4s');
			});
			this.animator('#volcano_congrats_screen .learned', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#volcano_congrats_screen .now', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#volcano_congrats_screen .twf', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#volcano_congrats_screen .de', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#volcano_congrats_screen .copyright', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#volcano_congrats_screen .continue', function() {
				this.play('fadeIn ~7s');
			});
		}
	},
	earthquake_rescue_map: {
		intro: function () {
			this.animator('#earthquake_rescue_map .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#earthquake_rescue_map .mp-c3-icon', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#earthquake_rescue_map .map-title', function () {
				this.play('fadeInRight ~2s');
			});
			this.animator('#earthquake_rescue_map .title-underline', function () {
				this.play('fadeIn ~2s');
			});
			this.animator('#earthquake_rescue_map .map-subtitle', function () {
				this.play('fadeInRight ~2.4s');
			});
			this.animator('#earthquake_rescue_map .mp-atv', function () {
				this.play('fadeInLeft ~3s');
			});
			this.animator('#earthquake_rescue_map .atv-label', function () {
				this.play('fadeInRight ~3s');
			});
			this.animator('#earthquake_rescue_map .mission-alert', function () {
				this.play('fadeInUp ~3.7s');
			});
			this.animator('#earthquake_rescue_map .mission-message', function () {
				this.play('fadeInUp ~3.9s');
			});
			this.animator('#earthquake_rescue_map .mp-go', function () {
				this.play('fadeInUp ~4.1s');
			});
			this.animator('#earthquake_rescue_map .spinning-earth-container', function () {
				this.play('fadeIn ~5s');
			});
		}
	},
	earthquake_mission_debrief: {
		intro: function () {
			this.animator('#earthquake_mission_debrief .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#earthquake_mission_debrief .mp-c2-icon-large', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#earthquake_mission_debrief .debrief-title', function () {
				this.play('fadeInRight ~2s');
			});
			this.animator('#earthquake_mission_debrief .debrief-alert', function () {
				this.play('fadeInUp ~3s');
			});
			this.animator('#earthquake_mission_debrief .debrief-message', function () {
				this.play('fadeInUp ~3s');
			});
			this.animator('#earthquake_mission_debrief .next', function() {
				this.play('fadeIn ~4s');
			});
			this.animators('#earthquake_mission_debrief .progress > *', function() {
				this.sequence(250, 'linear').play('fadeInDown ~1s');
			});
		}
	},
	earthquake_mission_questions: {
		intro: function() {
			this.animator('#earthquake_mission_questions .scene', function() {
				this.play('fadeIn');
			});
			this.animator('#earthquake_mission_questions .scene', function() {
				this.play('fadeIn');
			});
			this.animator('#earthquake_mission_questions .blue-heading', function() {
				this.play('fadeInUp ~1s');
			});
			this.animator('#earthquake_mission_questions .question-container', function() {
				this.play('fadeIn ~2s');
			});
			this.animator('#earthquake_mission_questions .outof.show-1', function() {
				this.play('fadeIn ~2s');
			});
		},
		completed_quiz: function() {
			this.animator('#earthquake_mission_questions .quiz-wrapup .blue-heading', function() {
				this.play('fadeInUp');
			});
			this.animator('#earthquake_mission_questions .quiz-wrapup .c3-atv', function() {
				this.play({
					keyframe: {
						'0': {scale: 1, opacity:0, easing: 'linear'},
						'100': {scale: 1, opacity:1, easing: 'linear'},
					},
					scaleBases: {
						opacity: 1
					},
				}, {
					duration: 3000,
					delay: 1000
				});
			});
			this.animator('#earthquake_mission_questions .next-emq', function() {
				this.play('fadeIn ~4s');
			});
		}
	},
	earthquake_disaster_relief_mission: {
		intro: function () {
			this.animator('#earthquake_disaster_relief_mission .scene', function () {
				this.play('fadeIn');
			});
		}
	},
	earthquake_congrats_screen: {
		intro: function () {
			this.animator('#earthquake_congrats_screen .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#earthquake_congrats_screen .blue-heading', function() {
				this.play('fadeIn ~2s');
			});
			this.animator('#earthquake_congrats_screen .to-our', function() {
				this.play('fadeIn ~3s');
			});
			this.animator('#earthquake_congrats_screen .great-work', function() {
				this.play('fadeIn ~4s');
			});
			this.animator('#earthquake_congrats_screen .learned', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#earthquake_congrats_screen .now', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#earthquake_congrats_screen .twf', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#earthquake_congrats_screen .de', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#earthquake_congrats_screen .copyright', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#earthquake_congrats_screen .continue', function() {
				this.play('fadeIn ~7s');
			});
		}
	},
	interactive_summary: {
		intro: function () {
			this.animator('#interactive_summary .scene', function() {
				this.play('fadeIn');
			});
			this.animators('#interactive_summary .progress > *', function() {
				this.sequence(250, 'linear').play('fadeInDown ~1s');
			});

			this.animator('#interactive_summary .blue-heading', function() {
				this.play('fadeInUp ~1s');
			});
			this.animator('#interactive_summary .hazards-heading ', function() {
				this.play('fadeInUp ~1.5s');
			});

			this.animator('.hazard.hazard-floods', function() {
				this.play('fadeInUp ~2s');
			});
			this.animator('.hazard.hazard-tsunamis', function() {
				this.play('fadeInUp ~2.25s');
			});
			this.animator('.hazard.hazard-hurricanes', function() {
				this.play('fadeInUp ~2.5s');
			});
			this.animator('.hazard.hazard-volcanoes', function() {
				this.play('fadeInUp ~2.75s');
			});
			this.animator('.hazard.hazard-earthquakes', function() {
				this.play('fadeInUp ~3s');
			});
			this.animator('.hazard.hazard-tornadoes', function() {
				this.play('fadeInUp ~3.25s');
			});

			this.animator('#interactive_summary .c1-target-inside-outline-container', function() {
				this.play('fadeInRight ~4s');
			});
			this.animator('#interactive_summary .c1-target-surface-outline-container', function() {
				this.play('fadeInRight ~5s');
			});
			this.animator('#interactive_summary .c1-target-event-outline-container', function() {
				this.play('fadeInRight ~6s');
			});
		},
		screenUnlocked: function() {
			this.animator('#interactive_summary .next', function() {
				this.play('fadeIn');
			});
		}
	},
	career_connection: {
		intro: function () {
			this.animator('#career_connection .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#career_connection .blue', function() {
				this.play('fadeInUp ~1s');
			});

			this.animator('#career_connection .learn1', function() {
				this.play('fadeInDown ~2s');
			});
			this.animator('#career_connection .learn1-text', function() {
				this.play('fadeInUp ~2s');
			});
			this.animator('#career_connection .learn2', function() {
				this.play('fadeInDown ~2.2s');
			});
			this.animator('#career_connection .learn2-text', function() {
				this.play('fadeInUp ~2.2s');
			});
			this.animator('#career_connection .learn4', function() {
				this.play('fadeInDown ~2.4s');
			});
			this.animator('#career_connection .learn4-text', function() {
				this.play('fadeInUp ~2.4s');
			});
			this.animator('#career_connection .learn5', function() {
				this.play('fadeInDown ~2.6s');
			});
			this.animator('#career_connection .learn5-text', function() {
				this.play('fadeInUp ~2.6s');
			});
			this.animator('#career_connection .learn3', function() {
				this.play('fadeInDown ~2.8s');
			});
			this.animator('#career_connection .learn3-text', function() {
				this.play('fadeInUp ~2.8s');
			});

			this.animator('#career_connection .learn1-checkbox', function() {
				this.play('fadeInUp ~3s');
			});
			this.animator('#career_connection .learn2-checkbox', function() {
				this.play('fadeInUp ~3.2s');
			});
			this.animator('#career_connection .learn4-checkbox', function() {
				this.play('fadeInUp ~3.4s');
			});
			this.animator('#career_connection .learn5-checkbox', function() {
				this.play('fadeInUp ~3.6s');
			});
			this.animator('#career_connection .learn3-checkbox', function() {
				this.play('fadeInUp ~3.8s');
			});
		}
	},
	final_congrats_screen: {
		intro: function () {
			this.animator('#final_congrats_screen .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#final_congrats_screen .blue-heading', function() {
				this.play('fadeIn ~2s');
			});
			this.animator('#final_congrats_screen .to-our', function() {
				this.play('fadeIn ~3s');
			});
			this.animator('#final_congrats_screen .great-work', function() {
				this.play('fadeIn ~4s');
			});
			this.animator('#final_congrats_screen .learned', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#final_congrats_screen .now', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#final_congrats_screen .twf', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#final_congrats_screen .de', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#final_congrats_screen .copyright', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#final_congrats_screen .continue', function() {
				this.play('fadeIn ~7s');
			});
		}
	},
	wrap_up: {
		intro: function () {
			this.animator('#wrap_up .scene', function () {
				this.play('fadeIn');
			});
			this.animator('#wrap_up .title-solar', function () {
				this.play('fadeInRight ~1s');
			});
			this.animator('#wrap_up .title-back', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#wrap_up .completed', function () {
				this.play('fadeInUp ~2s');
			});
			this.animator('#wrap_up .congrats', function () {
				this.play('fadeInUp ~3s');
			});
			this.animator('#wrap_up .twf', function () {
				this.play('fadeIn ~4s');
			});
			this.animator('#wrap_up .dised', function () {
				this.play('fadeIn ~4.25s');
			});
			this.animator('#wrap_up .panel-container', function () {
				this.play('fadeInRight ~5s');
			});
			this.animator('#wrap_up .cert', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
							scale:2
						},
						'100': {
							opacity: 1,
							scale: 1
						}
					}
				}, {
					duration: 1000,
					delay: 6000,
				});
			});
			this.animator('#wrap_up .play', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
							scale:2
						},
						'100': {
							opacity: 1,
							scale: 1
						}
					}
				}, {
					duration: 1000,
					delay: 7000,
				});
			});
			this.animator('#wrap_up .tiger', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
							scale:2
						},
						'100': {
							opacity: 1,
							scale: 1
						}
					}
				}, {
					duration: 1000,
					delay: 8000,
				});
			});
		}
	}
};

var scenes = {
	robot_rescues: new ScrollMagic.Scene({triggerElement: '#robot_attachments', duration: '100%'})
		.addTo(controller)

		// ------ Robot Attachments ------
		.addController(getVisibilityController({
			//container: '#volcano_mission_questions',
			container: '#robot_attachments',
			onImagesLoaded: function () {
				// TODO: Inject Loader
				 m8.runCalls(animations.robot_attachments.intro);
			}
		}))
		.addController( getSceneController({
			container: '#robot_attachments .scene',
			onRegister: function() {
				this.next = $('#robot_attachments .next');
				this.attachment_container = $('#attachment-containers')
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					// sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#robot_attachments'), 'hide', 'hidden');
					m8.intro($('#challenge_1_quiz'), 'show', 'hidden');
					m8.runCalls(animations.challenge_1_quiz.intro);
				});
				var attachments = this.attachment_container.find('.attachment');
				attachments.click(function(ev) {
					attachments.removeClass('selected');
					//console.log(ev);
					$(ev.currentTarget).addClass('selected');
					var new_title = $(ev.currentTarget).find('.title').html();
					var new_description = $(ev.currentTarget).find('.description').html();

					var information_display = $('.information-display');
					information_display.find('.title').html(new_title);
					information_display.find('.description').html(new_description);
				});
			}
		}))
		// ------ Challenge 1 Questions ------
		.addController( getSceneController({
			container: '#challenge_1_quiz .scene',
			onRegister: function() {
				this.next = $('#challenge_1_quiz .continue');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#challenge_1_quiz'), 'hide', 'hidden');
					m8.runCalls(animations.volcano_rescue_map.intro);
					// this.planet_speed = 600;
					this.planet_speed = 20;
					var locations = {
						obj1: {
							// alpha: 3 * Math.PI / 4,
							// delta: 1.49 * Math.PI / 4,
							alpha: 1.3 * Math.PI / 4,
							delta: 1.55 * Math.PI / 4,
							name: 'Hawaii'
						},
					};
					$('#volcano-earth').earth3d({
						locationsElement: $('#volcano-locations'),
						dragElement: $('#volcano-locations'), // where do we catch the mouse drag,
						locations: locations,
						defaultSpeed: this.planet_speed
					});
					// function reducePlanetSpeed(planet_speed) {
					// 	if(planet_speed <= 5) {
					// 		$('#volcano-locations').removeClass('hidden');
					// 		$('#volcano-earth').earth3d({
					// 			defaultSpeed: 0,
					// 		});
					// 		return;
					// 	}
					//
					// 	console.log(planet_speed);
					// 	planet_speed *= 0.95;
					// 	setTimeout(function () {
					// 		$('#volcano-earth').earth3d({
					// 			defaultSpeed: planet_speed,
					// 		});
					// 		reducePlanetSpeed(planet_speed);
					// 	}, 100);
					// }
					// reducePlanetSpeed(this.planet_speed);
				});
			}
		}))
		.addControllerLazy(getDialogController({
			container: '#challenge_1_quiz .scene',
			total: 1,
			opened: 1,
			onHide: function() {
				m8.intro($('#challenge_1_quiz .next'), 'show', 'hidden');
				m8.intro($('#challenge_1_quiz .c2-background-w-glow'), 'show', 'hidden');
				m8.runCalls(animations.challenge_1_quiz.completed_quiz);
			}
		}))
		.addControllerLazy(getSlideshowController({
			name: 'slideshow0',
			container: '#challenge_1_quiz .challenge_1_quiz_questions',
			next: '.next, .next-question',
			slides: ['1', '2', '3', '4'],
      submitted: {},
			onShow: function (slideName) {
        if (!this.submitted[slideName]) {
          this.next.addClass(this.disabledClass);
        } else {
          this.next.removeClass(this.disabledClass);
        }
			},
			onChange: function () {
				sounds.hover.play();
			},
      markSubmitted: function() {
        this.submitted[this.slides[this.index]] = true;
      }
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question1',
			container: '#challenge_1_quiz .challenge_1_quiz_questions .show-1.entire',
			onFinished: function () {
				//console.log("Scene", this.scene);
				var c1slideshow = this.scene.slideshow0;
				//console.log("Next", c1slideshow.next);
        c1slideshow.markSubmitted();
				c1slideshow.next.removeClass(c1slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question2',
			container: '#challenge_1_quiz .challenge_1_quiz_questions .show-2.entire',
			onFinished: function () {
				var c1slideshow = this.scene.slideshow0;
        c1slideshow.markSubmitted();
				c1slideshow.next.removeClass(c1slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question3',
			container: '#challenge_1_quiz .challenge_1_quiz_questions .show-3.entire',
			onFinished: function () {
				var c1slideshow = this.scene.slideshow0;
        c1slideshow.markSubmitted();
				c1slideshow.next.removeClass(c1slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question4',
			container: '#challenge_1_quiz .challenge_1_quiz_questions .show-4.entire',
			onFinished: function () {
				var c1slideshow = this.scene.slideshow0;
        c1slideshow.markSubmitted();
				c1slideshow.next.removeClass(c1slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		// ------ Volcano Rescue Map ------
		.addController(getSceneController({
			container: '#volcano_rescue_map .scene',
			onRegister: function() {
				this.next = this.container.find('.mp-go');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					sounds.boop.play();
					m8.outro($('#volcano_rescue_map'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#volcano_mission_debrief'), 'show', 'hidden');
            sounds.volcano.play();
					}, 100);
					m8.runCalls(animations.volcano_mission_debrief.intro);
					$('#volcano-earth').earth3d('destroy');
				});
			}
		}))
		// ------ Volcano Mission Debrief ------
		.addController( getSceneController({
			container: '#volcano_mission_debrief .scene',
			onRegister: function() {
				this.next = $('#volcano_mission_debrief .next');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					// sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_mission_debrief'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#volcano_mission_questions'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.volcano_mission_questions.intro);
				});
			}
		}))
		// ------ Volcano Mission Questions ------
		.addController( getSceneController({
			container: '#volcano_mission_questions .scene',
			onRegister: function() {
				this.next = $('#volcano_mission_questions .next');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_mission_questions'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#volcano_tutorial_mission'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.volcano_tutorial_mission.intro);
				});
			}
		}))
		.addControllerLazy(getDialogController({
			container: '#volcano_mission_questions .scene',
			total: 1,
			opened: 1,
			onHide: function() {
				m8.intro($('#volcano_mission_questions .next'), 'show', 'hidden');
				m8.intro($('#volcano_mission_questions .quiz-wrapup'), 'show', 'hidden');
				m8.intro($('#volcano_mission_questions .c2-background-w-glow'), 'show', 'hidden');
				m8.runCalls(animations.volcano_mission_questions.completed_quiz);
        
        setTimeout(function() {
            sounds.drone.play();
        }, 2500);
			}
		}))
		.addControllerLazy(getSlideshowController({
			name: 'slideshow',
			container: '#volcano_mission_questions .volcano-assembly-questions',
			next: '.next, .next-question',
			slides: ['1', '2', '3'],
      submitted: {},
			onShow: function (slideName) {
        if (!this.submitted[slideName]) {
          this.next.addClass(this.disabledClass);
        } else {
          this.next.removeClass(this.disabledClass);
        }
			},
			onChange: function () {
				sounds.hover.play();
			},
      markSubmitted: function() {
        this.submitted[this.slides[this.index]] = true;
      }
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question1',
			container: '#volcano_mission_questions .volcano-assembly-questions .show-1.entire',
			onFinished: function () {
				//console.log("Scene", this.scene);
				var slideshow = this.scene.slideshow;
				//console.log("Next", slideshow.next);
        slideshow.markSubmitted();
				slideshow.next.removeClass(slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question2',
			container: '#volcano_mission_questions .volcano-assembly-questions .show-2.entire',
			onFinished: function () {
				var slideshow = this.scene.slideshow;
        slideshow.markSubmitted();
				slideshow.next.removeClass(slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question3',
			container: '#volcano_mission_questions .volcano-assembly-questions .show-3.entire',
			onFinished: function () {
				var slideshow = this.scene.slideshow;
        slideshow.markSubmitted();
				slideshow.next.removeClass(slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		// ------ Volcano Tutorial Mission ------
    .addController(getDragDropCommandController({
      name: 'volcano_disaster_relief_mission',
			container: '#volcano_tutorial_mission .scene',
      wins: 0,
      start: { x: 5, y: 0 },
      direction: 'left',
      frame: {
        translateX: 0,
        translateY: 0,
        rotate: 0
      },
      size: { x: 6, y: 4 },
      directionsLeft: {
        'down': 'right',
        'up': 'left',
        'left': 'down',
        'right': 'up'
      },
      directionsRight: {
        'down': 'left',
        'up': 'right',
        'left': 'up',
        'right': 'down'
      },
      directions: {
        'down': { x: 0, y: 1 },
        'up': { x: 0, y: -1 },
        'left': { x: -1, y: 0 },
        'right': { x: 1, y: 0 }
      },
      blocked: {},
      stuck: {
        '2,1': 1, '1,1': 1, '0,1': 1
      },
      people: {
        '0,2': 1
      },
      running: false,
      attempts: 0,
      attemptsMax: 3,
      onRegister: function() {
        this.next = $('#volcano_tutorial_mission .next');
        this.message = $('#volcano_tutorial_mission .message-text');
        this.messageDialog = $('#volcano_tutorial_mission .message-dialog');
      },
      onSubmit: function(commands) {
        if (this.running) return;
        
        var controller = this;
        var animator = this.container.find('.game-piece').animator();
        var start = m8.copy(this.start);
        var direction = this.direction;
        var helped = false;
        var stucked = false;
        var misses = 0;
        var bumps = 0;
        var outsides = 0;
        var updates = 0;
        
        animator.restore();
        //animator.frame = m8.copy(this.frame)
        
        for (var i = 0; i < commands.length; i++) {
          var c = commands[i];
          var action = c.template.data('action');
          var movement = this.directions[direction];
          
          if (action === 'left') {
            animator.queue('robotTurnLeft & robotUpDown');
            direction = this.directionsLeft[direction]
          }
          if (action === 'right') {
            animator.queue('robotTurnRight & robotUpDown');
            direction = this.directionsRight[direction]
          }
          if (action === 'forward') {
            var nextX = start.x + movement.x;
            var nextY = start.y + movement.y;
            var next = nextX + ',' + nextY;
            if (nextX < 0 || nextX >= this.size.x || nextY < 0 || nextY >= this.size.y) {
              outsides++;
              break;
            }
            if (this.blocked[next]) {
              bumps++;
              continue;
            }
            
            animator.queue({
              move: {
                translateX: movement.x * 100,
                translateY: movement.y * 100
              },
              units: {
                translateX: '%',
                translateY: '%'
              },
              and: 'robotUpDown'
            }, 'linear');
            
            start.x = nextX;
            start.y = nextY;
            
            if (this.stuck[next]) {
              stucked = true;
              break;
            }
          }
          if (action === 'special') {
            var curr = start.x + ',' + start.y;
            if (this.people[curr]) {
              helped = true;
              animator.queue({
                keyframe: {
                  '0': { scale: 1 },
                  '1': { scale: 0 }
                },
                durations: {
                  scale: '2s'
                }
              });
              break;
            } else {
              misses++;
              animator.queue('robotUpDown x3');
            }
          }
        }
        
        controller.running = true;
        
        animator.once('finished', function() {
          
          controller.running = false;
          controller.attempts++;
          
          var allowNext = controller.attempts >= controller.attemptsMax;
          
          if (helped) {
            controller.message.html('Good job! You have successfully entered the volcano!')
            
            allowNext = true
          }
          else if (stucked) {
            controller.message.html('You got stuck! Try staying away from smoke.')
          }
          else if (misses) {
            controller.message.html('You missed entering the volcano!')
          }
          else if (outsides) {
            controller.message.html('You went outside the island area!')
          }
          else if (bumps) {
            controller.message.html('Looks like you had trouble and bumped into things!');
          }
          else {
            controller.message.html('Try again!')
          }
          
          controller.messageDialog.showDialog();
          
          if (allowNext) {
            m8.intro(controller.next, 'show', 'hidden', true)
          }
        });
      },
      onRetry: function() {
        if (this.running) return;
        
        var animator = this.container.find('.game-piece').animator();
        animator.restore();
      }
    }))
		.addController(getSceneController({
			container: '#volcano_tutorial_mission .scene',
			onRegister: function() {
				this.next = $('#volcano_tutorial_mission .next');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_tutorial_mission'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#volcano_get_sample_mission'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.volcano_get_sample_mission.intro);
				});
			}
		}))
		.addController(getDialogController({
			container: '#volcano_tutorial_mission .scene',
			total: 1,
			opened: 0,
			onShowRequest: function (opener, dialog) {
				//m8.intro($('#volcano_tutorial_mission .tutorial-dialog'), 'show', 'hidden');
			},
			onHideRequest: function (closer, dialog) {
				sounds.hover.play();
				//m8.outro($('#volcano_tutorial_mission .tutorial-dialog'), 'hide', 'hidden');
				// $("#volcano_tutorial_mission .tutorial-dialog").addClass("hidden");
			},
			onShow: function (dialog) {
				if (!dialog.data('opened')) {
					dialog.data('opened', true);
					this.opened++;
				}
				sounds.hover.play();
			},
		}))
		// ------ Volcano get Sample Mission ------
    .addController(getDragDropCommandController({
      name: 'volcano_get_sample_mission',
			container: '#volcano_get_sample_mission .scene',
      wins: 0,
      start: { x: 2, y: 3 },
      direction: 'left',
      frame: {
        translateX: 0,
        translateY: 0,
        rotate: 0
      },
      size: { x: 8, y: 5 },
      directionsLeft: {
        'down': 'right',
        'up': 'left',
        'left': 'down',
        'right': 'up'
      },
      directionsRight: {
        'down': 'left',
        'up': 'right',
        'left': 'up',
        'right': 'down'
      },
      directions: {
        'down': { x: 0, y: 1 },
        'up': { x: 0, y: -1 },
        'left': { x: -1, y: 0 },
        'right': { x: 1, y: 0 }
      },
      blocked: {
        '0,0': 1, '1,0': 1, '6,0': 1, '7,0': 1,
        '0,1': 1, '0,3': 1, '0,4': 1, '7,4': 1
      },
      stuck: {
        '2,0': 1, '3,0': 1, '4,0': 1, '5,0': 1,
        '2,1': 1, '3,1': 1, '4,1': 1, '5,1': 1,
        '3,2': 1, '4,2': 1, '3,3': 1
      },
      people: {
        '6,1': 1
      },
      running: false,
      attempts: 0,
      attemptsMax: 3,
      onRegister: function() {
        this.next = $('#volcano_get_sample_mission .next');
        this.message = $('#volcano_get_sample_mission .message-text');
        this.messageDialog = $('#volcano_get_sample_mission .message-dialog');
      },
      onSubmit: function(commands) {
        if (this.running) return;
        
        var controller = this;
        var animator = this.container.find('.game-piece').animator();
        var start = m8.copy(this.start);
        var direction = this.direction;
        var helped = false;
        var stucked = false;
        var misses = 0;
        var bumps = 0;
        var outsides = 0;
        var updates = 0;
        
        animator.restore();
        //animator.frame = m8.copy(this.frame)
        
        for (var i = 0; i < commands.length; i++) {
          var c = commands[i];
          var action = c.template.data('action');
          var movement = this.directions[direction];
          
          if (action === 'left') {
            animator.queue('robotTurnLeft & robotUpDown');
            direction = this.directionsLeft[direction]
          }
          if (action === 'right') {
            animator.queue('robotTurnRight & robotUpDown');
            direction = this.directionsRight[direction]
          }
          if (action === 'forward') {
            var nextX = start.x + movement.x;
            var nextY = start.y + movement.y;
            var next = nextX + ',' + nextY;
            if (nextX < 0 || nextX >= this.size.x || nextY < 0 || nextY >= this.size.y) {
              outsides++;
              break;
            }
            if (this.blocked[next]) {
              bumps++;
              continue;
            }
            
            animator.queue({
              move: {
                translateX: movement.x * 100,
                translateY: movement.y * 100
              },
              units: {
                translateX: '%',
                translateY: '%'
              },
              and: 'robotUpDown'
            }, 'linear');
            
            start.x = nextX;
            start.y = nextY;
            
            if (this.stuck[next]) {
              stucked = true;
              break;
            }
          }
          if (action === 'special') {
            var curr = start.x + ',' + start.y;
            if (this.people[curr]) {
              helped = true
              animator.queue('robotUpDown x3');
              break;
            } else {
              misses++;
              animator.queue('robotUpDown x3');
            }
          }
        }
        
        controller.running = true;
        
        animator.once('finished', function() {
          
          controller.running = false;
          controller.attempts++;
          
          var allowNext = controller.attempts >= controller.attemptsMax;
          
          if (helped) {
            controller.message.html('Good job! You have successfully collected a sample!')
            allowNext = true
          }
          else if (stucked) {
            controller.message.html('You got stuck! Try staying away from smoke.')
          }
          else if (misses) {
            controller.message.html('You missed the sample location!')
          }
          else if (outsides) {
            controller.message.html('You went outside the volcano area!')
          }
          else if (bumps) {
            controller.message.html('Looks like you had trouble and bumped into things!');
          }
          else {
            controller.message.html('Try again!')
          }
          
          controller.messageDialog.showDialog();
          
          if (allowNext) {
            m8.intro(controller.next, 'show', 'hidden', true)
          }
        });
      },
      onRetry: function() {
        if (this.running) return;
        
        var animator = this.container.find('.game-piece').animator();
        animator.restore();
      }
    }))
		.addController(getSceneController({
			container: '#volcano_get_sample_mission .scene',
			onRegister: function () {
				this.next = $('#volcano_get_sample_mission .next');
			},
			onBoot: function () {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_get_sample_mission'), 'hide', 'hidden');
					m8.intro($('#volcano_congrats_screen'), 'show', 'hidden');
					m8.runCalls(animations.volcano_congrats_screen.intro);
				});
			},
		}))
		.addController(getDialogController({
			container: '#volcano_get_sample_mission .scene',
			total: 1,
			opened: 0,
			onShowRequest: function (opener, dialog) {
				//m8.intro($('#volcano_tutorial_mission .tutorial-dialog'), 'show', 'hidden');
			},
			onHideRequest: function (closer, dialog) {
				sounds.hover.play();
				//m8.outro($('#volcano_tutorial_mission .tutorial-dialog'), 'hide', 'hidden');
				// $("#volcano_tutorial_mission .tutorial-dialog").addClass("hidden");
			},
			onShow: function (dialog) {
				if (!dialog.data('opened')) {
					dialog.data('opened', true);
					this.opened++;
				}
				sounds.hover.play();
			},
		}))
		// ------ Volcano Congrats Screen ------
		.addController(getSceneController({
			container: '#volcano_congrats_screen .scene',
			onRegister: function() {
				this.next = $('#volcano_congrats_screen .continue');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_congrats_screen'), 'hide', 'hidden');
					m8.intro($('#earthquake_rescue_map'), 'show', 'hidden');
					m8.runCalls(animations.earthquake_rescue_map.intro);
					this.planet_speed = 20;
					var locations = {
						obj1: {
							// alpha: 3 * Math.PI / 4,
							// delta: 1.49 * Math.PI / 4,
							alpha: 0.8 * Math.PI / 4,
							delta: 0.7 * Math.PI / 4,
							name: 'California'
						},
					};
					$('#earthquake-earth').earth3d({
						locationsElement: $('#earthquake-locations'),
						dragElement: $('#earthquake-locations'), // where do we catch the mouse drag,
						locations: locations,
						defaultSpeed: this.planet_speed
					});
				});
			}
		}))
		// ------ Earthquake Rescue Map ------
		.addController(getSceneController({
			container: '#earthquake_rescue_map .scene',
			onRegister: function() {
				this.next = this.container.find('.mp-go');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#earthquake_rescue_map'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#earthquake_mission_debrief'), 'show', 'hidden');
            sounds.quake.play();
					}, 100);
					m8.runCalls(animations.earthquake_mission_debrief.intro);
					$('#earthquake-earth').earth3d('destroy');
				});
			}
		}))
		// ------ Earthquake Mission Debrief ------
		.addController(getSceneController({
			container: '#earthquake_mission_debrief .scene',
			onRegister: function() {
				this.next = $('#earthquake_mission_debrief .next');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#earthquake_mission_debrief'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#earthquake_mission_questions'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.earthquake_mission_questions.intro);
				});
			}
		}))
		// ------ Earthquake Mission Questions ------
		.addController(getSceneController({
			container: '#earthquake_mission_questions .scene',
			onRegister: function() {
				this.next = $('#earthquake_mission_questions .next-emq');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#earthquake_mission_questions'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#earthquake_disaster_relief_mission'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.earthquake_disaster_relief_mission.intro);
				});
			}
		}))
		.addControllerLazy(getDialogController({
			container: '#earthquake_mission_questions .scene',
			total: 1,
			opened: 1,
			onHide: function() {
				m8.intro($('#earthquake_mission_questions .next-emq'), 'show', 'hidden');
				m8.intro($('#earthquake_mission_questions .quiz-wrapup'), 'show', 'hidden');
				m8.intro($('#earthquake_mission_questions .c2-background-w-glow'), 'show', 'hidden');
				m8.runCalls(animations.earthquake_mission_questions.completed_quiz);
			}
		}))
		.addControllerLazy(getSlideshowController({
			name: 'slideshow2',
			container: '#earthquake_mission_questions .earthquake-assembly-questions',
			next: '.next, .next-question',
			slides: ['1', '2', '3'],
      submitted: {},
			onShow: function (slideName) {
        if (!this.submitted[slideName]) {
          this.next.addClass(this.disabledClass);
        } else {
          this.next.removeClass(this.disabledClass);
        }
			},
			onChange: function () {
				sounds.hover.play();
			},
      markSubmitted: function() {
        this.submitted[this.slides[this.index]] = true;
      }
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question1',
			container: '#earthquake_mission_questions .earthquake-assembly-questions .show-1.entire',
			onFinished: function () {
				var eqslideshow = this.scene.slideshow2;
				//console.log(this.scene);
        eqslideshow.markSubmitted();
				eqslideshow.next.removeClass(eqslideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question2',
			container: '#earthquake_mission_questions .earthquake-assembly-questions .show-2.entire',
			onFinished: function () {
				var slideshow = this.scene.slideshow2;
        slideshow.markSubmitted();
				slideshow.next.removeClass(slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question3',
			container: '#earthquake_mission_questions .earthquake-assembly-questions .show-3.entire',
			onFinished: function () {
				var slideshow = this.scene.slideshow2;
        slideshow.markSubmitted();
				slideshow.next.removeClass(slideshow.disabledClass);
				if (this.isCorrect()) {
					sounds.good.volume(0.7, sounds.good.play());
				} else {
					sounds.bad.volume(0.7, sounds.bad.play());
				}
			},
			onSelect: function () {
				sounds.hover.volume(0.5, sounds.hover.play());
			}
		}))
		// ------ Earthquake Rescue Mission ------
		.addController(getSceneController({
			container: '#earthquake_disaster_relief_mission .scene',
			onRegister: function() {
				this.next = $('#earthquake_disaster_relief_mission .next');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					sounds.boop.play();
					m8.outro($('#earthquake_disaster_relief_mission'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#earthquake_congrats_screen'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.earthquake_congrats_screen.intro);
				});
			}
		}))
		.addController(getDialogController({
			container: '#earthquake_disaster_relief_mission .scene',
			total: 1,
			opened: 0,
			onShowRequest: function (opener, dialog) {
				//m8.intro($('#volcano_tutorial_mission .tutorial-dialog'), 'show', 'hidden');
			},
			onHideRequest: function (closer, dialog) {
				sounds.hover.play();
				//m8.outro($('#volcano_tutorial_mission .tutorial-dialog'), 'hide', 'hidden');
				// $("#volcano_tutorial_mission .tutorial-dialog").addClass("hidden");
			},
		}))
   	.addController(getDragDropCommandController({
      name: 'earthquake_disaster_relief_mission',
      container: '#earthquake_disaster_relief_mission .scene',
      // updatable
      wins: 0,
      start: { x: 3, y: 0 },
      direction: 'down',
      frame: {
        translateX: 0,
        translateY: 0,
        rotate: 0
      },
      // contants
      size: { x: 10, y: 6 },
      directionsLeft: {
        'down': 'right',
        'up': 'left',
        'left': 'down',
        'right': 'up'
      },
      directionsRight: {
        'down': 'left',
        'up': 'right',
        'left': 'up',
        'right': 'down'
      },
      directions: {
        'down': { x: 0, y: 1 },
        'up': { x: 0, y: -1 },
        'left': { x: -1, y: 0 },
        'right': { x: 1, y: 0 }
      },
      blocked: {
        '0,0': true, '1,0': true, '4,0': true, '7,0': true, '9,0': true,
        '0,1': true, '1,1': true, '1,2': true, '9,1': true,
        '0,3': true,
        '0,4': true, '1,4': true, '9,4': true,
        '0,5': true, '3,5': true, '5,5': true, '8,5': true, '9,5': true
      },
      stuck: {
        '6,1': true, '7,1': true, '3,2': true, '7,2': true, '5,3': true, '7,8': true
      },
      people: {
        '8,3': true, '1,5': true
      },
      running: false,
      attempts: 0,
      attemptsMax: 3,
      onRegister: function() {
        this.next = $('#earthquake_disaster_relief_mission .next');
        this.message = $('#earthquake_disaster_relief_mission .message-text');
        this.messageDialog = $('#earthquake_disaster_relief_mission .message-dialog');
      },
      onSubmit: function(commands) {
        if (this.running) return;
        
        var controller = this;
        var animator = this.container.find('.game-piece').animator();
        var start = m8.copy(this.start);
        var direction = this.direction;
        var helped = false;
        var stucked = false;
        var misses = 0;
        var bumps = 0;
        var outsides = 0;
        var updates = 0;
        
        animator.restore();
        animator.frame = m8.copy(this.frame)
        
        var spriteIndex = 0;
        var spriteCount = 2;
        var spriteFrameSwitch = 20;
        var wiggleSprite = function() {
          var img = animator.subject.firstElementChild
          if (++updates % spriteFrameSwitch === 0) {
            spriteIndex = (spriteIndex + 1) % spriteCount;
            img.src = 'images/challenge-3/c3-game-sprite-' + (spriteIndex + 1) + '.png';
          }
        };
        
        animator.on('update', wiggleSprite);
        
        for (var i = 0; i < commands.length; i++) {
          var c = commands[i];
          var action = c.template.data('action');
          var movement = this.directions[direction];
          
          if (action === 'left') {
            animator.queue('robotTurnLeft');
            direction = this.directionsLeft[direction]
          }
          if (action === 'right') {
            animator.queue('robotTurnRight');
            direction = this.directionsRight[direction]
          }
          if (action === 'forward') {
            var nextX = start.x + movement.x;
            var nextY = start.y + movement.y;
            var next = nextX + ',' + nextY;
            if (nextX < 0 || nextX >= this.size.x || nextY < 0 || nextY >= this.size.y) {
              outsides++;
              break;
            }
            if (this.blocked[next]) {
              bumps++;
              continue;
            }
            
            animator.queue({
              move: {
                translateX: movement.x * 100,
                translateY: movement.y * 100
              },
              units: {
                translateX: '%',
                translateY: '%'
              },
              and: 'robotWiggle'
            }, 'linear');
            
            start.x = nextX;
            start.y = nextY;
            
            if (this.stuck[next]) {
              stucked = true;
              break;
            }
          }
          if (action === 'special') {
            animator.queue('pulse x3 & robotWiggle');
            var curr = start.x + ',' + start.y;
            if (this.people[curr]) {
              helped = true
              delete this.people[curr];
            } else {
              misses++;
            }
          }
        }
        
        controller.running = true;
        
        animator.once('finished', function() {
          animator.off('update', wiggleSprite)
          
          controller.running = false;
          controller.attempts++;
          
          var allowNext = controller.attempts >= controller.attemptsMax;
          
          if (helped) {
            if (controller.wins === 0) {
              controller.start = start;
              controller.direction = controller.directionsRight[controller.directionsRight[direction]];
              controller.frame = m8.copy(animator.frame);
              controller.frame.rotate += 180;
              controller.destroyCommands();
              
              animator.play('robotTurnRight, robotTurnRight');
              
              controller.message.html('Good job! Now proceed to the next rescue target!')
            } else {
              controller.message.html('Good job! You have successfully rescued both targets!')
              allowNext = true
            }
            
            controller.wins++;
          }
          else if (stucked) {
            controller.message.html('You got stuck!')
          }
          else if (misses) {
            controller.message.html('You missed helping someone!')
          }
          else if (outsides) {
            controller.message.html('You went outside the rescue area!');
          }
          else if (bumps) {
            controller.message.html('Looks like you had trouble and bumped into things!');
          }
          else {
            controller.message.html('Try again!')
          }
          
          controller.messageDialog.showDialog();
          
          if (allowNext) {
            m8.intro(controller.next, 'show', 'hidden', true)
          }
        });
      },
      onRetry: function() {
        if (this.running) return;
        
        var animator = this.container.find('.game-piece').animator();
        animator.restore();
        animator.set({
          translateX: this.frame.translateX + '%',
          translateY: this.frame.translateY + '%',
          rotate: this.frame.rotate
        });
      }
    }))
		// ------ Earthquake Congrats Screen ------
		.addController(getSceneController({
			container: '#earthquake_congrats_screen .scene',
			onRegister: function() {
				this.next = $('#earthquake_congrats_screen .continue');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#earthquake_congrats_screen'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#interactive_summary'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.interactive_summary.intro);
				});
			}
		}))
		// ------ Summary Screen ------
		.addController(getSceneController({
			container: '#interactive_summary .scene',
			onRegister: function() {
				this.next = $('#interactive_summary .next');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					//sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#interactive_summary'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#career_connection'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.career_connection.intro);
				});
			}
		}))
		.addControllerLazy(getDragDropOrderController({
			name: 'distance',
			container: '#interactive_summary .impacts',
			resetOn: 'showDialog',
			tries: 1,
			correctOnFailure: true,
			onDrop: function () {
				sounds.hover.volume(0.4, sounds.hover.play());
			},
			onSubmit: function (success) {
				if (success) {
					sounds.good.play();
					$('#interactive_summary .next').removeClass('hidden');
					m8.runCalls(animations.interactive_summary.screenUnlocked);
				} else {
					sounds.bad.play();
				}
			},
			onApplyCorrect: function() {
				$('#interactive_summary .next').removeClass('hidden');
				m8.runCalls(animations.interactive_summary.screenUnlocked);
			}
		}))
		// ------ Career Connection ------
		.addController(getSceneController({
			container: '#career_connection .scene',
			onRegister: function() {
				this.next = this.container.find('.continue');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					sounds.boop.play();
					m8.outro($('#career_connection'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#final_congrats_screen'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.final_congrats_screen.intro);
				});
			}
		}))
		.addControllerLazy( getDialogController({
			container: '#career_connection .scene',
			total: 5,
			opened: 0,
			next: $('#career_connection .continue'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
				var text = opener.data('text');
				var check = opener.data('check');

				opener.animator().stop().restore();
				$(text).animator().stop().restore();
				$('#career_connection .hide-' + check).addClass('hidden');
				$('#career_connection .show-' + check).removeClass('hidden').animator().play('bounceIn').applyInitialState();
			},
			onHideRequest: function(closer, dialog) {
				sounds.hover.play();
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.boop.play();
					m8.intro($('#final_congrats_screen'), 'show', 'hidden');
					m8.runCalls(animations.final_congrats_screen.intro);
				});
			},
			onShow: function(dialog) {
				if (!dialog.data('opened')) {
					dialog.data('opened', true);
					this.opened++;
				}
				sounds.hover.play();
			},
			onHide: function() {
				if (this.opened >= this.total && this.next.hasClass('hidden')) {
					this.next
						.removeClass('hidden')
						.animator()
						.play('fadeInUp ~2s')
					;
				}
			}
		}))
		// ------ Final Congrats Screen ------
		.addController(getSceneController({
			container: '#final_congrats_screen .scene',
			onRegister: function() {
				this.next = this.container.find('.continue');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					sounds.boop.play();
					m8.outro($('#final_congrats_screen'), 'hide', 'hidden');
					setTimeout(function() {
						m8.intro($('#wrap_up'), 'show', 'hidden');
					}, 100);
					m8.runCalls(animations.wrap_up.intro);
				});
			}
		}))
		.addController( getVisibilityController({
			container: '#final_congrats_screen',
			hiddenClass: 'fake-hidden'
		}))
		// ------ Wrap Up ------
		.addController( getSceneController({
			container: '#wrap_up .scene',
			onRegister: function() {
				this.replay = this.container.find('.play');
				this.goto = this.container.find('.tiger');
			},
			onBoot: function() {
				this.replay.click(function() {
					window.location = 'natural-hazards.html';
				});
				this.goto.click(function() {
					sounds.transition.play();
					window.open('https://www.tgreduexplore.org/', '_blank');
				});
			}
		}))
		.addController( getVisibilityController({
			container: '#wrap_up',
			hiddenClass: 'fake-hidden'
		}))
};

if (TRANSITION_DURING) {

} else {

}
