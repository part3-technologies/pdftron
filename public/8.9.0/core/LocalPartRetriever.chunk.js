/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
	(window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
		[8],
		{
			458: function (Ba, va, r) {
				r.r(va);
				var oa = r(0),
					na = r(2),
					ma = r(157);
				Ba = r(99);
				var fa = r(261);
				r = r(393);
				var da = window;
				Ba = (function (aa) {
					function y(x, h, b) {
						h = aa.call(this, x, h, b) || this;
						if (x.name && 'xod' !== x.name.toLowerCase().split('.').pop())
							throw Error('Not an XOD file');
						if (!da.FileReader || !da.File || !da.Blob)
							throw Error('File API is not supported in this browser');
						h.file = x;
						h.ZB = [];
						h.WI = 0;
						return h;
					}
					Object(oa.c)(y, aa);
					y.prototype.ML = function (x, h, b) {
						var e = this,
							a = new FileReader();
						a.onloadend = function (f) {
							if (0 < e.ZB.length) {
								var n = e.ZB.shift();
								n.zka.readAsBinaryString(n.file);
							} else e.WI--;
							if (a.error) {
								f = a.error;
								if (f.code === f.ABORT_ERR) {
									Object(na.j)(
										'Request for chunk ' +
											h.start +
											'-' +
											h.stop +
											' was aborted'
									);
									return;
								}
								return b(f);
							}
							if ((f = a.content || f.target.result)) return b(!1, f);
							Object(na.j)('No data was returned from FileReader.');
						};
						h &&
							(x = (x.slice || x.webkitSlice || x.mozSlice || x.Bsa).call(
								x,
								h.start,
								h.stop
							));
						0 === e.ZB.length && 50 > e.WI
							? (a.readAsBinaryString(x), e.WI++)
							: e.ZB.push({ zka: a, file: x });
						return function () {
							a.abort();
						};
					};
					y.prototype.Ut = function (x) {
						var h = this;
						h.VB = !0;
						var b = ma.a;
						h.ML(h.file, { start: -b, stop: h.file.size }, function (e, a) {
							if (e)
								return Object(na.j)('Error loading end header: %s ' + e), x(e);
							if (a.length !== b)
								throw Error('Zip end header data is wrong size!');
							h.Ad = new fa.a(a);
							var f = h.Ad.iV();
							h.ML(h.file, f, function (n, z) {
								if (n)
									return (
										Object(na.j)('Error loading central directory: %s ' + n),
										x(n)
									);
								if (z.length !== f.stop - f.start)
									throw Error('Zip central directory data is wrong size!');
								h.Ad.lZ(z);
								h.HI = !0;
								h.VB = !1;
								return x(!1);
							});
						});
					};
					y.prototype.LM = function (x, h) {
						var b = this,
							e = b.vh[x];
						if (b.Ad.jT(x)) {
							var a = b.Ad.hx(x),
								f = b.ML(b.file, a, function (n, z) {
									delete b.vh[x];
									if (n)
										return (
											Object(na.j)(
												'Error loading part "%s": %s, ' + x + ', ' + n
											),
											h(n)
										);
									if (z.length !== a.stop - a.start)
										throw Error('Part data is wrong size!');
									h(!1, x, z, b.Ad.NW(x));
								});
							e.C0 = !0;
							e.cancel = f;
						} else h(Error('File not found: "' + x + '"'), x);
					};
					return y;
				})(Ba.a);
				Object(r.a)(Ba);
				Object(r.b)(Ba);
				va['default'] = Ba;
			},
		},
	]);
}.call(this || window));
