
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
  volcano_rescue: {
    startDuring: function() {
      this.animator('#screen5 .loader.dots', function() {
        this.set({
          translate: '-50%'
        });
      });
      this.animator('#screen5 .loader.image', function() {
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
      this.animators('#screen5 .loader.dots span', function() {
        this.sequence(500, 'linear').play('fadeIn yoyo 2s z1s inf');
      });
    },
    endDuring: function() {
      this.animators('#screen5 .loader.dots span, #screen5 .loader.image', function() {
        this.stop().destroy();
      });
      this.animator('#screen5 .loader-background', function() {
        this.play('fadeOut 0.2s');
      });
    },
    intro: function() {
      this.call(function() {
        $('#screen5 .dialog.h1').removeClass('hidden');
        $('#screen5 .dialog.h2').addClass('hidden');
      });
      this.animator('#screen5 .scene', function() {
        this.play('fadeIn');
      });
      this.animator('#screen5 .container', function() {
        this.play('backdrop ~1s');
      });
      this.animator('#screen5 .dialog.h1 .blue', function() {
        this.play('fadeInDown ~1s');
      });
      this.animators('#screen5 .thrust, #screen5 .lift, #screen5 .draga', function() {
        this.sequence(500, 'linear').play('fadeInUp ~2s');
      });
      this.animators('#screen5 .progress > *', function() {
        this.sequence(250, 'linear').play('fadeInDown ~1s');
      });
    },
  },
  landing: {
    intro: function() {
      this.animator('#landing .rover-arm', function() {
        this.play({
          initial: {
            origin: [45, 64]
          },
          values: {
            rotate: [0, -45, 0, 45, 0]
          },
          units: {
            origin: 'px'
          }
        }, '5s ~1s linear');
      });
      this.animator('#landing .radio', function() {
        this.play({
          values: {
            scale: [0, 2],
            opacity: [0, 1, 0]
          }
        }, '~7s linear x3 1s');
      });
      this.animator('#landing .continue', function() {
        this.play('fadeIn ~13s');
      });
      this.animators('#landing .samples span', function() {
        this.sequence(200, 'linear').play('fadeIn 0.5s ~10s');
      });
    }
  },
  screen5: {
    startDuring: function() {
      this.animator('#screen5 .loader.dots', function() {
        this.set({
          translate: '-50%'
        });
      });
      this.animator('#screen5 .loader.image', function() {
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
      this.animators('#screen5 .loader.dots span', function() {
        this.sequence(500, 'linear').play('fadeIn yoyo 2s z1s inf');
      });
    },
    endDuring: function() {
      this.animators('#screen5 .loader.dots span, #screen5 .loader.image', function() {
        this.stop().destroy();
      });
      this.animator('#screen5 .loader-background', function() {
        this.play('fadeOut 0.2s');
      });
    },
    intro: function() {
      this.call(function() {
        $('#screen5 .dialog.h1').removeClass('hidden');
        $('#screen5 .dialog.h2').addClass('hidden');
      });
      this.animator('#screen5 .scene', function() {
        this.play('fadeIn');
      });
      this.animator('#screen5 .container', function() {
        this.play('backdrop ~1s');
      });
      this.animator('#screen5 .dialog.h1 .blue', function() {
        this.play('fadeInDown ~1s');
      });
      this.animators('#screen5 .thrust, #screen5 .lift, #screen5 .draga', function() {
        this.sequence(500, 'linear').play('fadeInUp ~2s');
      });
      this.animators('#screen5 .progress > *', function() {
        this.sequence(250, 'linear').play('fadeInDown ~1s');
      });
    },
    liftoff: {
      setup: function() {
        this.rocketPath = m8.path({
          type: 'catmull-rom', 
          calculator: '2d',
          points: [
            [472, 399],
            [472, -1200],
            [800, -2400],
            [1200, -4000],
            [600, -5400],
            [500, -7300],
            [1100, -7300],
            [1200, -6200],
            [1000, -5300],
            [800, -4300],
            [700, -3200],
            [1200, -2200],
            [875, -1200]//,
            //[875, 399]
          ]
        });
        
        this.rocketPathUniform = m8.path({
          type: 'uniform',
          path: this.rocketPath,
          n: 1000
        });
        
        this.rocketPathFirst = m8.path({
          type: 'sub',
          path: this.rocketPathUniform,
          start: 0.0,
          end: 0.56
        });
        
        this.rocketPathSecond = m8.path({
          type: 'sub',
          path: this.rocketPathUniform,
          start: 0.56,
          end: 1.0
        });
      },
      start: function() {
        var scene = scenes.screen5.liftoff;
        var RT = scene.rocketTransform.transform;
        var WT = scene.worldTransform.transform;
        var rocketPath = this.rocketPathFirst;
        
        // Lower Gantry
        m8(scene.gantry).play({
          values: {
            radians: [0, 0.523599] // 30 deg
          }
        }, 'linear 3s');
        
        // Vibrate Rocket
        m8(scene.rocket).play({
          values: {
            originX: [0.49, -0.49]
          },
          final: {
            originX: 0.5
          }
        }, '0.25s linear-yoyo @0.125s ~1s x20');
        
        // Move Rocket to Deploy Spot
        m8(RT).play({
          point: {
            x: function(i, delta) {
              return rocketPath.compute(RT, delta).x;
            },
            y: function(i, delta) {
              return rocketPath.compute(RT, delta).y;
            },
            radians: this.getRadiansFromPoint(RT, Math.PI * 0.5),
            scale: this.getScaleFromHeight(RT)
          }
        }, '30s quad');
        
        // Move Camera with Rocket
        m8(WT).play({
          point: {
            y: function() {
              var rest = 400 - RT.y;
              return Math.max(0, rest - 150);
            }
          }
        }, '30s quad');
        
        // Once the rocket movement is finished, run deploy
        m8(RT).off().once('finished', function() {
          animations.screen5.liftoff.deploy();
          sounds.booster.fade(0.2, 0, 500);
        });
        
        // Run!
        this.run();
      },
      deploy: function() {
        var scene = scenes.screen5.liftoff;
        var point = {x: 0, y: 0};
        var start = this.rocketPathFirst.compute({x: 0, y: 0}, 1.0);
        var end = scene.planet;
        var roverPath = m8.path({
          calculator: '2d',
          type: 'tween',
          start: start,
          end: end
        })
        
        // Deploy rover from rocket
        m8(scene.rover).play({
          values: {
            scale: [0.1, 0]
          },
          point: {
            x: function(i, delta) {
              return roverPath.compute(point, delta).x;
            },
            y: function(i, delta) {
              return roverPath.compute(point, delta).y;
            }
          }
        }, '10s quad');
        
        // Sounds
        sounds.detach.play();
        
        // Once the rover has landed, show landing screen
        m8(scene.rover).off().once('finished', function() {
          m8.intro($('#landing'), 'show', 'hidden');
          m8.runCalls(animations.landing.intro);
          setTimeout(function() {
            sounds.morse.fade(0, 1.0, 7000, sounds.morse.play());
          }, 6000);
        });
      },
      land: function() {
        var scene = scenes.screen5.liftoff;
        var RT = scene.rocketTransform.transform;
        var WT = scene.worldTransform.transform;
        var LT = scene.landingTransform.transform;
        var rocketPath = this.rocketPathSecond;
        var desiredRadians = this.getRadiansFromPoint(RT, Math.PI * 0.5);
        
        // Move Rocket to Deploy Spot
        m8(RT).play({
          point: {
            x: function(i, delta) {
              return rocketPath.compute(RT, delta).x;
            },
            y: function(i, delta) {
              return rocketPath.compute(RT, delta).y;
            },
            radians: function(i, delta) {
              var current = RT.radians;
              var desired = desiredRadians(i, delta);
              if (delta > 0.9) {
                var relative = (delta - 0.9) / 0.1;
                var target = Math.PI * 2.0;
                return (target - desired) * relative + desired;
              }
              return desired;
            },
            scale: this.getScaleFromHeight(RT, 286/487)
          }
        }, '30s quad');
        
        // Move Camera with Rocket
        m8(WT).play({
          point: {
            y: function() {
              var rest = 368 - RT.y;
              return Math.max(0, rest);
            }
          }
        }, '30s');
        
        // Sounds
        sounds.booster.fade(0, 0.2, 1000, sounds.booster.play());
        
        // Once the rocket movement is finished, run deploy
        m8(RT).once('finished', function() {
          var scene = scenes.screen5.liftoff;
          m8(scene.landing)
            .set({visible: true, enabled: true})
          ;
          m8(LT)
            .set({y: -WT.y})
          ;
          m8(scene.landingMod)
            .tween('alpha', 0, 1, '2s')
            .applyInitialState()
          ;
          
          sounds.booster.fade(0.2, 0, 500);
          
          m8.intro($('#screen5 .land-instructions, #screen5 .land-instructions [data-show]'), 'show', 'hidden');
          
          scene.highlightControls();
        });
        
        // Run!
        this.run();
      },
      tried: false,
      simulate: function() {
        var scene = scenes.screen5.liftoff;
        var thrust = scene.getThrust();
        var release = scene.getRelease();
        var RT = scene.rocketTransform.transform;
        var WT = scene.worldTransform.transform;
        var LT = scene.landingTransform.transform;
        var thrusting = true;
        
        m8(WT).set({y: 0});
        m8(LT).set({y: 0});
        m8(scene.landArea).tween('y', 0, scene.landArea.endY, '10s linear');
        m8(scene.landingRocket).play({
          values: {
            y: [
              scene.landingRocket.y,
              scene.landingRocket.y - 100,
              scene.landingRocket.y + 40
            ]
          },
          deltas: {
            y: [0, 0.625, 1.0]
          }
        }, '10s linear');
        
        m8(scene.landingRocket).once('finished', function() {
          if (!scene.canLand()) {
            this.play({  
              initial: {
                originY: 0.9, 
                originX: 0.5,
                y: this.subject.y + (this.subject.h * this.subject.originY) * 0.9
              },
              values: {
                radians: [0, Math.PI * 0.5]
              }
            }, '3s linear');
            
            if (animations.screen5.liftoff.tried) {
              this.off().once('finished', function() {
                m8.intro($('#screen5 .nice-try'), 'show', 'hidden');
                setTimeout(function() {
                  m8.intro($('#congrats3'), 'show', 'hidden');
                  m8.runCalls(animations.congrats3.intro);
                }, 3000);
              });
            } else {
              this.off().once('finished', function() {
                m8.intro($('#screen5 .try-again'), 'show', 'hidden');
                setTimeout(prepareLand, 3000);
              });
            }
            
            animations.screen5.liftoff.tried = true;
            
            sounds.bad.volume(0.5, sounds.bad.play());
          } else {
            this.play({
              point: {
                radians: function() {
                  return 0;
                }
              }
            }, '5s linear');
            
            this.off().once('finished', function() {
              m8.intro($('#congrats3'), 'show', 'hidden');
              m8.runCalls(animations.congrats3.intro);
            });
            
            sounds.good.volume(0.5, sounds.good.play());
          }
          thrusting = false;
        });
        
        // Sounds
        var takeoff = sounds.takeoff.play();
        setTimeout(function() {
          sounds.takeoff.fade(0.7, 0, 2000, takeoff);
        }, 8000);
        
        // Run!
        this.run(function(dt) {
          if (thrusting) {
            var particle = scene.fireParticle.clone();
            var bottom = scene.landingRocket.toWorld(scene.landingRocket.w * 0.5, scene.landingRocket.h * 0.82);
            particle.x = bottom.x;
            particle.y = bottom.y;
            particle.radians = Math.random() * 6.28;
            scene.landingParticles.add(particle);
          }
          var objects =scene.landingParticles.objects;
          var BOTTOM = 624;
          var BASE = 570;
          
          for (var i = objects.length - 1; i >= 0; i--) {
            var object = objects[i];
            var by = scene.landArea.bottom() - BOTTOM;
            var ry = object.y;
            if (ry > by + BASE) {
              object.alive = false;
              var smoke = scene.smokeParticle.clone();
              smoke.x = object.x;
              smoke.y = ry + by;
              smoke.radians = Math.random() * 6.28;
              smoke.velocityY = (Math.random() * -100);
              smoke.velocityX = (Math.random() * 400 - 200);
              scene.landingSmoke.add(smoke);
            }
          }
        });
      },
      getRadiansFromPoint: function(point, offset) {
        var px = point.x;
        var py = point.y;
        var pangle = Number.MAX_VALUE;
        return function() {
          var cx = point.x;
          var cy = point.y;
          var dx = cx - px;
          var dy = cy - py;
          px = cx;
          py = cy;
          if (dx == 0 && dy == 0) {
            pangle = 0;
            return 0;
          }
          var angle = Math.atan2(dy, dx) + offset;
          if (pangle === Number.MAX_VALUE) {
            pangle = angle;
          }
          var smoothed = (angle + pangle) * 0.5;
          pangle = angle;
          return smoothed;
        };
      },
      getScaleFromHeight: function(pt, max) {
        // 399 -> -1000 = 1.0
        // -1000 -> -3000 = 0.3
        // -6000 -> -7300 = 0.1
        var WORLD_H = 8668;
        var VIEW_H = 736;
        var MAX = max || 1.0;
        var b = 399;
        var scale = new anim8.PathDelta(0, 0, 
          [MAX, MAX, 0.3, 0.3, 0.05],
          [0, 1000 + b, 3000 + b, 5000 + b, 7300 + b]
        );
        
        return function() {
          var d = ((pt.y + (WORLD_H - VIEW_H)) / WORLD_H);
          return scale.compute(0, 1 - d);
        };
      },
      run: function(callOnUpdate) {
        var scene = scenes.screen5.liftoff;
        var RT = scene.rocketTransform.transform;
        var start = anim8.now();
        var last = start;
        
        var stopSmokePixelDuration = 350;
        var stopSmokeAt = scene.rocket.bottom() - stopSmokePixelDuration;
        var lastY = 0;
        
        var releaseParticle = function(dt) {
          var killAt = scene.gantry.bottom() - scene.rocketTransform.transform.y;
          
          var y = scene.rocket.bottom() - 10;
          var x = scene.rocket.x + Math.random() * 40 - 25;
          
          if (killAt === lastY) {
              return;
          }
          
          lastY = killAt;
          
          var particle = scene.fireParticle.clone();
          particle.x = x;
          particle.y = y;
          particle.radians = Math.random() * 6.28;
          scene.particles.add(particle);
          
          var objects = scene.particles.objects;
          
          for (var i = objects.length - 1; i >= 0; i--) {
            var object = objects[ i ];
            if (object.y > killAt) {
              object.alive = false;
              // DONT release smoke if the fire is not facing the ground
              if (y > stopSmokeAt) {
                releaseSmoke(object);
              }
            }
          }
        };
        
        var releaseSmoke = function(dead) {
          var smoke = scene.smokeParticle.clone();
          var velocityScale = Math.min(1, 1 - (stopSmokeAt - scene.rocket.bottom()) / stopSmokePixelDuration);
          smoke.x = dead.x + scene.rocketTransform.transform.x;
          smoke.y = dead.y + scene.rocketTransform.transform.y;
          smoke.radians = Math.random() * 6.28;
          smoke.velocityY = (Math.random() * -100) * velocityScale;
          smoke.velocityX = (Math.random() * 400 - 200) * velocityScale;
          scene.smoke.add(smoke);
        };
        
        var updateCanvas = function() {
          var current = anim8.now();
          var dt = current - last;
          
          releaseParticle(dt);
          
          if (callOnUpdate) {
            callOnUpdate(dt);
          }
          
          scene.renderer.update(dt);
          scene.renderer.refresh();
          last = current;
        };
        
        m8.on('end', updateCanvas);
        m8.on('finished', function() {
          m8.off('end', updateCanvas);
          scene.particles.clear();
          scene.smoke.clear();
          scene.renderer.refresh();
        });
      }
    }
  },
  congrats2: {
    intro: function() {
      this.animators('#congrats2 .progress > *', function() {
        this.sequence(250, 'linear').play('fadeInDown ~1s');
      });
      this.animator('#congrats2 .blue-heading', function() {
        this.play('fadeInLeft ~1s');
      });
      this.animators('#congrats2 .to-our, #congrats2 .great-work, #congrats2 .learned, #congrats2 .now, #congrats2 .continue, #congrats2 .twf, #congrats2 .de, #congrats2 .copyright', function() {
        this.sequence(500, 'linear').play('fadeIn ~2s');
      });
    }
  },
  congrats3: {
    intro: function() {
      this.animators('#congrats3 .progress > *', function() {
        this.sequence(250, 'linear').play('fadeInDown ~1s');
      });
      this.animator('#congrats3 .blue-heading', function() {
        this.play('fadeInLeft ~1s');
      });
      this.animators('#congrats3 .to-our, #congrats3 .great-work, #congrats3 .learned, #congrats3 .now, #congrats3 .continue, #congrats3 .twf, #congrats3 .de, #congrats3 .copyright', function() {
        this.sequence(500, 'linear').play('fadeIn ~2s');
      });
    }
  },
  congrats4: {
    intro: function() {
      this.animators('#congrats4 .progress > *', function() {
        this.sequence(250, 'linear').play('fadeInDown ~1s');
      });
      this.animator('#congrats4 .blue-heading', function() {
        this.play('fadeInLeft ~1s');
      });
      this.animators('#congrats4 .to-our, #congrats4 .great-work, #congrats4 .learned, #congrats4 .now, #congrats4 .continue, #congrats4 .twf, #congrats4 .de, #congrats4 .copyright', function() {
        this.sequence(500, 'linear').play('fadeIn ~2s');
      });
    }
  },
  screen6: {
    intro: function() {
      this.animator('#screen6 .title', function() {
        this.play('fadeInDown');
      });
      this.animator('#screen6 .super', function() {
        this.play('zoomIn ~1s');
      });
      this.animator('#screen6 .sample', function() {
        this.play('bounceIn ~2s 2s');
      });
      this.animator('#screen6 .continue', function() {
        this.play('fadeInUp ~5s');
      });
    }
  },
  screen7: {
    intro: function() {
      this.animators('#screen7 .progress > *', function() {
        this.sequence(250, 'linear').play('fadeInDown ~1s');
      });
      this.animator('#screen7 .blue', function() {
        this.play('fadeIn');
      });
      // 1 2 5 4 3 6
      this.animators('#screen7 .learn1, #screen7 .learn1-text, #screen7 .checkbox1', function() {
        this.play('fadeIn ~1s, pulse inf z7s');
      });
      this.animators('#screen7 .learn2, #screen7 .learn2-text, #screen7 .checkbox2', function() {
        this.play('fadeIn ~2s, pulse inf z7s');
      });
      this.animators('#screen7 .learn5, #screen7 .learn5-text, #screen7 .checkbox3', function() {
        this.play('fadeIn ~3s, pulse inf z7s');
      });
      this.animators('#screen7 .learn4, #screen7 .learn4-text, #screen7 .checkbox4', function() {
        this.play('fadeIn ~4s, pulse inf z7s');
      });
      this.animators('#screen7 .learn3, #screen7 .learn3-text, #screen7 .checkbox5', function() {
        this.play('fadeIn ~5s, pulse inf z7s');
      });
      this.animators('#screen7 .learn6, #screen7 .learn6-text, #screen7 .checkbox6', function() {
        this.play('fadeIn ~6s, pulse inf z7s');
      });
    }
  },
  screen8: {
    intro: function() {
      this.animator('#screen8 .sky', function() {
        this.set({origin: 'center top'});
        this.tween('scaleY', 1.5, 1.0, '5s');
      });
      this.animator('#screen8 .stars', function() {
        this.tween('opacity', 0, 1, '~6s 4s');
      });
      this.animator('#screen8 .foreground', function() {
        this.tween('bottom', -100, 00, '4s linear', false, '%');
      });
      this.animator('#screen8 .sunset', function() {
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
      this.animator('#screen8 .title-solar', function() {
        this.play('fadeInRight ~7s 3s');
      });
      this.animator('#screen8 .title-back', function() {
        this.play('fadeInLeft ~7.5s 3s');
      });
      this.animator('#screen8 .congrats', function() {
        this.play('fadeIn ~9s');
      });
      this.animator('#screen8 .completed', function() {
        this.play('fadeIn ~10s');
      });
      this.animator('#screen8 .dised', function() {
        this.play('fadeIn ~11s');
      });
      this.animator('#screen8 .twf', function() {
        this.play('fadeIn ~11.5s');
      });
      this.animator('#screen8 .panel', function() {
        this.play('fadeIn ~12s');
      });
      this.animator('#screen8 .numbers', function() {
        this.play('fadeIn ~13s');
      });
      this.animator('#screen8 .checks', function() {
        this.play('fadeIn ~14s');
      });
      this.animator('#screen8 .cert', function() {
        this.play('bounceIn ~15s');
      });
      this.animator('#screen8 .play', function() {
        this.play('bounceIn ~16s');
      });
      this.animator('#screen8 .tiger', function() {
        this.play('bounceIn ~17s');
      });
    }
  }
};

var scenes = {
  screen5_init:
    new ScrollMagic.Scene({triggerElement: '#screen5_buffer', duration: '100%'})
      .addTo(controller)
      .setBackwards(BACKWARDS)
      .addController( getVisibilityController({
        container: '#screen5',
        onImagesLoaded: function() {
          m8.runCalls(animations.screen5.endDuring);
          m8.runCalls(animations.screen5.intro);
          animations.screen5.liftoff.setup();
        }
      }))
      .addController( getSceneController('#screen5 .scene') )
      // CONGRATS 2
      .addController( getVisibilityController({
        container: '#congrats2',
        hiddenClass: 'fake-hidden'
      }))
      .addController( getSceneController({
        container: '#congrats2 .scene',
        onRegister: function() {
          this.blastoff = this.container.find('.continue');
        },
        onBoot: function() {
          this.blastoff.click(function() {
            sounds.takeoff.on('end', function() {
              sounds.booster.fade(0, 0.2, 1000, sounds.booster.play());
            }, sounds.takeoff.play());
            m8.outro($('#congrats2'), 'hide', 'hidden');
            animations.screen5.liftoff.start();
          });
        }
      }))
      // LANDING
      .addController( getVisibilityController({
        container: '#landing',
        hiddenClass: 'fake-hidden',
        onPreBoot: function() {
          var planetSelection = localStorage.getItem('planet') || '1';
          var planetURL = 'images/launch/collect_bg_0' + planetSelection + '.png'
          var bg = this.container.find('.bg');
          
          bg.data('src', planetURL);
        }
      }))
      .addController( getSceneController({
        container: '#landing .scene',
        onRegister: function() {
          this.continue = this.container.find('.continue');
        },
        onBoot: function() {
          this.continue.click(function() {
            sounds.morse.fade(1, 0, 500);
            sounds.boop.play();
            m8.outro($('#landing'), 'hide', 'hidden');
            animations.screen5.liftoff.land();
          });
        }
      }))
      // CONGRATS 3
      .addController( getVisibilityController({
        container: '#congrats3',
        hiddenClass: 'fake-hidden'
      }))
      .addController( getSceneController({
        container: '#congrats3 .scene',
        onRegister: function() {
          this.continue = this.container.find('.continue');
        },
        onBoot: function() {
          this.continue.click(function() {
            sounds.transition.play();
            m8.outro($('#screen5'), 'hide', 'hidden');
            m8.outro($('#congrats3'), 'hide', 'hidden');
            m8.intro($('#screen6'), 'show', 'hidden');
            m8.runCalls(animations.screen6.intro);
            setTimeout(function() {
              sounds.good.play();
            }, 2000);
          });
        }
      }))
      // SCREEN 6
      .addController( getVisibilityController({
        container: '#screen6',
        hiddenClass: 'fake-hidden',
        onPreBoot: function() {
          var planetSelection = localStorage.getItem('planet') || '1';
          var sampleURL = 'images/06/sample_0' + planetSelection + '.png'
          var bg = this.container.find('.sample');
          
          bg.data('src', sampleURL);
        }
      }))
      .addController( getSceneController({
        container: '#screen6 .scene',
        onRegister: function() {
          this.continue = this.container.find('.continue');
        },
        onBoot: function() {
          this.continue.click(function() {
            m8.outro($('#screen6'), 'hide', 'hidden');
            m8.intro($('#screen7'), 'show', 'hidden');
            m8.runCalls(animations.screen7.intro);
          });
        }
      }))
      // SCREEN 7
      .addController( getVisibilityController({
        container: '#screen7',
        hiddenClass: 'fake-hidden'
      }))
      .addController( getSceneController({
        container: '#screen7 .scene'
      }))
      .addControllerLazy( getDialogController({
        container: '#screen7 .scene',
        total: 6,
        opened: 0,
        next: $('#screen7 .continue'),
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
          $('#screen7 .hide-' + check).addClass('hidden');
          $('#screen7 .show-' + check).removeClass('hidden').animator().play('bounceIn').applyInitialState();
        },
        onHideRequest: function(closer, dialog) {
          sounds.hover.play();
        },
        onBoot: function() {
          this.next.click(function() {
            sounds.boop.play();
            m8.intro($('#congrats4'), 'show', 'hidden');
            m8.runCalls(animations.congrats4.intro);
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
      // CONGRATS 4
      .addController( getVisibilityController({
        container: '#congrats4',
        hiddenClass: 'fake-hidden'
      }))
      .addController( getSceneController({
        container: '#congrats4 .scene',
        onRegister: function() {
          this.continue = this.container.find('.continue');
        },
        onBoot: function() {
          this.continue.click(function() {
            sounds.boop.play();
            m8.outro($('#congrats4'), 'hide', 'hidden');
            m8.intro($('#screen8'), 'show', 'hidden');
            m8.runCalls(animations.screen8.intro);
          });
        }
      }))
      // SCREEN 8
      .addController( getVisibilityController({
        container: '#screen8',
        hiddenClass: 'fake-hidden'
      }))
      .addController( getSceneController({
        container: '#screen8 .scene',
        onRegister: function() {
          this.replay = this.container.find('.play');
          this.goto = this.container.find('.tiger');
        },
        onBoot: function() {
          this.replay.click(function() {
            window.location = 'challenge1.html';
          });
          this.goto.click(function() {
            sounds.transition.play();
            window.open('https://www.tgreduexplore.org/', '_blank');
          });
        }
      }))
  ,
  screen5: 
    new ScrollMagic.Scene({triggerElement: '#screen5_trigger', duration: '100%'})
      .addTo(controller)
      .setBackwards(BACKWARDS)
      .addControllerLazy( getDialogController({container: '#screen5 .scene'}) )
      .addControllerLazy( getCanvasController({
        name: 'liftoff',
        canvas: '#screen5 canvas', 
        contextAttributes: {
          alpha: false
        },
        values: {
          sky: {
            x: 0, 
            y: 736 - 8668
          },
          gantry: {
            x: 52 + 363 + 119, 
            y: 103 + 56 + 496, 
            originX: 0.55, 
            originY: 1.0
          },
          rocket: {
            x: 0, 
            y: 0
          },
          particles: {
            operation: 'screen', 
            reverse: true
          },
          landingParticles: {
            operation: 'screen', 
            reverse: true
          },
          landingSmoke: {
            operation: 'source-over', 
            reverse: true
          },
          smoke: {
            operation: 'source-over', 
            reverse: true
          },
          planet: {
            x: 875,
            y: -7164
          },
          rocketTransform: {
            transform: {
              scale: 1,
              x: 66 + 363 + 43, 
              y: 100 + 56 + 243,
              radians: 0
            }
          },
          fireParticle: {
            scale: 0,
            alpha: 0.5,
            velocityX: 0,
            velocityY: 200,
            lifetime: 2000,
            paths: {
              scale: new anim8.PathDelta(0, 0, [0, 1.4, 0.3], [0, 0.1, 1.0]),
              alpha: new anim8.PathDelta(0, 0, [0.5, 1, 1, 0], [0, 0.2, 0.9, 1.0]),
            }
          },
          smokeParticle: {
            scale: 0.4,
            alpha: 0.5,
            lifetime: 4000,
            drag: 100,
            paths: {
              scale: new anim8.PathDelta(0, 0, [0.4, 2], [0, 1.0]),
              alpha: new anim8.PathDelta(0, 0, [0.5, 1, 1, 0], [0, 0.2, 0.9, 1.0]),
            }
          },
          asteroid: {
            scale: 0.5,
            x: -200,
            y: 4000
          },
          rover: {
            scale: 0
          },
          landing: {
            visible: false,
            enabled: false
          },
          landArea: {
            x: 417,
            y: 100,
            endY: 624 - 2800
          },
          buttonIgnite: {
            x: 1260,
            y: 645,
            interactive: true,
            cursor: 'pointer'
          },
          buttonSlow: {
            x: 430 + 45,
            y: 653,
            interactive: true,
            cursor: 'pointer'
          },
          buttonMedium: {
            x: 503 + 45,
            y: 653,
            interactive: true,
            cursor: 'pointer'
          },
          buttonFast: {
            x: 575 + 45,
            y: 653,
            interactive: true,
            cursor: 'pointer'
          },
          sliderNumbers: {
            x: 772,
            y: 683
          },
          sliderKnob: {
            x: 743,
            y: 650,
            interactive: true,
            cursor: 'move'
          },
          landingRocket: {
            x: 872,
            y: 388,
            scale: 0.9
          }
        },
        onBoot: function() {
          this.getContext(function(ctx, canvas, ctrl) {
            var planetSelection = localStorage.getItem('planet') || '1';
            var planetURLs = {
              '1': 'images/global/asteroid.png',
              '2': 'images/launch/largePlanet_02.png',
              '3': 'images/launch/titanLarge.png'
            };
            var planetURL = planetURLs[ planetSelection ];
            
            this.renderer         = axe.List.renderContext(ctx);
            this.world            = axe.List.create();
            this.worldTransform   = this.world.getTransformer(this.renderer);
            
            this.sky              = axe.Image.fromURL('images/launch/eyeCandy_full-clouds.png', true).set(this.values.sky).addTo(this.world);
            this.gantry           = axe.Sprite.fromURL('images/04/launch/gantry.png', true).set(this.values.gantry).addTo(this.world);
            this.planet           = axe.Sprite.fromURL(planetURL, true).set(this.values.planet).addTo(this.world);
            
            this.rocketSpace      = axe.List.create();
            this.rocketTransform  = this.rocketSpace.getTransformer().set(this.values.rocketTransform);
            this.rocketMod        = axe.Modifier.forObject(this.rocketTransform).addTo(this.world);
            this.particles        = axe.Particles.create().set(this.values.particles).addTo(this.rocketSpace);
            this.rocket           = axe.Sprite.fromURL('images/04/launch/04_rocket_full.png', true).set(this.values.rocket).addTo(this.rocketSpace);
            
            this.foreground       = axe.Image.fromURL('images/04/launch/04_foreground.png', true).addTo(this.world);
            this.asteroid         = axe.Sprite.fromURL('images/launch/asteroid.png', true).set(this.values.asteroid).addTo(this.world);
            this.rover            = axe.Sprite.fromURL('images/launch/rover2a.png', true).set(this.values.rover).addTo(this.world);
            this.smoke            = axe.Particles.create().set(this.values.smoke).addTo(this.world);
            
            this.landing          = axe.List.create().set(this.values.landing);
            this.landingTransform = this.landing.getTransformer();
            this.landingMod       = axe.Modifier.forObject(this.landingTransform).addTo(this.world);
            this.landArea         = axe.Image.fromURL('images/launch/landing_space-ground_BG.png', true).set(this.values.landArea);
            this.landAreaMod      = axe.Modifier.forObject(this.landArea).addTo(this.landing);
            this.landingParticles = axe.Particles.create().set(this.values.landingParticles).addTo(this.landing);
            this.landingRocket    = axe.Sprite.fromURL('images/launch/rocket_land_partial.png', true).set(this.values.landingRocket).addTo(this.landing);
            this.landingSmoke     = axe.Particles.create().set(this.values.landingSmoke).addTo(this.landing);
            this.hud              = axe.List.create().addTo(this.landing);
            this.screen           = axe.Image.fromURL('images/launch/landing_bg_mask.png', true);
            this.screenMod        = axe.Modifier.forObject(this.screen).addTo(this.hud);
            
            this.buttonsRelease   = axe.List.create();
            this.buttonsReleaseMod= axe.Filter.forObject(this.buttonsRelease).addTo(this.hud);
            this.buttonSlow       = axe.Image.fromURL('images/launch/fuelButton_up.png', true).set(this.values.buttonSlow).setDownURL('images/launch/fuelButton_down.png').addTo(this.buttonsRelease);
            this.buttonMedium     = axe.Image.fromURL('images/launch/fuelButton_up.png', true).set(this.values.buttonMedium).setDownURL('images/launch/fuelButton_down.png').addTo(this.buttonsRelease);
            this.buttonFast       = axe.Image.fromURL('images/launch/fuelButton_up.png', true).set(this.values.buttonFast).setDownURL('images/launch/fuelButton_down.png').addTo(this.buttonsRelease);
            
            this.buttonsIgnite    = axe.List.create();
            this.buttonsIgniteMod = axe.Filter.forObject(this.buttonsIgnite).addTo(this.hud);
            this.sliderKnob       = axe.Image.fromURL('images/launch/slider_knob.png', true).set(this.values.sliderKnob).addTo(this.buttonsIgnite);
            this.sliderNumbers    = axe.Image.fromURL('images/launch/slider_numbers.png', true).set(this.values.sliderNumbers).addTo(this.buttonsIgnite);
            this.buttonIgnite     = axe.Image.fromURL('images/launch/ignite_button_up.png', true).set(this.values.buttonIgnite).setDownURL('images/launch/ignite_button_down.png');
            this.buttonIgniteMod  = axe.Filter.forObject(this.buttonIgnite).addTo(this.buttonsIgnite).set({replace: true});
            
            this.renderer.refresh();
            
            // Templates
            this.fireParticle     = axe.Particle.fromURL('images/launch/fire0.png', true).set(this.values.fireParticle);
            this.smokeParticle    = axe.Particle.fromURL('images/launch/smoke1.png', true).set(this.values.smokeParticle);
            
            // Bind Events
            axe.bind( this.canvas, this.renderer );
            
            // ======================================
            // Inputs
            // ======================================
            // = FUEL RELEASE RADIOS
            var stateNormal = this.buttonSlow.image;
            var statePrevious = null;
            var handleClick = function(e) {
              if (statePrevious) {
                statePrevious.frame = stateNormal;
              }
              if (statePrevious !== this) {
                this.frame = this.down;
                statePrevious = this;
              } else {
                statePrevious = null;
              }
              ctrl.updateIgnite();
              this.refresh();
              sounds.button.play();
              
              if (ctrl.buttonsReleaseMod.blinking) {
                ctrl.buttonsReleaseMod.blinking = false;
                ctrl.buttonsIgniteMod.blinking = true;
                m8(ctrl.buttonsReleaseMod).nopeat();
                m8(ctrl.buttonsIgniteMod).play('canvasBlink');
              }
            };
            this.buttonSlow.on('click', handleClick);
            this.buttonMedium.on('click', handleClick);
            this.buttonFast.on('click', handleClick);
            
            
            // ======================================
            // = THRUST SLIDER
            this.sliderKnob.on('drag', function(e, current, dx, dy) {
              var gap = 41.4;
              var start = 743;
              var end = 1156;
              var middle = this.h * 0.5;
              var current = Math.round((current.x - middle - start) / gap) * gap + start;
              var clamped = Math.max(start, Math.min(end, current));
              if (this.x !== clamped) {
                sounds.tick.stop().play();
                
                if (ctrl.buttonsIgniteMod.blinking) {
                  ctrl.buttonsIgniteMod.blinking = false;
                  ctrl.buttonIgniteMod.blinking = true;
                  m8(ctrl.buttonsIgniteMod).nopeat();
                  m8(ctrl.buttonIgniteMod).play('canvasBlink');
                }
              }
              this.x = clamped;
              ctrl.updateIgnite();
              this.refresh();
            });
            this.buttonIgnite.on('click', function() {
              if (ctrl.isReady()) {
                ctrl.setInteractive(false);
                animations.screen5.liftoff.simulate();
                m8.intro($('#screen5 .land-instructions'), 'hide', 'hidden');
                sounds.hover.play();
                
                if (ctrl.buttonIgniteMod.blinking) {
                  ctrl.buttonIgniteMod.blinking = false;
                  m8(ctrl.buttonIgniteMod).nopeat();
                }
              }
            });
            
            this.isReady = function() {
              return statePrevious && this.getThrust() !== 0;
            };
            
            this.updateIgnite = function() {
              var ready = this.isReady();
              this.buttonIgniteMod.opacity = ready ? 1 : 0.5;
              this.buttonIgnite.interactive = ready;
            };
            
            this.getRelease = function() {
              switch (statePrevious) {
                case this.buttonSlow: return 0;
                case this.buttonMedium: return 1;
                case this.buttonFast: return 2;
              }
              return 1;
            };
            
            this.getThrust = function() {
              var gap = 41.4;
              var start = 743;
              return Math.round((this.sliderKnob.x - start) / gap);
            };
            
            this.resetLanding = function() {
              statePrevious = null;
              this.buttonSlow.frame = 
              this.buttonMedium.frame = 
              this.buttonFast.frame = stateNormal;
              this.sliderKnob.x = this.sliderKnob.dx = 743;
              this.setInteractive(true);
            };
            
            this.setInteractive = function(ya) {
              this.buttonSlow.interactive = 
              this.buttonMedium.interactive = 
              this.buttonFast.interactive = 
              this.sliderKnob.interactive = 
              this.buttonIgnite.interactive = ya;
              this.buttonsIgniteMod.opacity =
              this.buttonsReleaseMod.opacity = ya ? 1.0 : 0.5;
              this.updateIgnite();
              this.renderer.refresh();
            };
            
            this.canLand = function() {
              var score = (this.getThrust() + 1) * (this.getRelease() + 1);
              return score >= 8 && score <= 12;
            };
            
            this.highlightControls = function() {
              this.buttonsReleaseMod.blinking = true;
              m8(this.buttonsReleaseMod).play('canvasBlink ~7s');
              m8.on('end', function() {
                ctrl.renderer.refresh();
              });
            };
          });
        }
      }))
      .addControllerLazy( getCheckController({
        name: 'terms',
        container: '#screen5 .scene',
        onCheck: function() {
          var checkboxes = this.checks;
          var checked = checkboxes.filter('.' + this.checkedClass);
          if (checkboxes.length === checked.length) {
            m8.intro(this.submit, 'submitShow', this.hiddenClass);
          }
          sounds.button.play();
        },
        onRegister: function() {
          this.submit = this.container.find('.submit.terms');
        },
        onBoot: function() {
          this.submit.click(function() {
            sounds.hover.play();
            $('#screen5 .dialog.h1').hideDialog();
            $('#screen5 .dialog.h2').showDialog();
          });
        },
        onClear: function() {
          this.submit.addClass(this.hiddenClass);
        }
      }))
      .addControllerLazy( getDragDropOrderController({
        name: 'forces',
        container: '#screen5 .dialog.h2',
        resetOn: 'never',
        tries: 1,
        correctOnFailure: true,
        onRegister: function() {
          this.continue = this.container.find('.continue');
        },
        onBoot: function() {
          this.continue.click(function() {
            $('#screen5 .dialog.h2').hideDialog();
            m8.intro($('#congrats2'), 'show', 'hidden');
            m8.runCalls(animations.congrats2.intro);
          });
        },
        onSubmit: function(correct) {
          if (correct) {
            m8.intro(this.continue, 'continueShow', this.hiddenClass);
          }
          if (correct) {
            sounds.good.play();
          } else {
            sounds.bad.play();
          }
        },
        onApplyCorrect: function() {
          m8.intro(this.continue, 'continueShow', this.hiddenClass);
        },
        onDrop: function() {
          sounds.tick.play();
        }
      }))
      .startDuring( animations.screen5.startDuring )
};

var liftoff = function() {
  sounds.takeoff.on('end', function() {
    sounds.booster.fade(0, 0.2, 1000, sounds.booster.play());
  }, sounds.takeoff.play());
  
  $('.dialog').hideDialog();
  animations.screen5.liftoff.setup();
  animations.screen5.liftoff.start();
};

var land = function() {
  $('.dialog').hideDialog();
  m8.intro($('#landing'), 'show', 'hidden');
  m8.runCalls(animations.landing.intro);
  setTimeout(function() {
    sounds.morse.fade(0, 1.0, 7000, sounds.morse.play());
  }, 6000);
};

var station = function() {
  $('.dialog').hideDialog();
  
  m8.outro($('#landing'), 'hide', 'hidden');
  animations.screen5.liftoff.land();
};

var prepareLand = function() {
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
