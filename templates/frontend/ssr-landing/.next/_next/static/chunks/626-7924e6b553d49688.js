(self.webpackChunk_N_E = self.webpackChunk_N_E || []).push([
  [626],
  {
    1766: function (e, n, t) {
      var o;
      !(function () {
        'use strict';
        var r = function () {
          this.init();
        };
        r.prototype = {
          init: function () {
            var e = this || i;
            return (
              (e._counter = 1e3),
              (e._html5AudioPool = []),
              (e.html5PoolSize = 10),
              (e._codecs = {}),
              (e._howls = []),
              (e._muted = !1),
              (e._volume = 1),
              (e._canPlayEvent = 'canplaythrough'),
              (e._navigator = 'undefined' !== typeof window && window.navigator ? window.navigator : null),
              (e.masterGain = null),
              (e.noAudio = !1),
              (e.usingWebAudio = !0),
              (e.autoSuspend = !0),
              (e.ctx = null),
              (e.autoUnlock = !0),
              e._setup(),
              e
            );
          },
          volume: function (e) {
            var n = this || i;
            if (((e = parseFloat(e)), n.ctx || p(), 'undefined' !== typeof e && e >= 0 && e <= 1)) {
              if (((n._volume = e), n._muted)) return n;
              n.usingWebAudio && n.masterGain.gain.setValueAtTime(e, i.ctx.currentTime);
              for (var t = 0; t < n._howls.length; t++)
                if (!n._howls[t]._webAudio)
                  for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
                    var a = n._howls[t]._soundById(o[r]);
                    a && a._node && (a._node.volume = a._volume * e);
                  }
              return n;
            }
            return n._volume;
          },
          mute: function (e) {
            var n = this || i;
            n.ctx || p(),
              (n._muted = e),
              n.usingWebAudio && n.masterGain.gain.setValueAtTime(e ? 0 : n._volume, i.ctx.currentTime);
            for (var t = 0; t < n._howls.length; t++)
              if (!n._howls[t]._webAudio)
                for (var o = n._howls[t]._getSoundIds(), r = 0; r < o.length; r++) {
                  var a = n._howls[t]._soundById(o[r]);
                  a && a._node && (a._node.muted = !!e || a._muted);
                }
            return n;
          },
          stop: function () {
            for (var e = this || i, n = 0; n < e._howls.length; n++) e._howls[n].stop();
            return e;
          },
          unload: function () {
            for (var e = this || i, n = e._howls.length - 1; n >= 0; n--) e._howls[n].unload();
            return (
              e.usingWebAudio && e.ctx && 'undefined' !== typeof e.ctx.close && (e.ctx.close(), (e.ctx = null), p()), e
            );
          },
          codecs: function (e) {
            return (this || i)._codecs[e.replace(/^x-/, '')];
          },
          _setup: function () {
            var e = this || i;
            if (((e.state = (e.ctx && e.ctx.state) || 'suspended'), e._autoSuspend(), !e.usingWebAudio))
              if ('undefined' !== typeof Audio)
                try {
                  'undefined' === typeof new Audio().oncanplaythrough && (e._canPlayEvent = 'canplay');
                } catch (n) {
                  e.noAudio = !0;
                }
              else e.noAudio = !0;
            try {
              new Audio().muted && (e.noAudio = !0);
            } catch (n) {}
            return e.noAudio || e._setupCodecs(), e;
          },
          _setupCodecs: function () {
            var e = this || i,
              n = null;
            try {
              n = 'undefined' !== typeof Audio ? new Audio() : null;
            } catch (a) {
              return e;
            }
            if (!n || 'function' !== typeof n.canPlayType) return e;
            var t = n.canPlayType('audio/mpeg;').replace(/^no$/, ''),
              o = e._navigator && e._navigator.userAgent.match(/OPR\/([0-6].)/g),
              r = o && parseInt(o[0].split('/')[1], 10) < 33;
            return (
              (e._codecs = {
                mp3: !(r || (!t && !n.canPlayType('audio/mp3;').replace(/^no$/, ''))),
                mpeg: !!t,
                opus: !!n.canPlayType('audio/ogg; codecs="opus"').replace(/^no$/, ''),
                ogg: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                oga: !!n.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/, ''),
                wav: !!(n.canPlayType('audio/wav; codecs="1"') || n.canPlayType('audio/wav')).replace(/^no$/, ''),
                aac: !!n.canPlayType('audio/aac;').replace(/^no$/, ''),
                caf: !!n.canPlayType('audio/x-caf;').replace(/^no$/, ''),
                m4a: !!(
                  n.canPlayType('audio/x-m4a;') ||
                  n.canPlayType('audio/m4a;') ||
                  n.canPlayType('audio/aac;')
                ).replace(/^no$/, ''),
                m4b: !!(
                  n.canPlayType('audio/x-m4b;') ||
                  n.canPlayType('audio/m4b;') ||
                  n.canPlayType('audio/aac;')
                ).replace(/^no$/, ''),
                mp4: !!(
                  n.canPlayType('audio/x-mp4;') ||
                  n.canPlayType('audio/mp4;') ||
                  n.canPlayType('audio/aac;')
                ).replace(/^no$/, ''),
                weba: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                webm: !!n.canPlayType('audio/webm; codecs="vorbis"').replace(/^no$/, ''),
                dolby: !!n.canPlayType('audio/mp4; codecs="ec-3"').replace(/^no$/, ''),
                flac: !!(n.canPlayType('audio/x-flac;') || n.canPlayType('audio/flac;')).replace(/^no$/, ''),
              }),
              e
            );
          },
          _unlockAudio: function () {
            var e = this || i;
            if (!e._audioUnlocked && e.ctx) {
              (e._audioUnlocked = !1),
                (e.autoUnlock = !1),
                e._mobileUnloaded || 44100 === e.ctx.sampleRate || ((e._mobileUnloaded = !0), e.unload()),
                (e._scratchBuffer = e.ctx.createBuffer(1, 1, 22050));
              var n = function (t) {
                for (; e._html5AudioPool.length < e.html5PoolSize; )
                  try {
                    var o = new Audio();
                    (o._unlocked = !0), e._releaseHtml5Audio(o);
                  } catch (t) {
                    e.noAudio = !0;
                    break;
                  }
                for (var r = 0; r < e._howls.length; r++)
                  if (!e._howls[r]._webAudio)
                    for (var i = e._howls[r]._getSoundIds(), a = 0; a < i.length; a++) {
                      var u = e._howls[r]._soundById(i[a]);
                      u && u._node && !u._node._unlocked && ((u._node._unlocked = !0), u._node.load());
                    }
                e._autoResume();
                var d = e.ctx.createBufferSource();
                (d.buffer = e._scratchBuffer),
                  d.connect(e.ctx.destination),
                  'undefined' === typeof d.start ? d.noteOn(0) : d.start(0),
                  'function' === typeof e.ctx.resume && e.ctx.resume(),
                  (d.onended = function () {
                    d.disconnect(0),
                      (e._audioUnlocked = !0),
                      document.removeEventListener('touchstart', n, !0),
                      document.removeEventListener('touchend', n, !0),
                      document.removeEventListener('click', n, !0);
                    for (var t = 0; t < e._howls.length; t++) e._howls[t]._emit('unlock');
                  });
              };
              return (
                document.addEventListener('touchstart', n, !0),
                document.addEventListener('touchend', n, !0),
                document.addEventListener('click', n, !0),
                e
              );
            }
          },
          _obtainHtml5Audio: function () {
            var e = this || i;
            if (e._html5AudioPool.length) return e._html5AudioPool.pop();
            var n = new Audio().play();
            return (
              n &&
                'undefined' !== typeof Promise &&
                (n instanceof Promise || 'function' === typeof n.then) &&
                n.catch(function () {
                  console.warn('HTML5 Audio pool exhausted, returning potentially locked audio object.');
                }),
              new Audio()
            );
          },
          _releaseHtml5Audio: function (e) {
            var n = this || i;
            return e._unlocked && n._html5AudioPool.push(e), n;
          },
          _autoSuspend: function () {
            var e = this;
            if (e.autoSuspend && e.ctx && 'undefined' !== typeof e.ctx.suspend && i.usingWebAudio) {
              for (var n = 0; n < e._howls.length; n++)
                if (e._howls[n]._webAudio)
                  for (var t = 0; t < e._howls[n]._sounds.length; t++) if (!e._howls[n]._sounds[t]._paused) return e;
              return (
                e._suspendTimer && clearTimeout(e._suspendTimer),
                (e._suspendTimer = setTimeout(function () {
                  if (e.autoSuspend) {
                    (e._suspendTimer = null), (e.state = 'suspending');
                    var n = function () {
                      (e.state = 'suspended'), e._resumeAfterSuspend && (delete e._resumeAfterSuspend, e._autoResume());
                    };
                    e.ctx.suspend().then(n, n);
                  }
                }, 3e4)),
                e
              );
            }
          },
          _autoResume: function () {
            var e = this;
            if (e.ctx && 'undefined' !== typeof e.ctx.resume && i.usingWebAudio)
              return (
                'running' === e.state && 'interrupted' !== e.ctx.state && e._suspendTimer
                  ? (clearTimeout(e._suspendTimer), (e._suspendTimer = null))
                  : 'suspended' === e.state || ('running' === e.state && 'interrupted' === e.ctx.state)
                  ? (e.ctx.resume().then(function () {
                      e.state = 'running';
                      for (var n = 0; n < e._howls.length; n++) e._howls[n]._emit('resume');
                    }),
                    e._suspendTimer && (clearTimeout(e._suspendTimer), (e._suspendTimer = null)))
                  : 'suspending' === e.state && (e._resumeAfterSuspend = !0),
                e
              );
          },
        };
        var i = new r(),
          a = function (e) {
            e.src && 0 !== e.src.length
              ? this.init(e)
              : console.error('An array of source files must be passed with any new Howl.');
          };
        a.prototype = {
          init: function (e) {
            var n = this;
            return (
              i.ctx || p(),
              (n._autoplay = e.autoplay || !1),
              (n._format = 'string' !== typeof e.format ? e.format : [e.format]),
              (n._html5 = e.html5 || !1),
              (n._muted = e.mute || !1),
              (n._loop = e.loop || !1),
              (n._pool = e.pool || 5),
              (n._preload = ('boolean' !== typeof e.preload && 'metadata' !== e.preload) || e.preload),
              (n._rate = e.rate || 1),
              (n._sprite = e.sprite || {}),
              (n._src = 'string' !== typeof e.src ? e.src : [e.src]),
              (n._volume = void 0 !== e.volume ? e.volume : 1),
              (n._xhr = {
                method: e.xhr && e.xhr.method ? e.xhr.method : 'GET',
                headers: e.xhr && e.xhr.headers ? e.xhr.headers : null,
                withCredentials: !(!e.xhr || !e.xhr.withCredentials) && e.xhr.withCredentials,
              }),
              (n._duration = 0),
              (n._state = 'unloaded'),
              (n._sounds = []),
              (n._endTimers = {}),
              (n._queue = []),
              (n._playLock = !1),
              (n._onend = e.onend ? [{ fn: e.onend }] : []),
              (n._onfade = e.onfade ? [{ fn: e.onfade }] : []),
              (n._onload = e.onload ? [{ fn: e.onload }] : []),
              (n._onloaderror = e.onloaderror ? [{ fn: e.onloaderror }] : []),
              (n._onplayerror = e.onplayerror ? [{ fn: e.onplayerror }] : []),
              (n._onpause = e.onpause ? [{ fn: e.onpause }] : []),
              (n._onplay = e.onplay ? [{ fn: e.onplay }] : []),
              (n._onstop = e.onstop ? [{ fn: e.onstop }] : []),
              (n._onmute = e.onmute ? [{ fn: e.onmute }] : []),
              (n._onvolume = e.onvolume ? [{ fn: e.onvolume }] : []),
              (n._onrate = e.onrate ? [{ fn: e.onrate }] : []),
              (n._onseek = e.onseek ? [{ fn: e.onseek }] : []),
              (n._onunlock = e.onunlock ? [{ fn: e.onunlock }] : []),
              (n._onresume = []),
              (n._webAudio = i.usingWebAudio && !n._html5),
              'undefined' !== typeof i.ctx && i.ctx && i.autoUnlock && i._unlockAudio(),
              i._howls.push(n),
              n._autoplay &&
                n._queue.push({
                  event: 'play',
                  action: function () {
                    n.play();
                  },
                }),
              n._preload && 'none' !== n._preload && n.load(),
              n
            );
          },
          load: function () {
            var e = this,
              n = null;
            if (i.noAudio) e._emit('loaderror', null, 'No audio support.');
            else {
              'string' === typeof e._src && (e._src = [e._src]);
              for (var t = 0; t < e._src.length; t++) {
                var o, r;
                if (e._format && e._format[t]) o = e._format[t];
                else {
                  if ('string' !== typeof (r = e._src[t])) {
                    e._emit('loaderror', null, 'Non-string found in selected audio sources - ignoring.');
                    continue;
                  }
                  (o = /^data:audio\/([^;,]+);/i.exec(r)) || (o = /\.([^.]+)$/.exec(r.split('?', 1)[0])),
                    o && (o = o[1].toLowerCase());
                }
                if (
                  (o ||
                    console.warn(
                      'No file extension was found. Consider using the "format" property or specify an extension.'
                    ),
                  o && i.codecs(o))
                ) {
                  n = e._src[t];
                  break;
                }
              }
              if (n)
                return (
                  (e._src = n),
                  (e._state = 'loading'),
                  'https:' === window.location.protocol &&
                    'http:' === n.slice(0, 5) &&
                    ((e._html5 = !0), (e._webAudio = !1)),
                  new u(e),
                  e._webAudio && s(e),
                  e
                );
              e._emit('loaderror', null, 'No codec support for selected audio sources.');
            }
          },
          play: function (e, n) {
            var t = this,
              o = null;
            if ('number' === typeof e) (o = e), (e = null);
            else {
              if ('string' === typeof e && 'loaded' === t._state && !t._sprite[e]) return null;
              if ('undefined' === typeof e && ((e = '__default'), !t._playLock)) {
                for (var r = 0, a = 0; a < t._sounds.length; a++)
                  t._sounds[a]._paused && !t._sounds[a]._ended && (r++, (o = t._sounds[a]._id));
                1 === r ? (e = null) : (o = null);
              }
            }
            var u = o ? t._soundById(o) : t._inactiveSound();
            if (!u) return null;
            if ((o && !e && (e = u._sprite || '__default'), 'loaded' !== t._state)) {
              (u._sprite = e), (u._ended = !1);
              var d = u._id;
              return (
                t._queue.push({
                  event: 'play',
                  action: function () {
                    t.play(d);
                  },
                }),
                d
              );
            }
            if (o && !u._paused) return n || t._loadQueue('play'), u._id;
            t._webAudio && i._autoResume();
            var s = Math.max(0, u._seek > 0 ? u._seek : t._sprite[e][0] / 1e3),
              _ = Math.max(0, (t._sprite[e][0] + t._sprite[e][1]) / 1e3 - s),
              l = (1e3 * _) / Math.abs(u._rate),
              c = t._sprite[e][0] / 1e3,
              p = (t._sprite[e][0] + t._sprite[e][1]) / 1e3;
            (u._sprite = e), (u._ended = !1);
            var f = function () {
              (u._paused = !1),
                (u._seek = s),
                (u._start = c),
                (u._stop = p),
                (u._loop = !(!u._loop && !t._sprite[e][2]));
            };
            if (!(s >= p)) {
              var m = u._node;
              if (t._webAudio) {
                var h = function () {
                  (t._playLock = !1), f(), t._refreshBuffer(u);
                  var e = u._muted || t._muted ? 0 : u._volume;
                  m.gain.setValueAtTime(e, i.ctx.currentTime),
                    (u._playStart = i.ctx.currentTime),
                    'undefined' === typeof m.bufferSource.start
                      ? u._loop
                        ? m.bufferSource.noteGrainOn(0, s, 86400)
                        : m.bufferSource.noteGrainOn(0, s, _)
                      : u._loop
                      ? m.bufferSource.start(0, s, 86400)
                      : m.bufferSource.start(0, s, _),
                    l !== 1 / 0 && (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), l)),
                    n ||
                      setTimeout(function () {
                        t._emit('play', u._id), t._loadQueue();
                      }, 0);
                };
                'running' === i.state && 'interrupted' !== i.ctx.state
                  ? h()
                  : ((t._playLock = !0), t.once('resume', h), t._clearTimer(u._id));
              } else {
                var v = function () {
                  (m.currentTime = s),
                    (m.muted = u._muted || t._muted || i._muted || m.muted),
                    (m.volume = u._volume * i.volume()),
                    (m.playbackRate = u._rate);
                  try {
                    var o = m.play();
                    if (
                      (o && 'undefined' !== typeof Promise && (o instanceof Promise || 'function' === typeof o.then)
                        ? ((t._playLock = !0),
                          f(),
                          o
                            .then(function () {
                              (t._playLock = !1), (m._unlocked = !0), n || (t._emit('play', u._id), t._loadQueue());
                            })
                            .catch(function () {
                              (t._playLock = !1),
                                t._emit(
                                  'playerror',
                                  u._id,
                                  'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
                                ),
                                (u._ended = !0),
                                (u._paused = !0);
                            }))
                        : n || ((t._playLock = !1), f(), t._emit('play', u._id), t._loadQueue()),
                      (m.playbackRate = u._rate),
                      m.paused)
                    )
                      return void t._emit(
                        'playerror',
                        u._id,
                        'Playback was unable to start. This is most commonly an issue on mobile devices and Chrome where playback was not within a user interaction.'
                      );
                    '__default' !== e || u._loop
                      ? (t._endTimers[u._id] = setTimeout(t._ended.bind(t, u), l))
                      : ((t._endTimers[u._id] = function () {
                          t._ended(u), m.removeEventListener('ended', t._endTimers[u._id], !1);
                        }),
                        m.addEventListener('ended', t._endTimers[u._id], !1));
                  } catch (r) {
                    t._emit('playerror', u._id, r);
                  }
                };
                'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA' === m.src &&
                  ((m.src = t._src), m.load());
                var y = (window && window.ejecta) || (!m.readyState && i._navigator.isCocoonJS);
                if (m.readyState >= 3 || y) v();
                else {
                  t._playLock = !0;
                  var g = function () {
                    v(), m.removeEventListener(i._canPlayEvent, g, !1);
                  };
                  m.addEventListener(i._canPlayEvent, g, !1), t._clearTimer(u._id);
                }
              }
              return u._id;
            }
            t._ended(u);
          },
          pause: function (e) {
            var n = this;
            if ('loaded' !== n._state || n._playLock)
              return (
                n._queue.push({
                  event: 'pause',
                  action: function () {
                    n.pause(e);
                  },
                }),
                n
              );
            for (var t = n._getSoundIds(e), o = 0; o < t.length; o++) {
              n._clearTimer(t[o]);
              var r = n._soundById(t[o]);
              if (
                r &&
                !r._paused &&
                ((r._seek = n.seek(t[o])), (r._rateSeek = 0), (r._paused = !0), n._stopFade(t[o]), r._node)
              )
                if (n._webAudio) {
                  if (!r._node.bufferSource) continue;
                  'undefined' === typeof r._node.bufferSource.stop
                    ? r._node.bufferSource.noteOff(0)
                    : r._node.bufferSource.stop(0),
                    n._cleanBuffer(r._node);
                } else (isNaN(r._node.duration) && r._node.duration !== 1 / 0) || r._node.pause();
              arguments[1] || n._emit('pause', r ? r._id : null);
            }
            return n;
          },
          stop: function (e, n) {
            var t = this;
            if ('loaded' !== t._state || t._playLock)
              return (
                t._queue.push({
                  event: 'stop',
                  action: function () {
                    t.stop(e);
                  },
                }),
                t
              );
            for (var o = t._getSoundIds(e), r = 0; r < o.length; r++) {
              t._clearTimer(o[r]);
              var i = t._soundById(o[r]);
              i &&
                ((i._seek = i._start || 0),
                (i._rateSeek = 0),
                (i._paused = !0),
                (i._ended = !0),
                t._stopFade(o[r]),
                i._node &&
                  (t._webAudio
                    ? i._node.bufferSource &&
                      ('undefined' === typeof i._node.bufferSource.stop
                        ? i._node.bufferSource.noteOff(0)
                        : i._node.bufferSource.stop(0),
                      t._cleanBuffer(i._node))
                    : (isNaN(i._node.duration) && i._node.duration !== 1 / 0) ||
                      ((i._node.currentTime = i._start || 0),
                      i._node.pause(),
                      i._node.duration === 1 / 0 && t._clearSound(i._node))),
                n || t._emit('stop', i._id));
            }
            return t;
          },
          mute: function (e, n) {
            var t = this;
            if ('loaded' !== t._state || t._playLock)
              return (
                t._queue.push({
                  event: 'mute',
                  action: function () {
                    t.mute(e, n);
                  },
                }),
                t
              );
            if ('undefined' === typeof n) {
              if ('boolean' !== typeof e) return t._muted;
              t._muted = e;
            }
            for (var o = t._getSoundIds(n), r = 0; r < o.length; r++) {
              var a = t._soundById(o[r]);
              a &&
                ((a._muted = e),
                a._interval && t._stopFade(a._id),
                t._webAudio && a._node
                  ? a._node.gain.setValueAtTime(e ? 0 : a._volume, i.ctx.currentTime)
                  : a._node && (a._node.muted = !!i._muted || e),
                t._emit('mute', a._id));
            }
            return t;
          },
          volume: function () {
            var e,
              n,
              t,
              o = this,
              r = arguments;
            if (0 === r.length) return o._volume;
            if (1 === r.length || (2 === r.length && 'undefined' === typeof r[1])) {
              var a = o._getSoundIds(),
                u = a.indexOf(r[0]);
              u >= 0 ? (n = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
            } else r.length >= 2 && ((e = parseFloat(r[0])), (n = parseInt(r[1], 10)));
            if (!('undefined' !== typeof e && e >= 0 && e <= 1))
              return (t = n ? o._soundById(n) : o._sounds[0]) ? t._volume : 0;
            if ('loaded' !== o._state || o._playLock)
              return (
                o._queue.push({
                  event: 'volume',
                  action: function () {
                    o.volume.apply(o, r);
                  },
                }),
                o
              );
            'undefined' === typeof n && (o._volume = e), (n = o._getSoundIds(n));
            for (var d = 0; d < n.length; d++)
              (t = o._soundById(n[d])) &&
                ((t._volume = e),
                r[2] || o._stopFade(n[d]),
                o._webAudio && t._node && !t._muted
                  ? t._node.gain.setValueAtTime(e, i.ctx.currentTime)
                  : t._node && !t._muted && (t._node.volume = e * i.volume()),
                o._emit('volume', t._id));
            return o;
          },
          fade: function (e, n, t, o) {
            var r = this;
            if ('loaded' !== r._state || r._playLock)
              return (
                r._queue.push({
                  event: 'fade',
                  action: function () {
                    r.fade(e, n, t, o);
                  },
                }),
                r
              );
            (e = Math.min(Math.max(0, parseFloat(e)), 1)),
              (n = Math.min(Math.max(0, parseFloat(n)), 1)),
              (t = parseFloat(t)),
              r.volume(e, o);
            for (var a = r._getSoundIds(o), u = 0; u < a.length; u++) {
              var d = r._soundById(a[u]);
              if (d) {
                if ((o || r._stopFade(a[u]), r._webAudio && !d._muted)) {
                  var s = i.ctx.currentTime,
                    _ = s + t / 1e3;
                  (d._volume = e), d._node.gain.setValueAtTime(e, s), d._node.gain.linearRampToValueAtTime(n, _);
                }
                r._startFadeInterval(d, e, n, t, a[u], 'undefined' === typeof o);
              }
            }
            return r;
          },
          _startFadeInterval: function (e, n, t, o, r, i) {
            var a = this,
              u = n,
              d = t - n,
              s = Math.abs(d / 0.01),
              _ = Math.max(4, s > 0 ? o / s : o),
              l = Date.now();
            (e._fadeTo = t),
              (e._interval = setInterval(function () {
                var r = (Date.now() - l) / o;
                (l = Date.now()),
                  (u += d * r),
                  (u = Math.round(100 * u) / 100),
                  (u = d < 0 ? Math.max(t, u) : Math.min(t, u)),
                  a._webAudio ? (e._volume = u) : a.volume(u, e._id, !0),
                  i && (a._volume = u),
                  ((t < n && u <= t) || (t > n && u >= t)) &&
                    (clearInterval(e._interval),
                    (e._interval = null),
                    (e._fadeTo = null),
                    a.volume(t, e._id),
                    a._emit('fade', e._id));
              }, _));
          },
          _stopFade: function (e) {
            var n = this,
              t = n._soundById(e);
            return (
              t &&
                t._interval &&
                (n._webAudio && t._node.gain.cancelScheduledValues(i.ctx.currentTime),
                clearInterval(t._interval),
                (t._interval = null),
                n.volume(t._fadeTo, e),
                (t._fadeTo = null),
                n._emit('fade', e)),
              n
            );
          },
          loop: function () {
            var e,
              n,
              t,
              o = this,
              r = arguments;
            if (0 === r.length) return o._loop;
            if (1 === r.length) {
              if ('boolean' !== typeof r[0]) return !!(t = o._soundById(parseInt(r[0], 10))) && t._loop;
              (e = r[0]), (o._loop = e);
            } else 2 === r.length && ((e = r[0]), (n = parseInt(r[1], 10)));
            for (var i = o._getSoundIds(n), a = 0; a < i.length; a++)
              (t = o._soundById(i[a])) &&
                ((t._loop = e),
                o._webAudio &&
                  t._node &&
                  t._node.bufferSource &&
                  ((t._node.bufferSource.loop = e),
                  e && ((t._node.bufferSource.loopStart = t._start || 0), (t._node.bufferSource.loopEnd = t._stop))));
            return o;
          },
          rate: function () {
            var e,
              n,
              t,
              o = this,
              r = arguments;
            if (0 === r.length) n = o._sounds[0]._id;
            else if (1 === r.length) {
              var a = o._getSoundIds(),
                u = a.indexOf(r[0]);
              u >= 0 ? (n = parseInt(r[0], 10)) : (e = parseFloat(r[0]));
            } else 2 === r.length && ((e = parseFloat(r[0])), (n = parseInt(r[1], 10)));
            if ('number' !== typeof e) return (t = o._soundById(n)) ? t._rate : o._rate;
            if ('loaded' !== o._state || o._playLock)
              return (
                o._queue.push({
                  event: 'rate',
                  action: function () {
                    o.rate.apply(o, r);
                  },
                }),
                o
              );
            'undefined' === typeof n && (o._rate = e), (n = o._getSoundIds(n));
            for (var d = 0; d < n.length; d++)
              if ((t = o._soundById(n[d]))) {
                o.playing(n[d]) &&
                  ((t._rateSeek = o.seek(n[d])), (t._playStart = o._webAudio ? i.ctx.currentTime : t._playStart)),
                  (t._rate = e),
                  o._webAudio && t._node && t._node.bufferSource
                    ? t._node.bufferSource.playbackRate.setValueAtTime(e, i.ctx.currentTime)
                    : t._node && (t._node.playbackRate = e);
                var s = o.seek(n[d]),
                  _ = (o._sprite[t._sprite][0] + o._sprite[t._sprite][1]) / 1e3 - s,
                  l = (1e3 * _) / Math.abs(t._rate);
                (!o._endTimers[n[d]] && t._paused) ||
                  (o._clearTimer(n[d]), (o._endTimers[n[d]] = setTimeout(o._ended.bind(o, t), l))),
                  o._emit('rate', t._id);
              }
            return o;
          },
          seek: function () {
            var e,
              n,
              t = this,
              o = arguments;
            if (0 === o.length) n = t._sounds[0]._id;
            else if (1 === o.length) {
              var r = t._getSoundIds(),
                a = r.indexOf(o[0]);
              a >= 0 ? (n = parseInt(o[0], 10)) : t._sounds.length && ((n = t._sounds[0]._id), (e = parseFloat(o[0])));
            } else 2 === o.length && ((e = parseFloat(o[0])), (n = parseInt(o[1], 10)));
            if ('undefined' === typeof n) return t;
            if ('number' === typeof e && ('loaded' !== t._state || t._playLock))
              return (
                t._queue.push({
                  event: 'seek',
                  action: function () {
                    t.seek.apply(t, o);
                  },
                }),
                t
              );
            var u = t._soundById(n);
            if (u) {
              if (!('number' === typeof e && e >= 0)) {
                if (t._webAudio) {
                  var d = t.playing(n) ? i.ctx.currentTime - u._playStart : 0,
                    s = u._rateSeek ? u._rateSeek - u._seek : 0;
                  return u._seek + (s + d * Math.abs(u._rate));
                }
                return u._node.currentTime;
              }
              var _ = t.playing(n);
              _ && t.pause(n, !0),
                (u._seek = e),
                (u._ended = !1),
                t._clearTimer(n),
                t._webAudio || !u._node || isNaN(u._node.duration) || (u._node.currentTime = e);
              var l = function () {
                t._emit('seek', n), _ && t.play(n, !0);
              };
              if (_ && !t._webAudio) {
                var c = function () {
                  t._playLock ? setTimeout(c, 0) : l();
                };
                setTimeout(c, 0);
              } else l();
            }
            return t;
          },
          playing: function (e) {
            var n = this;
            if ('number' === typeof e) {
              var t = n._soundById(e);
              return !!t && !t._paused;
            }
            for (var o = 0; o < n._sounds.length; o++) if (!n._sounds[o]._paused) return !0;
            return !1;
          },
          duration: function (e) {
            var n = this,
              t = n._duration,
              o = n._soundById(e);
            return o && (t = n._sprite[o._sprite][1] / 1e3), t;
          },
          state: function () {
            return this._state;
          },
          unload: function () {
            for (var e = this, n = e._sounds, t = 0; t < n.length; t++)
              n[t]._paused || e.stop(n[t]._id),
                e._webAudio ||
                  (e._clearSound(n[t]._node),
                  n[t]._node.removeEventListener('error', n[t]._errorFn, !1),
                  n[t]._node.removeEventListener(i._canPlayEvent, n[t]._loadFn, !1),
                  n[t]._node.removeEventListener('ended', n[t]._endFn, !1),
                  i._releaseHtml5Audio(n[t]._node)),
                delete n[t]._node,
                e._clearTimer(n[t]._id);
            var o = i._howls.indexOf(e);
            o >= 0 && i._howls.splice(o, 1);
            var r = !0;
            for (t = 0; t < i._howls.length; t++)
              if (i._howls[t]._src === e._src || e._src.indexOf(i._howls[t]._src) >= 0) {
                r = !1;
                break;
              }
            return (
              d && r && delete d[e._src], (i.noAudio = !1), (e._state = 'unloaded'), (e._sounds = []), (e = null), null
            );
          },
          on: function (e, n, t, o) {
            var r = this['_on' + e];
            return 'function' === typeof n && r.push(o ? { id: t, fn: n, once: o } : { id: t, fn: n }), this;
          },
          off: function (e, n, t) {
            var o = this,
              r = o['_on' + e],
              i = 0;
            if (('number' === typeof n && ((t = n), (n = null)), n || t))
              for (i = 0; i < r.length; i++) {
                var a = t === r[i].id;
                if ((n === r[i].fn && a) || (!n && a)) {
                  r.splice(i, 1);
                  break;
                }
              }
            else if (e) o['_on' + e] = [];
            else {
              var u = Object.keys(o);
              for (i = 0; i < u.length; i++) 0 === u[i].indexOf('_on') && Array.isArray(o[u[i]]) && (o[u[i]] = []);
            }
            return o;
          },
          once: function (e, n, t) {
            return this.on(e, n, t, 1), this;
          },
          _emit: function (e, n, t) {
            for (var o = this, r = o['_on' + e], i = r.length - 1; i >= 0; i--)
              (r[i].id && r[i].id !== n && 'load' !== e) ||
                (setTimeout(
                  function (e) {
                    e.call(this, n, t);
                  }.bind(o, r[i].fn),
                  0
                ),
                r[i].once && o.off(e, r[i].fn, r[i].id));
            return o._loadQueue(e), o;
          },
          _loadQueue: function (e) {
            var n = this;
            if (n._queue.length > 0) {
              var t = n._queue[0];
              t.event === e && (n._queue.shift(), n._loadQueue()), e || t.action();
            }
            return n;
          },
          _ended: function (e) {
            var n = this,
              t = e._sprite;
            if (!n._webAudio && e._node && !e._node.paused && !e._node.ended && e._node.currentTime < e._stop)
              return setTimeout(n._ended.bind(n, e), 100), n;
            var o = !(!e._loop && !n._sprite[t][2]);
            if ((n._emit('end', e._id), !n._webAudio && o && n.stop(e._id, !0).play(e._id), n._webAudio && o)) {
              n._emit('play', e._id), (e._seek = e._start || 0), (e._rateSeek = 0), (e._playStart = i.ctx.currentTime);
              var r = (1e3 * (e._stop - e._start)) / Math.abs(e._rate);
              n._endTimers[e._id] = setTimeout(n._ended.bind(n, e), r);
            }
            return (
              n._webAudio &&
                !o &&
                ((e._paused = !0),
                (e._ended = !0),
                (e._seek = e._start || 0),
                (e._rateSeek = 0),
                n._clearTimer(e._id),
                n._cleanBuffer(e._node),
                i._autoSuspend()),
              n._webAudio || o || n.stop(e._id, !0),
              n
            );
          },
          _clearTimer: function (e) {
            var n = this;
            if (n._endTimers[e]) {
              if ('function' !== typeof n._endTimers[e]) clearTimeout(n._endTimers[e]);
              else {
                var t = n._soundById(e);
                t && t._node && t._node.removeEventListener('ended', n._endTimers[e], !1);
              }
              delete n._endTimers[e];
            }
            return n;
          },
          _soundById: function (e) {
            for (var n = this, t = 0; t < n._sounds.length; t++) if (e === n._sounds[t]._id) return n._sounds[t];
            return null;
          },
          _inactiveSound: function () {
            var e = this;
            e._drain();
            for (var n = 0; n < e._sounds.length; n++) if (e._sounds[n]._ended) return e._sounds[n].reset();
            return new u(e);
          },
          _drain: function () {
            var e = this,
              n = e._pool,
              t = 0,
              o = 0;
            if (!(e._sounds.length < n)) {
              for (o = 0; o < e._sounds.length; o++) e._sounds[o]._ended && t++;
              for (o = e._sounds.length - 1; o >= 0; o--) {
                if (t <= n) return;
                e._sounds[o]._ended &&
                  (e._webAudio && e._sounds[o]._node && e._sounds[o]._node.disconnect(0), e._sounds.splice(o, 1), t--);
              }
            }
          },
          _getSoundIds: function (e) {
            if ('undefined' === typeof e) {
              for (var n = [], t = 0; t < this._sounds.length; t++) n.push(this._sounds[t]._id);
              return n;
            }
            return [e];
          },
          _refreshBuffer: function (e) {
            return (
              (e._node.bufferSource = i.ctx.createBufferSource()),
              (e._node.bufferSource.buffer = d[this._src]),
              e._panner ? e._node.bufferSource.connect(e._panner) : e._node.bufferSource.connect(e._node),
              (e._node.bufferSource.loop = e._loop),
              e._loop &&
                ((e._node.bufferSource.loopStart = e._start || 0), (e._node.bufferSource.loopEnd = e._stop || 0)),
              e._node.bufferSource.playbackRate.setValueAtTime(e._rate, i.ctx.currentTime),
              this
            );
          },
          _cleanBuffer: function (e) {
            var n = i._navigator && i._navigator.vendor.indexOf('Apple') >= 0;
            if (
              i._scratchBuffer &&
              e.bufferSource &&
              ((e.bufferSource.onended = null), e.bufferSource.disconnect(0), n)
            )
              try {
                e.bufferSource.buffer = i._scratchBuffer;
              } catch (t) {}
            return (e.bufferSource = null), this;
          },
          _clearSound: function (e) {
            /MSIE |Trident\//.test(i._navigator && i._navigator.userAgent) ||
              (e.src = 'data:audio/wav;base64,UklGRigAAABXQVZFZm10IBIAAAABAAEARKwAAIhYAQACABAAAABkYXRhAgAAAAEA');
          },
        };
        var u = function (e) {
          (this._parent = e), this.init();
        };
        u.prototype = {
          init: function () {
            var e = this,
              n = e._parent;
            return (
              (e._muted = n._muted),
              (e._loop = n._loop),
              (e._volume = n._volume),
              (e._rate = n._rate),
              (e._seek = 0),
              (e._paused = !0),
              (e._ended = !0),
              (e._sprite = '__default'),
              (e._id = ++i._counter),
              n._sounds.push(e),
              e.create(),
              e
            );
          },
          create: function () {
            var e = this,
              n = e._parent,
              t = i._muted || e._muted || e._parent._muted ? 0 : e._volume;
            return (
              n._webAudio
                ? ((e._node = 'undefined' === typeof i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain()),
                  e._node.gain.setValueAtTime(t, i.ctx.currentTime),
                  (e._node.paused = !0),
                  e._node.connect(i.masterGain))
                : i.noAudio ||
                  ((e._node = i._obtainHtml5Audio()),
                  (e._errorFn = e._errorListener.bind(e)),
                  e._node.addEventListener('error', e._errorFn, !1),
                  (e._loadFn = e._loadListener.bind(e)),
                  e._node.addEventListener(i._canPlayEvent, e._loadFn, !1),
                  (e._endFn = e._endListener.bind(e)),
                  e._node.addEventListener('ended', e._endFn, !1),
                  (e._node.src = n._src),
                  (e._node.preload = !0 === n._preload ? 'auto' : n._preload),
                  (e._node.volume = t * i.volume()),
                  e._node.load()),
              e
            );
          },
          reset: function () {
            var e = this,
              n = e._parent;
            return (
              (e._muted = n._muted),
              (e._loop = n._loop),
              (e._volume = n._volume),
              (e._rate = n._rate),
              (e._seek = 0),
              (e._rateSeek = 0),
              (e._paused = !0),
              (e._ended = !0),
              (e._sprite = '__default'),
              (e._id = ++i._counter),
              e
            );
          },
          _errorListener: function () {
            var e = this;
            e._parent._emit('loaderror', e._id, e._node.error ? e._node.error.code : 0),
              e._node.removeEventListener('error', e._errorFn, !1);
          },
          _loadListener: function () {
            var e = this,
              n = e._parent;
            (n._duration = Math.ceil(10 * e._node.duration) / 10),
              0 === Object.keys(n._sprite).length && (n._sprite = { __default: [0, 1e3 * n._duration] }),
              'loaded' !== n._state && ((n._state = 'loaded'), n._emit('load'), n._loadQueue()),
              e._node.removeEventListener(i._canPlayEvent, e._loadFn, !1);
          },
          _endListener: function () {
            var e = this,
              n = e._parent;
            n._duration === 1 / 0 &&
              ((n._duration = Math.ceil(10 * e._node.duration) / 10),
              n._sprite.__default[1] === 1 / 0 && (n._sprite.__default[1] = 1e3 * n._duration),
              n._ended(e)),
              e._node.removeEventListener('ended', e._endFn, !1);
          },
        };
        var d = {},
          s = function (e) {
            var n = e._src;
            if (d[n]) return (e._duration = d[n].duration), void c(e);
            if (/^data:[^;]+;base64,/.test(n)) {
              for (var t = atob(n.split(',')[1]), o = new Uint8Array(t.length), r = 0; r < t.length; ++r)
                o[r] = t.charCodeAt(r);
              l(o.buffer, e);
            } else {
              var i = new XMLHttpRequest();
              i.open(e._xhr.method, n, !0),
                (i.withCredentials = e._xhr.withCredentials),
                (i.responseType = 'arraybuffer'),
                e._xhr.headers &&
                  Object.keys(e._xhr.headers).forEach(function (n) {
                    i.setRequestHeader(n, e._xhr.headers[n]);
                  }),
                (i.onload = function () {
                  var n = (i.status + '')[0];
                  '0' === n || '2' === n || '3' === n
                    ? l(i.response, e)
                    : e._emit('loaderror', null, 'Failed loading audio file with status: ' + i.status + '.');
                }),
                (i.onerror = function () {
                  e._webAudio && ((e._html5 = !0), (e._webAudio = !1), (e._sounds = []), delete d[n], e.load());
                }),
                _(i);
            }
          },
          _ = function (e) {
            try {
              e.send();
            } catch (n) {
              e.onerror();
            }
          },
          l = function (e, n) {
            var t = function () {
                n._emit('loaderror', null, 'Decoding audio data failed.');
              },
              o = function (e) {
                e && n._sounds.length > 0 ? ((d[n._src] = e), c(n, e)) : t();
              };
            'undefined' !== typeof Promise && 1 === i.ctx.decodeAudioData.length
              ? i.ctx.decodeAudioData(e).then(o).catch(t)
              : i.ctx.decodeAudioData(e, o, t);
          },
          c = function (e, n) {
            n && !e._duration && (e._duration = n.duration),
              0 === Object.keys(e._sprite).length && (e._sprite = { __default: [0, 1e3 * e._duration] }),
              'loaded' !== e._state && ((e._state = 'loaded'), e._emit('load'), e._loadQueue());
          },
          p = function () {
            if (i.usingWebAudio) {
              try {
                'undefined' !== typeof AudioContext
                  ? (i.ctx = new AudioContext())
                  : 'undefined' !== typeof webkitAudioContext
                  ? (i.ctx = new webkitAudioContext())
                  : (i.usingWebAudio = !1);
              } catch (r) {
                i.usingWebAudio = !1;
              }
              i.ctx || (i.usingWebAudio = !1);
              var e = /iP(hone|od|ad)/.test(i._navigator && i._navigator.platform),
                n = i._navigator && i._navigator.appVersion.match(/OS (\d+)_(\d+)_?(\d+)?/),
                t = n ? parseInt(n[1], 10) : null;
              if (e && t && t < 9) {
                var o = /safari/.test(i._navigator && i._navigator.userAgent.toLowerCase());
                i._navigator && !o && (i.usingWebAudio = !1);
              }
              i.usingWebAudio &&
                ((i.masterGain = 'undefined' === typeof i.ctx.createGain ? i.ctx.createGainNode() : i.ctx.createGain()),
                i.masterGain.gain.setValueAtTime(i._muted ? 0 : i._volume, i.ctx.currentTime),
                i.masterGain.connect(i.ctx.destination)),
                i._setup();
            }
          };
        void 0 ===
          (o = function () {
            return { Howler: i, Howl: a };
          }.apply(n, [])) || (e.exports = o),
          (n.Howler = i),
          (n.Howl = a),
          'undefined' !== typeof t.g
            ? ((t.g.HowlerGlobal = r), (t.g.Howler = i), (t.g.Howl = a), (t.g.Sound = u))
            : 'undefined' !== typeof window &&
              ((window.HowlerGlobal = r), (window.Howler = i), (window.Howl = a), (window.Sound = u));
      })(),
        (function () {
          'use strict';
          var e;
          (HowlerGlobal.prototype._pos = [0, 0, 0]),
            (HowlerGlobal.prototype._orientation = [0, 0, -1, 0, 1, 0]),
            (HowlerGlobal.prototype.stereo = function (e) {
              var n = this;
              if (!n.ctx || !n.ctx.listener) return n;
              for (var t = n._howls.length - 1; t >= 0; t--) n._howls[t].stereo(e);
              return n;
            }),
            (HowlerGlobal.prototype.pos = function (e, n, t) {
              var o = this;
              return o.ctx && o.ctx.listener
                ? ((n = 'number' !== typeof n ? o._pos[1] : n),
                  (t = 'number' !== typeof t ? o._pos[2] : t),
                  'number' !== typeof e
                    ? o._pos
                    : ((o._pos = [e, n, t]),
                      'undefined' !== typeof o.ctx.listener.positionX
                        ? (o.ctx.listener.positionX.setTargetAtTime(o._pos[0], Howler.ctx.currentTime, 0.1),
                          o.ctx.listener.positionY.setTargetAtTime(o._pos[1], Howler.ctx.currentTime, 0.1),
                          o.ctx.listener.positionZ.setTargetAtTime(o._pos[2], Howler.ctx.currentTime, 0.1))
                        : o.ctx.listener.setPosition(o._pos[0], o._pos[1], o._pos[2]),
                      o))
                : o;
            }),
            (HowlerGlobal.prototype.orientation = function (e, n, t, o, r, i) {
              var a = this;
              if (!a.ctx || !a.ctx.listener) return a;
              var u = a._orientation;
              return (
                (n = 'number' !== typeof n ? u[1] : n),
                (t = 'number' !== typeof t ? u[2] : t),
                (o = 'number' !== typeof o ? u[3] : o),
                (r = 'number' !== typeof r ? u[4] : r),
                (i = 'number' !== typeof i ? u[5] : i),
                'number' !== typeof e
                  ? u
                  : ((a._orientation = [e, n, t, o, r, i]),
                    'undefined' !== typeof a.ctx.listener.forwardX
                      ? (a.ctx.listener.forwardX.setTargetAtTime(e, Howler.ctx.currentTime, 0.1),
                        a.ctx.listener.forwardY.setTargetAtTime(n, Howler.ctx.currentTime, 0.1),
                        a.ctx.listener.forwardZ.setTargetAtTime(t, Howler.ctx.currentTime, 0.1),
                        a.ctx.listener.upX.setTargetAtTime(o, Howler.ctx.currentTime, 0.1),
                        a.ctx.listener.upY.setTargetAtTime(r, Howler.ctx.currentTime, 0.1),
                        a.ctx.listener.upZ.setTargetAtTime(i, Howler.ctx.currentTime, 0.1))
                      : a.ctx.listener.setOrientation(e, n, t, o, r, i),
                    a)
              );
            }),
            (Howl.prototype.init =
              ((e = Howl.prototype.init),
              function (n) {
                var t = this;
                return (
                  (t._orientation = n.orientation || [1, 0, 0]),
                  (t._stereo = n.stereo || null),
                  (t._pos = n.pos || null),
                  (t._pannerAttr = {
                    coneInnerAngle: 'undefined' !== typeof n.coneInnerAngle ? n.coneInnerAngle : 360,
                    coneOuterAngle: 'undefined' !== typeof n.coneOuterAngle ? n.coneOuterAngle : 360,
                    coneOuterGain: 'undefined' !== typeof n.coneOuterGain ? n.coneOuterGain : 0,
                    distanceModel: 'undefined' !== typeof n.distanceModel ? n.distanceModel : 'inverse',
                    maxDistance: 'undefined' !== typeof n.maxDistance ? n.maxDistance : 1e4,
                    panningModel: 'undefined' !== typeof n.panningModel ? n.panningModel : 'HRTF',
                    refDistance: 'undefined' !== typeof n.refDistance ? n.refDistance : 1,
                    rolloffFactor: 'undefined' !== typeof n.rolloffFactor ? n.rolloffFactor : 1,
                  }),
                  (t._onstereo = n.onstereo ? [{ fn: n.onstereo }] : []),
                  (t._onpos = n.onpos ? [{ fn: n.onpos }] : []),
                  (t._onorientation = n.onorientation ? [{ fn: n.onorientation }] : []),
                  e.call(this, n)
                );
              })),
            (Howl.prototype.stereo = function (e, t) {
              var o = this;
              if (!o._webAudio) return o;
              if ('loaded' !== o._state)
                return (
                  o._queue.push({
                    event: 'stereo',
                    action: function () {
                      o.stereo(e, t);
                    },
                  }),
                  o
                );
              var r = 'undefined' === typeof Howler.ctx.createStereoPanner ? 'spatial' : 'stereo';
              if ('undefined' === typeof t) {
                if ('number' !== typeof e) return o._stereo;
                (o._stereo = e), (o._pos = [e, 0, 0]);
              }
              for (var i = o._getSoundIds(t), a = 0; a < i.length; a++) {
                var u = o._soundById(i[a]);
                if (u) {
                  if ('number' !== typeof e) return u._stereo;
                  (u._stereo = e),
                    (u._pos = [e, 0, 0]),
                    u._node &&
                      ((u._pannerAttr.panningModel = 'equalpower'),
                      (u._panner && u._panner.pan) || n(u, r),
                      'spatial' === r
                        ? 'undefined' !== typeof u._panner.positionX
                          ? (u._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                            u._panner.positionY.setValueAtTime(0, Howler.ctx.currentTime),
                            u._panner.positionZ.setValueAtTime(0, Howler.ctx.currentTime))
                          : u._panner.setPosition(e, 0, 0)
                        : u._panner.pan.setValueAtTime(e, Howler.ctx.currentTime)),
                    o._emit('stereo', u._id);
                }
              }
              return o;
            }),
            (Howl.prototype.pos = function (e, t, o, r) {
              var i = this;
              if (!i._webAudio) return i;
              if ('loaded' !== i._state)
                return (
                  i._queue.push({
                    event: 'pos',
                    action: function () {
                      i.pos(e, t, o, r);
                    },
                  }),
                  i
                );
              if (
                ((t = 'number' !== typeof t ? 0 : t), (o = 'number' !== typeof o ? -0.5 : o), 'undefined' === typeof r)
              ) {
                if ('number' !== typeof e) return i._pos;
                i._pos = [e, t, o];
              }
              for (var a = i._getSoundIds(r), u = 0; u < a.length; u++) {
                var d = i._soundById(a[u]);
                if (d) {
                  if ('number' !== typeof e) return d._pos;
                  (d._pos = [e, t, o]),
                    d._node &&
                      ((d._panner && !d._panner.pan) || n(d, 'spatial'),
                      'undefined' !== typeof d._panner.positionX
                        ? (d._panner.positionX.setValueAtTime(e, Howler.ctx.currentTime),
                          d._panner.positionY.setValueAtTime(t, Howler.ctx.currentTime),
                          d._panner.positionZ.setValueAtTime(o, Howler.ctx.currentTime))
                        : d._panner.setPosition(e, t, o)),
                    i._emit('pos', d._id);
                }
              }
              return i;
            }),
            (Howl.prototype.orientation = function (e, t, o, r) {
              var i = this;
              if (!i._webAudio) return i;
              if ('loaded' !== i._state)
                return (
                  i._queue.push({
                    event: 'orientation',
                    action: function () {
                      i.orientation(e, t, o, r);
                    },
                  }),
                  i
                );
              if (
                ((t = 'number' !== typeof t ? i._orientation[1] : t),
                (o = 'number' !== typeof o ? i._orientation[2] : o),
                'undefined' === typeof r)
              ) {
                if ('number' !== typeof e) return i._orientation;
                i._orientation = [e, t, o];
              }
              for (var a = i._getSoundIds(r), u = 0; u < a.length; u++) {
                var d = i._soundById(a[u]);
                if (d) {
                  if ('number' !== typeof e) return d._orientation;
                  (d._orientation = [e, t, o]),
                    d._node &&
                      (d._panner || (d._pos || (d._pos = i._pos || [0, 0, -0.5]), n(d, 'spatial')),
                      'undefined' !== typeof d._panner.orientationX
                        ? (d._panner.orientationX.setValueAtTime(e, Howler.ctx.currentTime),
                          d._panner.orientationY.setValueAtTime(t, Howler.ctx.currentTime),
                          d._panner.orientationZ.setValueAtTime(o, Howler.ctx.currentTime))
                        : d._panner.setOrientation(e, t, o)),
                    i._emit('orientation', d._id);
                }
              }
              return i;
            }),
            (Howl.prototype.pannerAttr = function () {
              var e,
                t,
                o,
                r = this,
                i = arguments;
              if (!r._webAudio) return r;
              if (0 === i.length) return r._pannerAttr;
              if (1 === i.length) {
                if ('object' !== typeof i[0])
                  return (o = r._soundById(parseInt(i[0], 10))) ? o._pannerAttr : r._pannerAttr;
                (e = i[0]),
                  'undefined' === typeof t &&
                    (e.pannerAttr ||
                      (e.pannerAttr = {
                        coneInnerAngle: e.coneInnerAngle,
                        coneOuterAngle: e.coneOuterAngle,
                        coneOuterGain: e.coneOuterGain,
                        distanceModel: e.distanceModel,
                        maxDistance: e.maxDistance,
                        refDistance: e.refDistance,
                        rolloffFactor: e.rolloffFactor,
                        panningModel: e.panningModel,
                      }),
                    (r._pannerAttr = {
                      coneInnerAngle:
                        'undefined' !== typeof e.pannerAttr.coneInnerAngle
                          ? e.pannerAttr.coneInnerAngle
                          : r._coneInnerAngle,
                      coneOuterAngle:
                        'undefined' !== typeof e.pannerAttr.coneOuterAngle
                          ? e.pannerAttr.coneOuterAngle
                          : r._coneOuterAngle,
                      coneOuterGain:
                        'undefined' !== typeof e.pannerAttr.coneOuterGain
                          ? e.pannerAttr.coneOuterGain
                          : r._coneOuterGain,
                      distanceModel:
                        'undefined' !== typeof e.pannerAttr.distanceModel
                          ? e.pannerAttr.distanceModel
                          : r._distanceModel,
                      maxDistance:
                        'undefined' !== typeof e.pannerAttr.maxDistance ? e.pannerAttr.maxDistance : r._maxDistance,
                      refDistance:
                        'undefined' !== typeof e.pannerAttr.refDistance ? e.pannerAttr.refDistance : r._refDistance,
                      rolloffFactor:
                        'undefined' !== typeof e.pannerAttr.rolloffFactor
                          ? e.pannerAttr.rolloffFactor
                          : r._rolloffFactor,
                      panningModel:
                        'undefined' !== typeof e.pannerAttr.panningModel ? e.pannerAttr.panningModel : r._panningModel,
                    }));
              } else 2 === i.length && ((e = i[0]), (t = parseInt(i[1], 10)));
              for (var a = r._getSoundIds(t), u = 0; u < a.length; u++)
                if ((o = r._soundById(a[u]))) {
                  var d = o._pannerAttr;
                  d = {
                    coneInnerAngle: 'undefined' !== typeof e.coneInnerAngle ? e.coneInnerAngle : d.coneInnerAngle,
                    coneOuterAngle: 'undefined' !== typeof e.coneOuterAngle ? e.coneOuterAngle : d.coneOuterAngle,
                    coneOuterGain: 'undefined' !== typeof e.coneOuterGain ? e.coneOuterGain : d.coneOuterGain,
                    distanceModel: 'undefined' !== typeof e.distanceModel ? e.distanceModel : d.distanceModel,
                    maxDistance: 'undefined' !== typeof e.maxDistance ? e.maxDistance : d.maxDistance,
                    refDistance: 'undefined' !== typeof e.refDistance ? e.refDistance : d.refDistance,
                    rolloffFactor: 'undefined' !== typeof e.rolloffFactor ? e.rolloffFactor : d.rolloffFactor,
                    panningModel: 'undefined' !== typeof e.panningModel ? e.panningModel : d.panningModel,
                  };
                  var s = o._panner;
                  s
                    ? ((s.coneInnerAngle = d.coneInnerAngle),
                      (s.coneOuterAngle = d.coneOuterAngle),
                      (s.coneOuterGain = d.coneOuterGain),
                      (s.distanceModel = d.distanceModel),
                      (s.maxDistance = d.maxDistance),
                      (s.refDistance = d.refDistance),
                      (s.rolloffFactor = d.rolloffFactor),
                      (s.panningModel = d.panningModel))
                    : (o._pos || (o._pos = r._pos || [0, 0, -0.5]), n(o, 'spatial'));
                }
              return r;
            }),
            (Sound.prototype.init = (function (e) {
              return function () {
                var n = this,
                  t = n._parent;
                (n._orientation = t._orientation),
                  (n._stereo = t._stereo),
                  (n._pos = t._pos),
                  (n._pannerAttr = t._pannerAttr),
                  e.call(this),
                  n._stereo ? t.stereo(n._stereo) : n._pos && t.pos(n._pos[0], n._pos[1], n._pos[2], n._id);
              };
            })(Sound.prototype.init)),
            (Sound.prototype.reset = (function (e) {
              return function () {
                var n = this,
                  t = n._parent;
                return (
                  (n._orientation = t._orientation),
                  (n._stereo = t._stereo),
                  (n._pos = t._pos),
                  (n._pannerAttr = t._pannerAttr),
                  n._stereo
                    ? t.stereo(n._stereo)
                    : n._pos
                    ? t.pos(n._pos[0], n._pos[1], n._pos[2], n._id)
                    : n._panner && (n._panner.disconnect(0), (n._panner = void 0), t._refreshBuffer(n)),
                  e.call(this)
                );
              };
            })(Sound.prototype.reset));
          var n = function (e, n) {
            'spatial' === (n = n || 'spatial')
              ? ((e._panner = Howler.ctx.createPanner()),
                (e._panner.coneInnerAngle = e._pannerAttr.coneInnerAngle),
                (e._panner.coneOuterAngle = e._pannerAttr.coneOuterAngle),
                (e._panner.coneOuterGain = e._pannerAttr.coneOuterGain),
                (e._panner.distanceModel = e._pannerAttr.distanceModel),
                (e._panner.maxDistance = e._pannerAttr.maxDistance),
                (e._panner.refDistance = e._pannerAttr.refDistance),
                (e._panner.rolloffFactor = e._pannerAttr.rolloffFactor),
                (e._panner.panningModel = e._pannerAttr.panningModel),
                'undefined' !== typeof e._panner.positionX
                  ? (e._panner.positionX.setValueAtTime(e._pos[0], Howler.ctx.currentTime),
                    e._panner.positionY.setValueAtTime(e._pos[1], Howler.ctx.currentTime),
                    e._panner.positionZ.setValueAtTime(e._pos[2], Howler.ctx.currentTime))
                  : e._panner.setPosition(e._pos[0], e._pos[1], e._pos[2]),
                'undefined' !== typeof e._panner.orientationX
                  ? (e._panner.orientationX.setValueAtTime(e._orientation[0], Howler.ctx.currentTime),
                    e._panner.orientationY.setValueAtTime(e._orientation[1], Howler.ctx.currentTime),
                    e._panner.orientationZ.setValueAtTime(e._orientation[2], Howler.ctx.currentTime))
                  : e._panner.setOrientation(e._orientation[0], e._orientation[1], e._orientation[2]))
              : ((e._panner = Howler.ctx.createStereoPanner()),
                e._panner.pan.setValueAtTime(e._stereo, Howler.ctx.currentTime)),
              e._panner.connect(e._node),
              e._paused || e._parent.pause(e._id, !0).play(e._id, !0);
          };
        })();
    },
    131: function (e, n, t) {
      'use strict';
      t.d(n, {
        YD: function () {
          return m;
        },
      });
      var o = t(7294);
      function r() {
        return (
          (r =
            Object.assign ||
            function (e) {
              for (var n = 1; n < arguments.length; n++) {
                var t = arguments[n];
                for (var o in t) Object.prototype.hasOwnProperty.call(t, o) && (e[o] = t[o]);
              }
              return e;
            }),
          r.apply(this, arguments)
        );
      }
      function i(e, n) {
        return (
          (i =
            Object.setPrototypeOf ||
            function (e, n) {
              return (e.__proto__ = n), e;
            }),
          i(e, n)
        );
      }
      var a = new Map(),
        u = new WeakMap(),
        d = 0,
        s = void 0;
      function _(e) {
        return Object.keys(e)
          .sort()
          .filter(function (n) {
            return void 0 !== e[n];
          })
          .map(function (n) {
            return (
              n +
              '_' +
              ('root' === n ? ((t = e.root) ? (u.has(t) || ((d += 1), u.set(t, d.toString())), u.get(t)) : '0') : e[n])
            );
            var t;
          })
          .toString();
      }
      function l(e, n, t, o) {
        if (
          (void 0 === t && (t = {}),
          void 0 === o && (o = s),
          'undefined' === typeof window.IntersectionObserver && void 0 !== o)
        ) {
          var r = e.getBoundingClientRect();
          return (
            n(o, {
              isIntersecting: o,
              target: e,
              intersectionRatio: 'number' === typeof t.threshold ? t.threshold : 0,
              time: 0,
              boundingClientRect: r,
              intersectionRect: r,
              rootBounds: r,
            }),
            function () {}
          );
        }
        var i = (function (e) {
            var n = _(e),
              t = a.get(n);
            if (!t) {
              var o,
                r = new Map(),
                i = new IntersectionObserver(function (n) {
                  n.forEach(function (n) {
                    var t,
                      i =
                        n.isIntersecting &&
                        o.some(function (e) {
                          return n.intersectionRatio >= e;
                        });
                    e.trackVisibility && 'undefined' === typeof n.isVisible && (n.isVisible = i),
                      null == (t = r.get(n.target)) ||
                        t.forEach(function (e) {
                          e(i, n);
                        });
                  });
                }, e);
              (o = i.thresholds || (Array.isArray(e.threshold) ? e.threshold : [e.threshold || 0])),
                (t = { id: n, observer: i, elements: r }),
                a.set(n, t);
            }
            return t;
          })(t),
          u = i.id,
          d = i.observer,
          l = i.elements,
          c = l.get(e) || [];
        return (
          l.has(e) || l.set(e, c),
          c.push(n),
          d.observe(e),
          function () {
            c.splice(c.indexOf(n), 1),
              0 === c.length && (l.delete(e), d.unobserve(e)),
              0 === l.size && (d.disconnect(), a.delete(u));
          }
        );
      }
      var c = [
        'children',
        'as',
        'triggerOnce',
        'threshold',
        'root',
        'rootMargin',
        'onChange',
        'skip',
        'trackVisibility',
        'delay',
        'initialInView',
        'fallbackInView',
      ];
      function p(e) {
        return 'function' !== typeof e.children;
      }
      var f = (function (e) {
        var n, t;
        function a(n) {
          var t;
          return (
            ((t = e.call(this, n) || this).node = null),
            (t._unobserveCb = null),
            (t.handleNode = function (e) {
              t.node &&
                (t.unobserve(),
                e ||
                  t.props.triggerOnce ||
                  t.props.skip ||
                  t.setState({ inView: !!t.props.initialInView, entry: void 0 })),
                (t.node = e || null),
                t.observeNode();
            }),
            (t.handleChange = function (e, n) {
              e && t.props.triggerOnce && t.unobserve(),
                p(t.props) || t.setState({ inView: e, entry: n }),
                t.props.onChange && t.props.onChange(e, n);
            }),
            (t.state = { inView: !!n.initialInView, entry: void 0 }),
            t
          );
        }
        (t = e), ((n = a).prototype = Object.create(t.prototype)), (n.prototype.constructor = n), i(n, t);
        var u = a.prototype;
        return (
          (u.componentDidUpdate = function (e) {
            (e.rootMargin === this.props.rootMargin &&
              e.root === this.props.root &&
              e.threshold === this.props.threshold &&
              e.skip === this.props.skip &&
              e.trackVisibility === this.props.trackVisibility &&
              e.delay === this.props.delay) ||
              (this.unobserve(), this.observeNode());
          }),
          (u.componentWillUnmount = function () {
            this.unobserve(), (this.node = null);
          }),
          (u.observeNode = function () {
            if (this.node && !this.props.skip) {
              var e = this.props,
                n = e.threshold,
                t = e.root,
                o = e.rootMargin,
                r = e.trackVisibility,
                i = e.delay,
                a = e.fallbackInView;
              this._unobserveCb = l(
                this.node,
                this.handleChange,
                { threshold: n, root: t, rootMargin: o, trackVisibility: r, delay: i },
                a
              );
            }
          }),
          (u.unobserve = function () {
            this._unobserveCb && (this._unobserveCb(), (this._unobserveCb = null));
          }),
          (u.render = function () {
            if (!p(this.props)) {
              var e = this.state,
                n = e.inView,
                t = e.entry;
              return this.props.children({ inView: n, entry: t, ref: this.handleNode });
            }
            var i = this.props,
              a = i.children,
              u = i.as,
              d = (function (e, n) {
                if (null == e) return {};
                var t,
                  o,
                  r = {},
                  i = Object.keys(e);
                for (o = 0; o < i.length; o++) (t = i[o]), n.indexOf(t) >= 0 || (r[t] = e[t]);
                return r;
              })(i, c);
            return o.createElement(u || 'div', r({ ref: this.handleNode }, d), a);
          }),
          a
        );
      })(o.Component);
      function m(e) {
        var n = void 0 === e ? {} : e,
          t = n.threshold,
          r = n.delay,
          i = n.trackVisibility,
          a = n.rootMargin,
          u = n.root,
          d = n.triggerOnce,
          s = n.skip,
          _ = n.initialInView,
          c = n.fallbackInView,
          p = o.useRef(),
          f = o.useState({ inView: !!_ }),
          m = f[0],
          h = f[1],
          v = o.useCallback(
            function (e) {
              void 0 !== p.current && (p.current(), (p.current = void 0)),
                s ||
                  (e &&
                    (p.current = l(
                      e,
                      function (e, n) {
                        h({ inView: e, entry: n }),
                          n.isIntersecting && d && p.current && (p.current(), (p.current = void 0));
                      },
                      { root: u, rootMargin: a, threshold: t, trackVisibility: i, delay: r },
                      c
                    )));
            },
            [Array.isArray(t) ? t.toString() : t, u, a, d, s, i, c, r]
          );
        (0, o.useEffect)(function () {
          p.current || !m.entry || d || s || h({ inView: !!_ });
        });
        var y = [v, m.inView, m.entry];
        return (y.ref = y[0]), (y.inView = y[1]), (y.entry = y[2]), y;
      }
      (f.displayName = 'InView'), (f.defaultProps = { threshold: 0, triggerOnce: !1, initialInView: !1 });
    },
  },
]);
