/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
	(window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
		[20],
		{
			472: function (Ba) {
				(function () {
					Ba.exports = {
						$Y: function () {
							function va(a, f) {
								this.scrollLeft = a;
								this.scrollTop = f;
							}
							function r(a) {
								if (
									null === a ||
									'object' !== typeof a ||
									void 0 === a.behavior ||
									'auto' === a.behavior ||
									'instant' === a.behavior
								)
									return !0;
								if ('object' === typeof a && 'smooth' === a.behavior) return !1;
								throw new TypeError(
									'behavior member of ScrollOptions ' +
										a.behavior +
										' is not a valid value for enumeration ScrollBehavior.'
								);
							}
							function oa(a, f) {
								if ('Y' === f) return a.clientHeight + e < a.scrollHeight;
								if ('X' === f) return a.clientWidth + e < a.scrollWidth;
							}
							function na(a, f) {
								a = aa.getComputedStyle(a, null)['overflow' + f];
								return 'auto' === a || 'scroll' === a;
							}
							function ma(a) {
								var f = oa(a, 'Y') && na(a, 'Y');
								a = oa(a, 'X') && na(a, 'X');
								return f || a;
							}
							function fa(a) {
								var f = (b() - a.startTime) / 468;
								var n = 0.5 * (1 - Math.cos(Math.PI * (1 < f ? 1 : f)));
								f = a.nz + (a.x - a.nz) * n;
								n = a.oz + (a.y - a.oz) * n;
								a.method.call(a.rF, f, n);
								(f === a.x && n === a.y) ||
									aa.requestAnimationFrame(fa.bind(aa, a));
							}
							function da(a, f, n) {
								var z = b();
								if (a === y.body) {
									var w = aa;
									var ea = aa.scrollX || aa.pageXOffset;
									a = aa.scrollY || aa.pageYOffset;
									var ka = h.scroll;
								} else
									(w = a), (ea = a.scrollLeft), (a = a.scrollTop), (ka = va);
								fa({
									rF: w,
									method: ka,
									startTime: z,
									nz: ea,
									oz: a,
									x: f,
									y: n,
								});
							}
							var aa = window,
								y = document;
							if (
								!('scrollBehavior' in y.documentElement.style && !0 !== aa.vra)
							) {
								var x = aa.HTMLElement || aa.Element,
									h = {
										scroll: aa.scroll || aa.scrollTo,
										scrollBy: aa.scrollBy,
										kU: x.prototype.scroll || va,
										scrollIntoView: x.prototype.scrollIntoView,
									},
									b =
										aa.performance && aa.performance.now
											? aa.performance.now.bind(aa.performance)
											: Date.now,
									e = RegExp('MSIE |Trident/|Edge/').test(
										aa.navigator.userAgent
									)
										? 1
										: 0;
								aa.scroll = aa.scrollTo = function (a, f) {
									void 0 !== a &&
										(!0 === r(a)
											? h.scroll.call(
													aa,
													void 0 !== a.left
														? a.left
														: 'object' !== typeof a
														? a
														: aa.scrollX || aa.pageXOffset,
													void 0 !== a.top
														? a.top
														: void 0 !== f
														? f
														: aa.scrollY || aa.pageYOffset
											  )
											: da.call(
													aa,
													y.body,
													void 0 !== a.left
														? ~~a.left
														: aa.scrollX || aa.pageXOffset,
													void 0 !== a.top
														? ~~a.top
														: aa.scrollY || aa.pageYOffset
											  ));
								};
								aa.scrollBy = function (a, f) {
									void 0 !== a &&
										(r(a)
											? h.scrollBy.call(
													aa,
													void 0 !== a.left
														? a.left
														: 'object' !== typeof a
														? a
														: 0,
													void 0 !== a.top ? a.top : void 0 !== f ? f : 0
											  )
											: da.call(
													aa,
													y.body,
													~~a.left + (aa.scrollX || aa.pageXOffset),
													~~a.top + (aa.scrollY || aa.pageYOffset)
											  ));
								};
								x.prototype.scroll = x.prototype.scrollTo = function (a, f) {
									if (void 0 !== a)
										if (!0 === r(a)) {
											if ('number' === typeof a && void 0 === f)
												throw new SyntaxError('Value could not be converted');
											h.kU.call(
												this,
												void 0 !== a.left
													? ~~a.left
													: 'object' !== typeof a
													? ~~a
													: this.scrollLeft,
												void 0 !== a.top
													? ~~a.top
													: void 0 !== f
													? ~~f
													: this.scrollTop
											);
										} else
											(f = a.left),
												(a = a.top),
												da.call(
													this,
													this,
													'undefined' === typeof f ? this.scrollLeft : ~~f,
													'undefined' === typeof a ? this.scrollTop : ~~a
												);
								};
								x.prototype.scrollBy = function (a, f) {
									void 0 !== a &&
										(!0 === r(a)
											? h.kU.call(
													this,
													void 0 !== a.left
														? ~~a.left + this.scrollLeft
														: ~~a + this.scrollLeft,
													void 0 !== a.top
														? ~~a.top + this.scrollTop
														: ~~f + this.scrollTop
											  )
											: this.scroll({
													left: ~~a.left + this.scrollLeft,
													top: ~~a.top + this.scrollTop,
													behavior: a.behavior,
											  }));
								};
								x.prototype.scrollIntoView = function (a) {
									if (!0 === r(a))
										h.scrollIntoView.call(this, void 0 === a ? !0 : a);
									else {
										for (a = this; a !== y.body && !1 === ma(a); )
											a = a.parentNode || a.host;
										var f = a.getBoundingClientRect(),
											n = this.getBoundingClientRect();
										a !== y.body
											? (da.call(
													this,
													a,
													a.scrollLeft + n.left - f.left,
													a.scrollTop + n.top - f.top
											  ),
											  'fixed' !== aa.getComputedStyle(a).position &&
													aa.scrollBy({
														left: f.left,
														top: f.top,
														behavior: 'smooth',
													}))
											: aa.scrollBy({
													left: n.left,
													top: n.top,
													behavior: 'smooth',
											  });
									}
								};
							}
						},
					};
				})();
			},
		},
	]);
}.call(this || window));
