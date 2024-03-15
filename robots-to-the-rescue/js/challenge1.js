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
	project_debrief: {
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
			this.animator('#project_debrief .scene', function() {
				this.play('fadeIn');
			});
			this.animator('#project_debrief .next', function() {
				this.play('fadeIn');
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
			this.animator('#hazard_dnd .next', function() {
				this.play('fadeIn');
			});
			this.animators('#hazard_dnd .progress > *', function() {
				this.sequence(250, 'linear').play('fadeInDown ~1s');
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
	intro_screens: new ScrollMagic.Scene({triggerElement: '#splash_screen', duration: '200%'})
		.addTo(controller)
		// ------ Splash Screen ------
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
					m8.intro($('#project_debrief'), 'show', 'hidden');
					m8.runCalls(animations.project_debrief.intro);
					setTimeout(function() {
						sounds.good.play();
					}, 2000);
				})
			}
		}))

		// ------ Screen 1 ------
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
		.addController(getSceneController({
			container: '#hazard_dnd .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.outro($('#project_debrief'), 'hide', 'hidden');
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
};
