/* tiger-woods-space 1.0.0 - Tiger Woods Interactive - Space Exploration by d'Vinci Interactive */
m8.save('twinkle', {
  values: {
    scale: [1, 1.2, 0.5, 1.5, 1],
    opacity: [1, 0.9, 1, 0.5, 1]
  },
  initial: {
    rotate: m8.computed.random({min: 0, max: 360})
  }
}, 'inf linear');

m8.save('checkboxCheck', {
	keyframe: {
		'0': {
			width: 0

		},
		'100': {
			width: 30
		}
	},
	scaleBases: {
		opacity: 1
	},
	scales: {
		origin: 1.0
	},
	initial: {
		origin: 'left bottom'
	}
});

m8.save('notebookOpen', {
	keyframe: {
		'0': {
			opacity: 0,
			translateX: -400,
			translateY: 270,
			scale: 0
		},
		'30': {
			opacity: 1,
			translateX: -400,
			translateY: 270,
			scale: 0.1
		},
		'100': {
			opacity: 1,
			translateX: 0,
			translateY: 0,
			scale: 1
		}
	}
});

m8.save('fadeToDisabled', {
	keyframe: {
		'0': {
			opacity: 1
		},
		'100': {
			opacity: 0.3
		}
	}
});

m8.save('disabledOut', {
	keyframe: {
		'0': {
			opacity: true
		},
		'100': {
			opacity: 0
		}
	}
});

m8.save('notebookClose', {
	keyframe: {
		'0': {
			opacity: 1,
			translateX: 0,
			translateY: 0,
			scale: 1

		},
		'100': {
			opacity: 0,
			translateX: -440,
			translateY: 290,
			scale: 0
		}
	}
});

m8.save('fadeInUpFixed', {
	keyframe: {
		'0': {
			opacity: 0,
			translateY: 100,
		},
		'100': {
			opacity: 1,
			translateY: 0,
		}
	},
});

m8.save('growDown', {
	keyframe: {
		'0': {
			opacity: 0,
			scaleY: 0
		},
		'100': {
			opacity: 1,
			scaleY: 1
		}
	},
	scaleBases: {
		opacity: 1
	},
	scales: {
		origin: 1.0
	},
	initial: {
		origin: 'right top'
	}
});

m8.save('growRight', {
	keyframe: {
		'0': {
			opacity: 0,
			scaleX: 0
		},
		'100': {
			opacity: 1,
			scaleX: 1
		}
	},
	scaleBases: {
		opacity: 1
	},
	scales: {
		origin: 1.0
	},
	initial: {
		origin: 'right bottom'
	}
});

m8.save('skewMutationIn', {
	keyframe: {
		'0': {
			rotate: 90,
			skewX:45,
			opacity: 0,
		},
		'100': {
			rotate: 0,
			opacity: 1,
			skewX:0,
		}
	},
	scaleBases: {
		opacity: 1
	},
	scales: {
		origin: 1
	},
	initial: {
		origin: 'left bottom'
	}
});

m8.save('mutationIn', {
	keyframe: {
		'0': {
			rotate: 45,
			opacity: 0,
		},
		'100': {
			rotate: 0,
			opacity: 1
		}
	},
	scaleBases: {
		opacity: 1
	},
	scales: {
		origin: 1
	},
	initial: {
		origin: 'left bottom'
	}
});

m8.save('backdrop', {
  tweenTo: {
    blur: 5,
    brightness: 20
  }
});

m8.save('fadeInHalf', {
  values: {
    opacity: [0.2, 1.0]
  }
});

m8.save('fadeOutHalf', {
  values: {
    opacity: [1.0, 0.2]
  }
});

m8.save('unbackdrop', {
  tweenTo: {
    blur: 0,
    brightness: 100
  }
});

m8.save('scrollUpIntro', {
  values: {
    opacity: [0, 1],
    translateY: [-100, -30],
    translateX: [-50, -50]
  },
  units: {
    translateY: '%',
    translateX: '%'
  }
});

m8.save('canvasBlink', {
  factory: 'object',
  values: {
    brightness: [1, 3, 1]
  }
}, '1s z1s inf');

m8.save('scaleUp', {
  keyframe: {
    from: { scale: 1.0 },
    to:   { scale: 1.2 }
  },
  durations: {
    scale: 300
  }
});

m8.save('scaleDown', {
  keyframe: {
    from: { scale: 1.2 },
    to:   { scale: 1.0 }
  },
  durations: {
    scale: 300
  }
});

m8.save('robotTurnLeft', {
  move: {
    rotate: -90
  },
  easings: {
    rotate: 'linear'
  }
})

m8.save('robotTurnRight', {
  move: {
    rotate: 90
  },
  easings: {
    rotate: 'linear'
  }
})

m8.save('robotWiggle', {
  point: {
    rotate: m8.computed(function(attrimator, animator) {
      var start = m8.computed.current(attrimator, animator)
      var wiggleAngle = 10
      var wiggles = 3
      return function(i, dt) {
        return Math.sin(dt * Math.PI * 2 * wiggles) * wiggleAngle + start
      }
    })
  },
  easings: {
    rotate: 'linear'
  }
})

m8.save('robotUpDown', {
  keyframe: {
    '0,50,100': {
      scale: 1
    },
    '25': {
      scale: 0.9
    },
    '75': {
      scale: 1.1
    }
  },
  easings: {
    scale: 'linear'
  }
})

m8.intro = function(objects, attribute, hiddenClass, onlyHidden)
{
  objects.each(function() {
    var e = $(this);
    if (onlyHidden && !e.hasClass(hiddenClass)) {
      return;
    }
    e.removeClass(hiddenClass);
    if (e.data(attribute)) {
      var a = e.animator();
      a.stop();
      a.restore()
      e.dataPlay(attribute);
      a.applyInitialState();
      a.off('finished');
    }
  });
};

m8.outro = function(objects, attribute, hiddenClass, immediate)
{
  objects.each(function() {
    var e = $(this);
    if (e.hasClass(hiddenClass)) {
      return;
    }
    if (e.data(attribute)) {
      var a = e.animator();
      a.stop();
      a.restore()
      e.dataPlay(attribute);
      a.applyInitialState();
      a.off('finished');
      if (immediate) {
        e.addClass(hiddenClass);
      } else {
        a.once('finished', function() {
          e.addClass(hiddenClass);
        });
      }
    } else {
      e.addClass(hiddenClass);
    }
  });
};

m8.runCalls = function(getCalls)
{
  getCalls.call({
    animator: function(query, callback) {
      callback.call( $(query).animator() );
    },
    animators: function(query, callback) {
      callback.call( $(query).animators() );
    },
    call: function(callback) {
      callback();
    }
  })
};


var axe = {};

axe.updateImage = function(dest, url, detectDimensions) {
  if (detectDimensions) {
    dest.image.onload = function() {
      dest.w = dest.image.naturalWidth;
      dest.h = dest.image.naturalHeight;
      dest.refresh();
    };
  }
  dest.image.src = url;
};

axe.rotate = function(x, y, radians) {
  var c = Math.cos( radians );
  var s = Math.sin( radians );
  return {
    x: x * c - y * s,
    y: x * s + y * c
  };
};

axe.bind = function(canvas, object) {
  var listeners = {
    last: null,
    down: false,
    mouse: {x: 0, y: 0},
    dragging: null,
    getMouse: function(e) {
      var mouse = {
        x: e.offsetX,
        y: e.offsetY
      };
      if (e.changedTouches && e.changedTouches.length) {
        var touch = e.changedTouches[0];
        var bounds = canvas.getBoundingClientRect();
        mouse.x = (touch.pageX - bounds.left) / (bounds.width / canvas.offsetWidth);
        mouse.y = (touch.pageY - bounds.top) / (bounds.height / canvas.offsetHeight);
      }
      e.x = mouse.x;
      e.y = mouse.y;
      return mouse;
    },
    getAt: function(e) {
      var mouse = listeners.getMouse(e);
      return object.getAt(mouse.x, mouse.y);
    },
    move: function(e) {
      var current = listeners.getMouse(e);
      var previous = listeners.mouse;
      var dx = current.x - previous.x;
      var dy = current.y - previous.y;
      var at = object.getAt(current.x, current.y);
      
      var cursorSource = listeners.drag || at;
      
      if (listeners.drag) {
        listeners.drag.trigger('drag', [e, current, dx, dy]);
      } else if (at !== listeners.last) {
        if (listeners.last) {
          listeners.last.trigger('leave', [e, current]);
        }
        if (at) {
          at.trigger('enter', [e, current])
        }
      } else if (at) {
        if (listeners.down) {
          at.trigger('dragstart', [e, current, dx, dy]);
          listeners.drag = at;
        } else {
          at.trigger('move', [e, current, dx, dy]);
        }
      }
      listeners.mouse = current;
      listeners.last = at;
      
      canvas.style.cursor = 'auto';
      if (cursorSource && cursorSource.cursor) {
        canvas.style.cursor = cursorSource.cursor;
      }
    },
    generic: function(eventName, setDown, setUp) {
      return function(e) {
        var current = listeners.getMouse(e);
        var at = object.getAt(current.x, current.y);
        if (at) {
          at.trigger(eventName, [e]);
        }
        if (setDown) {
          listeners.down = true;
        }
        if (setUp) {
          listeners.down = false;
          if (listeners.drag) {
            listeners.drag.trigger('dragend', [e, current, 0, 0]);
            listeners.drag = null;
          }
        }
      };
    }
  };
  
  listeners.down = listeners.generic('down', true);
  listeners.up = listeners.generic('up', false, true);
  listeners.click = listeners.generic('click');
  listeners.dblclick = listeners.generic('double');
  
  canvas.addEventListener('mousemove', listeners.move);
  canvas.addEventListener('touchmove', listeners.move);
  canvas.addEventListener('mousedown', listeners.down);
  canvas.addEventListener('touchstart', listeners.down);
  canvas.addEventListener('mouseup', listeners.up);
  canvas.addEventListener('touchend', listeners.up);
  canvas.addEventListener('touchcancel', listeners.up);
  canvas.addEventListener('contextmenu', listeners.up);
  canvas.addEventListener('click', listeners.click);
  canvas.addEventListener('dblclick', listeners.dblclick);
};

/************************************************************\
* OBJECT
************************************************************/
axe.Object = function() {};
axe.Object.prototype = {
  set: function(options) {
    $.extend(this, options);
    return this;
  },
  reset: function() {
    this.visible = true;
    this.enabled = true;
    this.interactive = false;
  },
  addTo: function(parent) {
    parent.add(this);
    return this;
  },
  render: function(ctx) {
    throw 'Render not implemented';
  },
  update: function(dt) {
  
  },
  toLocal: function(wx, wy) {
    if (this.parent) {
      return this.parent.toLocal(wx, wy);
    }
    return {x: wx, y: wy};
  },
  toWorld: function(lx, ly) {
    if (this.parent) {
      return this.parent.toWorld(lx, ly);
    }
    return {x: lx, y: ly};
  },
  contains: function(x, y) {
    return false;
  },
  getAt: function(x, y) {
    if (this.contains(x, y) && this.interactive) {
      return this;
    }
    return null;
  },
  setParent: function(parent, ignoreOrder) {
    if (parent !== this.parent) {
      if (this.parent) {
        this.parent.remove(this, ignoreOrder);
      }
      this.parent = parent;
    }
  },
  destroy: function(ignoreOrder) {
    this.setParent(null, ignoreOrder);
  },
  isLive: function() {
    return this.parent != null;
  },
  refresh: function() {
    if (this.parent) {
      this.parent.refresh();
    }
  },
  getTransformer: function(parent) {
    var obj = axe.Transformer.forObject(this);
    if (parent) {
      obj.addTo(parent);
    }
    return obj;
  },
  clone: function() {
    var clone = Object.assign(Object.create(Object.getPrototypeOf(this)), this);
    clone.parent = null;
    this.finishClone(clone);
    return clone;
  },
  finishClone: function(clone) {
  
  },
  on: function(eventName, callback) {
    if (!this.listeners) {
      this.listeners = {};
    }
    if (!(eventName in this.listeners)) {
      this.listeners[ eventName ] = [];
    }
    this.listeners[ eventName ].push(callback);
    return this;
  },
  once: function(eventName, callback) {
    callback.once = true;
    return this.on(eventName, callback);
  },
  off: function(eventName, callback) {
    if (eventName) {
      if (this.listeners && eventName in this.listeners) {
        var list = this.listeners[ eventName ];
        if (callback) {
          var i = list.indexOf( callback );
          if (i !== -1) {
            list.splice(i, 1);
          }
        } else {
          delete this.listeners[ eventName ];
        }
      }
    } else {
      delete this.listeners;
    }
    return this;
  },
  trigger: function(eventName, args) {
    if (this.listeners && eventName in this.listeners) {
      var list = this.listeners[ eventName ];
      for (var i = 0; i < list.length; i++) {
        var callback = list[ i ];
        callback.apply( this, args );
        if (callback.once && list[ i ] === callback) {
          list.splice( i, 1 );
        }
        if (callback !== list[ i ]) {
          i--;
        }
      }
    }
    return this;
  }
};

/************************************************************\
* RENDERER
************************************************************/
axe.List = function() {};
axe.List.renderer = function(refresher) {
  var obj = axe.List.create();
  obj.refresh = refresher;
  return obj;
};
axe.List.renderContext = function(ctx) {
  var requested = false;
  var list = axe.List.renderer(function() {
    if (!requested) {
      requested = true;
      anim8.requestRun(function() {
        list.render(ctx);
        requested = false;
      });
    }
  });
  return list;
};
axe.List.create = function() {
  var obj = new axe.List();
  obj.reset();
  return obj;
};
axe.List.prototype = new axe.Object();
axe.List.prototype.reset = function() {
  axe.Object.prototype.reset.apply(this, arguments);
  this.objects = [];
  this.reverse = false;
};
axe.List.prototype.clear = function() {
  var objects = this.objects;
  for (var i = 0; i < objects.length; i++) {
    objects[ i ].parent = null;
    objects[ i ] = void 0;
  }
  this.objects.length = 0;
};
axe.List.prototype.getAt = function(x, y) {
  var objects = this.objects;
  for (var i = objects.length - 1; i >= 0; i--) {
    var at = objects[ i ].getAt(x, y);
    if (at) {
      return at;
    }
  }
  return null;
};
axe.List.prototype.add = function(object) {
  this.objects.push(object);
  object.setParent(this);
};
axe.List.prototype.sort = function(callback) {
  this.objects.sort(callback);
};
axe.List.prototype.remove = function(object, ignoreOrder) {
  var index = this.objects.indexOf(object);
  if (index >= 0) {
    if (ignoreOrder) {
      var n = this.objects.length - 1;
      this.objects[ index ] = this.objects[ n ];
      this.objects[ n ] = void 0;
      this.objects.length = n;
    } else {
      this.objects.splice( index, -1 );
    }
  }
};
axe.List.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  var n = this.objects.length - 1;
  if (this.reverse) {
    for (var i = n; i >= 0; i--) {
      this.objects[ i ].render(ctx);
    }
  } else {
    for (var i = 0; i <= n; i++) {
      this.objects[ i ].render(ctx);
    }
  }
};
axe.List.prototype.update = function(dt) {
  if (!this.enabled) {
    return;
  }
  for (var i = 0; i < this.objects.length; i++) {
    this.objects[ i ].update(dt);
  }
};
axe.List.prototype.refresh = function() {
  if (this.parent) {
    this.parent.refresh();
  }
};

/************************************************************\
* IMAGE
************************************************************/
axe.Image = function() {};
axe.Image.create = function() {
  var obj = new axe.Image();
  obj.reset();
  return obj;
};
axe.Image.fromURL = function(url, detectDimensions) {
  var obj = axe.Image.create();
  axe.updateImage(obj, url, detectDimensions);
  return obj;
};
axe.Image.prototype = new axe.Object();
axe.Image.prototype.setHoverURL = function(url) {
  this.hover = new Image();
  this.hover.src = url;
  this.on('enter', function() {
    this.frame = this.hover;
    this.refresh();
  });
  this.on('leave', function() {
    this.frame = this.image;
    this.refresh();
  });
  return this;
};
axe.Image.prototype.setDownURL = function(url) {
  this.down = new Image();
  this.down.src = url;
  this.on('down', function() {
    this.frame = this.down;
    this.refresh();
  });
  this.on('up', function() {
    this.frame = this.image;
    this.refresh();
  });
  return this;
};
axe.Image.prototype.setURL = function(url, detectDimensions) {
  axe.updateImage(this, url, detectDimensions);
};
axe.Image.prototype.toWorld = function(lx, ly) {
  return {
    x: lx + this.x,
    y: ly + this.y
  };
};
axe.Image.prototype.toLocal = function(wx, wy) {
  return {
    x: wx - this.x,
    y: wy - this.y
  };
};
axe.Image.prototype.contains = function(x, y) {
  var t = this.toLocal(x, y);
  return !(t.x < 0 || t.x >= this.w || t.y < 0 || t.y >= this.h);
};
axe.Image.prototype.reset = function() {
  axe.Object.prototype.reset.apply(this, arguments);
  this.x = this.y = 0;
  this.w = this.h = 0;
  this.frame = this.image = new Image();
};
axe.Image.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  ctx.drawImage(this.frame, this.x, this.y, this.w, this.h);
};
axe.Image.prototype.left = function() {
  return this.x;
};
axe.Image.prototype.right = function() {
  return this.x + this.w;
};
axe.Image.prototype.top = function() {
  return this.y;
};
axe.Image.prototype.bottom = function() {
  return this.y + this.h;
};

/************************************************************\
* SPRITE
************************************************************/
axe.Sprite = function() {};
axe.Sprite.fromURL = function(url, detectDimensions) {
  var obj = axe.Sprite.create();
  axe.updateImage(obj, url, detectDimensions);
  return obj;
};
axe.Sprite.create = function() {
  var obj = new axe.Sprite();
  obj.reset();
  return obj;
};
axe.Sprite.prototype = new axe.Image();
axe.Sprite.prototype.reset = function() {
  axe.Image.prototype.reset.apply( this, arguments );
  this.radians = 0;
  this.originX = 0.5;
  this.originY = 0.5;
  this.scale = 1;
};
axe.Sprite.prototype.toWorld = function(lx, ly) {
  var s = this.scale;
  var cx = this.w * this.originX * s;
  var cy = this.h * this.originY * s;
  var dx = (lx - cx) * s;
  var dy = (ly - cy) * s;
  var radians = this.radians;
  var world = {x: dx, y: dy};
  
  if (radians !== 0) {
    world = axe.rotate(world.x, world.y, radians);
  }
  
  world.x += this.x;
  world.y += this.y;
  
  return world;
};
axe.Sprite.prototype.toLocal = function(wx, wy) {
  var s = this.scale;
  var radians = this.radians;
  var dx = (wx - this.x) / s;
  var dy = (wy - this.y) / s;
  var local = {x: dx, y: dy};
  
  if (radians !== 0) {
    local = axe.rotate(local.x, local.y, -radians);
  }
  
  local.x += this.w * this.originX;
  local.y += this.h * this.originY;
  
  return local;
};
axe.Sprite.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  var s = this.scale;
  var x = this.x;
  var y = this.y;
  var w = this.w * s;
  var h = this.h * s;
  var offx = this.originX * w;
  var offy = this.originY * h;
  var radians = this.radians;
  ctx.translate(x, y);
  ctx.rotate(radians);
  ctx.drawImage(this.frame, -offx, -offy, w, h);
  ctx.rotate(-radians);
  ctx.translate(-x, -y);
};
axe.Sprite.prototype.left = function() {
  return this.x - this.originX * this.w * this.scale;
};
axe.Sprite.prototype.right = function() {
  return this.x + (1 - this.originX) * this.w * this.scale;
};
axe.Sprite.prototype.top = function() {
  return this.y - this.originY * this.h * this.scale;
};
axe.Sprite.prototype.bottom = function() {
  return this.y + (1 - this.originY) * this.h * this.scale;
};

/************************************************************\
* PARTICLES
************************************************************/
axe.Particles = function() {};
axe.Particles.create = function() {
  var obj = new axe.Particles();
  obj.reset();
  return obj;
};
axe.Particles.prototype = new axe.List();
axe.Particles.prototype.reset = function() {
  axe.List.prototype.reset.apply(this, arguments);
  this.operation = 'lighter';
};
axe.Particles.prototype.update = function(dt) {
  if (!this.enabled) {
    return;
  }
  var alive = 0;
  var n = this.objects.length;
  for (var i = 0; i < n; i++) {
    var particle = this.objects[ i ];
    particle.update(dt);
    if (particle.isAlive()) {
      this.objects[ alive++ ] = particle;
    } else {
      particle.parent = null;
    }
  }
  for (var i = alive + 1; i < n; i++) {
    this.objects[ i ] = null;
  }
  this.objects.length = alive;
};
axe.Particles.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  var existingOperation = ctx.globalCompositeOperation || 'source-over';
  var existingAlpha = ctx.globalAlpha || 1;
  
  ctx.globalCompositeOperation = this.operation;
  
  axe.List.prototype.render.apply(this, arguments);
  
  ctx.globalCompositeOperation = existingOperation;
  ctx.globalAlpha = existingAlpha;
};

/************************************************************\
* PARTICLE
************************************************************/
axe.Particle = function() {};
axe.Particle.fromURL = function(url, detectDimensions) {
  var obj = axe.Particle.create();
  axe.updateImage(obj, url, detectDimensions);
  return obj;
};
axe.Particle.create = function() {
  var obj = new axe.Particle();
  obj.reset();
  return obj;
};
axe.Particle.prototype = new axe.Sprite();
axe.Particle.prototype.reset = function() {
  axe.Sprite.prototype.reset.apply(this, arguments);
  this.velocityX = 0;
  this.velocityY = 0;
  this.time = 0;
  this.lifetime = -1;
  this.alpha = 1;
  this.paths = {};
  this.drag = 0;
  this.alive = true;
  this.maturity = 0;
};
axe.Particle.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  if (this.alive) {
    ctx.globalAlpha = this.alpha;
    axe.Sprite.prototype.render.apply(this, arguments);
  }
};
axe.Particle.prototype.isAlive = function() {
  return this.alive;
};
axe.Particle.prototype.getDelta = function() {
  return Math.min( 1, this.time / (this.maturity || this.lifetime) );
};
axe.Particle.prototype.update = function(dt) {
  if (!this.enabled) {
    return;
  }
  if (!this.alive) {
    return;
  }
  this.time += dt;
  if (this.lifetime > 0) {
    if (this.time > this.lifetime) {
      this.alive = false;
      return;
    }
  }
  var secondsElapsed = dt * 0.001;
  this.x += this.velocityX * secondsElapsed;
  this.y += this.velocityY * secondsElapsed;
  if (this.drag > 0) {
    this.applyDrag(this.drag * secondsElapsed);
  }
  
  var delta = this.getDelta();
  for (var attr in this.paths) {
    this[ attr ] = this.paths[ attr ].compute( this[ attr ], delta );
  }
};
axe.Particle.prototype.applyDrag = function(drag) {
  if (this.velocityX > 0) {
    this.velocityX -= drag;
    if (this.velocityX < 0) {
      this.velocityX = 0;
    }
  }
  else if (this.velocityX < 0) {
    this.velocityX += drag;
    if (this.velocityX > 0) {
      this.velocityX = 0;
    }
  }
  if (this.velocityY > 0) {
    this.velocityY -= drag;
    if (this.velocityY < 0) {
      this.velocityY = 0;
    }
  }
  else if (this.velocityY < 0) {
    this.velocityY += drag;
    if (this.velocityY > 0) {
      this.velocityY = 0;
    }
  }
};

/************************************************************\
* TRANSFORMER
************************************************************/
axe.Transformer = function() {};
axe.Transformer.forObject = function(child) {
  var obj = axe.Transformer.create();
  obj.child = child;
  child.parent = obj;
  return obj;
};
axe.Transformer.create = function() {
  var obj = new axe.Transformer();
  obj.reset();
  return obj;
};
axe.Transformer.prototype = new axe.Object();
axe.Transformer.prototype.reset = function() {
  axe.Object.prototype.reset.apply(this, arguments);
  this.transform = {
    x: 0,
    y: 0,
    scale: 1,
    radians: 0
  };
};
axe.Transformer.prototype.toWorld = function(lx, ly) {
  var t = this.transform;
  var world = {x: lx, y: ly};
  
  if (t.radians !== 0) {
    world = axe.rotate(world.x, world.y, t.radians);
  }
  
  world.x *= t.scale;
  world.y *= t.scale;
  world.x += t.x;
  world.y += t.y;
  
  if (this.parent) {
    world = this.parent.toWorld(world.x, world.y);
  }
  
  return world;
};
axe.Transformer.prototype.toLocal = function(wx, wy) {
  var t = this.transform;
  var local = {x: wx, y: wy};
  
  if (this.parent) {
    local = this.parent.toLocal(local.x, local.y);
  }
  
  local.x -= t.x;
  local.y -= t.y;
  local.x /= t.scale;
  local.y /= t.scale;
  
  if (t.radians !== 0) {
    local = axe.rotate(local.x, local.y, -t.radians);
  }
  
  return local;
};
axe.Transformer.prototype.getAt = function(x, y) {
  return this.child ? this.child.getAt(x, y) : null;
};
axe.Transformer.prototype.update = function(dt) {
  if (!this.enabled) {
    return;
  }
  if (this.child) {
    this.child.update(dt);
  }
};
axe.Transformer.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  if (this.child) {
    var transform = this.transform;
    var x = transform.x;
    var y = transform.y;
    var scale = transform.scale;
    var invertedScale = 1 / scale;
    var radians = transform.radians;
    
    var translateIt = x !== 0 || y !== 0;
    var scaleIt = scale !== 1 && scale !== 0;
    var rotateIt = radians !== 0;
    
    if (translateIt) ctx.translate(x, y);
    if (rotateIt) ctx.rotate(radians);
    if (scaleIt) ctx.scale(scale, scale);
    
    this.child.render(ctx);
    
    if (scaleIt) ctx.scale(invertedScale, invertedScale);
    if (rotateIt) ctx.rotate(-radians);
    if (translateIt) ctx.translate(-x, -y);
  }
};



/************************************************************\
* MODIFIER
************************************************************/
axe.Modifier = function() {};
axe.Modifier.forObject = function(child) {
  var obj = axe.Modifier.create();
  obj.child = child;
  child.parent = obj;
  return obj;
};
axe.Modifier.create = function() {
  var obj = new axe.Modifier();
  obj.reset();
  return obj;
};
axe.Modifier.prototype = new axe.Object();
axe.Modifier.prototype.reset = function() {
  axe.Object.prototype.reset.apply(this, arguments);
  this.alpha = 1.0;
  this.operation = 'source-over';
};
axe.Modifier.prototype.getAt = function(x, y) {
  return this.child ? this.child.getAt(x, y) : null;
};
axe.Modifier.prototype.update = function(dt) {
  if (!this.enabled) {
    return;
  }
  if (this.child) {
    this.child.update(dt);
  }
};
axe.Modifier.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  if (this.child) {
    var existingOperation = ctx.globalCompositeOperation || 'source-over';
    var existingAlpha = ctx.globalAlpha;
    
    ctx.globalCompositeOperation = this.operation;
    ctx.globalAlpha *= this.alpha;
    
    this.child.render(ctx);
    
    ctx.globalAlpha = existingAlpha;
    ctx.globalCompositeOperation = existingOperation;
  }
};


/************************************************************\
* TEXT
************************************************************/
axe.Text = function() {};
axe.Text.create = function(text) {
  var obj = new axe.Text();
  obj.reset();
  obj.text = text;
  return obj;
};
axe.Text.prototype = new axe.Object();
axe.Text.prototype.reset = function() {
  axe.Object.prototype.reset.apply(this, arguments);
  this.x = this.y = 0;
  this.text = '';
  this.font = null;
  this.lineHeight = 12;
  this.stroke = null;
  this.textAlign = 'left';
  this.fill = 'white';
};
axe.Text.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  if (this.text) {
    var existingFont = ctx.font;
    var existingTextAlign = ctx.textAlign;
    if (this.font) {
      ctx.font = this.font;
    }
    if (this.textAlign) {
      ctx.textAlign = this.textAlign;
    }
    var lines = this.text.split('\n');
    if (this.fill) {
      ctx.fillStyle = this.fill;
      for (var i = 0, y = this.y; i < lines.length; i++, y += this.lineHeight) {
        ctx.fillText(lines[i], this.x, y);
      }
    }
    if (this.stroke) {
      ctx.strokeStyle = this.stroke;
      for (var i = 0, y = this.y; i < lines.length; i++, y += this.lineHeight) {
        ctx.strokeText(lines[i], this.x, y);
      }
    }
    ctx.font = existingFont;
    ctx.textAlign = existingTextAlign;
  }
};



/************************************************************\
* FILTER
************************************************************/
axe.Filter = function() {};
axe.Filter.forObject = function(child) {
  var obj = axe.Filter.create();
  obj.child = child;
  child.parent = obj;
  return obj;
};
axe.Filter.create = function() {
  var obj = new axe.Filter();
  obj.reset();
  return obj;
};
axe.Filter.Functions = {
  blur:       {prop: 'blur',        func: 'blur',       unit: 'px',   scale: 1,   defaultValue: 0},
  brightness: {prop: 'brightness',  func: 'brightness', unit: '%',    scale: 100, defaultValue: 1},
  contrast:   {prop: 'contrast',    func: 'contrast',   unit: '%',    scale: 100, defaultValue: 1},
  grayscale:  {prop: 'grayscale',   func: 'grayscale',  unit: '%',    scale: 100, defaultValue: 0},
  hue:        {prop: 'hue',         func: 'hue-rotate', unit: 'deg',  scale: 1,   defaultValue: 0},
  invert:     {prop: 'invert',      func: 'invert',     unit: '%',    scale: 100, defaultValue: 0},
  opacity:    {prop: 'opacity',     func: 'opacity',    unit: '%',    scale: 100, defaultValue: 1},
  saturate:   {prop: 'saturate',    func: 'saturate',   unit: '%',    scale: 100, defaultValue: 1},
  sepia:      {prop: 'sepia',       func: 'sepia',      unit: '%',    scale: 100, defaultValue: 0}
};
axe.Filter.prototype = new axe.Object();
axe.Filter.prototype.reset = function() {
  axe.Object.prototype.reset.apply(this, arguments);
  this.order = ['blur', 'brightness', 'contrast', 'grayscale', 'hue', 'invert', 'opacity', 'saturate'];
  this.replace = false;
  this.forEach(function(func, prop) {
    this[ prop ] = func.defaultValue;
  });
};
axe.Filter.prototype.getAt = function(x, y) {
  return this.child ? this.child.getAt(x, y) : null;
};
axe.Filter.prototype.update = function(dt) {
  if (!this.enabled) {
    return;
  }
  if (this.child) {
    this.child.update(dt);
  }
};
axe.Filter.prototype.render = function(ctx) {
  if (!this.visible) {
    return;
  }
  if (this.child) {
    var existingFilter = ctx.filter;
    var pushedFilter = (this.replace || !existingFilter || existingFilter === 'none') ? '' : existingFilter + ' ';
    var filter = this.buildFilter();
    
    if (filter) {
      ctx.filter = pushedFilter + filter;
      this.child.render(ctx);
      ctx.filter = existingFilter;
    } else if (this.replace) {
      ctx.filter = 'none';
      this.child.render(ctx);
      ctx.filter = existingFilter;
    } else {
      this.child.render(ctx);
    }
  }
};
axe.Filter.prototype.buildFilter = function() {
  var filter = [];
  this.forEach(function(func, prop) {
    var curr = this[ prop ];
    if (curr !== func.defaultValue) {
      filter.push( func.func + '(' + (curr * func.scale) + func.unit + ')' );
    }
  });
  return filter.join(' ');
};
axe.Filter.prototype.forEach = function(callback) {
  var order = this.order;
  var funcs = axe.Filter.Functions;
  for (var i = 0; i < order.length; i++) {
    var prop = order[ i ];
    if (prop in funcs) {
      callback.call( this, funcs[ prop ], prop );
    }
  }
  return this;
};


/************************************************************\
 * SCENE CONTROLLER
 ************************************************************/
function getSceneController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      maxWidth: 6000,
      maxHeight: 735,
      maxRatio: 0.6622516556291391,
      desiredWidth: 1024,
      desiredHeight: 624,
      chooseScale: Math.max,
      listening: false,
      listenOn: 'enter',
      unlistenOn: 'exit',
      stretchBackground: false,
      register: function() {
        this.refresher = this.getRefresher();
        this.conditional = this.getConditionalRefresher();
        this.onRegister();
      },
      boot: function() {
        this.onBoot();
      },
      refresh: function() {
        var ratio = 1; // window.devicePixelRatio || 1;
        var windowWidth = document.body.clientWidth / ratio;
        var windowHeight = document.body.clientHeight / ratio;
        var scaleW = windowWidth / this.maxWidth;
        var scaleH = windowHeight / this.maxHeight;
        var scale = this.chooseScale(scaleW, scaleH);
        var offsetX = (windowWidth - this.desiredWidth) * 0.5;
        var offsetY = (windowHeight - this.desiredHeight) * 0.5;

        // HARDCODE bad - but in newer frameworks we don't have this mess
        if (windowHeight > windowWidth) {
          $(isMobile ? '#wrongMobile' : '#wrong').removeClass('hidden');
          return;
        } else {
          $(isMobile ? '#wrongMobile' : '#wrong').addClass('hidden');
        }
        
        var ratio = windowHeight / windowWidth;
        if (ratio > this.maxRatio) {
          $(isMobile ? '#smallMobile' : '#small').removeClass('hidden');
          return;
        } else {
          $(isMobile ? '#smallMobile' : '#small').addClass('hidden');
        }

        if(!this.container.animator().set) return;
        
        this.container
          .data('scale', scale)
          .animator()
          .set({
            scale: scale,
            left: offsetX,
            top: Math.floor(offsetY)
          })
        ;
        
        if (this.stretchBackground)
        {
          var scaleX = Math.max(1, scaleW / scaleH);
          var scaleY = Math.max(1, scaleH / scaleW);
          
          this.container.find('.background')
            .animator()
            .set({
              scale: [scaleX, scaleY],
              origin: [50, 50]
            })
          ;
          
          var contentMax = this.maxWidth / this.desiredWidth;
          var contentModifier = this.maxWidth / (this.desiredWidth + windowWidth);
          var contentScale = contentMax * Math.min(1, contentModifier);
          
          this.container.find('.content')
            .animator()
            .set({
              scale: contentScale
            })
          ;
        }
        
        var viewport = this.container.parent()[0];
        
        if (isTouch && viewport) {
          var viewportWidth = viewport.offsetWidth / ratio;
          var viewportHeight = viewport.offsetHeight / ratio;
          
          this.container.parent().find('.bottomed').css({
            bottom: viewportHeight - windowHeight
          });
        }
        
        window.SCALE = scale;
        
        this.onRefresh(scale, offsetX, offsetY, windowWidth, windowHeight);
      },
      getRefresher: function() {
        return function() {
          config.refresh();
        };
      },
      getConditionalRefresher: function() {
        var windowHeight = window.innerHeight;
        return function() {
          if (windowHeight !== window.innerHeight) {
            windowHeight = window.innerHeight;
            config.refresh();
          }
        };
      },
      listen: function() {
        if (!this.listening) {
          this.listening = true;
          window.addEventListener('resize', this.refresher, true);
          window.addEventListener('scroll', this.conditional, true);
          this.refresher();
        }
      },
      unlisten: function() {
        if (this.listening) {
          this.listening = false;
          window.removeEventListener('resize', this.refresher);
          window.removeEventListener('scroll', this.conditional);
        }
      },
      onRefresh: function(scale, offsetX, offsetY, windowWidth, windowHeight) {
      
      },
      onRegister: function() {
      
      },
      onBoot: function() {
      
      }
    };

    if (typeof givenConfig === 'string') {
      givenConfig = {
        container: givenConfig
      };
    }

    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.register();
    config.boot();
    
    setSceneEventHandler(this, config.listenOn, config.listen.bind(config));
    setSceneEventHandler(this, config.unlistenOn, config.unlisten.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * VISIBILITY CONTROLLER
 ************************************************************/
function getVisibilityController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: 'visibility',
      scene: this,
      container: null,
      hiddenClass: 'hidden',
      showOn: 'enter',
      hideOn: 'exit',
      lazyImages: true,
      lazyImageFilter: '[data-src]',
      lazyImageDataAttribute: 'src',
      lazyImageTotal: 0,
      lazyImageLoaded: 0,
      loading: false,
      show: function() {
        this.container.removeClass(this.hiddenClass);
        if (this.lazyImageTotal === 0) {
          this.loadImages();
        }
      },
      hide: function() {
        this.container.addClass(this.hiddenClass)
      },
      boot: function() {
        this.onPreBoot();
        if (this.lazyImages) {
          this.loadImages();
        }
        this.onBoot();
      },
      loadImages: function() {
        this.loading = true;
        this.lazyImageTotal = this.lazyImageLoaded = 0;
        
        var images = this.container.find(this.lazyImageFilter);
        
        if (this.scene.backwards) {
          images = images.reverse();
        }
        
        images.each(function() {
          var img = $(this);
          config.checkImage(img);
          if (!img.attr('src')) {
            img.attr('src', img.data(config.lazyImageDataAttribute));
          }
        });
        
        this.loading = false;
        this.checkImagesLoaded();
      },
      checkImage: function(img) {
        this.lazyImageTotal++;
        img.whenLoaded(function() {
          config.handleImageLoad();
        });
      },
      handleImageLoad: function() {
        this.lazyImageLoaded++;
        if (!this.loading) {
          this.checkImagesLoaded();
        }
      },
      checkImagesLoaded: function() {
        if (this.lazyImageLoaded >= this.lazyImageTotal) {
          this.onImagesLoaded();
        }
      },
      onImagesLoaded: function() {
      
      },
      onPreBoot: function() {
      
      },
      onBoot: function() {
      
      }
    };
    
    if (typeof givenConfig === 'string') {
      givenConfig = {
        container: givenConfig
      };
    }
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.boot();
    
    setSceneEventHandler(this, config.showOn, config.show.bind(config));
    setSceneEventHandler(this, config.hideOn, config.hide.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * HELP CONTROLLER
 ************************************************************/
function getHelpController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      helps: '[data-help]',
      hides: '.hide-help',
      attribute: 'help',
      current: null,
      resetOn: 'exit',
      hiddenClass: 'hidden',
      helpPrefix: '.help-',
      animateHelpHideAttribute: 'helpHide',
      animateHelpShowAttribute: 'helpShow',
      register: function() {
        this.helps = this.container.find(this.helps);
        this.hides = this.container.find(this.hides);
      },
      boot: function() {
        this.helps.click(function() {
          config.setHelp($(this));
        });
        this.hides.click(function() {
          config.hideCurrent();
        });
      },
      reset: function() {
        this.hideCurrent();
      },
      hideCurrent: function() {
        if (this.current) {
          m8.outro(this.container.find(this.helpPrefix + this.current), this.animateHelpHideAttribute, this.hiddenClass);
          this.current = null;
        }
      },
      setHelp: function(helpLink) {
        var helpName = helpLink.data(this.attribute);
        if (helpName) {
          var current = this.current;
          this.reset();
          if (current !== helpName) {
            m8.intro(this.container.find(this.helpPrefix + helpName), this.animateHelpShowAttribute, this.hiddenClass);
            this.current = helpName;
          }
        }
      }
    };
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.register();
    config.boot();
    
    setSceneEventHandler(this, config.resetOn, config.reset.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

 /************************************************************\
  * SLIDESHOW CONTROLLER
  ************************************************************/
function getSlideshowController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      next: '.next',
      prev: '.prev',
      showPrefix: 'slide-',
      hiddenClass: 'hidden',
      disabledClass: 'disabled',
      showPrefix: '.show-',
      hidePrefix: '.hide-',
      animateShowAttribute: 'slideShow',
      animateHideAttribute: 'slideHide',
      animateDisableAttribute: 'slideDisabled',
      animateEnableAttribute: 'slideEnabled',
      index:  0,
      resetIndex: 0,
      resetOn: 'exit',
      slides: [],
      visited: {},
      onDisabled: function(button) {
        m8.outro(button, this.animateDisableAttribute, this.disabledClass);
      },
      onEnabled: function(button) {
        m8.intro(button, this.animateEnableAttribute, this.disabledClass);
      },
      onChange: function(fromSlide, toSlide) {
      
      },
      onShow: function(slide) {
      
      },
      onHide: function(slide) {
      
      },
      reset: function() {
        if (isFinite(this.resetIndex)) {
          if (this.resetIndex !== this.index) {
            this.goto(this.resetIndex);
          }
          this.visited = {};
        }
      },
      show: function(slide) {
        m8.intro(this.container.find(this.showPrefix + slide), this.animateShowAttribute, this.hiddenClass);
        m8.outro(this.container.find(this.hidePrefix + slide), this.animateHideAttribute, this.hiddenClass);
      },
      hide: function(slide) {
        m8.intro(this.container.find(this.hidePrefix + slide), this.animateShowAttribute, this.hiddenClass);
        m8.outro(this.container.find(this.showPrefix + slide), this.animateHideAttribute, this.hiddenClass);
      },
      gotoNext: function() {
        this.goto(this.index + 1);
      },
      gotoPrev: function() {
        this.goto(this.index - 1);
      },
      goto: function(next) {
        if (next >= 0 && next < this.slides.length) {
          var prev = this.index;
          this.hide( this.slides[ prev ] );
          this.onHide( this.slides[ prev ] );
          this.index = next;
          this.update( next, prev );
          this.onChange( this.slides[ prev ], this.slides[ next ] );
        }
      },
      update: function(current, previous) {
        var n = this.slides.length - 1;
        this.show( this.slides[ current ] );
        this.onShow( this.slides[ current ] );
        if (current === 0) {
          this.onDisabled( this.prev )
        }
        else if (previous === 0) {
          this.onEnabled( this.prev );
        }
        if (current === n) {
          this.onDisabled( this.next );
        }
        else if (previous === n) {
          this.onEnabled( this.next );
        }
        this.visited[ this.slides[ current ] ] = true;
      },
      register: function() {
        this.next = this.container.find(this.next);
        this.prev = this.container.find(this.prev);
      },
      boot: function() {
        this.next.click(function() {
          config.gotoNext();
        });
        
        this.prev.click(function() {
          config.gotoPrev();
        });
        
        this.update( this.index, -1 );
      }
    };
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.register();
    config.boot();
    
    setSceneEventHandler(this, config.resetOn, config.reset.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * OPTION QUESTION CONTROLLER
 ************************************************************/
function getQuestionOptionsController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      selectedClass: 'selected',
      correctClass: 'correct',
      incorrectClass: 'incorrect',
      finishedShow: '.finished-show',
      finishedHide: '.finished-hide',
      answers: '.answer',
      submitter: '.submit',
      multiple: false,
      correct: '.answer.good',
      selected: '.answer.selected',
      hiddenClass: 'hidden',
      animateUnselectAttribute: 'questionUnselect',
      animateSelectAttribute: 'questionSelect',
      animateCorrectAttribute: 'questionCorrect',
      animateIncorrectAttribute: 'questionIncorrect',
      animateShowAttribute: 'questionShow',
      animateHideAttribute: 'questionHide',
      tries: 1,
      tryCount: 0,
      resetOn: 'exit',
      isCorrect: function() {
        return this.selected.is(this.correct);
      },
      unselect: function(possible) {
        m8.intro(possible, this.animateUnselectAttribute, this.selectedClass);
        this.selected = this.selected.not(possible);
      },
      select: function(answer) {
        if (this.selected.index(answer) == -1) {
          if (!this.multiple) {
            this.unselect(this.selected);
            this.onUnselect();
          }
          this.selected = this.selected.add(answer);
          m8.outro(answer, this.animateSelectAttribute, this.selectedClass, true);
          this.onSelect();
        } else {
          this.selected = this.selected.not(answer);
          m8.intro(answer, this.animateUnselectAttribute, this.selectedClass);
          this.onUnselect();
        }
      },
      submit: function() {
        m8.outro(this.correct, this.animateCorrectAttribute, this.correctClass, true);
        m8.outro(this.selected.not(this.correct), this.animateIncorrectAttribute, this.incorrectClass, true);
        this.tryCount++;
        if (this.tryCount >= this.tries) {
          m8.outro(this.container.find(this.finishedHide), this.animateHideAttribute, this.hiddenClass);
          m8.intro(this.container.find(this.finishedShow), this.animateShowAttribute, this.hiddenClass);
          this.onFinished();
        } else {
          this.onRetry();
        }
      },
      reset: function() {
        this.unselect(this.answers);
        this.tryCount = 0;
        this.answers.removeClass(this.incorrectClass);
        this.answers.removeClass(this.correctClass);
        this.container.find(this.finishedHide).removeClass(this.hiddenClass);
        this.container.find(this.finishedShow).addClass(this.hiddenClass);
      },
      register: function() {
        this.answers = this.container.find(this.answers);
        this.submitter = this.container.find(this.submitter);
        this.correct = this.container.find(this.correct);
        this.selected = this.container.find(this.selected);
      },
      boot: function() {
        this.answers.click(function() {
          config.select($(this));
        });
        
        this.submitter.click(function() {
          config.submit();
        });
      },
      onRetry: function() {
        // TODO
      },
      onFinished: function() {
      
      },
      onSelect: function() {
      
      },
      onUnselect: function() {
      
      }
    };
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.register();
    config.boot();
    
    setSceneEventHandler(this, config.resetOn, config.reset.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * TOGGLE CONTROLLER
 ************************************************************/
function getToggleController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      toggles: '[data-toggle]',
      previous: null,
      resetOn: 'enter',
      dataToggle: 'toggle',
      toggledClass: 'toggled',
      hiddenClass: 'hidden',
      prefixHide: '.hide-',
      prefixShow: '.show-',
      animateHide: 'toggleHide',
      animateHideOutro: 'toggleHideOut',
      animateShow: 'toggleShow',
      animateShowOutro: 'toggleShowOut',
      animateToggled: 'toggleToggled',
      animateUntoggled: 'toggleUntoggled',
      register: function() {
        this.toggles = this.container.find(this.toggles);
      },
      boot: function() {
        this.toggles.click(function() {
          config.toggle($(this));
        });
      },
      reset: function() {
        this.untoggle();
        this.previous = null;
        this.onReset();
      },
      untoggle: function(next) {
        if (this.previous) {
          var prevState = this.getPreviousState();
          m8.intro(this.container.find(this.prefixHide + prevState), this.animateHide, this.hiddenClass);
          m8.outro(this.container.find(this.prefixShow + prevState), this.animateShowOutro, this.hiddenClass);
          m8.intro(this.previous, this.animateUntoggled, this.toggledClass);
          this.onUncheck(this.previous, next);
        }
      },
      getPreviousState: function() {
        return this.previous ? this.previous.data(this.dataToggle) : '';
      },
      toggle: function(toggle) {
        var nextState = toggle.data(this.dataToggle);
        var prevState = this.getPreviousState();
        
        this.untoggle(toggle);
        
        if (nextState !== prevState) {
          m8.intro(this.container.find(this.prefixShow + nextState), this.animateShow, this.hiddenClass);
          m8.outro(this.container.find(this.prefixHide + nextState), this.animateHideOutro, this.hiddenClass);
          m8.outro(toggle, this.animateToggled, this.toggledClass);
          this.onCheck(toggle);
          this.previous = toggle;
        }  else {
          this.previous = null;
        }
      },
      onUncheck: function(toggle) {
      
      },
      onCheck: function(toggle) {
      
      },
      onReset: function() {
      
      }
    };
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.register();
    config.boot();
    
    setSceneEventHandler(this, config.resetOn, config.reset.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * CHECKBOX CONTROLLER
 ************************************************************/
function getCheckController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      checks: '[data-check]',
      checkedClass: 'checked',
      uncheckableClass: 'uncheckable',
      attribute: 'check',
      animateCheckAttribute: 'checkPlay',
      animateCheckHideAttribute: 'checkHide',
      animateCheckedAttribute: 'checkChecked',
      animateUncheckedAttribute: 'checkUnchecked',
      hiddenClass: 'hidden',
      showPrefix: '.show-',
      hidePrefix: '.hide-',
      clearOn: 'enter',
      maximum: null,
      register: function() {
        this.checks = this.container.find(this.checks);
        this.onRegister();
      },
      boot: function() {
        this.checks.click(function() {
          config.toggleCheck($(this));
        });
        this.onBoot();
      },
      clear: function() {
        this.checks.each(function() {
          var checkbox = $(this);
          if (checkbox.hasClass(config.checkedClass)) {
            config.toggleCheck(checkbox, true);
          }
        });
        this.onClear();
      },
      toggleCheck: function(checkbox, clearing) {
        var name = checkbox.data(this.attribute);
        var checked = checkbox.hasClass(this.checkedClass);
        var uncheckable = checkbox.hasClass(this.uncheckableClass);
        if (checked && !uncheckable) {
          m8.outro(this.container.find(this.showPrefix + name), this.animateCheckHideAttribute, this.hiddenClass);
          m8.intro(this.container.find(this.hidePrefix + name), this.animateCheckAttribute, this.hiddenClass);
          m8.intro(checkbox, this.animateCheckedAttribute, this.checkedClass);
          this.onUncheck(checkbox, clearing);
        } else if (!checked) {
          if (this.maximum !== null) {
            if (this.getChecked().length >= this.maximum) {
              return;
            }
          }
          m8.outro(this.container.find(this.hidePrefix + name), this.animateCheckHideAttribute, this.hiddenClass);
          m8.intro(this.container.find(this.showPrefix + name), this.animateCheckAttribute, this.hiddenClass);
          m8.outro(checkbox, this.animateUncheckedAttribute, this.checkedClass, true);
          this.onCheck(checkbox);
        }
      },
      getChecked: function() {
        return this.checks.filter('.' + this.checkedClass);
      },
      onClear: function() {
      
      },
      onCheck: function(checkbox) {
      
      },
      onUncheck: function(checkbox) {
      
      },
      onRegister: function() {
      
      },
      onBoot: function() {
      
      }
    };
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.register();
    config.boot();
    
    setSceneEventHandler(this, config.clearOn, config.clear.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * STARS CONTROLLER
 ************************************************************/
function getStarsController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      count: 40,
      stars: [
        'images/global/star.gif',
        'images/global/twinkle.gif'
      ],
      scales: [0.5],
      rangeX: { min: 0, max: 100 },
      rangeY: { min: 0, max: 100 },
      rangeUnit: '%',
      addDelay: 100,
      addOn: 'enter',
      removeOn: 'exit',
      addStars: function() {
        var count = this.random(this.count);
        for (var i = 0; i < count; i++) {
          this.addStar(i);
        }
      },
      addStar: function(index)
      {
        var delay = this.addDelay * index;
        
        var left = this.random(this.rangeX) + this.rangeUnit;
        var top = this.random(this.rangeY) + this.rangeUnit;
        var scale = this.random(this.scales);
        var starSource = this.random(this.stars);
        
        var container = this.container;
        var star = document.createElement('IMG');
        var animator = m8(star);
        
        setTimeout(function() {
          star.src = starSource;
          animator
            .set({
              left: left,
              top: top,
              scale: scale
            })
            .play('fadeIn 3s')
            .applyInitialState()
          ;
          container.append(star);
        }, delay);
      },
      removeStars: function() {
        this.container.children().animators().destroy();
        this.container.empty();
      },
      random: function(source) {
        if (source instanceof Array) {
          var i = Math.floor(source.length * Math.random());
          return source[ i ];
        }
        if (isFinite(source.min) && isFinite(source.max)) {
          return (source.max - source.min) * Math.random() + source.min;
        }
        if (isFinite(source)) {
          return source;
        }
        return Math.random();
      }
    };
    
    if (typeof givenConfig === 'string') {
      givenConfig = {
        container: givenConfig
      };
    }
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    
    setSceneEventHandler(this, config.addOn, config.addStars.bind(config));
    setSceneEventHandler(this, config.removeOn, config.removeStars.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * DIALOG CONTROLLER
 ************************************************************/
function getDialogController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      dialogSelector: '.dialog',
      dialogs: $(),
      triggers: '[data-dialog]',
      triggerAttribute: 'dialog',
      closers: '.close, .close-dialog',
      resetOn: 'exit',
      register: function() {
        this.dialogs = this.container.find(this.dialogSelector);
        this.triggers = this.container.find(this.triggers);
        this.closers = this.container.find(this.closers);
        this.onRegister();
      },
      boot: function() {
        this.triggers.click(function() {
          config.show($(this));
        });
        this.closers.click(function() {
          config.hide($(this));
        });
        this.onBoot();
      },
      reset: function() {
        this.dialogs.hideDialog(this.onHide.bind(this));
        this.onReset();
      },
      hide: function(closer) {
        var dialog = closer.closest(this.dialogSelector);
        
        if (this.onHideRequest(closer, dialog) !== false) {
          dialog.hideDialog(this.onHide.bind(this));
        }
      },
      show: function(opener) {
        var dialog = this.dialogs.filter(opener.data(this.triggerAttribute));

        if (this.onShowRequest(opener, dialog) !== false) {
          dialog.showDialog(this.onShow.bind(this));
        }
      },
      onShow: function(dialog) {
      
      },
      onShowRequest: function(opener, dialog) {
      
      },
      onHide: function(dialog) {
      
      },
      onHideRequest: function(closer, dialog) {
      
      },
      onReset: function() {
      
      },
      onRegister: function() {
      
      },
      onBoot: function() {
      
      }
    };
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.register();
    config.boot();
    
    setSceneEventHandler(this, config.resetOn, config.reset.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * INITIAL STATE CONTROLLER
 ************************************************************/
function getApplyInitialStateController(getCalls)
{
  return function()
  {
    this.transition('*', 'DURING', getCalls,
      function onStateChange(current, previous, progress, builder) {
        builder.execute = function() {};
        if (current === 'DURING' && previous !== '') {
          builder.executeInitials( current, progress );
        }
      }
    );
  };
}
/************************************************************\
 * GATE CONTROLLER
 ************************************************************/
function getGatedController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: 'gate',
      scene: this,
      opened: false,
      min: true,
      max: false,
      open: function() {
        this.opened = true;
        this.getTarget().constrain(false, false);
      },
      close: function() {
        this.opened = false;
      },
      getTarget: function() {
        return this.scene;
      },
      intro: function() {
        if (!this.opened) {
          this.getTarget().constrain(this.min, this.max);
        }
      },
      outro: function() {
        if (this.opened) {
          this.getTarget().constrain(false, false);
        }
      }
    };
    
    var config = $.extend({}, defaultConfig, givenConfig);
    
    this.intro(function() {
      this.call(function() {
        config.intro();
      });
    });
    
    this.outro(function() {
      this.call(function() {
        config.outro();
      });
    });
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
 * DRAG & DROP CONTROLLER
 ************************************************************/
function getDragDropOrderController(givenConfig)
{
   return function()
   {
     var defaultDraggableOptions = {
       scroll: false,
       zIndex: 10,
       revert: function() {
         return !$(this).data('dropped');
       },
       start: function(evt, ui) {
         var $this = $(this);
         var scale = config.scaleContainer.data('scale');
         ui.position.left /= scale;
         ui.position.top /= scale;
         $this.data('dragging', true);
       },
       drag: function(evt, ui) {
         var scale = config.scaleContainer.data('scale');
         ui.position.left /= scale;
         ui.position.top /= scale;
         config.onDrag();
       },
       stop: function(evt, ui) {
         var $this = $(this);
         if ($this.data('dragging')) {
           var existingDrop = $this.data('drop');
           if (existingDrop) {
             existingDrop.removeData('drag');
             $this.removeData('drop');
           }
           config.update();
         }
         config.onStop();
       }
     };
     var defaultDroppableOptions = {
       drop: function(evt, ui) {
         var $this = $(this);
         var existingDrop = ui.draggable.data('drop');
         if (existingDrop) {
           existingDrop.removeData('drag');
         }
         ui.draggable.data({
           dropped: true,
           dragging: false,
           drop: $this
         });
         ui.draggable.css({
           left: this.offsetLeft,
           top: this.offsetTop
         });
         $this.data('drag', ui.draggable);
         config.update();
         config.onDrop($this, evt, ui);
       },
       accept: function(draggable) {
         var $this = $(this);
         return !$this.data('drag');
       }
     };
     var defaultConfig = {
       name: false,
       scene: this,
       container: null,
       scaleContainer: null,
       draggable: null,
       droppable: null,
       submitter: null,
       filterScaleContainer: '.scene',
       filterDraggable: '.drag',
       filterDroppable: '.drop-area',
       filterSubmitter: '.submit',
       filterRetry: '.drag-retry',
       dragTargetAttribute: 'target',
       dropNameAttribute: 'name',
       filterDragDone: '.drag-done, [data-drag-done], [data-drag-done-out]',
       filterDragProgress: '.drag-progress, [data-drag-progress], [data-drag-progress-out]',
       filterDragSuccess: '.drag-success, [data-drag-success], [data-drag-success-out]',
       filterDragFailure: '.drag-failure, [data-drag-failure], [data-drag-failure-out]',
       filterDragRetry: '.drag-retry, [data-drag-retry], [data-drag-retry-out]',
       prefixDropSuccess: '.drop-success-',
       prefixDropFailure: '.drop-failure-',
       animateDragDone: 'dragDone',
       animateDragDoneOutro: 'dragDoneOut',
       animateDragProgress: 'dragProgress',
       animateDragProgressOutro: 'dragProgressOut',
       animateDragSuccess: 'dragSuccess',
       animateDragSuccessOutro: 'dragSuccessOut',
       animateDragFailure: 'dragFailure',
       animateDragFailureOutro: 'dragFailureOut',
       animateDropSuccess: 'dropSuccess',
       animateDropSuccessOutro: 'dropSuccessOut',
       animateDropFailure: 'dropFailure',
       animateDropFailureOutro: 'dropFailureOut',
       animateRetry: 'dragRetry',
       animateRetryOutro: 'dragRetroyOut',
       hiddenClass: 'hidden',
       resetOn: 'enter',
       done: false,
       dragOptions: {},
       dropOptions: {},
       tries: 1,
       tryCount: 0,
       correctOnFailure: false,
       register: function() {
         this.scaleContainer = this.container.closest(this.filterScaleContainer);
         this.draggable = this.container.find(this.filterDraggable);
         this.droppable = this.container.find(this.filterDroppable);
         this.submitter = this.container.find(this.filterSubmitter);
         this.retry = this.container.find(this.filterRetry);
         this.onRegister();
       },
       boot: function() {
         this.draggable.draggable(this.getDraggableOptions());
         this.droppable.droppable(this.getDroppableOptions());
         this.submitter.click(function() {
           config.submit();
         });
         this.retry.click(function() {
           var newCount = config.tryCount + 1;
           config.reset();
           config.tryCount = newCount;
           m8.outro(config.container.find(config.filterDragRetry), config.animateRetryOutro, config.hiddenClass);
         });
         this.onBoot();
       },
       reset: function(e, dialog) {
         // If no dialog is provided OR if the container is or within the dialog... reset the interaction
         if (!dialog || this.container.closest(dialog).length > 0) {
           this.container.html(this.initial);
           this.resetImages();
           this.register();
           this.boot();
           this.done = false;
           this.tryCount = 0;
           this.onReset();
         }
       },
       resetImages: function() {
         this.container.find('[data-src]').each(function() {
           var img = $(this);
           if (!img.attr('src')) {
             img.attr('src', img.data('src'));
           }
         });
       },
       getDraggableOptions: function() {
         return $.extend(defaultDraggableOptions, config.dragOptions);
       },
       getDroppableOptions: function() {
         return $.extend(defaultDroppableOptions, config.dropOptions);
       },
       update: function() {
         var newDone = this.getDragProgress() === 1.0;
         if (newDone !== this.done) {
           this.done = newDone;
           if (newDone) {
             m8.intro(this.container.find(this.filterDragDone), this.animateDragDone, this.hiddenClass);
             m8.outro(this.container.find(this.filterDragProgress), this.animateDragProgressOutro, this.hiddenClass);
             this.onDragDone();
           } else {
             m8.intro(this.container.find(this.filterDragProgress), this.animateDragProgress, this.hiddenClass);
             m8.outro(this.container.find(this.filterDragDone), this.animateDragDoneOutro, this.hiddenClass);
             m8.outro(this.container.find(this.filterDragSuccess), this.animateDragSuccessOutro, this.hiddenClass);
             m8.outro(this.container.find(this.filterDragFailure), this.animateDragFailureOutro, this.hiddenClass);
             m8.outro(this.container.find(this.filterDragRetry), this.animateRetryOutro, this.hiddenClass);
             this.onDragProgress();
           }
         }
       },
       getDragProgress: function() {
         var dragCount = 0;
         var dragTotal = this.droppable.length; // Changed this from draggable.length to dropbable length to cover the situations when only x of y draggable items are selected. exe: when I have 4 draggable elements but only 2 destination slots.
         this.draggable.each(function() {
           if ($(this).data('drop')) {
             dragCount++;
           }
         });
         return dragCount / dragTotal;
       },
       submit: function() {
         if (this.done) {
           var correct = true;
           this.droppable.each(function() {
             var drop = $(this);
             var dropName = drop.data(config.dropNameAttribute);
             m8.outro(config.container.find(config.prefixDropSuccess + dropName), config.animateDropSuccessOutro, config.hiddenClass);
           });
           this.draggable.each(function() {
             var drag = $(this);
             var drop = drag.data('drop');
             if (drop) {
               var target = drag.data(config.dragTargetAttribute);
               var dropName = drop.data(config.dropNameAttribute);
               // Code to allow drop area to accept more than 1 correct value
               if(dropName instanceof Array) {
                 if(dropName.indexOf(target) !== -1) {
                   dropName = target;
                 }
               }
               if (dropName === target) {
                 m8.intro(config.container.find(config.prefixDropSuccess + drop.data('correct')), config.animateDropSuccess, config.hiddenClass);
                 m8.outro(config.container.find(config.prefixDropFailure + drop.data('correct')), config.animateDropFailureOutro, config.hiddenClass);
                 config.onDragCorrect(drag, drop)
               } else {
                 correct = false;
                 m8.intro(config.container.find(config.prefixDropFailure + drop.data('correct')), config.animateDropFailure, config.hiddenClass);
                 m8.outro(config.container.find(config.prefixDropSuccess + drop.data('correct')), config.animateDropSuccessOutro, config.hiddenClass);
                 config.onDragIncorrect(drag, drop);
               }
             } else {
               config.onDragNoDrop(drag);
               correct = false;
             }
           });
           
           if (correct) {
             m8.intro(this.container.find(this.filterDragSuccess), this.animateDragSuccess, this.hiddenClass);
             m8.outro(this.container.find(this.filterDragFailure), this.animateDragFailureOutro, this.hiddenClass);
             this.onFinish();
           } else if (this.tryCount < this.tries) {
             m8.intro(this.container.find(this.filterDragRetry), this.animateRetry, this.hiddenClass);
           } else {
             m8.intro(this.container.find(this.filterDragFailure), this.animateDragFailure, this.hiddenClass);
             m8.outro(this.container.find(this.filterDragSuccess), this.animateDragSuccessOutro, this.hiddenClass);
             if (this.correctOnFailure) {
               this.applyCorrect();
             }
           }
           
           this.onSubmit(correct);
         } else {
           this.onDragSubmitNotDone();
         }
       },
       applyCorrect: function() {
          this.droppable.each(function() {
            var drop = $(this);
            var dropName = drop.data(config.dropNameAttribute);
            var dropCorrect = drop.data('correct');
            if(dropCorrect != null) {
              dropName = dropCorrect;
            }
            
            var correct = null;
            config.draggable.each(function() {
              var drag = $(this);
              var target = drag.data(config.dragTargetAttribute);
              if (target === dropName) {
                correct = drag;
              }
            });
            
            if (correct && correct !== drop.data('drag')) {
              drop.data('drag', correct);
              correct.data('drop', drop);
              m8.intro(config.container.find(config.prefixDropSuccess + dropName), config.animateDropSuccess, config.hiddenClass);
              m8.outro(config.container.find(config.prefixDropFailure + dropName), config.animateDropFailureOutro, config.hiddenClass);
              correct.css({
                top: this.offsetTop,
                left: this.offsetLeft,
              });
            }
          });
          this.onApplyCorrect();
          this.onFinish();
       },
       onApplyCorrect: function() {
       
       },
       onRegister: function() {
       
       },
       onBoot: function() {
       
       },
       onReset: function() {
       
       },
       onDragSubmitNotDone: function() {
       
       },
       onDragCorrect: function(drag, drop) {
       
       },
       onDragIncorrect: function(drag, drop) {
       
       },
       onDragNoDrop: function(drag)  {
       
       },
       onDragDone: function() {
       
       },
       onDragProgress: function() {
       
       },
       onDrop: function() {
       
       },
       onDrag: function() {
       
       },
       onStop: function() {
       
       },
       onSubmit: function() {
       
       },
       onFinish: function() {

       }
     };
     
     var config = $.extend({}, defaultConfig, givenConfig);
     config.container = $(config.container);
     config.initial = config.container.html();
     config.register();
     config.boot();
     
     setSceneEventHandler(this, config.resetOn, config.reset.bind(config));
     
     if (config.name) {
       this[ config.name ] = config;
     }
   };
 }
 
 /************************************************************\
  * DRAG & DROP COMMAND CONTROLLER
  ************************************************************/
 function getDragDropCommandController(givenConfig)
 {
    return function()
    {
      function Command(template, element)
      {
        this.highlight = template; //screen.sprite( template.data('highlight') );
        this.template = template;
        this.element = element;
        this.index = -1;
        this.slotted = false;
        this.element.data( 'instance', this );
      }
      
      Command.prototype =
      {
        // Dropped off the slot tray
        destroy: function( dontAnimate )
        {
          this.unplace();

          if ( dontAnimate )
          {
            this.remove();
          }
          else
          {
            this.element
              .animator()
              .play('blurOut 0.5s')
              .applyInitialState()
              .once('finished', this.remove, this);
            ;
          }
        },
        // remove from screen
        remove: function()
        {
          this.element.remove();
        },
        // remove from slot tray
        unplace: function()
        {
          if (this.index !== -1) {
            config.commands[ this.index ] = null;
            this.index = -1;
          }
        },
        // get the bounds og the given jQuery element.
        getRect: function($e)
        {
          var r = $e[0].getBoundingClientRect()
          var c = config.commandContainer[0].getBoundingClientRect()
          var scale = config.scaleContainer.data('scale');
          
          return {
            left: (r.left - c.left) / scale,
            top: (r.top - c.top) / scale,
            width: r.width / scale,
            height: r.height / scale
          };
        },
        // Place this command on the given slot
        place: function(slot, fromTemplate, currentPosition)
        {
          var element = this.element;
          var data = $.extend( {}, slot.data() );
          
          var slotRect = this.getRect( slot );
          var commandRect = this.getRect( element );
          var templateRect = this.getRect( this.template );
          var start = fromTemplate ? templateRect : commandRect;
          var end = slotRect;
          
          var animate = !element.is('.ui-draggable-dragging');
          
          if ( animate && currentPosition )
          {
            start.left = currentPosition.left;
            start.top = currentPosition.top;
          }
          
          element.data( data );
          element.css({
            top: end.top,
            left: end.left
          });
          
          this.back();
          
          this.index = slot.data('index');
          config.commands[ this.index ] = this;
          
          if ( !animate )
          {
            return;
          }
          
          var animation = {
            keyframe: {
              from: {
                translateX: (start.left - end.left),
                translateY: (start.top - end.top)
              },
              to: {
                translateX: 0,
                translateY: 0
              }
            }
          };
          var animationOptions = {
            duration: 300
          };
          
          anim8( element[0] )
            .play( animation, animationOptions )
            .applyInitialState()
          ;
        },
        front: function()
        {
          this.element.css('zIndex', 100);
        },
        back: function()
        {
          this.element.css('zIndex', 50);
        }
      };
      
      var defaultConfig = {
        name: false,
        scene: this,
        container: null,
        scaleContainer: null,
        commandContainer: null,
        slots: null,
        commandTemplates: null,
        activeSlot: false,
        commands: [],
        submitter: null,
        filterSlots: '.drop-area',
        filterCommands: '.game-control',
        filterScaleContainer: '.scene',
        filterCommandContainer: '.content',
        filterSubmitter: '.launch-button',
        filterRetry: '.reset-button',
        hiddenClass: 'hidden',
        resetOn: 'enter',
        done: false,
        tries: 1,
        tryCount: 0,
        correctOnFailure: false,
        register: function() {
          this.scaleContainer = this.container.closest(this.filterScaleContainer);
          this.commandContainer = this.container.find(this.filterCommandContainer)
          this.slots = this.container.find(this.filterSlots)
          this.commandTemplates = this.container.find(this.filterCommands)
          this.commands = new Array( this.slots.length )
          this.commands.last = function() {
            return this[ this.count() - 1 ];
          };
          this.commands.count = function() {
            for (var i = 0; i < this.length; i++) {
              if (!this[i]) {
                return i;
              }
            }
            return this.length;
          };
          
          this.submitter = this.container.find(this.filterSubmitter);
          this.retry = this.container.find(this.filterRetry);
          this.onRegister();
        },
        boot: function() {
          
          this.commandTemplates.draggable({
            distance: 3,
            // containment: this.container,
            revert: 'invalid',
            scroll: false,
            helper: 'clone',
            start: function(e, ui)
            {
              $(ui.helper).css('zIndex', 100);
              $(ui.helper).removeAttr('anim8').animator().play('scaleUp');
              
              var scale = config.scaleContainer.data('scale');
              ui.position.left /= scale;
              ui.position.top /= scale;
              config.onDrag();
            },
            drag: function(evt, ui) {
              var scale = config.scaleContainer.data('scale');
              ui.position.left /= scale;
              ui.position.top /= scale;
              config.onDrag();
            },
            stop: function(e, ui)
            {
              $(ui.helper).removeAttr('anim8').animator().play('scaleDown');
            }
          });
          
          this.commandTemplates.click(function() {
            var last = config.getLastOpenSlot();
            
            if ( last !== false ) {
              config.onNewCommandDrop( $(this), last, true );
            }
          });
          
          this.slots.droppable({
            // Accept a draggable if it already has an instance OR the last slot is not filled.
            tolerance: 'pointer',
            accept: function(command)
            {
              return command.data('instance') || config.commands.length !== config.commands.count();
            },
            drop: function(event, ui)
            {
              var slot = config.findSlot( $(this) );
              var command = ui.draggable;
              
              if ( slot )
              {
                if ( !command.data('instance') )
                {
                  config.onNewCommandDrop( command, slot, false, ui.position );
                }
                else
                {
                  config.onExistingCommandDrop( command, slot );
                }
              }
              
              config.deactivateSlot();

              return !!slot;
            },
            over: function(event, ui)
            {
              var slot = $(this);
              
              config.makeRoom( slot );
              
              var dropSlot = config.findSlot( slot );
              
              if ( dropSlot )
              {
                config.deactivateSlot();
                config.activeSlot = dropSlot;
                config.activeSlot.animator().play('pulse infinite');
              }
            },
            out: function(event, ui)
            {
              config.deactivateSlot();
            }
          });
          this.slots.css('zIndex', 10)
          
          // Initialize slots with their index
          this.slots.each(function(i)
          {
            $(this).data( 'index', i );
          });
          
          this.submitter.click(function() {
            config.submit();
          });
          this.retry.click(function() {
            config.destroyCommands()
            config.onRetry()
          });
          this.onBoot();
        },
        reset: function(e, dialog) {
          // If no dialog is provided OR if the container is or within the dialog... reset the interaction
          if (!dialog || this.container.closest(dialog).length > 0) {
            this.container.html(this.initial);
            this.resetImages();
            this.register();
            this.boot();
            this.done = false;
            this.tryCount = 0;
            this.onReset();
          }
        },
        resetImages: function() {
          this.container.find('[data-src]').each(function() {
            var img = $(this);
            if (!img.attr('src')) {
              img.attr('src', img.data('src'));
            }
          });
        },
        destroyLast: function() {
          var last = this.commands.last();
          if ( last ) {
            last.destroy();
            // SoundEngine.play( 'com-2' ); TODO
          }
        },
        deactivateSlot: function()
        {
          if ( this.activeSlot )
          {
            this.activeSlot.animator().restore().stop()
            this.activeSlot = false;
          }
        },
        onNewCommandDrop: function(commandTemplate, slot, fromTemplate, currentPosition)
        {
          var command = commandTemplate.clone();
          var instance = new Command( commandTemplate, command );
          
          command
            .appendTo( this.commandContainer )
            .removeAttr('anim8')
            .draggable(
            {
              distance: 3,
              // containment: this.commandContainer,
              scroll: false,
              revert: function(dropped)
              {
                if ( !dropped )
                {
                  instance.destroy();
                  config.compressCommands();
                  config.deactivateSlot();

                  // SoundEngine.play( 'com-2' ); TODO
                }
                
                return false;
              },
              drag: function(evt, ui) {
                var scale = config.scaleContainer.data('scale');
                ui.position.left /= scale;
                ui.position.top /= scale;
                config.onDrag();
              },
              start: function(e, ui)
              {
                instance.front();
                instance.unplace();
                command.animators().play('scaleUp');
                
                var scale = config.scaleContainer.data('scale');
                ui.position.left /= scale;
                ui.position.top /= scale;
                config.onDrag();
              },
              stop: function()
              {
                command.animators().play('scaleDown');
              }
            })
          ;
          
          command
            .animator()
            .play( 'bounceIn 0.5s' )
          ;
          
          instance.place( slot, fromTemplate, currentPosition );
          instance.back();

          // SoundEngine.play( 'com-1' ); TODO
        },
        onExistingCommandDrop: function(command, slot)
        {
          var instance = command.data('instance');
          
          instance.place( slot, false );
          instance.back();

          command.animator().play( 'bounceIn 0.5s' );
        },
        findSlot: function(slot)
        {
          var slotIndex = slot.data('index');
          
          // If the slot doesn't have a command...
          if ( !this.commands[slotIndex] )
          {
            // If there are only commands to the left... it's a fine choice!
            var filled = true;
            for (var i = 0; i < slotIndex; i++)
            {
              filled = filled && this.commands[i]
            }
            if (filled)
            {
              return slot;
            }
          }
          
          // Find the last open slot...
          return this.getLastOpenSlot();
        },
        makeRoom: function(slot)
        {
          var slotIndex = slot.data('index');
          
          // Move commands to the left (when you're dragging a command to the right)
          for (var i = 0; i <= slotIndex; i++)
          {
            if ( !this.commands[i] )
            {
              var next = this.findSlottedCommand( i, 1, this.slots.length );
            
              if ( next )
              {
                this.moveCommand( next, i );
              }
            }
          }
          
          // If the slot has a command, move the commands in the slots to the right one more
          if ( this.commands[slotIndex] )
          {
            var pushCommand = function(index)
            {
              var next = index + 1;
              var hasNext = next < Math.min( config.commands.count() + 1, config.commands.length );
              
              if ( hasNext )
              {
                pushCommand( next );

                if ( config.commands[ index ] && !config.commands[ next ] )
                {
                  config.moveCommand( index, next );
                }
              }
            };
            
            pushCommand( slotIndex );
          }
        },
        compressCommands: function()
        {
          var last = this.commands.length - 1;
          
          for (var i = 0; i < last; i++)
          {
            var next = this.findSlottedCommand( i + 1, 1, this.commands.length );
            
            if ( !this.commands[ i ] && next !== false )
            {
              this.moveCommand( next, i );
            }
          }
        },
        getLastOpenSlot: function()
        {
          var last = this.commands.length - 1;
          
          for (var i = last; i >= 0; i--)
          {
            if ( this.commands[ i ] )
            {
              return i === last ? false : this.slots.eq( i + 1 );
            }
          }
          
          return this.slots.eq( 0 );
        },
        findSlottedCommand: function(start, direction, max)
        {
          while (start != max)
          {
            if ( this.commands[start] )
            {
              return start;
            }
            
            start += direction;
          }
          
          return false;
        },
        moveCommand: function(currentSlot, nextSlot)
        {
          if ( this.commands[ nextSlot ] )
          {
            return false;
          }
          
          this.commands[ currentSlot ].place( this.slots.eq( nextSlot ), false );
          this.commands[ nextSlot ] = this.commands[ currentSlot ];
          this.commands[ currentSlot ] = null;
        },
        destroyCommands: function(dontAnimate)
        {
          var destroyed = false;

          // Destroy the commands!
          for (var i = 0; i < this.commands.length; i++)
          {
            var command = this.commands[i];

            if ( command )
            {
              command.destroy( dontAnimate );
              destroyed = true;

              this.commands[i] = null;
            }
          }

          if ( destroyed )
          {
            // SoundEngine.play( 'com-2' );  TODO
          }
        },
        submit: function() {
          this.onSubmit(this.commands.slice(0, this.commands.count()));
        },
        applyCorrect: function() {
           this.droppable.each(function() {
             var drop = $(this);
             var dropName = drop.data(config.dropNameAttribute);
             
             var correct = null;
             config.draggable.each(function() {
               var drag = $(this);
               var target = drag.data(config.dragTargetAttribute);
               if (target === dropName) {
                 correct = drag;
               }
             });
             
             if (correct && correct !== drop.data('drag')) {
               drop.data('drag', correct);
               correct.data('drop', drop);
               m8.intro(config.container.find(config.prefixDropSuccess + dropName), config.animateDropSuccess, config.hiddenClass);
               m8.outro(config.container.find(config.prefixDropFailure + dropName), config.animateDropFailureOutro, config.hiddenClass);
               correct.css({
                 top: this.offsetTop,
                 left: this.offsetLeft
               });
             }
           });
           this.onApplyCorrect();
        },
        onRegister: function() {
        
        },
        onBoot: function() {
        
        },
        onReset: function() {
        
        },
        onDrop: function() {
        
        },
        onDrag: function() {
        
        },
        onSubmit: function() {
        
        },
        onRetry: function() {
        
        }
      };
      
      var config = $.extend({}, defaultConfig, givenConfig);
      config.container = $(config.container);
      config.initial = config.container.html();
      config.register();
      config.boot();
      
      setSceneEventHandler(this, config.resetOn, config.reset.bind(config));
      
      if (config.name) {
        this[ config.name ] = config;
      }
      
      window.commands = config
    };
  }
 
/************************************************************\
* CANVAS CONTROLLER
************************************************************/
function getCanvasController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: null,
      scene: this,
      canvas: null,
      clearOn: 'enter',
      context: null,
      contextAttributes: {
        alpha: true
      },
      boot: function() {
        this.onBoot();
      },
      clear: function() {
        this.getContext(function(context, canvas){
          context.clearRect(0, 0, canvas.width, canvas.height);
        });
        this.onClear();
      },
      getContext: function(callback) {
        if (!this.context) {
          this.context = this.canvas.getContext('2d', this.contextAttributes);
        }
        if (this.context) {
          callback.call( this, this.context, this.canvas, this );
        } else {
          this.onNotSupported();
        }
      },
      onClear: function() {
      
      },
      onBoot: function() {
      
      },
      onNotSupported: function() {
      
      }
    };
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.canvas = $(config.canvas)[0];
    config.boot();
    
    setSceneEventHandler(this, config.clearOn, config.clear.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}

/************************************************************\
* NEXT CONTROLLER
************************************************************/
function getGotoController(givenConfig)
{
 return function()
 {
   var defaultConfig = {
     name: null,
     scene: this,
     filterGoto: '.next',
     gotos: null,
     dataGoto: 'goto',
     dataOptions: 'gotoOptions',
     defaultOptions: '4s linear',
     sound: false,
     register: function() {
       this.gotos = this.container.find(this.filterGoto);
       this.scrollArea = m8(document.scrollingElement || document.documentElement);
       if (this.sound && window.Howl) {
         this.sound = new Howl(this.sound);
       }
       this.onRegister();
     },
     boot: function() {
       this.gotos.click(function() {
         config.goto($(this));
       });
       this.onBoot();
     },
     getTop: function(element) {
       var top = 0;
       while (element.offsetParent)
       {
         top += element.offsetTop;
         element = element.offsetParent;
       }
       return top;
     },
     goto: function(trigger) {
       var toElement = trigger.data(this.dataGoto);
       var element = document.getElementById(toElement);
       
       if (element)
       {
         var top = this.getTop(element);
         var options = trigger.data(this.dataOptions) || this.defaultOptions;
         this.scrollArea.tweenTo('scrollTop', top, options);
         this.onGoto(trigger, element);
       }
     },
     onGoto: function(trigger, element) {
     
     },
     onBoot: function() {
     
     },
     onRegister: function() {
     
     }
   };
   
   if (typeof givenConfig === 'string') {
     givenConfig = {
       container: givenConfig
     };
   }
   
   var config = $.extend({}, defaultConfig, givenConfig);
   config.container = $(config.container);
   config.register();
   config.boot();
   
   
   if (config.name) {
     this[ config.name ] = config;
   }
 };
}

/************************************************************\
 * IMAGE CONTROLLER
 ************************************************************/
function setSceneEventHandler(scene, type, callback)
{
  switch (type) {
    case 'enter':
      scene.enter(function() {
        this.call(callback);
      });
      break;
    case 'exit':
      scene.exit(function() {
        this.call(callback);
      });
      break;
    case 'showDialog':
      $(window).on('showDialog', callback);
      break;
    case 'hideDialog':
      $(window).on('hideDialog', callback);
      break;
    case 'now':
      callback();
      break;
  }
}

// Is Touchy?
var isTouch =
  'ontouchstart' in window ||
  navigator.maxTouchPoints;
  
 // Is Crappy?
var isMS =
  document.documentMode ||
  /Edge/.test(navigator.userAgent) ||
  isTouch;
  
// Is Mobile?
var isMobile = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4))) check = true;})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}();

if (DEBUG)
{
  /*
  document.addEventListener('click', function(e)
  {
    var x = e.screenX;
    var y = e.screenY;
    var node = e.target;
    while (node && node.tagName !== 'SECTION') {
      node = node.parentNode;
    }
    var bounds = node.getBoundingClientRect();
    
    console.log((x - bounds.x) / bounds.width * 100, (y - bounds.y) / bounds.height * 100);
  });
  */
  
  $(function()
  {
    var TRANSITION_NAMES = {
      '': {
        '*': 'start',
        'BEFORE': 'startBefore',
        'AFTER': 'startAfter',
        'DURING': 'startDuring'
      },
      '*': {
        'AFTER': 'after',
        'BEFORE': 'before',
        'DURING': 'enter, intro',
        '*': 'any'
      },
      'AFTER': {
        '*': 'fromAfter'
      },
      'BEFORE': {
        '*': 'fromBefore'
      },
      'DURING': {
        '*': 'exit, outro'
      }
    };
    
    $.each(window.scenes, function(sceneName, scene)
    {
      scene.transition('*', '*',
        function getCalls() {
        
        },
        function onStateChange(current, previous, progress, builder) {
          var scene = this;
          var names = [];
          
          $.each(TRANSITION_NAMES, function(fromState, states) {
            if (scene.isEventMatch(previous, fromState)) {
              $.each(states, function(toState, transitionName) {
                if (scene.isEventMatch(current, toState)) {
                  names.push(transitionName);
                }
              });
            }
          });
          
          console.log(sceneName, previous, '>', current, '(' + names.join(', ') + ')');
        }
      );
    });
  });
}

jQuery.fn.extend(
{
  
  reverse: [].reverse,
  
  whenLoaded: function(callback)
  {
    var loaded = false;
    var img = this[0];
    var notify = function() {
      if (!loaded) {
        loaded = true;
        callback();
      }
    };
    
    img.onload = notify;
    img.onerror = notify;
    
    if (isFinite(img.naturalWidth) && img.naturalWidth > 0) {
      notify();
    }
    
    return this;
  },

  showDialog: function(onShow)
  {
    return this.each(function()
    {
      var dialog = $(this);
      if (!dialog.hasClass('hidden')) {
        return;
      }
      
      m8.intro(dialog, 'show', 'hidden');
      m8.intro(dialog.find('[data-show]'), 'show', 'hidden');
      
      if (isMS)
      {
        var backdrop = dialog.parent().find('.cover');
        
        m8.intro(backdrop, 'show', 'hidden');
      }
      else
      {
        var backdrop = dialog.parent().find('.container');
        
        if (backdrop.length) {
          backdrop.animator().play('backdrop 0.5s');
        }
      }

      if (onShow) {
        onShow(dialog);
      }
      
      $(window).trigger('showDialog', [dialog]);
    });
  },
  
  hideDialog: function(onHide)
  {
    return this.each(function()
    {
      var dialog = $(this);
      if (dialog.hasClass('hidden')) {
        return;
      }

      m8.outro(dialog, 'hide', 'hidden');
      m8.outro(dialog.find('[data-hide]'), 'hide', 'hidden');

      if (isMS)
      {
        var backdrop = dialog.parent().find('.cover');
        
        m8.outro(backdrop, 'hide', 'hidden');
      }
      else
      {
        var backdrop = dialog.parent().find('.container');
        
        if (backdrop.length) {
          backdrop.animator().play('unbackdrop ~0.5s 0.5s');
        }
      }
      
      if (onHide) {
        onHide(dialog);
      }
      
      $(window).trigger('hideDialog', [dialog]);
    });
  }
});


ScrollMagic.Scene.prototype.addController = function(controller)
{
  return this.onStart( controller );
};

ScrollMagic.Scene.prototype.addControllerLazy = function(controller)
{
  var initialized = false;
  return this.transition(
    '*',      // FROM
    'DURING', // TO
    function getCalls() {},
    function onStateChange() {
      if (!initialized) {
        initialized = true;
        controller.apply(this, arguments);
      }
    }
  );
};

ScrollMagic.Scene.prototype.constrain = function(min, max)
{
  this.min = min;
  this.max = max;
  if (min || max) {
    this.updateConstraint();
  }
};

ScrollMagic.Scene.prototype.updateConstraint = function()
{
  if (this.min || this.max)
  {
    var $window = $(window);
    var windowHeight = $window.height();
    var trigger = this.triggerElement();
    var top = trigger.offsetTop;
    var height = trigger.offsetHeight;
    var bottom = top + height;;
    
    if (this.min && $window.scrollTop() < top) {
      $window.scrollTop(top);
    }
    
    if (this.max && $window.scrollTop() + windowHeight > bottom) {
      $window.scrollTop(bottom - windowHeight);
    }
    
    ScrollMagic._util.rAF(this.updateConstraint.bind(this));
  }
};


// Starting Scroll Position
function scrollToStart()
{
  var scrollArea = window.document.scrollingElement || window.document.documentElement;
  var min = 0;
  var max = scrollArea.scrollHeight;
  
  window.scrollTo( 0, BACKWARDS ? max : min );
  
  if (DEBUG)
  {
    console.log('scrolling to', scrollArea.scrollTop, '{', min, ',', max, '}');
  }
}

if (window.history)
{
  history.scrollRestoration = "manual";
}

ScrollMagic._util.rAF(
  function() {
    ScrollMagic._util.rAF( scrollToStart );
  }
);

$(function()
{
  if (!TRANSITION_DURING)
  {
    $('.transition').removeClass('full height').css({
      height: TRANSITION_DURATION
    });
  }
});

function getProgressInitialState() {
  return {
      chosen_embryo: [],
      chosen_skeleton: [],
      chosen_dna: [],
	  chosen_conclusion: []
  };
}

// Progress

var Progress = {
  data: getProgressInitialState(),
  save: function() {
    localStorage.setItem('progress', JSON.stringify(this.data));
  },
  load: function() {
    var saved = localStorage.getItem('progress');
    if (saved) {
      this.data = JSON.parse(saved);
    }
  },
  clear: function() {
    this.data = getProgressInitialState();
    this.save();
  }
};

function getProgressChosenController(options)
{
  return getCheckController({
    name: options.name,
    container: options.container,
    checks: options.checks,
    checkedClass: 'active',
    maximum: 2,
    onCheck: function() {
      this.saveState();
    },
    onUncheck: function(checkbox, clearing) {
      if (!clearing) {
        this.saveState();
      }
    },
    onClear: function() {
      this.loadState();
    },
    onBoot: function() {
      this.loadState();
    },
    saveState: function() {
      var chosen = [];
      this.getChecked().each(function() {
        chosen.push($(this).data('chose'));
      });
      options.setData(chosen);
      Progress.save();
      this.onChosenUpdate(Progress.data[this.name].length);
    },
    loadState: function() {
      Progress.load();
      var data = options.getData();
      var config = this;
      this.checks.each(function() {
        var check = $(this);
        if (data && data.indexOf && data.indexOf(check.data('chose')) != -1) {
          check.addClass(config.checkedClass);
        } else {
          check.removeClass(config.checkedClass);
        }
      });
    },
    onChosenUpdate: function(count) {
      return options.onChosenUpdate(count);
    }
  })
}

function getProgressChosenDisplayedController(givenConfig)
{
  return function()
  {
    var defaultConfig = {
      name: false,
      scene: this,
      container: null,
      refreshOn: 'enter',
      activeClass: 'active',
      groupSelector: '[data-progress-chosen]',
      groupData: 'progressChosen',
      valueSelector: '[data-chosen]',
      valueData: 'chosen',
      triggers: null,
      triggersSelector: '.my-notebook-icon',
      boot: function() {
        this.triggers = this.container.find(this.triggersSelector);
        this.onBoot();
      },
      register: function() {
        this.triggers.click(this.refresh.bind(this));
        this.onRegister();
      },
      refresh: function() {
        this.container.find(this.groupSelector).each(function() {
          var group = $(this);
          var dataProperty = group.data(config.groupData);
          var data = Progress.data[dataProperty];
      
          group.find(config.valueSelector).each(function() {
            var value = $(this);
            var valueValue = value.data(config.valueData);
            if (data && data.indexOf && data.indexOf(valueValue) !== -1) {
              value.addClass(config.activeClass);
            } else {
              value.removeClass(config.activeClass);
            }
          });
        });
        
        this.onRefresh();
      },
      onRefresh: function() {

      },
      onBoot: function() {
      
      },
      onRegister: function() {
      
      }
    };
    
    if (typeof givenConfig === 'string') {
      givenConfig = {
        container: givenConfig
      };
    }
    
    var config = $.extend({}, defaultConfig, givenConfig);
    config.container = $(config.container);
    config.boot();
    config.register();
    config.refresh();
    
    setSceneEventHandler(this, config.refreshOn, config.refresh.bind(config));
    
    if (config.name) {
      this[ config.name ] = config;
    }
  };
}


function getBlurSlideTransition(query, blur, left, out, dividerQuery) {
  return function() {
    function getAmount() {
      var scale = (window.SCALE || 1);
      var fullWidth = 1750;
      var overlap = fullWidth * scale;
      return left ? -overlap : overlap;
    }
    function getDividerStart() {
      var scale = (window.SCALE || 1);
      var fullWidth = 1750;
      var sceneWidth = 1024;
      var windowWidth = document.body.clientWidth;
      var offsetX = (fullWidth - sceneWidth) * 0.5;
      return windowWidth + offsetX;
    }
    function getDividerEnd() {
      var fullWidth = 1750;
      var sceneWidth = 1024;
      var offsetX = (fullWidth - sceneWidth) * 0.5;
      return -offsetX;
    }
    
    if (dividerQuery) {
      this.animator(dividerQuery, function() {
        this.play({
          values: {
            translateX: [-50, -50],
            opacity: [0, 1, 1, 0],
            left: [getDividerStart, getDividerEnd],
          },
          deltas: {
            translateX: [0, 1],
            opacity: [0, 0.1, 0.9, 1.0],
            left: [0, 1]
          },
          units: {
            translateX: '%',
            left: 'px'
          }
        }, 'linear');
      });
    }
    
    this.animator(query, function() {
      this.play({
        keyframe: {
          '0': {
            // blur:       out ? 0 : blur,
            translateX: out ? 0 : getAmount,
            opacity:    out ? 1 : 0
          },
          '100': {
            // blur:       out ? blur : 0,
            translateX: out ? getAmount : 0,
            opacity:    out ? 0 : 1
          }
        },
        units: {
          translateX: 'px'
        }
      }, 'linear');
    });
  };
}

function getBlurToTransition(query, blurTo, blur, scale, out) {
  return function() {
    var defaultScale = 1;
    var defaultBlur = 0;
    var defaultOpacity = 1;
    var opacity = 0;
    
    var KEYFRAMES = {
      '0': {
        scale:    out ? defaultScale : scale,
        // blur:     out ? defaultBlur : blur,
        opacity:  out ? defaultOpacity : opacity
      },
      '100': {
        scale:    out ? scale : defaultScale,
        //blur:     out ? blur : defaultBlur,
        opacity:  out ? opacity : defaultOpacity
      }
    };
    
    KEYFRAMES[out ? '75' : '25'] = {
      opacity: opacity
    };
    
    this.animator(query, function() {
      this.play({
        initial: {
          origin: blurTo
        },
        keyframe: KEYFRAMES
      }, 'linear');
    });
  };
}

