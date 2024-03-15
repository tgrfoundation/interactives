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
	challenge_4_final_choice: {
		intro: function() {
			this.animator('#challenge_4_final_choice .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#challenge_4_final_choice .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#challenge_4_final_choice .blue-dialog', function () {
				this.play('fadeInUp ~2s');
			});
			this.animator('#challenge_4_final_choice .dialog-instructions', function () {
				this.play('fadeInUp ~3s');
			});
			this.animator('#challenge_4_final_choice .my-notebook-icon', function () {
				this.play('fadeIn ~4s 2s');
			});
		},
		outro: function() {
			this.animator('#challenge_4_final_choice .my-notebook-icon', function () {
				this.play('disabledOut 1s');
			});
			this.animator('#challenge_4_final_choice .dialog-instructions', function () {
				this.play('fadeOut 1s ~0.2s');
			});
			this.animator('#challenge_4_final_choice .dialog-description', function () {
				this.play('fadeOut 1s ~0.4s');
			});
			this.animator('#challenge_4_final_choice .dialog-description-2', function () {
				this.play('fadeOut 1s ~0.2s');
			});
		}
	},
	challenge_4_cardiogram: {
		intro: function() {
			this.animator('#challenge_4_cardiogram .dialog-description', function () {
				this.play('fadeIn 2s');
			});

			this.animator('#challenge_4_cardiogram .cladogram-chart-partial', function () {
				this.play('fadeInLeft ~2s 2s');
			});

			this.animator('#challenge_4_cardiogram .cladogram-chart-duck', function () {
				this.play('fadeIn ~4s 2s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-otter', function () {
				this.play('fadeIn ~5s 2s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-monotremes-container', function () {
				this.play('fadeIn ~6s 2s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-highlight', function () {
				this.play('fadeIn ~7s 2s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-echidna', function () {
				this.play('fadeIn ~8s 2s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-platypus', function () {
				this.play('fadeIn ~8s 2s');
			});
			this.animator('#challenge_4_cardiogram .page-description', function () {
				this.play('fadeInRight ~9s 1s');
			});

			this.animator('#challenge_4_cardiogram .next', function () {
				this.play('fadeInUp ~10s');
			});

		},
		outro: function() {
			this.animator('#challenge_4_cardiogram .cladogram-chart-partial', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-duck', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-otter', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-monotremes-lines', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-highlight', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-echidna', function () {
				this.play('fadeOut ~2s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-platypus', function () {
				this.play('fadeOut ~2s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-monotremes-box-1', function () {
				this.play('fadeOut ~2s');
			});
			this.animator('#challenge_4_cardiogram .cladogram-chart-monotremes-box-2', function () {
				this.play('fadeOut ~2s');
			});
			this.animator('#challenge_4_cardiogram .page-description', function () {
				this.play('fadeOut ~0.4s');
			});
			this.animator('#challenge_4_cardiogram .dialog-description', function () {
				this.play('fadeOut ~0.8s');
			});
			this.animator('#challenge_4_cardiogram .next', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	career_connection: {
		intro: function() {
			this.animator('#career_connection .intro', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#career_connection .instructions', function () {
				this.play('fadeIn ~1s');
			});
			this.animator('#career_connection .learn1', function () {
				this.play('fadeInUp ~2s');
			});
			this.animator('#career_connection .learn2', function () {
				this.play('fadeInUp ~2.2s');
			});
			this.animator('#career_connection .learn3', function () {
				this.play('fadeInUp ~2.4s');
			});
			this.animator('#career_connection .learn4', function () {
				this.play('fadeInUp ~2.6s');
			});
			this.animator('#career_connection .learn5', function () {
				this.play('fadeInUp ~2.8s');
			});
			this.animator('#career_connection .learn6', function () {
				this.play('fadeInUp ~3s');
			});
		},
		outro: function() {
			this.animator('#career_connection .content', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	final_congrats_screen: {
		intro: function() {
			this.animator('#final_congrats_screen .content', function () {
				this.play('fadeIn 1s');
			});
		},
		outro: function() {
			this.animator('#final_congrats_screen .content', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	wrap_up: {
		intro: function() {
			this.animator('#wrap_up .content', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#wrap_up .completed', function () {
				this.play('fadeInRight');
			});
			this.animator('#wrap_up .wrap-up-title', function () {
				this.play('fadeInUp ~1s');
			});
			this.animator('#wrap_up .congrats', function () {
				this.play('fadeInUp ~2s');
			});
			this.animator('#wrap_up .twf', function () {
				this.play('fadeIn ~3s');
			});
			this.animator('#wrap_up .dised', function () {
				this.play('fadeIn ~3.25s');
			});
			this.animator('#wrap_up .panel-container', function () {
				this.play('fadeInRight ~4s');
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
		},
		outro: function() {
			this.animator('#wrap_up .scene', function () {
				this.play('fadeOut 1s');
			});
		}
	}
};

var scenes = {
	intro_screens: new ScrollMagic.Scene({triggerElement: '#challenge_4_final_choice', duration: '200%'})
		.addTo(controller)
		// ------ Visiblity Controller ------
		.addController(getVisibilityController({
			container: '#challenge_4_final_choice',
			//container: '#final_congrats_screen',
			onImagesLoaded: function () {
				m8.runCalls(animations.challenge_4_final_choice.intro);
				//m8.runCalls(animations.challenge_4_cardiogram.intro);
			}
		}))

		// ------ challenge_4_final_choice ------
		.addController(getSceneController({
			container: '#challenge_4_final_choice .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_4_final_choice.outro);
					setTimeout(function() {
						m8.outro($('#challenge_4_final_choice'), 'hide', 'hidden');
						m8.intro($('#challenge_4_cardiogram'), 'show', 'hidden');
						m8.runCalls(animations.challenge_4_cardiogram.intro);
					}, 2000);
				})
			}
		}))
		.addController(getProgressChosenController({
			name: 'chosen_conclusion',
			container: '#challenge_4_final_choice .scene',
			checks: '.row-4 .checkbox-column',
			setData: function (data) {
				Progress.data.chosen_conclusion = data;
			},
			getData: function () {
				return Progress.data.chosen_conclusion;
			},
			onChosenUpdate: function (count) {
				if(count >= 2) {
					var $notebook_icon = $(this.container+" .my-notebook-icon");
					$notebook_icon.addClass('active');
					$notebook_icon.css('opacity', '1');
					$('#challenge_4_final_choice .notebook-modal .continue-button').css('opacity','1');
				} else {
					var $notebook_icon = $(this.container+" .my-notebook-icon");
					$notebook_icon.removeClass('active');
					$notebook_icon.css('opacity', '0.3');
					$('#challenge_4_final_choice .notebook-modal .continue-button').css('opacity','0');
				}
			}
		}))
		.addController(getProgressChosenDisplayedController({
			container: '#challenge_4_final_choice .scene'
		}))
		.addControllerLazy( getDialogController({
			container: '#challenge_4_final_choice .scene',
			total: 1,
			opened: 0,
			next: $('#challenge_4_final_choice .next'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
        
        if (!opener.hasClass('active')) {
          return false;
        }
				// var check = opener.data('check');

				opener.animator().stop().restore();

				// $('#career_connection .hide-' + check).addClass('hidden');
				// $('#career_connection .show-' + check).removeClass('hidden').animator().play('bounceIn').applyInitialState();
			},
			onHideRequest: function(closer, dialog) {
				sounds.hover.play();
			},
			onBoot: function() { },
			onShow: function(dialog) {
				if (!dialog.data('opened')) {
					dialog.data('opened', true);
					this.opened++;
				}
				sounds.hover.play();
			},
			onHide: function() {
				if (this.opened >= this.total
					&& this.next.hasClass('hidden')
					&& Progress.data['chosen_conclusion'].length == 2) {
						this.next
							.removeClass('hidden')
							.animator()
							.play('fadeInUp ~2s');
						$('#challenge_4_final_choice .my-notebook-icon').css('opacity',0.3);
						$('#challenge_4_final_choice .dialog-description-2')
							.removeClass('hidden')
							.animator()
							.play('fadeInUp ~1s');
					;
				}
			}
		}))
		// ------ challenge_4_cardiogram ------
		.addController(getSceneController({
			container: '#challenge_4_cardiogram .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_4_cardiogram.outro);
					setTimeout(function() {
						m8.outro($('#challenge_4_cardiogram'), 'hide', 'hidden');
						m8.intro($('#career_connection'), 'show', 'hidden');
						m8.runCalls(animations.career_connection.intro);
					}, 3000);
				})
			}
		}))
		// ------ career_connection ------
		.addController(getSceneController({
			container: '#career_connection .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.continue');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.career_connection.outro);
					setTimeout(function() {
						m8.outro($('#career_connection'), 'hide', 'hidden');
						m8.intro($('#final_congrats_screen'), 'show', 'hidden');
						m8.runCalls(animations.final_congrats_screen.intro);
					}, 2000);
				})
			}
		}))
		.addControllerLazy( getDialogController({
			container: '#career_connection .scene',
			total: 6,
			opened: 0,
			next: $('#career_connection .continue'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
				// var check = opener.data('check');

				opener.animator().stop().restore();
				setTimeout(function() {
					opener.css('opacity',0.3);
				}, 2000);
				// $('#career_connection .hide-' + check).addClass('hidden');
				// $('#career_connection .show-' + check).removeClass('hidden').animator().play('bounceIn').applyInitialState();
			},
			onHideRequest: function(closer, dialog) {
				sounds.hover.play();
			},
			onBoot: function() { },
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
		// ------ final_congrats_screen ------
		.addController(getSceneController({
			container: '#final_congrats_screen .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.continue');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.final_congrats_screen.outro);
					setTimeout(function() {
						m8.outro($('#final_congrats_screen'), 'hide', 'hidden');
						m8.intro($('#wrap_up'), 'show', 'hidden');
						m8.runCalls(animations.wrap_up.intro);
					}, 2000);
				})
			}
		}))
		.addController( getSceneController({
			container: '#wrap_up .scene',
			onRegister: function() {
				this.replay = this.container.find('.play');
				this.goto = this.container.find('.tiger');
			},
			onBoot: function() {
				this.replay.click(function() {
					window.location = 'challenge-1.html';
				});
				this.goto.click(function() {
					sounds.transition.play();
					window.open('https://www.tgreduexplore.org/', '_blank');
				});
			}
		}))
	,


};

/************************************************************\
 * GA Event Logger
 ************************************************************/
var certificateLink = document.getElementById('certificate-of-completion');
certificateLink.addEventListener('click', function() {
	gtag('event', 'Download', {
		'event_category': 'PDFs',
		'event_label': 'Certificate of Completion'
	});
});
