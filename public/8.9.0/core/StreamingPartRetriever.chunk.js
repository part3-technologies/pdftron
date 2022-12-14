/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
	(window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
		[12],
		{
			465: function (Ba, va, r) {
				r.r(va);
				var oa = r(0),
					na = r(1);
				r.n(na);
				var ma = r(2),
					fa = r(157);
				Ba = r(48);
				var da = r(99),
					aa = r(261),
					y = r(74),
					x = r(260);
				r = r(393);
				var h = window,
					b = (function () {
						function f(n, z, w) {
							var ea = -1 === n.indexOf('?') ? '?' : '&';
							switch (z) {
								case y.a.NEVER_CACHE:
									this.url = n + ea + '_=' + Object(na.uniqueId)();
									break;
								default:
									this.url = n;
							}
							this.mf = w;
							this.request = new XMLHttpRequest();
							this.request.open('GET', this.url, !0);
							this.request.setRequestHeader(
								'X-Requested-With',
								'XMLHttpRequest'
							);
							this.request.overrideMimeType
								? this.request.overrideMimeType(
										'text/plain; charset=x-user-defined'
								  )
								: this.request.setRequestHeader(
										'Accept-Charset',
										'x-user-defined'
								  );
							this.status = x.a.NOT_STARTED;
						}
						f.prototype.start = function (n, z) {
							var w = this,
								ea = this,
								ka = this.request,
								ca;
							ea.Wx = 0;
							n &&
								Object.keys(n).forEach(function (ba) {
									w.request.setRequestHeader(ba, n[ba]);
								});
							z && (this.request.withCredentials = z);
							this.VE = setInterval(function () {
								var ba = 0 === window.document.URL.indexOf('file:///');
								ba = 200 === ka.status || (ba && 0 === ka.status);
								if (ka.readyState !== x.b.DONE || ba) {
									try {
										ka.responseText;
									} catch (ia) {
										return;
									}
									ea.Wx < ka.responseText.length &&
										(ca = ea.gka()) &&
										ea.trigger(f.Events.DATA, [ca]);
									0 === ka.readyState &&
										(clearInterval(ea.VE), ea.trigger(f.Events.DONE));
								} else clearInterval(ea.VE), ea.trigger(f.Events.DONE, ['Error received return status ' + ka.status]);
							}, 1e3);
							this.request.send(null);
							this.status = x.a.STARTED;
						};
						f.prototype.gka = function () {
							var n = this.request,
								z = n.responseText;
							if (0 !== z.length)
								if (this.Wx === z.length)
									clearInterval(this.VE), this.trigger(f.Events.DONE);
								else
									return (
										(z = Math.min(this.Wx + 3e6, z.length)),
										(n = h.JV(n, this.Wx, !0, z)),
										(this.Wx = z),
										n
									);
						};
						f.prototype.abort = function () {
							clearInterval(this.VE);
							var n = this;
							this.request.onreadystatechange = function () {
								Object(ma.j)('StreamingRequest aborted');
								n.status = x.a.ABORTED;
								return n.trigger(f.Events.ABORTED);
							};
							this.request.abort();
						};
						f.prototype.finish = function () {
							var n = this;
							this.request.onreadystatechange = function () {
								n.status = x.a.SUCCESS;
								return n.trigger(f.Events.DONE);
							};
							this.request.abort();
						};
						f.Events = { DONE: 'done', DATA: 'data', ABORTED: 'aborted' };
						return f;
					})();
				Object(Ba.a)(b);
				var e;
				(function (f) {
					f[(f.LOCAL_HEADER = 0)] = 'LOCAL_HEADER';
					f[(f.FILE = 1)] = 'FILE';
					f[(f.CENTRAL_DIR = 2)] = 'CENTRAL_DIR';
				})(e || (e = {}));
				var a = (function (f) {
					function n() {
						var z = f.call(this) || this;
						z.buffer = '';
						z.state = e.LOCAL_HEADER;
						z.fO = 4;
						z.wm = null;
						z.Yt = fa.c;
						z.Yn = {};
						return z;
					}
					Object(oa.c)(n, f);
					n.prototype.$ja = function (z) {
						var w;
						for (z = this.buffer + z; z.length >= this.Yt; )
							switch (this.state) {
								case e.LOCAL_HEADER:
									this.wm = w = this.kka(z.slice(0, this.Yt));
									if (w.Fu !== fa.g)
										throw Error('Wrong signature in local header: ' + w.Fu);
									z = z.slice(this.Yt);
									this.state = e.FILE;
									this.Yt = w.xI + w.Pq + w.Ow + this.fO;
									this.trigger(n.Events.HEADER, [w]);
									break;
								case e.FILE:
									this.wm.name = z.slice(0, this.wm.Pq);
									this.Yn[this.wm.name] = this.wm;
									w = this.Yt - this.fO;
									var ea = z.slice(this.wm.Pq + this.wm.Ow, w);
									this.trigger(n.Events.FILE, [this.wm.name, ea, this.wm.OI]);
									z = z.slice(w);
									if (z.slice(0, this.fO) === fa.h)
										(this.state = e.LOCAL_HEADER), (this.Yt = fa.c);
									else return (this.state = e.CENTRAL_DIR), !0;
							}
						this.buffer = z;
						return !1;
					};
					n.Events = { HEADER: 'header', FILE: 'file' };
					return n;
				})(aa.a);
				Object(Ba.a)(a);
				Ba = (function (f) {
					function n(z, w, ea, ka, ca) {
						ea = f.call(this, z, ea, ka) || this;
						ea.url = z;
						ea.stream = new b(z, w);
						ea.Ad = new a();
						ea.UY = window.createPromiseCapability();
						ea.vZ = {};
						ea.mf = ca;
						return ea;
					}
					Object(oa.c)(n, f);
					n.prototype.Ry = function (z) {
						var w = this;
						this.request([this.Fj, this.dl, this.Ej]);
						this.stream.addEventListener(b.Events.DATA, function (ea) {
							try {
								if (w.Ad.$ja(ea)) return w.stream.finish();
							} catch (ka) {
								throw (w.stream.abort(), w.hq(ka), z(ka), ka);
							}
						});
						this.stream.addEventListener(b.Events.DONE, function (ea) {
							w.Dja = !0;
							w.UY.resolve();
							ea && (w.hq(ea), z(ea));
						});
						this.Ad.addEventListener(
							a.Events.HEADER,
							Object(na.bind)(this.uZ, this)
						);
						this.Ad.addEventListener(
							a.Events.FILE,
							Object(na.bind)(this.Aka, this)
						);
						return this.stream.start(this.mf, this.withCredentials);
					};
					n.prototype.GV = function (z) {
						var w = this;
						this.UY.promise.then(function () {
							z(Object.keys(w.Ad.Yn));
						});
					};
					n.prototype.Jo = function () {
						return !0;
					};
					n.prototype.request = function (z) {
						var w = this;
						this.Dja &&
							z.forEach(function (ea) {
								w.vZ[ea] || w.Dpa(ea);
							});
					};
					n.prototype.uZ = function () {};
					n.prototype.abort = function () {
						this.stream && this.stream.abort();
					};
					n.prototype.Dpa = function (z) {
						this.trigger(da.a.Events.PART_READY, [
							{ fb: z, error: 'Requested part not found', Qi: !1, rg: !1 },
						]);
					};
					n.prototype.Aka = function (z, w, ea) {
						this.vZ[z] = !0;
						this.trigger(da.a.Events.PART_READY, [
							{ fb: z, data: w, Qi: !1, rg: !1, error: null, fd: ea },
						]);
					};
					return n;
				})(da.a);
				Object(r.a)(Ba);
				Object(r.b)(Ba);
				va['default'] = Ba;
			},
		},
	]);
}.call(this || window));
