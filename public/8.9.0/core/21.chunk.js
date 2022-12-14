/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
	(window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
		[21],
		{
			474: function (Ba, va, r) {
				r.r(va);
				var oa = r(0),
					na = r(10),
					ma = r(2);
				Ba = r(48);
				var fa = r(22),
					da = r(11);
				r = (function () {
					function aa() {
						this.init();
					}
					aa.prototype.init = function () {
						this.a9 = !1;
						this.$e = this.Dl = this.connection = null;
						this.ws = {};
						this.fa = this.fG = null;
					};
					aa.prototype.Opa = function (y) {
						for (var x = this, h = 0; h < y.length; ++h) {
							var b = y[h];
							switch (b.at) {
								case 'create':
									this.ws[b.author] || (this.ws[b.author] = b.aName);
									this.jga(b);
									break;
								case 'modify':
									this.fa.lm(b.xfdf).then(function (e) {
										x.fa.kb(e[0]);
									});
									break;
								case 'delete':
									this.fa.lm('<delete><id>' + b.aId + '</id></delete>');
							}
						}
					};
					aa.prototype.jga = function (y) {
						var x = this;
						this.fa.lm(y.xfdf).then(function (h) {
							h = h[0];
							h.authorId = y.author;
							x.fa.kb(h);
							x.fa.trigger(na.b.UPDATE_ANNOTATION_PERMISSION, [h]);
						});
					};
					aa.prototype.Lfa = function (y, x, h) {
						this.Dl && this.Dl(y, x, h);
					};
					aa.prototype.preloadAnnotations = function (y) {
						this.addEventListener(
							'webViewerServerAnnotationsEnabled',
							this.Lfa.bind(this, y, 'add', { imported: !1 }),
							{ once: !0 }
						);
					};
					aa.prototype.initiateCollaboration = function (y, x, h) {
						var b = this;
						if (y) {
							b.$e = x;
							b.fa = h.ma();
							h.addEventListener(na.e.DOCUMENT_UNLOADED, function () {
								b.disableCollaboration();
							});
							b.oqa(y);
							var e = new XMLHttpRequest();
							e.addEventListener('load', function () {
								if (200 === e.status && 0 < e.responseText.length)
									try {
										var a = JSON.parse(e.responseText);
										b.connection = exports.Ua.Wqa(
											Object(fa.k)(b.$e, 'blackbox/'),
											'annot'
										);
										b.fG = a.id;
										b.ws[a.id] = a.user_name;
										b.fa.wN(a.id);
										b.connection.Vta(
											function (f) {
												f.t && f.t.startsWith('a_') && f.data && b.Opa(f.data);
											},
											function () {
												b.connection.send({ t: 'a_retrieve', dId: y });
												b.trigger(
													aa.Events.WEBVIEWER_SERVER_ANNOTATIONS_ENABLED,
													[b.ws[a.id], b.fG]
												);
											},
											function () {
												b.disableCollaboration();
											}
										);
									} catch (f) {
										Object(ma.g)(f.message);
									}
							});
							e.open('GET', Object(fa.k)(this.$e, 'demo/SessionInfo.jsp'));
							e.withCredentials = !0;
							e.send();
							b.a9 = !0;
							b.fa.D_(function (a) {
								return b.ws[a.Author] || a.Author;
							});
						} else Object(ma.g)('Document ID required for collaboration');
					};
					aa.prototype.disableCollaboration = function () {
						this.Dl &&
							(this.fa.removeEventListener(
								da.a.Events.ANNOTATION_CHANGED,
								this.Dl
							),
							(this.Dl = null));
						this.connection && this.connection.cq();
						this.fa && this.fa.wN('Guest');
						this.init();
						this.trigger(aa.Events.WEBVIEWER_SERVER_ANNOTATIONS_DISABLED);
					};
					aa.prototype.oqa = function (y) {
						var x = this;
						this.Dl &&
							this.fa.removeEventListener(
								da.a.Events.ANNOTATION_CHANGED,
								this.Dl
							);
						this.Dl = function (h, b, e) {
							return Object(oa.b)(this, void 0, void 0, function () {
								var a, f, n, z, w, ea, ka, ca, ba;
								return Object(oa.d)(this, function (ia) {
									switch (ia.label) {
										case 0:
											if (e.imported) return [2];
											a = { t: 'a_' + b, dId: y, annots: [] };
											return [4, x.fa.AJ()];
										case 1:
											f = ia.ca();
											'delete' !== b &&
												((n = new DOMParser().parseFromString(f, 'text/xml')),
												(z = new XMLSerializer()));
											for (w = 0; w < h.length; w++)
												(ea = h[w]),
													(ca = ka = void 0),
													'add' === b
														? ((ka = n.querySelector('[name="' + ea.Id + '"]')),
														  (ca = z.serializeToString(ka)),
														  (ba = null),
														  ea.InReplyTo &&
																(ba =
																	x.fa.rf(ea.InReplyTo).authorId || 'default'),
														  a.annots.push({
																at: 'create',
																aId: ea.Id,
																author: x.fG,
																aName: x.ws[x.fG],
																parent: ba,
																xfdf: '<add>' + ca + '</add>',
														  }))
														: 'modify' === b
														? ((ka = n.querySelector('[name="' + ea.Id + '"]')),
														  (ca = z.serializeToString(ka)),
														  a.annots.push({
																at: 'modify',
																aId: ea.Id,
																xfdf: '<modify>' + ca + '</modify>',
														  }))
														: 'delete' === b &&
														  a.annots.push({ at: 'delete', aId: ea.Id });
											0 < a.annots.length && x.connection.send(a);
											return [2];
									}
								});
							});
						}.bind(x);
						this.fa.addEventListener(da.a.Events.ANNOTATION_CHANGED, this.Dl);
					};
					aa.Events = {
						WEBVIEWER_SERVER_ANNOTATIONS_ENABLED:
							'webViewerServerAnnotationsEnabled',
						WEBVIEWER_SERVER_ANNOTATIONS_DISABLED:
							'webViewerServerAnnotationsDisabled',
					};
					return aa;
				})();
				Object(Ba.a)(r);
				va['default'] = r;
			},
		},
	]);
}.call(this || window));
