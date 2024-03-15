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

			var rotations = 5;
			var rotationAngles = 360 * rotations;
			var rotationSeconds = 10;
			var rotationDuration = rotationSeconds * 1000;
			var rotationDelaySeconds = 5;
			var rotationDelayDuration = rotationDelaySeconds * 1000;
			var easing = 'quad-inout';

			this.animator('#splash_screen .splash-bg', function () {
				this.set({origin: 'center top'});
				this.play('fadeInUp 8s');
				// this.tween('scaleY', 1.5, 1.0, '5s');
			});
			this.animator('#splash_screen .project-title', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateX: -300},
						'100': {opacity: 1, translateX: 0}
					},
					scaleBases: {
						opacity: 1
					}
				}, {
					duration: 3000,
					teasing: [0.215, 0.610, 0.355, 1.000],
					delay: 6000
				});
			});
			this.animator('#splash_screen .project-sub-title', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateX: 300},
						'100': {opacity: 1, translateX: 0}
					},
					scaleBases: {
						opacity: 1
					}
				}, {
					duration: 3000,
					teasing: [0.215, 0.610, 0.355, 1.000],
					delay: 6000
				});
			});
			this.animator('#splash_screen .project-sub-title', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateX: 300},
						'100': {opacity: 1, translateX: 0}
					},
					scaleBases: {
						opacity: 1
					}
				}, {
					duration: 3000,
					teasing: [0.215, 0.610, 0.355, 1.000],
					delay: 6000
				});
			});
			this.animator('#splash_screen .icon-outline-earth', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0},
						'100': {opacity: 1}
					},
					scaleBases: {
						opacity: 1
					}
				}, {
					duration: 8000,
					delay: 6000
				});
			});
			this.animators('#splash_screen .icon-earthquake', function () {
				this.set({origin: 'center bottom'});
				this.play({
					keyframe: {
						'0': {
							angle: -90,
							distance: 100,
							easing: easing,
							opacity: 0,
						},
						'30': {
							opacity: 0
						},
						'32': {
							opacity: 1
						},
						'100': {
							opacity: 1,
							angle: -90 + rotationAngles,
							distance: 100,
							easing: easing
						}
					}
				}, {
					duration: rotationDuration,
					delay: rotationDelayDuration,
				});
			});
			this.animators('#splash_screen .icon-tornado', function () {
				this.set({origin: 'center bottom'});
				this.play({
					keyframe: {
						'0': {
							angle: -30,
							distance: 100,
							easing: easing,
							opacity: 0,
						},
						'40': {
							opacity: 0
						},
						'42': {
							opacity: 1
						},
						'100': {
							opacity: 1,
							angle: -30 + rotationAngles,
							distance: 100,
							easing: easing
						}
					}
				}, {
					duration: rotationDuration,
					delay: rotationDelayDuration,
				});
			});
			this.animators('#splash_screen .icon-hurricane', function () {
				this.set({origin: 'center bottom'});
				this.play({
					keyframe: {
						'0': {
							angle: 30,
							distance: 100,
							easing: easing,
							opacity: 0,
						},
						'38': {
							opacity: 0
						},
						'40': {
							opacity: 1
						},
						'100': {
							opacity: 1,
							angle: 30 + rotationAngles,
							distance: 100,
							easing: easing
						}
					}
				}, {
					duration: rotationDuration,
					delay: rotationDelayDuration,
				});
			});
			this.animators('#splash_screen .icon-volcano', function () {
				this.set({origin: 'center bottom'});
				this.play({
					keyframe: {
						'0': {
							angle: 90,
							distance: 100,
							easing: easing,
							opacity: 0,
						},
						'36': {
							opacity: 0
						},
						'38': {
							opacity: 1
						},
						'100': {
							opacity: 1,
							angle: 90 + rotationAngles,
							distance: 100,
							easing: easing
						}
					}
				}, {
					duration: rotationDuration,
					delay: rotationDelayDuration,
				});
			});
			this.animators('#splash_screen .icon-tsunami', function () {
				this.set({origin: 'center bottom'});
				this.play({
					keyframe: {
						'0': {
							angle: 150,
							distance: 100,
							easing: easing,
							opacity: 0,
						},
						'34': {
							opacity: 0
						},
						'36': {
							opacity: 1
						},
						'100': {
							opacity: 1,
							angle: 150 + rotationAngles,
							distance: 100,
							easing: easing
						}
					}
				}, {
					duration: rotationDuration,
					delay: rotationDelayDuration,
				});
			});
			this.animators('#splash_screen .icon-flood', function () {
				this.set({origin: 'center bottom'});
				this.play({
					keyframe: {
						'0': {
							angle: 210,
							distance: 100,
							easing: easing,
							opacity: 0,
						},
						'32': {
							opacity: 0
						},
						'34': {
							opacity: 1
						},
						'100': {
							opacity: 1,
							angle: 210 + rotationAngles,
							distance: 100,
							easing: easing
						}
					}
				}, {
					duration: rotationDuration,
					delay: rotationDelayDuration,
				});
			});

			this.animators('#splash_screen .label-earthquake', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'5': {
								opacity: 1
							},
							'10': {
								opacity: 0
							},
							'15': {
								opacity: 1
							},
							'20': {
								opacity: 0
							},
							'35': {
								opacity: 0
							},
							'40': {
								opacity: 1
							}
						}
					},
					{
						duration: 500,
						delay: 15000,
					}
				);
			});
			this.animators('#splash_screen .label-tornadoes', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'5': {
								opacity: 1
							},
							'10': {
								opacity: 0
							},
							'15': {
								opacity: 1
							},
							'20': {
								opacity: 0
							},
							'35': {
								opacity: 0
							},
							'40': {
								opacity: 1
							}
						}
					},
					{
						duration: 500,
						delay: 15500,
					}
				);
			});
			this.animators('#splash_screen .label-hurricanes', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'5': {
								opacity: 1
							},
							'10': {
								opacity: 0
							},
							'15': {
								opacity: 1
							},
							'20': {
								opacity: 0
							},
							'35': {
								opacity: 0
							},
							'40': {
								opacity: 1
							}
						}
					},
					{
						duration: 500,
						delay: 16000,
					}
				);
			});
			this.animators('#splash_screen .label-volcanoes', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'5': {
								opacity: 1
							},
							'10': {
								opacity: 0
							},
							'15': {
								opacity: 1
							},
							'20': {
								opacity: 0
							},
							'35': {
								opacity: 0
							},
							'40': {
								opacity: 1
							}
						}
					},
					{
						duration: 500,
						delay: 16500,
					}
				);
			});
			this.animators('#splash_screen .label-tsunamis', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'5': {
								opacity: 1
							},
							'10': {
								opacity: 0
							},
							'15': {
								opacity: 1
							},
							'20': {
								opacity: 0
							},
							'35': {
								opacity: 0
							},
							'40': {
								opacity: 1
							}
						}
					},
					{
						duration: 500,
						delay: 17000,
					}
				);
			});
			this.animators('#splash_screen .label-floods', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'5': {
								opacity: 1
							},
							'10': {
								opacity: 0
							},
							'15': {
								opacity: 1
							},
							'20': {
								opacity: 0
							},
							'35': {
								opacity: 0
							},
							'40': {
								opacity: 1
							}
						}
					},
					{
						duration: 500,
						delay: 17500,
					}
				);
			});

			this.animators('#splash_screen .begin-button', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'100': {
								opacity: 1
							}
						}
					},
					{
						duration: 1000,
						delay: 18000
					}
				);
			});
			this.animators('#splash_screen .challenge-1-intro', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'100': {
								opacity: 0
							}
						}
					},
					{
						duration: 100,
						delay: 0
					}
				);
			});
		},
	},
	begin: {
		intro: function() {
			this.animators('#splash_screen .challenge-1-intro', function () {
				this.play(
					{
						keyframe: {
							'0': {
								opacity: 0
							},
							'100': {
								opacity: 1
							}
						}
					},
					{
						duration: 1000,
						delay: 0
					}
				);
			});
			this.animator('#splash_screen .challenge-1-intro', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#splash_screen .c1-icon', function () {
				this.play('fadeIn ~1s');
			});
			this.animator('#splash_screen .welcome-message', function () {
				this.play('fadeIn ~2s');
			});
			this.animator('#splash_screen .team-title', function () {
				this.play('fadeIn ~3s');
			});
			this.animator('#splash_screen .team-message', function () {
				this.play('fadeIn ~4s');
			});
			this.animator('#splash_screen .next', function () {
				this.play('fadeInDownRight ~5s');
			});
		}
	},
	project_debrief: {
		intro: function () {
			this.animator('#project_debrief .scene', function() {
				this.play('fadeIn');
			});

			this.animator('#project_debrief .blue-heading', function() {
				this.play('fadeIn ~1s');
			});

			this.animator('#project_debrief .definition-title', function() {
				this.play('fadeIn ~2s');
			});
			this.animator('#project_debrief .definition-text', function() {
				this.play('fadeIn ~3s');
			});
			this.animator('#project_debrief .c1-earth-rasterized', function() {
				this.play('fadeInUp ~4s');
			});

			this.animator('#project_debrief .c1-inside-earth-indicator', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#project_debrief .c1-inside-earth-label', function() {
				this.play('fadeIn ~5s');
			});
			this.animator('#project_debrief .c1-inside-earth-pointer', function() {
				this.play('fadeIn ~5s');
			});

			this.animator('#project_debrief .c1-outside-earth-indicator', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#project_debrief .c1-outside-earth-label', function() {
				this.play('fadeIn ~6s');
			});
			this.animator('#project_debrief .c1-outside-earth-pointer', function() {
				this.play('fadeIn ~6s');
			});

			this.animator('#project_debrief .c1-severe-weather-indicator', function() {
				this.play('fadeIn ~7s');
			});
			this.animator('#project_debrief .c1-severe-weather-label', function() {
				this.play('fadeIn ~7s');
			});
			this.animator('#project_debrief .c1-severe-weather-pointer', function() {
				this.play('fadeIn ~7s');
			});

			this.animator('#project_debrief .next', function() {
				this.play('fadeIn ~8s');
			});
			this.animators('#project_debrief .progress > *', function() {
				this.sequence(250, 'linear').play('fadeInDown ~1s');
			});
		}
	},
	hazard_dnd: {
		intro: function () {
			this.animator('#hazard_dnd .scene', function() {
				this.play('fadeIn');
			});
			this.animators('#hazard_dnd .progress > *', function() {
				this.sequence(250, 'linear').play('fadeInDown ~1s');
			});

			this.animator('#hazard_dnd .blue-heading', function() {
				this.play('fadeInUp ~1s');
			});
			this.animator('#hazard_dnd .hazards-heading ', function() {
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

			this.animator('#hazard_dnd .c1-target-inside-outline-container', function() {
				this.play('fadeInRight ~4s');
			});
			this.animator('#hazard_dnd .c1-target-surface-outline-container', function() {
				this.play('fadeInRight ~5s');
			});
			this.animator('#hazard_dnd .c1-target-event-outline-container', function() {
				this.play('fadeInRight ~6s');
			});
		},
		screenUnlocked: function() {
			this.animator('#hazard_dnd .next', function() {
				this.play('fadeIn');
			});
		}
	},
};

var scenes = {
	intro_screens: new ScrollMagic.Scene({triggerElement: '#splash_screen', duration: '200%'})
		.addTo(controller)
		// ------ Splash Screen ------
		.addController(getVisibilityController({
			container: '#splash_screen',
			//container: '#hazard_dnd',
			onImagesLoaded: function () {
				/*m8.runCalls(animations.splash_screen.endDuring);*/
				m8.runCalls(animations.splash_screen.intro);
			}
		}))
		.addController(getSceneController({
			container: '#splash_screen .scene',
			onRegister: function () {
				this.begin = this.container.parent().find('.begin-button');
				this.continue = this.container.parent().find('.next');
			},
			onRefresh: function (scale) {
				this.continue.animator().set({
					scale: scale,
					origin: '100%'
				});
			},
			onBoot: function() {
				this.begin.click(function() {
					m8.outro($('#splash_screen .begin-button'), 'hide', 'hidden');

					m8.runCalls(animations.begin.intro);
				});
				this.continue.click(function() {
					sounds.transition.play();
					m8.outro($('#splash_screen'), 'hide', 'hidden');
					m8.intro($('#project_debrief'), 'show', 'hidden');
					m8.runCalls(animations.project_debrief.intro);
					setTimeout(function() {
						sounds.good.play();
					}, 2000);
				});
			}
		}))

		// ------ Project Debrief ------
		.addController(getSceneController({
			container: '#project_debrief .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.outro($('#project_debrief'), 'hide', 'hidden');
					m8.intro($('#hazard_dnd'), 'show', 'hidden');
					m8.runCalls(animations.hazard_dnd.intro);
					setTimeout(function() {
						sounds.good.play();
					}, 2000);
				})
			}
		}))

		// ------ Hazard Dnd ------
		.addController(getSceneController({
			container: '#hazard_dnd .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					$('#hazard_dnd .scene')
						.animators()
						.play('fadeOut')
						.applyInitialState()
						.off()
						.once('finished', function () {
							window.location = 'earths-layers.html';
						})
					;
					setTimeout(function() {
						sounds.good.play();
					}, 2000);
				})
			}
		}))
		.addControllerLazy(getDragDropOrderController({
			name: 'distance',
			container: '#hazard_dnd .distance',
			resetOn: 'showDialog',
			tries: 1,
			correctOnFailure: true,
			onDrop: function () {
				sounds.hover.volume(0.4, sounds.hover.play());
			},
			onSubmit: function (success) {
				if (success) {
					sounds.good.play();
					$('#hazard_dnd .next').removeClass('hidden');
					m8.runCalls(animations.hazard_dnd.screenUnlocked);
				} else {
					sounds.bad.play();
				}
			},
			onApplyCorrect: function() {
				$('#hazard_dnd .next').removeClass('hidden');
				m8.runCalls(animations.hazard_dnd.screenUnlocked);
			}
		}))
	,
};
