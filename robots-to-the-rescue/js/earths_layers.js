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
};

function calculateScale(w, h) {
  if (document.body.clientWidth > document.body.clientHeight) {
    return Math.min(w, h);
  } else {
    return Math.max(w, h);
  }
}

var scenes = {
	robot_rescues: new ScrollMagic.Scene({triggerElement: '#earths_layers_a', duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		// ------ Earths Layers ------
		.addController(getVisibilityController({
			container: '#earths_layers',
			hideOn: 'never',
			showOn: 'never',
			onImagesLoaded: function () {
				$('#loader').addClass('hidden');
				$(window).trigger('resize');
			}
		}))
		.addController(getSceneController({
			container: '#earths_layers_image_container .scene',
			// chooseScale: Math.min,
			stretchBackground: false,
			listenOn: 'now'
		}))
		.addController(getSceneController({
			container: '#earths_layers_a .scene',
			// chooseScale: Math.min,
			stretchBackground: false,
			listenOn: 'now'
		}))
		.addController(getSceneController({
			container: '#earths_layers_b .scene',
			//chooseScale: Math.min,
			stretchBackground: false
		}))
		.addController(getSceneController({
			container: '#earths_layers_c .scene',
			// chooseScale: Math.min,
			stretchBackground: false
		}))
		.addController(getSceneController({
			container: '#earths_layers_d .scene',
			// chooseScale: Math.min,
			stretchBackground: false
		}))
		.addController(getSceneController({
			container: '#earths_layers_e .scene',
			// chooseScale: Math.min,
			stretchBackground: false
		}))
		.addController(getSceneController({
			container: '#earths_layers_f .scene',
			// chooseScale: Math.min,
			stretchBackground: false
		}))
		.addController(getSceneController({
			container: '#earths_layers_g .scene',
			// chooseScale: Math.min,
			stretchBackground: false
		}))
		.addController(getSceneController({
			container: '#earths_layers_h .scene',
			// chooseScale: Math.min,
			stretchBackground: false
		}))
		.addController(getSceneController({
			container: '#earths_layers_i .scene',
			// chooseScale: Math.min,
			stretchBackground: false,
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function () {
				this.next.click(function () {
					sounds.transition.play();
					$('#earths_layers')
						.animators()
						.play('fadeOut')
						.applyInitialState()
						.off()
						.once('finished', function () {
							window.location = 'missions.html';
						})
					;
					setTimeout(function () {
						sounds.good.play();
					}, 2000);
				})
			}
		}))
		.addController(getSceneController({
			container: '#earths_layers_dialog .scene',
			// chooseScale: Math.min,
			stretchBackground: false
		}))
		.addControllerLazy(getDialogController({
			container: '#earths_layers',
			total: 6,
			opened: 0,
			next: $('#earths_layers_i .next'),
			onBoot: function () {
			},
			onReset: function () {
				this.opened = 0;
				this.dialogs.removeData('opened');
				//this.next.addClass('hidden');
			},
			onShowRequest: function (opener, dialog) {
				opener.animator().stop().restore().tweenTo('opacity', 0.3);
				$("#earths_layers_dialog").removeClass("hidden");

			},
			onHideRequest: function (closer, dialog) {
				sounds.hover.play();
				$("#earths_layers_dialog").addClass("hidden");
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
		})
	),
	intro_text: new ScrollMagic.Scene({
		triggerElement: '.intro-text-trigger',
		duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
			this.animator('.scroll-title-container', function() {
				this.play({
					keyframe: {
						'0': {translateY: 0},
						'60': {translateY: 0},
						'100': {translateY: 200}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.text-block-info-b', function() {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'60': {opacity: 0, translateY: 0},
						'70': {opacity: 1},
						'80': {opacity: 1, translateY: -80},
						'100': {opacity: 1, translateY: -50}
					},
					easings: {
						translateY: 'linear',
						translateX: 'linear'
					}
				})
			});
			this.animator('.text-block-info-a', function() {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'60': {opacity: 0, translateY: 0},
						'80': {opacity: 0},
						'90': {opacity: 1},
						'100': {opacity: 1, translateY: -100}
					},
					easings: {
						translateY: 'linear',
						translateX: 'linear'
					}
				})
			})
		}),
	inner_core_fade: new ScrollMagic.Scene({
		triggerElement: '.inner-core-trigger',
		duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
			this.animator('.inner-core-container', function() {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'10': {opacity: 0, translateY: 0},
						'30': {opacity: 1},
						'100': {translateY: -300}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.inner-core-info', function() {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'20': {opacity: 0, translateY: 0},
						'30': {opacity: 1},
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.inner-core-distance', function() {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateX: 300},
						'90': {opacity: 0, translateX: 300},
						'100': {opacity: 1, translateX: 0},
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
		}),
	outer_core_fade: new ScrollMagic.Scene({
		triggerElement: '.outer-core-trigger',
		duration: '200%',
		})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
			this.animator('.outer-core-container', function() {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'10': {opacity: 0, translateY: 0},
						'30': {opacity: 1},
						'100': {translateY: -700}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.outer-core-info', function() {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'20': {opacity: 0, translateY: 0},
						'30': {opacity: 1},
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
		}
	),
	outer_core_fade_2: new ScrollMagic.Scene({
		triggerElement: '.outer-core-trigger-2',
		duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
				this.animator('.outer-core-container', function() {
					this.play({
						keyframe: {
							'0': {translateY: -700},
							'90': {translateY: -1050}

						},
						easings: {
							translateY: 'linear'
						}
					})
				});
				this.animator('.outer-core-distance', function() {
					this.play({
						keyframe: {
							'0': {opacity: 0, translateX: -300},
							'1': {opacity: 0, translateX: -300},
							'11': {opacity: 1, translateX: 0},
						},
						easings: {
							translateY: 'linear'
						}
					})
				});
			}
		),
	mantle_animations_1: new ScrollMagic.Scene({
		triggerElement: '.mantle-trigger-1',
		duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
			this.animator('.mantle-container', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'10': {opacity: 0, translateY: 0},
						'30': {opacity: 1},
						'100': {translateY: -500}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.mantle-info-2', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'20': {opacity: 0, translateY: 0},
						'30': {opacity: 1},
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.mantle-info-1', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'100': {opacity: 0, translateY: 0},
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
		}),
	mantle_animations_2: new ScrollMagic.Scene({
		triggerElement: '.mantle-trigger-2',
		duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
			this.animator('.mantle-container', function () {
				this.play({
					keyframe: {
						'0': {translateY: -500},
						'100': {translateY: -1000}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.mantle-info-1', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 0},
						'10': {opacity: 1},
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
		}),
	modal_trigger_1: new ScrollMagic.Scene({
		triggerElement: '.modal-trigger-1',
		duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
			this.animator('.select-dialog-instructions', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 300},
						'100': {opacity: 1, translateY: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.hotspot-volcanoes', function () {
				this.play({
					keyframe: {
						'0': {translateX: 1500},
						'50': {translateX: 1500},
						'70': {translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.hotspot-earthquakes', function () {
				this.play({
					keyframe: {
						'0': {translateX: 1500},
						'90': {translateX: 1500},
						'100': {translateX: 750}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.crust-title', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 150},
						'10': {opacity: 1, translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.crust-line', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 150},
						'10': {opacity: 1, translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.crust-info', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 150},
						'10': {opacity: 0, translateY: 150},
						'20': {opacity: 1, translateY: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
		}),
	modal_trigger_2: new ScrollMagic.Scene({
		triggerElement: '.modal-trigger-2',
		duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
			this.animator('.hotspot-earthquakes', function () {
				this.play({
					keyframe: {
						'0': {translateX: 750},
						'10': {translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.hotspot-tsunamis', function () {
				this.play({
					keyframe: {
						'0': {translateX: -1500},
						'15': {translateX: -1500},
						'35': {translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.hotspot-floods', function () {
				this.play({
					keyframe: {
						'0': {translateX: 1500},
						'30': {translateX: 1500},
						'55': {translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.hotspot-tornadoes', function () {
				this.play({
					keyframe: {
						'0': {translateX: 1500},
						'50': {translateX: 1500},
						'75': {translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.hotspot-hurricanes', function () {
				this.play({
					keyframe: {
						'0': {translateX: -1500},
						'70': {translateX: -1500},
						'95': {translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
		}),
	modal_trigger_3: new ScrollMagic.Scene({
		triggerElement: '.modal-trigger-3',
		duration: '100%'})
		.addTo(controller)
		.setBackwards(BACKWARDS)
		.during(function() {
			this.animator('.atmosphere-title', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 150},
						'10': {opacity: 1, translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
			this.animator('.atmosphere-info', function () {
				this.play({
					keyframe: {
						'0': {opacity: 0, translateY: 150},
						'10': {opacity: 1, translateX: 0}
					},
					easings: {
						translateY: 'linear'
					}
				})
			});
		}),
	/*example_trigger: new ScrollMagic.Scene({
		triggerElement: '#example-trigger',
		duration: '100%'})
		.during(function() {
			this.animator('.outer-core-container .outer-core-image', function() {
				//this.play('fadeIn ease-inout')
			})
		}
	)*/
};

if (TRANSITION_DURING) {

} else {

}
