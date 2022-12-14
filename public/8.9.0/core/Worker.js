(function () {
	function S(C) {
		var v = 0;
		return function () {
			return v < C.length ? { done: !1, value: C[v++] } : { done: !0 };
		};
	}
	var T =
		'function' == typeof Object.defineProperties
			? Object.defineProperty
			: function (C, v, y) {
					if (C == Array.prototype || C == Object.prototype) return C;
					C[v] = y.value;
					return C;
			  };
	function V(C) {
		C = [
			'object' == typeof globalThis && globalThis,
			C,
			'object' == typeof window && window,
			'object' == typeof self && self,
			'object' == typeof global && global,
		];
		for (var v = 0; v < C.length; ++v) {
			var y = C[v];
			if (y && y.Math == Math) return y;
		}
		throw Error('Cannot find global object');
	}
	var W = V(this);
	function X(C, v) {
		if (v)
			a: {
				var y = W;
				C = C.split('.');
				for (var n = 0; n < C.length - 1; n++) {
					var m = C[n];
					if (!(m in y)) break a;
					y = y[m];
				}
				C = C[C.length - 1];
				n = y[C];
				v = v(n);
				v != n &&
					null != v &&
					T(y, C, { configurable: !0, writable: !0, value: v });
			}
	}
	X('Symbol', function (C) {
		function v(z) {
			if (this instanceof v) throw new TypeError('Symbol is not a constructor');
			return new y(n + (z || '') + '_' + m++, z);
		}
		function y(z, w) {
			this.jd = z;
			T(this, 'description', { configurable: !0, writable: !0, value: w });
		}
		if (C) return C;
		y.prototype.toString = function () {
			return this.jd;
		};
		var n = 'jscomp_symbol_' + ((1e9 * Math.random()) >>> 0) + '_',
			m = 0;
		return v;
	});
	X('Symbol.iterator', function (C) {
		if (C) return C;
		C = Symbol('Symbol.iterator');
		for (
			var v =
					'Array Int8Array Uint8Array Uint8ClampedArray Int16Array Uint16Array Int32Array Uint32Array Float32Array Float64Array'.split(
						' '
					),
				y = 0;
			y < v.length;
			y++
		) {
			var n = W[v[y]];
			'function' === typeof n &&
				'function' != typeof n.prototype[C] &&
				T(n.prototype, C, {
					configurable: !0,
					writable: !0,
					value: function () {
						return Y(S(this));
					},
				});
		}
		return C;
	});
	function Y(C) {
		C = { next: C };
		C[Symbol.iterator] = function () {
			return this;
		};
		return C;
	}
	var Z =
		'function' == typeof Object.assign
			? Object.assign
			: function (C, v) {
					for (var y = 1; y < arguments.length; y++) {
						var n = arguments[y];
						if (n)
							for (var m in n)
								Object.prototype.hasOwnProperty.call(n, m) && (C[m] = n[m]);
					}
					return C;
			  };
	X('Object.assign', function (C) {
		return C || Z;
	});
	X('String.fromCodePoint', function (C) {
		return C
			? C
			: function (v) {
					for (var y = '', n = 0; n < arguments.length; n++) {
						var m = Number(arguments[n]);
						if (0 > m || 1114111 < m || m !== Math.floor(m))
							throw new RangeError('invalid_code_point ' + m);
						65535 >= m
							? (y += String.fromCharCode(m))
							: ((m -= 65536),
							  (y += String.fromCharCode(((m >>> 10) & 1023) | 55296)),
							  (y += String.fromCharCode((m & 1023) | 56320)));
					}
					return y;
			  };
	});
	function aa(C, v) {
		C instanceof String && (C += '');
		var y = 0,
			n = !1,
			m = {
				next: function () {
					if (!n && y < C.length) {
						var z = y++;
						return { value: v(z, C[z]), done: !1 };
					}
					n = !0;
					return { done: !0, value: void 0 };
				},
			};
		m[Symbol.iterator] = function () {
			return m;
		};
		return m;
	}
	X('Array.prototype.keys', function (C) {
		return C
			? C
			: function () {
					return aa(this, function (v) {
						return v;
					});
			  };
	});
	(function (C) {
		function v(n) {
			if (y[n]) return y[n].exports;
			var m = (y[n] = { Af: n, ue: !1, exports: {} });
			C[n].call(m.exports, m, m.exports, v);
			m.ue = !0;
			return m.exports;
		}
		var y = {};
		v.c = y;
		v.d = function (n, m, z) {
			v.xe(n, m) || Object.defineProperty(n, m, { enumerable: !0, get: z });
		};
		v.r = function (n) {
			'undefined' !== typeof Symbol &&
				Symbol.toStringTag &&
				Object.defineProperty(n, Symbol.toStringTag, { value: 'Module' });
			Object.defineProperty(n, '__esModule', { value: !0 });
		};
		v.t = function (n, m) {
			m & 1 && (n = v(n));
			if (m & 8 || (m & 4 && 'object' === typeof n && n && n.ld)) return n;
			var z = Object.create(null);
			v.r(z);
			Object.defineProperty(z, 'default', { enumerable: !0, value: n });
			if (m & 2 && 'string' != typeof n)
				for (var w in n)
					v.d(
						z,
						w,
						function (E) {
							return n[E];
						}.bind(null, w)
					);
			return z;
		};
		v.n = function (n) {
			var m =
				n && n.ld
					? function () {
							return n['default'];
					  }
					: function () {
							return n;
					  };
			v.d(m, 'a', m);
			return m;
		};
		v.xe = function (n, m) {
			return Object.prototype.hasOwnProperty.call(n, m);
		};
		v.p = '/core/';
		return v(9);
	})([
		function (C, v, y) {
			function n(z, w) {
				z.splice(w, 1);
			}
			function m(z) {
				return z.length ? z[z.length - 1] : null;
			}
			y.d(v, 'a', function () {
				return m;
			});
			y.d(v, 'b', function () {
				return n;
			});
			y(6);
		},
		function (C, v, y) {
			function n(E, q) {
				var b;
				w[E] = q;
				null === (b = z[E]) || void 0 === b
					? void 0
					: b.forEach(function (a) {
							a(q);
					  });
			}
			function m(E) {
				return w[E];
			}
			y.d(v, 'a', function () {
				return m;
			});
			y.d(v, 'b', function () {
				return n;
			});
			var z = {},
				w = {
					flattenedResources: !1,
					CANVAS_CACHE_SIZE: void 0,
					maxPagesBefore: void 0,
					maxPagesAhead: void 0,
					disableLogs: !1,
					wvsQueryParameters: {},
					_trnDebugMode: !1,
					_logFiltersEnabled: null,
				};
		},
		function (C, v, y) {
			function n(z, w) {
				Object(m.a)('disableLogs') ||
					(w ? console.warn(z + ': ' + w) : console.warn(z));
			}
			y.d(v, 'a', function () {
				return n;
			});
			var m = y(1);
		},
		function (C, v) {
			C =
				'undefined' !== typeof Uint8Array &&
				'undefined' !== typeof Uint16Array &&
				'undefined' !== typeof Int32Array;
			v.assign = function (m) {
				for (var z = Array.prototype.slice.call(arguments, 1); z.length; ) {
					var w = z.shift();
					if (w) {
						if ('object' !== typeof w)
							throw new TypeError(w + 'must be non-object');
						for (var E in w)
							Object.prototype.hasOwnProperty.call(w, E) && (m[E] = w[E]);
					}
				}
				return m;
			};
			v.shrinkBuf = function (m, z) {
				if (m.length === z) return m;
				if (m.subarray) return m.subarray(0, z);
				m.length = z;
				return m;
			};
			var y = {
					arraySet: function (m, z, w, E, q) {
						if (z.subarray && m.subarray) m.set(z.subarray(w, w + E), q);
						else for (var b = 0; b < E; b++) m[q + b] = z[w + b];
					},
					flattenChunks: function (m) {
						var z, w;
						var E = (w = 0);
						for (z = m.length; E < z; E++) w += m[E].length;
						var q = new Uint8Array(w);
						E = w = 0;
						for (z = m.length; E < z; E++) {
							var b = m[E];
							q.set(b, w);
							w += b.length;
						}
						return q;
					},
				},
				n = {
					arraySet: function (m, z, w, E, q) {
						for (var b = 0; b < E; b++) m[q + b] = z[w + b];
					},
					flattenChunks: function (m) {
						return [].concat.apply([], m);
					},
				};
			v.ze = function (m) {
				m
					? ((v.Buf8 = Uint8Array),
					  (v.kb = Uint16Array),
					  (v.lb = Int32Array),
					  v.assign(v, y))
					: ((v.Buf8 = Array), (v.kb = Array), (v.lb = Array), v.assign(v, n));
			};
			v.ze(C);
		},
		function (C, v) {
			C = (function () {
				function y(n) {
					this.depth = this.index = 0;
					this.N = n;
					this.location = {
						start: 0,
						Qb: 1,
						Rb: 1,
						end: !!n.length,
						empty: !0,
					};
					this.wb = [this.location];
					this.oc = !1;
					'?' === this.N.charAt(1) && this.dd();
					this.location.empty = !1;
				}
				y.prototype.advance = function () {
					this.Ea = null;
					this.dd();
					var n = this.location.start;
					++n;
					this.location.empty = !1;
					if ('/' !== this.N.charAt(n))
						return (
							(this.location.empty =
								'/' === this.N.charAt(this.N.indexOf('>', n) - 1)),
							!0
						);
					this.location.end = !0;
					return !1;
				};
				y.prototype.gd = function () {
					var n = this.location.start + 1,
						m = this.N.indexOf('>', n);
					this.location.empty && --m;
					n = this.N.substring(n, m);
					this.Ea = {};
					m = n.indexOf(' ');
					if (-1 !== m) {
						this.bd = n.substring(0, m);
						n = n.slice(m);
						n = n.split('"');
						m = n.length - 1;
						for (var z = 0; z < m; ++z) {
							var w = n[z],
								E = n[++z];
							this.Ea[w.substring(1, w.length - 1)] = E;
						}
					} else this.bd = n;
				};
				y.prototype.dd = function () {
					if (this.oc)
						(this.oc = !1),
							(this.location.start = this.N.indexOf(
								'<',
								this.location.start + 1
							));
					else {
						var n = this.location.Qb;
						if (!this.location.empty)
							for (var m = this.location.Rb; 0 < m; )
								(n = this.N.indexOf('<', n)),
									'/' === this.N.charAt(++n)
										? --m
										: ((n = this.N.indexOf('>', n)),
										  '/' !== this.N.charAt(n - 1) && ++m);
						this.location.start = this.N.indexOf('<', n);
					}
					this.location.Qb = this.location.start + 1;
					this.location.Rb = 1;
				};
				y.prototype.mark = function () {
					this.N.mark && this.N.mark(this.location.start);
				};
				y.prototype.P = function () {
					(null !== this.Ea && 'undefined' !== typeof this.Ea) || this.gd();
					return this.bd;
				};
				y.prototype.K = function () {
					++this.depth;
					this.location = { start: this.location.start };
					this.wb[this.wb.length] = this.location;
					this.oc = !0;
				};
				y.prototype.J = function () {
					--this.depth;
					this.Ea = null;
					var n = this.location.Qb,
						m = this.location.Rb,
						z = this.location.empty,
						w = this.location.end;
					this.wb.pop();
					this.location = this.wb[this.wb.length - 1];
					this.location.Qb = n;
					this.location.Rb = w ? 0 : z ? m : m + 1;
				};
				y.prototype.W = function () {
					return this.location.empty
						? !0
						: '/' ===
								this.N.charAt(this.N.indexOf('<', this.location.start + 1) + 1);
				};
				y.prototype.F = function (n) {
					(null !== this.Ea && 'undefined' !== typeof this.Ea) || this.gd();
					return this.Be(this.Ea[n]);
				};
				y.prototype.Be = function (n) {
					if (n)
						return n.replace(/&[^;]*;/g, function (m) {
							switch (m.charAt(1)) {
								case 'q':
									return '"';
								case 'a':
									return '&';
								case 'l':
									return '<';
								case 'g':
									return '>';
								case '#':
									return 'x' === m.charAt(2)
										? String.fromCharCode(
												parseInt(m.substring(3, m.length - 1), 16)
										  )
										: String.fromCharCode(
												parseInt(m.substring(2, m.length - 1), 10)
										  );
							}
							return m;
						});
				};
				return y;
			})();
			v.a = C;
		},
		function (C, v, y) {
			function n(z) {
				return new m(z);
			}
			y.d(v, 'a', function () {
				return n;
			});
			var m = (function () {
				function z(w) {
					this.uc = w;
					this.Ha = -1;
					this.current = null;
				}
				z.prototype.ve = function () {
					this.Ha++;
					this.current = this.uc[this.Ha];
					return this.Ha < this.uc.length;
				};
				z.prototype.reset = function () {
					this.Ha = -1;
					this.current = null;
				};
				return z;
			})();
		},
		function (C, v, y) {
			function n() {
				for (var m = 0, z = 0, w = arguments.length; z < w; z++)
					m += arguments[z].length;
				m = Array(m);
				var E = 0;
				for (z = 0; z < w; z++)
					for (var q = arguments[z], b = 0, a = q.length; b < a; b++, E++)
						m[E] = q[b];
				return m;
			}
			y.d(v, 'a', function () {
				return n;
			});
		},
		function (C, v, y) {
			function n(m) {
				if ('string' !== typeof m) {
					for (var z = '', w = 0, E = m.length, q; w < E; )
						(q = m.subarray(w, w + 1024)),
							(w += 1024),
							(z += String.fromCharCode.apply(null, q));
					return z;
				}
				return m;
			}
			y.d(v, 'a', function () {
				return n;
			});
		},
		function (C, v, y) {
			function n(h) {
				if (!(this instanceof n)) return new n(h);
				var g = (this.options = w.assign(
					{ chunkSize: 16384, windowBits: 0, to: '' },
					h || {}
				));
				g.raw &&
					0 <= g.windowBits &&
					16 > g.windowBits &&
					((g.windowBits = -g.windowBits),
					0 === g.windowBits && (g.windowBits = -15));
				!(0 <= g.windowBits && 16 > g.windowBits) ||
					(h && h.windowBits) ||
					(g.windowBits += 32);
				15 < g.windowBits &&
					48 > g.windowBits &&
					0 === (g.windowBits & 15) &&
					(g.windowBits |= 15);
				this.err = 0;
				this.msg = '';
				this.ended = !1;
				this.chunks = [];
				this.strm = new a();
				this.strm.avail_out = 0;
				h = z.inflateInit2(this.strm, g.windowBits);
				if (h !== q.Z_OK) throw Error(b[h]);
				this.header = new e();
				z.inflateGetHeader(this.strm, this.header);
				if (
					g.dictionary &&
					('string' === typeof g.dictionary
						? (g.dictionary = E.string2buf(g.dictionary))
						: '[object ArrayBuffer]' === d.call(g.dictionary) &&
						  (g.dictionary = new Uint8Array(g.dictionary)),
					g.raw &&
						((h = z.inflateSetDictionary(this.strm, g.dictionary)),
						h !== q.Z_OK))
				)
					throw Error(b[h]);
			}
			function m(h, g) {
				g = new n(g);
				g.push(h, !0);
				if (g.err) throw g.msg || b[g.err];
				return g.result;
			}
			var z = y(13),
				w = y(3),
				E = y(18),
				q = y(19),
				b = y(20),
				a = y(21),
				e = y(22),
				d = Object.prototype.toString;
			n.prototype.push = function (h, g) {
				var l = this.strm,
					p = this.options.chunkSize,
					D = this.options.dictionary,
					k = !1;
				if (this.ended) return !1;
				g = g === ~~g ? g : !0 === g ? q.Z_FINISH : q.Z_NO_FLUSH;
				'string' === typeof h
					? (l.input = E.binstring2buf(h))
					: '[object ArrayBuffer]' === d.call(h)
					? (l.input = new Uint8Array(h))
					: (l.input = h);
				l.next_in = 0;
				l.avail_in = l.input.length;
				do {
					0 === l.avail_out &&
						((l.output = new w.Buf8(p)), (l.next_out = 0), (l.avail_out = p));
					h = z.inflate(l, q.Z_NO_FLUSH);
					h === q.Z_NEED_DICT &&
						D &&
						(h = z.inflateSetDictionary(this.strm, D));
					h === q.Z_BUF_ERROR && !0 === k && ((h = q.Z_OK), (k = !1));
					if (h !== q.Z_STREAM_END && h !== q.Z_OK)
						return this.onEnd(h), (this.ended = !0), !1;
					if (
						l.next_out &&
						(0 === l.avail_out ||
							h === q.Z_STREAM_END ||
							(0 === l.avail_in && (g === q.Z_FINISH || g === q.Z_SYNC_FLUSH)))
					)
						if ('string' === this.options.to) {
							var r = E.utf8border(l.output, l.next_out);
							var G = l.next_out - r;
							var B = E.buf2string(l.output, r);
							l.next_out = G;
							l.avail_out = p - G;
							G && w.arraySet(l.output, l.output, r, G, 0);
							this.onData(B);
						} else this.onData(w.shrinkBuf(l.output, l.next_out));
					0 === l.avail_in && 0 === l.avail_out && (k = !0);
				} while ((0 < l.avail_in || 0 === l.avail_out) && h !== q.Z_STREAM_END);
				h === q.Z_STREAM_END && (g = q.Z_FINISH);
				if (g === q.Z_FINISH)
					return (
						(h = z.inflateEnd(this.strm)),
						this.onEnd(h),
						(this.ended = !0),
						h === q.Z_OK
					);
				g === q.Z_SYNC_FLUSH && (this.onEnd(q.Z_OK), (l.avail_out = 0));
				return !0;
			};
			n.prototype.onData = function (h) {
				this.chunks.push(h);
			};
			n.prototype.onEnd = function (h) {
				h === q.Z_OK &&
					(this.result =
						'string' === this.options.to
							? this.chunks.join('')
							: w.flattenChunks(this.chunks));
				this.chunks = [];
				this.err = h;
				this.msg = this.strm.msg;
			};
			v.Inflate = n;
			v.inflate = m;
			v.inflateRaw = function (h, g) {
				g = g || {};
				g.raw = !0;
				return m(h, g);
			};
			v.ungzip = m;
		},
		function (C, v, y) {
			C.exports = y(10);
		},
		function (C, v, y) {
			y.r(v);
			y(4);
			y(11);
			y(12);
		},
		function (C, v, y) {
			function n(E) {
				'@babel/helpers - typeof';
				return (
					(n =
						'function' == typeof Symbol && 'symbol' == typeof Symbol.iterator
							? function (q) {
									return typeof q;
							  }
							: function (q) {
									return q &&
										'function' == typeof Symbol &&
										q.constructor === Symbol &&
										q !== Symbol.prototype
										? 'symbol'
										: typeof q;
							  }),
					n(E)
				);
			}
			var m = y(2),
				z = y(5),
				w = y(0);
			(function (E) {
				function q(a, e) {
					this.A = [];
					this.B = [];
					a && this.M(a, e);
				}
				var b = E.trn || {};
				E.trn = b;
				String.fromCodePoint ||
					(function () {
						function a() {
							var g = [],
								l = -1,
								p = arguments.length;
							if (!p) return '';
							for (var D = ''; ++l < p; ) {
								var k = Number(arguments[l]);
								if (!isFinite(k) || 0 > k || 1114111 < k || h(k) !== k)
									throw RangeError('Invalid code point: '.concat(k));
								if (65535 >= k) g.push(k);
								else {
									k -= 65536;
									var r = (k >> 10) + 55296;
									k = (k % 1024) + 56320;
									g.push(r, k);
								}
								if (l + 1 === p || 16384 < g.length)
									(D += d.apply(void 0, g)), (g.length = 0);
							}
							return D;
						}
						var e = (function () {
								try {
									var g = {},
										l = Object.defineProperty;
									var p = l(g, g, g) && l;
								} catch (D) {}
								return p;
							})(),
							d = String.fromCharCode,
							h = Math.floor;
						e
							? e(String, 'fromCodePoint', {
									value: a,
									configurable: !0,
									writable: !0,
							  })
							: (String.fromCodePoint = a);
					})();
				Array.prototype.Pa &&
					Object(m.a)(
						"Overriding existing Array.prototype.equals. Possible causes: New API defines the method, there's a framework conflict or you've got double inclusions in your code."
					);
				Array.prototype.Pa = function (a) {
					if (!a || this.length !== a.length) return !1;
					for (var e = 0, d = this.length; e < d; e++)
						if (this[e] instanceof Array && a[e] instanceof Array) {
							if (!this[e].Pa(a[e])) return !1;
						} else if (this[e] !== a[e]) return !1;
					return !0;
				};
				Object.defineProperty(Array.prototype, 'equals', {
					enumerable: !1,
					writable: !0,
				});
				q.prototype = {
					D: function (a) {
						this.A = this.A.concat(a.A);
						this.B = this.B.concat(a.B);
					},
					M: function (a, e) {
						this.A.push(a);
						a = n(e);
						this.B.push('object' === a ? e : 'undefined' === a ? null : [e]);
					},
					Pa: function (a) {
						return this.A.Pa(a.A) && this.B.Pa(a.B);
					},
					save: function () {
						this.A.push(b.g.Od);
						this.B.push(null);
					},
					restore: function () {
						this.M(b.g.Nd, null);
					},
				};
				b.g = function (a, e, d, h) {
					this.done = !1;
					this.Hc = 2e3;
					this.Ja = {};
					this.La = 0;
					this.R = [];
					this.Ib = [];
					this.ga = [];
					this.ga.push({});
					this.i = a;
					this.Lc = this.yb('Width');
					this.Kc = this.yb('Height');
					this.R.push(b.Sa.initial(this.Lc, this.Kc));
					this.da = !1;
					this.Hb = d;
					this.de =
						-1 < navigator.userAgent.indexOf('Android') &&
						-1 === navigator.userAgent.indexOf('Chrome') &&
						-1 === navigator.userAgent.indexOf('Firefox');
					this.A = [];
					this.B = [];
					this.i.K();
					this.i.advance();
					this.lc = h;
					a = this.i.P();
					b.g.o(a, 'FixedPage.Resources', b.g.m) &&
						(this.i.K(), this.i.advance(), this.Qc(), this.i.J());
					this.Ia = !1;
				};
				b.g.o = function (a, e, d) {
					return a === e ? !0 : a === d + e;
				};
				b.g.ad = function (a) {
					return b.g.oe(a);
				};
				b.g.oe = function (a) {
					var e = 3,
						d = Math.abs(a);
					0.5 > d && (e = 5e-4 > d ? (5e-7 > d ? 9 : 7) : 5);
					e = Math.pow(10, e);
					a = Math.round(a * e) / e;
					return a.toString();
				};
				b.g.I = function (a, e) {
					if (!a) throw Error(e);
				};
				b.g.zf = function (a) {
					return new b.g(a, !1).Ud();
				};
				b.g.prototype = {
					ae: function () {
						return this.$b();
					},
					Vb: function (a, e, d) {
						var h = this.Td(),
							g = this.i.P();
						if (b.g.o(g, 'Path', b.g.m)) var l = this.Yb();
						else
							b.g.o(g, 'Canvas', b.g.m)
								? (l = this.Eb())
								: b.g.o(g, 'Glyphs', b.g.m)
								? (l = this.Xb())
								: ((l = null), b.g.I(!1, 'Invalid Element '.concat(g)));
						l.gb(h);
						if (l.te()) {
							h = this.ae();
							g = this.Ua();
							h.mtx = [g.X, g.Y, g.Z, g.$, g.ca, g.ea];
							if (a) {
								a = { operators: a.A, data: a.B };
								var p = this.i.F('RenderTransform');
								if (null != p) {
									var D = new b.L();
									D.aa(p);
									p = new b.L();
									p.ac(g);
									p.Ga(D);
									g = p;
								}
								a.mtx = [g.X, g.Y, g.Z, g.$, g.ca, g.ea];
							}
							this.M(b.g.Rd, [
								h,
								{ x1: l.u, y1: l.v, x2: l.u + l.H, y2: l.v + l.G },
								e,
								a,
								d,
							]);
							this.Mc = !0;
						} else this.da = !1;
					},
					Eb: function () {
						var a = new b.ia();
						this.ba();
						var e = this.i.F('RenderTransform');
						if (null != e) {
							var d = new b.L();
							d.aa(e);
							this.T(d);
						}
						e = this.i.F('Clip');
						null != e && (a = this.Ba(e));
						e = null;
						if (!this.i.W()) {
							for (this.i.K(); this.i.advance(); )
								(d = this.i.P()),
									b.g.o(d, 'Canvas.Clip', b.g.m)
										? (b.g.I(
												!this.i.W(),
												'Canvas.Clip: Must contain PathGeometry element'
										  ),
										  this.i.K(),
										  this.i.advance() &&
												((d = new b.L()),
												d.aa(this.C('Transform')),
												this.T(d),
												a.gb(this.Ba(this.C('Figures'))),
												(d = d.Va()),
												this.T(d)),
										  this.i.J())
										: b.g.o(d, 'Path', b.g.m)
										? null != e
											? e.sc(this.Yb())
											: (e = this.Yb())
										: b.g.o(d, 'Glyphs', b.g.m)
										? null != e
											? e.sc(this.Xb())
											: (e = this.Xb())
										: b.g.o(d, 'Canvas', b.g.m) &&
										  (null != e ? e.sc(this.Eb()) : (e = this.Eb()));
							this.i.J();
						}
						null != e && a.gb(e);
						this.qa();
						return a;
					},
					he: function () {
						var a = this.sa('trn:BlendMode', 'source-over');
						a = this.da ? 'source-over' : a;
						var e = this.hc();
						e || (this.save(), this.ba());
						var d = null,
							h = this.i.F('OpacityMask');
						null != h &&
							(Object(m.a)('Uh oh OpacityMask Resource!'), (d = this.Ca(h)));
						h = this.ma('Opacity', 1);
						if (!this.i.W()) {
							for (this.i.K(); this.i.advance(); ) {
								var g = this.i.P();
								if (b.g.o(g, 'Canvas.Resources', b.g.m))
									this.i.W()
										? b.g.I(
												!1,
												'Canvas.Resources must contain ResourceDictionary element'
										  )
										: (this.i.K(), this.i.advance(), this.Qc(), this.i.J());
								else if (b.g.o(g, 'Canvas.Clip', b.g.m))
									b.g.I(
										!this.i.W(),
										'Canvas.Clip: Must contain PathGeometry element'
									),
										this.i.K(),
										this.i.advance() &&
											(e || (this.save(), (e = !0), this.ba()),
											(g = new b.L()),
											g.aa(this.C('Transform')),
											this.D(this.T(g)),
											b.g.I(
												b.g.o(this.i.P(), 'PathGeometry', b.g.m),
												'Path.Clip must contain PathGeometry'
											),
											this.Ob(this.C('Figures')),
											(g = g.Va()),
											this.D(this.T(g))),
										this.i.J();
								else if (b.g.o(g, 'Canvas.OpacityMask', b.g.m))
									this.da ||
										(this.i.K(),
										this.i.advance(),
										(d = this.Ta(b.g.na, new q(b.g.Bb))),
										this.i.J());
								else if (
									b.g.o(g, 'Path', b.g.m) ||
									b.g.o(g, 'Glyphs', b.g.m) ||
									b.g.o(g, 'Canvas', b.g.m) ||
									b.g.o(g, 'trn:Glyphs', b.g.m)
								) {
									if (null != d || 'source-over' !== a || (1 > h && !this.da)) {
										this.vb();
										this.i.J();
										this.da = !0;
										this.Vb(d, a, h);
										return;
									}
									this.Ia = !1;
									break;
								}
							}
							this.Ia && this.i.J();
						}
						this.Ia && this.vb();
						this.da = !1;
					},
					vb: function () {
						this.restore();
						this.qa();
					},
					yb: function (a) {
						a = this.i.F(a);
						b.g.I(
							null != a,
							''.concat(this.i.P(), ': ').concat(a, ' is not defined')
						);
						return parseFloat(a);
					},
					ma: function (a, e) {
						a = this.i.F(a);
						return null != a ? parseFloat(a) : e;
					},
					C: function (a) {
						a = this.i.F(a);
						b.g.I(
							null != a,
							''.concat(this.i.P(), ': ').concat(a, ' is not defined')
						);
						return a;
					},
					sa: function (a, e) {
						a = this.i.F(a);
						return null != a ? a : e;
					},
					cd: function () {
						var a = this.i.F('x:Key');
						b.g.I(
							null != a,
							'Key must be defined for elements in a resource dictionary'
						);
						return a;
					},
					hc: function () {
						0 === this.La && this.i.mark();
						var a = !1,
							e = this.ma('Opacity', 1);
						1 > e &&
							!this.da &&
							(a || ((a = !0), this.save(), this.ba()), this.D(this.Ra(e)));
						e = this.i.F('RenderTransform');
						null != e && (a || ((a = !0), this.save(), this.ba()), this.je(e));
						e = this.i.F('Clip');
						null != e && (a || (this.save(), this.ba()), this.Ob(e), (a = !0));
						return a;
					},
					Ob: function (a) {
						var e = !0;
						a && 'F' === a[0] && (e = !1);
						this.Sc(e ? 'evenodd' : 'nonzero');
						this.ce(this.Ba(a));
						this.Oc(a);
						this.A.push(b.g.sd);
						this.B.push(e ? ['evenodd'] : []);
					},
					ge: function (a) {
						var e = [];
						for (a = Object(z.a)(a.split(';')); a.ve(); ) {
							var d = a.current,
								h = new b.Ha();
							d = d.split(',');
							if (1 <= d.length) {
								if (0 < d[0].length) {
									var g = d[0].split(')');
									if (2 <= g.length) {
										var l = g[0].substr(1).split(':');
										h.rb = parseInt(l[0]);
										h.cc = parseInt(l[1]);
									}
									h.Lb = parseInt(g[g.length - 1]);
									h.ub = !0;
								}
								2 <= d.length &&
									(0 < d[1].length && ((h.bc = parseFloat(d[1])), (h.ec = !0)),
									3 <= d.length &&
										(0 < d[2].length && (h.Mb = parseFloat(d[2])),
										4 <= d.length &&
											0 < d[3].length &&
											(h.Nb = parseFloat(d[3]))));
							}
							e.push(h);
						}
						return e;
					},
					be: function () {
						var a = this.C('UnicodeString'),
							e = '',
							d = 0;
						for (
							2 <= a.length &&
							'{' === a.charAt(0) &&
							'}' === a.charAt(1) &&
							(a = a.substr(2));
							d < a.length;

						) {
							var h = a.charCodeAt(d);
							if (9 == h) (e += String.fromCharCode(10)), d++;
							else if (128 > h) (e += String.fromCharCode(h)), d++;
							else if (191 < h)
								if (224 > h) {
									var g = a.charCodeAt(d + 1);
									e += String.fromCharCode(((h & 31) << 6) | (g & 63));
									d += 2;
								} else if (240 > h) {
									g = a.charCodeAt(d + 1);
									var l = a.charCodeAt(d + 2);
									e += String.fromCharCode(
										((h & 15) << 12) | ((g & 63) << 6) | (l & 63)
									);
									d += 3;
								} else {
									g = a.charCodeAt(d + 1);
									l = a.charCodeAt(d + 2);
									var p = a.charCodeAt(d + 3);
									e += String.fromCodePoint(
										((h & 7) << 18) |
											((g & 63) << 12) |
											((l & 63) << 6) |
											(p & 63)
									);
									d += 4;
								}
							else Object(m.a)('Invalid UTF-8 character');
						}
						return e;
					},
					Xb: function () {
						var a = new b.ia(),
							e = this.i.F('Clip');
						null != e && (a = this.Ba(e));
						return a;
					},
					Zb: function (a, e) {
						return this.de && 1 === a.length
							? e === b.g.wc
								? b.g.zd
								: e === b.g.Wb
								? b.g.Wb
								: b.g.Ad
							: e;
					},
					tc: function (a) {
						return 0 === Object.keys(a).length && a.constructor === Object;
					},
					Nc: function (a) {
						var e = this.sa('trn:BlendMode', 'source-over');
						e = this.da ? 'source-over' : e;
						var d = 'source-over' != e && !this.Hb,
							h = this.hc();
						this.Hb && this.Rc(e);
						var g = this.yb('OriginX'),
							l = this.yb('OriginY'),
							p = this.C('FontUri');
						this.qb[p] = null;
						var D = this.yb('FontRenderingEmSize'),
							k = this.ge(this.sa('Indices', ''));
						if (200 > D) {
							var r = D / 200;
							h || (this.ba(), this.save(), (h = !0));
							var G = new b.L();
							G.ob(r, 0, 0, r, g, l);
							D = 200;
							l = 0;
							this.A.push(b.g.Db);
							this.B.push(G.Fb());
						}
						var B = 0;
						g = new q();
						var u = this.be(),
							f = 0,
							K = 0,
							L = D / 100,
							M = '';
						G = null;
						var I = this.i.F('Stroke');
						a = I ? b.g.Wb : a ? b.g.wc : b.g.yd;
						g.M(b.g.Pd, 0);
						for (var J = {}, F, x = 0; x < k.length; ) {
							var t = k[x],
								Q = u.charCodeAt(B);
							Q = 55296 <= Q && 57344 > Q ? Math.max(2, t.rb) : t.rb;
							if (f !== t.Mb || K !== t.Nb)
								M &&
									(g.M(this.Zb(F, a), [M, f ? f * L : 0, l - K * L]),
									g.M(b.g.yc, [M])),
									(f = t.Mb),
									(K = t.Nb),
									(M = '');
							t.ub && (J[M.length] = u.substr(B, t.rb));
							t.ec
								? (this.tc(J) || g.M(b.g.Bc, [J]),
								  (F =
										M +
										(t.ub
											? String.fromCharCode(t.Lb + 57344)
											: u.substr(B, Q))),
								  g.M(this.Zb(F, a), [F, f ? f * L : 0, l - K * L]),
								  M && g.M(b.g.yc, [M]),
								  g.M(b.g.pd, [t.bc * L]),
								  (J = {}),
								  (M = ''))
								: (M += t.ub
										? String.fromCharCode(t.Lb + 57344)
										: u.substr(B, Q));
							x += t.cc;
							B += Q;
						}
						if (M || B < u.length)
							this.tc(J) || g.M(b.g.Bc, [J]),
								(F = M + u.substr(B, u.length - B)),
								g.M(this.Zb(F, a), [F, 0, 0]);
						l = F = null;
						f = this.i.F('Fill');
						B = !1;
						null != f &&
							(this.Gb(f)
								? (F = this.Ca(f, b.g.na, g))
								: ((B = !0), (F = this.nb(f, b.g.na, g))));
						k = !1;
						null != I &&
							(this.Gb(I)
								? (G = this.Ca(I, b.g.Aa, g))
								: ((k = !0), (G = this.nb(I, b.g.Aa, g))));
						f = this.i.F('OpacityMask');
						null != f &&
							(Object(m.a)('Uh oh OpacityMask Resource!'), (l = this.Ca(f)));
						if (!this.i.W() && !a) {
							for (this.i.K(); this.i.advance(); )
								(a = this.i.P()),
									b.g.o(a, 'Glyphs.Clip', b.g.m)
										? (b.g.I(
												!this.i.W(),
												'Canvas.Clip: Must contain PathGeometry element'
										  ),
										  this.i.K(),
										  this.i.advance() &&
												(h || ((h = !0), this.save(), this.ba()),
												(a = new b.L()),
												a.aa(this.C('Transform')),
												this.A.push(b.g.Db),
												this.B.push(a.Fb()),
												b.g.I(
													b.g.o(this.i.P(), 'PathGeometry', b.g.m),
													'Path.Clip must contain PathGeometry'
												),
												(I = this.C('Figures')),
												this.Ob(I),
												(a = a.Va()),
												this.A.push(b.g.Db),
												this.B.push(a.Fb())),
										  this.i.J())
										: b.g.o(a, 'Glyphs.Fill', b.g.m)
										? (this.i.K(),
										  this.i.advance(),
										  (F = this.Ta(b.g.na, g)),
										  this.i.J())
										: b.g.o(a, 'Glyphs.OpacityMask', b.g.m) &&
										  !this.da &&
										  (this.i.K(),
										  this.i.advance(),
										  (l = this.Ta(b.g.na, new q(b.g.Bb))),
										  this.i.J());
							this.i.J();
						}
						if (null == l || d)
							'otf' === p.substr(p.indexOf('.') + 1)
								? ((p = p.substr(0, p.length - 4)), (p = parseInt(p.substr(7))))
								: (p = parseInt(p.substr(35, 8), 16)),
								(p = 'f'.concat(this.lc, '-').concat(p)),
								this.Ja[p]
									? 10 > this.Ja[p].length &&
									  (this.Ja[p] += u.substr(0, 10 - this.Ja[p].length))
									: (this.Ja[p] = u.substr(0, 10)),
								this.le(''.concat(b.g.ad(D), 'px ').concat(p)),
								null !== F &&
									(B || ((F = new q(b.g.na, '#000000')), F.D(g)),
									this.ic(F, g)),
								null != G &&
									((D = this.ma('StrokeThickness', 1)),
									(p = this.i.F('RenderTransform')),
									(u = new b.L()),
									null != p && u.aa(p),
									this.jc(D / (r * u.Qa())),
									this.Tc(this.Ec(this.sa('StrokeStartLineCap', 'Flat'))),
									this.Uc(this.sa('StrokeLineJoin', 'miter').toLowerCase()),
									this.Vc(this.ma('StrokeMiterLimit', 10)),
									k || ((G = new q(b.g.Aa, '#000000')), G.D(g)),
									this.Wc(G, g));
						h && (this.restore(), this.qa());
						if (null != l || d) (this.da = !0), this.Vb(l, e);
						this.da = !1;
					},
					Dc: function () {
						var a = [];
						this.i.K();
						b.g.I(
							this.i.advance(),
							'Gradient brushes must contain GradientStops'
						);
						for (this.i.K(); this.i.advance(); ) {
							var e = this.C('Color'),
								d = this.C('Offset');
							a.push(d);
							a.push(this.Cc(e));
						}
						this.i.J();
						this.i.J();
						return a;
					},
					Xd: function (a, e, d) {
						var h = this.i.F('Transform'),
							g = new q();
						g.save();
						this.ba();
						null != h && (d.aa(h), g.D(this.T(d)));
						d = this.ma('Opacity', 1);
						1 > d && g.D(this.Ra(d));
						h = this.C('StartPoint').split(',');
						d = parseFloat(h[0]);
						h = parseFloat(h[1]);
						var l = this.C('EndPoint').split(',');
						d = {
							type: b.g.Id,
							x0: d,
							y0: h,
							x1: parseFloat(l[0]),
							y1: parseFloat(l[1]),
							stops: this.Dc(),
						};
						g.M(a, [d]);
						g.D(e);
						g.restore();
						this.qa();
						return g;
					},
					Zd: function (a, e, d) {
						var h = this.i.F('Transform'),
							g = new q(),
							l = this.C('RadiusX'),
							p = this.C('RadiusY'),
							D = this.C('GradientOrigin'),
							k = this.C('Center');
						g.save();
						this.ba();
						var r = parseFloat(l),
							G = parseFloat(p);
						b.g.I(0 < r && 0 < G, 'Invalid radius value');
						var B = k.split(',');
						k = parseFloat(B[0]);
						B = parseFloat(B[1]);
						var u = D.split(',');
						D = parseFloat(u[0]);
						u = parseFloat(u[1]);
						if (null != h || l !== p)
							null != h && d.aa(h),
								(h = G / r),
								(u /= h),
								(B /= h),
								(p = new b.L()),
								p.ob(1, 0, 0, h, 0, 0),
								d.Ga(p),
								g.D(this.T(d));
						d = this.ma('Opacity', 1);
						1 > d && g.D(this.Ra(d));
						l = {
							type: b.g.Ld,
							x0: D,
							y0: u,
							x1: k,
							y1: B,
							r: l,
							stops: this.Dc(),
						};
						g.M(a, [l]);
						g.D(e);
						g.restore();
						this.qa();
						return g;
					},
					me: function () {
						b.g.I(!this.Kb, 'Incorrect custom glyph start');
						this.A.push(b.g.ud);
						this.B.push(null);
						this.Kb = !0;
					},
					Sd: function () {
						b.g.I(this.Kb, 'Incorrect custom glyph end');
						this.A.push(b.g.vd);
						this.B.push(null);
						this.Kb = !1;
					},
					D: q.prototype.D,
					M: q.prototype.M,
					Wc: function (a, e) {
						var d = Object(w.a)(this.R);
						a.Pa(d.cb)
							? e
								? this.D(e)
								: this.M(b.g.Cb, null)
							: (a.A[0] === b.g.Aa && (d.cb = a), this.D(a));
					},
					ic: function (a, e) {
						var d = Object(w.a)(this.R);
						a.Pa(d.Xa)
							? this.D(e)
							: (a.A[0] === b.g.na && (d.Xa = a), this.D(a));
					},
					Rc: function (a) {
						var e = Object(w.a)(this.R);
						a !== e.tb && ((e.tb = a), this.M(b.g.Dd, [a]));
					},
					Ra: function (a) {
						var e = Object(w.a)(this.R);
						e.Ka *= a;
						return new q(b.g.Cd, [e.Ka]);
					},
					Sc: function (a) {
						var e = Object(w.a)(this.R);
						a !== e.Wa && (e.Wa = a);
					},
					jc: function (a) {
						var e = Object(w.a)(this.R);
						a !== e.ab &&
							((e.ab = a),
							this.A.push(b.g.Hd),
							this.B.push([a, this.Ua().Qa()]));
					},
					Tc: function (a) {
						var e = Object(w.a)(this.R);
						a !== e.Za && ((e.Za = a), this.A.push(b.g.Fd), this.B.push([a]));
					},
					Uc: function (a) {
						var e = Object(w.a)(this.R);
						a !== e.$a && ((e.$a = a), this.A.push(b.g.Gd), this.B.push([a]));
					},
					Vc: function (a) {
						var e = Object(w.a)(this.R);
						a !== e.bb && ((e.bb = a), this.A.push(b.g.Jd), this.B.push([a]));
					},
					le: function (a) {
						var e = Object(w.a)(this.R);
						a !== e.Ya && ((e.Ya = a), this.A.push(b.g.Bd), this.B.push([a]));
					},
					T: function (a) {
						Object(w.a)(this.R).wa.Ga(a);
						return new q(b.g.Db, a.Fb());
					},
					Ua: function () {
						return Object(w.a)(this.R).wa;
					},
					Td: function () {
						return Object(w.a)(this.R).ta;
					},
					ce: function (a) {
						Object(w.a)(this.R).ta.gb(a);
					},
					ba: function (a) {
						a = a ? Object(w.a)(this.R).we() : Object(w.a)(this.R).clone();
						this.R.push(a);
						this.ga.push({});
					},
					qa: function () {
						this.R.pop();
						for (
							var a = Object.keys(this.ga[this.ga.length - 1]), e = 0;
							e < a;
							++e
						)
							this.M(b.g.xd);
						Object(w.b)(this.ga, this.ga.length - 1);
					},
					Vd: function (a, e, d) {
						var h = new q(),
							g = this.i.F('Transform');
						h.save();
						this.ba();
						var l = this.C('Viewbox'),
							p = new b.ia();
						p.fb(l);
						l = this.C('Viewport');
						var D = new b.ia();
						D.fb(l);
						if (null != g || p !== D) {
							l = D.H / p.H;
							var k = D.G / p.G,
								r = D.u - p.u * l;
							p = D.v - p.v * k;
							null != g && d.aa(g);
							g = new b.L();
							g.ob(l, 0, 0, k, r, p);
							d.Ga(g);
							h.D(this.T(d));
						}
						d = this.ma('Opacity', 1);
						1 > d && h.D(this.Ra(d));
						d = this.sa('TileMode', 'None');
						g = this.C('ImageSource');
						this.qb[g] = null;
						h.M(a, [
							{
								type: b.g.Ed,
								name: 'i'
									.concat(this.lc, '-')
									.concat(parseInt(g.split('/')[2])),
								tm: 'None' === d ? 'no-repeat' : 'repeat',
							},
						]);
						h.D(e);
						h.restore();
						this.qa();
						return h;
					},
					Wd: function () {
						var a = new q(),
							e = this.i.F('Transform');
						a.save();
						this.ba();
						var d = this.C('Viewbox'),
							h = new b.ia();
						h.fb(d);
						d = this.C('Viewport');
						var g = new b.ia();
						g.fb(d);
						if (null != e || h !== g) {
							d = g.H / h.H;
							var l = g.G / h.G,
								p = g.u - h.u * d;
							h = g.v - h.v * l;
							g = new b.L();
							null != e && g.aa(e);
							e = new b.L();
							e.ob(d, 0, 0, l, p, h);
							g.Ga(e);
							a.D(this.T(g));
						}
						e = this.ma('Opacity', 1);
						1 > e && a.D(this.Ra(e));
						this.sa('TileMode', 'None');
						e = this.C('ImageSource');
						this.qb[e] = null;
						e = 'i'.concat(this.lc, '-').concat(parseInt(e.split('/')[2]));
						d = 'false' !== this.sa('trn:smooth', 'true');
						a.M(b.g.wd, [e, this.Ua().Qa(), d]);
						a.restore();
						this.qa();
						return a;
					},
					je: function (a) {
						if (null != a) {
							var e = new b.L();
							e.aa(a);
							this.D(this.T(e));
						}
					},
					s: function (a) {
						for (
							var e, d = (e = a.O), h = a.ha, g = h[e];
							' ' !== g && ',' !== g;

						)
							++e, (g = h[e]);
						d = h.substring(d, e);
						++e;
						a.O = e;
						return parseFloat(d);
					},
					Ba: function (a) {
						var e = ' ',
							d = new b.Ub(a, null, 0),
							h = new b.ia(),
							g = !0;
						h.initData(0, 0, 0, 0);
						if (d.O < d.ha.length) for (; ' ' === d.ha.charAt(d.O); ) d.O++;
						for (; d.O < a.length; ) {
							if (
								('A' <= d.ha.charAt(d.O) && 'Z' >= d.ha.charAt(d.O)) ||
								('a' <= d.ha.charAt(d.O) && 'z' >= d.ha.charAt(d.O))
							)
								(e = d.ha.charAt(d.O)), d.O++;
							else
								switch (
									('a' > e && ('H' !== e && (d.l = 0), 'V' !== e && (d.j = 0)),
									e)
								) {
									case 'm':
									case 'M':
										d.j += this.s(d);
										d.l += this.s(d);
										g
											? (h.initData(d.j, d.l, d.j, d.l), (g = !1))
											: h.ja(d.j, d.l);
										d.U = !1;
										break;
									case 'l':
									case 'L':
										d.j += this.s(d);
										d.l += this.s(d);
										h.ja(d.j, d.l);
										d.U = !1;
										break;
									case 'c':
									case 'C':
										var l = this.s(d) + d.j;
										var p = this.s(d) + d.l;
										h.ja(l, p);
										d.U = !0;
										d.oa = this.s(d) + d.j;
										d.pa = this.s(d) + d.l;
										h.ja(d.oa, d.pa);
										d.j += this.s(d);
										d.l += this.s(d);
										h.ja(d.j, d.l);
										break;
									case 'q':
									case 'Q':
										l = this.s(d) + d.j;
										p = this.s(d) + d.l;
										h.ja(l, p);
										d.j += this.s(d);
										d.l += this.s(d);
										h.ja(d.j, d.l);
										d.U = !1;
										break;
									case 's':
									case 'S':
										d.U || ((d.oa = d.j), (d.pa = d.l));
										l = 2 * d.j - d.oa;
										p = 2 * d.l - d.pa;
										h.ja(l, p);
										d.U = !0;
										d.oa = this.s(d) + d.j;
										d.pa = this.s(d) + d.l;
										h.ja(d.oa, d.pa);
										d.j += this.s(d);
										d.l += this.s(d);
										h.ja(d.j, d.l);
										break;
									case 'h':
									case 'H':
										d.j += this.s(d);
										h.ja(d.j, d.l);
										d.U = !1;
										break;
									case 'v':
									case 'V':
										d.l += this.s(d);
										h.ja(d.j, d.l);
										d.U = !1;
										break;
									default:
										this.s(d), (d.U = !1);
								}
							for (; ' ' === a.charAt(d.O); ) ++d.O;
						}
						return h.re(this.Ua());
					},
					Yb: function () {
						var a = null;
						this.ba();
						var e = this.i.F('RenderTransform');
						if (null != e) {
							var d = new b.L();
							d.aa(e);
							this.T(d);
						}
						d = this.i.F('Stroke');
						var h = this.ma('StrokeThickness', 1);
						e = this.i.F('Clip');
						null != e && (a = this.Ba(e));
						e = this.i.F('Data');
						if (!this.i.W()) {
							for (this.i.K(); this.i.advance(); ) {
								var g = this.i.P();
								if (b.g.o(g, 'Path.Data', b.g.m) && !this.i.W()) {
									this.i.K();
									this.i.advance() &&
										((e = new b.L()),
										e.aa(this.C('Transform')),
										this.T(e),
										b.g.I(
											b.g.o(this.i.P(), 'PathGeometry', b.g.m),
											'Path.Data must contain PathGeometry'
										),
										(e = this.C('Figures')));
									this.i.J();
									break;
								} else
									b.g.o(g, 'Path.Clip', b.g.m)
										? (b.g.I(
												!this.i.W(),
												'Path.Clip: Must contain PathGeometry element'
										  ),
										  this.i.K(),
										  this.i.advance() &&
												((g = new b.L()),
												g.aa(this.C('Transform')),
												this.T(g),
												(a = this.Ba(this.C('Figures'))),
												(g = g.Va()),
												this.T(g)),
										  this.i.J())
										: b.g.o(g, 'Path.Stroke', b.g.m) && (d = !0);
							}
							this.i.J();
						}
						null != a ? a.gb(this.Ba(e)) : (a = this.Ba(e));
						this.qa();
						d && a.inflate(h);
						return a;
					},
					pb: function (a, e, d) {
						a.U = !1;
						if (null == a.ua) this.A.push(b.g.xc), this.B.push([a.j, a.l]);
						else
							for (
								var h = a.ua.length,
									g = a.j - e,
									l = a.l - d,
									p = l / g,
									D = Math.sqrt(g * g + l * l);
								1e-10 < D;

							) {
								var k = a.ua[a.Jb % h] - a.sb,
									r = k > D;
								r && ((a.sb += D), (k = D));
								if (g) {
									var G = Math.sqrt((k * k) / (1 + p * p));
									0 > g && (G = -G);
									e += G;
									d += p * G;
								} else d += 0 < l ? k : -k;
								this.A.push(a.Jb % 2 ? b.g.zc : b.g.xc);
								this.B.push([e, d]);
								D -= k;
								r || (++a.Jb, (a.sb = 0));
							}
					},
					vc: function (a, e, d, h, g) {
						a.U = !0;
						if (null == a.ua)
							this.A.push(b.g.rd), this.B.push([h, g, a.oa, a.pa, a.j, a.l]);
						else {
							var l = this.Ua().Qa();
							l *= (Math.abs(a.j - e) + Math.abs(a.l - d)) / 5;
							var p = a.j,
								D = a.l;
							a.j = e;
							a.l = d;
							l = 1 / parseInt(l);
							for (var k = 0; 1 >= k; k += l) {
								var r = 1 - k,
									G = a.j,
									B = a.l;
								a.j =
									r * r * r * e +
									3 * r * r * k * h +
									3 * r * k * k * a.oa +
									k * k * k * p;
								a.l =
									r * r * r * d +
									3 * r * r * k * g +
									3 * r * k * k * a.pa +
									k * k * k * D;
								this.pb(a, G, B);
							}
						}
					},
					od: function (a) {
						if (null == a.ua) this.A.push(b.g.td), this.B.push(null);
						else {
							var e = a.j,
								d = a.l;
							a.j = a.Ic;
							a.l = a.Jc;
							this.pb(a, e, d);
						}
					},
					ee: function (a) {
						a.Ic = a.j;
						a.Jc = a.l;
						this.A.push(b.g.zc);
						this.B.push([a.j, a.l]);
						a.U = !1;
						a.Jb = a.dc;
						a.sb = a.Da;
					},
					ie: function (a, e) {
						var d = a.j,
							h = a.l;
						'a' > e && ('H' !== e && (a.l = 0), 'V' !== e && (a.j = 0));
						switch (e) {
							case 'm':
							case 'M':
								a.j += this.s(a);
								a.l += this.s(a);
								this.ee(a);
								break;
							case 'l':
							case 'L':
								a.j += this.s(a);
								a.l += this.s(a);
								this.pb(a, d, h);
								break;
							case 'c':
							case 'C':
								e = this.s(a) + a.j;
								var g = this.s(a) + a.l;
								a.oa = this.s(a) + a.j;
								a.pa = this.s(a) + a.l;
								a.j += this.s(a);
								a.l += this.s(a);
								this.vc(a, d, h, e, g);
								break;
							case 'q':
							case 'Q':
								e = this.s(a) + a.j;
								g = this.s(a) + a.l;
								a.j += this.s(a);
								a.l += this.s(a);
								this.M(b.g.Kd, [e, g, a.j, a.l]);
								a.U = !1;
								break;
							case 's':
							case 'S':
								a.U || ((a.oa = a.j), (a.pa = a.l));
								e = 2 * a.j - a.oa;
								g = 2 * a.l - a.pa;
								a.U = !0;
								a.oa = this.s(a) + a.j;
								a.pa = this.s(a) + a.l;
								a.j += this.s(a);
								a.l += this.s(a);
								this.vc(a, d, h, e, g);
								break;
							case 'h':
							case 'H':
								a.j += this.s(a);
								this.pb(a, d, h);
								a.U = !1;
								break;
							case 'v':
							case 'V':
								a.l += this.s(a);
								this.pb(a, d, h);
								a.U = !1;
								break;
							default:
								this.s(a), (a.U = !1);
						}
					},
					Ec: function (a) {
						if ('Flat' === a) return 'butt';
						if ('Square' === a) return 'square';
						if ('Round' === a || 'Triangle' === a) return 'round';
						b.g.I(!1, 'Invalid line cap '.concat(a));
						return '';
					},
					Oc: function (a) {
						this.Pc(a, null, 0);
					},
					Pc: function (a, e, d) {
						var h = ' ';
						e = new b.Ub(a, e, d);
						d = e.ha.charAt(e.O);
						this.A.push(b.g.qd);
						this.B.push(null);
						if (e.O < e.ha.length)
							for (; ' ' === d; ) e.O++, (d = e.ha.charAt(e.O));
						for (; e.O < a.length; )
							for (
								('A' <= d && 'Z' >= d) || ('a' <= d && 'z' >= d)
									? ((h = d), ('z' !== d && 'Z' !== d) || this.od(e), e.O++)
									: this.ie(e, h),
									d = e.ha.charAt(e.O);
								' ' === d;

							)
								++e.O, (d = e.ha.charAt(e.O));
					},
					save: q.prototype.save,
					restore: q.prototype.restore,
					ke: function () {
						var a = this.sa('trn:BlendMode', 'source-over');
						a = this.da ? 'source-over' : a;
						var e = 'source-over' != a && !this.Hb,
							d = this.i.F('Data'),
							h = !0;
						d && 'F' === d[0] && (h = !1);
						var g = new q(b.g.Bb, h ? ['evenodd'] : null),
							l = !1,
							p = this.hc(),
							D = null,
							k = this.i.F('Fill');
						null != k &&
							(D = this.Gb(k) ? this.Ca(k, b.g.na, g) : this.nb(k, b.g.na, g));
						this.Hb && this.Rc(a);
						var r = (k = null),
							G = this.ma('StrokeThickness', 1),
							B = this.i.F('Stroke');
						null != B &&
							(this.jc(G),
							(k = this.Gb(B)
								? this.Ca(B, b.g.Aa, new q(b.g.Cb))
								: this.nb(B, b.g.Aa, new q(b.g.Cb))));
						B = null;
						var u = this.i.F('OpacityMask');
						null != u &&
							(Object(m.a)('Uh oh OpacityMask Resource!'), (B = this.Ca(u)));
						u = null;
						if (!this.i.W()) {
							for (this.i.K(); this.i.advance(); ) {
								var f = this.i.P();
								b.g.o(f, 'Path.Clip', b.g.m)
									? (b.g.I(
											!this.i.W(),
											'Path.Clip: Must contain PathGeometry element'
									  ),
									  this.i.K(),
									  this.i.advance() &&
											(p || ((p = !0), this.save(), this.ba()),
											(u = new b.L()),
											u.aa(this.C('Transform')),
											this.D(this.T(u)),
											b.g.I(
												b.g.o(this.i.P(), 'PathGeometry', b.g.m),
												'Path.Clip must contain PathGeometry'
											),
											(f = this.C('Figures')),
											this.Ob(f),
											(u = u.Va())),
									  this.i.J())
									: b.g.o(f, 'Path.Data', b.g.m) && !this.i.W()
									? (this.i.K(),
									  this.i.advance() &&
											((d = new b.L()),
											d.aa(this.C('Transform')),
											null != u ? u.Ga(d) : (u = d),
											this.D(this.T(u)),
											b.g.I(
												b.g.o(this.i.P(), 'PathGeometry', b.g.m),
												'Path.Data must contain PathGeometry'
											),
											(d = this.C('Figures'))),
									  this.i.J())
									: b.g.o(f, 'Path.Fill', b.g.m)
									? (this.i.K(),
									  this.i.advance(),
									  null != B || e || 'ImageBrush' !== this.i.P()
											? (D = this.Ta(b.g.na, g))
											: ((l = !0), this.D(this.Wd())),
									  this.i.J())
									: b.g.o(f, 'Path.OpacityMask', b.g.m)
									? this.da ||
									  (this.i.K(),
									  this.i.advance(),
									  (B = this.Ta(b.g.na, g)),
									  this.i.J())
									: b.g.o(f, 'Path.Stroke', b.g.m) &&
									  (this.i.K(),
									  this.i.advance(),
									  (k = this.Ta(b.g.Aa, new q(b.g.Cb), G)),
									  this.i.J());
							}
							this.i.J();
						}
						if (null == B && !e && !l) {
							b.g.I(null != d, 'Paths must have Data defined');
							l = this.i.F('StrokeDashArray');
							if (null != l)
								for (
									l = l.split(' '), r = Array(l.length), u = 0;
									u < l.length;
									++u
								)
									if (((r[u] = parseFloat(l[u]) * G), !r[u] || 0.02 > r[u]))
										r[u] = 0.02;
							this.Sc(h ? 'evenodd' : 'nonzero');
							h = this.ma('StrokeDashOffset', 0);
							null != r &&
								null != D &&
								(this.Oc(d), null != D && this.ic(D, g), (D = null));
							this.Pc(d, r, h);
							null != D && this.ic(D, g);
							null != k &&
								(this.Tc(this.Ec(this.sa('StrokeStartLineCap', 'Flat'))),
								this.Uc(this.sa('StrokeLineJoin', 'miter').toLowerCase()),
								this.Vc(this.ma('StrokeMiterLimit', 10)),
								this.Wc(k));
						}
						p && (this.restore(), this.qa());
						if (null != B || e) (this.da = !0), this.Vb(B, a);
						this.da = !1;
					},
					Cc: function (a) {
						var e = 1,
							d = [255, 255, 255, 255];
						if ('#' === a.charAt(0)) {
							if (7 === a.length) return a;
							b.g.I(
								9 === a.length,
								'Color '.concat(a, ' is invalid in a XOD file')
							);
							e = a.substr(1, 2);
							var h = a.substr(3, 2);
							var g = a.substr(5, 2);
							a = a.substr(7, 2);
							e = parseInt(e, 16) / 255;
							d[0] = parseInt(h, 16);
							d[1] = parseInt(g, 16);
							d[2] = parseInt(a, 16);
						} else
							's' === a.charAt(0)
								? ((h = a.split('#')[1].split(',')),
								  3 < h.length
										? ((e = parseFloat(h[0])),
										  (g = 255 * parseFloat(h[1])),
										  (d[0] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)),
										  (g = 255 * parseFloat(h[2])),
										  (d[1] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)),
										  (g = 255 * parseFloat(h[3])),
										  (d[2] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)))
										: ((g = 255 * parseFloat(h[0])),
										  (d[0] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)),
										  (g = 255 * parseFloat(h[1])),
										  (d[1] = parseInt(0 > g ? 0 : 255 < g ? 255 : g)),
										  (g = 255 * parseFloat(h[2])),
										  (d[2] = parseInt(0 > g ? 0 : 255 < g ? 255 : g))))
								: b.g.I(!1, 'Invalid color for a XOD file');
						return 'rgba('
							.concat(d[0], ',')
							.concat(d[1], ',')
							.concat(d[2], ',')
							.concat(b.g.ad(e), ')');
					},
					$d: function (a, e) {
						return this.nb(this.C('Color'), a, e);
					},
					nb: function (a, e, d) {
						a = new q(e, this.Cc(a));
						a.D(d);
						return a;
					},
					$b: function () {
						var a = this.La,
							e = this.A,
							d = this.B;
						this.A = [];
						this.B = [];
						this.La = this.i.depth;
						this.ba(!0);
						if (!this.i.W() || !b.g.o(this.i.P(), 'Canvas', b.g.m))
							for (this.Ia = !1; this.fc(); );
						this.qa();
						var h = { operators: this.A, data: this.B };
						this.La = a;
						this.A = e;
						this.B = d;
						return h;
					},
					Fc: function (a, e, d, h) {
						var g = new q(),
							l = this.C('Viewbox'),
							p = new b.ia();
						p.fb(l);
						l = this.C('Viewport');
						var D = new b.ia();
						D.fb(l);
						var k = this.i.F('Transform');
						g.save();
						this.ba();
						if (!this.i.W()) {
							for (this.i.K(); this.i.advance(); )
								if (((l = this.i.P()), b.g.o(l, 'VisualBrush.Visual', b.g.m))) {
									this.i.K();
									b.g.I(
										this.i.advance(),
										'VisualBrush.Visual must contain Canvas, Path or Glyphs element'
									);
									this.ba(!0);
									Object(w.a)(this.R).wa = new b.L();
									var r = this.Eb();
									this.qa();
									this.i.J();
								}
							this.i.J();
						}
						l = this.sa('TileMode', 'None');
						if (
							'Tile' != l &&
							'undefined' !== typeof r &&
							0 !== r.G &&
							0 !== r.H
						) {
							var G = D.u - p.u,
								B = D.v - p.v;
							p.gb(r);
							D = p;
							D.u += G;
							D.v += B;
						}
						if (0 === p.H || 0 === p.G)
							return (a = new q(a, 'rgba(0,0,0,0)')), a.D(e), a;
						if (null != k || p !== D)
							(r = D.H / p.H),
								(G = D.G / p.G),
								(B = D.u - p.u * r),
								(D = D.v - p.v * G),
								null != k && d.aa(k),
								(k = new b.L()),
								k.ob(r, 0, 0, G, B, D),
								d.Ga(k),
								g.D(this.T(d));
						D = this.Ua().Qa();
						k = Math.min(p.H, p.G);
						r = this.ma('Opacity', 1);
						1 > r && g.D(this.Ra(r));
						r = {};
						G = this.i.F('Visual');
						null != G &&
							((G = this.Ca(G)), (r.operators = { operators: G.A, data: G.B }));
						if (!this.i.W()) {
							for (this.i.K(); this.i.advance(); )
								(G = this.i.P()),
									b.g.o(G, 'VisualBrush.Visual', b.g.m) &&
										(this.i.K(),
										b.g.I(
											this.i.advance(),
											'VisualBrush.Visual must contain Canvas, Path or Glyphs element'
										),
										(r.operators = this.$b()),
										this.i.J());
							this.i.J();
						}
						r.type = b.g.Qd;
						r.tm = 'None' === l ? 'no-repeat' : 'repeat';
						a === b.g.Aa && (r.strokeAdjust = h / d.Qa());
						if (p.u || p.v) (r.x = p.u), (r.y = p.v);
						r.w = p.H;
						r.h = p.G;
						r.minwh = k;
						r.scale = D;
						g.M(a, [r]);
						g.D(e);
						g.restore();
						this.qa();
						return g;
					},
					Gb: function (a) {
						return '{' === a.charAt(0);
					},
					Ca: function (a) {
						var e = a.indexOf('StaticResource');
						b.g.I(0 < e, 'Invalid resource reference: '.concat(a));
						e += 15;
						a = a.substr(e, a.length - 1 - e);
						e = null;
						for (var d = this.ga.length - 1; 0 <= d; --d)
							if (this.ga[d][a]) {
								e = this.ga[d][a];
								break;
							}
						b.g.I(null != e, 'Dictionary key '.concat(a, ' does not exist.'));
						return new q(b.g.Md, [a]);
					},
					fc: function () {
						if (this.Ia) {
							if (this.i.depth === this.La)
								return b.g.o(this.i.P(), 'Canvas', b.g.m) && this.vb(), !1;
							var a = this.i.advance();
							if (!a) {
								this.i.J();
								if (Object(w.a)(this.Ib) === this.i.depth)
									return this.Ib.pop(), this.Sd(), !0;
								if (this.i.depth === this.La)
									return b.g.o(this.i.P(), 'Canvas', b.g.m) && this.vb(), !1;
								this.vb();
								return !0;
							}
						}
						this.Ia = !0;
						a = this.i.P();
						b.g.o(a, 'Canvas', b.g.m)
							? this.he()
							: b.g.o(a, 'Path', b.g.m)
							? this.ke()
							: b.g.o(a, 'Glyphs', b.g.m)
							? this.Nc(!1)
							: b.g.o(a, 'trn:Glyphs', b.g.m) &&
							  (this.i.W() || this.Ib.push(this.i.depth),
							  this.Nc(!0),
							  this.i.W() || (this.i.K(), this.me()));
						return !0;
					},
					nd: function () {
						var a = b.g.na,
							e = new q(b.g.Bb);
						a = this.Fc(a, e, new b.L());
						e = this.cd();
						this.ga[this.ga.length - 1][e] = a;
						this.M(b.g.Ac, [e, a.A, a.B]);
					},
					md: function (a) {
						a = this.$b();
						var e = this.cd();
						this.ga[this.ga.length - 1][e] = a;
						this.M(b.g.Ac, [e, a.operators, a.data]);
					},
					Ta: function (a, e, d) {
						var h = new b.L(),
							g = this.i.P();
						if (b.g.o(g, 'VisualBrush', b.g.m)) var l = this.Fc(a, e, h, d);
						else
							b.g.o(g, 'ImageBrush', b.g.m)
								? (l = this.Vd(a, e, h))
								: b.g.o(g, 'LinearGradientBrush', b.g.m)
								? (l = this.Xd(a, e, h))
								: b.g.o(g, 'RadialGradientBrush', b.g.m)
								? (l = this.Zd(a, e, h))
								: b.g.o(g, 'SolidColorBrush', b.g.m)
								? (l = this.$d(a, e))
								: b.g.I(!1, 'Invalid Brush Type: '.concat(g)),
								'undefined' !== typeof d &&
									(this.T(h), this.jc(d / h.Qa()), this.T(h.Va()));
						return l;
					},
					Qc: function () {
						var a = this.i.P();
						if (b.g.o(a, 'ResourceDictionary', b.g.m) && !this.i.W()) {
							for (this.i.K(); this.i.advance(); )
								(a = this.i.P()),
									b.g.o(a, 'VisualBrush', b.g.m)
										? this.nd()
										: b.g.o(a, 'Canvas', b.g.m)
										? this.md()
										: b.g.I(!1, 'Resource type is invalid: '.concat(a));
							this.i.J();
						}
					},
					Ud: function () {
						for (var a = ''; !this.done; ) a += this.hb();
						return a;
					},
					hb: function () {
						this.Mc = !1;
						for (
							this.qb = {};
							this.A.length < this.Hc && !this.Mc && this.fc();

						);
						this.fc() || (this.done = !0);
						var a = { operators: this.A, data: this.B };
						this.A = [];
						this.B = [];
						return a;
					},
					pe: function () {
						var a = [],
							e = this.qb,
							d;
						for (d in e) a.push(d.substr(1));
						return a;
					},
					done: !1,
					Ia: !1,
					da: !1,
					Lc: 0,
					Kc: 0,
					Hc: 0,
					Ja: null,
					qb: null,
					La: 0,
					ga: null,
					R: null,
					i: null,
					Ib: null,
					Kb: !1,
				};
				b.Ha = function () {
					this.ec = this.ub = !1;
					this.rb = this.cc = 1;
					this.bc = this.Mb = this.Nb = this.Lb = 0;
				};
				b.Ha.prototype = {
					ub: !1,
					ec: !1,
					rb: 0,
					cc: 0,
					Lb: 0,
					bc: 0,
					Mb: 0,
					Nb: 0,
				};
				b.Sa = function () {};
				b.Sa.initial = function (a, e) {
					var d = new b.Sa();
					d.cb = 'black';
					d.Xa = 'black';
					d.Wa = 'nonzero';
					d.Ka = 1;
					d.tb = 'source-over';
					d.ab = 1;
					d.Za = 'butt';
					d.$a = 'miter';
					d.bb = 10;
					d.Ya = '10px sans-serif';
					d.wa = new b.L();
					d.ta = new b.ia();
					d.ta.initData(0, 0, a, e);
					return d;
				};
				b.Sa.prototype = {
					clone: function () {
						var a = new b.Sa();
						a.cb = this.cb;
						a.Xa = this.Xa;
						a.Wa = this.Wa;
						a.Ka = this.Ka;
						a.tb = this.tb;
						a.ab = this.ab;
						a.Za = this.Za;
						a.$a = this.$a;
						a.bb = this.bb;
						a.Ya = this.Ya;
						a.wa = new b.L();
						a.wa.ac(this.wa);
						a.ta = new b.ia();
						a.ta.initData(this.ta.u, this.ta.v, this.ta.H, this.ta.G);
						return a;
					},
					we: function () {
						var a = new b.Sa();
						a.cb = 'black';
						a.Xa = 'black';
						a.Wa = 'nonzero';
						a.Ka = 1;
						a.tb = 'source-over';
						a.ab = 1;
						a.Za = 'butt';
						a.$a = 'miter';
						a.bb = 10;
						a.Ya = '10px sans-serif';
						a.wa = new b.L();
						a.wa.ac(this.wa);
						a.ta = new b.ia();
						return a;
					},
					cb: null,
					Xa: null,
					Wa: null,
					Ka: 0,
					ab: 0,
					Za: null,
					$a: null,
					bb: 0,
					Ya: null,
					wa: null,
					ta: null,
				};
				b.mb = function (a, e) {
					this.x = a;
					this.y = e;
				};
				b.mb.prototype = { x: 0, y: 0 };
				b.ia = function () {
					this.v = this.u = -1e6;
					this.H = this.G = 2e6;
				};
				b.ia.prototype = {
					initData: function (a, e, d, h) {
						this.u = a;
						this.v = e;
						this.H = d;
						this.G = h;
					},
					te: function () {
						return 0 < this.H && 0 < this.G;
					},
					fb: function (a) {
						a = a.split(',');
						b.g.I(4 === a.length, 'Rectangles should contain 4 numbers');
						this.u = parseFloat(a[0]);
						this.v = parseFloat(a[1]);
						this.H = parseFloat(a[2]);
						this.G = parseFloat(a[3]);
					},
					re: function (a) {
						if (a.Gc()) return this;
						var e = new b.mb(this.u, this.v),
							d = new b.mb(this.u, this.v + this.G),
							h = new b.mb(this.u + this.H, this.v),
							g = new b.mb(this.u + this.H, this.v + this.G);
						a.Tb(e);
						a.Tb(d);
						a.Tb(h);
						a.Tb(g);
						a = Math.min(e.x, d.x, h.x, g.x);
						var l = Math.min(e.y, d.y, h.y, g.y),
							p = new b.ia();
						p.initData(
							a,
							l,
							Math.max(e.x, d.x, h.x, g.x) - a,
							Math.max(e.y, d.y, h.y, g.y) - l
						);
						return p;
					},
					ja: function (a, e) {
						a < this.u
							? ((this.H += this.u - a), (this.u = a))
							: a > this.u + this.H && (this.H = a - this.u);
						e < this.v
							? ((this.G += this.v - e), (this.v = e))
							: e > this.v + this.G && (this.G = e - this.v);
					},
					sc: function (a) {
						this.ja(a.u, a.v);
						this.ja(a.u + a.H, a.v + a.G);
					},
					gb: function (a) {
						var e = this.u;
						var d = this.u + this.H;
						var h = this.v;
						var g = this.v + this.G;
						var l = a.u;
						var p = a.u + a.H;
						var D = a.v;
						a = a.v + a.G;
						d < l || p < e || g < D || a < h
							? (this.u = this.H = this.v = this.G = 0)
							: ((this.u = e < l ? l : e),
							  (this.H = (d < p ? d : p) - this.u),
							  (this.v = h < D ? D : h),
							  (this.G = (g < a ? g : a) - this.v),
							  (this.H && this.G) || (this.u = this.H = this.v = this.G = 0));
					},
					inflate: function (a) {
						this.u -= a;
						this.v -= a;
						this.H += 2 * a;
						this.G += 2 * a;
					},
					u: 0,
					v: 0,
					H: 0,
					G: 0,
				};
				b.L = function () {};
				b.L.prototype = {
					X: 1,
					Y: 0,
					Z: 0,
					$: 1,
					ca: 0,
					ea: 0,
					aa: function (a) {
						var e = [1, 0, 0, 1, 0, 0];
						a = a.split(',');
						for (var d = 0; d < a.length && 6 > d; ++d) e[d] = parseFloat(a[d]);
						this.X = e[0];
						this.Y = e[1];
						this.Z = e[2];
						this.$ = e[3];
						this.ca = e[4];
						this.ea = e[5];
					},
					ob: function (a, e, d, h, g, l) {
						this.X = a;
						this.Y = e;
						this.Z = d;
						this.$ = h;
						this.ca = g;
						this.ea = l;
					},
					ac: function (a) {
						this.X = a.X;
						this.Y = a.Y;
						this.Z = a.Z;
						this.$ = a.$;
						this.ca = a.ca;
						this.ea = a.ea;
					},
					Ga: function (a) {
						var e = this.X,
							d = this.Y,
							h = this.Z,
							g = this.$;
						this.X = a.X * e + a.Y * h;
						this.Y = a.X * d + a.Y * g;
						this.Z = a.Z * e + a.$ * h;
						this.$ = a.Z * d + a.$ * g;
						this.ca = a.ca * e + a.ea * h + this.ca;
						this.ea = a.ca * d + a.ea * g + this.ea;
					},
					Va: function () {
						var a = new b.L(),
							e = this.X * this.$ - this.Y * this.Z;
						if (!e) return a;
						a.X = this.$ / e;
						a.Z = -this.Z / e;
						a.ca = (this.Z * this.ea - this.ca * this.$) / e;
						a.Y = -this.Y / e;
						a.$ = this.X / e;
						a.ea = -(this.X * this.ea - this.ca * this.Y) / e;
						return a;
					},
					Tb: function (a) {
						var e = a.x * this.Y + a.y * this.$ + this.ea;
						a.x = a.x * this.X + a.y * this.Z + this.ca;
						a.y = e;
					},
					Qa: function () {
						var a = 0.707106781 * this.X + 0.707106781 * this.Y,
							e = 0.707106781 * this.Z + 0.707106781 * this.$;
						return Math.sqrt(a * a + e * e);
					},
					Gc: function () {
						return 1 !== this.X ||
							this.Y ||
							this.Z ||
							1 !== this.$ ||
							this.ca ||
							this.ea
							? !1
							: !0;
					},
					Fb: function () {
						return this.Yd();
					},
					Yd: function () {
						return this.Gc()
							? null
							: [this.X, this.Y, this.Z, this.$, this.ca, this.ea];
					},
				};
				b.Ub = function (a, e, d) {
					this.ha = a;
					this.j = this.l = this.O = 0;
					this.U = !1;
					this.ua = e;
					if (null != this.ua) {
						for (e = a = 0; e < this.ua.length; ++e) a += this.ua[e];
						this.Da = d % a;
						0 > this.Da && (this.Da += a);
						for (d = this.dc = 0; this.Da > this.ua[d]; ++d)
							(this.Da -= this.ua[d]), ++this.dc;
					}
				};
				b.Ub.prototype = {
					ha: null,
					O: 0,
					ua: null,
					Jb: 0,
					sb: 0,
					dc: 0,
					Da: 0,
					j: 0,
					l: 0,
					Ic: 0,
					Jc: 0,
					U: !1,
					oa: 0,
					pa: 0,
				};
				b.fe = function () {};
				b.fe.prototype = {};
				b.g.ff =
					'http://schemas.microsoft.com/xps/2005/06/resourcedictionary-key';
				b.g.mf = 'http://schemas.openxps.org/oxps/v1.0/resourcedictionary-key';
				b.g.tf = 'http://schemas.microsoft.com/winfx/2006/xaml';
				b.g.m = 'http://schemas.microsoft.com/xps/2005/06';
				b.g.uf = 'http://schemas.microsoft.com/winfx/2006/xaml/presentation';
				b.g.nf = 'http://schemas.openxps.org/oxps/v1.0';
				b.g.wf = 'http://schemas.microsoft.com/xps/2005/06/documentstructure';
				b.g.lf = 'http://schemas.openxps.org/oxps/v1.0/documentstructure';
				b.g.rf = 'http://schemas.openxmlformats.org/package/2006/relationships';
				b.g.Ye = 'http://schemas.openxmlformats.org/package/2006/content-types';
				b.g.gf = 'http://schemas.openxmlformats.org/markup-compatibility/2006';
				b.g.Ze =
					'http://schemas.openxmlformats.org/package/2006/metadata/core-properties';
				b.g.$e = 'http://purl.org/dc/elements/1.1/';
				b.g.af = 'http://purl.org/dc/terms/';
				b.g.vf = 'http://www.w3.org/XML/1998/namespace';
				b.g.sf = 'clr-namespace:PDFTron.SilverDox.Internal;assembly=SilverDox';
				b.g.xf = 'http://schemas.microsoft.com/xps/2005/06/restricted-font';
				b.g.pf = 'http://schemas.openxps.org/oxps/v1.0/restricted-font';
				b.g.hf = 'application/vnd.ms-package.obfuscated-opentype';
				b.g.qf = 'http://www.pdftron.com/silverdox/2010/09';
				b.g.Od = 0;
				b.g.Nd = 1;
				b.g.Db = 2;
				b.g.ef = 3;
				b.g.Hd = 4;
				b.g.Fd = 5;
				b.g.Aa = 6;
				b.g.na = 7;
				b.g.Cd = 8;
				b.g.Ac = 9;
				b.g.xd = 10;
				b.g.pd = 11;
				b.g.Md = 12;
				b.g.qd = 13;
				b.g.td = 14;
				b.g.Bb = 15;
				b.g.Cb = 16;
				b.g.sd = 17;
				b.g.zc = 18;
				b.g.xc = 19;
				b.g.Kd = 20;
				b.g.rd = 21;
				b.g.Bd = 22;
				b.g.yd = 23;
				b.g.yc = 24;
				b.g.Pd = 25;
				b.g.Jd = 26;
				b.g.Gd = 27;
				b.g.wd = 28;
				b.g.df = 29;
				b.g.cf = 30;
				b.g.Ad = 31;
				b.g.ud = 32;
				b.g.vd = 33;
				b.g.Dd = 34;
				b.g.Bc = 35;
				b.g.Rd = 36;
				b.g.bf = 37;
				b.g.wc = 38;
				b.g.zd = 39;
				b.g.Wb = 40;
				b.g.Qd = 1;
				b.g.Id = 2;
				b.g.Ld = 3;
				b.g.Ed = 4;
				b.g.jf =
					'S r t T w c s f a L R P A b z F X C M l q B n x m W i j I Z d D e xw cgb cge g bO tm'.split(
						' '
					);
				b.g.kf =
					'S r t T w c s f a L R P A b z F X C M l q B n xc m W i j I Z d D e xcw cgb cge g bO tm'.split(
						' '
					);
			})('undefined' !== typeof window ? window : self);
		},
		function (C, v, y) {
			var n = y(7),
				m = y(4),
				z = y(8);
			y.n(z);
			(function (w) {
				w.trn.g || (w.trn = trn);
				var E = function e(a) {
					this.N = '';
					this.data = a;
					this.ed = new z.Inflate({
						windowBits: -15,
						chunkSize: e.prototype.chunkSize,
					});
					this.finished = !1;
					this.pc();
					this.start = 0;
				};
				E.prototype = {
					chunkSize: 102400,
					mark: function (a) {
						var e = a - this.start;
						e > E.prototype.chunkSize &&
							((this.N = this.N.slice(e)), (this.start = a));
					},
					indexOf: function (a, e) {
						e -= this.start;
						do var d = this.N.indexOf(a, e);
						while (-1 === d && this.pc());
						return d + this.start;
					},
					charAt: function (a) {
						a -= this.start;
						a >= this.N.length && this.pc();
						return this.N.charAt(a);
					},
					substring: function (a, e) {
						a -= this.start;
						e -= this.start;
						return this.N.substring(a, e);
					},
					qe: function () {
						var a = '';
						this.ed.onData = function (e) {
							a += Object(n.a)(e);
						};
						this.ed.push(this.data.slice(0, E.prototype.chunkSize), 2);
						this.data = this.data.slice(E.prototype.chunkSize);
						return a;
					},
					pc: function () {
						var a = this.qe();
						return a.length ? ((this.N += a), !0) : !1;
					},
				};
				w.hb = function () {
					if (w.Na.done)
						return w.postMessage({ command: 'done' }), (w.Na = null), !1;
					var a = w.Na.hb();
					w.postMessage({
						command: 'nextChunk',
						resources: w.Na.pe(),
						dataString: a,
					});
					return !0;
				};
				var q = (function () {
					var a = navigator.userAgent.toLowerCase();
					return (a =
						/(msie) ([\w.]+)/.exec(a) ||
						/(trident)(?:.*? rv:([\w.]+)|)/.exec(a))
						? parseInt(a[2], 10)
						: a;
				})();
				w.Yc = function () {
					if (9 === q) for (; w.hb(); );
					else
						setTimeout(function () {
							w.Na && w.hb() && w.Yc();
						}, 0);
				};
				w.kd = E;
				w.Xc = !1;
				w.onmessage = function (a) {
					switch (a.data.command) {
						case 'data':
							var e = new m.a(new w.kd(a.data.dataString));
							w.Na = new w.trn.g(e, w.Xc, w.Ae, a.data.docId);
							w.Zc && w.Yc();
							break;
						case 'nextChunk':
							w.Zc || (w.Na && w.hb());
							break;
						case 'cancel':
							w.Na = null;
							w.postMessage({ command: 'done' });
							break;
						case 'options':
							w.Xc = a.data.imageScaling;
							w.Ae = a.data.specialBlendSupported;
							w.Zc = a.data.continueWithoutPrompt;
							break;
						default:
							throw Error('Unknown message command '.concat(a.data.command));
					}
				};
			})(self);
		},
		function (C, v, y) {
			function n(k) {
				return (
					((k >>> 24) & 255) +
					((k >>> 8) & 65280) +
					((k & 65280) << 8) +
					((k & 255) << 24)
				);
			}
			function m() {
				this.mode = 0;
				this.Sb = !1;
				this.va = 0;
				this.nc = !1;
				this.total = this.check = this.Pb = this.flags = 0;
				this.head = null;
				this.ka = this.za = this.la = this.jb = 0;
				this.window = null;
				this.V = this.offset = this.length = this.S = this.Fa = 0;
				this.Oa = this.ya = null;
				this.ra = this.xb = this.ib = this.hd = this.eb = this.xa = 0;
				this.next = null;
				this.fa = new a.kb(320);
				this.Ab = new a.kb(288);
				this.$c = this.fd = null;
				this.Ce = this.back = this.qc = 0;
			}
			function z(k) {
				if (!k || !k.state) return -2;
				var r = k.state;
				k.rc = k.zb = r.total = 0;
				k.msg = '';
				r.va && (k.Ma = r.va & 1);
				r.mode = 1;
				r.Sb = 0;
				r.nc = 0;
				r.Pb = 32768;
				r.head = null;
				r.Fa = 0;
				r.S = 0;
				r.ya = r.fd = new a.lb(852);
				r.Oa = r.$c = new a.lb(592);
				r.qc = 1;
				r.back = -1;
				return 0;
			}
			function w(k) {
				if (!k || !k.state) return -2;
				var r = k.state;
				r.la = 0;
				r.za = 0;
				r.ka = 0;
				return z(k);
			}
			function E(k, r) {
				if (!k || !k.state) return -2;
				var G = k.state;
				if (0 > r) {
					var B = 0;
					r = -r;
				} else (B = (r >> 4) + 1), 48 > r && (r &= 15);
				if (r && (8 > r || 15 < r)) return -2;
				null !== G.window && G.jb !== r && (G.window = null);
				G.va = B;
				G.jb = r;
				return w(k);
			}
			function q(k, r) {
				if (!k) return -2;
				var G = new m();
				k.state = G;
				G.window = null;
				r = E(k, r);
				0 !== r && (k.state = null);
				return r;
			}
			function b(k, r, G, B) {
				var u = k.state;
				null === u.window &&
					((u.la = 1 << u.jb),
					(u.ka = 0),
					(u.za = 0),
					(u.window = new a.Buf8(u.la)));
				B >= u.la
					? (a.arraySet(u.window, r, G - u.la, u.la, 0),
					  (u.ka = 0),
					  (u.za = u.la))
					: ((k = u.la - u.ka),
					  k > B && (k = B),
					  a.arraySet(u.window, r, G - B, k, u.ka),
					  (B -= k)
							? (a.arraySet(u.window, r, G - B, B, 0),
							  (u.ka = B),
							  (u.za = u.la))
							: ((u.ka += k),
							  u.ka === u.la && (u.ka = 0),
							  u.za < u.la && (u.za += k)));
				return 0;
			}
			var a = y(3),
				e = y(14),
				d = y(15),
				h = y(16),
				g = y(17),
				l = !0,
				p,
				D;
			v.Df = w;
			v.Ef = E;
			v.Ff = z;
			v.Cf = function (k) {
				return q(k, 15);
			};
			v.inflateInit2 = q;
			v.inflate = function (k, r) {
				var G,
					B = new a.Buf8(4),
					u = [
						16, 17, 18, 0, 8, 7, 9, 6, 10, 5, 11, 4, 12, 3, 13, 2, 14, 1, 15,
					];
				if (!k || !k.state || !k.output || (!k.input && 0 !== k.avail_in))
					return -2;
				var f = k.state;
				12 === f.mode && (f.mode = 13);
				var K = k.next_out;
				var L = k.output;
				var M = k.avail_out;
				var I = k.next_in;
				var J = k.input;
				var F = k.avail_in;
				var x = f.Fa;
				var t = f.S;
				var Q = F;
				var O = M;
				var R = 0;
				a: for (;;)
					switch (f.mode) {
						case 1:
							if (0 === f.va) {
								f.mode = 13;
								break;
							}
							for (; 16 > t; ) {
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							if (f.va & 2 && 35615 === x) {
								f.check = 0;
								B[0] = x & 255;
								B[1] = (x >>> 8) & 255;
								f.check = d(f.check, B, 2, 0);
								t = x = 0;
								f.mode = 2;
								break;
							}
							f.flags = 0;
							f.head && (f.head.done = !1);
							if (!(f.va & 1) || (((x & 255) << 8) + (x >> 8)) % 31) {
								k.msg = 'incorrect header check';
								f.mode = 30;
								break;
							}
							if (8 !== (x & 15)) {
								k.msg = 'unknown compression method';
								f.mode = 30;
								break;
							}
							x >>>= 4;
							t -= 4;
							var H = (x & 15) + 8;
							if (0 === f.jb) f.jb = H;
							else if (H > f.jb) {
								k.msg = 'invalid window size';
								f.mode = 30;
								break;
							}
							f.Pb = 1 << H;
							k.Ma = f.check = 1;
							f.mode = x & 512 ? 10 : 12;
							t = x = 0;
							break;
						case 2:
							for (; 16 > t; ) {
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							f.flags = x;
							if (8 !== (f.flags & 255)) {
								k.msg = 'unknown compression method';
								f.mode = 30;
								break;
							}
							if (f.flags & 57344) {
								k.msg = 'unknown header flags set';
								f.mode = 30;
								break;
							}
							f.head && (f.head.text = (x >> 8) & 1);
							f.flags & 512 &&
								((B[0] = x & 255),
								(B[1] = (x >>> 8) & 255),
								(f.check = d(f.check, B, 2, 0)));
							t = x = 0;
							f.mode = 3;
						case 3:
							for (; 32 > t; ) {
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							f.head && (f.head.time = x);
							f.flags & 512 &&
								((B[0] = x & 255),
								(B[1] = (x >>> 8) & 255),
								(B[2] = (x >>> 16) & 255),
								(B[3] = (x >>> 24) & 255),
								(f.check = d(f.check, B, 4, 0)));
							t = x = 0;
							f.mode = 4;
						case 4:
							for (; 16 > t; ) {
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							f.head && ((f.head.De = x & 255), (f.head.ye = x >> 8));
							f.flags & 512 &&
								((B[0] = x & 255),
								(B[1] = (x >>> 8) & 255),
								(f.check = d(f.check, B, 2, 0)));
							t = x = 0;
							f.mode = 5;
						case 5:
							if (f.flags & 1024) {
								for (; 16 > t; ) {
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								f.length = x;
								f.head && (f.head.mc = x);
								f.flags & 512 &&
									((B[0] = x & 255),
									(B[1] = (x >>> 8) & 255),
									(f.check = d(f.check, B, 2, 0)));
								t = x = 0;
							} else f.head && (f.head.V = null);
							f.mode = 6;
						case 6:
							if (f.flags & 1024) {
								var A = f.length;
								A > F && (A = F);
								A &&
									(f.head &&
										((H = f.head.mc - f.length),
										f.head.V || (f.head.V = Array(f.head.mc)),
										a.arraySet(f.head.V, J, I, A, H)),
									f.flags & 512 && (f.check = d(f.check, J, A, I)),
									(F -= A),
									(I += A),
									(f.length -= A));
								if (f.length) break a;
							}
							f.length = 0;
							f.mode = 7;
						case 7:
							if (f.flags & 2048) {
								if (0 === F) break a;
								A = 0;
								do
									(H = J[I + A++]),
										f.head &&
											H &&
											65536 > f.length &&
											(f.head.name += String.fromCharCode(H));
								while (H && A < F);
								f.flags & 512 && (f.check = d(f.check, J, A, I));
								F -= A;
								I += A;
								if (H) break a;
							} else f.head && (f.head.name = null);
							f.length = 0;
							f.mode = 8;
						case 8:
							if (f.flags & 4096) {
								if (0 === F) break a;
								A = 0;
								do
									(H = J[I + A++]),
										f.head &&
											H &&
											65536 > f.length &&
											(f.head.kc += String.fromCharCode(H));
								while (H && A < F);
								f.flags & 512 && (f.check = d(f.check, J, A, I));
								F -= A;
								I += A;
								if (H) break a;
							} else f.head && (f.head.kc = null);
							f.mode = 9;
						case 9:
							if (f.flags & 512) {
								for (; 16 > t; ) {
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								if (x !== (f.check & 65535)) {
									k.msg = 'header crc mismatch';
									f.mode = 30;
									break;
								}
								t = x = 0;
							}
							f.head && ((f.head.se = (f.flags >> 9) & 1), (f.head.done = !0));
							k.Ma = f.check = 0;
							f.mode = 12;
							break;
						case 10:
							for (; 32 > t; ) {
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							k.Ma = f.check = n(x);
							t = x = 0;
							f.mode = 11;
						case 11:
							if (0 === f.nc)
								return (
									(k.next_out = K),
									(k.avail_out = M),
									(k.next_in = I),
									(k.avail_in = F),
									(f.Fa = x),
									(f.S = t),
									2
								);
							k.Ma = f.check = 1;
							f.mode = 12;
						case 12:
							if (5 === r || 6 === r) break a;
						case 13:
							if (f.Sb) {
								x >>>= t & 7;
								t -= t & 7;
								f.mode = 27;
								break;
							}
							for (; 3 > t; ) {
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							f.Sb = x & 1;
							x >>>= 1;
							--t;
							switch (x & 3) {
								case 0:
									f.mode = 14;
									break;
								case 1:
									H = f;
									if (l) {
										p = new a.lb(512);
										D = new a.lb(32);
										for (A = 0; 144 > A; ) H.fa[A++] = 8;
										for (; 256 > A; ) H.fa[A++] = 9;
										for (; 280 > A; ) H.fa[A++] = 7;
										for (; 288 > A; ) H.fa[A++] = 8;
										g(1, H.fa, 0, 288, p, 0, H.Ab, { S: 9 });
										for (A = 0; 32 > A; ) H.fa[A++] = 5;
										g(2, H.fa, 0, 32, D, 0, H.Ab, { S: 5 });
										l = !1;
									}
									H.ya = p;
									H.xa = 9;
									H.Oa = D;
									H.eb = 5;
									f.mode = 20;
									if (6 === r) {
										x >>>= 2;
										t -= 2;
										break a;
									}
									break;
								case 2:
									f.mode = 17;
									break;
								case 3:
									(k.msg = 'invalid block type'), (f.mode = 30);
							}
							x >>>= 2;
							t -= 2;
							break;
						case 14:
							x >>>= t & 7;
							for (t -= t & 7; 32 > t; ) {
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							if ((x & 65535) !== ((x >>> 16) ^ 65535)) {
								k.msg = 'invalid stored block lengths';
								f.mode = 30;
								break;
							}
							f.length = x & 65535;
							t = x = 0;
							f.mode = 15;
							if (6 === r) break a;
						case 15:
							f.mode = 16;
						case 16:
							if ((A = f.length)) {
								A > F && (A = F);
								A > M && (A = M);
								if (0 === A) break a;
								a.arraySet(L, J, I, A, K);
								F -= A;
								I += A;
								M -= A;
								K += A;
								f.length -= A;
								break;
							}
							f.mode = 12;
							break;
						case 17:
							for (; 14 > t; ) {
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							f.ib = (x & 31) + 257;
							x >>>= 5;
							t -= 5;
							f.xb = (x & 31) + 1;
							x >>>= 5;
							t -= 5;
							f.hd = (x & 15) + 4;
							x >>>= 4;
							t -= 4;
							if (286 < f.ib || 30 < f.xb) {
								k.msg = 'too many length or distance symbols';
								f.mode = 30;
								break;
							}
							f.ra = 0;
							f.mode = 18;
						case 18:
							for (; f.ra < f.hd; ) {
								for (; 3 > t; ) {
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								f.fa[u[f.ra++]] = x & 7;
								x >>>= 3;
								t -= 3;
							}
							for (; 19 > f.ra; ) f.fa[u[f.ra++]] = 0;
							f.ya = f.fd;
							f.xa = 7;
							A = { S: f.xa };
							R = g(0, f.fa, 0, 19, f.ya, 0, f.Ab, A);
							f.xa = A.S;
							if (R) {
								k.msg = 'invalid code lengths set';
								f.mode = 30;
								break;
							}
							f.ra = 0;
							f.mode = 19;
						case 19:
							for (; f.ra < f.ib + f.xb; ) {
								for (;;) {
									var N = f.ya[x & ((1 << f.xa) - 1)];
									A = N >>> 24;
									N &= 65535;
									if (A <= t) break;
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								if (16 > N) (x >>>= A), (t -= A), (f.fa[f.ra++] = N);
								else {
									if (16 === N) {
										for (H = A + 2; t < H; ) {
											if (0 === F) break a;
											F--;
											x += J[I++] << t;
											t += 8;
										}
										x >>>= A;
										t -= A;
										if (0 === f.ra) {
											k.msg = 'invalid bit length repeat';
											f.mode = 30;
											break;
										}
										H = f.fa[f.ra - 1];
										A = 3 + (x & 3);
										x >>>= 2;
										t -= 2;
									} else if (17 === N) {
										for (H = A + 3; t < H; ) {
											if (0 === F) break a;
											F--;
											x += J[I++] << t;
											t += 8;
										}
										x >>>= A;
										t -= A;
										H = 0;
										A = 3 + (x & 7);
										x >>>= 3;
										t -= 3;
									} else {
										for (H = A + 7; t < H; ) {
											if (0 === F) break a;
											F--;
											x += J[I++] << t;
											t += 8;
										}
										x >>>= A;
										t -= A;
										H = 0;
										A = 11 + (x & 127);
										x >>>= 7;
										t -= 7;
									}
									if (f.ra + A > f.ib + f.xb) {
										k.msg = 'invalid bit length repeat';
										f.mode = 30;
										break;
									}
									for (; A--; ) f.fa[f.ra++] = H;
								}
							}
							if (30 === f.mode) break;
							if (0 === f.fa[256]) {
								k.msg = 'invalid code -- missing end-of-block';
								f.mode = 30;
								break;
							}
							f.xa = 9;
							A = { S: f.xa };
							R = g(1, f.fa, 0, f.ib, f.ya, 0, f.Ab, A);
							f.xa = A.S;
							if (R) {
								k.msg = 'invalid literal/lengths set';
								f.mode = 30;
								break;
							}
							f.eb = 6;
							f.Oa = f.$c;
							A = { S: f.eb };
							R = g(2, f.fa, f.ib, f.xb, f.Oa, 0, f.Ab, A);
							f.eb = A.S;
							if (R) {
								k.msg = 'invalid distances set';
								f.mode = 30;
								break;
							}
							f.mode = 20;
							if (6 === r) break a;
						case 20:
							f.mode = 21;
						case 21:
							if (6 <= F && 258 <= M) {
								k.next_out = K;
								k.avail_out = M;
								k.next_in = I;
								k.avail_in = F;
								f.Fa = x;
								f.S = t;
								h(k, O);
								K = k.next_out;
								L = k.output;
								M = k.avail_out;
								I = k.next_in;
								J = k.input;
								F = k.avail_in;
								x = f.Fa;
								t = f.S;
								12 === f.mode && (f.back = -1);
								break;
							}
							for (f.back = 0; ; ) {
								N = f.ya[x & ((1 << f.xa) - 1)];
								A = N >>> 24;
								H = (N >>> 16) & 255;
								N &= 65535;
								if (A <= t) break;
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							if (H && 0 === (H & 240)) {
								var P = A;
								var U = H;
								for (G = N; ; ) {
									N = f.ya[G + ((x & ((1 << (P + U)) - 1)) >> P)];
									A = N >>> 24;
									H = (N >>> 16) & 255;
									N &= 65535;
									if (P + A <= t) break;
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								x >>>= P;
								t -= P;
								f.back += P;
							}
							x >>>= A;
							t -= A;
							f.back += A;
							f.length = N;
							if (0 === H) {
								f.mode = 26;
								break;
							}
							if (H & 32) {
								f.back = -1;
								f.mode = 12;
								break;
							}
							if (H & 64) {
								k.msg = 'invalid literal/length code';
								f.mode = 30;
								break;
							}
							f.V = H & 15;
							f.mode = 22;
						case 22:
							if (f.V) {
								for (H = f.V; t < H; ) {
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								f.length += x & ((1 << f.V) - 1);
								x >>>= f.V;
								t -= f.V;
								f.back += f.V;
							}
							f.Ce = f.length;
							f.mode = 23;
						case 23:
							for (;;) {
								N = f.Oa[x & ((1 << f.eb) - 1)];
								A = N >>> 24;
								H = (N >>> 16) & 255;
								N &= 65535;
								if (A <= t) break;
								if (0 === F) break a;
								F--;
								x += J[I++] << t;
								t += 8;
							}
							if (0 === (H & 240)) {
								P = A;
								U = H;
								for (G = N; ; ) {
									N = f.Oa[G + ((x & ((1 << (P + U)) - 1)) >> P)];
									A = N >>> 24;
									H = (N >>> 16) & 255;
									N &= 65535;
									if (P + A <= t) break;
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								x >>>= P;
								t -= P;
								f.back += P;
							}
							x >>>= A;
							t -= A;
							f.back += A;
							if (H & 64) {
								k.msg = 'invalid distance code';
								f.mode = 30;
								break;
							}
							f.offset = N;
							f.V = H & 15;
							f.mode = 24;
						case 24:
							if (f.V) {
								for (H = f.V; t < H; ) {
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								f.offset += x & ((1 << f.V) - 1);
								x >>>= f.V;
								t -= f.V;
								f.back += f.V;
							}
							if (f.offset > f.Pb) {
								k.msg = 'invalid distance too far back';
								f.mode = 30;
								break;
							}
							f.mode = 25;
						case 25:
							if (0 === M) break a;
							A = O - M;
							if (f.offset > A) {
								A = f.offset - A;
								if (A > f.za && f.qc) {
									k.msg = 'invalid distance too far back';
									f.mode = 30;
									break;
								}
								A > f.ka ? ((A -= f.ka), (H = f.la - A)) : (H = f.ka - A);
								A > f.length && (A = f.length);
								P = f.window;
							} else (P = L), (H = K - f.offset), (A = f.length);
							A > M && (A = M);
							M -= A;
							f.length -= A;
							do L[K++] = P[H++];
							while (--A);
							0 === f.length && (f.mode = 21);
							break;
						case 26:
							if (0 === M) break a;
							L[K++] = f.length;
							M--;
							f.mode = 21;
							break;
						case 27:
							if (f.va) {
								for (; 32 > t; ) {
									if (0 === F) break a;
									F--;
									x |= J[I++] << t;
									t += 8;
								}
								O -= M;
								k.zb += O;
								f.total += O;
								O &&
									(k.Ma = f.check =
										f.flags
											? d(f.check, L, O, K - O)
											: e(f.check, L, O, K - O));
								O = M;
								if ((f.flags ? x : n(x)) !== f.check) {
									k.msg = 'incorrect data check';
									f.mode = 30;
									break;
								}
								t = x = 0;
							}
							f.mode = 28;
						case 28:
							if (f.va && f.flags) {
								for (; 32 > t; ) {
									if (0 === F) break a;
									F--;
									x += J[I++] << t;
									t += 8;
								}
								if (x !== (f.total & 4294967295)) {
									k.msg = 'incorrect length check';
									f.mode = 30;
									break;
								}
								t = x = 0;
							}
							f.mode = 29;
						case 29:
							R = 1;
							break a;
						case 30:
							R = -3;
							break a;
						case 31:
							return -4;
						default:
							return -2;
					}
				k.next_out = K;
				k.avail_out = M;
				k.next_in = I;
				k.avail_in = F;
				f.Fa = x;
				f.S = t;
				if (
					(f.la ||
						(O !== k.avail_out && 30 > f.mode && (27 > f.mode || 4 !== r))) &&
					b(k, k.output, k.next_out, O - k.avail_out)
				)
					return (f.mode = 31), -4;
				Q -= k.avail_in;
				O -= k.avail_out;
				k.rc += Q;
				k.zb += O;
				f.total += O;
				f.va &&
					O &&
					(k.Ma = f.check =
						f.flags
							? d(f.check, L, O, k.next_out - O)
							: e(f.check, L, O, k.next_out - O));
				k.ne =
					f.S +
					(f.Sb ? 64 : 0) +
					(12 === f.mode ? 128 : 0) +
					(20 === f.mode || 15 === f.mode ? 256 : 0);
				((0 === Q && 0 === O) || 4 === r) && 0 === R && (R = -5);
				return R;
			};
			v.inflateEnd = function (k) {
				if (!k || !k.state) return -2;
				var r = k.state;
				r.window && (r.window = null);
				k.state = null;
				return 0;
			};
			v.inflateGetHeader = function (k, r) {
				if (!k || !k.state) return -2;
				k = k.state;
				if (0 === (k.va & 2)) return -2;
				k.head = r;
				r.done = !1;
				return 0;
			};
			v.inflateSetDictionary = function (k, r) {
				var G = r.length;
				if (!k || !k.state) return -2;
				var B = k.state;
				if (0 !== B.va && 11 !== B.mode) return -2;
				if (11 === B.mode) {
					var u = e(1, r, G, 0);
					if (u !== B.check) return -3;
				}
				if (b(k, r, G, G)) return (B.mode = 31), -4;
				B.nc = 1;
				return 0;
			};
			v.Bf = 'pako inflate (from Nodeca project)';
		},
		function (C) {
			C.exports = function (v, y, n, m) {
				var z = (v & 65535) | 0;
				v = ((v >>> 16) & 65535) | 0;
				for (var w; 0 !== n; ) {
					w = 2e3 < n ? 2e3 : n;
					n -= w;
					do (z = (z + y[m++]) | 0), (v = (v + z) | 0);
					while (--w);
					z %= 65521;
					v %= 65521;
				}
				return z | (v << 16) | 0;
			};
		},
		function (C) {
			var v = (function () {
				for (var y, n = [], m = 0; 256 > m; m++) {
					y = m;
					for (var z = 0; 8 > z; z++)
						y = y & 1 ? 3988292384 ^ (y >>> 1) : y >>> 1;
					n[m] = y;
				}
				return n;
			})();
			C.exports = function (y, n, m, z) {
				m = z + m;
				for (y ^= -1; z < m; z++) y = (y >>> 8) ^ v[(y ^ n[z]) & 255];
				return y ^ -1;
			};
		},
		function (C) {
			C.exports = function (v, y) {
				var n = v.state;
				var m = v.next_in;
				var z = v.input;
				var w = m + (v.avail_in - 5);
				var E = v.next_out;
				var q = v.output;
				y = E - (y - v.avail_out);
				var b = E + (v.avail_out - 257);
				var a = n.Pb;
				var e = n.la;
				var d = n.za;
				var h = n.ka;
				var g = n.window;
				var l = n.Fa;
				var p = n.S;
				var D = n.ya;
				var k = n.Oa;
				var r = (1 << n.xa) - 1;
				var G = (1 << n.eb) - 1;
				a: do {
					15 > p &&
						((l += z[m++] << p), (p += 8), (l += z[m++] << p), (p += 8));
					var B = D[l & r];
					b: for (;;) {
						var u = B >>> 24;
						l >>>= u;
						p -= u;
						u = (B >>> 16) & 255;
						if (0 === u) q[E++] = B & 65535;
						else if (u & 16) {
							var f = B & 65535;
							if ((u &= 15))
								p < u && ((l += z[m++] << p), (p += 8)),
									(f += l & ((1 << u) - 1)),
									(l >>>= u),
									(p -= u);
							15 > p &&
								((l += z[m++] << p), (p += 8), (l += z[m++] << p), (p += 8));
							B = k[l & G];
							c: for (;;) {
								u = B >>> 24;
								l >>>= u;
								p -= u;
								u = (B >>> 16) & 255;
								if (u & 16) {
									B &= 65535;
									u &= 15;
									p < u &&
										((l += z[m++] << p),
										(p += 8),
										p < u && ((l += z[m++] << p), (p += 8)));
									B += l & ((1 << u) - 1);
									if (B > a) {
										v.msg = 'invalid distance too far back';
										n.mode = 30;
										break a;
									}
									l >>>= u;
									p -= u;
									u = E - y;
									if (B > u) {
										u = B - u;
										if (u > d && n.qc) {
											v.msg = 'invalid distance too far back';
											n.mode = 30;
											break a;
										}
										var K = 0;
										var L = g;
										if (0 === h) {
											if (((K += e - u), u < f)) {
												f -= u;
												do q[E++] = g[K++];
												while (--u);
												K = E - B;
												L = q;
											}
										} else if (h < u) {
											if (((K += e + h - u), (u -= h), u < f)) {
												f -= u;
												do q[E++] = g[K++];
												while (--u);
												K = 0;
												if (h < f) {
													u = h;
													f -= u;
													do q[E++] = g[K++];
													while (--u);
													K = E - B;
													L = q;
												}
											}
										} else if (((K += h - u), u < f)) {
											f -= u;
											do q[E++] = g[K++];
											while (--u);
											K = E - B;
											L = q;
										}
										for (; 2 < f; )
											(q[E++] = L[K++]),
												(q[E++] = L[K++]),
												(q[E++] = L[K++]),
												(f -= 3);
										f && ((q[E++] = L[K++]), 1 < f && (q[E++] = L[K++]));
									} else {
										K = E - B;
										do
											(q[E++] = q[K++]),
												(q[E++] = q[K++]),
												(q[E++] = q[K++]),
												(f -= 3);
										while (2 < f);
										f && ((q[E++] = q[K++]), 1 < f && (q[E++] = q[K++]));
									}
								} else if (0 === (u & 64)) {
									B = k[(B & 65535) + (l & ((1 << u) - 1))];
									continue c;
								} else {
									v.msg = 'invalid distance code';
									n.mode = 30;
									break a;
								}
								break;
							}
						} else if (0 === (u & 64)) {
							B = D[(B & 65535) + (l & ((1 << u) - 1))];
							continue b;
						} else {
							u & 32
								? (n.mode = 12)
								: ((v.msg = 'invalid literal/length code'), (n.mode = 30));
							break a;
						}
						break;
					}
				} while (m < w && E < b);
				f = p >> 3;
				m -= f;
				p -= f << 3;
				v.next_in = m;
				v.next_out = E;
				v.avail_in = m < w ? 5 + (w - m) : 5 - (m - w);
				v.avail_out = E < b ? 257 + (b - E) : 257 - (E - b);
				n.Fa = l & ((1 << p) - 1);
				n.S = p;
			};
		},
		function (C, v, y) {
			var n = y(3),
				m = [
					3, 4, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17, 19, 23, 27, 31, 35, 43, 51,
					59, 67, 83, 99, 115, 131, 163, 195, 227, 258, 0, 0,
				],
				z = [
					16, 16, 16, 16, 16, 16, 16, 16, 17, 17, 17, 17, 18, 18, 18, 18, 19,
					19, 19, 19, 20, 20, 20, 20, 21, 21, 21, 21, 16, 72, 78,
				],
				w = [
					1, 2, 3, 4, 5, 7, 9, 13, 17, 25, 33, 49, 65, 97, 129, 193, 257, 385,
					513, 769, 1025, 1537, 2049, 3073, 4097, 6145, 8193, 12289, 16385,
					24577, 0, 0,
				],
				E = [
					16, 16, 16, 16, 17, 17, 18, 18, 19, 19, 20, 20, 21, 21, 22, 22, 23,
					23, 24, 24, 25, 25, 26, 26, 27, 27, 28, 28, 29, 29, 64, 64,
				];
			C.exports = function (q, b, a, e, d, h, g, l) {
				var p = l.S,
					D,
					k,
					r,
					G,
					B,
					u,
					f = 0,
					K = new n.kb(16);
				var L = new n.kb(16);
				var M,
					I = 0;
				for (D = 0; 15 >= D; D++) K[D] = 0;
				for (k = 0; k < e; k++) K[b[a + k]]++;
				var J = p;
				for (r = 15; 1 <= r && 0 === K[r]; r--);
				J > r && (J = r);
				if (0 === r)
					return (d[h++] = 20971520), (d[h++] = 20971520), (l.S = 1), 0;
				for (p = 1; p < r && 0 === K[p]; p++);
				J < p && (J = p);
				for (D = G = 1; 15 >= D; D++)
					if (((G <<= 1), (G -= K[D]), 0 > G)) return -1;
				if (0 < G && (0 === q || 1 !== r)) return -1;
				L[1] = 0;
				for (D = 1; 15 > D; D++) L[D + 1] = L[D] + K[D];
				for (k = 0; k < e; k++) 0 !== b[a + k] && (g[L[b[a + k]]++] = k);
				if (0 === q) {
					var F = (M = g);
					var x = 19;
				} else
					1 === q
						? ((F = m), (f -= 257), (M = z), (I -= 257), (x = 256))
						: ((F = w), (M = E), (x = -1));
				k = B = 0;
				D = p;
				var t = h;
				e = J;
				L = 0;
				var Q = -1;
				var O = 1 << J;
				var R = O - 1;
				if ((1 === q && 852 < O) || (2 === q && 592 < O)) return 1;
				for (;;) {
					var H = D - L;
					if (g[k] < x) {
						var A = 0;
						var N = g[k];
					} else
						g[k] > x
							? ((A = M[I + g[k]]), (N = F[f + g[k]]))
							: ((A = 96), (N = 0));
					G = 1 << (D - L);
					p = u = 1 << e;
					do (u -= G), (d[t + (B >> L) + u] = (H << 24) | (A << 16) | N | 0);
					while (0 !== u);
					for (G = 1 << (D - 1); B & G; ) G >>= 1;
					0 !== G ? ((B &= G - 1), (B += G)) : (B = 0);
					k++;
					if (0 === --K[D]) {
						if (D === r) break;
						D = b[a + g[k]];
					}
					if (D > J && (B & R) !== Q) {
						0 === L && (L = J);
						t += p;
						e = D - L;
						for (G = 1 << e; e + L < r; ) {
							G -= K[e + L];
							if (0 >= G) break;
							e++;
							G <<= 1;
						}
						O += 1 << e;
						if ((1 === q && 852 < O) || (2 === q && 592 < O)) return 1;
						Q = B & R;
						d[Q] = (J << 24) | (e << 16) | (t - h) | 0;
					}
				}
				0 !== B && (d[t + B] = ((D - L) << 24) | 4194304);
				l.S = J;
				return 0;
			};
		},
		function (C, v, y) {
			function n(q, b) {
				if (65534 > b && ((q.subarray && w) || (!q.subarray && z)))
					return String.fromCharCode.apply(null, m.shrinkBuf(q, b));
				for (var a = '', e = 0; e < b; e++) a += String.fromCharCode(q[e]);
				return a;
			}
			var m = y(3),
				z = !0,
				w = !0;
			try {
				new Uint8Array(1);
			} catch (q) {
				w = !1;
			}
			var E = new m.Buf8(256);
			for (C = 0; 256 > C; C++)
				E[C] =
					252 <= C
						? 6
						: 248 <= C
						? 5
						: 240 <= C
						? 4
						: 224 <= C
						? 3
						: 192 <= C
						? 2
						: 1;
			E[254] = E[254] = 1;
			v.string2buf = function (q) {
				var b,
					a,
					e = q.length,
					d = 0;
				for (b = 0; b < e; b++) {
					var h = q.charCodeAt(b);
					if (55296 === (h & 64512) && b + 1 < e) {
						var g = q.charCodeAt(b + 1);
						56320 === (g & 64512) &&
							((h = 65536 + ((h - 55296) << 10) + (g - 56320)), b++);
					}
					d += 128 > h ? 1 : 2048 > h ? 2 : 65536 > h ? 3 : 4;
				}
				var l = new m.Buf8(d);
				for (b = a = 0; a < d; b++)
					(h = q.charCodeAt(b)),
						55296 === (h & 64512) &&
							b + 1 < e &&
							((g = q.charCodeAt(b + 1)),
							56320 === (g & 64512) &&
								((h = 65536 + ((h - 55296) << 10) + (g - 56320)), b++)),
						128 > h
							? (l[a++] = h)
							: (2048 > h
									? (l[a++] = 192 | (h >>> 6))
									: (65536 > h
											? (l[a++] = 224 | (h >>> 12))
											: ((l[a++] = 240 | (h >>> 18)),
											  (l[a++] = 128 | ((h >>> 12) & 63))),
									  (l[a++] = 128 | ((h >>> 6) & 63))),
							  (l[a++] = 128 | (h & 63)));
				return l;
			};
			v.yf = function (q) {
				return n(q, q.length);
			};
			v.binstring2buf = function (q) {
				for (var b = new m.Buf8(q.length), a = 0, e = b.length; a < e; a++)
					b[a] = q.charCodeAt(a);
				return b;
			};
			v.buf2string = function (q, b) {
				var a,
					e = b || q.length,
					d = Array(2 * e);
				for (b = a = 0; b < e; ) {
					var h = q[b++];
					if (128 > h) d[a++] = h;
					else {
						var g = E[h];
						if (4 < g) (d[a++] = 65533), (b += g - 1);
						else {
							for (h &= 2 === g ? 31 : 3 === g ? 15 : 7; 1 < g && b < e; )
								(h = (h << 6) | (q[b++] & 63)), g--;
							1 < g
								? (d[a++] = 65533)
								: 65536 > h
								? (d[a++] = h)
								: ((h -= 65536),
								  (d[a++] = 55296 | ((h >> 10) & 1023)),
								  (d[a++] = 56320 | (h & 1023)));
						}
					}
				}
				return n(d, a);
			};
			v.utf8border = function (q, b) {
				var a;
				b = b || q.length;
				b > q.length && (b = q.length);
				for (a = b - 1; 0 <= a && 128 === (q[a] & 192); ) a--;
				return 0 > a || 0 === a ? b : a + E[q[a]] > b ? a : b;
			};
		},
		function (C) {
			C.exports = {
				Z_NO_FLUSH: 0,
				Se: 1,
				Z_SYNC_FLUSH: 2,
				Pe: 3,
				Z_FINISH: 4,
				He: 5,
				We: 6,
				Z_OK: 0,
				Z_STREAM_END: 1,
				Z_NEED_DICT: 2,
				Me: -1,
				Ue: -2,
				Ie: -3,
				Z_BUF_ERROR: -5,
				Re: 0,
				Fe: 1,
				Ee: 9,
				Je: -1,
				Ne: 1,
				Qe: 2,
				Te: 3,
				Oe: 4,
				Ke: 0,
				Ge: 0,
				Ve: 1,
				Xe: 2,
				Le: 8,
			};
		},
		function (C) {
			C.exports = {
				2: 'need dictionary',
				1: 'stream end',
				0: '',
				'-1': 'file error',
				'-2': 'stream error',
				'-3': 'data error',
				'-4': 'insufficient memory',
				'-5': 'buffer error',
				'-6': 'incompatible version',
			};
		},
		function (C) {
			C.exports = function () {
				this.input = null;
				this.rc = this.avail_in = this.next_in = 0;
				this.output = null;
				this.zb = this.avail_out = this.next_out = 0;
				this.msg = '';
				this.state = null;
				this.ne = 2;
				this.Ma = 0;
			};
		},
		function (C) {
			C.exports = function () {
				this.ye = this.De = this.time = this.text = 0;
				this.V = null;
				this.mc = 0;
				this.kc = this.name = '';
				this.se = 0;
				this.done = !1;
			};
		},
	]);
}.call(this || window));
