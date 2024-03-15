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
	})
};

var animations = {
	splash_screen: {
		startDuring: function () {
			this.animator('#splash_screen .loader.dots', function () {
				this.set({
					translate: '-50%'
				});
			});
			this.animator('#splash_screen .loader.image', function () {
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
			this.animators('#splash_screen .loader.dots span', function () {
				this.sequence(500, 'linear').play('fadeIn yoyo 2s z1s inf');
			});
		},
		endDuring: function () {
			this.animators('#splash_screen .loader.dots span, #screen1 .loader.image', function () {
				this.stop().destroy();
			});
			this.animator('#splash_screen .loader-background', function () {
				this.play('fadeOut 0.2s');
			});
		},
		intro: function () {
			/*this.animator('#screen1 .sky', function() {
			 this.set({origin: 'center top'});
			 this.tween('scaleY', 1.5, 1.0, '5s');
			 });
			 this.animator('#screen1 .stars', function() {
			 this.tween('opacity', 0, 1, '~6s 4s');
			 });
			 this.animator('#screen1 .foreground', function() {
			 this.tween('bottom', -100, 00, '4s linear', false, '%');
			 });
			 this.animator('#screen1 .sunset', function() {
			 this.play({
			 values: {
			 top: [150, 30, 50]
			 },
			 deltas: {
			 top: [0, 0.4, 1.0]
			 },
			 units: {
			 top: '%'
			 },
			 durations: {
			 top: '10s'
			 },
			 easings: {
			 top: 'linear'
			 }
			 });
			 });
			 this.animator('#screen1 .moon', function() {
			 this.tween('translateY', 0, -200, '6s');
			 });
			 this.animator('#screen1 .tagline', function() {
			 this.play('fadeInUp ~9s');
			 });
			 this.animator('#screen1 .rocket', function() {
			 this.play('fadeInUpBig ~6s 10s linear');
			 });
			 this.animator('#screen1 .title-solar', function() {
			 this.play('fadeInRight ~7s 3s');
			 });
			 this.animator('#screen1 .title-back', function() {
			 this.play('fadeInLeft ~7.5s 3s');
			 });*/
			this.animator('#splash_screen .next', function () {
				this.play('fadeInDownRight ~1s');
			});
		}
	},
	screen1: {
		startDuring: function () {
			this.animator('#screen1 .loader.dots', function () {
				this.set({
					translate: '-50%'
				});
			});
			this.animator('#screen1 .loader.image', function () {
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
			this.animators('#screen1 .loader.dots span', function () {
				this.sequence(500, 'linear').play('fadeIn yoyo 2s z1s inf');
			});
		},
		endDuring: function () {
			this.animators('#screen1 .loader.dots span, #screen1 .loader.image', function () {
				this.stop().destroy();
			});
			this.animator('#screen1 .loader-background', function () {
				this.play('fadeOut 0.2s');
			});
		},
		intro: function () {
			/*this.animator('#screen1 .sky', function() {
			 this.set({origin: 'center top'});
			 this.tween('scaleY', 1.5, 1.0, '5s');
			 });
			 this.animator('#screen1 .stars', function() {
			 this.tween('opacity', 0, 1, '~6s 4s');
			 });
			 this.animator('#screen1 .foreground', function() {
			 this.tween('bottom', -100, 00, '4s linear', false, '%');
			 });
			 this.animator('#screen1 .sunset', function() {
			 this.play({
			 values: {
			 top: [150, 30, 50]
			 },
			 deltas: {
			 top: [0, 0.4, 1.0]
			 },
			 units: {
			 top: '%'
			 },
			 durations: {
			 top: '10s'
			 },
			 easings: {
			 top: 'linear'
			 }
			 });
			 });
			 this.animator('#screen1 .moon', function() {
			 this.tween('translateY', 0, -200, '6s');
			 });
			 this.animator('#screen1 .tagline', function() {
			 this.play('fadeInUp ~9s');
			 });
			 this.animator('#screen1 .rocket', function() {
			 this.play('fadeInUpBig ~6s 10s linear');
			 });
			 this.animator('#screen1 .title-solar', function() {
			 this.play('fadeInRight ~7s 3s');
			 });
			 this.animator('#screen1 .title-back', function() {
			 this.play('fadeInLeft ~7.5s 3s');
			 });*/
			this.animator('#screen1 .next', function () {
				this.play('fadeInDownRight ~1s');
			});
		}
	},
	screen2: {
		intro: function () {
			this.animator('#screen2 .title', function () {
				this.play('fadeIn');
			});
			this.animator('#screen2 .tagline', function () {
				this.play('fadeIn');
			});
			this.animator('#screen2 .instructions', function () {
				this.play('fadeIn');
			});
			this.animators('#screen2 .hotspot', function () {
				this.sequence(500).play('fadeIn, pulse x20 ~3s z1s');
			});
		},
		outro: function () {
			this.animators('#screen2 .title, #screen2 .tagline, #screen2 .instructions', function () {
				this.play('fadeOut');
			});
			this.animators('#screen2 .hotspot', function () {
				this.play('fadeOut ~1s');
			});
		}
	},
	screen3: {
		intro: function () {
			this.animator('#screen3 .doors-left', function () {
				this.play({
					values: {
						opacity: [0.5, 1],
						translateX: [-25, 0]
					},
					units: {
						translateX: '%'
					}
				}, {
					duration: '2s'
				});
			});
			this.animator('#screen3 .doors-right', function () {
				this.play({
					values: {
						opacity: [0.5, 1],
						translateX: [25, 0]
					},
					units: {
						translateX: '%'
					}
				}, {
					duration: '2s'
				});
			});
			this.animator('#screen3 .floor', function () {
				this.play('fadeInUp 2s');
			});
			this.animator('#screen3 .telescope', function () {
				this.play({
					values: {
						opacity: [0.5, 1],
						translateY: [25, 0]
					},
					units: {
						translateY: '%'
					}
				}, {
					duration: '2s'
				});
			});
			this.animator('#screen3 .title', function () {
				this.play('fadeIn ~3s');
			});
			this.animator('#screen3 .subtitle', function () {
				this.play('fadeIn ~3.5s');
			});
			this.animator('#screen3 .instructions', function () {
				this.play('fadeIn ~4.5s');
			});
			this.animators('#screen3 .hotspot', function () {
				this.sequence(500).play('fadeIn ~2s, pulse x20 ~3s z1s');
			});
		}
	},
	screen4: {
		intro: function () {
			this.animators('#screen4 .planet1, #screen4 .planet2, #screen4 .planet3', function () {
				this.sequence(500, 'linear').play('zoomIn ~1s');
			});
			this.animators('#screen4 .desc1, #screen4 .desc2, #screen4 .desc3', function () {
				this.sequence(500, 'linear').play('fadeIn ~1s');
			});
			this.animators('#screen4 .checkbox1, #screen4 .checkbox2, #screen4 .checkbox3', function () {
				this.sequence(500, 'linear').play('fadeIn ~1.5s');
			});
			this.animator('#screen4 .think', function () {
				this.play('fadeInUp ~3s');
			});
			this.animator('#screen4 .blue', function () {
				this.play('fadeInDown');
			});
			this.animators('#screen4 .progress > *', function () {
				this.sequence(250, 'linear').play('fadeInDown ~1s');
			});
			this.call(function () {
				$('#screen4 .congrats').addClass('hidden');
				$('#screen4 .submit').addClass('hidden');
				$('#screen4 .scene').animator().stop().restore().set({opacity: 1.0});
			});
		},
		outro: function () {
			this.animator('#screen4 .scene', function () {
				this.play('fadeOut');
			});
		}
	},
	large_scroll: {
		intro: function () {

		},
		outro: function () {

		},
		during: function () {
			this.animator('#large_scroll .asteroid', function () {
				this.play({
					values: {
						scale: [0.4, 0.1],
						left: [-400, 1750],
						top: [50, 40],
						rotate: [0, 1540]
					},
					units: {
						top: 'vh'
					}
				});
			});
		}
	},
	congrats1: {
		intro: function () {
			this.animators('#congrats1 .progress > *', function () {
				this.sequence(250, 'linear').play('fadeInDown ~1s');
			});
			this.animator('#congrats1 .blue-heading', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animators('#congrats1 .to-our, #congrats1 .great-work, #congrats1 .learned, #congrats1 .now, #congrats1 .continue, #congrats1 .twf, #congrats1 .de, #congrats1 .copyright', function () {
				this.sequence(500, 'linear').play('fadeIn ~2s');
			});
		}
	}
};

var scenes = {
	intro_screens: new ScrollMagic.Scene({triggerElement: '#splash_screen_buffer', duration: '200%'})
		.addTo(controller)
		// Splash Screen
		.addController(getVisibilityController({
			container: '#splash_screen',
			onImagesLoaded: function () {
				m8.runCalls(animations.splash_screen.endDuring);
				m8.runCalls(animations.splash_screen.intro);
			}
		}))
		.addController(getSceneController({
			container: '#splash_screen .scene',
			onRegister: function () {
				this.continue = this.container.parent().find('.next');
			},
			onRefresh: function (scale) {
				this.continue.animator().set({
					scale: scale,
					origin: '100%'
				});
			},
			onBoot: function() {
				this.continue.click(function() {
					sounds.transition.play();
					m8.outro($('#splash_screen'), 'hide', 'hidden');
					m8.intro($('#screen1'), 'show', 'hidden');
					m8.runCalls(animations.screen1.intro);
					setTimeout(function() {
						sounds.good.play();
					}, 2000);
				})
			}
		}))

		// Screen 1
		.addController(getVisibilityController({
			container: '#screen1',
			hiddenClass: 'fake-hidden'
		}))
		.addController(getSceneController({
			container: '#screen1 .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.outro($('#splash_screen'), 'hide', 'hidden');
					//m8.outro($('#congrats3'), 'hide', 'hidden');
					m8.intro($('#screen6'), 'show', 'hidden');
					m8.runCalls(animations.screen6.intro);
					setTimeout(function() {
						sounds.good.play();
					}, 2000);
				})
			}
		}))
	,
	screen1_init: new ScrollMagic.Scene({triggerElement: '#screen1_buffer', duration: '200%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.addController(getVisibilityController({
			container: '#screen1',
			onImagesLoaded: function () {
				m8.runCalls(animations.screen1.endDuring);
				m8.runCalls(animations.screen1.intro);
			}
		}))
		.addController(getStarsController('#screen1 .stars'))
		.addController(getGotoController({
			container: '#screen1',
			onGoto: function (trigger, element) {
				sounds.boop.play();
			}
		}))
		.addController(getSceneController({
			container: '#screen1 .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onRefresh: function (scale) {
				this.next.animator().set({
					scale: scale,
					origin: '100%'
				});
			}
		}))
	,
	screen1: new ScrollMagic.Scene({triggerElement: '#screen1_trigger', duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.startDuring(animations.screen1.startDuring)
	,
	screen2_init: new ScrollMagic.Scene({triggerElement: '#screen2_buffer', duration: '300%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.addController(getVisibilityController('#screen2'))
		.addController(getGotoController({
			container: '#screen2',
			onGoto: function (trigger, element) {
				sounds.boop.play();
			}
		}))
		.addController(getApplyInitialStateController(animations.screen2.intro))
		.addController(getSceneController({
			container: '#screen2 .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onRefresh: function (scale) {
				this.next.animator().set({
					scale: scale,
					origin: '100%'
				});
			}
		}))
	,
	screen2: new ScrollMagic.Scene({triggerElement: '#screen2_trigger', duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.addControllerLazy(getGatedController())
		.addControllerLazy(getDialogController({
			container: '#screen2 .scene',
			total: 3,
			opened: 0,
			next: $('#screen2 .next'),
			onReset: function () {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function (opener, dialog) {
				opener.animator().stop().restore().tweenTo('opacity', 0.3);
			},
			onHideRequest: function (closer, dialog) {
				sounds.hover.play();
			},
			onShow: function (dialog) {
				if (!dialog.data('opened')) {
					dialog.data('opened', true);
					this.opened++;
				}
				sounds.hover.play();
			},
			onHide: function () {
				if (this.opened >= this.total && this.next.hasClass('hidden')) {
					this.next
						.removeClass('hidden')
						.animator()
						.play('fadeInDownRight ~2s')
					;
					this.scene.gate.open();
				}
			}
		}))
		.intro(animations.screen2.intro)
		.outro(animations.screen2.outro)
	,
	screen2b_init: new ScrollMagic.Scene({triggerElement: '#screen2b_buffer', duration: '300%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.addController(getVisibilityController('#screen2b'))
		.addController(getSceneController('#screen2b .scene'))
		.addController(getStarsController('#screen2b .stars'))
	,
	screen2b: new ScrollMagic.Scene({triggerElement: '#screen2b_trigger', duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
	,
	screen3_init: new ScrollMagic.Scene({triggerElement: '#screen3_buffer', duration: '300%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.addController(getVisibilityController('#screen3'))
		.addController(getSceneController('#screen3 .scene'))
		.addController(getStarsController('#screen3 .stars'))
		.addController(getApplyInitialStateController(animations.screen3.intro))
		.addController(getGotoController({
			container: '#screen3 .scene',
			onGoto: function (trigger, element) {
				sounds.boop.play();
			}
		}))
	,
	screen3: new ScrollMagic.Scene({triggerElement: '#screen3_trigger', duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.addControllerLazy(getGatedController())
		.addControllerLazy(getDialogController({
			container: '#screen3 .scene',
			total: 3,
			opened: 0,
			scrollUp: $('#screen3 .scroll-up'),
			onReset: function () {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.scrollUp.addClass('hidden');
			},
			onShowRequest: function (opener, dialog) {
				opener.animator().stop().restore().tweenTo('opacity', 0.3);
			},
			onHideRequest: function (closer, dialog) {
				sounds.hover.play();
			},
			onShow: function (dialog) {
				if (!dialog.data('opened')) {
					dialog.data('opened', true);
					this.opened++;
				}
				sounds.hover.play();
			},
			onHide: function () {
				if (this.opened >= this.total && this.scrollUp.hasClass('hidden')) {
					this.scrollUp
						.removeClass('hidden')
						.animator()
						.play('scrollUpIntro ~2s')
					;
					this.scene.gate.open();
				}
			}
		}))
		.addControllerLazy(getSlideshowController({
			name: 'slideshow',
			container: '#screen3 .spect',
			next: '.next, .next-question',
			slides: ['1', '2', '3', '4', '5'],
			onShow: function () {
				this.next.addClass(this.disabledClass);
			},
			onChange: function () {
				sounds.hover.play();
			}
		}))
		.addControllerLazy(getHelpController({
			container: '#screen3 .spect'
		}))
		.addControllerLazy(getQuestionOptionsController({
			name: 'question1',
			container: '#screen3 .spect .show-1.entire',
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
			container: '#screen3 .spect .show-2.entire',
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
			container: '#screen3 .spect .show-3.entire',
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
			name: 'question4',
			container: '#screen3 .spect .show-4.entire',
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
			name: 'question5',
			container: '#screen3 .spect .show-5.entire',
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
		.addControllerLazy(getDragDropOrderController({
			name: 'distance',
			container: '#screen3 .distance .blue',
			resetOn: 'showDialog',
			tries: 1,
			correctOnFailure: true,
			onBoot: function () {
				if (scenes.screen3_init.visibility) {
					scenes.screen3_init.visibility.boot();
				}
			},
			onDrop: function () {
				sounds.hover.volume(0.4, sounds.hover.play());
			},
			onSubmit: function (success) {
				if (success) {
					sounds.good.play();
				} else {
					sounds.bad.play();
				}
			}
		}))
		.intro(animations.screen3.intro)
	,
	large_scroll: new ScrollMagic.Scene({
		triggerElement: '#screen4_buffer', offset: '50%', duration: function () {
			return Math.max(0, $('#large_scroll').height() - $(window).height());
		}
	})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.intro(animations.large_scroll.intro)
		.outro(animations.large_scroll.outro)
		.during(animations.large_scroll.during)
	,
	screen4_init: new ScrollMagic.Scene({triggerElement: '#screen4_buffer', duration: '300%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.addController(getVisibilityController('#screen4'))
		.addController(getSceneController('#screen4 .scene'))
		.addController(getStarsController('#screen4 .stars'))
		.addController(getApplyInitialStateController(animations.screen4.intro))
		.addController(getVisibilityController({
			container: '#congrats1',
			hiddenClass: 'fake-hidden'
		}))
		.addController(getSceneController('#congrats1 .scene'))
	,
	screen4: new ScrollMagic.Scene({triggerElement: '#screen4_trigger', duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.addControllerLazy(getToggleController({
			name: 'planet_toggle',
			container: '#screen4 .scene',
			toggles: '.planet[data-toggle]',
			onCheck: function () {
				sounds.up.play();
			},
			onUncheck: function (prev, next) {
				if (prev.is(next)) {
					sounds.down.play();
				}
			}
		}))
		.addControllerLazy(getToggleController({
			name: 'check_toggle',
			container: '#screen4 .scene',
			toggles: '.checkbox[data-toggle]',
			submit: $('#screen4 .submit'),
			onReset: function () {
				this.submit.addClass('hidden');
				this.toggles.off('click');
				this.boot();
			},
			onCheck: function (toggle) {
				m8.intro(this.submit, 'show', 'hidden');
				sounds.up.play();
			},
			onUncheck: function (prev, next) {
				if (prev.is(next)) {
					sounds.down.play();
				}
			}
		}))
		.addControllerLazy(function () {

			$('#screen4 .submit').click(function () {
				var submit = $(this);
				var checkboxes = scenes.screen4.check_toggle.toggles;
				var planets = scenes.screen4.planet_toggle.toggles.add($('#screen4 .desc'));
				var selected = checkboxes.filter('.toggled').data('toggle');
				var planet = planets.filter('[data-checkbox="' + selected + '"]');

				checkboxes.animators().play('fadeOut');
				planets.not(planet).off('click').animators().play('fadeOut');

				planet.click().removeClass('toggled').each(function () {
					m8(this).tweenTo('left', 512 - this.offsetWidth / 2).queue('pulse');
				});

				m8.outro(submit, 'hide', 'hidden');
				m8.intro($('#screen4 .continue'), 'show', 'hidden');

				localStorage.setItem('planet', planet.data('planet'));
			});

			$('#screen4 .continue').click(function () {
				sounds.boop.play();
				m8.intro($('#congrats1'), 'show', 'hidden');
				m8.runCalls(animations.congrats1.intro);
				m8.outro($('#screen4'), 'hide', 'hidden');
			});

			$('#congrats1 .continue').click(function () {
				sounds.transition.play();
				$('#earths_layers')
					.animators()
					.play('fadeOut')
					.applyInitialState()
					.off()
					.once('finished', function () {
						window.location = 'challenge2.html';
					})
				;
			});
		})
	 .intro( animations.screen4.intro )
	 .outro( animations.screen4.outro )
};

if (TRANSITION_DURING) {
	scenes.screen1_outro =
		new ScrollMagic.Scene({triggerElement: '#screen1_outro', duration: '100%'})
			.addTo(controller)
			.setBackwards(BACKWARDS)
			.during(getBlurSlideTransition('#screen1', 20, true, true, 'body > .divider'))
			.during(getBlurSlideTransition('#screen2', 20, false, false))
	;
	scenes.screen2_outro =
		new ScrollMagic.Scene({triggerElement: '#screen2_outro', duration: '100%'})
			.addTo(controller)
			.setBackwards(BACKWARDS)
			.during(getBlurSlideTransition('#screen2', 20, true, true, 'body > .divider'))
			.during(getBlurSlideTransition('#screen2b', 20, false, false))
	;
	scenes.screen2b_outro =
		new ScrollMagic.Scene({triggerElement: '#screen2b_outro', duration: '100%'})
			.addTo(controller)
			.setBackwards(BACKWARDS)
			.during(getBlurToTransition('#screen2b', [70, 70], 20, 6, true))
			.during(getBlurToTransition('#screen3', [50, 50], 20, 3, false))
	;
	scenes.screen3_outro =
		new ScrollMagic.Scene({triggerElement: '#screen3_outro', duration: '100%'})
			.addTo(controller)
			.setBackwards(BACKWARDS)
			.during(getBlurToTransition('#screen3', [50, 0], 20, 6, true))
			.during(getBlurToTransition('#screen4', [50, 50], 20, 2, false))
	;
} else {
	scenes.screen1.outro(getBlurSlideTransition('#screen1', 20, true, true));
	scenes.screen2.intro(getBlurSlideTransition('#screen2', 20, false, false));
	scenes.screen2.outro(getBlurSlideTransition('#screen2', 20, true, true));
	scenes.screen3.intro(getBlurSlideTransition('#screen3', 20, false, false));
	scenes.screen3.outro(getBlurToTransition('#screen3', [50, 0], 20, 6, true));
	scenes.screen4.intro(getBlurSlideTransition('#screen4', 20, true, true));
}
