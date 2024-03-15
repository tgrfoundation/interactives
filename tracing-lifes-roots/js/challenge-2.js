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
	challenge_2_zoo_lab: {
		intro: function() {
			this.animator('#challenge_2_zoo_lab .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#challenge_2_zoo_lab .background-fade', function () {
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
			this.animator('#challenge_2_zoo_lab .section-title', function () {
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
			this.animator('#challenge_2_zoo_lab .page-description', function () {
				this.play('fadeInUp ~5s 2s');
			});
			this.animator('#challenge_2_zoo_lab .next', function () {
				this.play('fadeInUp ~7s');
			});
		},
		outro: function() {
			this.animator('#challenge_2_zoo_lab .scene', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_2_zoo_lab .next', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	challenge_2_skeleton_reveal: {
		intro: function() {
			this.animator('#challenge_2_skeleton_reveal .scene', function () {
				this.play('fadeIn 1s');
			});
			this.animator('#challenge_2_skeleton_reveal .icon', function () {
				this.play('fadeInLeft ~1s');
			});
			this.animator('#challenge_2_skeleton_reveal .page-description', function () {
				this.play('fadeInLeft ~1.5s');
			});
			this.animator('#challenge_2_skeleton_reveal .dialog-instructions', function () {
				this.play('fadeInDown ~2s');
			});
			this.animator('#challenge_2_skeleton_reveal .animal-duck', function () {
				this.play('fadeInUpFixed ~3s');
			});
			this.animator('#challenge_2_skeleton_reveal .animal-platypus', function () {
				this.play('fadeInUpFixed ~3.2s');
			});
			this.animator('#challenge_2_skeleton_reveal .animal-otter', function () {
				this.play('fadeInUpFixed ~3.4s');
			});
			this.animator('#challenge_2_skeleton_reveal .animal-echidna', function () {
				this.play('fadeInUpFixed ~3.6s');
			});
		},
		outro: function() {
			this.animator('#challenge_2_skeleton_reveal .page-description', function () {
				this.play('fadeOutLeft');
			});
			this.animator('#challenge_2_skeleton_reveal .dialog-instructions', function () {
				this.play('fadeOutUp ~0.2s');
			});
			this.animator('#challenge_2_skeleton_reveal .animal-duck', function () {
				this.play('fadeOut ~0.4s');
			});
			this.animator('#challenge_2_skeleton_reveal .animal-platypus', function () {
				this.play('fadeOut ~0.6s');
			});
			this.animator('#challenge_2_skeleton_reveal .animal-otter', function () {
				this.play('fadeOut ~0.8s');
			});
			this.animator('#challenge_2_skeleton_reveal .animal-echidna', function () {
				this.play('fadeOut ~1s');
			});
		}
	},
	challenge_2_humerus_reveal: {
		intro: function() {
			this.animator('#challenge_2_humerus_reveal .page-description', function () {
				this.play('fadeInLeft ~1.5s');
			});
			this.animator('#challenge_2_humerus_reveal .dialog-instructions', function () {
				this.play('fadeInDown ~2s');
			});
			this.animator('#challenge_2_humerus_reveal .animal-duck', function () {
				this.play('fadeIn ~3s');
			});
			this.animator('#challenge_2_humerus_reveal .animal-platypus', function () {
				this.play('fadeIn ~3.2s');
			});
			this.animator('#challenge_2_humerus_reveal .animal-otter', function () {
				this.play('fadeIn ~3.4s');
			});
			this.animator('#challenge_2_humerus_reveal .animal-echidna', function () {
				this.play('fadeIn ~3.6s');
			});
		},
		outro: function() {
			this.animator('#challenge_2_humerus_reveal .next', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_2_humerus_reveal .page-description', function () {
				this.play('fadeOutLeft');
			});
			this.animator('#challenge_2_humerus_reveal .page-description.post-activity', function () {
				this.play('fadeOutLeft');
			});
			this.animator('#challenge_2_humerus_reveal .dialog-instructions', function () {
				this.play('fadeOutUp ~0.2s');
			});
			this.animator('#challenge_2_humerus_reveal .animal-duck', function () {
				this.play('fadeOut ~0.4s');
			});
			this.animator('#challenge_2_humerus_reveal .animal-platypus', function () {
				this.play('fadeOut ~0.6s');
			});
			this.animator('#challenge_2_humerus_reveal .animal-otter', function () {
				this.play('fadeOut ~0.8s');
			});
			this.animator('#challenge_2_humerus_reveal .animal-echidna', function () {
				this.play('fadeOut ~1s');
			});
		}
	},
	challenge_2_skull_selection: {
		intro: function() {
			this.animator('#challenge_2_skull_selection .skull-dnd-container', function () {
				this.play('fadeInLeft ~1.5s');
			});
			this.animator('#challenge_2_skull_selection .dialog-instructions', function () {
				this.play('fadeInDown ~2s');
			});
			this.animator('#challenge_2_skull_selection .animal-duck', function () {
				this.play('fadeIn ~3s');
			});
			this.animator('#challenge_2_skull_selection .duck-skull', function () {
				this.play('fadeIn ~3s');
			});

			this.animator('#challenge_2_skull_selection .animal-platypus', function () {
				this.play('fadeIn ~3.2s');
			});
			this.animator('#challenge_2_skull_selection .platypus-skull', function () {
				this.play('fadeIn ~3.2s');
			});

			this.animator('#challenge_2_skull_selection .animal-otter', function () {
				this.play('fadeIn ~3.4s');
			});
			this.animator('#challenge_2_skull_selection .otter-skull', function () {
				this.play('fadeIn ~3.4s');
			});

			this.animator('#challenge_2_skull_selection .animal-echidna', function () {
				this.play('fadeIn ~3.6s');
			});
			this.animator('#challenge_2_skull_selection .echidna-skull', function () {
				this.play('fadeIn ~3.6s');
			});
		},
		outro: function() {
			this.animator('#challenge_2_skull_selection .skull-dnd-container', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 1,
						},
						'100': {
							opacity: 0.3,
						}
					}
				}, {
					duration: 1000,
				});
			});
			this.animator('#challenge_2_skull_selection .next', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_2_skull_selection .submitted-text', function () {
				this.play('fadeOut');
			});
			this.animator('#challenge_2_skull_selection .dialog-instructions', function () {
				this.play('disabledOut ~0.2s');
			});

			this.animator('#challenge_2_skull_selection .animal-duck', function () {
				this.play('disabledOut ~0.4s');
			});
			this.animator('#challenge_2_skull_selection .duck-skull', function () {
				this.play('disabledOut ~0.4s');
			});

			this.animator('#challenge_2_skull_selection .animal-platypus', function () {
				this.play('disabledOut ~0.6s');
			});
			this.animator('#challenge_2_skull_selection .platypus-skull', function () {
				this.play('disabledOut ~0.6s');
			});

			this.animator('#challenge_2_skull_selection .animal-otter', function () {
				this.play('disabledOut ~0.8s');
			});
			this.animator('#challenge_2_skull_selection .otter-skull', function () {
				this.play('disabledOut ~0.8s');
			});

			this.animator('#challenge_2_skull_selection .animal-echidna', function () {
				this.play('disabledOut ~1s');
			});
			this.animator('#challenge_2_skull_selection .echidna-skull', function () {
				this.play('disabledOut ~1s');
			});
		}
	},
	challenge_2_skeleton_selection: {
		intro: function() {
			this.animator('#challenge_2_skeleton_selection .animal-skull', function () {
				this.play('fadeOut 0s');
			});
			this.animator('#challenge_2_skeleton_selection .dialog-instructions', function () {
				this.play('fadeInDown ~1s');
			});
			this.animator('#challenge_2_skeleton_selection .animal-duck', function () {
				this.play('fadeIn ~2s');
			});
			this.animator('#challenge_2_skeleton_selection .animal-platypus', function () {
				this.play('fadeIn ~2.2s');
			});
			this.animator('#challenge_2_skeleton_selection .animal-otter', function () {
				this.play('fadeIn ~2.4s');
			});
			this.animator('#challenge_2_skeleton_selection .animal-echidna', function () {
				this.play('fadeIn ~2.6s');
			});
			this.animator('#challenge_2_skeleton_selection .my-notebook-icon', function () {
				this.play({
					keyframe: {
						'0': {
							opacity: 0,
							translateY: 100
						},
						'100': {
							opacity: 0.3,
							translateY: 0
						}
					}
				}, {
					duration: 1000,
					delay: 3000
				});
			});
		},
		outro: function() {
			this.animator('#challenge_2_skeleton_selection .scene', function () {
				this.play('fadeOut 1s');
			});
			this.animator('#challenge_2_skeleton_selection .next', function () {
				this.play('fadeOut 1s');
			});
		}
	},
	challenge_2_skeleton_congrats: {
		intro: function() {
			this.animator('#challenge_2_skeleton_congrats .scene', function () {
				this.play('fadeIn 1s');
			});
		},
		outro: function() {
			this.animator('#challenge_2_skeleton_congrats .scene', function () {
				this.play('fadeOut 1s');
			});
		}
	}
};

var scenes = {
	intro_screens: new ScrollMagic.Scene({triggerElement: '#challenge_2_zoo_lab', duration: '200%'})
		.addTo(controller)
		// ------ Splash Screen ------
		.addController(getVisibilityController({
			container: '#challenge_2_zoo_lab',
			//container: '#challenge_2_skeleton_congrats',
			onImagesLoaded: function () {
				m8.runCalls(animations.challenge_2_zoo_lab.intro);
				//m8.runCalls(animations.challenge_2_skull_selection.intro);
			}
		}))

		// ------ Challenge 2 zoo lab ------
		.addController(getSceneController({
			container: '#challenge_2_zoo_lab .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_2_zoo_lab.outro);
					setTimeout(function() {
						m8.outro($('#challenge_2_zoo_lab'), 'hide', 'hidden');
						m8.intro($('#challenge_2_skeleton_reveal'), 'show', 'hidden');
						m8.runCalls(animations.challenge_2_skeleton_reveal.intro);
					}, 1000);
				})
			}
		}))
		// ------ Skeleton Reveal ------
		.addController(getSceneController({
			container: '#challenge_2_skeleton_reveal .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_2_skeleton_reveal.outro);
					setTimeout(function() {
						m8.outro($('#challenge_2_skeleton_reveal'), 'hide', 'hidden');
						m8.intro($('#challenge_2_humerus_reveal'), 'show', 'hidden');
						m8.runCalls(animations.challenge_2_humerus_reveal.intro);
					}, 2000);
				})
			}
		}))
		.addControllerLazy(getDialogController({
			container: '#challenge_2_skeleton_reveal .scene',
			total: 4,
			opened: 0,
			next: $('#challenge_2_skeleton_reveal .next'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
				setTimeout(function() {
					$('#challenge_2_skeleton_reveal .animal-' + opener.data('animal'))
						.css('opacity', '0.4')
						.removeAttr('dialog', true);

					$('#challenge_2_skeleton_reveal .' + opener.data('animal') + '-hotspot .animal-skeleton').removeClass('hidden');
					$('#challenge_2_skeleton_reveal .' + opener.data('animal') + '-normal').addClass('hidden');
				}, 2000);
				$('#challenge_2_skeleton_reveal .' + opener.data('animal') + '-modal .image-skeleton').removeClass('hidden').animator().play('fadeIn ~1s 4s').applyInitialState();
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
					m8.intro($('#challenge_2_skeleton_reveal'), 'show', 'hidden');
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

		// ------ Humerus Reveal ------
		.addController(getSceneController({
			container: '#challenge_2_humerus_reveal .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_2_humerus_reveal.outro);
					setTimeout(function() {
						m8.outro($('#challenge_2_humerus_reveal'), 'hide', 'hidden');
						m8.intro($('#challenge_2_skull_selection'), 'show', 'hidden');
						m8.runCalls(animations.challenge_2_skull_selection.intro);
					}, 2000);
				})
			}
		}))
		.addControllerLazy(getDialogController({
			container: '#challenge_2_humerus_reveal .scene',
			total: 4,
			opened: 0,
			next: $('#challenge_2_humerus_reveal .next'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
				setTimeout(function() {
					$('#challenge_2_humerus_reveal .animal-'+opener.data('animal'))
						.removeAttr('dialog',true);
						// .css('opacity','0.4')

					$('#challenge_2_humerus_reveal .' + opener.data('animal') + '-hotspot .animal-humerus').removeClass('hidden');
				}, 1000);
				$('#challenge_2_humerus_reveal .' + opener.data('animal') + '-modal .image-humerus').removeClass('hidden').animator().play('fadeIn ~1s 3s').applyInitialState();

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
					m8.intro($('#challenge_2_humerus_reveal'), 'show', 'hidden');
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
					$('#challenge_2_humerus_reveal .page-description.instructions').hide();
					$('#challenge_2_humerus_reveal .page-description.post-activity')
						.removeClass('hidden')
						.animator()
						.play('fadeInRight ~1s');
				}
			}
		}))

		// ------ Skull Selection ------
		.addController(getSceneController({
			container: '#challenge_2_skull_selection .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_2_skull_selection.outro);
					setTimeout(function() {
						$('.animal-skull').addClass('hidden');
						m8.outro($('#challenge_2_skull_selection'), 'hide', 'hidden');
						m8.intro($('#challenge_2_skeleton_selection'), 'show', 'hidden');
						m8.runCalls(animations.challenge_2_skeleton_selection.intro);
					}, 2000);
				})
			}
		}))
		.addControllerLazy(getDialogController({
			container: '#challenge_2_skull_selection .scene',
			total: 4,
			opened: 0,
			next: $('#challenge_2_skull_selection .next'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
				$('#challenge_2_humerus_reveal .animal-'+opener.data('animal'))
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
					m8.intro($('#challenge_2_skull_selection'), 'show', 'hidden');
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
			name: 'skull-dnd-container',
			container: '#challenge_2_skull_selection .skull-dnd-container',
			resetOn: 'showDialog',
			tries: 1,
			correctOnFailure: false,
			filterDraggable: '.animal-skull',
			filterDroppable: '.skull-target-box',
			onDrop: function ($this, ui, evt) {
				sounds.hover.volume(0.4, sounds.hover.play());
				// console.log("Testing");
				// console.log('this',$this.eq(0).prop('src', 'images/challenge-2/c2-skull-target-box-selected.png'));
				// console.log('ui',ui);
				// console.log('evt', evt);
				// Change dragged Skull to be display None
				evt.draggable.eq(0).addClass('hidden');

				// Update Target image to be correct animal skull
				var animal_dragged = evt.draggable.eq(0).data('animal');
				var target_box = $this.eq(0).data("target-box");
				var $target_box_image = $('#challenge_2_skull_selection .skull-target-box-image-'+target_box);
				$target_box_image.prop('src', 'images/challenge-2/c2-'+animal_dragged+'-target-skull.png');
				$target_box_image.addClass(animal_dragged);

				// Update target-box-container to get the active state
				var $target_box_container = $('#challenge_2_skull_selection .skull-target-box-container-'+target_box);
				$target_box_container.addClass('active');

				var $target_box_holder = $('#challenge_2_skull_selection .skull-target-box-'+target_box);
				$target_box_holder.prop('src', 'images/challenge-2/c2-skull-target-box-selected.png');

				// Update the name of the animal to be the correct drag
				var $drop_area = $('#challenge_2_skull_selection .skull-drop-area-'+target_box);
				$drop_area.css('opacity', 1);
				var $drop_area_text = $drop_area.find('.skull-drop-area-text');
				$drop_area_text.html(animal_dragged);

				// Set the clear button to be visible
				$('#challenge_2_skull_selection .clear-button').removeClass('hidden');

			},
			onSubmit: function (success) {
				$('#challenge_2_skull_selection .next').removeClass('hidden');
				$('#challenge_2_skull_selection .animal, #challenge_2_skull_selection .dialog-instructions, #challenge_2_skull_selection .animal-skull')
					.animators()
					.play('fadeToDisabled');
				sounds.good.play();
				$('#challenge_2_skeleton_selection .skull-dnd-container').html($('#challenge_2_skull_selection .skull-dnd-container').html());
				$('#challenge_2_skeleton_selection .dialog-instructions .choice-1').html($('#challenge_2_skull_selection .skull-drop-area-1 .skull-drop-area-text').html());
				$('#challenge_2_skeleton_selection .dialog-instructions .choice-2').html($('#challenge_2_skull_selection .skull-drop-area-2 .skull-drop-area-text').html());
			},
			onApplyCorrect: function() {
				$('#challenge_2_skull_selection .next').removeClass('hidden');
				//m8.runCalls(animations.hazard_dnd.screenUnlocked);
			}
		}))

		// ------ Skeleton Selection ------
		.addController(getSceneController({
			container: '#challenge_2_skeleton_selection .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.next');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					m8.runCalls(animations.challenge_2_skeleton_selection.outro);
					setTimeout(function() {
						m8.outro($('#challenge_2_skeleton_selection'), 'hide', 'hidden');
						m8.intro($('#challenge_2_skeleton_congrats'), 'show', 'hidden');
						m8.runCalls(animations.challenge_2_skeleton_congrats.intro);
					}, 1000);
				})
			}
		}))
		.addController(getProgressChosenController({
			name: 'chosen_skeleton',
			container: '#challenge_2_skeleton_selection .scene',
			checks: '.animal-skeleton-container',
			setData: function (data) {
				Progress.data.chosen_skeleton = data;
			},
			getData: function () {
				return Progress.data.chosen_skeleton;
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
			container: '#challenge_2_skeleton_selection .scene'
		}))
		.addControllerLazy(getDialogController({
			container: '#challenge_2_skeleton_selection .scene',
			total: 1,
			opened: 0,
			next: $('#challenge_2_skeleton_selection .next'),
			onReset: function() {
				this.opened = 0;
				this.dialogs.removeData('opened');
				this.next.addClass('hidden');
			},
			onShowRequest: function(opener, dialog) {
        
        if (!opener.hasClass('active')) {
          return false;
        }
        
				var selected_elements = Progress.data.chosen_skeleton;
				var counter = 2;

				selected_elements.sort().forEach(function(element){
					m8.runCalls(function() {
						this.animator('#challenge_2_skeleton_selection .row-1 .checkbox-column.' + element + ' .checkbox-selected-container', function () {
							this.play('checkboxCheck ~' + counter + 's');
						})
					});
					var timeoutVal = counter *1000;
					setTimeout(function() {
						sounds.marker.play();
					}, timeoutVal);
					counter++;
				}.bind(this));

				$('#challenge_2_skeleton_selection .notebook-modal .note-1, #challenge_2_skeleton_selection .notebook-modal .note-1-bullet')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');

				counter+=2;

				$('#challenge_2_skeleton_selection .notebook-modal .note-2, #challenge_2_skeleton_selection .notebook-modal .note-2-bullet')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');

				counter+=2;

				$('#challenge_2_skeleton_selection .notebook-modal .continue-message, #challenge_2_skeleton_selection .notebook-modal .continue-button')
					.animators()
					.play('fadeIn ~'+counter +'s 2s');
			},
			onHideRequest: function(closer, dialog) {
				sounds.hover.play();
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.boop.play();
					m8.intro($('#challenge_2_skeleton_selection'), 'show', 'hidden');
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

		// ------ Skeleton Congrats ------
		.addController(getSceneController({
			container: '#challenge_2_skeleton_congrats .scene',
			onRegister: function () {
				this.next = this.container.parent().find('.continue');
			},
			onBoot: function() {
				this.next.click(function() {
					sounds.transition.play();
					$('#challenge_2_skeleton_congrats .scene')
						.animators()
						.play('fadeOut')
						.applyInitialState()
						.off()
						.once('finished', function () {
							window.location = 'challenge-3.html';
						})
					;
				})
			}
		}))
	,
};
