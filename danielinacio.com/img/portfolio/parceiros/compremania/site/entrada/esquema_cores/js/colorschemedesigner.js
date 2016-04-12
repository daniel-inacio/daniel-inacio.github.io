var ColorSchemeDesigner = function () {
        var t, u, H, K, L, q, B, I, M, E, v, F, s, h, N;

        function S(a) {
            this.ID = a;
            this.Listeners = {};
            this.addListener = function (a) {
                this.Listeners[a.ID] = a
            };
            this.removeListener = function (a) {
                delete this.Listeners[a.ID]
            };
            this.trigger = function (a, d, c) {
                var e;
                this.SysEvent = a;
                this.Data = d;
                if (c) this.Listeners[c].handleEvent(this);
                else for (e in this.Listeners) this.Listeners[e].handleEvent(this)
            }
        }
        function f(a) {
            this.ID = a.ID;
            this.Content = a.Content;
            this.Hooks = a.Hooks;
            this.Listeners = a.Listeners;
            this.Parent = a.Parent;
            this.UserData = a.UserData;
            this.init = function (a) {
                if (a) this.Parent = a;
                this.Parent && $(this.Parent).append(this.Content);
                this.Hooks && this.initEvents();
                this.Listeners && this.addListeners()
            };
            this.initEvents = function () {
                var a, d, c;
                for (a = 0, d = this.Hooks.length; a < d; a++) c = this.Hooks[a], $(c[0]).bind(c[1], T(e[c[2]], c[3]))
            };
            this.addListeners = function () {
                for (var a in this.Listeners) e[a].addListener(this)
            };
            this.removeListeners = function () {
                for (var a in this.Listeners) e[a].removeListener(this)
            };
            this.handleEvent = function (a) {
                var d = a.ID;
                if (this.Listeners[a.ID].useHandler) d = this.Listeners[a.ID].useHandler;
                this.Listeners[d].handler(a)
            }
        }
        function G(a) {
            this.CtrlList = a.CtrlList;
            this.onHandler = a.onHandler;
            this.offHandler = a.offHandler;
            this.On = !0;
            this.toggle = function (a) {
                var d;
                if (this.On = a) {
                    for (d in this.CtrlList) m[this.CtrlList[d]].addListeners();
                    if (this.onHandler) this.onHandler()
                } else {
                    for (d in this.CtrlList) m[this.CtrlList[d]].removeListeners();
                    this.offHandler && this.offHandler()
                }
            }
        }
        function P(a) {
            return function (b) {
                b.preventDefault();
                a(b)
            }
        }
        function T(a, b) {
            return function (d) {
                d.preventDefault();
                a.trigger(d, b)
            }
        }
        function O(a) {
            if (!a) return "";
            a.match(/[0-9\.\+\-\*\/ ]+/) && (a = eval(a));
            return a
        }
        function J(a, b, d) {
            $.floatbox ? (new $.floatbox({
                content: '<div id="csd3-prompt"><p>' + a + "</p>" + ('<p class="input"><input id="csd3-prompt-input" name="prompt-input" type="text" value="' + b + '"></p>') + '<p class="submit"><button id="csd3-prompt-cancel" class="close-floatbox">Cancel</button> <button id="csd3-prompt-ok" class="close-floatbox">OK</button></p></div>',
                button: "",
                fade: !1,
                boxConfig: {
                    position: $.browser.msie ? "absolute" : "fixed",
                    zIndex: 999,
                    width: "360px",
                    marginLeft: "-180px",
                    height: "auto",
                    top: "33%",
                    left: "50%",
                    backgroundColor: "transparent",
                    display: "none"
                }
            }), $("#csd3-prompt-ok").click(function () {
                d($("#csd3-prompt-input").val())
            }), $("#csd3-prompt-input").keypress(function (a) {
                13 == a.keyCode && $("#csd3-prompt-ok").click()
            }).focus()) : (a = prompt(a, b), null !== a && d(a))
        }
        function n() {
            var a, b;
            a = (new Date).valueOf();
            b = a - M;
            b < N ? E || (E = setTimeout(Q, N - b)) : Q()
        }
        function Q() {
            E && clearTimeout(E);
            E = null;
            M = (new Date).valueOf();
            var a, b, d, g, D, A, i, f, j;
            q.find(".bg-pri").css("background-color", c.Primary.Base.RGB.getCSS());
            for (j = 0; 5 > j; j++) D = c.Primary.Col[j], f = c.Compl ? c.Compl.Col[j] : c.Primary.Col[2], A = c.Sec1 ? c.Sec1.Col[j] : c.Primary.Col[3], i = c.Sec2 ? c.Sec2.Col[j] : c.Primary.Col[4], a = D.RGB, g = f.RGB, b = A.RGB, d = i.RGB, v ? (a = "#" + c.ColorBlind.getHex(a.R, a.G, a.B, v), g = "#" + c.ColorBlind.getHex(g.R, g.G, g.B, v), b = "#" + c.ColorBlind.getHex(b.R, b.G, b.B, v), d = "#" + c.ColorBlind.getHex(d.R, d.G, d.B, v)) : (a = a.getCSS(), g = g.getCSS(), b = b.getCSS(), d = d.getCSS()), q.find(".col-pri-" + j).css("color", a), q.find(".col-compl-" + j).css("color", g), q.find(".col-sec1-" + j).css("color", b), q.find(".col-sec2-" + j).css("color", d), q.find(".bg-pri-" + j).css("background-color", a).each(function () {
                this.paletteInfo = {
                    col: D,
                    out: a
                }
            }), q.find(".bg-compl-" + j).css("background-color", g).each(function () {
                this.paletteInfo = {
                    col: f,
                    out: g
                }
            }), q.find(".bg-sec1-" + j).css("background-color", b).each(function () {
                this.paletteInfo = {
                    col: A,
                    out: b
                }
            }), q.find(".bg-sec2-" + j).css("background-color", d).each(function () {
                this.paletteInfo = {
                    col: i,
                    out: d
                }
            }), q.find(".brd-pri-" + j).css("border-color", a), q.find(".brd-compl-" + j).css("border-color", g), q.find(".brd-sec1-" + j).css("border-color", b), q.find(".brd-sec2-" + j).css("border-color", d);
            j = F = c.serialize();
            64 < j.length && (j = "&lt;ID too long to display&gt;");
			$("#csd3-schemeid").html(j).attr("value", document.location.pathname + "" + F);
            w.On || e.chgHistory.trigger()
        }
        function R(a) {
            var b;
            1 == a ? (a = "sample/index2.html", b = 'Cores Claras | <a href="#" id="link-sample2">Cores Escuras</a>') : (a = "sample/index.html", b = '<a href="#" id="link-sample1">Light page</a> | Dark page');
            b = '<div class="sample-info">' + b;
            c.Sec1 && (b += " \u2022 Click inside the page to swap secondary colors");
            new $.floatbox({
                content: b + '</div><iframe class="sample" scrolling="no" frameborder="0"></iframe>',
                button: '<button type="button" class="close-floatbox">Fechar</button>',
                fade: !1,
                boxConfig: {
                    position: $.browser.msie ? "absolute" : "fixed",
                    zIndex: 999,
                    width: "840px",
                    marginLeft: "-420px",
                    height: "auto",
                    top: "50%",
                    left: "50%",
                    backgroundColor: "transparent",
                    display: "none"
                }
            });
            $("iframe.sample").attr("src", a);
            $("#link-sample1").click(function () {
                ColorSchemeDesigner.broadcast("tabPreview1Click")
            });
            $("#link-sample2").click(function () {
                ColorSchemeDesigner.broadcast("tabPreview2Click")
            })
        }
        N = 100;
        F = "";
        M = 0;
        E = 0;
        s = [0, 0];
        v = 0;
        h = {
            Scheme: 1,
            H: 1,
            Dist: 1,
            dS: 1,
            dV: 1,
            cS: 1,
            cL: 1
        };
        q = void 0;
        B = void 0;
        I = void 0;
        var m, e, w, r, c;
        m = {
            ModelSelect: new f({
                ID: "ModelSelect",
                Content: '<table id="csd3-model"><tr><td><a id="csd3-m1" class="sel" href="#">5 cores</a></td><td><a id="csd3-m2" href="#">10 cores</a></td><td><a id="csd3-m3" href="#">15 cores</a></td><td><a id="csd3-m4" href="#">20 cores</a></td></tr></table>',
                Hooks: [
                    ["#csd3-m1", "click", "setModel", 1],
                    ["#csd3-m2", "click", "setModel", 2],
                    ["#csd3-m3", "click", "setModel", 3],
                    ["#csd3-m4", "click", "setModel", 4],
                    ["#csd3-m5", "click", "setModel", 5],
                    ["#csd3-m6", "click", "setModel", 6]
                ],
                Listeners: {
                    chgModel: {
                        handler: function () {
                            var a = c.Scheme;
                            $("#csd3-model a.sel").removeClass("sel");
                            $("#csd3-" + a).addClass("sel").blur();
                            B.removeClass().addClass("scheme-" + a)
                        }
                    }
                }
            }),
            ColorWheel: new f({
                ID: "ColorWheel",
                UserData: {
                    dotSize: 7,
                    wheelMid: {
                        X: 190,
                        Y: 190
                    }
                },
                Content: '<div id="csd3-wheel"><div id="csd3-sample" class="bg-pri-0"></div><div id="csd3-wh1"></div><div id="csd3-wh2"></div><div id="csd3-wh3"></div><div id="csd3-wh4"></div><img class="dot" id="csd3-dot1" src="img/e.png"><img class="dot" id="csd3-dot2" src="img/e.png"><img class="dot" id="csd3-dot3" src="img/e.png"><img class="dot" id="csd3-dot4" src="img/e.png"></div>',
                Hooks: [
                    ["#csd3-wheel", "mousedown", "dragHue"],
                    ["#csd3-dot1", "mousedown", "dotClick", 1],
                    ["#csd3-dot2", "mousedown", "dotClick", 2],
                    ["#csd3-dot3", "mousedown", "dotClick", 3],
                    ["#csd3-dot4", "mousedown", "dotClick", 4],
                    ["#csd3-dot1", "dblclick", "enterHue", "pri"],
                    ["#csd3-dot2", "dblclick", "enterHue", "compl"],
                    ["#csd3-dot3, #csd3-dot4", "dblclick", "enterDist"]
                ],
                Listeners: {
                    dragHue: {
                        handler: function (a) {
                            w.start(a, $("#csd3-wheel"), function (b, d) {
                                var g, D, A;
                                g = Math.round((180 * Math.atan2(-b, d) / Math.PI + 180) % 360);
                                D = Math.sqrt(b * b + d * d);
                                if (0 < D && 160 > D) {
                                    A = 1;
                                    if (w.Data.dot) A = w.Data.dot;
                                    1 == A || 2 == A ? (125 < D && (g = 135 > D ? 15 * Math.floor((g - 7.5) / 15 + 1) % 360 : 30 * Math.floor((g - 15) / 30 + 1) % 360), 2 == A && (g = (g + 180) % 360), e.setHue.trigger(a, g)) : ("m4" == c.Scheme && 4 == A && (g = (g + 180) % 360), e.setDist.trigger(a, g))
                                }
                            }, null)
                        }
                    },
                    chgModel: {
                        handler: function () {
                            $("#csd3-dot2").css("display", Boolean(c.Compl) ? "block" : "none");
                            $("#csd3-dot3,#csd3-dot4").css("display", Boolean(c.Sec1) ? "block" : "none");
                            $("#csd3-dist-val").css("display", Boolean(c.Sec1) ? "block" : "none")
                        }
                    },
                    chgHue: {
                        handler: function () {
                            function a(a, c) {
                                if (c) {
                                    var e;
                                    e = 2 * ((c.Col[0].HSV.H - 90) / 360) * Math.PI;
                                    x = Math.round(b.wheelMid.X + 109 * Math.cos(e)) - b.dotSize;
                                    y = Math.round(b.wheelMid.Y + 109 * Math.sin(e)) - b.dotSize;
                                    $("#csd3-dot" + a).css("left", x + "px").css("top", y + "px")
                                }
                            }
                            var b = m.ColorWheel.UserData;
                            a(1, c.Primary);
                            a(2, c.Compl);
                            a(3, c.Sec1);
                            a(4, c.Sec2)
                        }
                    },
                    chgDist: {
                        handler: function (a) {
                            e.chgHue.trigger(a, null, "ColorWheel")
                        }
                    }
                }
            }),
            HueVal: new f({
                ID: "HueVal",
                Content: '<div class="val" id="csd3-hue-val">Grau da Matiz: <span>0\u00b0</span></div>',
                Hooks: [
                    ["#csd3-hue-val", "click", "enterHue"]
                ],
                Listeners: {
                    chgHue: {
                        handler: function () {
                            $("#csd3-hue-val span").text(c.Primary.Col[0].HSV.H + "\u00b0")
                        }
                    }
                }
            }),
            HueCompl: new f({
                ID: "HueCompl",
                Content: '<div class="val" id="csd3-hue-compl">oposto</div>',
                Hooks: [
                    ["#csd3-hue-compl", "click", "complHue"]
                ],
                Listeners: null
            }),
            DistVal: new f({
                ID: "DistVal",
                Content: '<div class="val" id="csd3-dist-val">Angle: <span>0\u00b0</span></div>',
                Hooks: [
                    ["#csd3-dist-val", "click", "enterDist"]
                ],
                Listeners: {
                    chgDist: {
                        handler: function () {
                            $("#csd3-dist-val span").text(c.Dist + "\u00b0")
                        }
                    }
                }
            }),
            RGBVal: new f({
                ID: "RGBVal",
                Content: '<div class="val" id="csd3-rgb-val">RGB: <span>FF0000</span></div>',
                Hooks: [
                    ["#csd3-rgb-val", "click", "enterRGB"]
                ],
                Listeners: {
                    chgHue: {
                        handler: function () {
                            $("#csd3-rgb-val span").text(c.Primary.Col[0].RGB.getHex())
                        }
                    }
                }
            }),
            RGBParts: new f({
                ID: "RGBParts",
                Content: '<table id="csd3-rgb-parts"><tr><th>R:</th><td id="csd3-rgb-r">100 %</td></tr><tr><th>G:</th><td id="csd3-rgb-g">0 %</td></tr><tr><th>B:</th><td id="csd3-rgb-b">0 %</td></tr></table>',
                Hooks: null,
                Listeners: {
                    chgHue: {
                        handler: function () {
                            var a = c.Primary.Col[0].RGB;
                            $("#csd3-rgb-r").text(Math.round(100 * (a.R / 255)) + " %");
                            $("#csd3-rgb-g").text(Math.round(100 * (a.G / 255)) + " %");
                            $("#csd3-rgb-b").text(Math.round(100 * (a.B / 255)) + " %")
                        }
                    }
                }
            }),
            VarPresets: new f({
                ID: "VarPresets",
                Content: '<div id="csd3-presets">Modelos: <select></select></div>',
                Hooks: [
                    ["#csd3-presets select", "change", "presetSelect"]
                ],
                Listeners: {
                    init: {
                        handler: function () {
                            var a, b, d = '<option value="">- personalizado -</option>';
                            for (a in c.Presets) b = c.Presets[a], d += '<option value="' + a + '"', "default" == a && (d += " selected"), d += ">" + b.name + "</option>";
                            $("#csd3-presets select").append(d).styledSelect()
                        }
                    },
                    presetSelect: {
                        handler: function (a) {
                            e.setPreset.trigger(a, $("#csd3-presets select").val())
                        }
                    },
                    chgSV: {
                        handler: function (a) {
                            if ("preset" != a.Data && 0 != $("#csd3-presets select").get(0).selectedIndex) $("#csd3-presets select").get(0).selectedIndex = 0, $("#csd3-presets select").trigger("change")
                        }
                    },
                    chgC: {
                        useHandler: "chgSV"
                    }
                }
            }),
            SVSqrSlider: new f({
                ID: "SVSqrSlider",
                UserData: {
                    dotSize: 7,
                    sliderMid: {
                        X: 95,
                        Y: 95
                    },
                    sliderWidth: 140
                },
                Content: '<div id="csd3-saturation-cover"><h4>Esquema de<br>Brilho e Saturação</h4><div id="csd3-saturation"><div class="slider"><img class="dot" id="csd3-dots" src="img/e.png"></div></div></div>',
                Hooks: [
                    ["#csd3-saturation", "mousedown", "dragSV"],
                    ["#csd3-dots", "mousedown", "dotClick", 1]
                ],
                Listeners: {
                    dragSV: {
                        handler: function (a) {
                            w.start(a, $("#csd3-saturation"), function (b, d) {
                                var c;
                                c = m.SVSqrSlider.UserData;
                                b /= c.sliderWidth;
                                d /= c.sliderWidth; - 0.5 > b && (b = -0.5);
                                0.5 < b && (b = 0.5); - 0.5 > d && (d = -0.5);
                                0.5 < d && (d = 0.5);
                                d = -d;
                                e.setSV.trigger(a, {
                                    s: 0.4 < b ? (b - 0.4) / 0.1 : (b + 0.5) / 0.9 - 1,
                                    v: 0.4 < d ? (d - 0.4) / 0.1 : (d + 0.5) / 0.9 - 1
                                })
                            }, null)
                        }
                    },
                    chgSV: {
                        handler: function () {
                            var a, b, d = m.SVSqrSlider.UserData;
                            a = c.dS;
                            b = c.dV;
                            a = d.sliderMid.X + (0 > a ? 0.9 * (a + 1) - 0.5 : 0.4 + 0.1 * a) * d.sliderWidth - d.dotSize + 1;
                            b = d.sliderMid.Y + -(0 > b ? 0.9 * (b + 1) - 0.5 : 0.4 + 0.1 * b) * d.sliderWidth - d.dotSize + 3;
                            $("#csd3-dots").css("left", a + "px").css("top", b + "px")
                        }
                    },
                    chgHue: {
                        handler: function () {
                            $("#csd3-saturation").css("background-color", c.Primary.Base.RGB.getCSS())
                        }
                    }
                }
            }),
            CSqrSlider: new f({
                ID: "CSqrSlider",
                UserData: {
                    dotSize: 7,
                    sliderMid: {
                        X: 95,
                        Y: 95
                    },
                    sliderWidth: 140
                },
                Content: '<div id="csd3-contrast-cover"><h4>Esquema de <br>Contraste</h4><div id="csd3-contrast" class="slider"><img class="dot" id="csd3-dotc" src="img/e.png"></div></div>',
                Hooks: [
                    ["#csd3-contrast", "mousedown", "dragC"],
                    ["#csd3-dotc", "mousedown", "dotClick", 1]
                ],
                Listeners: {
                    dragC: {
                        handler: function (a) {
                            w.start(a, $("#csd3-contrast"), function (b, d) {
                                var c = m.CSqrSlider.UserData,
                                    b = b / c.sliderWidth,
                                    d = d / c.sliderWidth; - 0.5 > b && (b = -0.5);
                                0.5 < b && (b = 0.5); - 0.5 > d && (d = -0.5);
                                0.5 < d && (d = 0.5);
                                e.setC.trigger(a, {
                                    cL: b + 0.5,
                                    cS: 0.5 - d
                                })
                            }, null)
                        }
                    },
                    chgC: {
                        handler: function () {
                            var a = m.CSqrSlider.UserData,
                                b = c.cL - 0.5,
                                d = 0.5 - c.cS,
                                b = a.sliderMid.X + b * a.sliderWidth - a.dotSize + 1,
                                d = a.sliderMid.Y + d * a.sliderWidth - a.dotSize + 3;
                            $("#csd3-dotc").css("left", b + "px").css("top", d + "px")
                        }
                    },
                    setMVoff: {
                        useHandler: "chgC"
                    }
                }
            }),
            ManVarSqrSlider: new f({
                ID: "ManVarSqrSlider",
                UserData: {
                    dotSize: 7,
                    sliderMid: {
                        X: 95,
                        Y: 95
                    },
                    sliderWidth: 140
                },
                Content: '<div id="csd3-manvar-cover"><h4>Selecionar variação<br>Saturação/Brilho</h4><div id="csd3-manvar"><div class="slider"><img class="dotv" id="csd3-dotv0" src="img/e.png"><img class="dotv" id="csd3-dotv1" src="img/e.png"><img class="dotv" id="csd3-dotv2" src="img/e.png"><img class="dotv" id="csd3-dotv3" src="img/e.png"><img class="dotv" id="csd3-dotv4" src="img/e.png"></div></div><div id="csd3-manvar-list"></div></div>',
                Hooks: [
                    ["#csd3-manvar", "mousedown", "dragMV"],
                    ["#csd3-dotv0", "mousedown", "dotClick", 0],
                    ["#csd3-dotv1", "mousedown", "dotClick", 1],
                    ["#csd3-dotv2", "mousedown", "dotClick", 2],
                    ["#csd3-dotv3", "mousedown", "dotClick", 3],
                    ["#csd3-dotv4", "mousedown", "dotClick", 4]
                ],
                Listeners: {
                    chgSV: {
                        handler: function () {
                            function a(a, b, c) {
                                var e, i;
                                i = '<a class="ttl" rel="' + b + '" href="#">' + c + ":</a>" + ('<div class="var-set" id="csd3-var-set-' + b + '">');
                                for (c = 0; 5 > c; c++) a.getVarRGB(c).getHex(), e = b + "-" + c, i += '<a class="col" rel="' + e + '" href="#"><img src="img/e.png" class="cbox bg-' + e + '" rel="' + e + '">', i = 0 == c ? i + "Cor base" : i + ("Variação " + c), i += "</a>";
                                return i + "</div>"
                            }
                            var b;
                            b = "" + a(c.Primary, "pri", "Cores Primárias");
                            c.Sec1 && (b += a(c.Sec1, "sec1", "Cores Secundárias A"));
                            c.Sec2 && (b += a(c.Sec2, "sec2", "Cores Secundárias B"));
                            c.Compl && (b += a(c.Compl, "compl", "Cores Complementares"));
                            $("#csd3-manvar-list").html(b);
                            n();
                            $("#csd3-manvar-list a.ttl").click(function () {
                                e.selMVcol.trigger(null, $(this).attr("rel"))
                            });
                            $("#csd3-manvar-list a.col").mouseenter(function () {
                                var a = B.find(".bg-" + $(this).attr("rel")).addClass("hilite");
                                a.html() || a.addClass("was-empty").html('<div class="text"><span class="row1">Texto</span> <span class="row2">Texto</span> <span class="row3">Texto</span></div>')
                            }).mouseleave(function () {
                                var a = B.find(".bg-" + $(this).attr("rel")).removeClass("hilite");
                                a.hasClass("was-empty") && a.removeClass("was-empty").html("")
                            }).click(function () {
                                e.selMVvar.trigger(null, $(this).attr("rel"))
                            });
                            $("#csd3-manvar-list a.ttl").eq(0).click()
                        }
                    },
                    chgHue: {
                        useHandler: "chgSV"
                    },
                    selMVcol: {
                        handler: function (a) {
                            var b, d, g;
                            b = a.Data;
                            d = c.ColorHash[b];
                            g = $("#csd3-manvar-list a.ttl").filter(function () {
                                return $(this).attr("rel") == b
                            });
                            for (a = 0; 5 > a; a++) s = [d, a], e.chgMV.trigger();
                            $("#csd3-manvar-list .ttl.sel").removeClass("sel");
                            g.addClass("sel");
                            if (g.next(".var-set").hasClass("sel")) return !1;
                            $("#csd3-manvar-list .var-set.sel").removeClass("sel").slideUp("fast");
                            g.blur().next(".var-set").addClass("sel").slideDown("fast").find("a.col").eq(0).click()
                        }
                    },
                    selMVvar: {
                        handler: function (a) {
                            var b;
                            b = a.Data;
                            a = $("#csd3-manvar-list a.col").filter(function () {
                                return $(this).attr("rel") == b
                            });
                            $("#csd3-manvar-list a.col.sel").removeClass("sel");
                            a.blur().addClass("sel");
                            s = b.split("-");
                            s[0] = c.ColorHash[s[0]];
                            $("#csd3-manvar").css("background-color", c.getColorByIdx(s[0]).Base.RGB.getCSS());
                            $("#csd3-manvar .dotv.sel").removeClass("sel");
                            $("#csd3-manvar #csd3-dotv" + s[1]).addClass("sel");
                            e.chgMV.trigger()
                        }
                    },
                    dragMV: {
                        handler: function (a) {
                            w.start(a, $("#csd3-manvar"), function (b, c) {
                                var g = m.ManVarSqrSlider.UserData,
                                    b = b / g.sliderWidth,
                                    c = c / g.sliderWidth; - 0.5 > b && (b = -0.5);
                                0.5 < b && (b = 0.5); - 0.5 > c && (c = -0.5);
                                0.5 < c && (c = 0.5);
                                e.setMV.trigger(a, {
                                    colNr: s[0],
                                    varNr: s[1],
                                    s: b + 0.5,
                                    v: -c + 0.5
                                })
                            }, null)
                        }
                    },
                    chgMV: {
                        handler: function () {
                            var a, b, d = m.ManVarSqrSlider.UserData;
                            a = c.getVarOverlay(s[0], s[1]);
                            b = a[0] - 0.5;
                            y = 0.5 - a[1];
                            b = d.sliderMid.X + b * d.sliderWidth - d.dotSize + 1;
                            y = d.sliderMid.Y + y * d.sliderWidth - d.dotSize + 3;
                            $("#csd3-dotv" + s[1]).css("left", b + "px").css("top", y + "px")
                        }
                    }
                }
            }),
            SchemeInfo: new f({
                ID: "SchemeInfo",
                Content: '<div id="csd3-coltable"></div>',
                Hooks: null,
                Listeners: {
                    chgPalette: {
                        handler: function () {
                            function a(a, b, c) {
                                for (var e, i, f = "<h4>" + c + ":</h4>", j = "", h = "", m = {}, c = 0; 5 > c; c++) e = a.getVarRGB(c), i = e.getName(), e = e.getHex(), m[e] || (m[e] = !0, i = i.length ? i.join("<br>") + "<br>(" + e + ")" : e, j += '<td class="cbox bg-' + b + "-" + c + '"></td>', h += '<td class="code">' + i + "</td>");
                                return f + ('<table class="info-table"><tr>' + j + "</tr><tr>" + h + "</tr></table>")
                            }
                            var b;
                            b = "" + a(c.Primary, "pri", "Cores Primárias");
                            c.Sec1 && (b += a(c.Sec1, "sec1", "Cores Secundárias A"));
                            c.Sec2 && (b += a(c.Sec2, "sec2", "Cores Secundárias B"));
                            c.Compl && (b += a(c.Compl, "compl", "Cores Complementares"));
                            2 == c.Conversion ? b += '<p class="info">Color match is only approximative. \u00a9\u00a0Pantone, Inc. All rights reserved.</p>' : 3 == c.Conversion ? b += '<p class="info">Color match is only approximative. \u00a9\u00a0RAL GmbH. All rights reserved.</p>' : 4 == c.Conversion && (b += '<p class="info">Color match is only approximative. \u00a9\u00a0Opaltone.com All rights reserved.</p>');
                            $("#csd3-coltable").html(b);
                            n()
                        }
                    }
                }
            }),
            TabWheel: new f({
                ID: "TabWheel",
                Content: '<a id="csd3-tab-wheel" href="#">Tonalidade</a>',
                Hooks: [
                    ["#csd3-tab-wheel", "click", "tabWheelClick"]
                ],
                Listeners: {
                    tabWheelClick: {
                        handler: function () {
                            t.toggle(1);
                            u.toggle(0);
                            H.toggle(0);
                            e.chgModel.trigger();
                            e.chgHue.trigger();
                            e.chgDist.trigger();
                            n()
                        }
                    }
                }
            }),
            TabVars: new f({
                ID: "TABVars",
                Content: '<a id="csd3-tab-vars" href="#">Ajustes</a>',
                Hooks: [
                    ["#csd3-tab-vars", "click", "tabVarsClick"]
                ],
                Listeners: {
                    tabVarsClick: {
                        handler: function () {
                            t.toggle(0);
                            u.toggle(1);
                            H.toggle(0);
                            e.chgHue.trigger();
                            e.chgSV.trigger();
                            e.chgC.trigger();
                            n()
                        }
                    }
                }
            }),
            TabInfo: new f({
                ID: "TabInfo",
                Content: '<a id="csd3-tab-info" href="#">Sua lista de cores</a>',
                Hooks: [
                    ["#csd3-tab-info", "click", "tabInfoClick"]
                ],
                Listeners: {
                    tabInfoClick: {
                        handler: function () {
                            t.toggle(0);
                            u.toggle(0);
                            H.toggle(1);
                            e.chgPalette.trigger()
                        }
                    }
                }
            }),
            TabPreview0: new f({
                ID: "TabPreview0",
                Content: '<a id="csd3-tab-preview0" class="sel" href="#">Vizualização</a>',
                Hooks: [
                    ["#csd3-showtext-btn", "click", "PreviewTextToggle"]
                ],
                Listeners: {
                    PreviewTextToggle: {
                        handler: function () {
                            var a, b = $("#csd3-showtext-btn");
                            b.hasClass("sel") ? (a = "", b.removeClass("sel").html("Show sample text")) : (a = '<div class="text"><span class="row1">Text</span> <span class="row2">Text</span> <span class="row3">Text</span></div>', b.addClass("sel").html("Hide sample text"));
                            $("#csd3-preview-palette td").html(a)
                        }
                    }
                }
            }),
            TabPreview1: new f({
                ID: "TabPreview1",
                Content: '<a id="csd3-tab-preview1" style=" background-color: #FFF !important;" href="#"></a>',
                Hooks: [
                    ["#csd3-tab-preview1", "click", "tabPreview1Click"]
                ],
                Listeners: {
                    tabPreview1Click: {
                        handler: function () {
                            R(1)
                        }
                    }
                }
            }),
            TabPreview2: new f({
                ID: "TabPreview2",
                Content: '<a id="csd3-tab-preview2" style=" background-color: #FFF !important;" href="#"></a>',
                Hooks: [
                    ["#csd3-tab-preview2", "click", "tabPreview2Click"]
                ],
                Listeners: {
                    tabPreview2Click: {
                        handler: function () {
                            R(2)
                        }
                    }
                }
            }),
            TabC1: new f({
                ID: "TabC1",
                Content: '<a id="csd3-tab-c1" class="sel" href="#">Paleta</a>',
                Hooks: [
                    ["#csd3-tab-c1", "click", "setMVoff"]
                ],
                Listeners: {
                    setMVoff: {
                        handler: function () {
                            K.toggle(1);
                            L.toggle(0);
                            e.resetMV.trigger();
                            e.chgHue.trigger();
                            e.chgSV.trigger()
                        }
                    }
                }
            }),
            TabC2: new f({
                ID: "TabC2",
                Content: '<a id="csd3-tab-c2" href="#">Ajustar variações</a>',
                Hooks: [
                    ["#csd3-tab-c2", "click", "setMVon"]
                ],
                Listeners: {
                    setMVon: {
                        handler: function () {
                            K.toggle(0);
                            L.toggle(1);
                            e.chgHue.trigger()
                        }
                    }
                }
            }),
            MenuHistory: new f({
                ID: "MenuHistory",
                Content: null,
                Hooks: null,
                Listeners: {
                    init: {
                        handler: function () {
                            $("#csd3-menu-undo,#csd3-menu-redo").addClass("disabled")
                        }
                    },
                    historyUpdated: {
                        handler: function () {
                            r.isFirst() ? $("#csd3-menu-undo").addClass("disabled") : $("#csd3-menu-undo").removeClass("disabled");
                            r.isLast() ? $("#csd3-menu-redo").addClass("disabled") : $("#csd3-menu-redo").removeClass("disabled")
                        }
                    }
                }
            }),
            MenuVision: new f({
                ID: "MenuVision",
                Content: null,
                Hooks: null,
                Listeners: {
                    init: {
                        handler: function () {
                            var a, b, d = "";
                            for (a = 0, b = c.ColorBlind.typeDesc.length; a < b; a++) p = c.ColorBlind.typeDesc[a], d += '<li><a class="vision-cb' + a + '" href="#" rel="' + a + '">' + p + "</a></li>", 0 == a && (d += '<li class="sep"><hr></li>');
                            $("#csd3-submenu-vision").html(d);
                            $("#csd3-submenu-vision li a").click(function () {
                                e.setVision.trigger(null, $(this).attr("rel"))
                            });
                            e.setVision.trigger(null, 0)
                        }
                    }
                }
            }),
            VisionWarning: new f({
                ID: "VisionWarning",
                Content: '<div id="csd3-vision-warning" title="Vision simulation / color conversion active"></div>',
                Hooks: null,
                Listeners: {
                    chgVision: {
                        handler: function () {
                            var a = 0 < v || 0 < c.Conversion;
                            $("#csd3-vision-warning").toggle(a)
                        }
                    }
                }
            }),
            Tooltips: new f({
                ID: "Tooltips",
                UserData: {
                    disabled: !1,
                    active: !1
                },
                Content: "",
                Hooks: null,
                Listeners: {
                    init: {
                        handler: function () {
                            if (!ColorSchemeDesignerTooltips) $("#csd3-menu-tooltips").addClass("disabled"), m.Tooltips.UserData.disabled = !0
                        }
                    },
                    toggleTooltips: {
                        handler: function () {
                            var a = m.Tooltips.UserData;
                            if (!a.disabled) if (a.active) $("#csd3-menu-help, #csd3-menu-tooltips").removeClass("sel"), $(".has-tooltip").removeClass("has-tooltip").tooltipOff(), a.active = !1;
                            else {
                                $("#csd3-menu-help, #csd3-menu-tooltips").addClass("sel");
                                a.active = !0;
                                for (var b in ColorSchemeDesignerTooltips) $("#" + b).addClass("has-tooltip").tooltip({
                                    bodyHandler: function () {
                                        return ColorSchemeDesignerTooltips[$(this).attr("id")]
                                    },
                                    id: "csd3-tooltip",
                                    showURL: !1,
                                    delay: 500,
                                    fade: 100,
                                    track: !0,
                                    left: -50
                                })
                            }
                        }
                    }
                }
            }),
            ColorTooltips: new f({
                ID: "ColorTooltips",
                Content: "",
                Hooks: null,
                Listeners: {
                    init: {
                        handler: function () {
                            $(".cbox").tooltip({
                                bodyHandler: function () {
                                    var a = this.paletteInfo.out,
                                        b = "#" + this.paletteInfo.col.RGB.getHex();
                                    v && (b += "<br>(as " + a + ")");
                                    return b
                                },
                                id: "csd3-tooltip",
                                showURL: !1,
                                delay: 0,
                                fade: 0,
                                track: !0,
                                extraClass: "color",
                                top: 15,
                                left: 10
                            })
                        }
                    },
                    chgHistory: {
                        useHandler: "init"
                    }
                }
            }),
            GAnalytics: new f({
                ID: "GAnalytics",
                Content: "",
                Hooks: null,
                Listeners: {
                    toggleTooltips: {
                        handler: function () {
                            m.Tooltips.UserData.active && pageTracker && pageTracker._trackPageview("/pseudo/tooltips.html")
                        }
                    }
                }
            })
        };
        t = new G({
            CtrlList: "ColorWheel,HueVal,HueCompl,DistVal,RGBVal,RGBParts".split(","),
            onHandler: function () {
                $("#csd3-pane-wheel").fadeIn(400);
                $("#csd3-tab-wheel").addClass("sel").blur()
            },
            offHandler: function () {
                $("#csd3-pane-wheel").fadeOut(200);
                $("#csd3-tab-wheel").removeClass("sel")
            }
        });
        u = new G({
            CtrlList: ["VarPresets", "SVSqrSlider", "CSqrSlider"],
            onHandler: function () {
                $("#csd3-pane-vars").fadeIn(400);
                $("#csd3-tab-vars").addClass("sel").blur();
                $("#csd3-presets select").trigger("resize")
            },
            offHandler: function () {
                $("#csd3-pane-vars").fadeOut(200);
                $("#csd3-tab-vars").removeClass("sel")
            }
        });
        H = new G({
            CtrlList: ["SchemeInfo"],
            onHandler: function () {
                $("#csd3-pane-info").fadeIn(400);
                $("#csd3-tab-info").addClass("sel").blur()
            },
            offHandler: function () {
                $("#csd3-pane-info").fadeOut(200);
                $("#csd3-tab-info").removeClass("sel")
            }
        });
        K = new G({
            CtrlList: ["SVSqrSlider", "CSqrSlider"],
            onHandler: function () {
                $("#csd3-c1-cover").fadeIn(400);
                $("#csd3-tab-c1").addClass("sel").blur()
            },
            offHandler: function () {
                $("#csd3-c1-cover").fadeOut(200);
                $("#csd3-tab-c1").removeClass("sel")
            }
        });
        L = new G({
            CtrlList: ["ManVarSqrSlider"],
            onHandler: function () {
                $("#csd3-c2-cover").fadeIn(400);
                $("#csd3-tab-c2").addClass("sel").blur()
            },
            offHandler: function () {
                $("#csd3-c2-cover").fadeOut(200);
                $("#csd3-tab-c2").removeClass("sel")
            }
        });
        m.Core = new f({
            ID: "Core",
            Content: null,
            Hooks: null,
            Listeners: {
                loadSchemeByURL: {
                    handler: function () {
                        e.historyReset.trigger();
                        var a = document.location.hash.substring(1);
                        a ? e.loadScheme.trigger(null, {
                            SchemeID: a
                        }) : e.chgAll.trigger()
                    }
                },
                loadScheme: {
                    handler: function (a) {
                        a.Data.LockHistory && r.lock();
                        c.unserialize(a.Data.SchemeID);
                        e.chgAll.trigger();
                        a.Data.LockHistory && r.unlock()
                    }
                },
                randomScheme: {
                    handler: function () {
                        var a, b, d, g, f, A, i;
                        a = h.Scheme ? "m" + Math.ceil(6 * Math.random()) : c.Scheme;
                        b = h.H ? Math.floor(360 * Math.random()) : c.H;
                        d = h.Dist ? c.SchemeModel.minD + Math.round(Math.random() * (c.SchemeModel.maxD - c.SchemeModel.minD)) : c.Dist;
                        g = h.dS ? -1 + 2 * Math.random() : c.dS;
                        f = h.dV ? -1 + 2 * Math.random() : c.dV;
                        A = h.cS ? Math.random() : c.cS;
                        i = h.cL ? Math.random() : c.cL;
                        c.setAll({
                            Scheme: a,
                            Conversion: c.Conversion,
                            H: b,
                            Dist: d,
                            dS: g,
                            dV: f,
                            cS: A,
                            cL: i
                        });
                        e.chgAll.trigger()
                    }
                },
                chgAll: {
                    handler: function () {
                        e.chgModel.trigger();
                        e.chgHue.trigger();
                        e.chgDist.trigger();
                        c.UseVarsOverlay ? e.setMVon.trigger() : e.setMVoff.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                setModel: {
                    handler: function (a) {
                        c.setScheme("m" + a.Data);
                        e.chgModel.trigger();
                        e.chgHue.trigger();
                        e.chgDist.trigger();
                        e.setMVoff.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                setHue: {
                    handler: function (a) {
                        c.setHue(a.Data);
                        e.chgHue.trigger();
                        e.setMVoff.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                setHex: {
                    handler: function (a) {
                        c.setHex(a.Data);
                        e.chgHue.trigger();
                        e.setMVoff.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                setDist: {
                    handler: function (a) {
                        c.setDist(a.Data);
                        e.chgDist.trigger();
                        e.setMVoff.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                setDistNum: {
                    handler: function (a) {
                        c.setDistNum(a.Data);
                        e.chgDist.trigger();
                        e.setMVoff.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                setPreset: {
                    handler: function (a) {
                        a.Data && (c.usePreset(a.Data), e.chgPalette.trigger(), e.setMVoff.trigger(), e.chgSV.trigger(a, "preset"), e.chgC.trigger(a, "preset"), n())
                    }
                },
                setSV: {
                    handler: function (a) {
                        c.setSV(a.Data.s, a.Data.v);
                        e.chgSV.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                setC: {
                    handler: function (a) {
                        c.setContrast(a.Data.cS, a.Data.cL);
                        e.chgC.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                setMV: {
                    handler: function (a) {
                        c.setVarOverlay(a.Data.colNr, a.Data.varNr, a.Data.s, a.Data.v);
                        e.chgMV.trigger();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                resetMV: {
                    handler: function () {
                        c.resetVarsOverlay();
                        e.chgPalette.trigger();
                        n()
                    }
                },
                enterHue: {
                    handler: function (a) {
                        var b;
                        "compl" == a.Data ? J("Enter complement hue (0\u00b0\u2013360\u00b0)", (c.H + 180) % 360, function (a) {
                            b = parseInt(O(a), 10) % 360;
                            0 <= b && 360 >= b && e.setHue.trigger(null, (b + 180) % 360)
                        }) : J("Enter hue (0\u00b0\u2013360\u00b0)", c.H, function (a) {
                            b = parseInt(O(a), 10) % 360;
                            0 <= b && 360 >= b && e.setHue.trigger(null, b % 360)
                        })
                    }
                },
                complHue: {
                    handler: function () {
                        e.setHue.trigger(null, (c.H + 180) % 360)
                    }
                },
                enterDist: {
                    handler: function () {
                        var a, b = c.SchemeModel.minD,
                            d = c.SchemeModel.maxD;
                        J("Enter Distance/Angle (" + b + "\u00b0\u2013" + d + "\u00b0)", c.Dist, function (c) {
                            a = Math.abs(parseInt(O(c), 10));
                            a >= b && a <= d && e.setDistNum.trigger(null, a)
                        })
                    }
                },
                enterRGB: {
                    handler: function () {
                        J("Enter RGB value (000000\u2013FFFFFF)", c.Primary.getVarRGB(0).getHex(), function (a) {
                            a && a.match(/^\s*[0-9a-fA-F]{6}\s*$/) && e.setHex.trigger(null, a)
                        })
                    }
                },
                randomPrefs: {
                    handler: function () {
                        function a(a, b, c) {
                            return '<p class="input chkbox"><input id="csd3-' + a + '" type="checkbox"' + (c ? " checked" : "") + '> <label for="' + a + '">' + b + "</label></p>"
                        }
                        var b;
                        b = '<div id="csd3-prompt"><h4>Randomize Parameters:</h4>' + a("rnd-scheme", "Color scheme model", h.Scheme);
                        b += a("rnd-h", "Hue", h.H);
                        b += a("rnd-d", "Angle/Distance", h.Dist);
                        b += a("rnd-ds", "Saturation", h.dS);
                        b += a("rnd-dv", "Brightness", h.dV);
                        b += a("rnd-cs", "Contrast (Shadows)", h.cS);
                        b += a("rnd-cl", "Contrast (Lights)", h.cL);
                        new $.floatbox({
                            content: b + '<p class="submit"><button id="csd3-prompt-cancel" class="close-floatbox">Cancel</button> <button id="csd3-prompt-ok" class="close-floatbox">OK</button></p></div>',
                            button: "",
                            fade: !1,
                            boxConfig: {
                                position: $.browser.msie ? "absolute" : "fixed",
                                zIndex: 999,
                                width: "360px",
                                marginLeft: "-180px",
                                height: "auto",
                                top: "33%",
                                left: "50%",
                                backgroundColor: "transparent",
                                display: "none"
                            }
                        });
                        $("#csd3-prompt-ok").click(function () {
                            h.Scheme = $("#csd3-rnd-scheme:checked").length;
                            h.H = $("#csd3-rnd-h:checked").length;
                            h.Dist = $("#csd3-rnd-d:checked").length;
                            h.dS = $("#csd3-rnd-ds:checked").length;
                            h.dV = $("#csd3-rnd-dv:checked").length;
                            h.cS = $("#csd3-rnd-cs:checked").length;
                            h.cL = $("#csd3-rnd-cl:checked").length
                        });
                        $("#csd3-prompt-input").keypress(function (a) {
                            13 == a.keyCode && $("#csd3-prompt-ok").click()
                        }).focus().select()
                    }
                },
                dotClick: {
                    handler: function (a) {
                        w.Data.dot = a.Data
                    }
                },
                dotRelease: {
                    handler: function () {
                        w.Data.dot = null
                    }
                },
                setVision: {
                    handler: function (a) {
                        v = parseInt(a.Data, 10);
                        $("#csd3-menu-vision").toggleClass("sel", 0 < v);
                        $("#csd3-submenu-vision a.sel").removeClass("sel");
                        $("#csd3-submenu-vision a.vision-cb" + v).addClass("sel");
                        e.chgVision.trigger();
                        n()
                    }
                },
                setConversion: {
                    handler: function (a) {
                        a = a.Data;
                        2 == a ? alert("Pantone\u2122 color space was removed on Pantone LLC request.") : 3 == a ? alert("RAL\u2122 color space was removed on RAL gGmbH request.") : ($("#csd3-menu-convert").toggleClass("sel", 0 < a), $("#csd3-submenu-convert a.sel").removeClass("sel"), $("#csd3-menu-convert-" + a).addClass("sel"), c.setConversion(a), e.chgAll.trigger(), e.chgVision.trigger(), n())
                    }
                },
                setExport: {
                    handler: function (a) {
                        function b(a, b, c) {
                            for (var e, i, f, c = '"' + b + '":{"ttl":"' + c + '","col":[', b = 0; 5 > b; b++) e = a.getVarRGB(b), i = e.getHex(), f = e.getName(), 0 < b && (c += ","), c += '{"hex":"' + i + '","r":' + e.R + ',"g":' + e.G + ',"b":' + e.B + ',"name":[', f.length && (c += '"' + f.join('","') + '"'), c += "]}";
                            return c + "]}"
                        }
                        a = '{"type":"' + a.Data + '","id":"' + F + '","colorspace":"' + ["RGB", "RGB (Web Safe Colors)", "Pantone (TM) Colors", "RAL (TM) Colors", "Opaltone (R) Colors"][c.Conversion] + '","colorspaceinfo":"' + ["", "RGB color space reduced to 216 web safe color set", "Copyright (c) Pantone, Inc. All rights reserved. The color match is only aproximative, you get just an impression of what the Pantone colors could look like. Pantone guide is the only reliable source to see the colors.", "Copyright (c) RAL GmbH. All rights reserved. The color match is only aproximative. Use the real RAL color cards and collections to see the colors.", "Copyright (c) Opaltone Australasia Pty. Ltd. All rights reserved. The color match is only aproximative. More info on www.opaltone.com."][c.Conversion] + '","scheme":{';
                        a += b(c.Primary, "primary", "Cores Primárias");
                        c.Sec1 && (a += "," + b(c.Sec1, "secondary-a", "Cores Secundárias A"));
                        c.Sec2 && (a += "," + b(c.Sec2, "secondary-b", "Cores Secundárias B"));
                        c.Compl && (a += "," + b(c.Compl, "complement", "Cores Complementares"));
                        a += "}}";
                        $("#csd3-form").attr("action", "http://colorschemedesigner.com/export/").attr("method", "POST").attr("target", "_blank");
                        $("#csd3-form-data").val(a);
                        $("#csd3-form").submit()
                    }
                }
            }
        });
        m.History = new f({
            ID: "History",
            Content: null,
            Hooks: null,
            Listeners: {
                chgHistory: {
                    handler: function () {
                        r.add()
                    }
                },
                historyBack: {
                    handler: function () {
                        r.back()
                    }
                },
                historyFwd: {
                    handler: function () {
                        r.fwd()
                    }
                },
                historyReset: {
                    handler: function () {
                        r.reset()
                    }
                }
            }
        });
        e = function () {
            var a, b, c = {},
                e = "init,loadSchemeByURL,loadScheme,randomScheme,setModel,setHue,setHex,setDist,setDistNum,setPreset,setSV,setC,setMV,resetMV,selMVcol,selMVvar,dragHue,dragSV,dragMV,dragC,dotClick,dotRelease,tabWheelClick,tabVarsClick,tabInfoClick,setMVoff,setMVon,presetSelect,tabPreview0Click,tabPreview1Click,tabPreview2Click,PreviewTextToggle,enterHue,complHue,enterDist,enterRGB,randomPrefs,chgAll,chgModel,chgHue,chgDist,chgSV,chgC,chgMV,chgPalette,chgHistory,historyBack,historyFwd,historyUpdated,historyReset,setVision,chgVision,setConversion,setExport,toggleTooltips".split(",");
            for (a = 0, b = e.length; a < b; a++) c[e[a]] = new S(e[a]);
            return c
        }();
        w = new function () {
            this.reset = function () {
                this.On = !1;
                this.Origin = {};
                this.handlers = {};
                this.$elm = null;
                this.Data = {}
            };
            this.start = function (a, b, c, e) {
                this.On = !0;
                this.$elm = b;
                this.handlers.onMove = c;
                this.handlers.onEnd = e;
                c = b.offset();
                this.Origin.dW = b.width();
                this.Origin.dH = b.height();
                this.Origin.dX = c.left + this.Origin.dW / 2;
                this.Origin.dY = c.top + this.Origin.dH / 2;
                this.$elm.bind("mousemove", P(this.move));
                this.$elm.bind("mouseup", P(this.end));
                this.move(a.SysEvent)
            };
            this.move = function (a) {
                var b;
                b = a.pageX - _this.Origin.dX;
                a = a.pageY - _this.Origin.dY;
                if (_this.handlers.onMove) _this.handlers.onMove(b, a)
            };
            this.end = function () {
                _this.$elm.unbind("mousemove");
                _this.$elm.unbind("mouseup");
                if (_this.handlers.onEnd) _this.handlers.onEnd();
                _this.reset();
                e.chgHistory.trigger()
            };
            _this = this;
            this.reset()
        };
        r = {
            List: [],
            Ptr: -1,
            Lock: !1,
            reset: function () {
                this.List = [];
                this.Ptr = -1
            },
            add: function () {
                if (!this.Lock && (0 > this.Ptr || this.List[this.Ptr] != F)) {
                    if (this.List.length > this.Ptr + 1) this.List = this.List.splice(0, this.Ptr + 1);
                    this.List.push(F);
                    this.Ptr++;
                    e.historyUpdated.trigger()
                }
            },
            back: function () {
                1 > this.Ptr || (this.Ptr--, e.loadScheme.trigger(null, {
                    SchemeID: this.List[this.Ptr],
                    LockHistory: !0
                }), e.historyUpdated.trigger())
            },
            fwd: function () {
                this.Ptr >= this.List.length - 1 || (this.Ptr++, e.loadScheme.trigger(null, {
                    SchemeID: this.List[this.Ptr],
                    LockHistory: !0
                }), e.historyUpdated.trigger())
            },
            lock: function () {
                this.Lock = !0
            },
            unlock: function () {
                this.Lock = !1
            },
            isFirst: function () {
                return 0 == this.Ptr
            },
            isLast: function () {
                return this.Ptr == this.List.length - 1
            }
        };
        r.reset();
        c = new function () {
            var a, b, e, f, h, m;

            function i(k, a) {
                a || (a = 2);
                for (var b = k.toString(16); b.length < a;) b = "0" + b;
                return b.toUpperCase()
            }
            function n(a) {
                return parseInt(a, 16)
            }
            function j(a) {
                if (a && a.match(/^\s*[0-9a-fA-F]{6}\s*$/)) {
                    var l, b;
                    l = n(a.substring(0, 2));
                    b = n(a.substring(2, 4));
                    a = n(a.substring(4, 6));
                    return new z(l, b, a)
                }
                return !1
            }
            function q(a, l) {
                180 < l - a ? a += 360 : 180 < a - l && (l += 360);
                return l - a
            }
            function s(a, l, b) {
                return -1 == b ? a : a + (l - a) / (1 + b)
            }
            function v(a, l, b) {
                return -1 == b ? l : l + (a - l) / (1 + b)
            }

            function C(a, l, b) {
                this.set = function (a, k, l) {
                    this.H = a;
                    this.S = k;
                    this.V = l
                };
                this.copy = function () {
                    return new C(this.H, this.S, this.V)
                };
                this.set(a, l, b)
            }
            function z(a, l, b) {
                this.set = function (a, k, l) {
                    this.R = Math.round(a);
                    this.G = Math.round(k);
                    this.B = Math.round(l)
                };
                this.copy = function () {
                    return new z(this.R, this.G, this.B)
                };
                this.toWebCol = function () {
                    this.R = 51 * Math.round(this.R / 51);
                    this.G = 51 * Math.round(this.G / 51);
                    this.B = 51 * Math.round(this.B / 51)
                };
                this.toPantone = function () {
                    var a = c.Pantone.search(this);
                    if (a) this.R = a.RGB.R, this.G = a.RGB.G, this.B = a.RGB.B, this.Name = [a.Name]
                };
                this.toRAL = function () {
                    var a = c.RAL.search(this);
                    if (a) this.R = a.RGB.R, this.G = a.RGB.G, this.B = a.RGB.B, this.Name = [a.Name, a.Name2]
                };
                this.toOpaltone = function () {
                    var a = c.Opaltone.search(this);
                    if (a) this.R = a.RGB.R, this.G = a.RGB.G, this.B = a.RGB.B, this.Name = [a.Name]
                };
                this.getCSS = function () {
                    return "rgb(" + this.R + "," + this.G + "," + this.B + ")"
                };
                this.getHex = function () {
                    return i(this.R) + i(this.G) + i(this.B)
                };
                this.getName = function () {
                    return this.Name || []
                };
                this.set(a, l, b)
            }
            function t(a, l, b, c, e, d) {
                this.getVariant = function (a, k, l) {
                    a = new C(a.H, 0 >= k ? a.S * (k + 1) : a.S + (1 - a.S) * k, 0 >= l ? a.V * (l + 1) : a.V + (1 - a.V) * l);
                    k = r.getRGB(a.H, a.S, a.V);
                    1 == d ? k.toWebCol() : 2 == d ? k.toPantone() : 3 == d ? k.toRAL() : 4 == d && k.toOpaltone();
                    return {
                        HSV: a,
                        RGB: k
                    }
                };
                this.getOverlayVariant = function (a, k, l) {
                    a = new C(a.H, k, l);
                    k = r.getRGB(a.H, a.S, a.V);
                    1 == d ? k.toWebCol() : 2 == d ? k.toPantone() : 3 == d ? k.toRAL() : 4 == d && k.toOpaltone();
                    return {
                        HSV: a,
                        RGB: k
                    }
                };
                this.getVarHSV = function (a) {
                    return this.Col[a].HSV
                };
                this.getVarRGB = function (a) {
                    return this.Col[a].RGB
                };
                this.H = a;
                this.Base = r.getBaseColorByHue(a);
                this.Col0 = this.getVariant(this.Base.HSV, l, b, d);
                this.Col = [];
                e[0] ? this.Col.push(this.getOverlayVariant(this.Base.HSV, e[0][0], e[0][1], d)) : this.Col.push(this.Col0);
                for (a = 0, l = c.length; a < l; a++) this.Col[a + 1] = e[a + 1] ? this.getOverlayVariant(this.Base.HSV, e[a + 1][0], e[a + 1][1], d) : this.getVariant(this.Col0.HSV, c[a].dS, c[a].dV, d)
            }
            function w(a) {
                this.SourceData = a;
                this.Data = {};
                this.Hues = null;
                this.Inited = !1;
                this.init = function () {
                    this.Inited = !0
                };
                this.indexByHue = function (a) {
                    var k;
                    if (!this.Hues) {
                        this.Hues = {};
                        for (k = 0; 360 > k; k += 30) this.Hues[k] = []
                    }
                    this.Hues[30 * Math.floor(this.Data[a].HSV.H / 30)].push(a)
                };
                this.search = function (a) {
                    this.Inited || this.init();
                    var k = i(a.R) + i(a.G) + i(a.B);
                    if (this.Cache[k]) return this.Cache[k];
                    var b, c, e, d, f, g, h = 1E3,
                        j;
                    e = r.getColorByRGB(a);
                    b = 30 * Math.floor(e.H / 30);
                    e = $.merge([], this.Hues[b]);
                    e = $.merge(e, this.Hues[(b - 30 + 360) % 360]);
                    e = $.merge(e, this.Hues[(b + 30) % 360]);
                    for (b = 0, c = e.length; b < c && !(d = this.Data[e[b]].RGB, f = d.R - a.R, g = d.B - a.B, d = d.G - a.G, f = Math.sqrt(f * f + d * d + g * g), f < h && (h = f, j = e[b]), 0 == h); b++);
                    this.cache(k, j);
                    return this.Data[j]
                };
                this.Cache = {
                    Items: {},
                    Idx: [],
                    MaxSize: 127,
                    FreeBy: 32
                };
                this.cache = function (a, k) {
                    this.Cache.Items[a] = this.Data[k];
                    this.Cache.Idx.push(a);
                    if (this.Cache.Idx.length > this.Cache.MaxSize) {
                        for (var b = 0; b < this.Cache.FreeBy; b++) delete this.Cache.Items[this.Cache.Idx[b]];
                        this.Cache.Idx = this.Cache.Idx.slice(this.Cache.FreeBy)
                    }
                }
            }
            var o, r, u, B;
            o = {
                _key: "0123456789abcdefghijklmnopqrstuvwxyz.ABCDEFGHIJKLMNOPQRSTUVWXYZ-",
                _pad: "0000000000000000",
                encodeInt: function (a, b) {
                    var c = "",
                        e, d = a;
                    for (a || (c = "0"); d;) e = d & 63, c = this._key.charAt(e) + c, d >>= 6;
                    b && (c = this._pad + c, c = c.substring(c.length - b));
                    return c
                },
                decodeInt: function (a) {
                    var b, c, e, d = 0;
                    if (!a) return 0;
                    for (c = 0, e = a.length; c < e; c++) d <<= 6, b = this._key.indexOf(a.charAt(c)), d |= b;
                    return d
                },
                encodeFloat: function (a, b) {
                    b || (b = 1);
                    return this.encodeInt(Math.round((Math.pow(64, b) - 1) * a), b)
                },
                decodeFloat: function (a, b, c) {
                    a = this.decodeInt(a);
                    if (!a) return 0;
                    b = a / (Math.pow(64, b) - 1);
                    c && (c = Math.pow(10, c), b = Math.round(b * c) / c);
                    return b
                }
            };
            a = {
                RGB: new z(255, 0, 0),
                HSV: new C(0, 1, 1)
            };
            b = {
                RGB: new z(255, 255, 0),
                HSV: new C(120, 1, 1)
            };
            e = {
                RGB: new z(0, 255, 0),
                HSV: new C(180, 1, 0.8)
            };
            f = {
                RGB: new z(0, 255, 255),
                HSV: new C(210, 1, 0.6)
            };
            h = {
                RGB: new z(0, 0, 255),
                HSV: new C(255, 0.85, 0.7)
            };
            m = {
                RGB: new z(255, 0, 255),
                HSV: new C(315, 1, 0.65)
            };
            r = {
                getArc: function (a) {
                    return 120 > a ? this.RRG : 180 > a ? this.RGG : 210 > a ? this.GGB : 255 > a ? this.GBB : 315 > a ? this.BBR : this.BRR
                },
                RRG: {
                    a: a,
                    b: b,
                    f: function (a) {
                        return 0 == a ? -1 : 0.5 * Math.tan((120 - a) / 120 * Math.PI / 2)
                    },
                    fi: function (a) {
                        return -1 == a ? 0 : 120 - 2 * (120 * Math.atan(a / 0.5) / Math.PI)
                    },
                    g: s,
                    orderRGB: function (a, b, c) {
                        return new z(a, b, c)
                    }
                },
                RGG: {
                    a: b,
                    b: e,
                    f: function (a) {
                        return 180 == a ? -1 : 0.5 * Math.tan((a - 120) / 60 * Math.PI / 2)
                    },
                    fi: function (a) {
                        return -1 == a ? 180 : 120 + 2 * (60 * Math.atan(a / 0.5) / Math.PI)
                    },
                    g: v,
                    orderRGB: function (a, b, c) {
                        return new z(b, a, c)
                    }
                },
                GGB: {
                    a: e,
                    b: f,
                    f: function (a) {
                        return 180 == a ? -1 : 0.75 * Math.tan((210 - a) / 30 * Math.PI / 2)
                    },
                    fi: function (a) {
                        return -1 == a ? 180 : 210 - 2 * (30 * Math.atan(a / 0.75) / Math.PI)
                    },
                    g: s,
                    orderRGB: function (a, b, c) {
                        return new z(c, a, b)
                    }
                },
                GBB: {
                    a: f,
                    b: h,
                    f: function (a) {
                        return 255 == a ? -1 : 1.33 * Math.tan((a - 210) / 45 * Math.PI / 2)
                    },
                    fi: function (a) {
                        return -1 == a ? 255 : 210 + 2 * (45 * Math.atan(a / 1.33) / Math.PI)
                    },
                    g: v,
                    orderRGB: function (a, b, c) {
                        return new z(c, b, a)
                    }
                },
                BBR: {
                    a: h,
                    b: m,
                    f: function (a) {
                        return 255 == a ? -1 : 1.33 * Math.tan((315 - a) / 60 * Math.PI / 2)
                    },
                    fi: function (a) {
                        return -1 == a ? 255 : 315 - 2 * (60 * Math.atan(a / 1.33) / Math.PI)
                    },
                    g: s,
                    orderRGB: function (a, b, c) {
                        return new z(b, c, a)
                    }
                },
                BRR: {
                    a: m,
                    b: a,
                    f: function (a) {
                        return 0 == a ? -1 : 1.33 * Math.tan((a - 315) / 45 * Math.PI / 2)
                    },
                    fi: function (a) {
                        return -1 == a ? 0 : 315 + 2 * (45 * Math.atan(a / 1.33) / Math.PI)
                    },
                    g: v,
                    orderRGB: function (a, b, c) {
                        return new z(a, c, b)
                    }
                },
                getBaseColorByHue: function (a) {
                    var b, c, e, d, a = a % 360;
                    d = this.getArc(a);
                    e = d.f(a);
                    c = d.g(d.a.HSV.V, d.b.HSV.V, e);
                    b = d.g(d.a.HSV.S, d.b.HSV.S, e);
                    return {
                        HSV: new C(a, b, c),
                        RGB: this._getRGB(a, b, c, d, e)
                    }
                },
                getRGB: function (a, b, c) {
                    var e, d;
                    e = this.getArc(a);
                    d = e.f(a);
                    return this._getRGB(a, b, c, e, d)
                },
                _getRGB: function (a, b, c, e, d) {
                    a = e.a.RGB;
                    a = Math.max(a.R, Math.max(a.G, a.B));
                    a *= c;
                    b = a * (1 - b);
                    return e.orderRGB(a, -1 == d ? b : (a + b * d) / (1 + d), b)
                },
                getColorByRGB: function (a) {
                    var b, c, e;
                    a.R == a.B && a.R == a.G ? (c = b = 0, e = (0.299 * a.R + 0.587 * a.G + 0.114 * a.B) / 255) : (e = Math.max(a.R, Math.max(a.G, a.B)), c = Math.min(a.R, Math.min(a.G, a.B)), e == a.R ? c == a.B ? (b = a.G, a = this.RRG) : (b = a.B, a = this.BRR) : e == a.G ? c == a.R ? (b = a.B, a = this.GGB) : (b = a.R, a = this.RGG) : c == a.R ? (b = a.G, a = this.GBB) : (b = a.R, a = this.BBR), b = a.fi(b == c ? -1 : (e - b) / (b - c)), c = (e - c) / e, e /= 255);
                    return new C(b, c, e)
                }
            };
            u = {
                m1: {
                    getH: function () {
                        return {}
                    },
                    minD: 5,
                    maxD: 90,
                    getD: function () {
                        return 0
                    }
                },
                m2: {
                    getH: function (a) {
                        return {
                            C: (a + 180) % 360
                        }
                    },
                    minD: 5,
                    maxD: 90,
                    getD: function () {
                        return 0
                    }
                },
                m3: {
                    getH: function (a, b) {
                        return {
                            S1: (a + b + 180) % 360,
                            S2: (a - b + 540) % 360
                        }
                    },
                    minD: 5,
                    maxD: 90,
                    getD: function (a, b) {
                        var c = Math.abs(q(a + 180, b));
                        if (c < this.minD) c = this.minD;
                        if (c > this.maxD) c = this.maxD;
                        return c
                    }
                },
                m4: {
                    getH: function (a, b) {
                        return {
                            C: (a + 180) % 360,
                            S1: (a + b + 360) % 360,
                            S2: (a + b + 540) % 360
                        }
                    },
                    minD: 5,
                    maxD: 90,
                    getD: function (a, b) {
                        var c, e, d;
                        c = q(a, b);
                        d = Math.abs(c);
                        e = q(a + 180, b);
                        Math.abs(e) < d && (c = e);
                        d < this.minD && (c = 0 <= c ? this.minD : -this.minD);
                        d > this.maxD && (c = 0 <= c ? this.maxD : -this.maxD);
                        return c
                    }
                },
                m5: {
                    getH: function (a, b) {
                        return {
                            S1: (a + b) % 360,
                            S2: (a - b + 360) % 360
                        }
                    },
                    minD: 5,
                    maxD: 90,
                    getD: function (a, b) {
                        var c = Math.abs(q(a, b));
                        if (c < this.minD) c = this.minD;
                        if (c > this.maxD) c = this.maxD;
                        return c
                    }
                },
                m6: {
                    getH: function (a, b) {
                        return {
                            C: (a + 180) % 360,
                            S1: (a + b) % 360,
                            S2: (a - b + 360) % 360
                        }
                    },
                    minD: 5,
                    maxD: 90,
                    getD: function (a, b) {
                        var c = Math.abs(q(a, b));
                        if (c < this.minD) c = this.minD;
                        if (c > this.maxD) c = this.maxD;
                        return c
                    }
                }
            };
            B = {
                shadow: [{
                    dS: -0.5,
                    dV: -0.5

                }, {
                    dS: 1,
                    dV: -0.7
                }],
                light: [{
                    dS: -0.5,
                    dV: 1
                }, {
                    dS: -0.9,
                    dV: 1
                }],
                get: function (a, b) {
                    var c = [];
                    c.push({
                        dS: this.shadow[0].dS * a,
                        dV: this.shadow[0].dV * a
                    });
                    c.push({
                        dS: this.shadow[1].dS * a,
                        dV: this.shadow[1].dV * a
                    });
                    c.push({
                        dS: this.light[0].dS * b,
                        dV: this.light[0].dV * b
                    });
                    c.push({
                        dS: this.light[1].dS * b,
                        dV: this.light[1].dV * b
                    });
                    return c
                }
            };
            this.Scheme = "m1";
            this.SchemeModel = u.m1;
            this.H = 0;
            this.Dist = 30;
            this.dV = this.dS = 0;
            this.cL = this.cS = 0.5;
            this.ContrastModel = B.get(0.5, 0.5);
            this.UseVarsOverlay = !1;
            this.VarsOverlay = [
                [],
                [],
                [],
                []
            ];
            this.Conversion = 0;
            this.Presets = {
                "default": {
                    name: "Padrão",
                    dS: 0,
                    dV: 0,
                    cS: 0.5,
                    cL: 0.5
                },
                hcontrast1: {
                    name: "Mais Contraste",
                    dS: -0.1,
                    dV: -0.1,
                    cS: 0.66,
                    cL: 0.66
                },
                hcontrast2: {
                    name: "Alto Contraste",
                    dS: -0.1,
                    dV: -0.1,
                    cS: 0.75,
                    cL: 0.75
                },
                hcontrast3: {
                    name: "Máximo Contraste",
                    dS: 1,
                    dV: 1,
                    cS: 1,
                    cL: 1
                },
                lcontrast1: {
                    name: "Menos Contraste",
                    dS: 0,
                    dV: 0,
                    cS: 0.33,
                    cL: 0.33
                },
                lcontrast2: {
                    name: "Baixo Contraste",
                    dS: 0,
                    dV: 0,
                    cS: 0.2,
                    cL: 0.2
                },
                lcontrast3: {
                    name: "Mínimo Contraste",
                    dS: 0,
                    dV: 0,
                    cS: 0.1,
                    cL: 0.1
                },
                msatur: {
                    name: "Escuro Médio (intenso)",
                    dS: 0.5,
                    dV: -0.44,
                    cS: 0.4,
                    cL: 0.4
                },
                dsatur: {
                    name: "Escuro (intenso)",
                    dS: 1,
                    dV: -0.7,
                    cS: 0.25,
                    cL: 0.25
                },
                vdsatur: {
                    name: "Muito escuro (intenso)",
                    dS: 1,
                    dV: -0.8,
                    cS: 0.1,
                    cL: 0.1
                },
                pastel: {
                    name: "Pastel",
                    dS: -0.44,
                    dV: -0.125,
                    cS: 0.25,
                    cL: 0.25
                },
                mpastel: {
                    name: "Pastel escuro médio",
                    dS: -0.44,
                    dV: -0.44,
                    cS: 0.25,
                    cL: 0.25
                },
                dpastel: {
                    name: "Pastel Escuro",
                    dS: -0.44,
                    dV: -0.7,
                    cS: 0.25,
                    cL: 0.25
                },
                vdpastel: {
                    name: "Pastel muito escuro",
                    dS: -0.44,
                    dV: -0.8,
                    cS: 0.1,
                    cL: 0.1
                },
                palepastel: {
                    name: "Pastel claro pálido",
                    dS: -0.75,
                    dV: -0.1,
                    cS: 0.1,
                    cL: 0.1
                },
                mpalepastel: {
                    name: "Pastel claro pálido",
                    dS: -0.75,
                    dV: -0.44,
                    cS: 0.1,
                    cL: 0.1
                },
                dpalepastel: {
                    name: "Pastel pálido escuro",
                    dS: -0.75,
                    dV: -0.7,
                    cS: 0.1,
                    cL: 0.1
                },
                vdpalepastel: {
                    name: "Pastel pálido muito escuro",
                    dS: -0.8,
                    dV: -0.8,
                    cS: 0.05,
                    cL: 0.05
                },
                lgray: {
                    name: "Quase cinza (claro)",
                    dS: -0.95,
                    dV: -0.1,
                    cS: 0.1,
                    cL: 0.1
                },
                lagray: {
                    name: "Quase cinza com cores acentuadas (claro)",
                    dS: -0.95,
                    dV: -0.1,
                    cS: 0.5,
                    cL: 0.5
                },
                mgray: {
                    name: "Quase cinza (médio)",
                    dS: -0.95,
                    dV: -0.44,
                    cS: 0.1,
                    cL: 0.1
                },
                magray: {
                    name: "Quase cinza com cores acentuadas (médio)",
                    dS: -0.95,
                    dV: -0.44,
                    cS: 0.5,
                    cL: 0.5
                },
                dgray: {
                    name: "Quase escuro (escuro)",
                    dS: -0.95,
                    dV: -0.8,
                    cS: 0.1,
                    cL: 0.1
                },
                dagray: {
                    name: "Quase cinza com cores acentuadas (escuro)",
                    dS: -0.95,
                    dV: -0.8,
                    cS: 0.5,
                    cL: 0.5
                }
            };
            this.ColorHash = {
                pri: 0,
                sec1: 1,
                sec2: 2,
                compl: 3
            };
            this.setScheme = function (a) {
                this.Scheme = a;
                this.SchemeModel = u[this.Scheme];
                this.resetVarsOverlay(!1);
                this.Sec1 && this.setDist(this.Sec1.H)
            };
            this.setHue = function (a) {
                if (this.H === a) return !1;
                this.H = Math.round(a) % 360;
                this.resetVarsOverlay(!1);
                return !0
            };
            this.setHSV = function (a) {
                this.setHue(a.H);
                var b = this.Primary.Base.HSV;
                this.dS = 0 == b.S ? 0 : a.S > b.S ? (a.S - b.S) / (1 - b.S) : a.S / b.S - 1;
                this.dV = 0 == b.V ? 0 : a.V > b.V ? (a.V - b.V) / (1 - b.V) : a.V / b.V - 1;
                this.resetVarsOverlay(!1)
            };
            this.setHex = function (a) {
                if (a = j(a)) hsv = r.getColorByRGB(a), this.setHSV(hsv)
            };
            this.setDist = function (a) {
                this.Dist = this.SchemeModel.getD(this.H, a);
                this.resetVarsOverlay(!1);
                return !0
            };
            this.setDistNum = function (a) {
                this.Dist = a;
                this.resetVarsOverlay(!1);
                return !0
            };
            this.setSV = function (a, b) {
                this.dS = a;
                this.dV = b;
                this.resetVarsOverlay(!1)
            };
            this.setContrast = function (a, b) {
                this.UseVarsOverlay = !1;
                this.cS = a;
                this.cL = b;
                this.ContrastModel = B.get(a, b);
                this.resetVarsOverlay(!1)
            };
            this.resetVarsOverlay = function (a) {
                this.UseVarsOverlay = !1;
                this.VarsOverlay = [
                    [],
                    [],
                    [],
                    []
                ];
                a || this.update()
            };
            this.setConversion = function (a) {
                this.Conversion = a;
                this.update()
            };
            this.setVarOverlay = function (a, b, c, e, d) {
                this.UseVarsOverlay = !0;
                this.VarsOverlay[a][b] = [c, e];
                d || this.update()
            };
            this.getVarOverlay = function (a, b) {
                var c;
                if (c = this.VarsOverlay[a][b]) return c;
                c = this.getColorByIdx(a).Col[b].HSV;
                return [c.S, c.V]
            };
            this.update = function (a) {
                var b = this.SchemeModel.getH(this.H, this.Dist);
                if (!a) this.Primary = new t(this.H, this.dS, this.dV, this.ContrastModel, this.VarsOverlay[0], this.Conversion), this.Compl = void 0 == b.C ? null : new t(b.C, this.dS, this.dV, this.ContrastModel, this.VarsOverlay[3], this.Conversion);
                this.Sec1 = void 0 == b.S1 ? null : new t(b.S1, this.dS, this.dV, this.ContrastModel, this.VarsOverlay[1], this.Conversion);
                this.Sec2 = void 0 == b.S2 ? null : new t(b.S2, this.dS, this.dV, this.ContrastModel, this.VarsOverlay[2], this.Conversion)
            };
            this.serialize = function () {
                var a, b, c;
                c = "" + o.encodeInt(this.H, 2);
                a = parseInt(this.Scheme.substring(1), 10);
                b = 8 * this.Conversion;
                c += o.encodeInt(a + b, 1);
                c += o.encodeInt(this.Dist + 90, 2);
                c += o.encodeFloat((this.dS + 1) / 2, 2);
                c += o.encodeFloat((this.dV + 1) / 2, 2);
                c += o.encodeFloat(this.cS, 2);
                c += o.encodeFloat(this.cL, 2);
                if (this.UseVarsOverlay) for (a = 0; 4 > a; a++) for (b = 0; 5 > b; b++) this.VarsOverlay[a][b] && (c += o.encodeInt(8 * a + b, 1), c += o.encodeFloat((this.VarsOverlay[a][b][0] + 1) / 2, 2), c += o.encodeFloat((this.VarsOverlay[a][b][1] + 1) / 2, 2));
                return c
            };
            this.unserialize = function (a) {
                var b, c, e = {},
                    d = 0,
                    f;
                b = a.substring(d, d + 2);
                b = o.decodeInt(b);
                if (0 <= b && 360 > b) e.H = b;
                else return !1;
                d += 2;
                b = a.substring(d, d + 1);
                b = o.decodeInt(b);
                c = "m" + b % 8;
                if (u[c]) e.Scheme = c;
                else return !1;
                e.Conversion = Math.floor(b / 8);
                d += 1;
                b = a.substring(d, d + 2);
                b = o.decodeInt(b) - 90;
                if (-90 <= b && 90 >= b) e.Dist = b;
                else return !1;
                d += 2;
                b = a.substring(d, d + 2);
                b = 2 * o.decodeFloat(b, 2, 5) - 1;
                if (-1 <= b && 1 >= b) e.dS = b;
                else return !1;
                d += 2;
                b = a.substring(d, d + 2);
                b = 2 * o.decodeFloat(b, 2, 5) - 1;
                if (-1 <= b && 1 >= b) e.dV = b;
                else return !1;
                d += 2;
                b = a.substring(d, d + 2);
                b = o.decodeFloat(b, 2, 5);
                if (0 <= b && 1 >= b) e.cS = b;
                else return !1;
                d += 2;
                b = a.substring(d, d + 2);
                b = o.decodeFloat(b, 2, 5);
                if (0 <= b && 1 >= b) e.cL = b;
                else return !1;
                d += 2;
                this.setAll(e);
                if (a.length > d) {
                    for (; a.length > d;) {
                        b = a.substring(d, d + 1);
                        b = o.decodeInt(b);
                        c = Math.floor(b / 8);
                        e = b - 8 * c;
                        if (0 > c || 3 < c || 0 > e || 4 < e) return !1;
                        d += 1;
                        b = a.substring(d, d + 2);
                        f = 2 * o.decodeFloat(b, 2, 5) - 1;
                        if (-1 > f || 1 < f) return !1;
                        d += 2;
                        b = a.substring(d, d + 2);
                        b = 2 * o.decodeFloat(b, 2, 5) - 1;
                        if (-1 > b || 1 < b) return !1;
                        d += 2;
                        this.setVarOverlay(c, e, f, b, !0)
                    }
                    this.update()
                }
            };
            this.setAll = function (a) {
                this.Scheme = a.Scheme;
                this.SchemeModel = u[this.Scheme];
                ColorSchemeDesigner.broadcast("setConversion", a.Conversion);
                this.H = a.H;
                this.Dist = a.Dist;
                this.dS = a.dS;
                this.dV = a.dV;
                this.cS = a.cS;
                this.cL = a.cL;
                this.ContrastModel = B.get(this.cS, this.cL);
                this.resetVarsOverlay()
            };
            this.getPreset = function (a) {
                return this.Presets[a] ? this.Presets[a] : this.Presets["default"]
            };
            this.usePreset = function (a) {
                this.resetVarsOverlay();
                a = this.getPreset(a);
                this.setSV(a.dS, a.dV);
                this.setContrast(a.cS, a.cL)
            };
            this.getColorByIdx = function (a) {
                var b = ["Primary", "Sec1", "Sec2", "Compl"];
                b[a] || (a = 0);
                return this[b[a]]
            };
            this.ColorBlind = {
                getHex: function (a, b, c, d) {
                    function e(a, b, c, d) {
                        return Math.round(a - Math.abs((c - d) / 51) * (a - b))
                    }
                    var f, g, h, j, m, q, o;
                    f = 51 * Math.round(a / 51);
                    g = 51 * Math.round(b / 51);
                    h = 51 * Math.round(c / 51);
                    j = f < a ? f + 51 : f > a ? f - 51 : f;
                    m = g < b ? g + 51 : g > b ? g - 51 : g;
                    q = h < c ? h + 51 : h > c ? h - 51 : h;
                    o = this.colTbl[i(f) + i(g) + i(h)][d];
                    d = this.colTbl[i(j) + i(m) + i(q)][d];
                    a = e(n(o.substring(0, 2)), n(d.substring(0, 2)), f, a);
                    b = e(n(o.substring(2, 4)), n(d.substring(2, 4)), g, b);
                    c = e(n(o.substring(4, 6)), n(d.substring(4, 6)), h, c);
                    return i(a) + i(b) + i(c)
                },
                typeDesc: "Normal vision (cca 85.5 % of population);Protanopy (1 % of men);Deuteranopy (1 % of men);Tritanopy (cca 0,003 % of population);Protanomaly (1 % of men);Deuteranomaly (5 % of men, 0.4 % of women);Tritanomaly (almost 0 %);Full colorblindness (0,005 % of population);Atypical monochromatism".split(";"),
                colTbl: {
                    FFFFFF: "FFFFFF,FFFAFA,FFE8EF,F4F0FF,FFFCFC,FFF3F7,F9F7FF,FFFFFF,FFFFFF".split(","),
                    FFFFCC: "FFFFCC,FFF2C8,FFDFC8,FDEFFF,FFF8CA,FFEFCA,FEF7E5,EEEEEE,F1F1E7".split(","),
                    FFFF99: "FFFF99,FFEDA2,FFDAAD,FFEAF9,FFF69D,FFECA3,FFF4C9,DDDDDD,E3E3CF".split(","),
                    FFFF66: "FFFF66,FFEA86,FFD79D,FFE6F5,FFF476,FFEB81,FFF2AD,CCCCCC,D6D6B7".split(","),
                    FFFF33: "FFFF33,FFE975,FFD594,FFE5F3,FFF454,FFEA63,FFF293,BBBBBB,C8C89F".split(","),
                    FFFF00: "FFFF00,FFE871,FFD592,FFE4F2,FFF338,FFEA49,FFF179,AAAAAA,BBBB88".split(","),
                    FFCCFF: "FFCCFF,CFD7FF,E1D8FD,FBD1E1,E7D1FF,F0D2FE,FDCEF0,EEEEEE,F1E7F1".split(","),
                    FFCCCC: "FFCCCC,DED8D2,F1D2CB,FFCAD8,EED2CF,F8CFCB,FFCBD2,DDDDDD,E3D9D9".split(","),
                    FFCC99: "FFCC99,E5D69D,FCCD99,FFC4D1,F2D19B,FDCC99,FFC8B5,CCCCCC,D6CCC1".split(","),
                    FFCC66: "FFCC66,E9D469,FFCA6F,FFC0CD,F4D067,FFCB6A,FFC699,BBBBBB,C8BEAA".split(","),
                    FFCC33: "FFCC33,ECD435,FFC857,FFBFCA,F5D034,FFCA45,FFC57E,AAAAAA,BBB092".split(","),
                    FFCC00: "FFCC00,ECD30F,FFC750,FFBECA,F5CF07,FFC928,FFC565,999999,ADA37A".split(","),
                    FF99FF: "FF99FF,AABDFF,B0BCF9,F6A9B5,D4ABFF,D7AAFC,FAA1DA,DDDDDD,E3CFE3".split(","),
                    FF99CC: "FF99CC,B1B8E0,C5B5C7,FC9FAA,D8A8D6,E2A7C9,FD9CBB,CCCCCC,D6C1CC".split(","),
                    FF9999: "FF9999,BDB6A8,D2B095,FF99A2,DEA7A0,E8A497,FF999D,BBBBBB,C8B4B4".split(","),
                    FF9966: "FF9966,C4B470,DAAC62,FF959E,E1A66B,ECA264,FF9782,AAAAAA,BBA69C".split(","),
                    FF9933: "FF9933,C7B43A,DEAB2A,FF949D,E3A636,EEA22E,FF9668,999999,AD9984".split(","),
                    FF9900: "FF9900,C8B317,DFAA00,FF949C,E3A60B,EFA100,FF964E,888888,9F8B6C".split(","),
                    FF66FF: "FF66FF,98B2FF,85A7F5,F28791,CB8CFF,C286FA,F876C8,CCCCCC,D6B7D6".split(","),
                    FF66CC: "FF66CC,82A0F6,A09FC3,F87981,C083E1,CF82C7,FB6FA6,BBBBBB,C8AABE".split(","),
                    FF6699: "FF6699,999DB9,B19992,FD6E74,CC81A9,D87F95,FE6A86,AAAAAA,BB9CA6".split(","),
                    FF6666: "FF6666,A59B7C,BB955E,FF666C,D28071,DD7D62,FF6669,999999,AD8E8E".split(","),
                    FF6633: "FF6633,AA9A42,BF9322,FF656A,D4803A,DF7C2A,FF654E,888888,9F8177".split(","),
                    FF6600: "FF6600,AC9A1E,C09300,FF6569,D5800F,DF7C00,FF6534,777777,92735F".split(","),
                    FF33FF: "FF33FF,96B1FF,679BF2,F07178,CA72FF,B367F8,F752BB,BBBBBB,C89FC8".split(","),
                    FF33CC: "FF33CC,779DFF,8A92C1,F75E63,BB68E5,C462C6,FB4897,AAAAAA,BB92B0".split(","),
                    FF3399: "FF3399,7A8ECE,9D8B8F,FB4C4F,BC60B3,CE5F94,FD3F74,999999,AD8499".split(","),
                    FF3366: "FF3366,8F8C8B,A7875C,FE3D3E,C75F78,D35D61,FE3852,888888,9F7781".split(","),
                    FF3333: "FF3333,988B4A,AD841C,FF3332,CB5F3E,D65B27,FF3332,777777,926969".split(","),
                    FF3300: "FF3300,9A8B23,AE8600,FF3331,CC5F11,D65C00,FF3318,666666,845B51".split(","),
                    FF00FF: "FF00FF,96B1FF,5E98F1,F06A71,CA58FF,AE4CF8,F735B8,AAAAAA,BB88BB".split(","),
                    FF00CC: "FF00CC,7BA0FF,838FC0,F6555A,BD50E5,C147C6,FA2A93,999999,AD7AA3".split(","),
                    FF0099: "FF0099,6E89D7,97888E,FA4042,B644B8,CB4493,FC206D,888888,9F6C8B".split(","),
                    FF0066: "FF0066,888892,A2835B,FD2B28,C3447C,D04160,FE1547,777777,925F73".split(","),
                    FF0033: "FF0033,93874E,A8801A,FE1A00,C94340,D34026,FE0D19,666666,84515B".split(","),
                    FF0000: "FF0000,968726,A98200,FE1C00,CA4313,D44100,FE0E00,555555,774444".split(","),
                    CCFFFF: "CCFFFF,F8F4F8,FFEAFD,CBEFFF,E2F9FB,E5F4FE,CBF7FF,EEEEEE,E7F1F1".split(","),
                    CCFFCC: "CCFFCC,FFF1C5,FFDECC,D3EFFF,E5F8C8,E5EECC,CFF7E5,DDDDDD,D9E3D9".split(","),
                    CCFF99: "CCFF99,FFEB97,FFD8AB,D9EEFF,E5F598,E5EBA2,D2F6CC,CCCCCC,CCD6C1".split(","),
                    CCFF66: "CCFF66,FFE873,FFD497,DDEEFF,E5F36C,E5E97E,D4F6B2,BBBBBB,BEC8AA".split(","),
                    CCFF33: "CCFF33,FFE75C,FFD38C,E0EEFF,E5F347,E5E95F,D6F699,AAAAAA,B0BB92".split(","),
                    CCFF00: "CCFF00,FFE655,FFD389,E0EEFF,E5F22A,E5E944,D6F67F,999999,A3AD7A".split(","),
                    CCCCFF: "CCCCFF,C4CEFF,CBCCFF,C6D1E1,C8CDFF,CBCCFF,C9CEF0,DDDDDD,D9D9E3".split(","),
                    CCCCCC: "CCCCCC,CFCBCB,DEC6CD,CECAD9,CDCBCB,D5C9CC,CDCBD2,CCCCCC,CCCCCC".split(","),
                    CCCC99: "CCCC99,D7C997,EAC19B,D3C4D3,D1CA98,DBC69A,CFC8B6,BBBBBB,BEBEB4".split(","),
                    CCCC66: "CCCC66,DBC764,F1BE6A,D7C1CF,D3C965,DEC568,D1C69A,AAAAAA,B0B09C".split(","),
                    CCCC33: "CCCC33,DDC631,F5BC3B,D8BFCD,D4C932,E0C437,D2C580,999999,A3A384".split(","),
                    CCCC00: "CCCC00,DDC600,F6C600,D9BECC,D4C900,E1C900,D2C566,888888,95956C".split(","),
                    CC99FF: "CC99FF,98B1FF,8FAEFB,BFA9B6,B2A5FF,ADA3FD,C5A1DA,CCCCCC,CCC1D6".split(","),
                    CC99CC: "CC99CC,9EA8D7,AAA7C9,C79FAB,B5A0D1,BBA0CA,C99CBB,BBBBBB,BEB4BE".split(","),
                    CC9999: "CC9999,AAA5A0,BAA198,CD98A2,BB9F9C,C39D98,CC989D,AAAAAA,B0A6A6".split(","),
                    CC9966: "CC9966,B1A46A,C49D65,D0929D,BE9E68,C89B65,CE9581,999999,A3998E".split(","),
                    CC9933: "CC9933,B5A336,C99B32,D2909A,C09E34,CA9A32,CF9466,888888,958B77".split(","),
                    CC9900: "CC9900,B5A20E,CA9A00,D38F99,C09D07,CB9900,CF944C,777777,887D5F".split(","),
                    CC66FF: "CC66FF,87A7FF,4C97F6,BB8791,A986FF,8C7EFA,C376C8,BBBBBB,BEAAC8".split(","),
                    CC66CC: "CC66CC,648CEB,7B8DC5,C37982,9879DB,A379C8,C76FA7,AAAAAA,B09CB0".split(","),
                    CC6699: "CC6699,7F88AF,918694,C96E75,A577A4,AE7696,CA6A87,999999,A38E99".split(","),
                    CC6666: "CC6666,8C8675,9E8161,CC656C,AC766D,B57363,CC6569,888888,958181".split(","),
                    CC6633: "CC6633,92853C,A47E2B,CE6067,AF7537,B8722F,CD634D,777777,887369".split(","),
                    CC6600: "CC6600,948415,A67F00,CF5F65,B0750A,B97200,CD6232,666666,7A6651".split(","),
                    CC33FF: "CC33FF,8AAAFF,008DEF,B87178,AB6EFF,6660F7,C252BB,AAAAAA,B092BB".split(","),
                    CC33CC: "CC33CC,4387FF,577EC2,C15E64,875DE5,9158C7,C64898,999999,A384A3".split(","),
                    CC3399: "CC3399,5275C8,767591,C64C50,8F54B0,A15495,C93F74,888888,95778B".split(","),
                    CC3366: "CC3366,707387,856F5F,CA3D3F,9E5376,A85162,CB3852,777777,886973".split(","),
                    CC3333: "CC3333,7B7146,8C6C27,CC3334,A3523C,AC4F2D,CC3333,666666,7A5B5B".split(","),
                    CC3300: "CC3300,7E711B,8F6D00,CC3030,A5520D,AD5000,CC3118,555555,6C4E44".split(","),
                    CC00FF: "CC00FF,8CABFF,008CEC,B76A71,AC55FF,6646F5,C135B8,999999,A37AAD".split(","),
                    CC00CC: "CC00CC,5D91FF,4B7AC0,C0555A,9448E5,8B3DC6,C62A93,888888,956C95".split(","),
                    CC0099: "CC0099,356FD5,6E7190,C64043,8037B7,9D3894,C9206E,777777,885F7D".split(","),
                    CC0066: "CC0066,646D90,7E6A5E,CA2B2B,98367B,A53562,CB1548,666666,7A5166".split(","),
                    CC0033: "CC0033,746C4C,856726,CB170B,A0363F,A8332C,CB0B1F,555555,6C444E".split(","),
                    CC0000: "CC0000,786C1E,886900,CC1600,A2360F,AA3400,CC0B00,444444,5F3636".split(","),
                    "99FFFF": "99FFFF,EFECF4,F4E4FF,A6EFFF,C4F5F9,C6F1FF,9FF7FF,DDDDDD,CFE3E3".split(","),
                    "99FFCC": "99FFCC,F7E9C1,FFDDD0,ACEFFF,C8F4C6,CCEECE,A2F7E5,CCCCCC,C1D6CC".split(","),
                    "99FF99": "99FF99,FBE790,FFD6A9,B0EEFF,CAF394,CCEAA1,A4F6CC,BBBBBB,B4C8B4".split(","),
                    "99FF66": "99FF66,FEE65E,FFD291,B4EEFF,CBF262,CCE87B,A6F6B2,AAAAAA,A6BB9C".split(","),
                    "99FF33": "99FF33,FFE532,FFD184,B5EDFF,CCF232,CCE85B,A7F699,999999,99AD84".split(","),
                    "99FF00": "99FF00,FFE41C,FFD080,B6EDFF,CCF10E,CCE740,A7F67F,888888,8B9F6C".split(","),
                    "99CCFF": "99CCFF,B9C5FA,B9C4FF,91D1E1,A9C8FC,A9C8FF,95CEF0,CCCCCC,C1CCD6".split(","),
                    "99CCCC": "99CCCC,C4C1C6,CEBDCF,9CCAD9,AEC6C9,B3C4CD,9ACBD2,BBBBBB,B4BEBE".split(","),
                    "99CC99": "99CC99,CBBF93,DBB89D,A3C4D3,B2C596,BAC29B,9EC8B6,AAAAAA,A6B0A6".split(","),
                    "99CC66": "99CC66,CFBD61,E4B56C,A8C1CF,B4C463,BEC069,A0C69A,999999,99A38E".split(","),
                    "99CC33": "99CC33,D1BC2F,E8B33F,AABFCD,B5C431,C0BF39,A1C580,888888,8B9577".split(","),
                    "99CC00": "99CC00,D2BC00,E9B22A,ABBECD,B5C400,C1BF15,A2C566,777777,7D885F".split(","),
                    "9999FF": "9999FF,83A4FF,6FA4FD,86A9B6,8E9EFF,849EFE,8FA1DA,BBBBBB,B4B4C8".split(","),
                    "9999CC": "9999CC,8F9CCE,929BCC,929FAB,949ACD,959ACC,959CBB,AAAAAA,A6A6B0".split(","),
                    999999: "999999,9B9899,A6949A,9A97A3,9A9899,9F9699,99989E,999999,999999".split(","),
                    999966: "999966,A29665,B29068,9F929D,9D9765,A59467,9C9581,888888,8B8B81".split(","),
                    999933: "999933,A59532,B78E37,A2909A,9F9732,A89335,9D9466,777777,7D7D69".split(","),
                    999900: "999900,A69500,A69500,A28F99,9F9700,9F9700,9D944C,666666,707051".split(","),
                    "9966FF": "9966FF,709BFF,0090F3,7E8791,8480FF,4C7BF9,8B76C8,AAAAAA,A69CBB".split(","),
                    "9966CC": "9966CC,497BDF,507FC7,8C7982,7170D5,7472C9,926FA7,999999,998EA3".split(","),
                    996699: "996699,6A77A5,737696,946D75,816E9F,866E97,966987,888888,8B818B".split(","),
                    996666: "996666,78746D,847064,9A656C,886D69,8E6B65,996569,777777,7D7373".split(","),
                    996633: "996633,7E7237,8C6D31,9C6067,8B6C35,926932,9A634D,666666,70665B".split(","),
                    996600: "996600,7F720D,8E6C00,9D5F66,8C6C06,936900,9B6233,555555,625844".split(","),
                    "9933FF": "9933FF,7DA2FF,008DE8,7A7078,8B6AFF,4C60F3,8951BB,999999,9984AD".split(","),
                    "9933CC": "9933CC,007AF6,0073C2,885D64,4C56E1,4C53C7,904898,888888,8B7795".split(","),
                    993399: "993399,005EBF,496192,914C51,4C48AC,714A95,953F75,777777,7D697D".split(","),
                    993366: "993366,505B80,625961,963D40,744773,7D4663,973853,666666,705B66".split(","),
                    993333: "993333,5F5941,6C552D,993335,7C463A,824430,993334,555555,624E4E".split(","),
                    993300: "993300,635913,705600,9A3032,7E4609,844400,993119,444444,554036".split(","),
                    "9900FF": "9900FF,83A6FF,008CE5,796A71,8E53FF,4C46F2,8935B8,888888,8B6C9F".split(","),
                    "9900CC": "9900CC,2782FF,0073C0,87555B,6041E5,4C39C6,902A93,777777,7D5F88".split(","),
                    990099: "990099,0067D0,385B90,904044,4C33B4,682D94,94206E,666666,705170".split(","),
                    990066: "990066,39538F,57535F,962B2C,69297A,782962,971549,555555,624458".split(","),
                    990033: "990033,55514A,634E2C,981612,77283E,7E272F,980B22,444444,553640".split(","),
                    99E4: "990000,5A5117,674F00,991100,79280B,802700,990800,333333,472828".split(","),
                    "66FFFF": "66FFFF,EAE7F0,EBDFFF,88EFFF,A8F3F7,A8EFFF,77F7FF,CCCCCC,B7D6D6".split(","),
                    "66FFCC": "66FFCC,F1E4BF,FFDDD3,8BEFFF,ABF1C5,B2EECF,78F7E5,BBBBBB,AAC8BE".split(","),
                    "66FF99": "66FF99,F6E28D,FFD5A7,8EEEFF,AEF093,B2EAA0,7AF6CC,AAAAAA,9CBBA6".split(","),
                    "66FF66": "66FF66,F8E15D,FFD08B,90EEFF,AFF061,B2E778,7BF6B2,999999,8EAD8E".split(","),
                    "66FF33": "66FF33,FAE02A,FFCF7C,92EDFF,B0EF2E,B2E757,7CF699,888888,819F77".split(","),
                    "66FF00": "66FF00,FAE000,FFCE79,92EDFF,B0EF00,B2E63C,7CF67F,777777,73925F".split(","),
                    "66CCFF": "66CCFF,B2BEF5,ADBEFF,57D1E1,8CC5FA,89C5FF,5ECEF0,BBBBBB,AABEC8".split(","),
                    "66CCCC": "66CCCC,BDBBC1,C3B7D1,6BCAD9,91C3C6,94C1CE,68CBD2,AAAAAA,9CB0B0".split(","),
                    "66CC99": "66CC99,C4B88F,D2B29F,77C4D3,95C294,9CBF9C,6EC8B6,999999,8EA399".split(","),
                    "66CC66": "66CC66,C8B65E,DAAE6E,7EC1CF,97C162,A0BD6A,72C69A,888888,819581".split(","),
                    "66CC33": "66CC33,CAB52D,DFAC42,81BFCD,98C030,A2BC3A,73C580,777777,738869".split(","),
                    "66CC00": "66CC00,CAB500,E0AC2E,82BECD,98C000,A3BC17,74C566,666666,667A51".split(","),
                    "6699FF": "6699FF,6E98FE,519CFE,3EA9B6,6A98FE,5B9AFE,52A1DA,AAAAAA,9CA6BB".split(","),
                    "6699CC": "6699CC,8593C7,8093CD,5A9FAB,7596C9,7396CC,609CBB,999999,8E99A3".split(","),
                    669999: "669999,918F93,978C9C,6997A3,7B9496,7E929A,67989E,888888,818B8B".split(","),
                    669966: "669966,988C61,A4876A,71929D,7F9263,859068,6B9581,777777,737D73".split(","),
                    669933: "669933,9B8B2F,AA853B,74909A,809231,888F37,6D9466,666666,66705B".split(","),
                    669900: "669900,9B8B00,AC8421,758F9A,809200,898E10,6D944D,555555,586244".split(","),
                    "6666FF": "6666FF,518DFF,0090EE,228791,5B79FF,337BF6,4476C8,999999,8E8EAD".split(","),
                    "6666CC": "6666CC,326ED5,0076C9,4D7982,4C6AD0,336ECA,596FA7,888888,818195".split(","),
                    666699: "666699,59699C,586A98,5E6D75,5F679A,5F6898,626987,777777,73737D".split(","),
                    666666: "666666,686666,6F6367,67656C,676666,6A6466,666569,666666,666666".split(","),
                    666633: "666633,6D6432,795F35,6B6067,696532,6F6234,68634D,555555,58584E".split(","),
                    666600: "666600,6F6300,7B5E11,6C5F66,6A6400,706208,696233,444444,4A4A36".split(","),
                    "6633FF": "6633FF,6E9AFF,008CE4,007179,6A66FF,335FF1,3352BC,888888,81779F".split(","),
                    "6633CC": "6633CC,0074EA,0076C2,445D64,3353DB,3354C7,554898,777777,736988".split(","),
                    663399: "663399,0059B4,005995,584C51,3346A6,334697,5F3F75,666666,665B70".split(","),
                    663366: "663366,324676,3D4763,623D41,4C3C6E,513D64,643853,555555,584E58".split(","),
                    663333: "663333,46433A,4F4031,663336,563B36,5A3932,663334,444444,4A4040".split(","),
                    663300: "663300,4A420B,534000,673033,583A05,5C3900,663119,333333,3D3328".split(","),
                    "6600FF": "6600FF,7AA1FF,008BE1,006B73,7050FF,3345F0,3335B9,777777,735F92".split(","),
                    "6600CC": "6600CC,007CF8,0076BF,42545B,333EE2,333BC5,542A93,666666,66517A".split(","),
                    660099: "660099,0065CA,005A94,563F44,3332B1,332D96,5E1F6E,555555,584462".split(","),
                    660066: "660066,00478E,253D60,602B2D,33237A,451E63,631549,444444,4A364A".split(","),
                    660033: "660033,323748,3F352F,651615,4C1B3D,521A31,650B24,333333,3D2833".split(","),
                    66E4: "660000,3C360F,453500,660B00,511B07,551A00,660500,222222,2F1B1B".split(","),
                    "33FFFF": "33FFFF,E7E5EF,E7DDFF,74EFFF,8DF2F7,8DEEFF,53F7FF,BBBBBB,9FC8C8".split(","),
                    "33FFCC": "33FFCC,EEE2BD,FCDBD4,76EFFF,90F0C4,97EDD0,54F7E5,AAAAAA,92BBB0".split(","),
                    "33FF99": "33FF99,F3DF8C,FFD4A6,78EEFF,93EF92,99E99F,55F6CC,999999,84AD99".split(","),
                    "33FF66": "33FF66,F5DE5C,FFCF88,79EEFF,94EE61,99E777,56F6B2,888888,779F81".split(","),
                    "33FF33": "33FF33,F7DD29,FFCD78,7AEDFF,95EE2E,99E655,56F699,777777,699269".split(","),
                    "33FF00": "33FF00,F7DD00,FFCD74,7AEDFF,95EE00,99E63A,56F67F,666666,5B8451".split(","),
                    "33CCFF": "33CCFF,AEBBF2,A7BBFF,00D1E0,70C3F8,6DC3FF,19CEEF,AAAAAA,92B0BB".split(","),
                    "33CCCC": "33CCCC,B9B7BF,BDB4D1,3ECAD9,76C1C5,78C0CE,38CBD2,999999,84A3A3".split(","),
                    "33CC99": "33CC99,C0B48E,CCAEA0,54C4D3,79C093,7FBD9C,43C8B6,888888,77958B".split(","),
                    "33CC66": "33CC66,C4B25D,D6AB6F,5EC1CF,7BBF61,84BB6A,48C69A,777777,698873".split(","),
                    "33CC33": "33CC33,C6B22C,DAA943,63BFCD,7CBF2F,86BA3B,4BC580,666666,5B7A5B".split(","),
                    "33CC00": "33CC00,C6B100,DBA830,64BFD7,7CBE00,87BA18,4BC56B,555555,4E6C44".split(","),
                    "3399FF": "3399FF,6993FA,3999FF,00ABB7,4E96FC,3699FF,19A2DB,999999,8499AD".split(","),
                    "3399CC": "3399CC,7F8EC3,758FCE,00A0AC,5993C7,5494CD,199CBC,888888,778B95".split(","),
                    339999: "339999,8C8A90,8F879D,3997A3,5F9194,61909B,36989E,777777,697D7D".split(","),
                    339966: "339966,92875E,9D826B,49929D,629062,688D68,3E9581,666666,5B7066".split(","),
                    339933: "339933,95862E,A4803C,4F909A,648F30,6B8C37,419466,555555,4E624E".split(","),
                    339900: "339900,958600,A58600,518F9A,648F00,6C8F00,42944D,444444,405536".split(","),
                    "3366FF": "3366FF,2581FF,0090EC,009099,2C73FF,197BF5,197BCC,888888,77819F".split(","),
                    "3366CC": "3366CC,2067CD,0078C9,007F87,2966CC,196FCA,1972A9,777777,697388".split(","),
                    336699: "336699,506195,43639A,146D76,416397,3B6499,236987,666666,5B6670".split(","),
                    336666: "336666,5E5D61,615B68,35656D,486163,4A6067,346569,555555,4E5858".split(","),
                    336633: "336633,645B2F,6D5737,3F6068,4B6031,505E35,39634D,444444,404A40".split(","),
                    336600: "336600,655B00,705617,415F66,4C6000,515E0B,3A6233,333333,333D28".split(","),
                    "3333FF": "3333FF,6094FF,008CE2,008187,4963FF,195FF0,195AC3,777777,696992".split(","),
                    "3333CC": "3333CC,0070E1,0078C2,006A70,1951D6,1955C7,194E9E,666666,5B5B7A".split(","),
                    333399: "333399,0054AA,005D99,005056,1943A1,194899,194177,555555,4E4E62".split(","),
                    333366: "333366,19376A,003B65,263C41,263568,193765,2C3753,444444,40404A".split(","),
                    333333: "333333,343333,373133,333236,333333,353233,333234,333333,333333".split(","),
                    333300: "333300,373200,3D2F09,363033,353200,383104,343119,222222,25251B".split(","),
                    "3300FF": "3300FF,739DFF,008BDF,007C82,534EFF,1945EF,193EC0,666666,5B5184".split(","),
                    "3300CC": "3300CC,0079F2,0076BF,006469,193CDF,193BC5,19329A,555555,4E446C".split(","),
                    330099: "330099,0062C4,005D96,00474B,1931AE,192E97,192372,444444,403655".split(","),
                    330066: "330066,00468B,003F67,212A2D,192378,191F66,2A1549,333333,33283D".split(","),
                    330033: "330033,002448,131E30,301517,19123D,230F31,310A25,222222,251B25".split(","),
                    33E4: "330000,1E1B08,221A00,330600,280D04,2A0D00,330300,111111,170D0D".split(","),
                    "00FFFF": "00FFFF,E6E4EE,E6DCFF,6EEFFF,73F1F6,73EDFF,37F7FF,AAAAAA,88BBBB".split(","),
                    "00FFCC": "00FFCC,EDE1BD,FBDAD4,70EFFF,76F0C4,7DECD0,38F7E5,999999,7AADA3".split(","),
                    "00FF99": "00FF99,F2DF8C,FFD3A6,72EEFF,79EF92,7FE99F,39F6CC,888888,6C9F8B".split(","),
                    "00FF66": "00FF66,F5DD5C,FFCF87,73EEFF,7AEE61,7FE776,39F6B2,777777,5F9273".split(","),
                    "00FF33": "00FF33,F6DD29,FFCD77,73EDFF,7BEE2E,7FE655,39F699,666666,51845B".split(","),
                    "00FF00": "00FF00,F6DC00,FFCD72,73EDFF,7BED00,7FE639,39F67F,555555,447744".split(","),
                    "00CCFF": "00CCFF,ADBAF2,A5BBFF,00D0DF,56C3F8,52C3FF,00CEEF,999999,7AA3AD".split(","),
                    "00CCCC": "00CCCC,B8B6BF,BBB3D1,29CAD9,5CC1C5,5DBFCE,14CBD2,888888,6C9595".split(","),
                    "00CC99": "00CC99,BFB38D,CBAEA0,47C4D3,5FBF93,65BD9C,23C8B6,777777,5F887D".split(","),
                    "00CC66": "00CC66,C3B25D,D4AA6F,54C1CF,61BF61,6ABB6A,2AC69A,666666,517A66".split(","),
                    "00CC33": "00CC33,C5B12B,D9A844,59BFCD,62BE2F,6CBA3B,2CC580,555555,446C4E".split(","),
                    "00CC00": "00CC00,C5B000,DAA831,5ABFCD,62BE00,6DBA18,2DC566,444444,365F36".split(","),
                    "0099FF": "0099FF,6792F8,3398FF,00ACB7,3395FB,1998FF,00A2DB,888888,6C8B9F".split(","),
                    "0099CC": "0099CC,7E8DC2,728ECF,00A1AC,3F93C7,3993CD,009DBC,777777,5F7D88".split(","),
                    "009999": "009999,8A898F,8D869D,1F97A3,459194,468F9B,0F989E,666666,517070".split(","),
                    "009966": "009966,90865E,9B816C,39929D,488F62,4D8D69,1C9581,555555,446258".split(","),
                    "009933": "009933,93852D,A27E3D,42909A,498F30,518B38,219466,444444,365540".split(","),
                    "009900": "009900,948500,A37E25,448F9A,4A8F00,518B12,22944D,333333,284728".split(","),
                    "0066FF": "0066FF,007EFE,0090EC,00929A,0072FE,007BF5,007CCC,777777,5F7392".split(","),
                    "0066CC": "0066CC,1A66CC,0078C9,00828A,0D66CC,006FCA,0074AB,666666,51667A".split(","),
                    "006699": "006699,4E5F93,3D629A,00727A,276296,1E6499,006C89,555555,445862".split(","),
                    "006666": "006666,5C5B5F,5E5A69,15656D,2E6062,2F6067,0A6569,444444,364A4A".split(","),
                    "006633": "006633,61592E,6A5538,2A6068,305F30,355D35,15634D,333333,283D33".split(","),
                    "006600": "006600,635800,6D5418,2D5F66,315F00,365D0C,166233,222222,1B2F1B".split(","),
                    "0033FF": "0033FF,5B91FF,008CE2,008389,2D62FF,005FF0,005BC4,666666,515B84".split(","),
                    "0033CC": "0033CC,006FDE,0078C2,006F74,0051D5,0055C7,0051A0,555555,444E6C".split(","),
                    "003399": "003399,0053A6,005E9A,00595E,00439F,004899,00467B,444444,364055".split(","),
                    "003366": "003366,0D3366,003E68,004347,063366,003867,003B56,333333,28333D".split(","),
                    "003333": "003333,2E2E30,2F2D34,0A3236,173031,173033,053234,222222,1B2525".split(","),
                    "003300": "003300,312C00,362A0C,173033,182F00,1B2E06,0B3119,111111,0D170D".split(","),
                    "0000FF": "0000FF,719CFF,008BDF,007F85,384EFF,0045EF,003FC2,555555,444477".split(","),
                    "0000CC": "0000CC,0078F0,0076BE,006A6E,003CDE,003BC5,00359D,444444,36365F".split(","),
                    "000099": "000099,0060C1,005E97,005155,0030AD,002F98,002877,333333,282847".split(","),
                    "000066": "000066,004487,004168,003739,002276,002067,001B4F,222222,1B1B2F".split(","),
                    "000033": "000033,002346,002135,001C1D,00113C,001034,000E28,111111,0D0D17".split(","),
                    "000000": "000000,000000,000000,000000,000000,000000,000000,000000,000000".split(",")
                }
            };
            this.Pantone = new w({
                80: "F4ED7C",
                101: "F4ED47",
                102: "F9E814",
                103: "C6AD0F",
                104: "AD9B0C",
                105: "82750F",
                106: "F7E859",
                107: "F9E526",
                108: "F9DD16",
                109: "F9D616",
                110: "D8B511",
                111: "AA930A",
                112: "99840A",
                113: "F9E55B",
                114: "F9E24C",
                115: "F9E04C",
                116: "FCD116",
                "116 2X": "F7B50C",
                117: "C6A00C",
                118: "AA8E0A",
                119: "897719",
                120: "F9E27F",
                1205: "F7E8AA",
                121: "F9E070",
                1215: "F9E08C",
                122: "FCD856",
                1225: "FFCC49",
                123: "FFC61E",
                1235: "FCB514",
                124: "E0AA0F",
                1245: "BF910C",
                125: "B58C0A",
                1255: "A37F14",
                126: "A38205",
                1265: "7C6316",
                127: "F4E287",
                128: "F4DB60",
                129: "F2D13D",
                130: "EAAF0F",
                "130 2X": "E2980",
                131: "C6930A",
                132: "9E7C0A",
                133: "705B0A",
                134: "FFD87F",
                1345: "FFD691",
                135: "FCC963",
                1355: "FCCE87",
                328: "FCBF49",
                3285: "FCBA5E",
                137: "FCA311",
                1375: "F99B0C",
                138: "D88C02",
                1385: "CC7A02",
                139: "AF7505",
                1395: "996007",
                140: "7A5B11",
                1405: "6B4714",
                141: "F2CE68",
                142: "F2BF49",
                143: "EFB22D",
                144: "E28C05",
                145: "C67F07",
                146: "9E6B05",
                147: "725E26",
                148: "FFD69B",
                1485: "FFB777",
                149: "FCCC93",
                1495: "FF993F",
                150: "FCAD56",
                1505: "F47C00",
                151: "F77F00",
                152: "DD7500",
                1525: "B55400",
                153: "BC6D0A",
                1535: "8C4400",
                154: "995905",
                1545: "4C280F",
                155: "F4DBAA",
                1555: "F9BF9E",
                156: "F2C68C",
                1565: "FCA577",
                157: "EDA04F",
                1575: "FC8744",
                158: "E87511",
                1585: "F96B07",
                159: "C66005",
                1595: "D15B05",
                160: "9E540A",
                1605: "A04F11",
                161: "633A11",
                1615: "843F0F",
                162: "F9C6AA",
                1625: "F9A58C",
                163: "FC9E70",
                1635: "F98E6D",
                164: "FC7F3F",
                1645: "F97242",
                165: "F96302",
                "165 2X": "EA4F00",
                1655: "F95602",
                166: "DD5900",
                1665: "DD4F05",
                167: "BC4F07",
                1675: "A53F0F",
                168: "6D3011",
                1685: "843511",
                169: "F9BAAA",
                170: "F98972",
                171: "F9603A",
                172: "F74902",
                173: "D14414",
                174: "933311",
                175: "6D3321",
                176: "F9AFAD",
                1765: "F99EA3",
                1767: "F9B2B7",
                177: "F9827F",
                1775: "F9848E",
                1777: "FC6675",
                178: "F95E59",
                1785: "FC4F59",
                1787: "F43F4F",
                1788: "EF2B2D",
                "1788 2X": "D6280",
                179: "E23D28",
                1795: "D62828",
                1797: "CC2D30",
                180: "C13828",
                1805: "AF2626",
                1807: "A03033",
                181: "7C2D23",
                1810: "7C211E",
                1817: "5B2D28",
                182: "F9BFC1",
                183: "FC8C99",
                184: "FC5E72",
                185: "E8112D",
                "185 2X": "D11600",
                186: "CE1126",
                187: "AF1E2D",
                188: "7C2128",
                189: "FFA3B2",
                1895: "FCBFC9",
                190: "FC758E",
                1905: "FC9BB2",
                191: "F4476B",
                1915: "F4547C",
                192: "E5053A",
                1925: "E00747",
                193: "DB828C",
                1935: "C10538",
                194: "992135",
                1945: "A80C35",
                1955: "931638",
                196: "F4C9C9",
                197: "EF99A3",
                198: "772D35",
                199: "D81C3F",
                200: "C41E3A",
                201: "A32638",
                202: "8C2633",
                203: "F2AFC1",
                204: "ED7A9E",
                205: "E54C7C",
                206: "D30547",
                207: "BAAA9E",
                208: "8E2344",
                209: "75263D",
                210: "FFA0BF",
                211: "FF77A8",
                212: "F94F8E",
                213: "EA0F6B",
                214: "CC0256",
                215: "A50544",
                216: "7C1E3F",
                217: "F4BFD1",
                218: "ED72AA",
                219: "E23282",
                220: "AA004F",
                221: "930042",
                222: "70193D",
                223: "F993C4",
                224: "F46BAF",
                225: "ED2893",
                226: "D60270",
                227: "AD005B",
                228: "8C004C",
                229: "6D213F",
                230: "FFA0CC",
                231: "FC70BA",
                232: "F43FA5",
                233: "CE007C",
                234: "AA0066",
                235: "8E0554",
                236: "F9AFD3",
                2365: "F7C4D8",
                237: "F484C4",
                2375: "EA6BBF",
                238: "ED4FAF",
                2385: "DB28A5",
                239: "E0219E",
                "239 2X": "C4057C",
                2395: "C4008C",
                240: "C40F89",
                2405: "A8007A",
                241: "AD0075",
                2415: "9B0070",
                242: "7C1C51",
                2425: "87005B",
                243: "F2BAD8",
                244: "EDA0D3",
                245: "E87FC9",
                246: "CC00A0",
                247: "B7008E",
                248: "A3057F",
                249: "7F2860",
                250: "EDC4DD",
                251: "E29ED6",
                252: "D36BC6",
                253: "AF23A5",
                254: "A02D96",
                255: "772D6B",
                256: "E5C4D6",
                2562: "D8A8D8",
                2563: "D1A0CC",
                2567: "BF93CC",
                257: "D3A5C9",
                2572: "C687D1",
                2573: "BA7CBC",
                2577: "AA72BF",
                258: "9B4F96",
                2582: "AA47BA",
                2583: "9E4FA5",
                2587: "8E47AD",
                259: "72166B",
                2592: "930FA5",
                "2592 2X": "720082",
                2593: "872B93",
                2597: "66008C",
                260: "681E5B",
                2602: "820C8E",
                2603: "70147A",
                2607: "5B027A",
                261: "5E2154",
                2612: "701E72",
                2613: "66116D",
                2617: "560C70",
                262: "542344",
                2622: "602D59",
                2623: "5B195E",
                2627: "4C145E",
                263: "E0CEE0",
                2635: "C9ADD8",
                264: "C6AADB",
                2645: "B591D1",
                265: "9663C4",
                2655: "9B6DC6",
                266: "6D28AA",
                2665: "894FBF",
                267: "59118E",
                268: "4F2170",
                2685: "56008C",
                269: "442359",
                2695: "44235E",
                270: "BAAFD3",
                2705: "AD9ED3",
                2706: "D1CEDD",
                2707: "BFD1E5",
                2708: "AFBCDB",
                271: "9E91C6",
                2715: "937ACC",
                2716: "A5A0D6",
                2717: "A5BAE0",
                2718: "5B77CC",
                272: "8977BA",
                2725: "7251BC",
                2726: "6656BC",
                2727: "5E68C4",
                2728: "3044B5",
                273: "38197A",
                2735: "4F0093",
                2736: "4930AD",
                2738: "2D008E",
                274: "2B1166",
                2745: "3F0077",
                2746: "3F2893",
                2747: "1C146B",
                2748: "1E1C77",
                275: "260F54",
                2755: "35006D",
                2756: "332875",
                2757: "141654",
                2758: "192168",
                276: "2B2147",
                2765: "2B0C56",
                2766: "2B265B",
                2767: "14213D",
                2768: "112151",
                277: "B5D1E8",
                278: "99BADD",
                279: "6689CC",
                280: "002B7F",

                281: "002868",
                282: "002654",
                283: "9BC4E2",
                284: "75AADB",
                285: "3A75C4",
                286: "0038A8",
                287: "003893",
                328: "00337F",
                289: "002649",
                290: "C4D8E2",
                2905: "93C6E0",
                291: "A8CEE2",
                2915: "60AFDD",
                292: "75B2DD",
                2925: "008ED6",
                293: "0051BA",
                2935: "005BBF",
                294: "003F87",
                2945: "0054A0",
                295: "00386B",
                2955: "003D6B",
                296: "002D47",
                2965: "00334C",
                297: "82C6E2",
                2975: "BAE0E2",
                298: "51B5E0",
                2985: "51BFE2",
                299: "00A3DD",
                "299 2X": "007FCC",
                2995: "00A5DB",
                300: "0072C6",
                3005: "0084C9",
                301: "005B99",
                3015: "00709E",
                302: "004F6D",
                3025: "00546B",
                303: "003F54",
                3035: "004454",
                304: "A5DDE2",
                305: "70CEE2",
                306: "00BCE2",
                "306 2X": "00A3D1",
                307: "007AA5",
                308: "00607C",
                309: "003F49",
                310: "72D1DD",
                3105: "7FD6DB",
                311: "28C4D8",
                3115: "2DC6D6",
                312: "00ADC6",
                3125: "00B7C6",
                313: "0099B5",
                3135: "009BAA",
                314: "00829B",
                3145: "00848E",
                315: "006B77",
                3155: "006D75",
                316: "00494F",
                3165: "00565B",
                317: "C9E8DD",
                318: "93DDDB",
                319: "4CCED1",
                320: "009EA0",
                "320 2X": "007F82",
                321: "008789",
                322: "007272",
                323: "006663",
                324: "AADDD6",
                3242: "87DDD1",
                3245: "8CE0D1",
                3248: "7AD3C1",
                325: "56C9C1",
                3252: "56D6C9",
                3255: "47D6C1",
                3258: "35C4AF",
                326: "00B2AA",
                3262: "00C1B5",
                3265: "00C6B2",
                3268: "00AF99",
                327: "008C82",
                "327 2X": "008977",
                3272: "00AA9E",
                3275: "00B2A0",
                3278: "009B84",
                328: "007770",
                3282: "008C82",
                3285: "009987",
                3328: "008270",
                329: "006D66",
                3292: "006056",
                3295: "008272",
                3298: "006B5B",
                330: "005951",
                3302: "00493F",
                3305: "004F42",
                3308: "004438",
                331: "BAEAD6",
                332: "A0E5CE",
                333: "5EDDC1",
                334: "00997C",
                335: "007C66",
                336: "006854",
                337: "9BDBC1",
                3375: "8EE2BC",
                338: "7AD1B5",
                3385: "54D8A8",
                339: "00B28C",
                3395: "00C993",
                340: "009977",
                3405: "00B27A",
                341: "007A5E",
                3415: "007C59",
                342: "006B54",
                3425: "006847",
                343: "00563F",
                3435: "024930",
                344: "B5E2BF",
                345: "96D8AF",
                346: "70CE9B",
                347: "009E60",
                348: "008751",
                349: "006B3F",
                350: "234F33",
                351: "B5E8BF",
                352: "99E5B2",
                353: "84E2A8",
                354: "00B760",
                355: "009E49",
                356: "007A3D",
                357: "215B33",
                358: "AADD96",
                359: "A0DB8E",
                360: "60C659",
                361: "1EB53A",
                362: "339E35",
                363: "3D8E33",
                364: "3A7728",
                365: "D3E8A3",
                366: "C4E58E",
                367: "AADD6D",
                368: "5BBF21",
                "368 2X": "009E0F",
                369: "56AA1C",
                370: "568E14",
                371: "566B21",
                372: "D8ED96",
                373: "CEEA82",
                374: "BAE860",
                375: "8CD600",
                "375 2X": "54BC00",
                376: "7FBA00",
                377: "709302",
                378: "566314",
                379: "E0EA68",
                380: "D6E542",
                381: "CCE226",
                382: "BAD80A",
                "382 2X": "9EC400",
                383: "A3AF07",
                384: "939905",
                385: "707014",
                386: "E8ED60",
                387: "E0ED44",
                388: "D6E80F",
                389: "CEE007",
                390: "BAC405",
                391: "9E9E07",
                392: "848205",
                393: "F2EF87",
                3935: "F2ED6D",
                394: "EAED35",
                3945: "EFEA07",
                395: "E5E811",
                3955: "EDE211",
                396: "E0E20C",
                3965: "E8DD11",
                397: "C1BF0A",
                3975: "B5A80C",
                398: "AFA80A",
                3985: "998C0A",
                399: "998E07",
                3995: "6D6002",
                400: "D1C6B5",
                401: "C1B5A5",
                402: "AFA593",
                403: "998C7C",
                404: "827566",
                405: "6B5E4F",
                406: "CEC1B5",
                408: "A8998C",
                409: "99897C",
                410: "7C6D63",
                411: "66594C",
                412: "3D3028",
                413: "C6C1B2",
                414: "B5AFA0",
                415: "A39E8C",
                416: "8E8C7A",
                417: "777263",
                418: "605E4F",
                419: "282821",
                420: "D1CCBF",
                421: "BFBAAF",
                422: "AFAAA3",
                423: "96938E",
                424: "827F77",
                425: "60605B",
                426: "2B2B28",
                427: "DDDBD1",
                428: "D1CEC6",
                429: "ADAFAA",
                430: "919693",
                431: "666D70",
                432: "444F51",
                433: "30383A",
                "433 2X": "0A0C11",
                434: "E0D1C6",
                435: "D3BFB7",
                436: "BCA59E",
                437: "8C706B",
                438: "593F3D",
                439: "493533",
                440: "3F302B",
                441: "D1D1C6",
                442: "BABFB7",
                443: "A3A8A3",
                444: "898E8C",
                445: "565959",
                446: "494C49",
                447: "3F3F38",
                448: "54472D",
                4485: "604C11",
                449: "544726",
                4495: "877530",
                450: "60542B",
                4505: "A09151",
                451: "ADA07A",
                4515: "BCAD75",
                452: "C4B796",
                "452 2X": "009944",
                4525: "CCBF8E",
                453: "D6CCAF",
                4535: "DBCEA5",
                454: "E2D8BF",
                4545: "E5DBBA",
                455: "665614",
                456: "998714",
                457: "B59B0C",
                458: "DDCC6B",
                459: "E2D67C",
                460: "EADD96",
                461: "EDE5AD",
                462: "5B4723",
                4625: "472311",
                463: "755426",
                4635: "8C5933",
                464: "876028",
                "464 2X": "704214",
                4645: "B28260",
                465: "C1A875",
                4655: "C49977",
                466: "D1BF91",
                4665: "D8B596",
                467: "DDCCA5",
                4675: "E5C6AA",
                468: "E2D6B5",
                4685: "EDD3BC",
                469: "603311",
                4695: "51261C",
                470: "9B4F19",
                4705: "7C513D",
                471: "BC5E1E",
                "471 2X": "A34402",
                4715: "99705B",
                472: "EAAA7A",
                4725: "B5917C",
                473: "F4C4A0",
                4735: "CCAF9B",
                474: "F4CCAA",
                4745: "D8BFAA",
                475: "F7D3B5",
                4755: "E2CCBA",
                476: "593D2B",
                477: "633826",
                478: "7A3F28",
                479: "AF8970",
                480: "D3B7A3",
                481: "E0CCBA",
                482: "E5D3C1",
                483: "6B3021",
                484: "9B301C",
                485: "D81E05",
                "485 2X": "CC0C00",
                486: "ED9E84",
                487: "EFB5A0",
                488: "F2C4AF",
                489: "F2D1BF",
                490: "5B2626",
                491: "752828",
                492: "913338",
                494: "F2ADB2",
                495: "F4BCBF",
                496: "F7C9C6",
                497: "512826",
                4975: "441E1C",
                498: "6D332B",
                4985: "844949",
                499: "7A382D",
                4995: "A56B6D",
                500: "CE898C",
                5005: "BC8787",
                501: "EAB2B2",
                5015: "D8ADA8",
                502: "F2C6C4",
                5025: "E2BCB7",
                503: "F4D1CC",
                5035: "EDCEC6",
                504: "511E26",
                505: "661E2B",
                506: "7A2638",
                507: "D8899B",
                508: "E8A5AF",
                509: "F2BABF",
                510: "F4C6C9",
                511: "602144",
                5115: "4F213A",
                512: "84216B",
                5125: "754760",
                513: "9E2387",
                5135: "936B7F",
                514: "D884BC",
                5145: "AD8799",
                515: "E8A3C9",
                5155: "CCAFB7",
                516: "F2BAD3",
                5165: "E0C9CC",
                517: "F4CCD8",
                5175: "E8D6D1",
                518: "512D44",
                5185: "472835",
                519: "63305E",
                5195: "593344",
                520: "703572",
                5205: "8E6877",
                521: "B58CB2",
                5215: "B5939B",
                522: "C6A3C1",
                5225: "CCADAF",
                523: "D3B7CC",
                5235: "DDC6C4",
                524: "E2CCD3",
                5245: "E5D3CC",
                525: "512654",
                5255: "35264F",
                526: "68217A",
                5265: "493D63",
                527: "7A1E99",
                5275: "605677",
                528: "AF72C1",
                5285: "8C8299",
                529: "CEA3D3",
                5295: "B2A8B5",
                530: "D6AFD6",
                5305: "CCC1C6",
                531: "E5C6DB",
                5315: "DBD3D3",
                532: "353842",
                533: "353F5B",
                534: "3A4972",
                535: "9BA3B7",
                536: "ADB2C1",
                537: "C4C6CE",
                538: "D6D3D6",
                539: "003049",
                5395: "02283A",
                540: "00335B",
                5405: "3F6075",
                541: "003F77",
                5415: "607C8C",
                542: "6693BC",
                5425: "8499A5",
                543: "93B7D1",
                5435: "AFBCBF",
                544: "B7CCDB",
                5445: "C4CCCC",
                545: "C4D3DD",
                5455: "D6D8D3",
                546: "0C3844",
                5463: "00353A",
                5467: "193833",
                547: "003F54",
                5473: "26686D",
                5477: "3A564F",
                548: "004459",
                5483: "609191",
                5487: "667C72",
                549: "5E99AA",
                5493: "8CAFAD",
                5497: "91A399",
                550: "87AFBF",
                5503: "AAC4BF",
                5507: "AFBAB2",
                551: "A3C1C9",
                5513: "CED8D1",
                5517: "C9CEC4",
                552: "C4D6D6",
                5523: "D6DDD6",
                5527: "CED1C6",
                553: "234435",
                5535: "213D30",
                554: "195E47",
                5545: "4F6D5E",
                555: "076D54",
                5555: "779182",
                556: "7AA891",
                5565: "96AA99",
                557: "A3C1AD",
                5575: "AFBFAD",
                558: "B7CEBC",
                5585: "C4CEBF",
                559: "C6D6C4",
                5595: "D8DBCC",
                560: "2B4C3F",
                5605: "233A2D",
                561: "266659",
                5615: "546856",
                562: "1E7A6D",
                5625: "728470",
                563: "7FBCAA",
                5635: "9EAA99",
                564: "05705E",
                5645: "BCC1B2",
                565: "BCDBCC",
                5655: "C6CCBA",
                566: "D1E2D3",
                5665: "D6D6C6",
                567: "265142",
                569: "008772",
                570: "7FC6B2",
                571: "AADBC6",
                572: "BCE2CE",
                573: "CCE5D6",
                574: "495928",
                5743: "3F4926",
                5747: "424716",
                575: "547730",
                5753: "5E663A",
                5757: "6B702B",
                576: "608E3A",
                5763: "777C4F",
                5767: "8C914F",
                577: "B5CC8E",
                5773: "9B9E72",
                5777: "AAAD75",
                578: "C6D6A0",
                5783: "B5B58E",
                5787: "C6C699",
                579: "C9D6A3",
                5793: "C6C6A5",
                5797: "D3D1AA",
                580: "D8DDB5",
                5803: "D8D6B7",
                5807: "E0DDBC",
                581: "605E11",
                5815: "494411",
                582: "878905",
                5825: "75702B",
                583: "AABA0A",
                5835: "9E9959",
                584: "CED649",
                5845: "B2AA70",
                585: "DBE06B",
                5855: "CCC693",
                586: "E2E584",
                5865: "D6CEA3",
                587: "E8E89B",
                5875: "E0DBB5",
                600: "F4EDAF",
                601: "F2ED9E",
                602: "F2EA87",
                603: "EDE85B",
                604: "E8DD21",
                605: "DDCE11",
                606: "D3BF11",
                607: "F2EABC",
                608: "EFE8AD",
                609: "EAE596",
                610: "E2DB72",
                611: "D6CE49",
                612: "C4BA00",
                613: "AFA00C",
                614: "EAE2B7",
                615: "E2DBAA",
                616: "DDD69B",
                617: "CCC47C",
                618: "B5AA59",
                619: "968C28",
                620: "847711",
                621: "D8DDCE",
                622: "C1D1BF",
                623: "A5BFAA",
                624: "7FA08C",
                625: "5B8772",
                626: "21543F",
                627: "0C3026",
                628: "CCE2DD",
                629: "B2D8D8",
                630: "8CCCD3",
                631: "54B7C6",
                632: "00A0BA",
                633: "007F99",
                634: "00667F",
                635: "BAE0E0",
                636: "99D6DD",
                637: "6BC9DB",
                638: "00B5D6",
                639: "00A0C4",
                640: "008CB2",
                641: "007AA5",
                642: "D1D8D8",
                643: "C6D1D6",
                644: "9BAFC4",
                645: "7796B2",
                646: "5E82A3",
                647: "26547C",
                648: "00305E",
                649: "D6D6D8",
                650: "BFC6D1",
                651: "9BAABF",
                652: "6D87A8",
                653: "335687",
                654: "0F2B5B",
                655: "0C1C47",
                656: "D6DBE0",
                657: "C1C9DD",
                658: "A5AFD6",
                659: "7F8CBF",
                660: "5960A8",
                661: "2D338E",
                662: "0C1975",
                663: "E2D3D6",
                664: "D8CCD1",
                665: "C6B5C4",
                666: "A893AD",
                667: "7F6689",
                668: "664975",
                669: "472B59",
                670: "F2D6D8",
                671: "EFC6D3",
                672: "EAAAC4",
                673: "E08CB2",
                674: "D36B9E",
                675: "BC3877",
                676: "A00054",
                677: "EDD6D6",
                678: "EACCCE",
                679: "E5BFC6",
                680: "D39EAF",
                681: "B7728E",
                682: "A05175",
                683: "7F284F",
                684: "EFCCCE",
                685: "EABFC4",
                686: "E0AABA",
                687: "C9899E",
                688: "B26684",
                689: "934266",
                690: "702342",
                691: "EFD1C9",
                692: "E8BFBA",
                693: "DBA8A5",
                694: "C98C8C",
                695: "B26B70",
                696: "8E4749",
                697: "7F383A",
                698: "F7D1CC",
                699: "F7BFBF",
                700: "F2A5AA",
                701: "E8878E",
                702: "D6606D",
                703: "B73844",
                704: "9E2828",
                705: "F9DDD6",
                706: "FCC9C6",
                707: "FCADAF",
                708: "F98E99",
                709: "F26877",
                710: "E04251",
                711: "D12D33",
                712: "FFD3AA",
                713: "F9C9A3",
                714: "F9BA82",
                715: "FC9E49",
                716: "F28411",
                717: "D36D00",
                718: "BF5B00",
                719: "F4D1AF",
                720: "EFC49E",
                721: "E8B282",
                722: "D18E54",
                723: "BA7530",
                724: "8E4905",
                725: "753802",
                726: "EDD3B5",
                727: "E2BF9B",
                728: "D3A87C",
                729: "C18E60",
                730: "AA753F",
                731: "723F0A",
                732: "60330A",
                801: "00AACC",
                "801 2X": "0089AF",
                802: "60DD49",
                "802 2X": "1CCE28",
                803: "FFED38",
                "803 2X": "FFD816",
                804: "FF9338",
                "804 2X": "FF7F1E",
                805: "F95951",
                "805 2X": "F93A2B",
                806: "FF0093",
                "806 2X": "F7027C",
                807: "D6009E",
                "807 2X": "BF008C",
                808: "00B59B",
                "808 2X": "00A087",
                809: "DDE00F",
                "809 2X": "D6D60C",
                810: "FFCC1E",
                "810 2X": "FFBC21",
                811: "FF7247",
                "811 2X": "FF5416",
                812: "FC2366",
                "812 2X": "FC074F",
                813: "E50099",
                "813 2X": "D10084",
                814: "8C60C1",
                "814 2X": "703FAF",
                White: "FFFFFF",
                Black: "000000"
            });
            this.Pantone.init = function () {
                var a, b, c, d;
                this.Data = {};
                for (a in this.SourceData) if (b = this.SourceData[a], b = j(b)) c = r.getColorByRGB(b), d = a, "White" != d && "Black" != d && (d = "Pantone " + d), this.Data[a] = {
                    Name: d,
                    RGB: b,
                    HSV: c
                }, this.indexByHue(a);
                this.Inited = !0
            };
            this.RAL = new w({
                1E3: {
                    Name2: "Green beige",
                    RGB: {
                        R: 214,
                        G: 199,
                        B: 148
                    }
                },
                1001: {
                    Name2: "Beige",
                    RGB: {
                        R: 217,
                        G: 186,
                        B: 140
                    }
                },
                1002: {
                    Name2: "Sand yellow",
                    RGB: {
                        R: 214,
                        G: 176,
                        B: 117
                    }
                },
                1003: {
                    Name2: "Signal yellow",
                    RGB: {
                        R: 252,
                        G: 163,
                        B: 41
                    }
                },
                1004: {
                    Name2: "Golden yellow",
                    RGB: {
                        R: 227,
                        G: 150,
                        B: 36
                    }
                },
                1005: {
                    Name2: "Honey yellow",
                    RGB: {
                        R: 201,
                        G: 135,
                        B: 33
                    }
                },
                1006: {
                    Name2: "Maize yellow",
                    RGB: {
                        R: 224,
                        G: 130,
                        B: 31
                    }
                },
                1007: {
                    Name2: "Daffodil yellow",
                    RGB: {
                        R: 227,
                        G: 122,
                        B: 31
                    }
                },
                1011: {
                    Name2: "Brown beige",
                    RGB: {
                        R: 173,
                        G: 122,
                        B: 79
                    }
                },
                1012: {
                    Name2: "Lemon yellow",
                    RGB: {
                        R: 227,
                        G: 184,
                        B: 56
                    }
                },
                1013: {
                    Name2: "Oyster white",
                    RGB: {
                        R: 255,
                        G: 245,
                        B: 227
                    }
                },
                1014: {
                    Name2: "Ivory",
                    RGB: {
                        R: 240,
                        G: 214,
                        B: 171
                    }
                },
                1015: {
                    Name2: "Light ivory",
                    RGB: {
                        R: 252,
                        G: 235,
                        B: 204
                    }
                },
                1016: {
                    Name2: "Sulfur yellow",
                    RGB: {
                        R: 255,
                        G: 245,
                        B: 66
                    }
                },
                1017: {
                    Name2: "Saffron yellow",
                    RGB: {
                        R: 255,
                        G: 171,
                        B: 89
                    }
                },
                1018: {
                    Name2: "Zinc yellow",
                    RGB: {
                        R: 255,
                        G: 214,
                        B: 77
                    }
                },
                1019: {
                    Name2: "Grey beige",
                    RGB: {
                        R: 163,
                        G: 140,
                        B: 122
                    }
                },
                1020: {
                    Name2: "Olive yellow",
                    RGB: {
                        R: 156,
                        G: 143,
                        B: 97
                    }
                },
                1021: {
                    Name2: "Rape yellow",
                    RGB: {
                        R: 252,
                        G: 189,
                        B: 31
                    }
                },
                1023: {
                    Name2: "Traffic yellow",
                    RGB: {
                        R: 252,
                        G: 184,
                        B: 33
                    }
                },
                1024: {
                    Name2: "Ochre yellow",
                    RGB: {
                        R: 181,
                        G: 140,
                        B: 79
                    }
                },
                1026: {
                    Name2: "Luminous yellow",
                    RGB: {
                        R: 255,
                        G: 255,
                        B: 10
                    }
                },
                1027: {
                    Name2: "Curry",
                    RGB: {
                        R: 153,
                        G: 117,
                        B: 33
                    }
                },
                1028: {
                    Name2: "Melon yellow",
                    RGB: {
                        R: 255,
                        G: 140,
                        B: 26
                    }
                },
                1032: {
                    Name2: "Broom yellow",
                    RGB: {
                        R: 227,
                        G: 163,
                        B: 41
                    }
                },
                1033: {
                    Name2: "Dahlia yellow",
                    RGB: {
                        R: 255,
                        G: 148,
                        B: 54
                    }
                },
                1034: {
                    Name2: "Pastel yellow",
                    RGB: {
                        R: 247,
                        G: 153,
                        B: 92
                    }
                },
                2E3: {
                    Name2: "Yellow orange",
                    RGB: {
                        R: 224,
                        G: 94,
                        B: 31
                    }
                },
                2001: {
                    Name2: "Red orange",
                    RGB: {
                        R: 186,
                        G: 46,
                        B: 33
                    }
                },
                2002: {
                    Name2: "Vermilion",
                    RGB: {
                        R: 204,
                        G: 36,
                        B: 28
                    }
                },
                2003: {
                    Name2: "Pastel orange",
                    RGB: {
                        R: 255,
                        G: 99,
                        B: 54
                    }
                },
                2004: {
                    Name2: "Pure orange",
                    RGB: {
                        R: 242,
                        G: 59,
                        B: 28
                    }
                },
                2005: {
                    Name2: "Luminous orange",
                    RGB: {
                        R: 252,
                        G: 28,
                        B: 20
                    }
                },
                2007: {
                    Name2: "Luminous bright orange",
                    RGB: {
                        R: 255,
                        G: 117,
                        B: 33
                    }
                },
                2008: {
                    Name2: "Bright red orange",
                    RGB: {
                        R: 250,
                        G: 79,
                        B: 41
                    }
                },
                2009: {
                    Name2: "Traffic orange",
                    RGB: {
                        R: 235,
                        G: 59,
                        B: 28
                    }
                },
                2010: {
                    Name2: "Signal orange",
                    RGB: {
                        R: 212,
                        G: 69,
                        B: 41
                    }
                },
                2011: {
                    Name2: "Deep orange",
                    RGB: {
                        R: 237,
                        G: 92,
                        B: 41
                    }
                },
                2012: {
                    Name2: "Salmon orange",
                    RGB: {
                        R: 222,
                        G: 82,
                        B: 71
                    }
                },
                3E3: {
                    Name2: "Flame red",
                    RGB: {
                        R: 171,
                        G: 31,
                        B: 28
                    }
                },
                3001: {
                    Name2: "Signal red",
                    RGB: {
                        R: 163,
                        G: 23,
                        B: 26
                    }
                },
                3002: {
                    Name2: "Carmine red",
                    RGB: {
                        R: 163,
                        G: 26,
                        B: 26
                    }
                },
                3003: {
                    Name2: "Ruby red",
                    RGB: {
                        R: 138,
                        G: 18,
                        B: 20
                    }
                },
                3004: {
                    Name2: "Purple red",
                    RGB: {
                        R: 105,
                        G: 15,
                        B: 20
                    }
                },
                3005: {
                    Name2: "Wine red",
                    RGB: {
                        R: 79,
                        G: 18,
                        B: 26
                    }
                },
                3007: {
                    Name2: "Black red",
                    RGB: {
                        R: 46,
                        G: 18,
                        B: 26
                    }
                },
                3009: {
                    Name2: "Oxide red",
                    RGB: {
                        R: 94,
                        G: 33,
                        B: 33
                    }
                },
                3011: {
                    Name2: "Brown red",
                    RGB: {
                        R: 120,
                        G: 20,
                        B: 23
                    }
                },
                3012: {
                    Name2: "Beige red",
                    RGB: {
                        R: 204,
                        G: 130,
                        B: 115
                    }
                },
                3013: {
                    Name2: "Tomato red",
                    RGB: {
                        R: 150,
                        G: 31,
                        B: 28
                    }
                },
                3014: {
                    Name2: "Antique pink",
                    RGB: {
                        R: 217,
                        G: 102,
                        B: 117
                    }
                },
                3015: {
                    Name2: "Light pink",
                    RGB: {
                        R: 232,
                        G: 156,
                        B: 181
                    }
                },
                3016: {
                    Name2: "Coral red",
                    RGB: {
                        R: 166,
                        G: 36,
                        B: 38
                    }
                },
                3017: {
                    Name2: "Rose",
                    RGB: {
                        R: 209,
                        G: 54,
                        B: 84
                    }
                },
                3018: {
                    Name2: "Strawberry red",
                    RGB: {
                        R: 207,
                        G: 41,
                        B: 66
                    }
                },
                3020: {
                    Name2: "Traffic red",
                    RGB: {
                        R: 199,
                        G: 23,
                        B: 18
                    }
                },
                3022: {
                    Name2: "Salmon pink",
                    RGB: {
                        R: 217,
                        G: 89,
                        B: 79
                    }
                },
                3024: {
                    Name2: "Luminous red",
                    RGB: {
                        R: 252,
                        G: 10,
                        B: 28
                    }
                },
                3026: {
                    Name2: "Luminous bright red",
                    RGB: {
                        R: 252,
                        G: 20,
                        B: 20
                    }
                },
                3027: {
                    Name2: "Raspberry red",
                    RGB: {
                        R: 181,
                        G: 18,
                        B: 51
                    }
                },
                3031: {
                    Name2: "Orient red",
                    RGB: {
                        R: 166,
                        G: 28,
                        B: 46
                    }
                },
                4001: {
                    Name2: "Red lilac",
                    RGB: {
                        R: 130,
                        G: 64,
                        B: 128
                    }
                },
                4002: {
                    Name2: "Red violet",
                    RGB: {
                        R: 143,
                        G: 38,
                        B: 64
                    }
                },
                4003: {
                    Name2: "Heather violet",
                    RGB: {
                        R: 201,
                        G: 56,
                        B: 140
                    }
                },
                4004: {
                    Name2: "Claret violet",
                    RGB: {
                        R: 92,
                        G: 8,
                        B: 43
                    }
                },
                4005: {
                    Name2: "Blue lilac",
                    RGB: {
                        R: 99,
                        G: 61,
                        B: 156
                    }
                },
                4006: {
                    Name2: "Traffic purple",
                    RGB: {
                        R: 145,
                        G: 15,
                        B: 102
                    }
                },
                4007: {
                    Name2: "Purple violet",
                    RGB: {
                        R: 56,
                        G: 10,
                        B: 46
                    }
                },
                4008: {
                    Name2: "Signal violet",
                    RGB: {
                        R: 125,
                        G: 31,
                        B: 122
                    }
                },
                4009: {
                    Name2: "Pastel violet",
                    RGB: {
                        R: 158,
                        G: 115,
                        B: 148
                    }
                },
                4010: {
                    Name2: "Telemagenta",
                    RGB: {
                        R: 191,
                        G: 23,
                        B: 115
                    }
                },
                5E3: {
                    Name2: "Violet blue",
                    RGB: {
                        R: 23,
                        G: 51,
                        B: 107
                    }
                },
                5001: {
                    Name2: "Green blue",
                    RGB: {
                        R: 10,
                        G: 51,
                        B: 84
                    }
                },
                5002: {
                    Name2: "Ultramarine blue",
                    RGB: {
                        R: 0,
                        G: 15,
                        B: 117
                    }
                },
                5003: {
                    Name2: "Sapphire blue",
                    RGB: {
                        R: 0,
                        G: 23,
                        B: 69
                    }
                },
                5004: {
                    Name2: "Black blue",
                    RGB: {
                        R: 3,
                        G: 13,
                        B: 31
                    }
                },
                5005: {
                    Name2: "Signal blue",
                    RGB: {
                        R: 0,
                        G: 46,
                        B: 122
                    }
                },
                5007: {
                    Name2: "Brillant blue",
                    RGB: {
                        R: 38,
                        G: 79,
                        B: 135
                    }
                },
                5008: {
                    Name2: "Gray blue",
                    RGB: {
                        R: 26,
                        G: 41,
                        B: 56
                    }
                },
                5009: {
                    Name2: "Azure blue",
                    RGB: {
                        R: 23,
                        G: 69,
                        B: 112
                    }
                },
                5010: {
                    Name2: "Gentian blue",
                    RGB: {
                        R: 0,
                        G: 43,
                        B: 112
                    }
                },
                5011: {
                    Name2: "Steel blue",
                    RGB: {
                        R: 3,
                        G: 20,
                        B: 46
                    }
                },
                5012: {
                    Name2: "Light blue",
                    RGB: {
                        R: 41,
                        G: 115,
                        B: 184
                    }
                },
                5013: {
                    Name2: "Cobalt blue",
                    RGB: {
                        R: 0,
                        G: 18,
                        B: 69
                    }
                },
                5014: {
                    Name2: "Pigeon blue",
                    RGB: {
                        R: 77,
                        G: 105,
                        B: 153
                    }
                },
                5015: {
                    Name2: "Sky blue",
                    RGB: {
                        R: 23,
                        G: 97,
                        B: 171
                    }
                },
                5017: {
                    Name2: "Traffic blue",
                    RGB: {
                        R: 0,
                        G: 59,
                        B: 128
                    }
                },
                5018: {
                    Name2: "Turquoise blue",
                    RGB: {
                        R: 56,
                        G: 148,
                        B: 130
                    }
                },
                5019: {
                    Name2: "Capri blue",
                    RGB: {
                        R: 10,
                        G: 66,
                        B: 120
                    }
                },
                5020: {
                    Name2: "Ocean blue",
                    RGB: {
                        R: 5,
                        G: 51,
                        B: 51
                    }
                },
                5021: {
                    Name2: "Water blue",
                    RGB: {
                        R: 26,
                        G: 122,
                        B: 99
                    }
                },
                5022: {
                    Name2: "Night blue",
                    RGB: {
                        R: 0,
                        G: 8,
                        B: 79
                    }
                },
                5023: {
                    Name2: "Distant blue",
                    RGB: {
                        R: 46,
                        G: 82,
                        B: 143
                    }
                },
                5024: {
                    Name2: "Pastel blue",
                    RGB: {
                        R: 87,
                        G: 140,
                        B: 181
                    }
                },
                6E3: {
                    Name2: "Patina green",
                    RGB: {
                        R: 51,
                        G: 120,
                        B: 84
                    }
                },
                6001: {
                    Name2: "Emerald green",
                    RGB: {
                        R: 38,
                        G: 102,
                        B: 41
                    }
                },
                6002: {
                    Name2: "Leaf green",
                    RGB: {
                        R: 38,
                        G: 87,
                        B: 33
                    }
                },
                6003: {
                    Name2: "Olive green",
                    RGB: {
                        R: 61,
                        G: 69,
                        B: 46
                    }
                },
                6004: {
                    Name2: "Blue green",
                    RGB: {
                        R: 13,
                        G: 59,
                        B: 46
                    }
                },
                6005: {
                    Name2: "Moss green",
                    RGB: {
                        R: 10,
                        G: 56,
                        B: 31
                    }
                },
                6006: {
                    Name2: "Grey olive",
                    RGB: {
                        R: 41,
                        G: 43,
                        B: 36
                    }
                },
                6007: {
                    Name2: "Bottle green",
                    RGB: {
                        R: 28,
                        G: 38,
                        B: 23
                    }
                },
                6008: {
                    Name2: "Brown green",
                    RGB: {
                        R: 33,
                        G: 33,
                        B: 26
                    }
                },
                6009: {
                    Name2: "Fir green",
                    RGB: {
                        R: 23,
                        G: 41,
                        B: 28
                    }
                },
                6010: {
                    Name2: "Grass green",
                    RGB: {
                        R: 54,
                        G: 105,
                        B: 38
                    }
                },
                6011: {
                    Name2: "Reseda green",
                    RGB: {
                        R: 94,
                        G: 125,
                        B: 79
                    }
                },
                6012: {
                    Name2: "Black green",
                    RGB: {
                        R: 31,
                        G: 46,
                        B: 43
                    }
                },
                6013: {
                    Name2: "Reed green",
                    RGB: {
                        R: 117,
                        G: 115,
                        B: 79
                    }
                },
                6014: {
                    Name2: "Yellow olive",
                    RGB: {
                        R: 51,
                        G: 48,
                        B: 38
                    }
                },
                6015: {
                    Name2: "Black olive",
                    RGB: {
                        R: 41,
                        G: 43,
                        B: 38
                    }
                },
                6016: {
                    Name2: "Turquoise green",
                    RGB: {
                        R: 15,
                        G: 112,
                        B: 51
                    }
                },
                6017: {
                    Name2: "Yellow green",
                    RGB: {
                        R: 64,
                        G: 130,
                        B: 54
                    }
                },
                6018: {
                    Name2: "May green",
                    RGB: {
                        R: 79,
                        G: 168,
                        B: 51
                    }
                },
                6019: {
                    Name2: "Pastel green",
                    RGB: {
                        R: 191,
                        G: 227,
                        B: 186
                    }
                },
                6020: {
                    Name2: "Chrome green",
                    RGB: {
                        R: 38,
                        G: 56,
                        B: 41
                    }
                },
                6021: {
                    Name2: "Pale green",
                    RGB: {
                        R: 133,
                        G: 166,
                        B: 122
                    }
                },
                6022: {
                    Name2: "Olive drab",
                    RGB: {
                        R: 43,
                        G: 38,
                        B: 28
                    }
                },
                6024: {
                    Name2: "Traffic green",
                    RGB: {
                        R: 36,
                        G: 145,
                        B: 64
                    }
                },
                6025: {
                    Name2: "Fern green",
                    RGB: {
                        R: 74,
                        G: 110,
                        B: 51
                    }
                },
                6026: {
                    Name2: "Opal green",
                    RGB: {
                        R: 10,
                        G: 92,
                        B: 51
                    }
                },
                6027: {
                    Name2: "Light green",
                    RGB: {
                        R: 125,
                        G: 204,
                        B: 189
                    }
                },
                6028: {
                    Name2: "Pine green",
                    RGB: {
                        R: 38,
                        G: 74,
                        B: 51
                    }
                },
                6029: {
                    Name2: "Mint green",
                    RGB: {
                        R: 18,
                        G: 120,
                        B: 38
                    }
                },
                6032: {
                    Name2: "Signal green",
                    RGB: {
                        R: 41,
                        G: 138,
                        B: 64
                    }
                },
                6033: {
                    Name2: "Mint turquoise",
                    RGB: {
                        R: 66,
                        G: 140,
                        B: 120
                    }
                },
                6034: {
                    Name2: "Pastel turquoise",
                    RGB: {
                        R: 125,
                        G: 189,
                        B: 181
                    }
                },
                7E3: {
                    Name2: "Squirrel grey",
                    RGB: {
                        R: 115,
                        G: 133,
                        B: 145
                    }
                },
                7001: {
                    Name2: "Silver grey",
                    RGB: {
                        R: 135,
                        G: 148,
                        B: 166
                    }
                },
                7002: {
                    Name2: "Olive grey",
                    RGB: {
                        R: 122,
                        G: 117,
                        B: 97
                    }
                },
                7003: {
                    Name2: "Moss grey",
                    RGB: {
                        R: 112,
                        G: 112,
                        B: 97
                    }
                },
                7004: {
                    Name2: "Signal grey",
                    RGB: {
                        R: 156,
                        G: 156,
                        B: 166
                    }
                },
                7005: {
                    Name2: "Mouse grey",
                    RGB: {
                        R: 97,
                        G: 105,
                        B: 105
                    }
                },
                7006: {
                    Name2: "Beige grey",
                    RGB: {
                        R: 107,
                        G: 97,
                        B: 87
                    }
                },
                7008: {
                    Name2: "Khaki grey",
                    RGB: {
                        R: 105,
                        G: 84,
                        B: 56
                    }
                },
                7009: {
                    Name2: "Green grey",
                    RGB: {
                        R: 77,
                        G: 82,
                        B: 74
                    }
                },
                7010: {
                    Name2: "Tarpaulin grey",
                    RGB: {
                        R: 74,
                        G: 79,
                        B: 74
                    }
                },
                7011: {
                    Name2: "Iron grey",
                    RGB: {
                        R: 64,
                        G: 74,
                        B: 84
                    }
                },
                7012: {
                    Name2: "Basalt grey",
                    RGB: {
                        R: 74,
                        G: 84,
                        B: 89
                    }
                },
                7013: {
                    Name2: "Brown grey",
                    RGB: {
                        R: 71,
                        G: 66,
                        B: 56
                    }
                },
                7015: {
                    Name2: "Slate grey",
                    RGB: {
                        R: 61,
                        G: 66,
                        B: 82
                    }
                },
                7016: {
                    Name2: "Anthracite grey",
                    RGB: {
                        R: 38,
                        G: 46,
                        B: 56
                    }
                },
                7021: {
                    Name2: "Black grey",
                    RGB: {
                        R: 26,
                        G: 33,
                        B: 41
                    }
                },
                7022: {
                    Name2: "Umbra grey",
                    RGB: {
                        R: 61,
                        G: 61,
                        B: 59
                    }
                },
                7023: {
                    Name2: "Concrete grey",
                    RGB: {
                        R: 122,
                        G: 125,
                        B: 117
                    }
                },
                7024: {
                    Name2: "Graphite grey",
                    RGB: {
                        R: 48,
                        G: 56,
                        B: 69
                    }
                },
                7026: {
                    Name2: "Granite grey",
                    RGB: {
                        R: 38,
                        G: 51,
                        B: 56
                    }
                },
                7030: {
                    Name2: "Stone grey",
                    RGB: {
                        R: 145,
                        G: 143,
                        B: 135
                    }
                },
                7031: {
                    Name2: "Blue grey",
                    RGB: {
                        R: 77,
                        G: 92,
                        B: 107
                    }
                },
                7032: {
                    Name2: "Pebble grey",
                    RGB: {
                        R: 189,
                        G: 186,
                        B: 171
                    }
                },
                7033: {
                    Name2: "Cement grey",
                    RGB: {
                        R: 122,
                        G: 130,
                        B: 117
                    }
                },
                7034: {
                    Name2: "Yellow grey",
                    RGB: {
                        R: 143,
                        G: 135,
                        B: 112
                    }
                },
                7035: {
                    Name2: "Light grey",
                    RGB: {
                        R: 212,
                        G: 217,
                        B: 219
                    }
                },
                7036: {
                    Name2: "Platinum grey",
                    RGB: {
                        R: 158,
                        G: 150,
                        B: 156
                    }
                },
                7037: {
                    Name2: "Dusty grey",
                    RGB: {
                        R: 122,
                        G: 125,
                        B: 128
                    }
                },
                7038: {
                    Name2: "Agate grey",
                    RGB: {
                        R: 186,
                        G: 189,
                        B: 186
                    }
                },
                7039: {
                    Name2: "Quartz grey",
                    RGB: {
                        R: 97,
                        G: 94,
                        B: 89
                    }
                },
                7040: {
                    Name2: "Window grey",
                    RGB: {
                        R: 158,
                        G: 163,
                        B: 176
                    }
                },
                7042: {
                    Name2: "Verkehrsgrau A",
                    RGB: {
                        R: 143,
                        G: 150,
                        B: 153
                    }
                },
                7043: {
                    Name2: "Verkehrsgrau B",
                    RGB: {
                        R: 64,
                        G: 69,
                        B: 69
                    }
                },
                7044: {
                    Name2: "Silk grey",
                    RGB: {
                        R: 194,
                        G: 191,
                        B: 184
                    }
                },
                7045: {
                    Name2: "Telegrau 1",
                    RGB: {
                        R: 143,
                        G: 148,
                        B: 158
                    }
                },
                7046: {
                    Name2: "Telegrau 2",
                    RGB: {
                        R: 120,
                        G: 130,
                        B: 140
                    }
                },
                7047: {
                    Name2: "Telegrau 4",
                    RGB: {
                        R: 217,
                        G: 214,
                        B: 219
                    }
                },
                8E3: {
                    Name2: "Green brown",
                    RGB: {
                        R: 125,
                        G: 92,
                        B: 56
                    }
                },
                8001: {
                    Name2: "Ocher brown",
                    RGB: {
                        R: 145,
                        G: 82,
                        B: 46
                    }
                },
                8002: {
                    Name2: "Signal brown",
                    RGB: {
                        R: 110,
                        G: 59,
                        B: 48
                    }
                },
                8003: {
                    Name2: "Clay brown",
                    RGB: {
                        R: 115,
                        G: 59,
                        B: 36
                    }
                },
                8004: {
                    Name2: "Copper brown",
                    RGB: {
                        R: 133,
                        G: 56,
                        B: 43
                    }
                },
                8007: {
                    Name2: "Fawn brown",
                    RGB: {
                        R: 94,
                        G: 51,
                        B: 31
                    }
                },
                8008: {
                    Name2: "Olive brown",
                    RGB: {
                        R: 99,
                        G: 61,
                        B: 36
                    }
                },
                8011: {
                    Name2: "Nut brown",
                    RGB: {
                        R: 71,
                        G: 38,
                        B: 28
                    }
                },
                8012: {
                    Name2: "Red brown",
                    RGB: {
                        R: 84,
                        G: 31,
                        B: 31
                    }
                },
                8014: {
                    Name2: "Sepia brown",
                    RGB: {
                        R: 56,
                        G: 38,
                        B: 28
                    }
                },
                8015: {
                    Name2: "Chestnut brown",
                    RGB: {
                        R: 77,
                        G: 31,
                        B: 28
                    }
                },
                8016: {
                    Name2: "Mahogany brown",
                    RGB: {
                        R: 61,
                        G: 31,
                        B: 28
                    }
                },
                8017: {
                    Name2: "Chocolate brown",
                    RGB: {
                        R: 46,
                        G: 28,
                        B: 28
                    }
                },
                8019: {
                    Name2: "Grey brown",
                    RGB: {
                        R: 43,
                        G: 38,
                        B: 41
                    }
                },
                8022: {
                    Name2: "Black brown",
                    RGB: {
                        R: 13,
                        G: 8,
                        B: 13
                    }
                },
                8023: {
                    Name2: "Orange brown",
                    RGB: {
                        R: 156,
                        G: 69,
                        B: 41
                    }
                },
                8024: {
                    Name2: "Beige brown",
                    RGB: {
                        R: 110,
                        G: 64,
                        B: 48
                    }
                },
                8025: {
                    Name2: "Pale brown",
                    RGB: {
                        R: 102,
                        G: 74,
                        B: 61
                    }
                },
                8028: {
                    Name2: "Terra brown",
                    RGB: {
                        R: 64,
                        G: 46,
                        B: 33
                    }
                },
                9001: {
                    Name2: "Cream",
                    RGB: {
                        R: 255,
                        G: 252,
                        B: 240
                    }
                },
                9002: {
                    Name2: "Grey white",
                    RGB: {
                        R: 240,
                        G: 237,
                        B: 230
                    }
                },
                9003: {
                    Name2: "Signal white",
                    RGB: {
                        R: 255,
                        G: 255,
                        B: 255
                    }
                },
                9004: {
                    Name2: "Signal black",
                    RGB: {
                        R: 28,
                        G: 28,
                        B: 33
                    }
                },
                9005: {
                    Name2: "Jet black",
                    RGB: {
                        R: 3,
                        G: 5,
                        B: 10
                    }
                },
                9006: {
                    Name2: "White aluminium",
                    RGB: {
                        R: 166,
                        G: 171,
                        B: 181
                    }
                },
                9007: {
                    Name2: "Grey aluminium",
                    RGB: {
                        R: 125,
                        G: 122,
                        B: 120
                    }
                },
                9010: {
                    Name2: "Pure white",
                    RGB: {
                        R: 250,
                        G: 255,
                        B: 255
                    }
                },
                9011: {
                    Name2: "Graphite black",
                    RGB: {
                        R: 13,
                        G: 18,
                        B: 26
                    }
                },
                9016: {
                    Name2: "Traffic white",
                    RGB: {
                        R: 252,
                        G: 255,
                        B: 255
                    }
                },
                9017: {
                    Name2: "Traffic black",
                    RGB: {
                        R: 20,
                        G: 23,
                        B: 28
                    }
                },
                9018: {
                    Name2: "Papyrus white",
                    RGB: {
                        R: 219,
                        G: 227,
                        B: 222
                    }
                }
            });
            this.RAL.init = function () {
                var a;
                this.Data = this.SourceData;
                for (a in this.Data) this.Data[a].Name = "RAL " + a, this.Data[a].HSV = r.getColorByRGB(this.Data[a].RGB), this.indexByHue(a);
                this.Inited = !0
            };
            this.Opaltone = new w({
                4001: {
                    RGB: {
                        R: 252,
                        G: 249,
                        B: 231
                    }
                },
                4002: {
                    RGB: {
                        R: 255,
                        G: 250,
                        B: 215
                    }
                },
                4003: {
                    RGB: {
                        R: 254,
                        G: 246,
                        B: 179
                    }
                },
                4004: {
                    RGB: {
                        R: 254,
                        G: 243,
                        B: 144
                    }
                },
                4005: {
                    RGB: {
                        R: 252,
                        G: 238,
                        B: 102
                    }
                },
                4006: {
                    RGB: {
                        R: 251,
                        G: 236,
                        B: 64
                    }
                },
                4007: {
                    RGB: {
                        R: 248,
                        G: 236,
                        B: 240
                    }
                },
                4008: {
                    RGB: {
                        R: 242,
                        G: 227,
                        B: 221
                    }
                },
                4009: {
                    RGB: {
                        R: 239,
                        G: 219,
                        B: 192
                    }
                },
                4010: {
                    RGB: {
                        R: 241,
                        G: 216,
                        B: 162
                    }
                },
                4011: {
                    RGB: {
                        R: 245,
                        G: 215,
                        B: 129
                    }
                },
                4012: {
                    RGB: {
                        R: 248,
                        G: 214,
                        B: 94
                    }
                },
                4013: {
                    RGB: {
                        R: 243,
                        G: 212,
                        B: 72
                    }
                },
                4014: {
                    RGB: {
                        R: 239,
                        G: 209,
                        B: 217
                    }
                },
                4015: {
                    RGB: {
                        R: 235,
                        G: 200,
                        B: 191
                    }
                },
                4016: {
                    RGB: {
                        R: 237,
                        G: 199,
                        B: 177
                    }
                },
                4017: {
                    RGB: {
                        R: 242,
                        G: 197,
                        B: 151
                    }
                },
                4018: {
                    RGB: {
                        R: 254,
                        G: 196,
                        B: 120
                    }
                },
                4019: {
                    RGB: {
                        R: 249,
                        G: 194,
                        B: 88
                    }
                },
                4020: {
                    RGB: {
                        R: 249,
                        G: 195,
                        B: 63
                    }
                },
                4021: {
                    RGB: {
                        R: 233,
                        G: 177,
                        B: 182
                    }
                },
                4022: {
                    RGB: {
                        R: 232,
                        G: 169,
                        B: 161
                    }
                },
                4023: {
                    RGB: {
                        R: 232,
                        G: 164,
                        B: 146
                    }
                },
                4024: {
                    RGB: {
                        R: 234,
                        G: 163,
                        B: 124
                    }
                },
                4025: {
                    RGB: {
                        R: 237,
                        G: 162,
                        B: 97
                    }
                },
                4026: {
                    RGB: {
                        R: 240,
                        G: 161,
                        B: 66
                    }
                },
                4027: {
                    RGB: {
                        R: 241,
                        G: 160,
                        B: 45
                    }
                },
                4028: {
                    RGB: {
                        R: 233,
                        G: 143,
                        B: 145
                    }
                },
                4029: {
                    RGB: {
                        R: 232,
                        G: 139,
                        B: 131
                    }
                },
                4030: {
                    RGB: {
                        R: 230,
                        G: 136,
                        B: 120
                    }
                },
                4031: {
                    RGB: {
                        R: 229,
                        G: 132,
                        B: 99
                    }
                },
                4032: {
                    RGB: {
                        R: 230,
                        G: 132,
                        B: 77
                    }
                },
                4033: {
                    RGB: {
                        R: 227,
                        G: 130,
                        B: 51
                    }
                },
                4034: {
                    RGB: {
                        R: 228,
                        G: 129,
                        B: 22
                    }
                },
                4035: {
                    RGB: {
                        R: 229,
                        G: 115,
                        B: 111
                    }
                },
                4036: {
                    RGB: {
                        R: 226,
                        G: 106,
                        B: 95
                    }
                },
                4037: {
                    RGB: {
                        R: 226,
                        G: 106,
                        B: 88
                    }
                },
                4038: {
                    RGB: {
                        R: 226,
                        G: 107,
                        B: 73
                    }
                },
                4039: {
                    RGB: {
                        R: 216,
                        G: 118,
                        B: 54
                    }
                },
                4040: {
                    RGB: {
                        R: 226,
                        G: 108,
                        B: 34
                    }
                },
                4041: {
                    RGB: {
                        R: 227,
                        G: 113,
                        B: 18
                    }
                },
                4042: {
                    RGB: {
                        R: 255,
                        G: 209,
                        B: 88
                    }
                },
                4043: {
                    RGB: {
                        R: 232,
                        G: 92,
                        B: 73
                    }
                },
                4044: {
                    RGB: {
                        R: 255,
                        G: 88,
                        B: 64
                    }
                },
                4045: {
                    RGB: {
                        R: 255,
                        G: 89,
                        B: 51
                    }
                },
                4046: {
                    RGB: {
                        R: 224,
                        G: 90,
                        B: 36
                    }
                },
                4047: {
                    RGB: {
                        R: 222,
                        G: 93,
                        B: 19
                    }
                },
                4048: {
                    RGB: {
                        R: 225,
                        G: 96,
                        B: 0
                    }
                },
                4049: {
                    RGB: {
                        R: 220,
                        G: 216,
                        B: 205
                    }
                },
                4050: {
                    RGB: {
                        R: 216,
                        G: 210,
                        B: 185
                    }
                },
                4051: {
                    RGB: {
                        R: 216,
                        G: 207,
                        B: 155
                    }
                },
                4052: {
                    RGB: {
                        R: 213,
                        G: 201,
                        B: 116
                    }
                },
                4053: {
                    RGB: {
                        R: 213,
                        G: 197,
                        B: 84
                    }
                },
                4054: {
                    RGB: {
                        R: 211,
                        G: 194,
                        B: 55
                    }
                },
                4055: {
                    RGB: {
                        R: 219,
                        G: 203,
                        B: 209
                    }
                },
                4056: {
                    RGB: {
                        R: 215,
                        G: 197,
                        B: 189
                    }
                },
                4057: {
                    RGB: {
                        R: 217,
                        G: 196,
                        B: 177
                    }
                },
                4058: {
                    RGB: {
                        R: 214,
                        G: 190,
                        B: 146
                    }
                },
                4059: {
                    RGB: {
                        R: 212,
                        G: 184,
                        B: 110
                    }
                },
                4060: {
                    RGB: {
                        R: 211,
                        G: 180,
                        B: 75
                    }
                },
                4061: {
                    RGB: {
                        R: 210,
                        G: 177,
                        B: 50
                    }
                },
                4062: {
                    RGB: {
                        R: 214,
                        G: 188,
                        B: 194
                    }
                },
                4063: {
                    RGB: {
                        R: 214,
                        G: 185,
                        B: 177
                    }
                },
                4064: {
                    RGB: {
                        R: 213,
                        G: 181,
                        B: 164
                    }
                },
                4065: {
                    RGB: {
                        R: 211,
                        G: 175,
                        B: 134
                    }
                },
                4066: {
                    RGB: {
                        R: 211,
                        G: 171,
                        B: 104
                    }
                },
                4067: {
                    RGB: {
                        R: 210,
                        G: 168,
                        B: 71
                    }
                },
                4068: {
                    RGB: {
                        R: 209,
                        G: 164,
                        B: 46
                    }
                },
                4069: {
                    RGB: {
                        R: 210,
                        G: 160,
                        B: 164
                    }
                },
                4070: {
                    RGB: {
                        R: 208,
                        G: 153,
                        B: 145
                    }
                },
                4071: {
                    RGB: {
                        R: 209,
                        G: 152,
                        B: 135
                    }
                },
                4072: {
                    RGB: {
                        R: 209,
                        G: 148,
                        B: 115
                    }
                },
                4073: {
                    RGB: {
                        R: 206,
                        G: 142,
                        B: 85
                    }
                },
                4074: {
                    RGB: {
                        R: 207,
                        G: 141,
                        B: 60
                    }
                },
                4075: {
                    RGB: {
                        R: 205,
                        G: 139,
                        B: 37
                    }
                },
                4076: {
                    RGB: {
                        R: 208,
                        G: 129,
                        B: 130
                    }
                },
                4077: {
                    RGB: {
                        R: 206,
                        G: 126,
                        B: 118
                    }
                },
                4078: {
                    RGB: {
                        R: 207,
                        G: 125,
                        B: 112
                    }
                },
                4079: {
                    RGB: {
                        R: 205,
                        G: 122,
                        B: 92
                    }
                },
                4080: {
                    RGB: {
                        R: 203,
                        G: 120,
                        B: 70
                    }
                },
                4081: {
                    RGB: {
                        R: 204,
                        G: 119,
                        B: 45
                    }
                },
                4082: {
                    RGB: {
                        R: 204,
                        G: 119,
                        B: 28
                    }
                },
                4083: {
                    RGB: {
                        R: 202,
                        G: 102,
                        B: 99
                    }
                },
                4084: {
                    RGB: {
                        R: 201,
                        G: 98,
                        B: 89
                    }
                },
                4085: {
                    RGB: {
                        R: 203,
                        G: 97,
                        B: 81
                    }
                },
                4086: {
                    RGB: {
                        R: 203,
                        G: 97,
                        B: 66
                    }
                },
                4087: {
                    RGB: {
                        R: 202,
                        G: 98,
                        B: 51
                    }
                },
                4088: {
                    RGB: {
                        R: 200,
                        G: 100,
                        B: 53
                    }
                },
                4089: {
                    RGB: {
                        R: 200,
                        G: 101,
                        B: 14
                    }
                },
                4090: {
                    RGB: {
                        R: 199,
                        G: 72,
                        B: 62
                    }
                },
                4091: {
                    RGB: {
                        R: 198,
                        G: 73,
                        B: 59
                    }
                },
                4092: {
                    RGB: {
                        R: 202,
                        G: 79,
                        B: 57
                    }
                },
                4093: {
                    RGB: {
                        R: 201,
                        G: 80,
                        B: 47
                    }
                },
                4094: {
                    RGB: {
                        R: 200,
                        G: 82,
                        B: 35
                    }
                },
                4095: {
                    RGB: {
                        R: 199,
                        G: 84,
                        B: 19
                    }
                },
                4096: {
                    RGB: {
                        R: 200,
                        G: 89,
                        B: 0
                    }
                },
                4097: {
                    RGB: {
                        R: 202,
                        G: 199,

                        B: 190
                    }
                },
                4098: {
                    RGB: {
                        R: 201,
                        G: 196,
                        B: 175
                    }
                },
                4099: {
                    RGB: {
                        R: 198,
                        G: 190,
                        B: 148
                    }
                },
                4100: {
                    RGB: {
                        R: 197,
                        G: 187,
                        B: 118
                    }
                },
                4101: {
                    RGB: {
                        R: 195,
                        G: 181,
                        B: 55
                    }
                },
                4102: {
                    RGB: {
                        R: 192,
                        G: 178,
                        B: 54
                    }
                },
                4103: {
                    RGB: {
                        R: 198,
                        G: 184,
                        B: 189
                    }
                },
                4104: {
                    RGB: {
                        R: 196,
                        G: 181,
                        B: 173
                    }
                },
                4105: {
                    RGB: {
                        R: 199,
                        G: 181,
                        B: 161
                    }
                },
                4106: {
                    RGB: {
                        R: 192,
                        G: 172,
                        B: 130
                    }
                },
                4107: {
                    RGB: {
                        R: 193,
                        G: 168,
                        B: 101
                    }
                },
                4108: {
                    RGB: {
                        R: 189,
                        G: 162,
                        B: 71
                    }
                },
                4109: {
                    RGB: {
                        R: 190,
                        G: 162,
                        B: 48
                    }
                },
                4110: {
                    RGB: {
                        R: 195,
                        G: 173,
                        B: 179
                    }
                },
                4111: {
                    RGB: {
                        R: 195,
                        G: 169,
                        B: 163
                    }
                },
                4112: {
                    RGB: {
                        R: 195,
                        G: 166,
                        B: 148
                    }
                },
                4113: {
                    RGB: {
                        R: 195,
                        G: 162,
                        B: 124
                    }
                },
                4114: {
                    RGB: {
                        R: 192,
                        G: 156,
                        B: 95
                    }
                },
                4115: {
                    RGB: {
                        R: 191,
                        G: 153,
                        B: 68
                    }
                },
                4116: {
                    RGB: {
                        R: 192,
                        G: 152,
                        B: 46
                    }
                },
                4117: {
                    RGB: {
                        R: 193,
                        G: 148,
                        B: 153
                    }
                },
                4118: {
                    RGB: {
                        R: 192,
                        G: 145,
                        B: 139
                    }
                },
                4119: {
                    RGB: {
                        R: 191,
                        G: 142,
                        B: 128
                    }
                },
                4120: {
                    RGB: {
                        R: 191,
                        G: 138,
                        B: 106
                    }
                },
                4121: {
                    RGB: {
                        R: 188,
                        G: 132,
                        B: 80
                    }
                },
                4122: {
                    RGB: {
                        R: 189,
                        G: 131,
                        B: 57
                    }
                },
                4123: {
                    RGB: {
                        R: 188,
                        G: 128,
                        B: 35
                    }
                },
                4124: {
                    RGB: {
                        R: 190,
                        G: 119,
                        B: 120
                    }
                },
                4125: {
                    RGB: {
                        R: 191,
                        G: 118,
                        B: 112
                    }
                },
                4126: {
                    RGB: {
                        R: 188,
                        G: 116,
                        B: 101
                    }
                },
                4127: {
                    RGB: {
                        R: 187,
                        G: 112,
                        B: 85
                    }
                },
                4128: {
                    RGB: {
                        R: 188,
                        G: 112,
                        B: 67
                    }
                },
                4129: {
                    RGB: {
                        R: 186,
                        G: 109,
                        B: 45
                    }
                },
                4130: {
                    RGB: {
                        R: 188,
                        G: 113,
                        B: 31
                    }
                },
                4131: {
                    RGB: {
                        R: 186,
                        G: 92,
                        B: 88
                    }
                },
                4132: {
                    RGB: {
                        R: 184,
                        G: 89,
                        B: 78
                    }
                },
                4133: {
                    RGB: {
                        R: 186,
                        G: 92,
                        B: 75
                    }
                },
                4134: {
                    RGB: {
                        R: 186,
                        G: 93,
                        B: 64
                    }
                },
                4135: {
                    RGB: {
                        R: 186,
                        G: 92,
                        B: 51
                    }
                },
                4136: {
                    RGB: {
                        R: 185,
                        G: 94,
                        B: 32
                    }
                },
                4137: {
                    RGB: {
                        R: 185,
                        G: 94,
                        B: 14
                    }
                },
                4138: {
                    RGB: {
                        R: 182,
                        G: 69,
                        B: 60
                    }
                },
                4139: {
                    RGB: {
                        R: 181,
                        G: 71,
                        B: 57
                    }
                },
                4140: {
                    RGB: {
                        R: 186,
                        G: 74,
                        B: 55
                    }
                },
                4141: {
                    RGB: {
                        R: 184,
                        G: 76,
                        B: 45
                    }
                },
                4142: {
                    RGB: {
                        R: 184,
                        G: 78,
                        B: 36
                    }
                },
                4143: {
                    RGB: {
                        R: 183,
                        G: 79,
                        B: 20
                    }
                },
                4144: {
                    RGB: {
                        R: 181,
                        G: 81,
                        B: 0
                    }
                },
                4145: {
                    RGB: {
                        R: 166,
                        G: 163,
                        B: 157
                    }
                },
                4146: {
                    RGB: {
                        R: 164,
                        G: 161,
                        B: 144
                    }
                },
                4147: {
                    RGB: {
                        R: 164,

                        G: 158,
                        B: 124
                    }
                },
                4148: {
                    RGB: {
                        R: 160,
                        G: 153,
                        B: 97
                    }
                },
                4149: {
                    RGB: {
                        R: 161,
                        G: 152,
                        B: 73
                    }
                },
                4150: {
                    RGB: {
                        R: 157,
                        G: 147,
                        B: 49
                    }
                },
                4151: {
                    RGB: {
                        R: 167,
                        G: 155,
                        B: 158
                    }
                },
                4152: {
                    RGB: {
                        R: 162,
                        G: 150,
                        B: 143
                    }
                },
                4153: {
                    RGB: {
                        R: 164,
                        G: 149,
                        B: 135
                    }
                },
                4154: {
                    RGB: {
                        R: 162,
                        G: 146,
                        B: 114
                    }
                },
                4155: {
                    RGB: {
                        R: 160,
                        G: 141,
                        B: 89
                    }
                },
                4156: {
                    RGB: {
                        R: 159,
                        G: 138,
                        B: 65
                    }
                },
                4157: {
                    RGB: {
                        R: 157,
                        G: 135,
                        B: 45
                    }
                },
                4158: {
                    RGB: {
                        R: 165,
                        G: 144,
                        B: 148
                    }
                },
                4159: {
                    RGB: {
                        R: 163,
                        G: 140,
                        B: 135
                    }
                },
                4160: {
                    RGB: {
                        R: 164,
                        G: 141,
                        B: 128
                    }
                },
                4161: {
                    RGB: {
                        R: 161,
                        G: 135,
                        B: 107
                    }
                },
                4162: {
                    RGB: {
                        R: 158,
                        G: 129,
                        B: 82
                    }
                },
                4163: {
                    RGB: {
                        R: 157,
                        G: 126,
                        B: 60
                    }
                },
                4164: {
                    RGB: {
                        R: 158,
                        G: 126,
                        B: 43
                    }
                },
                4165: {
                    RGB: {
                        R: 161,
                        G: 121,
                        B: 123
                    }
                },
                4166: {
                    RGB: {
                        R: 161,
                        G: 120,
                        B: 116
                    }
                },
                4167: {
                    RGB: {
                        R: 160,
                        G: 118,
                        B: 110
                    }
                },
                4168: {
                    RGB: {
                        R: 160,
                        G: 116,
                        B: 94
                    }
                },
                4169: {
                    RGB: {
                        R: 156,
                        G: 110,
                        B: 72
                    }
                },
                4170: {
                    RGB: {
                        R: 157,
                        G: 109,
                        B: 54
                    }
                },
                4171: {
                    RGB: {
                        R: 156,
                        G: 106,
                        B: 34
                    }
                },
                4172: {
                    RGB: {
                        R: 158,
                        G: 97,
                        B: 98
                    }
                },
                4173: {
                    RGB: {
                        R: 159,
                        G: 99,
                        B: 92
                    }
                },
                4174: {
                    RGB: {
                        R: 156,
                        G: 95,
                        B: 85
                    }
                },
                4175: {
                    RGB: {
                        R: 157,
                        G: 95,
                        B: 75
                    }
                },
                4176: {
                    RGB: {
                        R: 155,
                        G: 92,
                        B: 57
                    }
                },
                4177: {
                    RGB: {
                        R: 156,
                        G: 92,
                        B: 41
                    }
                },
                4178: {
                    RGB: {
                        R: 155,
                        G: 92,
                        B: 28
                    }
                },
                4179: {
                    RGB: {
                        R: 152,
                        G: 74,
                        B: 70
                    }
                },
                4180: {
                    RGB: {
                        R: 156,
                        G: 77,
                        B: 68
                    }
                },
                4181: {
                    RGB: {
                        R: 155,
                        G: 76,
                        B: 63
                    }
                },
                4182: {
                    RGB: {
                        R: 155,
                        G: 76,
                        B: 56
                    }
                },
                4183: {
                    RGB: {
                        R: 154,
                        G: 78,
                        B: 44
                    }
                },
                4184: {
                    RGB: {
                        R: 155,
                        G: 78,
                        B: 32
                    }
                },
                4185: {
                    RGB: {
                        R: 154,
                        G: 79,
                        B: 21
                    }
                },
                4186: {
                    RGB: {
                        R: 154,
                        G: 60,
                        B: 52
                    }
                },
                4187: {
                    RGB: {
                        R: 153,
                        G: 61,
                        B: 49
                    }
                },
                4188: {
                    RGB: {
                        R: 152,
                        G: 62,
                        B: 46
                    }
                },
                4189: {
                    RGB: {
                        R: 152,
                        G: 63,
                        B: 40
                    }
                },
                4190: {
                    RGB: {
                        R: 154,
                        G: 67,
                        B: 32
                    }
                },
                4191: {
                    RGB: {
                        R: 153,
                        G: 68,
                        B: 24
                    }
                },
                4192: {
                    RGB: {
                        R: 153,
                        G: 69,
                        B: 17
                    }
                },
                4193: {
                    RGB: {
                        R: 129,
                        G: 127,
                        B: 120
                    }
                },
                4194: {
                    RGB: {
                        R: 128,
                        G: 126,
                        B: 113
                    }
                },
                4195: {
                    RGB: {
                        R: 126,
                        G: 123,
                        B: 96
                    }
                },
                4196: {
                    RGB: {
                        R: 124,
                        G: 117,
                        B: 76
                    }
                },
                4197: {
                    RGB: {
                        R: 124,
                        G: 117,
                        B: 59
                    }
                },
                4198: {
                    RGB: {
                        R: 123,
                        G: 114,
                        B: 45
                    }
                },
                4199: {
                    RGB: {
                        R: 128,
                        G: 121,
                        B: 122
                    }
                },
                4200: {
                    RGB: {
                        R: 126,
                        G: 118,
                        B: 112
                    }
                },
                4201: {
                    RGB: {
                        R: 127,
                        G: 118,
                        B: 106
                    }
                },
                4202: {
                    RGB: {
                        R: 125,
                        G: 113,
                        B: 89
                    }
                },
                4203: {
                    RGB: {
                        R: 123,
                        G: 111,
                        B: 72
                    }
                },
                4204: {
                    RGB: {
                        R: 123,
                        G: 108,
                        B: 54
                    }
                },
                4205: {
                    RGB: {
                        R: 123,
                        G: 107,
                        B: 41
                    }
                },
                4206: {
                    RGB: {
                        R: 127,
                        G: 114,
                        B: 116
                    }
                },
                4207: {
                    RGB: {
                        R: 125,
                        G: 111,
                        B: 107
                    }
                },
                4208: {
                    RGB: {
                        R: 124,
                        G: 108,
                        B: 97
                    }
                },
                4209: {
                    RGB: {
                        R: 123,
                        G: 105,
                        B: 83
                    }
                },
                4210: {
                    RGB: {
                        R: 122,
                        G: 103,
                        B: 67
                    }
                },
                4211: {
                    RGB: {
                        R: 120,
                        G: 100,
                        B: 48
                    }
                },
                4212: {
                    RGB: {
                        R: 125,
                        G: 103,
                        B: 40
                    }
                },
                4213: {
                    RGB: {
                        R: 123,
                        G: 97,
                        B: 98
                    }
                },
                4214: {
                    RGB: {
                        R: 124,
                        G: 96,
                        B: 93
                    }
                },
                4215: {
                    RGB: {
                        R: 122,
                        G: 95,
                        B: 87
                    }
                },
                4216: {
                    RGB: {
                        R: 122,
                        G: 91,
                        B: 71
                    }
                },
                4217: {
                    RGB: {
                        R: 119,
                        G: 89,
                        B: 58
                    }
                },
                4218: {
                    RGB: {
                        R: 121,
                        G: 89,
                        B: 43
                    }
                },
                4219: {
                    RGB: {
                        R: 124,
                        G: 91,
                        B: 36
                    }
                },
                4220: {
                    RGB: {
                        R: 120,
                        G: 79,
                        B: 79
                    }
                },
                4221: {
                    RGB: {
                        R: 120,
                        G: 79,
                        B: 76
                    }
                },
                4222: {
                    RGB: {
                        R: 121,
                        G: 79,
                        B: 72
                    }
                },
                4223: {
                    RGB: {
                        R: 122,
                        G: 78,
                        B: 62
                    }
                },
                4224: {
                    RGB: {
                        R: 122,
                        G: 79,
                        B: 52
                    }
                },
                4225: {
                    RGB: {
                        R: 124,
                        G: 78,
                        B: 39
                    }
                },
                4226: {
                    RGB: {
                        R: 120,
                        G: 77,
                        B: 31
                    }
                },
                4227: {
                    RGB: {
                        R: 118,
                        G: 63,
                        B: 62
                    }
                },
                4228: {
                    RGB: {
                        R: 119,
                        G: 63,
                        B: 57
                    }
                },
                4229: {
                    RGB: {
                        R: 118,
                        G: 64,
                        B: 56
                    }
                },
                4230: {
                    RGB: {
                        R: 121,
                        G: 66,
                        B: 51
                    }
                },
                4231: {
                    RGB: {
                        R: 118,
                        G: 64,
                        B: 42
                    }
                },
                4232: {
                    RGB: {
                        R: 121,

                        G: 66,
                        B: 34
                    }
                },
                4233: {
                    RGB: {
                        R: 120,
                        G: 68,
                        B: 28
                    }
                },
                4234: {
                    RGB: {
                        R: 116,
                        G: 51,
                        B: 46
                    }
                },
                4235: {
                    RGB: {
                        R: 119,
                        G: 53,
                        B: 45
                    }
                },
                4236: {
                    RGB: {
                        R: 119,
                        G: 53,
                        B: 42
                    }
                },
                4237: {
                    RGB: {
                        R: 121,
                        G: 56,
                        B: 38
                    }
                },
                4238: {
                    RGB: {
                        R: 120,
                        G: 57,
                        B: 34
                    }
                },
                4239: {
                    RGB: {
                        R: 120,
                        G: 57,
                        B: 28
                    }
                },
                4240: {
                    RGB: {
                        R: 121,
                        G: 61,
                        B: 27
                    }
                },
                4241: {
                    RGB: {
                        R: 248,
                        G: 232,
                        B: 240
                    }
                },
                4242: {
                    RGB: {
                        R: 242,
                        G: 213,
                        B: 227
                    }
                },
                4243: {
                    RGB: {
                        R: 230,
                        G: 172,
                        B: 201
                    }
                },
                4244: {
                    RGB: {
                        R: 220,
                        G: 134,
                        B: 176
                    }
                },
                4245: {
                    RGB: {
                        R: 212,
                        G: 92,
                        B: 154
                    }
                },
                4246: {
                    RGB: {

                        R: 206,
                        G: 0,
                        B: 131
                    }
                },
                4247: {
                    RGB: {
                        R: 241,
                        G: 222,
                        B: 229
                    }
                },
                4248: {
                    RGB: {
                        R: 232,
                        G: 200,
                        B: 215
                    }
                },
                4249: {
                    RGB: {
                        R: 227,
                        G: 180,
                        B: 201
                    }
                },
                4250: {
                    RGB: {
                        R: 216,
                        G: 145,
                        B: 177
                    }
                },
                4251: {
                    RGB: {
                        R: 207,
                        G: 105,
                        B: 154
                    }
                },
                4252: {
                    RGB: {
                        R: 199,
                        G: 71,
                        B: 133
                    }
                },
                4253: {
                    RGB: {
                        R: 195,
                        G: 40,
                        B: 121
                    }
                },
                4254: {
                    RGB: {
                        R: 240,
                        G: 209,
                        B: 217
                    }
                },
                4255: {
                    RGB: {
                        R: 233,
                        G: 186,
                        B: 201
                    }
                },
                4256: {
                    RGB: {
                        R: 226,
                        G: 167,
                        B: 187
                    }
                },
                4257: {
                    RGB: {
                        R: 216,
                        G: 136,
                        B: 165
                    }
                },
                4258: {
                    RGB: {
                        R: 205,
                        G: 97,
                        B: 141
                    }
                },
                4259: {
                    RGB: {
                        R: 199,
                        G: 64,
                        B: 124
                    }
                },
                4260: {
                    RGB: {
                        R: 198,
                        G: 36,
                        B: 115
                    }
                },
                4261: {
                    RGB: {
                        R: 234,
                        G: 176,
                        B: 181
                    }
                },
                4262: {
                    RGB: {
                        R: 229,
                        G: 156,
                        B: 167
                    }
                },
                4263: {
                    RGB: {
                        R: 223,
                        G: 141,
                        B: 157
                    }
                },
                4264: {
                    RGB: {
                        R: 213,
                        G: 112,
                        B: 140
                    }
                },
                4265: {
                    RGB: {
                        R: 207,
                        G: 82,
                        B: 123
                    }
                },
                4266: {
                    RGB: {
                        R: 200,
                        G: 52,
                        B: 107
                    }
                },
                4267: {
                    RGB: {
                        R: 196,
                        G: 25,
                        B: 98
                    }
                },
                4268: {
                    RGB: {
                        R: 234,
                        G: 144,
                        B: 146
                    }
                },
                4269: {
                    RGB: {
                        R: 226,
                        G: 128,
                        B: 134
                    }
                },
                4270: {
                    RGB: {
                        R: 222,
                        G: 115,
                        B: 127
                    }
                },
                4271: {
                    RGB: {
                        R: 212,
                        G: 89,
                        B: 112
                    }
                },
                4272: {
                    RGB: {
                        R: 205,
                        G: 64,
                        B: 99
                    }
                },
                4273: {
                    RGB: {
                        R: 198,
                        G: 37,
                        B: 88
                    }
                },
                4274: {
                    RGB: {
                        R: 195,
                        G: 0,
                        B: 85
                    }
                },
                4275: {
                    RGB: {
                        R: 229,
                        G: 115,
                        B: 111
                    }
                },
                4276: {
                    RGB: {
                        R: 222,
                        G: 98,
                        B: 99
                    }
                },
                4277: {
                    RGB: {
                        R: 219,
                        G: 88,
                        B: 93
                    }
                },
                4278: {
                    RGB: {
                        R: 212,
                        G: 68,
                        B: 87
                    }
                },
                4279: {
                    RGB: {
                        R: 204,
                        G: 46,
                        B: 79
                    }
                },
                4280: {
                    RGB: {
                        R: 198,
                        G: 18,
                        B: 73
                    }
                },
                4281: {
                    RGB: {
                        R: 197,
                        G: 0,
                        B: 73
                    }
                },
                4282: {
                    RGB: {
                        R: 255,
                        G: 109,
                        B: 88
                    }
                },
                4283: {
                    RGB: {
                        R: 231,
                        G: 87,
                        B: 79
                    }
                },
                4284: {
                    RGB: {
                        R: 216,
                        G: 70,
                        B: 71
                    }
                },
                4285: {
                    RGB: {
                        R: 209,
                        G: 55,
                        B: 69
                    }
                },
                4286: {
                    RGB: {
                        R: 203,
                        G: 34,
                        B: 65
                    }
                },
                4287: {
                    RGB: {
                        R: 198,
                        G: 15,
                        B: 62
                    }
                },
                4288: {
                    RGB: {
                        R: 194,
                        G: 0,
                        B: 59
                    }
                },
                4289: {
                    RGB: {
                        R: 215,
                        G: 200,
                        B: 215
                    }
                },
                4290: {
                    RGB: {
                        R: 208,
                        G: 182,
                        B: 202
                    }
                },
                4291: {
                    RGB: {
                        R: 197,
                        G: 149,
                        B: 181
                    }
                },
                4292: {
                    RGB: {
                        R: 191,
                        G: 115,
                        B: 160
                    }
                },
                4293: {
                    RGB: {
                        R: 184,
                        G: 84,
                        B: 140
                    }
                },
                4294: {
                    RGB: {
                        R: 178,
                        G: 51,
                        B: 125
                    }
                },
                4295: {
                    RGB: {
                        R: 220,
                        G: 203,
                        B: 205
                    }
                },
                4296: {
                    RGB: {
                        R: 210,
                        G: 182,
                        B: 195
                    }
                },
                4297: {
                    RGB: {
                        R: 205,
                        G: 167,
                        B: 186
                    }
                },
                4298: {
                    RGB: {
                        R: 193,
                        G: 134,
                        B: 163
                    }
                },
                4299: {
                    RGB: {
                        R: 184,
                        G: 96,
                        B: 139
                    }
                },
                4300: {
                    RGB: {
                        R: 178,
                        G: 67,
                        B: 122
                    }
                },
                4301: {
                    RGB: {
                        R: 174,
                        G: 40,
                        B: 110
                    }
                },
                4302: {
                    RGB: {
                        R: 214,
                        G: 188,
                        B: 194
                    }
                },
                4303: {
                    RGB: {
                        R: 211,
                        G: 172,
                        B: 184
                    }
                },
                4304: {
                    RGB: {
                        R: 205,
                        G: 158,
                        B: 175
                    }
                },
                4305: {
                    RGB: {
                        R: 195,
                        G: 127,
                        B: 155
                    }
                },
                4306: {
                    RGB: {
                        R: 185,
                        G: 90,
                        B: 132
                    }
                },
                4307: {
                    RGB: {
                        R: 178,
                        G: 60,
                        B: 113
                    }
                },
                4308: {
                    RGB: {
                        R: 176,
                        G: 37,
                        B: 106
                    }
                },
                4309: {
                    RGB: {
                        R: 210,
                        G: 160,
                        B: 164
                    }
                },
                4310: {
                    RGB: {
                        R: 204,
                        G: 145,
                        B: 155
                    }
                },
                4311: {
                    RGB: {
                        R: 201,
                        G: 133,
                        B: 147
                    }
                },
                4312: {
                    RGB: {
                        R: 192,
                        G: 106,
                        B: 131
                    }
                },
                4313: {
                    RGB: {
                        R: 183,
                        G: 75,
                        B: 111
                    }
                },
                4314: {
                    RGB: {
                        R: 180,
                        G: 50,
                        B: 100
                    }
                },
                4315: {
                    RGB: {
                        R: 175,
                        G: 25,
                        B: 91
                    }
                },
                4316: {
                    RGB: {
                        R: 208,
                        G: 129,
                        B: 130
                    }
                },
                4317: {
                    RGB: {
                        R: 204,
                        G: 122,
                        B: 127
                    }
                },
                4318: {
                    RGB: {
                        R: 199,
                        G: 110,
                        B: 119
                    }
                },
                4319: {
                    RGB: {
                        R: 190,
                        G: 86,
                        B: 106
                    }
                },
                4320: {
                    RGB: {
                        R: 184,
                        G: 60,
                        B: 94
                    }
                },
                4321: {
                    RGB: {
                        R: 179,
                        G: 42,
                        B: 87
                    }
                },
                4322: {
                    RGB: {
                        R: 176,
                        G: 23,
                        B: 82
                    }
                },
                4323: {
                    RGB: {
                        R: 202,
                        G: 102,
                        B: 99
                    }
                },
                4324: {
                    RGB: {
                        R: 198,
                        G: 90,
                        B: 92
                    }
                },
                4325: {
                    RGB: {
                        R: 194,
                        G: 82,
                        B: 87
                    }
                },
                4326: {
                    RGB: {
                        R: 190,
                        G: 66,
                        B: 82
                    }
                },
                4327: {
                    RGB: {
                        R: 181,
                        G: 49,
                        B: 76
                    }
                },
                4328: {
                    RGB: {
                        R: 179,
                        G: 30,
                        B: 71
                    }
                },
                4329: {
                    RGB: {
                        R: 174,
                        G: 8,
                        B: 70
                    }
                },
                4330: {
                    RGB: {
                        R: 200,
                        G: 73,
                        B: 63
                    }
                },
                4331: {
                    RGB: {
                        R: 197,
                        G: 71,
                        B: 67
                    }
                },
                4332: {
                    RGB: {
                        R: 194,
                        G: 65,
                        B: 67
                    }
                },
                4333: {
                    RGB: {
                        R: 189,
                        G: 53,
                        B: 65
                    }
                },
                4334: {
                    RGB: {
                        R: 182,
                        G: 37,
                        B: 61
                    }
                },
                4335: {
                    RGB: {
                        R: 178,
                        G: 18,
                        B: 60
                    }
                },
                4336: {
                    RGB: {
                        R: 175,
                        G: 0,
                        B: 59
                    }
                },
                4337: {
                    RGB: {
                        R: 198,
                        G: 183,
                        B: 198
                    }
                },
                4338: {
                    RGB: {
                        R: 191,
                        G: 166,
                        B: 186
                    }
                },
                4339: {
                    RGB: {
                        R: 181,
                        G: 133,
                        B: 164
                    }
                },
                4340: {
                    RGB: {
                        R: 175,
                        G: 100,
                        B: 143
                    }
                },
                4341: {
                    RGB: {
                        R: 168,
                        G: 68,
                        B: 123
                    }
                },
                4342: {
                    RGB: {
                        R: 164,
                        G: 44,
                        B: 112
                    }
                },
                4343: {
                    RGB: {
                        R: 198,
                        G: 184,
                        B: 189
                    }
                },
                4344: {
                    RGB: {
                        R: 193,
                        G: 169,
                        B: 182
                    }
                },
                4345: {
                    RGB: {
                        R: 189,
                        G: 155,
                        B: 172
                    }
                },
                4346: {
                    RGB: {
                        R: 180,
                        G: 125,
                        B: 152
                    }
                },
                4347: {
                    RGB: {
                        R: 170,
                        G: 90,
                        B: 129
                    }
                },
                4348: {
                    RGB: {
                        R: 164,
                        G: 60,
                        B: 112
                    }
                },
                4349: {
                    RGB: {
                        R: 163,
                        G: 37,
                        B: 103
                    }
                },
                4350: {
                    RGB: {
                        R: 195,
                        G: 173,
                        B: 179
                    }
                },
                4351: {
                    RGB: {
                        R: 192,
                        G: 158,
                        B: 168
                    }
                },
                4352: {
                    RGB: {
                        R: 189,
                        G: 146,
                        B: 162
                    }
                },
                4353: {
                    RGB: {
                        R: 179,
                        G: 116,
                        B: 142
                    }
                },
                4354: {
                    RGB: {
                        R: 170,
                        G: 84,
                        B: 123
                    }
                },
                4355: {
                    RGB: {
                        R: 163,
                        G: 55,
                        B: 105
                    }
                },
                4356: {
                    RGB: {
                        R: 161,
                        G: 32,
                        B: 97
                    }
                },
                4357: {
                    RGB: {
                        R: 193,
                        G: 148,
                        B: 153
                    }
                },
                4358: {
                    RGB: {
                        R: 190,
                        G: 137,
                        B: 146
                    }
                },
                4359: {
                    RGB: {
                        R: 186,
                        G: 126,
                        B: 139
                    }
                },
                4360: {
                    RGB: {
                        R: 177,
                        G: 99,
                        B: 122
                    }
                },
                4361: {
                    RGB: {
                        R: 170,
                        G: 73,
                        B: 107
                    }
                },
                4362: {
                    RGB: {
                        R: 163,
                        G: 48,
                        B: 94
                    }
                },
                4363: {
                    RGB: {
                        R: 163,
                        G: 27,
                        B: 88
                    }
                },
                4364: {
                    RGB: {
                        R: 190,
                        G: 119,
                        B: 120
                    }
                },
                4365: {
                    RGB: {
                        R: 186,
                        G: 112,
                        B: 118
                    }
                },
                4366: {
                    RGB: {
                        R: 182,
                        G: 101,
                        B: 111
                    }
                },
                4367: {
                    RGB: {
                        R: 174,
                        G: 81,
                        B: 100
                    }
                },
                4368: {
                    RGB: {
                        R: 166,
                        G: 59,
                        B: 90
                    }
                },
                4369: {
                    RGB: {
                        R: 163,
                        G: 41,
                        B: 81
                    }
                },
                4370: {
                    RGB: {
                        R: 161,
                        G: 18,
                        B: 75
                    }
                },
                4371: {
                    RGB: {
                        R: 186,
                        G: 92,
                        B: 88
                    }
                },
                4372: {
                    RGB: {
                        R: 182,
                        G: 84,
                        B: 86
                    }
                },
                4373: {
                    RGB: {
                        R: 178,
                        G: 77,
                        B: 83
                    }
                },
                4374: {
                    RGB: {
                        R: 170,
                        G: 61,
                        B: 75
                    }
                },
                4375: {
                    RGB: {
                        R: 166,
                        G: 45,
                        B: 70
                    }
                },
                4376: {
                    RGB: {
                        R: 162,
                        G: 30,
                        B: 69
                    }
                },
                4377: {
                    RGB: {
                        R: 158,
                        G: 14,
                        B: 64
                    }
                },
                4378: {
                    RGB: {
                        R: 182,
                        G: 69,
                        B: 60
                    }
                },
                4379: {
                    RGB: {
                        R: 177,
                        G: 65,
                        B: 61
                    }
                },
                4380: {
                    RGB: {
                        R: 175,
                        G: 61,
                        B: 64
                    }
                },
                4381: {
                    RGB: {
                        R: 168,
                        G: 49,
                        B: 60
                    }
                },
                4382: {
                    RGB: {
                        R: 165,
                        G: 36,
                        B: 59
                    }
                },
                4383: {
                    RGB: {
                        R: 159,
                        G: 28,
                        B: 58
                    }
                },
                4384: {
                    RGB: {
                        R: 159,
                        G: 7,
                        B: 52
                    }
                },
                4385: {
                    RGB: {
                        R: 166,
                        G: 155,
                        B: 166
                    }
                },
                4386: {
                    RGB: {
                        R: 162,
                        G: 145,
                        B: 160
                    }
                },
                4387: {
                    RGB: {
                        R: 151,
                        G: 115,
                        B: 138
                    }
                },
                4388: {
                    RGB: {
                        R: 145,
                        G: 89,
                        B: 122
                    }
                },
                4389: {
                    RGB: {
                        R: 139,
                        G: 60,
                        B: 105
                    }
                },
                4390: {
                    RGB: {
                        R: 136,
                        G: 43,
                        B: 97
                    }
                },
                4391: {
                    RGB: {
                        R: 167,
                        G: 155,
                        B: 158
                    }
                },
                4392: {
                    RGB: {
                        R: 164,
                        G: 144,
                        B: 153
                    }
                },
                4393: {
                    RGB: {
                        R: 158,
                        G: 131,
                        B: 143
                    }
                },
                4394: {
                    RGB: {
                        R: 150,
                        G: 107,
                        B: 126
                    }
                },
                4395: {
                    RGB: {
                        R: 144,
                        G: 80,
                        B: 112
                    }
                },
                4396: {
                    RGB: {
                        R: 137,
                        G: 55,
                        B: 96
                    }
                },
                4397: {
                    RGB: {
                        R: 136,
                        G: 42,
                        B: 91
                    }
                },
                4398: {
                    RGB: {
                        R: 165,
                        G: 144,
                        B: 148
                    }
                },
                4399: {
                    RGB: {
                        R: 158,
                        G: 131,
                        B: 139
                    }
                },
                4400: {
                    RGB: {
                        R: 157,
                        G: 121,
                        B: 133
                    }
                },
                4401: {
                    RGB: {
                        R: 150,
                        G: 98,
                        B: 118
                    }
                },
                4402: {
                    RGB: {
                        R: 142,
                        G: 72,
                        B: 101
                    }
                },
                4403: {
                    RGB: {
                        R: 138,
                        G: 48,
                        B: 89
                    }
                },
                4404: {
                    RGB: {
                        R: 135,
                        G: 36,
                        B: 85
                    }
                },
                4405: {
                    RGB: {
                        R: 161,
                        G: 121,
                        B: 123
                    }
                },
                4406: {
                    RGB: {
                        R: 156,
                        G: 112,
                        B: 119
                    }
                },
                4407: {
                    RGB: {
                        R: 151,
                        G: 102,
                        B: 111
                    }
                },
                4408: {
                    RGB: {
                        R: 144,
                        G: 80,
                        B: 97
                    }
                },
                4409: {
                    RGB: {
                        R: 139,
                        G: 59,
                        B: 87
                    }
                },
                4410: {
                    RGB: {
                        R: 137,
                        G: 42,
                        B: 78
                    }
                },
                4411: {
                    RGB: {
                        R: 139,
                        G: 38,
                        B: 78
                    }
                },
                4412: {
                    RGB: {
                        R: 158,
                        G: 97,
                        B: 98
                    }
                },
                4413: {
                    RGB: {
                        R: 151,
                        G: 90,
                        B: 94
                    }
                },
                4414: {
                    RGB: {
                        R: 148,
                        G: 82,
                        B: 89
                    }
                },
                4415: {
                    RGB: {
                        R: 143,
                        G: 66,
                        B: 81
                    }
                },
                4416: {
                    RGB: {
                        R: 138,
                        G: 49,
                        B: 72
                    }
                },
                4417: {
                    RGB: {
                        R: 134,
                        G: 31,
                        B: 66
                    }
                },
                4418: {
                    RGB: {
                        R: 133,
                        G: 24,
                        B: 63
                    }
                },
                4419: {
                    RGB: {
                        R: 152,
                        G: 74,
                        B: 70
                    }
                },
                4420: {
                    RGB: {
                        R: 150,
                        G: 70,
                        B: 71
                    }
                },
                4421: {
                    RGB: {
                        R: 145,
                        G: 64,
                        B: 68
                    }
                },
                4422: {
                    RGB: {
                        R: 140,
                        G: 53,
                        B: 63
                    }
                },
                4423: {
                    RGB: {
                        R: 135,
                        G: 39,
                        B: 59
                    }
                },
                4424: {
                    RGB: {
                        R: 132,
                        G: 29,
                        B: 55
                    }
                },
                4425: {
                    RGB: {
                        R: 127,
                        G: 30,
                        B: 53
                    }
                },
                4426: {
                    RGB: {
                        R: 154,
                        G: 60,
                        B: 52
                    }
                },
                4427: {
                    RGB: {
                        R: 147,
                        G: 56,
                        B: 53
                    }
                },
                4428: {
                    RGB: {
                        R: 145,
                        G: 52,
                        B: 53
                    }
                },
                4429: {
                    RGB: {
                        R: 139,
                        G: 41,
                        B: 49
                    }
                },
                4430: {
                    RGB: {
                        R: 135,
                        G: 31,
                        B: 49
                    }
                },
                4431: {
                    RGB: {
                        R: 134,
                        G: 22,
                        B: 48
                    }
                },
                4432: {
                    RGB: {
                        R: 128,
                        G: 5,
                        B: 45
                    }
                },
                4433: {
                    RGB: {
                        R: 129,
                        G: 120,
                        B: 125
                    }
                },
                4434: {
                    RGB: {
                        R: 125,
                        G: 111,
                        B: 119
                    }
                },
                4435: {
                    RGB: {
                        R: 119,
                        G: 91,
                        B: 108
                    }
                },
                4436: {
                    RGB: {
                        R: 112,
                        G: 68,
                        B: 93
                    }
                },
                4437: {
                    RGB: {
                        R: 112,
                        G: 53,
                        B: 87
                    }
                },
                4438: {
                    RGB: {
                        R: 107,
                        G: 38,
                        B: 78
                    }
                },
                4439: {
                    RGB: {
                        R: 128,
                        G: 121,
                        B: 122
                    }
                },
                4440: {
                    RGB: {
                        R: 122,
                        G: 109,
                        B: 114
                    }
                },
                4441: {
                    RGB: {
                        R: 120,
                        G: 102,
                        B: 110
                    }
                },
                4442: {
                    RGB: {
                        R: 114,
                        G: 83,
                        B: 98
                    }
                },
                4443: {
                    RGB: {
                        R: 110,
                        G: 63,
                        B: 86
                    }
                },
                4444: {
                    RGB: {
                        R: 106,
                        G: 44,
                        B: 76
                    }
                },
                4445: {
                    RGB: {
                        R: 105,
                        G: 34,
                        B: 70
                    }
                },
                4446: {
                    RGB: {
                        R: 127,
                        G: 114,
                        B: 116
                    }
                },
                4447: {
                    RGB: {
                        R: 121,
                        G: 102,
                        B: 107
                    }
                },
                4448: {
                    RGB: {
                        R: 121,
                        G: 98,
                        B: 105
                    }
                },
                4449: {
                    RGB: {
                        R: 115,
                        G: 78,
                        B: 92
                    }
                },
                4450: {
                    RGB: {
                        R: 110,
                        G: 61,
                        B: 82
                    }
                },
                4451: {
                    RGB: {
                        R: 107,
                        G: 43,
                        B: 72
                    }
                },
                4452: {
                    RGB: {
                        R: 105,
                        G: 34,
                        B: 68
                    }
                },
                4453: {
                    RGB: {
                        R: 123,
                        G: 97,
                        B: 98
                    }
                },
                4454: {
                    RGB: {
                        R: 118,
                        G: 89,
                        B: 92
                    }
                },
                4455: {
                    RGB: {
                        R: 119,
                        G: 83,
                        B: 90
                    }
                },
                4456: {
                    RGB: {
                        R: 113,
                        G: 72,
                        B: 82
                    }
                },
                4457: {
                    RGB: {
                        R: 109,
                        G: 53,
                        B: 71
                    }
                },
                4458: {
                    RGB: {
                        R: 107,
                        G: 39,
                        B: 64
                    }
                },
                4459: {
                    RGB: {
                        R: 104,
                        G: 29,
                        B: 60
                    }
                },
                4460: {
                    RGB: {
                        R: 120,
                        G: 79,
                        B: 79
                    }
                },
                4461: {
                    RGB: {
                        R: 114,
                        G: 72,
                        B: 74
                    }
                },
                4462: {
                    RGB: {
                        R: 115,
                        G: 70,
                        B: 75
                    }
                },
                4463: {
                    RGB: {
                        R: 110,
                        G: 56,
                        B: 66
                    }
                },
                4464: {
                    RGB: {
                        R: 105,
                        G: 42,
                        B: 59
                    }
                },
                4465: {
                    RGB: {
                        R: 106,
                        G: 34,
                        B: 56
                    }
                },
                4466: {
                    RGB: {
                        R: 102,
                        G: 27,
                        B: 53
                    }
                },
                4467: {
                    RGB: {
                        R: 118,
                        G: 63,
                        B: 62
                    }
                },
                4468: {
                    RGB: {
                        R: 116,
                        G: 61,
                        B: 61
                    }
                },
                4469: {
                    RGB: {
                        R: 114,
                        G: 58,
                        B: 60
                    }
                },
                4470: {
                    RGB: {
                        R: 110,
                        G: 47,
                        B: 55
                    }
                },
                4471: {
                    RGB: {
                        R: 105,
                        G: 37,
                        B: 50
                    }
                },
                4472: {
                    RGB: {
                        R: 105,
                        G: 29,
                        B: 48
                    }
                },
                4473: {
                    RGB: {
                        R: 103,
                        G: 24,
                        B: 48
                    }
                },
                4474: {
                    RGB: {
                        R: 116,
                        G: 51,
                        B: 46
                    }
                },
                4475: {
                    RGB: {
                        R: 113,
                        G: 49,
                        B: 48
                    }
                },
                4476: {
                    RGB: {
                        R: 111,
                        G: 46,
                        B: 47
                    }
                },
                4477: {
                    RGB: {
                        R: 110,
                        G: 41,
                        B: 46
                    }
                },
                4478: {
                    RGB: {
                        R: 107,
                        G: 33,
                        B: 45
                    }
                },
                4479: {
                    RGB: {
                        R: 106,
                        G: 27,
                        B: 43
                    }
                },
                4480: {
                    RGB: {
                        R: 103,
                        G: 24,
                        B: 44
                    }
                },
                4481: {
                    RGB: {
                        R: 246,
                        G: 217,
                        B: 62
                    }
                },
                4482: {
                    RGB: {
                        R: 240,
                        G: 199,
                        B: 60
                    }
                },
                4483: {
                    RGB: {
                        R: 228,
                        G: 162,
                        B: 52
                    }
                },
                4484: {
                    RGB: {
                        R: 218,
                        G: 125,
                        B: 45
                    }
                },
                4485: {
                    RGB: {
                        R: 210,
                        G: 87,
                        B: 38
                    }
                },
                4486: {
                    RGB: {
                        R: 205,
                        G: 26,
                        B: 38
                    }
                },
                4487: {
                    RGB: {
                        R: 244,
                        G: 212,
                        B: 71
                    }
                },
                4488: {
                    RGB: {
                        R: 230,
                        G: 178,
                        B: 57
                    }
                },
                4489: {
                    RGB: {
                        R: 224,
                        G: 163,
                        B: 54
                    }
                },
                4490: {
                    RGB: {
                        R: 215,
                        G: 130,
                        B: 58
                    }
                },
                4491: {
                    RGB: {
                        R: 205,
                        G: 94,
                        B: 56
                    }
                },
                4492: {
                    RGB: {
                        R: 201,
                        G: 73,
                        B: 60
                    }
                },
                4493: {
                    RGB: {
                        R: 195,
                        G: 48,
                        B: 55
                    }
                },
                4494: {
                    RGB: {
                        R: 250,
                        G: 194,
                        B: 61
                    }
                },
                4495: {
                    RGB: {
                        R: 229,
                        G: 164,
                        B: 52
                    }
                },
                4496: {
                    RGB: {
                        R: 222,
                        G: 150,
                        B: 54
                    }
                },
                4497: {
                    RGB: {
                        R: 215,
                        G: 119,
                        B: 56
                    }
                },
                4498: {
                    RGB: {
                        R: 205,
                        G: 88,
                        B: 59
                    }
                },
                4499: {
                    RGB: {
                        R: 200,
                        G: 66,
                        B: 61
                    }
                },
                4500: {
                    RGB: {
                        R: 194,
                        G: 39,
                        B: 56
                    }
                },
                4501: {
                    RGB: {
                        R: 241,
                        G: 160,
                        B: 45
                    }
                },
                4502: {
                    RGB: {
                        R: 226,
                        G: 137,
                        B: 39
                    }
                },
                4503: {
                    RGB: {
                        R: 221,
                        G: 125,
                        B: 39
                    }
                },
                4504: {
                    RGB: {
                        R: 211,
                        G: 100,
                        B: 44
                    }
                },
                4505: {
                    RGB: {
                        R: 205,
                        G: 75,
                        B: 32
                    }
                },
                4506: {
                    RGB: {
                        R: 198,
                        G: 53,
                        B: 47
                    }
                },
                4507: {
                    RGB: {
                        R: 196,
                        G: 31,
                        B: 49
                    }
                },
                4508: {
                    RGB: {
                        R: 228,
                        G: 129,
                        B: 22
                    }
                },
                4509: {
                    RGB: {
                        R: 223,
                        G: 117,
                        B: 27
                    }
                },
                4510: {
                    RGB: {
                        R: 220,
                        G: 109,
                        B: 32
                    }
                },
                4511: {
                    RGB: {
                        R: 211,
                        G: 88,
                        B: 36
                    }
                },
                4512: {
                    RGB: {
                        R: 205,
                        G: 66,
                        B: 42
                    }
                },
                4513: {
                    RGB: {
                        R: 200,
                        G: 46,
                        B: 45
                    }
                },
                4514: {
                    RGB: {
                        R: 194,
                        G: 18,
                        B: 40
                    }
                },
                4515: {
                    RGB: {
                        R: 227,
                        G: 113,
                        B: 18
                    }
                },
                4516: {
                    RGB: {
                        R: 222,
                        G: 100,
                        B: 5
                    }
                },
                4517: {
                    RGB: {
                        R: 219,
                        G: 92,
                        B: 15
                    }
                },
                4518: {
                    RGB: {
                        R: 210,
                        G: 75,
                        B: 24
                    }
                },
                4519: {
                    RGB: {
                        R: 202,
                        G: 53,
                        B: 27
                    }
                },
                4520: {
                    RGB: {
                        R: 197,
                        G: 29,
                        B: 30
                    }
                },
                4521: {
                    RGB: {
                        R: 195,
                        G: 0,
                        B: 34
                    }
                },
                4522: {
                    RGB: {
                        R: 255,
                        G: 96,
                        B: 0
                    }
                },
                4523: {
                    RGB: {
                        R: 221,
                        G: 88,
                        B: 0
                    }
                },
                4524: {
                    RGB: {
                        R: 216,
                        G: 80,
                        B: 0
                    }
                },
                4525: {
                    RGB: {
                        R: 210,
                        G: 67,
                        B: 6
                    }
                },
                4526: {
                    RGB: {
                        R: 201,
                        G: 44,
                        B: 10
                    }
                },
                4527: {
                    RGB: {
                        R: 198,
                        G: 24,
                        B: 19
                    }
                },
                4528: {
                    RGB: {
                        R: 194,
                        G: 0,
                        B: 5
                    }
                },
                4529: {
                    RGB: {
                        R: 210,
                        G: 181,
                        B: 59
                    }
                },
                4530: {
                    RGB: {
                        R: 204,
                        G: 167,
                        B: 58
                    }
                },
                4531: {
                    RGB: {
                        R: 197,
                        G: 139,
                        B: 57
                    }
                },
                4532: {
                    RGB: {
                        R: 185,
                        G: 104,
                        B: 54
                    }
                },
                4533: {
                    RGB: {
                        R: 184,
                        G: 83,
                        B: 60
                    }
                },
                4534: {
                    RGB: {
                        R: 178,
                        G: 65,
                        B: 55
                    }
                },
                4535: {
                    RGB: {
                        R: 213,
                        G: 180,
                        B: 51
                    }
                },
                4536: {
                    RGB: {
                        R: 205,
                        G: 162,
                        B: 50
                    }
                },
                4537: {
                    RGB: {
                        R: 201,
                        G: 151,
                        B: 52
                    }
                },
                4538: {
                    RGB: {
                        R: 193,
                        G: 123,
                        B: 54
                    }
                },
                4539: {
                    RGB: {
                        R: 184,
                        G: 89,
                        B: 54
                    }
                },
                4540: {
                    RGB: {
                        R: 179,
                        G: 70,
                        B: 57
                    }
                },
                4541: {
                    RGB: {
                        R: 174,
                        G: 46,
                        B: 55
                    }
                },
                4542: {
                    RGB: {
                        R: 212,
                        G: 166,
                        B: 48
                    }
                },
                4543: {
                    RGB: {
                        R: 204,
                        G: 149,
                        B: 45
                    }
                },
                4544: {
                    RGB: {
                        R: 200,
                        G: 138,
                        B: 47
                    }
                },
                4545: {
                    RGB: {
                        R: 192,
                        G: 114,
                        B: 53
                    }
                },
                4546: {
                    RGB: {
                        R: 184,
                        G: 83,
                        B: 53
                    }
                },
                4547: {
                    RGB: {
                        R: 180,
                        G: 62,
                        B: 53
                    }
                },
                4548: {
                    RGB: {
                        R: 176,
                        G: 41,
                        B: 51
                    }
                },
                4549: {
                    RGB: {
                        R: 208,
                        G: 141,
                        B: 37
                    }
                },
                4550: {
                    RGB: {
                        R: 201,
                        G: 127,
                        B: 37
                    }
                },
                4551: {
                    RGB: {
                        R: 199,
                        G: 118,
                        B: 40
                    }
                },
                4552: {
                    RGB: {
                        R: 190,
                        G: 95,
                        B: 41
                    }
                },
                4553: {
                    RGB: {
                        R: 183,
                        G: 71,
                        B: 45
                    }
                },
                4554: {
                    RGB: {
                        R: 178,
                        G: 48,
                        B: 44
                    }
                },
                4555: {
                    RGB: {
                        R: 175,
                        G: 33,
                        B: 44
                    }
                },
                4556: {
                    RGB: {
                        R: 206,
                        G: 122,
                        B: 29
                    }
                },
                4557: {
                    RGB: {
                        R: 201,
                        G: 111,
                        B: 30
                    }
                },
                4558: {
                    RGB: {
                        R: 196,
                        G: 99,
                        B: 28
                    }
                },
                4559: {
                    RGB: {
                        R: 191,
                        G: 81,
                        B: 33
                    }
                },
                4560: {
                    RGB: {
                        R: 184,
                        G: 62,
                        B: 40
                    }
                },
                4561: {
                    RGB: {
                        R: 180,
                        G: 43,
                        B: 42
                    }
                },
                4562: {
                    RGB: {
                        R: 174,
                        G: 19,
                        B: 37
                    }
                },
                4563: {
                    RGB: {
                        R: 203,
                        G: 103,
                        B: 14
                    }
                },
                4564: {
                    RGB: {
                        R: 202,
                        G: 96,
                        B: 19
                    }
                },
                4565: {
                    RGB: {
                        R: 194,
                        G: 84,
                        B: 16
                    }
                },
                4566: {
                    RGB: {
                        R: 190,
                        G: 69,
                        B: 26
                    }
                },
                4567: {
                    RGB: {
                        R: 184,
                        G: 54,
                        B: 29
                    }
                },
                4568: {
                    RGB: {
                        R: 179,
                        G: 34,
                        B: 32
                    }
                },
                4569: {
                    RGB: {
                        R: 175,
                        G: 6,
                        B: 31
                    }
                },
                4570: {
                    RGB: {
                        R: 201,
                        G: 87,
                        B: 0
                    }
                },
                4571: {
                    RGB: {
                        R: 196,
                        G: 81,
                        B: 0
                    }
                },
                4572: {
                    RGB: {
                        R: 195,
                        G: 75,
                        B: 0
                    }
                },
                4573: {
                    RGB: {
                        R: 187,
                        G: 58,
                        B: 8
                    }
                },
                4574: {
                    RGB: {
                        R: 180,
                        G: 43,
                        B: 21
                    }
                },
                4575: {
                    RGB: {
                        R: 177,
                        G: 25,
                        B: 27
                    }
                },
                4576: {
                    RGB: {
                        R: 175,
                        G: 3,
                        B: 19
                    }
                },
                4577: {
                    RGB: {
                        R: 192,
                        G: 165,
                        B: 58
                    }
                },
                4578: {
                    RGB: {
                        R: 186,
                        G: 151,
                        B: 59
                    }
                },
                4579: {
                    RGB: {
                        R: 178,
                        G: 121,
                        B: 55
                    }
                },
                4580: {
                    RGB: {
                        R: 170,
                        G: 88,
                        B: 53
                    }
                },
                4581: {
                    RGB: {
                        R: 163,
                        G: 59,
                        B: 55
                    }
                },
                4582: {
                    RGB: {
                        R: 160,
                        G: 40,
                        B: 52
                    }
                },
                4583: {
                    RGB: {
                        R: 193,
                        G: 165,
                        B: 46
                    }
                },
                4584: {
                    RGB: {
                        R: 186,
                        G: 147,
                        B: 47
                    }
                },
                4585: {
                    RGB: {
                        R: 183,
                        G: 135,
                        B: 49
                    }
                },
                4586: {
                    RGB: {
                        R: 176,
                        G: 108,
                        B: 51
                    }
                },
                4587: {
                    RGB: {
                        R: 168,
                        G: 79,
                        B: 50
                    }
                },
                4588: {
                    RGB: {
                        R: 165,
                        G: 63,
                        B: 55
                    }
                },
                4589: {
                    RGB: {
                        R: 159,
                        G: 42,
                        B: 52
                    }
                },
                4590: {
                    RGB: {
                        R: 192,
                        G: 152,
                        B: 44
                    }
                },
                4591: {
                    RGB: {
                        R: 186,
                        G: 138,
                        B: 47
                    }
                },
                4592: {
                    RGB: {
                        R: 184,
                        G: 126,
                        B: 47
                    }
                },
                4593: {
                    RGB: {
                        R: 174,
                        G: 100,
                        B: 50
                    }
                },
                4594: {
                    RGB: {
                        R: 167,
                        G: 74,
                        B: 50
                    }
                },
                4595: {
                    RGB: {
                        R: 162,
                        G: 53,
                        B: 52
                    }
                },
                4596: {
                    RGB: {
                        R: 160,
                        G: 40,
                        B: 52
                    }
                },
                4597: {
                    RGB: {
                        R: 188,
                        G: 128,
                        B: 38
                    }
                },
                4598: {
                    RGB: {
                        R: 183,
                        G: 117,
                        B: 40
                    }
                },
                4599: {
                    RGB: {
                        R: 180,
                        G: 105,
                        B: 38
                    }
                },
                4600: {
                    RGB: {
                        R: 173,
                        G: 85,
                        B: 42
                    }
                },
                4601: {
                    RGB: {
                        R: 167,
                        G: 61,
                        B: 44
                    }
                },
                4602: {
                    RGB: {
                        R: 161,
                        G: 46,
                        B: 45
                    }
                },
                4603: {
                    RGB: {
                        R: 159,
                        G: 30,
                        B: 44
                    }
                },
                4604: {
                    RGB: {
                        R: 186,
                        G: 109,
                        B: 28
                    }
                },
                4605: {
                    RGB: {
                        R: 181,
                        G: 98,
                        B: 26
                    }
                },
                4606: {
                    RGB: {
                        R: 178,
                        G: 90,
                        B: 29
                    }
                },
                4607: {
                    RGB: {
                        R: 173,
                        G: 73,
                        B: 35
                    }
                },
                4608: {
                    RGB: {
                        R: 167,
                        G: 53,
                        B: 35
                    }
                },
                4609: {
                    RGB: {
                        R: 162,
                        G: 36,
                        B: 36
                    }
                },
                4610: {
                    RGB: {
                        R: 158,
                        G: 21,
                        B: 37
                    }
                },
                4611: {
                    RGB: {
                        R: 185,
                        G: 94,
                        B: 14
                    }
                },
                4612: {
                    RGB: {
                        R: 182,
                        G: 86,
                        B: 17
                    }
                },
                4613: {
                    RGB: {
                        R: 178,
                        G: 79,
                        B: 23
                    }
                },
                4614: {
                    RGB: {
                        R: 174,
                        G: 64,
                        B: 28
                    }
                },
                4615: {
                    RGB: {
                        R: 166,
                        G: 47,
                        B: 28
                    }
                },
                4616: {
                    RGB: {
                        R: 163,
                        G: 33,
                        B: 33
                    }
                },
                4617: {
                    RGB: {
                        R: 160,
                        G: 26,
                        B: 36
                    }
                },
                4618: {
                    RGB: {
                        R: 185,
                        G: 82,
                        B: 0
                    }
                },
                4619: {
                    RGB: {
                        R: 181,
                        G: 75,
                        B: 7
                    }
                },
                4620: {
                    RGB: {
                        R: 179,
                        G: 71,
                        B: 15
                    }
                },
                4621: {
                    RGB: {
                        R: 171,
                        G: 57,
                        B: 18
                    }
                },
                4622: {
                    RGB: {
                        R: 168,
                        G: 42,
                        B: 26
                    }
                },
                4623: {
                    RGB: {
                        R: 161,
                        G: 25,
                        B: 27
                    }
                },
                4624: {
                    RGB: {
                        R: 159,
                        G: 12,
                        B: 24
                    }
                },
                4625: {
                    RGB: {
                        R: 159,
                        G: 138,
                        B: 52
                    }
                },
                4626: {
                    RGB: {
                        R: 155,
                        G: 128,
                        B: 53
                    }
                },
                4627: {
                    RGB: {
                        R: 148,
                        G: 103,
                        B: 50
                    }
                },
                4628: {
                    RGB: {
                        R: 141,
                        G: 80,
                        B: 51
                    }
                },
                4629: {

                    RGB: {
                        R: 137,
                        G: 60,
                        B: 51
                    }
                },
                4630: {
                    RGB: {
                        R: 134,
                        G: 43,
                        B: 45
                    }
                },
                4631: {
                    RGB: {
                        R: 159,
                        G: 138,
                        B: 47
                    }
                },
                4632: {
                    RGB: {
                        R: 157,
                        G: 127,
                        B: 47
                    }
                },
                4633: {
                    RGB: {
                        R: 152,
                        G: 117,
                        B: 47
                    }
                },
                4634: {
                    RGB: {
                        R: 147,
                        G: 94,
                        B: 49
                    }
                },
                4635: {
                    RGB: {
                        R: 142,
                        G: 74,
                        B: 52
                    }
                },
                4636: {
                    RGB: {
                        R: 135,
                        G: 54,
                        B: 50
                    }
                },
                4637: {
                    RGB: {
                        R: 131,
                        G: 39,
                        B: 47
                    }
                },
                4638: {
                    RGB: {
                        R: 160,
                        G: 129,
                        B: 44
                    }
                },
                4639: {
                    RGB: {
                        R: 155,
                        G: 119,
                        B: 45
                    }
                },
                4640: {
                    RGB: {
                        R: 152,
                        G: 109,
                        B: 45
                    }
                },
                4641: {
                    RGB: {
                        R: 147,
                        G: 90,
                        B: 47
                    }
                },
                4642: {
                    RGB: {
                        R: 141,
                        G: 70,
                        B: 48
                    }
                },
                4643: {
                    RGB: {
                        R: 138,
                        G: 53,
                        B: 50
                    }
                },
                4644: {
                    RGB: {
                        R: 133,
                        G: 38,
                        B: 48
                    }
                },
                4645: {
                    RGB: {
                        R: 157,
                        G: 110,
                        B: 37
                    }
                },
                4646: {
                    RGB: {
                        R: 156,
                        G: 101,
                        B: 39
                    }
                },
                4647: {
                    RGB: {
                        R: 150,
                        G: 92,
                        B: 37
                    }
                },
                4648: {
                    RGB: {
                        R: 145,
                        G: 72,
                        B: 39
                    }
                },
                4649: {
                    RGB: {
                        R: 139,
                        G: 56,
                        B: 40
                    }
                },
                4650: {
                    RGB: {
                        R: 137,
                        G: 44,
                        B: 43
                    }
                },
                4651: {
                    RGB: {
                        R: 133,
                        G: 35,
                        B: 41
                    }
                },
                4652: {
                    RGB: {
                        R: 157,
                        G: 95,
                        B: 30
                    }
                },
                4653: {
                    RGB: {
                        R: 154,
                        G: 86,
                        B: 30
                    }
                },
                4654: {
                    RGB: {
                        R: 150,
                        G: 77,
                        B: 30
                    }
                },
                4655: {
                    RGB: {
                        R: 146,
                        G: 65,
                        B: 33
                    }
                },
                4656: {
                    RGB: {
                        R: 141,
                        G: 52,
                        B: 36
                    }
                },
                4657: {
                    RGB: {
                        R: 137,
                        G: 38,
                        B: 38
                    }
                },
                4658: {
                    RGB: {
                        R: 133,
                        G: 27,
                        B: 35
                    }
                },
                4659: {
                    RGB: {
                        R: 154,
                        G: 79,
                        B: 24
                    }
                },
                4660: {
                    RGB: {
                        R: 153,
                        G: 73,
                        B: 23
                    }
                },
                4661: {
                    RGB: {
                        R: 150,
                        G: 66,
                        B: 24
                    }
                },
                4662: {
                    RGB: {
                        R: 147,
                        G: 57,
                        B: 29
                    }
                },
                4663: {
                    RGB: {
                        R: 139,
                        G: 42,
                        B: 27
                    }
                },
                4664: {
                    RGB: {
                        R: 136,
                        G: 30,
                        B: 31
                    }
                },
                4665: {
                    RGB: {
                        R: 132,
                        G: 25,
                        B: 31
                    }
                },
                4666: {
                    RGB: {
                        R: 153,
                        G: 69,
                        B: 12
                    }
                },
                4667: {
                    RGB: {
                        R: 151,
                        G: 64,
                        B: 19
                    }
                },
                4668: {
                    RGB: {
                        R: 150,
                        G: 60,
                        B: 18
                    }
                },
                4669: {
                    RGB: {
                        R: 144,
                        G: 49,
                        B: 24
                    }
                },
                4670: {
                    RGB: {
                        R: 140,
                        G: 40,
                        B: 25
                    }
                },
                4671: {
                    RGB: {
                        R: 135,
                        G: 28,
                        B: 26
                    }
                },
                4672: {
                    RGB: {
                        R: 132,
                        G: 20,
                        B: 27
                    }
                },
                4673: {
                    RGB: {
                        R: 123,
                        G: 109,
                        B: 45
                    }
                },
                4674: {
                    RGB: {
                        R: 119,
                        G: 100,
                        B: 43
                    }
                },
                4675: {
                    RGB: {
                        R: 114,
                        G: 82,
                        B: 42
                    }
                },
                4676: {
                    RGB: {
                        R: 110,
                        G: 64,
                        B: 41
                    }
                },
                4677: {
                    RGB: {
                        R: 108,
                        G: 50,
                        B: 43
                    }
                },
                4678: {
                    RGB: {
                        R: 104,
                        G: 39,
                        B: 40
                    }
                },
                4679: {
                    RGB: {
                        R: 126,
                        G: 110,
                        B: 43
                    }
                },
                4680: {
                    RGB: {
                        R: 121,
                        G: 100,
                        B: 42
                    }
                },
                4681: {
                    RGB: {
                        R: 120,
                        G: 94,
                        B: 41
                    }
                },
                4682: {
                    RGB: {
                        R: 116,
                        G: 79,
                        B: 43
                    }
                },
                4683: {
                    RGB: {
                        R: 111,
                        G: 62,
                        B: 44
                    }
                },
                4684: {
                    RGB: {
                        R: 108,
                        G: 50,
                        B: 45
                    }
                },
                4685: {
                    RGB: {
                        R: 103,
                        G: 40,
                        B: 44
                    }
                },
                4686: {
                    RGB: {
                        R: 125,
                        G: 103,
                        B: 40
                    }
                },
                4687: {
                    RGB: {
                        R: 120,
                        G: 93,
                        B: 40
                    }
                },
                4688: {
                    RGB: {
                        R: 120,
                        G: 89,
                        B: 40
                    }
                },
                4689: {
                    RGB: {
                        R: 113,
                        G: 72,
                        B: 40
                    }
                },
                4690: {
                    RGB: {
                        R: 111,
                        G: 59,
                        B: 42
                    }
                },
                4691: {
                    RGB: {
                        R: 107,
                        G: 46,
                        B: 43
                    }
                },
                4692: {
                    RGB: {
                        R: 104,
                        G: 39,
                        B: 43
                    }
                },
                4693: {
                    RGB: {
                        R: 124,
                        G: 91,
                        B: 36
                    }
                },
                4694: {
                    RGB: {
                        R: 118,
                        G: 82,
                        B: 35
                    }
                },
                4695: {
                    RGB: {
                        R: 117,
                        G: 78,
                        B: 37
                    }
                },
                4696: {
                    RGB: {
                        R: 113,
                        G: 64,
                        B: 36
                    }
                },
                4697: {
                    RGB: {
                        R: 110,
                        G: 53,
                        B: 40
                    }
                },
                4698: {
                    RGB: {
                        R: 104,
                        G: 38,
                        B: 37
                    }
                },
                4699: {
                    RGB: {
                        R: 103,
                        G: 33,
                        B: 39
                    }
                },
                4700: {
                    RGB: {
                        R: 123,
                        G: 78,
                        B: 31
                    }
                },
                4701: {
                    RGB: {
                        R: 120,
                        G: 72,
                        B: 32
                    }
                },
                4702: {
                    RGB: {
                        R: 120,
                        G: 68,
                        B: 32
                    }
                },
                4703: {
                    RGB: {
                        R: 112,
                        G: 56,
                        B: 32
                    }
                },
                4704: {
                    RGB: {
                        R: 109,
                        G: 44,
                        B: 34
                    }
                },
                4705: {
                    RGB: {
                        R: 107,
                        G: 34,
                        B: 34
                    }
                },
                4706: {
                    RGB: {
                        R: 105,
                        G: 30,
                        B: 35
                    }
                },
                4707: {
                    RGB: {
                        R: 121,
                        G: 67,
                        B: 27
                    }
                },
                4708: {
                    RGB: {
                        R: 119,
                        G: 64,
                        B: 30
                    }
                },
                4709: {
                    RGB: {
                        R: 116,
                        G: 57,
                        B: 27
                    }
                },
                4710: {
                    RGB: {
                        R: 114,
                        G: 48,
                        B: 29
                    }
                },
                4711: {
                    RGB: {
                        R: 108,
                        G: 38,
                        B: 39
                    }
                },
                4712: {
                    RGB: {
                        R: 105,
                        G: 30,
                        B: 31
                    }
                },
                4713: {
                    RGB: {
                        R: 102,
                        G: 27,
                        B: 32
                    }
                },
                4714: {
                    RGB: {
                        R: 120,
                        G: 62,
                        B: 32
                    }
                },
                4715: {
                    RGB: {
                        R: 121,
                        G: 56,
                        B: 24
                    }
                },
                4716: {
                    RGB: {
                        R: 120,
                        G: 53,
                        B: 25
                    }
                },
                4717: {
                    RGB: {
                        R: 116,
                        G: 46,
                        B: 26
                    }
                },
                4718: {
                    RGB: {
                        R: 110,
                        G: 36,
                        B: 26
                    }
                },
                4719: {
                    RGB: {
                        R: 109,
                        G: 30,
                        B: 29
                    }
                },
                4720: {
                    RGB: {
                        R: 102,
                        G: 29,
                        B: 29
                    }
                },
                4721: {
                    RGB: {
                        R: 204,
                        G: 14,
                        B: 121
                    }
                },
                4722: {
                    RGB: {
                        R: 205,
                        G: 0,
                        B: 111
                    }
                },
                4723: {
                    RGB: {
                        R: 205,
                        G: 16,
                        B: 93
                    }
                },
                4724: {
                    RGB: {
                        R: 205,
                        G: 18,
                        B: 74
                    }
                },
                4725: {
                    RGB: {
                        R: 205,
                        G: 21,
                        B: 53
                    }
                },
                4726: {
                    RGB: {
                        R: 205,
                        G: 26,
                        B: 38
                    }
                },
                4727: {
                    RGB: {
                        R: 195,
                        G: 40,
                        B: 121
                    }
                },
                4728: {
                    RGB: {
                        R: 196,
                        G: 43,
                        B: 114
                    }
                },
                4729: {
                    RGB: {
                        R: 195,
                        G: 38,
                        B: 104
                    }
                },
                4730: {
                    RGB: {
                        R: 198,
                        G: 42,
                        B: 89
                    }
                },
                4731: {
                    RGB: {
                        R: 196,
                        G: 44,
                        B: 76
                    }
                },
                4732: {
                    RGB: {
                        R: 197,
                        G: 47,
                        B: 61
                    }
                },
                4733: {
                    RGB: {
                        R: 196,
                        G: 45,
                        B: 52
                    }
                },
                4734: {
                    RGB: {
                        R: 198,
                        G: 36,
                        B: 115
                    }
                },
                4735: {
                    RGB: {
                        R: 196,
                        G: 34,
                        B: 104
                    }
                },
                4736: {
                    RGB: {
                        R: 195,
                        G: 30,
                        B: 97
                    }
                },
                4737: {
                    RGB: {
                        R: 194,
                        G: 35,
                        B: 81
                    }
                },
                4738: {
                    RGB: {
                        R: 194,
                        G: 37,
                        B: 67
                    }
                },
                4739: {
                    RGB: {
                        R: 194,
                        G: 39,
                        B: 55
                    }
                },
                4740: {
                    RGB: {
                        R: 194,
                        G: 38,
                        B: 43
                    }
                },
                4741: {
                    RGB: {
                        R: 196,
                        G: 25,
                        B: 98
                    }
                },
                4742: {
                    RGB: {
                        R: 196,
                        G: 23,
                        B: 90
                    }
                },
                4743: {
                    RGB: {
                        R: 197,
                        G: 23,
                        B: 85
                    }
                },
                4744: {
                    RGB: {
                        R: 194,
                        G: 16,
                        B: 68
                    }
                },
                4745: {
                    RGB: {
                        R: 194,
                        G: 21,
                        B: 57
                    }
                },
                4746: {
                    RGB: {
                        R: 193,
                        G: 25,
                        B: 44
                    }
                },
                4747: {
                    RGB: {
                        R: 197,
                        G: 30,
                        B: 35
                    }
                },
                4748: {
                    RGB: {
                        R: 195,
                        G: 0,
                        B: 85
                    }
                },
                4749: {
                    RGB: {
                        R: 195,
                        G: 0,
                        B: 77
                    }
                },
                4750: {
                    RGB: {
                        R: 196,
                        G: 0,
                        B: 71
                    }
                },
                4751: {
                    RGB: {
                        R: 195,
                        G: 0,
                        B: 58
                    }
                },
                4752: {
                    RGB: {
                        R: 195,
                        G: 4,
                        B: 47
                    }
                },
                4753: {
                    RGB: {
                        R: 194,
                        G: 17,
                        B: 36
                    }
                },
                4754: {
                    RGB: {
                        R: 195,
                        G: 16,
                        B: 25
                    }
                },
                4755: {
                    RGB: {
                        R: 195,
                        G: 0,
                        B: 73
                    }
                },
                4756: {
                    RGB: {
                        R: 198,
                        G: 0,
                        B: 64
                    }
                },
                4757: {
                    RGB: {
                        R: 193,
                        G: 0,
                        B: 61
                    }
                },
                4758: {
                    RGB: {
                        R: 193,
                        G: 0,
                        B: 46
                    }
                },
                4759: {
                    RGB: {
                        R: 193,
                        G: 0,
                        B: 33
                    }
                },
                4760: {
                    RGB: {
                        R: 196,
                        G: 0,
                        B: 25
                    }
                },
                4761: {
                    RGB: {
                        R: 196,
                        G: 0,
                        B: 15
                    }
                },
                4762: {
                    RGB: {
                        R: 194,
                        G: 0,
                        B: 59
                    }
                },
                4763: {
                    RGB: {
                        R: 194,
                        G: 0,
                        B: 56
                    }
                },
                4764: {
                    RGB: {
                        R: 194,
                        G: 0,
                        B: 51
                    }
                },
                4765: {
                    RGB: {
                        R: 194,
                        G: 0,
                        B: 41
                    }
                },
                4766: {
                    RGB: {
                        R: 193,
                        G: 0,
                        B: 29
                    }
                },
                4767: {
                    RGB: {
                        R: 194,
                        G: 0,
                        B: 0
                    }
                },
                4768: {
                    RGB: {
                        R: 194,
                        G: 0,
                        B: 0
                    }
                },
                4769: {
                    RGB: {
                        R: 178,
                        G: 41,
                        B: 110
                    }
                },
                4770: {
                    RGB: {
                        R: 178,
                        G: 43,
                        B: 104
                    }
                },
                4771: {
                    RGB: {
                        R: 178,
                        G: 45,
                        B: 89
                    }
                },
                4772: {
                    RGB: {
                        R: 177,
                        G: 45,
                        B: 76
                    }
                },
                4773: {
                    RGB: {
                        R: 177,
                        G: 46,
                        B: 64
                    }
                },
                4774: {
                    RGB: {
                        R: 176,
                        G: 48,
                        B: 56
                    }
                },
                4775: {
                    RGB: {
                        R: 178,
                        G: 41,
                        B: 111
                    }
                },
                4776: {
                    RGB: {
                        R: 174,
                        G: 41,
                        B: 101
                    }
                },
                4777: {
                    RGB: {
                        R: 175,
                        G: 40,
                        B: 94
                    }
                },
                4778: {
                    RGB: {
                        R: 175,
                        G: 41,
                        B: 82
                    }
                },
                4779: {
                    RGB: {
                        R: 175,
                        G: 42,
                        B: 68
                    }
                },
                4780: {
                    RGB: {
                        R: 175,
                        G: 43,
                        B: 56
                    }
                },
                4781: {
                    RGB: {
                        R: 175,
                        G: 45,
                        B: 48
                    }
                },
                4782: {
                    RGB: {
                        R: 176,
                        G: 36,
                        B: 103
                    }
                },
                4783: {
                    RGB: {
                        R: 176,
                        G: 38,
                        B: 95
                    }
                },
                4784: {
                    RGB: {
                        R: 177,
                        G: 36,
                        B: 88
                    }
                },
                4785: {
                    RGB: {
                        R: 177,
                        G: 38,
                        B: 76
                    }
                },
                4786: {
                    RGB: {
                        R: 177,
                        G: 39,
                        B: 64
                    }
                },
                4787: {
                    RGB: {
                        R: 176,
                        G: 41,
                        B: 53
                    }
                },
                4788: {
                    RGB: {
                        R: 176,
                        G: 43,
                        B: 43
                    }
                },
                4789: {
                    RGB: {
                        R: 175,
                        G: 25,
                        B: 88
                    }
                },
                4790: {
                    RGB: {
                        R: 175,
                        G: 28,
                        B: 84
                    }
                },
                4791: {
                    RGB: {
                        R: 175,
                        G: 27,
                        B: 76
                    }
                },
                4792: {
                    RGB: {
                        R: 175,
                        G: 29,
                        B: 64
                    }
                },
                4793: {
                    RGB: {
                        R: 175,
                        G: 31,
                        B: 54
                    }
                },
                4794: {
                    RGB: {
                        R: 175,
                        G: 33,
                        B: 44
                    }
                },
                4795: {
                    RGB: {
                        R: 175,
                        G: 33,
                        B: 35
                    }
                },
                4796: {
                    RGB: {
                        R: 177,
                        G: 16,
                        B: 79
                    }
                },
                4797: {
                    RGB: {
                        R: 174,
                        G: 9,
                        B: 71
                    }
                },
                4798: {
                    RGB: {
                        R: 174,
                        G: 5,
                        B: 67
                    }
                },
                4799: {
                    RGB: {
                        R: 174,
                        G: 15,
                        B: 54
                    }
                },
                4800: {
                    RGB: {
                        R: 173,
                        G: 20,
                        B: 45
                    }
                },
                4801: {
                    RGB: {
                        R: 173,
                        G: 24,
                        B: 37
                    }
                },
                4802: {
                    RGB: {
                        R: 173,
                        G: 24,
                        B: 31
                    }
                },
                4803: {
                    RGB: {
                        R: 175,
                        G: 0,
                        B: 65
                    }
                },
                4804: {
                    RGB: {
                        R: 175,
                        G: 0,
                        B: 59
                    }
                },
                4805: {
                    RGB: {
                        R: 175,
                        G: 0,
                        B: 56
                    }
                },
                4806: {
                    RGB: {
                        R: 175,
                        G: 0,
                        B: 46
                    }
                },
                4807: {
                    RGB: {
                        R: 172,
                        G: 0,
                        B: 34
                    }
                },
                4808: {
                    RGB: {
                        R: 174,
                        G: 18,
                        B: 27
                    }
                },
                4809: {
                    RGB: {
                        R: 173,
                        G: 23,
                        B: 20
                    }
                },
                4810: {
                    RGB: {
                        R: 176,
                        G: 0,
                        B: 56
                    }
                },
                4811: {
                    RGB: {
                        R: 173,
                        G: 0,
                        B: 51
                    }
                },
                4812: {
                    RGB: {
                        R: 172,
                        G: 0,
                        B: 48
                    }
                },
                4813: {
                    RGB: {
                        R: 175,
                        G: 0,
                        B: 40
                    }
                },
                4814: {
                    RGB: {
                        R: 170,
                        G: 17,
                        B: 31
                    }
                },
                4815: {
                    RGB: {
                        R: 172,
                        G: 0,
                        B: 22
                    }
                },
                4816: {
                    RGB: {
                        R: 175,
                        G: 3,
                        B: 19
                    }
                },
                4817: {
                    RGB: {
                        R: 161,
                        G: 41,
                        B: 101
                    }
                },
                4818: {
                    RGB: {
                        R: 161,
                        G: 40,
                        B: 94
                    }
                },
                4819: {
                    RGB: {
                        R: 161,
                        G: 43,
                        B: 82
                    }
                },
                4820: {
                    RGB: {
                        R: 161,
                        G: 43,
                        B: 69
                    }
                },
                4821: {
                    RGB: {
                        R: 161,
                        G: 45,
                        B: 59
                    }
                },
                4822: {
                    RGB: {
                        R: 160,
                        G: 46,
                        B: 51
                    }
                },
                4823: {
                    RGB: {
                        R: 163,
                        G: 37,
                        B: 102
                    }
                },
                4824: {
                    RGB: {
                        R: 163,
                        G: 38,
                        B: 96
                    }
                },
                4825: {
                    RGB: {
                        R: 163,
                        G: 40,
                        B: 90
                    }
                },
                4826: {
                    RGB: {
                        R: 163,
                        G: 41,
                        B: 78
                    }
                },
                4827: {
                    RGB: {
                        R: 163,
                        G: 42,
                        B: 66
                    }
                },
                4828: {
                    RGB: {
                        R: 163,
                        G: 43,
                        B: 55
                    }
                },
                4829: {
                    RGB: {
                        R: 163,
                        G: 45,
                        B: 47
                    }
                },
                4830: {
                    RGB: {
                        R: 163,
                        G: 36,
                        B: 99
                    }
                },
                4831: {
                    RGB: {
                        R: 164,
                        G: 35,
                        B: 91
                    }
                },
                4832: {
                    RGB: {
                        R: 165,
                        G: 34,
                        B: 85
                    }
                },
                4833: {
                    RGB: {
                        R: 163,
                        G: 40,
                        B: 75
                    }
                },
                4834: {
                    RGB: {
                        R: 161,
                        G: 35,
                        B: 61
                    }
                },
                4835: {
                    RGB: {
                        R: 161,
                        G: 37,
                        B: 51
                    }
                },
                4836: {
                    RGB: {
                        R: 160,
                        G: 39,
                        B: 43
                    }
                },
                4837: {
                    RGB: {
                        R: 163,
                        G: 27,
                        B: 86
                    }
                },
                4838: {
                    RGB: {
                        R: 162,
                        G: 29,
                        B: 82
                    }
                },
                4839: {
                    RGB: {
                        R: 163,
                        G: 28,
                        B: 76
                    }
                },
                4840: {
                    RGB: {
                        R: 163,
                        G: 30,
                        B: 64
                    }
                },
                4841: {
                    RGB: {
                        R: 160,
                        G: 27,
                        B: 52
                    }
                },
                4842: {
                    RGB: {
                        R: 162,
                        G: 34,
                        B: 43
                    }
                },
                4843: {
                    RGB: {
                        R: 159,
                        G: 32,
                        B: 34
                    }
                },
                4844: {
                    RGB: {
                        R: 165,
                        G: 0,
                        B: 73
                    }
                },
                4845: {
                    RGB: {
                        R: 160,
                        G: 22,
                        B: 69
                    }
                },
                4846: {
                    RGB: {
                        R: 161,
                        G: 21,
                        B: 65
                    }
                },
                4847: {
                    RGB: {
                        R: 160,
                        G: 24,
                        B: 55
                    }
                },
                4848: {
                    RGB: {
                        R: 160,
                        G: 27,
                        B: 46
                    }
                },
                4849: {
                    RGB: {
                        R: 160,
                        G: 26,
                        B: 37
                    }
                },
                4850: {
                    RGB: {
                        R: 160,
                        G: 29,
                        B: 29
                    }
                },
                4851: {
                    RGB: {
                        R: 159,
                        G: 0,
                        B: 63
                    }
                },
                4852: {
                    RGB: {
                        R: 158,
                        G: 10,
                        B: 58
                    }
                },
                4853: {
                    RGB: {
                        R: 158,
                        G: 8,
                        B: 54
                    }
                },
                4854: {
                    RGB: {
                        R: 158,
                        G: 16,
                        B: 45
                    }
                },
                4855: {
                    RGB: {
                        R: 159,
                        G: 0,
                        B: 37
                    }
                },
                4856: {
                    RGB: {
                        R: 158,
                        G: 20,
                        B: 28
                    }
                },
                4857: {
                    RGB: {
                        R: 157,
                        G: 24,
                        B: 24
                    }
                },
                4858: {
                    RGB: {
                        R: 159,
                        G: 0,
                        B: 55
                    }
                },
                4859: {
                    RGB: {
                        R: 159,
                        G: 6,
                        B: 51
                    }
                },
                4860: {
                    RGB: {
                        R: 155,
                        G: 1,
                        B: 46
                    }
                },
                4861: {
                    RGB: {
                        R: 158,
                        G: 16,
                        B: 42
                    }
                },
                4862: {
                    RGB: {
                        R: 159,
                        G: 14,
                        B: 34
                    }
                },
                4863: {
                    RGB: {
                        R: 158,
                        G: 20,
                        B: 26
                    }
                },
                4864: {
                    RGB: {
                        R: 159,
                        G: 12,
                        B: 24
                    }
                },
                4865: {
                    RGB: {
                        R: 136,
                        G: 44,
                        B: 90
                    }
                },
                4866: {
                    RGB: {
                        R: 136,
                        G: 43,
                        B: 84
                    }
                },
                4867: {
                    RGB: {
                        R: 137,
                        G: 43,
                        B: 73
                    }
                },
                4868: {
                    RGB: {
                        R: 136,
                        G: 46,
                        B: 63
                    }
                },
                4869: {
                    RGB: {
                        R: 136,
                        G: 46,
                        B: 50
                    }
                },
                4870: {
                    RGB: {
                        R: 135,
                        G: 48,
                        B: 46
                    }
                },
                4871: {
                    RGB: {
                        R: 134,
                        G: 39,
                        B: 89
                    }
                },
                4872: {
                    RGB: {
                        R: 134,
                        G: 38,
                        B: 83
                    }
                },
                4873: {
                    RGB: {
                        R: 134,
                        G: 39,
                        B: 78
                    }
                },
                4874: {
                    RGB: {
                        R: 134,
                        G: 40,
                        B: 68
                    }
                },
                4875: {
                    RGB: {
                        R: 136,
                        G: 42,
                        B: 59
                    }
                },
                4876: {
                    RGB: {
                        R: 136,
                        G: 46,
                        B: 51
                    }
                },
                4877: {
                    RGB: {
                        R: 131,
                        G: 41,
                        B: 40
                    }
                },
                4878: {
                    RGB: {
                        R: 135,
                        G: 37,
                        B: 86
                    }
                },
                4879: {
                    RGB: {
                        R: 135,
                        G: 38,
                        B: 80
                    }
                },
                4880: {
                    RGB: {
                        R: 135,
                        G: 37,
                        B: 75
                    }
                },
                4881: {
                    RGB: {
                        R: 136,
                        G: 38,
                        B: 63
                    }
                },
                4882: {
                    RGB: {
                        R: 137,
                        G: 40,
                        B: 56
                    }
                },
                4883: {
                    RGB: {
                        R: 132,
                        G: 39,
                        B: 45
                    }
                },
                4884: {
                    RGB: {
                        R: 133,
                        G: 40,
                        B: 39
                    }
                },
                4885: {
                    RGB: {
                        R: 134,
                        G: 30,
                        B: 75
                    }
                },
                4886: {
                    RGB: {
                        R: 135,
                        G: 29,
                        B: 70
                    }
                },
                4887: {
                    RGB: {
                        R: 134,
                        G: 31,
                        B: 66
                    }
                },
                4888: {
                    RGB: {
                        R: 132,
                        G: 29,
                        B: 55
                    }
                },
                4889: {
                    RGB: {
                        R: 131,
                        G: 30,
                        B: 47
                    }
                },
                4890: {
                    RGB: {
                        R: 131,
                        G: 30,
                        B: 47
                    }
                },
                4891: {
                    RGB: {
                        R: 130,
                        G: 34,
                        B: 34
                    }
                },
                4892: {
                    RGB: {
                        R: 132,
                        G: 24,
                        B: 65
                    }
                },
                4893: {
                    RGB: {
                        R: 132,
                        G: 27,
                        B: 61
                    }
                },
                4894: {
                    RGB: {
                        R: 130,
                        G: 22,
                        B: 54
                    }
                },
                4895: {
                    RGB: {
                        R: 130,
                        G: 21,
                        B: 46
                    }
                },
                4896: {
                    RGB: {
                        R: 129,
                        G: 26,
                        B: 39
                    }
                },
                4897: {
                    RGB: {
                        R: 129,
                        G: 26,
                        B: 33
                    }
                },
                4898: {
                    RGB: {
                        R: 129,
                        G: 28,
                        B: 28
                    }
                },
                4899: {
                    RGB: {
                        R: 131,
                        G: 18,
                        B: 54
                    }
                },
                4900: {
                    RGB: {
                        R: 130,
                        G: 21,
                        B: 50
                    }
                },
                4901: {
                    RGB: {
                        R: 130,
                        G: 21,
                        B: 47
                    }
                },
                4902: {
                    RGB: {
                        R: 131,
                        G: 20,
                        B: 40
                    }
                },
                4903: {
                    RGB: {
                        R: 130,
                        G: 23,
                        B: 35
                    }
                },
                4904: {
                    RGB: {
                        R: 130,
                        G: 22,
                        B: 30
                    }
                },
                4905: {
                    RGB: {
                        R: 126,
                        G: 24,
                        B: 26
                    }
                },
                4906: {
                    RGB: {
                        R: 132,
                        G: 8,
                        B: 49
                    }
                },
                4907: {
                    RGB: {
                        R: 131,
                        G: 16,
                        B: 46
                    }
                },
                4908: {
                    RGB: {
                        R: 128,
                        G: 14,
                        B: 41
                    }
                },
                4909: {
                    RGB: {
                        R: 131,
                        G: 19,
                        B: 37
                    }
                },
                4910: {
                    RGB: {
                        R: 130,
                        G: 23,
                        B: 33
                    }
                },
                4911: {
                    RGB: {
                        R: 130,
                        G: 22,
                        B: 28
                    }
                },
                4912: {
                    RGB: {
                        R: 131,
                        G: 18,
                        B: 27
                    }
                },
                4913: {
                    RGB: {
                        R: 108,
                        G: 35,
                        B: 72
                    }
                },
                4914: {
                    RGB: {
                        R: 107,
                        G: 38,
                        B: 67
                    }
                },
                4915: {
                    RGB: {
                        R: 108,
                        G: 37,
                        B: 59
                    }
                },
                4916: {
                    RGB: {
                        R: 108,
                        G: 38,
                        B: 52
                    }
                },
                4917: {
                    RGB: {
                        R: 108,
                        G: 38,
                        B: 44
                    }
                },
                4918: {
                    RGB: {
                        R: 106,
                        G: 41,
                        B: 40
                    }
                },
                4919: {
                    RGB: {
                        R: 107,
                        G: 37,
                        B: 74
                    }
                },
                4920: {
                    RGB: {
                        R: 108,
                        G: 36,
                        B: 70
                    }
                },
                4921: {
                    RGB: {
                        R: 105,
                        G: 35,
                        B: 64
                    }
                },
                4922: {
                    RGB: {
                        R: 105,
                        G: 36,
                        B: 56
                    }
                },
                4923: {
                    RGB: {
                        R: 105,
                        G: 37,
                        B: 49
                    }
                },
                4924: {
                    RGB: {
                        R: 105,
                        G: 37,
                        B: 43
                    }
                },
                4925: {
                    RGB: {
                        R: 104,
                        G: 39,
                        B: 39
                    }
                },
                4926: {
                    RGB: {
                        R: 108,
                        G: 35,
                        B: 71
                    }
                },
                4927: {
                    RGB: {
                        R: 106,
                        G: 34,
                        B: 65
                    }
                },
                4928: {
                    RGB: {
                        R: 106,
                        G: 33,
                        B: 61
                    }
                },
                4929: {
                    RGB: {
                        R: 103,
                        G: 33,
                        B: 51
                    }
                },
                4930: {
                    RGB: {
                        R: 106,
                        G: 35,
                        B: 47
                    }
                },
                4931: {
                    RGB: {
                        R: 105,
                        G: 37,
                        B: 41
                    }
                },
                4932: {
                    RGB: {
                        R: 101,
                        G: 36,
                        B: 37
                    }
                },
                4933: {
                    RGB: {
                        R: 107,
                        G: 32,
                        B: 62
                    }
                },
                4934: {
                    RGB: {
                        R: 104,
                        G: 30,
                        B: 58
                    }
                },
                4935: {
                    RGB: {
                        R: 104,
                        G: 30,
                        B: 54
                    }
                },
                4936: {
                    RGB: {
                        R: 104,
                        G: 31,
                        B: 47
                    }
                },
                4937: {
                    RGB: {
                        R: 105,
                        G: 33,
                        B: 43
                    }
                },
                4938: {
                    RGB: {
                        R: 102,
                        G: 32,
                        B: 36
                    }
                },
                4939: {
                    RGB: {
                        R: 101,
                        G: 31,
                        B: 32
                    }
                },
                4940: {
                    RGB: {
                        R: 102,
                        G: 27,
                        B: 53
                    }
                },
                4941: {
                    RGB: {
                        R: 102,
                        G: 27,
                        B: 50
                    }
                },
                4942: {
                    RGB: {
                        R: 102,
                        G: 27,
                        B: 48
                    }
                },
                4943: {
                    RGB: {
                        R: 105,
                        G: 32,
                        B: 44
                    }
                },
                4944: {
                    RGB: {
                        R: 102,
                        G: 27,
                        B: 37
                    }
                },
                4945: {
                    RGB: {
                        R: 101,
                        G: 29,
                        B: 33
                    }
                },
                4946: {
                    RGB: {
                        R: 101,
                        G: 31,
                        B: 31
                    }
                },
                4947: {
                    RGB: {
                        R: 103,
                        G: 24,
                        B: 48
                    }
                },
                4948: {
                    RGB: {
                        R: 102,
                        G: 26,
                        B: 44
                    }
                },
                4949: {
                    RGB: {
                        R: 103,
                        G: 26,
                        B: 42
                    }
                },
                4950: {
                    RGB: {
                        R: 102,
                        G: 27,
                        B: 38
                    }
                },
                4951: {
                    RGB: {
                        R: 102,
                        G: 27,
                        B: 34
                    }
                },
                4952: {
                    RGB: {
                        R: 102,
                        G: 29,
                        B: 31
                    }
                },
                4953: {
                    RGB: {
                        R: 99,
                        G: 28,
                        B: 29
                    }
                },
                4954: {
                    RGB: {
                        R: 101,
                        G: 16,
                        B: 40
                    }
                },
                4955: {
                    RGB: {
                        R: 103,
                        G: 24,
                        B: 41
                    }
                },
                4956: {
                    RGB: {
                        R: 103,
                        G: 26,
                        B: 40
                    }
                },
                4957: {
                    RGB: {
                        R: 103,
                        G: 25,
                        B: 36
                    }
                },
                4958: {
                    RGB: {
                        R: 103,
                        G: 25,
                        B: 32
                    }
                },
                4959: {
                    RGB: {
                        R: 103,
                        G: 27,
                        B: 29
                    }
                },
                4960: {
                    RGB: {
                        R: 102,
                        G: 29,
                        B: 29
                    }
                },
                4961: {
                    RGB: {
                        R: 100,
                        G: 74,
                        B: 68
                    }
                },
                4962: {
                    RGB: {
                        R: 102,
                        G: 76,
                        B: 66
                    }
                },
                4963: {
                    RGB: {
                        R: 101,
                        G: 74,
                        B: 56
                    }
                },
                4964: {
                    RGB: {
                        R: 103,
                        G: 73,
                        B: 46
                    }
                },
                4965: {
                    RGB: {
                        R: 100,
                        G: 71,
                        B: 38
                    }
                },
                4966: {
                    RGB: {
                        R: 103,
                        G: 73,
                        B: 32
                    }
                },
                4967: {
                    RGB: {
                        R: 93,
                        G: 59,
                        B: 63
                    }
                },
                4968: {
                    RGB: {
                        R: 94,
                        G: 59,
                        B: 59
                    }
                },
                4969: {
                    RGB: {
                        R: 97,
                        G: 61,
                        B: 57
                    }
                },
                4970: {
                    RGB: {
                        R: 94,
                        G: 59,
                        B: 48
                    }
                },
                4971: {
                    RGB: {
                        R: 95,
                        G: 59,
                        B: 43
                    }
                },
                4972: {
                    RGB: {
                        R: 95,
                        G: 59,
                        B: 37
                    }
                },
                4973: {
                    RGB: {
                        R: 97,
                        G: 61,
                        B: 33
                    }
                },
                4974: {
                    RGB: {
                        R: 89,
                        G: 51,
                        B: 58
                    }
                },
                4975: {
                    RGB: {
                        R: 89,
                        G: 50,
                        B: 54
                    }
                },
                4976: {
                    RGB: {
                        R: 92,
                        G: 52,
                        B: 54
                    }
                },
                4977: {
                    RGB: {
                        R: 93,
                        G: 52,
                        B: 47
                    }
                },
                4978: {
                    RGB: {
                        R: 92,
                        G: 53,
                        B: 41
                    }
                },
                4979: {
                    RGB: {
                        R: 93,
                        G: 52,
                        B: 34
                    }
                },
                4980: {
                    RGB: {
                        R: 92,
                        G: 53,
                        B: 33
                    }
                },
                4981: {
                    RGB: {
                        R: 87,
                        G: 43,
                        B: 55
                    }
                },
                4982: {
                    RGB: {
                        R: 90,
                        G: 45,
                        B: 53
                    }
                },
                4983: {
                    RGB: {
                        R: 90,
                        G: 45,
                        B: 51
                    }
                },
                4984: {
                    RGB: {
                        R: 91,
                        G: 44,
                        B: 44
                    }
                },
                4985: {
                    RGB: {
                        R: 91,
                        G: 45,
                        B: 39
                    }
                },
                4986: {
                    RGB: {
                        R: 91,
                        G: 45,
                        B: 34
                    }
                },
                4987: {
                    RGB: {
                        R: 91,
                        G: 45,
                        B: 31
                    }
                },
                4988: {
                    RGB: {
                        R: 89,
                        G: 36,
                        B: 53
                    }
                },
                4989: {
                    RGB: {
                        R: 92,
                        G: 38,
                        B: 51
                    }
                },
                4990: {
                    RGB: {
                        R: 89,
                        G: 37,
                        B: 47
                    }
                },
                4991: {
                    RGB: {
                        R: 90,
                        G: 41,
                        B: 45
                    }
                },
                4992: {
                    RGB: {
                        R: 91,
                        G: 40,
                        B: 39
                    }
                },
                4993: {
                    RGB: {
                        R: 88,
                        G: 38,
                        B: 34
                    }
                },
                4994: {
                    RGB: {
                        R: 89,
                        G: 38,
                        B: 32
                    }
                },
                5001: {
                    RGB: {
                        R: 252,
                        G: 248,
                        B: 229
                    }
                },
                5002: {
                    RGB: {
                        R: 255,
                        G: 249,
                        B: 214
                    }
                },
                5003: {
                    RGB: {
                        R: 254,
                        G: 246,
                        B: 178
                    }
                },
                5004: {
                    RGB: {
                        R: 255,
                        G: 243,
                        B: 142
                    }
                },
                5005: {
                    RGB: {
                        R: 253,
                        G: 238,
                        B: 101
                    }
                },
                5006: {
                    RGB: {
                        R: 252,
                        G: 235,
                        B: 62
                    }
                },
                5007: {
                    RGB: {
                        R: 234,
                        G: 243,
                        B: 236
                    }
                },
                5008: {
                    RGB: {
                        R: 225,
                        G: 235,
                        B: 216
                    }
                },
                5009: {
                    RGB: {
                        R: 220,
                        G: 229,
                        B: 198
                    }
                },
                5010: {
                    RGB: {
                        R: 220,
                        G: 226,
                        B: 165
                    }
                },
                5011: {
                    RGB: {
                        R: 217,
                        G: 220,
                        B: 125
                    }
                },
                5012: {
                    RGB: {
                        R: 217,
                        G: 216,
                        B: 91
                    }
                },
                5013: {
                    RGB: {
                        R: 216,
                        G: 213,
                        B: 63
                    }
                },
                5014: {
                    RGB: {
                        R: 208,
                        G: 229,
                        B: 222
                    }
                },
                5015: {
                    RGB: {
                        R: 203,
                        G: 224,
                        B: 200
                    }
                },
                5016: {
                    RGB: {
                        R: 204,
                        G: 224,
                        B: 188
                    }
                },
                5017: {
                    RGB: {
                        R: 200,
                        G: 218,
                        B: 156
                    }
                },
                5018: {
                    RGB: {
                        R: 201,
                        G: 215,
                        B: 123
                    }
                },
                5019: {
                    RGB: {
                        R: 200,
                        G: 212,
                        B: 90
                    }
                },
                5020: {
                    RGB: {
                        R: 203,
                        G: 211,
                        B: 64
                    }
                },
                5021: {
                    RGB: {
                        R: 171,
                        G: 215,
                        B: 192
                    }
                },
                5022: {
                    RGB: {
                        R: 171,
                        G: 212,
                        B: 176
                    }
                },
                5023: {
                    RGB: {
                        R: 169,
                        G: 210,
                        B: 164
                    }
                },
                5024: {
                    RGB: {
                        R: 169,
                        G: 207,
                        B: 139
                    }
                },
                5025: {
                    RGB: {
                        R: 169,
                        G: 204,
                        B: 112
                    }
                },
                5026: {
                    RGB: {
                        R: 165,
                        G: 198,
                        B: 84
                    }
                },
                5027: {
                    RGB: {
                        R: 166,
                        G: 198,
                        B: 65
                    }
                },
                5028: {
                    RGB: {
                        R: 136,
                        G: 202,
                        B: 163
                    }
                },
                5029: {
                    RGB: {
                        R: 134,
                        G: 199,
                        B: 149
                    }
                },
                5030: {
                    RGB: {
                        R: 137,
                        G: 199,
                        B: 144
                    }
                },
                5031: {
                    RGB: {
                        R: 136,
                        G: 196,
                        B: 123
                    }
                },
                5032: {
                    RGB: {
                        R: 136,
                        G: 192,
                        B: 99
                    }
                },
                5033: {
                    RGB: {
                        R: 138,
                        G: 192,
                        B: 80
                    }
                },
                5034: {
                    RGB: {
                        R: 141,
                        G: 191,
                        B: 63
                    }
                },
                5035: {
                    RGB: {
                        R: 101,
                        G: 191,
                        B: 138
                    }
                },
                5036: {
                    RGB: {
                        R: 101,
                        G: 187,
                        B: 127
                    }
                },
                5037: {
                    RGB: {
                        R: 103,
                        G: 187,
                        B: 121
                    }
                },
                5038: {
                    RGB: {
                        R: 106,
                        G: 187,
                        B: 106
                    }
                },
                5039: {
                    RGB: {
                        R: 108,
                        G: 183,
                        B: 88
                    }
                },
                5040: {
                    RGB: {
                        R: 113,
                        G: 182,
                        B: 73
                    }
                },
                5041: {
                    RGB: {
                        R: 116,
                        G: 182,
                        B: 61
                    }
                },
                5042: {
                    RGB: {
                        R: 62,
                        G: 201,
                        B: 120
                    }
                },
                5043: {
                    RGB: {
                        R: 82,
                        G: 188,
                        B: 118
                    }
                },
                5044: {
                    RGB: {
                        R: 78,
                        G: 179,
                        B: 105
                    }
                },
                5045: {
                    RGB: {
                        R: 83,
                        G: 179,
                        B: 94
                    }
                },
                5046: {
                    RGB: {
                        R: 89,
                        G: 178,
                        B: 82
                    }
                },
                5047: {
                    RGB: {
                        R: 95,
                        G: 176,
                        B: 69
                    }
                },
                5048: {
                    RGB: {
                        R: 99,
                        G: 176,
                        B: 60
                    }
                },
                5049: {
                    RGB: {
                        R: 217,
                        G: 213,
                        B: 202
                    }
                },
                5050: {
                    RGB: {
                        R: 218,
                        G: 213,
                        B: 188
                    }
                },
                5051: {
                    RGB: {
                        R: 215,
                        G: 207,
                        B: 153
                    }
                },
                5052: {
                    RGB: {
                        R: 212,
                        G: 201,
                        B: 114
                    }
                },
                5053: {
                    RGB: {
                        R: 211,
                        G: 198,
                        B: 79
                    }
                },
                5054: {
                    RGB: {
                        R: 213,
                        G: 197,
                        B: 58
                    }
                },
                5055: {
                    RGB: {
                        R: 202,
                        G: 211,
                        B: 211
                    }
                },
                5056: {
                    RGB: {
                        R: 199,
                        G: 209,
                        B: 191
                    }
                },
                5057: {
                    RGB: {
                        R: 197,
                        G: 206,
                        B: 176
                    }
                },
                5058: {
                    RGB: {
                        R: 198,
                        G: 203,
                        B: 146
                    }
                },
                5059: {
                    RGB: {
                        R: 194,
                        G: 197,
                        B: 109
                    }
                },
                5060: {
                    RGB: {
                        R: 190,
                        G: 192,
                        B: 75
                    }
                },
                5061: {
                    RGB: {
                        R: 191,
                        G: 191,
                        B: 55
                    }
                },
                5062: {
                    RGB: {
                        R: 186,
                        G: 206,
                        B: 199
                    }
                },
                5063: {
                    RGB: {
                        R: 182,
                        G: 201,
                        B: 178
                    }
                },
                5064: {
                    RGB: {
                        R: 179,
                        G: 198,
                        B: 163
                    }
                },
                5065: {
                    RGB: {
                        R: 178,
                        G: 196,
                        B: 136
                    }
                },
                5066: {
                    RGB: {
                        R: 173,
                        G: 191,
                        B: 101
                    }
                },
                5067: {
                    RGB: {
                        R: 173,
                        G: 187,
                        B: 72
                    }
                },
                5068: {
                    RGB: {
                        R: 174,
                        G: 187,
                        B: 56
                    }
                },
                5069: {
                    RGB: {
                        R: 154,
                        G: 192,
                        B: 172
                    }
                },
                5070: {
                    RGB: {
                        R: 150,
                        G: 190,
                        B: 157
                    }
                },
                5071: {
                    RGB: {
                        R: 147,
                        G: 188,
                        B: 143
                    }
                },
                5072: {
                    RGB: {
                        R: 146,
                        G: 185,
                        B: 121
                    }
                },
                5073: {
                    RGB: {
                        R: 145,
                        G: 182,
                        B: 96
                    }
                },
                5074: {
                    RGB: {
                        R: 140,
                        G: 177,
                        B: 67
                    }
                },
                5075: {
                    RGB: {
                        R: 145,
                        G: 179,
                        B: 58
                    }
                },
                5076: {
                    RGB: {
                        R: 116,
                        G: 180,
                        B: 142
                    }
                },
                5077: {
                    RGB: {
                        R: 114,
                        G: 177,
                        B: 130
                    }
                },
                5078: {
                    RGB: {
                        R: 115,
                        G: 177,
                        B: 122
                    }
                },
                5079: {
                    RGB: {
                        R: 114,
                        G: 174,
                        B: 104
                    }
                },
                5080: {
                    RGB: {
                        R: 117,
                        G: 174,
                        B: 87
                    }
                },
                5081: {
                    RGB: {
                        R: 117,
                        G: 171,
                        B: 67
                    }
                },
                5082: {
                    RGB: {
                        R: 118,
                        G: 170,
                        B: 58
                    }
                },
                5083: {
                    RGB: {
                        R: 88,
                        G: 170,
                        B: 120
                    }
                },
                5084: {
                    RGB: {
                        R: 86,
                        G: 167,
                        B: 111
                    }
                },
                5085: {
                    RGB: {
                        R: 88,
                        G: 167,
                        B: 105
                    }
                },
                5086: {
                    RGB: {
                        R: 93,
                        G: 166,
                        B: 91
                    }
                },
                5087: {
                    RGB: {
                        R: 93,
                        G: 163,
                        B: 76
                    }
                },
                5088: {
                    RGB: {
                        R: 98,
                        G: 162,
                        B: 62
                    }
                },
                5089: {
                    RGB: {
                        R: 98,
                        G: 162,
                        B: 56
                    }
                },
                5090: {
                    RGB: {
                        R: 58,
                        G: 160,
                        B: 101
                    }
                },
                5091: {
                    RGB: {
                        R: 60,
                        G: 160,
                        B: 95
                    }
                },
                5092: {
                    RGB: {
                        R: 65,
                        G: 159,
                        B: 92
                    }
                },
                5093: {
                    RGB: {
                        R: 70,
                        G: 158,
                        B: 81
                    }
                },
                5094: {
                    RGB: {
                        R: 75,
                        G: 157,
                        B: 71
                    }
                },
                5095: {
                    RGB: {
                        R: 80,
                        G: 157,
                        B: 60
                    }
                },
                5096: {
                    RGB: {
                        R: 85,
                        G: 159,
                        B: 55
                    }
                },
                5097: {
                    RGB: {
                        R: 201,
                        G: 200,
                        B: 190
                    }
                },
                5098: {
                    RGB: {
                        R: 203,
                        G: 199,
                        B: 176
                    }
                },
                5099: {
                    RGB: {
                        R: 203,
                        G: 196,
                        B: 150
                    }
                },
                5100: {
                    RGB: {
                        R: 200,
                        G: 190,
                        B: 114
                    }
                },
                5101: {
                    RGB: {
                        R: 198,
                        G: 187,
                        B: 83
                    }
                },
                5102: {
                    RGB: {
                        R: 200,
                        G: 187,
                        B: 62
                    }
                },
                5103: {
                    RGB: {
                        R: 191,
                        G: 200,
                        B: 200
                    }
                },
                5104: {
                    RGB: {
                        R: 187,
                        G: 196,
                        B: 180
                    }
                },
                5105: {
                    RGB: {
                        R: 188,
                        G: 196,
                        B: 169
                    }
                },
                5106: {
                    RGB: {
                        R: 183,
                        G: 189,
                        B: 138
                    }
                },
                5107: {
                    RGB: {
                        R: 182,
                        G: 187,
                        B: 109
                    }
                },
                5108: {
                    RGB: {
                        R: 181,
                        G: 183,
                        B: 80
                    }
                },
                5109: {
                    RGB: {
                        R: 184,
                        G: 182,
                        B: 59
                    }
                },
                5110: {
                    RGB: {
                        R: 171,
                        G: 189,
                        B: 182
                    }
                },
                5111: {
                    RGB: {
                        R: 170,
                        G: 189,
                        B: 169
                    }
                },
                5112: {
                    RGB: {
                        R: 169,
                        G: 187,
                        B: 154
                    }
                },
                5113: {
                    RGB: {
                        R: 167,
                        G: 184,
                        B: 132
                    }
                },
                5114: {
                    RGB: {
                        R: 167,
                        G: 181,
                        B: 104
                    }
                },
                5115: {
                    RGB: {
                        R: 166,
                        G: 178,
                        B: 73
                    }
                },
                5116: {
                    RGB: {
                        R: 165,
                        G: 175,
                        B: 56
                    }
                },
                5117: {
                    RGB: {
                        R: 148,
                        G: 183,
                        B: 165
                    }
                },
                5118: {
                    RGB: {
                        R: 142,
                        G: 178,
                        B: 148
                    }
                },
                5119: {
                    RGB: {
                        R: 144,
                        G: 178,
                        B: 140
                    }
                },
                5120: {
                    RGB: {
                        R: 142,
                        G: 175,
                        B: 120
                    }
                },
                5121: {
                    RGB: {
                        R: 138,
                        G: 170,
                        B: 95
                    }
                },
                5122: {
                    RGB: {
                        R: 140,
                        G: 170,
                        B: 71
                    }
                },
                5123: {
                    RGB: {
                        R: 139,
                        G: 169,
                        B: 57
                    }
                },
                5124: {
                    RGB: {
                        R: 181,
                        G: 174,
                        B: 141
                    }
                },
                5125: {
                    RGB: {
                        R: 115,
                        G: 170,
                        B: 129
                    }
                },
                5126: {
                    RGB: {
                        R: 113,
                        G: 167,
                        B: 117
                    }
                },
                5127: {
                    RGB: {
                        R: 116,
                        G: 167,
                        B: 106
                    }
                },
                5128: {
                    RGB: {
                        R: 115,
                        G: 164,
                        B: 87
                    }
                },
                5129: {
                    RGB: {
                        R: 117,
                        G: 163,
                        B: 70
                    }
                },
                5130: {
                    RGB: {
                        R: 115,
                        G: 160,
                        B: 57
                    }
                },
                5131: {
                    RGB: {
                        R: 85,
                        G: 161,
                        B: 116
                    }
                },
                5132: {
                    RGB: {
                        R: 87,
                        G: 161,
                        B: 110
                    }
                },
                5133: {
                    RGB: {
                        R: 91,
                        G: 160,
                        B: 105
                    }
                },
                5134: {
                    RGB: {
                        R: 90,
                        G: 157,
                        B: 91
                    }
                },
                5135: {
                    RGB: {
                        R: 94,
                        G: 156,
                        B: 77
                    }
                },
                5136: {
                    RGB: {
                        R: 96,
                        G: 156,
                        B: 63
                    }
                },
                5137: {
                    RGB: {
                        R: 98,
                        G: 156,
                        B: 54
                    }
                },
                5138: {
                    RGB: {
                        R: 65,
                        G: 155,
                        B: 103
                    }
                },
                5139: {
                    RGB: {
                        R: 64,
                        G: 152,
                        B: 94
                    }
                },
                5140: {
                    RGB: {
                        R: 67,
                        G: 152,
                        B: 90
                    }
                },
                5141: {
                    RGB: {
                        R: 72,
                        G: 151,
                        B: 80
                    }
                },
                5142: {
                    RGB: {
                        R: 75,
                        G: 151,
                        B: 71
                    }
                },
                5143: {
                    RGB: {
                        R: 80,
                        G: 150,
                        B: 60
                    }
                },
                5144: {
                    RGB: {
                        R: 86,
                        G: 152,
                        B: 55
                    }
                },
                5145: {
                    RGB: {
                        R: 167,
                        G: 166,
                        B: 157
                    }
                },
                5146: {
                    RGB: {
                        R: 165,
                        G: 161,
                        B: 143
                    }
                },
                5147: {
                    RGB: {
                        R: 163,
                        G: 158,
                        B: 119
                    }
                },
                5148: {
                    RGB: {
                        R: 162,
                        G: 156,
                        B: 93
                    }
                },
                5149: {
                    RGB: {
                        R: 162,
                        G: 152,
                        B: 68
                    }
                },
                5150: {
                    RGB: {
                        R: 160,
                        G: 149,
                        B: 49
                    }
                },
                5151: {
                    RGB: {
                        R: 157,
                        G: 164,
                        B: 162
                    }
                },
                5152: {
                    RGB: {
                        R: 155,
                        G: 161,
                        B: 147
                    }
                },
                5153: {
                    RGB: {
                        R: 152,
                        G: 158,
                        B: 134
                    }
                },
                5154: {
                    RGB: {
                        R: 152,
                        G: 157,
                        B: 114
                    }
                },
                5155: {
                    RGB: {
                        R: 148,
                        G: 151,
                        B: 86
                    }
                },
                5156: {
                    RGB: {
                        R: 147,
                        G: 148,
                        B: 63
                    }
                },
                5157: {
                    RGB: {
                        R: 148,
                        G: 148,
                        B: 49
                    }
                },
                5158: {
                    RGB: {
                        R: 144,
                        G: 156,
                        B: 152
                    }
                },
                5159: {
                    RGB: {
                        R: 139,
                        G: 153,
                        B: 135
                    }
                },
                5160: {
                    RGB: {
                        R: 139,
                        G: 153,
                        B: 127
                    }
                },
                5161: {
                    RGB: {
                        R: 139,
                        G: 151,
                        B: 106
                    }
                },
                5162: {
                    RGB: {
                        R: 134,
                        G: 146,
                        B: 81
                    }
                },
                5163: {
                    RGB: {
                        R: 140,
                        G: 149,
                        B: 62
                    }
                },
                5164: {
                    RGB: {
                        R: 138,
                        G: 145,
                        B: 50
                    }
                },
                5165: {
                    RGB: {
                        R: 122,
                        G: 152,
                        B: 149
                    }
                },
                5166: {
                    RGB: {
                        R: 119,
                        G: 147,
                        B: 120
                    }
                },
                5167: {
                    RGB: {
                        R: 119,
                        G: 147,
                        B: 114
                    }
                },
                5168: {
                    RGB: {
                        R: 117,
                        G: 143,
                        B: 95
                    }
                },
                5169: {
                    RGB: {
                        R: 113,
                        G: 138,
                        B: 74
                    }
                },
                5170: {
                    RGB: {
                        R: 115,
                        G: 141,
                        B: 60
                    }
                },
                5171: {
                    RGB: {
                        R: 116,
                        G: 139,
                        B: 50
                    }
                },
                5172: {
                    RGB: {
                        R: 87,
                        G: 142,
                        B: 142
                    }
                },
                5173: {
                    RGB: {
                        R: 94,
                        G: 139,
                        B: 106
                    }
                },
                5174: {
                    RGB: {
                        R: 96,
                        G: 138,
                        B: 100
                    }
                },
                5175: {
                    RGB: {
                        R: 96,
                        G: 139,
                        B: 88
                    }
                },
                5176: {
                    RGB: {
                        R: 95,
                        G: 133,
                        B: 69
                    }
                },
                5177: {
                    RGB: {
                        R: 96,
                        G: 132,
                        B: 55
                    }
                },
                5178: {
                    RGB: {
                        R: 98,
                        G: 135,
                        B: 50
                    }
                },
                5179: {
                    RGB: {
                        R: 71,
                        G: 132,
                        B: 95
                    }
                },
                5180: {
                    RGB: {
                        R: 73,
                        G: 132,
                        B: 91
                    }
                },
                5181: {
                    RGB: {
                        R: 74,
                        G: 132,
                        B: 88
                    }
                },
                5182: {
                    RGB: {
                        R: 76,
                        G: 131,
                        B: 77
                    }
                },
                5183: {
                    RGB: {
                        R: 76,
                        G: 128,
                        B: 64
                    }
                },
                5184: {
                    RGB: {
                        R: 83,
                        G: 130,
                        B: 54
                    }
                },
                5185: {
                    RGB: {
                        R: 80,
                        G: 128,
                        B: 47
                    }
                },
                5186: {
                    RGB: {
                        R: 55,
                        G: 126,
                        B: 82
                    }
                },
                5187: {
                    RGB: {
                        R: 56,
                        G: 126,
                        B: 80
                    }
                },
                5188: {
                    RGB: {
                        R: 57,
                        G: 126,
                        B: 75
                    }
                },
                5189: {
                    RGB: {
                        R: 61,
                        G: 126,
                        B: 68
                    }
                },
                5190: {
                    RGB: {
                        R: 65,
                        G: 125,
                        B: 60
                    }
                },
                5191: {
                    RGB: {
                        R: 68,
                        G: 124,
                        B: 51
                    }
                },
                5192: {
                    RGB: {
                        R: 71,
                        G: 124,
                        B: 47
                    }
                },
                5193: {
                    RGB: {
                        R: 129,
                        G: 127,
                        B: 120
                    }
                },
                5194: {
                    RGB: {
                        R: 128,
                        G: 126,
                        B: 113
                    }
                },
                5195: {
                    RGB: {
                        R: 124,
                        G: 120,
                        B: 93
                    }
                },
                5196: {
                    RGB: {
                        R: 123,
                        G: 118,
                        B: 76
                    }
                },
                5197: {
                    RGB: {
                        R: 122,
                        G: 115,
                        B: 57
                    }
                },
                5198: {
                    RGB: {
                        R: 120,
                        G: 112,
                        B: 43
                    }
                },
                5199: {
                    RGB: {
                        R: 120,
                        G: 124,
                        B: 122
                    }
                },
                5200: {
                    RGB: {
                        R: 117,
                        G: 121,
                        B: 111
                    }
                },
                5201: {
                    RGB: {
                        R: 119,
                        G: 122,
                        B: 105
                    }
                },
                5202: {
                    RGB: {
                        R: 115,
                        G: 117,
                        B: 87
                    }
                },
                5203: {
                    RGB: {
                        R: 111,
                        G: 112,
                        B: 68
                    }
                },
                5204: {
                    RGB: {
                        R: 113,
                        G: 112,
                        B: 55
                    }
                },
                5205: {
                    RGB: {
                        R: 114,
                        G: 112,
                        B: 41
                    }
                },
                5206: {
                    RGB: {
                        R: 115,
                        G: 123,
                        B: 118
                    }
                },
                5207: {
                    RGB: {
                        R: 110,
                        G: 119,
                        B: 106
                    }
                },
                5208: {
                    RGB: {
                        R: 110,
                        G: 119,
                        B: 100
                    }
                },
                5209: {
                    RGB: {
                        R: 106,
                        G: 114,
                        B: 82
                    }
                },
                5210: {
                    RGB: {
                        R: 105,
                        G: 112,
                        B: 67
                    }
                },
                5211: {
                    RGB: {
                        R: 105,
                        G: 112,
                        B: 53
                    }
                },
                5212: {
                    RGB: {
                        R: 105,
                        G: 109,
                        B: 39
                    }
                },
                5213: {
                    RGB: {
                        R: 95,
                        G: 115,
                        B: 102
                    }
                },
                5214: {
                    RGB: {
                        R: 93,
                        G: 112,
                        B: 94
                    }
                },
                5215: {
                    RGB: {
                        R: 92,
                        G: 113,
                        B: 88
                    }
                },
                5216: {
                    RGB: {
                        R: 92,
                        G: 110,
                        B: 76
                    }
                },
                5217: {
                    RGB: {
                        R: 90,
                        G: 108,
                        B: 61
                    }
                },
                5218: {
                    RGB: {
                        R: 90,
                        G: 108,
                        B: 50
                    }
                },
                5219: {
                    RGB: {
                        R: 92,
                        G: 107,
                        B: 44
                    }
                },
                5220: {
                    RGB: {
                        R: 79,
                        G: 111,
                        B: 90
                    }
                },
                5221: {
                    RGB: {
                        R: 80,
                        G: 111,
                        B: 85
                    }
                },
                5222: {
                    RGB: {
                        R: 78,
                        G: 108,
                        B: 79
                    }
                },
                5223: {
                    RGB: {
                        R: 80,
                        G: 108,
                        B: 69
                    }
                },
                5224: {
                    RGB: {
                        R: 80,
                        G: 108,
                        B: 59
                    }
                },
                5225: {
                    RGB: {
                        R: 79,
                        G: 105,
                        B: 48
                    }
                },
                5226: {
                    RGB: {
                        R: 80,
                        G: 105,
                        B: 42
                    }
                },
                5227: {
                    RGB: {
                        R: 63,
                        G: 103,
                        B: 77
                    }
                },
                5228: {
                    RGB: {
                        R: 62,
                        G: 104,
                        B: 72
                    }
                },
                5229: {
                    RGB: {
                        R: 64,
                        G: 104,
                        B: 70
                    }
                },
                5230: {
                    RGB: {
                        R: 64,
                        G: 104,
                        B: 62
                    }
                },
                5231: {
                    RGB: {
                        R: 67,
                        G: 103,
                        B: 53
                    }
                },
                5232: {
                    RGB: {
                        R: 69,
                        G: 103,
                        B: 47
                    }
                },
                5233: {
                    RGB: {
                        R: 68,
                        G: 100,
                        B: 39
                    }
                },
                5234: {
                    RGB: {
                        R: 51,
                        G: 101,
                        B: 68
                    }
                },
                5235: {
                    RGB: {
                        R: 49,
                        G: 101,
                        B: 66
                    }
                },
                5236: {
                    RGB: {
                        R: 51,
                        G: 101,
                        B: 63
                    }
                },
                5237: {
                    RGB: {
                        R: 53,
                        G: 101,
                        B: 58
                    }
                },
                5238: {
                    RGB: {
                        R: 59,
                        G: 102,
                        B: 53
                    }
                },
                5239: {
                    RGB: {
                        R: 62,
                        G: 102,
                        B: 47
                    }
                },
                5240: {
                    RGB: {
                        R: 64,
                        G: 101,
                        B: 41
                    }
                },
                5241: {
                    RGB: {
                        R: 231,
                        G: 243,
                        B: 252
                    }
                },
                5242: {
                    RGB: {
                        R: 211,
                        G: 234,
                        B: 249
                    }
                },
                5243: {
                    RGB: {
                        R: 169,
                        G: 216,
                        B: 245
                    }
                },
                5244: {
                    RGB: {
                        R: 129,
                        G: 200,
                        B: 241
                    }
                },
                5245: {
                    RGB: {
                        R: 85,
                        G: 186,
                        B: 237
                    }
                },
                5246: {
                    RGB: {
                        R: 0,
                        G: 175,
                        B: 234
                    }
                },
                5247: {
                    RGB: {
                        R: 234,
                        G: 243,
                        B: 236
                    }
                },
                5248: {
                    RGB: {
                        R: 204,
                        G: 226,
                        B: 232
                    }
                },
                5249: {
                    RGB: {
                        R: 191,
                        G: 220,
                        B: 239
                    }
                },
                5250: {
                    RGB: {
                        R: 159,
                        G: 204,
                        B: 223
                    }
                },
                5251: {
                    RGB: {
                        R: 124,
                        G: 188,
                        B: 217
                    }
                },
                5252: {
                    RGB: {
                        R: 87,
                        G: 173,
                        B: 211
                    }
                },
                5253: {
                    RGB: {
                        R: 43,
                        G: 163,
                        B: 209
                    }
                },
                5254: {
                    RGB: {
                        R: 208,
                        G: 229,
                        B: 222
                    }
                },
                5255: {
                    RGB: {
                        R: 189,
                        G: 221,
                        B: 218
                    }
                },
                5256: {
                    RGB: {
                        R: 175,
                        G: 214,
                        B: 215
                    }
                },
                5257: {
                    RGB: {
                        R: 147,
                        G: 200,
                        B: 210
                    }
                },
                5258: {
                    RGB: {
                        R: 117,
                        G: 187,
                        B: 207
                    }
                },
                5259: {
                    RGB: {
                        R: 79,
                        G: 171,
                        B: 199
                    }
                },
                5260: {
                    RGB: {
                        R: 36,
                        G: 161,
                        B: 197
                    }
                },
                5261: {
                    RGB: {
                        R: 171,
                        G: 215,
                        B: 192
                    }
                },
                5262: {
                    RGB: {
                        R: 159,
                        G: 209,
                        B: 190
                    }
                },
                5263: {
                    RGB: {
                        R: 146,
                        G: 202,
                        B: 186
                    }
                },
                5264: {
                    RGB: {
                        R: 123,
                        G: 190,
                        B: 184
                    }
                },
                5265: {
                    RGB: {
                        R: 94,
                        G: 177,
                        B: 178
                    }
                },
                5266: {
                    RGB: {
                        R: 62,
                        G: 165,
                        B: 175
                    }
                },
                5267: {
                    RGB: {
                        R: 13,
                        G: 157,
                        B: 175
                    }
                },
                5268: {
                    RGB: {
                        R: 136,
                        G: 202,
                        B: 163
                    }
                },
                5269: {
                    RGB: {
                        R: 112,
                        G: 197,
                        B: 190
                    }
                },
                5270: {
                    RGB: {
                        R: 113,
                        G: 190,
                        B: 160
                    }
                },
                5271: {
                    RGB: {
                        R: 95,
                        G: 181,
                        B: 157
                    }
                },
                5272: {
                    RGB: {
                        R: 72,
                        G: 172,
                        B: 158
                    }
                },
                5273: {
                    RGB: {
                        R: 41,
                        G: 160,
                        B: 155
                    }
                },
                5274: {
                    RGB: {
                        R: 0,
                        G: 153,
                        B: 155
                    }
                },
                5275: {
                    RGB: {
                        R: 101,
                        G: 191,
                        B: 138
                    }
                },
                5276: {
                    RGB: {
                        R: 90,
                        G: 186,
                        B: 136
                    }
                },
                5277: {
                    RGB: {
                        R: 83,
                        G: 181,
                        B: 136
                    }
                },
                5278: {
                    RGB: {
                        R: 66,
                        G: 170,
                        B: 133
                    }
                },
                5279: {
                    RGB: {
                        R: 47,
                        G: 163,
                        B: 135
                    }
                },
                5280: {
                    RGB: {
                        R: 27,
                        G: 153,
                        B: 124
                    }
                },
                5281: {
                    RGB: {
                        R: 0,
                        G: 148,
                        B: 136
                    }
                },
                5282: {
                    RGB: {
                        R: 62,
                        G: 201,
                        B: 120
                    }
                },
                5283: {
                    RGB: {
                        R: 77,
                        G: 189,
                        B: 128
                    }
                },
                5284: {
                    RGB: {
                        R: 67,
                        G: 180,
                        B: 125
                    }
                },
                5285: {
                    RGB: {
                        R: 43,
                        G: 164,
                        B: 118
                    }
                },
                5286: {
                    RGB: {
                        R: 28,
                        G: 159,
                        B: 121
                    }
                },
                5287: {
                    RGB: {
                        R: 0,
                        G: 151,
                        B: 123
                    }
                },
                5288: {
                    RGB: {
                        R: 0,
                        G: 143,
                        B: 116
                    }
                },
                5289: {
                    RGB: {
                        R: 203,
                        G: 210,
                        B: 224
                    }
                },
                5290: {
                    RGB: {
                        R: 189,
                        G: 204,
                        B: 220
                    }
                },
                5291: {
                    RGB: {
                        R: 161,
                        G: 191,
                        B: 216
                    }
                },
                5292: {
                    RGB: {
                        R: 127,
                        G: 176,
                        B: 212
                    }
                },
                5293: {
                    RGB: {
                        R: 92,
                        G: 162,
                        B: 204
                    }
                },
                5294: {
                    RGB: {
                        R: 47,
                        G: 150,
                        B: 201
                    }
                },
                5295: {
                    RGB: {
                        R: 202,
                        G: 211,
                        B: 211
                    }
                },
                5296: {
                    RGB: {
                        R: 187,
                        G: 205,
                        B: 210
                    }
                },
                5297: {
                    RGB: {
                        R: 174,
                        G: 198,
                        B: 207
                    }
                },
                5298: {
                    RGB: {
                        R: 147,
                        G: 185,
                        B: 200
                    }
                },
                5299: {
                    RGB: {
                        R: 117,
                        G: 173,
                        B: 197
                    }
                },
                5300: {
                    RGB: {
                        R: 84,
                        G: 161,
                        B: 193
                    }
                },
                5301: {
                    RGB: {
                        R: 44,
                        G: 151,
                        B: 191
                    }
                },
                5302: {
                    RGB: {
                        R: 186,
                        G: 206,
                        B: 199
                    }
                },
                5303: {
                    RGB: {
                        R: 176,
                        G: 202,
                        B: 199
                    }
                },
                5304: {
                    RGB: {
                        R: 164,
                        G: 195,
                        B: 196
                    }
                },
                5305: {
                    RGB: {
                        R: 136,
                        G: 181,
                        B: 189
                    }
                },
                5306: {
                    RGB: {
                        R: 107,
                        G: 170,
                        B: 185
                    }
                },
                5307: {
                    RGB: {
                        R: 75,
                        G: 158,
                        B: 182
                    }
                },
                5308: {
                    RGB: {
                        R: 33,
                        G: 146,
                        B: 177
                    }
                },
                5309: {
                    RGB: {
                        R: 154,
                        G: 192,
                        B: 172
                    }
                },
                5310: {
                    RGB: {
                        R: 144,
                        G: 191,
                        B: 181
                    }
                },
                5311: {
                    RGB: {
                        R: 133,
                        G: 184,
                        B: 169
                    }
                },
                5312: {
                    RGB: {
                        R: 115,
                        G: 175,
                        B: 167
                    }
                },
                5313: {
                    RGB: {
                        R: 87,
                        G: 162,
                        B: 159
                    }
                },
                5314: {
                    RGB: {
                        R: 62,
                        G: 153,
                        B: 158
                    }
                },
                5315: {
                    RGB: {
                        R: 17,
                        G: 142,
                        B: 154
                    }
                },
                5316: {
                    RGB: {
                        R: 116,
                        G: 179,
                        B: 145
                    }
                },
                5317: {
                    RGB: {
                        R: 95,
                        G: 177,
                        B: 173
                    }
                },
                5318: {
                    RGB: {
                        R: 103,
                        G: 172,
                        B: 142
                    }
                },
                5319: {
                    RGB: {
                        R: 81,
                        G: 164,
                        B: 148
                    }
                },
                5320: {
                    RGB: {
                        R: 68,
                        G: 157,
                        B: 140
                    }
                },
                5321: {
                    RGB: {
                        R: 45,
                        G: 148,
                        B: 137
                    }
                },
                5322: {
                    RGB: {
                        R: 0,
                        G: 138,
                        B: 134
                    }
                },
                5323: {
                    RGB: {
                        R: 88,
                        G: 170,
                        B: 120
                    }
                },
                5324: {
                    RGB: {
                        R: 77,
                        G: 164,
                        B: 117
                    }
                },
                5325: {
                    RGB: {
                        R: 72,
                        G: 163,
                        B: 119
                    }
                },
                5326: {
                    RGB: {
                        R: 61,
                        G: 155,
                        B: 119
                    }
                },
                5327: {
                    RGB: {
                        R: 44,
                        G: 148,
                        B: 120
                    }
                },
                5328: {
                    RGB: {
                        R: 21,
                        G: 141,
                        B: 119
                    }
                },
                5329: {
                    RGB: {
                        R: 0,
                        G: 134,
                        B: 117
                    }
                },
                5330: {
                    RGB: {
                        R: 60,
                        G: 162,
                        B: 103
                    }
                },
                5331: {
                    RGB: {
                        R: 58,
                        G: 160,
                        B: 104
                    }
                },
                5332: {
                    RGB: {
                        R: 54,
                        G: 157,
                        B: 106
                    }
                },
                5333: {
                    RGB: {
                        R: 39,
                        G: 149,
                        B: 105
                    }
                },
                5334: {
                    RGB: {
                        R: 22,
                        G: 144,
                        B: 106
                    }
                },
                5335: {
                    RGB: {
                        R: 0,
                        G: 139,
                        B: 109
                    }
                },
                5336: {
                    RGB: {
                        R: 0,
                        G: 132,
                        B: 109
                    }
                },
                5337: {
                    RGB: {
                        R: 188,
                        G: 196,
                        B: 207
                    }
                },
                5338: {
                    RGB: {
                        R: 175,
                        G: 190,
                        B: 206
                    }
                },
                5339: {
                    RGB: {
                        R: 152,
                        G: 179,
                        B: 203
                    }
                },
                5340: {
                    RGB: {
                        R: 117,
                        G: 164,
                        B: 196
                    }
                },
                5341: {
                    RGB: {
                        R: 85,
                        G: 150,
                        B: 191
                    }
                },
                5342: {
                    RGB: {
                        R: 45,
                        G: 138,
                        B: 185
                    }
                },
                5343: {
                    RGB: {
                        R: 191,
                        G: 200,
                        B: 200
                    }
                },
                5344: {
                    RGB: {
                        R: 174,
                        G: 191,
                        B: 196
                    }
                },
                5345: {
                    RGB: {
                        R: 161,
                        G: 184,
                        B: 192
                    }
                },
                5346: {
                    RGB: {
                        R: 135,
                        G: 171,
                        B: 186
                    }
                },
                5347: {
                    RGB: {
                        R: 106,
                        G: 159,
                        B: 182
                    }
                },
                5348: {
                    RGB: {
                        R: 74,
                        G: 147,
                        B: 177
                    }
                },
                5349: {
                    RGB: {
                        R: 36,
                        G: 137,
                        B: 174
                    }
                },
                5350: {
                    RGB: {
                        R: 171,
                        G: 189,
                        B: 182
                    }
                },
                5351: {
                    RGB: {
                        R: 161,
                        G: 185,
                        B: 182
                    }
                },
                5352: {
                    RGB: {
                        R: 152,
                        G: 181,
                        B: 182
                    }
                },
                5353: {
                    RGB: {
                        R: 125,
                        G: 168,
                        B: 176
                    }
                },
                5354: {
                    RGB: {
                        R: 96,
                        G: 156,
                        B: 171
                    }
                },
                5355: {
                    RGB: {
                        R: 67,
                        G: 146,
                        B: 170
                    }
                },
                5356: {
                    RGB: {
                        R: 26,
                        G: 135,
                        B: 164
                    }
                },
                5357: {
                    RGB: {
                        R: 148,
                        G: 183,
                        B: 165
                    }
                },
                5358: {
                    RGB: {
                        R: 137,
                        G: 176,
                        B: 161
                    }
                },
                5359: {
                    RGB: {
                        R: 128,
                        G: 171,
                        B: 159
                    }
                },
                5360: {
                    RGB: {
                        R: 107,
                        G: 160,
                        B: 155
                    }
                },
                5361: {
                    RGB: {
                        R: 82,
                        G: 150,
                        B: 150
                    }
                },
                5362: {
                    RGB: {
                        R: 56,
                        G: 140,
                        B: 148
                    }
                },
                5363: {
                    RGB: {
                        R: 0,
                        G: 131,
                        B: 145
                    }
                },
                5364: {
                    RGB: {
                        R: 117,
                        G: 172,
                        B: 140
                    }
                },
                5365: {
                    RGB: {
                        R: 105,
                        G: 165,
                        B: 134
                    }
                },
                5366: {
                    RGB: {
                        R: 98,
                        G: 160,
                        B: 134
                    }
                },
                5367: {
                    RGB: {
                        R: 86,
                        G: 153,
                        B: 134
                    }
                },
                5368: {
                    RGB: {
                        R: 65,
                        G: 144,
                        B: 133
                    }
                },
                5369: {
                    RGB: {
                        R: 38,
                        G: 133,
                        B: 129
                    }
                },
                5370: {
                    RGB: {
                        R: 0,
                        G: 127,
                        B: 129
                    }
                },
                5371: {
                    RGB: {
                        R: 86,
                        G: 160,
                        B: 116
                    }
                },
                5372: {
                    RGB: {
                        R: 53,
                        G: 158,
                        B: 160
                    }
                },
                5373: {
                    RGB: {
                        R: 71,
                        G: 151,
                        B: 112
                    }
                },
                5374: {
                    RGB: {
                        R: 58,
                        G: 143,
                        B: 111
                    }
                },
                5375: {
                    RGB: {
                        R: 43,
                        G: 136,
                        B: 113
                    }
                },
                5376: {
                    RGB: {
                        R: 21,
                        G: 129,
                        B: 112
                    }
                },
                5377: {
                    RGB: {
                        R: 0,
                        G: 123,
                        B: 112
                    }
                },
                5378: {
                    RGB: {
                        R: 65,
                        G: 155,
                        B: 103
                    }
                },
                5379: {
                    RGB: {
                        R: 58,
                        G: 150,
                        B: 101
                    }
                },
                5380: {
                    RGB: {
                        R: 53,
                        G: 148,
                        B: 102
                    }
                },
                5381: {
                    RGB: {
                        R: 40,
                        G: 140,
                        B: 102
                    }
                },
                5382: {
                    RGB: {
                        R: 26,
                        G: 135,
                        B: 103
                    }
                },
                5383: {
                    RGB: {
                        R: 0,
                        G: 128,
                        B: 103
                    }
                },
                5384: {
                    RGB: {
                        R: 0,
                        G: 123,
                        B: 106
                    }
                },
                5385: {
                    RGB: {
                        R: 158,
                        G: 163,
                        B: 171
                    }
                },
                5386: {
                    RGB: {
                        R: 146,
                        G: 156,
                        B: 168
                    }
                },
                5387: {
                    RGB: {
                        R: 125,
                        G: 146,
                        B: 163
                    }
                },
                5388: {
                    RGB: {
                        R: 101,
                        G: 137,
                        B: 161
                    }
                },
                5389: {
                    RGB: {
                        R: 73,
                        G: 125,
                        B: 155
                    }
                },
                5390: {
                    RGB: {
                        R: 37,
                        G: 114,
                        B: 149
                    }
                },
                5391: {
                    RGB: {
                        R: 157,
                        G: 164,
                        B: 162
                    }
                },
                5392: {
                    RGB: {
                        R: 144,
                        G: 158,
                        B: 160
                    }
                },
                5393: {
                    RGB: {
                        R: 136,
                        G: 153,
                        B: 158
                    }
                },
                5394: {
                    RGB: {
                        R: 114,
                        G: 143,
                        B: 154
                    }
                },
                5395: {
                    RGB: {
                        R: 89,
                        G: 131,
                        B: 148
                    }
                },
                5396: {
                    RGB: {
                        R: 63,
                        G: 122,
                        B: 145
                    }
                },
                5397: {
                    RGB: {
                        R: 37,
                        G: 115,
                        B: 144
                    }
                },
                5398: {
                    RGB: {
                        R: 145,
                        G: 158,
                        B: 153
                    }
                },
                5399: {
                    RGB: {
                        R: 139,
                        G: 156,
                        B: 154
                    }
                },
                5400: {
                    RGB: {
                        R: 128,
                        G: 150,
                        B: 149
                    }
                },
                5401: {
                    RGB: {
                        R: 110,
                        G: 142,
                        B: 147
                    }
                },
                5402: {
                    RGB: {
                        R: 88,
                        G: 132,
                        B: 142
                    }
                },
                5403: {
                    RGB: {
                        R: 63,
                        G: 122,
                        B: 139
                    }
                },
                5404: {
                    RGB: {
                        R: 26,
                        G: 113,
                        B: 135
                    }
                },
                5405: {
                    RGB: {
                        R: 122,
                        G: 152,
                        B: 149
                    }
                },
                5406: {
                    RGB: {
                        R: 117,
                        G: 147,
                        B: 135
                    }
                },
                5407: {
                    RGB: {
                        R: 110,
                        G: 143,
                        B: 133
                    }
                },
                5408: {
                    RGB: {
                        R: 95,
                        G: 134,
                        B: 129
                    }
                },
                5409: {
                    RGB: {
                        R: 77,
                        G: 126,
                        B: 125
                    }
                },
                5410: {
                    RGB: {
                        R: 52,
                        G: 116,
                        B: 121
                    }
                },
                5411: {
                    RGB: {
                        R: 19,
                        G: 111,
                        B: 122
                    }
                },
                5412: {
                    RGB: {
                        R: 96,
                        G: 141,
                        B: 114
                    }
                },
                5413: {
                    RGB: {
                        R: 89,
                        G: 136,
                        B: 112
                    }
                },
                5414: {
                    RGB: {
                        R: 87,
                        G: 134,
                        B: 111
                    }
                },
                5415: {
                    RGB: {
                        R: 77,
                        G: 127,
                        B: 110
                    }
                },
                5416: {
                    RGB: {
                        R: 64,
                        G: 122,
                        B: 110
                    }
                },
                5417: {
                    RGB: {
                        R: 41,
                        G: 113,
                        B: 107
                    }
                },
                5418: {
                    RGB: {
                        R: 2,
                        G: 107,
                        B: 107
                    }
                },
                5419: {
                    RGB: {
                        R: 71,
                        G: 132,
                        B: 95
                    }
                },
                5420: {
                    RGB: {
                        R: 65,
                        G: 127,
                        B: 93
                    }
                },
                5421: {
                    RGB: {
                        R: 64,
                        G: 127,
                        B: 96
                    }
                },
                5422: {
                    RGB: {
                        R: 55,
                        G: 120,
                        B: 95
                    }
                },
                5423: {
                    RGB: {
                        R: 42,
                        G: 116,
                        B: 96
                    }
                },
                5424: {
                    RGB: {
                        R: 29,
                        G: 109,
                        B: 94
                    }
                },
                5425: {
                    RGB: {
                        R: 0,
                        G: 105,
                        B: 96
                    }
                },
                5426: {
                    RGB: {
                        R: 55,
                        G: 126,
                        B: 82
                    }
                },
                5427: {
                    RGB: {
                        R: 51,
                        G: 124,
                        B: 85
                    }
                },
                5428: {
                    RGB: {
                        R: 50,
                        G: 124,
                        B: 87
                    }
                },
                5429: {
                    RGB: {
                        R: 40,
                        G: 119,
                        B: 89
                    }
                },
                5430: {
                    RGB: {
                        R: 29,
                        G: 112,
                        B: 86
                    }
                },
                5431: {
                    RGB: {
                        R: 6,
                        G: 108,
                        B: 87
                    }
                },
                5432: {
                    RGB: {
                        R: 0,
                        G: 103,
                        B: 88
                    }
                },
                5433: {
                    RGB: {
                        R: 123,
                        G: 127,
                        B: 131
                    }
                },
                5434: {
                    RGB: {
                        R: 118,
                        G: 125,
                        B: 132
                    }
                },
                5435: {
                    RGB: {
                        R: 99,
                        G: 115,
                        B: 126
                    }
                },
                5436: {
                    RGB: {
                        R: 81,
                        G: 109,
                        B: 123
                    }
                },
                5437: {
                    RGB: {
                        R: 62,
                        G: 102,
                        B: 121
                    }
                },
                5438: {
                    RGB: {
                        R: 38,
                        G: 95,
                        B: 119
                    }
                },
                5439: {
                    RGB: {
                        R: 127,
                        G: 129,
                        B: 127
                    }
                },
                5440: {
                    RGB: {
                        R: 117,
                        G: 126,
                        B: 125
                    }
                },
                5441: {
                    RGB: {
                        R: 111,
                        G: 121,
                        B: 124
                    }
                },
                5442: {
                    RGB: {
                        R: 95,
                        G: 114,
                        B: 120
                    }
                },
                5443: {
                    RGB: {
                        R: 78,
                        G: 107,
                        B: 116
                    }
                },
                5444: {
                    RGB: {
                        R: 58,
                        G: 100,
                        B: 114
                    }
                },
                5445: {
                    RGB: {
                        R: 36,
                        G: 93,
                        B: 112
                    }
                },
                5446: {
                    RGB: {
                        R: 115,
                        G: 123,
                        B: 118
                    }
                },
                5447: {
                    RGB: {
                        R: 110,
                        G: 122,
                        B: 118
                    }
                },
                5448: {
                    RGB: {
                        R: 104,
                        G: 117,
                        B: 116
                    }
                },
                5449: {
                    RGB: {
                        R: 91,
                        G: 112,
                        B: 115
                    }
                },
                5450: {
                    RGB: {
                        R: 74,
                        G: 105,
                        B: 111
                    }
                },
                5451: {
                    RGB: {
                        R: 56,
                        G: 98,
                        B: 107
                    }
                },
                5452: {
                    RGB: {
                        R: 35,
                        G: 93,
                        B: 108
                    }
                },
                5453: {
                    RGB: {
                        R: 95,
                        G: 115,
                        B: 102
                    }
                },
                5454: {
                    RGB: {
                        R: 94,
                        G: 115,
                        B: 105
                    }
                },
                5455: {
                    RGB: {
                        R: 91,
                        G: 113,
                        B: 104
                    }
                },
                5456: {
                    RGB: {
                        R: 78,
                        G: 104,
                        B: 99
                    }
                },
                5457: {
                    RGB: {
                        R: 67,
                        G: 101,
                        B: 100
                    }
                },
                5458: {
                    RGB: {
                        R: 49,
                        G: 94,
                        B: 97
                    }
                },
                5459: {
                    RGB: {
                        R: 30,
                        G: 89,
                        B: 96
                    }
                },
                5460: {
                    RGB: {
                        R: 79,
                        G: 111,
                        B: 90
                    }
                },
                5461: {
                    RGB: {
                        R: 75,
                        G: 106,
                        B: 88
                    }
                },
                5462: {
                    RGB: {
                        R: 72,
                        G: 103,
                        B: 88
                    }
                },
                5463: {
                    RGB: {
                        R: 64,
                        G: 100,
                        B: 88
                    }
                },
                5464: {
                    RGB: {
                        R: 56,
                        G: 96,
                        B: 88
                    }
                },
                5465: {
                    RGB: {
                        R: 43,
                        G: 87,
                        B: 83
                    }
                },
                5466: {
                    RGB: {
                        R: 24,
                        G: 85,
                        B: 82
                    }
                },
                5467: {
                    RGB: {
                        R: 63,
                        G: 103,
                        B: 77
                    }
                },
                5468: {
                    RGB: {
                        R: 57,
                        G: 99,
                        B: 75
                    }
                },
                5469: {
                    RGB: {
                        R: 54,
                        G: 97,
                        B: 74
                    }
                },
                5470: {
                    RGB: {
                        R: 48,
                        G: 92,
                        B: 75
                    }
                },
                5471: {
                    RGB: {
                        R: 42,
                        G: 88,
                        B: 74
                    }
                },
                5472: {
                    RGB: {
                        R: 34,
                        G: 86,
                        B: 76
                    }
                },
                5473: {
                    RGB: {
                        R: 24,
                        G: 83,
                        B: 74
                    }
                },
                5474: {
                    RGB: {
                        R: 51,
                        G: 101,
                        B: 68
                    }
                },
                5475: {
                    RGB: {
                        R: 47,
                        G: 96,
                        B: 68
                    }
                },
                5476: {
                    RGB: {
                        R: 44,
                        G: 93,
                        B: 67
                    }
                },
                5477: {
                    RGB: {
                        R: 39,
                        G: 92,
                        B: 69
                    }
                },
                5478: {
                    RGB: {
                        R: 35,
                        G: 89,
                        B: 71
                    }
                },
                5479: {
                    RGB: {
                        R: 23,
                        G: 83,
                        B: 69
                    }
                },
                5480: {
                    RGB: {
                        R: 15,
                        G: 81,
                        B: 69
                    }
                },
                5481: {
                    RGB: {
                        R: 232,
                        G: 228,
                        B: 70
                    }
                },
                5482: {
                    RGB: {
                        R: 213,
                        G: 220,
                        B: 76
                    }
                },
                5483: {
                    RGB: {
                        R: 173,
                        G: 203,
                        B: 82
                    }
                },
                5484: {
                    RGB: {
                        R: 136,
                        G: 188,
                        B: 87
                    }
                },
                5485: {
                    RGB: {
                        R: 95,
                        G: 174,
                        B: 90
                    }
                },
                5486: {
                    RGB: {
                        R: 39,
                        G: 163,
                        B: 91
                    }
                },
                5487: {
                    RGB: {
                        R: 216,
                        G: 213,
                        B: 63
                    }
                },
                5488: {
                    RGB: {
                        R: 201,
                        G: 208,
                        B: 67
                    }
                },
                5489: {
                    RGB: {
                        R: 186,
                        G: 202,
                        B: 73
                    }
                },
                5490: {
                    RGB: {
                        R: 160,
                        G: 189,
                        B: 79
                    }
                },
                5491: {
                    RGB: {
                        R: 127,
                        G: 174,
                        B: 82
                    }
                },
                5492: {
                    RGB: {
                        R: 101,
                        G: 164,
                        B: 85
                    }
                },
                5493: {
                    RGB: {
                        R: 56,
                        G: 151,
                        B: 94
                    }
                },
                5494: {
                    RGB: {
                        R: 203,
                        G: 211,
                        B: 64
                    }
                },
                5495: {
                    RGB: {
                        R: 184,
                        G: 202,
                        B: 68
                    }
                },
                5496: {
                    RGB: {
                        R: 172,
                        G: 196,
                        B: 70
                    }
                },
                5497: {
                    RGB: {
                        R: 149,
                        G: 187,
                        B: 78
                    }
                },
                5498: {
                    RGB: {
                        R: 121,
                        G: 175,
                        B: 83
                    }
                },
                5499: {
                    RGB: {
                        R: 91,
                        G: 160,
                        B: 84
                    }
                },
                5500: {
                    RGB: {
                        R: 59,
                        G: 151,
                        B: 86
                    }
                },
                5501: {
                    RGB: {
                        R: 166,
                        G: 198,
                        B: 65
                    }
                },
                5502: {
                    RGB: {
                        R: 156,
                        G: 194,
                        B: 68
                    }
                },
                5503: {
                    RGB: {
                        R: 147,
                        G: 189,
                        B: 70
                    }
                },
                5504: {
                    RGB: {
                        R: 127,
                        G: 180,
                        B: 76
                    }
                },
                5505: {
                    RGB: {
                        R: 102,
                        G: 168,
                        B: 77
                    }
                },
                5506: {
                    RGB: {
                        R: 77,
                        G: 157,
                        B: 81
                    }
                },
                5507: {
                    RGB: {
                        R: 43,
                        G: 146,
                        B: 82
                    }
                },
                5508: {
                    RGB: {
                        R: 141,
                        G: 191,
                        B: 63
                    }
                },
                5509: {
                    RGB: {
                        R: 130,
                        G: 186,
                        B: 65
                    }
                },
                5510: {
                    RGB: {
                        R: 122,
                        G: 180,
                        B: 66
                    }
                },
                5511: {
                    RGB: {
                        R: 105,
                        G: 171,
                        B: 70
                    }
                },
                5512: {
                    RGB: {
                        R: 84,
                        G: 159,
                        B: 70
                    }
                },
                5513: {
                    RGB: {
                        R: 62,
                        G: 150,
                        B: 73
                    }
                },
                5514: {
                    RGB: {
                        R: 32,
                        G: 141,
                        B: 76
                    }
                },
                5515: {
                    RGB: {
                        R: 116,
                        G: 182,
                        B: 61
                    }
                },
                5516: {
                    RGB: {
                        R: 107,
                        G: 177,
                        B: 62
                    }
                },
                5517: {
                    RGB: {
                        R: 103,
                        G: 175,
                        B: 64
                    }
                },
                5518: {
                    RGB: {
                        R: 89,
                        G: 164,
                        B: 67
                    }
                },
                5519: {
                    RGB: {
                        R: 70,
                        G: 155,
                        B: 69
                    }
                },
                5520: {
                    RGB: {
                        R: 50,
                        G: 146,
                        B: 69
                    }
                },
                5521: {
                    RGB: {
                        R: 18,
                        G: 137,
                        B: 69
                    }
                },
                5522: {
                    RGB: {
                        R: 99,
                        G: 176,
                        B: 60
                    }
                },
                5523: {
                    RGB: {
                        R: 94,
                        G: 173,
                        B: 63
                    }
                },
                5524: {
                    RGB: {
                        R: 86,
                        G: 168,
                        B: 63
                    }
                },
                5525: {
                    RGB: {
                        R: 76,
                        G: 161,
                        B: 66
                    }
                },
                5526: {
                    RGB: {
                        R: 61,
                        G: 150,
                        B: 64
                    }
                },
                5527: {
                    RGB: {
                        R: 40,
                        G: 141,
                        B: 66
                    }
                },
                5528: {
                    RGB: {
                        R: 0,
                        G: 134,
                        B: 67
                    }
                },
                5529: {
                    RGB: {
                        R: 195,
                        G: 189,
                        B: 60
                    }
                },
                5530: {
                    RGB: {
                        R: 181,
                        G: 183,
                        B: 64
                    }
                },
                5531: {
                    RGB: {
                        R: 154,
                        G: 172,
                        B: 68
                    }
                },
                5532: {
                    RGB: {
                        R: 124,
                        G: 157,
                        B: 72
                    }
                },
                5533: {
                    RGB: {
                        R: 92,
                        G: 147,
                        B: 78
                    }
                },
                5534: {
                    RGB: {
                        R: 59,
                        G: 138,
                        B: 79
                    }
                },
                5535: {
                    RGB: {
                        R: 191,
                        G: 191,
                        B: 55
                    }
                },
                5536: {
                    RGB: {
                        R: 177,
                        G: 186,
                        B: 59
                    }
                },
                5537: {
                    RGB: {
                        R: 165,
                        G: 179,
                        B: 62
                    }
                },
                5538: {
                    RGB: {
                        R: 142,
                        G: 169,
                        B: 69
                    }
                },
                5539: {
                    RGB: {
                        R: 114,
                        G: 157,
                        B: 72
                    }
                },
                5540: {
                    RGB: {
                        R: 90,
                        G: 147,
                        B: 76
                    }
                },
                5541: {
                    RGB: {
                        R: 50,
                        G: 133,
                        B: 76
                    }
                },
                5542: {
                    RGB: {
                        R: 174,
                        G: 187,
                        B: 56
                    }
                },
                5543: {
                    RGB: {
                        R: 161,
                        G: 181,
                        B: 60
                    }
                },
                5544: {
                    RGB: {
                        R: 153,
                        G: 176,
                        B: 45
                    }
                },
                5545: {
                    RGB: {
                        R: 127,
                        G: 164,
                        B: 66
                    }
                },
                5546: {
                    RGB: {
                        R: 104,
                        G: 154,
                        B: 71
                    }
                },
                5547: {
                    RGB: {
                        R: 75,
                        G: 141,
                        B: 73
                    }
                },
                5548: {
                    RGB: {
                        R: 43,
                        G: 131,
                        B: 75
                    }
                },
                5549: {
                    RGB: {
                        R: 145,
                        G: 179,
                        B: 58
                    }
                },
                5550: {
                    RGB: {
                        R: 133,
                        G: 173,
                        B: 61
                    }
                },
                5551: {
                    RGB: {
                        R: 125,
                        G: 168,
                        B: 62
                    }
                },
                5552: {
                    RGB: {
                        R: 108,
                        G: 159,
                        B: 68
                    }
                },
                5553: {
                    RGB: {
                        R: 87,
                        G: 148,
                        B: 69
                    }
                },
                5554: {
                    RGB: {
                        R: 65,
                        G: 140,
                        B: 71
                    }
                },
                5555: {
                    RGB: {
                        R: 34,
                        G: 130,
                        B: 71
                    }
                },
                5556: {
                    RGB: {
                        R: 118,
                        G: 170,
                        B: 58
                    }
                },
                5557: {
                    RGB: {
                        R: 107,
                        G: 163,
                        B: 57
                    }
                },
                5558: {
                    RGB: {
                        R: 103,
                        G: 161,
                        B: 60
                    }
                },
                5559: {
                    RGB: {
                        R: 88,
                        G: 152,
                        B: 62
                    }
                },
                5560: {
                    RGB: {
                        R: 71,
                        G: 142,
                        B: 64
                    }
                },
                5561: {
                    RGB: {
                        R: 49,
                        G: 134,
                        B: 66
                    }
                },
                5562: {
                    RGB: {
                        R: 11,
                        G: 124,
                        B: 66
                    }
                },
                5563: {
                    RGB: {
                        R: 98,
                        G: 162,
                        B: 56
                    }
                },
                5564: {
                    RGB: {
                        R: 90,
                        G: 158,
                        B: 56
                    }
                },
                5565: {
                    RGB: {
                        R: 87,
                        G: 155,
                        B: 59
                    }
                },
                5566: {
                    RGB: {
                        R: 76,
                        G: 148,
                        B: 60
                    }
                },
                5567: {
                    RGB: {
                        R: 58,
                        G: 139,
                        B: 62
                    }
                },
                5568: {
                    RGB: {
                        R: 43,
                        G: 132,
                        B: 64
                    }
                },
                5569: {
                    RGB: {
                        R: 8,
                        G: 122,
                        B: 64
                    }
                },
                5570: {
                    RGB: {
                        R: 85,
                        G: 159,
                        B: 55
                    }
                },
                5571: {
                    RGB: {
                        R: 79,
                        G: 154,
                        B: 55
                    }
                },
                5572: {
                    RGB: {
                        R: 77,
                        G: 151,
                        B: 56
                    }
                },
                5573: {
                    RGB: {
                        R: 65,
                        G: 144,
                        B: 57
                    }
                },
                5574: {
                    RGB: {
                        R: 53,
                        G: 136,
                        B: 60
                    }
                },
                5575: {
                    RGB: {
                        R: 36,
                        G: 130,
                        B: 62
                    }
                },
                5576: {
                    RGB: {
                        R: 0,
                        G: 117,
                        B: 58
                    }
                },
                5577: {
                    RGB: {
                        R: 183,
                        G: 179,
                        B: 62
                    }
                },
                5578: {
                    RGB: {
                        R: 174,
                        G: 175,
                        B: 66
                    }
                },
                5579: {
                    RGB: {
                        R: 174,
                        G: 163,
                        B: 71
                    }
                },
                5580: {
                    RGB: {
                        R: 119,
                        G: 152,
                        B: 74
                    }
                },
                5581: {
                    RGB: {
                        R: 92,
                        G: 142,
                        B: 78
                    }
                },
                5582: {
                    RGB: {
                        R: 56,
                        G: 129,
                        B: 78
                    }
                },
                5583: {
                    RGB: {
                        R: 184,
                        G: 182,
                        B: 59
                    }
                },
                5584: {
                    RGB: {
                        R: 166,
                        G: 174,
                        B: 61
                    }
                },
                5585: {
                    RGB: {
                        R: 157,
                        G: 171,
                        B: 63
                    }
                },
                5586: {
                    RGB: {
                        R: 133,
                        G: 158,
                        B: 67
                    }
                },
                5587: {
                    RGB: {
                        R: 106,
                        G: 146,
                        B: 69
                    }
                },
                5588: {
                    RGB: {
                        R: 86,
                        G: 139,
                        B: 74
                    }
                },
                5589: {
                    RGB: {
                        R: 51,
                        G: 127,
                        B: 74
                    }
                },
                5590: {
                    RGB: {
                        R: 165,
                        G: 175,
                        B: 56
                    }
                },
                5591: {
                    RGB: {
                        R: 151,
                        G: 169,
                        B: 60
                    }
                },
                5592: {
                    RGB: {
                        R: 139,
                        G: 163,
                        B: 61
                    }
                },
                5593: {
                    RGB: {
                        R: 118,
                        G: 153,
                        B: 63
                    }
                },
                5594: {
                    RGB: {
                        R: 98,
                        G: 145,
                        B: 69
                    }
                },
                5595: {
                    RGB: {
                        R: 75,
                        G: 135,
                        B: 71
                    }
                },
                5596: {
                    RGB: {
                        R: 45,
                        G: 125,
                        B: 72
                    }
                },
                5597: {
                    RGB: {
                        R: 139,
                        G: 169,
                        B: 57
                    }
                },
                5598: {
                    RGB: {
                        R: 127,
                        G: 160,
                        B: 59
                    }
                },
                5599: {
                    RGB: {
                        R: 118,
                        G: 156,
                        B: 61
                    }
                },
                5600: {
                    RGB: {
                        R: 102,
                        G: 148,
                        B: 63
                    }
                },
                5601: {
                    RGB: {
                        R: 83,
                        G: 139,
                        B: 65
                    }
                },
                5602: {
                    RGB: {
                        R: 62,
                        G: 132,
                        B: 68
                    }
                },
                5603: {
                    RGB: {
                        R: 39,
                        G: 120,
                        B: 66
                    }
                },
                5604: {
                    RGB: {
                        R: 115,
                        G: 160,
                        B: 57
                    }
                },
                5605: {
                    RGB: {
                        R: 107,
                        G: 156,
                        B: 59
                    }
                },
                5606: {
                    RGB: {
                        R: 99,
                        G: 152,
                        B: 60
                    }
                },
                5607: {
                    RGB: {
                        R: 87,
                        G: 145,
                        B: 64
                    }
                },
                5608: {
                    RGB: {
                        R: 83,
                        G: 133,
                        B: 64
                    }
                },
                5609: {
                    RGB: {
                        R: 54,
                        G: 127,
                        B: 64
                    }
                },
                5610: {
                    RGB: {
                        R: 29,
                        G: 121,
                        B: 66
                    }
                },
                5611: {
                    RGB: {
                        R: 98,
                        G: 156,
                        B: 54
                    }
                },
                5612: {
                    RGB: {
                        R: 90,
                        G: 151,
                        B: 55
                    }
                },
                5613: {
                    RGB: {
                        R: 83,
                        G: 146,
                        B: 57
                    }
                },
                5614: {
                    RGB: {
                        R: 72,
                        G: 139,
                        B: 58
                    }
                },
                5615: {
                    RGB: {
                        R: 58,
                        G: 133,
                        B: 60
                    }
                },
                5616: {
                    RGB: {
                        R: 42,
                        G: 125,
                        B: 62
                    }
                },
                5617: {
                    RGB: {
                        R: 15,
                        G: 117,
                        B: 61
                    }
                },
                5618: {
                    RGB: {
                        R: 86,
                        G: 152,
                        B: 55
                    }
                },
                5619: {
                    RGB: {
                        R: 79,
                        G: 147,
                        B: 55
                    }
                },
                5620: {
                    RGB: {
                        R: 74,
                        G: 142,
                        B: 54
                    }
                },
                5621: {
                    RGB: {
                        R: 67,
                        G: 137,
                        B: 57
                    }
                },
                5622: {
                    RGB: {
                        R: 50,
                        G: 128,
                        B: 56
                    }
                },
                5623: {
                    RGB: {
                        R: 42,
                        G: 123,
                        B: 62
                    }
                },
                5624: {
                    RGB: {
                        R: 0,
                        G: 114,
                        B: 59
                    }
                },
                5625: {
                    RGB: {
                        R: 149,
                        G: 147,
                        B: 67
                    }
                },
                5626: {
                    RGB: {
                        R: 139,
                        G: 140,
                        B: 54
                    }
                },
                5627: {
                    RGB: {
                        R: 121,
                        G: 134,
                        B: 58
                    }
                },
                5628: {
                    RGB: {
                        R: 97,
                        G: 124,
                        B: 60
                    }
                },
                5629: {
                    RGB: {
                        R: 76,
                        G: 116,
                        B: 64
                    }
                },
                5630: {
                    RGB: {
                        R: 48,
                        G: 107,
                        B: 65
                    }
                },
                5631: {
                    RGB: {
                        R: 148,
                        G: 148,
                        B: 49
                    }
                },
                5632: {
                    RGB: {
                        R: 136,
                        G: 142,
                        B: 51
                    }
                },
                5633: {
                    RGB: {
                        R: 129,
                        G: 139,
                        B: 54
                    }
                },
                5634: {
                    RGB: {
                        R: 110,
                        G: 131,
                        B: 59
                    }
                },

                5635: {
                    RGB: {
                        R: 91,
                        G: 124,
                        B: 62
                    }
                },
                5636: {
                    RGB: {
                        R: 71,
                        G: 114,
                        B: 62
                    }
                },
                5637: {
                    RGB: {
                        R: 44,
                        G: 105,
                        B: 62
                    }
                },
                5638: {
                    RGB: {
                        R: 138,
                        G: 145,
                        B: 50
                    }
                },
                5639: {
                    RGB: {
                        R: 126,
                        G: 139,
                        B: 50
                    }
                },
                5640: {
                    RGB: {
                        R: 116,
                        G: 135,
                        B: 53
                    }
                },
                5641: {
                    RGB: {
                        R: 100,
                        G: 127,
                        B: 56
                    }
                },
                5642: {
                    RGB: {
                        R: 63,
                        G: 120,
                        B: 58
                    }
                },
                5643: {
                    RGB: {
                        R: 64,
                        G: 113,
                        B: 61
                    }
                },
                5644: {
                    RGB: {
                        R: 38,
                        G: 103,
                        B: 60
                    }
                },
                5645: {
                    RGB: {
                        R: 116,
                        G: 139,
                        B: 50
                    }
                },
                5646: {
                    RGB: {
                        R: 106,
                        G: 136,
                        B: 52
                    }
                },
                5647: {
                    RGB: {
                        R: 100,
                        G: 131,
                        B: 54
                    }
                },
                5648: {
                    RGB: {
                        R: 84,
                        G: 123,
                        B: 56
                    }
                },
                5649: {
                    RGB: {
                        R: 71,
                        G: 117,
                        B: 58
                    }
                },
                5650: {
                    RGB: {
                        R: 54,
                        G: 109,
                        B: 58
                    }
                },
                5651: {
                    RGB: {
                        R: 33,
                        G: 101,
                        B: 57
                    }
                },
                5652: {
                    RGB: {
                        R: 98,
                        G: 135,
                        B: 50
                    }
                },
                5653: {
                    RGB: {
                        R: 91,
                        G: 131,
                        B: 51
                    }
                },
                5654: {
                    RGB: {
                        R: 84,
                        G: 126,
                        B: 52
                    }
                },
                5655: {
                    RGB: {
                        R: 73,
                        G: 120,
                        B: 55
                    }
                },
                5656: {
                    RGB: {
                        R: 60,
                        G: 114,
                        B: 56
                    }
                },
                5657: {
                    RGB: {
                        R: 46,
                        G: 107,
                        B: 57
                    }
                },
                5658: {
                    RGB: {
                        R: 28,
                        G: 102,
                        B: 58
                    }
                },
                5659: {
                    RGB: {
                        R: 80,
                        G: 128,
                        B: 47
                    }
                },
                5660: {
                    RGB: {
                        R: 77,
                        G: 125,
                        B: 49
                    }
                },
                5661: {
                    RGB: {
                        R: 72,
                        G: 123,
                        B: 51
                    }
                },
                5662: {
                    RGB: {
                        R: 62,
                        G: 117,
                        B: 51
                    }
                },
                5663: {
                    RGB: {
                        R: 51,
                        G: 110,
                        B: 52
                    }
                },
                5664: {
                    RGB: {
                        R: 37,
                        G: 103,
                        B: 54
                    }
                },
                5665: {
                    RGB: {
                        R: 23,
                        G: 99,
                        B: 55
                    }
                },
                5666: {
                    RGB: {
                        R: 71,
                        G: 124,
                        B: 47
                    }
                },
                5667: {
                    RGB: {
                        R: 66,
                        G: 122,
                        B: 47
                    }
                },
                5668: {
                    RGB: {
                        R: 65,
                        G: 119,
                        B: 49
                    }
                },
                5669: {
                    RGB: {
                        R: 58,
                        G: 114,
                        B: 52
                    }
                },
                5670: {
                    RGB: {
                        R: 44,
                        G: 108,
                        B: 51
                    }
                },
                5671: {
                    RGB: {
                        R: 33,
                        G: 101,
                        B: 51
                    }
                },
                5672: {
                    RGB: {
                        R: 11,
                        G: 95,
                        B: 51
                    }
                },
                5673: {
                    RGB: {
                        R: 113,
                        G: 108,
                        B: 45
                    }
                },
                5674: {
                    RGB: {
                        R: 107,
                        G: 108,
                        B: 46
                    }
                },
                5675: {
                    RGB: {
                        R: 94,
                        G: 103,
                        B: 48
                    }
                },
                5676: {
                    RGB: {
                        R: 79,
                        G: 96,
                        B: 50
                    }
                },
                5677: {
                    RGB: {
                        R: 63,
                        G: 89,
                        B: 51
                    }
                },
                5678: {
                    RGB: {
                        R: 47,
                        G: 85,
                        B: 55
                    }
                },
                5679: {
                    RGB: {
                        R: 114,
                        G: 112,
                        B: 41
                    }
                },
                5680: {
                    RGB: {
                        R: 107,
                        G: 111,
                        B: 45
                    }
                },
                5681: {
                    RGB: {
                        R: 99,
                        G: 107,
                        B: 46
                    }
                },
                5682: {
                    RGB: {
                        R: 88,
                        G: 102,
                        B: 47
                    }
                },
                5683: {
                    RGB: {
                        R: 75,
                        G: 98,
                        B: 51
                    }
                },
                5684: {
                    RGB: {
                        R: 64,
                        G: 92,
                        B: 39
                    }
                },
                5685: {
                    RGB: {
                        R: 46,
                        G: 85,
                        B: 53
                    }
                },
                5686: {
                    RGB: {
                        R: 105,
                        G: 109,
                        B: 39
                    }
                },
                5687: {
                    RGB: {
                        R: 97,
                        G: 108,
                        B: 45
                    }
                },
                5688: {
                    RGB: {
                        R: 91,
                        G: 105,
                        B: 46
                    }
                },
                5689: {
                    RGB: {
                        R: 79,
                        G: 99,
                        B: 48
                    }
                },
                5690: {
                    RGB: {
                        R: 68,
                        G: 97,
                        B: 51
                    }
                },
                5691: {
                    RGB: {
                        R: 56,
                        G: 91,
                        B: 51
                    }
                },
                5692: {
                    RGB: {
                        R: 41,
                        G: 83,
                        B: 50
                    }
                },
                5693: {
                    RGB: {
                        R: 92,
                        G: 107,
                        B: 44
                    }
                },
                5694: {
                    RGB: {
                        R: 83,
                        G: 102,
                        B: 44
                    }
                },
                5695: {
                    RGB: {
                        R: 80,
                        G: 102,
                        B: 43
                    }
                },
                5696: {
                    RGB: {
                        R: 68,
                        G: 97,
                        B: 48
                    }
                },
                5697: {
                    RGB: {
                        R: 57,
                        G: 91,
                        B: 47
                    }
                },
                5698: {
                    RGB: {
                        R: 48,
                        G: 87,
                        B: 50
                    }
                },
                5699: {
                    RGB: {
                        R: 36,
                        G: 82,
                        B: 49
                    }
                },
                5700: {
                    RGB: {
                        R: 80,
                        G: 105,
                        B: 42
                    }
                },
                5701: {
                    RGB: {
                        R: 73,
                        G: 101,
                        B: 42
                    }
                },
                5702: {
                    RGB: {
                        R: 68,
                        G: 100,
                        B: 43
                    }
                },
                5703: {
                    RGB: {
                        R: 61,
                        G: 96,
                        B: 46
                    }
                },
                5704: {
                    RGB: {
                        R: 52,
                        G: 92,
                        B: 48
                    }
                },
                5705: {
                    RGB: {
                        R: 41,
                        G: 86,
                        B: 48
                    }
                },
                5706: {
                    RGB: {
                        R: 32,
                        G: 80,
                        B: 46
                    }
                },
                5707: {
                    RGB: {
                        R: 68,
                        G: 100,
                        B: 39
                    }
                },
                5708: {
                    RGB: {
                        R: 64,
                        G: 98,
                        B: 40
                    }
                },
                5709: {
                    RGB: {
                        R: 59,
                        G: 96,
                        B: 41
                    }
                },
                5710: {
                    RGB: {
                        R: 53,
                        G: 92,
                        B: 44
                    }
                },
                5711: {
                    RGB: {
                        R: 45,
                        G: 88,
                        B: 44
                    }
                },
                5712: {
                    RGB: {
                        R: 37,
                        G: 84,
                        B: 45
                    }
                },
                5713: {
                    RGB: {
                        R: 27,
                        G: 78,
                        B: 46
                    }
                },
                5714: {
                    RGB: {
                        R: 64,
                        G: 101,
                        B: 41
                    }
                },
                5715: {
                    RGB: {
                        R: 60,
                        G: 99,
                        B: 42
                    }
                },
                5716: {
                    RGB: {
                        R: 57,
                        G: 97,
                        B: 45
                    }
                },
                5717: {
                    RGB: {
                        R: 50,
                        G: 93,
                        B: 44
                    }
                },
                5718: {
                    RGB: {
                        R: 43,
                        G: 89,
                        B: 44
                    }
                },
                5719: {
                    RGB: {
                        R: 34,
                        G: 82,
                        B: 43
                    }
                },
                5720: {
                    RGB: {
                        R: 30,
                        G: 80,
                        B: 46
                    }
                },
                5721: {
                    RGB: {
                        R: 0,
                        G: 173,
                        B: 216
                    }
                },
                5722: {
                    RGB: {
                        R: 0,
                        G: 172,
                        B: 201
                    }
                },
                5723: {
                    RGB: {
                        R: 22,
                        G: 169,
                        B: 170
                    }
                },
                5724: {
                    RGB: {
                        R: 29,
                        G: 167,
                        B: 144
                    }
                },
                5725: {
                    RGB: {
                        R: 34,
                        G: 164,
                        B: 114
                    }
                },
                5726: {
                    RGB: {
                        R: 39,
                        G: 167,
                        B: 91
                    }
                },
                5727: {
                    RGB: {
                        R: 43,
                        G: 163,
                        B: 209
                    }
                },
                5728: {
                    RGB: {
                        R: 38,
                        G: 161,
                        B: 191
                    }
                },
                5729: {
                    RGB: {
                        R: 42,
                        G: 158,
                        B: 176
                    }
                },
                5730: {
                    RGB: {
                        R: 47,
                        G: 156,
                        B: 149
                    }
                },
                5731: {
                    RGB: {
                        R: 49,
                        G: 154,
                        B: 126
                    }
                },
                5732: {
                    RGB: {
                        R: 55,
                        G: 151,
                        B: 101
                    }
                },
                5733: {
                    RGB: {
                        R: 55,
                        G: 148,
                        B: 85
                    }
                },
                5734: {
                    RGB: {
                        R: 31,
                        G: 161,
                        B: 197
                    }
                },
                5735: {
                    RGB: {
                        R: 31,
                        G: 159,
                        B: 181
                    }
                },
                5736: {
                    RGB: {
                        R: 33,
                        G: 157,
                        B: 167
                    }
                },
                5737: {
                    RGB: {
                        R: 37,
                        G: 154,
                        B: 143
                    }
                },
                5738: {
                    RGB: {
                        R: 44,
                        G: 152,
                        B: 121
                    }
                },
                5739: {
                    RGB: {
                        R: 47,
                        G: 147,
                        B: 96
                    }
                },
                5740: {
                    RGB: {
                        R: 52,
                        G: 145,
                        B: 82
                    }
                },
                5741: {
                    RGB: {
                        R: 13,
                        G: 157,
                        B: 175
                    }
                },
                5742: {
                    RGB: {
                        R: 0,
                        G: 154,
                        B: 161
                    }
                },
                5743: {
                    RGB: {
                        R: 0,
                        G: 152,
                        B: 150
                    }
                },
                5744: {
                    RGB: {
                        R: 23,
                        G: 149,
                        B: 131
                    }
                },
                5745: {
                    RGB: {
                        R: 28,
                        G: 147,
                        B: 111
                    }
                },
                5746: {
                    RGB: {
                        R: 37,
                        G: 147,
                        B: 92
                    }
                },
                5747: {
                    RGB: {
                        R: 40,
                        G: 144,
                        B: 80
                    }
                },
                5748: {
                    RGB: {
                        R: 0,
                        G: 153,
                        B: 155
                    }
                },
                5749: {
                    RGB: {
                        R: 0,
                        G: 150,
                        B: 143
                    }
                },
                5750: {
                    RGB: {
                        R: 0,
                        G: 148,
                        B: 134
                    }
                },
                5751: {
                    RGB: {
                        R: 0,
                        G: 145,
                        B: 118
                    }
                },
                5752: {
                    RGB: {
                        R: 0,
                        G: 144,
                        B: 102
                    }
                },
                5753: {
                    RGB: {
                        R: 25,
                        G: 142,
                        B: 86
                    }
                },
                5754: {
                    RGB: {
                        R: 29,
                        G: 139,
                        B: 74
                    }
                },
                5755: {
                    RGB: {
                        R: 0,
                        G: 148,
                        B: 136
                    }
                },
                5756: {
                    RGB: {
                        R: 0,
                        G: 146,
                        B: 126
                    }
                },
                5757: {
                    RGB: {
                        R: 0,
                        G: 143,
                        B: 117
                    }
                },
                5758: {
                    RGB: {
                        R: 0,
                        G: 143,
                        B: 105
                    }
                },
                5759: {
                    RGB: {
                        R: 0,
                        G: 140,
                        B: 91
                    }
                },
                5760: {
                    RGB: {
                        R: 0,
                        G: 137,
                        B: 77
                    }
                },
                5761: {
                    RGB: {
                        R: 20,
                        G: 137,
                        B: 68
                    }
                },
                5762: {
                    RGB: {
                        R: 0,
                        G: 144,
                        B: 122
                    }
                },
                5763: {
                    RGB: {
                        R: 0,
                        G: 143,
                        B: 117
                    }
                },
                5764: {
                    RGB: {
                        R: 0,
                        G: 143,
                        B: 113
                    }
                },
                5765: {
                    RGB: {
                        R: 0,
                        G: 141,
                        B: 98
                    }
                },
                5766: {
                    RGB: {
                        R: 0,
                        G: 140,
                        B: 90
                    }
                },
                5767: {
                    RGB: {
                        R: 0,
                        G: 137,
                        B: 77
                    }
                },
                5768: {
                    RGB: {
                        R: 0,
                        G: 134,
                        B: 67
                    }
                },
                5769: {
                    RGB: {
                        R: 51,
                        G: 150,
                        B: 184
                    }
                },
                5770: {
                    RGB: {
                        R: 50,
                        G: 148,
                        B: 168
                    }
                },
                5771: {
                    RGB: {
                        R: 51,
                        G: 143,
                        B: 137
                    }
                },
                5772: {
                    RGB: {
                        R: 58,
                        G: 143,
                        B: 114
                    }
                },
                5773: {
                    RGB: {
                        R: 57,
                        G: 138,
                        B: 89
                    }
                },
                5774: {
                    RGB: {
                        R: 59,
                        G: 138,
                        B: 77
                    }
                },
                5775: {
                    RGB: {
                        R: 44,
                        G: 151,
                        B: 191
                    }
                },
                5776: {
                    RGB: {
                        R: 44,
                        G: 149,
                        B: 171
                    }
                },
                5777: {
                    RGB: {
                        R: 44,
                        G: 146,
                        B: 157
                    }
                },
                5778: {
                    RGB: {
                        R: 47,
                        G: 144,
                        B: 133
                    }
                },
                5779: {
                    RGB: {
                        R: 53,
                        G: 141,
                        B: 110
                    }
                },
                5780: {
                    RGB: {
                        R: 55,
                        G: 139,
                        B: 84
                    }
                },
                5781: {
                    RGB: {
                        R: 56,
                        G: 136,
                        B: 72
                    }
                },
                5782: {
                    RGB: {
                        R: 33,
                        G: 146,
                        B: 177
                    }
                },
                5783: {
                    RGB: {
                        R: 39,
                        G: 147,
                        B: 162
                    }
                },
                5784: {
                    RGB: {
                        R: 39,
                        G: 144,
                        B: 148
                    }
                },
                5785: {
                    RGB: {
                        R: 44,
                        G: 142,
                        B: 124
                    }
                },
                5786: {
                    RGB: {
                        R: 46,
                        G: 139,
                        B: 103
                    }
                },
                5787: {
                    RGB: {
                        R: 49,
                        G: 136,
                        B: 81
                    }
                },
                5788: {
                    RGB: {
                        R: 53,
                        G: 136,
                        B: 72
                    }
                },
                5789: {
                    RGB: {
                        R: 17,
                        G: 142,
                        B: 154
                    }
                },
                5790: {
                    RGB: {
                        R: 24,
                        G: 143,
                        B: 143
                    }
                },
                5791: {
                    RGB: {
                        R: 22,
                        G: 140,
                        B: 132
                    }
                },
                5792: {
                    RGB: {
                        R: 30,
                        G: 138,
                        B: 111
                    }
                },
                5793: {
                    RGB: {
                        R: 35,
                        G: 135,
                        B: 93
                    }
                },
                5794: {
                    RGB: {
                        R: 42,
                        G: 134,
                        B: 74
                    }
                },
                5795: {
                    RGB: {
                        R: 42,
                        G: 132,
                        B: 67
                    }
                },
                5796: {
                    RGB: {
                        R: 0,
                        G: 138,
                        B: 134
                    }
                },
                5797: {
                    RGB: {
                        R: 0,
                        G: 138,
                        B: 126
                    }
                },
                5798: {
                    RGB: {
                        R: 0,
                        G: 136,
                        B: 115
                    }
                },
                5799: {
                    RGB: {
                        R: 0,
                        G: 133,
                        B: 98
                    }
                },
                5800: {
                    RGB: {
                        R: 23,
                        G: 133,
                        B: 85
                    }
                },
                5801: {
                    RGB: {
                        R: 33,
                        G: 130,
                        B: 67
                    }
                },
                5802: {
                    RGB: {
                        R: 30,
                        G: 127,
                        B: 60
                    }
                },
                5803: {
                    RGB: {
                        R: 0,
                        G: 134,
                        B: 117
                    }
                },
                5804: {
                    RGB: {
                        R: 0,
                        G: 134,
                        B: 111
                    }
                },
                5805: {
                    RGB: {
                        R: 0,
                        G: 131,
                        B: 103
                    }
                },
                5806: {
                    RGB: {
                        R: 0,
                        G: 131,
                        B: 91
                    }
                },
                5807: {
                    RGB: {
                        R: 0,
                        G: 127,
                        B: 76
                    }
                },
                5808: {
                    RGB: {
                        R: 25,
                        G: 127,
                        B: 64
                    }
                },
                5809: {
                    RGB: {
                        R: 24,
                        G: 125,
                        B: 58
                    }
                },
                5810: {
                    RGB: {
                        R: 0,
                        G: 132,
                        B: 109
                    }
                },
                5811: {
                    RGB: {
                        R: 0,
                        G: 132,
                        B: 102
                    }
                },
                5812: {
                    RGB: {
                        R: 0,
                        G: 129,
                        B: 95
                    }
                },
                5813: {
                    RGB: {
                        R: 0,
                        G: 129,
                        B: 85
                    }
                },
                5814: {
                    RGB: {
                        R: 0,
                        G: 128,
                        B: 75
                    }
                },
                5815: {
                    RGB: {
                        R: 15,
                        G: 125,
                        B: 63
                    }
                },
                5816: {
                    RGB: {
                        R: 0,
                        G: 117,
                        B: 58
                    }
                },
                5817: {
                    RGB: {
                        R: 46,
                        G: 139,
                        B: 171
                    }
                },
                5818: {
                    RGB: {
                        R: 45,
                        G: 137,
                        B: 156
                    }
                },
                5819: {
                    RGB: {
                        R: 47,
                        G: 135,
                        B: 133
                    }
                },
                5820: {
                    RGB: {
                        R: 50,
                        G: 132,
                        B: 109
                    }
                },
                5821: {
                    RGB: {
                        R: 53,
                        G: 130,
                        B: 88
                    }
                },
                5822: {
                    RGB: {
                        R: 52,
                        G: 127,
                        B: 75
                    }
                },
                5823: {
                    RGB: {
                        R: 36,
                        G: 137,
                        B: 174
                    }
                },
                5824: {
                    RGB: {
                        R: 34,
                        G: 135,
                        B: 159
                    }
                },
                5825: {
                    RGB: {
                        R: 38,
                        G: 135,
                        B: 148
                    }
                },
                5826: {
                    RGB: {
                        R: 40,
                        G: 133,
                        B: 124
                    }
                },
                5827: {
                    RGB: {
                        R: 46,
                        G: 130,
                        B: 102
                    }
                },
                5828: {
                    RGB: {
                        R: 49,
                        G: 127,
                        B: 81
                    }
                },
                5829: {
                    RGB: {
                        R: 49,
                        G: 125,
                        B: 72
                    }
                },
                5830: {
                    RGB: {
                        R: 26,
                        G: 135,
                        B: 164
                    }
                },
                5831: {
                    RGB: {
                        R: 32,
                        G: 135,
                        B: 153
                    }
                },
                5832: {
                    RGB: {
                        R: 31,
                        G: 133,
                        B: 141
                    }
                },
                5833: {
                    RGB: {
                        R: 35,
                        G: 131,
                        B: 117
                    }
                },
                5834: {
                    RGB: {
                        R: 41,
                        G: 128,
                        B: 97
                    }
                },
                5835: {
                    RGB: {
                        R: 43,
                        G: 125,
                        B: 78
                    }
                },
                5836: {
                    RGB: {
                        R: 43,
                        G: 123,
                        B: 68
                    }
                },
                5837: {
                    RGB: {
                        R: 0,
                        G: 131,
                        B: 145
                    }
                },
                5838: {
                    RGB: {
                        R: 9,
                        G: 129,
                        B: 134
                    }
                },
                5839: {
                    RGB: {
                        R: 10,
                        G: 129,
                        B: 127
                    }
                },
                5840: {
                    RGB: {
                        R: 17,
                        G: 125,
                        B: 105
                    }
                },
                5841: {
                    RGB: {
                        R: 25,
                        G: 124,
                        B: 91
                    }
                },
                5842: {
                    RGB: {
                        R: 31,
                        G: 121,
                        B: 73
                    }
                },
                5843: {
                    RGB: {
                        R: 32,
                        G: 118,
                        B: 64
                    }
                },
                5844: {
                    RGB: {
                        R: 0,
                        G: 127,
                        B: 129
                    }
                },
                5845: {
                    RGB: {
                        R: 0,
                        G: 125,
                        B: 117
                    }
                },
                5846: {
                    RGB: {
                        R: 0,
                        G: 122,
                        B: 109
                    }
                },
                5847: {
                    RGB: {
                        R: 0,
                        G: 122,
                        B: 96
                    }
                },
                5848: {
                    RGB: {
                        R: 12,
                        G: 122,
                        B: 83
                    }
                },
                5849: {
                    RGB: {
                        R: 19,
                        G: 116,
                        B: 66
                    }
                },
                5850: {
                    RGB: {
                        R: 27,
                        G: 116,
                        B: 61
                    }
                },
                5851: {
                    RGB: {
                        R: 0,
                        G: 123,
                        B: 112
                    }
                },
                5852: {
                    RGB: {
                        R: 0,
                        G: 120,
                        B: 102
                    }
                },
                5853: {
                    RGB: {
                        R: 0,
                        G: 120,
                        B: 99
                    }
                },
                5854: {
                    RGB: {
                        R: 0,
                        G: 117,
                        B: 86
                    }
                },
                5855: {
                    RGB: {
                        R: 0,
                        G: 117,
                        B: 76
                    }
                },
                5856: {
                    RGB: {
                        R: 16,
                        G: 116,
                        B: 65
                    }
                },
                5857: {
                    RGB: {
                        R: 15,
                        G: 111,
                        B: 57
                    }
                },
                5858: {
                    RGB: {
                        R: 0,
                        G: 123,
                        B: 106
                    }
                },
                5859: {
                    RGB: {
                        R: 0,
                        G: 120,
                        B: 98
                    }
                },
                5860: {
                    RGB: {
                        R: 0,
                        G: 120,
                        B: 95
                    }
                },
                5861: {
                    RGB: {
                        R: 0,
                        G: 120,
                        B: 85
                    }
                },
                5862: {
                    RGB: {
                        R: 0,
                        G: 117,
                        B: 73
                    }
                },
                5863: {
                    RGB: {
                        R: 0,
                        G: 114,
                        B: 63
                    }
                },
                5864: {
                    RGB: {
                        R: 0,
                        G: 114,
                        B: 56
                    }
                },
                5865: {
                    RGB: {
                        R: 37,
                        G: 114,
                        B: 140
                    }
                },
                5866: {
                    RGB: {
                        R: 42,
                        G: 1156,
                        B: 131
                    }
                },
                5867: {
                    RGB: {
                        R: 42,
                        G: 113,
                        B: 110
                    }
                },
                5868: {
                    RGB: {
                        R: 45,
                        G: 112,
                        B: 93
                    }
                },
                5869: {
                    RGB: {
                        R: 46,
                        G: 107,
                        B: 74
                    }
                },
                5870: {
                    RGB: {
                        R: 47,
                        G: 105,
                        B: 64
                    }
                },
                5871: {
                    RGB: {
                        R: 37,
                        G: 115,
                        B: 144
                    }
                },
                5872: {
                    RGB: {
                        R: 35,
                        G: 115,
                        B: 133
                    }
                },
                5873: {
                    RGB: {
                        R: 35,
                        G: 113,
                        B: 123
                    }
                },
                5874: {
                    RGB: {
                        R: 38,
                        G: 110,
                        B: 103
                    }
                },
                5875: {
                    RGB: {
                        R: 40,
                        G: 111,
                        B: 90
                    }
                },
                5876: {
                    RGB: {
                        R: 44,
                        G: 108,
                        B: 73
                    }
                },
                5877: {
                    RGB: {
                        R: 43,
                        G: 105,
                        B: 64
                    }
                },
                5878: {
                    RGB: {
                        R: 26,
                        G: 113,
                        B: 135
                    }
                },
                5879: {
                    RGB: {
                        R: 29,
                        G: 113,
                        B: 126
                    }
                },
                5880: {
                    RGB: {
                        R: 33,
                        G: 112,
                        B: 118
                    }
                },
                5881: {
                    RGB: {
                        R: 34,
                        G: 111,
                        B: 102
                    }
                },
                5882: {
                    RGB: {
                        R: 36,
                        G: 108,
                        B: 87
                    }
                },
                5883: {
                    RGB: {
                        R: 38,
                        G: 106,
                        B: 69
                    }
                },
                5884: {
                    RGB: {
                        R: 42,
                        G: 105,
                        B: 62
                    }
                },
                5885: {
                    RGB: {
                        R: 22,
                        G: 111,
                        B: 121
                    }
                },
                5886: {
                    RGB: {
                        R: 19,
                        G: 109,
                        B: 112
                    }
                },
                5887: {
                    RGB: {
                        R: 22,
                        G: 109,
                        B: 105
                    }
                },
                5888: {
                    RGB: {
                        R: 26,
                        G: 105,
                        B: 89
                    }
                },
                5889: {
                    RGB: {
                        R: 30,
                        G: 106,
                        B: 80
                    }
                },
                5890: {
                    RGB: {
                        R: 33,
                        G: 104,
                        B: 64
                    }
                },
                5891: {
                    RGB: {
                        R: 35,
                        G: 101,
                        B: 57
                    }
                },
                5892: {
                    RGB: {
                        R: 2,
                        G: 107,
                        B: 107
                    }
                },
                5893: {
                    RGB: {
                        R: 5,
                        G: 107,
                        B: 101
                    }
                },
                5894: {
                    RGB: {
                        R: 6,
                        G: 104,
                        B: 93
                    }
                },
                5895: {
                    RGB: {
                        R: 0,
                        G: 105,
                        B: 92
                    }
                },
                5896: {
                    RGB: {
                        R: 19,
                        G: 102,
                        B: 70
                    }
                },
                5897: {
                    RGB: {
                        R: 26,
                        G: 99,
                        B: 59
                    }
                },
                5898: {
                    RGB: {
                        R: 30,
                        G: 99,
                        B: 55
                    }
                },
                5899: {
                    RGB: {
                        R: 0,
                        G: 105,
                        B: 96
                    }
                },
                5900: {
                    RGB: {
                        R: 0,
                        G: 103,
                        B: 88
                    }
                },
                5901: {
                    RGB: {
                        R: 0,
                        G: 103,
                        B: 84
                    }
                },
                5902: {
                    RGB: {
                        R: 3,
                        G: 102,
                        B: 74
                    }
                },
                5903: {
                    RGB: {
                        R: 14,
                        G: 100,
                        B: 66
                    }
                },
                5904: {
                    RGB: {
                        R: 22,
                        G: 100,
                        B: 58
                    }
                },
                5905: {
                    RGB: {
                        R: 26,
                        G: 97,
                        B: 52
                    }
                },
                5906: {
                    RGB: {
                        R: 0,
                        G: 103,
                        B: 88
                    }
                },
                5907: {
                    RGB: {
                        R: 0,
                        G: 103,
                        B: 84
                    }
                },
                5908: {
                    RGB: {
                        R: 0,
                        G: 103,
                        B: 81
                    }
                },
                5909: {
                    RGB: {
                        R: 0,
                        G: 100,
                        B: 71
                    }
                },
                5910: {
                    RGB: {
                        R: 8,
                        G: 100,
                        B: 64
                    }
                },
                5911: {
                    RGB: {
                        R: 16,
                        G: 97,
                        B: 54
                    }
                },
                5912: {
                    RGB: {
                        R: 11,
                        G: 95,
                        B: 51
                    }
                },
                5913: {
                    RGB: {
                        R: 40,
                        G: 95,
                        B: 111
                    }
                },
                5914: {
                    RGB: {
                        R: 41,
                        G: 95,
                        B: 106
                    }
                },
                5915: {
                    RGB: {
                        R: 41,
                        G: 93,
                        B: 92
                    }
                },
                5916: {
                    RGB: {
                        R: 44,
                        G: 93,
                        B: 79
                    }
                },
                5917: {
                    RGB: {
                        R: 45,
                        G: 91,
                        B: 65
                    }
                },
                5918: {
                    RGB: {
                        R: 47,
                        G: 87,
                        B: 57
                    }
                },
                5919: {
                    RGB: {
                        R: 36,
                        G: 93,
                        B: 112
                    }
                },
                5920: {
                    RGB: {
                        R: 39,
                        G: 95,
                        B: 109
                    }
                },
                5921: {
                    RGB: {
                        R: 39,
                        G: 97,
                        B: 100
                    }
                },
                5922: {
                    RGB: {
                        R: 39,
                        G: 91,
                        B: 85
                    }
                },
                5923: {
                    RGB: {
                        R: 42,
                        G: 91,
                        B: 76
                    }
                },
                5924: {
                    RGB: {
                        R: 43,
                        G: 88,
                        B: 63
                    }
                },
                5925: {
                    RGB: {
                        R: 43,
                        G: 86,
                        B: 55
                    }
                },
                5926: {
                    RGB: {
                        R: 35,
                        G: 93,
                        B: 108
                    }
                },
                5927: {
                    RGB: {
                        R: 32,
                        G: 90,
                        B: 98
                    }
                },
                5928: {
                    RGB: {
                        R: 36,
                        G: 91,
                        B: 94
                    }
                },
                5929: {
                    RGB: {
                        R: 36,
                        G: 89,
                        B: 82
                    }
                },
                5930: {
                    RGB: {
                        R: 38,
                        G: 89,
                        B: 74
                    }
                },
                5931: {
                    RGB: {
                        R: 40,
                        G: 89,
                        B: 63
                    }
                },
                5932: {
                    RGB: {
                        R: 42,
                        G: 86,
                        B: 52
                    }
                },
                5933: {
                    RGB: {
                        R: 30,
                        G: 89,
                        B: 96
                    }
                },
                5934: {
                    RGB: {
                        R: 30,
                        G: 89,
                        B: 90
                    }
                },
                5935: {
                    RGB: {
                        R: 30,
                        G: 89,
                        B: 87
                    }
                },
                5936: {
                    RGB: {
                        R: 31,
                        G: 87,
                        B: 69
                    }
                },
                5937: {
                    RGB: {
                        R: 33,
                        G: 85,
                        B: 58
                    }
                },
                5938: {
                    RGB: {
                        R: 34,
                        G: 82,
                        B: 51
                    }
                },
                5939: {
                    RGB: {
                        R: 40,
                        G: 84,
                        B: 49
                    }
                },
                5940: {
                    RGB: {
                        R: 24,
                        G: 85,
                        B: 82
                    }
                },
                5941: {
                    RGB: {
                        R: 23,
                        G: 85,
                        B: 80
                    }
                },
                5942: {
                    RGB: {
                        R: 26,
                        G: 83,
                        B: 69
                    }
                },
                5943: {
                    RGB: {
                        R: 26,
                        G: 81,
                        B: 61
                    }
                },
                5944: {
                    RGB: {
                        R: 27,
                        G: 80,
                        B: 54
                    }
                },
                5945: {
                    RGB: {
                        R: 30,
                        G: 77,
                        B: 48
                    }
                },
                5946: {
                    RGB: {
                        R: 33,
                        G: 79,
                        B: 46
                    }
                },
                5947: {
                    RGB: {
                        R: 24,
                        G: 83,
                        B: 74
                    }
                },
                5948: {
                    RGB: {
                        R: 19,
                        G: 80,
                        B: 68
                    }
                },
                5949: {
                    RGB: {
                        R: 22,
                        G: 81,
                        B: 61
                    }
                },
                5950: {
                    RGB: {
                        R: 22,
                        G: 78,
                        B: 56
                    }
                },
                5951: {
                    RGB: {
                        R: 26,
                        G: 78,
                        B: 49
                    }
                },
                5952: {
                    RGB: {
                        R: 28,
                        G: 75,
                        B: 45
                    }
                },
                5953: {
                    RGB: {
                        R: 30,
                        G: 80,
                        B: 48
                    }
                },
                5954: {
                    RGB: {
                        R: 18,
                        G: 81,
                        B: 67
                    }
                },
                5955: {
                    RGB: {
                        R: 19,
                        G: 81,
                        B: 65
                    }
                },
                5956: {
                    RGB: {
                        R: 23,
                        G: 80,
                        B: 60
                    }
                },
                5957: {
                    RGB: {
                        R: 24,
                        G: 79,
                        B: 55
                    }
                },
                5958: {
                    RGB: {
                        R: 24,
                        G: 78,
                        B: 49
                    }
                },
                5959: {
                    RGB: {
                        R: 26,
                        G: 73,
                        B: 43
                    }
                },
                5960: {
                    RGB: {
                        R: 30,
                        G: 80,
                        B: 46
                    }
                },
                5961: {
                    RGB: {
                        R: 78,
                        G: 96,
                        B: 74
                    }
                },
                5962: {
                    RGB: {
                        R: 79,
                        G: 96,
                        B: 64
                    }
                },
                5963: {
                    RGB: {
                        R: 81,
                        G: 98,
                        B: 56
                    }
                },
                5964: {
                    RGB: {
                        R: 81,
                        G: 95,
                        B: 47
                    }
                },
                5965: {
                    RGB: {
                        R: 81,
                        G: 95,
                        B: 41
                    }
                },
                5966: {
                    RGB: {
                        R: 77,
                        G: 90,
                        B: 39
                    }
                },
                5967: {
                    RGB: {
                        R: 70,
                        G: 92,
                        B: 78
                    }
                },
                5968: {
                    RGB: {
                        R: 72,
                        G: 95,
                        B: 75
                    }
                },
                5969: {
                    RGB: {
                        R: 70,
                        G: 92,
                        B: 66
                    }
                },
                5970: {
                    RGB: {
                        R: 71,
                        G: 92,
                        B: 55
                    }
                },
                5971: {
                    RGB: {
                        R: 73,
                        G: 92,
                        B: 48
                    }
                },
                5972: {
                    RGB: {
                        R: 73,
                        G: 92,
                        B: 43
                    }
                },
                5973: {
                    RGB: {
                        R: 69,
                        G: 84,
                        B: 37
                    }
                },
                5974: {
                    RGB: {
                        R: 63,
                        G: 88,
                        B: 76
                    }
                },
                5975: {
                    RGB: {
                        R: 63,
                        G: 89,
                        B: 72
                    }
                },
                5976: {
                    RGB: {
                        R: 63,
                        G: 89,
                        B: 64
                    }
                },
                5977: {
                    RGB: {
                        R: 63,
                        G: 86,
                        B: 54
                    }
                },
                5978: {
                    RGB: {
                        R: 65,
                        G: 88,
                        B: 49
                    }
                },
                5979: {
                    RGB: {
                        R: 65,
                        G: 88,
                        B: 47
                    }
                },
                5980: {
                    RGB: {
                        R: 66,
                        G: 88,
                        B: 43
                    }
                },
                5981: {
                    RGB: {
                        R: 50,
                        G: 83,
                        B: 79
                    }
                },
                5982: {
                    RGB: {
                        R: 49,
                        G: 84,
                        B: 75
                    }
                },
                5983: {
                    RGB: {
                        R: 52,
                        G: 86,
                        B: 74
                    }
                },
                5984: {
                    RGB: {
                        R: 51,
                        G: 83,
                        B: 63
                    }
                },
                5985: {
                    RGB: {
                        R: 52,
                        G: 83,
                        B: 54
                    }
                },
                5986: {
                    RGB: {
                        R: 54,
                        G: 83,
                        B: 49
                    }
                },
                5987: {
                    RGB: {
                        R: 53,
                        G: 80,
                        B: 44
                    }
                },
                5988: {
                    RGB: {
                        R: 39,
                        G: 83,
                        B: 81
                    }
                },
                5989: {
                    RGB: {
                        R: 42,
                        G: 85,
                        B: 80
                    }
                },
                5990: {
                    RGB: {
                        R: 43,
                        G: 85,
                        B: 77
                    }
                },
                5991: {
                    RGB: {
                        R: 45,
                        G: 85,
                        B: 69
                    }
                },
                5992: {
                    RGB: {
                        R: 46,
                        G: 85,
                        B: 60
                    }
                },
                5993: {
                    RGB: {
                        R: 45,
                        G: 82,
                        B: 51
                    }
                },
                5994: {
                    RGB: {
                        R: 47,
                        G: 82,
                        B: 47
                    }
                },
                6001: {
                    RGB: {
                        R: 231,
                        G: 243,
                        B: 252
                    }
                },
                6002: {
                    RGB: {
                        R: 211,
                        G: 234,
                        B: 249
                    }
                },
                6003: {
                    RGB: {
                        R: 169,
                        G: 216,
                        B: 245
                    }
                },

                6004: {
                    RGB: {
                        R: 129,
                        G: 200,
                        B: 241
                    }
                },
                6005: {
                    RGB: {
                        R: 85,
                        G: 186,
                        B: 237
                    }
                },
                6006: {
                    RGB: {
                        R: 0,
                        G: 175,
                        B: 235
                    }
                },
                6007: {
                    RGB: {
                        R: 220,
                        G: 224,
                        B: 240
                    }
                },
                6008: {
                    RGB: {
                        R: 202,
                        G: 214,
                        B: 237
                    }
                },
                6009: {
                    RGB: {
                        R: 187,
                        G: 208,
                        B: 236
                    }
                },
                6010: {
                    RGB: {
                        R: 155,
                        G: 193,
                        B: 230
                    }
                },
                6011: {
                    RGB: {
                        R: 120,
                        G: 178,
                        B: 224
                    }
                },
                6012: {
                    RGB: {
                        R: 86,
                        G: 166,
                        B: 219
                    }
                },
                6013: {
                    RGB: {
                        R: 46,
                        G: 155,
                        B: 215
                    }
                },
                6014: {
                    RGB: {
                        R: 203,
                        G: 210,
                        B: 234
                    }
                },
                6015: {
                    RGB: {
                        R: 186,
                        G: 200,
                        B: 230
                    }
                },
                6016: {
                    RGB: {
                        R: 171,
                        G: 194,
                        B: 229
                    }
                },
                6017: {
                    RGB: {
                        R: 145,
                        G: 182,
                        B: 225
                    }
                },
                6018: {
                    RGB: {
                        R: 112,
                        G: 169,
                        B: 219
                    }
                },
                6019: {
                    RGB: {
                        R: 80,
                        G: 156,
                        B: 213
                    }
                },
                6020: {
                    RGB: {
                        R: 47,
                        G: 150,
                        B: 212
                    }
                },
                6021: {
                    RGB: {
                        R: 171,
                        G: 183,
                        B: 222
                    }
                },
                6022: {
                    RGB: {
                        R: 156,
                        G: 177,
                        B: 220
                    }
                },
                6023: {
                    RGB: {
                        R: 145,
                        G: 171,
                        B: 216
                    }
                },
                6024: {
                    RGB: {
                        R: 124,
                        G: 162,
                        B: 214
                    }
                },
                6025: {
                    RGB: {
                        R: 95,
                        G: 150,
                        B: 207
                    }
                },
                6026: {
                    RGB: {
                        R: 68,
                        G: 140,
                        B: 202
                    }
                },
                6027: {
                    RGB: {
                        R: 42,
                        G: 134,
                        B: 200
                    }
                },
                6028: {
                    RGB: {
                        R: 134,
                        G: 154,
                        B: 209
                    }
                },
                6029: {
                    RGB: {
                        R: 126,
                        G: 151,
                        B: 207
                    }
                },
                6030: {
                    RGB: {
                        R: 119,
                        G: 150,
                        B: 208
                    }
                },
                6031: {
                    RGB: {
                        R: 101,
                        G: 141,
                        B: 203
                    }
                },
                6032: {
                    RGB: {
                        R: 82,
                        G: 134,
                        B: 197
                    }
                },
                6033: {
                    RGB: {
                        R: 61,
                        G: 128,
                        B: 196
                    }
                },
                6034: {
                    RGB: {
                        R: 38,
                        G: 123,
                        B: 192
                    }
                },
                6035: {
                    RGB: {
                        R: 102,
                        G: 131,
                        B: 198
                    }
                },
                6036: {
                    RGB: {
                        R: 97,
                        G: 129,
                        B: 197
                    }
                },
                6037: {
                    RGB: {
                        R: 90,
                        G: 125,
                        B: 193
                    }
                },
                6038: {
                    RGB: {
                        R: 78,
                        G: 121,
                        B: 191
                    }
                },
                6039: {
                    RGB: {
                        R: 66,
                        G: 118,
                        B: 190
                    }
                },
                6040: {
                    RGB: {
                        R: 48,
                        G: 115,
                        B: 188
                    }
                },
                6041: {
                    RGB: {
                        R: 33,
                        G: 111,
                        B: 184
                    }
                },
                6042: {
                    RGB: {
                        R: 91,
                        G: 109,
                        B: 199
                    }
                },
                6043: {
                    RGB: {
                        R: 79,
                        G: 111,
                        B: 194
                    }
                },
                6044: {
                    RGB: {
                        R: 62,
                        G: 106,
                        B: 186
                    }
                },
                6045: {
                    RGB: {
                        R: 59,
                        G: 107,
                        B: 186
                    }
                },
                6046: {
                    RGB: {
                        R: 47,
                        G: 103,
                        B: 182
                    }
                },
                6047: {
                    RGB: {
                        R: 36,
                        G: 102,
                        B: 181
                    }
                },
                6048: {
                    RGB: {
                        R: 29,
                        G: 103,
                        B: 181
                    }
                },
                6049: {
                    RGB: {
                        R: 201,
                        G: 211,
                        B: 224
                    }
                },
                6050: {
                    RGB: {
                        R: 185,
                        G: 202,
                        B: 219
                    }
                },
                6051: {
                    RGB: {
                        R: 187,
                        G: 189,
                        B: 215
                    }
                },
                6052: {
                    RGB: {
                        R: 123,
                        G: 174,
                        B: 209
                    }
                },
                6053: {
                    RGB: {
                        R: 89,
                        G: 162,
                        B: 206
                    }
                },
                6054: {
                    RGB: {
                        R: 49,
                        G: 150,
                        B: 199
                    }
                },
                6055: {
                    RGB: {
                        R: 203,
                        G: 206,
                        B: 221
                    }
                },
                6056: {
                    RGB: {
                        R: 185,
                        G: 197,
                        B: 218
                    }
                },
                6057: {
                    RGB: {
                        R: 172,
                        G: 191,
                        B: 215
                    }
                },
                6058: {
                    RGB: {
                        R: 144,
                        G: 178,
                        B: 210
                    }
                },
                6059: {
                    RGB: {
                        R: 114,
                        G: 166,
                        B: 205
                    }
                },
                6060: {
                    RGB: {
                        R: 81,
                        G: 154,
                        B: 201
                    }
                },
                6061: {
                    RGB: {
                        R: 49,
                        G: 144,
                        B: 195
                    }
                },
                6062: {
                    RGB: {
                        R: 190,
                        G: 196,
                        B: 217
                    }
                },
                6063: {
                    RGB: {
                        R: 173,
                        G: 186,
                        B: 212
                    }
                },
                6064: {
                    RGB: {
                        R: 159,
                        G: 180,
                        B: 211
                    }
                },
                6065: {
                    RGB: {
                        R: 132,
                        G: 167,
                        B: 204
                    }
                },
                6066: {
                    RGB: {
                        R: 104,
                        G: 155,
                        B: 199
                    }
                },
                6067: {
                    RGB: {
                        R: 75,
                        G: 146,
                        B: 196
                    }
                },
                6068: {
                    RGB: {
                        R: 45,
                        G: 138,
                        B: 191
                    }
                },
                6069: {
                    RGB: {
                        R: 161,
                        G: 171,
                        B: 205
                    }
                },
                6070: {
                    RGB: {
                        R: 148,
                        G: 165,
                        B: 202
                    }
                },
                6071: {
                    RGB: {
                        R: 135,
                        G: 160,
                        B: 199
                    }
                },
                6072: {
                    RGB: {
                        R: 115,
                        G: 152,
                        B: 196
                    }
                },
                6073: {
                    RGB: {
                        R: 91,
                        G: 142,
                        B: 192
                    }
                },
                6074: {
                    RGB: {
                        R: 64,
                        G: 132,
                        B: 187
                    }
                },
                6075: {
                    RGB: {
                        R: 39,
                        G: 126,
                        B: 183
                    }
                },
                6076: {
                    RGB: {
                        R: 130,
                        G: 146,
                        B: 192
                    }
                },
                6077: {
                    RGB: {
                        R: 119,
                        G: 143,
                        B: 192
                    }
                },
                6078: {
                    RGB: {
                        R: 115,
                        G: 141,
                        B: 191
                    }
                },
                6079: {
                    RGB: {
                        R: 96,
                        G: 134,
                        B: 186
                    }
                },
                6080: {
                    RGB: {
                        R: 75,
                        G: 126,
                        B: 184
                    }
                },
                6081: {
                    RGB: {
                        R: 48,
                        G: 118,
                        B: 179
                    }
                },
                6082: {
                    RGB: {
                        R: 29,
                        G: 116,
                        B: 177
                    }
                },
                6083: {
                    RGB: {
                        R: 99,
                        G: 122,
                        B: 181
                    }
                },
                6084: {
                    RGB: {
                        R: 92,
                        G: 121,
                        B: 180
                    }
                },
                6085: {
                    RGB: {
                        R: 87,
                        G: 120,
                        B: 181
                    }
                },
                6086: {
                    RGB: {
                        R: 75,
                        G: 116,
                        B: 179
                    }
                },
                6087: {
                    RGB: {
                        R: 59,
                        G: 111,
                        B: 176
                    }
                },
                6088: {
                    RGB: {
                        R: 44,
                        G: 108,
                        B: 173
                    }
                },
                6089: {
                    RGB: {
                        R: 28,
                        G: 104,
                        B: 170
                    }
                },
                6090: {
                    RGB: {
                        R: 67,
                        G: 103,
                        B: 173
                    }
                },
                6091: {
                    RGB: {
                        R: 67,
                        G: 103,
                        B: 173
                    }
                },
                6092: {
                    RGB: {
                        R: 62,
                        G: 101,
                        B: 172
                    }
                },
                6093: {
                    RGB: {
                        R: 54,
                        G: 100,
                        B: 171
                    }
                },
                6094: {
                    RGB: {
                        R: 47,
                        G: 98,
                        B: 168
                    }
                },
                6095: {
                    RGB: {
                        R: 35,
                        G: 97,
                        B: 167
                    }
                },
                6096: {
                    RGB: {
                        R: 24,
                        G: 96,
                        B: 166
                    }
                },
                6097: {
                    RGB: {
                        R: 188,
                        G: 196,
                        B: 207
                    }
                },
                6098: {
                    RGB: {
                        R: 173,
                        G: 187,
                        B: 201
                    }
                },
                6099: {
                    RGB: {
                        R: 148,
                        G: 177,
                        B: 199
                    }
                },
                6100: {
                    RGB: {
                        R: 116,
                        G: 163,
                        B: 194
                    }
                },
                6101: {
                    RGB: {
                        R: 84,
                        G: 151,
                        B: 189
                    }
                },
                6102: {
                    RGB: {
                        R: 50,
                        G: 141,
                        B: 186
                    }
                },
                6103: {
                    RGB: {
                        R: 186,
                        G: 189,
                        B: 202
                    }
                },
                6104: {
                    RGB: {
                        R: 172,
                        G: 182,
                        B: 200
                    }
                },
                6105: {
                    RGB: {
                        R: 159,
                        G: 175,
                        B: 196
                    }
                },
                6106: {
                    RGB: {
                        R: 137,
                        G: 166,
                        B: 193
                    }
                },
                6107: {
                    RGB: {
                        R: 107,
                        G: 155,
                        B: 191
                    }
                },
                6108: {
                    RGB: {
                        R: 77,
                        G: 142,
                        B: 184
                    }
                },
                6109: {
                    RGB: {
                        R: 48,
                        G: 136,
                        B: 182
                    }
                },
                6110: {
                    RGB: {
                        R: 172,
                        G: 177,
                        B: 196
                    }
                },
                6111: {
                    RGB: {
                        R: 160,
                        G: 173,
                        B: 197
                    }
                },
                6112: {
                    RGB: {
                        R: 151,
                        G: 169,
                        B: 194
                    }
                },
                6113: {
                    RGB: {
                        R: 130,
                        G: 158,
                        B: 190
                    }
                },
                6114: {
                    RGB: {
                        R: 100,
                        G: 147,
                        B: 186
                    }
                },
                6115: {
                    RGB: {
                        R: 75,
                        G: 137,
                        B: 180
                    }
                },
                6116: {
                    RGB: {
                        R: 45,
                        G: 130,
                        B: 179
                    }
                },
                6117: {
                    RGB: {
                        R: 149,
                        G: 158,
                        B: 189
                    }
                },
                6118: {
                    RGB: {
                        R: 135,
                        G: 152,
                        B: 186
                    }
                },
                6119: {
                    RGB: {
                        R: 126,
                        G: 148,
                        B: 185
                    }
                },
                6120: {
                    RGB: {
                        R: 99,
                        G: 139,
                        B: 193
                    }
                },
                6121: {
                    RGB: {
                        R: 81,
                        G: 129,
                        B: 175
                    }
                },
                6122: {
                    RGB: {
                        R: 75,
                        G: 121,
                        B: 172
                    }
                },
                6123: {
                    RGB: {
                        R: 40,
                        G: 119,
                        B: 173
                    }
                },
                6124: {
                    RGB: {
                        R: 118,
                        G: 133,
                        B: 177
                    }
                },
                6125: {
                    RGB: {
                        R: 112,
                        G: 132,
                        B: 177
                    }
                },
                6126: {
                    RGB: {
                        R: 105,
                        G: 128,
                        B: 174
                    }
                },
                6127: {
                    RGB: {
                        R: 93,
                        G: 125,
                        B: 173
                    }
                },
                6128: {
                    RGB: {
                        R: 75,
                        G: 117,
                        B: 169
                    }
                },
                6129: {
                    RGB: {
                        R: 57,
                        G: 112,
                        B: 166
                    }
                },
                6130: {
                    RGB: {
                        R: 36,
                        G: 110,
                        B: 167
                    }
                },
                6131: {
                    RGB: {
                        R: 87,
                        G: 110,
                        B: 166
                    }
                },
                6132: {
                    RGB: {
                        R: 82,
                        G: 109,
                        B: 165
                    }
                },
                6133: {
                    RGB: {
                        R: 77,
                        G: 106,
                        B: 163
                    }
                },
                6134: {
                    RGB: {
                        R: 70,
                        G: 106,
                        B: 163
                    }
                },
                6135: {
                    RGB: {
                        R: 60,
                        G: 102,
                        B: 161
                    }
                },
                6136: {
                    RGB: {
                        R: 40,
                        G: 100,
                        B: 160
                    }
                },
                6137: {
                    RGB: {
                        R: 31,
                        G: 96,
                        B: 157
                    }
                },
                6138: {
                    RGB: {
                        R: 60,
                        G: 93,
                        B: 158
                    }
                },
                6139: {
                    RGB: {
                        R: 57,
                        G: 91,
                        B: 157
                    }
                },
                6140: {
                    RGB: {
                        R: 55,
                        G: 91,
                        B: 157
                    }
                },
                6141: {
                    RGB: {
                        R: 49,
                        G: 90,
                        B: 154
                    }
                },
                6142: {
                    RGB: {
                        R: 45,
                        G: 91,
                        B: 156
                    }
                },
                6143: {
                    RGB: {
                        R: 36,
                        G: 89,
                        B: 155
                    }
                },
                6144: {
                    RGB: {
                        R: 27,
                        G: 88,
                        B: 152
                    }
                },
                6145: {
                    RGB: {
                        R: 158,
                        G: 163,
                        B: 171
                    }
                },
                6146: {
                    RGB: {
                        R: 149,
                        G: 159,
                        B: 170
                    }
                },
                6147: {
                    RGB: {
                        R: 127,
                        G: 149,
                        B: 167
                    }
                },
                6148: {
                    RGB: {
                        R: 99,
                        G: 138,
                        B: 161
                    }
                },
                6149: {
                    RGB: {
                        R: 74,
                        G: 128,
                        B: 158
                    }
                },
                6150: {
                    RGB: {
                        R: 50,
                        G: 121,
                        B: 155
                    }
                },
                6151: {
                    RGB: {
                        R: 160,
                        G: 162,
                        B: 172
                    }
                },
                6152: {
                    RGB: {
                        R: 147,
                        G: 156,
                        B: 169
                    }
                },
                6153: {
                    RGB: {
                        R: 135,
                        G: 149,
                        B: 166
                    }
                },
                6154: {
                    RGB: {
                        R: 114,
                        G: 140,
                        B: 161
                    }
                },
                6155: {
                    RGB: {
                        R: 91,
                        G: 130,
                        B: 160
                    }
                },
                6156: {
                    RGB: {
                        R: 68,
                        G: 120,
                        B: 153
                    }
                },
                6157: {
                    RGB: {
                        R: 43,
                        G: 113,
                        B: 150
                    }
                },
                6158: {
                    RGB: {
                        R: 148,
                        G: 152,
                        B: 167
                    }
                },
                6159: {
                    RGB: {
                        R: 135,
                        G: 146,
                        B: 164
                    }
                },
                6160: {
                    RGB: {
                        R: 127,
                        G: 143,
                        B: 165
                    }
                },
                6161: {
                    RGB: {
                        R: 106,
                        G: 132,
                        B: 158
                    }
                },
                6162: {
                    RGB: {
                        R: 84,
                        G: 122,
                        B: 153
                    }
                },
                6163: {
                    RGB: {
                        R: 63,
                        G: 115,
                        B: 151
                    }
                },
                6164: {
                    RGB: {
                        R: 43,
                        G: 134,
                        B: 158
                    }
                },
                6165: {
                    RGB: {
                        R: 127,
                        G: 134,
                        B: 158
                    }
                },
                6166: {
                    RGB: {
                        R: 115,
                        G: 129,
                        B: 155
                    }
                },
                6167: {
                    RGB: {
                        R: 108,
                        G: 124,
                        B: 153
                    }
                },
                6168: {
                    RGB: {
                        R: 91,
                        G: 118,
                        B: 152
                    }
                },
                6169: {
                    RGB: {
                        R: 76,
                        G: 112,
                        B: 148
                    }
                },
                6170: {
                    RGB: {
                        R: 54,
                        G: 105,
                        B: 145
                    }
                },
                6171: {
                    RGB: {
                        R: 35,
                        G: 100,
                        B: 142
                    }
                },
                6172: {
                    RGB: {
                        R: 101,
                        G: 113,
                        B: 147
                    }
                },
                6173: {
                    RGB: {
                        R: 94,
                        G: 112,
                        B: 148
                    }
                },
                6174: {
                    RGB: {
                        R: 90,
                        G: 111,
                        B: 147
                    }
                },
                6175: {
                    RGB: {
                        R: 77,
                        G: 105,
                        B: 144
                    }
                },
                6176: {
                    RGB: {
                        R: 63,
                        G: 100,
                        B: 142
                    }
                },
                6177: {
                    RGB: {
                        R: 48,
                        G: 97,
                        B: 142
                    }
                },
                6178: {
                    RGB: {
                        R: 35,
                        G: 94,
                        B: 140
                    }
                },
                6179: {
                    RGB: {
                        R: 81,
                        G: 97,
                        B: 140
                    }
                },
                6180: {
                    RGB: {
                        R: 72,
                        G: 94,
                        B: 138
                    }
                },
                6181: {
                    RGB: {
                        R: 69,
                        G: 94,
                        B: 139
                    }
                },
                6182: {
                    RGB: {
                        R: 61,
                        G: 91,
                        B: 138
                    }
                },
                6183: {
                    RGB: {
                        R: 50,
                        G: 88,
                        B: 136
                    }
                },
                6184: {
                    RGB: {
                        R: 41,
                        G: 87,
                        B: 136
                    }
                },
                6185: {
                    RGB: {
                        R: 32,
                        G: 86,
                        B: 135
                    }
                },
                6186: {
                    RGB: {
                        R: 59,
                        G: 83,
                        B: 135
                    }
                },
                6187: {
                    RGB: {
                        R: 54,
                        G: 81,
                        B: 134
                    }
                },
                6188: {
                    RGB: {
                        R: 52,
                        G: 82,
                        B: 134
                    }
                },
                6189: {
                    RGB: {
                        R: 46,
                        G: 80,
                        B: 133
                    }
                },
                6190: {
                    RGB: {
                        R: 41,
                        G: 81,
                        B: 134
                    }
                },
                6191: {
                    RGB: {
                        R: 32,
                        G: 80,
                        B: 133
                    }
                },
                6192: {
                    RGB: {
                        R: 27,
                        G: 78,
                        B: 131
                    }
                },
                6193: {
                    RGB: {
                        R: 123,
                        G: 127,
                        B: 131
                    }
                },
                6194: {
                    RGB: {
                        R: 112,
                        G: 120,
                        B: 127
                    }
                },
                6195: {
                    RGB: {
                        R: 96,
                        G: 113,
                        B: 123
                    }
                },
                6196: {
                    RGB: {
                        R: 78,
                        G: 106,
                        B: 122
                    }
                },
                6197: {
                    RGB: {
                        R: 60,
                        G: 99,
                        B: 119
                    }
                },
                6198: {
                    RGB: {
                        R: 39,
                        G: 92,
                        B: 115
                    }
                },
                6199: {
                    RGB: {
                        R: 122,
                        G: 123,
                        B: 129
                    }
                },
                6200: {
                    RGB: {
                        R: 115,
                        G: 119,
                        B: 127
                    }
                },
                6201: {
                    RGB: {
                        R: 104,
                        G: 113,
                        B: 122
                    }
                },
                6202: {
                    RGB: {
                        R: 90,
                        G: 109,
                        B: 123
                    }
                },
                6203: {
                    RGB: {
                        R: 74,
                        G: 101,
                        B: 119
                    }
                },
                6204: {
                    RGB: {
                        R: 54,
                        G: 95,
                        B: 117
                    }
                },
                6205: {
                    RGB: {
                        R: 40,
                        G: 92,
                        B: 116
                    }
                },
                6206: {
                    RGB: {
                        R: 114,
                        G: 116,
                        B: 126
                    }
                },
                6207: {
                    RGB: {
                        R: 106,
                        G: 112,
                        B: 124
                    }
                },
                6208: {
                    RGB: {
                        R: 98,
                        G: 109,
                        B: 122
                    }
                },
                6209: {
                    RGB: {
                        R: 85,
                        G: 104,
                        B: 121
                    }
                },
                6210: {
                    RGB: {
                        R: 69,
                        G: 97,
                        B: 116
                    }
                },
                6211: {
                    RGB: {
                        R: 54,
                        G: 92,
                        B: 116
                    }
                },
                6212: {
                    RGB: {
                        R: 39,
                        G: 87,
                        B: 111
                    }
                },
                6213: {
                    RGB: {
                        R: 98,
                        G: 102,
                        B: 117
                    }
                },
                6214: {
                    RGB: {
                        R: 90,
                        G: 99,
                        B: 115
                    }
                },
                6215: {
                    RGB: {
                        R: 85,
                        G: 97,
                        B: 116
                    }
                },
                6216: {
                    RGB: {
                        R: 76,
                        G: 95,
                        B: 116
                    }
                },
                6217: {
                    RGB: {
                        R: 63,
                        G: 89,
                        B: 113
                    }
                },
                6218: {
                    RGB: {
                        R: 48,
                        G: 85,
                        B: 113
                    }
                },
                6219: {
                    RGB: {
                        R: 36,
                        G: 81,
                        B: 111
                    }
                },
                6220: {
                    RGB: {
                        R: 84,
                        G: 91,
                        B: 114
                    }
                },
                6221: {
                    RGB: {
                        R: 79,
                        G: 90,
                        B: 114
                    }
                },
                6222: {
                    RGB: {
                        R: 75,
                        G: 88,
                        B: 114
                    }
                },
                6223: {
                    RGB: {
                        R: 63,
                        G: 83,
                        B: 109
                    }
                },
                6224: {
                    RGB: {
                        R: 53,
                        G: 80,
                        B: 109
                    }
                },
                6225: {
                    RGB: {
                        R: 42,
                        G: 77,
                        B: 109
                    }
                },
                6226: {
                    RGB: {
                        R: 33,
                        G: 76,
                        B: 108
                    }
                },
                6227: {
                    RGB: {
                        R: 66,
                        G: 76,
                        B: 106
                    }
                },
                6228: {
                    RGB: {
                        R: 61,
                        G: 75,
                        B: 105
                    }
                },
                6229: {
                    RGB: {
                        R: 58,
                        G: 76,
                        B: 105
                    }
                },
                6230: {
                    RGB: {
                        R: 51,
                        G: 75,
                        B: 107
                    }
                },
                6231: {
                    RGB: {
                        R: 44,
                        G: 72,
                        B: 104
                    }
                },
                6232: {
                    RGB: {
                        R: 41,
                        G: 69,
                        B: 104
                    }
                },
                6233: {
                    RGB: {
                        R: 29,
                        G: 69,
                        B: 103
                    }
                },
                6234: {
                    RGB: {
                        R: 49,
                        G: 67,
                        B: 103
                    }
                },
                6235: {
                    RGB: {
                        R: 47,
                        G: 68,
                        B: 104
                    }
                },
                6236: {
                    RGB: {
                        R: 46,
                        G: 68,
                        B: 103
                    }
                },
                6237: {
                    RGB: {
                        R: 41,
                        G: 67,
                        B: 103
                    }
                },
                6238: {
                    RGB: {
                        R: 34,
                        G: 66,
                        B: 102
                    }
                },
                6239: {
                    RGB: {
                        R: 33,
                        G: 66,
                        B: 102
                    }
                },
                6240: {
                    RGB: {
                        R: 27,
                        G: 64,
                        B: 101
                    }
                },
                6241: {
                    RGB: {
                        R: 248,
                        G: 332,
                        B: 240
                    }
                },
                6242: {
                    RGB: {
                        R: 242,
                        G: 213,
                        B: 227
                    }
                },
                6243: {
                    RGB: {
                        R: 230,
                        G: 172,
                        B: 201
                    }
                },
                6244: {
                    RGB: {
                        R: 220,
                        G: 134,
                        B: 176
                    }
                },
                6245: {
                    RGB: {
                        R: 212,
                        G: 92,
                        B: 154
                    }
                },
                6246: {
                    RGB: {
                        R: 206,
                        G: 0,
                        B: 131
                    }
                },
                6247: {
                    RGB: {
                        R: 222,
                        G: 226,
                        B: 243
                    }
                },
                6248: {
                    RGB: {
                        R: 216,
                        G: 203,
                        B: 229
                    }
                },
                6249: {
                    RGB: {
                        R: 207,
                        G: 186,
                        B: 216
                    }
                },
                6250: {
                    RGB: {
                        R: 200,
                        G: 155,
                        B: 195
                    }
                },
                6251: {
                    RGB: {
                        R: 190,
                        G: 116,
                        B: 169
                    }
                },
                6252: {
                    RGB: {
                        R: 183,
                        G: 78,
                        B: 146
                    }
                },
                6253: {
                    RGB: {
                        R: 180,
                        G: 52,
                        B: 131
                    }
                },
                6254: {
                    RGB: {
                        R: 203,
                        G: 210,
                        B: 234
                    }
                },
                6255: {
                    RGB: {
                        R: 197,
                        G: 191,
                        B: 222
                    }
                },
                6256: {
                    RGB: {
                        R: 193,
                        G: 176,
                        B: 212
                    }
                },
                6257: {
                    RGB: {
                        R: 182,
                        G: 144,
                        B: 188
                    }
                },
                6258: {
                    RGB: {
                        R: 174,
                        G: 109,
                        B: 165
                    }
                },
                6259: {
                    RGB: {
                        R: 167,
                        G: 74,
                        B: 142
                    }
                },
                6260: {
                    RGB: {
                        R: 164,
                        G: 52,
                        B: 129
                    }
                },
                6261: {
                    RGB: {
                        R: 171,
                        G: 183,
                        B: 222
                    }
                },
                6262: {
                    RGB: {
                        R: 166,
                        G: 169,
                        B: 212
                    }
                },
                6263: {
                    RGB: {
                        R: 162,
                        G: 156,
                        B: 203
                    }
                },
                6264: {
                    RGB: {
                        R: 154,
                        G: 129,
                        B: 181
                    }
                },
                6265: {
                    RGB: {
                        R: 145,
                        G: 99,
                        B: 159
                    }
                },
                6266: {
                    RGB: {
                        R: 142,
                        G: 73,
                        B: 142
                    }
                },
                6267: {
                    RGB: {
                        R: 139,
                        G: 55,
                        B: 128
                    }
                },
                6268: {
                    RGB: {
                        R: 135,
                        G: 155,
                        B: 209
                    }
                },
                6269: {
                    RGB: {
                        R: 133,
                        G: 146,
                        B: 202
                    }
                },
                6270: {
                    RGB: {
                        R: 130,
                        G: 135,
                        B: 192
                    }
                },
                6271: {
                    RGB: {
                        R: 123,
                        G: 111,
                        B: 171
                    }
                },
                6272: {
                    RGB: {
                        R: 121,
                        G: 90,
                        B: 155
                    }
                },
                6273: {
                    RGB: {
                        R: 117,
                        G: 68,
                        B: 138
                    }
                },
                6274: {
                    RGB: {
                        R: 117,
                        G: 53,
                        B: 127
                    }
                },
                6275: {
                    RGB: {
                        R: 102,
                        G: 131,
                        B: 198
                    }
                },
                6276: {
                    RGB: {
                        R: 98,
                        G: 119,
                        B: 187
                    }
                },
                6277: {
                    RGB: {
                        R: 99,
                        G: 112,
                        B: 180
                    }
                },
                6278: {
                    RGB: {
                        R: 100,
                        G: 97,
                        B: 167
                    }
                },
                6279: {
                    RGB: {
                        R: 97,
                        G: 78,
                        B: 149
                    }
                },
                6280: {
                    RGB: {
                        R: 101,
                        G: 64,
                        B: 135
                    }
                },
                6281: {
                    RGB: {
                        R: 101,
                        G: 51,
                        B: 125
                    }
                },
                6282: {
                    RGB: {
                        R: 91,
                        G: 109,
                        B: 199
                    }
                },
                6283: {
                    RGB: {
                        R: 79,
                        G: 108,
                        B: 186
                    }
                },
                6284: {
                    RGB: {
                        R: 77,
                        G: 99,
                        B: 177
                    }
                },
                6285: {
                    RGB: {
                        R: 80,
                        G: 86,
                        B: 161
                    }
                },
                6286: {
                    RGB: {
                        R: 82,
                        G: 72,
                        B: 147
                    }
                },
                6287: {
                    RGB: {
                        R: 86,
                        G: 59,
                        B: 133
                    }
                },
                6288: {
                    RGB: {
                        R: 89,
                        G: 48,
                        B: 123
                    }
                },
                6289: {
                    RGB: {
                        R: 212,
                        G: 197,
                        B: 212
                    }
                },
                6290: {
                    RGB: {
                        R: 202,
                        G: 182,
                        B: 202
                    }
                },
                6291: {
                    RGB: {
                        R: 197,
                        G: 149,
                        B: 181
                    }
                },
                6292: {
                    RGB: {
                        R: 188,
                        G: 112,
                        B: 158
                    }
                },
                6293: {
                    RGB: {
                        R: 179,
                        G: 72,
                        B: 132
                    }
                },
                6294: {
                    RGB: {
                        R: 175,
                        G: 48,
                        B: 121
                    }
                },
                6295: {
                    RGB: {
                        R: 203,
                        G: 206,
                        B: 221
                    }
                },
                6296: {
                    RGB: {
                        R: 197,
                        G: 188,
                        B: 210
                    }
                },
                6297: {
                    RGB: {
                        R: 190,
                        G: 170,
                        B: 197
                    }
                },
                6298: {
                    RGB: {
                        R: 181,
                        G: 141,
                        B: 177
                    }
                },
                6299: {
                    RGB: {
                        R: 172,
                        G: 107,
                        B: 154
                    }
                },
                6300: {
                    RGB: {
                        R: 166,
                        G: 70,
                        B: 131
                    }
                },
                6301: {
                    RGB: {
                        R: 164,
                        G: 53,
                        B: 122
                    }
                },
                6302: {
                    RGB: {
                        R: 190,
                        G: 196,
                        B: 217
                    }
                },
                6303: {
                    RGB: {
                        R: 180,
                        G: 175,
                        B: 203
                    }
                },
                6304: {
                    RGB: {
                        R: 178,
                        G: 164,
                        B: 194
                    }
                },
                6305: {
                    RGB: {
                        R: 170,
                        G: 135,
                        B: 174
                    }
                },
                6306: {
                    RGB: {
                        R: 161,
                        G: 101,
                        B: 151
                    }
                },
                6307: {
                    RGB: {
                        R: 155,
                        G: 66,
                        B: 129
                    }
                },
                6308: {
                    RGB: {
                        R: 153,
                        G: 51,
                        B: 120
                    }
                },
                6309: {
                    RGB: {
                        R: 161,
                        G: 171,
                        B: 205
                    }
                },
                6310: {
                    RGB: {
                        R: 155,
                        G: 158,
                        B: 195
                    }
                },
                6311: {
                    RGB: {
                        R: 154,
                        G: 148,
                        B: 187
                    }
                },
                6312: {
                    RGB: {
                        R: 148,
                        G: 123,
                        B: 167
                    }
                },
                6313: {
                    RGB: {
                        R: 139,
                        G: 93,
                        B: 146
                    }
                },
                6314: {
                    RGB: {
                        R: 136,
                        G: 65,
                        B: 128
                    }
                },
                6315: {
                    RGB: {
                        R: 134,
                        G: 50,
                        B: 119
                    }
                },
                6316: {
                    RGB: {
                        R: 129,
                        G: 147,
                        B: 192
                    }
                },
                6317: {
                    RGB: {
                        R: 123,
                        G: 134,
                        B: 183
                    }
                },
                6318: {
                    RGB: {
                        R: 121,
                        G: 125,
                        B: 175
                    }
                },
                6319: {
                    RGB: {
                        R: 117,
                        G: 105,
                        B: 158
                    }
                },
                6320: {
                    RGB: {
                        R: 111,
                        G: 82,
                        B: 138
                    }
                },
                6321: {
                    RGB: {
                        R: 110,
                        G: 61,
                        B: 124
                    }
                },
                6322: {
                    RGB: {
                        R: 109,
                        G: 47,
                        B: 114
                    }
                },
                6323: {
                    RGB: {
                        R: 99,
                        G: 122,
                        B: 181
                    }
                },
                6324: {
                    RGB: {
                        R: 88,
                        G: 106,
                        B: 168
                    }
                },
                6325: {
                    RGB: {
                        R: 90,
                        G: 102,
                        B: 164
                    }
                },
                6326: {
                    RGB: {
                        R: 89,
                        G: 86,
                        B: 147
                    }
                },
                6327: {
                    RGB: {
                        R: 88,
                        G: 68,
                        B: 130
                    }
                },
                6328: {
                    RGB: {
                        R: 89,
                        G: 54,
                        B: 118
                    }
                },
                6329: {
                    RGB: {
                        R: 92,
                        G: 47,
                        B: 111
                    }
                },
                6330: {
                    RGB: {
                        R: 67,
                        G: 103,
                        B: 173
                    }
                },
                6331: {
                    RGB: {
                        R: 67,
                        G: 94,
                        B: 164
                    }
                },
                6332: {
                    RGB: {
                        R: 71,
                        G: 90,
                        B: 158
                    }
                },
                6333: {
                    RGB: {
                        R: 72,
                        G: 77,
                        B: 144
                    }
                },
                6334: {
                    RGB: {
                        R: 77,
                        G: 65,
                        B: 131
                    }
                },
                6335: {
                    RGB: {
                        R: 80,
                        G: 53,
                        B: 118
                    }
                },
                6336: {
                    RGB: {
                        R: 81,
                        G: 44,
                        B: 110
                    }
                },
                6337: {
                    RGB: {
                        R: 195,
                        G: 181,
                        B: 193
                    }
                },
                6338: {
                    RGB: {
                        R: 193,
                        G: 169,
                        B: 187
                    }
                },
                6339: {
                    RGB: {
                        R: 182,
                        G: 137,
                        B: 165
                    }
                },
                6340: {
                    RGB: {
                        R: 173,
                        G: 102,
                        B: 143
                    }
                },
                6341: {
                    RGB: {
                        R: 167,
                        G: 69,
                        B: 123
                    }
                },
                6342: {
                    RGB: {
                        R: 163,
                        G: 46,
                        B: 112
                    }
                },
                6343: {
                    RGB: {
                        R: 186,
                        G: 189,
                        B: 202
                    }
                },
                6344: {
                    RGB: {
                        R: 180,
                        G: 171,
                        B: 191
                    }
                },
                6345: {
                    RGB: {
                        R: 175,
                        G: 158,
                        B: 182
                    }
                },
                6346: {
                    RGB: {
                        R: 168,
                        G: 133,
                        B: 164
                    }
                },
                6347: {
                    RGB: {
                        R: 158,
                        G: 99,
                        B: 142
                    }
                },
                6348: {
                    RGB: {
                        R: 154,
                        G: 67,
                        B: 122
                    }
                },
                6349: {
                    RGB: {
                        R: 150,
                        G: 46,
                        B: 111
                    }
                },
                6350: {
                    RGB: {
                        R: 172,
                        G: 177,
                        B: 196
                    }
                },
                6351: {
                    RGB: {
                        R: 169,
                        G: 165,
                        B: 188
                    }
                },
                6352: {
                    RGB: {
                        R: 165,
                        G: 153,
                        B: 180
                    }
                },
                6353: {
                    RGB: {
                        R: 154,
                        G: 124,
                        B: 159
                    }
                },
                6354: {
                    RGB: {
                        R: 148,
                        G: 98,
                        B: 142
                    }
                },
                6355: {
                    RGB: {
                        R: 143,
                        G: 69,
                        B: 124
                    }
                },
                6356: {
                    RGB: {
                        R: 140,
                        G: 48,
                        B: 112
                    }
                },
                6357: {
                    RGB: {
                        R: 149,
                        G: 158,
                        B: 189
                    }
                },
                6358: {
                    RGB: {
                        R: 143,
                        G: 145,
                        B: 178
                    }
                },
                6359: {
                    RGB: {
                        R: 140,
                        G: 135,
                        B: 171
                    }
                },
                6360: {
                    RGB: {
                        R: 133,
                        G: 112,
                        B: 154
                    }
                },
                6361: {
                    RGB: {
                        R: 126,
                        G: 88,
                        B: 138
                    }
                },
                6362: {
                    RGB: {
                        R: 121,
                        G: 66,
                        B: 121
                    }
                },
                6363: {
                    RGB: {
                        R: 121,
                        G: 49,
                        B: 112
                    }
                },
                6364: {
                    RGB: {
                        R: 117,
                        G: 134,
                        B: 177
                    }
                },
                6365: {
                    RGB: {
                        R: 113,
                        G: 125,
                        B: 169
                    }
                },
                6366: {
                    RGB: {
                        R: 113,
                        G: 118,
                        B: 163
                    }
                },
                6367: {
                    RGB: {
                        R: 107,
                        G: 99,
                        B: 147
                    }
                },
                6368: {
                    RGB: {
                        R: 104,
                        G: 80,
                        B: 133
                    }
                },
                6369: {
                    RGB: {
                        R: 103,
                        G: 63,
                        B: 120
                    }
                },
                6370: {
                    RGB: {
                        R: 102,
                        G: 47,
                        B: 109
                    }
                },
                6371: {
                    RGB: {
                        R: 87,
                        G: 110,
                        B: 166
                    }
                },
                6372: {
                    RGB: {
                        R: 83,
                        G: 102,
                        B: 157
                    }
                },
                6373: {
                    RGB: {
                        R: 85,
                        G: 98,
                        B: 152
                    }
                },
                6374: {
                    RGB: {
                        R: 85,
                        G: 85,
                        B: 140
                    }
                },
                6375: {
                    RGB: {
                        R: 83,
                        G: 69,
                        B: 126
                    }
                },
                6376: {
                    RGB: {
                        R: 82,
                        G: 56,
                        B: 114
                    }
                },
                6377: {
                    RGB: {
                        R: 85,
                        G: 45,
                        B: 107
                    }
                },
                6378: {
                    RGB: {
                        R: 60,
                        G: 93,
                        B: 158
                    }
                },
                6379: {
                    RGB: {
                        R: 61,
                        G: 87,
                        B: 151
                    }
                },
                6380: {
                    RGB: {
                        R: 46,
                        G: 88,
                        B: 145
                    }
                },
                6381: {
                    RGB: {
                        R: 65,
                        G: 71,
                        B: 132
                    }
                },
                6382: {
                    RGB: {
                        R: 68,
                        G: 60,
                        B: 121
                    }
                },
                6383: {
                    RGB: {
                        R: 71,
                        G: 52,
                        B: 113
                    }
                },
                6384: {
                    RGB: {
                        R: 73,
                        G: 43,
                        B: 104
                    }
                },
                6385: {
                    RGB: {
                        R: 166,
                        G: 155,
                        B: 165
                    }
                },
                6386: {
                    RGB: {
                        R: 163,
                        G: 144,
                        B: 158
                    }
                },
                6387: {
                    RGB: {
                        R: 152,
                        G: 118,
                        B: 139
                    }
                },
                6388: {
                    RGB: {
                        R: 147,
                        G: 91,
                        B: 124
                    }
                },
                6389: {
                    RGB: {
                        R: 140,
                        G: 62,
                        B: 107
                    }
                },
                6390: {
                    RGB: {
                        R: 136,
                        G: 43,
                        B: 96
                    }
                },
                6391: {
                    RGB: {
                        R: 160,
                        G: 162,
                        B: 172
                    }
                },
                6392: {
                    RGB: {
                        R: 153,
                        G: 145,
                        B: 161
                    }
                },
                6393: {
                    RGB: {
                        R: 150,
                        G: 135,
                        B: 153
                    }
                },
                6394: {
                    RGB: {
                        R: 141,
                        G: 112,
                        B: 138
                    }
                },
                6395: {
                    RGB: {
                        R: 135,
                        G: 87,
                        B: 121
                    }
                },
                6396: {
                    RGB: {
                        R: 129,
                        G: 61,
                        B: 105
                    }
                },
                6397: {
                    RGB: {
                        R: 127,
                        G: 43,
                        B: 96
                    }
                },
                6398: {
                    RGB: {
                        R: 148,
                        G: 152,
                        B: 167
                    }
                },
                6399: {
                    RGB: {
                        R: 144,
                        G: 138,
                        B: 158
                    }
                },
                6400: {
                    RGB: {
                        R: 141,
                        G: 128,
                        B: 151
                    }
                },
                6401: {
                    RGB: {
                        R: 131,
                        G: 106,
                        B: 135
                    }
                },
                6402: {
                    RGB: {
                        R: 124,
                        G: 81,
                        B: 118
                    }
                },
                6403: {
                    RGB: {
                        R: 120,
                        G: 59,
                        B: 104
                    }
                },
                6404: {
                    RGB: {
                        R: 119,
                        G: 43,
                        B: 95
                    }
                },
                6405: {
                    RGB: {
                        R: 127,
                        G: 134,
                        B: 158
                    }
                },
                6406: {
                    RGB: {
                        R: 119,
                        G: 120,
                        B: 148
                    }
                },
                6407: {
                    RGB: {
                        R: 116,
                        G: 110,
                        B: 142
                    }
                },
                6408: {
                    RGB: {
                        R: 109,
                        G: 92,
                        B: 128
                    }
                },
                6409: {
                    RGB: {
                        R: 104,
                        G: 72,
                        B: 113
                    }
                },
                6410: {
                    RGB: {
                        R: 104,
                        G: 56,
                        B: 102
                    }
                },
                6411: {
                    RGB: {
                        R: 105,
                        G: 45,
                        B: 96
                    }
                },
                6412: {
                    RGB: {
                        R: 101,
                        G: 113,
                        B: 147
                    }
                },
                6413: {
                    RGB: {
                        R: 88,
                        G: 105,
                        B: 139
                    }
                },
                6414: {
                    RGB: {
                        R: 94,
                        G: 96,
                        B: 133
                    }
                },
                6415: {
                    RGB: {
                        R: 90,
                        G: 81,
                        B: 122
                    }
                },
                6416: {
                    RGB: {
                        R: 85,
                        G: 64,
                        B: 109
                    }
                },
                6417: {
                    RGB: {
                        R: 87,
                        G: 53,
                        B: 100
                    }
                },
                6418: {
                    RGB: {
                        R: 86,
                        G: 41,
                        B: 91
                    }
                },
                6419: {
                    RGB: {
                        R: 81,
                        G: 97,
                        B: 140
                    }
                },
                6420: {
                    RGB: {
                        R: 68,
                        G: 89,
                        B: 131
                    }
                },
                6421: {
                    RGB: {
                        R: 73,
                        G: 82,
                        B: 127
                    }
                },
                6422: {
                    RGB: {
                        R: 71,
                        G: 70,
                        B: 115
                    }
                },
                6423: {
                    RGB: {
                        R: 73,
                        G: 59,
                        B: 106
                    }
                },
                6424: {
                    RGB: {
                        R: 73,
                        G: 48,
                        B: 98
                    }
                },
                6425: {
                    RGB: {
                        R: 74,
                        G: 40,
                        B: 89
                    }
                },
                6426: {
                    RGB: {
                        R: 59,
                        G: 83,
                        B: 135
                    }
                },
                6427: {
                    RGB: {
                        R: 56,
                        G: 78,
                        B: 128
                    }
                },
                6428: {
                    RGB: {
                        R: 57,
                        G: 72,
                        B: 122
                    }
                },
                6429: {
                    RGB: {
                        R: 60,
                        G: 65,
                        B: 115
                    }
                },
                6430: {
                    RGB: {
                        R: 62,
                        G: 55,
                        B: 104
                    }
                },
                6431: {
                    RGB: {
                        R: 62,
                        G: 46,
                        B: 94
                    }
                },
                6432: {
                    RGB: {
                        R: 65,
                        G: 40,
                        B: 89
                    }
                },
                6433: {
                    RGB: {
                        R: 128,
                        G: 120,
                        B: 127
                    }
                },
                6434: {
                    RGB: {
                        R: 125,
                        G: 111,
                        B: 119
                    }
                },
                6435: {
                    RGB: {
                        R: 120,
                        G: 95,
                        B: 110
                    }
                },
                6436: {
                    RGB: {
                        R: 112,
                        G: 72,
                        B: 95
                    }
                },
                6437: {
                    RGB: {
                        R: 112,
                        G: 53,
                        B: 87
                    }
                },
                6438: {
                    RGB: {
                        R: 108,
                        G: 42,
                        B: 79
                    }
                },
                6439: {
                    RGB: {
                        R: 122,
                        G: 123,
                        B: 129
                    }
                },
                6440: {
                    RGB: {
                        R: 118,
                        G: 113,
                        B: 122
                    }
                },
                6441: {
                    RGB: {
                        R: 115,
                        G: 104,
                        B: 116
                    }
                },
                6442: {
                    RGB: {
                        R: 110,
                        G: 88,
                        B: 105
                    }
                },
                6443: {
                    RGB: {
                        R: 106,
                        G: 72,
                        B: 96
                    }
                },
                6444: {
                    RGB: {
                        R: 103,
                        G: 53,
                        B: 85
                    }
                },
                6445: {
                    RGB: {
                        R: 103,
                        G: 42,
                        B: 82
                    }
                },
                6446: {
                    RGB: {
                        R: 114,
                        G: 116,
                        B: 126
                    }
                },
                6447: {
                    RGB: {
                        R: 110,
                        G: 107,
                        B: 118
                    }
                },
                6448: {
                    RGB: {
                        R: 109,
                        G: 100,
                        B: 115
                    }
                },
                6449: {
                    RGB: {
                        R: 103,

                        G: 85,
                        B: 104
                    }
                },
                6450: {
                    RGB: {
                        R: 98,
                        G: 67,
                        B: 94
                    }
                },
                6451: {
                    RGB: {
                        R: 96,
                        G: 51,
                        B: 84
                    }
                },
                6452: {
                    RGB: {
                        R: 96,
                        G: 41,
                        B: 79
                    }
                },
                6453: {
                    RGB: {
                        R: 98,
                        G: 102,
                        B: 117
                    }
                },
                6454: {
                    RGB: {
                        R: 95,
                        G: 97,
                        B: 114
                    }
                },
                6455: {
                    RGB: {
                        R: 94,
                        G: 90,
                        B: 110
                    }
                },
                6456: {
                    RGB: {
                        R: 88,
                        G: 76,
                        B: 100
                    }
                },
                6457: {
                    RGB: {
                        R: 84,
                        G: 61,
                        B: 88
                    }
                },
                6458: {
                    RGB: {
                        R: 85,
                        G: 48,
                        B: 83
                    }
                },
                6459: {
                    RGB: {
                        R: 84,
                        G: 41,
                        B: 77
                    }
                },
                6460: {
                    RGB: {
                        R: 84,
                        G: 91,
                        B: 114
                    }
                },
                6461: {
                    RGB: {
                        R: 76,
                        G: 82,
                        B: 104
                    }
                },
                6462: {
                    RGB: {
                        R: 76,
                        G: 79,
                        B: 102
                    }
                },
                6463: {
                    RGB: {
                        R: 73,
                        G: 67,
                        B: 94
                    }
                },
                6464: {
                    RGB: {
                        R: 71,
                        G: 55,
                        B: 85
                    }
                },
                6465: {
                    RGB: {
                        R: 70,
                        G: 45,
                        B: 78
                    }
                },
                6466: {
                    RGB: {
                        R: 72,
                        G: 39,
                        B: 74
                    }
                },
                6467: {
                    RGB: {
                        R: 66,
                        G: 76,
                        B: 106
                    }
                },
                6468: {
                    RGB: {
                        R: 60,
                        G: 70,
                        B: 97
                    }
                },
                6469: {
                    RGB: {
                        R: 60,
                        G: 67,
                        B: 95
                    }
                },
                6470: {
                    RGB: {
                        R: 60,
                        G: 58,
                        B: 88
                    }
                },
                6471: {
                    RGB: {
                        R: 59,
                        G: 49,
                        B: 81
                    }
                },
                6472: {
                    RGB: {
                        R: 60,
                        G: 41,
                        B: 76
                    }
                },
                6473: {
                    RGB: {
                        R: 63,
                        G: 36,
                        B: 71
                    }
                },
                6474: {
                    RGB: {
                        R: 45,
                        G: 63,
                        B: 97
                    }
                },
                6475: {
                    RGB: {
                        R: 46,
                        G: 60,
                        B: 94
                    }
                },
                6476: {
                    RGB: {
                        R: 46,
                        G: 57,
                        B: 92
                    }
                },
                6477: {
                    RGB: {
                        R: 48,
                        G: 51,
                        B: 86
                    }
                },
                6478: {
                    RGB: {
                        R: 49,
                        G: 45,
                        B: 79
                    }
                },
                6479: {
                    RGB: {
                        R: 52,
                        G: 41,
                        B: 74
                    }
                },
                6480: {
                    RGB: {
                        R: 53,
                        G: 33,
                        B: 68
                    }
                },
                6481: {
                    RGB: {
                        R: 52,
                        G: 152,
                        B: 212
                    }
                },
                6482: {
                    RGB: {
                        R: 57,
                        G: 142,
                        B: 202
                    }
                },
                6483: {
                    RGB: {
                        R: 63,
                        G: 119,
                        B: 182
                    }
                },
                6484: {
                    RGB: {
                        R: 67,
                        G: 101,
                        B: 165
                    }
                },
                6485: {
                    RGB: {
                        R: 68,
                        G: 82,
                        B: 147
                    }
                },
                6486: {
                    RGB: {
                        R: 69,
                        G: 69,
                        B: 133
                    }
                },
                6487: {
                    RGB: {
                        R: 42,
                        G: 156,
                        B: 215
                    }
                },
                6488: {
                    RGB: {
                        R: 50,
                        G: 143,
                        B: 204
                    }
                },
                6489: {
                    RGB: {
                        R: 54,
                        G: 134,
                        B: 196
                    }
                },
                6490: {
                    RGB: {
                        R: 58,
                        G: 111,
                        B: 174
                    }
                },
                6491: {
                    RGB: {
                        R: 61,
                        G: 93,
                        B: 156
                    }
                },
                6492: {
                    RGB: {
                        R: 64,
                        G: 76,
                        B: 144
                    }
                },
                6493: {
                    RGB: {
                        R: 67,
                        G: 64,
                        B: 128
                    }
                },
                6494: {
                    RGB: {
                        R: 47,
                        G: 150,
                        B: 212
                    }
                },
                6495: {
                    RGB: {
                        R: 53,
                        G: 139,
                        B: 202
                    }
                },
                6496: {
                    RGB: {
                        R: 50,
                        G: 127,
                        B: 191
                    }
                },
                6497: {
                    RGB: {
                        R: 56,
                        G: 109,
                        B: 173
                    }
                },
                6498: {
                    RGB: {
                        R: 61,
                        G: 90,
                        B: 155
                    }
                },
                6499: {
                    RGB: {
                        R: 64,
                        G: 74,
                        B: 140
                    }
                },
                6500: {
                    RGB: {
                        R: 66,
                        G: 64,
                        B: 130
                    }
                },
                6501: {
                    RGB: {
                        R: 42,
                        G: 134,
                        B: 200
                    }
                },
                6502: {
                    RGB: {
                        R: 42,
                        G: 124,
                        B: 191
                    }
                },
                6503: {
                    RGB: {
                        R: 47,
                        G: 117,
                        B: 184
                    }
                },
                6504: {
                    RGB: {
                        R: 54,
                        G: 101,
                        B: 169
                    }
                },
                6505: {
                    RGB: {
                        R: 56,
                        G: 82,
                        B: 149
                    }
                },
                6506: {
                    RGB: {
                        R: 60,
                        G: 69,
                        B: 137
                    }
                },
                6507: {
                    RGB: {
                        R: 61,
                        G: 60,
                        B: 126
                    }
                },
                6508: {
                    RGB: {
                        R: 38,
                        G: 123,
                        B: 192
                    }
                },
                6509: {
                    RGB: {
                        R: 42,
                        G: 116,
                        B: 187
                    }
                },
                6510: {
                    RGB: {
                        R: 46,
                        G: 110,
                        B: 179
                    }
                },
                6511: {
                    RGB: {
                        R: 52,
                        G: 95,
                        B: 164
                    }
                },
                6512: {
                    RGB: {
                        R: 52,
                        G: 80,
                        B: 149
                    }
                },
                6513: {
                    RGB: {
                        R: 57,
                        G: 66,
                        B: 134
                    }
                },
                6514: {
                    RGB: {
                        R: 59,
                        G: 58,
                        B: 125
                    }
                },
                6515: {
                    RGB: {
                        R: 33,
                        G: 111,
                        B: 184
                    }
                },
                6516: {
                    RGB: {
                        R: 35,
                        G: 106,
                        B: 179
                    }
                },
                6517: {
                    RGB: {
                        R: 39,
                        G: 99,
                        B: 173
                    }
                },
                6518: {
                    RGB: {
                        R: 45,
                        G: 87,
                        B: 159
                    }
                },
                6519: {
                    RGB: {
                        R: 49,
                        G: 75,
                        B: 146
                    }
                },
                6520: {
                    RGB: {
                        R: 54,
                        G: 63,
                        B: 132
                    }
                },
                6521: {
                    RGB: {
                        R: 54,
                        G: 54,
                        B: 122
                    }
                },
                6522: {
                    RGB: {
                        R: 29,
                        G: 103,
                        B: 181
                    }
                },
                6523: {
                    RGB: {
                        R: 31,
                        G: 97,
                        B: 176
                    }
                },
                6524: {
                    RGB: {
                        R: 35,
                        G: 91,
                        B: 168
                    }
                },
                6525: {
                    RGB: {
                        R: 40,
                        G: 80,
                        B: 153
                    }
                },
                6526: {
                    RGB: {
                        R: 46,
                        G: 70,
                        B: 142
                    }
                },
                6527: {
                    RGB: {
                        R: 49,
                        G: 59,
                        B: 127
                    }
                },
                6528: {
                    RGB: {
                        R: 51,
                        G: 52,
                        B: 119
                    }
                },
                6529: {
                    RGB: {
                        R: 53,
                        G: 140,
                        B: 192
                    }
                },
                6530: {
                    RGB: {
                        R: 55,
                        G: 128,
                        B: 180
                    }
                },
                6531: {
                    RGB: {
                        R: 61,
                        G: 111,
                        B: 166
                    }
                },
                6532: {
                    RGB: {
                        R: 63,
                        G: 93,
                        B: 148
                    }
                },
                6533: {
                    RGB: {
                        R: 65,
                        G: 74,
                        B: 131
                    }
                },
                6534: {
                    RGB: {
                        R: 65,
                        G: 62,
                        B: 120
                    }
                },
                6535: {
                    RGB: {
                        R: 49,
                        G: 144,
                        B: 195
                    }
                },
                6536: {
                    RGB: {
                        R: 47,
                        G: 132,
                        B: 186
                    }
                },
                6537: {
                    RGB: {
                        R: 53,
                        G: 125,
                        B: 180
                    }
                },
                6538: {
                    RGB: {
                        R: 58,
                        G: 106,
                        B: 162
                    }
                },
                6539: {
                    RGB: {
                        R: 61,
                        G: 88,
                        B: 145
                    }
                },
                6540: {
                    RGB: {
                        R: 65,
                        G: 71,
                        B: 129
                    }
                },
                6541: {
                    RGB: {
                        R: 64,
                        G: 59,
                        B: 117
                    }
                },
                6542: {
                    RGB: {
                        R: 45,
                        G: 138,
                        B: 191
                    }
                },
                6543: {
                    RGB: {
                        R: 47,
                        G: 126,
                        B: 182
                    }
                },
                6544: {
                    RGB: {
                        R: 52,
                        G: 119,
                        B: 175
                    }
                },
                6545: {
                    RGB: {
                        R: 55,
                        G: 101,
                        B: 158
                    }
                },
                6546: {
                    RGB: {
                        R: 57,
                        G: 86,
                        B: 144
                    }
                },
                6547: {
                    RGB: {
                        R: 60,
                        G: 67,
                        B: 125
                    }
                },
                6548: {
                    RGB: {
                        R: 60,
                        G: 58,
                        B: 116
                    }
                },
                6549: {
                    RGB: {
                        R: 39,
                        G: 126,
                        B: 183
                    }
                },
                6550: {
                    RGB: {
                        R: 45,
                        G: 118,
                        B: 178
                    }
                },
                6551: {
                    RGB: {
                        R: 46,
                        G: 108,
                        B: 167
                    }
                },
                6552: {
                    RGB: {
                        R: 50,
                        G: 93,
                        B: 152
                    }
                },
                6553: {
                    RGB: {
                        R: 54,
                        G: 80,
                        B: 139
                    }
                },
                6554: {
                    RGB: {
                        R: 57,
                        G: 62,
                        B: 122
                    }
                },
                6555: {
                    RGB: {
                        R: 57,
                        G: 56,
                        B: 115
                    }
                },
                6556: {
                    RGB: {
                        R: 29,
                        G: 116,
                        B: 177
                    }
                },
                6557: {
                    RGB: {
                        R: 36,
                        G: 105,
                        B: 168
                    }
                },
                6558: {
                    RGB: {
                        R: 40,
                        G: 100,
                        B: 162
                    }
                },
                6559: {
                    RGB: {
                        R: 45,
                        G: 55,
                        B: 147
                    }
                },
                6560: {
                    RGB: {
                        R: 49,
                        G: 73,
                        B: 134
                    }
                },
                6561: {
                    RGB: {
                        R: 54,
                        G: 62,
                        B: 123
                    }
                },
                6562: {
                    RGB: {
                        R: 54,
                        G: 55,
                        B: 114
                    }
                },
                6563: {
                    RGB: {
                        R: 28,
                        G: 104,
                        B: 170
                    }
                },
                6564: {
                    RGB: {
                        R: 31,
                        G: 98,
                        B: 164
                    }
                },
                6565: {
                    RGB: {
                        R: 35,
                        G: 92,
                        B: 159
                    }
                },
                6566: {
                    RGB: {
                        R: 40,
                        G: 81,
                        B: 145
                    }
                },
                6567: {
                    RGB: {
                        R: 45,
                        G: 69,
                        B: 132
                    }
                },
                6568: {
                    RGB: {
                        R: 47,
                        G: 57,
                        B: 122
                    }
                },
                6569: {
                    RGB: {
                        R: 52,
                        G: 53,
                        B: 112
                    }
                },
                6570: {
                    RGB: {
                        R: 24,
                        G: 96,
                        B: 166
                    }
                },
                6571: {
                    RGB: {
                        R: 34,
                        G: 95,
                        B: 165
                    }
                },
                6572: {
                    RGB: {
                        R: 34,
                        G: 87,
                        B: 155
                    }
                },
                6573: {
                    RGB: {
                        R: 38,
                        G: 78,
                        B: 144
                    }
                },
                6574: {
                    RGB: {
                        R: 41,
                        G: 70,
                        B: 135
                    }
                },
                6575: {
                    RGB: {
                        R: 47,
                        G: 60,
                        B: 124
                    }
                },
                6576: {
                    RGB: {
                        R: 49,
                        G: 54,
                        B: 118
                    }
                },
                6577: {
                    RGB: {
                        R: 50,
                        G: 129,
                        B: 175
                    }
                },
                6578: {
                    RGB: {
                        R: 55,
                        G: 119,
                        B: 166
                    }
                },
                6579: {
                    RGB: {
                        R: 59,
                        G: 100,
                        B: 150
                    }
                },
                6580: {
                    RGB: {
                        R: 61,
                        G: 85,
                        B: 137
                    }
                },
                6581: {
                    RGB: {
                        R: 63,
                        G: 69,
                        B: 123
                    }
                },
                6582: {
                    RGB: {
                        R: 63,
                        G: 57,
                        B: 110
                    }
                },
                6583: {
                    RGB: {
                        R: 48,
                        G: 136,
                        B: 182
                    }
                },
                6584: {
                    RGB: {
                        R: 46,
                        G: 123,
                        B: 172
                    }
                },
                6585: {
                    RGB: {
                        R: 52,
                        G: 114,
                        B: 163
                    }
                },
                6586: {
                    RGB: {
                        R: 57,
                        G: 98,
                        B: 149
                    }
                },
                6587: {
                    RGB: {
                        R: 61,
                        G: 83,
                        B: 136
                    }
                },
                6588: {
                    RGB: {
                        R: 60,
                        G: 65,
                        B: 118
                    }
                },
                6589: {
                    RGB: {
                        R: 62,
                        G: 58,
                        B: 112
                    }
                },
                6590: {
                    RGB: {
                        R: 45,
                        G: 130,
                        B: 179
                    }
                },
                6591: {
                    RGB: {
                        R: 48,
                        G: 120,
                        B: 170
                    }
                },
                6592: {
                    RGB: {
                        R: 50,
                        G: 111,
                        B: 162
                    }
                },
                6593: {
                    RGB: {
                        R: 54,
                        G: 96,
                        B: 148
                    }
                },
                6594: {
                    RGB: {
                        R: 53,
                        G: 80,
                        B: 133
                    }
                },
                6595: {
                    RGB: {
                        R: 59,
                        G: 66,
                        B: 121
                    }
                },
                6596: {
                    RGB: {
                        R: 58,
                        G: 56,
                        B: 111
                    }
                },
                6597: {
                    RGB: {
                        R: 40,
                        G: 119,
                        B: 173
                    }
                },
                6598: {
                    RGB: {
                        R: 42,
                        G: 109,
                        B: 164
                    }
                },
                6599: {
                    RGB: {
                        R: 47,
                        G: 102,
                        B: 157
                    }
                },
                6600: {
                    RGB: {
                        R: 48,
                        G: 87,
                        B: 143
                    }
                },
                6601: {
                    RGB: {
                        R: 52,
                        G: 73,
                        B: 129
                    }
                },
                6602: {
                    RGB: {
                        R: 55,
                        G: 60,
                        B: 115
                    }
                },
                6603: {
                    RGB: {
                        R: 55,
                        G: 55,
                        B: 110
                    }
                },
                6604: {
                    RGB: {
                        R: 36,
                        G: 110,
                        B: 167
                    }
                },
                6605: {
                    RGB: {
                        R: 39,
                        G: 101,
                        B: 159
                    }
                },
                6606: {
                    RGB: {
                        R: 42,
                        G: 95,
                        B: 152
                    }
                },
                6607: {
                    RGB: {
                        R: 46,
                        G: 83,
                        B: 140
                    }
                },
                6608: {
                    RGB: {
                        R: 49,
                        G: 71,
                        B: 128
                    }
                },
                6609: {
                    RGB: {
                        R: 50,
                        G: 57,
                        B: 113
                    }
                },
                6610: {
                    RGB: {
                        R: 51,
                        G: 50,
                        B: 106
                    }
                },
                6611: {
                    RGB: {
                        R: 31,
                        G: 96,
                        B: 157
                    }
                },
                6612: {
                    RGB: {
                        R: 33,
                        G: 90,
                        B: 151
                    }
                },
                6613: {
                    RGB: {
                        R: 38,
                        G: 84,
                        B: 145
                    }
                },
                6614: {
                    RGB: {
                        R: 39,
                        G: 73,
                        B: 133
                    }
                },
                6615: {
                    RGB: {
                        R: 45,
                        G: 64,
                        B: 122
                    }
                },
                6616: {
                    RGB: {
                        R: 46,
                        G: 52,
                        B: 109
                    }
                },
                6617: {
                    RGB: {
                        R: 47,
                        G: 47,
                        B: 102
                    }
                },
                6618: {
                    RGB: {
                        R: 27,
                        G: 88,
                        B: 152
                    }
                },
                6619: {
                    RGB: {
                        R: 32,
                        G: 85,
                        B: 148
                    }
                },
                6620: {
                    RGB: {
                        R: 33,
                        G: 79,
                        B: 143
                    }
                },
                6621: {
                    RGB: {
                        R: 37,
                        G: 68,
                        B: 129
                    }
                },
                6622: {
                    RGB: {
                        R: 41,
                        G: 59,
                        B: 119
                    }
                },
                6623: {
                    RGB: {
                        R: 44,
                        G: 51,
                        B: 107
                    }
                },
                6624: {
                    RGB: {
                        R: 46,
                        G: 47,
                        B: 103
                    }
                },
                6625: {
                    RGB: {
                        R: 49,
                        G: 112,
                        B: 149
                    }
                },
                6626: {
                    RGB: {
                        R: 50,
                        G: 103,
                        B: 141
                    }
                },
                6627: {
                    RGB: {
                        R: 53,
                        G: 85,
                        B: 126
                    }
                },
                6628: {
                    RGB: {
                        R: 55,
                        G: 73,
                        B: 116
                    }
                },
                6629: {
                    RGB: {
                        R: 55,
                        G: 59,
                        B: 104
                    }
                },
                6630: {
                    RGB: {
                        R: 56,
                        G: 52,
                        B: 96
                    }
                },
                6631: {
                    RGB: {
                        R: 43,
                        G: 113,
                        B: 150
                    }
                },
                6632: {
                    RGB: {
                        R: 46,
                        G: 107,
                        B: 145
                    }
                },
                6633: {
                    RGB: {
                        R: 44,
                        G: 98,
                        B: 139
                    }
                },
                6634: {
                    RGB: {
                        R: 48,
                        G: 83,
                        B: 126
                    }
                },
                6635: {
                    RGB: {
                        R: 51,
                        G: 69,
                        B: 112
                    }
                },
                6636: {
                    RGB: {
                        R: 54,
                        G: 59,
                        B: 104
                    }
                },
                6637: {
                    RGB: {
                        R: 54,
                        G: 50,
                        B: 94
                    }
                },
                6638: {
                    RGB: {
                        R: 43,
                        G: 110,
                        B: 149
                    }
                },
                6639: {
                    RGB: {
                        R: 43,
                        G: 101,
                        B: 142
                    }
                },
                6640: {
                    RGB: {
                        R: 42,
                        G: 92,
                        B: 133
                    }
                },
                6641: {
                    RGB: {
                        R: 49,
                        G: 80,
                        B: 124
                    }
                },
                6642: {
                    RGB: {
                        R: 50,
                        G: 69,
                        B: 114
                    }
                },
                6643: {
                    RGB: {
                        R: 51,
                        G: 57,
                        B: 103
                    }
                },
                6644: {
                    RGB: {
                        R: 52,
                        G: 51,
                        B: 97
                    }
                },
                6645: {
                    RGB: {
                        R: 35,
                        G: 100,
                        B: 142
                    }
                },
                6646: {
                    RGB: {
                        R: 39,
                        G: 94,
                        B: 137
                    }
                },
                6647: {
                    RGB: {
                        R: 41,
                        G: 87,
                        B: 132
                    }
                },
                6648: {
                    RGB: {
                        R: 44,
                        G: 76,
                        B: 122
                    }
                },
                6649: {
                    RGB: {
                        R: 46,
                        G: 65,
                        B: 110
                    }
                },
                6650: {
                    RGB: {
                        R: 48,
                        G: 53,
                        B: 99
                    }
                },
                6651: {
                    RGB: {
                        R: 49,
                        G: 47,
                        B: 92
                    }
                },
                6652: {
                    RGB: {
                        R: 35,
                        G: 94,
                        B: 140
                    }
                },
                6653: {
                    RGB: {
                        R: 36,
                        G: 88,
                        B: 135
                    }
                },
                6654: {
                    RGB: {
                        R: 37,
                        G: 80,
                        B: 127
                    }
                },
                6655: {
                    RGB: {
                        R: 43,
                        G: 71,
                        B: 118
                    }
                },
                6656: {
                    RGB: {
                        R: 43,
                        G: 60,
                        B: 107
                    }
                },
                6657: {
                    RGB: {
                        R: 45,
                        G: 51,
                        B: 98
                    }
                },
                6658: {
                    RGB: {
                        R: 46,
                        G: 45,
                        B: 91
                    }
                },
                6659: {
                    RGB: {
                        R: 32,
                        G: 86,
                        B: 135
                    }
                },
                6660: {
                    RGB: {
                        R: 31,
                        G: 81,
                        B: 130
                    }
                },
                6661: {
                    RGB: {
                        R: 34,
                        G: 75,
                        B: 124
                    }
                },
                6662: {
                    RGB: {
                        R: 40,
                        G: 66,

                        B: 115
                    }
                },
                6663: {
                    RGB: {
                        R: 42,
                        G: 57,
                        B: 105
                    }
                },
                6664: {
                    RGB: {
                        R: 43,
                        G: 49,
                        B: 96
                    }
                },
                6665: {
                    RGB: {
                        R: 44,
                        G: 43,
                        B: 89
                    }
                },
                6666: {
                    RGB: {
                        R: 58,
                        G: 71,
                        B: 131
                    }
                },
                6667: {
                    RGB: {
                        R: 30,
                        G: 75,
                        B: 127
                    }
                },
                6668: {
                    RGB: {
                        R: 31,
                        G: 70,
                        B: 122
                    }
                },
                6669: {
                    RGB: {
                        R: 36,
                        G: 62,
                        B: 111
                    }
                },
                6670: {
                    RGB: {
                        R: 38,
                        G: 53,
                        B: 101
                    }
                },
                6671: {
                    RGB: {
                        R: 42,
                        G: 47,
                        B: 94
                    }
                },
                6672: {
                    RGB: {
                        R: 42,
                        G: 42,
                        B: 86
                    }
                },
                6673: {
                    RGB: {
                        R: 40,
                        G: 86,
                        B: 111
                    }
                },
                6674: {
                    RGB: {
                        R: 41,
                        G: 81,
                        B: 107
                    }
                },
                6675: {
                    RGB: {
                        R: 43,
                        G: 69,
                        B: 99
                    }
                },
                6676: {
                    RGB: {
                        R: 46,
                        G: 60,
                        B: 92
                    }
                },
                6677: {
                    RGB: {
                        R: 46,
                        G: 52,
                        B: 85
                    }
                },
                6678: {
                    RGB: {
                        R: 46,
                        G: 44,
                        B: 75
                    }
                },
                6679: {
                    RGB: {
                        R: 40,
                        G: 92,
                        B: 116
                    }
                },
                6680: {
                    RGB: {
                        R: 39,
                        G: 84,
                        B: 110
                    }
                },
                6681: {
                    RGB: {
                        R: 43,
                        G: 80,
                        B: 108
                    }
                },
                6682: {
                    RGB: {
                        R: 42,
                        G: 67,
                        B: 96
                    }
                },
                6683: {
                    RGB: {
                        R: 45,
                        G: 58,
                        B: 89
                    }
                },
                6684: {
                    RGB: {
                        R: 45,
                        G: 49,
                        B: 82
                    }
                },
                6685: {
                    RGB: {
                        R: 46,
                        G: 44,
                        B: 75
                    }
                },
                6686: {
                    RGB: {
                        R: 39,
                        G: 87,
                        B: 111
                    }
                },
                6687: {
                    RGB: {
                        R: 39,
                        G: 81,
                        B: 110
                    }
                },
                6688: {
                    RGB: {
                        R: 41,
                        G: 78,
                        B: 107
                    }
                },
                6689: {
                    RGB: {
                        R: 41,
                        G: 67,
                        B: 98
                    }
                },
                6690: {
                    RGB: {
                        R: 42,
                        G: 56,
                        B: 88
                    }
                },
                6691: {
                    RGB: {
                        R: 45,
                        G: 49,
                        B: 82
                    }
                },
                6692: {
                    RGB: {
                        R: 43,
                        G: 42,
                        B: 74
                    }
                },
                6693: {
                    RGB: {
                        R: 36,
                        G: 81,
                        B: 111
                    }
                },
                6694: {
                    RGB: {
                        R: 36,
                        G: 76,
                        B: 106
                    }
                },
                6695: {
                    RGB: {
                        R: 38,
                        G: 73,
                        B: 105
                    }
                },
                6696: {
                    RGB: {
                        R: 38,
                        G: 60,
                        B: 92
                    }
                },
                6697: {
                    RGB: {
                        R: 41,
                        G: 54,
                        B: 87
                    }
                },
                6698: {
                    RGB: {
                        R: 41,
                        G: 46,
                        B: 78
                    }
                },
                6699: {
                    RGB: {
                        R: 43,
                        G: 42,
                        B: 74
                    }
                },
                6700: {
                    RGB: {
                        R: 33,
                        G: 76,
                        B: 108
                    }
                },
                6701: {
                    RGB: {
                        R: 35,
                        G: 71,
                        B: 104
                    }
                },
                6702: {
                    RGB: {
                        R: 35,
                        G: 66,
                        B: 99
                    }
                },
                6703: {
                    RGB: {
                        R: 37,
                        G: 57,
                        B: 92
                    }
                },
                6704: {
                    RGB: {
                        R: 39,
                        G: 52,
                        B: 86
                    }
                },
                6705: {
                    RGB: {
                        R: 42,
                        G: 45,
                        B: 79
                    }
                },
                6706: {
                    RGB: {
                        R: 41,
                        G: 40,
                        B: 72
                    }
                },
                6707: {
                    RGB: {
                        R: 29,
                        G: 69,
                        B: 103
                    }
                },
                6708: {
                    RGB: {
                        R: 31,
                        G: 64,
                        B: 99
                    }
                },
                6709: {
                    RGB: {
                        R: 35,
                        G: 63,
                        B: 99
                    }
                },
                6710: {
                    RGB: {
                        R: 35,
                        G: 55,
                        B: 92
                    }
                },
                6711: {
                    RGB: {
                        R: 37,
                        G: 49,
                        B: 86
                    }
                },
                6712: {
                    RGB: {
                        R: 40,
                        G: 43,
                        B: 78
                    }
                },
                6713: {
                    RGB: {
                        R: 41,
                        G: 40,
                        B: 72
                    }
                },
                6714: {
                    RGB: {
                        R: 27,
                        G: 64,
                        B: 101
                    }
                },
                6715: {
                    RGB: {
                        R: 30,
                        G: 61,
                        B: 98
                    }
                },
                6716: {
                    RGB: {
                        R: 31,
                        G: 59,
                        B: 95
                    }
                },
                6717: {
                    RGB: {
                        R: 33,
                        G: 53,
                        B: 89
                    }
                },
                6718: {
                    RGB: {
                        R: 35,
                        G: 48,
                        B: 83
                    }
                },
                6719: {
                    RGB: {
                        R: 37,
                        G: 42,
                        B: 76
                    }
                },
                6720: {
                    RGB: {
                        R: 37,
                        G: 37,
                        B: 69
                    }
                },
                6721: {
                    RGB: {
                        R: 180,
                        G: 53,
                        B: 134
                    }
                },
                6722: {
                    RGB: {
                        R: 169,
                        G: 58,
                        B: 135
                    }
                },
                6723: {
                    RGB: {
                        R: 144,
                        G: 61,
                        B: 134
                    }
                },
                6724: {
                    RGB: {
                        R: 119,
                        G: 67,
                        B: 136
                    }
                },
                6725: {
                    RGB: {
                        R: 95,
                        G: 68,
                        B: 135
                    }
                },
                6726: {
                    RGB: {
                        R: 73,
                        G: 67,
                        B: 133
                    }
                },
                6727: {
                    RGB: {
                        R: 180,
                        G: 52,
                        B: 131
                    }
                },
                6728: {
                    RGB: {
                        R: 166,
                        G: 54,
                        B: 131
                    }
                },
                6729: {
                    RGB: {
                        R: 155,
                        G: 58,
                        B: 131
                    }
                },
                6730: {
                    RGB: {
                        R: 134,
                        G: 62,
                        B: 132
                    }
                },
                6731: {
                    RGB: {
                        R: 109,
                        G: 62,
                        B: 130
                    }
                },
                6732: {
                    RGB: {
                        R: 88,
                        G: 66,
                        B: 132
                    }
                },
                6733: {
                    RGB: {
                        R: 69,
                        G: 66,
                        B: 131
                    }
                },
                6734: {
                    RGB: {
                        R: 164,
                        G: 52,
                        B: 129
                    }
                },
                6735: {
                    RGB: {
                        R: 153,
                        G: 53,
                        B: 129
                    }
                },
                6736: {
                    RGB: {
                        R: 143,
                        G: 55,
                        B: 128
                    }
                },
                6737: {
                    RGB: {
                        R: 125,
                        G: 61,
                        B: 131
                    }
                },
                6738: {
                    RGB: {
                        R: 105,
                        G: 61,
                        B: 131
                    }
                },
                6739: {
                    RGB: {
                        R: 85,
                        G: 64,
                        B: 131
                    }
                },
                6740: {
                    RGB: {
                        R: 66,
                        G: 64,
                        B: 130
                    }
                },
                6741: {
                    RGB: {
                        R: 139,
                        G: 55,
                        B: 128
                    }
                },
                6742: {
                    RGB: {
                        R: 129,
                        G: 53,
                        B: 127
                    }
                },
                6743: {
                    RGB: {
                        R: 124,
                        G: 56,
                        B: 129
                    }
                },
                6744: {
                    RGB: {
                        R: 108,
                        G: 58,
                        B: 129
                    }
                },
                6745: {
                    RGB: {
                        R: 91,
                        G: 59,
                        B: 129
                    }
                },
                6746: {
                    RGB: {
                        R: 76,
                        G: 62,
                        B: 130
                    }
                },
                6747: {
                    RGB: {
                        R: 61,
                        G: 60,
                        B: 128
                    }
                },
                6748: {
                    RGB: {
                        R: 117,
                        G: 53,
                        B: 127
                    }
                },
                6749: {
                    RGB: {
                        R: 111,
                        G: 55,
                        B: 128
                    }
                },
                6750: {
                    RGB: {
                        R: 104,
                        G: 53,
                        B: 126
                    }
                },
                6751: {
                    RGB: {
                        R: 91,
                        G: 55,
                        B: 127
                    }
                },
                6752: {
                    RGB: {
                        R: 79,
                        G: 57,
                        B: 126
                    }
                },
                6753: {
                    RGB: {
                        R: 66,
                        G: 58,
                        B: 126
                    }
                },
                6754: {
                    RGB: {
                        R: 57,
                        G: 58,
                        B: 127
                    }
                },
                6755: {
                    RGB: {
                        R: 101,
                        G: 51,
                        B: 125
                    }
                },
                6756: {
                    RGB: {
                        R: 92,
                        G: 50,
                        B: 123
                    }
                },
                6757: {
                    RGB: {
                        R: 90,
                        G: 52,
                        B: 124
                    }
                },
                6758: {
                    RGB: {
                        R: 79,
                        G: 53,
                        B: 122
                    }
                },
                6759: {
                    RGB: {
                        R: 65,
                        G: 54,
                        B: 129
                    }
                },
                6760: {
                    RGB: {
                        R: 61,
                        G: 56,
                        B: 125
                    }
                },
                6761: {
                    RGB: {
                        R: 49,
                        G: 53,
                        B: 121
                    }
                },
                6762: {
                    RGB: {
                        R: 89,
                        G: 48,
                        B: 123
                    }
                },
                6763: {
                    RGB: {
                        R: 82,
                        G: 50,
                        B: 122
                    }
                },
                6764: {
                    RGB: {
                        R: 78,
                        G: 49,
                        B: 121
                    }
                },
                6765: {
                    RGB: {
                        R: 73,
                        G: 53,
                        B: 124
                    }
                },
                6766: {
                    RGB: {
                        R: 64,
                        G: 52,
                        B: 121
                    }
                },
                6767: {
                    RGB: {
                        R: 56,
                        G: 53,
                        B: 122
                    }
                },
                6768: {
                    RGB: {
                        R: 51,
                        G: 52,
                        B: 119
                    }
                },
                6769: {
                    RGB: {
                        R: 162,
                        G: 54,
                        B: 124
                    }
                },
                6770: {
                    RGB: {
                        R: 152,
                        G: 56,
                        B: 124
                    }
                },
                6771: {
                    RGB: {
                        R: 131,
                        G: 60,
                        B: 125
                    }
                },
                6772: {
                    RGB: {
                        R: 110,
                        G: 61,
                        B: 124
                    }
                },
                6773: {
                    RGB: {
                        R: 86,
                        G: 64,
                        B: 125
                    }
                },
                6774: {
                    RGB: {
                        R: 65,
                        G: 62,
                        B: 120
                    }
                },
                6775: {
                    RGB: {
                        R: 164,
                        G: 53,
                        B: 122
                    }
                },
                6776: {
                    RGB: {
                        R: 151,
                        G: 52,
                        B: 121
                    }
                },
                6777: {
                    RGB: {
                        R: 143,
                        G: 56,
                        B: 123
                    }
                },
                6778: {
                    RGB: {
                        R: 123,
                        G: 59,
                        B: 123
                    }
                },
                6779: {
                    RGB: {
                        R: 103,
                        G: 59,
                        B: 122
                    }
                },
                6780: {
                    RGB: {
                        R: 82,
                        G: 63,
                        B: 124
                    }
                },
                6781: {
                    RGB: {
                        R: 65,
                        G: 65,
                        B: 125
                    }
                },
                6782: {
                    RGB: {
                        R: 153,
                        G: 51,
                        B: 120
                    }
                },
                6783: {
                    RGB: {
                        R: 142,
                        G: 52,
                        B: 121
                    }
                },
                6784: {
                    RGB: {
                        R: 134,
                        G: 53,
                        B: 120
                    }
                },
                6785: {
                    RGB: {
                        R: 115,
                        G: 55,
                        B: 120
                    }
                },
                6786: {
                    RGB: {
                        R: 99,
                        G: 58,
                        B: 121
                    }
                },
                6787: {
                    RGB: {
                        R: 80,
                        G: 61,
                        B: 121
                    }
                },
                6788: {
                    RGB: {
                        R: 62,
                        G: 60,
                        B: 120
                    }
                },
                6789: {
                    RGB: {
                        R: 134,
                        G: 50,
                        B: 119
                    }
                },
                6790: {
                    RGB: {
                        R: 121,
                        G: 49,

                        B: 116
                    }
                },
                6791: {
                    RGB: {
                        R: 115,
                        G: 50,
                        B: 118
                    }
                },
                6792: {
                    RGB: {
                        R: 100,
                        G: 53,
                        B: 117
                    }
                },
                6793: {
                    RGB: {
                        R: 87,
                        G: 56,
                        B: 118
                    }
                },
                6794: {
                    RGB: {
                        R: 71,
                        G: 56,
                        B: 117
                    }
                },
                6795: {
                    RGB: {
                        R: 59,
                        G: 59,
                        B: 119
                    }
                },
                6796: {
                    RGB: {
                        R: 109,
                        G: 47,
                        B: 114
                    }
                },
                6797: {
                    RGB: {
                        R: 104,
                        G: 48,
                        B: 116
                    }
                },
                6798: {
                    RGB: {
                        R: 96,
                        G: 48,
                        B: 114
                    }
                },
                6799: {
                    RGB: {
                        R: 80,
                        G: 53,
                        B: 130
                    }
                },
                6800: {
                    RGB: {
                        R: 77,
                        G: 54,
                        B: 117
                    }
                },
                6801: {
                    RGB: {
                        R: 63,
                        G: 53,
                        B: 115
                    }
                },
                6802: {
                    RGB: {
                        R: 53,
                        G: 55,
                        B: 116
                    }
                },
                6803: {
                    RGB: {
                        R: 92,
                        G: 47,
                        B: 111
                    }
                },
                6804: {
                    RGB: {
                        R: 85,
                        G: 45,
                        B: 109
                    }
                },
                6805: {
                    RGB: {
                        R: 83,
                        G: 47,
                        B: 111
                    }
                },
                6806: {
                    RGB: {
                        R: 73,
                        G: 47,
                        B: 109
                    }
                },
                6807: {
                    RGB: {
                        R: 63,
                        G: 50,
                        B: 111
                    }
                },
                6808: {
                    RGB: {
                        R: 56,
                        G: 50,
                        B: 111
                    }
                },
                6809: {
                    RGB: {
                        R: 50,
                        G: 50,
                        B: 111
                    }
                },
                6810: {
                    RGB: {
                        R: 81,
                        G: 44,
                        B: 110
                    }
                },
                6811: {
                    RGB: {
                        R: 75,
                        G: 43,
                        B: 108
                    }
                },
                6812: {
                    RGB: {
                        R: 73,
                        G: 46,
                        B: 112
                    }
                },
                6813: {
                    RGB: {
                        R: 66,
                        G: 48,
                        B: 111
                    }
                },
                6814: {
                    RGB: {
                        R: 59,
                        G: 49,
                        B: 110
                    }
                },
                6815: {
                    RGB: {
                        R: 54,
                        G: 49,
                        B: 111
                    }
                },
                6816: {
                    RGB: {
                        R: 49,
                        G: 54,
                        B: 118
                    }
                },
                6817: {
                    RGB: {
                        R: 149,
                        G: 48,
                        B: 111
                    }
                },
                6818: {
                    RGB: {
                        R: 142,
                        G: 52,
                        B: 113
                    }
                },
                6819: {
                    RGB: {
                        R: 123,
                        G: 54,
                        B: 113
                    }
                },
                6820: {
                    RGB: {
                        R: 100,
                        G: 58,
                        B: 114
                    }
                },
                6821: {
                    RGB: {
                        R: 79,
                        G: 58,
                        B: 113
                    }
                },
                6822: {
                    RGB: {
                        R: 63,
                        G: 57,
                        B: 110
                    }
                },
                6823: {
                    RGB: {
                        R: 150,
                        G: 46,
                        B: 111
                    }
                },
                6824: {
                    RGB: {
                        R: 139,
                        G: 50,
                        B: 112
                    }
                },
                6825: {
                    RGB: {
                        R: 131,
                        G: 50,
                        B: 111
                    }
                },
                6826: {
                    RGB: {
                        R: 113,
                        G: 53,
                        B: 112
                    }
                },
                6827: {
                    RGB: {
                        R: 94,
                        G: 55,
                        B: 111
                    }
                },
                6828: {
                    RGB: {
                        R: 78,
                        G: 59,
                        B: 113
                    }
                },
                6829: {
                    RGB: {
                        R: 61,
                        G: 58,
                        B: 112
                    }
                },
                6830: {
                    RGB: {
                        R: 140,
                        G: 48,
                        B: 112
                    }
                },
                6831: {
                    RGB: {
                        R: 131,
                        G: 50,
                        B: 111
                    }
                },
                6832: {
                    RGB: {
                        R: 125,
                        G: 52,
                        B: 113
                    }
                },
                6833: {
                    RGB: {
                        R: 106,
                        G: 52,
                        B: 111
                    }
                },
                6834: {
                    RGB: {
                        R: 90,
                        G: 56,
                        B: 112
                    }
                },
                6835: {
                    RGB: {
                        R: 73,
                        G: 57,
                        B: 113
                    }
                },
                6836: {
                    RGB: {
                        R: 58,
                        G: 56,
                        B: 111
                    }
                },
                6837: {
                    RGB: {
                        R: 122,
                        G: 50,
                        B: 112
                    }
                },
                6838: {
                    RGB: {
                        R: 113,
                        G: 49,
                        B: 110
                    }
                },
                6839: {
                    RGB: {
                        R: 107,
                        G: 50,
                        B: 110
                    }
                },
                6840: {
                    RGB: {
                        R: 92,
                        G: 52,
                        B: 111
                    }
                },
                6841: {
                    RGB: {
                        R: 81,
                        G: 55,
                        B: 113
                    }
                },
                6842: {
                    RGB: {
                        R: 67,
                        G: 55,
                        B: 112
                    }
                },
                6843: {
                    RGB: {
                        R: 55,
                        G: 55,
                        B: 110
                    }
                },
                6844: {
                    RGB: {
                        R: 102,
                        G: 47,
                        B: 109
                    }
                },
                6845: {
                    RGB: {
                        R: 96,
                        G: 48,
                        B: 108
                    }
                },
                6846: {
                    RGB: {
                        R: 90,
                        G: 49,
                        B: 108
                    }
                },
                6847: {
                    RGB: {
                        R: 80,
                        G: 50,
                        B: 108
                    }
                },
                6848: {
                    RGB: {
                        R: 69,
                        G: 50,
                        B: 108
                    }
                },
                6849: {
                    RGB: {
                        R: 63,
                        G: 51,
                        B: 98
                    }
                },
                6850: {
                    RGB: {
                        R: 48,
                        G: 52,
                        B: 108
                    }
                },
                6851: {
                    RGB: {
                        R: 85,
                        G: 45,
                        B: 107
                    }
                },
                6852: {
                    RGB: {
                        R: 81,
                        G: 45,
                        B: 104
                    }
                },
                6853: {
                    RGB: {
                        R: 76,
                        G: 45,
                        B: 103
                    }
                },
                6854: {
                    RGB: {
                        R: 68,
                        G: 48,
                        B: 105
                    }
                },
                6855: {
                    RGB: {
                        R: 61,
                        G: 48,
                        B: 106
                    }
                },
                6856: {
                    RGB: {
                        R: 55,
                        G: 48,
                        B: 105
                    }
                },
                6857: {
                    RGB: {
                        R: 46,
                        G: 50,
                        B: 106
                    }
                },
                6858: {
                    RGB: {
                        R: 73,
                        G: 43,
                        B: 104
                    }
                },
                6859: {
                    RGB: {
                        R: 74,
                        G: 43,
                        B: 102
                    }
                },
                6860: {
                    RGB: {
                        R: 67,
                        G: 44,
                        B: 103
                    }
                },
                6861: {
                    RGB: {
                        R: 61,
                        G: 45,
                        B: 103
                    }

                },
                6862: {
                    RGB: {
                        R: 54,
                        G: 46,
                        B: 103
                    }
                },
                6863: {
                    RGB: {
                        R: 49,
                        G: 46,
                        B: 102
                    }
                },
                6864: {
                    RGB: {
                        R: 46,
                        G: 47,
                        B: 103
                    }
                },
                6865: {
                    RGB: {
                        R: 130,
                        G: 45,
                        B: 98
                    }
                },
                6866: {
                    RGB: {
                        R: 120,
                        G: 47,
                        B: 98
                    }
                },
                6867: {
                    RGB: {
                        R: 106,
                        G: 48,
                        B: 98
                    }
                },
                6868: {
                    RGB: {
                        R: 86,
                        G: 50,
                        B: 96
                    }
                },
                6869: {
                    RGB: {
                        R: 69,
                        G: 52,
                        B: 96
                    }
                },
                6870: {
                    RGB: {
                        R: 56,
                        G: 52,
                        B: 96
                    }
                },
                6871: {
                    RGB: {
                        R: 127,
                        G: 43,
                        B: 96
                    }
                },
                6872: {
                    RGB: {
                        R: 121,
                        G: 45,
                        B: 98
                    }
                },
                6873: {
                    RGB: {
                        R: 113,
                        G: 45,
                        B: 96
                    }
                },
                6874: {
                    RGB: {
                        R: 97,
                        G: 48,
                        B: 96
                    }
                },
                6875: {
                    RGB: {
                        R: 82,
                        G: 49,
                        B: 97
                    }
                },
                6876: {
                    RGB: {
                        R: 68,
                        G: 52,
                        B: 98
                    }
                },
                6877: {
                    RGB: {
                        R: 52,
                        G: 51,
                        B: 95
                    }
                },
                6878: {
                    RGB: {
                        R: 119,
                        G: 43,
                        B: 95
                    }
                },
                6879: {
                    RGB: {
                        R: 110,
                        G: 43,
                        B: 95
                    }
                },
                6880: {
                    RGB: {
                        R: 105,
                        G: 44,
                        B: 94
                    }
                },
                6881: {
                    RGB: {
                        R: 93,
                        G: 47,
                        B: 97
                    }
                },
                6882: {
                    RGB: {
                        R: 79,
                        G: 48,
                        B: 96
                    }
                },
                6883: {
                    RGB: {

                        R: 66,
                        G: 50,
                        B: 97
                    }
                },
                6884: {
                    RGB: {
                        R: 53,
                        G: 51,
                        B: 95
                    }
                },
                6885: {
                    RGB: {
                        R: 105,
                        G: 45,
                        B: 96
                    }
                },
                6886: {
                    RGB: {
                        R: 97,
                        G: 44,
                        B: 94
                    }
                },
                6887: {
                    RGB: {
                        R: 92,
                        G: 44,
                        B: 93
                    }
                },
                6888: {
                    RGB: {
                        R: 82,
                        G: 45,
                        B: 94
                    }
                },
                6889: {
                    RGB: {
                        R: 71,
                        G: 46,
                        B: 94
                    }
                },
                6890: {
                    RGB: {
                        R: 61,
                        G: 50,
                        B: 96
                    }
                },
                6891: {
                    RGB: {
                        R: 46,
                        G: 48,
                        B: 93
                    }
                },
                6892: {
                    RGB: {
                        R: 86,
                        G: 41,
                        B: 91
                    }
                },
                6893: {
                    RGB: {
                        R: 84,
                        G: 43,
                        B: 93
                    }
                },
                6894: {
                    RGB: {
                        R: 80,
                        G: 43,
                        B: 92
                    }
                },
                6895: {
                    RGB: {
                        R: 73,
                        G: 45,
                        B: 93
                    }
                },
                6896: {
                    RGB: {
                        R: 63,
                        G: 45,
                        B: 92
                    }
                },
                6897: {
                    RGB: {
                        R: 54,
                        G: 47,
                        B: 93
                    }
                },
                6898: {
                    RGB: {
                        R: 45,
                        G: 46,
                        B: 91
                    }
                },
                6899: {
                    RGB: {
                        R: 74,
                        G: 40,
                        B: 89
                    }
                },
                6900: {
                    RGB: {
                        R: 72,
                        G: 41,
                        B: 89
                    }
                },
                6901: {
                    RGB: {
                        R: 69,
                        G: 40,
                        B: 88
                    }
                },
                6902: {
                    RGB: {
                        R: 63,
                        G: 42,
                        B: 89
                    }
                },
                6903: {
                    RGB: {
                        R: 56,
                        G: 43,
                        B: 89
                    }
                },
                6904: {
                    RGB: {
                        R: 49,
                        G: 44,
                        B: 90
                    }
                },
                6905: {
                    RGB: {
                        R: 42,
                        G: 45,
                        B: 89
                    }
                },
                6906: {
                    RGB: {
                        R: 65,
                        G: 40,
                        B: 89
                    }
                },
                6907: {
                    RGB: {
                        R: 64,
                        G: 41,
                        B: 90
                    }
                },
                6908: {
                    RGB: {
                        R: 61,
                        G: 39,
                        B: 88
                    }
                },
                6909: {
                    RGB: {
                        R: 57,
                        G: 42,
                        B: 90
                    }
                },
                6910: {
                    RGB: {
                        R: 52,
                        G: 42,
                        B: 90
                    }
                },
                6911: {
                    RGB: {
                        R: 47,
                        G: 45,
                        B: 91
                    }
                },
                6912: {
                    RGB: {
                        R: 42,
                        G: 42,
                        B: 86
                    }
                },
                6913: {
                    RGB: {
                        R: 100,
                        G: 41,
                        B: 79
                    }
                },
                6914: {
                    RGB: {
                        R: 99,
                        G: 42,
                        B: 81
                    }
                },
                6915: {
                    RGB: {
                        R: 84,
                        G: 45,
                        B: 80
                    }
                },
                6916: {
                    RGB: {
                        R: 72,
                        G: 47,
                        B: 83
                    }
                },
                6917: {
                    RGB: {
                        R: 60,
                        G: 48,
                        B: 83
                    }
                },
                6918: {
                    RGB: {
                        R: 45,
                        G: 44,
                        B: 75
                    }
                },
                6919: {
                    RGB: {
                        R: 103,
                        G: 42,
                        B: 82
                    }
                },
                6920: {
                    RGB: {
                        R: 95,
                        G: 42,
                        B: 79
                    }
                },
                6921: {
                    RGB: {
                        R: 90,
                        G: 43,
                        B: 80
                    }
                },
                6922: {
                    RGB: {
                        R: 79,
                        G: 45,
                        B: 81
                    }
                },
                6923: {
                    RGB: {
                        R: 69,
                        G: 46,
                        B: 81
                    }
                },
                6924: {
                    RGB: {
                        R: 57,
                        G: 47,
                        B: 80
                    }
                },
                6925: {
                    RGB: {
                        R: 46,
                        G: 46,
                        B: 79
                    }
                },
                6926: {
                    RGB: {
                        R: 96,
                        G: 41,
                        B: 79
                    }
                },
                6927: {
                    RGB: {
                        R: 91,
                        G: 42,
                        B: 80
                    }
                },
                6928: {
                    RGB: {
                        R: 87,
                        G: 42,
                        B: 79
                    }
                },
                6929: {
                    RGB: {
                        R: 79,
                        G: 45,
                        B: 81
                    }
                },
                6930: {
                    RGB: {
                        R: 63,
                        G: 43,
                        B: 78
                    }
                },
                6931: {
                    RGB: {
                        R: 54,
                        G: 45,
                        B: 80
                    }
                },
                6932: {
                    RGB: {
                        R: 44,
                        G: 44,
                        B: 78
                    }
                },
                6933: {
                    RGB: {
                        R: 84,
                        G: 41,
                        B: 77
                    }
                },
                6934: {
                    RGB: {
                        R: 80,
                        G: 40,
                        B: 77
                    }
                },
                6935: {
                    RGB: {
                        R: 77,
                        G: 39,
                        B: 77
                    }
                },
                6936: {
                    RGB: {
                        R: 67,
                        G: 40,
                        B: 76
                    }
                },
                6937: {
                    RGB: {
                        R: 60,
                        G: 42,
                        B: 78
                    }
                },
                6938: {
                    RGB: {
                        R: 51,
                        G: 44,
                        B: 79
                    }
                },
                6939: {
                    RGB: {
                        R: 43,
                        G: 42,
                        B: 76
                    }
                },
                6940: {
                    RGB: {
                        R: 72,
                        G: 39,
                        B: 74
                    }
                },
                6941: {
                    RGB: {
                        R: 69,
                        G: 38,
                        B: 74
                    }
                },
                6942: {
                    RGB: {
                        R: 68,
                        G: 39,
                        B: 75
                    }
                },
                6943: {
                    RGB: {
                        R: 59,
                        G: 39,
                        B: 73
                    }
                },
                6944: {
                    RGB: {
                        R: 53,
                        G: 40,
                        B: 74
                    }
                },
                6945: {
                    RGB: {
                        R: 44,
                        G: 42,
                        B: 77
                    }
                },
                6946: {
                    RGB: {
                        R: 38,
                        G: 39,
                        B: 71
                    }
                },
                6947: {
                    RGB: {
                        R: 63,
                        G: 36,
                        B: 71
                    }
                },
                6948: {
                    RGB: {
                        R: 59,
                        G: 35,
                        B: 70
                    }
                },
                6949: {
                    RGB: {
                        R: 58,
                        G: 36,
                        B: 71
                    }
                },
                6950: {
                    RGB: {
                        R: 52,
                        G: 37,
                        B: 72
                    }
                },
                6951: {
                    RGB: {
                        R: 46,
                        G: 38,
                        B: 71
                    }
                },
                6952: {
                    RGB: {
                        R: 41,
                        G: 38,
                        B: 70
                    }
                },
                6953: {
                    RGB: {
                        R: 36,
                        G: 37,
                        B: 69
                    }
                },
                6954: {
                    RGB: {
                        R: 53,
                        G: 33,
                        B: 68
                    }
                },
                6955: {
                    RGB: {
                        R: 52,
                        G: 34,
                        B: 68
                    }
                },
                6956: {
                    RGB: {
                        R: 50,
                        G: 36,
                        B: 70
                    }
                },
                6957: {
                    RGB: {
                        R: 45,
                        G: 35,
                        B: 69
                    }
                },
                6958: {
                    RGB: {
                        R: 43,
                        G: 37,
                        B: 70
                    }
                },
                6959: {
                    RGB: {
                        R: 0,
                        G: 44,
                        B: 69
                    }
                },
                6960: {
                    RGB: {
                        R: 37,
                        G: 37,
                        B: 69
                    }
                },
                6961: {
                    RGB: {
                        R: 71,
                        G: 78,
                        B: 91
                    }
                },
                6962: {
                    RGB: {
                        R: 64,
                        G: 75,
                        B: 89
                    }
                },
                6963: {
                    RGB: {
                        R: 54,
                        G: 70,
                        B: 87
                    }
                },
                6964: {
                    RGB: {
                        R: 46,
                        G: 66,
                        B: 86
                    }
                },
                6965: {
                    RGB: {
                        R: 40,
                        G: 65,
                        B: 87
                    }
                },
                6966: {
                    RGB: {
                        R: 31,
                        G: 62,
                        B: 85
                    }
                },
                6967: {
                    RGB: {
                        R: 73,
                        G: 71,
                        B: 85
                    }
                },
                6968: {
                    RGB: {
                        R: 69,
                        G: 70,
                        B: 84
                    }
                },
                6969: {
                    RGB: {
                        R: 61,
                        G: 64,
                        B: 80
                    }
                },
                6970: {
                    RGB: {
                        R: 56,
                        G: 63,
                        B: 82
                    }
                },
                6971: {
                    RGB: {
                        R: 47,
                        G: 61,
                        B: 82
                    }
                },
                6972: {
                    RGB: {
                        R: 40,
                        G: 58,
                        B: 79
                    }
                },
                6973: {
                    RGB: {
                        R: 31,
                        G: 52,
                        B: 75
                    }
                },
                6974: {
                    RGB: {
                        R: 72,
                        G: 62,
                        B: 78
                    }
                },
                6975: {
                    RGB: {
                        R: 68,
                        G: 61,
                        B: 78
                    }
                },
                6976: {
                    RGB: {
                        R: 60,
                        G: 58,
                        B: 77
                    }
                },
                6977: {
                    RGB: {
                        R: 54,
                        G: 55,
                        B: 76
                    }
                },
                6978: {
                    RGB: {
                        R: 47,
                        G: 55,
                        B: 77
                    }
                },
                6979: {
                    RGB: {
                        R: 40,
                        G: 52,
                        B: 74
                    }
                },
                6980: {
                    RGB: {
                        R: 35,
                        G: 49,
                        B: 71
                    }
                },
                6981: {
                    RGB: {
                        R: 68,
                        G: 51,
                        B: 71
                    }
                },
                6982: {
                    RGB: {
                        R: 64,
                        G: 50,
                        B: 70
                    }
                },
                6983: {
                    RGB: {
                        R: 59,
                        G: 50,
                        B: 69
                    }
                },
                6984: {
                    RGB: {
                        R: 54,
                        G: 49,
                        B: 71
                    }
                },
                6985: {
                    RGB: {
                        R: 47,
                        G: 47,
                        B: 70
                    }
                },
                6986: {
                    RGB: {
                        R: 39,
                        G: 45,
                        B: 68
                    }
                },
                6987: {
                    RGB: {
                        R: 35,
                        G: 44,
                        B: 66
                    }
                },
                6988: {
                    RGB: {
                        R: 69,
                        G: 43,
                        B: 67
                    }
                },
                6989: {
                    RGB: {
                        R: 67,
                        G: 44,
                        B: 68
                    }
                },
                6990: {
                    RGB: {
                        R: 61,
                        G: 42,
                        B: 66
                    }
                },
                6991: {
                    RGB: {
                        R: 56,
                        G: 42,
                        B: 67
                    }
                },
                6992: {
                    RGB: {
                        R: 48,
                        G: 43,
                        B: 67
                    }
                },
                6993: {
                    RGB: {
                        R: 43,
                        G: 43,
                        B: 68
                    }
                },
                6994: {
                    RGB: {
                        R: 34,
                        G: 39,
                        B: 62
                    }
                }
            });
            this.Opaltone.init = function () {
                var a;
                this.Data = this.SourceData;
                for (a in this.Data) this.Data[a].Name = "OMS " + a, this.Data[a].HSV = r.getColorByRGB(this.Data[a].RGB), this.indexByHue(a);
                this.Inited = !0
            };
            this.update()
        };
        return {
            init: function (a) {
                var b, c;
                b = parseInt($.browser.version, 10);
                if (!($.browser.msie && 7 > b)) {
                    $("#csd3-jscheck").hide();
                    I = $("#csd3-canvas");
                    I.fadeIn(1E3);
                    B = $(a.LivePreview);
                    q = I.add(B);
                    m.Core.init();
                    m.History.init();
                    for (c in a.CtrlInserts) m[c].init(a.CtrlInserts[c]);
                    e.init.trigger();
                    a.customInit && a.customInit()
                }
            },
            broadcast: function (a, b) {
                e[a] && e[a].trigger(null, b)
            },
            getPalette: function () {
                return c
            }
        }
    }();
$(function () {
    ColorSchemeDesigner.init({
        CtrlInserts: {
            ModelSelect: "#csd3-model-cover",
            ColorWheel: "#csd3-pane-wheel",
            HueVal: "#csd3-wheel",
            HueCompl: "#csd3-wheel",
            DistVal: "#csd3-wheel",
            RGBVal: "#csd3-wheel",
            RGBParts: "#csd3-wheel",
            VarPresets: "#csd3-pane-vars",
            SVSqrSlider: "#csd3-c1-cover",
            CSqrSlider: "#csd3-c1-cover",
            ManVarSqrSlider: "#csd3-c2-cover",
            SchemeInfo: "#csd3-pane-info",
            TabWheel: "#csd3-tabs-color",
            TabVars: "#csd3-tabs-color",
            TabInfo: "#csd3-tabs-color",
            TabC1: "#csd3-tabs-csv",
            TabC2: "#csd3-tabs-csv",
            VisionWarning: "#csd3-canvas",
            TabPreview0: "#csd3-tabs-preview",
            TabPreview1: "#csd3-tabs-preview",
            TabPreview2: "#csd3-tabs-preview",
            MenuHistory: null,
            MenuVision: null,
            Tooltips: null,
            ColorTooltips: null,
            GAnalytics: null
        },
        LivePreview: "#csd3-preview-palette-canvas",
        customInit: function () {
            $("#csd3-preview-palette-canvas .cbox").click(function () {
                var t, u;
                t = $(this).attr("rel");
                u = t.split("-");
                u = u[0];
                ColorSchemeDesigner.broadcast("selMVcol", u);
                ColorSchemeDesigner.broadcast("selMVvar", t)
            });
            ColorSchemeDesigner.broadcast("loadSchemeByURL");
            ColorSchemeDesigner.broadcast("tabWheelClick")
        }
    });
    $("#csd3-menu").droppy({
        speed: 100,
        persist: 100
    });
    $("#csd3-menu a").not(".link").click(function (t) {
        t.preventDefault();
        $(this).blur()
    });
    $("#csd3-menu-undo").click(function () {
        ColorSchemeDesigner.broadcast("historyBack");
        return !1
    });
    $("#csd3-menu-redo").click(function () {
        ColorSchemeDesigner.broadcast("historyFwd");
        return !1
    });
    $("#csd3-menu-random-now").click(function () {
        ColorSchemeDesigner.broadcast("randomScheme");
        return !1
    });
    $("#csd3-menu-random-set").click(function () {
        ColorSchemeDesigner.broadcast("randomPrefs");
        return !1
    });
    $("#csd3-menu-convert-0").click(function () {
        ColorSchemeDesigner.broadcast("setConversion", 0);
        return !1
    });
    $("#csd3-menu-convert-1").click(function () {
        ColorSchemeDesigner.broadcast("setConversion", 1);
        return !1
    });
    $("#csd3-menu-convert-2").click(function () {
        ColorSchemeDesigner.broadcast("setConversion", 2);
        return !1
    });
    $("#csd3-menu-convert-3").click(function () {
        ColorSchemeDesigner.broadcast("setConversion", 3);
        return !1
    });
    $("#csd3-menu-convert-4").click(function () {
        ColorSchemeDesigner.broadcast("setConversion", 4);
        return !1
    });
    $("#csd3-menu-export-txt").click(function () {
        ColorSchemeDesigner.broadcast("setExport", "txt");
        return !1
    });
    $("#csd3-menu-export-html").click(function () {
        ColorSchemeDesigner.broadcast("setExport", "html");
        return !1
    });
    $("#csd3-menu-export-xml").click(function () {
        ColorSchemeDesigner.broadcast("setExport", "xml");
        return !1
    });
    $("#csd3-menu-export-aco").click(function () {
        ColorSchemeDesigner.broadcast("setExport", "aco");
        return !1
    });
    $("#csd3-menu-export-gpl").click(function () {
        ColorSchemeDesigner.broadcast("setExport", "gpl");
        return !1
    });
    $("#csd3-menu-tooltips").click(function () {
        ColorSchemeDesigner.broadcast("toggleTooltips");
        return !1
    });
    $("#csd3-menu-about").click(function () {
        window.open(this.href);
        return !1
    })
});