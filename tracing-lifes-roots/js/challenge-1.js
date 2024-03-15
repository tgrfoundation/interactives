Progress.clear();

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
	}),
	marker: new Howl({
		preload: false,
		src: ['sounds/marker.mp3'],
		volume: 1,
		html5: true
	})
};

var animations = {
	splash_screen: {
		intro: function() {
			this.animator('#splash_screen .faded-bg', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 1,
							translateY: 800
						},
						'100': {
							opacity: 1,
							translateY: 0
						}
					}
				}, {
					duration: 2000,
				});
			});
			this.animator('#splash_screen .dna-sidebar', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
							translateX: -800
						},
						'100': {
							opacity: 1,
							translateX: 0
						}
					}
				}, {
					duration: 2000,
					delay: 1000
				});
			});
			this.animator('#splash_screen .title-full', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
							translateX: -800
						},
						'100': {
							opacity: 1,
							translateX: 0
						}
					}
				}, {
					duration: 2000,
					delay: 1000
				});
			});
			this.animator('#splash_screen .colored-bg', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 1,
						},
						'100': {
							opacity: 0,
						}
					}
				}, {
					duration: 100,
					delay: 3000
				});
			});
			this.animator('#splash_screen .animal-duck', function(){
				this.play('fadeIn ~3s');
			});
			this.animator('#splash_screen .animal-otter', function(){
				this.play('fadeIn ~3.5s');
			});
			this.animator('#splash_screen .animal-echidna', function(){
				this.play('fadeIn ~4s');
			});
			this.animator('#splash_screen .animal-platypus', function(){
				this.play('fadeIn ~4.5s');
			});
			this.animator('#splash_screen .begin-button', function(){
				this.play('fadeIn ~5s');
			});
		},
		outro: function() {
			this.animator('#splash_screen .title-full', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 1,
							translateX: 0
						},
						'100': {
							opacity: 0,
							translateX: -400
						}
					}
				}, {
					duration: 2000,
				});
			});
			this.animator('#splash_screen .dna-sidebar', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 1,
							translateX: 0
						},
						'100': {
							opacity: 0,
							translateX: -400
						}
					}
				}, {
					duration: 2000,
				});
			});
			this.animator('#splash_screen .faded-bg', function () {
				this.play('fadeOut ~1s 2s');
			});
			this.animator('#splash_screen .begin-button', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 1,
							translateX: 0
						},
						'100': {
							opacity: 0,
							translateX: -400
						}
					}
				}, {
					duration: 2000,
				});
			});
		}
	},
	challenge_1_debrief: {
		intro: function() {
			this.animator('#challenge_1_debrief .dimmed-background', function () {
				this.play('fadeIn');
			});
			this.animator('#challenge_1_debrief .blue-dialog', function () {
				this.play('fadeInDown ~0.5s 1.5s');
			});
			this.animator('#challenge_1_debrief .instructions-title', function () {
				this.play('fadeInLeft ~2s');
			});
			this.animator('#challenge_1_debrief .instructions', function () {
				this.play('fadeInRight ~2.2s');
			});
			this.animator('#challenge_1_debrief .progress', function () {
				this.play('fadeIn ~1s');
			});
		},
		outro: function() {
			this.animator('#challenge_1_debrief .dialog-description', function () {
				this.play('fadeOut');
			});
			this.animator('#challenge_1_debrief .instructions-title', function () {
				this.play('fadeOutLeft ~0.5s');
			});
			this.animator('#challenge_1_debrief .instructions', function () {
				this.play('fadeOutRight ~0.5s');
			});
		}
	},
	animal_stat_discovery: {
		intro: function() {
			this.animator('#animal_stat_discovery .dialog-description', function () {
				this.play('fadeIn');
			});
			this.animator('#animal_stat_discovery .dialog-instructions', function () {
				this.play('fadeIn ~1s');
			});
			this.animator('#animal_stat_discovery .instructions-title', function () {
				this.play('fadeInLeft ~2s');
			});
			this.animator('#animal_stat_discovery .instructions', function () {
				this.play('fadeInRight ~2.2s');
			});
		},
		outro: function() {
			this.animator('#animal_stat_discovery .scene', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	challenge_1_zoo_lab: {
		intro: function() {
			this.animator('#challenge_1_zoo_lab .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#challenge_1_zoo_lab .background-fade', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
						},
						'100': {
							opacity: 0.6,
						}
					}
				}, {
					delay: 2000,
					duration: 2000,
				});

			});
			this.animator('#challenge_1_zoo_lab .section-title', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
							translateY: -400
						},
						'100': {
							opacity: 1,
							translateY: 0
						}
					}
				}, {
					delay: 3000,
					duration: 2000,
				});

			});
			this.animator('#challenge_1_zoo_lab .page-description', function () {
				this.play('fadeInUp ~5s 2s');
			});
			this.animator('#challenge_1_zoo_lab .next', function () {
				this.play('fadeInUp ~7s');
			});
		},
		outro: function() {
			this.animator('#challenge_1_zoo_lab .scene', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	embryology_intro: {
		intro: function() {
			this.animator('#embryology_intro .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#embryology_intro .blue-dialog', function () {
				this.play('fadeInUp ~1s');
			});
			this.animator('#embryology_intro .chicken-embryo-label', function () {
				this.play('fadeInDown ~2s');
			});
			this.animator('#embryology_intro .chicken-embryo-image', function () {
				this.play('fadeInUp ~2s');
			});
			this.animator('#embryology_intro .human-embryo-label', function () {
				this.play('fadeInDown ~2.2s');
			});
			this.animator('#embryology_intro .human-embryo-image', function () {
				this.play('fadeInUp ~2.2s');
			});
			this.animator('#embryology_intro .fish-embryo-label', function () {
				this.play('fadeInDown ~2.4s');
			});
			this.animator('#embryology_intro .fish-embryo-image', function () {
				this.play('fadeInUp ~2.4s');
			});

			this.animator('#embryology_intro .chicken-embryo-image-gills', function () {
				this.play('fadeIn ~3s 1s');
			});
			this.animator('#embryology_intro .human-embryo-image-gills', function () {
				this.play('fadeIn ~3.5s 1s');
			});
			this.animator('#embryology_intro .fish-embryo-image-gills', function () {
				this.play('fadeIn ~4s 1s');
			});

			this.animator('#embryology_intro .page-description', function () {
				this.play('fadeInUp ~5s 1s');
			});
			this.animator('#embryology_intro .disclaimer', function () {
				this.play('fadeInUp ~5s 1s');
			});

			this.animator('#embryology_intro .next', function () {
				this.play('fadeInUp ~6s');
			});
		},
		outro: function() {
			this.animator('#embryology_intro .disclaimer', function () {
				this.play('bounceOutDown ~0.2s');
			});
			this.animator('#embryology_intro .page-description', function () {
				this.play('bounceOutDown ~0.4s');
			});

			this.animator('#embryology_intro .chicken-embryo-container', function () {
				this.play('bounceOutDown ~0.6s');
			});
			this.animator('#embryology_intro .human-embryo-container', function () {
				this.play('bounceOutDown ~0.8s');
			});
			this.animator('#embryology_intro .fish-embryo-container', function () {
				this.play('bounceOutDown ~1s');
			});

			this.animator('#embryology_intro .dialog-description', function () {
				this.play('fadeOut ~1.2s');
			});
		}
	},
	embryo_sorting_activity: {
		intro: function() {
			this.animator('#embryo_sorting_activity .dialog-description', function () {
				this.play('fadeIn ~1s');
			});
			this.animator('#embryo_sorting_activity .dialog-instructions', function () {
				this.play('fadeIn ~2s');
			});

			this.animator('#embryo_sorting_activity .embryo-hotspot-label', function () {
				this.play('fadeInUpBig ~3s');
			});

			this.animator('#embryo_sorting_activity .duck-hotspot', function () {
				this.play('fadeInUpBig ~4s');
			});
			this.animator('#embryo_sorting_activity .echidna-hotspot', function () {
				this.play('fadeInUpBig ~4.1s');
			});
			this.animator('#embryo_sorting_activity .otter-hotspot', function () {
				this.play('fadeInUpBig ~4.2s');
			});
			this.animator('#embryo_sorting_activity .platypus-hotspot', function () {
				this.play('fadeInUpBig ~4.3s');
			});
		},
		outro: function() {
			this.animator('#embryo_sorting_activity .continue', function () {
				this.play('fadeOutDownBig ~0.4s');
			});

			this.animator('#embryo_sorting_activity .duck-hotspot', function () {
				this.play('fadeOutDownBig ~0.5s');
			});
			this.animator('#embryo_sorting_activity .echidna-hotspot', function () {
				this.play('fadeOutDownBig ~0.6s');
			});
			this.animator('#embryo_sorting_activity .otter-hotspot', function () {
				this.play('fadeOutDownBig ~0.7s');
			});
			this.animator('#embryo_sorting_activity .platypus-hotspot', function () {
				this.play('fadeOutDownBig ~0.8s');
			});

			this.animator('#embryo_sorting_activity .embryo-hotspot-label', function () {
				this.play('fadeOutDownBig ~0.9s');
			});

			this.animator('#embryo_sorting_activity .blue-dialog', function () {
				this.play('fadeOutDownBig ~1s');
			});
		}
	},
	embryology_similarities: {
		intro: function() {
			this.animator('#embryology_similarities .icon', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#embryology_similarities .page-description', function () {
				this.play('fadeInLeft ~1.5s');
			});
			this.animator('#embryology_similarities .my-notebook-icon', function () {
				this.play({
						keyframe: {
							'0': {
								opacity: 0,
								translateX: -300
							},
							'100': {
								opacity: 0.3,
								translateX: 0
							}
						}
					}, {
						duration: 1000,
						delay: 2000
					});
			});

			this.animator('#embryology_similarities .duck-embryo-container', function () {
				this.play('fadeInRightBig ~3s');
			});
			this.animator('#embryology_similarities .echidna-embryo-container', function () {
				this.play('fadeInRightBig ~3.2s');
			});
			this.animator('#embryology_similarities .otter-embryo-container', function () {
				this.play('fadeInRightBig ~3.4s');
			});
			this.animator('#embryology_similarities .platypus-embryo-container', function () {
				this.play('fadeInRightBig ~3.6s');
			});

			this.animator('#embryology_similarities .disclaimer', function () {
				this.play('fadeInUp ~3.5s 1s');
			});
		},
		outro: function() {
			this.animator('#embryology_similarities .content', function () {
				this.play('fadeOut');
			});
		}
	},
	embryology_congrats: {
		intro: function() {
			this.animator('#embryology_congrats .blue-heading', function () {
				this.play('fadeInUp');
			});
			this.animator('#embryology_congrats .to-our', function () {
				this.play('fadeInUp ~1s');
			});
			this.animator('#embryology_congrats .great-work', function () {
				this.play('fadeInUp ~1.5s');
			});
			this.animator('#embryology_congrats .learned', function () {
				this.play('fadeInUp ~2s');
			});
			this.animator('#embryology_congrats .now', function () {
				this.play('fadeInUp ~2.5s');
			});
			this.animator('#embryology_congrats .continue', function () {
				this.play('fadeInUp ~3s');
			});
			this.animator('#embryology_congrats .twf', function () {
				this.play('fadeInUp ~3.5s');
			});
			this.animator('#embryology_congrats .de', function () {
				this.play('fadeInUp ~4s');
			});
			this.animator('#embryology_congrats .copyright', function () {
				this.play('fadeInUp ~4.5s');
			});
		},
		outro: function() {
			this.animator('#embryology_congrats .scene', function () {
				this.play('fadeOut');
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
			//container: '#embryology_congrats',
			onImagesLoaded: function () {
				m8.runCalls(animations.splash_screen.intro);
				//m8.runCalls(animations.embryology_congrats.intro);
			}
		}))
		.addController(getSceneController({
			container: '#splash_screen .scene',
			onRegister: function () {
				this.begin = this.container.parent().find('.begin-button');
			},
			onRefresh: function (scale) {},
			onBoot: function() {
				this.begin.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.splash_screen.outro);
					setTimeout(function() {
						m8.outro($('#splash_screen'), 'hide', 'hidden');
						m8.intro($('#challenge_1_debrief'), 'show', 'hidden');
						m8.runCalls(animations.challenge_1_debrief.intro);
					}, 3000);
					//m8.runCalls(animations.hazard_dnd.intro);
				});
				// this.begin.click(function() {
				// 	m8.outro($('#splash_screen .begin-button'), 'hide', 'hidden');
				//
				// 	m8.runCalls(animations.begin.intro);
				// });
			}
		}))

		// ------ Challenge 1 Debrief ------
		.addController(getSceneController({
			container: '#challenge_1_debrief .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_1_debrief.outro);
					setTimeout(function() {
						m8.outro($('#challenge_1_debrief'), 'hide', 'hidden');
						m8.intro($('#animal_stat_discovery'), 'show', 'hidden');
						m8.runCalls(animations.animal_stat_discovery.intro);
					}, 2000);
				})
			}
		}))

		// ------ Animal Stat Discovery ------
		.addController(getSceneController({
			container: '#animal_stat_discovery .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.animal_stat_discovery.outro);
					setTimeout(function() {
						m8.outro($('#animal_stat_discovery'), 'hide', 'hidden');
						m8.intro($('#challenge_1_zoo_lab'), 'show', 'hidden');
						m8.runCalls(animations.challenge_1_zoo_lab.intro);
					}, 1000);
				})
			}
		}))
		.addControllerLazy(getDialogController({
			container: '#animal_stat_discovery .scene',
			total: 4,
			opened: 0,
			next: $('#animal_stat_discovery .next'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
				$('#animal_stat_discovery .animal-'+opener.data('animal'))
					.css('opacity','0.4')
					.removeAttr('dialog',true);
				// var text = opener.data('text');
				// var check = opener.data('check');
				//
				// // opener.animator().stop().restore();
				// // $(text).animator().stop().restore();
				// // $('#embryo_sorting_activity .hide-' + check).addClass('hidden');
				// // $('#embryo_sorting_activity .show-' + check).removeClass('hidden').animator().play('bounceIn').applyInitialState();
			},
			onHideRequest: function(closer, dialog) {
				sounds.hover.play();
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.boop.play();
					m8.intro($('#final_congrats_screen'), 'show', 'hidden');
					//m8.runCalls(animations.final_congrats_screen.intro);
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
						.play('fadeInUp ~1s')
					;
				}
			}
		}))

		// ------ Challenge 1 zoo lab ------
		.addController(getSceneController({
			container: '#challenge_1_zoo_lab .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_1_zoo_lab.outro);
					setTimeout(function() {
						m8.outro($('#challenge_1_zoo_lab'), 'hide', 'hidden');
						m8.intro($('#embryology_intro'), 'show', 'hidden');
						m8.runCalls(animations.embryology_intro.intro);
					}, 1000);
				})
			}
		}))
		// ------ embryology_intro ------
		.addController(getSceneController({
			container: '#embryology_intro .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.embryology_intro.outro);
					setTimeout(function() {
						m8.outro($('#embryology_intro'), 'hide', 'hidden');
						m8.intro($('#embryo_sorting_activity'), 'show', 'hidden');
						m8.runCalls(animations.embryo_sorting_activity.intro);
					}, 2000);
				})
			}
		}))
		// ------ embryo_sorting_activity ------
		.addController(getSceneController({
			container: '#embryo_sorting_activity .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.continue');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.embryo_sorting_activity.outro);
					setTimeout(function() {
						m8.outro($('#embryo_sorting_activity'), 'hide', 'hidden');
						m8.intro($('#embryology_similarities'), 'show', 'hidden');
						m8.runCalls(animations.embryology_similarities.intro);
					}, 2000);
				})
			}
		}))
		.addControllerLazy(getDialogController({
			container: '#embryo_sorting_activity .scene',
			total: 4,
			opened: 0,
			next: $('#embryo_sorting_activity .continue'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
				$('#embryo_sorting_activity .'+opener.data('animal')+'-hotspot')
					.css('opacity','0.4')
					.removeAttr('dialog',true);
				// var text = opener.data('text');
				// var check = opener.data('check');
				//
				// // opener.animator().stop().restore();
				// // $(text).animator().stop().restore();
				// // $('#embryo_sorting_activity .hide-' + check).addClass('hidden');
				// // $('#embryo_sorting_activity .show-' + check).removeClass('hidden').animator().play('bounceIn').applyInitialState();
			},
			onHideRequest: function(closer, dialog) {
				sounds.hover.play();
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.boop.play();
					m8.intro($('#final_congrats_screen'), 'show', 'hidden');
					//m8.runCalls(animations.final_congrats_screen.intro);
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
						.play('fadeInUp ~1s')
					;
				}
			}
		}))
		.addControllerLazy(getDragDropOrderController({
			name: 'embryo-duck-dnd-container',
			container: '#embryo_sorting_activity .embryo-duck-dnd-container',
			resetOn: 'showDialog',
			tries: 1,
			correctOnFailure: true,
			onDrop: function ($this, ui, evt) {
				sounds.hover.volume(0.4, sounds.hover.play());
				$this.eq(0).prop('src','images/challenge-1/c1-embryo-target-filled.png');
			},
			onSubmit: function (success) {
				if (success) {
					sounds.good.play();
					$('#embryo_sorting_activity .next').removeClass('hidden');
					//m8.runCalls(animations.hazard_dnd.screenUnlocked);
				} else {
					sounds.bad.play();
				}
			},
			onApplyCorrect: function() {
				$('#embryo_sorting_activity .next').removeClass('hidden');
				//m8.runCalls(animations.hazard_dnd.screenUnlocked);
			}
		}))
		.addControllerLazy(getDragDropOrderController({
			name: 'embryo-echidna-dnd-container',
			container: '#embryo_sorting_activity .embryo-echidna-dnd-container',
			resetOn: 'showDialog',
			tries: 1,
			correctOnFailure: true,
			onDrop: function ($this, ui, evt) {
				sounds.hover.volume(0.4, sounds.hover.play());
				$this.eq(0).prop('src','images/challenge-1/c1-embryo-target-filled.png');
			},
			onSubmit: function (success) {
				if (success) {
					sounds.good.play();
					$('#embryo_sorting_activity .next').removeClass('hidden');
					//m8.runCalls(animations.hazard_dnd.screenUnlocked);
				} else {
					sounds.bad.play();
				}
			},
			onApplyCorrect: function() {
				$('#embryo_sorting_activity .next').removeClass('hidden');
				//m8.runCalls(animations.hazard_dnd.screenUnlocked);
			}
		}))
		.addControllerLazy(getDragDropOrderController({
			name: 'embryo-otter-dnd-container',
			container: '#embryo_sorting_activity .embryo-otter-dnd-container',
			resetOn: 'showDialog',
			tries: 1,
			correctOnFailure: true,
			onDrop: function ($this, ui, evt) {
				sounds.hover.volume(0.4, sounds.hover.play());
				$this.eq(0).prop('src','images/challenge-1/c1-embryo-target-filled.png');
			},
			onSubmit: function (success) {
				if (success) {
					sounds.good.play();
					$('#embryo_sorting_activity .next').removeClass('hidden');
					//m8.runCalls(animations.hazard_dnd.screenUnlocked);
				} else {
					sounds.bad.play();
				}
			},
			onApplyCorrect: function() {
				$('#embryo_sorting_activity .next').removeClass('hidden');
				//m8.runCalls(animations.hazard_dnd.screenUnlocked);
			}
		}))
		.addControllerLazy(getDragDropOrderController({
			name: 'embryo-platypus-dnd-container',
			container: '#embryo_sorting_activity .embryo-platypus-dnd-container',
			resetOn: 'showDialog',
			tries: 1,
			correctOnFailure: true,
			onDrop: function ($this, ui, evt) {
				sounds.hover.volume(0.4, sounds.hover.play());
				$this.eq(0).prop('src','images/challenge-1/c1-embryo-target-filled.png');
			},
			onSubmit: function (success) {
				if (success) {
					sounds.good.play();
					$('#embryo_sorting_activity .next').removeClass('hidden');
					//m8.runCalls(animations.hazard_dnd.screenUnlocked);
				} else {
					sounds.bad.play();
				}
			},
			onApplyCorrect: function() {
				$('#embryo_sorting_activity .next').removeClass('hidden');
				//m8.runCalls(animations.hazard_dnd.screenUnlocked);
			}
		}))

		// ------ embryology_similarities ------
		.addController(getSceneController({
			container: '#embryology_similarities .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.embryology_similarities.outro);
					setTimeout(function() {
						m8.outro($('#embryology_similarities'), 'hide', 'hidden');
						m8.intro($('#embryology_congrats'), 'show', 'hidden');
						m8.runCalls(animations.embryology_congrats.intro);
					}, 1000);
				})
			}
		}))
		.addController(getProgressChosenController({
			name: 'chosen_embryo',
			container: '#embryology_similarities .scene',
			checks: '.embryo-container',
			setData: function (data) {
				Progress.data.chosen_embryo = data;
			},
			getData: function () {
				return Progress.data.chosen_embryo;
			},
			onChosenUpdate: function (count) {
				if(count >= 2) {
					var $notebook_icon = $(this.container+" .my-notebook-icon");
					$notebook_icon.addClass('active');
					$notebook_icon.css('opacity', '1');
				} else {
					var $notebook_icon = $(this.container+" .my-notebook-icon");
					$notebook_icon.removeClass('active');
					$notebook_icon.css('opacity', '0.3');
				}
			}
		}))
		.addController(getProgressChosenDisplayedController({
			container: '#embryology_similarities .scene'
		}))
		.addControllerLazy(getDialogController({
			container: '#embryology_similarities .scene',
			total: 1,
			opened: 0,
			next: $('#embryology_similarities .next'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
        
        if (!opener.hasClass('active')) {
          return false;
        }
        
				var selected_elements = Progress.data.chosen_embryo;
				var counter = 2;

				selected_elements.sort().forEach(function(element){
					m8.runCalls(function() {
						this.animator('#embryology_similarities .row-1 .checkbox-column.' + element + ' .checkbox-selected-container', function () {
							this.play('checkboxCheck ~' + counter + 's');
						})
					});
					var timeoutVal = counter *1000;
					setTimeout(function() {
						sounds.marker.play();
					}, timeoutVal);
					counter++;
				}.bind(this));

				$('#embryology_similarities .notebook-modal .note-1, #embryology_similarities .notebook-modal .note-1-bullet')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');

				counter+=2;

				$('#embryology_similarities .notebook-modal .note-2, #embryology_similarities .notebook-modal .note-2-bullet')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');

				counter+=2;

				$('#embryology_similarities .notebook-modal .continue-message, #embryology_similarities .notebook-modal .continue-button')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');
			},
			onHideRequest: function(closer, dialog) {
				sounds.hover.play();
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.boop.play();
					m8.intro($('#final_congrats_screen'), 'show', 'hidden');
					//m8.runCalls(animations.final_congrats_screen.intro);
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
						.play('fadeInUp ~1s')
					;
				}
			}
		}))

		// --------- embryology_congrats ---------
		.addController(getSceneController({
			container: '#embryology_congrats .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.continue');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					$('#embryology_congrats .scene')
						.animators()
						.play('fadeOut')
						.applyInitialState()
						.off()
						.once('finished', function () {
							window.location = 'challenge-2.html';
						})
					;
				})
			}
		}))
	,
};
