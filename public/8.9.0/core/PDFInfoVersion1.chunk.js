/** Notice * This file contains works from many authors under various (but compatible) licenses. Please see core.txt for more information. **/
(function () {
	(window.wpCoreControlsBundle = window.wpCoreControlsBundle || []).push([
		[10],
		{
			470: function (Ba, va, r) {
				function oa(ba) {
					ba.Ha();
					ba.advance();
					var ia = ba.current.textContent;
					ba.Za();
					return ia;
				}
				function na(ba) {
					var ia = [];
					for (ba.Ha(); ba.advance(); ) {
						var ha = ba.Oa();
						'field' === ha
							? ia.push(String(ba.ga('name')))
							: Object(a.j)('unrecognised field list element: ' + ha);
					}
					ba.Za();
					return ia;
				}
				function ma(ba, ia) {
					return ia ? 'false' !== ba : 'true' === ba;
				}
				function fa(ba, ia) {
					var ha = ba.Oa();
					switch (ha) {
						case 'javascript':
							return { name: 'JavaScript', javascript: ba.current.textContent };
						case 'uri':
							return { name: 'URI', uri: ba.ga('uri') };
						case 'goto':
							ha = null;
							ba.Ha();
							if (ba.advance()) {
								var la = ba.ga('fit');
								ha = { page: ba.ga('page'), fit: la };
								if ('0' === ha.page)
									Object(a.j)('null page encountered in dest');
								else
									switch (((ia = ia(Number(ha.page))), la)) {
										case 'Fit':
										case 'FitB':
											break;
										case 'FitH':
										case 'FitBH':
											ha.top = ia.ra({ x: 0, y: ba.ga('top') || 0 }).y;
											break;
										case 'FitV':
										case 'FitBV':
											ha.left = ia.ra({ x: ba.ga('left') || 0, y: 0 }).x;
											break;
										case 'FitR':
											la = ia.ra({
												x: ba.ga('left') || 0,
												y: ba.ga('top') || 0,
											});
											ia = ia.ra({
												x: ba.ga('right') || 0,
												y: ba.ga('bottom') || 0,
											});
											ia = new z.d(la.x, la.y, ia.x, ia.y);
											ha.top = ia.y1;
											ha.left = ia.x1;
											ha.bottom = ia.y2;
											ha.right = ia.x2;
											break;
										case 'XYZ':
											la = ia.ra({
												x: ba.ga('left') || 0,
												y: ba.ga('top') || 0,
											});
											ha.top = la.y;
											ha.left = la.x;
											ha.zoom = ba.ga('zoom') || 0;
											break;
										default:
											Object(a.j)('unknown dest fit: ' + la);
									}
								ha = { name: 'GoTo', dest: ha };
							} else Object(a.j)('missing dest in GoTo action');
							ba.Za();
							return ha;
						case 'submit-form':
							ha = {
								name: 'SubmitForm',
								url: ba.ga('url'),
								format: ba.ga('format'),
								method: ba.ga('method') || 'POST',
								exclude: ma(ba.ga('exclude'), !1),
							};
							ia = ba.ga('flags');
							ha.flags = ia ? ia.split(' ') : [];
							for (ba.Ha(); ba.advance(); )
								switch (((ia = ba.Oa()), ia)) {
									case 'fields':
										ha.fields = na(ba);
										break;
									default:
										Object(a.j)('unrecognised submit-form child: ' + ia);
								}
							ba.Za();
							return ha;
						case 'reset-form':
							ha = { name: 'ResetForm', exclude: ma(ba.ga('exclude'), !1) };
							for (ba.Ha(); ba.advance(); )
								switch (((ia = ba.Oa()), ia)) {
									case 'fields':
										ha.fields = na(ba);
										break;
									default:
										Object(a.j)('unrecognised reset-form child: ' + ia);
								}
							ba.Za();
							return ha;
						case 'hide':
							ha = { name: 'Hide', hide: ma(ba.ga('hide'), !0) };
							for (ba.Ha(); ba.advance(); )
								switch (((ia = ba.Oa()), ia)) {
									case 'fields':
										ha.fields = na(ba);
										break;
									default:
										Object(a.j)('unrecognised hide child: ' + ia);
								}
							ba.Za();
							return ha;
						case 'named':
							return { name: 'Named', action: ba.ga('name') };
						default:
							Object(a.j)('Encountered unexpected action type: ' + ha);
					}
					return null;
				}
				function da(ba, ia, ha) {
					var la = {};
					for (ba.Ha(); ba.advance(); ) {
						var ja = ba.Oa();
						switch (ja) {
							case 'action':
								ja = ba.ga('trigger');
								if (ia ? -1 !== ia.indexOf(ja) : 1) {
									la[ja] = [];
									for (ba.Ha(); ba.advance(); ) {
										var ra = fa(ba, ha);
										Object(f.isNull)(ra) || la[ja].push(ra);
									}
									ba.Za();
								} else
									Object(a.j)('encountered unexpected trigger on field: ' + ja);
								break;
							default:
								Object(a.j)('encountered unknown action child: ' + ja);
						}
					}
					ba.Za();
					return la;
				}
				function aa(ba) {
					return new w.a(
						ba.ga('r') || 0,
						ba.ga('g') || 0,
						ba.ga('b') || 0,
						ba.ga('a') || 1
					);
				}
				function y(ba, ia) {
					var ha = ba.ga('name'),
						la = ba.ga('type') || 'Type1',
						ja = ba.ga('size'),
						ra = ia.ra({ x: 0, y: 0 });
					ja = ia.ra({ x: Number(ja), y: 0 });
					ia = ra.x - ja.x;
					ra = ra.y - ja.y;
					ha = {
						name: ha,
						type: la,
						size: Math.sqrt(ia * ia + ra * ra) || 0,
						strokeColor: [0, 0, 0],
						fillColor: [0, 0, 0],
					};
					for (ba.Ha(); ba.advance(); )
						switch (((la = ba.Oa()), la)) {
							case 'stroke-color':
								ha.strokeColor = aa(ba);
								break;
							case 'fill-color':
								ha.fillColor = aa(ba);
								break;
							default:
								Object(a.j)('unrecognised font child: ' + la);
						}
					ba.Za();
					return ha;
				}
				function x(ba) {
					var ia = [];
					for (ba.Ha(); ba.advance(); ) {
						var ha = ba.Oa();
						switch (ha) {
							case 'option':
								ha = ia;
								var la = ha.push;
								var ja = ba;
								ja = {
									value: ja.ga('value'),
									displayValue: ja.ga('display-value') || void 0,
								};
								la.call(ha, ja);
								break;
							default:
								Object(a.j)('unrecognised options child: ' + ha);
						}
					}
					ba.Za();
					return ia;
				}
				function h(ba, ia) {
					var ha = ba.ga('name'),
						la = {
							type: ba.ga('type'),
							quadding: ba.ga('quadding') || 'Left-justified',
							maxLen: ba.ga('max-len') || -1,
						},
						ja = ba.ga('flags');
					Object(f.isString)(ja) && (la.flags = ja.split(' '));
					for (ba.Ha(); ba.advance(); )
						switch (((ja = ba.Oa()), ja)) {
							case 'actions':
								la.actions = da(ba, ['C', 'F', 'K', 'V'], function () {
									return ia;
								});
								break;
							case 'default-value':
								la.defaultValue = oa(ba);
								break;
							case 'font':
								la.font = y(ba, ia);
								break;
							case 'options':
								la.options = x(ba);
								break;
							default:
								Object(a.j)('unknown field child: ' + ja);
						}
					ba.Za();
					return new window.Annotations.ha.pa(ha, la);
				}
				function b(ba, ia) {
					switch (ba.type) {
						case 'Tx':
							try {
								if (Object(ka.c)(ba.actions))
									return new n.a.DatePickerWidgetAnnotation(ba, ia);
							} catch (ha) {
								Object(a.j)(ha);
							}
							return new n.a.TextWidgetAnnotation(ba, ia);
						case 'Ch':
							return ba.flags.get(ca.WidgetFlags.COMBO)
								? new n.a.ChoiceWidgetAnnotation(ba, ia)
								: new n.a.ListWidgetAnnotation(ba, ia);
						case 'Btn':
							return ba.flags.get(ca.WidgetFlags.PUSH_BUTTON)
								? new n.a.PushButtonWidgetAnnotation(ba, ia)
								: ba.flags.get(ca.WidgetFlags.RADIO)
								? new n.a.RadioButtonWidgetAnnotation(ba, ia)
								: new n.a.CheckButtonWidgetAnnotation(ba, ia);
						case 'Sig':
							return new n.a.SignatureWidgetAnnotation(ba, ia);
						default:
							Object(a.j)('Unrecognised field type: ' + ba.type);
					}
					return null;
				}
				function e(ba, ia, ha, la) {
					var ja = [],
						ra = {};
					ba.Ha();
					var pa = [],
						sa = {},
						ua = [];
					Object(ea.a)(
						function () {
							if (ba.advance()) {
								var qa = ba.Oa();
								switch (qa) {
									case 'calculation-order':
										pa = 'calculation-order' === ba.Oa() ? na(ba) : [];
										break;
									case 'document-actions':
										sa = da(ba, ['Init', 'Open'], ia);
										break;
									case 'pages':
										qa = [];
										for (ba.Ha(); ba.advance(); ) {
											var wa = ba.Oa();
											switch (wa) {
												case 'page':
													wa = qa;
													var za = wa.push,
														Ha = ba,
														Ia = ia,
														Aa = { number: Ha.ga('number') };
													for (Ha.Ha(); Ha.advance(); ) {
														var Ja = Ha.Oa();
														switch (Ja) {
															case 'actions':
																Aa.actions = da(Ha, ['O', 'C'], Ia);
																break;
															default:
																Object(a.j)('unrecognised page child: ' + Ja);
														}
													}
													Ha.Za();
													za.call(wa, Aa);
													break;
												default:
													Object(a.j)('unrecognised page child: ' + wa);
											}
										}
										ba.Za();
										ua = qa;
										break;
									case 'field':
										wa = h(ba, ia(1));
										ra[wa.name] = wa;
										break;
									case 'widget':
										qa = {
											border: { style: 'Solid', width: 1 },
											backgroundColor: [],
											fieldName: ba.ga('field'),
											page: ba.ga('page'),
											index: ba.ga('index') || 0,
											rotation: ba.ga('rotation') || 0,
											flags: [],
											isImporting: !0,
										};
										(wa = ba.ga('appearance')) && (qa.appearance = wa);
										(wa = ba.ga('flags')) && (qa.flags = wa.split(' '));
										for (ba.Ha(); ba.advance(); )
											switch (((wa = ba.Oa()), wa)) {
												case 'rect':
													za = ba;
													Ha = ia(Number(qa.page));
													wa = Ha.ra({
														x: za.ga('x1') || 0,
														y: za.ga('y1') || 0,
													});
													za = Ha.ra({
														x: za.ga('x2') || 0,
														y: za.ga('y2') || 0,
													});
													wa = new z.d(wa.x, wa.y, za.x, za.y);
													wa.normalize();
													qa.rect = {
														x1: wa.x1,
														y1: wa.y1,
														x2: wa.x2,
														y2: wa.y2,
													};
													break;
												case 'border':
													wa = ba;
													za = {
														style: wa.ga('style') || 'Solid',
														width: wa.ga('width') || 1,
														color: [0, 0, 0],
													};
													for (wa.Ha(); wa.advance(); )
														switch (((Ha = wa.Oa()), Ha)) {
															case 'color':
																za.color = aa(wa);
																break;
															default:
																Object(a.j)('unrecognised border child: ' + Ha);
														}
													wa.Za();
													qa.border = za;
													break;
												case 'background-color':
													qa.backgroundColor = aa(ba);
													break;
												case 'actions':
													qa.actions = da(
														ba,
														'E X D U Fo Bl PO PC PV PI'.split(' '),
														ia
													);
													break;
												case 'appearances':
													wa = ba;
													za = Object(ka.b)(qa, 'appearances');
													for (wa.Ha(); wa.advance(); )
														if (((Ha = wa.Oa()), 'appearance' === Ha)) {
															Ha = wa.ga('name');
															Ia = Object(ka.b)(za, Ha);
															Ha = wa;
															for (Ha.Ha(); Ha.advance(); )
																switch (((Aa = Ha.Oa()), Aa)) {
																	case 'Normal':
																		Object(ka.b)(Ia, 'Normal').data =
																			Ha.current.textContent;
																		break;
																	default:
																		Object(a.j)(
																			'unexpected appearance state: ',
																			Aa
																		);
																}
															Ha.Za();
														} else
															Object(a.j)(
																'unexpected appearances child: ' + Ha
															);
													wa.Za();
													break;
												case 'extra':
													wa = ba;
													za = ia;
													Ha = {};
													for (wa.Ha(); wa.advance(); )
														switch (((Ia = wa.Oa()), Ia)) {
															case 'font':
																Ha.font = y(wa, za(1));
																break;
															default:
																Object(a.j)('unrecognised extra child: ' + Ia);
														}
													wa.Za();
													wa = Ha;
													wa.font && (qa.font = wa.font);
													break;
												case 'captions':
													za = ba;
													wa = {};
													(Ha = za.ga('Normal')) && (wa.Normal = Ha);
													(Ha = za.ga('Rollover')) && (wa.Rollover = Ha);
													(za = za.ga('Down')) && (wa.Down = za);
													qa.captions = wa;
													break;
												default:
													Object(a.j)('unrecognised widget child: ' + wa);
											}
										ba.Za();
										(wa = ra[qa.fieldName])
											? ((qa = b(wa, qa)), ja.push(qa))
											: Object(a.j)(
													'ignoring widget with no corresponding field data: ' +
														qa.fieldName
											  );
										break;
									default:
										Object(a.j)(
											'Unknown element encountered in PDFInfo: ' + qa
										);
								}
								return !0;
							}
							return !1;
						},
						function () {
							ba.Za();
							ha({
								calculationOrder: pa,
								widgets: ja,
								fields: ra,
								documentActions: sa,
								pages: ua,
								custom: [],
							});
						},
						la
					);
				}
				r.r(va);
				r.d(va, 'parse', function () {
					return e;
				});
				var a = r(2),
					f = r(1);
				r.n(f);
				var n = r(123),
					z = r(4),
					w = r(7),
					ea = r(20),
					ka = r(107),
					ca = r(17);
			},
		},
	]);
}.call(this || window));
