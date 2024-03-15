// Scenes
var controller = new ScrollMagic.Controller({
	refreshInterval: 100
});

var sounds = {
	hover: new Howl({
		src: ['sounds/hover.mp3']
	}),
	boop: new Howl({
		src: ['sounds/boop-calm.mp3']
	}),
	good: new Howl({
		src: ['sounds/good.mp3']
	}),
	bad: new Howl({
		src: ['sounds/bad.mp3']
	}),
	down: new Howl({
		src: ['sounds/button-down.mp3'],
		volume: 0.2
	}),
	up: new Howl({
		src: ['sounds/button-up.mp3'],
		volume: 0.2
	}),
	transition: new Howl({
		src: ['sounds/transition.mp3'],
		volume: 0.7
	}),
	takeoff: new Howl({
		src: ['sounds/shuttle_launch.mp3'],
		volume: 0.7
	}),
	booster: new Howl({
		src: ['sounds/space_booster_loop.mp3'],
		volume: 0.2,
		loop: true
	}),
	detach: new Howl({
		src: ['sounds/asteroid_lander_detach.mp3']
	}),
	morse: new Howl({
		src: ['sounds/morse.mp3']
	}),
	tick: new Howl({
		src: ['sounds/tick.mp3'],
		volume: 0.5,
		rate: 3
	}),
	button: new Howl({
		src: ['sounds/button.mp3'],
		volume: 0.7
	})
};

var animations = {
	volcano_rescue_map: {
		startDuring: function () {
			this.animator('#volcano_rescue_map .loader.dots', function () {
				this.set({
					translate: '-50%'
				});
			});
			this.animator('#volcano_rescue_map .loader.image', function () {
				this.play({
					initial: {
						scale: 0.5,
						translate: -50
					},
					values: {
						rotate: [0, 360]
					}
				}, 'linear inf 3s');
				this.units.translate = '%';
			});
			this.animators('#volcano_rescue_map .loader.dots span', function () {
				this.sequence(500, 'linear').play('fadeIn yoyo 2s z1s inf');
			});
		},
		endDuring: function () {
			this.animators('#volcano_rescue_map .loader.dots span, #volcano_rescue_map .loader.image', function () {
				this.stop().destroy();
			});
			this.animator('#volcano_rescue_map .loader-background', function () {
				this.play('fadeOut 0.2s');
			});
		},
		intro: function () {
			this.animator('#volcano_rescue_map .scene', function () {
				this.play('fadeIn');
			});
		}
	},
	volcano_mission_debrief: {
		intro: function() {
			this.animator('#volcano_mission_debrief .scene', function() {
				this.play('fadeIn');
			});
			this.animator('#volcano_mission_debrief .next', function() {
				this.play('fadeIn');
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
		},
		completed_quiz: function() {
			this.animator('#volcano_mission_questions .next-vmq', function() {
				this.play('fadeIn');
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
	earthquake_rescue_map: {
		startDuring: function () {
			this.animator('#volcano_rescue_map .loader.dots', function () {
				this.set({
					translate: '-50%'
				});
			});
			this.animator('#volcano_rescue_map .loader.image', function () {
				this.play({
					initial: {
						scale: 0.5,
						translate: -50
					},
					values: {
						rotate: [0, 360]
					}
				}, 'linear inf 3s');
				this.units.translate = '%';
			});
			this.animators('#volcano_rescue_map .loader.dots span', function () {
				this.sequence(500, 'linear').play('fadeIn yoyo 2s z1s inf');
			});
		},
		endDuring: function () {
			this.animators('#volcano_rescue_map .loader.dots span, #volcano_rescue_map .loader.image', function () {
				this.stop().destroy();
			});
			this.animator('#volcano_rescue_map .loader-background', function () {
				this.play('fadeOut 0.2s');
			});
		},
		intro: function () {
			this.animator('#volcano_rescue_map .scene', function () {
				this.play('fadeIn');
			});
		}
	},
	earthquake_mission_debrief: {
		intro: function () {
			this.animator('#earthquake_mission_debrief .scene', function () {
				this.play('fadeIn');
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
};

var scenes = {
	robot_rescues: new ScrollMagic.Scene({triggerElement: '#volcano_rescue_map', duration: '100%'})
		.addTo(controller)
		// ------ Volcano Rescue Map ------
		.addController(getVisibilityController({
			container: '#earthquake_rescue_map',
			onImagesLoaded: function () {
				// TODO: Inject Loader
				/*m8.runCalls(animations.volcano_rescue_map.endDuring);
				m8.runCalls(animations.volcano_rescue_map.intro);*/
			}
		}))
		.addController(getSceneController({
			container: '#volcano_rescue_map .scene',
			onRegister: function() {
				this.next = this.container.find('.mp-go');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_rescue_map'), 'hide', 'hidden');
					m8.intro($('#volcano_mission_debrief'), 'show', 'hidden');
					m8.runCalls(animations.volcano_mission_debrief.intro);
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
					sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_mission_debrief'), 'hide', 'hidden');
					m8.intro($('#volcano_mission_questions'), 'show', 'hidden');
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
					sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_mission_questions'), 'hide', 'hidden');
					m8.intro($('#volcano_tutorial_mission'), 'show', 'hidden');
					m8.runCalls(animations.volcano_tutorial_mission.intro);
				});
			}
		}))
		.addControllerLazy( getDialogController({
			container: '#volcano_mission_questions .scene',
			total: 1,
			opened: 1,
			onHide: function() {
				m8.intro($('#volcano_mission_questions .next'), 'show', 'hidden');
				m8.intro($('#volcano_mission_questions .quiz-wrapup'), 'show', 'hidden');
				m8.intro($('#volcano_mission_questions .c2-background-w-glow'), 'show', 'hidden');
				m8.runCalls(animations.volcano_mission_questions.completed_quiz);
			}
		}))
		.addControllerLazy(getSlideshowController({
			name: 'slideshow',
			container: '#volcano_mission_questions .volcano-assembly-questions',
			next: '.next, .next-question',
			slides: ['1', '2', '3'],
			onShow: function () {
				this.next.addClass(this.disabledClass);
			},
			onChange: function () {
				sounds.hover.play();
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question1',
			container: '#volcano_mission_questions .volcano-assembly-questions .show-1.entire',
			onFinished: function () {
				var slideshow = this.scene.slideshow;
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
		.addController( getSceneController({
			container: '#volcano_tutorial_mission .scene',
			onRegister: function() {
				this.next = $('#volcano_tutorial_mission .next');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#volcano_tutorial_mission'), 'hide', 'hidden');
					m8.intro($('#volcano_get_sample_mission'), 'show', 'hidden');
					m8.runCalls(animations.volcano_get_sample_mission.intro);
				});
			}
		}))
		// ------ Volcano get Sample Mission ------
		.addController( getSceneController({
			container: '#volcano_get_sample_mission .scene',
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
					sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#earthquake_rescue_map'), 'hide', 'hidden');
					m8.intro($('#earthquake_mission_debrief'), 'show', 'hidden');
					m8.runCalls(animations.earthquake_mission_debrief.intro);
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
					sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#earthquake_mission_debrief'), 'hide', 'hidden');
					m8.intro($('#earthquake_mission_questions'), 'show', 'hidden');
					m8.runCalls(animations.volcano_mission_questions.intro);
				});
			}
		}))
		// ------ Earthquake Mission Questions ------
		.addController(getSceneController({
			container: '#earthquake_mission_questions .scene',
			onRegister: function() {
				this.next = $('#earthquake_mission_questions .next');
			},
			onBoot: function() {
				this.next.click(function () {
					// TODO: Update sound effects
					sounds.morse.fade(1, 0, 500);
					sounds.boop.play();
					m8.outro($('#earthquake_mission_debrief'), 'hide', 'hidden');
					m8.intro($('#earthquake_disaster_relief_mission'), 'show', 'hidden');
					m8.runCalls(animations.earthquake_disaster_relief_mission.intro);
				});
			}
		}))
		.addControllerLazy( getDialogController({
			container: '#earthquake_mission_questions .scene',
			total: 1,
			opened: 1,
			onHide: function() {
				m8.intro($('#earthquake_mission_questions .next'), 'show', 'hidden');
				m8.intro($('#earthquake_mission_questions .quiz-wrapup'), 'show', 'hidden');
				m8.intro($('#earthquake_mission_questions .c2-background-w-glow'), 'show', 'hidden');
				m8.runCalls(animations.volcano_mission_questions.completed_quiz);
			}
		}))
		.addControllerLazy(getSlideshowController({
			name: 'slideshow',
			container: '#earthquake_mission_questions .earthquake-assembly-questions',
			next: '.next, .next-question',
			slides: ['1', '2', '3'],
			onShow: function () {
				this.next.addClass(this.disabledClass);
			},
			onChange: function () {
				sounds.hover.play();
			}
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question1',
			container: '#earthquake_mission_questions .earthquake-assembly-questions .show-1.entire',
			onFinished: function () {
				var slideshow = this.scene.slideshow;
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
			container: '#earthquake_mission_questions .earthquake-assembly-questions .show-2.entire',
			onFinished: function () {
				var slideshow = this.scene.slideshow;
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
				var slideshow = this.scene.slideshow;
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
		.addController( getSceneController({
			container: '#earthquake_disaster_relief_mission .scene',
		}))
};

var liftoff = function () {
	sounds.takeoff.on('end', function () {
		sounds.booster.fade(0, 0.2, 1000, sounds.booster.play());
	}, sounds.takeoff.play());

	$('.dialog').hideDialog();
	animations.screen5.liftoff.setup();
	animations.screen5.liftoff.start();
};

var land = function () {
	$('.dialog').hideDialog();
	m8.intro($('#landing'), 'show', 'hidden');
	m8.runCalls(animations.landing.intro);
	setTimeout(function () {
		sounds.morse.fade(0, 1.0, 7000, sounds.morse.play());
	}, 6000);
};

var station = function () {
	$('.dialog').hideDialog();

	m8.outro($('#landing'), 'hide', 'hidden');
	animations.screen5.liftoff.land();
};

var prepareLand = function () {
	$('.dialog').hideDialog();

	var scene = scenes.screen5.liftoff;
	var RT = scene.rocketTransform.transform;
	var WT = scene.worldTransform.transform;
	var LT = scene.landingTransform.transform;
	var anim = animations.screen5.liftoff;
	var rocketPath = anim.rocketPathSecond;

	rocketPath.compute(RT, 1.0);

	m8(WT).set({y: 368 - RT.y});
	m8(LT).set({y: -WT.y});
	m8(scene.landing).set({visible: true, enabled: true});
	m8(scene.landArea).set({y: 0});
	m8(scene.landingRocket).set({
		originX: 0.5,
		originY: 0.5,
		radians: 0,
		y: 388
	});

	scene.landingSmoke.clear();
	scene.resetLanding();
	scene.highlightControls();

	m8.outro($('#screen5 .try-again'), 'hide', 'hidden');
	m8.intro($('#screen5 .land-instructions, #screen5 .land-instructions [data-show]'), 'show', 'hidden');
};

if (TRANSITION_DURING) {

} else {

}
