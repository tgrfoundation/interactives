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
	challenge_3_zoo_lab: {
		intro: function() {
			this.animator('#challenge_3_zoo_lab .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#challenge_3_zoo_lab .background-fade', function () {
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
			this.animator('#challenge_3_zoo_lab .section-title', function () {
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
			this.animator('#challenge_3_zoo_lab .page-description', function () {
				this.play('fadeInUp ~5s 2s');
			});
			this.animator('#challenge_3_zoo_lab .next', function () {
				this.play('fadeInUp ~7s');
			});
		},
		outro: function() {
			this.animator('#challenge_3_zoo_lab .scene', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_3_zoo_lab .next', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	challenge_3_cell: {
		intro: function() {
			this.animator('#challenge_3_cell .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#challenge_3_cell .blue-dialog', function () {
				this.play('fadeInDown ~0.5s 1.5s');
			});
			this.animator('#challenge_3_cell .animal-section', function () {
				this.play('fadeIn ~2.5s');
			});
			this.animator('#challenge_3_cell .animal-section .text-description', function () {
				this.play('fadeIn ~3s');
			});
			this.animator('#challenge_3_cell .animal-section .indicator-line', function () {
				this.play('growDown ~3.25s');
			});
			this.animator('#challenge_3_cell .process-arrow-1', function () {
				this.play('fadeInLeft ~3.5s');
			});
			this.animator('#challenge_3_cell .cell-section', function () {
				this.play('fadeIn ~4.5s');
			});
			this.animator('#challenge_3_cell .cell-section .text-description', function () {
				this.play('fadeIn ~5s');
			});
			this.animator('#challenge_3_cell .cell-section .indicator-line', function () {
				this.play('growDown ~5.25s');
			});
			this.animator('#challenge_3_cell .process-arrow-2', function () {
				this.play('fadeInLeft ~5.5s');
			});
			this.animator('#challenge_3_cell .chrome-section', function () {
				this.play('fadeIn ~6.5s');
			});
			this.animator('#challenge_3_cell .chrome-section .text-description', function () {
				this.play('fadeIn ~7s');
			});
			this.animator('#challenge_3_cell .chrome-section .indicator-line', function () {
				this.play('growDown ~7.25s');
			});
			this.animator('#challenge_3_cell .process-arrow-3', function () {
				this.play('fadeInLeft ~7.5s');
			});
			this.animator('#challenge_3_cell .dna-section', function () {
				this.play('fadeIn ~8.5s');
			});

			this.animator('#challenge_3_cell .next', function () {
				this.play('fadeInUp ~9s');
			});
		},
		outro: function() {
			this.animator('#challenge_3_cell .next', function () {
				this.play('fadeOut');
			});
			this.animator('#challenge_3_cell .animal-section', function () {
				this.play('fadeOut');
			});
			this.animator('#challenge_3_cell .process-arrow-1', function () {
				this.play('fadeOutLeft ~0.3s');
			});
			this.animator('#challenge_3_cell .cell-section', function () {
				this.play('fadeOut ~0.6s');
			});
			this.animator('#challenge_3_cell .process-arrow-2', function () {
				this.play('fadeOutLeft ~0.9s');
			});
			this.animator('#challenge_3_cell .chrome-section', function () {
				this.play('fadeOut ~1.2s');
			});
			this.animator('#challenge_3_cell .process-arrow-3', function () {
				this.play('fadeOutLeft ~1.5s');
			});
			this.animator('#challenge_3_cell .dna-section', function () {
				this.play('fadeOut ~1.8s');
			});
			this.animator('#challenge_3_cell .dialog-description', function () {
				this.play('fadeOut ~2.1s');
			});
		}
	},
	challenge_3_dna: {
		intro: function() {
			this.animator('#challenge_3_dna .dialog-description', function () {
				this.play('fadeIn ~1s');
			});
			this.animator('#challenge_3_dna .dna-bg', function () {
				this.play('fadeIn ~2s 1.5s');
			});
			this.animator('#challenge_3_dna .nucleotides-container', function () {
				this.play('fadeInLeft ~3s 1.5s');
			});
			this.animator('#challenge_3_dna .nucleotides-a', function () {
				this.play('fadeIn ~4s 1s');
			});
			this.animator('#challenge_3_dna .nucleotides-a-title', function () {
				this.play('fadeIn ~4s 1s');
			});
			this.animator('#challenge_3_dna .nucleotides-t', function () {
				this.play('fadeIn ~4.5s 1s');
			});
			this.animator('#challenge_3_dna .nucleotides-t-title', function () {
				this.play('fadeIn ~4.5s 1s');
			});
			this.animator('#challenge_3_dna .nucleotides-g', function () {
				this.play('fadeIn ~5s 1s');
			});
			this.animator('#challenge_3_dna .nucleotides-g-title', function () {
				this.play('fadeIn ~5s 1s');
			});
			this.animator('#challenge_3_dna .nucleotides-c', function () {
				this.play('fadeIn ~5.5s 1s');
			});
			this.animator('#challenge_3_dna .nucleotides-c-title', function () {
				this.play('fadeIn ~5.5s 1s');
			});
			this.animator('#challenge_3_dna .next', function () {
				this.play('fadeInUp ~6s');
			});
		},
		outro: function() {
			this.animator('#challenge_3_dna .dialog-description', function () {
				this.play('fadeOut');
			});
		}
	},
	challenge_3_mutations: {
		intro: function() {
			this.animator('#challenge_3_mutations .dialog-description', function () {
				this.play('fadeIn');
			});
			this.animator('#challenge_3_mutations .mutation', function () {
				this.play('skewMutationIn ~2s 1s');
			});
			this.animator('#challenge_3_mutations .mutation-line', function () {
				this.play('growRight ~1s 1s');
			});
			this.animator('#challenge_3_mutations .mutation-text', function () {
				this.play('fadeIn ~1s 1s');
			});
		},
		outro: function() {
			this.animator('#challenge_3_mutations .next', function () {
				this.play('fadeOut');
			});
			this.animator('#challenge_3_mutations .dna-bg', function () {
				this.play('fadeOut');
			});

			this.animator('#challenge_3_mutations .nucleotides-container', function () {
				this.play('fadeOutLeft 0.5s');
			});
			this.animator('#challenge_3_mutations .nucleotides-a', function () {
				this.play('fadeOutLeft 0.5s');
			});
			this.animator('#challenge_3_mutations .nucleotides-a-title', function () {
				this.play('fadeOutLeft 0.5s');
			});
			this.animator('#challenge_3_mutations .nucleotides-t', function () {
				this.play('fadeOutLeft 0.5s');
			});
			this.animator('#challenge_3_mutations .nucleotides-t-title', function () {
				this.play('fadeOutLeft 0.5s');
			});
			this.animator('#challenge_3_mutations .nucleotides-g', function () {
				this.play('fadeOutLeft 0.5s');
			});
			this.animator('#challenge_3_mutations .nucleotides-g-title', function () {
				this.play('fadeOutLeft 0.5s');
			});
			this.animator('#challenge_3_mutations .nucleotides-c', function () {
				this.play('fadeOutLeft 0.5s');
			});
			this.animator('#challenge_3_mutations .nucleotides-c-title', function () {
				this.play('fadeOutLeft 0.5s');
			});

			this.animator('#challenge_3_mutations .mutation', function () {
				this.play('fadeOut');
			});
			this.animator('#challenge_3_mutations .mutation-line', function () {
				this.play('fadeOut');
			});
			this.animator('#challenge_3_mutations .mutation-text', function () {
				this.play('fadeOut');
			});
			this.animator('#challenge_3_mutations .dialog-description', function () {
				this.play('fadeOut');
			});
		}
	},
	challenge_3_dna_strands: {
		intro: function() {
			this.animator('#challenge_3_dna_strands .dialog-description', function () {
				this.play('fadeIn');
			});
			this.animator('#challenge_3_dna_strands .step-1-text', function () {
				this.play('fadeInUp ~1s');
			});
			this.animator('#challenge_3_dna_strands .step-1-indicator', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#challenge_3_dna_strands .step-2-text', function () {
				this.play('fadeInUp ~1.3s');
			});
			this.animator('#challenge_3_dna_strands .step-2-indicator', function () {
				this.play('fadeInLeft ~1.3s');
			});
			this.animator('#challenge_3_dna_strands .step-3-text', function () {
				this.play('fadeInUp ~1.6s');
			});
			this.animator('#challenge_3_dna_strands .step-3-indicator', function () {
				this.play('fadeInLeft ~1.6s');
			});
			this.animator('#challenge_3_dna_strands .diagram', function () {
				this.play('fadeInUp ~2s');
			});
		},
		outro: function() {
			this.animator('#challenge_3_dna_strands .diagram', function () {
				this.play('fadeOutDown');
			});
			this.animator('#challenge_3_dna_strands .step-3-text', function () {
				this.play('fadeOutDown ');
			});
			this.animator('#challenge_3_dna_strands .step-3-indicator', function () {
				this.play('fadeOutLeft');
			});
			this.animator('#challenge_3_dna_strands .step-2-text', function () {
				this.play('fadeOutDown ~0.2s');
			});
			this.animator('#challenge_3_dna_strands .step-2-indicator', function () {
				this.play('fadeOutLeft ~0.2s');
			});
			this.animator('#challenge_3_dna_strands .step-1-text', function () {
				this.play('fadeOutDown ~0.4s');
			});
			this.animator('#challenge_3_dna_strands .step-1-indicator', function () {
				this.play('fadeOutLeft ~0.4s');
			});
			this.animator('#challenge_3_dna_strands .blue-dialog', function () {
				this.play('fadeOutDown ~0.6s');
			});
		}
	},
	challenge_3_dna_selections: {
		intro: function() {
			this.animator('#challenge_3_dna_selections .icon', function () {
				this.play('fadeInLeft 1s');
			});
			this.animator('#challenge_3_dna_selections .page-description', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#challenge_3_dna_selections .page-description-2', function () {
				this.play('fadeInBottom ~2s');
			});
			this.animator('#challenge_3_dna_selections .my-notebook-icon', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
						},
						'100': {
							opacity: 0.3,
						}
					}
				}, {
					duration: 1000,
					delay: 2000
				});
			});
			this.animator('#challenge_3_dna_selections .duck-embryo-container', function () {
				this.play('fadeInRight ~2s');
			});
			this.animator('#challenge_3_dna_selections .echidna-embryo-container', function () {
				this.play('fadeInRight ~2.2s');
			});
			this.animator('#challenge_3_dna_selections .otter-embryo-container', function () {
				this.play('fadeInRight ~2.4s');
			});
			this.animator('#challenge_3_dna_selections .platypus-embryo-container', function () {
				this.play('fadeInRight ~2.6s');
			});
		},
		outro: function() {
			this.animator('#challenge_3_dna_selections .scene', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	challenge_3_dna_congrats: {
		intro: function() {
			this.animator('#challenge_3_dna_congrats .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#challenge_3_dna_congrats .next', function () {
				this.play('fadeInUp ~2s');
			});
		},
		outro: function() {
			this.animator('#challenge_3_dna_congrats .scene', function () {
				this.play('fadeOut 1s');
			});
		}
	}
};

var scenes = {
	intro_screens: new ScrollMagic.Scene({triggerElement: '#challenge_3_zoo_lab', duration: '200%'})
		.addTo(controller)
		// ------ Visiblity Controller ------
		.addController(getVisibilityController({
			container: '#challenge_3_zoo_lab',
			//container: '#challenge_3_dna_congrats',
			onImagesLoaded: function () {
				m8.runCalls(animations.challenge_3_zoo_lab.intro);
			}
		}))

		// ------ Challenge 3 zoo lab ------
		.addController(getSceneController({
			container: '#challenge_3_zoo_lab .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_3_zoo_lab.outro);
					setTimeout(function() {
						m8.outro($('#challenge_3_zoo_lab'), 'hide', 'hidden');
						m8.intro($('#challenge_3_cell'), 'show', 'hidden');
						m8.runCalls(animations.challenge_3_cell.intro);
					}, 1000);
				})
			}
		}))
		// ------ challenge_3_cell ------
		.addController(getSceneController({
			container: '#challenge_3_cell .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_3_cell.outro);
					setTimeout(function() {
						m8.outro($('#challenge_3_cell'), 'hide', 'hidden');
						m8.intro($('#challenge_3_dna'), 'show', 'hidden');
						m8.runCalls(animations.challenge_3_dna.intro);
					}, 3000);
				})
			}
		}))
		// ------ challenge_3_dna ------
		.addController(getSceneController({
			container: '#challenge_3_dna .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_3_dna.outro);
					setTimeout(function() {
						m8.outro($('#challenge_3_dna'), 'hide', 'hidden');
						m8.intro($('#challenge_3_mutations'), 'show', 'hidden');
						m8.runCalls(animations.challenge_3_mutations.intro);
					}, 1000);
				})
			}
		}))
		// ------ challenge_3_mutations ------
		.addController(getSceneController({
			container: '#challenge_3_mutations .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_3_mutations.outro);
					setTimeout(function() {
						m8.outro($('#challenge_3_mutations'), 'hide', 'hidden');
						m8.intro($('#challenge_3_dna_strands'), 'show', 'hidden');
						m8.runCalls(animations.challenge_3_dna_strands.intro);
					}, 1000);
				})
			}
		}))
		// ------ challenge_3_dna_strands ------
		.addController(getSceneController({
			container: '#challenge_3_dna_strands .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_3_dna_strands.outro);
					setTimeout(function() {
						m8.outro($('#challenge_3_dna_strands'), 'hide', 'hidden');
						m8.intro($('#challenge_3_dna_selections'), 'show', 'hidden');
						m8.runCalls(animations.challenge_3_dna_selections.intro);
					}, 2000);
				})
			}
		}))
		// ------ challenge_3_dna_selections ------
		.addController(getSceneController({
			container: '#challenge_3_dna_selections .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_3_dna_selections.outro);
					setTimeout(function() {
						m8.outro($('#challenge_3_dna_selections'), 'hide', 'hidden');
						m8.intro($('#challenge_3_dna_congrats'), 'show', 'hidden');
						m8.runCalls(animations.challenge_3_dna_congrats.intro);
					}, 1000);
				})
			}
		}))
		.addController(getProgressChosenController({
			name: 'chosen_dna',
			container: '#challenge_3_dna_selections .scene',
			checks: '.embryo-container',
			setData: function (data) {
				Progress.data.chosen_dna = data;
			},
			getData: function () {
				return Progress.data.chosen_dna;
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
			container: '#challenge_3_dna_selections .scene'
		}))
		.addControllerLazy(getDialogController({
			container: '#challenge_3_dna_selections .scene',
			total: 1,
			opened: 0,
			next: $('#challenge_3_dna_selections .next'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
        
        if (!opener.hasClass('active')) {
          return false;
        }
        
				$('#embryo_sorting_activity .'+opener.data('animal')+'-hotspot')
					.css('opacity','0.4')
					.removeAttr('dialog',true);

				var selected_elements = Progress.data.chosen_dna;
				var counter = 2;

				selected_elements.sort().forEach(function(element){
					m8.runCalls(function() {
						this.animator('#challenge_3_dna_selections .row-1 .checkbox-column.' + element + ' .checkbox-selected-container', function () {
							this.play('checkboxCheck ~' + counter + 's');
						})
					});
					var timeoutVal = counter *1000;
					setTimeout(function() {
						sounds.marker.play();
					}, timeoutVal);
					counter++;
				}.bind(this));

				$('#challenge_3_dna_selections .notebook-modal .note-1, #challenge_3_dna_selections .notebook-modal .note-1-bullet')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');

				counter+=2;

				$('#challenge_3_dna_selections .notebook-modal .note-2, #challenge_3_dna_selections .notebook-modal .note-2-bullet')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');

				counter+=2;

				$('#challenge_3_dna_selections .notebook-modal .continue-message, #challenge_3_dna_selections .notebook-modal .continue-button')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');
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
					m8.intro($('#challenge_3_dna_selections'), 'show', 'hidden');
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
		// ------ challenge_3_dna_congrats ------
		.addController(getSceneController({
			container: '#challenge_3_dna_congrats .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.continue');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					$('#challenge_3_dna_congrats .scene')
						.animators()
						.play('fadeOut')
						.applyInitialState()
						.off()
						.once('finished', function () {
							window.location = 'challenge-4.html';
						})
					;
				})
			}
		}))
	,


};
