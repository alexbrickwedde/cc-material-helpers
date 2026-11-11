(() => {
  var __getOwnPropNames = Object.getOwnPropertyNames;
  var __esm = (fn, res, err) => function __init() {
    if (err) throw err[0];
    try {
      return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
    } catch (e9) {
      throw err = [e9], e9;
    }
  };
  var __commonJS = (cb, mod) => function __require() {
    try {
      return mod || (0, cb[__getOwnPropNames(cb)[0]])((mod = { exports: {} }).exports, mod), mod.exports;
    } catch (e9) {
      throw mod = 0, e9;
    }
  };

  // node_modules/tslib/tslib.es6.mjs
  function __decorate(decorators, target, key, desc) {
    var c5 = arguments.length, r9 = c5 < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d3;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r9 = Reflect.decorate(decorators, target, key, desc);
    else for (var i8 = decorators.length - 1; i8 >= 0; i8--) if (d3 = decorators[i8]) r9 = (c5 < 3 ? d3(r9) : c5 > 3 ? d3(target, key, r9) : d3(target, key)) || r9;
    return c5 > 3 && r9 && Object.defineProperty(target, key, r9), r9;
  }
  var init_tslib_es6 = __esm({
    "node_modules/tslib/tslib.es6.mjs"() {
    }
  });

  // node_modules/@lit/reactive-element/decorators/custom-element.js
  var t;
  var init_custom_element = __esm({
    "node_modules/@lit/reactive-element/decorators/custom-element.js"() {
      t = (t6) => (e9, o10) => {
        void 0 !== o10 ? o10.addInitializer(() => {
          customElements.define(t6, e9);
        }) : customElements.define(t6, e9);
      };
    }
  });

  // node_modules/@lit/reactive-element/css-tag.js
  var t2, e, s, o, n, r, i, S, c;
  var init_css_tag = __esm({
    "node_modules/@lit/reactive-element/css-tag.js"() {
      t2 = globalThis;
      e = t2.ShadowRoot && (void 0 === t2.ShadyCSS || t2.ShadyCSS.nativeShadow) && "adoptedStyleSheets" in Document.prototype && "replace" in CSSStyleSheet.prototype;
      s = /* @__PURE__ */ Symbol();
      o = /* @__PURE__ */ new WeakMap();
      n = class {
        constructor(t6, e9, o10) {
          if (this._$cssResult$ = true, o10 !== s) throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");
          this.cssText = t6, this.t = e9;
        }
        get styleSheet() {
          let t6 = this.o;
          const s4 = this.t;
          if (e && void 0 === t6) {
            const e9 = void 0 !== s4 && 1 === s4.length;
            e9 && (t6 = o.get(s4)), void 0 === t6 && ((this.o = t6 = new CSSStyleSheet()).replaceSync(this.cssText), e9 && o.set(s4, t6));
          }
          return t6;
        }
        toString() {
          return this.cssText;
        }
      };
      r = (t6) => new n("string" == typeof t6 ? t6 : t6 + "", void 0, s);
      i = (t6, ...e9) => {
        const o10 = 1 === t6.length ? t6[0] : e9.reduce((e10, s4, o11) => e10 + ((t7) => {
          if (true === t7._$cssResult$) return t7.cssText;
          if ("number" == typeof t7) return t7;
          throw Error("Value passed to 'css' function must be a 'css' function result: " + t7 + ". Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.");
        })(s4) + t6[o11 + 1], t6[0]);
        return new n(o10, t6, s);
      };
      S = (s4, o10) => {
        if (e) s4.adoptedStyleSheets = o10.map((t6) => t6 instanceof CSSStyleSheet ? t6 : t6.styleSheet);
        else for (const e9 of o10) {
          const o11 = document.createElement("style"), n9 = t2.litNonce;
          void 0 !== n9 && o11.setAttribute("nonce", n9), o11.textContent = e9.cssText, s4.appendChild(o11);
        }
      };
      c = e ? (t6) => t6 : (t6) => t6 instanceof CSSStyleSheet ? ((t7) => {
        let e9 = "";
        for (const s4 of t7.cssRules) e9 += s4.cssText;
        return r(e9);
      })(t6) : t6;
    }
  });

  // node_modules/@lit/reactive-element/reactive-element.js
  var i2, e2, h, r2, o2, n2, a, c2, l, p, d, u, f, b, y;
  var init_reactive_element = __esm({
    "node_modules/@lit/reactive-element/reactive-element.js"() {
      init_css_tag();
      init_css_tag();
      ({ is: i2, defineProperty: e2, getOwnPropertyDescriptor: h, getOwnPropertyNames: r2, getOwnPropertySymbols: o2, getPrototypeOf: n2 } = Object);
      a = globalThis;
      c2 = a.trustedTypes;
      l = c2 ? c2.emptyScript : "";
      p = a.reactiveElementPolyfillSupport;
      d = (t6, s4) => t6;
      u = { toAttribute(t6, s4) {
        switch (s4) {
          case Boolean:
            t6 = t6 ? l : null;
            break;
          case Object:
          case Array:
            t6 = null == t6 ? t6 : JSON.stringify(t6);
        }
        return t6;
      }, fromAttribute(t6, s4) {
        let i8 = t6;
        switch (s4) {
          case Boolean:
            i8 = null !== t6;
            break;
          case Number:
            i8 = null === t6 ? null : Number(t6);
            break;
          case Object:
          case Array:
            try {
              i8 = JSON.parse(t6);
            } catch (t7) {
              i8 = null;
            }
        }
        return i8;
      } };
      f = (t6, s4) => !i2(t6, s4);
      b = { attribute: true, type: String, converter: u, reflect: false, useDefault: false, hasChanged: f };
      Symbol.metadata ??= /* @__PURE__ */ Symbol("metadata"), a.litPropertyMetadata ??= /* @__PURE__ */ new WeakMap();
      y = class extends HTMLElement {
        static addInitializer(t6) {
          this._$Ei(), (this.l ??= []).push(t6);
        }
        static get observedAttributes() {
          return this.finalize(), this._$Eh && [...this._$Eh.keys()];
        }
        static createProperty(t6, s4 = b) {
          if (s4.state && (s4.attribute = false), this._$Ei(), this.prototype.hasOwnProperty(t6) && ((s4 = Object.create(s4)).wrapped = true), this.elementProperties.set(t6, s4), !s4.noAccessor) {
            const i8 = /* @__PURE__ */ Symbol(), h3 = this.getPropertyDescriptor(t6, i8, s4);
            void 0 !== h3 && e2(this.prototype, t6, h3);
          }
        }
        static getPropertyDescriptor(t6, s4, i8) {
          const { get: e9, set: r9 } = h(this.prototype, t6) ?? { get() {
            return this[s4];
          }, set(t7) {
            this[s4] = t7;
          } };
          return { get: e9, set(s5) {
            const h3 = e9?.call(this);
            r9?.call(this, s5), this.requestUpdate(t6, h3, i8);
          }, configurable: true, enumerable: true };
        }
        static getPropertyOptions(t6) {
          return this.elementProperties.get(t6) ?? b;
        }
        static _$Ei() {
          if (this.hasOwnProperty(d("elementProperties"))) return;
          const t6 = n2(this);
          t6.finalize(), void 0 !== t6.l && (this.l = [...t6.l]), this.elementProperties = new Map(t6.elementProperties);
        }
        static finalize() {
          if (this.hasOwnProperty(d("finalized"))) return;
          if (this.finalized = true, this._$Ei(), this.hasOwnProperty(d("properties"))) {
            const t7 = this.properties, s4 = [...r2(t7), ...o2(t7)];
            for (const i8 of s4) this.createProperty(i8, t7[i8]);
          }
          const t6 = this[Symbol.metadata];
          if (null !== t6) {
            const s4 = litPropertyMetadata.get(t6);
            if (void 0 !== s4) for (const [t7, i8] of s4) this.elementProperties.set(t7, i8);
          }
          this._$Eh = /* @__PURE__ */ new Map();
          for (const [t7, s4] of this.elementProperties) {
            const i8 = this._$Eu(t7, s4);
            void 0 !== i8 && this._$Eh.set(i8, t7);
          }
          this.elementStyles = this.finalizeStyles(this.styles);
        }
        static finalizeStyles(s4) {
          const i8 = [];
          if (Array.isArray(s4)) {
            const e9 = new Set(s4.flat(1 / 0).reverse());
            for (const s5 of e9) i8.unshift(c(s5));
          } else void 0 !== s4 && i8.push(c(s4));
          return i8;
        }
        static _$Eu(t6, s4) {
          const i8 = s4.attribute;
          return false === i8 ? void 0 : "string" == typeof i8 ? i8 : "string" == typeof t6 ? t6.toLowerCase() : void 0;
        }
        constructor() {
          super(), this._$Ep = void 0, this.isUpdatePending = false, this.hasUpdated = false, this._$Em = null, this._$Ev();
        }
        _$Ev() {
          this._$ES = new Promise((t6) => this.enableUpdating = t6), this._$AL = /* @__PURE__ */ new Map(), this._$E_(), this.requestUpdate(), this.constructor.l?.forEach((t6) => t6(this));
        }
        addController(t6) {
          (this._$EO ??= /* @__PURE__ */ new Set()).add(t6), void 0 !== this.renderRoot && this.isConnected && t6.hostConnected?.();
        }
        removeController(t6) {
          this._$EO?.delete(t6);
        }
        _$E_() {
          const t6 = /* @__PURE__ */ new Map(), s4 = this.constructor.elementProperties;
          for (const i8 of s4.keys()) this.hasOwnProperty(i8) && (t6.set(i8, this[i8]), delete this[i8]);
          t6.size > 0 && (this._$Ep = t6);
        }
        createRenderRoot() {
          const t6 = this.shadowRoot ?? this.attachShadow(this.constructor.shadowRootOptions);
          return S(t6, this.constructor.elementStyles), t6;
        }
        connectedCallback() {
          this.renderRoot ??= this.createRenderRoot(), this.enableUpdating(true), this._$EO?.forEach((t6) => t6.hostConnected?.());
        }
        enableUpdating(t6) {
        }
        disconnectedCallback() {
          this._$EO?.forEach((t6) => t6.hostDisconnected?.());
        }
        attributeChangedCallback(t6, s4, i8) {
          this._$AK(t6, i8);
        }
        _$ET(t6, s4) {
          const i8 = this.constructor.elementProperties.get(t6), e9 = this.constructor._$Eu(t6, i8);
          if (void 0 !== e9 && true === i8.reflect) {
            const h3 = (void 0 !== i8.converter?.toAttribute ? i8.converter : u).toAttribute(s4, i8.type);
            this._$Em = t6, null == h3 ? this.removeAttribute(e9) : this.setAttribute(e9, h3), this._$Em = null;
          }
        }
        _$AK(t6, s4) {
          const i8 = this.constructor, e9 = i8._$Eh.get(t6);
          if (void 0 !== e9 && this._$Em !== e9) {
            const t7 = i8.getPropertyOptions(e9), h3 = "function" == typeof t7.converter ? { fromAttribute: t7.converter } : void 0 !== t7.converter?.fromAttribute ? t7.converter : u;
            this._$Em = e9;
            const r9 = h3.fromAttribute(s4, t7.type);
            this[e9] = r9 ?? this._$Ej?.get(e9) ?? r9, this._$Em = null;
          }
        }
        requestUpdate(t6, s4, i8, e9 = false, h3) {
          if (void 0 !== t6) {
            const r9 = this.constructor;
            if (false === e9 && (h3 = this[t6]), i8 ??= r9.getPropertyOptions(t6), !((i8.hasChanged ?? f)(h3, s4) || i8.useDefault && i8.reflect && h3 === this._$Ej?.get(t6) && !this.hasAttribute(r9._$Eu(t6, i8)))) return;
            this.C(t6, s4, i8);
          }
          false === this.isUpdatePending && (this._$ES = this._$EP());
        }
        C(t6, s4, { useDefault: i8, reflect: e9, wrapped: h3 }, r9) {
          i8 && !(this._$Ej ??= /* @__PURE__ */ new Map()).has(t6) && (this._$Ej.set(t6, r9 ?? s4 ?? this[t6]), true !== h3 || void 0 !== r9) || (this._$AL.has(t6) || (this.hasUpdated || i8 || (s4 = void 0), this._$AL.set(t6, s4)), true === e9 && this._$Em !== t6 && (this._$Eq ??= /* @__PURE__ */ new Set()).add(t6));
        }
        async _$EP() {
          this.isUpdatePending = true;
          try {
            await this._$ES;
          } catch (t7) {
            Promise.reject(t7);
          }
          const t6 = this.scheduleUpdate();
          return null != t6 && await t6, !this.isUpdatePending;
        }
        scheduleUpdate() {
          return this.performUpdate();
        }
        performUpdate() {
          if (!this.isUpdatePending) return;
          if (!this.hasUpdated) {
            if (this.renderRoot ??= this.createRenderRoot(), this._$Ep) {
              for (const [t8, s5] of this._$Ep) this[t8] = s5;
              this._$Ep = void 0;
            }
            const t7 = this.constructor.elementProperties;
            if (t7.size > 0) for (const [s5, i8] of t7) {
              const { wrapped: t8 } = i8, e9 = this[s5];
              true !== t8 || this._$AL.has(s5) || void 0 === e9 || this.C(s5, void 0, i8, e9);
            }
          }
          let t6 = false;
          const s4 = this._$AL;
          try {
            t6 = this.shouldUpdate(s4), t6 ? (this.willUpdate(s4), this._$EO?.forEach((t7) => t7.hostUpdate?.()), this.update(s4)) : this._$EM();
          } catch (s5) {
            throw t6 = false, this._$EM(), s5;
          }
          t6 && this._$AE(s4);
        }
        willUpdate(t6) {
        }
        _$AE(t6) {
          this._$EO?.forEach((t7) => t7.hostUpdated?.()), this.hasUpdated || (this.hasUpdated = true, this.firstUpdated(t6)), this.updated(t6);
        }
        _$EM() {
          this._$AL = /* @__PURE__ */ new Map(), this.isUpdatePending = false;
        }
        get updateComplete() {
          return this.getUpdateComplete();
        }
        getUpdateComplete() {
          return this._$ES;
        }
        shouldUpdate(t6) {
          return true;
        }
        update(t6) {
          this._$Eq &&= this._$Eq.forEach((t7) => this._$ET(t7, this[t7])), this._$EM();
        }
        updated(t6) {
        }
        firstUpdated(t6) {
        }
      };
      y.elementStyles = [], y.shadowRootOptions = { mode: "open" }, y[d("elementProperties")] = /* @__PURE__ */ new Map(), y[d("finalized")] = /* @__PURE__ */ new Map(), p?.({ ReactiveElement: y }), (a.reactiveElementVersions ??= []).push("2.1.2");
    }
  });

  // node_modules/@lit/reactive-element/decorators/property.js
  function n3(t6) {
    return (e9, o10) => "object" == typeof o10 ? r3(t6, e9, o10) : ((t7, e10, o11) => {
      const r9 = e10.hasOwnProperty(o11);
      return e10.constructor.createProperty(o11, t7), r9 ? Object.getOwnPropertyDescriptor(e10, o11) : void 0;
    })(t6, e9, o10);
  }
  var o3, r3;
  var init_property = __esm({
    "node_modules/@lit/reactive-element/decorators/property.js"() {
      init_reactive_element();
      o3 = { attribute: true, type: String, converter: u, reflect: false, hasChanged: f };
      r3 = (t6 = o3, e9, r9) => {
        const { kind: n9, metadata: i8 } = r9;
        let s4 = globalThis.litPropertyMetadata.get(i8);
        if (void 0 === s4 && globalThis.litPropertyMetadata.set(i8, s4 = /* @__PURE__ */ new Map()), "setter" === n9 && ((t6 = Object.create(t6)).wrapped = true), s4.set(r9.name, t6), "accessor" === n9) {
          const { name: o10 } = r9;
          return { set(r10) {
            const n10 = e9.get.call(this);
            e9.set.call(this, r10), this.requestUpdate(o10, n10, t6, true, r10);
          }, init(e10) {
            return void 0 !== e10 && this.C(o10, void 0, t6, e10), e10;
          } };
        }
        if ("setter" === n9) {
          const { name: o10 } = r9;
          return function(r10) {
            const n10 = this[o10];
            e9.call(this, r10), this.requestUpdate(o10, n10, t6, true, r10);
          };
        }
        throw Error("Unsupported decorator location: " + n9);
      };
    }
  });

  // node_modules/@lit/reactive-element/decorators/state.js
  function r4(r9) {
    return n3({ ...r9, state: true, attribute: false });
  }
  var init_state = __esm({
    "node_modules/@lit/reactive-element/decorators/state.js"() {
      init_property();
    }
  });

  // node_modules/@lit/reactive-element/decorators/event-options.js
  var init_event_options = __esm({
    "node_modules/@lit/reactive-element/decorators/event-options.js"() {
    }
  });

  // node_modules/@lit/reactive-element/decorators/base.js
  var e3;
  var init_base = __esm({
    "node_modules/@lit/reactive-element/decorators/base.js"() {
      e3 = (e9, t6, c5) => (c5.configurable = true, c5.enumerable = true, Reflect.decorate && "object" != typeof t6 && Object.defineProperty(e9, t6, c5), c5);
    }
  });

  // node_modules/@lit/reactive-element/decorators/query.js
  function e4(e9, r9) {
    return (n9, s4, i8) => {
      const o10 = (t6) => t6.renderRoot?.querySelector(e9) ?? null;
      if (r9) {
        const { get: e10, set: r10 } = "object" == typeof s4 ? n9 : i8 ?? /* @__PURE__ */ (() => {
          const t6 = /* @__PURE__ */ Symbol();
          return { get() {
            return this[t6];
          }, set(e11) {
            this[t6] = e11;
          } };
        })();
        return e3(n9, s4, { get() {
          let t6 = e10.call(this);
          return void 0 === t6 && (t6 = o10(this), (null !== t6 || this.hasUpdated) && r10.call(this, t6)), t6;
        } });
      }
      return e3(n9, s4, { get() {
        return o10(this);
      } });
    };
  }
  var init_query = __esm({
    "node_modules/@lit/reactive-element/decorators/query.js"() {
      init_base();
    }
  });

  // node_modules/@lit/reactive-element/decorators/query-all.js
  function r5(r9) {
    return (n9, o10) => e3(n9, o10, { get() {
      return (this.renderRoot ?? (e5 ??= document.createDocumentFragment())).querySelectorAll(r9);
    } });
  }
  var e5;
  var init_query_all = __esm({
    "node_modules/@lit/reactive-element/decorators/query-all.js"() {
      init_base();
    }
  });

  // node_modules/@lit/reactive-element/decorators/query-async.js
  function r6(r9) {
    return (n9, e9) => e3(n9, e9, { async get() {
      return await this.updateComplete, this.renderRoot?.querySelector(r9) ?? null;
    } });
  }
  var init_query_async = __esm({
    "node_modules/@lit/reactive-element/decorators/query-async.js"() {
      init_base();
    }
  });

  // node_modules/@lit/reactive-element/decorators/query-assigned-elements.js
  function o4(o10) {
    return (e9, n9) => {
      const { slot: r9, selector: s4 } = o10 ?? {}, c5 = "slot" + (r9 ? `[name=${r9}]` : ":not([name])");
      return e3(e9, n9, { get() {
        const t6 = this.renderRoot?.querySelector(c5), e10 = t6?.assignedElements(o10) ?? [];
        return void 0 === s4 ? e10 : e10.filter((t7) => t7.matches(s4));
      } });
    };
  }
  var init_query_assigned_elements = __esm({
    "node_modules/@lit/reactive-element/decorators/query-assigned-elements.js"() {
      init_base();
    }
  });

  // node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js
  function n4(n9) {
    return (o10, r9) => {
      const { slot: e9 } = n9 ?? {}, s4 = "slot" + (e9 ? `[name=${e9}]` : ":not([name])");
      return e3(o10, r9, { get() {
        const t6 = this.renderRoot?.querySelector(s4);
        return t6?.assignedNodes(n9) ?? [];
      } });
    };
  }
  var init_query_assigned_nodes = __esm({
    "node_modules/@lit/reactive-element/decorators/query-assigned-nodes.js"() {
      init_base();
    }
  });

  // node_modules/lit/decorators.js
  var init_decorators = __esm({
    "node_modules/lit/decorators.js"() {
      init_custom_element();
      init_property();
      init_state();
      init_event_options();
      init_query();
      init_query_all();
      init_query_async();
      init_query_assigned_elements();
      init_query_assigned_nodes();
    }
  });

  // node_modules/lit-html/lit-html.js
  function V(t6, i8) {
    if (!u2(t6) || !t6.hasOwnProperty("raw")) throw Error("invalid template strings array");
    return void 0 !== e6 ? e6.createHTML(i8) : i8;
  }
  function M(t6, i8, s4 = t6, e9) {
    if (i8 === E) return i8;
    let h3 = void 0 !== e9 ? s4._$Co?.[e9] : s4._$Cl;
    const o10 = a2(i8) ? void 0 : i8._$litDirective$;
    return h3?.constructor !== o10 && (h3?._$AO?.(false), void 0 === o10 ? h3 = void 0 : (h3 = new o10(t6), h3._$AT(t6, s4, e9)), void 0 !== e9 ? (s4._$Co ??= [])[e9] = h3 : s4._$Cl = h3), void 0 !== h3 && (i8 = M(t6, h3._$AS(t6, i8.values), h3, e9)), i8;
  }
  var t3, i3, s2, e6, h2, o5, n5, r7, l2, c3, a2, u2, d2, f2, v, _, m, p2, g, $, y2, x, b2, w, T, E, A, C, P, N, S2, R, k, H, I, L, z, Z, j, B, D;
  var init_lit_html = __esm({
    "node_modules/lit-html/lit-html.js"() {
      t3 = globalThis;
      i3 = (t6) => t6;
      s2 = t3.trustedTypes;
      e6 = s2 ? s2.createPolicy("lit-html", { createHTML: (t6) => t6 }) : void 0;
      h2 = "$lit$";
      o5 = `lit$${Math.random().toFixed(9).slice(2)}$`;
      n5 = "?" + o5;
      r7 = `<${n5}>`;
      l2 = document;
      c3 = () => l2.createComment("");
      a2 = (t6) => null === t6 || "object" != typeof t6 && "function" != typeof t6;
      u2 = Array.isArray;
      d2 = (t6) => u2(t6) || "function" == typeof t6?.[Symbol.iterator];
      f2 = "[ 	\n\f\r]";
      v = /<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g;
      _ = /-->/g;
      m = />/g;
      p2 = RegExp(`>|${f2}(?:([^\\s"'>=/]+)(${f2}*=${f2}*(?:[^ 	
\f\r"'\`<>=]|("|')|))|$)`, "g");
      g = /'/g;
      $ = /"/g;
      y2 = /^(?:script|style|textarea|title)$/i;
      x = (t6) => (i8, ...s4) => ({ _$litType$: t6, strings: i8, values: s4 });
      b2 = x(1);
      w = x(2);
      T = x(3);
      E = /* @__PURE__ */ Symbol.for("lit-noChange");
      A = /* @__PURE__ */ Symbol.for("lit-nothing");
      C = /* @__PURE__ */ new WeakMap();
      P = l2.createTreeWalker(l2, 129);
      N = (t6, i8) => {
        const s4 = t6.length - 1, e9 = [];
        let n9, l5 = 2 === i8 ? "<svg>" : 3 === i8 ? "<math>" : "", c5 = v;
        for (let i9 = 0; i9 < s4; i9++) {
          const s5 = t6[i9];
          let a4, u4, d3 = -1, f3 = 0;
          for (; f3 < s5.length && (c5.lastIndex = f3, u4 = c5.exec(s5), null !== u4); ) f3 = c5.lastIndex, c5 === v ? "!--" === u4[1] ? c5 = _ : void 0 !== u4[1] ? c5 = m : void 0 !== u4[2] ? (y2.test(u4[2]) && (n9 = RegExp("</" + u4[2], "g")), c5 = p2) : void 0 !== u4[3] && (c5 = p2) : c5 === p2 ? ">" === u4[0] ? (c5 = n9 ?? v, d3 = -1) : void 0 === u4[1] ? d3 = -2 : (d3 = c5.lastIndex - u4[2].length, a4 = u4[1], c5 = void 0 === u4[3] ? p2 : '"' === u4[3] ? $ : g) : c5 === $ || c5 === g ? c5 = p2 : c5 === _ || c5 === m ? c5 = v : (c5 = p2, n9 = void 0);
          const x2 = c5 === p2 && t6[i9 + 1].startsWith("/>") ? " " : "";
          l5 += c5 === v ? s5 + r7 : d3 >= 0 ? (e9.push(a4), s5.slice(0, d3) + h2 + s5.slice(d3) + o5 + x2) : s5 + o5 + (-2 === d3 ? i9 : x2);
        }
        return [V(t6, l5 + (t6[s4] || "<?>") + (2 === i8 ? "</svg>" : 3 === i8 ? "</math>" : "")), e9];
      };
      S2 = class _S {
        constructor({ strings: t6, _$litType$: i8 }, e9) {
          let r9;
          this.parts = [];
          let l5 = 0, a4 = 0;
          const u4 = t6.length - 1, d3 = this.parts, [f3, v2] = N(t6, i8);
          if (this.el = _S.createElement(f3, e9), P.currentNode = this.el.content, 2 === i8 || 3 === i8) {
            const t7 = this.el.content.firstChild;
            t7.replaceWith(...t7.childNodes);
          }
          for (; null !== (r9 = P.nextNode()) && d3.length < u4; ) {
            if (1 === r9.nodeType) {
              if (r9.hasAttributes()) for (const t7 of r9.getAttributeNames()) if (t7.endsWith(h2)) {
                const i9 = v2[a4++], s4 = r9.getAttribute(t7).split(o5), e10 = /([.?@])?(.*)/.exec(i9);
                d3.push({ type: 1, index: l5, name: e10[2], strings: s4, ctor: "." === e10[1] ? I : "?" === e10[1] ? L : "@" === e10[1] ? z : H }), r9.removeAttribute(t7);
              } else t7.startsWith(o5) && (d3.push({ type: 6, index: l5 }), r9.removeAttribute(t7));
              if (y2.test(r9.tagName)) {
                const t7 = r9.textContent.split(o5), i9 = t7.length - 1;
                if (i9 > 0) {
                  r9.textContent = s2 ? s2.emptyScript : "";
                  for (let s4 = 0; s4 < i9; s4++) r9.append(t7[s4], c3()), P.nextNode(), d3.push({ type: 2, index: ++l5 });
                  r9.append(t7[i9], c3());
                }
              }
            } else if (8 === r9.nodeType) if (r9.data === n5) d3.push({ type: 2, index: l5 });
            else {
              let t7 = -1;
              for (; -1 !== (t7 = r9.data.indexOf(o5, t7 + 1)); ) d3.push({ type: 7, index: l5 }), t7 += o5.length - 1;
            }
            l5++;
          }
        }
        static createElement(t6, i8) {
          const s4 = l2.createElement("template");
          return s4.innerHTML = t6, s4;
        }
      };
      R = class {
        constructor(t6, i8) {
          this._$AV = [], this._$AN = void 0, this._$AD = t6, this._$AM = i8;
        }
        get parentNode() {
          return this._$AM.parentNode;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        u(t6) {
          const { el: { content: i8 }, parts: s4 } = this._$AD, e9 = (t6?.creationScope ?? l2).importNode(i8, true);
          P.currentNode = e9;
          let h3 = P.nextNode(), o10 = 0, n9 = 0, r9 = s4[0];
          for (; void 0 !== r9; ) {
            if (o10 === r9.index) {
              let i9;
              2 === r9.type ? i9 = new k(h3, h3.nextSibling, this, t6) : 1 === r9.type ? i9 = new r9.ctor(h3, r9.name, r9.strings, this, t6) : 6 === r9.type && (i9 = new Z(h3, this, t6)), this._$AV.push(i9), r9 = s4[++n9];
            }
            o10 !== r9?.index && (h3 = P.nextNode(), o10++);
          }
          return P.currentNode = l2, e9;
        }
        p(t6) {
          let i8 = 0;
          for (const s4 of this._$AV) void 0 !== s4 && (void 0 !== s4.strings ? (s4._$AI(t6, s4, i8), i8 += s4.strings.length - 2) : s4._$AI(t6[i8])), i8++;
        }
      };
      k = class _k {
        get _$AU() {
          return this._$AM?._$AU ?? this._$Cv;
        }
        constructor(t6, i8, s4, e9) {
          this.type = 2, this._$AH = A, this._$AN = void 0, this._$AA = t6, this._$AB = i8, this._$AM = s4, this.options = e9, this._$Cv = e9?.isConnected ?? true;
        }
        get parentNode() {
          let t6 = this._$AA.parentNode;
          const i8 = this._$AM;
          return void 0 !== i8 && 11 === t6?.nodeType && (t6 = i8.parentNode), t6;
        }
        get startNode() {
          return this._$AA;
        }
        get endNode() {
          return this._$AB;
        }
        _$AI(t6, i8 = this) {
          t6 = M(this, t6, i8), a2(t6) ? t6 === A || null == t6 || "" === t6 ? (this._$AH !== A && this._$AR(), this._$AH = A) : t6 !== this._$AH && t6 !== E && this._(t6) : void 0 !== t6._$litType$ ? this.$(t6) : void 0 !== t6.nodeType ? this.T(t6) : d2(t6) ? this.k(t6) : this._(t6);
        }
        O(t6) {
          return this._$AA.parentNode.insertBefore(t6, this._$AB);
        }
        T(t6) {
          this._$AH !== t6 && (this._$AR(), this._$AH = this.O(t6));
        }
        _(t6) {
          this._$AH !== A && a2(this._$AH) ? this._$AA.nextSibling.data = t6 : this.T(l2.createTextNode(t6)), this._$AH = t6;
        }
        $(t6) {
          const { values: i8, _$litType$: s4 } = t6, e9 = "number" == typeof s4 ? this._$AC(t6) : (void 0 === s4.el && (s4.el = S2.createElement(V(s4.h, s4.h[0]), this.options)), s4);
          if (this._$AH?._$AD === e9) this._$AH.p(i8);
          else {
            const t7 = new R(e9, this), s5 = t7.u(this.options);
            t7.p(i8), this.T(s5), this._$AH = t7;
          }
        }
        _$AC(t6) {
          let i8 = C.get(t6.strings);
          return void 0 === i8 && C.set(t6.strings, i8 = new S2(t6)), i8;
        }
        k(t6) {
          u2(this._$AH) || (this._$AH = [], this._$AR());
          const i8 = this._$AH;
          let s4, e9 = 0;
          for (const h3 of t6) e9 === i8.length ? i8.push(s4 = new _k(this.O(c3()), this.O(c3()), this, this.options)) : s4 = i8[e9], s4._$AI(h3), e9++;
          e9 < i8.length && (this._$AR(s4 && s4._$AB.nextSibling, e9), i8.length = e9);
        }
        _$AR(t6 = this._$AA.nextSibling, s4) {
          for (this._$AP?.(false, true, s4); t6 !== this._$AB; ) {
            const s5 = i3(t6).nextSibling;
            i3(t6).remove(), t6 = s5;
          }
        }
        setConnected(t6) {
          void 0 === this._$AM && (this._$Cv = t6, this._$AP?.(t6));
        }
      };
      H = class {
        get tagName() {
          return this.element.tagName;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        constructor(t6, i8, s4, e9, h3) {
          this.type = 1, this._$AH = A, this._$AN = void 0, this.element = t6, this.name = i8, this._$AM = e9, this.options = h3, s4.length > 2 || "" !== s4[0] || "" !== s4[1] ? (this._$AH = Array(s4.length - 1).fill(new String()), this.strings = s4) : this._$AH = A;
        }
        _$AI(t6, i8 = this, s4, e9) {
          const h3 = this.strings;
          let o10 = false;
          if (void 0 === h3) t6 = M(this, t6, i8, 0), o10 = !a2(t6) || t6 !== this._$AH && t6 !== E, o10 && (this._$AH = t6);
          else {
            const e10 = t6;
            let n9, r9;
            for (t6 = h3[0], n9 = 0; n9 < h3.length - 1; n9++) r9 = M(this, e10[s4 + n9], i8, n9), r9 === E && (r9 = this._$AH[n9]), o10 ||= !a2(r9) || r9 !== this._$AH[n9], r9 === A ? t6 = A : t6 !== A && (t6 += (r9 ?? "") + h3[n9 + 1]), this._$AH[n9] = r9;
          }
          o10 && !e9 && this.j(t6);
        }
        j(t6) {
          t6 === A ? this.element.removeAttribute(this.name) : this.element.setAttribute(this.name, t6 ?? "");
        }
      };
      I = class extends H {
        constructor() {
          super(...arguments), this.type = 3;
        }
        j(t6) {
          this.element[this.name] = t6 === A ? void 0 : t6;
        }
      };
      L = class extends H {
        constructor() {
          super(...arguments), this.type = 4;
        }
        j(t6) {
          this.element.toggleAttribute(this.name, !!t6 && t6 !== A);
        }
      };
      z = class extends H {
        constructor(t6, i8, s4, e9, h3) {
          super(t6, i8, s4, e9, h3), this.type = 5;
        }
        _$AI(t6, i8 = this) {
          if ((t6 = M(this, t6, i8, 0) ?? A) === E) return;
          const s4 = this._$AH, e9 = t6 === A && s4 !== A || t6.capture !== s4.capture || t6.once !== s4.once || t6.passive !== s4.passive, h3 = t6 !== A && (s4 === A || e9);
          e9 && this.element.removeEventListener(this.name, this, s4), h3 && this.element.addEventListener(this.name, this, t6), this._$AH = t6;
        }
        handleEvent(t6) {
          "function" == typeof this._$AH ? this._$AH.call(this.options?.host ?? this.element, t6) : this._$AH.handleEvent(t6);
        }
      };
      Z = class {
        constructor(t6, i8, s4) {
          this.element = t6, this.type = 6, this._$AN = void 0, this._$AM = i8, this.options = s4;
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AI(t6) {
          M(this, t6);
        }
      };
      j = { M: h2, P: o5, A: n5, C: 1, L: N, R, D: d2, V: M, I: k, H, N: L, U: z, B: I, F: Z };
      B = t3.litHtmlPolyfillSupport;
      B?.(S2, k), (t3.litHtmlVersions ??= []).push("3.3.3");
      D = (t6, i8, s4) => {
        const e9 = s4?.renderBefore ?? i8;
        let h3 = e9._$litPart$;
        if (void 0 === h3) {
          const t7 = s4?.renderBefore ?? null;
          e9._$litPart$ = h3 = new k(i8.insertBefore(c3(), t7), t7, void 0, s4 ?? {});
        }
        return h3._$AI(t6), h3;
      };
    }
  });

  // node_modules/lit-element/lit-element.js
  var s3, i4, o6;
  var init_lit_element = __esm({
    "node_modules/lit-element/lit-element.js"() {
      init_reactive_element();
      init_reactive_element();
      init_lit_html();
      init_lit_html();
      s3 = globalThis;
      i4 = class extends y {
        constructor() {
          super(...arguments), this.renderOptions = { host: this }, this._$Do = void 0;
        }
        createRenderRoot() {
          const t6 = super.createRenderRoot();
          return this.renderOptions.renderBefore ??= t6.firstChild, t6;
        }
        update(t6) {
          const r9 = this.render();
          this.hasUpdated || (this.renderOptions.isConnected = this.isConnected), super.update(t6), this._$Do = D(r9, this.renderRoot, this.renderOptions);
        }
        connectedCallback() {
          super.connectedCallback(), this._$Do?.setConnected(true);
        }
        disconnectedCallback() {
          super.disconnectedCallback(), this._$Do?.setConnected(false);
        }
        render() {
          return E;
        }
      };
      i4._$litElement$ = true, i4["finalized"] = true, s3.litElementHydrateSupport?.({ LitElement: i4 });
      o6 = s3.litElementPolyfillSupport;
      o6?.({ LitElement: i4 });
      (s3.litElementVersions ??= []).push("4.2.2");
    }
  });

  // node_modules/lit-html/is-server.js
  var o7;
  var init_is_server = __esm({
    "node_modules/lit-html/is-server.js"() {
      o7 = false;
    }
  });

  // node_modules/lit/index.js
  var init_lit = __esm({
    "node_modules/lit/index.js"() {
      init_reactive_element();
      init_lit_html();
      init_lit_element();
      init_is_server();
    }
  });

  // node_modules/@material/web/elevation/internal/elevation.js
  var Elevation;
  var init_elevation = __esm({
    "node_modules/@material/web/elevation/internal/elevation.js"() {
      init_lit();
      Elevation = class extends i4 {
        connectedCallback() {
          super.connectedCallback();
          this.setAttribute("aria-hidden", "true");
        }
        render() {
          return b2`<span class="shadow"></span>`;
        }
      };
    }
  });

  // node_modules/@material/web/elevation/internal/elevation-styles.cssresult.js
  var styles, elevation_styles_cssresult_default;
  var init_elevation_styles_cssresult = __esm({
    "node_modules/@material/web/elevation/internal/elevation-styles.cssresult.js"() {
      init_lit();
      styles = i`:host,.shadow,.shadow::before,.shadow::after{border-radius:inherit;inset:0;position:absolute;transition-duration:inherit;transition-property:inherit;transition-timing-function:inherit}:host{display:flex;pointer-events:none;transition-property:box-shadow,opacity}.shadow::before,.shadow::after{content:"";transition-property:box-shadow,opacity;--_level: var(--md-elevation-level, 0);--_shadow-color: var(--md-elevation-shadow-color, var(--md-sys-color-shadow, #000))}.shadow::before{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 3,1) + 2*clamp(0,var(--_level) - 4,1))) calc(1px*(2*clamp(0,var(--_level),1) + clamp(0,var(--_level) - 2,1) + clamp(0,var(--_level) - 4,1))) 0px var(--_shadow-color);opacity:.3}.shadow::after{box-shadow:0px calc(1px*(clamp(0,var(--_level),1) + clamp(0,var(--_level) - 1,1) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(3*clamp(0,var(--_level),2) + 2*clamp(0,var(--_level) - 2,3))) calc(1px*(clamp(0,var(--_level),4) + 2*clamp(0,var(--_level) - 4,1))) var(--_shadow-color);opacity:.15}
`;
      elevation_styles_cssresult_default = styles.styleSheet;
    }
  });

  // node_modules/@material/web/elevation/elevation.js
  var MdElevation;
  var init_elevation2 = __esm({
    "node_modules/@material/web/elevation/elevation.js"() {
      init_tslib_es6();
      init_decorators();
      init_elevation();
      init_elevation_styles_cssresult();
      MdElevation = class MdElevation2 extends Elevation {
      };
      MdElevation.styles = [styles];
      MdElevation = __decorate([
        t("md-elevation")
      ], MdElevation);
    }
  });

  // node_modules/@material/web/internal/controller/attachable-controller.js
  var ATTACHABLE_CONTROLLER, FOR_ATTRIBUTE_OBSERVER, AttachableController;
  var init_attachable_controller = __esm({
    "node_modules/@material/web/internal/controller/attachable-controller.js"() {
      init_lit();
      ATTACHABLE_CONTROLLER = /* @__PURE__ */ Symbol("attachableController");
      if (!o7) {
        FOR_ATTRIBUTE_OBSERVER = new MutationObserver((records) => {
          for (const record of records) {
            record.target[ATTACHABLE_CONTROLLER]?.hostConnected();
          }
        });
      }
      AttachableController = class {
        get htmlFor() {
          return this.host.getAttribute("for");
        }
        set htmlFor(htmlFor) {
          if (htmlFor === null) {
            this.host.removeAttribute("for");
          } else {
            this.host.setAttribute("for", htmlFor);
          }
        }
        get control() {
          if (this.host.hasAttribute("for")) {
            if (!this.htmlFor || !this.host.isConnected) {
              return null;
            }
            return this.host.getRootNode().querySelector(`#${this.htmlFor}`);
          }
          return this.currentControl || this.host.parentElement;
        }
        set control(control) {
          if (control) {
            this.attach(control);
          } else {
            this.detach();
          }
        }
        /**
         * Creates a new controller for an `Attachable` element.
         *
         * @param host The `Attachable` element.
         * @param onControlChange A callback with two parameters for the previous and
         *     next control. An `Attachable` element may perform setup or teardown
         *     logic whenever the control changes.
         */
        constructor(host, onControlChange) {
          this.host = host;
          this.onControlChange = onControlChange;
          this.currentControl = null;
          host.addController(this);
          host[ATTACHABLE_CONTROLLER] = this;
          FOR_ATTRIBUTE_OBSERVER?.observe(host, { attributeFilter: ["for"] });
        }
        attach(control) {
          if (control === this.currentControl) {
            return;
          }
          this.setCurrentControl(control);
          this.host.removeAttribute("for");
        }
        detach() {
          this.setCurrentControl(null);
          this.host.setAttribute("for", "");
        }
        /** @private */
        hostConnected() {
          this.setCurrentControl(this.control);
        }
        /** @private */
        hostDisconnected() {
          this.setCurrentControl(null);
        }
        setCurrentControl(control) {
          this.onControlChange(this.currentControl, control);
          this.currentControl = control;
        }
      };
    }
  });

  // node_modules/@material/web/focus/internal/focus-ring.js
  var EVENTS, FocusRing, HANDLED_BY_FOCUS_RING;
  var init_focus_ring = __esm({
    "node_modules/@material/web/focus/internal/focus-ring.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_attachable_controller();
      EVENTS = ["focusin", "focusout", "pointerdown"];
      FocusRing = class extends i4 {
        constructor() {
          super(...arguments);
          this.visible = false;
          this.inward = false;
          this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
        }
        get htmlFor() {
          return this.attachableController.htmlFor;
        }
        set htmlFor(htmlFor) {
          this.attachableController.htmlFor = htmlFor;
        }
        get control() {
          return this.attachableController.control;
        }
        set control(control) {
          this.attachableController.control = control;
        }
        attach(control) {
          this.attachableController.attach(control);
        }
        detach() {
          this.attachableController.detach();
        }
        connectedCallback() {
          super.connectedCallback();
          this.setAttribute("aria-hidden", "true");
        }
        /** @private */
        handleEvent(event) {
          if (event[HANDLED_BY_FOCUS_RING]) {
            return;
          }
          switch (event.type) {
            default:
              return;
            case "focusin":
              this.visible = this.control?.matches(":focus-visible") ?? false;
              break;
            case "focusout":
            case "pointerdown":
              this.visible = false;
              break;
          }
          event[HANDLED_BY_FOCUS_RING] = true;
        }
        onControlChange(prev, next) {
          if (o7)
            return;
          for (const event of EVENTS) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
          }
        }
        update(changed) {
          if (changed.has("visible")) {
            this.dispatchEvent(new Event("visibility-changed"));
          }
          super.update(changed);
        }
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], FocusRing.prototype, "visible", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], FocusRing.prototype, "inward", void 0);
      HANDLED_BY_FOCUS_RING = /* @__PURE__ */ Symbol("handledByFocusRing");
    }
  });

  // node_modules/@material/web/focus/internal/focus-ring-styles.cssresult.js
  var styles2, focus_ring_styles_cssresult_default;
  var init_focus_ring_styles_cssresult = __esm({
    "node_modules/@material/web/focus/internal/focus-ring-styles.cssresult.js"() {
      init_lit();
      styles2 = i`:host{animation-delay:0s,calc(var(--md-focus-ring-duration, 600ms)*.25);animation-duration:calc(var(--md-focus-ring-duration, 600ms)*.25),calc(var(--md-focus-ring-duration, 600ms)*.75);animation-timing-function:cubic-bezier(0.2, 0, 0, 1);box-sizing:border-box;color:var(--md-focus-ring-color, var(--md-sys-color-secondary, #625b71));display:none;pointer-events:none;position:absolute}:host([visible]){display:flex}:host(:not([inward])){animation-name:outward-grow,outward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) + var(--md-focus-ring-outward-offset, 2px));inset:calc(-1*var(--md-focus-ring-outward-offset, 2px));outline:var(--md-focus-ring-width, 3px) solid currentColor}:host([inward]){animation-name:inward-grow,inward-shrink;border-end-end-radius:calc(var(--md-focus-ring-shape-end-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-end-start-radius:calc(var(--md-focus-ring-shape-end-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-end-radius:calc(var(--md-focus-ring-shape-start-end, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border-start-start-radius:calc(var(--md-focus-ring-shape-start-start, var(--md-focus-ring-shape, var(--md-sys-shape-corner-full, 9999px))) - var(--md-focus-ring-inward-offset, 0px));border:var(--md-focus-ring-width, 3px) solid currentColor;inset:var(--md-focus-ring-inward-offset, 0px)}@keyframes outward-grow{from{outline-width:0}to{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes outward-shrink{from{outline-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-grow{from{border-width:0}to{border-width:var(--md-focus-ring-active-width, 8px)}}@keyframes inward-shrink{from{border-width:var(--md-focus-ring-active-width, 8px)}}@media(prefers-reduced-motion){:host{animation:none}}
`;
      focus_ring_styles_cssresult_default = styles2.styleSheet;
    }
  });

  // node_modules/@material/web/focus/md-focus-ring.js
  var MdFocusRing;
  var init_md_focus_ring = __esm({
    "node_modules/@material/web/focus/md-focus-ring.js"() {
      init_tslib_es6();
      init_decorators();
      init_focus_ring();
      init_focus_ring_styles_cssresult();
      MdFocusRing = class MdFocusRing2 extends FocusRing {
      };
      MdFocusRing.styles = [styles2];
      MdFocusRing = __decorate([
        t("md-focus-ring")
      ], MdFocusRing);
    }
  });

  // node_modules/lit-html/directive.js
  var t4, e7, i5;
  var init_directive = __esm({
    "node_modules/lit-html/directive.js"() {
      t4 = { ATTRIBUTE: 1, CHILD: 2, PROPERTY: 3, BOOLEAN_ATTRIBUTE: 4, EVENT: 5, ELEMENT: 6 };
      e7 = (t6) => (...e9) => ({ _$litDirective$: t6, values: e9 });
      i5 = class {
        constructor(t6) {
        }
        get _$AU() {
          return this._$AM._$AU;
        }
        _$AT(t6, e9, i8) {
          this._$Ct = t6, this._$AM = e9, this._$Ci = i8;
        }
        _$AS(t6, e9) {
          return this.update(t6, e9);
        }
        update(t6, e9) {
          return this.render(...e9);
        }
      };
    }
  });

  // node_modules/lit-html/directives/class-map.js
  var e8;
  var init_class_map = __esm({
    "node_modules/lit-html/directives/class-map.js"() {
      init_lit_html();
      init_directive();
      e8 = e7(class extends i5 {
        constructor(t6) {
          if (super(t6), t6.type !== t4.ATTRIBUTE || "class" !== t6.name || t6.strings?.length > 2) throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.");
        }
        render(t6) {
          return " " + Object.keys(t6).filter((s4) => t6[s4]).join(" ") + " ";
        }
        update(s4, [i8]) {
          if (void 0 === this.st) {
            this.st = /* @__PURE__ */ new Set(), void 0 !== s4.strings && (this.nt = new Set(s4.strings.join(" ").split(/\s/).filter((t6) => "" !== t6)));
            for (const t6 in i8) i8[t6] && !this.nt?.has(t6) && this.st.add(t6);
            return this.render(i8);
          }
          const r9 = s4.element.classList;
          for (const t6 of this.st) t6 in i8 || (r9.remove(t6), this.st.delete(t6));
          for (const t6 in i8) {
            const s5 = !!i8[t6];
            s5 === this.st.has(t6) || this.nt?.has(t6) || (s5 ? (r9.add(t6), this.st.add(t6)) : (r9.remove(t6), this.st.delete(t6)));
          }
          return E;
        }
      });
    }
  });

  // node_modules/lit/directives/class-map.js
  var init_class_map2 = __esm({
    "node_modules/lit/directives/class-map.js"() {
      init_class_map();
    }
  });

  // node_modules/@material/web/internal/motion/animation.js
  function createAnimationSignal() {
    let animationAbortController = null;
    return {
      start() {
        animationAbortController?.abort();
        animationAbortController = new AbortController();
        return animationAbortController.signal;
      },
      finish() {
        animationAbortController = null;
      }
    };
  }
  var EASING;
  var init_animation = __esm({
    "node_modules/@material/web/internal/motion/animation.js"() {
      EASING = {
        STANDARD: "cubic-bezier(0.2, 0, 0, 1)",
        STANDARD_ACCELERATE: "cubic-bezier(.3,0,1,1)",
        STANDARD_DECELERATE: "cubic-bezier(0,0,0,1)",
        EMPHASIZED: "cubic-bezier(.3,0,0,1)",
        EMPHASIZED_ACCELERATE: "cubic-bezier(.3,0,.8,.15)",
        EMPHASIZED_DECELERATE: "cubic-bezier(.05,.7,.1,1)"
      };
    }
  });

  // node_modules/@material/web/ripple/internal/ripple.js
  var PRESS_GROW_MS, MINIMUM_PRESS_MS, INITIAL_ORIGIN_SCALE, PADDING, SOFT_EDGE_MINIMUM_SIZE, SOFT_EDGE_CONTAINER_RATIO, PRESS_PSEUDO, ANIMATION_FILL, State, EVENTS2, TOUCH_DELAY_MS, FORCED_COLORS, Ripple;
  var init_ripple = __esm({
    "node_modules/@material/web/ripple/internal/ripple.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_class_map2();
      init_attachable_controller();
      init_animation();
      PRESS_GROW_MS = 450;
      MINIMUM_PRESS_MS = 225;
      INITIAL_ORIGIN_SCALE = 0.2;
      PADDING = 10;
      SOFT_EDGE_MINIMUM_SIZE = 75;
      SOFT_EDGE_CONTAINER_RATIO = 0.35;
      PRESS_PSEUDO = "::after";
      ANIMATION_FILL = "forwards";
      (function(State2) {
        State2[State2["INACTIVE"] = 0] = "INACTIVE";
        State2[State2["TOUCH_DELAY"] = 1] = "TOUCH_DELAY";
        State2[State2["HOLDING"] = 2] = "HOLDING";
        State2[State2["WAITING_FOR_CLICK"] = 3] = "WAITING_FOR_CLICK";
      })(State || (State = {}));
      EVENTS2 = [
        "click",
        "contextmenu",
        "pointercancel",
        "pointerdown",
        "pointerenter",
        "pointerleave",
        "pointerup"
      ];
      TOUCH_DELAY_MS = 150;
      FORCED_COLORS = o7 ? null : window.matchMedia("(forced-colors: active)");
      Ripple = class extends i4 {
        constructor() {
          super(...arguments);
          this.disabled = false;
          this.hovered = false;
          this.pressed = false;
          this.rippleSize = "";
          this.rippleScale = "";
          this.initialSize = 0;
          this.state = State.INACTIVE;
          this.attachableController = new AttachableController(this, this.onControlChange.bind(this));
        }
        get htmlFor() {
          return this.attachableController.htmlFor;
        }
        set htmlFor(htmlFor) {
          this.attachableController.htmlFor = htmlFor;
        }
        get control() {
          return this.attachableController.control;
        }
        set control(control) {
          this.attachableController.control = control;
        }
        attach(control) {
          this.attachableController.attach(control);
        }
        detach() {
          this.attachableController.detach();
        }
        connectedCallback() {
          super.connectedCallback();
          this.setAttribute("aria-hidden", "true");
        }
        render() {
          const classes = {
            "hovered": this.hovered,
            "pressed": this.pressed
          };
          return b2`<div class="surface ${e8(classes)}"></div>`;
        }
        update(changedProps) {
          if (changedProps.has("disabled") && this.disabled) {
            this.hovered = false;
            this.pressed = false;
          }
          super.update(changedProps);
        }
        /**
         * TODO(b/269799771): make private
         * @private only public for slider
         */
        handlePointerenter(event) {
          if (!this.shouldReactToEvent(event)) {
            return;
          }
          this.hovered = true;
        }
        /**
         * TODO(b/269799771): make private
         * @private only public for slider
         */
        handlePointerleave(event) {
          if (!this.shouldReactToEvent(event)) {
            return;
          }
          this.hovered = false;
          if (this.state !== State.INACTIVE) {
            this.endPressAnimation();
          }
        }
        handlePointerup(event) {
          if (!this.shouldReactToEvent(event)) {
            return;
          }
          if (this.state === State.HOLDING) {
            this.state = State.WAITING_FOR_CLICK;
            return;
          }
          if (this.state === State.TOUCH_DELAY) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(this.rippleStartEvent);
            return;
          }
        }
        async handlePointerdown(event) {
          if (!this.shouldReactToEvent(event)) {
            return;
          }
          this.rippleStartEvent = event;
          if (!this.isTouch(event)) {
            this.state = State.WAITING_FOR_CLICK;
            this.startPressAnimation(event);
            return;
          }
          this.state = State.TOUCH_DELAY;
          await new Promise((resolve) => {
            setTimeout(resolve, TOUCH_DELAY_MS);
          });
          if (this.state !== State.TOUCH_DELAY) {
            return;
          }
          this.state = State.HOLDING;
          this.startPressAnimation(event);
        }
        handleClick() {
          if (this.disabled) {
            return;
          }
          if (this.state === State.WAITING_FOR_CLICK) {
            this.endPressAnimation();
            return;
          }
          if (this.state === State.INACTIVE) {
            this.startPressAnimation();
            this.endPressAnimation();
          }
        }
        handlePointercancel(event) {
          if (!this.shouldReactToEvent(event)) {
            return;
          }
          this.endPressAnimation();
        }
        handleContextmenu() {
          if (this.disabled) {
            return;
          }
          this.endPressAnimation();
        }
        determineRippleSize() {
          const { height, width } = this.getBoundingClientRect();
          const maxDim = Math.max(height, width);
          const softEdgeSize = Math.max(SOFT_EDGE_CONTAINER_RATIO * maxDim, SOFT_EDGE_MINIMUM_SIZE);
          const zoom = this.currentCSSZoom ?? 1;
          const initialSize = Math.floor(maxDim * INITIAL_ORIGIN_SCALE / zoom);
          const hypotenuse = Math.sqrt(width ** 2 + height ** 2);
          const maxRadius = hypotenuse + PADDING;
          this.initialSize = initialSize;
          const maybeZoomedScale = (maxRadius + softEdgeSize) / initialSize;
          this.rippleScale = `${maybeZoomedScale / zoom}`;
          this.rippleSize = `${initialSize}px`;
        }
        getNormalizedPointerEventCoords(pointerEvent) {
          const { scrollX, scrollY } = window;
          const { left, top } = this.getBoundingClientRect();
          const documentX = scrollX + left;
          const documentY = scrollY + top;
          const { pageX, pageY } = pointerEvent;
          const zoom = this.currentCSSZoom ?? 1;
          return {
            x: (pageX - documentX) / zoom,
            y: (pageY - documentY) / zoom
          };
        }
        getTranslationCoordinates(positionEvent) {
          const { height, width } = this.getBoundingClientRect();
          const zoom = this.currentCSSZoom ?? 1;
          const endPoint = {
            x: (width / zoom - this.initialSize) / 2,
            y: (height / zoom - this.initialSize) / 2
          };
          let startPoint;
          if (positionEvent instanceof PointerEvent) {
            startPoint = this.getNormalizedPointerEventCoords(positionEvent);
          } else {
            startPoint = {
              x: width / zoom / 2,
              y: height / zoom / 2
            };
          }
          startPoint = {
            x: startPoint.x - this.initialSize / 2,
            y: startPoint.y - this.initialSize / 2
          };
          return { startPoint, endPoint };
        }
        startPressAnimation(positionEvent) {
          if (!this.mdRoot) {
            return;
          }
          this.pressed = true;
          this.growAnimation?.cancel();
          this.determineRippleSize();
          const { startPoint, endPoint } = this.getTranslationCoordinates(positionEvent);
          const translateStart = `${startPoint.x}px, ${startPoint.y}px`;
          const translateEnd = `${endPoint.x}px, ${endPoint.y}px`;
          this.growAnimation = this.mdRoot.animate({
            top: [0, 0],
            left: [0, 0],
            height: [this.rippleSize, this.rippleSize],
            width: [this.rippleSize, this.rippleSize],
            transform: [
              `translate(${translateStart}) scale(1)`,
              `translate(${translateEnd}) scale(${this.rippleScale})`
            ]
          }, {
            pseudoElement: PRESS_PSEUDO,
            duration: PRESS_GROW_MS,
            easing: EASING.STANDARD,
            fill: ANIMATION_FILL
          });
        }
        async endPressAnimation() {
          this.rippleStartEvent = void 0;
          this.state = State.INACTIVE;
          const animation = this.growAnimation;
          let pressAnimationPlayState = Infinity;
          if (typeof animation?.currentTime === "number") {
            pressAnimationPlayState = animation.currentTime;
          } else if (animation?.currentTime) {
            pressAnimationPlayState = animation.currentTime.to("ms").value;
          }
          if (pressAnimationPlayState >= MINIMUM_PRESS_MS) {
            this.pressed = false;
            return;
          }
          await new Promise((resolve) => {
            setTimeout(resolve, MINIMUM_PRESS_MS - pressAnimationPlayState);
          });
          if (this.growAnimation !== animation) {
            return;
          }
          this.pressed = false;
        }
        /**
         * Returns `true` if
         *  - the ripple element is enabled
         *  - the pointer is primary for the input type
         *  - the pointer is the pointer that started the interaction, or will start
         * the interaction
         *  - the pointer is a touch, or the pointer state has the primary button
         * held, or the pointer is hovering
         */
        shouldReactToEvent(event) {
          if (this.disabled || !event.isPrimary) {
            return false;
          }
          if (this.rippleStartEvent && this.rippleStartEvent.pointerId !== event.pointerId) {
            return false;
          }
          if (event.type === "pointerenter" || event.type === "pointerleave") {
            return !this.isTouch(event);
          }
          const isPrimaryButton = event.buttons === 1;
          return this.isTouch(event) || isPrimaryButton;
        }
        isTouch({ pointerType }) {
          return pointerType === "touch";
        }
        /** @private */
        async handleEvent(event) {
          if (FORCED_COLORS?.matches) {
            return;
          }
          switch (event.type) {
            case "click":
              this.handleClick();
              break;
            case "contextmenu":
              this.handleContextmenu();
              break;
            case "pointercancel":
              this.handlePointercancel(event);
              break;
            case "pointerdown":
              await this.handlePointerdown(event);
              break;
            case "pointerenter":
              this.handlePointerenter(event);
              break;
            case "pointerleave":
              this.handlePointerleave(event);
              break;
            case "pointerup":
              this.handlePointerup(event);
              break;
            default:
              break;
          }
        }
        onControlChange(prev, next) {
          if (o7)
            return;
          for (const event of EVENTS2) {
            prev?.removeEventListener(event, this);
            next?.addEventListener(event, this);
          }
        }
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], Ripple.prototype, "disabled", void 0);
      __decorate([
        r4()
      ], Ripple.prototype, "hovered", void 0);
      __decorate([
        r4()
      ], Ripple.prototype, "pressed", void 0);
      __decorate([
        e4(".surface")
      ], Ripple.prototype, "mdRoot", void 0);
    }
  });

  // node_modules/@material/web/ripple/internal/ripple-styles.cssresult.js
  var styles3, ripple_styles_cssresult_default;
  var init_ripple_styles_cssresult = __esm({
    "node_modules/@material/web/ripple/internal/ripple-styles.cssresult.js"() {
      init_lit();
      styles3 = i`:host{display:flex;margin:auto;pointer-events:none}:host([disabled]){display:none}@media(forced-colors: active){:host{display:none}}:host,.surface{border-radius:inherit;position:absolute;inset:0;overflow:hidden}.surface{-webkit-tap-highlight-color:rgba(0,0,0,0)}.surface::before,.surface::after{content:"";opacity:0;position:absolute}.surface::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));inset:0;transition:opacity 15ms linear,background-color 15ms linear}.surface::after{background:radial-gradient(closest-side, var(--md-ripple-pressed-color, var(--md-sys-color-on-surface, #1d1b20)) max(100% - 70px, 65%), transparent 100%);transform-origin:center center;transition:opacity 375ms linear}.hovered::before{background-color:var(--md-ripple-hover-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-ripple-hover-opacity, 0.08)}.pressed::after{opacity:var(--md-ripple-pressed-opacity, 0.12);transition-duration:105ms}
`;
      ripple_styles_cssresult_default = styles3.styleSheet;
    }
  });

  // node_modules/@material/web/ripple/ripple.js
  var MdRipple;
  var init_ripple2 = __esm({
    "node_modules/@material/web/ripple/ripple.js"() {
      init_tslib_es6();
      init_decorators();
      init_ripple();
      init_ripple_styles_cssresult();
      MdRipple = class MdRipple2 extends Ripple {
      };
      MdRipple.styles = [styles3];
      MdRipple = __decorate([
        t("md-ripple")
      ], MdRipple);
    }
  });

  // node_modules/@material/web/internal/aria/aria.js
  function isAriaAttribute(attribute) {
    return ARIA_ATTRIBUTES.includes(attribute);
  }
  function ariaPropertyToAttribute(property) {
    return property.replace("aria", "aria-").replace(/Elements?/g, "").toLowerCase();
  }
  var ARIA_PROPERTIES, ARIA_ATTRIBUTES;
  var init_aria = __esm({
    "node_modules/@material/web/internal/aria/aria.js"() {
      ARIA_PROPERTIES = [
        "role",
        "ariaAtomic",
        "ariaAutoComplete",
        "ariaBusy",
        "ariaChecked",
        "ariaColCount",
        "ariaColIndex",
        "ariaColSpan",
        "ariaCurrent",
        "ariaDisabled",
        "ariaExpanded",
        "ariaHasPopup",
        "ariaHidden",
        "ariaInvalid",
        "ariaKeyShortcuts",
        "ariaLabel",
        "ariaLevel",
        "ariaLive",
        "ariaModal",
        "ariaMultiLine",
        "ariaMultiSelectable",
        "ariaOrientation",
        "ariaPlaceholder",
        "ariaPosInSet",
        "ariaPressed",
        "ariaReadOnly",
        "ariaRequired",
        "ariaRoleDescription",
        "ariaRowCount",
        "ariaRowIndex",
        "ariaRowSpan",
        "ariaSelected",
        "ariaSetSize",
        "ariaSort",
        "ariaValueMax",
        "ariaValueMin",
        "ariaValueNow",
        "ariaValueText"
      ];
      ARIA_ATTRIBUTES = ARIA_PROPERTIES.map(ariaPropertyToAttribute);
    }
  });

  // node_modules/@material/web/internal/aria/delegate.js
  function mixinDelegatesAria(base) {
    var _a3;
    if (o7) {
      return base;
    }
    class WithDelegatesAriaElement extends base {
      constructor() {
        super(...arguments);
        this[_a3] = /* @__PURE__ */ new Set();
      }
      attributeChangedCallback(name, oldValue, newValue) {
        if (!isAriaAttribute(name)) {
          super.attributeChangedCallback(name, oldValue, newValue);
          return;
        }
        if (this[privateIgnoreAttributeChangesFor].has(name)) {
          return;
        }
        this[privateIgnoreAttributeChangesFor].add(name);
        this.removeAttribute(name);
        this[privateIgnoreAttributeChangesFor].delete(name);
        const dataProperty = ariaAttributeToDataProperty(name);
        if (newValue === null) {
          delete this.dataset[dataProperty];
        } else {
          this.dataset[dataProperty] = newValue;
        }
        this.requestUpdate(ariaAttributeToDataProperty(name), oldValue);
      }
      getAttribute(name) {
        if (isAriaAttribute(name)) {
          return super.getAttribute(ariaAttributeToDataAttribute(name));
        }
        return super.getAttribute(name);
      }
      removeAttribute(name) {
        super.removeAttribute(name);
        if (isAriaAttribute(name)) {
          super.removeAttribute(ariaAttributeToDataAttribute(name));
          this.requestUpdate();
        }
      }
    }
    _a3 = privateIgnoreAttributeChangesFor;
    setupDelegatesAriaProperties(WithDelegatesAriaElement);
    return WithDelegatesAriaElement;
  }
  function setupDelegatesAriaProperties(ctor) {
    for (const ariaProperty of ARIA_PROPERTIES) {
      const ariaAttribute = ariaPropertyToAttribute(ariaProperty);
      const dataAttribute = ariaAttributeToDataAttribute(ariaAttribute);
      const dataProperty = ariaAttributeToDataProperty(ariaAttribute);
      ctor.createProperty(ariaProperty, {
        attribute: ariaAttribute,
        noAccessor: true
      });
      ctor.createProperty(Symbol(dataAttribute), {
        attribute: dataAttribute,
        noAccessor: true
      });
      Object.defineProperty(ctor.prototype, ariaProperty, {
        configurable: true,
        enumerable: true,
        get() {
          return this.dataset[dataProperty] ?? null;
        },
        set(value) {
          const prevValue = this.dataset[dataProperty] ?? null;
          if (value === prevValue) {
            return;
          }
          if (value === null) {
            delete this.dataset[dataProperty];
          } else {
            this.dataset[dataProperty] = value;
          }
          this.requestUpdate(ariaProperty, prevValue);
        }
      });
    }
  }
  function ariaAttributeToDataAttribute(ariaAttribute) {
    return `data-${ariaAttribute}`;
  }
  function ariaAttributeToDataProperty(ariaAttribute) {
    return ariaAttribute.replace(/-\w/, (dashLetter) => dashLetter[1].toUpperCase());
  }
  var privateIgnoreAttributeChangesFor;
  var init_delegate = __esm({
    "node_modules/@material/web/internal/aria/delegate.js"() {
      init_lit();
      init_aria();
      privateIgnoreAttributeChangesFor = /* @__PURE__ */ Symbol("privateIgnoreAttributeChangesFor");
    }
  });

  // node_modules/@material/web/internal/events/form-label-activation.js
  function dispatchActivationClick(element) {
    const event = new MouseEvent("click", { bubbles: true });
    element.dispatchEvent(event);
    return event;
  }
  function isActivationClick(event) {
    if (event.currentTarget !== event.target) {
      return false;
    }
    if (event.composedPath()[0] !== event.target) {
      return false;
    }
    if (event.target.disabled) {
      return false;
    }
    return !squelchEvent(event);
  }
  function squelchEvent(event) {
    const squelched = isSquelchingEvents;
    if (squelched) {
      event.preventDefault();
      event.stopImmediatePropagation();
    }
    squelchEventsForMicrotask();
    return squelched;
  }
  async function squelchEventsForMicrotask() {
    isSquelchingEvents = true;
    await null;
    isSquelchingEvents = false;
  }
  var isSquelchingEvents;
  var init_form_label_activation = __esm({
    "node_modules/@material/web/internal/events/form-label-activation.js"() {
      isSquelchingEvents = false;
    }
  });

  // node_modules/@material/web/labs/behaviors/element-internals.js
  function mixinElementInternals(base) {
    class WithElementInternalsElement extends base {
      get [internals]() {
        if (!this[privateInternals]) {
          this[privateInternals] = this.attachInternals();
        }
        return this[privateInternals];
      }
    }
    return WithElementInternalsElement;
  }
  var internals, privateInternals;
  var init_element_internals = __esm({
    "node_modules/@material/web/labs/behaviors/element-internals.js"() {
      internals = /* @__PURE__ */ Symbol("internals");
      privateInternals = /* @__PURE__ */ Symbol("privateInternals");
    }
  });

  // node_modules/@material/web/labs/behaviors/form-associated.js
  function mixinFormAssociated(base) {
    class FormAssociatedElement extends base {
      get form() {
        return this[internals].form;
      }
      get labels() {
        return this[internals].labels;
      }
      // Use @property for the `name` and `disabled` properties to add them to the
      // `observedAttributes` array and trigger `attributeChangedCallback()`.
      //
      // We don't use Lit's default getter/setter (`noAccessor: true`) because
      // the attributes need to be updated synchronously to work with synchronous
      // form APIs, and Lit updates attributes async by default.
      get name() {
        return this.getAttribute("name") ?? "";
      }
      set name(name) {
        this.setAttribute("name", name);
      }
      get disabled() {
        return this.hasAttribute("disabled");
      }
      set disabled(disabled) {
        this.toggleAttribute("disabled", Boolean(disabled));
      }
      attributeChangedCallback(name, old, value) {
        if (name === "name" || name === "disabled") {
          const oldValue = name === "disabled" ? old !== null : old;
          this.requestUpdate(name, oldValue);
          return;
        }
        super.attributeChangedCallback(name, old, value);
      }
      requestUpdate(name, oldValue, options) {
        super.requestUpdate(name, oldValue, options);
        this[internals].setFormValue(this[getFormValue](), this[getFormState]());
      }
      [getFormValue]() {
        return this.getAttribute("value");
      }
      [getFormState]() {
        return this[getFormValue]();
      }
      formDisabledCallback(disabled) {
        this.disabled = disabled;
      }
    }
    FormAssociatedElement.formAssociated = true;
    __decorate([
      n3({ noAccessor: true })
    ], FormAssociatedElement.prototype, "name", null);
    __decorate([
      n3({ type: Boolean, noAccessor: true })
    ], FormAssociatedElement.prototype, "disabled", null);
    return FormAssociatedElement;
  }
  var getFormValue, getFormState;
  var init_form_associated = __esm({
    "node_modules/@material/web/labs/behaviors/form-associated.js"() {
      init_tslib_es6();
      init_decorators();
      init_element_internals();
      getFormValue = /* @__PURE__ */ Symbol("getFormValue");
      getFormState = /* @__PURE__ */ Symbol("getFormState");
    }
  });

  // node_modules/@material/web/internal/events/dispatch-hooks.js
  function afterDispatch(event, callback) {
    const hooks = event[dispatchHooks];
    if (!hooks) {
      throw new Error(`'${event.type}' event needs setupDispatchHooks().`);
    }
    hooks.addEventListener("after", callback, { once: true });
  }
  function setupDispatchHooks(element, ...eventTypes) {
    let typesAlreadySetUp = ELEMENT_DISPATCH_HOOK_TYPES.get(element);
    if (!typesAlreadySetUp) {
      typesAlreadySetUp = /* @__PURE__ */ new Set();
      ELEMENT_DISPATCH_HOOK_TYPES.set(element, typesAlreadySetUp);
    }
    for (const eventType of eventTypes) {
      if (typesAlreadySetUp.has(eventType)) {
        continue;
      }
      element.addEventListener(eventType, (event) => {
        const hooks = new EventTarget();
        event[dispatchHooks] = hooks;
        const cleanupLastNodeListener = new AbortController();
        const callAfterDispatch = () => {
          cleanupLastNodeListener.abort();
          hooks.dispatchEvent(new Event("after"));
        };
        const patchStopPropagation = (superMethod) => {
          return function() {
            superMethod.call(this);
            callAfterDispatch();
          };
        };
        event.stopPropagation = patchStopPropagation(event.stopPropagation);
        event.stopImmediatePropagation = patchStopPropagation(event.stopImmediatePropagation);
        const composedPath = event.composedPath();
        let lastNodeForEvent;
        if (event.composed && event.bubbles) {
          lastNodeForEvent = composedPath[composedPath.length - 1];
        } else if (!event.bubbles) {
          lastNodeForEvent = composedPath[0];
        } else {
          lastNodeForEvent = composedPath[0].getRootNode();
        }
        lastNodeForEvent.addEventListener(eventType, () => {
          callAfterDispatch();
        }, { once: true, signal: cleanupLastNodeListener.signal });
      }, {
        // Ensure this listener runs before other listeners.
        // `setupDispatchHooks()` should be called in constructors to also
        // ensure they run before any other externally-added capture listeners.
        capture: true
      });
      typesAlreadySetUp.add(eventType);
    }
  }
  var dispatchHooks, ELEMENT_DISPATCH_HOOK_TYPES;
  var init_dispatch_hooks = __esm({
    "node_modules/@material/web/internal/events/dispatch-hooks.js"() {
      dispatchHooks = /* @__PURE__ */ Symbol("dispatchHooks");
      ELEMENT_DISPATCH_HOOK_TYPES = /* @__PURE__ */ new WeakMap();
    }
  });

  // node_modules/@material/web/labs/behaviors/form-submitter.js
  function mixinFormSubmitter(base) {
    class FormSubmitterElement extends base {
      // Name attribute must reflect synchronously for form integration.
      get name() {
        return this.getAttribute("name") ?? "";
      }
      set name(name) {
        this.setAttribute("name", name);
      }
      // Mixins must have a constructor with `...args: any[]`
      // tslint:disable-next-line:no-any
      constructor(...args) {
        super(...args);
        this.type = "submit";
        this.value = "";
        if (o7)
          return;
        setupDispatchHooks(this, "click");
        this.addEventListener("click", async (event) => {
          const isReset = this.type === "reset";
          const isSubmit = this.type === "submit";
          const elementInternals = this[internals];
          const { form } = elementInternals;
          if (!form || !(isSubmit || isReset)) {
            return;
          }
          afterDispatch(event, () => {
            if (event.defaultPrevented) {
              return;
            }
            if (isReset) {
              form.reset();
              return;
            }
            form.addEventListener("submit", (submitEvent) => {
              Object.defineProperty(submitEvent, "submitter", {
                configurable: true,
                enumerable: true,
                get: () => this
              });
            }, { capture: true, once: true });
            elementInternals.setFormValue(this.value);
            form.requestSubmit();
          });
        });
      }
    }
    __decorate([
      n3()
    ], FormSubmitterElement.prototype, "type", void 0);
    __decorate([
      n3({ reflect: true })
    ], FormSubmitterElement.prototype, "value", void 0);
    return FormSubmitterElement;
  }
  var init_form_submitter = __esm({
    "node_modules/@material/web/labs/behaviors/form-submitter.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_dispatch_hooks();
      init_element_internals();
    }
  });

  // node_modules/@material/web/button/internal/button.js
  var buttonBaseClass, Button;
  var init_button = __esm({
    "node_modules/@material/web/button/internal/button.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_delegate();
      init_form_label_activation();
      init_element_internals();
      init_form_associated();
      init_form_submitter();
      buttonBaseClass = mixinDelegatesAria(mixinFormSubmitter(mixinFormAssociated(mixinElementInternals(i4))));
      Button = class extends buttonBaseClass {
        constructor() {
          super();
          this.softDisabled = false;
          this.href = "";
          this.download = "";
          this.target = "";
          this.trailingIcon = false;
          this.hasIcon = false;
          if (!o7) {
            this.addEventListener("click", this.handleClick.bind(this));
          }
        }
        focus() {
          this.buttonElement?.focus();
        }
        blur() {
          this.buttonElement?.blur();
        }
        render() {
          const isRippleDisabled = this.disabled || this.softDisabled;
          const buttonOrLink = this.href ? this.renderLink() : this.renderButton();
          const buttonId = this.href ? "link" : "button";
          return b2`
      ${this.renderElevationOrOutline?.()}
      <div class="background"></div>
      <md-focus-ring part="focus-ring" for=${buttonId}></md-focus-ring>
      <md-ripple
        part="ripple"
        for=${buttonId}
        ?disabled="${isRippleDisabled}"></md-ripple>
      ${buttonOrLink}
    `;
        }
        renderButton() {
          const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
          return b2`<button
      id="button"
      class="button"
      ?disabled=${this.disabled}
      aria-disabled=${this.softDisabled || A}
      aria-label="${ariaLabel || A}"
      aria-haspopup="${ariaHasPopup || A}"
      aria-expanded="${ariaExpanded || A}">
      ${this.renderContent()}
    </button>`;
        }
        renderLink() {
          const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
          return b2`<a
      id="link"
      class="button"
      aria-label="${ariaLabel || A}"
      aria-haspopup="${ariaHasPopup || A}"
      aria-expanded="${ariaExpanded || A}"
      aria-disabled=${this.disabled || this.softDisabled || A}
      tabindex="${this.disabled && !this.softDisabled ? -1 : A}"
      href=${this.href}
      download=${this.download || A}
      target=${this.target || A}
      >${this.renderContent()}
    </a>`;
        }
        renderContent() {
          const icon = b2`<slot
      name="icon"
      @slotchange="${this.handleSlotChange}"></slot>`;
          return b2`
      <span class="touch"></span>
      ${this.trailingIcon ? A : icon}
      <span class="label"><slot></slot></span>
      ${this.trailingIcon ? icon : A}
    `;
        }
        handleClick(event) {
          if (this.softDisabled || this.disabled && this.href) {
            event.stopImmediatePropagation();
            event.preventDefault();
            return;
          }
          if (!isActivationClick(event) || !this.buttonElement) {
            return;
          }
          this.focus();
          dispatchActivationClick(this.buttonElement);
        }
        handleSlotChange() {
          this.hasIcon = this.assignedIcons.length > 0;
        }
      };
      Button.shadowRootOptions = {
        mode: "open",
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean, attribute: "soft-disabled", reflect: true })
      ], Button.prototype, "softDisabled", void 0);
      __decorate([
        n3()
      ], Button.prototype, "href", void 0);
      __decorate([
        n3()
      ], Button.prototype, "download", void 0);
      __decorate([
        n3()
      ], Button.prototype, "target", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "trailing-icon", reflect: true })
      ], Button.prototype, "trailingIcon", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "has-icon", reflect: true })
      ], Button.prototype, "hasIcon", void 0);
      __decorate([
        e4(".button")
      ], Button.prototype, "buttonElement", void 0);
      __decorate([
        o4({ slot: "icon", flatten: true })
      ], Button.prototype, "assignedIcons", void 0);
    }
  });

  // node_modules/@material/web/button/internal/elevated-button.js
  var ElevatedButton;
  var init_elevated_button = __esm({
    "node_modules/@material/web/button/internal/elevated-button.js"() {
      init_elevation2();
      init_lit();
      init_button();
      ElevatedButton = class extends Button {
        renderElevationOrOutline() {
          return b2`<md-elevation part="elevation"></md-elevation>`;
        }
      };
    }
  });

  // node_modules/@material/web/button/internal/elevated-styles.cssresult.js
  var styles4, elevated_styles_cssresult_default;
  var init_elevated_styles_cssresult = __esm({
    "node_modules/@material/web/button/internal/elevated-styles.cssresult.js"() {
      init_lit();
      styles4 = i`:host{--_container-color: var(--md-elevated-button-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_container-elevation: var(--md-elevated-button-container-elevation, 1);--_container-height: var(--md-elevated-button-container-height, 40px);--_container-shadow-color: var(--md-elevated-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-elevated-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-elevated-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-elevated-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-elevated-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-elevated-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-elevated-button-focus-container-elevation, 1);--_focus-label-text-color: var(--md-elevated-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-elevated-button-hover-container-elevation, 2);--_hover-label-text-color: var(--md-elevated-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-elevated-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-elevated-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-elevated-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-elevated-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-elevated-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-elevated-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-elevated-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-elevated-button-pressed-container-elevation, 1);--_pressed-label-text-color: var(--md-elevated-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-elevated-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-elevated-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-elevated-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-elevated-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-elevated-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-elevated-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-elevated-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-elevated-button-icon-size, 18px);--_pressed-icon-color: var(--md-elevated-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-elevated-button-container-shape-start-start, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-elevated-button-container-shape-start-end, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-elevated-button-container-shape-end-end, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-elevated-button-container-shape-end-start, var(--md-elevated-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-elevated-button-leading-space, 24px);--_trailing-space: var(--md-elevated-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-elevated-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-elevated-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-elevated-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-elevated-button-with-trailing-icon-trailing-space, 16px)}
`;
      elevated_styles_cssresult_default = styles4.styleSheet;
    }
  });

  // node_modules/@material/web/button/internal/shared-elevation-styles.cssresult.js
  var styles5, shared_elevation_styles_cssresult_default;
  var init_shared_elevation_styles_cssresult = __esm({
    "node_modules/@material/web/button/internal/shared-elevation-styles.cssresult.js"() {
      init_lit();
      styles5 = i`md-elevation{transition-duration:280ms}:host(:is([disabled],[soft-disabled])) md-elevation{transition:none}md-elevation{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}:host(:focus-within) md-elevation{--md-elevation-level: var(--_focus-container-elevation)}:host(:hover) md-elevation{--md-elevation-level: var(--_hover-container-elevation)}:host(:active) md-elevation{--md-elevation-level: var(--_pressed-container-elevation)}:host(:is([disabled],[soft-disabled])) md-elevation{--md-elevation-level: var(--_disabled-container-elevation)}
`;
      shared_elevation_styles_cssresult_default = styles5.styleSheet;
    }
  });

  // node_modules/@material/web/button/internal/shared-styles.cssresult.js
  var styles6, shared_styles_cssresult_default;
  var init_shared_styles_cssresult = __esm({
    "node_modules/@material/web/button/internal/shared-styles.cssresult.js"() {
      init_lit();
      styles6 = i`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);box-sizing:border-box;cursor:pointer;display:inline-flex;gap:8px;min-height:var(--_container-height);outline:none;padding-block:calc((var(--_container-height) - max(var(--_label-text-line-height),var(--_icon-size)))/2);padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space);place-content:center;place-items:center;position:relative;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);text-overflow:ellipsis;text-wrap:nowrap;user-select:none;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:top;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){cursor:default;pointer-events:none}.button{border-radius:inherit;cursor:inherit;display:inline-flex;align-items:center;justify-content:center;border:none;outline:none;-webkit-appearance:none;vertical-align:middle;background:rgba(0,0,0,0);text-decoration:none;min-width:calc(64px - var(--_leading-space) - var(--_trailing-space));width:100%;z-index:0;height:100%;font:inherit;color:var(--_label-text-color);padding:0;gap:inherit;text-transform:inherit}.button::-moz-focus-inner{padding:0;border:0}:host(:hover) .button{color:var(--_hover-label-text-color)}:host(:focus-within) .button{color:var(--_focus-label-text-color)}:host(:active) .button{color:var(--_pressed-label-text-color)}.background{background:var(--_container-color);border-radius:inherit;inset:0;position:absolute}.label{overflow:hidden}:is(.button,.label,.label slot),.label ::slotted(*){text-overflow:inherit}:host(:is([disabled],[soft-disabled])) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}:host(:is([disabled],[soft-disabled])) .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}@media(forced-colors: active){.background{border:1px solid CanvasText}:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1;--_disabled-container-opacity: 1;--_disabled-label-text-color: GrayText;--_disabled-label-text-opacity: 1}}:host([has-icon]:not([trailing-icon])){padding-inline-start:var(--_with-leading-icon-leading-space);padding-inline-end:var(--_with-leading-icon-trailing-space)}:host([has-icon][trailing-icon]){padding-inline-start:var(--_with-trailing-icon-leading-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;flex-shrink:0;color:var(--_icon-color);font-size:var(--_icon-size);inline-size:var(--_icon-size);block-size:var(--_icon-size)}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus-within) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host(:is([disabled],[soft-disabled])) ::slotted([slot=icon]){color:var(--_disabled-icon-color);opacity:var(--_disabled-icon-opacity)}.touch{position:absolute;top:50%;height:max(48px,100%);left:0;right:0;transform:translateY(-50%)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}:host([touch-target=none]) .touch{display:none}
`;
      shared_styles_cssresult_default = styles6.styleSheet;
    }
  });

  // node_modules/@material/web/button/elevated-button.js
  var MdElevatedButton;
  var init_elevated_button2 = __esm({
    "node_modules/@material/web/button/elevated-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_elevated_button();
      init_elevated_styles_cssresult();
      init_shared_elevation_styles_cssresult();
      init_shared_styles_cssresult();
      MdElevatedButton = class MdElevatedButton2 extends ElevatedButton {
      };
      MdElevatedButton.styles = [
        styles6,
        styles5,
        styles4
      ];
      MdElevatedButton = __decorate([
        t("md-elevated-button")
      ], MdElevatedButton);
    }
  });

  // node_modules/@material/web/button/internal/filled-button.js
  var FilledButton;
  var init_filled_button = __esm({
    "node_modules/@material/web/button/internal/filled-button.js"() {
      init_elevation2();
      init_lit();
      init_button();
      FilledButton = class extends Button {
        renderElevationOrOutline() {
          return b2`<md-elevation part="elevation"></md-elevation>`;
        }
      };
    }
  });

  // node_modules/@material/web/button/internal/filled-styles.cssresult.js
  var styles7, filled_styles_cssresult_default;
  var init_filled_styles_cssresult = __esm({
    "node_modules/@material/web/button/internal/filled-styles.cssresult.js"() {
      init_lit();
      styles7 = i`:host{--_container-color: var(--md-filled-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-elevation: var(--md-filled-button-container-elevation, 0);--_container-height: var(--md-filled-button-container-height, 40px);--_container-shadow-color: var(--md-filled-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-button-focus-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-container-elevation: var(--md-filled-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-button-hover-label-text-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-button-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-filled-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-button-pressed-label-text-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-color: var(--md-filled-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_container-shape-start-start: var(--md-filled-button-container-shape-start-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-button-container-shape-start-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-button-container-shape-end-end, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-button-container-shape-end-start, var(--md-filled-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-button-leading-space, 24px);--_trailing-space: var(--md-filled-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-button-with-trailing-icon-trailing-space, 16px)}
`;
      filled_styles_cssresult_default = styles7.styleSheet;
    }
  });

  // node_modules/@material/web/button/filled-button.js
  var MdFilledButton;
  var init_filled_button2 = __esm({
    "node_modules/@material/web/button/filled-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_filled_button();
      init_filled_styles_cssresult();
      init_shared_elevation_styles_cssresult();
      init_shared_styles_cssresult();
      MdFilledButton = class MdFilledButton2 extends FilledButton {
      };
      MdFilledButton.styles = [
        styles6,
        styles5,
        styles7
      ];
      MdFilledButton = __decorate([
        t("md-filled-button")
      ], MdFilledButton);
    }
  });

  // node_modules/@material/web/button/internal/filled-tonal-button.js
  var FilledTonalButton;
  var init_filled_tonal_button = __esm({
    "node_modules/@material/web/button/internal/filled-tonal-button.js"() {
      init_elevation2();
      init_lit();
      init_button();
      FilledTonalButton = class extends Button {
        renderElevationOrOutline() {
          return b2`<md-elevation part="elevation"></md-elevation>`;
        }
      };
    }
  });

  // node_modules/@material/web/button/internal/filled-tonal-styles.cssresult.js
  var styles8, filled_tonal_styles_cssresult_default;
  var init_filled_tonal_styles_cssresult = __esm({
    "node_modules/@material/web/button/internal/filled-tonal-styles.cssresult.js"() {
      init_lit();
      styles8 = i`:host{--_container-color: var(--md-filled-tonal-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-elevation: var(--md-filled-tonal-button-container-elevation, 0);--_container-height: var(--md-filled-tonal-button-container-height, 40px);--_container-shadow-color: var(--md-filled-tonal-button-container-shadow-color, var(--md-sys-color-shadow, #000));--_disabled-container-color: var(--md-filled-tonal-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-elevation: var(--md-filled-tonal-button-disabled-container-elevation, 0);--_disabled-container-opacity: var(--md-filled-tonal-button-disabled-container-opacity, 0.12);--_disabled-label-text-color: var(--md-filled-tonal-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-tonal-button-disabled-label-text-opacity, 0.38);--_focus-container-elevation: var(--md-filled-tonal-button-focus-container-elevation, 0);--_focus-label-text-color: var(--md-filled-tonal-button-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-container-elevation: var(--md-filled-tonal-button-hover-container-elevation, 1);--_hover-label-text-color: var(--md-filled-tonal-button-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filled-tonal-button-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_label-text-font: var(--md-filled-tonal-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-tonal-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filled-tonal-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filled-tonal-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-container-elevation: var(--md-filled-tonal-button-pressed-container-elevation, 0);--_pressed-label-text-color: var(--md-filled-tonal-button-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-color: var(--md-filled-tonal-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-button-icon-size, 18px);--_pressed-icon-color: var(--md-filled-tonal-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_container-shape-start-start: var(--md-filled-tonal-button-container-shape-start-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-button-container-shape-start-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-button-container-shape-end-end, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-button-container-shape-end-start, var(--md-filled-tonal-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-filled-tonal-button-leading-space, 24px);--_trailing-space: var(--md-filled-tonal-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-filled-tonal-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-filled-tonal-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-filled-tonal-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-filled-tonal-button-with-trailing-icon-trailing-space, 16px)}
`;
      filled_tonal_styles_cssresult_default = styles8.styleSheet;
    }
  });

  // node_modules/@material/web/button/filled-tonal-button.js
  var MdFilledTonalButton;
  var init_filled_tonal_button2 = __esm({
    "node_modules/@material/web/button/filled-tonal-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_filled_tonal_button();
      init_filled_tonal_styles_cssresult();
      init_shared_elevation_styles_cssresult();
      init_shared_styles_cssresult();
      MdFilledTonalButton = class MdFilledTonalButton2 extends FilledTonalButton {
      };
      MdFilledTonalButton.styles = [
        styles6,
        styles5,
        styles8
      ];
      MdFilledTonalButton = __decorate([
        t("md-filled-tonal-button")
      ], MdFilledTonalButton);
    }
  });

  // node_modules/@material/web/button/internal/outlined-button.js
  var OutlinedButton;
  var init_outlined_button = __esm({
    "node_modules/@material/web/button/internal/outlined-button.js"() {
      init_lit();
      init_button();
      OutlinedButton = class extends Button {
        renderElevationOrOutline() {
          return b2`<div class="outline"></div>`;
        }
      };
    }
  });

  // node_modules/@material/web/button/internal/outlined-styles.cssresult.js
  var styles9, outlined_styles_cssresult_default;
  var init_outlined_styles_cssresult = __esm({
    "node_modules/@material/web/button/internal/outlined-styles.cssresult.js"() {
      init_lit();
      styles9 = i`:host{--_container-height: var(--md-outlined-button-container-height, 40px);--_disabled-label-text-color: var(--md-outlined-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-button-disabled-label-text-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-button-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-outlined-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-outlined-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-outlined-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-outlined-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-outlined-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-outlined-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-outlined-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-outlined-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_outline-color: var(--md-outlined-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-button-outline-width, 1px);--_pressed-label-text-color: var(--md-outlined-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-outline-color: var(--md-outlined-button-pressed-outline-color, var(--md-sys-color-outline, #79747e));--_pressed-state-layer-color: var(--md-outlined-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-outlined-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-outlined-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-outlined-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-outlined-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-outlined-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-outlined-button-icon-size, 18px);--_pressed-icon-color: var(--md-outlined-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-outlined-button-container-shape-start-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-button-container-shape-start-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-button-container-shape-end-end, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-button-container-shape-end-start, var(--md-outlined-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-outlined-button-leading-space, 24px);--_trailing-space: var(--md-outlined-button-trailing-space, 24px);--_with-leading-icon-leading-space: var(--md-outlined-button-with-leading-icon-leading-space, 16px);--_with-leading-icon-trailing-space: var(--md-outlined-button-with-leading-icon-trailing-space, 24px);--_with-trailing-icon-leading-space: var(--md-outlined-button-with-trailing-icon-leading-space, 24px);--_with-trailing-icon-trailing-space: var(--md-outlined-button-with-trailing-icon-trailing-space, 16px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}.outline{inset:0;border-style:solid;position:absolute;box-sizing:border-box;border-color:var(--_outline-color);border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}:host(:active) .outline{border-color:var(--_pressed-outline-color)}:host(:is([disabled],[soft-disabled])) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])) .background{border-color:GrayText}:host(:is([disabled],[soft-disabled])) .outline{opacity:1}}.outline,md-ripple{border-width:var(--_outline-width)}md-ripple{inline-size:calc(100% - 2*var(--_outline-width));block-size:calc(100% - 2*var(--_outline-width));border-style:solid;border-color:rgba(0,0,0,0)}
`;
      outlined_styles_cssresult_default = styles9.styleSheet;
    }
  });

  // node_modules/@material/web/button/outlined-button.js
  var MdOutlinedButton;
  var init_outlined_button2 = __esm({
    "node_modules/@material/web/button/outlined-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_outlined_button();
      init_outlined_styles_cssresult();
      init_shared_styles_cssresult();
      MdOutlinedButton = class MdOutlinedButton2 extends OutlinedButton {
      };
      MdOutlinedButton.styles = [styles6, styles9];
      MdOutlinedButton = __decorate([
        t("md-outlined-button")
      ], MdOutlinedButton);
    }
  });

  // node_modules/@material/web/button/internal/text-button.js
  var TextButton;
  var init_text_button = __esm({
    "node_modules/@material/web/button/internal/text-button.js"() {
      init_button();
      TextButton = class extends Button {
      };
    }
  });

  // node_modules/@material/web/button/internal/text-styles.cssresult.js
  var styles10, text_styles_cssresult_default;
  var init_text_styles_cssresult = __esm({
    "node_modules/@material/web/button/internal/text-styles.cssresult.js"() {
      init_lit();
      styles10 = i`:host{--_container-height: var(--md-text-button-container-height, 40px);--_disabled-label-text-color: var(--md-text-button-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-text-button-disabled-label-text-opacity, 0.38);--_focus-label-text-color: var(--md-text-button-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-text-button-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-text-button-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-text-button-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-text-button-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-text-button-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-text-button-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-text-button-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-text-button-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-text-button-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-text-button-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-text-button-pressed-state-layer-opacity, 0.12);--_disabled-icon-color: var(--md-text-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-text-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-text-button-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-icon-color: var(--md-text-button-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-color: var(--md-text-button-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-text-button-icon-size, 18px);--_pressed-icon-color: var(--md-text-button-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-text-button-container-shape-start-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-text-button-container-shape-start-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-text-button-container-shape-end-end, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-text-button-container-shape-end-start, var(--md-text-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_leading-space: var(--md-text-button-leading-space, 12px);--_trailing-space: var(--md-text-button-trailing-space, 12px);--_with-leading-icon-leading-space: var(--md-text-button-with-leading-icon-leading-space, 12px);--_with-leading-icon-trailing-space: var(--md-text-button-with-leading-icon-trailing-space, 16px);--_with-trailing-icon-leading-space: var(--md-text-button-with-trailing-icon-leading-space, 16px);--_with-trailing-icon-trailing-space: var(--md-text-button-with-trailing-icon-trailing-space, 12px);--_container-color: none;--_disabled-container-color: none;--_disabled-container-opacity: 0}
`;
      text_styles_cssresult_default = styles10.styleSheet;
    }
  });

  // node_modules/@material/web/button/text-button.js
  var MdTextButton;
  var init_text_button2 = __esm({
    "node_modules/@material/web/button/text-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_shared_styles_cssresult();
      init_text_button();
      init_text_styles_cssresult();
      MdTextButton = class MdTextButton2 extends TextButton {
      };
      MdTextButton.styles = [styles6, styles10];
      MdTextButton = __decorate([
        t("md-text-button")
      ], MdTextButton);
    }
  });

  // node_modules/@material/web/internal/events/redispatch-event.js
  function redispatchEvent(element, event) {
    if (event.bubbles && (!element.shadowRoot || event.composed)) {
      event.stopPropagation();
    }
    const copy = Reflect.construct(event.constructor, [event.type, event]);
    const dispatched = element.dispatchEvent(copy);
    if (!dispatched) {
      event.preventDefault();
    }
    return dispatched;
  }
  var init_redispatch_event = __esm({
    "node_modules/@material/web/internal/events/redispatch-event.js"() {
    }
  });

  // node_modules/@material/web/labs/behaviors/constraint-validation.js
  function mixinConstraintValidation(base) {
    var _a3;
    class ConstraintValidationElement extends base {
      constructor() {
        super(...arguments);
        this[_a3] = "";
      }
      get validity() {
        this[privateSyncValidity]();
        return this[internals].validity;
      }
      get validationMessage() {
        this[privateSyncValidity]();
        return this[internals].validationMessage;
      }
      get willValidate() {
        this[privateSyncValidity]();
        return this[internals].willValidate;
      }
      checkValidity() {
        this[privateSyncValidity]();
        return this[internals].checkValidity();
      }
      reportValidity() {
        this[privateSyncValidity]();
        return this[internals].reportValidity();
      }
      setCustomValidity(error) {
        this[privateCustomValidationMessage] = error;
        this[privateSyncValidity]();
      }
      requestUpdate(name, oldValue, options) {
        super.requestUpdate(name, oldValue, options);
        this[privateSyncValidity]();
      }
      firstUpdated(changed) {
        super.firstUpdated(changed);
        this[privateSyncValidity]();
      }
      [(_a3 = privateCustomValidationMessage, privateSyncValidity)]() {
        if (o7) {
          return;
        }
        if (!this[privateValidator]) {
          this[privateValidator] = this[createValidator]();
        }
        const { validity, validationMessage: nonCustomValidationMessage } = this[privateValidator].getValidity();
        const customError = !!this[privateCustomValidationMessage];
        const validationMessage = this[privateCustomValidationMessage] || nonCustomValidationMessage;
        this[internals].setValidity({ ...validity, customError }, validationMessage, this[getValidityAnchor]() ?? void 0);
      }
      [createValidator]() {
        throw new Error("Implement [createValidator]");
      }
      [getValidityAnchor]() {
        throw new Error("Implement [getValidityAnchor]");
      }
    }
    return ConstraintValidationElement;
  }
  var createValidator, getValidityAnchor, privateValidator, privateSyncValidity, privateCustomValidationMessage;
  var init_constraint_validation = __esm({
    "node_modules/@material/web/labs/behaviors/constraint-validation.js"() {
      init_lit();
      init_element_internals();
      createValidator = /* @__PURE__ */ Symbol("createValidator");
      getValidityAnchor = /* @__PURE__ */ Symbol("getValidityAnchor");
      privateValidator = /* @__PURE__ */ Symbol("privateValidator");
      privateSyncValidity = /* @__PURE__ */ Symbol("privateSyncValidity");
      privateCustomValidationMessage = /* @__PURE__ */ Symbol("privateCustomValidationMessage");
    }
  });

  // node_modules/@material/web/labs/behaviors/validators/validator.js
  var Validator;
  var init_validator = __esm({
    "node_modules/@material/web/labs/behaviors/validators/validator.js"() {
      Validator = class {
        /**
         * Creates a new validator.
         *
         * @param getCurrentState A callback that returns the current state of
         *     constraint validation-related properties.
         */
        constructor(getCurrentState) {
          this.getCurrentState = getCurrentState;
          this.currentValidity = {
            validity: {},
            validationMessage: ""
          };
        }
        /**
         * Returns the current `ValidityStateFlags` and validation message for the
         * validator.
         *
         * If the constraint validation state has not changed, this will return a
         * cached result. This is important since `getValidity()` can be called
         * frequently in response to synchronous property changes.
         *
         * @return The current validity and validation message.
         */
        getValidity() {
          const state = this.getCurrentState();
          const hasStateChanged = !this.prevState || !this.equals(this.prevState, state);
          if (!hasStateChanged) {
            return this.currentValidity;
          }
          const { validity, validationMessage } = this.computeValidity(state);
          this.prevState = this.copy(state);
          this.currentValidity = {
            validationMessage,
            validity: {
              // Change any `ValidityState` instances into `ValidityStateFlags` since
              // `ValidityState` cannot be easily `{...spread}`.
              badInput: validity.badInput,
              customError: validity.customError,
              patternMismatch: validity.patternMismatch,
              rangeOverflow: validity.rangeOverflow,
              rangeUnderflow: validity.rangeUnderflow,
              stepMismatch: validity.stepMismatch,
              tooLong: validity.tooLong,
              tooShort: validity.tooShort,
              typeMismatch: validity.typeMismatch,
              valueMissing: validity.valueMissing
            }
          };
          return this.currentValidity;
        }
      };
    }
  });

  // node_modules/@material/web/labs/behaviors/validators/checkbox-validator.js
  var CheckboxValidator;
  var init_checkbox_validator = __esm({
    "node_modules/@material/web/labs/behaviors/validators/checkbox-validator.js"() {
      init_validator();
      CheckboxValidator = class extends Validator {
        computeValidity(state) {
          if (!this.checkboxControl) {
            this.checkboxControl = document.createElement("input");
            this.checkboxControl.type = "checkbox";
          }
          this.checkboxControl.checked = state.checked;
          this.checkboxControl.required = state.required;
          return {
            validity: this.checkboxControl.validity,
            validationMessage: this.checkboxControl.validationMessage
          };
        }
        equals(prev, next) {
          return prev.checked === next.checked && prev.required === next.required;
        }
        copy({ checked, required }) {
          return { checked, required };
        }
      };
    }
  });

  // node_modules/@material/web/checkbox/internal/checkbox.js
  var checkboxBaseClass, Checkbox;
  var init_checkbox = __esm({
    "node_modules/@material/web/checkbox/internal/checkbox.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_delegate();
      init_form_label_activation();
      init_redispatch_event();
      init_constraint_validation();
      init_element_internals();
      init_form_associated();
      init_checkbox_validator();
      checkboxBaseClass = mixinDelegatesAria(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(i4))));
      Checkbox = class extends checkboxBaseClass {
        constructor() {
          super();
          this.checked = false;
          this.indeterminate = false;
          this.required = false;
          this.value = "on";
          this.prevChecked = false;
          this.prevDisabled = false;
          this.prevIndeterminate = false;
          if (!o7) {
            this.addEventListener("click", (event) => {
              if (!isActivationClick(event) || !this.input) {
                return;
              }
              this.focus();
              dispatchActivationClick(this.input);
            });
          }
        }
        update(changed) {
          if (changed.has("checked") || changed.has("disabled") || changed.has("indeterminate")) {
            this.prevChecked = changed.get("checked") ?? this.checked;
            this.prevDisabled = changed.get("disabled") ?? this.disabled;
            this.prevIndeterminate = changed.get("indeterminate") ?? this.indeterminate;
          }
          super.update(changed);
        }
        render() {
          const prevNone = !this.prevChecked && !this.prevIndeterminate;
          const prevChecked = this.prevChecked && !this.prevIndeterminate;
          const prevIndeterminate = this.prevIndeterminate;
          const isChecked = this.checked && !this.indeterminate;
          const isIndeterminate = this.indeterminate;
          const containerClasses = e8({
            "disabled": this.disabled,
            "selected": isChecked || isIndeterminate,
            "unselected": !isChecked && !isIndeterminate,
            "checked": isChecked,
            "indeterminate": isIndeterminate,
            "prev-unselected": prevNone,
            "prev-checked": prevChecked,
            "prev-indeterminate": prevIndeterminate,
            "prev-disabled": this.prevDisabled
          });
          const { ariaLabel, ariaInvalid } = this;
          return b2`
      <div class="container ${containerClasses}">
        <input
          type="checkbox"
          id="input"
          aria-checked=${isIndeterminate ? "mixed" : A}
          aria-label=${ariaLabel || A}
          aria-invalid=${ariaInvalid || A}
          ?disabled=${this.disabled}
          ?required=${this.required}
          .indeterminate=${this.indeterminate}
          .checked=${this.checked}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <div class="outline"></div>
        <div class="background"></div>
        <md-focus-ring part="focus-ring" for="input"></md-focus-ring>
        <md-ripple for="input" ?disabled=${this.disabled}></md-ripple>
        <svg class="icon" viewBox="0 0 18 18" aria-hidden="true">
          <rect class="mark short" />
          <rect class="mark long" />
        </svg>
      </div>
    `;
        }
        handleInput(event) {
          const target = event.target;
          this.checked = target.checked;
          this.indeterminate = target.indeterminate;
        }
        handleChange(event) {
          redispatchEvent(this, event);
        }
        [getFormValue]() {
          if (!this.checked || this.indeterminate) {
            return null;
          }
          return this.value;
        }
        [getFormState]() {
          return String(this.checked);
        }
        formResetCallback() {
          this.checked = this.hasAttribute("checked");
        }
        formStateRestoreCallback(state) {
          this.checked = state === "true";
        }
        [createValidator]() {
          return new CheckboxValidator(() => this);
        }
        [getValidityAnchor]() {
          return this.input;
        }
      };
      Checkbox.shadowRootOptions = {
        ...i4.shadowRootOptions,
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean })
      ], Checkbox.prototype, "checked", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Checkbox.prototype, "indeterminate", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Checkbox.prototype, "required", void 0);
      __decorate([
        n3()
      ], Checkbox.prototype, "value", void 0);
      __decorate([
        r4()
      ], Checkbox.prototype, "prevChecked", void 0);
      __decorate([
        r4()
      ], Checkbox.prototype, "prevDisabled", void 0);
      __decorate([
        r4()
      ], Checkbox.prototype, "prevIndeterminate", void 0);
      __decorate([
        e4("input")
      ], Checkbox.prototype, "input", void 0);
    }
  });

  // node_modules/@material/web/checkbox/internal/checkbox-styles.cssresult.js
  var styles11, checkbox_styles_cssresult_default;
  var init_checkbox_styles_cssresult = __esm({
    "node_modules/@material/web/checkbox/internal/checkbox-styles.cssresult.js"() {
      init_lit();
      styles11 = i`:host{border-start-start-radius:var(--md-checkbox-container-shape-start-start, var(--md-checkbox-container-shape, 2px));border-start-end-radius:var(--md-checkbox-container-shape-start-end, var(--md-checkbox-container-shape, 2px));border-end-end-radius:var(--md-checkbox-container-shape-end-end, var(--md-checkbox-container-shape, 2px));border-end-start-radius:var(--md-checkbox-container-shape-end-start, var(--md-checkbox-container-shape, 2px));display:inline-flex;height:var(--md-checkbox-container-size, 18px);position:relative;vertical-align:top;width:var(--md-checkbox-container-size, 18px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-checkbox-container-size, 18px))/2)}md-focus-ring{height:44px;inset:unset;width:44px}input{appearance:none;height:48px;margin:0;opacity:0;outline:none;position:absolute;width:48px;z-index:1;cursor:inherit}:host([touch-target=none]) input{height:100%;width:100%}.container{border-radius:inherit;display:flex;height:100%;place-content:center;place-items:center;position:relative;width:100%}.outline,.background,.icon{inset:0;position:absolute}.outline,.background{border-radius:inherit}.outline{border-color:var(--md-checkbox-outline-color, var(--md-sys-color-on-surface-variant, #49454f));border-style:solid;border-width:var(--md-checkbox-outline-width, 2px);box-sizing:border-box}.background{background-color:var(--md-checkbox-selected-container-color, var(--md-sys-color-primary, #6750a4))}.background,.icon{opacity:0;transition-duration:150ms,50ms;transition-property:transform,opacity;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15),linear;transform:scale(0.6)}:where(.selected) :is(.background,.icon){opacity:1;transition-duration:350ms,50ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1),linear;transform:scale(1)}md-ripple{border-radius:var(--md-checkbox-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-checkbox-state-layer-size, 40px);inset:unset;width:var(--md-checkbox-state-layer-size, 40px);--md-ripple-hover-color: var(--md-checkbox-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-checkbox-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-checkbox-pressed-state-layer-opacity, 0.12)}.selected md-ripple{--md-ripple-hover-color: var(--md-checkbox-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-checkbox-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-checkbox-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-checkbox-selected-pressed-state-layer-opacity, 0.12)}.icon{fill:var(--md-checkbox-selected-icon-color, var(--md-sys-color-on-primary, #fff));height:var(--md-checkbox-icon-size, 18px);width:var(--md-checkbox-icon-size, 18px)}.mark.short{height:2px;transition-property:transform,height;width:2px}.mark.long{height:2px;transition-property:transform,width;width:10px}.mark{animation-duration:150ms;animation-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15);transition-duration:150ms;transition-timing-function:cubic-bezier(0.3, 0, 0.8, 0.15)}.selected .mark{animation-duration:350ms;animation-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1);transition-duration:350ms;transition-timing-function:cubic-bezier(0.05, 0.7, 0.1, 1)}.checked .mark,.prev-checked.unselected .mark{transform:scaleY(-1) translate(7px, -14px) rotate(45deg)}.checked .mark.short,.prev-checked.unselected .mark.short{height:5.6568542495px}.checked .mark.long,.prev-checked.unselected .mark.long{width:11.313708499px}.indeterminate .mark,.prev-indeterminate.unselected .mark{transform:scaleY(-1) translate(4px, -10px) rotate(0deg)}.prev-unselected .mark{transition-property:none}.prev-unselected.checked .mark.long{animation-name:prev-unselected-to-checked}@keyframes prev-unselected-to-checked{from{width:0}}:where(:hover) .outline{border-color:var(--md-checkbox-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-hover-outline-width, 2px)}:where(:hover) .background{background:var(--md-checkbox-selected-hover-container-color, var(--md-sys-color-primary, #6750a4))}:where(:hover) .icon{fill:var(--md-checkbox-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:focus-within) .outline{border-color:var(--md-checkbox-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-focus-outline-width, 2px)}:where(:focus-within) .background{background:var(--md-checkbox-selected-focus-container-color, var(--md-sys-color-primary, #6750a4))}:where(:focus-within) .icon{fill:var(--md-checkbox-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff))}:where(:active) .outline{border-color:var(--md-checkbox-pressed-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-pressed-outline-width, 2px)}:where(:active) .background{background:var(--md-checkbox-selected-pressed-container-color, var(--md-sys-color-primary, #6750a4))}:where(:active) .icon{fill:var(--md-checkbox-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff))}:where(.disabled,.prev-disabled) :is(.background,.icon,.mark){animation-duration:0s;transition-duration:0s}:where(.disabled) .outline{border-color:var(--md-checkbox-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));border-width:var(--md-checkbox-disabled-outline-width, 2px);opacity:var(--md-checkbox-disabled-container-opacity, 0.38)}:where(.selected.disabled) .outline{visibility:hidden}:where(.selected.disabled) .background{background:var(--md-checkbox-selected-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-checkbox-selected-disabled-container-opacity, 0.38)}:where(.disabled) .icon{fill:var(--md-checkbox-selected-disabled-icon-color, var(--md-sys-color-surface, #fef7ff))}@media(forced-colors: active){.background{background-color:CanvasText}.selected.disabled .background{background-color:GrayText;opacity:1}.outline{border-color:CanvasText}.disabled .outline{border-color:GrayText;opacity:1}.icon{fill:Canvas}}
`;
      checkbox_styles_cssresult_default = styles11.styleSheet;
    }
  });

  // node_modules/@material/web/checkbox/checkbox.js
  var MdCheckbox;
  var init_checkbox2 = __esm({
    "node_modules/@material/web/checkbox/checkbox.js"() {
      init_tslib_es6();
      init_decorators();
      init_checkbox();
      init_checkbox_styles_cssresult();
      MdCheckbox = class MdCheckbox2 extends Checkbox {
      };
      MdCheckbox.styles = [styles11];
      MdCheckbox = __decorate([
        t("md-checkbox")
      ], MdCheckbox);
    }
  });

  // node_modules/@material/web/chips/internal/chip.js
  var chipBaseClass, Chip;
  var init_chip = __esm({
    "node_modules/@material/web/chips/internal/chip.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_delegate();
      chipBaseClass = mixinDelegatesAria(i4);
      Chip = class extends chipBaseClass {
        /**
         * Whether or not the primary ripple is disabled (defaults to `disabled`).
         * Some chip actions such as links cannot be disabled.
         */
        get rippleDisabled() {
          return this.disabled || this.softDisabled;
        }
        constructor() {
          super();
          this.disabled = false;
          this.softDisabled = false;
          this.alwaysFocusable = false;
          this.label = "";
          this.hasIcon = false;
          if (!o7) {
            this.addEventListener("click", this.handleClick.bind(this));
          }
        }
        focus(options) {
          if (this.disabled && !this.alwaysFocusable) {
            return;
          }
          super.focus(options);
        }
        render() {
          return b2`
      <div class="container ${e8(this.getContainerClasses())}">
        ${this.renderContainerContent()}
      </div>
    `;
        }
        updated(changed) {
          if (changed.has("disabled") && changed.get("disabled") !== void 0) {
            this.dispatchEvent(new Event("update-focus", { bubbles: true }));
          }
        }
        getContainerClasses() {
          return {
            "disabled": this.disabled || this.softDisabled,
            "has-icon": this.hasIcon
          };
        }
        renderContainerContent() {
          return b2`
      ${this.renderOutline()}
      <md-focus-ring part="focus-ring" for=${this.primaryId}></md-focus-ring>
      <md-ripple
        for=${this.primaryId}
        ?disabled=${this.rippleDisabled}></md-ripple>
      ${this.renderPrimaryAction(this.renderPrimaryContent())}
    `;
        }
        renderOutline() {
          return b2`<span class="outline"></span>`;
        }
        renderLeadingIcon() {
          return b2`<slot name="icon" @slotchange=${this.handleIconChange}></slot>`;
        }
        renderPrimaryContent() {
          return b2`
      <span class="leading icon" aria-hidden="true">
        ${this.renderLeadingIcon()}
      </span>
      <span class="label">
        <span class="label-text" id="label">
          ${this.label ? this.label : b2`<slot></slot>`}
        </span>
      </span>
      <span class="touch"></span>
    `;
        }
        handleIconChange(event) {
          const slot = event.target;
          this.hasIcon = slot.assignedElements({ flatten: true }).length > 0;
        }
        handleClick(event) {
          if (this.softDisabled || this.disabled && this.alwaysFocusable) {
            event.stopImmediatePropagation();
            event.preventDefault();
            return;
          }
        }
      };
      Chip.shadowRootOptions = {
        ...i4.shadowRootOptions,
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], Chip.prototype, "disabled", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "soft-disabled", reflect: true })
      ], Chip.prototype, "softDisabled", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "always-focusable" })
      ], Chip.prototype, "alwaysFocusable", void 0);
      __decorate([
        n3()
      ], Chip.prototype, "label", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true, attribute: "has-icon" })
      ], Chip.prototype, "hasIcon", void 0);
    }
  });

  // node_modules/@material/web/chips/internal/assist-chip.js
  var AssistChip;
  var init_assist_chip = __esm({
    "node_modules/@material/web/chips/internal/assist-chip.js"() {
      init_tslib_es6();
      init_elevation2();
      init_lit();
      init_decorators();
      init_chip();
      AssistChip = class extends Chip {
        constructor() {
          super(...arguments);
          this.elevated = false;
          this.href = "";
          this.download = "";
          this.target = "";
        }
        get primaryId() {
          return this.href ? "link" : "button";
        }
        get rippleDisabled() {
          return !this.href && (this.disabled || this.softDisabled);
        }
        getContainerClasses() {
          return {
            ...super.getContainerClasses(),
            // Link chips cannot be disabled
            disabled: !this.href && (this.disabled || this.softDisabled),
            elevated: this.elevated,
            link: !!this.href
          };
        }
        renderPrimaryAction(content) {
          const { ariaLabel } = this;
          if (this.href) {
            return b2`
        <a
          class="primary action"
          id="link"
          aria-label=${ariaLabel || A}
          href=${this.href}
          download=${this.download || A}
          target=${this.target || A}
          >${content}</a
        >
      `;
          }
          return b2`
      <button
        class="primary action"
        id="button"
        aria-label=${ariaLabel || A}
        aria-disabled=${this.softDisabled || A}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        type="button"
        >${content}</button
      >
    `;
        }
        renderOutline() {
          if (this.elevated) {
            return b2`<md-elevation part="elevation"></md-elevation>`;
          }
          return super.renderOutline();
        }
      };
      __decorate([
        n3({ type: Boolean })
      ], AssistChip.prototype, "elevated", void 0);
      __decorate([
        n3()
      ], AssistChip.prototype, "href", void 0);
      __decorate([
        n3()
      ], AssistChip.prototype, "download", void 0);
      __decorate([
        n3()
      ], AssistChip.prototype, "target", void 0);
    }
  });

  // node_modules/@material/web/chips/internal/assist-styles.cssresult.js
  var styles12, assist_styles_cssresult_default;
  var init_assist_styles_cssresult = __esm({
    "node_modules/@material/web/chips/internal/assist-styles.cssresult.js"() {
      init_lit();
      styles12 = i`:host{--_container-height: var(--md-assist-chip-container-height, 32px);--_disabled-label-text-color: var(--md-assist-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-assist-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-assist-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-assist-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-assist-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-assist-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-assist-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-assist-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-assist-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-assist-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-assist-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-assist-chip-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-assist-chip-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-assist-chip-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-assist-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-assist-chip-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-assist-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-assist-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-assist-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-assist-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-assist-chip-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-assist-chip-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-assist-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-assist-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-assist-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-assist-chip-focus-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_outline-color: var(--md-assist-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-assist-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-assist-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-assist-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-assist-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-assist-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-assist-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-assist-chip-icon-size, 18px);--_pressed-leading-icon-color: var(--md-assist-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-assist-chip-container-shape-start-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-assist-chip-container-shape-start-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-assist-chip-container-shape-end-end, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-assist-chip-container-shape-end-start, var(--md-assist-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-assist-chip-leading-space, 16px);--_trailing-space: var(--md-assist-chip-trailing-space, 16px);--_icon-label-space: var(--md-assist-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-assist-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`;
      assist_styles_cssresult_default = styles12.styleSheet;
    }
  });

  // node_modules/@material/web/chips/internal/elevated-styles.cssresult.js
  var styles13, elevated_styles_cssresult_default2;
  var init_elevated_styles_cssresult2 = __esm({
    "node_modules/@material/web/chips/internal/elevated-styles.cssresult.js"() {
      init_lit();
      styles13 = i`.elevated{--md-elevation-level: var(--_elevated-container-elevation);--md-elevation-shadow-color: var(--_elevated-container-shadow-color)}.elevated::before{background:var(--_elevated-container-color)}.elevated:hover{--md-elevation-level: var(--_elevated-hover-container-elevation)}.elevated:focus-within{--md-elevation-level: var(--_elevated-focus-container-elevation)}.elevated:active{--md-elevation-level: var(--_elevated-pressed-container-elevation)}.elevated.disabled{--md-elevation-level: var(--_elevated-disabled-container-elevation)}.elevated.disabled::before{background:var(--_elevated-disabled-container-color);opacity:var(--_elevated-disabled-container-opacity)}@media(forced-colors: active){.elevated md-elevation{border:1px solid CanvasText}.elevated.disabled md-elevation{border-color:GrayText}}
`;
      elevated_styles_cssresult_default2 = styles13.styleSheet;
    }
  });

  // node_modules/@material/web/chips/internal/shared-styles.cssresult.js
  var styles14, shared_styles_cssresult_default2;
  var init_shared_styles_cssresult2 = __esm({
    "node_modules/@material/web/chips/internal/shared-styles.cssresult.js"() {
      init_lit();
      styles14 = i`:host{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end);display:inline-flex;height:var(--_container-height);cursor:pointer;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}:host(:is([disabled],[soft-disabled])){pointer-events:none}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) 0}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.container{border-radius:inherit;box-sizing:border-box;display:flex;height:100%;position:relative;width:100%}.container::before{border-radius:inherit;content:"";inset:0;pointer-events:none;position:absolute}.container:not(.disabled){cursor:pointer}.container.disabled{pointer-events:none}.cell{display:flex}.action{align-items:baseline;appearance:none;background:none;border:none;border-radius:inherit;display:flex;outline:none;padding:0;position:relative;text-decoration:none}.primary.action{min-width:0;padding-inline-start:var(--_leading-space);padding-inline-end:var(--_trailing-space)}.has-icon .primary.action{padding-inline-start:var(--_with-leading-icon-leading-space)}.touch{height:48px;inset:50% 0 0;position:absolute;transform:translateY(-50%);width:100%}:host([touch-target=none]) .touch{display:none}.outline{border:var(--_outline-width) solid var(--_outline-color);border-radius:inherit;inset:0;pointer-events:none;position:absolute}:where(:focus) .outline{border-color:var(--_focus-outline-color)}:where(.disabled) .outline{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}md-ripple{border-radius:inherit}.label,.icon,.touch{z-index:1}.label{align-items:center;color:var(--_label-text-color);display:flex;font-family:var(--_label-text-font);font-size:var(--_label-text-size);font-weight:var(--_label-text-weight);height:100%;line-height:var(--_label-text-line-height);overflow:hidden;user-select:none}.label-text{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}:where(:hover) .label{color:var(--_hover-label-text-color)}:where(:focus) .label{color:var(--_focus-label-text-color)}:where(:active) .label{color:var(--_pressed-label-text-color)}:where(.disabled) .label{color:var(--_disabled-label-text-color);opacity:var(--_disabled-label-text-opacity)}.icon{align-self:center;display:flex;fill:currentColor;position:relative}.icon ::slotted(:first-child){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size)}.leading.icon{color:var(--_leading-icon-color)}.leading.icon ::slotted(*),.leading.icon svg{margin-inline-end:var(--_icon-label-space)}:where(:hover) .leading.icon{color:var(--_hover-leading-icon-color)}:where(:focus) .leading.icon{color:var(--_focus-leading-icon-color)}:where(:active) .leading.icon{color:var(--_pressed-leading-icon-color)}:where(.disabled) .leading.icon{color:var(--_disabled-leading-icon-color);opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){:where(.disabled) :is(.label,.outline,.leading.icon){color:GrayText;opacity:1}}a,button{text-transform:inherit}a,button:not(:disabled,[aria-disabled=true]){cursor:inherit}
`;
      shared_styles_cssresult_default2 = styles14.styleSheet;
    }
  });

  // node_modules/@material/web/chips/assist-chip.js
  var MdAssistChip;
  var init_assist_chip2 = __esm({
    "node_modules/@material/web/chips/assist-chip.js"() {
      init_tslib_es6();
      init_decorators();
      init_assist_chip();
      init_assist_styles_cssresult();
      init_elevated_styles_cssresult2();
      init_shared_styles_cssresult2();
      MdAssistChip = class MdAssistChip2 extends AssistChip {
      };
      MdAssistChip.styles = [
        styles14,
        styles13,
        styles12
      ];
      MdAssistChip = __decorate([
        t("md-assist-chip")
      ], MdAssistChip);
    }
  });

  // node_modules/@material/web/chips/internal/chip-set.js
  var ChipSet;
  var init_chip_set = __esm({
    "node_modules/@material/web/chips/internal/chip-set.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_chip();
      ChipSet = class extends i4 {
        get chips() {
          return this.childElements.filter((child) => child instanceof Chip);
        }
        constructor() {
          super();
          this.internals = // Cast needed for closure
          this.attachInternals();
          if (!o7) {
            this.addEventListener("focusin", this.updateTabIndices.bind(this));
            this.addEventListener("update-focus", this.updateTabIndices.bind(this));
            this.addEventListener("keydown", this.handleKeyDown.bind(this));
            this.internals.role = "toolbar";
          }
        }
        render() {
          return b2`<slot @slotchange=${this.updateTabIndices}></slot>`;
        }
        handleKeyDown(event) {
          const isLeft = event.key === "ArrowLeft";
          const isRight = event.key === "ArrowRight";
          const isHome = event.key === "Home";
          const isEnd = event.key === "End";
          if (!isLeft && !isRight && !isHome && !isEnd) {
            return;
          }
          const { chips } = this;
          if (chips.length < 2) {
            return;
          }
          event.preventDefault();
          if (isHome || isEnd) {
            const index = isHome ? 0 : chips.length - 1;
            chips[index].focus({ trailing: isEnd });
            this.updateTabIndices();
            return;
          }
          const isRtl2 = getComputedStyle(this).direction === "rtl";
          const forwards = isRtl2 ? isLeft : isRight;
          const focusedChip = chips.find((chip) => chip.matches(":focus-within"));
          if (!focusedChip) {
            const nextChip = forwards ? chips[0] : chips[chips.length - 1];
            nextChip.focus({ trailing: !forwards });
            this.updateTabIndices();
            return;
          }
          const currentIndex = chips.indexOf(focusedChip);
          let nextIndex = forwards ? currentIndex + 1 : currentIndex - 1;
          while (nextIndex !== currentIndex) {
            if (nextIndex >= chips.length) {
              nextIndex = 0;
            } else if (nextIndex < 0) {
              nextIndex = chips.length - 1;
            }
            const nextChip = chips[nextIndex];
            if (nextChip.disabled && !nextChip.alwaysFocusable) {
              if (forwards) {
                nextIndex++;
              } else {
                nextIndex--;
              }
              continue;
            }
            nextChip.focus({ trailing: !forwards });
            this.updateTabIndices();
            break;
          }
        }
        updateTabIndices() {
          const { chips } = this;
          let chipToFocus;
          for (const chip of chips) {
            const isChipFocusable = chip.alwaysFocusable || !chip.disabled;
            const chipIsFocused = chip.matches(":focus-within");
            if (chipIsFocused && isChipFocusable) {
              chipToFocus = chip;
              continue;
            }
            if (isChipFocusable && !chipToFocus) {
              chipToFocus = chip;
            }
            chip.tabIndex = -1;
          }
          if (chipToFocus) {
            chipToFocus.tabIndex = 0;
          }
        }
      };
      __decorate([
        o4()
      ], ChipSet.prototype, "childElements", void 0);
    }
  });

  // node_modules/@material/web/chips/internal/chip-set-styles.cssresult.js
  var styles15, chip_set_styles_cssresult_default;
  var init_chip_set_styles_cssresult = __esm({
    "node_modules/@material/web/chips/internal/chip-set-styles.cssresult.js"() {
      init_lit();
      styles15 = i`:host{display:flex;flex-wrap:wrap;gap:8px}
`;
      chip_set_styles_cssresult_default = styles15.styleSheet;
    }
  });

  // node_modules/@material/web/chips/chip-set.js
  var MdChipSet;
  var init_chip_set2 = __esm({
    "node_modules/@material/web/chips/chip-set.js"() {
      init_tslib_es6();
      init_decorators();
      init_chip_set();
      init_chip_set_styles_cssresult();
      MdChipSet = class MdChipSet2 extends ChipSet {
      };
      MdChipSet.styles = [styles15];
      MdChipSet = __decorate([
        t("md-chip-set")
      ], MdChipSet);
    }
  });

  // node_modules/@material/web/chips/internal/multi-action-chip.js
  var ARIA_LABEL_REMOVE, MultiActionChip;
  var init_multi_action_chip = __esm({
    "node_modules/@material/web/chips/internal/multi-action-chip.js"() {
      init_lit();
      init_chip();
      ARIA_LABEL_REMOVE = "aria-label-remove";
      MultiActionChip = class extends Chip {
        get ariaLabelRemove() {
          if (this.hasAttribute(ARIA_LABEL_REMOVE)) {
            return this.getAttribute(ARIA_LABEL_REMOVE);
          }
          const { ariaLabel } = this;
          if (ariaLabel || this.label) {
            return `Remove ${ariaLabel || this.label}`;
          }
          return null;
        }
        set ariaLabelRemove(ariaLabel) {
          const prev = this.ariaLabelRemove;
          if (ariaLabel === prev) {
            return;
          }
          if (ariaLabel === null) {
            this.removeAttribute(ARIA_LABEL_REMOVE);
          } else {
            this.setAttribute(ARIA_LABEL_REMOVE, ariaLabel);
          }
          this.requestUpdate();
        }
        constructor() {
          super();
          this.handleTrailingActionFocus = this.handleTrailingActionFocus.bind(this);
          if (!o7) {
            this.addEventListener("keydown", this.handleKeyDown.bind(this));
          }
        }
        focus(options) {
          const isFocusable3 = this.alwaysFocusable || !this.disabled;
          if (isFocusable3 && options?.trailing && this.trailingAction) {
            this.trailingAction.focus(options);
            return;
          }
          super.focus(options);
        }
        renderContainerContent() {
          return b2`
      ${super.renderContainerContent()}
      ${this.renderTrailingAction(this.handleTrailingActionFocus)}
    `;
        }
        handleKeyDown(event) {
          const isLeft = event.key === "ArrowLeft";
          const isRight = event.key === "ArrowRight";
          if (!isLeft && !isRight) {
            return;
          }
          if (!this.primaryAction || !this.trailingAction) {
            return;
          }
          const isRtl2 = getComputedStyle(this).direction === "rtl";
          const forwards = isRtl2 ? isLeft : isRight;
          const isPrimaryFocused = this.primaryAction?.matches(":focus-within");
          const isTrailingFocused = this.trailingAction?.matches(":focus-within");
          if (forwards && isTrailingFocused || !forwards && isPrimaryFocused) {
            return;
          }
          event.preventDefault();
          event.stopPropagation();
          const actionToFocus = forwards ? this.trailingAction : this.primaryAction;
          actionToFocus.focus();
        }
        handleTrailingActionFocus() {
          const { primaryAction, trailingAction } = this;
          if (!primaryAction || !trailingAction) {
            return;
          }
          primaryAction.tabIndex = -1;
          trailingAction.addEventListener("focusout", () => {
            primaryAction.tabIndex = 0;
          }, { once: true });
        }
      };
    }
  });

  // node_modules/@material/web/chips/internal/trailing-icons.js
  function renderRemoveButton({ ariaLabel, disabled, focusListener, tabbable = false }) {
    return b2`
    <span id="remove-label" hidden aria-hidden="true">Remove</span>
    <button
      class="trailing action"
      aria-label=${ariaLabel || A}
      aria-labelledby=${!ariaLabel ? "remove-label label" : A}
      tabindex=${!tabbable ? -1 : A}
      @click=${handleRemoveClick}
      @focus=${focusListener}>
      <md-focus-ring part="trailing-focus-ring"></md-focus-ring>
      <md-ripple ?disabled=${disabled}></md-ripple>
      <span class="trailing icon" aria-hidden="true">
        <slot name="remove-trailing-icon">
          <svg viewBox="0 96 960 960">
            <path
              d="m249 849-42-42 231-231-231-231 42-42 231 231 231-231 42 42-231 231 231 231-42 42-231-231-231 231Z" />
          </svg>
        </slot>
      </span>
      <span class="touch"></span>
    </button>
  `;
  }
  function handleRemoveClick(event) {
    if (this.disabled || this.softDisabled) {
      return;
    }
    event.stopPropagation();
    const preventDefault = !this.dispatchEvent(new Event("remove", { cancelable: true }));
    if (preventDefault) {
      return;
    }
    this.remove();
  }
  var init_trailing_icons = __esm({
    "node_modules/@material/web/chips/internal/trailing-icons.js"() {
      init_md_focus_ring();
      init_ripple2();
      init_lit();
    }
  });

  // node_modules/@material/web/chips/internal/filter-chip.js
  var FilterChip;
  var init_filter_chip = __esm({
    "node_modules/@material/web/chips/internal/filter-chip.js"() {
      init_tslib_es6();
      init_elevation2();
      init_lit();
      init_decorators();
      init_redispatch_event();
      init_multi_action_chip();
      init_trailing_icons();
      FilterChip = class extends MultiActionChip {
        constructor() {
          super(...arguments);
          this.elevated = false;
          this.removable = false;
          this.selected = false;
          this.hasSelectedIcon = false;
        }
        get primaryId() {
          return "button";
        }
        getContainerClasses() {
          return {
            ...super.getContainerClasses(),
            elevated: this.elevated,
            selected: this.selected,
            "has-trailing": this.removable,
            "has-icon": this.hasIcon || this.selected
          };
        }
        renderPrimaryAction(content) {
          const { ariaLabel } = this;
          return b2`
      <button
        class="primary action"
        id="button"
        aria-label=${ariaLabel || A}
        aria-pressed=${this.selected}
        aria-disabled=${this.softDisabled || A}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        @click=${this.handleClickOnChild}
        >${content}</button
      >
    `;
        }
        renderLeadingIcon() {
          if (!this.selected) {
            return super.renderLeadingIcon();
          }
          return b2`
      <slot name="selected-icon">
        <svg class="checkmark" viewBox="0 0 18 18" aria-hidden="true">
          <path
            d="M6.75012 12.1274L3.62262 8.99988L2.55762 10.0574L6.75012 14.2499L15.7501 5.24988L14.6926 4.19238L6.75012 12.1274Z" />
        </svg>
      </slot>
    `;
        }
        renderTrailingAction(focusListener) {
          if (this.removable) {
            return renderRemoveButton({
              focusListener,
              ariaLabel: this.ariaLabelRemove,
              disabled: this.disabled || this.softDisabled
            });
          }
          return A;
        }
        renderOutline() {
          if (this.elevated) {
            return b2`<md-elevation part="elevation"></md-elevation>`;
          }
          return super.renderOutline();
        }
        handleClickOnChild(event) {
          if (this.disabled || this.softDisabled) {
            return;
          }
          const prevValue = this.selected;
          this.selected = !this.selected;
          const preventDefault = !redispatchEvent(this, event);
          if (preventDefault) {
            this.selected = prevValue;
            return;
          }
        }
      };
      __decorate([
        n3({ type: Boolean })
      ], FilterChip.prototype, "elevated", void 0);
      __decorate([
        n3({ type: Boolean })
      ], FilterChip.prototype, "removable", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], FilterChip.prototype, "selected", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true, attribute: "has-selected-icon" })
      ], FilterChip.prototype, "hasSelectedIcon", void 0);
      __decorate([
        e4(".primary.action")
      ], FilterChip.prototype, "primaryAction", void 0);
      __decorate([
        e4(".trailing.action")
      ], FilterChip.prototype, "trailingAction", void 0);
    }
  });

  // node_modules/@material/web/chips/internal/filter-styles.cssresult.js
  var styles16, filter_styles_cssresult_default;
  var init_filter_styles_cssresult = __esm({
    "node_modules/@material/web/chips/internal/filter-styles.cssresult.js"() {
      init_lit();
      styles16 = i`:host{--_container-height: var(--md-filter-chip-container-height, 32px);--_disabled-label-text-color: var(--md-filter-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filter-chip-disabled-label-text-opacity, 0.38);--_elevated-container-elevation: var(--md-filter-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-filter-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-filter-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-filter-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-filter-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-filter-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-filter-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-filter-chip-elevated-pressed-container-elevation, 1);--_elevated-selected-container-color: var(--md-filter-chip-elevated-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_label-text-font: var(--md-filter-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filter-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-filter-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-filter-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-focus-label-text-color: var(--md-filter-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-filter-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-filter-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-filter-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-filter-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-label-text-color: var(--md-filter-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-filter-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_selected-pressed-state-layer-opacity: var(--md-filter-chip-selected-pressed-state-layer-opacity, 0.12);--_elevated-container-color: var(--md-filter-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_disabled-outline-color: var(--md-filter-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-filter-chip-disabled-outline-opacity, 0.12);--_disabled-selected-container-color: var(--md-filter-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-filter-chip-disabled-selected-container-opacity, 0.12);--_focus-outline-color: var(--md-filter-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-filter-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-filter-chip-outline-width, 1px);--_selected-container-color: var(--md-filter-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-outline-width: var(--md-filter-chip-selected-outline-width, 0px);--_focus-label-text-color: var(--md-filter-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-filter-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filter-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-filter-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-filter-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-filter-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-filter-chip-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filter-chip-pressed-state-layer-opacity, 0.12);--_icon-size: var(--md-filter-chip-icon-size, 18px);--_disabled-leading-icon-color: var(--md-filter-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filter-chip-disabled-leading-icon-opacity, 0.38);--_selected-focus-leading-icon-color: var(--md-filter-chip-selected-focus-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-leading-icon-color: var(--md-filter-chip-selected-hover-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-leading-icon-color: var(--md-filter-chip-selected-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-leading-icon-color: var(--md-filter-chip-selected-pressed-leading-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-leading-icon-color: var(--md-filter-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-filter-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-filter-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-filter-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-filter-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filter-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-filter-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-filter-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-filter-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-filter-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-filter-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filter-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-filter-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-filter-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filter-chip-container-shape-start-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-filter-chip-container-shape-start-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-filter-chip-container-shape-end-end, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-filter-chip-container-shape-end-start, var(--md-filter-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-filter-chip-leading-space, 16px);--_trailing-space: var(--md-filter-chip-trailing-space, 16px);--_icon-label-space: var(--md-filter-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-filter-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-filter-chip-with-trailing-icon-trailing-space, 8px)}.selected.elevated::before{background:var(--_elevated-selected-container-color)}.checkmark{height:var(--_icon-size);width:var(--_icon-size)}.disabled .checkmark{opacity:var(--_disabled-leading-icon-opacity)}@media(forced-colors: active){.disabled .checkmark{opacity:1}}
`;
      filter_styles_cssresult_default = styles16.styleSheet;
    }
  });

  // node_modules/@material/web/chips/internal/selectable-styles.cssresult.js
  var styles17, selectable_styles_cssresult_default;
  var init_selectable_styles_cssresult = __esm({
    "node_modules/@material/web/chips/internal/selectable-styles.cssresult.js"() {
      init_lit();
      styles17 = i`.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}:where(.selected)::before{background:var(--_selected-container-color)}:where(.selected) .outline{border-width:var(--_selected-outline-width)}:where(.selected.disabled)::before{background:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}:where(.selected) .label{color:var(--_selected-label-text-color)}:where(.selected:hover) .label{color:var(--_selected-hover-label-text-color)}:where(.selected:focus) .label{color:var(--_selected-focus-label-text-color)}:where(.selected:active) .label{color:var(--_selected-pressed-label-text-color)}:where(.selected) .leading.icon{color:var(--_selected-leading-icon-color)}:where(.selected:hover) .leading.icon{color:var(--_selected-hover-leading-icon-color)}:where(.selected:focus) .leading.icon{color:var(--_selected-focus-leading-icon-color)}:where(.selected:active) .leading.icon{color:var(--_selected-pressed-leading-icon-color)}@media(forced-colors: active){:where(.selected:not(.elevated))::before{border:1px solid CanvasText}:where(.selected) .outline{border-width:1px}}
`;
      selectable_styles_cssresult_default = styles17.styleSheet;
    }
  });

  // node_modules/@material/web/chips/internal/trailing-icon-styles.cssresult.js
  var styles18, trailing_icon_styles_cssresult_default;
  var init_trailing_icon_styles_cssresult = __esm({
    "node_modules/@material/web/chips/internal/trailing-icon-styles.cssresult.js"() {
      init_lit();
      styles18 = i`.trailing.action{align-items:center;justify-content:center;padding-inline-start:var(--_icon-label-space);padding-inline-end:var(--_with-trailing-icon-trailing-space)}.trailing.action :is(md-ripple,md-focus-ring){border-radius:50%;height:calc(1.3333333333*var(--_icon-size));width:calc(1.3333333333*var(--_icon-size))}.trailing.action md-focus-ring{inset:unset}.has-trailing .primary.action{padding-inline-end:0}.trailing.icon{color:var(--_trailing-icon-color);height:var(--_icon-size);width:var(--_icon-size)}:where(:hover) .trailing.icon{color:var(--_hover-trailing-icon-color)}:where(:focus) .trailing.icon{color:var(--_focus-trailing-icon-color)}:where(:active) .trailing.icon{color:var(--_pressed-trailing-icon-color)}:where(.disabled) .trailing.icon{color:var(--_disabled-trailing-icon-color);opacity:var(--_disabled-trailing-icon-opacity)}:where(.selected) .trailing.icon{color:var(--_selected-trailing-icon-color)}:where(.selected:hover) .trailing.icon{color:var(--_selected-hover-trailing-icon-color)}:where(.selected:focus) .trailing.icon{color:var(--_selected-focus-trailing-icon-color)}:where(.selected:active) .trailing.icon{color:var(--_selected-pressed-trailing-icon-color)}@media(forced-colors: active){.trailing.icon{color:ButtonText}:where(.disabled) .trailing.icon{color:GrayText;opacity:1}}
`;
      trailing_icon_styles_cssresult_default = styles18.styleSheet;
    }
  });

  // node_modules/@material/web/chips/filter-chip.js
  var MdFilterChip;
  var init_filter_chip2 = __esm({
    "node_modules/@material/web/chips/filter-chip.js"() {
      init_tslib_es6();
      init_decorators();
      init_elevated_styles_cssresult2();
      init_filter_chip();
      init_filter_styles_cssresult();
      init_selectable_styles_cssresult();
      init_shared_styles_cssresult2();
      init_trailing_icon_styles_cssresult();
      MdFilterChip = class MdFilterChip2 extends FilterChip {
      };
      MdFilterChip.styles = [
        styles14,
        styles13,
        styles18,
        styles17,
        styles16
      ];
      MdFilterChip = __decorate([
        t("md-filter-chip")
      ], MdFilterChip);
    }
  });

  // node_modules/@material/web/chips/internal/input-chip.js
  var InputChip;
  var init_input_chip = __esm({
    "node_modules/@material/web/chips/internal/input-chip.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_multi_action_chip();
      init_trailing_icons();
      InputChip = class extends MultiActionChip {
        constructor() {
          super(...arguments);
          this.avatar = false;
          this.href = "";
          this.target = "";
          this.removeOnly = false;
          this.selected = false;
        }
        get primaryId() {
          if (this.href) {
            return "link";
          }
          if (this.removeOnly) {
            return "";
          }
          return "button";
        }
        get rippleDisabled() {
          return !this.href && (this.disabled || this.softDisabled);
        }
        get primaryAction() {
          if (this.removeOnly) {
            return null;
          }
          return this.renderRoot.querySelector(".primary.action");
        }
        getContainerClasses() {
          return {
            ...super.getContainerClasses(),
            avatar: this.avatar,
            // Link chips cannot be disabled
            disabled: !this.href && (this.disabled || this.softDisabled),
            link: !!this.href,
            selected: this.selected,
            "has-trailing": true
          };
        }
        renderPrimaryAction(content) {
          const { ariaLabel } = this;
          if (this.href) {
            return b2`
        <a
          class="primary action"
          id="link"
          aria-label=${ariaLabel || A}
          href=${this.href}
          target=${this.target || A}
          >${content}</a
        >
      `;
          }
          if (this.removeOnly) {
            return b2`
        <span class="primary action" aria-label=${ariaLabel || A}>
          ${content}
        </span>
      `;
          }
          return b2`
      <button
        class="primary action"
        id="button"
        aria-label=${ariaLabel || A}
        aria-disabled=${this.softDisabled || A}
        ?disabled=${this.disabled && !this.alwaysFocusable}
        type="button"
        >${content}</button
      >
    `;
        }
        renderTrailingAction(focusListener) {
          return renderRemoveButton({
            focusListener,
            ariaLabel: this.ariaLabelRemove,
            disabled: !this.href && (this.disabled || this.softDisabled),
            tabbable: this.removeOnly
          });
        }
      };
      __decorate([
        n3({ type: Boolean })
      ], InputChip.prototype, "avatar", void 0);
      __decorate([
        n3()
      ], InputChip.prototype, "href", void 0);
      __decorate([
        n3()
      ], InputChip.prototype, "target", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "remove-only" })
      ], InputChip.prototype, "removeOnly", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], InputChip.prototype, "selected", void 0);
      __decorate([
        e4(".trailing.action")
      ], InputChip.prototype, "trailingAction", void 0);
    }
  });

  // node_modules/@material/web/chips/internal/input-styles.cssresult.js
  var styles19, input_styles_cssresult_default;
  var init_input_styles_cssresult = __esm({
    "node_modules/@material/web/chips/internal/input-styles.cssresult.js"() {
      init_lit();
      styles19 = i`:host{--_container-height: var(--md-input-chip-container-height, 32px);--_disabled-label-text-color: var(--md-input-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-input-chip-disabled-label-text-opacity, 0.38);--_disabled-selected-container-color: var(--md-input-chip-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-input-chip-disabled-selected-container-opacity, 0.12);--_label-text-font: var(--md-input-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-input-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-input-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-input-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_selected-container-color: var(--md-input-chip-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_selected-focus-label-text-color: var(--md-input-chip-selected-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-label-text-color: var(--md-input-chip-selected-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-color: var(--md-input-chip-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-state-layer-opacity: var(--md-input-chip-selected-hover-state-layer-opacity, 0.08);--_selected-label-text-color: var(--md-input-chip-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-outline-width: var(--md-input-chip-selected-outline-width, 0px);--_selected-pressed-label-text-color: var(--md-input-chip-selected-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-color: var(--md-input-chip-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-state-layer-opacity: var(--md-input-chip-selected-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-input-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-input-chip-disabled-outline-opacity, 0.12);--_focus-label-text-color: var(--md-input-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-input-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-input-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-input-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-input-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-input-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-input-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-input-chip-outline-width, 1px);--_pressed-label-text-color: var(--md-input-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-input-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-input-chip-pressed-state-layer-opacity, 0.12);--_avatar-shape: var(--md-input-chip-avatar-shape, var(--md-sys-shape-corner-full, 9999px));--_avatar-size: var(--md-input-chip-avatar-size, 24px);--_disabled-avatar-opacity: var(--md-input-chip-disabled-avatar-opacity, 0.38);--_disabled-leading-icon-color: var(--md-input-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-input-chip-disabled-leading-icon-opacity, 0.38);--_icon-size: var(--md-input-chip-icon-size, 18px);--_selected-focus-leading-icon-color: var(--md-input-chip-selected-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-leading-icon-color: var(--md-input-chip-selected-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-leading-icon-color: var(--md-input-chip-selected-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-leading-icon-color: var(--md-input-chip-selected-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-input-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-input-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-input-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-input-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_disabled-trailing-icon-color: var(--md-input-chip-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-input-chip-disabled-trailing-icon-opacity, 0.38);--_selected-focus-trailing-icon-color: var(--md-input-chip-selected-focus-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-hover-trailing-icon-color: var(--md-input-chip-selected-hover-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-pressed-trailing-icon-color: var(--md-input-chip-selected-pressed-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_selected-trailing-icon-color: var(--md-input-chip-selected-trailing-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_focus-trailing-icon-color: var(--md-input-chip-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-input-chip-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-trailing-icon-color: var(--md-input-chip-pressed-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-color: var(--md-input-chip-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-input-chip-leading-space, 16px);--_trailing-space: var(--md-input-chip-trailing-space, 16px);--_icon-label-space: var(--md-input-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-input-chip-with-leading-icon-leading-space, 8px);--_with-trailing-icon-trailing-space: var(--md-input-chip-with-trailing-icon-trailing-space, 8px)}:host([avatar]){--_container-shape-start-start: var( --md-input-chip-container-shape-start-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-start-end: var( --md-input-chip-container-shape-start-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-end: var( --md-input-chip-container-shape-end-end, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) );--_container-shape-end-start: var( --md-input-chip-container-shape-end-start, var(--md-input-chip-container-shape, calc(var(--_container-height) / 2)) )}.avatar .primary.action{padding-inline-start:4px}.avatar .leading.icon ::slotted(:first-child){border-radius:var(--_avatar-shape);height:var(--_avatar-size);width:var(--_avatar-size)}.disabled.avatar .leading.icon{opacity:var(--_disabled-avatar-opacity)}@media(forced-colors: active){.link .outline{border-color:ActiveText}.disabled.avatar .leading.icon{opacity:1}}
`;
      input_styles_cssresult_default = styles19.styleSheet;
    }
  });

  // node_modules/@material/web/chips/input-chip.js
  var MdInputChip;
  var init_input_chip2 = __esm({
    "node_modules/@material/web/chips/input-chip.js"() {
      init_tslib_es6();
      init_decorators();
      init_input_chip();
      init_input_styles_cssresult();
      init_selectable_styles_cssresult();
      init_shared_styles_cssresult2();
      init_trailing_icon_styles_cssresult();
      MdInputChip = class MdInputChip2 extends InputChip {
      };
      MdInputChip.styles = [
        styles14,
        styles18,
        styles17,
        styles19
      ];
      MdInputChip = __decorate([
        t("md-input-chip")
      ], MdInputChip);
    }
  });

  // node_modules/@material/web/chips/internal/suggestion-chip.js
  var SuggestionChip;
  var init_suggestion_chip = __esm({
    "node_modules/@material/web/chips/internal/suggestion-chip.js"() {
      init_assist_chip();
      SuggestionChip = class extends AssistChip {
      };
    }
  });

  // node_modules/@material/web/chips/internal/suggestion-styles.cssresult.js
  var styles20, suggestion_styles_cssresult_default;
  var init_suggestion_styles_cssresult = __esm({
    "node_modules/@material/web/chips/internal/suggestion-styles.cssresult.js"() {
      init_lit();
      styles20 = i`:host{--_container-height: var(--md-suggestion-chip-container-height, 32px);--_disabled-label-text-color: var(--md-suggestion-chip-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-suggestion-chip-disabled-label-text-opacity, 0.38);--_elevated-container-color: var(--md-suggestion-chip-elevated-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_elevated-container-elevation: var(--md-suggestion-chip-elevated-container-elevation, 1);--_elevated-container-shadow-color: var(--md-suggestion-chip-elevated-container-shadow-color, var(--md-sys-color-shadow, #000));--_elevated-disabled-container-color: var(--md-suggestion-chip-elevated-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_elevated-disabled-container-elevation: var(--md-suggestion-chip-elevated-disabled-container-elevation, 0);--_elevated-disabled-container-opacity: var(--md-suggestion-chip-elevated-disabled-container-opacity, 0.12);--_elevated-focus-container-elevation: var(--md-suggestion-chip-elevated-focus-container-elevation, 1);--_elevated-hover-container-elevation: var(--md-suggestion-chip-elevated-hover-container-elevation, 2);--_elevated-pressed-container-elevation: var(--md-suggestion-chip-elevated-pressed-container-elevation, 1);--_focus-label-text-color: var(--md-suggestion-chip-focus-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-label-text-color: var(--md-suggestion-chip-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-suggestion-chip-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-suggestion-chip-hover-state-layer-opacity, 0.08);--_label-text-color: var(--md-suggestion-chip-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-suggestion-chip-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-suggestion-chip-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-suggestion-chip-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-suggestion-chip-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-suggestion-chip-pressed-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-suggestion-chip-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-suggestion-chip-pressed-state-layer-opacity, 0.12);--_disabled-outline-color: var(--md-suggestion-chip-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-suggestion-chip-disabled-outline-opacity, 0.12);--_focus-outline-color: var(--md-suggestion-chip-focus-outline-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-suggestion-chip-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-suggestion-chip-outline-width, 1px);--_disabled-leading-icon-color: var(--md-suggestion-chip-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-suggestion-chip-disabled-leading-icon-opacity, 0.38);--_focus-leading-icon-color: var(--md-suggestion-chip-focus-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-leading-icon-color: var(--md-suggestion-chip-hover-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_leading-icon-color: var(--md-suggestion-chip-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-leading-icon-color: var(--md-suggestion-chip-pressed-leading-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-suggestion-chip-icon-size, 18px);--_container-shape-start-start: var(--md-suggestion-chip-container-shape-start-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-start-end: var(--md-suggestion-chip-container-shape-start-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-end: var(--md-suggestion-chip-container-shape-end-end, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_container-shape-end-start: var(--md-suggestion-chip-container-shape-end-start, var(--md-suggestion-chip-container-shape, var(--md-sys-shape-corner-small, 8px)));--_leading-space: var(--md-suggestion-chip-leading-space, 16px);--_trailing-space: var(--md-suggestion-chip-trailing-space, 16px);--_icon-label-space: var(--md-suggestion-chip-icon-label-space, 8px);--_with-leading-icon-leading-space: var(--md-suggestion-chip-with-leading-icon-leading-space, 8px)}@media(forced-colors: active){.link .outline{border-color:ActiveText}}
`;
      suggestion_styles_cssresult_default = styles20.styleSheet;
    }
  });

  // node_modules/@material/web/chips/suggestion-chip.js
  var MdSuggestionChip;
  var init_suggestion_chip2 = __esm({
    "node_modules/@material/web/chips/suggestion-chip.js"() {
      init_tslib_es6();
      init_decorators();
      init_elevated_styles_cssresult2();
      init_shared_styles_cssresult2();
      init_suggestion_chip();
      init_suggestion_styles_cssresult();
      MdSuggestionChip = class MdSuggestionChip2 extends SuggestionChip {
      };
      MdSuggestionChip.styles = [
        styles14,
        styles13,
        styles20
      ];
      MdSuggestionChip = __decorate([
        t("md-suggestion-chip")
      ], MdSuggestionChip);
    }
  });

  // node_modules/@material/web/divider/internal/divider.js
  var Divider;
  var init_divider = __esm({
    "node_modules/@material/web/divider/internal/divider.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      Divider = class extends i4 {
        constructor() {
          super(...arguments);
          this.inset = false;
          this.insetStart = false;
          this.insetEnd = false;
        }
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], Divider.prototype, "inset", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true, attribute: "inset-start" })
      ], Divider.prototype, "insetStart", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true, attribute: "inset-end" })
      ], Divider.prototype, "insetEnd", void 0);
    }
  });

  // node_modules/@material/web/divider/internal/divider-styles.cssresult.js
  var styles21, divider_styles_cssresult_default;
  var init_divider_styles_cssresult = __esm({
    "node_modules/@material/web/divider/internal/divider-styles.cssresult.js"() {
      init_lit();
      styles21 = i`:host{box-sizing:border-box;color:var(--md-divider-color, var(--md-sys-color-outline-variant, #cac4d0));display:flex;height:var(--md-divider-thickness, 1px);width:100%}:host([inset]),:host([inset-start]){padding-inline-start:16px}:host([inset]),:host([inset-end]){padding-inline-end:16px}:host::before{background:currentColor;content:"";height:100%;width:100%}@media(forced-colors: active){:host::before{background:CanvasText}}
`;
      divider_styles_cssresult_default = styles21.styleSheet;
    }
  });

  // node_modules/@material/web/divider/divider.js
  var MdDivider;
  var init_divider2 = __esm({
    "node_modules/@material/web/divider/divider.js"() {
      init_tslib_es6();
      init_decorators();
      init_divider();
      init_divider_styles_cssresult();
      MdDivider = class MdDivider2 extends Divider {
      };
      MdDivider.styles = [styles21];
      MdDivider = __decorate([
        t("md-divider")
      ], MdDivider);
    }
  });

  // node_modules/@material/web/dialog/internal/animations.js
  var DIALOG_DEFAULT_OPEN_ANIMATION, DIALOG_DEFAULT_CLOSE_ANIMATION;
  var init_animations = __esm({
    "node_modules/@material/web/dialog/internal/animations.js"() {
      init_animation();
      DIALOG_DEFAULT_OPEN_ANIMATION = {
        dialog: [
          [
            // Dialog slide down
            [{ "transform": "translateY(-50px)" }, { "transform": "translateY(0)" }],
            { duration: 500, easing: EASING.EMPHASIZED }
          ]
        ],
        scrim: [
          [
            // Scrim fade in
            [{ "opacity": 0 }, { "opacity": 0.32 }],
            { duration: 500, easing: "linear" }
          ]
        ],
        container: [
          [
            // Container fade in
            [{ "opacity": 0 }, { "opacity": 1 }],
            { duration: 50, easing: "linear", pseudoElement: "::before" }
          ],
          [
            // Container grow
            // Note: current spec says to grow from 0dp->100% and shrink from
            // 100%->35%. We change this to 35%->100% to simplify the animation that
            // is supposed to clip content as it grows. From 0dp it's possible to see
            // text/actions appear before the container has fully grown.
            [{ "height": "35%" }, { "height": "100%" }],
            { duration: 500, easing: EASING.EMPHASIZED, pseudoElement: "::before" }
          ]
        ],
        headline: [
          [
            // Headline fade in
            [{ "opacity": 0 }, { "opacity": 0, offset: 0.2 }, { "opacity": 1 }],
            { duration: 250, easing: "linear", fill: "forwards" }
          ]
        ],
        content: [
          [
            // Content fade in
            [{ "opacity": 0 }, { "opacity": 0, offset: 0.2 }, { "opacity": 1 }],
            { duration: 250, easing: "linear", fill: "forwards" }
          ]
        ],
        actions: [
          [
            // Actions fade in
            [{ "opacity": 0 }, { "opacity": 0, offset: 0.5 }, { "opacity": 1 }],
            { duration: 300, easing: "linear", fill: "forwards" }
          ]
        ]
      };
      DIALOG_DEFAULT_CLOSE_ANIMATION = {
        dialog: [
          [
            // Dialog slide up
            [{ "transform": "translateY(0)" }, { "transform": "translateY(-50px)" }],
            { duration: 150, easing: EASING.EMPHASIZED_ACCELERATE }
          ]
        ],
        scrim: [
          [
            // Scrim fade out
            [{ "opacity": 0.32 }, { "opacity": 0 }],
            { duration: 150, easing: "linear" }
          ]
        ],
        container: [
          [
            // Container shrink
            [{ "height": "100%" }, { "height": "35%" }],
            {
              duration: 150,
              easing: EASING.EMPHASIZED_ACCELERATE,
              pseudoElement: "::before"
            }
          ],
          [
            // Container fade out
            [{ "opacity": "1" }, { "opacity": "0" }],
            { delay: 100, duration: 50, easing: "linear", pseudoElement: "::before" }
          ]
        ],
        headline: [
          [
            // Headline fade out
            [{ "opacity": 1 }, { "opacity": 0 }],
            { duration: 100, easing: "linear", fill: "forwards" }
          ]
        ],
        content: [
          [
            // Content fade out
            [{ "opacity": 1 }, { "opacity": 0 }],
            { duration: 100, easing: "linear", fill: "forwards" }
          ]
        ],
        actions: [
          [
            // Actions fade out
            [{ "opacity": 1 }, { "opacity": 0 }],
            { duration: 100, easing: "linear", fill: "forwards" }
          ]
        ]
      };
    }
  });

  // node_modules/@material/web/dialog/internal/dialog.js
  function isFocusable(element) {
    const knownFocusableElements = ":is(button,input,select,textarea,object,:is(a,area)[href],[tabindex],[contenteditable=true])";
    const notDisabled = ":not(:disabled,[disabled])";
    const notNegativeTabIndex = ':not([tabindex^="-"])';
    if (element.matches(knownFocusableElements + notDisabled + notNegativeTabIndex)) {
      return true;
    }
    const isCustomElement = element.localName.includes("-");
    if (!isCustomElement) {
      return false;
    }
    if (!element.matches(notDisabled)) {
      return false;
    }
    return element.shadowRoot?.delegatesFocus ?? false;
  }
  var dialogBaseClass, Dialog;
  var init_dialog = __esm({
    "node_modules/@material/web/dialog/internal/dialog.js"() {
      init_tslib_es6();
      init_divider2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_delegate();
      init_redispatch_event();
      init_animations();
      dialogBaseClass = mixinDelegatesAria(i4);
      Dialog = class extends dialogBaseClass {
        // We do not use `delegatesFocus: true` due to a Chromium bug with
        // selecting text.
        // See https://bugs.chromium.org/p/chromium/issues/detail?id=950357
        /**
         * Opens the dialog when set to `true` and closes it when set to `false`.
         */
        get open() {
          return this.isOpen;
        }
        set open(open) {
          if (open === this.isOpen) {
            return;
          }
          this.isOpen = open;
          if (open) {
            this.setAttribute("open", "");
            this.show();
          } else {
            this.removeAttribute("open");
            this.close();
          }
        }
        constructor() {
          super();
          this.quick = false;
          this.returnValue = "";
          this.noFocusTrap = false;
          this.getOpenAnimation = () => DIALOG_DEFAULT_OPEN_ANIMATION;
          this.getCloseAnimation = () => DIALOG_DEFAULT_CLOSE_ANIMATION;
          this.isOpen = false;
          this.isOpening = false;
          this.isConnectedPromise = this.getIsConnectedPromise();
          this.isAtScrollTop = false;
          this.isAtScrollBottom = false;
          this.nextClickIsFromContent = false;
          this.hasHeadline = false;
          this.hasActions = false;
          this.hasIcon = false;
          this.escapePressedWithoutCancel = false;
          this.treewalker = o7 ? null : document.createTreeWalker(this, NodeFilter.SHOW_ELEMENT);
          if (!o7) {
            this.addEventListener("submit", this.handleSubmit);
          }
        }
        /**
         * Opens the dialog and fires a cancelable `open` event. After a dialog's
         * animation, an `opened` event is fired.
         *
         * Add an `autofocus` attribute to a child of the dialog that should
         * receive focus after opening.
         *
         * @return A Promise that resolves after the animation is finished and the
         *     `opened` event was fired.
         */
        async show() {
          this.isOpening = true;
          await this.isConnectedPromise;
          await this.updateComplete;
          const dialog = this.dialog;
          if (dialog.open || !this.isOpening) {
            this.isOpening = false;
            return;
          }
          const preventOpen = !this.dispatchEvent(new Event("open", { cancelable: true }));
          if (preventOpen) {
            this.open = false;
            this.isOpening = false;
            return;
          }
          dialog.showModal();
          this.open = true;
          if (this.scroller) {
            this.scroller.scrollTop = 0;
          }
          this.querySelector("[autofocus]")?.focus();
          await this.animateDialog(this.getOpenAnimation());
          this.dispatchEvent(new Event("opened"));
          this.isOpening = false;
        }
        /**
         * Closes the dialog and fires a cancelable `close` event. After a dialog's
         * animation, a `closed` event is fired.
         *
         * @param returnValue A return value usually indicating which button was used
         *     to close a dialog. If a dialog is canceled by clicking the scrim or
         *     pressing Escape, it will not change the return value after closing.
         * @return A Promise that resolves after the animation is finished and the
         *     `closed` event was fired.
         */
        async close(returnValue = this.returnValue) {
          this.isOpening = false;
          if (!this.isConnected) {
            this.open = false;
            return;
          }
          await this.updateComplete;
          const dialog = this.dialog;
          if (!dialog.open || this.isOpening) {
            this.open = false;
            return;
          }
          const prevReturnValue = this.returnValue;
          this.returnValue = returnValue;
          const preventClose = !this.dispatchEvent(new Event("close", { cancelable: true }));
          if (preventClose) {
            this.returnValue = prevReturnValue;
            return;
          }
          await this.animateDialog(this.getCloseAnimation());
          dialog.close(returnValue);
          this.open = false;
          this.dispatchEvent(new Event("closed"));
        }
        connectedCallback() {
          super.connectedCallback();
          this.isConnectedPromiseResolve();
        }
        disconnectedCallback() {
          super.disconnectedCallback();
          this.isConnectedPromise = this.getIsConnectedPromise();
        }
        render() {
          const scrollable = this.open && !(this.isAtScrollTop && this.isAtScrollBottom);
          const classes = {
            "has-headline": this.hasHeadline,
            "has-actions": this.hasActions,
            "has-icon": this.hasIcon,
            "scrollable": scrollable,
            "show-top-divider": scrollable && !this.isAtScrollTop,
            "show-bottom-divider": scrollable && !this.isAtScrollBottom
          };
          const showFocusTrap = this.open && !this.noFocusTrap;
          const focusTrap = b2`
      <div
        class="focus-trap"
        tabindex="0"
        aria-hidden="true"
        @focus=${this.handleFocusTrapFocus}></div>
    `;
          const { ariaLabel } = this;
          return b2`
      <div class="scrim"></div>
      <dialog
        class=${e8(classes)}
        aria-label=${ariaLabel || A}
        aria-labelledby=${this.hasHeadline ? "headline" : A}
        role=${this.type === "alert" ? "alertdialog" : A}
        @cancel=${this.handleCancel}
        @click=${this.handleDialogClick}
        @close=${this.handleClose}
        @keydown=${this.handleKeydown}
        .returnValue=${this.returnValue || A}>
        ${showFocusTrap ? focusTrap : A}
        <div class="container" @click=${this.handleContentClick}>
          <div class="headline">
            <div class="icon" aria-hidden="true">
              <slot name="icon" @slotchange=${this.handleIconChange}></slot>
            </div>
            <h2 id="headline" aria-hidden=${!this.hasHeadline || A}>
              <slot
                name="headline"
                @slotchange=${this.handleHeadlineChange}></slot>
            </h2>
            <md-divider></md-divider>
          </div>
          <div class="scroller">
            <div class="content">
              <div class="top anchor"></div>
              <slot name="content"></slot>
              <div class="bottom anchor"></div>
            </div>
          </div>
          <div class="actions">
            <md-divider></md-divider>
            <slot name="actions" @slotchange=${this.handleActionsChange}></slot>
          </div>
        </div>
        ${showFocusTrap ? focusTrap : A}
      </dialog>
    `;
        }
        firstUpdated() {
          this.intersectionObserver = new IntersectionObserver((entries) => {
            for (const entry of entries) {
              this.handleAnchorIntersection(entry);
            }
          }, { root: this.scroller });
          this.intersectionObserver.observe(this.topAnchor);
          this.intersectionObserver.observe(this.bottomAnchor);
        }
        handleDialogClick() {
          if (this.nextClickIsFromContent) {
            this.nextClickIsFromContent = false;
            return;
          }
          const preventDefault = !this.dispatchEvent(new Event("cancel", { cancelable: true }));
          if (preventDefault) {
            return;
          }
          this.close();
        }
        handleContentClick() {
          this.nextClickIsFromContent = true;
        }
        handleSubmit(event) {
          const form = event.target;
          const { submitter } = event;
          if (form.getAttribute("method") !== "dialog" || !submitter) {
            return;
          }
          this.close(submitter.getAttribute("value") ?? this.returnValue);
        }
        handleCancel(event) {
          if (event.target !== this.dialog) {
            return;
          }
          this.escapePressedWithoutCancel = false;
          const preventDefault = !redispatchEvent(this, event);
          event.preventDefault();
          if (preventDefault) {
            return;
          }
          this.close();
        }
        handleClose() {
          if (!this.escapePressedWithoutCancel) {
            return;
          }
          this.escapePressedWithoutCancel = false;
          this.dialog?.dispatchEvent(new Event("cancel", { cancelable: true }));
        }
        handleKeydown(event) {
          if (event.key !== "Escape") {
            return;
          }
          this.escapePressedWithoutCancel = true;
          setTimeout(() => {
            this.escapePressedWithoutCancel = false;
          });
        }
        async animateDialog(animation) {
          this.cancelAnimations?.abort();
          this.cancelAnimations = new AbortController();
          if (this.quick) {
            return;
          }
          const { dialog, scrim, container, headline, content, actions } = this;
          if (!dialog || !scrim || !container || !headline || !content || !actions) {
            return;
          }
          const { container: containerAnimate, dialog: dialogAnimate, scrim: scrimAnimate, headline: headlineAnimate, content: contentAnimate, actions: actionsAnimate } = animation;
          const elementAndAnimation = [
            [dialog, dialogAnimate ?? []],
            [scrim, scrimAnimate ?? []],
            [container, containerAnimate ?? []],
            [headline, headlineAnimate ?? []],
            [content, contentAnimate ?? []],
            [actions, actionsAnimate ?? []]
          ];
          const animations = [];
          for (const [element, animation2] of elementAndAnimation) {
            for (const animateArgs of animation2) {
              const animation3 = element.animate(...animateArgs);
              this.cancelAnimations.signal.addEventListener("abort", () => {
                animation3.cancel();
              });
              animations.push(animation3);
            }
          }
          await Promise.all(animations.map((animation2) => animation2.finished.catch(() => {
          })));
        }
        handleHeadlineChange(event) {
          const slot = event.target;
          this.hasHeadline = slot.assignedElements().length > 0;
        }
        handleActionsChange(event) {
          const slot = event.target;
          this.hasActions = slot.assignedElements().length > 0;
        }
        handleIconChange(event) {
          const slot = event.target;
          this.hasIcon = slot.assignedElements().length > 0;
        }
        handleAnchorIntersection(entry) {
          const { target, isIntersecting } = entry;
          if (target === this.topAnchor) {
            this.isAtScrollTop = isIntersecting;
          }
          if (target === this.bottomAnchor) {
            this.isAtScrollBottom = isIntersecting;
          }
        }
        getIsConnectedPromise() {
          return new Promise((resolve) => {
            this.isConnectedPromiseResolve = resolve;
          });
        }
        handleFocusTrapFocus(event) {
          const [firstFocusableChild, lastFocusableChild] = this.getFirstAndLastFocusableChildren();
          if (!firstFocusableChild || !lastFocusableChild) {
            this.dialog?.focus();
            return;
          }
          const isFirstFocusTrap = event.target === this.firstFocusTrap;
          const isLastFocusTrap = !isFirstFocusTrap;
          const focusCameFromFirstChild = event.relatedTarget === firstFocusableChild;
          const focusCameFromLastChild = event.relatedTarget === lastFocusableChild;
          const focusCameFromOutsideDialog = !focusCameFromFirstChild && !focusCameFromLastChild;
          const shouldFocusFirstChild = isLastFocusTrap && focusCameFromLastChild || isFirstFocusTrap && focusCameFromOutsideDialog;
          if (shouldFocusFirstChild) {
            firstFocusableChild.focus();
            return;
          }
          const shouldFocusLastChild = isFirstFocusTrap && focusCameFromFirstChild || isLastFocusTrap && focusCameFromOutsideDialog;
          if (shouldFocusLastChild) {
            lastFocusableChild.focus();
            return;
          }
        }
        getFirstAndLastFocusableChildren() {
          if (!this.treewalker) {
            return [null, null];
          }
          let firstFocusableChild = null;
          let lastFocusableChild = null;
          this.treewalker.currentNode = this.treewalker.root;
          while (this.treewalker.nextNode()) {
            const nextChild = this.treewalker.currentNode;
            if (!isFocusable(nextChild)) {
              continue;
            }
            if (!firstFocusableChild) {
              firstFocusableChild = nextChild;
            }
            lastFocusableChild = nextChild;
          }
          return [firstFocusableChild, lastFocusableChild];
        }
      };
      __decorate([
        n3({ type: Boolean })
      ], Dialog.prototype, "open", null);
      __decorate([
        n3({ type: Boolean })
      ], Dialog.prototype, "quick", void 0);
      __decorate([
        n3({ attribute: false })
      ], Dialog.prototype, "returnValue", void 0);
      __decorate([
        n3()
      ], Dialog.prototype, "type", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "no-focus-trap" })
      ], Dialog.prototype, "noFocusTrap", void 0);
      __decorate([
        e4("dialog")
      ], Dialog.prototype, "dialog", void 0);
      __decorate([
        e4(".scrim")
      ], Dialog.prototype, "scrim", void 0);
      __decorate([
        e4(".container")
      ], Dialog.prototype, "container", void 0);
      __decorate([
        e4(".headline")
      ], Dialog.prototype, "headline", void 0);
      __decorate([
        e4(".content")
      ], Dialog.prototype, "content", void 0);
      __decorate([
        e4(".actions")
      ], Dialog.prototype, "actions", void 0);
      __decorate([
        r4()
      ], Dialog.prototype, "isAtScrollTop", void 0);
      __decorate([
        r4()
      ], Dialog.prototype, "isAtScrollBottom", void 0);
      __decorate([
        e4(".scroller")
      ], Dialog.prototype, "scroller", void 0);
      __decorate([
        e4(".top.anchor")
      ], Dialog.prototype, "topAnchor", void 0);
      __decorate([
        e4(".bottom.anchor")
      ], Dialog.prototype, "bottomAnchor", void 0);
      __decorate([
        e4(".focus-trap")
      ], Dialog.prototype, "firstFocusTrap", void 0);
      __decorate([
        r4()
      ], Dialog.prototype, "hasHeadline", void 0);
      __decorate([
        r4()
      ], Dialog.prototype, "hasActions", void 0);
      __decorate([
        r4()
      ], Dialog.prototype, "hasIcon", void 0);
    }
  });

  // node_modules/@material/web/dialog/internal/dialog-styles.cssresult.js
  var styles22, dialog_styles_cssresult_default;
  var init_dialog_styles_cssresult = __esm({
    "node_modules/@material/web/dialog/internal/dialog-styles.cssresult.js"() {
      init_lit();
      styles22 = i`:host{border-start-start-radius:var(--md-dialog-container-shape-start-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-start-end-radius:var(--md-dialog-container-shape-start-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-end-radius:var(--md-dialog-container-shape-end-end, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));border-end-start-radius:var(--md-dialog-container-shape-end-start, var(--md-dialog-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));display:contents;margin:auto;max-height:min(560px,100% - 48px);max-width:min(560px,100% - 48px);min-height:140px;min-width:280px;position:fixed;height:fit-content;width:fit-content}dialog{background:rgba(0,0,0,0);border:none;border-radius:inherit;flex-direction:column;height:inherit;margin:inherit;max-height:inherit;max-width:inherit;min-height:inherit;min-width:inherit;outline:none;overflow:visible;padding:0;width:inherit}dialog[open]{display:flex}::backdrop{background:none}.scrim{background:var(--md-sys-color-scrim, #000);display:none;inset:0;opacity:32%;pointer-events:none;position:fixed;z-index:1}:host([open]) .scrim{display:flex}h2{all:unset;align-self:stretch}.headline{align-items:center;color:var(--md-dialog-headline-color, var(--md-sys-color-on-surface, #1d1b20));display:flex;flex-direction:column;font-family:var(--md-dialog-headline-font, var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto)));font-size:var(--md-dialog-headline-size, var(--md-sys-typescale-headline-small-size, 1.5rem));line-height:var(--md-dialog-headline-line-height, var(--md-sys-typescale-headline-small-line-height, 2rem));font-weight:var(--md-dialog-headline-weight, var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)));position:relative}slot[name=headline]::slotted(*){align-items:center;align-self:stretch;box-sizing:border-box;display:flex;gap:8px;padding:24px 24px 0}.icon{display:flex}slot[name=icon]::slotted(*){color:var(--md-dialog-icon-color, var(--md-sys-color-secondary, #625b71));fill:currentColor;font-size:var(--md-dialog-icon-size, 24px);margin-top:24px;height:var(--md-dialog-icon-size, 24px);width:var(--md-dialog-icon-size, 24px)}.has-icon slot[name=headline]::slotted(*){justify-content:center;padding-top:16px}.scrollable slot[name=headline]::slotted(*){padding-bottom:16px}.scrollable.has-headline slot[name=content]::slotted(*){padding-top:8px}.container{border-radius:inherit;display:flex;flex-direction:column;flex-grow:1;overflow:hidden;position:relative;transform-origin:top}.container::before{background:var(--md-dialog-container-color, var(--md-sys-color-surface-container-high, #ece6f0));border-radius:inherit;content:"";inset:0;position:absolute}.scroller{display:flex;flex:1;flex-direction:column;overflow:hidden;z-index:1}.scrollable .scroller{overflow-y:scroll}.content{color:var(--md-dialog-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-dialog-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-dialog-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-dialog-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));flex:1;font-weight:var(--md-dialog-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)));height:min-content;position:relative}slot[name=content]::slotted(*){box-sizing:border-box;padding:24px}.anchor{position:absolute}.top.anchor{top:0}.bottom.anchor{bottom:0}.actions{position:relative}slot[name=actions]::slotted(*){box-sizing:border-box;display:flex;gap:8px;justify-content:flex-end;padding:16px 24px 24px}.has-actions slot[name=content]::slotted(*){padding-bottom:8px}md-divider{display:none;position:absolute}.has-headline.show-top-divider .headline md-divider,.has-actions.show-bottom-divider .actions md-divider{display:flex}.headline md-divider{bottom:0}.actions md-divider{top:0}@media(forced-colors: active){dialog{outline:2px solid WindowText}}
`;
      dialog_styles_cssresult_default = styles22.styleSheet;
    }
  });

  // node_modules/@material/web/dialog/dialog.js
  var MdDialog;
  var init_dialog2 = __esm({
    "node_modules/@material/web/dialog/dialog.js"() {
      init_tslib_es6();
      init_decorators();
      init_dialog();
      init_dialog_styles_cssresult();
      MdDialog = class MdDialog2 extends Dialog {
      };
      MdDialog.styles = [styles22];
      MdDialog = __decorate([
        t("md-dialog")
      ], MdDialog);
    }
  });

  // node_modules/@material/web/fab/internal/shared.js
  var fabBaseClass, SharedFab;
  var init_shared = __esm({
    "node_modules/@material/web/fab/internal/shared.js"() {
      init_tslib_es6();
      init_elevation2();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_delegate();
      fabBaseClass = mixinDelegatesAria(i4);
      SharedFab = class extends fabBaseClass {
        constructor() {
          super(...arguments);
          this.size = "medium";
          this.label = "";
          this.lowered = false;
        }
        render() {
          const { ariaLabel } = this;
          return b2`
      <button
        class="fab ${e8(this.getRenderClasses())}"
        aria-label=${ariaLabel || A}>
        <md-elevation part="elevation"></md-elevation>
        <md-focus-ring part="focus-ring"></md-focus-ring>
        <md-ripple class="ripple"></md-ripple>
        ${this.renderTouchTarget()} ${this.renderIcon()} ${this.renderLabel()}
      </button>
    `;
        }
        getRenderClasses() {
          const isExtended = !!this.label;
          return {
            "lowered": this.lowered,
            "small": this.size === "small" && !isExtended,
            "large": this.size === "large" && !isExtended,
            "extended": isExtended
          };
        }
        renderTouchTarget() {
          return b2`<div class="touch-target"></div>`;
        }
        renderLabel() {
          return this.label ? b2`<span class="label">${this.label}</span>` : "";
        }
        renderIcon() {
          const { ariaLabel } = this;
          return b2`<span class="icon">
      <slot
        name="icon"
        aria-hidden=${ariaLabel || this.label ? "true" : A}>
        <span></span>
      </slot>
    </span>`;
        }
      };
      SharedFab.shadowRootOptions = {
        mode: "open",
        delegatesFocus: true
      };
      __decorate([
        n3({ reflect: true })
      ], SharedFab.prototype, "size", void 0);
      __decorate([
        n3()
      ], SharedFab.prototype, "label", void 0);
      __decorate([
        n3({ type: Boolean })
      ], SharedFab.prototype, "lowered", void 0);
    }
  });

  // node_modules/@material/web/fab/internal/fab.js
  var Fab;
  var init_fab = __esm({
    "node_modules/@material/web/fab/internal/fab.js"() {
      init_tslib_es6();
      init_decorators();
      init_shared();
      Fab = class extends SharedFab {
        constructor() {
          super(...arguments);
          this.variant = "surface";
        }
        getRenderClasses() {
          return {
            ...super.getRenderClasses(),
            "primary": this.variant === "primary",
            "secondary": this.variant === "secondary",
            "tertiary": this.variant === "tertiary"
          };
        }
      };
      __decorate([
        n3()
      ], Fab.prototype, "variant", void 0);
    }
  });

  // node_modules/@material/web/fab/internal/fab-branded-styles.cssresult.js
  var styles23, fab_branded_styles_cssresult_default;
  var init_fab_branded_styles_cssresult = __esm({
    "node_modules/@material/web/fab/internal/fab-branded-styles.cssresult.js"() {
      init_lit();
      styles23 = i`:host{--_container-color: var(--md-fab-branded-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-fab-branded-container-elevation, 3);--_container-height: var(--md-fab-branded-container-height, 56px);--_container-shadow-color: var(--md-fab-branded-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-width: var(--md-fab-branded-container-width, 56px);--_focus-container-elevation: var(--md-fab-branded-focus-container-elevation, 3);--_hover-container-elevation: var(--md-fab-branded-hover-container-elevation, 4);--_hover-state-layer-color: var(--md-fab-branded-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-branded-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-fab-branded-icon-size, 36px);--_lowered-container-color: var(--md-fab-branded-lowered-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_lowered-container-elevation: var(--md-fab-branded-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-branded-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-branded-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-branded-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-branded-pressed-container-elevation, 3);--_pressed-state-layer-color: var(--md-fab-branded-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-branded-pressed-state-layer-opacity, 0.12);--_focus-label-text-color: var(--md-fab-branded-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-fab-branded-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-color: var(--md-fab-branded-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-fab-branded-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-size: var(--md-fab-branded-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-line-height: var(--md-fab-branded-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-weight: var(--md-fab-branded-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_large-container-height: var(--md-fab-branded-large-container-height, 96px);--_large-container-width: var(--md-fab-branded-large-container-width, 96px);--_large-icon-size: var(--md-fab-branded-large-icon-size, 48px);--_pressed-label-text-color: var(--md-fab-branded-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-fab-branded-container-shape-start-start, var(--md-fab-branded-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-start-end: var(--md-fab-branded-container-shape-start-end, var(--md-fab-branded-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-end: var(--md-fab-branded-container-shape-end-end, var(--md-fab-branded-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-start: var(--md-fab-branded-container-shape-end-start, var(--md-fab-branded-container-shape, var(--md-sys-shape-corner-large, 16px)));--_large-container-shape-start-start: var(--md-fab-branded-large-container-shape-start-start, var(--md-fab-branded-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-start-end: var(--md-fab-branded-large-container-shape-start-end, var(--md-fab-branded-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-end: var(--md-fab-branded-large-container-shape-end-end, var(--md-fab-branded-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-start: var(--md-fab-branded-large-container-shape-end-start, var(--md-fab-branded-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)))}
`;
      fab_branded_styles_cssresult_default = styles23.styleSheet;
    }
  });

  // node_modules/@material/web/fab/internal/forced-colors-styles.cssresult.js
  var styles24, forced_colors_styles_cssresult_default;
  var init_forced_colors_styles_cssresult = __esm({
    "node_modules/@material/web/fab/internal/forced-colors-styles.cssresult.js"() {
      init_lit();
      styles24 = i`@media(forced-colors: active){.fab{border:1px solid ButtonText}.fab.extended{padding-inline-start:15px;padding-inline-end:19px}md-focus-ring{--md-focus-ring-outward-offset: 3px}}
`;
      forced_colors_styles_cssresult_default = styles24.styleSheet;
    }
  });

  // node_modules/@material/web/fab/internal/shared-styles.cssresult.js
  var styles25, shared_styles_cssresult_default3;
  var init_shared_styles_cssresult3 = __esm({
    "node_modules/@material/web/fab/internal/shared-styles.cssresult.js"() {
      init_lit();
      styles25 = i`:host{--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);display:inline-flex;-webkit-tap-highlight-color:rgba(0,0,0,0)}:host([size=medium][touch-target=wrapper]){margin:max(0px,48px - var(--_container-height))}:host([size=large][touch-target=wrapper]){margin:max(0px,48px - var(--_large-container-height))}.fab,.icon,.icon ::slotted(*){display:flex}.fab{align-items:center;justify-content:center;vertical-align:middle;padding:0;position:relative;height:var(--_container-height);transition-property:background-color;border-width:0px;outline:none;z-index:0;text-transform:inherit}.fab.extended{width:inherit;box-sizing:border-box;padding-inline-start:16px;padding-inline-end:20px}.fab:not(.extended){width:var(--_container-width)}.fab.large{width:var(--_large-container-width);height:var(--_large-container-height)}.fab.large .icon ::slotted(*){width:var(--_large-icon-size);height:var(--_large-icon-size);font-size:var(--_large-icon-size)}.fab.large,.fab.large .ripple{border-start-start-radius:var(--_large-container-shape-start-start);border-start-end-radius:var(--_large-container-shape-start-end);border-end-start-radius:var(--_large-container-shape-end-start);border-end-end-radius:var(--_large-container-shape-end-end)}.fab.large md-focus-ring{--md-focus-ring-shape-start-start: var(--_large-container-shape-start-start);--md-focus-ring-shape-start-end: var(--_large-container-shape-start-end);--md-focus-ring-shape-end-end: var(--_large-container-shape-end-end);--md-focus-ring-shape-end-start: var(--_large-container-shape-end-start)}.fab{--md-elevation-level: var(--_container-elevation);--md-elevation-shadow-color: var(--_container-shadow-color)}.fab:focus{--md-elevation-level: var(--_focus-container-elevation)}.fab:hover{--md-elevation-level: var(--_hover-container-elevation)}.fab:active{--md-elevation-level: var(--_pressed-container-elevation)}.fab.lowered{background-color:var(--_lowered-container-color);--md-elevation-level: var(--_lowered-container-elevation)}.fab.lowered:focus{--md-elevation-level: var(--_lowered-focus-container-elevation)}.fab.lowered:hover{--md-elevation-level: var(--_lowered-hover-container-elevation)}.fab.lowered:active{--md-elevation-level: var(--_lowered-pressed-container-elevation)}.fab{background-color:var(--_container-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-pressed-color: var(--_pressed-state-layer-color)}.fab .label{color:var(--_label-text-color)}.fab:hover .fab .label{color:var(--_hover-label-text-color)}.fab:focus .fab .label{color:var(--_focus-label-text-color)}.fab:active .fab .label{color:var(--_pressed-label-text-color)}.label{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight)}.fab.extended .icon ::slotted(*){margin-inline-end:12px}.ripple{overflow:hidden}.ripple,md-elevation{z-index:-1}.touch-target{position:absolute;top:50%;height:48px;left:50%;width:48px;transform:translate(-50%, -50%)}:host([touch-target=none]) .touch-target{display:none}md-elevation,.fab{transition-duration:280ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1)}.fab,.ripple{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}.icon ::slotted(*){width:var(--_icon-size);height:var(--_icon-size);font-size:var(--_icon-size)}
`;
      shared_styles_cssresult_default3 = styles25.styleSheet;
    }
  });

  // node_modules/@material/web/fab/branded-fab.js
  var MdBrandedFab;
  var init_branded_fab = __esm({
    "node_modules/@material/web/fab/branded-fab.js"() {
      init_tslib_es6();
      init_decorators();
      init_fab();
      init_fab_branded_styles_cssresult();
      init_forced_colors_styles_cssresult();
      init_shared_styles_cssresult3();
      MdBrandedFab = class MdBrandedFab2 extends Fab {
        getRenderClasses() {
          return {
            ...super.getRenderClasses(),
            "primary": false,
            "secondary": false,
            "tertiary": false,
            "small": false
          };
        }
      };
      MdBrandedFab.styles = [
        styles25,
        styles23,
        styles24
      ];
      MdBrandedFab = __decorate([
        t("md-branded-fab")
      ], MdBrandedFab);
    }
  });

  // node_modules/@material/web/fab/internal/fab-styles.cssresult.js
  var styles26, fab_styles_cssresult_default;
  var init_fab_styles_cssresult = __esm({
    "node_modules/@material/web/fab/internal/fab-styles.cssresult.js"() {
      init_lit();
      styles26 = i`:host{--_container-color: var(--md-fab-container-color, var(--md-sys-color-surface-container-high, #ece6f0));--_container-elevation: var(--md-fab-container-elevation, 3);--_container-height: var(--md-fab-container-height, 56px);--_container-shadow-color: var(--md-fab-container-shadow-color, var(--md-sys-color-shadow, #000));--_container-width: var(--md-fab-container-width, 56px);--_focus-container-elevation: var(--md-fab-focus-container-elevation, 3);--_focus-icon-color: var(--md-fab-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-container-elevation: var(--md-fab-hover-container-elevation, 4);--_hover-icon-color: var(--md-fab-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-fab-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-fab-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-fab-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-fab-icon-size, 24px);--_lowered-container-color: var(--md-fab-lowered-container-color, var(--md-sys-color-surface-container-low, #f7f2fa));--_lowered-container-elevation: var(--md-fab-lowered-container-elevation, 1);--_lowered-focus-container-elevation: var(--md-fab-lowered-focus-container-elevation, 1);--_lowered-hover-container-elevation: var(--md-fab-lowered-hover-container-elevation, 2);--_lowered-pressed-container-elevation: var(--md-fab-lowered-pressed-container-elevation, 1);--_pressed-container-elevation: var(--md-fab-pressed-container-elevation, 3);--_pressed-icon-color: var(--md-fab-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-fab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-fab-pressed-state-layer-opacity, 0.12);--_focus-label-text-color: var(--md-fab-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_hover-label-text-color: var(--md-fab-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-color: var(--md-fab-label-text-color, var(--md-sys-color-primary, #6750a4));--_label-text-font: var(--md-fab-label-text-font, var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-fab-label-text-line-height, var(--md-sys-typescale-label-large-line-height, 1.25rem));--_label-text-size: var(--md-fab-label-text-size, var(--md-sys-typescale-label-large-size, 0.875rem));--_label-text-weight: var(--md-fab-label-text-weight, var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)));--_large-container-height: var(--md-fab-large-container-height, 96px);--_large-container-width: var(--md-fab-large-container-width, 96px);--_large-icon-size: var(--md-fab-large-icon-size, 36px);--_pressed-label-text-color: var(--md-fab-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_primary-container-color: var(--md-fab-primary-container-color, var(--md-sys-color-primary-container, #eaddff));--_primary-focus-icon-color: var(--md-fab-primary-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-focus-label-text-color: var(--md-fab-primary-focus-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-icon-color: var(--md-fab-primary-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-label-text-color: var(--md-fab-primary-hover-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-hover-state-layer-color: var(--md-fab-primary-hover-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-icon-color: var(--md-fab-primary-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-label-text-color: var(--md-fab-primary-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-icon-color: var(--md-fab-primary-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-label-text-color: var(--md-fab-primary-pressed-label-text-color, var(--md-sys-color-on-primary-container, #21005d));--_primary-pressed-state-layer-color: var(--md-fab-primary-pressed-state-layer-color, var(--md-sys-color-on-primary-container, #21005d));--_secondary-container-color: var(--md-fab-secondary-container-color, var(--md-sys-color-secondary-container, #e8def8));--_secondary-focus-icon-color: var(--md-fab-secondary-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-focus-label-text-color: var(--md-fab-secondary-focus-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-icon-color: var(--md-fab-secondary-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-label-text-color: var(--md-fab-secondary-hover-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-hover-state-layer-color: var(--md-fab-secondary-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-icon-color: var(--md-fab-secondary-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-label-text-color: var(--md-fab-secondary-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-icon-color: var(--md-fab-secondary-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-label-text-color: var(--md-fab-secondary-pressed-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b));--_secondary-pressed-state-layer-color: var(--md-fab-secondary-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_small-container-height: var(--md-fab-small-container-height, 40px);--_small-container-width: var(--md-fab-small-container-width, 40px);--_small-icon-size: var(--md-fab-small-icon-size, 24px);--_tertiary-container-color: var(--md-fab-tertiary-container-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_tertiary-focus-icon-color: var(--md-fab-tertiary-focus-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-focus-label-text-color: var(--md-fab-tertiary-focus-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-icon-color: var(--md-fab-tertiary-hover-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-label-text-color: var(--md-fab-tertiary-hover-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-hover-state-layer-color: var(--md-fab-tertiary-hover-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-icon-color: var(--md-fab-tertiary-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-label-text-color: var(--md-fab-tertiary-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-icon-color: var(--md-fab-tertiary-pressed-icon-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-label-text-color: var(--md-fab-tertiary-pressed-label-text-color, var(--md-sys-color-on-tertiary-container, #31111d));--_tertiary-pressed-state-layer-color: var(--md-fab-tertiary-pressed-state-layer-color, var(--md-sys-color-on-tertiary-container, #31111d));--_container-shape-start-start: var(--md-fab-container-shape-start-start, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-start-end: var(--md-fab-container-shape-start-end, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-end: var(--md-fab-container-shape-end-end, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_container-shape-end-start: var(--md-fab-container-shape-end-start, var(--md-fab-container-shape, var(--md-sys-shape-corner-large, 16px)));--_large-container-shape-start-start: var(--md-fab-large-container-shape-start-start, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-start-end: var(--md-fab-large-container-shape-start-end, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-end: var(--md-fab-large-container-shape-end-end, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_large-container-shape-end-start: var(--md-fab-large-container-shape-end-start, var(--md-fab-large-container-shape, var(--md-sys-shape-corner-extra-large, 28px)));--_small-container-shape-start-start: var(--md-fab-small-container-shape-start-start, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-start-end: var(--md-fab-small-container-shape-start-end, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-end-end: var(--md-fab-small-container-shape-end-end, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));--_small-container-shape-end-start: var(--md-fab-small-container-shape-end-start, var(--md-fab-small-container-shape, var(--md-sys-shape-corner-medium, 12px)));cursor:pointer}:host([size=small][touch-target=wrapper]){margin:max(0px,48px - var(--_small-container-height))}.fab .icon ::slotted(*){color:var(--_icon-color)}.fab:focus{color:var(--_focus-icon-color)}.fab:hover{color:var(--_hover-icon-color)}.fab:active{color:var(--_pressed-icon-color)}.fab{cursor:inherit}.fab.primary{background-color:var(--_primary-container-color);--md-ripple-hover-color: var(--_primary-hover-state-layer-color);--md-ripple-pressed-color: var(--_primary-pressed-state-layer-color)}.fab.primary .icon ::slotted(*){color:var(--_primary-icon-color)}.fab.primary:focus{color:var(--_primary-focus-icon-color)}.fab.primary:hover{color:var(--_primary-hover-icon-color)}.fab.primary:active{color:var(--_primary-pressed-icon-color)}.fab.primary .label{color:var(--_primary-label-text-color)}.fab:hover .fab.primary .label{color:var(--_primary-hover-label-text-color)}.fab:focus .fab.primary .label{color:var(--_primary-focus-label-text-color)}.fab:active .fab.primary .label{color:var(--_primary-pressed-label-text-color)}.fab.secondary{background-color:var(--_secondary-container-color);--md-ripple-hover-color: var(--_secondary-hover-state-layer-color);--md-ripple-pressed-color: var(--_secondary-pressed-state-layer-color)}.fab.secondary .icon ::slotted(*){color:var(--_secondary-icon-color)}.fab.secondary:focus{color:var(--_secondary-focus-icon-color)}.fab.secondary:hover{color:var(--_secondary-hover-icon-color)}.fab.secondary:active{color:var(--_secondary-pressed-icon-color)}.fab.secondary .label{color:var(--_secondary-label-text-color)}.fab:hover .fab.secondary .label{color:var(--_secondary-hover-label-text-color)}.fab:focus .fab.secondary .label{color:var(--_secondary-focus-label-text-color)}.fab:active .fab.secondary .label{color:var(--_secondary-pressed-label-text-color)}.fab.tertiary{background-color:var(--_tertiary-container-color);--md-ripple-hover-color: var(--_tertiary-hover-state-layer-color);--md-ripple-pressed-color: var(--_tertiary-pressed-state-layer-color)}.fab.tertiary .icon ::slotted(*){color:var(--_tertiary-icon-color)}.fab.tertiary:focus{color:var(--_tertiary-focus-icon-color)}.fab.tertiary:hover{color:var(--_tertiary-hover-icon-color)}.fab.tertiary:active{color:var(--_tertiary-pressed-icon-color)}.fab.tertiary .label{color:var(--_tertiary-label-text-color)}.fab:hover .fab.tertiary .label{color:var(--_tertiary-hover-label-text-color)}.fab:focus .fab.tertiary .label{color:var(--_tertiary-focus-label-text-color)}.fab:active .fab.tertiary .label{color:var(--_tertiary-pressed-label-text-color)}.fab.extended slot span{padding-inline-start:4px}.fab.small{width:var(--_small-container-width);height:var(--_small-container-height)}.fab.small .icon ::slotted(*){width:var(--_small-icon-size);height:var(--_small-icon-size);font-size:var(--_small-icon-size)}.fab.small,.fab.small .ripple{border-start-start-radius:var(--_small-container-shape-start-start);border-start-end-radius:var(--_small-container-shape-start-end);border-end-start-radius:var(--_small-container-shape-end-start);border-end-end-radius:var(--_small-container-shape-end-end)}.fab.small md-focus-ring{--md-focus-ring-shape-start-start: var(--_small-container-shape-start-start);--md-focus-ring-shape-start-end: var(--_small-container-shape-start-end);--md-focus-ring-shape-end-end: var(--_small-container-shape-end-end);--md-focus-ring-shape-end-start: var(--_small-container-shape-end-start)}
`;
      fab_styles_cssresult_default = styles26.styleSheet;
    }
  });

  // node_modules/@material/web/fab/fab.js
  var MdFab;
  var init_fab2 = __esm({
    "node_modules/@material/web/fab/fab.js"() {
      init_tslib_es6();
      init_decorators();
      init_fab();
      init_fab_styles_cssresult();
      init_forced_colors_styles_cssresult();
      init_shared_styles_cssresult3();
      MdFab = class MdFab2 extends Fab {
      };
      MdFab.styles = [
        styles25,
        styles26,
        styles24
      ];
      MdFab = __decorate([
        t("md-fab")
      ], MdFab);
    }
  });

  // node_modules/@material/web/field/internal/field.js
  var Field;
  var init_field = __esm({
    "node_modules/@material/web/field/internal/field.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_class_map2();
      init_animation();
      Field = class extends i4 {
        constructor() {
          super(...arguments);
          this.disabled = false;
          this.error = false;
          this.focused = false;
          this.label = "";
          this.noAsterisk = false;
          this.populated = false;
          this.required = false;
          this.resizable = false;
          this.supportingText = "";
          this.errorText = "";
          this.count = -1;
          this.max = -1;
          this.hasStart = false;
          this.hasEnd = false;
          this.isAnimating = false;
          this.refreshErrorAlert = false;
          this.disableTransitions = false;
        }
        get counterText() {
          const countAsNumber = this.count ?? -1;
          const maxAsNumber = this.max ?? -1;
          if (countAsNumber < 0 || maxAsNumber <= 0) {
            return "";
          }
          return `${countAsNumber} / ${maxAsNumber}`;
        }
        get supportingOrErrorText() {
          return this.error && this.errorText ? this.errorText : this.supportingText;
        }
        /**
         * Re-announces the field's error supporting text to screen readers.
         *
         * Error text announces to screen readers anytime it is visible and changes.
         * Use the method to re-announce the message when the text has not changed,
         * but announcement is still needed (such as for `reportValidity()`).
         */
        reannounceError() {
          this.refreshErrorAlert = true;
        }
        update(props) {
          const isDisabledChanging = props.has("disabled") && props.get("disabled") !== void 0;
          if (isDisabledChanging) {
            this.disableTransitions = true;
          }
          if (this.disabled && this.focused) {
            props.set("focused", true);
            this.focused = false;
          }
          this.animateLabelIfNeeded({
            wasFocused: props.get("focused"),
            wasPopulated: props.get("populated")
          });
          super.update(props);
        }
        render() {
          const floatingLabel = this.renderLabel(
            /*isFloating*/
            true
          );
          const restingLabel = this.renderLabel(
            /*isFloating*/
            false
          );
          const outline = this.renderOutline?.(floatingLabel);
          const classes = {
            "disabled": this.disabled,
            "disable-transitions": this.disableTransitions,
            "error": this.error && !this.disabled,
            "focused": this.focused,
            "with-start": this.hasStart,
            "with-end": this.hasEnd,
            "populated": this.populated,
            "resizable": this.resizable,
            "required": this.required,
            "no-label": !this.label
          };
          return b2`
      <div class="field ${e8(classes)}">
        <div class="container-overflow">
          ${this.renderBackground?.()}
          <slot name="container"></slot>
          ${this.renderStateLayer?.()} ${this.renderIndicator?.()} ${outline}
          <div class="container">
            <div class="start">
              <slot name="start"></slot>
            </div>
            <div class="middle">
              <div class="label-wrapper">
                ${restingLabel} ${outline ? A : floatingLabel}
              </div>
              <div class="content">
                <slot></slot>
              </div>
            </div>
            <div class="end">
              <slot name="end"></slot>
            </div>
          </div>
        </div>
        ${this.renderSupportingText()}
      </div>
    `;
        }
        updated(changed) {
          if (changed.has("supportingText") || changed.has("errorText") || changed.has("count") || changed.has("max")) {
            this.updateSlottedAriaDescribedBy();
          }
          if (this.refreshErrorAlert) {
            requestAnimationFrame(() => {
              this.refreshErrorAlert = false;
            });
          }
          if (this.disableTransitions) {
            requestAnimationFrame(() => {
              this.disableTransitions = false;
            });
          }
        }
        renderSupportingText() {
          const { supportingOrErrorText, counterText } = this;
          if (!supportingOrErrorText && !counterText) {
            return A;
          }
          const start = b2`<span>${supportingOrErrorText}</span>`;
          const end = counterText ? b2`<span class="counter">${counterText}</span>` : A;
          const shouldErrorAnnounce = this.error && this.errorText && !this.refreshErrorAlert;
          const role = shouldErrorAnnounce ? "alert" : A;
          return b2`
      <div class="supporting-text" role=${role}>${start}${end}</div>
      <slot
        name="aria-describedby"
        @slotchange=${this.updateSlottedAriaDescribedBy}></slot>
    `;
        }
        updateSlottedAriaDescribedBy() {
          for (const element of this.slottedAriaDescribedBy) {
            D(b2`${this.supportingOrErrorText} ${this.counterText}`, element);
            element.setAttribute("hidden", "");
          }
        }
        renderLabel(isFloating) {
          if (!this.label) {
            return A;
          }
          let visible;
          if (isFloating) {
            visible = this.focused || this.populated || this.isAnimating;
          } else {
            visible = !this.focused && !this.populated && !this.isAnimating;
          }
          const classes = {
            "hidden": !visible,
            "floating": isFloating,
            "resting": !isFloating
          };
          const labelText = `${this.label}${this.required && !this.noAsterisk ? "*" : ""}`;
          return b2`
      <span class="label ${e8(classes)}" aria-hidden=${!visible}
        >${labelText}</span
      >
    `;
        }
        animateLabelIfNeeded({ wasFocused, wasPopulated }) {
          if (!this.label) {
            return;
          }
          wasFocused ??= this.focused;
          wasPopulated ??= this.populated;
          const wasFloating = wasFocused || wasPopulated;
          const shouldBeFloating = this.focused || this.populated;
          if (wasFloating === shouldBeFloating) {
            return;
          }
          const keyframes = this.getLabelKeyframes();
          if (!keyframes.length) {
            return;
          }
          this.isAnimating = true;
          this.labelAnimation?.cancel();
          this.labelAnimation = this.floatingLabelEl?.animate(keyframes, {
            duration: 150,
            easing: EASING.STANDARD
          });
          this.labelAnimation?.addEventListener("finish", () => {
            this.isAnimating = false;
          });
        }
        getLabelKeyframes() {
          const { floatingLabelEl, restingLabelEl } = this;
          if (!floatingLabelEl || !restingLabelEl) {
            return [];
          }
          const { x: floatingX, y: floatingY, height: floatingHeight } = floatingLabelEl.getBoundingClientRect();
          const { x: restingX, y: restingY, height: restingHeight } = restingLabelEl.getBoundingClientRect();
          const floatingScrollWidth = floatingLabelEl.scrollWidth;
          const restingScrollWidth = restingLabelEl.scrollWidth;
          if (floatingScrollWidth === 0 || restingScrollWidth === 0) {
            return [];
          }
          const scale = restingScrollWidth / floatingScrollWidth;
          const xDelta = restingX - floatingX;
          const yDelta = restingY - floatingY + Math.round((restingHeight - floatingHeight * scale) / 2);
          const restTransform = `translateX(${xDelta}px) translateY(${yDelta}px) scale(${scale})`;
          const floatTransform = `translateX(0) translateY(0) scale(1)`;
          const restingClientWidth = restingLabelEl.clientWidth;
          const isRestingClipped = restingScrollWidth > restingClientWidth;
          const width = isRestingClipped ? `${restingClientWidth / scale}px` : "";
          if (this.focused || this.populated) {
            return [
              { transform: restTransform, width },
              { transform: floatTransform, width }
            ];
          }
          return [
            { transform: floatTransform, width },
            { transform: restTransform, width }
          ];
        }
        getSurfacePositionClientRect() {
          return this.containerEl.getBoundingClientRect();
        }
      };
      __decorate([
        n3({ type: Boolean })
      ], Field.prototype, "disabled", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Field.prototype, "error", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Field.prototype, "focused", void 0);
      __decorate([
        n3()
      ], Field.prototype, "label", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "no-asterisk" })
      ], Field.prototype, "noAsterisk", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Field.prototype, "populated", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Field.prototype, "required", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Field.prototype, "resizable", void 0);
      __decorate([
        n3({ attribute: "supporting-text" })
      ], Field.prototype, "supportingText", void 0);
      __decorate([
        n3({ attribute: "error-text" })
      ], Field.prototype, "errorText", void 0);
      __decorate([
        n3({ type: Number })
      ], Field.prototype, "count", void 0);
      __decorate([
        n3({ type: Number })
      ], Field.prototype, "max", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "has-start" })
      ], Field.prototype, "hasStart", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "has-end" })
      ], Field.prototype, "hasEnd", void 0);
      __decorate([
        o4({ slot: "aria-describedby" })
      ], Field.prototype, "slottedAriaDescribedBy", void 0);
      __decorate([
        r4()
      ], Field.prototype, "isAnimating", void 0);
      __decorate([
        r4()
      ], Field.prototype, "refreshErrorAlert", void 0);
      __decorate([
        r4()
      ], Field.prototype, "disableTransitions", void 0);
      __decorate([
        e4(".label.floating")
      ], Field.prototype, "floatingLabelEl", void 0);
      __decorate([
        e4(".label.resting")
      ], Field.prototype, "restingLabelEl", void 0);
      __decorate([
        e4(".container")
      ], Field.prototype, "containerEl", void 0);
    }
  });

  // node_modules/@material/web/field/internal/filled-field.js
  var FilledField;
  var init_filled_field = __esm({
    "node_modules/@material/web/field/internal/filled-field.js"() {
      init_lit();
      init_field();
      FilledField = class extends Field {
        renderBackground() {
          return b2` <div class="background"></div> `;
        }
        renderStateLayer() {
          return b2` <div class="state-layer"></div> `;
        }
        renderIndicator() {
          return b2`<div class="active-indicator"></div>`;
        }
      };
    }
  });

  // node_modules/@material/web/field/internal/filled-styles.cssresult.js
  var styles27, filled_styles_cssresult_default2;
  var init_filled_styles_cssresult2 = __esm({
    "node_modules/@material/web/field/internal/filled-styles.cssresult.js"() {
      init_lit();
      styles27 = i`@layer styles{:host{--_active-indicator-color: var(--md-filled-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-field-active-indicator-height, 1px);--_bottom-space: var(--md-filled-field-bottom-space, 16px);--_container-color: var(--md-filled-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_content-color: var(--md-filled-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-filled-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-filled-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-filled-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-filled-field-content-space, 16px);--_content-weight: var(--md-filled-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-active-indicator-color: var(--md-filled-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-field-disabled-container-opacity, 0.04);--_disabled-content-color: var(--md-filled-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-filled-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-filled-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-filled-field-disabled-leading-content-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-filled-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-filled-field-disabled-trailing-content-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-content-color: var(--md-filled-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-active-indicator-color: var(--md-filled-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-content-color: var(--md-filled-field-error-focus-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-label-text-color: var(--md-filled-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-filled-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-filled-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-content-color: var(--md-filled-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-filled-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-filled-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-filled-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-filled-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-filled-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-field-focus-active-indicator-height, 3px);--_focus-content-color: var(--md-filled-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-filled-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-filled-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-field-hover-active-indicator-height, 1px);--_hover-content-color: var(--md-filled-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-content-color: var(--md-filled-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-filled-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-filled-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-filled-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-filled-field-leading-space, 16px);--_supporting-text-color: var(--md-filled-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-filled-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-filled-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-filled-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-filled-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-filled-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-filled-field-top-space, 16px);--_trailing-content-color: var(--md-filled-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-filled-field-trailing-space, 16px);--_with-label-bottom-space: var(--md-filled-field-with-label-bottom-space, 8px);--_with-label-top-space: var(--md-filled-field-with-label-top-space, 8px);--_with-leading-content-leading-space: var(--md-filled-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-filled-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-filled-field-container-shape-start-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-field-container-shape-start-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-field-container-shape-end-end, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-field-container-shape-end-start, var(--md-filled-field-container-shape, var(--md-sys-shape-corner-none, 0px)))}.background,.state-layer{border-radius:inherit;inset:0;pointer-events:none;position:absolute}.background{background:var(--_container-color)}.state-layer{visibility:hidden}.field:not(.disabled):hover .state-layer{visibility:visible}.label.floating{position:absolute;top:var(--_with-label-top-space)}.field:not(.with-start) .label-wrapper{margin-inline-start:var(--_leading-space)}.field:not(.with-end) .label-wrapper{margin-inline-end:var(--_trailing-space)}.active-indicator{inset:auto 0 0 0;pointer-events:none;position:absolute;width:100%;z-index:1}.active-indicator::before,.active-indicator::after{border-bottom:var(--_active-indicator-height) solid var(--_active-indicator-color);inset:auto 0 0 0;content:"";position:absolute;width:100%}.active-indicator::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .active-indicator::after{opacity:1}.field:not(.with-start) .content ::slotted(*){padding-inline-start:var(--_leading-space)}.field:not(.with-end) .content ::slotted(*){padding-inline-end:var(--_trailing-space)}.field:not(.no-label) .content ::slotted(:not(textarea)){padding-bottom:var(--_with-label-bottom-space);padding-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}.field:not(.no-label) .content ::slotted(textarea){margin-bottom:var(--_with-label-bottom-space);margin-top:calc(var(--_with-label-top-space) + var(--_label-text-populated-line-height))}:hover .active-indicator::before{border-bottom-color:var(--_hover-active-indicator-color);border-bottom-width:var(--_hover-active-indicator-height)}.active-indicator::after{border-bottom-color:var(--_focus-active-indicator-color);border-bottom-width:var(--_focus-active-indicator-height)}:hover .state-layer{background:var(--_hover-state-layer-color);opacity:var(--_hover-state-layer-opacity)}.disabled .active-indicator::before{border-bottom-color:var(--_disabled-active-indicator-color);border-bottom-width:var(--_disabled-active-indicator-height);opacity:var(--_disabled-active-indicator-opacity)}.disabled .background{background:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.error .active-indicator::before{border-bottom-color:var(--_error-active-indicator-color)}.error:hover .active-indicator::before{border-bottom-color:var(--_error-hover-active-indicator-color)}.error:hover .state-layer{background:var(--_error-hover-state-layer-color);opacity:var(--_error-hover-state-layer-opacity)}.error .active-indicator::after{border-bottom-color:var(--_error-focus-active-indicator-color)}.resizable .container{bottom:var(--_focus-active-indicator-height);clip-path:inset(var(--_focus-active-indicator-height) 0 0 0)}.resizable .container>*{top:var(--_focus-active-indicator-height)}}@layer hcm{@media(forced-colors: active){.disabled .active-indicator::before{border-color:GrayText;opacity:1}}}
`;
      filled_styles_cssresult_default2 = styles27.styleSheet;
    }
  });

  // node_modules/@material/web/field/internal/shared-styles.cssresult.js
  var styles28, shared_styles_cssresult_default4;
  var init_shared_styles_cssresult4 = __esm({
    "node_modules/@material/web/field/internal/shared-styles.cssresult.js"() {
      init_lit();
      styles28 = i`:host{display:inline-flex;resize:both}.field{display:flex;flex:1;flex-direction:column;writing-mode:horizontal-tb;max-width:100%}.container-overflow{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start);display:flex;height:100%;position:relative}.container{align-items:center;border-radius:inherit;display:flex;flex:1;max-height:100%;min-height:100%;min-width:min-content;position:relative}.field,.container-overflow{resize:inherit}.resizable:not(.disabled) .container{resize:inherit;overflow:hidden}.disabled{pointer-events:none}slot[name=container]{border-radius:inherit}slot[name=container]::slotted(*){border-radius:inherit;inset:0;pointer-events:none;position:absolute}@layer styles{.start,.middle,.end{display:flex;box-sizing:border-box;height:100%;position:relative}.start{color:var(--_leading-content-color)}.end{color:var(--_trailing-content-color)}.start,.end{align-items:center;justify-content:center}.with-start .start{margin-inline:var(--_with-leading-content-leading-space) var(--_content-space)}.with-end .end{margin-inline:var(--_content-space) var(--_with-trailing-content-trailing-space)}.middle{align-items:stretch;align-self:baseline;flex:1}.content{color:var(--_content-color);display:flex;flex:1;opacity:0;transition:opacity 83ms cubic-bezier(0.2, 0, 0, 1)}.no-label .content,.focused .content,.populated .content{opacity:1;transition-delay:67ms}:is(.disabled,.disable-transitions) .content{transition:none}.content ::slotted(*){all:unset;color:currentColor;font-family:var(--_content-font);font-size:var(--_content-size);line-height:var(--_content-line-height);font-weight:var(--_content-weight);width:100%;overflow-wrap:revert;white-space:revert}.content ::slotted(:not(textarea)){padding-top:var(--_top-space);padding-bottom:var(--_bottom-space)}.content ::slotted(textarea){margin-top:var(--_top-space);margin-bottom:var(--_bottom-space)}:hover .content{color:var(--_hover-content-color)}:hover .start{color:var(--_hover-leading-content-color)}:hover .end{color:var(--_hover-trailing-content-color)}.focused .content{color:var(--_focus-content-color)}.focused .start{color:var(--_focus-leading-content-color)}.focused .end{color:var(--_focus-trailing-content-color)}.disabled .content{color:var(--_disabled-content-color)}.disabled.no-label .content,.disabled.focused .content,.disabled.populated .content{opacity:var(--_disabled-content-opacity)}.disabled .start{color:var(--_disabled-leading-content-color);opacity:var(--_disabled-leading-content-opacity)}.disabled .end{color:var(--_disabled-trailing-content-color);opacity:var(--_disabled-trailing-content-opacity)}.error .content{color:var(--_error-content-color)}.error .start{color:var(--_error-leading-content-color)}.error .end{color:var(--_error-trailing-content-color)}.error:hover .content{color:var(--_error-hover-content-color)}.error:hover .start{color:var(--_error-hover-leading-content-color)}.error:hover .end{color:var(--_error-hover-trailing-content-color)}.error.focused .content{color:var(--_error-focus-content-color)}.error.focused .start{color:var(--_error-focus-leading-content-color)}.error.focused .end{color:var(--_error-focus-trailing-content-color)}}@layer hcm{@media(forced-colors: active){.disabled :is(.start,.content,.end){color:GrayText;opacity:1}}}@layer styles{.label{box-sizing:border-box;color:var(--_label-text-color);overflow:hidden;max-width:100%;text-overflow:ellipsis;white-space:nowrap;z-index:1;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);width:min-content}.label-wrapper{inset:0;pointer-events:none;position:absolute}.label.resting{position:absolute;top:var(--_top-space)}.label.floating{font-size:var(--_label-text-populated-size);line-height:var(--_label-text-populated-line-height);transform-origin:top left}.label.hidden{opacity:0}.no-label .label{display:none}.label-wrapper{inset:0;position:absolute;text-align:initial}:hover .label{color:var(--_hover-label-text-color)}.focused .label{color:var(--_focus-label-text-color)}.disabled .label{color:var(--_disabled-label-text-color)}.disabled .label:not(.hidden){opacity:var(--_disabled-label-text-opacity)}.error .label{color:var(--_error-label-text-color)}.error:hover .label{color:var(--_error-hover-label-text-color)}.error.focused .label{color:var(--_error-focus-label-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .label:not(.hidden){color:GrayText;opacity:1}}}@layer styles{.supporting-text{color:var(--_supporting-text-color);display:flex;font-family:var(--_supporting-text-font);font-size:var(--_supporting-text-size);line-height:var(--_supporting-text-line-height);font-weight:var(--_supporting-text-weight);gap:16px;justify-content:space-between;padding-inline-start:var(--_supporting-text-leading-space);padding-inline-end:var(--_supporting-text-trailing-space);padding-top:var(--_supporting-text-top-space)}.supporting-text :nth-child(2){flex-shrink:0}:hover .supporting-text{color:var(--_hover-supporting-text-color)}.focus .supporting-text{color:var(--_focus-supporting-text-color)}.disabled .supporting-text{color:var(--_disabled-supporting-text-color);opacity:var(--_disabled-supporting-text-opacity)}.error .supporting-text{color:var(--_error-supporting-text-color)}.error:hover .supporting-text{color:var(--_error-hover-supporting-text-color)}.error.focus .supporting-text{color:var(--_error-focus-supporting-text-color)}}@layer hcm{@media(forced-colors: active){.disabled .supporting-text{color:GrayText;opacity:1}}}
`;
      shared_styles_cssresult_default4 = styles28.styleSheet;
    }
  });

  // node_modules/@material/web/field/filled-field.js
  var MdFilledField;
  var init_filled_field2 = __esm({
    "node_modules/@material/web/field/filled-field.js"() {
      init_tslib_es6();
      init_decorators();
      init_filled_field();
      init_filled_styles_cssresult2();
      init_shared_styles_cssresult4();
      MdFilledField = class MdFilledField2 extends FilledField {
      };
      MdFilledField.styles = [styles28, styles27];
      MdFilledField = __decorate([
        t("md-filled-field")
      ], MdFilledField);
    }
  });

  // node_modules/@material/web/field/internal/outlined-field.js
  var OutlinedField;
  var init_outlined_field = __esm({
    "node_modules/@material/web/field/internal/outlined-field.js"() {
      init_lit();
      init_field();
      OutlinedField = class extends Field {
        renderOutline(floatingLabel) {
          return b2`
      <div class="outline">
        <div class="outline-start"></div>
        <div class="outline-notch">
          <div class="outline-panel-inactive"></div>
          <div class="outline-panel-active"></div>
          <div class="outline-label">${floatingLabel}</div>
        </div>
        <div class="outline-end"></div>
      </div>
    `;
        }
      };
    }
  });

  // node_modules/@material/web/field/internal/outlined-styles.cssresult.js
  var styles29, outlined_styles_cssresult_default2;
  var init_outlined_styles_cssresult2 = __esm({
    "node_modules/@material/web/field/internal/outlined-styles.cssresult.js"() {
      init_lit();
      styles29 = i`@layer styles{:host{--_bottom-space: var(--md-outlined-field-bottom-space, 16px);--_content-color: var(--md-outlined-field-content-color, var(--md-sys-color-on-surface, #1d1b20));--_content-font: var(--md-outlined-field-content-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_content-line-height: var(--md-outlined-field-content-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_content-size: var(--md-outlined-field-content-size, var(--md-sys-typescale-body-large-size, 1rem));--_content-space: var(--md-outlined-field-content-space, 16px);--_content-weight: var(--md-outlined-field-content-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_disabled-content-color: var(--md-outlined-field-disabled-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-content-opacity: var(--md-outlined-field-disabled-content-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-field-disabled-label-text-opacity, 0.38);--_disabled-leading-content-color: var(--md-outlined-field-disabled-leading-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-content-opacity: var(--md-outlined-field-disabled-leading-content-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-content-color: var(--md-outlined-field-disabled-trailing-content-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-content-opacity: var(--md-outlined-field-disabled-trailing-content-opacity, 0.38);--_error-content-color: var(--md-outlined-field-error-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-content-color: var(--md-outlined-field-error-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-content-color: var(--md-outlined-field-error-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-content-color: var(--md-outlined-field-error-focus-trailing-content-color, var(--md-sys-color-error, #b3261e));--_error-hover-content-color: var(--md-outlined-field-error-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-content-color: var(--md-outlined-field-error-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-content-color: var(--md-outlined-field-error-hover-trailing-content-color, var(--md-sys-color-on-error-container, #410e0b));--_error-label-text-color: var(--md-outlined-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-content-color: var(--md-outlined-field-error-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-content-color: var(--md-outlined-field-error-trailing-content-color, var(--md-sys-color-error, #b3261e));--_focus-content-color: var(--md-outlined-field-focus-content-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-content-color: var(--md-outlined-field-focus-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-content-color: var(--md-outlined-field-focus-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-content-color: var(--md-outlined-field-hover-content-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-content-color: var(--md-outlined-field-hover-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-content-color: var(--md-outlined-field-hover-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-outlined-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-padding-bottom: var(--md-outlined-field-label-text-padding-bottom, 8px);--_label-text-populated-line-height: var(--md-outlined-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-content-color: var(--md-outlined-field-leading-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-space: var(--md-outlined-field-leading-space, 16px);--_outline-color: var(--md-outlined-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-label-padding: var(--md-outlined-field-outline-label-padding, 4px);--_outline-width: var(--md-outlined-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-leading-space: var(--md-outlined-field-supporting-text-leading-space, 16px);--_supporting-text-line-height: var(--md-outlined-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-top-space: var(--md-outlined-field-supporting-text-top-space, 4px);--_supporting-text-trailing-space: var(--md-outlined-field-supporting-text-trailing-space, 16px);--_supporting-text-weight: var(--md-outlined-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_top-space: var(--md-outlined-field-top-space, 16px);--_trailing-content-color: var(--md-outlined-field-trailing-content-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-space: var(--md-outlined-field-trailing-space, 16px);--_with-leading-content-leading-space: var(--md-outlined-field-with-leading-content-leading-space, 12px);--_with-trailing-content-trailing-space: var(--md-outlined-field-with-trailing-content-trailing-space, 12px);--_container-shape-start-start: var(--md-outlined-field-container-shape-start-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-field-container-shape-start-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-field-container-shape-end-end, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-field-container-shape-end-start, var(--md-outlined-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)))}.outline{border-color:var(--_outline-color);border-radius:inherit;display:flex;pointer-events:none;height:100%;position:absolute;width:100%;z-index:1}.outline-start::before,.outline-start::after,.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after,.outline-end::before,.outline-end::after{border:inherit;content:"";inset:0;position:absolute}.outline-start,.outline-end{border:inherit;border-radius:inherit;box-sizing:border-box;position:relative}.outline-start::before,.outline-start::after,.outline-end::before,.outline-end::after{border-bottom-style:solid;border-top-style:solid}.outline-start::after,.outline-end::after{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-start::after,.focused .outline-end::after{opacity:1}.outline-start::before,.outline-start::after{border-inline-start-style:solid;border-inline-end-style:none;border-start-start-radius:inherit;border-start-end-radius:0;border-end-start-radius:inherit;border-end-end-radius:0;margin-inline-end:var(--_outline-label-padding)}.outline-end{flex-grow:1;margin-inline-start:calc(-1*var(--_outline-label-padding))}.outline-end::before,.outline-end::after{border-inline-start-style:none;border-inline-end-style:solid;border-start-start-radius:0;border-start-end-radius:inherit;border-end-start-radius:0;border-end-end-radius:inherit}.outline-notch{align-items:flex-start;border:inherit;display:flex;margin-inline-start:calc(-1*var(--_outline-label-padding));margin-inline-end:var(--_outline-label-padding);max-width:calc(100% - var(--_leading-space) - var(--_trailing-space));padding:0 var(--_outline-label-padding);position:relative}.no-label .outline-notch{display:none}.outline-panel-inactive,.outline-panel-active{border:inherit;border-bottom-style:solid;inset:0;position:absolute}.outline-panel-inactive::before,.outline-panel-inactive::after,.outline-panel-active::before,.outline-panel-active::after{border-top-style:solid;border-bottom:none;bottom:auto;transform:scaleX(1);transition:transform 150ms cubic-bezier(0.2, 0, 0, 1)}.outline-panel-inactive::before,.outline-panel-active::before{right:50%;transform-origin:top left}.outline-panel-inactive::after,.outline-panel-active::after{left:50%;transform-origin:top right}.populated .outline-panel-inactive::before,.populated .outline-panel-inactive::after,.populated .outline-panel-active::before,.populated .outline-panel-active::after,.focused .outline-panel-inactive::before,.focused .outline-panel-inactive::after,.focused .outline-panel-active::before,.focused .outline-panel-active::after{transform:scaleX(0)}.outline-panel-active{opacity:0;transition:opacity 150ms cubic-bezier(0.2, 0, 0, 1)}.focused .outline-panel-active{opacity:1}.outline-label{display:flex;max-width:100%;transform:translateY(calc(-100% + var(--_label-text-padding-bottom)))}.outline-start,.field:not(.with-start) .content ::slotted(*){padding-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-start) .label-wrapper{margin-inline-start:max(var(--_leading-space),max(var(--_container-shape-start-start),var(--_container-shape-end-start)) + var(--_outline-label-padding))}.field:not(.with-end) .content ::slotted(*){padding-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.field:not(.with-end) .label-wrapper{margin-inline-end:max(var(--_trailing-space),max(var(--_container-shape-start-end),var(--_container-shape-end-end)))}.outline-start::before,.outline-end::before,.outline-panel-inactive,.outline-panel-inactive::before,.outline-panel-inactive::after{border-width:var(--_outline-width)}:hover .outline{border-color:var(--_hover-outline-color);color:var(--_hover-outline-color)}:hover .outline-start::before,:hover .outline-end::before,:hover .outline-panel-inactive,:hover .outline-panel-inactive::before,:hover .outline-panel-inactive::after{border-width:var(--_hover-outline-width)}.focused .outline{border-color:var(--_focus-outline-color);color:var(--_focus-outline-color)}.outline-start::after,.outline-end::after,.outline-panel-active,.outline-panel-active::before,.outline-panel-active::after{border-width:var(--_focus-outline-width)}.disabled .outline{border-color:var(--_disabled-outline-color);color:var(--_disabled-outline-color)}.disabled .outline-start,.disabled .outline-end,.disabled .outline-panel-inactive{opacity:var(--_disabled-outline-opacity)}.disabled .outline-start::before,.disabled .outline-end::before,.disabled .outline-panel-inactive,.disabled .outline-panel-inactive::before,.disabled .outline-panel-inactive::after{border-width:var(--_disabled-outline-width)}.error .outline{border-color:var(--_error-outline-color);color:var(--_error-outline-color)}.error:hover .outline{border-color:var(--_error-hover-outline-color);color:var(--_error-hover-outline-color)}.error.focused .outline{border-color:var(--_error-focus-outline-color);color:var(--_error-focus-outline-color)}.resizable .container{bottom:var(--_focus-outline-width);inset-inline-end:var(--_focus-outline-width);clip-path:inset(var(--_focus-outline-width) 0 0 var(--_focus-outline-width))}.resizable .container>*{top:var(--_focus-outline-width);inset-inline-start:var(--_focus-outline-width)}.resizable .container:dir(rtl){clip-path:inset(var(--_focus-outline-width) var(--_focus-outline-width) 0 0)}}@layer hcm{@media(forced-colors: active){.disabled .outline{border-color:GrayText;color:GrayText}.disabled :is(.outline-start,.outline-end,.outline-panel-inactive){opacity:1}}}
`;
      outlined_styles_cssresult_default2 = styles29.styleSheet;
    }
  });

  // node_modules/@material/web/field/outlined-field.js
  var MdOutlinedField;
  var init_outlined_field2 = __esm({
    "node_modules/@material/web/field/outlined-field.js"() {
      init_tslib_es6();
      init_decorators();
      init_outlined_field();
      init_outlined_styles_cssresult2();
      init_shared_styles_cssresult4();
      MdOutlinedField = class MdOutlinedField2 extends OutlinedField {
      };
      MdOutlinedField.styles = [styles28, styles29];
      MdOutlinedField = __decorate([
        t("md-outlined-field")
      ], MdOutlinedField);
    }
  });

  // node_modules/@material/web/icon/internal/icon.js
  var Icon;
  var init_icon = __esm({
    "node_modules/@material/web/icon/internal/icon.js"() {
      init_lit();
      Icon = class extends i4 {
        render() {
          return b2`<slot></slot>`;
        }
        connectedCallback() {
          super.connectedCallback();
          const ariaHidden = this.getAttribute("aria-hidden");
          if (ariaHidden === "false") {
            this.removeAttribute("aria-hidden");
            return;
          }
          this.setAttribute("aria-hidden", "true");
        }
      };
    }
  });

  // node_modules/@material/web/icon/internal/icon-styles.cssresult.js
  var styles30, icon_styles_cssresult_default;
  var init_icon_styles_cssresult = __esm({
    "node_modules/@material/web/icon/internal/icon-styles.cssresult.js"() {
      init_lit();
      styles30 = i`:host{font-size:var(--md-icon-size, 24px);width:var(--md-icon-size, 24px);height:var(--md-icon-size, 24px);color:inherit;font-variation-settings:inherit;font-weight:400;font-family:var(--md-icon-font, Material Symbols Outlined);display:inline-flex;font-style:normal;place-items:center;place-content:center;line-height:1;overflow:hidden;letter-spacing:normal;text-transform:none;user-select:none;white-space:nowrap;word-wrap:normal;flex-shrink:0;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale}::slotted(svg){fill:currentColor}::slotted(*){height:100%;width:100%}
`;
      icon_styles_cssresult_default = styles30.styleSheet;
    }
  });

  // node_modules/@material/web/icon/icon.js
  var MdIcon;
  var init_icon2 = __esm({
    "node_modules/@material/web/icon/icon.js"() {
      init_tslib_es6();
      init_decorators();
      init_icon();
      init_icon_styles_cssresult();
      MdIcon = class MdIcon2 extends Icon {
      };
      MdIcon.styles = [styles30];
      MdIcon = __decorate([
        t("md-icon")
      ], MdIcon);
    }
  });

  // node_modules/@material/web/iconbutton/internal/filled-styles.cssresult.js
  var styles31, filled_styles_cssresult_default3;
  var init_filled_styles_cssresult3 = __esm({
    "node_modules/@material/web/iconbutton/internal/filled-styles.cssresult.js"() {
      init_lit();
      styles31 = i`:host{--_container-color: var(--md-filled-icon-button-container-color, var(--md-sys-color-primary, #6750a4));--_container-height: var(--md-filled-icon-button-container-height, 40px);--_container-width: var(--md-filled-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-icon-button-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-icon-color: var(--md-filled-icon-button-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-color: var(--md-filled-icon-button-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_hover-state-layer-opacity: var(--md-filled-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-icon-button-icon-color, var(--md-sys-color-on-primary, #fff));--_icon-size: var(--md-filled-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-icon-button-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-color: var(--md-filled-icon-button-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_pressed-state-layer-opacity: var(--md-filled-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-icon-button-selected-container-color, var(--md-sys-color-primary, #6750a4));--_toggle-selected-focus-icon-color: var(--md-filled-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-icon-color: var(--md-filled-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-hover-state-layer-color: var(--md-filled-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-icon-color: var(--md-filled-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-icon-color: var(--md-filled-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-primary, #fff));--_toggle-selected-pressed-state-layer-color: var(--md-filled-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-primary, #fff));--_unselected-container-color: var(--md-filled-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-icon-button-toggle-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-icon-color: var(--md-filled-icon-button-toggle-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-hover-state-layer-color: var(--md-filled-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_toggle-icon-color: var(--md-filled-icon-button-toggle-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-icon-color: var(--md-filled-icon-button-toggle-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_toggle-pressed-state-layer-color: var(--md-filled-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_container-shape-start-start: var(--md-filled-icon-button-container-shape-start-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-icon-button-container-shape-start-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-icon-button-container-shape-end-end, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-icon-button-container-shape-end-start, var(--md-filled-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.icon-button{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled:not(:disabled,[aria-disabled=true]){color:var(--_toggle-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled:not(:disabled,[aria-disabled=true])::before{background-color:var(--_unselected-container-color)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}
`;
      filled_styles_cssresult_default3 = styles31.styleSheet;
    }
  });

  // node_modules/lit-html/static.js
  var a3, o8, i6, l3, n6, u3, c4, $2;
  var init_static = __esm({
    "node_modules/lit-html/static.js"() {
      init_lit_html();
      a3 = /* @__PURE__ */ Symbol.for("");
      o8 = (t6) => {
        if (t6?.r === a3) return t6?._$litStatic$;
      };
      i6 = (t6, ...r9) => ({ _$litStatic$: r9.reduce((r10, e9, a4) => r10 + ((t7) => {
        if (void 0 !== t7._$litStatic$) return t7._$litStatic$;
        throw Error(`Value passed to 'literal' function must be a 'literal' result: ${t7}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`);
      })(e9) + t6[a4 + 1], t6[0]), r: a3 });
      l3 = /* @__PURE__ */ new Map();
      n6 = (t6) => (r9, ...e9) => {
        const a4 = e9.length;
        let s4, i8;
        const n9 = [], u4 = [];
        let c5, $3 = 0, f3 = false;
        for (; $3 < a4; ) {
          for (c5 = r9[$3]; $3 < a4 && void 0 !== (i8 = e9[$3], s4 = o8(i8)); ) c5 += s4 + r9[++$3], f3 = true;
          $3 !== a4 && u4.push(i8), n9.push(c5), $3++;
        }
        if ($3 === a4 && n9.push(r9[a4]), f3) {
          const t7 = n9.join("$$lit$$");
          void 0 === (r9 = l3.get(t7)) && (n9.raw = n9, l3.set(t7, r9 = n9)), e9 = u4;
        }
        return t6(r9, ...e9);
      };
      u3 = n6(b2);
      c4 = n6(w);
      $2 = n6(T);
    }
  });

  // node_modules/lit/static-html.js
  var init_static_html = __esm({
    "node_modules/lit/static-html.js"() {
      init_static();
    }
  });

  // node_modules/@material/web/internal/controller/is-rtl.js
  function isRtl(el, shouldCheck = true) {
    return shouldCheck && getComputedStyle(el).getPropertyValue("direction").trim() === "rtl";
  }
  var init_is_rtl = __esm({
    "node_modules/@material/web/internal/controller/is-rtl.js"() {
    }
  });

  // node_modules/@material/web/iconbutton/internal/icon-button.js
  var iconButtonBaseClass, IconButton;
  var init_icon_button = __esm({
    "node_modules/@material/web/iconbutton/internal/icon-button.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_static_html();
      init_delegate();
      init_is_rtl();
      init_dispatch_hooks();
      init_element_internals();
      init_form_associated();
      init_form_submitter();
      iconButtonBaseClass = mixinDelegatesAria(mixinFormSubmitter(mixinFormAssociated(mixinElementInternals(i4))));
      IconButton = class extends iconButtonBaseClass {
        constructor() {
          super();
          this.softDisabled = false;
          this.flipIconInRtl = false;
          this.href = "";
          this.download = "";
          this.target = "";
          this.ariaLabelSelected = "";
          this.toggle = false;
          this.selected = false;
          this.flipIcon = isRtl(this, this.flipIconInRtl);
          if (o7)
            return;
          setupDispatchHooks(this, "click");
          this.addEventListener("click", (event) => {
            if (this.softDisabled || this.disabled && this.href) {
              event.stopImmediatePropagation();
              event.preventDefault();
              return;
            }
            const wasSelected = this.selected;
            afterDispatch(event, () => {
              if (!this.toggle || this.disabled || event.defaultPrevented) {
                return;
              }
              this.selected = !wasSelected;
              this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
              this.dispatchEvent(new Event("change", { bubbles: true }));
            });
          });
        }
        willUpdate() {
          if (this.href) {
            this.disabled = false;
            this.softDisabled = false;
          }
        }
        render() {
          const tag = this.href ? i6`div` : i6`button`;
          const { ariaLabel, ariaHasPopup, ariaExpanded } = this;
          const hasToggledAriaLabel = ariaLabel && this.ariaLabelSelected;
          const ariaPressedValue = !this.toggle ? A : this.selected;
          let ariaLabelValue = A;
          if (!this.href) {
            ariaLabelValue = hasToggledAriaLabel && this.selected ? this.ariaLabelSelected : ariaLabel;
          }
          return u3`<${tag}
        class="icon-button ${e8(this.getRenderClasses())}"
        id="button"
        aria-label="${ariaLabelValue || A}"
        aria-haspopup="${!this.href && ariaHasPopup || A}"
        aria-expanded="${!this.href && ariaExpanded || A}"
        aria-pressed="${ariaPressedValue}"
        aria-disabled=${!this.href && this.softDisabled || A}
        ?disabled="${!this.href && this.disabled}">
        ${this.renderFocusRing()}
        ${this.renderRipple()}
        ${!this.selected ? this.renderIcon() : A}
        ${this.selected ? this.renderSelectedIcon() : A}
        ${this.href ? this.renderLink() : this.renderTouchTarget()}
  </${tag}>`;
        }
        renderLink() {
          const { ariaLabel } = this;
          return b2`
      <a
        class="link"
        id="link"
        href="${this.href}"
        download="${this.download || A}"
        target="${this.target || A}"
        aria-label="${ariaLabel || A}">
        ${this.renderTouchTarget()}
      </a>
    `;
        }
        getRenderClasses() {
          return {
            "flip-icon": this.flipIcon,
            "selected": this.toggle && this.selected
          };
        }
        renderIcon() {
          return b2`<span class="icon"><slot></slot></span>`;
        }
        renderSelectedIcon() {
          return b2`<span class="icon icon--selected"
      ><slot name="selected"><slot></slot></slot
    ></span>`;
        }
        renderTouchTarget() {
          return b2`<span class="touch"></span>`;
        }
        renderFocusRing() {
          return b2`<md-focus-ring
      part="focus-ring"
      for=${this.href ? "link" : "button"}></md-focus-ring>`;
        }
        renderRipple() {
          const isRippleDisabled = !this.href && (this.disabled || this.softDisabled);
          return b2`<md-ripple
      for=${this.href ? "link" : A}
      ?disabled="${isRippleDisabled}"></md-ripple>`;
        }
        connectedCallback() {
          this.flipIcon = isRtl(this, this.flipIconInRtl);
          super.connectedCallback();
        }
      };
      IconButton.shadowRootOptions = {
        mode: "open",
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean, attribute: "soft-disabled", reflect: true })
      ], IconButton.prototype, "softDisabled", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "flip-icon-in-rtl" })
      ], IconButton.prototype, "flipIconInRtl", void 0);
      __decorate([
        n3()
      ], IconButton.prototype, "href", void 0);
      __decorate([
        n3()
      ], IconButton.prototype, "download", void 0);
      __decorate([
        n3()
      ], IconButton.prototype, "target", void 0);
      __decorate([
        n3({ attribute: "aria-label-selected" })
      ], IconButton.prototype, "ariaLabelSelected", void 0);
      __decorate([
        n3({ type: Boolean })
      ], IconButton.prototype, "toggle", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], IconButton.prototype, "selected", void 0);
      __decorate([
        r4()
      ], IconButton.prototype, "flipIcon", void 0);
    }
  });

  // node_modules/@material/web/iconbutton/internal/shared-styles.cssresult.js
  var styles32, shared_styles_cssresult_default5;
  var init_shared_styles_cssresult5 = __esm({
    "node_modules/@material/web/iconbutton/internal/shared-styles.cssresult.js"() {
      init_lit();
      styles32 = i`:host{display:inline-flex;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);height:var(--_container-height);width:var(--_container-width);justify-content:center}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_container-height))/2) max(0px,(48px - var(--_container-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_container-shape-start-start);--md-focus-ring-shape-start-end: var(--_container-shape-start-end);--md-focus-ring-shape-end-end: var(--_container-shape-end-end);--md-focus-ring-shape-end-start: var(--_container-shape-end-start)}:host(:is([disabled],[soft-disabled])){pointer-events:none}.icon-button{place-items:center;background:none;border:none;box-sizing:border-box;cursor:pointer;display:flex;place-content:center;outline:none;padding:0;position:relative;text-decoration:none;user-select:none;z-index:0;flex:1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.icon ::slotted(*){font-size:var(--_icon-size);height:var(--_icon-size);width:var(--_icon-size);font-weight:inherit}md-ripple{z-index:-1;border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-start-radius:var(--_container-shape-end-start);border-end-end-radius:var(--_container-shape-end-end)}.flip-icon .icon{transform:scaleX(-1)}.icon{display:inline-flex}.link{display:grid;height:100%;outline:none;place-items:center;position:absolute;width:100%}.touch{position:absolute;height:max(48px,100%);width:max(48px,100%)}:host([touch-target=none]) .touch{display:none}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-icon-color: GrayText;--_disabled-icon-opacity: 1}}
`;
      shared_styles_cssresult_default5 = styles32.styleSheet;
    }
  });

  // node_modules/@material/web/iconbutton/filled-icon-button.js
  var MdFilledIconButton;
  var init_filled_icon_button = __esm({
    "node_modules/@material/web/iconbutton/filled-icon-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_filled_styles_cssresult3();
      init_icon_button();
      init_shared_styles_cssresult5();
      MdFilledIconButton = class MdFilledIconButton2 extends IconButton {
        getRenderClasses() {
          return {
            ...super.getRenderClasses(),
            "filled": true,
            "toggle-filled": this.toggle
          };
        }
      };
      MdFilledIconButton.styles = [styles32, styles31];
      MdFilledIconButton = __decorate([
        t("md-filled-icon-button")
      ], MdFilledIconButton);
    }
  });

  // node_modules/@material/web/iconbutton/internal/filled-tonal-styles.cssresult.js
  var styles33, filled_tonal_styles_cssresult_default2;
  var init_filled_tonal_styles_cssresult2 = __esm({
    "node_modules/@material/web/iconbutton/internal/filled-tonal-styles.cssresult.js"() {
      init_lit();
      styles33 = i`:host{--_container-color: var(--md-filled-tonal-icon-button-container-color, var(--md-sys-color-secondary-container, #e8def8));--_container-height: var(--md-filled-tonal-icon-button-container-height, 40px);--_container-width: var(--md-filled-tonal-icon-button-container-width, 40px);--_disabled-container-color: var(--md-filled-tonal-icon-button-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-tonal-icon-button-disabled-container-opacity, 0.12);--_disabled-icon-color: var(--md-filled-tonal-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-filled-tonal-icon-button-disabled-icon-opacity, 0.38);--_focus-icon-color: var(--md-filled-tonal-icon-button-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-icon-color: var(--md-filled-tonal-icon-button-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-color: var(--md-filled-tonal-icon-button-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_hover-state-layer-opacity: var(--md-filled-tonal-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-filled-tonal-icon-button-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_icon-size: var(--md-filled-tonal-icon-button-icon-size, 24px);--_pressed-icon-color: var(--md-filled-tonal-icon-button-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-color: var(--md-filled-tonal-icon-button-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_pressed-state-layer-opacity: var(--md-filled-tonal-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-filled-tonal-icon-button-selected-container-color, var(--md-sys-color-secondary-container, #e8def8));--_toggle-selected-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-focus-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-hover-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-icon-color, var(--md-sys-color-on-secondary-container, #1d192b));--_toggle-selected-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-selected-pressed-state-layer-color, var(--md-sys-color-on-secondary-container, #1d192b));--_unselected-container-color: var(--md-filled-tonal-icon-button-unselected-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_toggle-focus-icon-color: var(--md-filled-tonal-icon-button-toggle-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-icon-color: var(--md-filled-tonal-icon-button-toggle-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-hover-state-layer-color: var(--md-filled-tonal-icon-button-toggle-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-icon-color: var(--md-filled-tonal-icon-button-toggle-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-icon-color: var(--md-filled-tonal-icon-button-toggle-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_toggle-pressed-state-layer-color: var(--md-filled-tonal-icon-button-toggle-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_container-shape-start-start: var(--md-filled-tonal-icon-button-container-shape-start-start, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-filled-tonal-icon-button-container-shape-start-end, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-filled-tonal-icon-button-container-shape-end-end, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-filled-tonal-icon-button-container-shape-end-start, var(--md-filled-tonal-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.icon-button{color:var(--_icon-color)}.icon-button:hover{color:var(--_hover-icon-color)}.icon-button:focus{color:var(--_focus-icon-color)}.icon-button:active{color:var(--_pressed-icon-color)}.icon-button:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.icon-button{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.icon-button::before{background-color:var(--_container-color);border-radius:inherit;content:"";inset:0;position:absolute;z-index:-1}.icon-button:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-container-color);opacity:var(--_disabled-container-opacity)}.icon-button:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true]){color:var(--_toggle-icon-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-hover-icon-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-focus-icon-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-pressed-icon-color)}.toggle-filled-tonal{--md-ripple-hover-color: var(--_toggle-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-pressed-state-layer-color)}.toggle-filled-tonal:not(:disabled,[aria-disabled=true])::before{background-color:var(--_unselected-container-color)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_toggle-selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_toggle-selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_toggle-selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_toggle-selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_toggle-selected-hover-state-layer-color);--md-ripple-pressed-color: var(--_toggle-selected-pressed-state-layer-color)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}
`;
      filled_tonal_styles_cssresult_default2 = styles33.styleSheet;
    }
  });

  // node_modules/@material/web/iconbutton/filled-tonal-icon-button.js
  var MdFilledTonalIconButton;
  var init_filled_tonal_icon_button = __esm({
    "node_modules/@material/web/iconbutton/filled-tonal-icon-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_filled_tonal_styles_cssresult2();
      init_icon_button();
      init_shared_styles_cssresult5();
      MdFilledTonalIconButton = class MdFilledTonalIconButton2 extends IconButton {
        getRenderClasses() {
          return {
            ...super.getRenderClasses(),
            "filled-tonal": true,
            "toggle-filled-tonal": this.toggle
          };
        }
      };
      MdFilledTonalIconButton.styles = [styles32, styles33];
      MdFilledTonalIconButton = __decorate([
        t("md-filled-tonal-icon-button")
      ], MdFilledTonalIconButton);
    }
  });

  // node_modules/@material/web/iconbutton/internal/standard-styles.cssresult.js
  var styles34, standard_styles_cssresult_default;
  var init_standard_styles_cssresult = __esm({
    "node_modules/@material/web/iconbutton/internal/standard-styles.cssresult.js"() {
      init_lit();
      styles34 = i`:host{--_disabled-icon-color: var(--md-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-icon-button-disabled-icon-opacity, 0.38);--_icon-size: var(--md-icon-button-icon-size, 24px);--_selected-focus-icon-color: var(--md-icon-button-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-icon-color: var(--md-icon-button-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-color: var(--md-icon-button-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-hover-state-layer-opacity: var(--md-icon-button-selected-hover-state-layer-opacity, 0.08);--_selected-icon-color: var(--md-icon-button-selected-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-icon-color: var(--md-icon-button-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-color: var(--md-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_selected-pressed-state-layer-opacity: var(--md-icon-button-selected-pressed-state-layer-opacity, 0.12);--_state-layer-height: var(--md-icon-button-state-layer-height, 40px);--_state-layer-shape: var(--md-icon-button-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));--_state-layer-width: var(--md-icon-button-state-layer-width, 40px);--_focus-icon-color: var(--md-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-opacity: var(--md-icon-button-hover-state-layer-opacity, 0.08);--_icon-color: var(--md-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-icon-button-pressed-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-color: var(--md-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-state-layer-opacity: var(--md-icon-button-pressed-state-layer-opacity, 0.12);--_container-shape-start-start: 0;--_container-shape-start-end: 0;--_container-shape-end-end: 0;--_container-shape-end-start: 0;--_container-height: 0;--_container-width: 0;height:var(--_state-layer-height);width:var(--_state-layer-width)}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--_state-layer-height))/2) max(0px,(48px - var(--_state-layer-width))/2)}md-focus-ring{--md-focus-ring-shape-start-start: var(--_state-layer-shape);--md-focus-ring-shape-start-end: var(--_state-layer-shape);--md-focus-ring-shape-end-end: var(--_state-layer-shape);--md-focus-ring-shape-end-start: var(--_state-layer-shape)}.standard{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.standard:hover{color:var(--_hover-icon-color)}.standard:focus{color:var(--_focus-icon-color)}.standard:active{color:var(--_pressed-icon-color)}.standard:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}md-ripple{border-radius:var(--_state-layer-shape)}.standard:is(:disabled,[aria-disabled=true]){opacity:var(--_disabled-icon-opacity)}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_selected-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_selected-pressed-state-layer-opacity)}
`;
      standard_styles_cssresult_default = styles34.styleSheet;
    }
  });

  // node_modules/@material/web/iconbutton/icon-button.js
  var MdIconButton;
  var init_icon_button2 = __esm({
    "node_modules/@material/web/iconbutton/icon-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_icon_button();
      init_shared_styles_cssresult5();
      init_standard_styles_cssresult();
      MdIconButton = class MdIconButton2 extends IconButton {
        getRenderClasses() {
          return {
            ...super.getRenderClasses(),
            "standard": true
          };
        }
      };
      MdIconButton.styles = [styles32, styles34];
      MdIconButton = __decorate([
        t("md-icon-button")
      ], MdIconButton);
    }
  });

  // node_modules/@material/web/iconbutton/internal/outlined-styles.cssresult.js
  var styles35, outlined_styles_cssresult_default3;
  var init_outlined_styles_cssresult3 = __esm({
    "node_modules/@material/web/iconbutton/internal/outlined-styles.cssresult.js"() {
      init_lit();
      styles35 = i`:host{--_container-height: var(--md-outlined-icon-button-container-height, 40px);--_container-width: var(--md-outlined-icon-button-container-width, 40px);--_disabled-icon-color: var(--md-outlined-icon-button-disabled-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-icon-opacity: var(--md-outlined-icon-button-disabled-icon-opacity, 0.38);--_disabled-selected-container-color: var(--md-outlined-icon-button-disabled-selected-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-selected-container-opacity: var(--md-outlined-icon-button-disabled-selected-container-opacity, 0.12);--_hover-state-layer-opacity: var(--md-outlined-icon-button-hover-state-layer-opacity, 0.08);--_icon-size: var(--md-outlined-icon-button-icon-size, 24px);--_pressed-state-layer-opacity: var(--md-outlined-icon-button-pressed-state-layer-opacity, 0.12);--_selected-container-color: var(--md-outlined-icon-button-selected-container-color, var(--md-sys-color-inverse-surface, #322f35));--_selected-focus-icon-color: var(--md-outlined-icon-button-selected-focus-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-icon-color: var(--md-outlined-icon-button-selected-hover-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-hover-state-layer-color: var(--md-outlined-icon-button-selected-hover-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-icon-color: var(--md-outlined-icon-button-selected-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-icon-color: var(--md-outlined-icon-button-selected-pressed-icon-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_selected-pressed-state-layer-color: var(--md-outlined-icon-button-selected-pressed-state-layer-color, var(--md-sys-color-inverse-on-surface, #f5eff7));--_disabled-outline-color: var(--md-outlined-icon-button-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-icon-button-disabled-outline-opacity, 0.12);--_focus-icon-color: var(--md-outlined-icon-button-focus-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-icon-color: var(--md-outlined-icon-button-hover-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-outlined-icon-button-hover-state-layer-color, var(--md-sys-color-on-surface-variant, #49454f));--_icon-color: var(--md-outlined-icon-button-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_outline-color: var(--md-outlined-icon-button-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-icon-button-outline-width, 1px);--_pressed-icon-color: var(--md-outlined-icon-button-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-outlined-icon-button-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-outlined-icon-button-container-shape-start-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-start-end: var(--md-outlined-icon-button-container-shape-start-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-end: var(--md-outlined-icon-button-container-shape-end-end, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)));--_container-shape-end-start: var(--md-outlined-icon-button-container-shape-end-start, var(--md-outlined-icon-button-container-shape, var(--md-sys-shape-corner-full, 9999px)))}.outlined{background-color:rgba(0,0,0,0);color:var(--_icon-color);--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.outlined::before{border-color:var(--_outline-color);border-width:var(--_outline-width)}.outlined:hover{color:var(--_hover-icon-color)}.outlined:focus{color:var(--_focus-icon-color)}.outlined:active{color:var(--_pressed-icon-color)}.outlined:is(:disabled,[aria-disabled=true]){color:var(--_disabled-icon-color)}.outlined:is(:disabled,[aria-disabled=true])::before{border-color:var(--_disabled-outline-color);opacity:var(--_disabled-outline-opacity)}.outlined:is(:disabled,[aria-disabled=true]) .icon{opacity:var(--_disabled-icon-opacity)}.outlined::before{block-size:100%;border-style:solid;border-radius:inherit;box-sizing:border-box;content:"";inline-size:100%;inset:0;pointer-events:none;position:absolute;z-index:-1}.outlined.selected::before{border-width:0}.selected:not(:disabled,[aria-disabled=true]){color:var(--_selected-icon-color)}.selected:not(:disabled,[aria-disabled=true]):hover{color:var(--_selected-hover-icon-color)}.selected:not(:disabled,[aria-disabled=true]):focus{color:var(--_selected-focus-icon-color)}.selected:not(:disabled,[aria-disabled=true]):active{color:var(--_selected-pressed-icon-color)}.selected{--md-ripple-hover-color: var(--_selected-hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_selected-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}.selected:not(:disabled,[aria-disabled=true])::before{background-color:var(--_selected-container-color)}.selected:is(:disabled,[aria-disabled=true])::before{background-color:var(--_disabled-selected-container-color);opacity:var(--_disabled-selected-container-opacity)}@media(forced-colors: active){:host(:is([disabled],[soft-disabled])){--_disabled-outline-opacity: 1}.selected::before{border-color:CanvasText;border-width:var(--_outline-width)}.selected:is(:disabled,[aria-disabled=true])::before{border-color:GrayText;opacity:1}}
`;
      outlined_styles_cssresult_default3 = styles35.styleSheet;
    }
  });

  // node_modules/@material/web/iconbutton/outlined-icon-button.js
  var MdOutlinedIconButton;
  var init_outlined_icon_button = __esm({
    "node_modules/@material/web/iconbutton/outlined-icon-button.js"() {
      init_tslib_es6();
      init_decorators();
      init_icon_button();
      init_outlined_styles_cssresult3();
      init_shared_styles_cssresult5();
      MdOutlinedIconButton = class MdOutlinedIconButton2 extends IconButton {
        getRenderClasses() {
          return {
            ...super.getRenderClasses(),
            "outlined": true
          };
        }
      };
      MdOutlinedIconButton.styles = [styles32, styles35];
      MdOutlinedIconButton = __decorate([
        t("md-outlined-icon-button")
      ], MdOutlinedIconButton);
    }
  });

  // node_modules/@material/web/list/internal/list-navigation-helpers.js
  function activateFirstItem(items, isActivatable = isItemNotDisabled) {
    const firstItem = getFirstActivatableItem(items, isActivatable);
    if (firstItem) {
      firstItem.tabIndex = 0;
      firstItem.focus();
    }
    return firstItem;
  }
  function activateLastItem(items, isActivatable = isItemNotDisabled) {
    const lastItem = getLastActivatableItem(items, isActivatable);
    if (lastItem) {
      lastItem.tabIndex = 0;
      lastItem.focus();
    }
    return lastItem;
  }
  function deactivateActiveItem(items, isActivatable = isItemNotDisabled) {
    const activeItem = getActiveItem(items, isActivatable);
    if (activeItem) {
      activeItem.item.tabIndex = -1;
    }
    return activeItem;
  }
  function getActiveItem(items, isActivatable = isItemNotDisabled) {
    for (let i8 = 0; i8 < items.length; i8++) {
      const item = items[i8];
      if (item.tabIndex === 0 && isActivatable(item)) {
        return {
          item,
          index: i8
        };
      }
    }
    return null;
  }
  function getFirstActivatableItem(items, isActivatable = isItemNotDisabled) {
    for (const item of items) {
      if (isActivatable(item)) {
        return item;
      }
    }
    return null;
  }
  function getLastActivatableItem(items, isActivatable = isItemNotDisabled) {
    for (let i8 = items.length - 1; i8 >= 0; i8--) {
      const item = items[i8];
      if (isActivatable(item)) {
        return item;
      }
    }
    return null;
  }
  function getNextItem(items, index, isActivatable = isItemNotDisabled, wrap = true) {
    for (let i8 = 1; i8 < items.length; i8++) {
      const nextIndex = (i8 + index) % items.length;
      if (nextIndex < index && !wrap) {
        return null;
      }
      const item = items[nextIndex];
      if (isActivatable(item)) {
        return item;
      }
    }
    return items[index] ? items[index] : null;
  }
  function getPrevItem(items, index, isActivatable = isItemNotDisabled, wrap = true) {
    for (let i8 = 1; i8 < items.length; i8++) {
      const prevIndex = (index - i8 + items.length) % items.length;
      if (prevIndex > index && !wrap) {
        return null;
      }
      const item = items[prevIndex];
      if (isActivatable(item)) {
        return item;
      }
    }
    return items[index] ? items[index] : null;
  }
  function activateNextItem(items, activeItemRecord, isActivatable = isItemNotDisabled, wrap = true) {
    if (activeItemRecord) {
      const next = getNextItem(items, activeItemRecord.index, isActivatable, wrap);
      if (next) {
        next.tabIndex = 0;
        next.focus();
      }
      return next;
    } else {
      return activateFirstItem(items, isActivatable);
    }
  }
  function activatePreviousItem(items, activeItemRecord, isActivatable = isItemNotDisabled, wrap = true) {
    if (activeItemRecord) {
      const prev = getPrevItem(items, activeItemRecord.index, isActivatable, wrap);
      if (prev) {
        prev.tabIndex = 0;
        prev.focus();
      }
      return prev;
    } else {
      return activateLastItem(items, isActivatable);
    }
  }
  function createDeactivateItemsEvent() {
    return new Event("deactivate-items", { bubbles: true, composed: true });
  }
  function createRequestActivationEvent() {
    return new Event("request-activation", { bubbles: true, composed: true });
  }
  function isItemNotDisabled(item) {
    return !item.disabled;
  }
  var init_list_navigation_helpers = __esm({
    "node_modules/@material/web/list/internal/list-navigation-helpers.js"() {
    }
  });

  // node_modules/@material/web/list/internal/list-controller.js
  var NavigableKeys, ListController;
  var init_list_controller = __esm({
    "node_modules/@material/web/list/internal/list-controller.js"() {
      init_list_navigation_helpers();
      NavigableKeys = {
        ArrowDown: "ArrowDown",
        ArrowLeft: "ArrowLeft",
        ArrowUp: "ArrowUp",
        ArrowRight: "ArrowRight",
        Home: "Home",
        End: "End"
      };
      ListController = class {
        constructor(config) {
          this.handleKeydown = (event) => {
            const key = event.key;
            if (event.defaultPrevented || !this.isNavigableKey(key)) {
              return;
            }
            const items = this.items;
            if (!items.length) {
              return;
            }
            const activeItemRecord = getActiveItem(items, this.isActivatable);
            event.preventDefault();
            const isRtl3 = this.isRtl();
            const inlinePrevious = isRtl3 ? NavigableKeys.ArrowRight : NavigableKeys.ArrowLeft;
            const inlineNext = isRtl3 ? NavigableKeys.ArrowLeft : NavigableKeys.ArrowRight;
            let nextActiveItem = null;
            switch (key) {
              // Activate the next item
              case NavigableKeys.ArrowDown:
              case inlineNext:
                nextActiveItem = activateNextItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
                break;
              // Activate the previous item
              case NavigableKeys.ArrowUp:
              case inlinePrevious:
                nextActiveItem = activatePreviousItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
                break;
              // Activate the first item
              case NavigableKeys.Home:
                nextActiveItem = activateFirstItem(items, this.isActivatable);
                break;
              // Activate the last item
              case NavigableKeys.End:
                nextActiveItem = activateLastItem(items, this.isActivatable);
                break;
              default:
                break;
            }
            if (nextActiveItem && activeItemRecord && activeItemRecord.item !== nextActiveItem) {
              activeItemRecord.item.tabIndex = -1;
            }
          };
          this.onDeactivateItems = () => {
            const items = this.items;
            for (const item of items) {
              this.deactivateItem(item);
            }
          };
          this.onRequestActivation = (event) => {
            this.onDeactivateItems();
            const target = event.target;
            this.activateItem(target);
            target.focus();
          };
          this.onSlotchange = () => {
            const items = this.items;
            let encounteredActivated = false;
            for (const item of items) {
              const isActivated = !item.disabled && item.tabIndex > -1;
              if (isActivated && !encounteredActivated) {
                encounteredActivated = true;
                item.tabIndex = 0;
                continue;
              }
              item.tabIndex = -1;
            }
            if (encounteredActivated) {
              return;
            }
            const firstActivatableItem = getFirstActivatableItem(items, this.isActivatable);
            if (!firstActivatableItem) {
              return;
            }
            firstActivatableItem.tabIndex = 0;
          };
          const { isItem, getPossibleItems, isRtl: isRtl2, deactivateItem, activateItem, isNavigableKey, isActivatable, wrapNavigation } = config;
          this.isItem = isItem;
          this.getPossibleItems = getPossibleItems;
          this.isRtl = isRtl2;
          this.deactivateItem = deactivateItem;
          this.activateItem = activateItem;
          this.isNavigableKey = isNavigableKey;
          this.isActivatable = isActivatable;
          this.wrapNavigation = wrapNavigation ?? (() => true);
        }
        /**
         * The items being managed by the list. Additionally, attempts to see if the
         * object has a sub-item in the `.item` property.
         */
        get items() {
          const maybeItems = this.getPossibleItems();
          const items = [];
          for (const itemOrParent of maybeItems) {
            const isItem = this.isItem(itemOrParent);
            if (isItem) {
              items.push(itemOrParent);
              continue;
            }
            const subItem = itemOrParent.item;
            if (subItem && this.isItem(subItem)) {
              items.push(subItem);
            }
          }
          return items;
        }
        /**
         * Activates the next item in the list. If at the end of the list, the first
         * item will be activated.
         *
         * @return The activated list item or `null` if there are no items.
         */
        activateNextItem() {
          const items = this.items;
          const activeItemRecord = getActiveItem(items, this.isActivatable);
          if (activeItemRecord) {
            activeItemRecord.item.tabIndex = -1;
          }
          return activateNextItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
        }
        /**
         * Activates the previous item in the list. If at the start of the list, the
         * last item will be activated.
         *
         * @return The activated list item or `null` if there are no items.
         */
        activatePreviousItem() {
          const items = this.items;
          const activeItemRecord = getActiveItem(items, this.isActivatable);
          if (activeItemRecord) {
            activeItemRecord.item.tabIndex = -1;
          }
          return activatePreviousItem(items, activeItemRecord, this.isActivatable, this.wrapNavigation());
        }
      };
    }
  });

  // node_modules/@material/web/list/internal/list.js
  var NAVIGABLE_KEY_SET, List;
  var init_list = __esm({
    "node_modules/@material/web/list/internal/list.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_list_controller();
      NAVIGABLE_KEY_SET = new Set(Object.values(NavigableKeys));
      List = class extends i4 {
        /** @export */
        get items() {
          return this.listController.items;
        }
        constructor() {
          super();
          this.listController = new ListController({
            isItem: (item) => item.hasAttribute("md-list-item"),
            getPossibleItems: () => this.slotItems,
            isRtl: () => getComputedStyle(this).direction === "rtl",
            deactivateItem: (item) => {
              item.tabIndex = -1;
            },
            activateItem: (item) => {
              item.tabIndex = 0;
            },
            isNavigableKey: (key) => NAVIGABLE_KEY_SET.has(key),
            isActivatable: (item) => !item.disabled && item.type !== "text"
          });
          this.internals = // Cast needed for closure
          this.attachInternals();
          if (!o7) {
            this.internals.role = "list";
            this.addEventListener("keydown", this.listController.handleKeydown);
          }
        }
        render() {
          return b2`
      <slot
        @deactivate-items=${this.listController.onDeactivateItems}
        @request-activation=${this.listController.onRequestActivation}
        @slotchange=${this.listController.onSlotchange}>
      </slot>
    `;
        }
        /**
         * Activates the next item in the list. If at the end of the list, the first
         * item will be activated.
         *
         * @return The activated list item or `null` if there are no items.
         */
        activateNextItem() {
          return this.listController.activateNextItem();
        }
        /**
         * Activates the previous item in the list. If at the start of the list, the
         * last item will be activated.
         *
         * @return The activated list item or `null` if there are no items.
         */
        activatePreviousItem() {
          return this.listController.activatePreviousItem();
        }
      };
      __decorate([
        o4({ flatten: true })
      ], List.prototype, "slotItems", void 0);
    }
  });

  // node_modules/@material/web/list/internal/list-styles.cssresult.js
  var styles36, list_styles_cssresult_default;
  var init_list_styles_cssresult = __esm({
    "node_modules/@material/web/list/internal/list-styles.cssresult.js"() {
      init_lit();
      styles36 = i`:host{background:var(--md-list-container-color, var(--md-sys-color-surface, #fef7ff));color:unset;display:flex;flex-direction:column;outline:none;padding:8px 0;position:relative}
`;
      list_styles_cssresult_default = styles36.styleSheet;
    }
  });

  // node_modules/@material/web/list/list.js
  var MdList;
  var init_list2 = __esm({
    "node_modules/@material/web/list/list.js"() {
      init_tslib_es6();
      init_decorators();
      init_list();
      init_list_styles_cssresult();
      MdList = class MdList2 extends List {
      };
      MdList.styles = [styles36];
      MdList = __decorate([
        t("md-list")
      ], MdList);
    }
  });

  // node_modules/@material/web/labs/item/internal/item.js
  function slotHasContent(slot) {
    for (const node of slot.assignedNodes({ flatten: true })) {
      const isElement = node.nodeType === Node.ELEMENT_NODE;
      const isTextWithContent = node.nodeType === Node.TEXT_NODE && node.textContent?.match(/\S/);
      if (isElement || isTextWithContent) {
        return true;
      }
    }
    return false;
  }
  var Item;
  var init_item = __esm({
    "node_modules/@material/web/labs/item/internal/item.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      Item = class extends i4 {
        constructor() {
          super(...arguments);
          this.multiline = false;
        }
        render() {
          return b2`
      <slot name="container"></slot>
      <slot class="non-text" name="start"></slot>
      <div class="text">
        <slot name="overline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          class="default-slot"
          @slotchange=${this.handleTextSlotChange}></slot>
        <slot name="headline" @slotchange=${this.handleTextSlotChange}></slot>
        <slot
          name="supporting-text"
          @slotchange=${this.handleTextSlotChange}></slot>
      </div>
      <slot class="non-text" name="trailing-supporting-text"></slot>
      <slot class="non-text" name="end"></slot>
    `;
        }
        handleTextSlotChange() {
          let isMultiline = false;
          let slotsWithContent = 0;
          for (const slot of this.textSlots) {
            if (slotHasContent(slot)) {
              slotsWithContent += 1;
            }
            if (slotsWithContent > 1) {
              isMultiline = true;
              break;
            }
          }
          this.multiline = isMultiline;
        }
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], Item.prototype, "multiline", void 0);
      __decorate([
        r5(".text slot")
      ], Item.prototype, "textSlots", void 0);
    }
  });

  // node_modules/@material/web/labs/item/internal/item-styles.cssresult.js
  var styles37, item_styles_cssresult_default;
  var init_item_styles_cssresult = __esm({
    "node_modules/@material/web/labs/item/internal/item-styles.cssresult.js"() {
      init_lit();
      styles37 = i`:host{color:var(--md-sys-color-on-surface, #1d1b20);font-family:var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-large-size, 1rem);font-weight:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-large-line-height, 1.5rem);align-items:center;box-sizing:border-box;display:flex;gap:16px;min-height:56px;overflow:hidden;padding:12px 16px;position:relative;text-overflow:ellipsis}:host([multiline]){min-height:72px}[name=overline]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-body-medium-size, 0.875rem);font-weight:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400));line-height:var(--md-sys-typescale-body-medium-line-height, 1.25rem)}[name=trailing-supporting-text]{color:var(--md-sys-color-on-surface-variant, #49454f);font-family:var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto));font-size:var(--md-sys-typescale-label-small-size, 0.6875rem);font-weight:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500));line-height:var(--md-sys-typescale-label-small-line-height, 1rem)}[name=container]::slotted(*){inset:0;position:absolute}.default-slot{display:inline}.default-slot,.text ::slotted(*){overflow:hidden;text-overflow:ellipsis}.text{display:flex;flex:1;flex-direction:column;overflow:hidden}
`;
      item_styles_cssresult_default = styles37.styleSheet;
    }
  });

  // node_modules/@material/web/labs/item/item.js
  var MdItem;
  var init_item2 = __esm({
    "node_modules/@material/web/labs/item/item.js"() {
      init_tslib_es6();
      init_decorators();
      init_item();
      init_item_styles_cssresult();
      MdItem = class MdItem2 extends Item {
      };
      MdItem.styles = [styles37];
      MdItem = __decorate([
        t("md-item")
      ], MdItem);
    }
  });

  // node_modules/@material/web/list/internal/listitem/list-item.js
  var listItemBaseClass, ListItemEl;
  var init_list_item = __esm({
    "node_modules/@material/web/list/internal/listitem/list-item.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_item2();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_static_html();
      init_delegate();
      init_list_navigation_helpers();
      listItemBaseClass = mixinDelegatesAria(i4);
      ListItemEl = class extends listItemBaseClass {
        constructor() {
          super(...arguments);
          this.disabled = false;
          this.type = "text";
          this.isListItem = true;
          this.href = "";
          this.target = "";
        }
        get isDisabled() {
          return this.disabled && this.type !== "link";
        }
        willUpdate(changed) {
          if (this.href) {
            this.type = "link";
          }
          super.willUpdate(changed);
        }
        render() {
          return this.renderListItem(b2`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
        }
        /**
         * Renders the root list item.
         *
         * @param content the child content of the list item.
         */
        renderListItem(content) {
          const isAnchor = this.type === "link";
          let tag;
          switch (this.type) {
            case "link":
              tag = i6`a`;
              break;
            case "button":
              tag = i6`button`;
              break;
            default:
            case "text":
              tag = i6`li`;
              break;
          }
          const isInteractive = this.type !== "text";
          const target = isAnchor && !!this.target ? this.target : A;
          return u3`
      <${tag}
        id="item"
        tabindex="${this.isDisabled || !isInteractive ? -1 : 0}"
        ?disabled=${this.isDisabled}
        role="listitem"
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        aria-expanded=${this.ariaExpanded || A}
        aria-haspopup=${this.ariaHasPopup || A}
        class="list-item ${e8(this.getRenderClasses())}"
        href=${this.href || A}
        target=${target}
        @focus=${this.onFocus}
      >${content}</${tag}>
    `;
        }
        /**
         * Handles rendering of the ripple element.
         */
        renderRipple() {
          if (this.type === "text") {
            return A;
          }
          return b2` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.isDisabled}></md-ripple>`;
        }
        /**
         * Handles rendering of the focus ring.
         */
        renderFocusRing() {
          if (this.type === "text") {
            return A;
          }
          return b2` <md-focus-ring
      @visibility-changed=${this.onFocusRingVisibilityChanged}
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
        }
        onFocusRingVisibilityChanged(e9) {
        }
        /**
         * Classes applied to the list item root.
         */
        getRenderClasses() {
          return { "disabled": this.isDisabled };
        }
        /**
         * Handles rendering the headline and supporting text.
         */
        renderBody() {
          return b2`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
        }
        onFocus() {
          if (this.tabIndex !== -1) {
            return;
          }
          this.dispatchEvent(createRequestActivationEvent());
        }
        focus() {
          this.listItemRoot?.focus();
        }
        click() {
          if (!this.listItemRoot) {
            super.click();
            return;
          }
          this.listItemRoot.click();
        }
      };
      ListItemEl.shadowRootOptions = {
        ...i4.shadowRootOptions,
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], ListItemEl.prototype, "disabled", void 0);
      __decorate([
        n3({ reflect: true })
      ], ListItemEl.prototype, "type", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "md-list-item", reflect: true })
      ], ListItemEl.prototype, "isListItem", void 0);
      __decorate([
        n3()
      ], ListItemEl.prototype, "href", void 0);
      __decorate([
        n3()
      ], ListItemEl.prototype, "target", void 0);
      __decorate([
        e4(".list-item")
      ], ListItemEl.prototype, "listItemRoot", void 0);
    }
  });

  // node_modules/@material/web/list/internal/listitem/list-item-styles.cssresult.js
  var styles38, list_item_styles_cssresult_default;
  var init_list_item_styles_cssresult = __esm({
    "node_modules/@material/web/list/internal/listitem/list-item-styles.cssresult.js"() {
      init_lit();
      styles38 = i`:host{display:flex;gap:16px;-webkit-tap-highlight-color:rgba(0,0,0,0);--md-ripple-hover-color: var(--md-list-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-list-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-list-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-list-item-pressed-state-layer-opacity, 0.12)}:host(:is([type=button]:not([disabled]),[type=link])){cursor:pointer}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;cursor:inherit;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;gap:inherit;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0);width:100%}.list-item.interactive{cursor:pointer}.list-item.disabled{opacity:var(--md-list-item-disabled-opacity, 0.3);pointer-events:none}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;height:100%;color:var(--md-list-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-list-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-list-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-list-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-list-item-one-line-container-height, 56px);padding-top:var(--md-list-item-top-space, 12px);padding-bottom:var(--md-list-item-bottom-space, 12px);padding-inline-start:var(--md-list-item-leading-space, 16px);padding-inline-end:var(--md-list-item-trailing-space, 16px);gap:inherit}md-item[multiline]{min-height:var(--md-list-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-list-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-list-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-list-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-list-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-list-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-list-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-list-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-list-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-list-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-list-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}@media(forced-colors: active){.disabled slot{color:GrayText}.list-item.disabled{color:GrayText;opacity:1}}
`;
      list_item_styles_cssresult_default = styles38.styleSheet;
    }
  });

  // node_modules/@material/web/list/list-item.js
  var MdListItem;
  var init_list_item2 = __esm({
    "node_modules/@material/web/list/list-item.js"() {
      init_tslib_es6();
      init_decorators();
      init_list_item();
      init_list_item_styles_cssresult();
      MdListItem = class MdListItem2 extends ListItemEl {
      };
      MdListItem.styles = [styles38];
      MdListItem = __decorate([
        t("md-list-item")
      ], MdListItem);
    }
  });

  // node_modules/lit-html/directives/style-map.js
  var n7, i7, o9;
  var init_style_map = __esm({
    "node_modules/lit-html/directives/style-map.js"() {
      init_lit_html();
      init_directive();
      n7 = "important";
      i7 = " !" + n7;
      o9 = e7(class extends i5 {
        constructor(t6) {
          if (super(t6), t6.type !== t4.ATTRIBUTE || "style" !== t6.name || t6.strings?.length > 2) throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.");
        }
        render(t6) {
          return Object.keys(t6).reduce((e9, r9) => {
            const s4 = t6[r9];
            return null == s4 ? e9 : e9 + `${r9 = r9.includes("-") ? r9 : r9.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g, "-$&").toLowerCase()}:${s4};`;
          }, "");
        }
        update(e9, [r9]) {
          const { style: s4 } = e9.element;
          if (void 0 === this.ft) return this.ft = new Set(Object.keys(r9)), this.render(r9);
          for (const t6 of this.ft) null == r9[t6] && (this.ft.delete(t6), t6.includes("-") ? s4.removeProperty(t6) : s4[t6] = null);
          for (const t6 in r9) {
            const e10 = r9[t6];
            if (null != e10) {
              this.ft.add(t6);
              const r10 = "string" == typeof e10 && e10.endsWith(i7);
              t6.includes("-") || r10 ? s4.setProperty(t6, r10 ? e10.slice(0, -11) : e10, r10 ? n7 : "") : s4[t6] = e10;
            }
          }
          return E;
        }
      });
    }
  });

  // node_modules/lit/directives/style-map.js
  var init_style_map2 = __esm({
    "node_modules/lit/directives/style-map.js"() {
      init_style_map();
    }
  });

  // node_modules/@material/web/menu/internal/controllers/shared.js
  function createCloseMenuEvent(initiator, reason) {
    return new CustomEvent("close-menu", {
      bubbles: true,
      composed: true,
      detail: { initiator, reason, itemPath: [initiator] }
    });
  }
  function createDeactivateTypeaheadEvent() {
    return new Event("deactivate-typeahead", { bubbles: true, composed: true });
  }
  function createActivateTypeaheadEvent() {
    return new Event("activate-typeahead", { bubbles: true, composed: true });
  }
  function isClosableKey(code) {
    return Object.values(KeydownCloseKey).some((value) => value === code);
  }
  function isSelectableKey(code) {
    return Object.values(SelectionKey).some((value) => value === code);
  }
  function isElementInSubtree(target, container) {
    const focusEv = new Event("md-contains", { bubbles: true, composed: true });
    let composedPath = [];
    const listener = (ev) => {
      composedPath = ev.composedPath();
    };
    container.addEventListener("md-contains", listener);
    target.dispatchEvent(focusEv);
    container.removeEventListener("md-contains", listener);
    const isContained = composedPath.length > 0;
    return isContained;
  }
  var createDefaultCloseMenuEvent, NavigableKey, SelectionKey, CloseReason, KeydownCloseKey, FocusState;
  var init_shared2 = __esm({
    "node_modules/@material/web/menu/internal/controllers/shared.js"() {
      createDefaultCloseMenuEvent = createCloseMenuEvent;
      NavigableKey = {
        UP: "ArrowUp",
        DOWN: "ArrowDown",
        RIGHT: "ArrowRight",
        LEFT: "ArrowLeft"
      };
      SelectionKey = {
        SPACE: "Space",
        ENTER: "Enter"
      };
      CloseReason = {
        CLICK_SELECTION: "click-selection",
        KEYDOWN: "keydown"
      };
      KeydownCloseKey = {
        ESCAPE: "Escape",
        SPACE: SelectionKey.SPACE,
        ENTER: SelectionKey.ENTER
      };
      FocusState = {
        NONE: "none",
        LIST_ROOT: "list-root",
        FIRST_ITEM: "first-item",
        LAST_ITEM: "last-item"
      };
    }
  });

  // node_modules/@material/web/menu/internal/controllers/surfacePositionController.js
  var Corner, SurfacePositionController;
  var init_surfacePositionController = __esm({
    "node_modules/@material/web/menu/internal/controllers/surfacePositionController.js"() {
      Corner = {
        END_START: "end-start",
        END_END: "end-end",
        START_START: "start-start",
        START_END: "start-end"
      };
      SurfacePositionController = class {
        /**
         * @param host The host to connect the controller to.
         * @param getProperties A function that returns the properties for the
         * controller.
         */
        constructor(host, getProperties) {
          this.host = host;
          this.getProperties = getProperties;
          this.surfaceStylesInternal = {
            "display": "none"
          };
          this.lastValues = {
            isOpen: false
          };
          this.host.addController(this);
        }
        /**
         * The StyleInfo map to apply to the surface via Lit's stylemap
         */
        get surfaceStyles() {
          return this.surfaceStylesInternal;
        }
        /**
         * Calculates the surface's new position required so that the surface's
         * `surfaceCorner` aligns to the anchor's `anchorCorner` while keeping the
         * surface inside the window viewport. This positioning also respects RTL by
         * checking `getComputedStyle()` on the surface element.
         */
        async position() {
          const { surfaceEl, anchorEl, anchorCorner: anchorCornerRaw, surfaceCorner: surfaceCornerRaw, positioning, xOffset, yOffset, disableBlockFlip, disableInlineFlip, repositionStrategy } = this.getProperties();
          const anchorCorner = anchorCornerRaw.toLowerCase().trim();
          const surfaceCorner = surfaceCornerRaw.toLowerCase().trim();
          if (!surfaceEl || !anchorEl) {
            return;
          }
          const windowInnerWidth = window.innerWidth;
          const windowInnerHeight = window.innerHeight;
          const div = document.createElement("div");
          div.style.opacity = "0";
          div.style.position = "fixed";
          div.style.display = "block";
          div.style.inset = "0";
          document.body.appendChild(div);
          const scrollbarTestRect = div.getBoundingClientRect();
          div.remove();
          const blockScrollbarHeight = window.innerHeight - scrollbarTestRect.bottom;
          const inlineScrollbarWidth = window.innerWidth - scrollbarTestRect.right;
          this.surfaceStylesInternal = {
            "display": "block",
            "opacity": "0"
          };
          this.host.requestUpdate();
          await this.host.updateComplete;
          if (surfaceEl.popover && surfaceEl.isConnected) {
            surfaceEl.showPopover();
          }
          const surfaceRect = surfaceEl.getSurfacePositionClientRect ? surfaceEl.getSurfacePositionClientRect() : surfaceEl.getBoundingClientRect();
          const anchorRect = anchorEl.getSurfacePositionClientRect ? anchorEl.getSurfacePositionClientRect() : anchorEl.getBoundingClientRect();
          const [surfaceBlock, surfaceInline] = surfaceCorner.split("-");
          const [anchorBlock, anchorInline] = anchorCorner.split("-");
          const isLTR = getComputedStyle(surfaceEl).direction === "ltr";
          let { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty } = this.calculateBlock({
            surfaceRect,
            anchorRect,
            anchorBlock,
            surfaceBlock,
            yOffset,
            positioning,
            windowInnerHeight,
            blockScrollbarHeight
          });
          if (blockOutOfBoundsCorrection && !disableBlockFlip) {
            const flippedSurfaceBlock = surfaceBlock === "start" ? "end" : "start";
            const flippedAnchorBlock = anchorBlock === "start" ? "end" : "start";
            const flippedBlock = this.calculateBlock({
              surfaceRect,
              anchorRect,
              anchorBlock: flippedAnchorBlock,
              surfaceBlock: flippedSurfaceBlock,
              yOffset,
              positioning,
              windowInnerHeight,
              blockScrollbarHeight
            });
            if (blockOutOfBoundsCorrection > flippedBlock.blockOutOfBoundsCorrection) {
              blockInset = flippedBlock.blockInset;
              blockOutOfBoundsCorrection = flippedBlock.blockOutOfBoundsCorrection;
              surfaceBlockProperty = flippedBlock.surfaceBlockProperty;
            }
          }
          let { inlineInset, inlineOutOfBoundsCorrection, surfaceInlineProperty } = this.calculateInline({
            surfaceRect,
            anchorRect,
            anchorInline,
            surfaceInline,
            xOffset,
            positioning,
            isLTR,
            windowInnerWidth,
            inlineScrollbarWidth
          });
          if (inlineOutOfBoundsCorrection && !disableInlineFlip) {
            const flippedSurfaceInline = surfaceInline === "start" ? "end" : "start";
            const flippedAnchorInline = anchorInline === "start" ? "end" : "start";
            const flippedInline = this.calculateInline({
              surfaceRect,
              anchorRect,
              anchorInline: flippedAnchorInline,
              surfaceInline: flippedSurfaceInline,
              xOffset,
              positioning,
              isLTR,
              windowInnerWidth,
              inlineScrollbarWidth
            });
            if (Math.abs(inlineOutOfBoundsCorrection) > Math.abs(flippedInline.inlineOutOfBoundsCorrection)) {
              inlineInset = flippedInline.inlineInset;
              inlineOutOfBoundsCorrection = flippedInline.inlineOutOfBoundsCorrection;
              surfaceInlineProperty = flippedInline.surfaceInlineProperty;
            }
          }
          if (repositionStrategy === "move") {
            blockInset = blockInset - blockOutOfBoundsCorrection;
            inlineInset = inlineInset - inlineOutOfBoundsCorrection;
          }
          this.surfaceStylesInternal = {
            "display": "block",
            "opacity": "1",
            [surfaceBlockProperty]: `${blockInset}px`,
            [surfaceInlineProperty]: `${inlineInset}px`
          };
          if (repositionStrategy === "resize") {
            if (blockOutOfBoundsCorrection) {
              this.surfaceStylesInternal["height"] = `${surfaceRect.height - blockOutOfBoundsCorrection}px`;
            }
            if (inlineOutOfBoundsCorrection) {
              this.surfaceStylesInternal["width"] = `${surfaceRect.width - inlineOutOfBoundsCorrection}px`;
            }
          }
          this.host.requestUpdate();
        }
        /**
         * Calculates the css property, the inset, and the out of bounds correction
         * for the surface in the block direction.
         */
        calculateBlock(config) {
          const { surfaceRect, anchorRect, anchorBlock, surfaceBlock, yOffset, positioning, windowInnerHeight, blockScrollbarHeight } = config;
          const relativeToWindow = positioning === "fixed" || positioning === "document" ? 1 : 0;
          const relativeToDocument = positioning === "document" ? 1 : 0;
          const isSurfaceBlockStart = surfaceBlock === "start" ? 1 : 0;
          const isSurfaceBlockEnd = surfaceBlock === "end" ? 1 : 0;
          const isOneBlockEnd = anchorBlock !== surfaceBlock ? 1 : 0;
          const blockAnchorOffset = isOneBlockEnd * anchorRect.height + yOffset;
          const blockTopLayerOffset = isSurfaceBlockStart * anchorRect.top + isSurfaceBlockEnd * (windowInnerHeight - anchorRect.bottom - blockScrollbarHeight);
          const blockDocumentOffset = isSurfaceBlockStart * window.scrollY - isSurfaceBlockEnd * window.scrollY;
          const blockOutOfBoundsCorrection = Math.abs(Math.min(0, windowInnerHeight - blockTopLayerOffset - blockAnchorOffset - surfaceRect.height));
          const blockInset = relativeToWindow * blockTopLayerOffset + relativeToDocument * blockDocumentOffset + blockAnchorOffset;
          const surfaceBlockProperty = surfaceBlock === "start" ? "inset-block-start" : "inset-block-end";
          return { blockInset, blockOutOfBoundsCorrection, surfaceBlockProperty };
        }
        /**
         * Calculates the css property, the inset, and the out of bounds correction
         * for the surface in the inline direction.
         */
        calculateInline(config) {
          const { isLTR: isLTRBool, surfaceInline, anchorInline, anchorRect, surfaceRect, xOffset, positioning, windowInnerWidth, inlineScrollbarWidth } = config;
          const relativeToWindow = positioning === "fixed" || positioning === "document" ? 1 : 0;
          const relativeToDocument = positioning === "document" ? 1 : 0;
          const isLTR = isLTRBool ? 1 : 0;
          const isRTL = isLTRBool ? 0 : 1;
          const isSurfaceInlineStart = surfaceInline === "start" ? 1 : 0;
          const isSurfaceInlineEnd = surfaceInline === "end" ? 1 : 0;
          const isOneInlineEnd = anchorInline !== surfaceInline ? 1 : 0;
          const inlineAnchorOffset = isOneInlineEnd * anchorRect.width + xOffset;
          const inlineTopLayerOffsetLTR = isSurfaceInlineStart * anchorRect.left + isSurfaceInlineEnd * (windowInnerWidth - anchorRect.right - inlineScrollbarWidth);
          const inlineTopLayerOffsetRTL = isSurfaceInlineStart * (windowInnerWidth - anchorRect.right - inlineScrollbarWidth) + isSurfaceInlineEnd * anchorRect.left;
          const inlineTopLayerOffset = isLTR * inlineTopLayerOffsetLTR + isRTL * inlineTopLayerOffsetRTL;
          const inlineDocumentOffsetLTR = isSurfaceInlineStart * window.scrollX - isSurfaceInlineEnd * window.scrollX;
          const inlineDocumentOffsetRTL = isSurfaceInlineEnd * window.scrollX - isSurfaceInlineStart * window.scrollX;
          const inlineDocumentOffset = isLTR * inlineDocumentOffsetLTR + isRTL * inlineDocumentOffsetRTL;
          const inlineOutOfBoundsCorrection = Math.abs(Math.min(0, windowInnerWidth - inlineTopLayerOffset - inlineAnchorOffset - surfaceRect.width));
          const inlineInset = relativeToWindow * inlineTopLayerOffset + inlineAnchorOffset + relativeToDocument * inlineDocumentOffset;
          let surfaceInlineProperty = surfaceInline === "start" ? "inset-inline-start" : "inset-inline-end";
          if (positioning === "document" || positioning === "fixed") {
            if (surfaceInline === "start" && isLTRBool || surfaceInline === "end" && !isLTRBool) {
              surfaceInlineProperty = "left";
            } else {
              surfaceInlineProperty = "right";
            }
          }
          return {
            inlineInset,
            inlineOutOfBoundsCorrection,
            surfaceInlineProperty
          };
        }
        hostUpdate() {
          this.onUpdate();
        }
        hostUpdated() {
          this.onUpdate();
        }
        /**
         * Checks whether the properties passed into the controller have changed since
         * the last positioning. If so, it will reposition if the surface is open or
         * close it if the surface should close.
         */
        async onUpdate() {
          const props = this.getProperties();
          let hasChanged = false;
          for (const [key, value] of Object.entries(props)) {
            hasChanged = hasChanged || value !== this.lastValues[key];
            if (hasChanged)
              break;
          }
          const openChanged = this.lastValues.isOpen !== props.isOpen;
          const hasAnchor = !!props.anchorEl;
          const hasSurface = !!props.surfaceEl;
          if (hasChanged && hasAnchor && hasSurface) {
            this.lastValues.isOpen = props.isOpen;
            if (props.isOpen) {
              this.lastValues = props;
              await this.position();
              props.onOpen();
            } else if (openChanged) {
              await props.beforeClose();
              this.close();
              props.onClose();
            }
          }
        }
        /**
         * Hides the surface.
         */
        close() {
          this.surfaceStylesInternal = {
            "display": "none"
          };
          this.host.requestUpdate();
          const surfaceEl = this.getProperties().surfaceEl;
          if (surfaceEl?.popover && surfaceEl?.isConnected) {
            surfaceEl.hidePopover();
          }
        }
      };
    }
  });

  // node_modules/@material/web/menu/internal/controllers/typeaheadController.js
  var TYPEAHEAD_RECORD, TypeaheadController;
  var init_typeaheadController = __esm({
    "node_modules/@material/web/menu/internal/controllers/typeaheadController.js"() {
      TYPEAHEAD_RECORD = {
        INDEX: 0,
        ITEM: 1,
        TEXT: 2
      };
      TypeaheadController = class {
        /**
         * @param getProperties A function that returns the options of the typeahead
         * controller:
         *
         * {
         *   getItems: A function that returns an array of menu items to be searched.
         *   typeaheadBufferTime: The maximum time between each keystroke to keep the
         *       current type buffer alive.
         * }
         */
        constructor(getProperties) {
          this.getProperties = getProperties;
          this.typeaheadRecords = [];
          this.typaheadBuffer = "";
          this.cancelTypeaheadTimeout = 0;
          this.isTypingAhead = false;
          this.lastActiveRecord = null;
          this.onKeydown = (event) => {
            if (this.isTypingAhead) {
              this.typeahead(event);
            } else {
              this.beginTypeahead(event);
            }
          };
          this.endTypeahead = () => {
            this.isTypingAhead = false;
            this.typaheadBuffer = "";
            this.typeaheadRecords = [];
          };
        }
        get items() {
          return this.getProperties().getItems();
        }
        get active() {
          return this.getProperties().active;
        }
        /**
         * Sets up typingahead
         */
        beginTypeahead(event) {
          if (!this.active) {
            return;
          }
          if (event.code === "Space" || event.code === "Enter" || event.code.startsWith("Arrow") || event.code === "Escape") {
            return;
          }
          this.isTypingAhead = true;
          this.typeaheadRecords = this.items.map((el, index) => [
            index,
            el,
            el.typeaheadText.trim().toLowerCase()
          ]);
          this.lastActiveRecord = this.typeaheadRecords.find((record) => record[TYPEAHEAD_RECORD.ITEM].tabIndex === 0) ?? null;
          if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
          }
          this.typeahead(event);
        }
        /**
         * Performs the typeahead. Based on the normalized items and the current text
         * buffer, finds the _next_ item with matching text and activates it.
         *
         * @example
         *
         * items: Apple, Banana, Olive, Orange, Cucumber
         * buffer: ''
         * user types: o
         *
         * activates Olive
         *
         * @example
         *
         * items: Apple, Banana, Olive (active), Orange, Cucumber
         * buffer: 'o'
         * user types: l
         *
         * activates Olive
         *
         * @example
         *
         * items: Apple, Banana, Olive (active), Orange, Cucumber
         * buffer: ''
         * user types: o
         *
         * activates Orange
         *
         * @example
         *
         * items: Apple, Banana, Olive, Orange (active), Cucumber
         * buffer: ''
         * user types: o
         *
         * activates Olive
         */
        typeahead(event) {
          if (event.defaultPrevented)
            return;
          clearTimeout(this.cancelTypeaheadTimeout);
          if (event.code === "Enter" || event.code.startsWith("Arrow") || event.code === "Escape") {
            this.endTypeahead();
            if (this.lastActiveRecord) {
              this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
            }
            return;
          }
          if (event.code === "Space") {
            event.preventDefault();
          }
          this.cancelTypeaheadTimeout = setTimeout(this.endTypeahead, this.getProperties().typeaheadBufferTime);
          this.typaheadBuffer += event.key.toLowerCase();
          const lastActiveIndex = this.lastActiveRecord ? this.lastActiveRecord[TYPEAHEAD_RECORD.INDEX] : -1;
          const numRecords = this.typeaheadRecords.length;
          const rebaseIndexOnActive = (record) => {
            return (record[TYPEAHEAD_RECORD.INDEX] + numRecords - lastActiveIndex) % numRecords;
          };
          const matchingRecords = this.typeaheadRecords.filter((record) => !record[TYPEAHEAD_RECORD.ITEM].disabled && record[TYPEAHEAD_RECORD.TEXT].startsWith(this.typaheadBuffer)).sort((a4, b3) => rebaseIndexOnActive(a4) - rebaseIndexOnActive(b3));
          if (matchingRecords.length === 0) {
            clearTimeout(this.cancelTypeaheadTimeout);
            if (this.lastActiveRecord) {
              this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
            }
            this.endTypeahead();
            return;
          }
          const isNewQuery = this.typaheadBuffer.length === 1;
          let nextRecord;
          if (this.lastActiveRecord === matchingRecords[0] && isNewQuery) {
            nextRecord = matchingRecords[1] ?? matchingRecords[0];
          } else {
            nextRecord = matchingRecords[0];
          }
          if (this.lastActiveRecord) {
            this.lastActiveRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = -1;
          }
          this.lastActiveRecord = nextRecord;
          nextRecord[TYPEAHEAD_RECORD.ITEM].tabIndex = 0;
          nextRecord[TYPEAHEAD_RECORD.ITEM].focus();
          return;
        }
      };
    }
  });

  // node_modules/@material/web/menu/internal/menu.js
  function getFocusedElement(activeDoc = document) {
    let activeEl = activeDoc.activeElement;
    while (activeEl && activeEl?.shadowRoot?.activeElement) {
      activeEl = activeEl.shadowRoot.activeElement;
    }
    return activeEl;
  }
  var DEFAULT_TYPEAHEAD_BUFFER_TIME, submenuNavKeys, menuNavKeys, Menu;
  var init_menu = __esm({
    "node_modules/@material/web/menu/internal/menu.js"() {
      init_tslib_es6();
      init_elevation2();
      init_md_focus_ring();
      init_lit();
      init_decorators();
      init_class_map2();
      init_style_map2();
      init_animation();
      init_list_controller();
      init_list_navigation_helpers();
      init_shared2();
      init_surfacePositionController();
      init_typeaheadController();
      init_surfacePositionController();
      DEFAULT_TYPEAHEAD_BUFFER_TIME = 200;
      submenuNavKeys = /* @__PURE__ */ new Set([
        NavigableKeys.ArrowDown,
        NavigableKeys.ArrowUp,
        NavigableKeys.Home,
        NavigableKeys.End
      ]);
      menuNavKeys = /* @__PURE__ */ new Set([
        NavigableKeys.ArrowLeft,
        NavigableKeys.ArrowRight,
        ...submenuNavKeys
      ]);
      Menu = class extends i4 {
        /**
         * Whether the menu is animating upwards or downwards when opening. This is
         * helpful for calculating some animation calculations.
         */
        get openDirection() {
          const menuCornerBlock = this.menuCorner.split("-")[0];
          return menuCornerBlock === "start" ? "DOWN" : "UP";
        }
        /**
         * The element which the menu should align to. If `anchor` is set to a
         * non-empty idref string, then `anchorEl` will resolve to the element with
         * the given id in the same root node. Otherwise, `null`.
         */
        get anchorElement() {
          if (this.anchor) {
            return this.getRootNode().querySelector(`#${this.anchor}`);
          }
          return this.currentAnchorElement;
        }
        set anchorElement(element) {
          this.currentAnchorElement = element;
          this.requestUpdate("anchorElement");
        }
        constructor() {
          super();
          this.anchor = "";
          this.positioning = "absolute";
          this.quick = false;
          this.hasOverflow = false;
          this.open = false;
          this.xOffset = 0;
          this.yOffset = 0;
          this.noHorizontalFlip = false;
          this.noVerticalFlip = false;
          this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME;
          this.anchorCorner = Corner.END_START;
          this.menuCorner = Corner.START_START;
          this.stayOpenOnOutsideClick = false;
          this.stayOpenOnFocusout = false;
          this.skipRestoreFocus = false;
          this.defaultFocus = FocusState.FIRST_ITEM;
          this.noNavigationWrap = false;
          this.typeaheadActive = true;
          this.isSubmenu = false;
          this.pointerPath = [];
          this.isRepositioning = false;
          this.openCloseAnimationSignal = createAnimationSignal();
          this.listController = new ListController({
            isItem: (maybeItem) => {
              return maybeItem.hasAttribute("md-menu-item");
            },
            getPossibleItems: () => this.slotItems,
            isRtl: () => getComputedStyle(this).direction === "rtl",
            deactivateItem: (item) => {
              item.selected = false;
              item.tabIndex = -1;
            },
            activateItem: (item) => {
              item.selected = true;
              item.tabIndex = 0;
            },
            isNavigableKey: (key) => {
              if (!this.isSubmenu) {
                return menuNavKeys.has(key);
              }
              const isRtl2 = getComputedStyle(this).direction === "rtl";
              const arrowOpen = isRtl2 ? NavigableKeys.ArrowLeft : NavigableKeys.ArrowRight;
              if (key === arrowOpen) {
                return true;
              }
              return submenuNavKeys.has(key);
            },
            wrapNavigation: () => !this.noNavigationWrap
          });
          this.lastFocusedElement = null;
          this.typeaheadController = new TypeaheadController(() => {
            return {
              getItems: () => this.items,
              typeaheadBufferTime: this.typeaheadDelay,
              active: this.typeaheadActive
            };
          });
          this.currentAnchorElement = null;
          this.internals = // Cast needed for closure
          this.attachInternals();
          this.menuPositionController = new SurfacePositionController(this, () => {
            return {
              anchorCorner: this.anchorCorner,
              surfaceCorner: this.menuCorner,
              surfaceEl: this.surfaceEl,
              anchorEl: this.anchorElement,
              positioning: this.positioning === "popover" ? "document" : this.positioning,
              isOpen: this.open,
              xOffset: this.xOffset,
              yOffset: this.yOffset,
              disableBlockFlip: this.noVerticalFlip,
              disableInlineFlip: this.noHorizontalFlip,
              onOpen: this.onOpened,
              beforeClose: this.beforeClose,
              onClose: this.onClosed,
              // We can't resize components that have overflow like menus with
              // submenus because the overflow-y will show menu items / content
              // outside the bounds of the menu. Popover API fixes this because each
              // submenu is hoisted to the top-layer and are not considered overflow
              // content.
              repositionStrategy: this.hasOverflow && this.positioning !== "popover" ? "move" : "resize"
            };
          });
          this.onWindowResize = () => {
            if (this.isRepositioning || this.positioning !== "document" && this.positioning !== "fixed" && this.positioning !== "popover") {
              return;
            }
            this.isRepositioning = true;
            this.reposition();
            this.isRepositioning = false;
          };
          this.handleFocusout = async (event) => {
            const anchorEl = this.anchorElement;
            if (this.stayOpenOnFocusout || !this.open || this.pointerPath.includes(anchorEl)) {
              return;
            }
            if (event.relatedTarget) {
              if (isElementInSubtree(event.relatedTarget, this) || this.pointerPath.length !== 0 && isElementInSubtree(event.relatedTarget, anchorEl)) {
                return;
              }
            } else if (this.pointerPath.includes(this)) {
              return;
            }
            const oldRestoreFocus = this.skipRestoreFocus;
            this.skipRestoreFocus = true;
            this.close();
            await this.updateComplete;
            this.skipRestoreFocus = oldRestoreFocus;
          };
          this.onOpened = async () => {
            this.lastFocusedElement = getFocusedElement();
            const items = this.items;
            const activeItemRecord = getActiveItem(items);
            if (activeItemRecord && this.defaultFocus !== FocusState.NONE) {
              activeItemRecord.item.tabIndex = -1;
            }
            let animationAborted = !this.quick;
            if (this.quick) {
              this.dispatchEvent(new Event("opening"));
            } else {
              animationAborted = !!await this.animateOpen();
            }
            switch (this.defaultFocus) {
              case FocusState.FIRST_ITEM:
                const first = getFirstActivatableItem(items);
                if (first) {
                  first.tabIndex = 0;
                  first.focus();
                  await first.updateComplete;
                }
                break;
              case FocusState.LAST_ITEM:
                const last = getLastActivatableItem(items);
                if (last) {
                  last.tabIndex = 0;
                  last.focus();
                  await last.updateComplete;
                }
                break;
              case FocusState.LIST_ROOT:
                this.focus();
                break;
              default:
              case FocusState.NONE:
                break;
            }
            if (!animationAborted) {
              this.dispatchEvent(new Event("opened"));
            }
          };
          this.beforeClose = async () => {
            this.open = false;
            if (!this.skipRestoreFocus) {
              this.lastFocusedElement?.focus?.();
            }
            if (!this.quick) {
              await this.animateClose();
            }
          };
          this.onClosed = () => {
            if (this.quick) {
              this.dispatchEvent(new Event("closing"));
              this.dispatchEvent(new Event("closed"));
            }
          };
          this.onWindowPointerdown = (event) => {
            this.pointerPath = event.composedPath();
          };
          this.onDocumentClick = (event) => {
            if (!this.open) {
              return;
            }
            const path = event.composedPath();
            if (!this.stayOpenOnOutsideClick && !path.includes(this) && !path.includes(this.anchorElement)) {
              this.open = false;
            }
          };
          if (!o7) {
            this.internals.role = "menu";
            this.addEventListener("keydown", this.handleKeydown);
            this.addEventListener("keydown", this.captureKeydown, { capture: true });
            this.addEventListener("focusout", this.handleFocusout);
          }
        }
        /**
         * The menu items associated with this menu. The items must be `MenuItem`s and
         * have both the `md-menu-item` and `md-list-item` attributes.
         */
        get items() {
          return this.listController.items;
        }
        willUpdate(changed) {
          if (!changed.has("open")) {
            return;
          }
          if (this.open) {
            this.removeAttribute("aria-hidden");
            return;
          }
          this.setAttribute("aria-hidden", "true");
        }
        update(changed) {
          if (changed.has("open")) {
            if (this.open) {
              this.setUpGlobalEventListeners();
            } else {
              this.cleanUpGlobalEventListeners();
            }
          }
          if (changed.has("positioning") && this.positioning === "popover" && // type required for Google JS conformance
          !this.showPopover) {
            this.positioning = "fixed";
          }
          super.update(changed);
        }
        connectedCallback() {
          super.connectedCallback();
          if (this.open) {
            this.setUpGlobalEventListeners();
          }
        }
        disconnectedCallback() {
          super.disconnectedCallback();
          this.cleanUpGlobalEventListeners();
        }
        getBoundingClientRect() {
          if (!this.surfaceEl) {
            return super.getBoundingClientRect();
          }
          return this.surfaceEl.getBoundingClientRect();
        }
        getClientRects() {
          if (!this.surfaceEl) {
            return super.getClientRects();
          }
          return this.surfaceEl.getClientRects();
        }
        render() {
          return this.renderSurface();
        }
        /**
         * Renders the positionable surface element and its contents.
         */
        renderSurface() {
          return b2`
      <div
        class="menu ${e8(this.getSurfaceClasses())}"
        style=${o9(this.menuPositionController.surfaceStyles)}
        popover=${this.positioning === "popover" ? "manual" : A}>
        ${this.renderElevation()}
        <div class="items">
          <div class="item-padding"> ${this.renderMenuItems()} </div>
        </div>
      </div>
    `;
        }
        /**
         * Renders the menu items' slot
         */
        renderMenuItems() {
          return b2`<slot
      @close-menu=${this.onCloseMenu}
      @deactivate-items=${this.onDeactivateItems}
      @request-activation=${this.onRequestActivation}
      @deactivate-typeahead=${this.handleDeactivateTypeahead}
      @activate-typeahead=${this.handleActivateTypeahead}
      @stay-open-on-focusout=${this.handleStayOpenOnFocusout}
      @close-on-focusout=${this.handleCloseOnFocusout}
      @slotchange=${this.listController.onSlotchange}></slot>`;
        }
        /**
         * Renders the elevation component.
         */
        renderElevation() {
          return b2`<md-elevation part="elevation"></md-elevation>`;
        }
        getSurfaceClasses() {
          return {
            open: this.open,
            fixed: this.positioning === "fixed",
            "has-overflow": this.hasOverflow
          };
        }
        captureKeydown(event) {
          if (event.target === this && !event.defaultPrevented && isClosableKey(event.code)) {
            event.preventDefault();
            this.close();
          }
          this.typeaheadController.onKeydown(event);
        }
        /**
         * Performs the opening animation:
         *
         * https://direct.googleplex.com/#/spec/295000003+271060003
         *
         * @return A promise that resolve to `true` if the animation was aborted,
         *     `false` if it was not aborted.
         */
        async animateOpen() {
          const surfaceEl = this.surfaceEl;
          const slotEl = this.slotEl;
          if (!surfaceEl || !slotEl)
            return true;
          const openDirection = this.openDirection;
          this.dispatchEvent(new Event("opening"));
          surfaceEl.classList.toggle("animating", true);
          const signal = this.openCloseAnimationSignal.start();
          const height = surfaceEl.offsetHeight;
          const openingUpwards = openDirection === "UP";
          const children = this.items;
          const FULL_DURATION = 500;
          const SURFACE_OPACITY_DURATION = 50;
          const ITEM_OPACITY_DURATION = 250;
          const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_DURATION) / children.length;
          const surfaceHeightAnimation = surfaceEl.animate([{ height: "0px" }, { height: `${height}px` }], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED
          });
          const upPositionCorrectionAnimation = slotEl.animate([
            { transform: openingUpwards ? `translateY(-${height}px)` : "" },
            { transform: "" }
          ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED });
          const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 0 }, { opacity: 1 }], SURFACE_OPACITY_DURATION);
          const childrenAnimations = [];
          for (let i8 = 0; i8 < children.length; i8++) {
            const directionalIndex = openingUpwards ? children.length - 1 - i8 : i8;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 0 }, { opacity: 1 }], {
              duration: ITEM_OPACITY_DURATION,
              delay: DELAY_BETWEEN_ITEMS * i8
            });
            child.classList.toggle("md-menu-hidden", true);
            animation.addEventListener("finish", () => {
              child.classList.toggle("md-menu-hidden", false);
            });
            childrenAnimations.push([child, animation]);
          }
          let resolveAnimation = (value) => {
          };
          const animationFinished = new Promise((resolve) => {
            resolveAnimation = resolve;
          });
          signal.addEventListener("abort", () => {
            surfaceHeightAnimation.cancel();
            upPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
              child.classList.toggle("md-menu-hidden", false);
              animation.cancel();
            });
            resolveAnimation(true);
          });
          surfaceHeightAnimation.addEventListener("finish", () => {
            surfaceEl.classList.toggle("animating", false);
            this.openCloseAnimationSignal.finish();
            resolveAnimation(false);
          });
          return await animationFinished;
        }
        /**
         * Performs the closing animation:
         *
         * https://direct.googleplex.com/#/spec/295000003+271060003
         */
        animateClose() {
          let resolve;
          const animationEnded = new Promise((res) => {
            resolve = res;
          });
          const surfaceEl = this.surfaceEl;
          const slotEl = this.slotEl;
          if (!surfaceEl || !slotEl) {
            resolve(false);
            return animationEnded;
          }
          const openDirection = this.openDirection;
          const closingDownwards = openDirection === "UP";
          this.dispatchEvent(new Event("closing"));
          surfaceEl.classList.toggle("animating", true);
          const signal = this.openCloseAnimationSignal.start();
          const height = surfaceEl.offsetHeight;
          const children = this.items;
          const FULL_DURATION = 150;
          const SURFACE_OPACITY_DURATION = 50;
          const SURFACE_OPACITY_DELAY = FULL_DURATION - SURFACE_OPACITY_DURATION;
          const ITEM_OPACITY_DURATION = 50;
          const ITEM_OPACITY_INITIAL_DELAY = 50;
          const END_HEIGHT_PERCENTAGE = 0.35;
          const DELAY_BETWEEN_ITEMS = (FULL_DURATION - ITEM_OPACITY_INITIAL_DELAY - ITEM_OPACITY_DURATION) / children.length;
          const surfaceHeightAnimation = surfaceEl.animate([
            { height: `${height}px` },
            { height: `${height * END_HEIGHT_PERCENTAGE}px` }
          ], {
            duration: FULL_DURATION,
            easing: EASING.EMPHASIZED_ACCELERATE
          });
          const downPositionCorrectionAnimation = slotEl.animate([
            { transform: "" },
            {
              transform: closingDownwards ? `translateY(-${height * (1 - END_HEIGHT_PERCENTAGE)}px)` : ""
            }
          ], { duration: FULL_DURATION, easing: EASING.EMPHASIZED_ACCELERATE });
          const surfaceOpacityAnimation = surfaceEl.animate([{ opacity: 1 }, { opacity: 0 }], { duration: SURFACE_OPACITY_DURATION, delay: SURFACE_OPACITY_DELAY });
          const childrenAnimations = [];
          for (let i8 = 0; i8 < children.length; i8++) {
            const directionalIndex = closingDownwards ? i8 : children.length - 1 - i8;
            const child = children[directionalIndex];
            const animation = child.animate([{ opacity: 1 }, { opacity: 0 }], {
              duration: ITEM_OPACITY_DURATION,
              delay: ITEM_OPACITY_INITIAL_DELAY + DELAY_BETWEEN_ITEMS * i8
            });
            animation.addEventListener("finish", () => {
              child.classList.toggle("md-menu-hidden", true);
            });
            childrenAnimations.push([child, animation]);
          }
          signal.addEventListener("abort", () => {
            surfaceHeightAnimation.cancel();
            downPositionCorrectionAnimation.cancel();
            surfaceOpacityAnimation.cancel();
            childrenAnimations.forEach(([child, animation]) => {
              animation.cancel();
              child.classList.toggle("md-menu-hidden", false);
            });
            resolve(false);
          });
          surfaceHeightAnimation.addEventListener("finish", () => {
            surfaceEl.classList.toggle("animating", false);
            childrenAnimations.forEach(([child]) => {
              child.classList.toggle("md-menu-hidden", false);
            });
            this.openCloseAnimationSignal.finish();
            this.dispatchEvent(new Event("closed"));
            resolve(true);
          });
          return animationEnded;
        }
        handleKeydown(event) {
          this.pointerPath = [];
          this.listController.handleKeydown(event);
        }
        setUpGlobalEventListeners() {
          document.addEventListener("click", this.onDocumentClick, { capture: true });
          window.addEventListener("pointerdown", this.onWindowPointerdown);
          document.addEventListener("resize", this.onWindowResize, { passive: true });
          window.addEventListener("resize", this.onWindowResize, { passive: true });
        }
        cleanUpGlobalEventListeners() {
          document.removeEventListener("click", this.onDocumentClick, {
            capture: true
          });
          window.removeEventListener("pointerdown", this.onWindowPointerdown);
          document.removeEventListener("resize", this.onWindowResize);
          window.removeEventListener("resize", this.onWindowResize);
        }
        onCloseMenu() {
          this.close();
        }
        onDeactivateItems(event) {
          event.stopPropagation();
          this.listController.onDeactivateItems();
        }
        onRequestActivation(event) {
          event.stopPropagation();
          this.listController.onRequestActivation(event);
        }
        handleDeactivateTypeahead(event) {
          event.stopPropagation();
          this.typeaheadActive = false;
        }
        handleActivateTypeahead(event) {
          event.stopPropagation();
          this.typeaheadActive = true;
        }
        handleStayOpenOnFocusout(event) {
          event.stopPropagation();
          this.stayOpenOnFocusout = true;
        }
        handleCloseOnFocusout(event) {
          event.stopPropagation();
          this.stayOpenOnFocusout = false;
        }
        close() {
          this.open = false;
          const maybeSubmenu = this.slotItems;
          maybeSubmenu.forEach((item) => {
            item.close?.();
          });
        }
        show() {
          this.open = true;
        }
        /**
         * Activates the next item in the menu. If at the end of the menu, the first
         * item will be activated.
         *
         * @return The activated menu item or `null` if there are no items.
         */
        activateNextItem() {
          return this.listController.activateNextItem() ?? null;
        }
        /**
         * Activates the previous item in the menu. If at the start of the menu, the
         * last item will be activated.
         *
         * @return The activated menu item or `null` if there are no items.
         */
        activatePreviousItem() {
          return this.listController.activatePreviousItem() ?? null;
        }
        /**
         * Repositions the menu if it is open.
         *
         * Useful for the case where document or window-positioned menus have their
         * anchors moved while open.
         */
        reposition() {
          if (this.open) {
            this.menuPositionController.position();
          }
        }
      };
      __decorate([
        e4(".menu")
      ], Menu.prototype, "surfaceEl", void 0);
      __decorate([
        e4("slot")
      ], Menu.prototype, "slotEl", void 0);
      __decorate([
        n3()
      ], Menu.prototype, "anchor", void 0);
      __decorate([
        n3()
      ], Menu.prototype, "positioning", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Menu.prototype, "quick", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "has-overflow" })
      ], Menu.prototype, "hasOverflow", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], Menu.prototype, "open", void 0);
      __decorate([
        n3({ type: Number, attribute: "x-offset" })
      ], Menu.prototype, "xOffset", void 0);
      __decorate([
        n3({ type: Number, attribute: "y-offset" })
      ], Menu.prototype, "yOffset", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "no-horizontal-flip" })
      ], Menu.prototype, "noHorizontalFlip", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "no-vertical-flip" })
      ], Menu.prototype, "noVerticalFlip", void 0);
      __decorate([
        n3({ type: Number, attribute: "typeahead-delay" })
      ], Menu.prototype, "typeaheadDelay", void 0);
      __decorate([
        n3({ attribute: "anchor-corner" })
      ], Menu.prototype, "anchorCorner", void 0);
      __decorate([
        n3({ attribute: "menu-corner" })
      ], Menu.prototype, "menuCorner", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "stay-open-on-outside-click" })
      ], Menu.prototype, "stayOpenOnOutsideClick", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "stay-open-on-focusout" })
      ], Menu.prototype, "stayOpenOnFocusout", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "skip-restore-focus" })
      ], Menu.prototype, "skipRestoreFocus", void 0);
      __decorate([
        n3({ attribute: "default-focus" })
      ], Menu.prototype, "defaultFocus", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "no-navigation-wrap" })
      ], Menu.prototype, "noNavigationWrap", void 0);
      __decorate([
        o4({ flatten: true })
      ], Menu.prototype, "slotItems", void 0);
      __decorate([
        r4()
      ], Menu.prototype, "typeaheadActive", void 0);
    }
  });

  // node_modules/@material/web/menu/internal/menu-styles.cssresult.js
  var styles39, menu_styles_cssresult_default;
  var init_menu_styles_cssresult = __esm({
    "node_modules/@material/web/menu/internal/menu-styles.cssresult.js"() {
      init_lit();
      styles39 = i`:host{--md-elevation-level: var(--md-menu-container-elevation, 2);--md-elevation-shadow-color: var(--md-menu-container-shadow-color, var(--md-sys-color-shadow, #000));min-width:112px;color:unset;display:contents}md-focus-ring{--md-focus-ring-shape: var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px))}.menu{border-radius:var(--md-menu-container-shape, var(--md-sys-shape-corner-extra-small, 4px));display:none;inset:auto;border:none;padding:0px;overflow:visible;background-color:rgba(0,0,0,0);color:inherit;opacity:0;z-index:20;position:absolute;user-select:none;max-height:inherit;height:inherit;min-width:inherit;max-width:inherit;scrollbar-width:inherit}.menu::backdrop{display:none}.fixed{position:fixed}.items{display:block;list-style-type:none;margin:0;outline:none;box-sizing:border-box;background-color:var(--md-menu-container-color, var(--md-sys-color-surface-container, #f3edf7));height:inherit;max-height:inherit;overflow:auto;min-width:inherit;max-width:inherit;border-radius:inherit;scrollbar-width:inherit}.item-padding{padding-block:var(--md-menu-top-space, 8px) var(--md-menu-bottom-space, 8px)}.has-overflow:not([popover]) .items{overflow:visible}.has-overflow.animating .items,.animating .items{overflow:hidden}.has-overflow.animating .items{pointer-events:none}.animating ::slotted(.md-menu-hidden){opacity:0}slot{display:block;height:inherit;max-height:inherit}::slotted(:is(md-divider,[role=separator])){margin:8px 0}@media(forced-colors: active){.menu{border-style:solid;border-color:CanvasText;border-width:1px}}
`;
      menu_styles_cssresult_default = styles39.styleSheet;
    }
  });

  // node_modules/@material/web/menu/menu.js
  var MdMenu;
  var init_menu2 = __esm({
    "node_modules/@material/web/menu/menu.js"() {
      init_tslib_es6();
      init_decorators();
      init_menu();
      init_menu_styles_cssresult();
      init_shared2();
      init_menu();
      MdMenu = class MdMenu2 extends Menu {
      };
      MdMenu.styles = [styles39];
      MdMenu = __decorate([
        t("md-menu")
      ], MdMenu);
    }
  });

  // node_modules/@material/web/menu/internal/controllers/menuItemController.js
  var MenuItemController;
  var init_menuItemController = __esm({
    "node_modules/@material/web/menu/internal/controllers/menuItemController.js"() {
      init_shared2();
      MenuItemController = class {
        /**
         * @param host The MenuItem in which to attach this controller to.
         * @param config The object that configures this controller's behavior.
         */
        constructor(host, config) {
          this.host = host;
          this.internalTypeaheadText = null;
          this.onClick = () => {
            if (this.host.keepOpen)
              return;
            this.host.dispatchEvent(createDefaultCloseMenuEvent(this.host, {
              kind: CloseReason.CLICK_SELECTION
            }));
          };
          this.onKeydown = (event) => {
            if (this.host.href && event.code === "Enter") {
              const interactiveElement = this.getInteractiveElement();
              if (interactiveElement instanceof HTMLAnchorElement) {
                interactiveElement.click();
              }
            }
            if (event.defaultPrevented)
              return;
            const keyCode = event.code;
            if (this.host.keepOpen && keyCode !== "Escape")
              return;
            if (isClosableKey(keyCode)) {
              event.preventDefault();
              this.host.dispatchEvent(createDefaultCloseMenuEvent(this.host, {
                kind: CloseReason.KEYDOWN,
                key: keyCode
              }));
            }
          };
          this.getHeadlineElements = config.getHeadlineElements;
          this.getSupportingTextElements = config.getSupportingTextElements;
          this.getDefaultElements = config.getDefaultElements;
          this.getInteractiveElement = config.getInteractiveElement;
          this.host.addController(this);
        }
        /**
         * The text that is selectable via typeahead. If not set, defaults to the
         * innerText of the item slotted into the `"headline"` slot, and if there are
         * no slotted elements into headline, then it checks the _default_ slot, and
         * then the `"supporting-text"` slot if nothing is in _default_.
         */
        get typeaheadText() {
          if (this.internalTypeaheadText !== null) {
            return this.internalTypeaheadText;
          }
          const headlineElements = this.getHeadlineElements();
          const textParts = [];
          headlineElements.forEach((headlineElement) => {
            if (headlineElement.textContent && headlineElement.textContent.trim()) {
              textParts.push(headlineElement.textContent.trim());
            }
          });
          if (textParts.length === 0) {
            this.getDefaultElements().forEach((defaultElement) => {
              if (defaultElement.textContent && defaultElement.textContent.trim()) {
                textParts.push(defaultElement.textContent.trim());
              }
            });
          }
          if (textParts.length === 0) {
            this.getSupportingTextElements().forEach((supportingTextElement) => {
              if (supportingTextElement.textContent && supportingTextElement.textContent.trim()) {
                textParts.push(supportingTextElement.textContent.trim());
              }
            });
          }
          return textParts.join(" ");
        }
        /**
         * The recommended tag name to render as the list item.
         */
        get tagName() {
          const type = this.host.type;
          switch (type) {
            case "link":
              return "a";
            case "button":
              return "button";
            default:
            case "menuitem":
            case "option":
              return "li";
          }
        }
        /**
         * The recommended role of the menu item.
         */
        get role() {
          return this.host.type === "option" ? "option" : "menuitem";
        }
        hostConnected() {
          this.host.toggleAttribute("md-menu-item", true);
        }
        hostUpdate() {
          if (this.host.href) {
            this.host.type = "link";
          }
        }
        /**
         * Use to set the typeaheadText when it changes.
         */
        setTypeaheadText(text) {
          this.internalTypeaheadText = text;
        }
      };
    }
  });

  // node_modules/@material/web/menu/internal/menuitem/menu-item.js
  var menuItemBaseClass, MenuItemEl;
  var init_menu_item = __esm({
    "node_modules/@material/web/menu/internal/menuitem/menu-item.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_item2();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_static_html();
      init_delegate();
      init_menuItemController();
      menuItemBaseClass = mixinDelegatesAria(i4);
      MenuItemEl = class extends menuItemBaseClass {
        constructor() {
          super(...arguments);
          this.disabled = false;
          this.type = "menuitem";
          this.href = "";
          this.target = "";
          this.keepOpen = false;
          this.selected = false;
          this.menuItemController = new MenuItemController(this, {
            getHeadlineElements: () => {
              return this.headlineElements;
            },
            getSupportingTextElements: () => {
              return this.supportingTextElements;
            },
            getDefaultElements: () => {
              return this.defaultElements;
            },
            getInteractiveElement: () => this.listItemRoot
          });
        }
        /**
         * The text that is selectable via typeahead. If not set, defaults to the
         * innerText of the item slotted into the `"headline"` slot.
         */
        get typeaheadText() {
          return this.menuItemController.typeaheadText;
        }
        set typeaheadText(text) {
          this.menuItemController.setTypeaheadText(text);
        }
        render() {
          return this.renderListItem(b2`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
        }
        /**
         * Renders the root list item.
         *
         * @param content the child content of the list item.
         */
        renderListItem(content) {
          const isAnchor = this.type === "link";
          let tag;
          switch (this.menuItemController.tagName) {
            case "a":
              tag = i6`a`;
              break;
            case "button":
              tag = i6`button`;
              break;
            default:
            case "li":
              tag = i6`li`;
              break;
          }
          const target = isAnchor && !!this.target ? this.target : A;
          return u3`
      <${tag}
        id="item"
        tabindex=${this.disabled && !isAnchor ? -1 : 0}
        role=${this.menuItemController.role}
        aria-label=${this.ariaLabel || A}
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        aria-expanded=${this.ariaExpanded || A}
        aria-haspopup=${this.ariaHasPopup || A}
        class="list-item ${e8(this.getRenderClasses())}"
        href=${this.href || A}
        target=${target}
        @click=${this.menuItemController.onClick}
        @keydown=${this.menuItemController.onKeydown}
      >${content}</${tag}>
    `;
        }
        /**
         * Handles rendering of the ripple element.
         */
        renderRipple() {
          return b2` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`;
        }
        /**
         * Handles rendering of the focus ring.
         */
        renderFocusRing() {
          return b2` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
        }
        /**
         * Classes applied to the list item root.
         */
        getRenderClasses() {
          return {
            "disabled": this.disabled,
            "selected": this.selected
          };
        }
        /**
         * Handles rendering the headline and supporting text.
         */
        renderBody() {
          return b2`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
        }
        focus() {
          this.listItemRoot?.focus();
        }
      };
      MenuItemEl.shadowRootOptions = {
        ...i4.shadowRootOptions,
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], MenuItemEl.prototype, "disabled", void 0);
      __decorate([
        n3()
      ], MenuItemEl.prototype, "type", void 0);
      __decorate([
        n3()
      ], MenuItemEl.prototype, "href", void 0);
      __decorate([
        n3()
      ], MenuItemEl.prototype, "target", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "keep-open" })
      ], MenuItemEl.prototype, "keepOpen", void 0);
      __decorate([
        n3({ type: Boolean })
      ], MenuItemEl.prototype, "selected", void 0);
      __decorate([
        e4(".list-item")
      ], MenuItemEl.prototype, "listItemRoot", void 0);
      __decorate([
        o4({ slot: "headline" })
      ], MenuItemEl.prototype, "headlineElements", void 0);
      __decorate([
        o4({ slot: "supporting-text" })
      ], MenuItemEl.prototype, "supportingTextElements", void 0);
      __decorate([
        n4({ slot: "" })
      ], MenuItemEl.prototype, "defaultElements", void 0);
      __decorate([
        n3({ attribute: "typeahead-text" })
      ], MenuItemEl.prototype, "typeaheadText", null);
    }
  });

  // node_modules/@material/web/menu/internal/menuitem/menu-item-styles.cssresult.js
  var styles40, menu_item_styles_cssresult_default;
  var init_menu_item_styles_cssresult = __esm({
    "node_modules/@material/web/menu/internal/menuitem/menu-item-styles.cssresult.js"() {
      init_lit();
      styles40 = i`:host{display:flex;gap:16px;--md-ripple-hover-color: var(--md-menu-item-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-menu-item-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-menu-item-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-menu-item-pressed-state-layer-opacity, 0.12)}:host([disabled]){opacity:var(--md-menu-item-disabled-opacity, 0.3);pointer-events:none}md-focus-ring{z-index:1;--md-focus-ring-shape: 8px}a,button,li{background:none;border:none;padding:0;margin:0;text-align:unset;text-decoration:none}.list-item{border-radius:inherit;display:flex;flex:1;gap:inherit;max-width:inherit;min-width:inherit;outline:none;-webkit-tap-highlight-color:rgba(0,0,0,0)}.list-item:not(.disabled){cursor:pointer}[slot=container]{pointer-events:none}md-ripple{border-radius:inherit}md-item{border-radius:inherit;flex:1;color:var(--md-menu-item-label-text-color, var(--md-sys-color-on-surface, #1d1b20));font-family:var(--md-menu-item-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));line-height:var(--md-menu-item-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));font-weight:var(--md-menu-item-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));min-height:var(--md-menu-item-one-line-container-height, 56px);padding-top:var(--md-menu-item-top-space, 12px);padding-bottom:var(--md-menu-item-bottom-space, 12px);padding-inline-start:var(--md-menu-item-leading-space, 16px);padding-inline-end:var(--md-menu-item-trailing-space, 16px);gap:inherit}md-item[multiline]{min-height:var(--md-menu-item-two-line-container-height, 72px)}[slot=supporting-text]{color:var(--md-menu-item-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-supporting-text-font, var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-supporting-text-size, var(--md-sys-typescale-body-medium-size, 0.875rem));line-height:var(--md-menu-item-supporting-text-line-height, var(--md-sys-typescale-body-medium-line-height, 1.25rem));font-weight:var(--md-menu-item-supporting-text-weight, var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)))}[slot=trailing-supporting-text]{color:var(--md-menu-item-trailing-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));font-family:var(--md-menu-item-trailing-supporting-text-font, var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto)));font-size:var(--md-menu-item-trailing-supporting-text-size, var(--md-sys-typescale-label-small-size, 0.6875rem));line-height:var(--md-menu-item-trailing-supporting-text-line-height, var(--md-sys-typescale-label-small-line-height, 1rem));font-weight:var(--md-menu-item-trailing-supporting-text-weight, var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)))}:is([slot=start],[slot=end])::slotted(*){fill:currentColor}[slot=start]{color:var(--md-menu-item-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}[slot=end]{color:var(--md-menu-item-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f))}.list-item{background-color:var(--md-menu-item-container-color, transparent)}.list-item.selected{background-color:var(--md-menu-item-selected-container-color, var(--md-sys-color-secondary-container, #e8def8))}.selected:not(.disabled) ::slotted(*){color:var(--md-menu-item-selected-label-text-color, var(--md-sys-color-on-secondary-container, #1d192b))}@media(forced-colors: active){:host([disabled]),:host([disabled]) slot{color:GrayText;opacity:1}.list-item{position:relative}.list-item.selected::before{content:"";position:absolute;inset:0;box-sizing:border-box;border-radius:inherit;pointer-events:none;border:3px double CanvasText}}
`;
      menu_item_styles_cssresult_default = styles40.styleSheet;
    }
  });

  // node_modules/@material/web/menu/menu-item.js
  var MdMenuItem;
  var init_menu_item2 = __esm({
    "node_modules/@material/web/menu/menu-item.js"() {
      init_tslib_es6();
      init_decorators();
      init_menu_item();
      init_menu_item_styles_cssresult();
      MdMenuItem = class MdMenuItem2 extends MenuItemEl {
      };
      MdMenuItem.styles = [styles40];
      MdMenuItem = __decorate([
        t("md-menu-item")
      ], MdMenuItem);
    }
  });

  // node_modules/@material/web/menu/internal/submenu/sub-menu.js
  var SubMenu;
  var init_sub_menu = __esm({
    "node_modules/@material/web/menu/internal/submenu/sub-menu.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_list_navigation_helpers();
      init_shared2();
      init_menu();
      SubMenu = class extends i4 {
        get item() {
          return this.items[0] ?? null;
        }
        get menu() {
          return this.menus[0] ?? null;
        }
        constructor() {
          super();
          this.anchorCorner = Corner.START_END;
          this.menuCorner = Corner.START_START;
          this.hoverOpenDelay = 400;
          this.hoverCloseDelay = 400;
          this.isSubMenu = true;
          this.previousOpenTimeout = 0;
          this.previousCloseTimeout = 0;
          this.onMouseenter = () => {
            clearTimeout(this.previousOpenTimeout);
            clearTimeout(this.previousCloseTimeout);
            if (this.menu?.open)
              return;
            if (!this.hoverOpenDelay) {
              this.show();
            } else {
              this.previousOpenTimeout = setTimeout(() => {
                this.show();
              }, this.hoverOpenDelay);
            }
          };
          this.onMouseleave = () => {
            clearTimeout(this.previousCloseTimeout);
            clearTimeout(this.previousOpenTimeout);
            if (!this.hoverCloseDelay) {
              this.close();
            } else {
              this.previousCloseTimeout = setTimeout(() => {
                this.close();
              }, this.hoverCloseDelay);
            }
          };
          if (!o7) {
            this.addEventListener("mouseenter", this.onMouseenter);
            this.addEventListener("mouseleave", this.onMouseleave);
          }
        }
        render() {
          return b2`
      <slot
        name="item"
        @click=${this.onClick}
        @keydown=${this.onKeydown}
        @slotchange=${this.onSlotchange}>
      </slot>
      <slot
        name="menu"
        @keydown=${this.onSubMenuKeydown}
        @close-menu=${this.onCloseSubmenu}
        @slotchange=${this.onSlotchange}>
      </slot>
    `;
        }
        firstUpdated() {
          this.onSlotchange();
        }
        /**
         * Shows the submenu.
         */
        async show() {
          const menu = this.menu;
          if (!menu || menu.open)
            return;
          menu.addEventListener("closed", () => {
            this.item.ariaExpanded = "false";
            this.dispatchEvent(createActivateTypeaheadEvent());
            this.dispatchEvent(createDeactivateItemsEvent());
            menu.ariaHidden = "true";
          }, { once: true });
          if (menu.positioning === "document") {
            menu.positioning = "absolute";
          }
          menu.quick = true;
          menu.hasOverflow = true;
          menu.anchorCorner = this.anchorCorner;
          menu.menuCorner = this.menuCorner;
          menu.anchorElement = this.item;
          menu.defaultFocus = "first-item";
          menu.removeAttribute("aria-hidden");
          menu.skipRestoreFocus = false;
          const menuAlreadyOpen = menu.open;
          menu.show();
          this.item.ariaExpanded = "true";
          this.item.ariaHasPopup = "menu";
          if (menu.id) {
            this.item.setAttribute("aria-controls", menu.id);
          }
          this.dispatchEvent(createDeactivateItemsEvent());
          this.dispatchEvent(createDeactivateTypeaheadEvent());
          this.item.selected = true;
          if (!menuAlreadyOpen) {
            let open = (value) => {
            };
            const opened = new Promise((resolve) => {
              open = resolve;
            });
            menu.addEventListener("opened", open, { once: true });
            await opened;
          }
        }
        /**
         * Closes the submenu.
         */
        async close() {
          const menu = this.menu;
          if (!menu || !menu.open)
            return;
          this.dispatchEvent(createActivateTypeaheadEvent());
          menu.quick = true;
          menu.close();
          this.dispatchEvent(createDeactivateItemsEvent());
          let close = (value) => {
          };
          const closed = new Promise((resolve) => {
            close = resolve;
          });
          menu.addEventListener("closed", close, { once: true });
          await closed;
        }
        onSlotchange() {
          if (!this.item) {
            return;
          }
          this.item.ariaExpanded = "false";
          this.item.ariaHasPopup = "menu";
          if (this.menu?.id) {
            this.item.setAttribute("aria-controls", this.menu.id);
          }
          this.item.keepOpen = true;
          const menu = this.menu;
          if (!menu)
            return;
          menu.isSubmenu = true;
          menu.ariaHidden = "true";
        }
        onClick() {
          this.show();
        }
        /**
         * On item keydown handles opening the submenu.
         */
        async onKeydown(event) {
          const shouldOpenSubmenu = this.isSubmenuOpenKey(event.code);
          if (event.defaultPrevented)
            return;
          const openedWithLR = shouldOpenSubmenu && (NavigableKey.LEFT === event.code || NavigableKey.RIGHT === event.code);
          if (event.code === SelectionKey.SPACE || openedWithLR) {
            event.preventDefault();
            if (openedWithLR) {
              event.stopPropagation();
            }
          }
          if (!shouldOpenSubmenu) {
            return;
          }
          const submenu = this.menu;
          if (!submenu)
            return;
          const submenuItems = submenu.items;
          const firstActivatableItem = getFirstActivatableItem(submenuItems);
          if (firstActivatableItem) {
            await this.show();
            firstActivatableItem.tabIndex = 0;
            firstActivatableItem.focus();
            return;
          }
        }
        onCloseSubmenu(event) {
          const { itemPath, reason } = event.detail;
          itemPath.push(this.item);
          this.dispatchEvent(createActivateTypeaheadEvent());
          if (reason.kind === CloseReason.KEYDOWN && reason.key === KeydownCloseKey.ESCAPE) {
            event.stopPropagation();
            this.item.dispatchEvent(createRequestActivationEvent());
            return;
          }
          this.dispatchEvent(createDeactivateItemsEvent());
        }
        async onSubMenuKeydown(event) {
          if (event.defaultPrevented)
            return;
          const { close: shouldClose, keyCode } = this.isSubmenuCloseKey(event.code);
          if (!shouldClose)
            return;
          event.preventDefault();
          if (keyCode === NavigableKey.LEFT || keyCode === NavigableKey.RIGHT) {
            event.stopPropagation();
          }
          await this.close();
          deactivateActiveItem(this.menu.items);
          this.item?.focus();
          this.item.tabIndex = 0;
          this.item.focus();
        }
        /**
         * Determines whether the given KeyboardEvent code is one that should open
         * the submenu. This is RTL-aware. By default, left, right, space, or enter.
         *
         * @param code The native KeyboardEvent code.
         * @return Whether or not the key code should open the submenu.
         */
        isSubmenuOpenKey(code) {
          const isRtl2 = getComputedStyle(this).direction === "rtl";
          const arrowEnterKey = isRtl2 ? NavigableKey.LEFT : NavigableKey.RIGHT;
          switch (code) {
            case arrowEnterKey:
            case SelectionKey.SPACE:
            case SelectionKey.ENTER:
              return true;
            default:
              return false;
          }
        }
        /**
         * Determines whether the given KeyboardEvent code is one that should close
         * the submenu. This is RTL-aware. By default right, left, or escape.
         *
         * @param code The native KeyboardEvent code.
         * @return Whether or not the key code should close the submenu.
         */
        isSubmenuCloseKey(code) {
          const isRtl2 = getComputedStyle(this).direction === "rtl";
          const arrowEnterKey = isRtl2 ? NavigableKey.RIGHT : NavigableKey.LEFT;
          switch (code) {
            case arrowEnterKey:
            case KeydownCloseKey.ESCAPE:
              return { close: true, keyCode: code };
            default:
              return { close: false };
          }
        }
      };
      __decorate([
        n3({ attribute: "anchor-corner" })
      ], SubMenu.prototype, "anchorCorner", void 0);
      __decorate([
        n3({ attribute: "menu-corner" })
      ], SubMenu.prototype, "menuCorner", void 0);
      __decorate([
        n3({ type: Number, attribute: "hover-open-delay" })
      ], SubMenu.prototype, "hoverOpenDelay", void 0);
      __decorate([
        n3({ type: Number, attribute: "hover-close-delay" })
      ], SubMenu.prototype, "hoverCloseDelay", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true, attribute: "md-sub-menu" })
      ], SubMenu.prototype, "isSubMenu", void 0);
      __decorate([
        o4({ slot: "item", flatten: true })
      ], SubMenu.prototype, "items", void 0);
      __decorate([
        o4({ slot: "menu", flatten: true })
      ], SubMenu.prototype, "menus", void 0);
    }
  });

  // node_modules/@material/web/menu/internal/submenu/sub-menu-styles.cssresult.js
  var styles41, sub_menu_styles_cssresult_default;
  var init_sub_menu_styles_cssresult = __esm({
    "node_modules/@material/web/menu/internal/submenu/sub-menu-styles.cssresult.js"() {
      init_lit();
      styles41 = i`:host{position:relative;display:flex;flex-direction:column}
`;
      sub_menu_styles_cssresult_default = styles41.styleSheet;
    }
  });

  // node_modules/@material/web/menu/sub-menu.js
  var MdSubMenu;
  var init_sub_menu2 = __esm({
    "node_modules/@material/web/menu/sub-menu.js"() {
      init_tslib_es6();
      init_decorators();
      init_sub_menu();
      init_sub_menu_styles_cssresult();
      MdSubMenu = class MdSubMenu2 extends SubMenu {
      };
      MdSubMenu.styles = [styles41];
      MdSubMenu = __decorate([
        t("md-sub-menu")
      ], MdSubMenu);
    }
  });

  // node_modules/@material/web/progress/internal/progress.js
  var progressBaseClass, Progress;
  var init_progress = __esm({
    "node_modules/@material/web/progress/internal/progress.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_class_map2();
      init_delegate();
      progressBaseClass = mixinDelegatesAria(i4);
      Progress = class extends progressBaseClass {
        constructor() {
          super(...arguments);
          this.value = 0;
          this.max = 1;
          this.indeterminate = false;
          this.fourColor = false;
        }
        render() {
          const { ariaLabel } = this;
          return b2`
      <div
        class="progress ${e8(this.getRenderClasses())}"
        role="progressbar"
        aria-label="${ariaLabel || A}"
        aria-valuemin="0"
        aria-valuemax=${this.max}
        aria-valuenow=${this.indeterminate ? A : this.value}
        >${this.renderIndicator()}</div
      >
    `;
        }
        getRenderClasses() {
          return {
            "indeterminate": this.indeterminate,
            "four-color": this.fourColor
          };
        }
      };
      __decorate([
        n3({ type: Number })
      ], Progress.prototype, "value", void 0);
      __decorate([
        n3({ type: Number })
      ], Progress.prototype, "max", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Progress.prototype, "indeterminate", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "four-color" })
      ], Progress.prototype, "fourColor", void 0);
    }
  });

  // node_modules/@material/web/progress/internal/circular-progress.js
  var CircularProgress;
  var init_circular_progress = __esm({
    "node_modules/@material/web/progress/internal/circular-progress.js"() {
      init_lit();
      init_progress();
      CircularProgress = class extends Progress {
        renderIndicator() {
          if (this.indeterminate) {
            return this.renderIndeterminateContainer();
          }
          return this.renderDeterminateContainer();
        }
        // Determinate mode is rendered with an svg so the progress arc can be
        // easily animated via stroke-dashoffset.
        renderDeterminateContainer() {
          const dashOffset = (1 - this.value / this.max) * 100;
          return b2`
      <svg viewBox="0 0 4800 4800">
        <circle class="track" pathLength="100"></circle>
        <circle
          class="active-track"
          pathLength="100"
          stroke-dashoffset=${dashOffset}></circle>
      </svg>
    `;
        }
        // Indeterminate mode rendered with 2 bordered-divs. The borders are
        // clipped into half circles by their containers. The divs are then carefully
        // animated to produce changes to the spinner arc size.
        // This approach has 4.5x the FPS of rendering via svg on Chrome 111.
        // See https://lit.dev/playground/#gist=febb773565272f75408ab06a0eb49746.
        renderIndeterminateContainer() {
          return b2` <div class="spinner">
      <div class="left">
        <div class="circle"></div>
      </div>
      <div class="right">
        <div class="circle"></div>
      </div>
    </div>`;
        }
      };
    }
  });

  // node_modules/@material/web/progress/internal/circular-progress-styles.cssresult.js
  var styles42, circular_progress_styles_cssresult_default;
  var init_circular_progress_styles_cssresult = __esm({
    "node_modules/@material/web/progress/internal/circular-progress-styles.cssresult.js"() {
      init_lit();
      styles42 = i`:host{--_active-indicator-color: var(--md-circular-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-width: var(--md-circular-progress-active-indicator-width, 10);--_four-color-active-indicator-four-color: var(--md-circular-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-circular-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-circular-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-circular-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_size: var(--md-circular-progress-size, 48px);display:inline-flex;vertical-align:middle;width:var(--_size);height:var(--_size);position:relative;align-items:center;justify-content:center;contain:strict;content-visibility:auto}.progress{flex:1;align-self:stretch;margin:4px}.progress,.spinner,.left,.right,.circle,svg,.track,.active-track{position:absolute;inset:0}svg{transform:rotate(-90deg)}circle{cx:50%;cy:50%;r:calc(50%*(1 - var(--_active-indicator-width)/100));stroke-width:calc(var(--_active-indicator-width)*1%);stroke-dasharray:100;fill:rgba(0,0,0,0)}.active-track{transition:stroke-dashoffset 500ms cubic-bezier(0, 0, 0.2, 1);stroke:var(--_active-indicator-color)}.track{stroke:rgba(0,0,0,0)}.progress.indeterminate{animation:linear infinite linear-rotate;animation-duration:1568.2352941176ms}.spinner{animation:infinite both rotate-arc;animation-duration:5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.left{overflow:hidden;inset:0 50% 0 0}.right{overflow:hidden;inset:0 0 0 50%}.circle{box-sizing:border-box;border-radius:50%;border:solid calc(var(--_active-indicator-width)/100*(var(--_size) - 8px));border-color:var(--_active-indicator-color) var(--_active-indicator-color) rgba(0,0,0,0) rgba(0,0,0,0);animation:expand-arc;animation-iteration-count:infinite;animation-fill-mode:both;animation-duration:1333ms,5332ms;animation-timing-function:cubic-bezier(0.4, 0, 0.2, 1)}.four-color .circle{animation-name:expand-arc,four-color}.left .circle{rotate:135deg;inset:0 -100% 0 0}.right .circle{rotate:100deg;inset:0 0 0 -100%;animation-delay:-666.5ms,0ms}@media(forced-colors: active){.active-track{stroke:CanvasText}.circle{border-color:CanvasText CanvasText Canvas Canvas}}@keyframes expand-arc{0%{transform:rotate(265deg)}50%{transform:rotate(130deg)}100%{transform:rotate(265deg)}}@keyframes rotate-arc{12.5%{transform:rotate(135deg)}25%{transform:rotate(270deg)}37.5%{transform:rotate(405deg)}50%{transform:rotate(540deg)}62.5%{transform:rotate(675deg)}75%{transform:rotate(810deg)}87.5%{transform:rotate(945deg)}100%{transform:rotate(1080deg)}}@keyframes linear-rotate{to{transform:rotate(360deg)}}@keyframes four-color{0%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}15%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}25%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}40%{border-top-color:var(--_four-color-active-indicator-two-color);border-right-color:var(--_four-color-active-indicator-two-color)}50%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}65%{border-top-color:var(--_four-color-active-indicator-three-color);border-right-color:var(--_four-color-active-indicator-three-color)}75%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}90%{border-top-color:var(--_four-color-active-indicator-four-color);border-right-color:var(--_four-color-active-indicator-four-color)}100%{border-top-color:var(--_four-color-active-indicator-one-color);border-right-color:var(--_four-color-active-indicator-one-color)}}
`;
      circular_progress_styles_cssresult_default = styles42.styleSheet;
    }
  });

  // node_modules/@material/web/progress/circular-progress.js
  var MdCircularProgress;
  var init_circular_progress2 = __esm({
    "node_modules/@material/web/progress/circular-progress.js"() {
      init_tslib_es6();
      init_decorators();
      init_circular_progress();
      init_circular_progress_styles_cssresult();
      MdCircularProgress = class MdCircularProgress2 extends CircularProgress {
      };
      MdCircularProgress.styles = [styles42];
      MdCircularProgress = __decorate([
        t("md-circular-progress")
      ], MdCircularProgress);
    }
  });

  // node_modules/@material/web/progress/internal/linear-progress.js
  var LinearProgress;
  var init_linear_progress = __esm({
    "node_modules/@material/web/progress/internal/linear-progress.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_style_map2();
      init_progress();
      LinearProgress = class extends Progress {
        constructor() {
          super(...arguments);
          this.buffer = 0;
        }
        // Note, the indeterminate animation is rendered with transform %'s
        // Previously, this was optimized to use px calculated with the resizeObserver
        // due to a now fixed Chrome bug: crbug.com/389359.
        renderIndicator() {
          const progressStyles = {
            transform: `scaleX(${(this.indeterminate ? 1 : this.value / this.max) * 100}%)`
          };
          const bufferValue = this.buffer ?? 0;
          const hasBuffer = bufferValue > 0;
          const dotSize = this.indeterminate || !hasBuffer ? 1 : bufferValue / this.max;
          const dotStyles = {
            transform: `scaleX(${dotSize * 100}%)`
          };
          const hideDots = this.indeterminate || !hasBuffer || bufferValue >= this.max || this.value >= this.max;
          return b2`
      <div class="dots" ?hidden=${hideDots}></div>
      <div class="inactive-track" style=${o9(dotStyles)}></div>
      <div class="bar primary-bar" style=${o9(progressStyles)}>
        <div class="bar-inner"></div>
      </div>
      <div class="bar secondary-bar">
        <div class="bar-inner"></div>
      </div>
    `;
        }
      };
      __decorate([
        n3({ type: Number })
      ], LinearProgress.prototype, "buffer", void 0);
    }
  });

  // node_modules/@material/web/progress/internal/linear-progress-styles.cssresult.js
  var styles43, linear_progress_styles_cssresult_default;
  var init_linear_progress_styles_cssresult = __esm({
    "node_modules/@material/web/progress/internal/linear-progress-styles.cssresult.js"() {
      init_lit();
      styles43 = i`:host{--_active-indicator-color: var(--md-linear-progress-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-linear-progress-active-indicator-height, 4px);--_four-color-active-indicator-four-color: var(--md-linear-progress-four-color-active-indicator-four-color, var(--md-sys-color-tertiary-container, #ffd8e4));--_four-color-active-indicator-one-color: var(--md-linear-progress-four-color-active-indicator-one-color, var(--md-sys-color-primary, #6750a4));--_four-color-active-indicator-three-color: var(--md-linear-progress-four-color-active-indicator-three-color, var(--md-sys-color-tertiary, #7d5260));--_four-color-active-indicator-two-color: var(--md-linear-progress-four-color-active-indicator-two-color, var(--md-sys-color-primary-container, #eaddff));--_track-color: var(--md-linear-progress-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_track-height: var(--md-linear-progress-track-height, 4px);--_track-shape: var(--md-linear-progress-track-shape, var(--md-sys-shape-corner-none, 0px));border-radius:var(--_track-shape);display:flex;position:relative;min-width:80px;height:var(--_track-height);content-visibility:auto;contain:strict}.progress,.dots,.inactive-track,.bar,.bar-inner{position:absolute}.progress{direction:ltr;inset:0;border-radius:inherit;overflow:hidden;display:flex;align-items:center}.bar{animation:none;width:100%;height:var(--_active-indicator-height);transform-origin:left center;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1)}.secondary-bar{display:none}.bar-inner{inset:0;animation:none;background:var(--_active-indicator-color)}.inactive-track{background:var(--_track-color);inset:0;transition:transform 250ms cubic-bezier(0.4, 0, 0.6, 1);transform-origin:left center}.dots{inset:0;animation:linear infinite 250ms;animation-name:buffering;background-color:var(--_track-color);background-repeat:repeat-x;-webkit-mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");mask-image:url("data:image/svg+xml,%3Csvg version='1.1' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 5 2' preserveAspectRatio='xMinYMin slice'%3E%3Ccircle cx='1' cy='1' r='1'/%3E%3C/svg%3E");z-index:-1}.dots[hidden]{display:none}.indeterminate .bar{transition:none}.indeterminate .primary-bar{inset-inline-start:-145.167%}.indeterminate .secondary-bar{inset-inline-start:-54.8889%;display:block}.indeterminate .primary-bar{animation:linear infinite 2s;animation-name:primary-indeterminate-translate}.indeterminate .primary-bar>.bar-inner{animation:linear infinite 2s primary-indeterminate-scale}.indeterminate.four-color .primary-bar>.bar-inner{animation-name:primary-indeterminate-scale,four-color;animation-duration:2s,4s}.indeterminate .secondary-bar{animation:linear infinite 2s;animation-name:secondary-indeterminate-translate}.indeterminate .secondary-bar>.bar-inner{animation:linear infinite 2s secondary-indeterminate-scale}.indeterminate.four-color .secondary-bar>.bar-inner{animation-name:secondary-indeterminate-scale,four-color;animation-duration:2s,4s}:host(:dir(rtl)){transform:scale(-1)}@keyframes primary-indeterminate-scale{0%{transform:scaleX(0.08)}36.65%{animation-timing-function:cubic-bezier(0.334731, 0.12482, 0.785844, 1);transform:scaleX(0.08)}69.15%{animation-timing-function:cubic-bezier(0.06, 0.11, 0.6, 1);transform:scaleX(0.661479)}100%{transform:scaleX(0.08)}}@keyframes secondary-indeterminate-scale{0%{animation-timing-function:cubic-bezier(0.205028, 0.057051, 0.57661, 0.453971);transform:scaleX(0.08)}19.15%{animation-timing-function:cubic-bezier(0.152313, 0.196432, 0.648374, 1.00432);transform:scaleX(0.457104)}44.15%{animation-timing-function:cubic-bezier(0.257759, -0.003163, 0.211762, 1.38179);transform:scaleX(0.72796)}100%{transform:scaleX(0.08)}}@keyframes buffering{0%{transform:translateX(calc(var(--_track-height) / 2 * 5))}}@keyframes primary-indeterminate-translate{0%{transform:translateX(0px)}20%{animation-timing-function:cubic-bezier(0.5, 0, 0.701732, 0.495819);transform:translateX(0px)}59.15%{animation-timing-function:cubic-bezier(0.302435, 0.381352, 0.55, 0.956352);transform:translateX(83.6714%)}100%{transform:translateX(200.611%)}}@keyframes secondary-indeterminate-translate{0%{animation-timing-function:cubic-bezier(0.15, 0, 0.515058, 0.409685);transform:translateX(0px)}25%{animation-timing-function:cubic-bezier(0.31033, 0.284058, 0.8, 0.733712);transform:translateX(37.6519%)}48.35%{animation-timing-function:cubic-bezier(0.4, 0.627035, 0.6, 0.902026);transform:translateX(84.3862%)}100%{transform:translateX(160.278%)}}@keyframes four-color{0%{background:var(--_four-color-active-indicator-one-color)}15%{background:var(--_four-color-active-indicator-one-color)}25%{background:var(--_four-color-active-indicator-two-color)}40%{background:var(--_four-color-active-indicator-two-color)}50%{background:var(--_four-color-active-indicator-three-color)}65%{background:var(--_four-color-active-indicator-three-color)}75%{background:var(--_four-color-active-indicator-four-color)}90%{background:var(--_four-color-active-indicator-four-color)}100%{background:var(--_four-color-active-indicator-one-color)}}@media(forced-colors: active){:host{outline:1px solid CanvasText}.bar-inner,.dots{background-color:CanvasText}}
`;
      linear_progress_styles_cssresult_default = styles43.styleSheet;
    }
  });

  // node_modules/@material/web/progress/linear-progress.js
  var MdLinearProgress;
  var init_linear_progress2 = __esm({
    "node_modules/@material/web/progress/linear-progress.js"() {
      init_tslib_es6();
      init_decorators();
      init_linear_progress();
      init_linear_progress_styles_cssresult();
      MdLinearProgress = class MdLinearProgress2 extends LinearProgress {
      };
      MdLinearProgress.styles = [styles43];
      MdLinearProgress = __decorate([
        t("md-linear-progress")
      ], MdLinearProgress);
    }
  });

  // node_modules/@material/web/labs/behaviors/focusable.js
  function mixinFocusable(base) {
    var _a3, _b, _c;
    class FocusableElement extends base {
      constructor() {
        super(...arguments);
        this[_a3] = true;
        this[_b] = null;
        this[_c] = false;
      }
      get [isFocusable2]() {
        return this[privateIsFocusable];
      }
      set [isFocusable2](value) {
        if (this[isFocusable2] === value) {
          return;
        }
        this[privateIsFocusable] = value;
        this[updateTabIndex]();
      }
      connectedCallback() {
        super.connectedCallback();
        this[updateTabIndex]();
      }
      attributeChangedCallback(name, old, value) {
        if (name !== "tabindex") {
          super.attributeChangedCallback(name, old, value);
          return;
        }
        this.requestUpdate("tabIndex", Number(old ?? -1));
        if (this[isUpdatingTabIndex]) {
          return;
        }
        if (!this.hasAttribute("tabindex")) {
          this[externalTabIndex] = null;
          this[updateTabIndex]();
          return;
        }
        this[externalTabIndex] = this.tabIndex;
      }
      [(_a3 = privateIsFocusable, _b = externalTabIndex, _c = isUpdatingTabIndex, updateTabIndex)]() {
        const internalTabIndex = this[isFocusable2] ? 0 : -1;
        const computedTabIndex = this[externalTabIndex] ?? internalTabIndex;
        this[isUpdatingTabIndex] = true;
        this.tabIndex = computedTabIndex;
        this[isUpdatingTabIndex] = false;
      }
    }
    __decorate([
      n3({ noAccessor: true })
    ], FocusableElement.prototype, "tabIndex", void 0);
    return FocusableElement;
  }
  var isFocusable2, privateIsFocusable, externalTabIndex, isUpdatingTabIndex, updateTabIndex;
  var init_focusable = __esm({
    "node_modules/@material/web/labs/behaviors/focusable.js"() {
      init_tslib_es6();
      init_decorators();
      isFocusable2 = /* @__PURE__ */ Symbol("isFocusable");
      privateIsFocusable = /* @__PURE__ */ Symbol("privateIsFocusable");
      externalTabIndex = /* @__PURE__ */ Symbol("externalTabIndex");
      isUpdatingTabIndex = /* @__PURE__ */ Symbol("isUpdatingTabIndex");
      updateTabIndex = /* @__PURE__ */ Symbol("updateTabIndex");
    }
  });

  // node_modules/@material/web/labs/behaviors/validators/radio-validator.js
  var RadioValidator;
  var init_radio_validator = __esm({
    "node_modules/@material/web/labs/behaviors/validators/radio-validator.js"() {
      init_validator();
      RadioValidator = class extends Validator {
        computeValidity(states) {
          if (!this.radioElement) {
            this.radioElement = document.createElement("input");
            this.radioElement.type = "radio";
            this.radioElement.name = "group";
          }
          let isRequired = false;
          let isChecked = false;
          for (const { checked, required } of states) {
            if (required) {
              isRequired = true;
            }
            if (checked) {
              isChecked = true;
            }
          }
          this.radioElement.checked = isChecked;
          this.radioElement.required = isRequired;
          return {
            validity: {
              valueMissing: isRequired && !isChecked
            },
            validationMessage: this.radioElement.validationMessage
          };
        }
        equals(prevGroup, nextGroup) {
          if (prevGroup.length !== nextGroup.length) {
            return false;
          }
          for (let i8 = 0; i8 < prevGroup.length; i8++) {
            const prev = prevGroup[i8];
            const next = nextGroup[i8];
            if (prev.checked !== next.checked || prev.required !== next.required) {
              return false;
            }
          }
          return true;
        }
        copy(states) {
          return states.map(({ checked, required }) => ({
            checked,
            required
          }));
        }
      };
    }
  });

  // node_modules/@material/web/radio/internal/single-selection-controller.js
  var SingleSelectionController;
  var init_single_selection_controller = __esm({
    "node_modules/@material/web/radio/internal/single-selection-controller.js"() {
      SingleSelectionController = class {
        /**
         * All single selection elements in the host element's root with the same
         * `name` attribute, including the host element.
         */
        get controls() {
          const name = this.host.getAttribute("name");
          if (!name || !this.root || !this.host.isConnected) {
            return [this.host];
          }
          return Array.from(this.root.querySelectorAll(`[name="${name}"]`));
        }
        constructor(host) {
          this.host = host;
          this.focused = false;
          this.root = null;
          this.handleFocusIn = () => {
            this.focused = true;
            this.updateTabIndices();
          };
          this.handleFocusOut = () => {
            this.focused = false;
            this.updateTabIndices();
          };
          this.handleKeyDown = (event) => {
            const isDown = event.key === "ArrowDown";
            const isUp = event.key === "ArrowUp";
            const isLeft = event.key === "ArrowLeft";
            const isRight = event.key === "ArrowRight";
            if (!isLeft && !isRight && !isDown && !isUp) {
              return;
            }
            const siblings = this.controls;
            if (!siblings.length) {
              return;
            }
            event.preventDefault();
            const isRtl2 = getComputedStyle(this.host).direction === "rtl";
            const forwards = isRtl2 ? isLeft || isDown : isRight || isDown;
            const hostIndex = siblings.indexOf(this.host);
            let nextIndex = forwards ? hostIndex + 1 : hostIndex - 1;
            while (nextIndex !== hostIndex) {
              if (nextIndex >= siblings.length) {
                nextIndex = 0;
              } else if (nextIndex < 0) {
                nextIndex = siblings.length - 1;
              }
              const nextSibling = siblings[nextIndex];
              if (nextSibling.hasAttribute("disabled")) {
                if (forwards) {
                  nextIndex++;
                } else {
                  nextIndex--;
                }
                continue;
              }
              for (const sibling of siblings) {
                if (sibling !== nextSibling) {
                  sibling.checked = false;
                  sibling.tabIndex = -1;
                  sibling.blur();
                }
              }
              nextSibling.checked = true;
              nextSibling.tabIndex = 0;
              nextSibling.focus();
              nextSibling.dispatchEvent(new Event("change", { bubbles: true }));
              break;
            }
          };
        }
        hostConnected() {
          this.host.addEventListener("keydown", this.handleKeyDown);
          this.host.addEventListener("focusin", this.handleFocusIn);
          this.host.addEventListener("focusout", this.handleFocusOut);
          queueMicrotask(() => {
            this.root = this.host.getRootNode();
            if (this.host.checked) {
              this.uncheckSiblings();
            }
            this.updateTabIndices();
          });
        }
        hostDisconnected() {
          this.host.removeEventListener("keydown", this.handleKeyDown);
          this.host.removeEventListener("focusin", this.handleFocusIn);
          this.host.removeEventListener("focusout", this.handleFocusOut);
          queueMicrotask(() => {
            this.updateTabIndices();
            this.root = null;
          });
        }
        /**
         * Should be called whenever the host's `checked` property changes
         * synchronously.
         */
        handleCheckedChange() {
          if (!this.host.checked) {
            return;
          }
          this.uncheckSiblings();
          this.updateTabIndices();
        }
        uncheckSiblings() {
          for (const sibling of this.controls) {
            if (sibling !== this.host) {
              sibling.checked = false;
            }
          }
        }
        /**
         * Updates the `tabindex` of the host and its siblings.
         */
        updateTabIndices() {
          const siblings = this.controls;
          const checkedSibling = siblings.find((sibling) => sibling.checked);
          if (checkedSibling || this.focused) {
            const focusable = checkedSibling || this.host;
            focusable.tabIndex = 0;
            for (const sibling of siblings) {
              if (sibling !== focusable) {
                sibling.tabIndex = -1;
              }
            }
            return;
          }
          for (const sibling of siblings) {
            sibling.tabIndex = 0;
          }
        }
      };
    }
  });

  // node_modules/@material/web/radio/internal/radio.js
  var _a, CHECKED, maskId, radioBaseClass, Radio;
  var init_radio = __esm({
    "node_modules/@material/web/radio/internal/radio.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_form_label_activation();
      init_constraint_validation();
      init_element_internals();
      init_focusable();
      init_form_associated();
      init_radio_validator();
      init_single_selection_controller();
      CHECKED = /* @__PURE__ */ Symbol("checked");
      maskId = 0;
      radioBaseClass = mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(mixinFocusable(i4))));
      Radio = class extends radioBaseClass {
        /**
         * Whether or not the radio is selected.
         */
        get checked() {
          return this[CHECKED];
        }
        set checked(checked) {
          const wasChecked = this.checked;
          if (wasChecked === checked) {
            return;
          }
          this[CHECKED] = checked;
          this.requestUpdate("checked", wasChecked);
          this.selectionController.handleCheckedChange();
        }
        constructor() {
          super();
          this.maskId = `cutout${++maskId}`;
          this[_a] = false;
          this.required = false;
          this.value = "on";
          this.selectionController = new SingleSelectionController(this);
          this.addController(this.selectionController);
          if (!o7) {
            this[internals].role = "radio";
            this.addEventListener("click", this.handleClick.bind(this));
            this.addEventListener("keydown", this.handleKeydown.bind(this));
          }
        }
        render() {
          const classes = { "checked": this.checked };
          return b2`
      <div class="container ${e8(classes)}" aria-hidden="true">
        <md-ripple
          part="ripple"
          .control=${this}
          ?disabled=${this.disabled}></md-ripple>
        <md-focus-ring part="focus-ring" .control=${this}></md-focus-ring>
        <svg class="icon" viewBox="0 0 20 20">
          <mask id="${this.maskId}">
            <rect width="100%" height="100%" fill="white" />
            <circle cx="10" cy="10" r="8" fill="black" />
          </mask>
          <circle
            class="outer circle"
            cx="10"
            cy="10"
            r="10"
            mask="url(#${this.maskId})" />
          <circle class="inner circle" cx="10" cy="10" r="5" />
        </svg>

        <div class="touch-target"></div>
      </div>
    `;
        }
        updated() {
          this[internals].ariaChecked = String(this.checked);
        }
        async handleClick(event) {
          if (this.disabled) {
            return;
          }
          await 0;
          if (event.defaultPrevented) {
            return;
          }
          if (isActivationClick(event)) {
            this.focus();
          }
          this.checked = true;
          this.dispatchEvent(new Event("change", { bubbles: true }));
          this.dispatchEvent(new InputEvent("input", { bubbles: true, composed: true }));
        }
        async handleKeydown(event) {
          await 0;
          if (event.key !== " " || event.defaultPrevented) {
            return;
          }
          this.click();
        }
        [(_a = CHECKED, getFormValue)]() {
          return this.checked ? this.value : null;
        }
        [getFormState]() {
          return String(this.checked);
        }
        formResetCallback() {
          this.checked = this.hasAttribute("checked");
        }
        formStateRestoreCallback(state) {
          this.checked = state === "true";
        }
        [createValidator]() {
          return new RadioValidator(() => {
            if (!this.selectionController) {
              return [this];
            }
            return this.selectionController.controls;
          });
        }
        [getValidityAnchor]() {
          return this.container;
        }
      };
      __decorate([
        n3({ type: Boolean })
      ], Radio.prototype, "checked", null);
      __decorate([
        n3({ type: Boolean })
      ], Radio.prototype, "required", void 0);
      __decorate([
        n3()
      ], Radio.prototype, "value", void 0);
      __decorate([
        e4(".container")
      ], Radio.prototype, "container", void 0);
    }
  });

  // node_modules/@material/web/radio/internal/radio-styles.cssresult.js
  var styles44, radio_styles_cssresult_default;
  var init_radio_styles_cssresult = __esm({
    "node_modules/@material/web/radio/internal/radio-styles.cssresult.js"() {
      init_lit();
      styles44 = i`@layer{:host{display:inline-flex;height:var(--md-radio-icon-size, 20px);outline:none;position:relative;vertical-align:top;width:var(--md-radio-icon-size, 20px);-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer;--md-ripple-hover-color: var(--md-radio-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-radio-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-opacity: var(--md-radio-pressed-state-layer-opacity, 0.12)}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-radio-icon-size, 20px))/2)}.container{display:flex;height:100%;place-content:center;place-items:center;width:100%}md-focus-ring{height:44px;inset:unset;width:44px}.checked{--md-ripple-hover-color: var(--md-radio-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-radio-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-color: var(--md-radio-selected-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-opacity: var(--md-radio-selected-pressed-state-layer-opacity, 0.12)}.touch-target{height:48px;position:absolute;width:48px}:host([touch-target=none]) .touch-target{display:none}md-ripple{border-radius:50%;height:var(--md-radio-state-layer-size, 40px);inset:unset;width:var(--md-radio-state-layer-size, 40px)}.icon{fill:var(--md-radio-icon-color, var(--md-sys-color-on-surface-variant, #49454f));inset:0;position:absolute}.outer.circle{transition:fill 50ms linear}.inner.circle{opacity:0;transform-origin:center;transition:opacity 50ms linear}.checked .icon{fill:var(--md-radio-selected-icon-color, var(--md-sys-color-primary, #6750a4))}.checked .inner.circle{animation:inner-circle-grow 300ms cubic-bezier(0.05, 0.7, 0.1, 1);opacity:1}@keyframes inner-circle-grow{from{transform:scale(0)}to{transform:scale(1)}}:host([disabled]) .circle{animation-duration:0s;transition-duration:0s}:host(:hover) .icon{fill:var(--md-radio-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:focus-within) .icon{fill:var(--md-radio-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host(:active) .icon{fill:var(--md-radio-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20))}:host([disabled]) .icon{fill:var(--md-radio-disabled-unselected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-unselected-icon-opacity, 0.38)}:host(:hover) .checked .icon{fill:var(--md-radio-selected-hover-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:focus-within) .checked .icon{fill:var(--md-radio-selected-focus-icon-color, var(--md-sys-color-primary, #6750a4))}:host(:active) .checked .icon{fill:var(--md-radio-selected-pressed-icon-color, var(--md-sys-color-primary, #6750a4))}:host([disabled]) .checked .icon{fill:var(--md-radio-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-radio-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon{fill:CanvasText}:host([disabled]) .icon{fill:GrayText;opacity:1}}}
`;
      radio_styles_cssresult_default = styles44.styleSheet;
    }
  });

  // node_modules/@material/web/radio/radio.js
  var MdRadio;
  var init_radio2 = __esm({
    "node_modules/@material/web/radio/radio.js"() {
      init_tslib_es6();
      init_decorators();
      init_radio();
      init_radio_styles_cssresult();
      MdRadio = class MdRadio2 extends Radio {
      };
      MdRadio.styles = [styles44];
      MdRadio = __decorate([
        t("md-radio")
      ], MdRadio);
    }
  });

  // node_modules/@material/web/labs/behaviors/on-report-validity.js
  function mixinOnReportValidity(base) {
    var _a3, _b, _c;
    class OnReportValidityElement extends base {
      // Mixins must have a constructor with `...args: any[]`
      // tslint:disable-next-line:no-any
      constructor(...args) {
        super(...args);
        this[_a3] = new AbortController();
        this[_b] = false;
        this[_c] = false;
        if (o7) {
          return;
        }
        this.addEventListener("invalid", (invalidEvent) => {
          if (this[privateDoNotReportInvalid] || !invalidEvent.isTrusted) {
            return;
          }
          this.addEventListener("invalid", () => {
            this[privateCallOnReportValidity](invalidEvent);
          }, { once: true });
        }, {
          // Listen during the capture phase, which will happen before the
          // bubbling phase. That way, we can add a final event listener that
          // will run after other event listeners, and we can check if it was
          // default prevented. This works because invalid does not bubble.
          capture: true
        });
      }
      checkValidity() {
        this[privateDoNotReportInvalid] = true;
        const valid = super.checkValidity();
        this[privateDoNotReportInvalid] = false;
        return valid;
      }
      reportValidity() {
        this[privateIsSelfReportingValidity] = true;
        const valid = super.reportValidity();
        if (valid) {
          this[privateCallOnReportValidity](null);
        }
        this[privateIsSelfReportingValidity] = false;
        return valid;
      }
      [(_a3 = privateCleanupFormListeners, _b = privateDoNotReportInvalid, _c = privateIsSelfReportingValidity, privateCallOnReportValidity)](invalidEvent) {
        const wasCanceled = invalidEvent?.defaultPrevented;
        if (wasCanceled) {
          return;
        }
        this[onReportValidity](invalidEvent);
        const implementationCanceledFocus = !wasCanceled && invalidEvent?.defaultPrevented;
        if (!implementationCanceledFocus) {
          return;
        }
        if (this[privateIsSelfReportingValidity] || isFirstInvalidControlInForm(this[internals].form, this)) {
          this.focus();
        }
      }
      [onReportValidity](invalidEvent) {
        throw new Error("Implement [onReportValidity]");
      }
      formAssociatedCallback(form) {
        if (super.formAssociatedCallback) {
          super.formAssociatedCallback(form);
        }
        this[privateCleanupFormListeners].abort();
        if (!form) {
          return;
        }
        this[privateCleanupFormListeners] = new AbortController();
        addFormReportValidListener(this, form, () => {
          this[privateCallOnReportValidity](null);
        }, this[privateCleanupFormListeners].signal);
      }
    }
    return OnReportValidityElement;
  }
  function addFormReportValidListener(control, form, onControlValid, cleanup) {
    const validateHooks = getFormValidateHooks(form);
    let controlFiredInvalid = false;
    let cleanupInvalidListener;
    let isNextSubmitFromHook = false;
    validateHooks.addEventListener("before", () => {
      isNextSubmitFromHook = true;
      cleanupInvalidListener = new AbortController();
      controlFiredInvalid = false;
      control.addEventListener("invalid", () => {
        controlFiredInvalid = true;
      }, {
        signal: cleanupInvalidListener.signal
      });
    }, { signal: cleanup });
    validateHooks.addEventListener("after", () => {
      isNextSubmitFromHook = false;
      cleanupInvalidListener?.abort();
      if (controlFiredInvalid) {
        return;
      }
      onControlValid();
    }, { signal: cleanup });
    form.addEventListener("submit", () => {
      if (isNextSubmitFromHook) {
        return;
      }
      onControlValid();
    }, {
      signal: cleanup
    });
  }
  function getFormValidateHooks(form) {
    if (!FORM_VALIDATE_HOOKS.has(form)) {
      const hooks = new EventTarget();
      FORM_VALIDATE_HOOKS.set(form, hooks);
      for (const methodName of ["reportValidity", "requestSubmit"]) {
        const superMethod = form[methodName];
        form[methodName] = function() {
          hooks.dispatchEvent(new Event("before"));
          const result = Reflect.apply(superMethod, this, arguments);
          hooks.dispatchEvent(new Event("after"));
          return result;
        };
      }
    }
    return FORM_VALIDATE_HOOKS.get(form);
  }
  function isFirstInvalidControlInForm(form, control) {
    if (!form) {
      return true;
    }
    let firstInvalidControl;
    for (const element of form.elements) {
      if (element.matches(":invalid")) {
        firstInvalidControl = element;
        break;
      }
    }
    return firstInvalidControl === control;
  }
  var onReportValidity, privateCleanupFormListeners, privateDoNotReportInvalid, privateIsSelfReportingValidity, privateCallOnReportValidity, FORM_VALIDATE_HOOKS;
  var init_on_report_validity = __esm({
    "node_modules/@material/web/labs/behaviors/on-report-validity.js"() {
      init_lit();
      init_element_internals();
      onReportValidity = /* @__PURE__ */ Symbol("onReportValidity");
      privateCleanupFormListeners = /* @__PURE__ */ Symbol("privateCleanupFormListeners");
      privateDoNotReportInvalid = /* @__PURE__ */ Symbol("privateDoNotReportInvalid");
      privateIsSelfReportingValidity = /* @__PURE__ */ Symbol("privateIsSelfReportingValidity");
      privateCallOnReportValidity = /* @__PURE__ */ Symbol("privateCallOnReportValidity");
      FORM_VALIDATE_HOOKS = /* @__PURE__ */ new WeakMap();
    }
  });

  // node_modules/@material/web/labs/behaviors/validators/select-validator.js
  var SelectValidator;
  var init_select_validator = __esm({
    "node_modules/@material/web/labs/behaviors/validators/select-validator.js"() {
      init_lit();
      init_validator();
      SelectValidator = class extends Validator {
        computeValidity(state) {
          if (!this.selectControl) {
            this.selectControl = document.createElement("select");
          }
          D(b2`<option value=${state.value}></option>`, this.selectControl);
          this.selectControl.value = state.value;
          this.selectControl.required = state.required;
          return {
            validity: this.selectControl.validity,
            validationMessage: this.selectControl.validationMessage
          };
        }
        equals(prev, next) {
          return prev.value === next.value && prev.required === next.required;
        }
        copy({ value, required }) {
          return { value, required };
        }
      };
    }
  });

  // node_modules/@material/web/select/internal/shared.js
  function getSelectedItems(items) {
    const selectedItemRecords = [];
    for (let i8 = 0; i8 < items.length; i8++) {
      const item = items[i8];
      if (item.selected) {
        selectedItemRecords.push([item, i8]);
      }
    }
    return selectedItemRecords;
  }
  var init_shared3 = __esm({
    "node_modules/@material/web/select/internal/shared.js"() {
    }
  });

  // node_modules/@material/web/select/internal/select.js
  var _a2, VALUE, selectBaseClass, Select;
  var init_select = __esm({
    "node_modules/@material/web/select/internal/select.js"() {
      init_tslib_es6();
      init_menu2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_style_map2();
      init_static_html();
      init_delegate();
      init_redispatch_event();
      init_constraint_validation();
      init_element_internals();
      init_form_associated();
      init_on_report_validity();
      init_select_validator();
      init_list_navigation_helpers();
      init_shared2();
      init_typeaheadController();
      init_menu();
      init_shared3();
      VALUE = /* @__PURE__ */ Symbol("value");
      selectBaseClass = mixinDelegatesAria(mixinOnReportValidity(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(i4)))));
      Select = class extends selectBaseClass {
        /**
         * The value of the currently selected option.
         *
         * Note: For SSR, set `[selected]` on the requested option and `displayText`
         * rather than setting `value` setting `value` will incur a DOM query.
         */
        get value() {
          return this[VALUE];
        }
        set value(value) {
          if (o7)
            return;
          this.lastUserSetValue = value;
          this.select(value);
        }
        get options() {
          return this.menu?.items ?? [];
        }
        /**
         * The index of the currently selected option.
         *
         * Note: For SSR, set `[selected]` on the requested option and `displayText`
         * rather than setting `selectedIndex` setting `selectedIndex` will incur a
         * DOM query.
         */
        get selectedIndex() {
          const [_option, index] = (this.getSelectedOptions() ?? [])[0] ?? [];
          return index ?? -1;
        }
        set selectedIndex(index) {
          this.lastUserSetSelectedIndex = index;
          this.selectIndex(index);
        }
        /**
         * Returns an array of selected options.
         *
         * NOTE: md-select only supports single selection.
         */
        get selectedOptions() {
          return (this.getSelectedOptions() ?? []).map(([option]) => option);
        }
        get hasError() {
          return this.error || this.nativeError;
        }
        constructor() {
          super();
          this.quick = false;
          this.required = false;
          this.errorText = "";
          this.label = "";
          this.noAsterisk = false;
          this.supportingText = "";
          this.error = false;
          this.menuPositioning = "popover";
          this.clampMenuWidth = false;
          this.typeaheadDelay = DEFAULT_TYPEAHEAD_BUFFER_TIME;
          this.hasLeadingIcon = false;
          this.displayText = "";
          this.menuAlign = "start";
          this[_a2] = "";
          this.lastUserSetValue = null;
          this.lastUserSetSelectedIndex = null;
          this.lastSelectedOption = null;
          this.lastSelectedOptionRecords = [];
          this.nativeError = false;
          this.nativeErrorText = "";
          this.focused = false;
          this.open = false;
          this.defaultFocus = FocusState.NONE;
          this.prevOpen = this.open;
          this.selectWidth = 0;
          if (o7) {
            return;
          }
          this.addEventListener("focus", this.handleFocus.bind(this));
          this.addEventListener("blur", this.handleBlur.bind(this));
        }
        /**
         * Selects an option given the value of the option, and updates MdSelect's
         * value.
         */
        select(value) {
          const optionToSelect = this.options.find((option) => option.value === value);
          if (optionToSelect) {
            this.selectItem(optionToSelect);
          }
        }
        /**
         * Selects an option given the index of the option, and updates MdSelect's
         * value.
         */
        selectIndex(index) {
          const optionToSelect = this.options[index];
          if (optionToSelect) {
            this.selectItem(optionToSelect);
          }
        }
        /**
         * Reset the select to its default value.
         */
        reset() {
          for (const option of this.options) {
            option.selected = option.hasAttribute("selected");
          }
          this.updateValueAndDisplayText();
          this.nativeError = false;
          this.nativeErrorText = "";
        }
        /** Shows the picker. If it's already open, this is a no-op. */
        showPicker() {
          this.open = true;
        }
        [(_a2 = VALUE, onReportValidity)](invalidEvent) {
          invalidEvent?.preventDefault();
          const prevMessage = this.getErrorText();
          this.nativeError = !!invalidEvent;
          this.nativeErrorText = this.validationMessage;
          if (prevMessage === this.getErrorText()) {
            this.field?.reannounceError();
          }
        }
        update(changed) {
          if (!this.hasUpdated) {
            this.initUserSelection();
          }
          if (this.prevOpen !== this.open && this.open) {
            const selectRect = this.getBoundingClientRect();
            this.selectWidth = selectRect.width;
          }
          this.prevOpen = this.open;
          super.update(changed);
        }
        render() {
          return b2`
      <span
        class="select ${e8(this.getRenderClasses())}"
        @focusout=${this.handleFocusout}>
        ${this.renderField()} ${this.renderMenu()}
      </span>
    `;
        }
        async firstUpdated(changed) {
          await this.menu?.updateComplete;
          if (!this.lastSelectedOptionRecords.length) {
            this.initUserSelection();
          }
          if (!this.lastSelectedOptionRecords.length && !o7 && !this.options.length) {
            setTimeout(() => {
              this.updateValueAndDisplayText();
            });
          }
          super.firstUpdated(changed);
        }
        getRenderClasses() {
          return {
            "disabled": this.disabled,
            "error": this.error,
            "open": this.open
          };
        }
        renderField() {
          const ariaLabel = this.ariaLabel || this.label;
          return u3`
      <${this.fieldTag}
          aria-haspopup="listbox"
          role="combobox"
          part="field"
          id="field"
          tabindex=${this.disabled ? "-1" : "0"}
          aria-label=${ariaLabel || A}
          aria-describedby="description"
          aria-expanded=${this.open ? "true" : "false"}
          aria-controls="listbox"
          class="field"
          label=${this.label}
          ?no-asterisk=${this.noAsterisk}
          .focused=${this.focused || this.open}
          .populated=${!!this.displayText}
          .disabled=${this.disabled}
          .required=${this.required}
          .error=${this.hasError}
          ?has-start=${this.hasLeadingIcon}
          has-end
          supporting-text=${this.supportingText}
          error-text=${this.getErrorText()}
          @keydown=${this.handleKeydown}
          @click=${this.handleClick}>
         ${this.renderFieldContent()}
         <div id="description" slot="aria-describedby"></div>
      </${this.fieldTag}>`;
        }
        renderFieldContent() {
          return [
            this.renderLeadingIcon(),
            this.renderLabel(),
            this.renderTrailingIcon()
          ];
        }
        renderLeadingIcon() {
          return b2`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
        }
        renderTrailingIcon() {
          return b2`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}>
          <svg height="5" viewBox="7 10 10 5" focusable="false">
            <polygon
              class="down"
              stroke="none"
              fill-rule="evenodd"
              points="7 10 12 15 17 10"></polygon>
            <polygon
              class="up"
              stroke="none"
              fill-rule="evenodd"
              points="7 15 12 10 17 15"></polygon>
          </svg>
        </slot>
      </span>
    `;
        }
        renderLabel() {
          return b2`<div id="label">${this.displayText || b2`&nbsp;`}</div>`;
        }
        renderMenu() {
          const ariaLabel = this.label || this.ariaLabel;
          return b2`<div class="menu-wrapper">
      <md-menu
        id="listbox"
        .defaultFocus=${this.defaultFocus}
        role="listbox"
        tabindex="-1"
        aria-label=${ariaLabel || A}
        stay-open-on-focusout
        part="menu"
        exportparts="focus-ring: menu-focus-ring"
        anchor="field"
        style=${o9({
            "--__menu-min-width": `${this.selectWidth}px`,
            "--__menu-max-width": this.clampMenuWidth ? `${this.selectWidth}px` : void 0
          })}
        no-navigation-wrap
        .open=${this.open}
        .quick=${this.quick}
        .positioning=${this.menuPositioning}
        .typeaheadDelay=${this.typeaheadDelay}
        .anchorCorner=${this.menuAlign === "start" ? "end-start" : "end-end"}
        .menuCorner=${this.menuAlign === "start" ? "start-start" : "start-end"}
        @opening=${this.handleOpening}
        @opened=${this.redispatchEvent}
        @closing=${this.redispatchEvent}
        @closed=${this.handleClosed}
        @close-menu=${this.handleCloseMenu}
        @request-selection=${this.handleRequestSelection}
        @request-deselection=${this.handleRequestDeselection}>
        ${this.renderMenuContent()}
      </md-menu>
    </div>`;
        }
        renderMenuContent() {
          return b2`<slot></slot>`;
        }
        /**
         * Handles opening the select on keydown and typahead selection when the menu
         * is closed.
         */
        handleKeydown(event) {
          if (this.open || this.disabled || !this.menu) {
            return;
          }
          const typeaheadController = this.menu.typeaheadController;
          const isOpenKey = event.code === "Space" || event.code === "ArrowDown" || event.code === "ArrowUp" || event.code === "End" || event.code === "Home" || event.code === "Enter";
          if (!typeaheadController.isTypingAhead && isOpenKey) {
            event.preventDefault();
            this.open = true;
            switch (event.code) {
              case "Space":
              case "ArrowDown":
              case "Enter":
                this.defaultFocus = FocusState.NONE;
                break;
              case "End":
                this.defaultFocus = FocusState.LAST_ITEM;
                break;
              case "ArrowUp":
              case "Home":
                this.defaultFocus = FocusState.FIRST_ITEM;
                break;
              default:
                break;
            }
            return;
          }
          const isPrintableKey = event.key.length === 1;
          if (isPrintableKey) {
            typeaheadController.onKeydown(event);
            event.preventDefault();
            const { lastActiveRecord } = typeaheadController;
            if (!lastActiveRecord) {
              return;
            }
            this.labelEl?.setAttribute?.("aria-live", "polite");
            const hasChanged = this.selectItem(lastActiveRecord[TYPEAHEAD_RECORD.ITEM]);
            if (hasChanged) {
              this.dispatchInteractionEvents();
            }
          }
        }
        handleClick() {
          this.open = !this.open;
        }
        handleFocus() {
          this.focused = true;
        }
        handleBlur() {
          this.focused = false;
        }
        /**
         * Handles closing the menu when the focus leaves the select's subtree.
         */
        handleFocusout(event) {
          if (event.relatedTarget && isElementInSubtree(event.relatedTarget, this)) {
            return;
          }
          this.open = false;
        }
        /**
         * Gets a list of all selected select options as a list item record array.
         *
         * @return An array of selected list option records.
         */
        getSelectedOptions() {
          if (!this.menu) {
            this.lastSelectedOptionRecords = [];
            return null;
          }
          const items = this.menu.items;
          this.lastSelectedOptionRecords = getSelectedItems(items);
          return this.lastSelectedOptionRecords;
        }
        async getUpdateComplete() {
          await this.menu?.updateComplete;
          return super.getUpdateComplete();
        }
        /**
         * Gets the selected options from the DOM, and updates the value and display
         * text to the first selected option's value and headline respectively.
         *
         * @return Whether or not the selected option has changed since last update.
         */
        updateValueAndDisplayText() {
          const selectedOptions = this.getSelectedOptions() ?? [];
          let hasSelectedOptionChanged = false;
          if (selectedOptions.length) {
            const [firstSelectedOption] = selectedOptions[0];
            hasSelectedOptionChanged = this.lastSelectedOption !== firstSelectedOption;
            this.lastSelectedOption = firstSelectedOption;
            this[VALUE] = firstSelectedOption.value;
            this.displayText = firstSelectedOption.displayText;
          } else {
            hasSelectedOptionChanged = this.lastSelectedOption !== null;
            this.lastSelectedOption = null;
            this[VALUE] = "";
            this.displayText = "";
          }
          return hasSelectedOptionChanged;
        }
        /**
         * Focuses and activates the last selected item upon opening, and resets other
         * active items.
         */
        async handleOpening(e9) {
          this.labelEl?.removeAttribute?.("aria-live");
          this.redispatchEvent(e9);
          if (this.defaultFocus !== FocusState.NONE) {
            return;
          }
          const items = this.menu.items;
          const activeItem = getActiveItem(items)?.item;
          let [selectedItem] = this.lastSelectedOptionRecords[0] ?? [null];
          if (activeItem && activeItem !== selectedItem) {
            activeItem.tabIndex = -1;
          }
          selectedItem = selectedItem ?? items[0];
          if (selectedItem) {
            selectedItem.tabIndex = 0;
            selectedItem.focus();
          }
        }
        redispatchEvent(e9) {
          redispatchEvent(this, e9);
        }
        handleClosed(e9) {
          this.open = false;
          this.redispatchEvent(e9);
        }
        /**
         * Determines the reason for closing, and updates the UI accordingly.
         */
        handleCloseMenu(event) {
          const reason = event.detail.reason;
          const item = event.detail.itemPath[0];
          this.open = false;
          let hasChanged = false;
          if (reason.kind === "click-selection") {
            hasChanged = this.selectItem(item);
          } else if (reason.kind === "keydown" && isSelectableKey(reason.key)) {
            hasChanged = this.selectItem(item);
          } else {
            item.tabIndex = -1;
            item.blur();
          }
          if (hasChanged) {
            this.dispatchInteractionEvents();
          }
        }
        /**
         * Selects a given option, deselects other options, and updates the UI.
         *
         * @return Whether the last selected option has changed.
         */
        selectItem(item) {
          const selectedOptions = this.getSelectedOptions() ?? [];
          selectedOptions.forEach(([option]) => {
            if (item !== option) {
              option.selected = false;
              option.tabIndex = -1;
            }
          });
          item.selected = true;
          item.tabIndex = 0;
          return this.updateValueAndDisplayText();
        }
        /**
         * Handles updating selection when an option element requests selection via
         * property / attribute change.
         */
        handleRequestSelection(event) {
          const requestingOptionEl = event.target;
          if (this.lastSelectedOptionRecords.some(([option]) => option === requestingOptionEl)) {
            return;
          }
          this.selectItem(requestingOptionEl);
        }
        /**
         * Handles updating selection when an option element requests deselection via
         * property / attribute change.
         */
        handleRequestDeselection(event) {
          const requestingOptionEl = event.target;
          if (!this.lastSelectedOptionRecords.some(([option]) => option === requestingOptionEl)) {
            return;
          }
          this.updateValueAndDisplayText();
        }
        /**
         * Attempts to initialize the selected option from user-settable values like
         * SSR, setting `value`, or `selectedIndex` at startup.
         */
        initUserSelection() {
          if (this.lastUserSetValue && !this.lastSelectedOptionRecords.length) {
            this.select(this.lastUserSetValue);
          } else if (this.lastUserSetSelectedIndex !== null && !this.lastSelectedOptionRecords.length) {
            this.selectIndex(this.lastUserSetSelectedIndex);
          } else {
            this.updateValueAndDisplayText();
          }
        }
        handleIconChange() {
          this.hasLeadingIcon = this.leadingIcons.length > 0;
        }
        /**
         * Dispatches the `input` and `change` events.
         */
        dispatchInteractionEvents() {
          this.dispatchEvent(new Event("input", { bubbles: true, composed: true }));
          this.dispatchEvent(new Event("change", { bubbles: true }));
        }
        getErrorText() {
          return this.error ? this.errorText : this.nativeErrorText;
        }
        [getFormValue]() {
          return this.value;
        }
        formResetCallback() {
          this.reset();
        }
        formStateRestoreCallback(state) {
          this.value = state;
        }
        click() {
          this.field?.click();
        }
        [createValidator]() {
          return new SelectValidator(() => this);
        }
        [getValidityAnchor]() {
          return this.field;
        }
      };
      Select.shadowRootOptions = {
        ...i4.shadowRootOptions,
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean })
      ], Select.prototype, "quick", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Select.prototype, "required", void 0);
      __decorate([
        n3({ type: String, attribute: "error-text" })
      ], Select.prototype, "errorText", void 0);
      __decorate([
        n3()
      ], Select.prototype, "label", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "no-asterisk" })
      ], Select.prototype, "noAsterisk", void 0);
      __decorate([
        n3({ type: String, attribute: "supporting-text" })
      ], Select.prototype, "supportingText", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], Select.prototype, "error", void 0);
      __decorate([
        n3({ attribute: "menu-positioning" })
      ], Select.prototype, "menuPositioning", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "clamp-menu-width" })
      ], Select.prototype, "clampMenuWidth", void 0);
      __decorate([
        n3({ type: Number, attribute: "typeahead-delay" })
      ], Select.prototype, "typeaheadDelay", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "has-leading-icon" })
      ], Select.prototype, "hasLeadingIcon", void 0);
      __decorate([
        n3({ attribute: "display-text" })
      ], Select.prototype, "displayText", void 0);
      __decorate([
        n3({ attribute: "menu-align" })
      ], Select.prototype, "menuAlign", void 0);
      __decorate([
        n3()
      ], Select.prototype, "value", null);
      __decorate([
        n3({ type: Number, attribute: "selected-index" })
      ], Select.prototype, "selectedIndex", null);
      __decorate([
        r4()
      ], Select.prototype, "nativeError", void 0);
      __decorate([
        r4()
      ], Select.prototype, "nativeErrorText", void 0);
      __decorate([
        r4()
      ], Select.prototype, "focused", void 0);
      __decorate([
        r4()
      ], Select.prototype, "open", void 0);
      __decorate([
        r4()
      ], Select.prototype, "defaultFocus", void 0);
      __decorate([
        e4(".field")
      ], Select.prototype, "field", void 0);
      __decorate([
        e4("md-menu")
      ], Select.prototype, "menu", void 0);
      __decorate([
        e4("#label")
      ], Select.prototype, "labelEl", void 0);
      __decorate([
        o4({ slot: "leading-icon", flatten: true })
      ], Select.prototype, "leadingIcons", void 0);
    }
  });

  // node_modules/@material/web/select/internal/filled-select.js
  var FilledSelect;
  var init_filled_select = __esm({
    "node_modules/@material/web/select/internal/filled-select.js"() {
      init_filled_field2();
      init_static_html();
      init_select();
      FilledSelect = class extends Select {
        constructor() {
          super(...arguments);
          this.fieldTag = i6`md-filled-field`;
        }
      };
    }
  });

  // node_modules/@material/web/select/internal/filled-select-styles.cssresult.js
  var styles45, filled_select_styles_cssresult_default;
  var init_filled_select_styles_cssresult = __esm({
    "node_modules/@material/web/select/internal/filled-select-styles.cssresult.js"() {
      init_lit();
      styles45 = i`:host{--_text-field-active-indicator-color: var(--md-filled-select-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-active-indicator-height: var(--md-filled-select-text-field-active-indicator-height, 1px);--_text-field-container-color: var(--md-filled-select-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_text-field-disabled-active-indicator-color: var(--md-filled-select-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-active-indicator-height: var(--md-filled-select-text-field-disabled-active-indicator-height, 1px);--_text-field-disabled-active-indicator-opacity: var(--md-filled-select-text-field-disabled-active-indicator-opacity, 0.38);--_text-field-disabled-container-color: var(--md-filled-select-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-container-opacity: var(--md-filled-select-text-field-disabled-container-opacity, 0.04);--_text-field-disabled-input-text-color: var(--md-filled-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-filled-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-filled-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-filled-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-filled-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-filled-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-supporting-text-color: var(--md-filled-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-filled-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-filled-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-filled-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-active-indicator-color: var(--md-filled-select-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-active-indicator-color: var(--md-filled-select-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-input-text-color: var(--md-filled-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-filled-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-filled-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-supporting-text-color: var(--md-filled-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-filled-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-active-indicator-color: var(--md-filled-select-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-input-text-color: var(--md-filled-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-filled-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-filled-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-state-layer-color: var(--md-filled-select-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-state-layer-opacity: var(--md-filled-select-text-field-error-hover-state-layer-opacity, 0.08);--_text-field-error-hover-supporting-text-color: var(--md-filled-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-filled-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-filled-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-filled-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-filled-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-supporting-text-color: var(--md-filled-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-filled-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-active-indicator-color: var(--md-filled-select-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-active-indicator-height: var(--md-filled-select-text-field-focus-active-indicator-height, 3px);--_text-field-focus-input-text-color: var(--md-filled-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-filled-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-filled-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-supporting-text-color: var(--md-filled-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-filled-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-active-indicator-color: var(--md-filled-select-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-active-indicator-height: var(--md-filled-select-text-field-hover-active-indicator-height, 1px);--_text-field-hover-input-text-color: var(--md-filled-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-filled-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-filled-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-state-layer-color: var(--md-filled-select-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-state-layer-opacity: var(--md-filled-select-text-field-hover-state-layer-opacity, 0.08);--_text-field-hover-supporting-text-color: var(--md-filled-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-filled-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-filled-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-filled-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-filled-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-filled-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-filled-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-filled-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-filled-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-filled-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-filled-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-filled-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-filled-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-filled-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-filled-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-filled-select-text-field-leading-icon-size, 24px);--_text-field-supporting-text-color: var(--md-filled-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-filled-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-filled-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-filled-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-filled-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-filled-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-filled-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-filled-select-text-field-container-shape-start-start, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-filled-select-text-field-container-shape-start-end, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-filled-select-text-field-container-shape-end-end, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_text-field-container-shape-end-start: var(--md-filled-select-text-field-container-shape-end-start, var(--md-filled-select-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--md-filled-field-active-indicator-color: var(--_text-field-active-indicator-color);--md-filled-field-active-indicator-height: var(--_text-field-active-indicator-height);--md-filled-field-container-color: var(--_text-field-container-color);--md-filled-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-filled-field-content-color: var(--_text-field-input-text-color);--md-filled-field-content-font: var(--_text-field-input-text-font);--md-filled-field-content-line-height: var(--_text-field-input-text-line-height);--md-filled-field-content-size: var(--_text-field-input-text-size);--md-filled-field-content-weight: var(--_text-field-input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_text-field-disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_text-field-disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_text-field-disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_text-field-disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_text-field-disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_text-field-error-active-indicator-color);--md-filled-field-error-content-color: var(--_text-field-error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_text-field-error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_text-field-error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_text-field-error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_text-field-error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-filled-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_text-field-focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_text-field-focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_text-field-hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_text-field-hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_text-field-hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_text-field-hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_text-field-label-text-color);--md-filled-field-label-text-font: var(--_text-field-label-text-font);--md-filled-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-filled-field-label-text-size: var(--_text-field-label-text-size);--md-filled-field-label-text-weight: var(--_text-field-label-text-weight);--md-filled-field-leading-content-color: var(--_text-field-leading-icon-color);--md-filled-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-filled-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-filled-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-filled-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`;
      filled_select_styles_cssresult_default = styles45.styleSheet;
    }
  });

  // node_modules/@material/web/select/internal/shared-styles.cssresult.js
  var styles46, shared_styles_cssresult_default6;
  var init_shared_styles_cssresult6 = __esm({
    "node_modules/@material/web/select/internal/shared-styles.cssresult.js"() {
      init_lit();
      styles46 = i`:host{color:unset;min-width:210px;display:flex}.field{cursor:default;outline:none}.select{position:relative;flex-direction:column}.icon.trailing svg,.icon ::slotted(*){fill:currentColor}.icon ::slotted(*){width:inherit;height:inherit;font-size:inherit}.icon slot{display:flex;height:100%;width:100%;align-items:center;justify-content:center}.icon.trailing :is(.up,.down){opacity:0;transition:opacity 75ms linear 75ms}.select:not(.open) .down,.select.open .up{opacity:1}.field,.select,md-menu{min-width:inherit;width:inherit;max-width:inherit;display:flex}md-menu{min-width:var(--__menu-min-width);max-width:var(--__menu-max-width, inherit)}.menu-wrapper{width:0px;height:0px;max-width:inherit}md-menu ::slotted(:not[disabled]){cursor:pointer}.field,.select{width:100%}:host{display:inline-flex}:host([disabled]){pointer-events:none}
`;
      shared_styles_cssresult_default6 = styles46.styleSheet;
    }
  });

  // node_modules/@material/web/select/filled-select.js
  var MdFilledSelect;
  var init_filled_select2 = __esm({
    "node_modules/@material/web/select/filled-select.js"() {
      init_tslib_es6();
      init_decorators();
      init_filled_select();
      init_filled_select_styles_cssresult();
      init_shared_styles_cssresult6();
      MdFilledSelect = class MdFilledSelect2 extends FilledSelect {
      };
      MdFilledSelect.styles = [styles46, styles45];
      MdFilledSelect = __decorate([
        t("md-filled-select")
      ], MdFilledSelect);
    }
  });

  // node_modules/@material/web/select/internal/outlined-select.js
  var OutlinedSelect;
  var init_outlined_select = __esm({
    "node_modules/@material/web/select/internal/outlined-select.js"() {
      init_outlined_field2();
      init_static_html();
      init_select();
      OutlinedSelect = class extends Select {
        constructor() {
          super(...arguments);
          this.fieldTag = i6`md-outlined-field`;
        }
      };
    }
  });

  // node_modules/@material/web/select/internal/outlined-select-styles.cssresult.js
  var styles47, outlined_select_styles_cssresult_default;
  var init_outlined_select_styles_cssresult = __esm({
    "node_modules/@material/web/select/internal/outlined-select-styles.cssresult.js"() {
      init_lit();
      styles47 = i`:host{--_text-field-disabled-input-text-color: var(--md-outlined-select-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-input-text-opacity: var(--md-outlined-select-text-field-disabled-input-text-opacity, 0.38);--_text-field-disabled-label-text-color: var(--md-outlined-select-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-label-text-opacity: var(--md-outlined-select-text-field-disabled-label-text-opacity, 0.38);--_text-field-disabled-leading-icon-color: var(--md-outlined-select-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-leading-icon-opacity: var(--md-outlined-select-text-field-disabled-leading-icon-opacity, 0.38);--_text-field-disabled-outline-color: var(--md-outlined-select-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-outline-opacity: var(--md-outlined-select-text-field-disabled-outline-opacity, 0.12);--_text-field-disabled-outline-width: var(--md-outlined-select-text-field-disabled-outline-width, 1px);--_text-field-disabled-supporting-text-color: var(--md-outlined-select-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-supporting-text-opacity: var(--md-outlined-select-text-field-disabled-supporting-text-opacity, 0.38);--_text-field-disabled-trailing-icon-color: var(--md-outlined-select-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-disabled-trailing-icon-opacity: var(--md-outlined-select-text-field-disabled-trailing-icon-opacity, 0.38);--_text-field-error-focus-input-text-color: var(--md-outlined-select-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-focus-label-text-color: var(--md-outlined-select-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-leading-icon-color: var(--md-outlined-select-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-focus-outline-color: var(--md-outlined-select-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-supporting-text-color: var(--md-outlined-select-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-focus-trailing-icon-color: var(--md-outlined-select-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-input-text-color: var(--md-outlined-select-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-hover-label-text-color: var(--md-outlined-select-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-leading-icon-color: var(--md-outlined-select-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-hover-outline-color: var(--md-outlined-select-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-hover-supporting-text-color: var(--md-outlined-select-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-hover-trailing-icon-color: var(--md-outlined-select-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_text-field-error-input-text-color: var(--md-outlined-select-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-error-label-text-color: var(--md-outlined-select-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-leading-icon-color: var(--md-outlined-select-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-error-outline-color: var(--md-outlined-select-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_text-field-error-supporting-text-color: var(--md-outlined-select-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_text-field-error-trailing-icon-color: var(--md-outlined-select-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_text-field-focus-input-text-color: var(--md-outlined-select-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-focus-label-text-color: var(--md-outlined-select-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-leading-icon-color: var(--md-outlined-select-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-outline-color: var(--md-outlined-select-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_text-field-focus-outline-width: var(--md-outlined-select-text-field-focus-outline-width, 3px);--_text-field-focus-supporting-text-color: var(--md-outlined-select-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-focus-trailing-icon-color: var(--md-outlined-select-text-field-focus-trailing-icon-color, var(--md-sys-color-primary, #6750a4));--_text-field-hover-input-text-color: var(--md-outlined-select-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-label-text-color: var(--md-outlined-select-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-leading-icon-color: var(--md-outlined-select-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-outline-color: var(--md-outlined-select-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-hover-outline-width: var(--md-outlined-select-text-field-hover-outline-width, 1px);--_text-field-hover-supporting-text-color: var(--md-outlined-select-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-hover-trailing-icon-color: var(--md-outlined-select-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-input-text-color: var(--md-outlined-select-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_text-field-input-text-font: var(--md-outlined-select-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-input-text-line-height: var(--md-outlined-select-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-input-text-size: var(--md-outlined-select-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-input-text-weight: var(--md-outlined-select-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-label-text-color: var(--md-outlined-select-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-label-text-font: var(--md-outlined-select-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-label-text-line-height: var(--md-outlined-select-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_text-field-label-text-populated-line-height: var(--md-outlined-select-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-label-text-populated-size: var(--md-outlined-select-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-label-text-size: var(--md-outlined-select-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_text-field-label-text-weight: var(--md-outlined-select-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-leading-icon-color: var(--md-outlined-select-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-leading-icon-size: var(--md-outlined-select-text-field-leading-icon-size, 24px);--_text-field-outline-color: var(--md-outlined-select-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_text-field-outline-width: var(--md-outlined-select-text-field-outline-width, 1px);--_text-field-supporting-text-color: var(--md-outlined-select-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-supporting-text-font: var(--md-outlined-select-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_text-field-supporting-text-line-height: var(--md-outlined-select-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_text-field-supporting-text-size: var(--md-outlined-select-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_text-field-supporting-text-weight: var(--md-outlined-select-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_text-field-trailing-icon-color: var(--md-outlined-select-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_text-field-trailing-icon-size: var(--md-outlined-select-text-field-trailing-icon-size, 24px);--_text-field-container-shape-start-start: var(--md-outlined-select-text-field-container-shape-start-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-start-end: var(--md-outlined-select-text-field-container-shape-start-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-end: var(--md-outlined-select-text-field-container-shape-end-end, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_text-field-container-shape-end-start: var(--md-outlined-select-text-field-container-shape-end-start, var(--md-outlined-select-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--md-outlined-field-container-shape-end-end: var(--_text-field-container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_text-field-container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_text-field-container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_text-field-container-shape-start-start);--md-outlined-field-content-color: var(--_text-field-input-text-color);--md-outlined-field-content-font: var(--_text-field-input-text-font);--md-outlined-field-content-line-height: var(--_text-field-input-text-line-height);--md-outlined-field-content-size: var(--_text-field-input-text-size);--md-outlined-field-content-weight: var(--_text-field-input-text-weight);--md-outlined-field-disabled-content-color: var(--_text-field-disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_text-field-disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_text-field-disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_text-field-disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_text-field-disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_text-field-disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_text-field-disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_text-field-disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_text-field-disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_text-field-disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_text-field-disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_text-field-disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_text-field-disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_text-field-error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_text-field-error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_text-field-error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_text-field-error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_text-field-error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_text-field-error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_text-field-error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_text-field-error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_text-field-error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_text-field-error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_text-field-error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_text-field-error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_text-field-error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_text-field-error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_text-field-error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_text-field-error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_text-field-error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_text-field-error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_text-field-focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_text-field-focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_text-field-focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_text-field-focus-outline-color);--md-outlined-field-focus-outline-width: var(--_text-field-focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_text-field-focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_text-field-focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_text-field-hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_text-field-hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_text-field-hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_text-field-hover-outline-color);--md-outlined-field-hover-outline-width: var(--_text-field-hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_text-field-hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_text-field-hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_text-field-label-text-color);--md-outlined-field-label-text-font: var(--_text-field-label-text-font);--md-outlined-field-label-text-line-height: var(--_text-field-label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_text-field-label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_text-field-label-text-populated-size);--md-outlined-field-label-text-size: var(--_text-field-label-text-size);--md-outlined-field-label-text-weight: var(--_text-field-label-text-weight);--md-outlined-field-leading-content-color: var(--_text-field-leading-icon-color);--md-outlined-field-outline-color: var(--_text-field-outline-color);--md-outlined-field-outline-width: var(--_text-field-outline-width);--md-outlined-field-supporting-text-color: var(--_text-field-supporting-text-color);--md-outlined-field-supporting-text-font: var(--_text-field-supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_text-field-supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_text-field-supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_text-field-supporting-text-weight);--md-outlined-field-trailing-content-color: var(--_text-field-trailing-icon-color)}[has-start] .icon.leading{font-size:var(--_text-field-leading-icon-size);height:var(--_text-field-leading-icon-size);width:var(--_text-field-leading-icon-size)}.icon.trailing{font-size:var(--_text-field-trailing-icon-size);height:var(--_text-field-trailing-icon-size);width:var(--_text-field-trailing-icon-size)}
`;
      outlined_select_styles_cssresult_default = styles47.styleSheet;
    }
  });

  // node_modules/@material/web/select/outlined-select.js
  var MdOutlinedSelect;
  var init_outlined_select2 = __esm({
    "node_modules/@material/web/select/outlined-select.js"() {
      init_tslib_es6();
      init_decorators();
      init_outlined_select();
      init_outlined_select_styles_cssresult();
      init_shared_styles_cssresult6();
      MdOutlinedSelect = class MdOutlinedSelect2 extends OutlinedSelect {
      };
      MdOutlinedSelect.styles = [styles46, styles47];
      MdOutlinedSelect = __decorate([
        t("md-outlined-select")
      ], MdOutlinedSelect);
    }
  });

  // node_modules/@material/web/select/internal/selectoption/selectOptionController.js
  function createRequestSelectionEvent() {
    return new Event("request-selection", {
      bubbles: true,
      composed: true
    });
  }
  function createRequestDeselectionEvent() {
    return new Event("request-deselection", {
      bubbles: true,
      composed: true
    });
  }
  var SelectOptionController;
  var init_selectOptionController = __esm({
    "node_modules/@material/web/select/internal/selectoption/selectOptionController.js"() {
      init_menuItemController();
      SelectOptionController = class {
        /**
         * The recommended role of the select option.
         */
        get role() {
          return this.menuItemController.role;
        }
        /**
         * The text that is selectable via typeahead. If not set, defaults to the
         * innerText of the item slotted into the `"headline"` slot, and if there are
         * no slotted elements into headline, then it checks the _default_ slot, and
         * then the `"supporting-text"` slot if nothing is in _default_.
         */
        get typeaheadText() {
          return this.menuItemController.typeaheadText;
        }
        setTypeaheadText(text) {
          this.menuItemController.setTypeaheadText(text);
        }
        /**
         * The text that is displayed in the select field when selected. If not set,
         * defaults to the textContent of the item slotted into the `"headline"` slot,
         * and if there are no slotted elements into headline, then it checks the
         * _default_ slot, and then the `"supporting-text"` slot if nothing is in
         * _default_.
         */
        get displayText() {
          if (this.internalDisplayText !== null) {
            return this.internalDisplayText;
          }
          return this.menuItemController.typeaheadText;
        }
        setDisplayText(text) {
          this.internalDisplayText = text;
        }
        /**
         * @param host The SelectOption in which to attach this controller to.
         * @param config The object that configures this controller's behavior.
         */
        constructor(host, config) {
          this.host = host;
          this.internalDisplayText = null;
          this.firstUpdate = true;
          this.onClick = () => {
            this.menuItemController.onClick();
          };
          this.onKeydown = (e9) => {
            this.menuItemController.onKeydown(e9);
          };
          this.lastSelected = this.host.selected;
          this.menuItemController = new MenuItemController(host, config);
          host.addController(this);
        }
        hostUpdate() {
          if (this.lastSelected !== this.host.selected) {
            this.host.ariaSelected = this.host.selected ? "true" : "false";
          }
        }
        hostUpdated() {
          if (this.lastSelected !== this.host.selected && !this.firstUpdate) {
            if (this.host.selected) {
              this.host.dispatchEvent(createRequestSelectionEvent());
            } else {
              this.host.dispatchEvent(createRequestDeselectionEvent());
            }
          }
          this.lastSelected = this.host.selected;
          this.firstUpdate = false;
        }
      };
    }
  });

  // node_modules/@material/web/select/internal/selectoption/select-option.js
  var selectOptionBaseClass, SelectOptionEl;
  var init_select_option = __esm({
    "node_modules/@material/web/select/internal/selectoption/select-option.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_item2();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_delegate();
      init_selectOptionController();
      selectOptionBaseClass = mixinDelegatesAria(i4);
      SelectOptionEl = class extends selectOptionBaseClass {
        constructor() {
          super(...arguments);
          this.disabled = false;
          this.isMenuItem = true;
          this.selected = false;
          this.value = "";
          this.type = "option";
          this.selectOptionController = new SelectOptionController(this, {
            getHeadlineElements: () => {
              return this.headlineElements;
            },
            getSupportingTextElements: () => {
              return this.supportingTextElements;
            },
            getDefaultElements: () => {
              return this.defaultElements;
            },
            getInteractiveElement: () => this.listItemRoot
          });
        }
        /**
         * The text that is selectable via typeahead. If not set, defaults to the
         * innerText of the item slotted into the `"headline"` slot.
         */
        get typeaheadText() {
          return this.selectOptionController.typeaheadText;
        }
        set typeaheadText(text) {
          this.selectOptionController.setTypeaheadText(text);
        }
        /**
         * The text that is displayed in the select field when selected. If not set,
         * defaults to the textContent of the item slotted into the `"headline"` slot.
         */
        get displayText() {
          return this.selectOptionController.displayText;
        }
        set displayText(text) {
          this.selectOptionController.setDisplayText(text);
        }
        render() {
          return this.renderListItem(b2`
      <md-item>
        <div slot="container">
          ${this.renderRipple()} ${this.renderFocusRing()}
        </div>
        <slot name="start" slot="start"></slot>
        <slot name="end" slot="end"></slot>
        ${this.renderBody()}
      </md-item>
    `);
        }
        /**
         * Renders the root list item.
         *
         * @param content the child content of the list item.
         */
        renderListItem(content) {
          return b2`
      <li
        id="item"
        tabindex=${this.disabled ? -1 : 0}
        role=${this.selectOptionController.role}
        aria-label=${this.ariaLabel || A}
        aria-selected=${this.ariaSelected || A}
        aria-checked=${this.ariaChecked || A}
        aria-expanded=${this.ariaExpanded || A}
        aria-haspopup=${this.ariaHasPopup || A}
        class="list-item ${e8(this.getRenderClasses())}"
        @click=${this.selectOptionController.onClick}
        @keydown=${this.selectOptionController.onKeydown}
        >${content}</li
      >
    `;
        }
        /**
         * Handles rendering of the ripple element.
         */
        renderRipple() {
          return b2` <md-ripple
      part="ripple"
      for="item"
      ?disabled=${this.disabled}></md-ripple>`;
        }
        /**
         * Handles rendering of the focus ring.
         */
        renderFocusRing() {
          return b2` <md-focus-ring
      part="focus-ring"
      for="item"
      inward></md-focus-ring>`;
        }
        /**
         * Classes applied to the list item root.
         */
        getRenderClasses() {
          return {
            "disabled": this.disabled,
            "selected": this.selected
          };
        }
        /**
         * Handles rendering the headline and supporting text.
         */
        renderBody() {
          return b2`
      <slot></slot>
      <slot name="overline" slot="overline"></slot>
      <slot name="headline" slot="headline"></slot>
      <slot name="supporting-text" slot="supporting-text"></slot>
      <slot
        name="trailing-supporting-text"
        slot="trailing-supporting-text"></slot>
    `;
        }
        focus() {
          this.listItemRoot?.focus();
        }
      };
      SelectOptionEl.shadowRootOptions = {
        ...i4.shadowRootOptions,
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], SelectOptionEl.prototype, "disabled", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "md-menu-item", reflect: true })
      ], SelectOptionEl.prototype, "isMenuItem", void 0);
      __decorate([
        n3({ type: Boolean })
      ], SelectOptionEl.prototype, "selected", void 0);
      __decorate([
        n3()
      ], SelectOptionEl.prototype, "value", void 0);
      __decorate([
        e4(".list-item")
      ], SelectOptionEl.prototype, "listItemRoot", void 0);
      __decorate([
        o4({ slot: "headline" })
      ], SelectOptionEl.prototype, "headlineElements", void 0);
      __decorate([
        o4({ slot: "supporting-text" })
      ], SelectOptionEl.prototype, "supportingTextElements", void 0);
      __decorate([
        n4({ slot: "" })
      ], SelectOptionEl.prototype, "defaultElements", void 0);
      __decorate([
        n3({ attribute: "typeahead-text" })
      ], SelectOptionEl.prototype, "typeaheadText", null);
      __decorate([
        n3({ attribute: "display-text" })
      ], SelectOptionEl.prototype, "displayText", null);
    }
  });

  // node_modules/@material/web/select/select-option.js
  var MdSelectOption;
  var init_select_option2 = __esm({
    "node_modules/@material/web/select/select-option.js"() {
      init_tslib_es6();
      init_decorators();
      init_menu_item_styles_cssresult();
      init_select_option();
      MdSelectOption = class MdSelectOption2 extends SelectOptionEl {
      };
      MdSelectOption.styles = [styles40];
      MdSelectOption = __decorate([
        t("md-select-option")
      ], MdSelectOption);
    }
  });

  // node_modules/@material/web/slider/internal/forced-colors-styles.cssresult.js
  var styles48, forced_colors_styles_cssresult_default2;
  var init_forced_colors_styles_cssresult2 = __esm({
    "node_modules/@material/web/slider/internal/forced-colors-styles.cssresult.js"() {
      init_lit();
      styles48 = i`@media(forced-colors: active){:host{--md-slider-active-track-color: CanvasText;--md-slider-disabled-active-track-color: GrayText;--md-slider-disabled-active-track-opacity: 1;--md-slider-disabled-handle-color: GrayText;--md-slider-disabled-inactive-track-color: GrayText;--md-slider-disabled-inactive-track-opacity: 1;--md-slider-focus-handle-color: CanvasText;--md-slider-handle-color: CanvasText;--md-slider-handle-shadow-color: Canvas;--md-slider-hover-handle-color: CanvasText;--md-slider-hover-state-layer-color: Canvas;--md-slider-hover-state-layer-opacity: 1;--md-slider-inactive-track-color: Canvas;--md-slider-label-container-color: Canvas;--md-slider-label-text-color: CanvasText;--md-slider-pressed-handle-color: CanvasText;--md-slider-pressed-state-layer-color: Canvas;--md-slider-pressed-state-layer-opacity: 1;--md-slider-with-overlap-handle-outline-color: CanvasText}.label,.label::before{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}:host(:not([disabled])) .track::before{border:1px solid var(--_active-track-color)}.tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='CanvasText'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}.tickmarks::after{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2' r='1'/%3E%3C/svg%3E")}:host([disabled]) .tickmarks::before{background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='Canvas'%3E%3Ccircle cx='2' cy='2'  r='1'/%3E%3C/svg%3E")}}
`;
      forced_colors_styles_cssresult_default2 = styles48.styleSheet;
    }
  });

  // node_modules/lit-html/directives/when.js
  function n8(n9, r9, t6) {
    return n9 ? r9(n9) : t6?.(n9);
  }
  var init_when = __esm({
    "node_modules/lit-html/directives/when.js"() {
    }
  });

  // node_modules/lit/directives/when.js
  var init_when2 = __esm({
    "node_modules/lit/directives/when.js"() {
      init_when();
    }
  });

  // node_modules/@material/web/slider/internal/slider.js
  function inBounds({ x: x2, y: y3 }, element) {
    if (!element) {
      return false;
    }
    const { top, left, bottom, right } = element.getBoundingClientRect();
    return x2 >= left && x2 <= right && y3 >= top && y3 <= bottom;
  }
  function isOverlapping(elA, elB) {
    if (!(elA && elB)) {
      return false;
    }
    const a4 = elA.getBoundingClientRect();
    const b3 = elB.getBoundingClientRect();
    return !(a4.top > b3.bottom || a4.right < b3.left || a4.bottom < b3.top || a4.left > b3.right);
  }
  var sliderBaseClass, Slider;
  var init_slider = __esm({
    "node_modules/@material/web/slider/internal/slider.js"() {
      init_tslib_es6();
      init_elevation2();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_style_map2();
      init_when2();
      init_delegate();
      init_form_label_activation();
      init_redispatch_event();
      init_element_internals();
      init_form_associated();
      sliderBaseClass = mixinDelegatesAria(mixinFormAssociated(mixinElementInternals(i4)));
      Slider = class extends sliderBaseClass {
        /**
         * The HTML name to use in form submission for a range slider's starting
         * value. Use `name` instead if both the start and end values should use the
         * same name.
         */
        get nameStart() {
          return this.getAttribute("name-start") ?? this.name;
        }
        set nameStart(name) {
          this.setAttribute("name-start", name);
        }
        /**
         * The HTML name to use in form submission for a range slider's ending value.
         * Use `name` instead if both the start and end values should use the same
         * name.
         */
        get nameEnd() {
          return this.getAttribute("name-end") ?? this.nameStart;
        }
        set nameEnd(name) {
          this.setAttribute("name-end", name);
        }
        // Note: start aria-* properties are only applied when range=true, which is
        // why they do not need to handle both cases.
        get renderAriaLabelStart() {
          const { ariaLabel } = this;
          return this.ariaLabelStart || ariaLabel && `${ariaLabel} start` || this.valueLabelStart || String(this.valueStart);
        }
        get renderAriaValueTextStart() {
          return this.ariaValueTextStart || this.valueLabelStart || String(this.valueStart);
        }
        // Note: end aria-* properties are applied for single and range sliders, which
        // is why it needs to handle `this.range` (while start aria-* properties do
        // not).
        get renderAriaLabelEnd() {
          const { ariaLabel } = this;
          if (this.range) {
            return this.ariaLabelEnd || ariaLabel && `${ariaLabel} end` || this.valueLabelEnd || String(this.valueEnd);
          }
          return ariaLabel || this.valueLabel || String(this.value);
        }
        get renderAriaValueTextEnd() {
          if (this.range) {
            return this.ariaValueTextEnd || this.valueLabelEnd || String(this.valueEnd);
          }
          const { ariaValueText } = this;
          return ariaValueText || this.valueLabel || String(this.value);
        }
        constructor() {
          super();
          this.min = 0;
          this.max = 100;
          this.valueLabel = "";
          this.valueLabelStart = "";
          this.valueLabelEnd = "";
          this.ariaLabelStart = "";
          this.ariaValueTextStart = "";
          this.ariaLabelEnd = "";
          this.ariaValueTextEnd = "";
          this.step = 1;
          this.ticks = false;
          this.labeled = false;
          this.range = false;
          this.handleStartHover = false;
          this.handleEndHover = false;
          this.startOnTop = false;
          this.handlesOverlapping = false;
          this.ripplePointerId = 1;
          this.isRedispatchingEvent = false;
          if (!o7) {
            this.addEventListener("click", (event) => {
              if (!isActivationClick(event) || !this.inputEnd) {
                return;
              }
              this.focus();
              dispatchActivationClick(this.inputEnd);
            });
          }
        }
        focus() {
          this.inputEnd?.focus();
        }
        willUpdate(changed) {
          this.renderValueStart = changed.has("valueStart") ? this.valueStart : this.inputStart?.valueAsNumber;
          const endValueChanged = changed.has("valueEnd") && this.range || changed.has("value");
          this.renderValueEnd = endValueChanged ? this.range ? this.valueEnd : this.value : this.inputEnd?.valueAsNumber;
          if (changed.get("handleStartHover") !== void 0) {
            this.toggleRippleHover(this.rippleStart, this.handleStartHover);
          } else if (changed.get("handleEndHover") !== void 0) {
            this.toggleRippleHover(this.rippleEnd, this.handleEndHover);
          }
        }
        updated(changed) {
          if (this.range) {
            this.renderValueStart = this.inputStart.valueAsNumber;
          }
          this.renderValueEnd = this.inputEnd.valueAsNumber;
          if (this.range) {
            const segment = (this.max - this.min) / 3;
            if (this.valueStart === void 0) {
              this.inputStart.valueAsNumber = this.min + segment;
              const v2 = this.inputStart.valueAsNumber;
              this.valueStart = this.renderValueStart = v2;
            }
            if (this.valueEnd === void 0) {
              this.inputEnd.valueAsNumber = this.min + 2 * segment;
              const v2 = this.inputEnd.valueAsNumber;
              this.valueEnd = this.renderValueEnd = v2;
            }
          } else {
            this.value ??= this.renderValueEnd;
          }
          if (changed.has("range") || changed.has("renderValueStart") || changed.has("renderValueEnd") || this.isUpdatePending) {
            const startNub = this.handleStart?.querySelector(".handleNub");
            const endNub = this.handleEnd?.querySelector(".handleNub");
            this.handlesOverlapping = isOverlapping(startNub, endNub);
          }
          this.performUpdate();
        }
        render() {
          const step = this.step === 0 ? 1 : this.step;
          const range = Math.max(this.max - this.min, step);
          const startFraction = this.range ? ((this.renderValueStart ?? this.min) - this.min) / range : 0;
          const endFraction = ((this.renderValueEnd ?? this.min) - this.min) / range;
          const containerStyles = {
            // for clipping inputs and active track.
            "--_start-fraction": String(startFraction),
            "--_end-fraction": String(endFraction),
            // for generating tick marks
            "--_tick-count": String(range / step)
          };
          const containerClasses = { ranged: this.range };
          const labelStart = this.valueLabelStart || String(this.renderValueStart);
          const labelEnd = (this.range ? this.valueLabelEnd : this.valueLabel) || String(this.renderValueEnd);
          const inputStartProps = {
            start: true,
            value: this.renderValueStart,
            ariaLabel: this.renderAriaLabelStart,
            ariaValueText: this.renderAriaValueTextStart,
            ariaMin: this.min,
            ariaMax: this.valueEnd ?? this.max
          };
          const inputEndProps = {
            start: false,
            value: this.renderValueEnd,
            ariaLabel: this.renderAriaLabelEnd,
            ariaValueText: this.renderAriaValueTextEnd,
            ariaMin: this.range ? this.valueStart ?? this.min : this.min,
            ariaMax: this.max
          };
          const handleStartProps = {
            start: true,
            hover: this.handleStartHover,
            label: labelStart
          };
          const handleEndProps = {
            start: false,
            hover: this.handleEndHover,
            label: labelEnd
          };
          const handleContainerClasses = {
            hover: this.handleStartHover || this.handleEndHover
          };
          return b2` <div
      class="container ${e8(containerClasses)}"
      style=${o9(containerStyles)}>
      ${n8(this.range, () => this.renderInput(inputStartProps))}
      ${this.renderInput(inputEndProps)} ${this.renderTrack()}
      <div class="handleContainerPadded">
        <div class="handleContainerBlock">
          <div class="handleContainer ${e8(handleContainerClasses)}">
            ${n8(this.range, () => this.renderHandle(handleStartProps))}
            ${this.renderHandle(handleEndProps)}
          </div>
        </div>
      </div>
    </div>`;
        }
        renderTrack() {
          return b2`
      <div class="track"></div>
      ${this.ticks ? b2`<div class="tickmarks"></div>` : A}
    `;
        }
        renderLabel(value) {
          return b2`<div class="label" aria-hidden="true">
      <span class="labelContent" part="label">${value}</span>
    </div>`;
        }
        renderHandle({ start, hover, label }) {
          const onTop = !this.disabled && start === this.startOnTop;
          const isOverlapping2 = !this.disabled && this.handlesOverlapping;
          const name = start ? "start" : "end";
          return b2`<div
      class="handle ${e8({
            [name]: true,
            hover,
            onTop,
            isOverlapping: isOverlapping2
          })}">
      <md-focus-ring part="focus-ring" for=${name}></md-focus-ring>
      <md-ripple
        for=${name}
        class=${name}
        ?disabled=${this.disabled}></md-ripple>
      <div class="handleNub">
        <md-elevation part="elevation"></md-elevation>
      </div>
      ${n8(this.labeled, () => this.renderLabel(label))}
    </div>`;
        }
        renderInput({ start, value, ariaLabel, ariaValueText, ariaMin, ariaMax }) {
          const name = start ? `start` : `end`;
          return b2`<input
      type="range"
      class="${e8({
            start,
            end: !start
          })}"
      @focus=${this.handleFocus}
      @pointerdown=${this.handleDown}
      @pointerup=${this.handleUp}
      @pointerenter=${this.handleEnter}
      @pointermove=${this.handleMove}
      @pointerleave=${this.handleLeave}
      @keydown=${this.handleKeydown}
      @keyup=${this.handleKeyup}
      @input=${this.handleInput}
      @change=${this.handleChange}
      id=${name}
      .disabled=${this.disabled}
      .min=${String(this.min)}
      aria-valuemin=${ariaMin}
      .max=${String(this.max)}
      aria-valuemax=${ariaMax}
      .step=${String(this.step)}
      .value=${String(value)}
      .tabIndex=${start ? 1 : 0}
      aria-label=${ariaLabel || A}
      aria-valuetext=${ariaValueText} />`;
        }
        async toggleRippleHover(ripple, hovering) {
          const rippleEl = await ripple;
          if (!rippleEl) {
            return;
          }
          if (hovering) {
            rippleEl.handlePointerenter(new PointerEvent("pointerenter", {
              isPrimary: true,
              pointerId: this.ripplePointerId
            }));
          } else {
            rippleEl.handlePointerleave(new PointerEvent("pointerleave", {
              isPrimary: true,
              pointerId: this.ripplePointerId
            }));
          }
        }
        handleFocus(event) {
          this.updateOnTop(event.target);
        }
        startAction(event) {
          const target = event.target;
          const fixed = target === this.inputStart ? this.inputEnd : this.inputStart;
          this.action = {
            canFlip: event.type === "pointerdown",
            flipped: false,
            target,
            fixed,
            values: /* @__PURE__ */ new Map([
              [target, target.valueAsNumber],
              [fixed, fixed?.valueAsNumber]
            ])
          };
        }
        finishAction(event) {
          this.action = void 0;
        }
        handleKeydown(event) {
          this.startAction(event);
        }
        handleKeyup(event) {
          this.finishAction(event);
        }
        handleDown(event) {
          this.startAction(event);
          this.ripplePointerId = event.pointerId;
          const isStart = event.target === this.inputStart;
          this.handleStartHover = !this.disabled && isStart && Boolean(this.handleStart);
          this.handleEndHover = !this.disabled && !isStart && Boolean(this.handleEnd);
        }
        async handleUp(event) {
          if (!this.action) {
            return;
          }
          const { target, values, flipped } = this.action;
          await new Promise(requestAnimationFrame);
          if (target !== void 0) {
            target.focus();
            if (flipped && target.valueAsNumber !== values.get(target)) {
              target.dispatchEvent(new Event("change", { bubbles: true }));
            }
          }
          this.finishAction(event);
        }
        /**
         * The move handler tracks handle hovering to facilitate proper ripple
         * behavior on the slider handle. This is needed because user interaction with
         * the native input is leveraged to position the handle. Because the separate
         * displayed handle element has pointer events disabled (to allow interaction
         * with the input) and the input's handle is a pseudo-element, neither can be
         * the ripple's interactive element. Therefore the input is the ripple's
         * interactive element and has a `ripple` directive; however the ripple
         * is gated on the handle being hovered. In addition, because the ripple
         * hover state is being specially handled, it must be triggered independent
         * of the directive. This is done based on the hover state when the
         * slider is updated.
         */
        handleMove(event) {
          this.handleStartHover = !this.disabled && inBounds(event, this.handleStart);
          this.handleEndHover = !this.disabled && inBounds(event, this.handleEnd);
        }
        handleEnter(event) {
          this.handleMove(event);
        }
        handleLeave() {
          this.handleStartHover = false;
          this.handleEndHover = false;
        }
        updateOnTop(input) {
          this.startOnTop = input.classList.contains("start");
        }
        needsClamping() {
          if (!this.action) {
            return false;
          }
          const { target, fixed } = this.action;
          const isStart = target === this.inputStart;
          return isStart ? target.valueAsNumber > fixed.valueAsNumber : target.valueAsNumber < fixed.valueAsNumber;
        }
        // if start/end start coincident and the first drag input would e.g. move
        // start > end, avoid clamping and "flip" to use the other input
        // as the action target.
        isActionFlipped() {
          const { action } = this;
          if (!action) {
            return false;
          }
          const { target, fixed, values } = action;
          if (action.canFlip) {
            const coincident = values.get(target) === values.get(fixed);
            if (coincident && this.needsClamping()) {
              action.canFlip = false;
              action.flipped = true;
              action.target = fixed;
              action.fixed = target;
            }
          }
          return action.flipped;
        }
        // when flipped, apply the drag input to the flipped target and reset
        // the actual target.
        flipAction() {
          if (!this.action) {
            return false;
          }
          const { target, fixed, values } = this.action;
          const changed = target.valueAsNumber !== fixed.valueAsNumber;
          target.valueAsNumber = fixed.valueAsNumber;
          fixed.valueAsNumber = values.get(fixed);
          return changed;
        }
        // clamp such that start does not move beyond end and visa versa.
        clampAction() {
          if (!this.needsClamping() || !this.action) {
            return false;
          }
          const { target, fixed } = this.action;
          target.valueAsNumber = fixed.valueAsNumber;
          return true;
        }
        handleInput(event) {
          if (this.isRedispatchingEvent) {
            return;
          }
          let stopPropagation = false;
          let redispatch = false;
          if (this.range) {
            if (this.isActionFlipped()) {
              stopPropagation = true;
              redispatch = this.flipAction();
            }
            if (this.clampAction()) {
              stopPropagation = true;
              redispatch = false;
            }
          }
          const target = event.target;
          this.updateOnTop(target);
          if (this.range) {
            this.valueStart = this.inputStart.valueAsNumber;
            this.valueEnd = this.inputEnd.valueAsNumber;
          } else {
            this.value = this.inputEnd.valueAsNumber;
          }
          if (stopPropagation) {
            event.stopPropagation();
          }
          if (redispatch) {
            this.isRedispatchingEvent = true;
            redispatchEvent(target, event);
            this.isRedispatchingEvent = false;
          }
        }
        handleChange(event) {
          const changeTarget = event.target;
          const { target, values } = this.action ?? {};
          const squelch = target && target.valueAsNumber === values.get(changeTarget);
          if (!squelch) {
            redispatchEvent(this, event);
          }
          this.finishAction(event);
        }
        [getFormValue]() {
          if (this.range) {
            const data = new FormData();
            data.append(this.nameStart, String(this.valueStart));
            data.append(this.nameEnd, String(this.valueEnd));
            return data;
          }
          return String(this.value);
        }
        formResetCallback() {
          if (this.range) {
            const valueStart = this.getAttribute("value-start");
            this.valueStart = valueStart !== null ? Number(valueStart) : void 0;
            const valueEnd = this.getAttribute("value-end");
            this.valueEnd = valueEnd !== null ? Number(valueEnd) : void 0;
            return;
          }
          const value = this.getAttribute("value");
          this.value = value !== null ? Number(value) : void 0;
        }
        formStateRestoreCallback(state) {
          if (Array.isArray(state)) {
            const [[, valueStart], [, valueEnd]] = state;
            this.valueStart = Number(valueStart);
            this.valueEnd = Number(valueEnd);
            this.range = true;
            return;
          }
          this.value = Number(state);
          this.range = false;
        }
      };
      Slider.shadowRootOptions = {
        ...i4.shadowRootOptions,
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Number })
      ], Slider.prototype, "min", void 0);
      __decorate([
        n3({ type: Number })
      ], Slider.prototype, "max", void 0);
      __decorate([
        n3({ type: Number })
      ], Slider.prototype, "value", void 0);
      __decorate([
        n3({ type: Number, attribute: "value-start" })
      ], Slider.prototype, "valueStart", void 0);
      __decorate([
        n3({ type: Number, attribute: "value-end" })
      ], Slider.prototype, "valueEnd", void 0);
      __decorate([
        n3({ attribute: "value-label" })
      ], Slider.prototype, "valueLabel", void 0);
      __decorate([
        n3({ attribute: "value-label-start" })
      ], Slider.prototype, "valueLabelStart", void 0);
      __decorate([
        n3({ attribute: "value-label-end" })
      ], Slider.prototype, "valueLabelEnd", void 0);
      __decorate([
        n3({ attribute: "aria-label-start" })
      ], Slider.prototype, "ariaLabelStart", void 0);
      __decorate([
        n3({ attribute: "aria-valuetext-start" })
      ], Slider.prototype, "ariaValueTextStart", void 0);
      __decorate([
        n3({ attribute: "aria-label-end" })
      ], Slider.prototype, "ariaLabelEnd", void 0);
      __decorate([
        n3({ attribute: "aria-valuetext-end" })
      ], Slider.prototype, "ariaValueTextEnd", void 0);
      __decorate([
        n3({ type: Number })
      ], Slider.prototype, "step", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Slider.prototype, "ticks", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Slider.prototype, "labeled", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Slider.prototype, "range", void 0);
      __decorate([
        e4("input.start")
      ], Slider.prototype, "inputStart", void 0);
      __decorate([
        e4(".handle.start")
      ], Slider.prototype, "handleStart", void 0);
      __decorate([
        r6("md-ripple.start")
      ], Slider.prototype, "rippleStart", void 0);
      __decorate([
        e4("input.end")
      ], Slider.prototype, "inputEnd", void 0);
      __decorate([
        e4(".handle.end")
      ], Slider.prototype, "handleEnd", void 0);
      __decorate([
        r6("md-ripple.end")
      ], Slider.prototype, "rippleEnd", void 0);
      __decorate([
        r4()
      ], Slider.prototype, "handleStartHover", void 0);
      __decorate([
        r4()
      ], Slider.prototype, "handleEndHover", void 0);
      __decorate([
        r4()
      ], Slider.prototype, "startOnTop", void 0);
      __decorate([
        r4()
      ], Slider.prototype, "handlesOverlapping", void 0);
      __decorate([
        r4()
      ], Slider.prototype, "renderValueStart", void 0);
      __decorate([
        r4()
      ], Slider.prototype, "renderValueEnd", void 0);
    }
  });

  // node_modules/@material/web/slider/internal/slider-styles.cssresult.js
  var styles49, slider_styles_cssresult_default;
  var init_slider_styles_cssresult = __esm({
    "node_modules/@material/web/slider/internal/slider-styles.cssresult.js"() {
      init_lit();
      styles49 = i`:host{--_active-track-color: var(--md-slider-active-track-color, var(--md-sys-color-primary, #6750a4));--_active-track-height: var(--md-slider-active-track-height, 4px);--_active-track-shape: var(--md-slider-active-track-shape, var(--md-sys-shape-corner-full, 9999px));--_disabled-active-track-color: var(--md-slider-disabled-active-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-track-opacity: var(--md-slider-disabled-active-track-opacity, 0.38);--_disabled-handle-color: var(--md-slider-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-handle-elevation: var(--md-slider-disabled-handle-elevation, 0);--_disabled-inactive-track-color: var(--md-slider-disabled-inactive-track-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-inactive-track-opacity: var(--md-slider-disabled-inactive-track-opacity, 0.12);--_focus-handle-color: var(--md-slider-focus-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-color: var(--md-slider-handle-color, var(--md-sys-color-primary, #6750a4));--_handle-elevation: var(--md-slider-handle-elevation, 1);--_handle-height: var(--md-slider-handle-height, 20px);--_handle-shadow-color: var(--md-slider-handle-shadow-color, var(--md-sys-color-shadow, #000));--_handle-shape: var(--md-slider-handle-shape, var(--md-sys-shape-corner-full, 9999px));--_handle-width: var(--md-slider-handle-width, 20px);--_hover-handle-color: var(--md-slider-hover-handle-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-color: var(--md-slider-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_hover-state-layer-opacity: var(--md-slider-hover-state-layer-opacity, 0.08);--_inactive-track-color: var(--md-slider-inactive-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_inactive-track-height: var(--md-slider-inactive-track-height, 4px);--_inactive-track-shape: var(--md-slider-inactive-track-shape, var(--md-sys-shape-corner-full, 9999px));--_label-container-color: var(--md-slider-label-container-color, var(--md-sys-color-primary, #6750a4));--_label-container-height: var(--md-slider-label-container-height, 28px);--_pressed-handle-color: var(--md-slider-pressed-handle-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-color: var(--md-slider-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-slider-pressed-state-layer-opacity, 0.12);--_state-layer-size: var(--md-slider-state-layer-size, 40px);--_with-overlap-handle-outline-color: var(--md-slider-with-overlap-handle-outline-color, var(--md-sys-color-on-primary, #fff));--_with-overlap-handle-outline-width: var(--md-slider-with-overlap-handle-outline-width, 1px);--_with-tick-marks-active-container-color: var(--md-slider-with-tick-marks-active-container-color, var(--md-sys-color-on-primary, #fff));--_with-tick-marks-container-size: var(--md-slider-with-tick-marks-container-size, 2px);--_with-tick-marks-disabled-container-color: var(--md-slider-with-tick-marks-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_with-tick-marks-inactive-container-color: var(--md-slider-with-tick-marks-inactive-container-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-color: var(--md-slider-label-text-color, var(--md-sys-color-on-primary, #fff));--_label-text-font: var(--md-slider-label-text-font, var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-slider-label-text-line-height, var(--md-sys-typescale-label-medium-line-height, 1rem));--_label-text-size: var(--md-slider-label-text-size, var(--md-sys-typescale-label-medium-size, 0.75rem));--_label-text-weight: var(--md-slider-label-text-weight, var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)));--_start-fraction: 0;--_end-fraction: 0;--_tick-count: 0;display:inline-flex;vertical-align:middle;min-inline-size:200px;--md-elevation-level: var(--_handle-elevation);--md-elevation-shadow-color: var(--_handle-shadow-color)}md-focus-ring{height:48px;inset:unset;width:48px}md-elevation{transition-duration:250ms}@media(prefers-reduced-motion){.label{transition-duration:0}}:host([disabled]){opacity:var(--_disabled-active-track-opacity);--md-elevation-level: var(--_disabled-handle-elevation)}.container{flex:1;display:flex;align-items:center;position:relative;block-size:var(--_state-layer-size);pointer-events:none;touch-action:none;user-select:none}.track,.tickmarks{position:absolute;inset:0;display:flex;align-items:center}.track::before,.tickmarks::before,.track::after,.tickmarks::after{position:absolute;content:"";inset-inline-start:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));inset-inline-end:calc(var(--_state-layer-size)/2 - var(--_with-tick-marks-container-size));background-size:calc((100% - var(--_with-tick-marks-container-size)*2)/var(--_tick-count)) 100%}.track::before,.tickmarks::before{block-size:var(--_inactive-track-height);border-radius:var(--_inactive-track-shape)}.track::before{background:var(--_inactive-track-color)}.tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-inactive-container-color) 0, var(--_with-tick-marks-inactive-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}:host([disabled]) .track::before{opacity:calc(1/var(--_disabled-active-track-opacity)*var(--_disabled-inactive-track-opacity));background:var(--_disabled-inactive-track-color)}.track::after,.tickmarks::after{block-size:var(--_active-track-height);border-radius:var(--_active-track-shape);clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))) 0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)))}.track::after{background:var(--_active-track-color)}.tickmarks::after{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-active-container-color) 0, var(--_with-tick-marks-active-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.track:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}.tickmarks:dir(rtl)::after{clip-path:inset(0 calc(var(--_with-tick-marks-container-size) * min(var(--_start-fraction) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * var(--_start-fraction)) 0 calc(var(--_with-tick-marks-container-size) * min((1 - var(--_end-fraction)) * 1000000000, 1) + (100% - var(--_with-tick-marks-container-size) * 2) * (1 - var(--_end-fraction))))}:host([disabled]) .track::after{background:var(--_disabled-active-track-color)}:host([disabled]) .tickmarks::before{background-image:radial-gradient(circle at var(--_with-tick-marks-container-size) center, var(--_with-tick-marks-disabled-container-color) 0, var(--_with-tick-marks-disabled-container-color) calc(var(--_with-tick-marks-container-size) / 2), transparent calc(var(--_with-tick-marks-container-size) / 2))}.handleContainerPadded{position:relative;block-size:100%;inline-size:100%;padding-inline:calc(var(--_state-layer-size)/2)}.handleContainerBlock{position:relative;block-size:100%;inline-size:100%}.handleContainer{position:absolute;inset-block-start:0;inset-block-end:0;inset-inline-start:calc(100%*var(--_start-fraction));inline-size:calc(100%*(var(--_end-fraction) - var(--_start-fraction)))}.handle{position:absolute;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);border-radius:var(--_handle-shape);display:flex;place-content:center;place-items:center}.handleNub{position:absolute;height:var(--_handle-height);width:var(--_handle-width);border-radius:var(--_handle-shape);background:var(--_handle-color)}:host([disabled]) .handleNub{background:var(--_disabled-handle-color)}input.end:focus~.handleContainerPadded .handle.end>.handleNub,input.start:focus~.handleContainerPadded .handle.start>.handleNub{background:var(--_focus-handle-color)}.container>.handleContainerPadded .handle.hover>.handleNub{background:var(--_hover-handle-color)}:host(:not([disabled])) input.end:active~.handleContainerPadded .handle.end>.handleNub,:host(:not([disabled])) input.start:active~.handleContainerPadded .handle.start>.handleNub{background:var(--_pressed-handle-color)}.onTop.isOverlapping .label,.onTop.isOverlapping .label::before{outline:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.onTop.isOverlapping .handleNub{border:var(--_with-overlap-handle-outline-color) solid var(--_with-overlap-handle-outline-width)}.handle.start{inset-inline-start:calc(0px - var(--_state-layer-size)/2)}.handle.end{inset-inline-end:calc(0px - var(--_state-layer-size)/2)}.label{position:absolute;box-sizing:border-box;display:flex;padding:4px;place-content:center;place-items:center;border-radius:var(--md-sys-shape-corner-full, 9999px);color:var(--_label-text-color);font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);inset-block-end:100%;min-inline-size:var(--_label-container-height);min-block-size:var(--_label-container-height);background:var(--_label-container-color);transition:transform 100ms cubic-bezier(0.2, 0, 0, 1);transform-origin:center bottom;transform:scale(0)}:host(:focus-within) .label,.handleContainer.hover .label,:where(:has(input:active)) .label{transform:scale(1)}.label::before,.label::after{position:absolute;display:block;content:"";background:inherit}.label::before{inline-size:calc(var(--_label-container-height)/2);block-size:calc(var(--_label-container-height)/2);bottom:calc(var(--_label-container-height)/-10);transform:rotate(45deg)}.label::after{inset:0px;border-radius:inherit}.labelContent{z-index:1}input[type=range]{opacity:0;-webkit-tap-highlight-color:rgba(0,0,0,0);position:absolute;box-sizing:border-box;height:100%;width:100%;margin:0;background:rgba(0,0,0,0);cursor:pointer;pointer-events:auto;appearance:none}input[type=range]:focus{outline:none}::-webkit-slider-runnable-track{-webkit-appearance:none}::-moz-range-track{appearance:none}::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;block-size:var(--_handle-height);inline-size:var(--_handle-width);opacity:0;z-index:2}input.end::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_end-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.end:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}input.start::-webkit-slider-thumb{--_track-and-knob-padding: calc( (var(--_state-layer-size) - var(--_handle-width)) / 2 );--_x-translate: calc( var(--_track-and-knob-padding) - 2 * var(--_start-fraction) * var(--_track-and-knob-padding) );transform:translateX(var(--_x-translate))}input.start:dir(rtl)::-webkit-slider-thumb{transform:translateX(calc(-1 * var(--_x-translate)))}::-moz-range-thumb{appearance:none;block-size:var(--_state-layer-size);inline-size:var(--_state-layer-size);transform:scaleX(0);opacity:0;z-index:2}.ranged input.start{clip-path:inset(0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))) 0 0)}.ranged input.start:dir(rtl){clip-path:inset(0 0 0 calc(100% - (var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2))))}.ranged input.end{clip-path:inset(0 0 0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)))}.ranged input.end:dir(rtl){clip-path:inset(0 calc(var(--_state-layer-size) / 2 + (100% - var(--_state-layer-size)) * (var(--_start-fraction) + (var(--_end-fraction) - var(--_start-fraction)) / 2)) 0 0)}.onTop{z-index:1}.handle{--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity)}md-ripple{border-radius:50%;height:var(--_state-layer-size);width:var(--_state-layer-size)}
`;
      slider_styles_cssresult_default = styles49.styleSheet;
    }
  });

  // node_modules/@material/web/slider/slider.js
  var MdSlider;
  var init_slider2 = __esm({
    "node_modules/@material/web/slider/slider.js"() {
      init_tslib_es6();
      init_decorators();
      init_forced_colors_styles_cssresult2();
      init_slider();
      init_slider_styles_cssresult();
      MdSlider = class MdSlider2 extends Slider {
      };
      MdSlider.styles = [styles49, styles48];
      MdSlider = __decorate([
        t("md-slider")
      ], MdSlider);
    }
  });

  // node_modules/@material/web/switch/internal/switch.js
  var switchBaseClass, Switch;
  var init_switch = __esm({
    "node_modules/@material/web/switch/internal/switch.js"() {
      init_tslib_es6();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_delegate();
      init_dispatch_hooks();
      init_form_label_activation();
      init_redispatch_event();
      init_constraint_validation();
      init_element_internals();
      init_form_associated();
      init_checkbox_validator();
      switchBaseClass = mixinDelegatesAria(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(i4))));
      Switch = class extends switchBaseClass {
        constructor() {
          super();
          this.selected = false;
          this.icons = false;
          this.showOnlySelectedIcon = false;
          this.required = false;
          this.value = "on";
          if (o7) {
            return;
          }
          this.addEventListener("click", (event) => {
            if (!isActivationClick(event) || !this.input) {
              return;
            }
            this.focus();
            dispatchActivationClick(this.input);
          });
          setupDispatchHooks(this, "keydown");
          this.addEventListener("keydown", (event) => {
            afterDispatch(event, () => {
              const ignoreEvent = event.defaultPrevented || event.key !== "Enter";
              if (ignoreEvent || this.disabled || !this.input) {
                return;
              }
              this.input.click();
            });
          });
        }
        render() {
          return b2`
      <div class="switch ${e8(this.getRenderClasses())}">
        <input
          id="switch"
          class="touch"
          type="checkbox"
          role="switch"
          aria-label=${this.ariaLabel || A}
          ?checked=${this.selected}
          ?disabled=${this.disabled}
          ?required=${this.required}
          @input=${this.handleInput}
          @change=${this.handleChange} />

        <md-focus-ring part="focus-ring" for="switch"></md-focus-ring>
        <span class="track"> ${this.renderHandle()} </span>
      </div>
    `;
        }
        getRenderClasses() {
          return {
            "selected": this.selected,
            "unselected": !this.selected,
            "disabled": this.disabled
          };
        }
        renderHandle() {
          const classes = {
            "with-icon": this.showOnlySelectedIcon ? this.selected : this.icons
          };
          return b2`
      ${this.renderTouchTarget()}
      <span class="handle-container">
        <md-ripple for="switch" ?disabled="${this.disabled}"></md-ripple>
        <span class="handle ${e8(classes)}">
          ${this.shouldShowIcons() ? this.renderIcons() : b2``}
        </span>
      </span>
    `;
        }
        renderIcons() {
          return b2`
      <div class="icons">
        ${this.renderOnIcon()}
        ${this.showOnlySelectedIcon ? b2`` : this.renderOffIcon()}
      </div>
    `;
        }
        /**
         * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Acheck%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
         */
        renderOnIcon() {
          return b2`
      <slot class="icon icon--on" name="on-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M9.55 18.2 3.65 12.3 5.275 10.675 9.55 14.95 18.725 5.775 20.35 7.4Z" />
        </svg>
      </slot>
    `;
        }
        /**
         * https://fonts.google.com/icons?selected=Material%20Symbols%20Outlined%3Aclose%3AFILL%400%3Bwght%40500%3BGRAD%400%3Bopsz%4024
         */
        renderOffIcon() {
          return b2`
      <slot class="icon icon--off" name="off-icon">
        <svg viewBox="0 0 24 24">
          <path
            d="M6.4 19.2 4.8 17.6 10.4 12 4.8 6.4 6.4 4.8 12 10.4 17.6 4.8 19.2 6.4 13.6 12 19.2 17.6 17.6 19.2 12 13.6Z" />
        </svg>
      </slot>
    `;
        }
        renderTouchTarget() {
          return b2`<span class="touch"></span>`;
        }
        shouldShowIcons() {
          return this.icons || this.showOnlySelectedIcon;
        }
        handleInput(event) {
          const target = event.target;
          this.selected = target.checked;
        }
        handleChange(event) {
          redispatchEvent(this, event);
        }
        [getFormValue]() {
          return this.selected ? this.value : null;
        }
        [getFormState]() {
          return String(this.selected);
        }
        formResetCallback() {
          this.selected = this.hasAttribute("selected");
        }
        formStateRestoreCallback(state) {
          this.selected = state === "true";
        }
        [createValidator]() {
          return new CheckboxValidator(() => ({
            checked: this.selected,
            required: this.required
          }));
        }
        [getValidityAnchor]() {
          return this.input;
        }
      };
      Switch.shadowRootOptions = {
        mode: "open",
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean })
      ], Switch.prototype, "selected", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Switch.prototype, "icons", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "show-only-selected-icon" })
      ], Switch.prototype, "showOnlySelectedIcon", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Switch.prototype, "required", void 0);
      __decorate([
        n3()
      ], Switch.prototype, "value", void 0);
      __decorate([
        e4("input")
      ], Switch.prototype, "input", void 0);
    }
  });

  // node_modules/@material/web/switch/internal/switch-styles.cssresult.js
  var styles50, switch_styles_cssresult_default;
  var init_switch_styles_cssresult = __esm({
    "node_modules/@material/web/switch/internal/switch-styles.cssresult.js"() {
      init_lit();
      styles50 = i`@layer styles, hcm;@layer styles{:host{display:inline-flex;outline:none;vertical-align:top;-webkit-tap-highlight-color:rgba(0,0,0,0);cursor:pointer}:host([disabled]){cursor:default}:host([touch-target=wrapper]){margin:max(0px,(48px - var(--md-switch-track-height, 32px))/2) 0px}md-focus-ring{--md-focus-ring-shape-start-start: var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-start-end: var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-end: var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));--md-focus-ring-shape-end-start: var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}.switch{align-items:center;display:inline-flex;flex-shrink:0;position:relative;width:var(--md-switch-track-width, 52px);height:var(--md-switch-track-height, 32px);border-start-start-radius:var(--md-switch-track-shape-start-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-track-shape-start-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-track-shape-end-end, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-track-shape-end-start, var(--md-switch-track-shape, var(--md-sys-shape-corner-full, 9999px)))}input{appearance:none;background:none;height:max(100%,var(--md-switch-touch-target-size, 48px));outline:none;margin:0;position:absolute;width:max(100%,var(--md-switch-touch-target-size, 48px));z-index:1;cursor:inherit;top:50%;left:50%;transform:translate(-50%, -50%)}:host([touch-target=none]) input{display:none}}@layer styles{.track{position:absolute;width:100%;height:100%;box-sizing:border-box;border-radius:inherit;display:flex;justify-content:center;align-items:center}.track::before{content:"";display:flex;position:absolute;height:100%;width:100%;border-radius:inherit;box-sizing:border-box;transition-property:opacity,background-color;transition-timing-function:linear;transition-duration:67ms}.disabled .track{background-color:rgba(0,0,0,0);border-color:rgba(0,0,0,0)}.disabled .track::before,.disabled .track::after{transition:none;opacity:var(--md-switch-disabled-track-opacity, 0.12)}.disabled .track::before{background-clip:content-box}.selected .track::before{background-color:var(--md-switch-selected-track-color, var(--md-sys-color-primary, #6750a4))}.selected:hover .track::before{background-color:var(--md-switch-selected-hover-track-color, var(--md-sys-color-primary, #6750a4))}.selected:focus-within .track::before{background-color:var(--md-switch-selected-focus-track-color, var(--md-sys-color-primary, #6750a4))}.selected:active .track::before{background-color:var(--md-switch-selected-pressed-track-color, var(--md-sys-color-primary, #6750a4))}.selected.disabled .track{background-clip:border-box}.selected.disabled .track::before{background-color:var(--md-switch-disabled-selected-track-color, var(--md-sys-color-on-surface, #1d1b20))}.unselected .track::before{background-color:var(--md-switch-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-track-outline-color, var(--md-sys-color-outline, #79747e));border-style:solid;border-width:var(--md-switch-track-outline-width, 2px)}.unselected:hover .track::before{background-color:var(--md-switch-hover-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-hover-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:focus-visible .track::before{background-color:var(--md-switch-focus-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-focus-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected:active .track::before{background-color:var(--md-switch-pressed-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-pressed-track-outline-color, var(--md-sys-color-outline, #79747e))}.unselected.disabled .track::before{background-color:var(--md-switch-disabled-track-color, var(--md-sys-color-surface-container-highest, #e6e0e9));border-color:var(--md-switch-disabled-track-outline-color, var(--md-sys-color-on-surface, #1d1b20))}}@layer hcm{@media(forced-colors: active){.selected .track::before{background:ButtonText;border-color:ButtonText}.disabled .track::before{border-color:GrayText;opacity:1}.disabled.selected .track::before{background:GrayText}}}@layer styles{.handle-container{display:flex;place-content:center;place-items:center;position:relative;transition:margin 300ms cubic-bezier(0.175, 0.885, 0.32, 1.275)}.selected .handle-container{margin-inline-start:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.unselected .handle-container{margin-inline-end:calc(var(--md-switch-track-width, 52px) - var(--md-switch-track-height, 32px))}.disabled .handle-container{transition:none}.handle{border-start-start-radius:var(--md-switch-handle-shape-start-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-start-end-radius:var(--md-switch-handle-shape-start-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-end-radius:var(--md-switch-handle-shape-end-end, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));border-end-start-radius:var(--md-switch-handle-shape-end-start, var(--md-switch-handle-shape, var(--md-sys-shape-corner-full, 9999px)));height:var(--md-switch-handle-height, 16px);width:var(--md-switch-handle-width, 16px);transform-origin:center;transition-property:height,width;transition-duration:250ms,250ms;transition-timing-function:cubic-bezier(0.2, 0, 0, 1),cubic-bezier(0.2, 0, 0, 1);z-index:0}.handle::before{content:"";display:flex;inset:0;position:absolute;border-radius:inherit;box-sizing:border-box;transition:background-color 67ms linear}.disabled .handle,.disabled .handle::before{transition:none}.selected .handle{height:var(--md-switch-selected-handle-height, 24px);width:var(--md-switch-selected-handle-width, 24px)}.handle.with-icon{height:var(--md-switch-with-icon-handle-height, 24px);width:var(--md-switch-with-icon-handle-width, 24px)}.selected:not(.disabled):active .handle,.unselected:not(.disabled):active .handle{height:var(--md-switch-pressed-handle-height, 28px);width:var(--md-switch-pressed-handle-width, 28px);transition-timing-function:linear;transition-duration:100ms}.selected .handle::before{background-color:var(--md-switch-selected-handle-color, var(--md-sys-color-on-primary, #fff))}.selected:hover .handle::before{background-color:var(--md-switch-selected-hover-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:focus-within .handle::before{background-color:var(--md-switch-selected-focus-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected:active .handle::before{background-color:var(--md-switch-selected-pressed-handle-color, var(--md-sys-color-primary-container, #eaddff))}.selected.disabled .handle::before{background-color:var(--md-switch-disabled-selected-handle-color, var(--md-sys-color-surface, #fef7ff));opacity:var(--md-switch-disabled-selected-handle-opacity, 1)}.unselected .handle::before{background-color:var(--md-switch-handle-color, var(--md-sys-color-outline, #79747e))}.unselected:hover .handle::before{background-color:var(--md-switch-hover-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:focus-within .handle::before{background-color:var(--md-switch-focus-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected:active .handle::before{background-color:var(--md-switch-pressed-handle-color, var(--md-sys-color-on-surface-variant, #49454f))}.unselected.disabled .handle::before{background-color:var(--md-switch-disabled-handle-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-handle-opacity, 0.38)}md-ripple{border-radius:var(--md-switch-state-layer-shape, var(--md-sys-shape-corner-full, 9999px));height:var(--md-switch-state-layer-size, 40px);inset:unset;width:var(--md-switch-state-layer-size, 40px)}.selected md-ripple{--md-ripple-hover-color: var(--md-switch-selected-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-pressed-color: var(--md-switch-selected-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--md-ripple-hover-opacity: var(--md-switch-selected-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-selected-pressed-state-layer-opacity, 0.12)}.unselected md-ripple{--md-ripple-hover-color: var(--md-switch-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-pressed-color: var(--md-switch-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--md-ripple-hover-opacity: var(--md-switch-hover-state-layer-opacity, 0.08);--md-ripple-pressed-opacity: var(--md-switch-pressed-state-layer-opacity, 0.12)}}@layer hcm{@media(forced-colors: active){.unselected .handle::before{background:ButtonText}.disabled .handle::before{opacity:1}.disabled.unselected .handle::before{background:GrayText}}}@layer styles{.icons{position:relative;height:100%;width:100%}.icon{position:absolute;inset:0;margin:auto;display:flex;align-items:center;justify-content:center;fill:currentColor;transition:fill 67ms linear,opacity 33ms linear,transform 167ms cubic-bezier(0.2, 0, 0, 1);opacity:0}.disabled .icon{transition:none}.selected .icon--on,.unselected .icon--off{opacity:1}.unselected .handle:not(.with-icon) .icon--on{transform:rotate(-45deg)}.icon--off{width:var(--md-switch-icon-size, 16px);height:var(--md-switch-icon-size, 16px);color:var(--md-switch-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:hover .icon--off{color:var(--md-switch-hover-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:focus-within .icon--off{color:var(--md-switch-focus-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected:active .icon--off{color:var(--md-switch-pressed-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9))}.unselected.disabled .icon--off{color:var(--md-switch-disabled-icon-color, var(--md-sys-color-surface-container-highest, #e6e0e9));opacity:var(--md-switch-disabled-icon-opacity, 0.38)}.icon--on{width:var(--md-switch-selected-icon-size, 16px);height:var(--md-switch-selected-icon-size, 16px);color:var(--md-switch-selected-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:hover .icon--on{color:var(--md-switch-selected-hover-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:focus-within .icon--on{color:var(--md-switch-selected-focus-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected:active .icon--on{color:var(--md-switch-selected-pressed-icon-color, var(--md-sys-color-on-primary-container, #21005d))}.selected.disabled .icon--on{color:var(--md-switch-disabled-selected-icon-color, var(--md-sys-color-on-surface, #1d1b20));opacity:var(--md-switch-disabled-selected-icon-opacity, 0.38)}}@layer hcm{@media(forced-colors: active){.icon--off{fill:Canvas}.icon--on{fill:ButtonText}.disabled.unselected .icon--off,.disabled.selected .icon--on{opacity:1}.disabled .icon--on{fill:GrayText}}}
`;
      switch_styles_cssresult_default = styles50.styleSheet;
    }
  });

  // node_modules/@material/web/switch/switch.js
  var MdSwitch;
  var init_switch2 = __esm({
    "node_modules/@material/web/switch/switch.js"() {
      init_tslib_es6();
      init_decorators();
      init_switch();
      init_switch_styles_cssresult();
      MdSwitch = class MdSwitch2 extends Switch {
      };
      MdSwitch.styles = [styles50];
      MdSwitch = __decorate([
        t("md-switch")
      ], MdSwitch);
    }
  });

  // node_modules/@material/web/tabs/internal/tab.js
  function shouldReduceMotion() {
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }
  var ANIMATE_INDICATOR, tabBaseClass, Tab;
  var init_tab = __esm({
    "node_modules/@material/web/tabs/internal/tab.js"() {
      init_tslib_es6();
      init_elevation2();
      init_md_focus_ring();
      init_ripple2();
      init_lit();
      init_decorators();
      init_class_map2();
      init_animation();
      init_focusable();
      ANIMATE_INDICATOR = /* @__PURE__ */ Symbol("animateIndicator");
      tabBaseClass = mixinFocusable(i4);
      Tab = class extends tabBaseClass {
        /**
         * @deprecated use `active`
         */
        get selected() {
          return this.active;
        }
        set selected(active) {
          this.active = active;
        }
        constructor() {
          super();
          this.isTab = true;
          this.active = false;
          this.hasIcon = false;
          this.iconOnly = false;
          this.fullWidthIndicator = false;
          this.internals = // Cast needed for closure
          this.attachInternals();
          if (!o7) {
            this.internals.role = "tab";
            this.addEventListener("keydown", this.handleKeydown.bind(this));
          }
        }
        render() {
          const indicator = b2`<div class="indicator"></div>`;
          return b2`<div
      class="button"
      role="presentation"
      @click=${this.handleContentClick}>
      <md-focus-ring part="focus-ring" inward .control=${this}></md-focus-ring>
      <md-elevation part="elevation"></md-elevation>
      <md-ripple .control=${this}></md-ripple>
      <div
        class="content ${e8(this.getContentClasses())}"
        role="presentation">
        <slot name="icon" @slotchange=${this.handleIconSlotChange}></slot>
        <slot @slotchange=${this.handleSlotChange}></slot>
        ${this.fullWidthIndicator ? A : indicator}
      </div>
      ${this.fullWidthIndicator ? indicator : A}
    </div>`;
        }
        getContentClasses() {
          return {
            "has-icon": this.hasIcon,
            "has-label": !this.iconOnly
          };
        }
        updated() {
          this.internals.ariaSelected = String(this.active);
        }
        async handleKeydown(event) {
          await 0;
          if (event.defaultPrevented) {
            return;
          }
          if (event.key === "Enter" || event.key === " ") {
            event.preventDefault();
            this.click();
          }
        }
        handleContentClick(event) {
          event.stopPropagation();
          this.click();
        }
        [ANIMATE_INDICATOR](previousTab) {
          if (!this.indicator) {
            return;
          }
          this.indicator.getAnimations().forEach((a4) => {
            a4.cancel();
          });
          const frames = this.getKeyframes(previousTab);
          if (frames !== null) {
            this.indicator.animate(frames, {
              duration: 250,
              easing: EASING.EMPHASIZED
            });
          }
        }
        getKeyframes(previousTab) {
          const reduceMotion = shouldReduceMotion();
          if (!this.active) {
            return reduceMotion ? [{ "opacity": 1 }, { "transform": "none" }] : null;
          }
          const from = {};
          const fromRect = previousTab.indicator?.getBoundingClientRect() ?? {};
          const fromPos = fromRect.left;
          const fromExtent = fromRect.width;
          const toRect = this.indicator.getBoundingClientRect();
          const toPos = toRect.left;
          const toExtent = toRect.width;
          const scale = fromExtent / toExtent;
          if (!reduceMotion && fromPos !== void 0 && toPos !== void 0 && !isNaN(scale)) {
            from["transform"] = `translateX(${(fromPos - toPos).toFixed(4)}px) scaleX(${scale.toFixed(4)})`;
          } else {
            from["opacity"] = 0;
          }
          return [from, { "transform": "none" }];
        }
        handleSlotChange() {
          this.iconOnly = false;
          for (const node of this.assignedDefaultNodes) {
            const hasTextContent = node.nodeType === Node.TEXT_NODE && !!node.wholeText.match(/\S/);
            if (node.nodeType === Node.ELEMENT_NODE || hasTextContent) {
              return;
            }
          }
          this.iconOnly = true;
        }
        handleIconSlotChange() {
          this.hasIcon = this.assignedIcons.length > 0;
        }
      };
      __decorate([
        n3({ type: Boolean, reflect: true, attribute: "md-tab" })
      ], Tab.prototype, "isTab", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], Tab.prototype, "active", void 0);
      __decorate([
        n3({ type: Boolean })
      ], Tab.prototype, "selected", null);
      __decorate([
        n3({ type: Boolean, attribute: "has-icon" })
      ], Tab.prototype, "hasIcon", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "icon-only" })
      ], Tab.prototype, "iconOnly", void 0);
      __decorate([
        e4(".indicator")
      ], Tab.prototype, "indicator", void 0);
      __decorate([
        r4()
      ], Tab.prototype, "fullWidthIndicator", void 0);
      __decorate([
        n4({ flatten: true })
      ], Tab.prototype, "assignedDefaultNodes", void 0);
      __decorate([
        o4({ slot: "icon", flatten: true })
      ], Tab.prototype, "assignedIcons", void 0);
    }
  });

  // node_modules/@material/web/tabs/internal/primary-tab.js
  var PrimaryTab;
  var init_primary_tab = __esm({
    "node_modules/@material/web/tabs/internal/primary-tab.js"() {
      init_tslib_es6();
      init_decorators();
      init_tab();
      PrimaryTab = class extends Tab {
        constructor() {
          super(...arguments);
          this.inlineIcon = false;
        }
        getContentClasses() {
          return {
            ...super.getContentClasses(),
            "stacked": !this.inlineIcon
          };
        }
      };
      __decorate([
        n3({ type: Boolean, attribute: "inline-icon" })
      ], PrimaryTab.prototype, "inlineIcon", void 0);
    }
  });

  // node_modules/@material/web/tabs/internal/primary-tab-styles.cssresult.js
  var styles51, primary_tab_styles_cssresult_default;
  var init_primary_tab_styles_cssresult = __esm({
    "node_modules/@material/web/tabs/internal/primary-tab-styles.cssresult.js"() {
      init_lit();
      styles51 = i`:host{--_active-indicator-color: var(--md-primary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-primary-tab-active-indicator-height, 3px);--_active-indicator-shape: var(--md-primary-tab-active-indicator-shape, 3px 3px 0px 0px);--_active-hover-state-layer-color: var(--md-primary-tab-active-hover-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-hover-state-layer-opacity: var(--md-primary-tab-active-hover-state-layer-opacity, 0.08);--_active-pressed-state-layer-color: var(--md-primary-tab-active-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-state-layer-opacity: var(--md-primary-tab-active-pressed-state-layer-opacity, 0.12);--_container-color: var(--md-primary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-primary-tab-container-elevation, 0);--_container-height: var(--md-primary-tab-container-height, 48px);--_with-icon-and-label-text-container-height: var(--md-primary-tab-with-icon-and-label-text-container-height, 64px);--_hover-state-layer-color: var(--md-primary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-primary-tab-hover-state-layer-opacity, 0.08);--_pressed-state-layer-color: var(--md-primary-tab-pressed-state-layer-color, var(--md-sys-color-primary, #6750a4));--_pressed-state-layer-opacity: var(--md-primary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-primary-tab-active-focus-icon-color, var(--md-sys-color-primary, #6750a4));--_active-hover-icon-color: var(--md-primary-tab-active-hover-icon-color, var(--md-sys-color-primary, #6750a4));--_active-icon-color: var(--md-primary-tab-active-icon-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-icon-color: var(--md-primary-tab-active-pressed-icon-color, var(--md-sys-color-primary, #6750a4));--_icon-size: var(--md-primary-tab-icon-size, 24px);--_focus-icon-color: var(--md-primary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-primary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-color: var(--md-primary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-primary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-font: var(--md-primary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-primary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-primary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-primary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_active-focus-label-text-color: var(--md-primary-tab-active-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-hover-label-text-color: var(--md-primary-tab-active-hover-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-label-text-color: var(--md-primary-tab-active-label-text-color, var(--md-sys-color-primary, #6750a4));--_active-pressed-label-text-color: var(--md-primary-tab-active-pressed-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-label-text-color: var(--md-primary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-primary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_label-text-color: var(--md-primary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-label-text-color: var(--md-primary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-primary-tab-container-shape-start-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-primary-tab-container-shape-start-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-primary-tab-container-shape-end-end, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-primary-tab-container-shape-end-start, var(--md-primary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}.content.stacked{flex-direction:column;gap:2px}.content.stacked.has-icon.has-label{height:var(--_with-icon-and-label-text-container-height)}
`;
      primary_tab_styles_cssresult_default = styles51.styleSheet;
    }
  });

  // node_modules/@material/web/tabs/internal/tab-styles.cssresult.js
  var styles52, tab_styles_cssresult_default;
  var init_tab_styles_cssresult = __esm({
    "node_modules/@material/web/tabs/internal/tab-styles.cssresult.js"() {
      init_lit();
      styles52 = i`:host{display:inline-flex;align-items:center;justify-content:center;outline:none;padding:0 16px;position:relative;-webkit-tap-highlight-color:rgba(0,0,0,0);vertical-align:middle;user-select:none;font-family:var(--_label-text-font);font-size:var(--_label-text-size);line-height:var(--_label-text-line-height);font-weight:var(--_label-text-weight);color:var(--_label-text-color);z-index:0;--md-ripple-hover-color: var(--_hover-state-layer-color);--md-ripple-hover-opacity: var(--_hover-state-layer-opacity);--md-ripple-pressed-color: var(--_pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_pressed-state-layer-opacity);--md-elevation-level: var(--_container-elevation)}md-focus-ring{--md-focus-ring-shape: 8px}:host([active]) md-focus-ring{margin-bottom:calc(var(--_active-indicator-height) + 1px)}.button::before{background:var(--_container-color);content:"";inset:0;position:absolute;z-index:-1}.button::before,md-ripple,md-elevation{border-start-start-radius:var(--_container-shape-start-start);border-start-end-radius:var(--_container-shape-start-end);border-end-end-radius:var(--_container-shape-end-end);border-end-start-radius:var(--_container-shape-end-start)}.content{position:relative;box-sizing:border-box;display:inline-flex;flex-direction:row;align-items:center;justify-content:center;height:var(--_container-height);gap:8px}.indicator{position:absolute;box-sizing:border-box;z-index:-1;transform-origin:bottom left;background:var(--_active-indicator-color);border-radius:var(--_active-indicator-shape);height:var(--_active-indicator-height);inset:auto 0 0 0;opacity:0}::slotted([slot=icon]){display:inline-flex;position:relative;writing-mode:horizontal-tb;fill:currentColor;color:var(--_icon-color);font-size:var(--_icon-size);width:var(--_icon-size);height:var(--_icon-size)}:host(:hover){color:var(--_hover-label-text-color);cursor:pointer}:host(:hover) ::slotted([slot=icon]){color:var(--_hover-icon-color)}:host(:focus){color:var(--_focus-label-text-color)}:host(:focus) ::slotted([slot=icon]){color:var(--_focus-icon-color)}:host(:active){color:var(--_pressed-label-text-color)}:host(:active) ::slotted([slot=icon]){color:var(--_pressed-icon-color)}:host([active]) .indicator{opacity:1}:host([active]){color:var(--_active-label-text-color);--md-ripple-hover-color: var(--_active-hover-state-layer-color);--md-ripple-hover-opacity: var(--_active-hover-state-layer-opacity);--md-ripple-pressed-color: var(--_active-pressed-state-layer-color);--md-ripple-pressed-opacity: var(--_active-pressed-state-layer-opacity)}:host([active]) ::slotted([slot=icon]){color:var(--_active-icon-color)}:host([active]:hover){color:var(--_active-hover-label-text-color)}:host([active]:hover) ::slotted([slot=icon]){color:var(--_active-hover-icon-color)}:host([active]:focus){color:var(--_active-focus-label-text-color)}:host([active]:focus) ::slotted([slot=icon]){color:var(--_active-focus-icon-color)}:host([active]:active){color:var(--_active-pressed-label-text-color)}:host([active]:active) ::slotted([slot=icon]){color:var(--_active-pressed-icon-color)}:host,::slotted(*){white-space:nowrap}@media(forced-colors: active){.indicator{background:CanvasText}}
`;
      tab_styles_cssresult_default = styles52.styleSheet;
    }
  });

  // node_modules/@material/web/tabs/primary-tab.js
  var MdPrimaryTab;
  var init_primary_tab2 = __esm({
    "node_modules/@material/web/tabs/primary-tab.js"() {
      init_tslib_es6();
      init_decorators();
      init_primary_tab();
      init_primary_tab_styles_cssresult();
      init_tab_styles_cssresult();
      MdPrimaryTab = class MdPrimaryTab2 extends PrimaryTab {
      };
      MdPrimaryTab.styles = [styles52, styles51];
      MdPrimaryTab = __decorate([
        t("md-primary-tab")
      ], MdPrimaryTab);
    }
  });

  // node_modules/@material/web/tabs/internal/secondary-tab.js
  var SecondaryTab;
  var init_secondary_tab = __esm({
    "node_modules/@material/web/tabs/internal/secondary-tab.js"() {
      init_tab();
      SecondaryTab = class extends Tab {
        constructor() {
          super(...arguments);
          this.fullWidthIndicator = true;
        }
      };
    }
  });

  // node_modules/@material/web/tabs/internal/secondary-tab-styles.cssresult.js
  var styles53, secondary_tab_styles_cssresult_default;
  var init_secondary_tab_styles_cssresult = __esm({
    "node_modules/@material/web/tabs/internal/secondary-tab-styles.cssresult.js"() {
      init_lit();
      styles53 = i`:host{--_active-indicator-color: var(--md-secondary-tab-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_active-indicator-height: var(--md-secondary-tab-active-indicator-height, 2px);--_active-label-text-color: var(--md-secondary-tab-active-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_container-color: var(--md-secondary-tab-container-color, var(--md-sys-color-surface, #fef7ff));--_container-elevation: var(--md-secondary-tab-container-elevation, 0);--_container-height: var(--md-secondary-tab-container-height, 48px);--_focus-label-text-color: var(--md-secondary-tab-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-secondary-tab-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-color: var(--md-secondary-tab-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-secondary-tab-hover-state-layer-opacity, 0.08);--_label-text-font: var(--md-secondary-tab-label-text-font, var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-secondary-tab-label-text-line-height, var(--md-sys-typescale-title-small-line-height, 1.25rem));--_label-text-size: var(--md-secondary-tab-label-text-size, var(--md-sys-typescale-title-small-size, 0.875rem));--_label-text-weight: var(--md-secondary-tab-label-text-weight, var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)));--_pressed-label-text-color: var(--md-secondary-tab-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-color: var(--md-secondary-tab-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_pressed-state-layer-opacity: var(--md-secondary-tab-pressed-state-layer-opacity, 0.12);--_active-focus-icon-color: var(--md-secondary-tab-active-focus-icon-color, );--_active-focus-label-text-color: var(--md-secondary-tab-active-focus-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-icon-color: var(--md-secondary-tab-active-hover-icon-color, );--_active-hover-label-text-color: var(--md-secondary-tab-active-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-color: var(--md-secondary-tab-active-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-hover-state-layer-opacity: var(--md-secondary-tab-active-hover-state-layer-opacity, 0.08);--_active-icon-color: var(--md-secondary-tab-active-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_active-indicator-shape: var(--md-secondary-tab-active-indicator-shape, 0);--_active-pressed-icon-color: var(--md-secondary-tab-active-pressed-icon-color, );--_active-pressed-label-text-color: var(--md-secondary-tab-active-pressed-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-color: var(--md-secondary-tab-active-pressed-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_active-pressed-state-layer-opacity: var(--md-secondary-tab-active-pressed-state-layer-opacity, 0.12);--_label-text-color: var(--md-secondary-tab-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-icon-color: var(--md-secondary-tab-focus-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-icon-color: var(--md-secondary-tab-hover-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_icon-size: var(--md-secondary-tab-icon-size, 24px);--_icon-color: var(--md-secondary-tab-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_pressed-icon-color: var(--md-secondary-tab-pressed-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_container-shape-start-start: var(--md-secondary-tab-container-shape-start-start, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-start-end: var(--md-secondary-tab-container-shape-start-end, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-end: var(--md-secondary-tab-container-shape-end-end, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-secondary-tab-container-shape-end-start, var(--md-secondary-tab-container-shape, var(--md-sys-shape-corner-none, 0px)))}
`;
      secondary_tab_styles_cssresult_default = styles53.styleSheet;
    }
  });

  // node_modules/@material/web/tabs/secondary-tab.js
  var MdSecondaryTab;
  var init_secondary_tab2 = __esm({
    "node_modules/@material/web/tabs/secondary-tab.js"() {
      init_tslib_es6();
      init_decorators();
      init_secondary_tab();
      init_secondary_tab_styles_cssresult();
      init_tab_styles_cssresult();
      MdSecondaryTab = class MdSecondaryTab2 extends SecondaryTab {
      };
      MdSecondaryTab.styles = [styles52, styles53];
      MdSecondaryTab = __decorate([
        t("md-secondary-tab")
      ], MdSecondaryTab);
    }
  });

  // node_modules/@material/web/tabs/internal/tabs.js
  function isTab(element) {
    return element instanceof HTMLElement && element.hasAttribute("md-tab");
  }
  var Tabs;
  var init_tabs = __esm({
    "node_modules/@material/web/tabs/internal/tabs.js"() {
      init_tslib_es6();
      init_divider2();
      init_lit();
      init_decorators();
      init_tab();
      Tabs = class extends i4 {
        /**
         * The currently selected tab, `null` only when there are no tab children.
         *
         * @export
         */
        get activeTab() {
          return this.tabs.find((tab) => tab.active) ?? null;
        }
        set activeTab(tab) {
          if (tab) {
            this.activateTab(tab);
          }
        }
        /**
         * The index of the currently selected tab.
         *
         * @export
         */
        get activeTabIndex() {
          return this.tabs.findIndex((tab) => tab.active);
        }
        set activeTabIndex(index) {
          const activateTabAtIndex = () => {
            const tab = this.tabs[index];
            if (tab) {
              this.activateTab(tab);
            }
          };
          if (!this.slotElement) {
            this.updateComplete.then(activateTabAtIndex);
            return;
          }
          activateTabAtIndex();
        }
        get focusedTab() {
          return this.tabs.find((tab) => tab.matches(":focus-within"));
        }
        constructor() {
          super();
          this.autoActivate = false;
          this.internals = // Cast needed for closure
          this.attachInternals();
          if (!o7) {
            this.internals.role = "tablist";
            this.addEventListener("keydown", this.handleKeydown.bind(this));
            this.addEventListener("keyup", this.handleKeyup.bind(this));
            this.addEventListener("focusout", this.handleFocusout.bind(this));
          }
        }
        /**
         * Scrolls the toolbar, if overflowing, to the active tab, or the provided
         * tab.
         *
         * @param tabToScrollTo The tab that should be scrolled to. Defaults to the
         *     active tab.
         * @return A Promise that resolves after the tab has been scrolled to.
         */
        async scrollToTab(tabToScrollTo) {
          await this.updateComplete;
          const { tabs } = this;
          tabToScrollTo ??= this.activeTab;
          if (!tabToScrollTo || !tabs.includes(tabToScrollTo) || !this.tabsScrollerElement) {
            return;
          }
          for (const tab of this.tabs) {
            await tab.updateComplete;
          }
          const offset = tabToScrollTo.offsetLeft;
          const extent = tabToScrollTo.offsetWidth;
          const scroll = this.scrollLeft;
          const hostExtent = this.offsetWidth;
          const scrollMargin = 48;
          const min = offset - scrollMargin;
          const max = offset + extent - hostExtent + scrollMargin;
          const to = Math.min(min, Math.max(max, scroll));
          const behavior = !this.focusedTab ? "instant" : "auto";
          this.tabsScrollerElement.scrollTo({ behavior, top: 0, left: to });
        }
        render() {
          return b2`
      <div class="tabs">
        <slot
          @slotchange=${this.handleSlotChange}
          @click=${this.handleTabClick}></slot>
      </div>
      <md-divider part="divider"></md-divider>
    `;
        }
        async handleTabClick(event) {
          const tab = event.target;
          await 0;
          if (event.defaultPrevented || !isTab(tab) || tab.active) {
            return;
          }
          this.activateTab(tab);
        }
        activateTab(activeTab) {
          const { tabs } = this;
          const previousTab = this.activeTab;
          if (!tabs.includes(activeTab) || previousTab === activeTab) {
            return;
          }
          for (const tab of tabs) {
            tab.active = tab === activeTab;
          }
          if (previousTab) {
            const defaultPrevented = !this.dispatchEvent(new Event("change", { bubbles: true, cancelable: true }));
            if (defaultPrevented) {
              for (const tab of tabs) {
                tab.active = tab === previousTab;
              }
              return;
            }
            activeTab[ANIMATE_INDICATOR](previousTab);
          }
          this.updateFocusableTab(activeTab);
          this.scrollToTab(activeTab);
        }
        updateFocusableTab(focusableTab) {
          for (const tab of this.tabs) {
            tab.tabIndex = tab === focusableTab ? 0 : -1;
          }
        }
        // focus item on keydown and optionally select it
        async handleKeydown(event) {
          await 0;
          const isLeft = event.key === "ArrowLeft";
          const isRight = event.key === "ArrowRight";
          const isHome = event.key === "Home";
          const isEnd = event.key === "End";
          if (event.defaultPrevented || !isLeft && !isRight && !isHome && !isEnd) {
            return;
          }
          const { tabs } = this;
          if (tabs.length < 2) {
            return;
          }
          event.preventDefault();
          let indexToFocus;
          if (isHome || isEnd) {
            indexToFocus = isHome ? 0 : tabs.length - 1;
          } else {
            const isRtl2 = getComputedStyle(this).direction === "rtl";
            const forwards = isRtl2 ? isLeft : isRight;
            const { focusedTab } = this;
            if (!focusedTab) {
              indexToFocus = forwards ? 0 : tabs.length - 1;
            } else {
              const focusedIndex = this.tabs.indexOf(focusedTab);
              indexToFocus = forwards ? focusedIndex + 1 : focusedIndex - 1;
              if (indexToFocus >= tabs.length) {
                indexToFocus = 0;
              } else if (indexToFocus < 0) {
                indexToFocus = tabs.length - 1;
              }
            }
          }
          const tabToFocus = tabs[indexToFocus];
          tabToFocus.focus();
          if (this.autoActivate) {
            this.activateTab(tabToFocus);
          } else {
            this.updateFocusableTab(tabToFocus);
          }
        }
        // scroll to item on keyup.
        handleKeyup() {
          this.scrollToTab(this.focusedTab ?? this.activeTab);
        }
        handleFocusout() {
          if (this.matches(":focus-within")) {
            return;
          }
          const { activeTab } = this;
          if (activeTab) {
            this.updateFocusableTab(activeTab);
          }
        }
        handleSlotChange() {
          const firstTab = this.tabs[0];
          if (!this.activeTab && firstTab) {
            this.activateTab(firstTab);
          }
          this.scrollToTab(this.activeTab);
        }
      };
      __decorate([
        o4({ flatten: true, selector: "[md-tab]" })
      ], Tabs.prototype, "tabs", void 0);
      __decorate([
        n3({ type: Number, attribute: "active-tab-index" })
      ], Tabs.prototype, "activeTabIndex", null);
      __decorate([
        n3({ type: Boolean, attribute: "auto-activate" })
      ], Tabs.prototype, "autoActivate", void 0);
      __decorate([
        e4(".tabs")
      ], Tabs.prototype, "tabsScrollerElement", void 0);
      __decorate([
        e4("slot")
      ], Tabs.prototype, "slotElement", void 0);
    }
  });

  // node_modules/@material/web/tabs/internal/tabs-styles.cssresult.js
  var styles54, tabs_styles_cssresult_default;
  var init_tabs_styles_cssresult = __esm({
    "node_modules/@material/web/tabs/internal/tabs-styles.cssresult.js"() {
      init_lit();
      styles54 = i`:host{box-sizing:border-box;display:flex;flex-direction:column;overflow:auto;scroll-behavior:smooth;scrollbar-width:none;position:relative}:host([hidden]){display:none}:host::-webkit-scrollbar{display:none}.tabs{align-items:end;display:flex;height:100%;overflow:inherit;scroll-behavior:inherit;scrollbar-width:inherit;justify-content:space-between;width:100%}::slotted(*){flex:1}::slotted([active]){z-index:1}
`;
      tabs_styles_cssresult_default = styles54.styleSheet;
    }
  });

  // node_modules/@material/web/tabs/tabs.js
  var MdTabs;
  var init_tabs2 = __esm({
    "node_modules/@material/web/tabs/tabs.js"() {
      init_tslib_es6();
      init_decorators();
      init_tabs();
      init_tabs_styles_cssresult();
      MdTabs = class MdTabs2 extends Tabs {
      };
      MdTabs.styles = [styles54];
      MdTabs = __decorate([
        t("md-tabs")
      ], MdTabs);
    }
  });

  // node_modules/@material/web/textfield/internal/filled-styles.cssresult.js
  var styles55, filled_styles_cssresult_default4;
  var init_filled_styles_cssresult4 = __esm({
    "node_modules/@material/web/textfield/internal/filled-styles.cssresult.js"() {
      init_lit();
      styles55 = i`:host{--_active-indicator-color: var(--md-filled-text-field-active-indicator-color, var(--md-sys-color-on-surface-variant, #49454f));--_active-indicator-height: var(--md-filled-text-field-active-indicator-height, 1px);--_caret-color: var(--md-filled-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_container-color: var(--md-filled-text-field-container-color, var(--md-sys-color-surface-container-highest, #e6e0e9));--_disabled-active-indicator-color: var(--md-filled-text-field-disabled-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-active-indicator-height: var(--md-filled-text-field-disabled-active-indicator-height, 1px);--_disabled-active-indicator-opacity: var(--md-filled-text-field-disabled-active-indicator-opacity, 0.38);--_disabled-container-color: var(--md-filled-text-field-disabled-container-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-container-opacity: var(--md-filled-text-field-disabled-container-opacity, 0.04);--_disabled-input-text-color: var(--md-filled-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-filled-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-filled-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-filled-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-filled-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-filled-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-supporting-text-color: var(--md-filled-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-filled-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-filled-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-filled-text-field-disabled-trailing-icon-opacity, 0.38);--_error-active-indicator-color: var(--md-filled-text-field-error-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-active-indicator-color: var(--md-filled-text-field-error-focus-active-indicator-color, var(--md-sys-color-error, #b3261e));--_error-focus-caret-color: var(--md-filled-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-filled-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-filled-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-filled-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-supporting-text-color: var(--md-filled-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-filled-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-active-indicator-color: var(--md-filled-text-field-error-hover-active-indicator-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-input-text-color: var(--md-filled-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-filled-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-filled-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-state-layer-color: var(--md-filled-text-field-error-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-state-layer-opacity: var(--md-filled-text-field-error-hover-state-layer-opacity, 0.08);--_error-hover-supporting-text-color: var(--md-filled-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-filled-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-filled-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-filled-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-filled-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-supporting-text-color: var(--md-filled-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-filled-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-active-indicator-color: var(--md-filled-text-field-focus-active-indicator-color, var(--md-sys-color-primary, #6750a4));--_focus-active-indicator-height: var(--md-filled-text-field-focus-active-indicator-height, 3px);--_focus-input-text-color: var(--md-filled-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-filled-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-filled-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-supporting-text-color: var(--md-filled-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-filled-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-active-indicator-color: var(--md-filled-text-field-hover-active-indicator-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-active-indicator-height: var(--md-filled-text-field-hover-active-indicator-height, 1px);--_hover-input-text-color: var(--md-filled-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-filled-text-field-hover-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-leading-icon-color: var(--md-filled-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-state-layer-color: var(--md-filled-text-field-hover-state-layer-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-state-layer-opacity: var(--md-filled-text-field-hover-state-layer-opacity, 0.08);--_hover-supporting-text-color: var(--md-filled-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-filled-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-filled-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-filled-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-filled-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-filled-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-filled-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-filled-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-filled-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-filled-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-filled-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-filled-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-filled-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-filled-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-filled-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-filled-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-filled-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-filled-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-filled-text-field-leading-icon-size, 24px);--_supporting-text-color: var(--md-filled-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-filled-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-filled-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-filled-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-filled-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-filled-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-filled-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-filled-text-field-container-shape-start-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-filled-text-field-container-shape-start-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-filled-text-field-container-shape-end-end, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_container-shape-end-start: var(--md-filled-text-field-container-shape-end-start, var(--md-filled-text-field-container-shape, var(--md-sys-shape-corner-none, 0px)));--_icon-input-space: var(--md-filled-text-field-icon-input-space, 16px);--_leading-space: var(--md-filled-text-field-leading-space, 16px);--_trailing-space: var(--md-filled-text-field-trailing-space, 16px);--_top-space: var(--md-filled-text-field-top-space, 16px);--_bottom-space: var(--md-filled-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-filled-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-filled-text-field-input-text-suffix-leading-space, 2px);--_with-label-top-space: var(--md-filled-text-field-with-label-top-space, 8px);--_with-label-bottom-space: var(--md-filled-text-field-with-label-bottom-space, 8px);--_focus-caret-color: var(--md-filled-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-filled-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-filled-text-field-with-trailing-icon-trailing-space, 12px);--md-filled-field-active-indicator-color: var(--_active-indicator-color);--md-filled-field-active-indicator-height: var(--_active-indicator-height);--md-filled-field-bottom-space: var(--_bottom-space);--md-filled-field-container-color: var(--_container-color);--md-filled-field-container-shape-end-end: var(--_container-shape-end-end);--md-filled-field-container-shape-end-start: var(--_container-shape-end-start);--md-filled-field-container-shape-start-end: var(--_container-shape-start-end);--md-filled-field-container-shape-start-start: var(--_container-shape-start-start);--md-filled-field-content-color: var(--_input-text-color);--md-filled-field-content-font: var(--_input-text-font);--md-filled-field-content-line-height: var(--_input-text-line-height);--md-filled-field-content-size: var(--_input-text-size);--md-filled-field-content-space: var(--_icon-input-space);--md-filled-field-content-weight: var(--_input-text-weight);--md-filled-field-disabled-active-indicator-color: var(--_disabled-active-indicator-color);--md-filled-field-disabled-active-indicator-height: var(--_disabled-active-indicator-height);--md-filled-field-disabled-active-indicator-opacity: var(--_disabled-active-indicator-opacity);--md-filled-field-disabled-container-color: var(--_disabled-container-color);--md-filled-field-disabled-container-opacity: var(--_disabled-container-opacity);--md-filled-field-disabled-content-color: var(--_disabled-input-text-color);--md-filled-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-filled-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-filled-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-filled-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-filled-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-filled-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-filled-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-filled-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-filled-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-filled-field-error-active-indicator-color: var(--_error-active-indicator-color);--md-filled-field-error-content-color: var(--_error-input-text-color);--md-filled-field-error-focus-active-indicator-color: var(--_error-focus-active-indicator-color);--md-filled-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-filled-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-filled-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-filled-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-filled-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-filled-field-error-hover-active-indicator-color: var(--_error-hover-active-indicator-color);--md-filled-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-filled-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-filled-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-filled-field-error-hover-state-layer-color: var(--_error-hover-state-layer-color);--md-filled-field-error-hover-state-layer-opacity: var(--_error-hover-state-layer-opacity);--md-filled-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-filled-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-filled-field-error-label-text-color: var(--_error-label-text-color);--md-filled-field-error-leading-content-color: var(--_error-leading-icon-color);--md-filled-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-filled-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-filled-field-focus-active-indicator-color: var(--_focus-active-indicator-color);--md-filled-field-focus-active-indicator-height: var(--_focus-active-indicator-height);--md-filled-field-focus-content-color: var(--_focus-input-text-color);--md-filled-field-focus-label-text-color: var(--_focus-label-text-color);--md-filled-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-filled-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-filled-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-filled-field-hover-active-indicator-color: var(--_hover-active-indicator-color);--md-filled-field-hover-active-indicator-height: var(--_hover-active-indicator-height);--md-filled-field-hover-content-color: var(--_hover-input-text-color);--md-filled-field-hover-label-text-color: var(--_hover-label-text-color);--md-filled-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-filled-field-hover-state-layer-color: var(--_hover-state-layer-color);--md-filled-field-hover-state-layer-opacity: var(--_hover-state-layer-opacity);--md-filled-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-filled-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-filled-field-label-text-color: var(--_label-text-color);--md-filled-field-label-text-font: var(--_label-text-font);--md-filled-field-label-text-line-height: var(--_label-text-line-height);--md-filled-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-filled-field-label-text-populated-size: var(--_label-text-populated-size);--md-filled-field-label-text-size: var(--_label-text-size);--md-filled-field-label-text-weight: var(--_label-text-weight);--md-filled-field-leading-content-color: var(--_leading-icon-color);--md-filled-field-leading-space: var(--_leading-space);--md-filled-field-supporting-text-color: var(--_supporting-text-color);--md-filled-field-supporting-text-font: var(--_supporting-text-font);--md-filled-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-filled-field-supporting-text-size: var(--_supporting-text-size);--md-filled-field-supporting-text-weight: var(--_supporting-text-weight);--md-filled-field-top-space: var(--_top-space);--md-filled-field-trailing-content-color: var(--_trailing-icon-color);--md-filled-field-trailing-space: var(--_trailing-space);--md-filled-field-with-label-bottom-space: var(--_with-label-bottom-space);--md-filled-field-with-label-top-space: var(--_with-label-top-space);--md-filled-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-filled-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;
      filled_styles_cssresult_default4 = styles55.styleSheet;
    }
  });

  // node_modules/lit-html/directive-helpers.js
  var t5, r8, m2, p3;
  var init_directive_helpers = __esm({
    "node_modules/lit-html/directive-helpers.js"() {
      init_lit_html();
      ({ I: t5 } = j);
      r8 = (o10) => void 0 === o10.strings;
      m2 = {};
      p3 = (o10, t6 = m2) => o10._$AH = t6;
    }
  });

  // node_modules/lit-html/directives/live.js
  var l4;
  var init_live = __esm({
    "node_modules/lit-html/directives/live.js"() {
      init_lit_html();
      init_directive();
      init_directive_helpers();
      l4 = e7(class extends i5 {
        constructor(r9) {
          if (super(r9), r9.type !== t4.PROPERTY && r9.type !== t4.ATTRIBUTE && r9.type !== t4.BOOLEAN_ATTRIBUTE) throw Error("The `live` directive is not allowed on child or event bindings");
          if (!r8(r9)) throw Error("`live` bindings can only contain a single expression");
        }
        render(r9) {
          return r9;
        }
        update(i8, [t6]) {
          if (t6 === E || t6 === A) return t6;
          const o10 = i8.element, l5 = i8.name;
          if (i8.type === t4.PROPERTY) {
            if (t6 === o10[l5]) return E;
          } else if (i8.type === t4.BOOLEAN_ATTRIBUTE) {
            if (!!t6 === o10.hasAttribute(l5)) return E;
          } else if (i8.type === t4.ATTRIBUTE && o10.getAttribute(l5) === t6 + "") return E;
          return p3(i8), t6;
        }
      });
    }
  });

  // node_modules/lit/directives/live.js
  var init_live2 = __esm({
    "node_modules/lit/directives/live.js"() {
      init_live();
    }
  });

  // node_modules/@material/web/internal/controller/string-converter.js
  var stringConverter;
  var init_string_converter = __esm({
    "node_modules/@material/web/internal/controller/string-converter.js"() {
      stringConverter = {
        fromAttribute(value) {
          return value ?? "";
        },
        toAttribute(value) {
          return value || null;
        }
      };
    }
  });

  // node_modules/@material/web/labs/behaviors/validators/text-field-validator.js
  function isInputState(state) {
    return state.type !== "textarea";
  }
  var TextFieldValidator;
  var init_text_field_validator = __esm({
    "node_modules/@material/web/labs/behaviors/validators/text-field-validator.js"() {
      init_validator();
      TextFieldValidator = class extends Validator {
        computeValidity({ state, renderedControl }) {
          let inputOrTextArea = renderedControl;
          if (isInputState(state) && !inputOrTextArea) {
            inputOrTextArea = this.inputControl || document.createElement("input");
            this.inputControl = inputOrTextArea;
          } else if (!inputOrTextArea) {
            inputOrTextArea = this.textAreaControl || document.createElement("textarea");
            this.textAreaControl = inputOrTextArea;
          }
          const input = isInputState(state) ? inputOrTextArea : null;
          if (input) {
            input.type = state.type;
          }
          if (inputOrTextArea.value !== state.value) {
            inputOrTextArea.value = state.value;
          }
          inputOrTextArea.required = state.required;
          if (input) {
            const inputState = state;
            if (inputState.pattern) {
              input.pattern = inputState.pattern;
            } else {
              input.removeAttribute("pattern");
            }
            if (inputState.min) {
              input.min = inputState.min;
            } else {
              input.removeAttribute("min");
            }
            if (inputState.max) {
              input.max = inputState.max;
            } else {
              input.removeAttribute("max");
            }
            if (inputState.step) {
              input.step = inputState.step;
            } else {
              input.removeAttribute("step");
            }
          }
          if ((state.minLength ?? -1) > -1) {
            inputOrTextArea.setAttribute("minlength", String(state.minLength));
          } else {
            inputOrTextArea.removeAttribute("minlength");
          }
          if ((state.maxLength ?? -1) > -1) {
            inputOrTextArea.setAttribute("maxlength", String(state.maxLength));
          } else {
            inputOrTextArea.removeAttribute("maxlength");
          }
          return {
            validity: inputOrTextArea.validity,
            validationMessage: inputOrTextArea.validationMessage
          };
        }
        equals({ state: prev }, { state: next }) {
          const inputOrTextAreaEqual = prev.type === next.type && prev.value === next.value && prev.required === next.required && prev.minLength === next.minLength && prev.maxLength === next.maxLength;
          if (!isInputState(prev) || !isInputState(next)) {
            return inputOrTextAreaEqual;
          }
          return inputOrTextAreaEqual && prev.pattern === next.pattern && prev.min === next.min && prev.max === next.max && prev.step === next.step;
        }
        copy({ state }) {
          return {
            state: isInputState(state) ? this.copyInput(state) : this.copyTextArea(state),
            renderedControl: null
          };
        }
        copyInput(state) {
          const { type, pattern, min, max, step } = state;
          return {
            ...this.copySharedState(state),
            type,
            pattern,
            min,
            max,
            step
          };
        }
        copyTextArea(state) {
          return {
            ...this.copySharedState(state),
            type: state.type
          };
        }
        copySharedState({ value, required, minLength, maxLength }) {
          return { value, required, minLength, maxLength };
        }
      };
    }
  });

  // node_modules/@material/web/textfield/internal/text-field.js
  var textFieldBaseClass, TextField;
  var init_text_field = __esm({
    "node_modules/@material/web/textfield/internal/text-field.js"() {
      init_tslib_es6();
      init_lit();
      init_decorators();
      init_class_map2();
      init_live2();
      init_style_map2();
      init_static_html();
      init_delegate();
      init_string_converter();
      init_redispatch_event();
      init_constraint_validation();
      init_element_internals();
      init_form_associated();
      init_on_report_validity();
      init_text_field_validator();
      textFieldBaseClass = mixinDelegatesAria(mixinOnReportValidity(mixinConstraintValidation(mixinFormAssociated(mixinElementInternals(i4)))));
      TextField = class extends textFieldBaseClass {
        constructor() {
          super(...arguments);
          this.error = false;
          this.errorText = "";
          this.label = "";
          this.noAsterisk = false;
          this.required = false;
          this.value = "";
          this.prefixText = "";
          this.suffixText = "";
          this.hasLeadingIcon = false;
          this.hasTrailingIcon = false;
          this.supportingText = "";
          this.textDirection = "";
          this.rows = 2;
          this.cols = 20;
          this.inputMode = "";
          this.max = "";
          this.maxLength = -1;
          this.min = "";
          this.minLength = -1;
          this.noSpinner = false;
          this.pattern = "";
          this.placeholder = "";
          this.readOnly = false;
          this.multiple = false;
          this.step = "";
          this.type = "text";
          this.autocomplete = "";
          this.dirty = false;
          this.focused = false;
          this.nativeError = false;
          this.nativeErrorText = "";
        }
        /**
         * Gets or sets the direction in which selection occurred.
         */
        get selectionDirection() {
          return this.getInputOrTextarea().selectionDirection;
        }
        set selectionDirection(value) {
          this.getInputOrTextarea().selectionDirection = value;
        }
        /**
         * Gets or sets the end position or offset of a text selection.
         */
        get selectionEnd() {
          return this.getInputOrTextarea().selectionEnd;
        }
        set selectionEnd(value) {
          this.getInputOrTextarea().selectionEnd = value;
        }
        /**
         * Gets or sets the starting position or offset of a text selection.
         */
        get selectionStart() {
          return this.getInputOrTextarea().selectionStart;
        }
        set selectionStart(value) {
          this.getInputOrTextarea().selectionStart = value;
        }
        /**
         * The text field's value as a number.
         */
        get valueAsNumber() {
          const input = this.getInput();
          if (!input) {
            return NaN;
          }
          return input.valueAsNumber;
        }
        set valueAsNumber(value) {
          const input = this.getInput();
          if (!input) {
            return;
          }
          input.valueAsNumber = value;
          this.value = input.value;
        }
        /**
         * The text field's value as a Date.
         */
        get valueAsDate() {
          const input = this.getInput();
          if (!input) {
            return null;
          }
          return input.valueAsDate;
        }
        set valueAsDate(value) {
          const input = this.getInput();
          if (!input) {
            return;
          }
          input.valueAsDate = value;
          this.value = input.value;
        }
        get hasError() {
          return this.error || this.nativeError;
        }
        /**
         * Selects all the text in the text field.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/select
         */
        select() {
          this.getInputOrTextarea().select();
        }
        setRangeText(...args) {
          this.getInputOrTextarea().setRangeText(...args);
          this.value = this.getInputOrTextarea().value;
        }
        /**
         * Sets the start and end positions of a selection in the text field.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/setSelectionRange
         *
         * @param start The offset into the text field for the start of the selection.
         * @param end The offset into the text field for the end of the selection.
         * @param direction The direction in which the selection is performed.
         */
        setSelectionRange(start, end, direction) {
          this.getInputOrTextarea().setSelectionRange(start, end, direction);
        }
        /**
         * Shows the browser picker for an input element of type "date", "time", etc.
         *
         * For a full list of supported types, see:
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker#browser_compatibility
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/showPicker
         */
        showPicker() {
          const input = this.getInput();
          if (!input) {
            return;
          }
          input.showPicker();
        }
        /**
         * Decrements the value of a numeric type text field by `step` or `n` `step`
         * number of times.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepDown
         *
         * @param stepDecrement The number of steps to decrement, defaults to 1.
         */
        stepDown(stepDecrement) {
          const input = this.getInput();
          if (!input) {
            return;
          }
          input.stepDown(stepDecrement);
          this.value = input.value;
        }
        /**
         * Increments the value of a numeric type text field by `step` or `n` `step`
         * number of times.
         *
         * https://developer.mozilla.org/en-US/docs/Web/API/HTMLInputElement/stepUp
         *
         * @param stepIncrement The number of steps to increment, defaults to 1.
         */
        stepUp(stepIncrement) {
          const input = this.getInput();
          if (!input) {
            return;
          }
          input.stepUp(stepIncrement);
          this.value = input.value;
        }
        /**
         * Reset the text field to its default value.
         */
        reset() {
          this.dirty = false;
          this.value = this.getAttribute("value") ?? "";
          this.nativeError = false;
          this.nativeErrorText = "";
        }
        attributeChangedCallback(attribute, newValue, oldValue) {
          if (attribute === "value" && this.dirty) {
            return;
          }
          super.attributeChangedCallback(attribute, newValue, oldValue);
        }
        render() {
          const classes = {
            "disabled": this.disabled,
            "error": !this.disabled && this.hasError,
            "textarea": this.type === "textarea",
            "no-spinner": this.noSpinner
          };
          return b2`
      <span class="text-field ${e8(classes)}">
        ${this.renderField()}
      </span>
    `;
        }
        updated(changedProperties) {
          const value = this.getInputOrTextarea().value;
          if (this.value !== value) {
            this.value = value;
          }
        }
        renderField() {
          return u3`<${this.fieldTag}
      class="field"
      count=${this.value.length}
      ?disabled=${this.disabled}
      ?error=${this.hasError}
      error-text=${this.getErrorText()}
      ?focused=${this.focused}
      ?has-end=${this.hasTrailingIcon}
      ?has-start=${this.hasLeadingIcon}
      label=${this.label}
      ?no-asterisk=${this.noAsterisk}
      max=${this.maxLength}
      ?populated=${!!this.value}
      ?required=${this.required}
      ?resizable=${this.type === "textarea"}
      supporting-text=${this.supportingText}
    >
      ${this.renderLeadingIcon()}
      ${this.renderInputOrTextarea()}
      ${this.renderTrailingIcon()}
      <div id="description" slot="aria-describedby"></div>
      <slot name="container" slot="container"></slot>
    </${this.fieldTag}>`;
        }
        renderLeadingIcon() {
          return b2`
      <span class="icon leading" slot="start">
        <slot name="leading-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
        }
        renderTrailingIcon() {
          return b2`
      <span class="icon trailing" slot="end">
        <slot name="trailing-icon" @slotchange=${this.handleIconChange}></slot>
      </span>
    `;
        }
        renderInputOrTextarea() {
          const style = { "direction": this.textDirection };
          const ariaLabel = this.ariaLabel || this.label || A;
          const autocomplete = this.autocomplete;
          const hasMaxLength = (this.maxLength ?? -1) > -1;
          const hasMinLength = (this.minLength ?? -1) > -1;
          if (this.type === "textarea") {
            return b2`
        <textarea
          class="input"
          style=${o9(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || A}
          name=${this.name || A}
          ?disabled=${this.disabled}
          maxlength=${hasMaxLength ? this.maxLength : A}
          minlength=${hasMinLength ? this.minLength : A}
          placeholder=${this.placeholder || A}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          rows=${this.rows}
          cols=${this.cols}
          .value=${l4(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent}></textarea>
      `;
          }
          const prefix = this.renderPrefix();
          const suffix = this.renderSuffix();
          const inputMode = this.inputMode;
          return b2`
      <div class="input-wrapper">
        ${prefix}
        <input
          class="input"
          style=${o9(style)}
          aria-describedby="description"
          aria-invalid=${this.hasError}
          aria-label=${ariaLabel}
          autocomplete=${autocomplete || A}
          name=${this.name || A}
          ?disabled=${this.disabled}
          inputmode=${inputMode || A}
          max=${this.max || A}
          maxlength=${hasMaxLength ? this.maxLength : A}
          min=${this.min || A}
          minlength=${hasMinLength ? this.minLength : A}
          pattern=${this.pattern || A}
          placeholder=${this.placeholder || A}
          ?readonly=${this.readOnly}
          ?required=${this.required}
          ?multiple=${this.multiple}
          step=${this.step || A}
          type=${this.type}
          .value=${l4(this.value)}
          @change=${this.redispatchEvent}
          @focus=${this.handleFocusChange}
          @blur=${this.handleFocusChange}
          @input=${this.handleInput}
          @select=${this.redispatchEvent} />
        ${suffix}
      </div>
    `;
        }
        renderPrefix() {
          return this.renderAffix(
            this.prefixText,
            /* isSuffix */
            false
          );
        }
        renderSuffix() {
          return this.renderAffix(
            this.suffixText,
            /* isSuffix */
            true
          );
        }
        renderAffix(text, isSuffix) {
          if (!text) {
            return A;
          }
          const classes = {
            "suffix": isSuffix,
            "prefix": !isSuffix
          };
          return b2`<span class="${e8(classes)}">${text}</span>`;
        }
        getErrorText() {
          return this.error ? this.errorText : this.nativeErrorText;
        }
        handleFocusChange() {
          this.focused = this.inputOrTextarea?.matches(":focus") ?? false;
        }
        handleInput(event) {
          this.dirty = true;
          this.value = event.target.value;
        }
        redispatchEvent(event) {
          redispatchEvent(this, event);
        }
        getInputOrTextarea() {
          if (!this.inputOrTextarea) {
            this.connectedCallback();
            this.scheduleUpdate();
          }
          if (this.isUpdatePending) {
            this.scheduleUpdate();
          }
          return this.inputOrTextarea;
        }
        getInput() {
          if (this.type === "textarea") {
            return null;
          }
          return this.getInputOrTextarea();
        }
        handleIconChange() {
          this.hasLeadingIcon = this.leadingIcons.length > 0;
          this.hasTrailingIcon = this.trailingIcons.length > 0;
        }
        [getFormValue]() {
          return this.value;
        }
        formResetCallback() {
          this.reset();
        }
        formStateRestoreCallback(state) {
          this.value = state;
        }
        focus() {
          this.getInputOrTextarea().focus();
        }
        [createValidator]() {
          return new TextFieldValidator(() => ({
            state: this,
            renderedControl: this.inputOrTextarea
          }));
        }
        [getValidityAnchor]() {
          return this.inputOrTextarea;
        }
        [onReportValidity](invalidEvent) {
          invalidEvent?.preventDefault();
          const prevMessage = this.getErrorText();
          this.nativeError = !!invalidEvent;
          this.nativeErrorText = this.validationMessage;
          if (prevMessage === this.getErrorText()) {
            this.field?.reannounceError();
          }
        }
      };
      TextField.shadowRootOptions = {
        ...i4.shadowRootOptions,
        delegatesFocus: true
      };
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], TextField.prototype, "error", void 0);
      __decorate([
        n3({ attribute: "error-text" })
      ], TextField.prototype, "errorText", void 0);
      __decorate([
        n3()
      ], TextField.prototype, "label", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "no-asterisk" })
      ], TextField.prototype, "noAsterisk", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], TextField.prototype, "required", void 0);
      __decorate([
        n3()
      ], TextField.prototype, "value", void 0);
      __decorate([
        n3({ attribute: "prefix-text" })
      ], TextField.prototype, "prefixText", void 0);
      __decorate([
        n3({ attribute: "suffix-text" })
      ], TextField.prototype, "suffixText", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "has-leading-icon" })
      ], TextField.prototype, "hasLeadingIcon", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "has-trailing-icon" })
      ], TextField.prototype, "hasTrailingIcon", void 0);
      __decorate([
        n3({ attribute: "supporting-text" })
      ], TextField.prototype, "supportingText", void 0);
      __decorate([
        n3({ attribute: "text-direction" })
      ], TextField.prototype, "textDirection", void 0);
      __decorate([
        n3({ type: Number })
      ], TextField.prototype, "rows", void 0);
      __decorate([
        n3({ type: Number })
      ], TextField.prototype, "cols", void 0);
      __decorate([
        n3({ reflect: true })
      ], TextField.prototype, "inputMode", void 0);
      __decorate([
        n3()
      ], TextField.prototype, "max", void 0);
      __decorate([
        n3({ type: Number })
      ], TextField.prototype, "maxLength", void 0);
      __decorate([
        n3()
      ], TextField.prototype, "min", void 0);
      __decorate([
        n3({ type: Number })
      ], TextField.prototype, "minLength", void 0);
      __decorate([
        n3({ type: Boolean, attribute: "no-spinner" })
      ], TextField.prototype, "noSpinner", void 0);
      __decorate([
        n3()
      ], TextField.prototype, "pattern", void 0);
      __decorate([
        n3({ reflect: true, converter: stringConverter })
      ], TextField.prototype, "placeholder", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], TextField.prototype, "readOnly", void 0);
      __decorate([
        n3({ type: Boolean, reflect: true })
      ], TextField.prototype, "multiple", void 0);
      __decorate([
        n3()
      ], TextField.prototype, "step", void 0);
      __decorate([
        n3({ reflect: true })
      ], TextField.prototype, "type", void 0);
      __decorate([
        n3({ reflect: true })
      ], TextField.prototype, "autocomplete", void 0);
      __decorate([
        r4()
      ], TextField.prototype, "dirty", void 0);
      __decorate([
        r4()
      ], TextField.prototype, "focused", void 0);
      __decorate([
        r4()
      ], TextField.prototype, "nativeError", void 0);
      __decorate([
        r4()
      ], TextField.prototype, "nativeErrorText", void 0);
      __decorate([
        e4(".input")
      ], TextField.prototype, "inputOrTextarea", void 0);
      __decorate([
        e4(".field")
      ], TextField.prototype, "field", void 0);
      __decorate([
        o4({ slot: "leading-icon" })
      ], TextField.prototype, "leadingIcons", void 0);
      __decorate([
        o4({ slot: "trailing-icon" })
      ], TextField.prototype, "trailingIcons", void 0);
    }
  });

  // node_modules/@material/web/textfield/internal/filled-text-field.js
  var FilledTextField;
  var init_filled_text_field = __esm({
    "node_modules/@material/web/textfield/internal/filled-text-field.js"() {
      init_filled_field2();
      init_static_html();
      init_text_field();
      FilledTextField = class extends TextField {
        constructor() {
          super(...arguments);
          this.fieldTag = i6`md-filled-field`;
        }
      };
    }
  });

  // node_modules/@material/web/textfield/internal/shared-styles.cssresult.js
  var styles56, shared_styles_cssresult_default7;
  var init_shared_styles_cssresult7 = __esm({
    "node_modules/@material/web/textfield/internal/shared-styles.cssresult.js"() {
      init_lit();
      styles56 = i`:host{display:inline-flex;outline:none;resize:both;text-align:start;-webkit-tap-highlight-color:rgba(0,0,0,0)}.text-field,.field{width:100%}.text-field{display:inline-flex}.field{cursor:text}.disabled .field{cursor:default}.text-field,.textarea .field{resize:inherit}slot[name=container]{border-radius:inherit}.icon{color:currentColor;display:flex;align-items:center;justify-content:center;fill:currentColor;position:relative}.icon ::slotted(*){display:flex;position:absolute}[has-start] .icon.leading{font-size:var(--_leading-icon-size);height:var(--_leading-icon-size);width:var(--_leading-icon-size)}[has-end] .icon.trailing{font-size:var(--_trailing-icon-size);height:var(--_trailing-icon-size);width:var(--_trailing-icon-size)}.input-wrapper{display:flex}.input-wrapper>*{all:inherit;padding:0}.input{caret-color:var(--_caret-color);overflow-x:hidden;text-align:inherit}.input::placeholder{color:currentColor;opacity:1}.input::-webkit-calendar-picker-indicator{display:none}.input::-webkit-search-decoration,.input::-webkit-search-cancel-button{display:none}@media(forced-colors: active){.input{background:none}}.no-spinner .input::-webkit-inner-spin-button,.no-spinner .input::-webkit-outer-spin-button{display:none}.no-spinner .input[type=number]{-moz-appearance:textfield}:focus-within .input{caret-color:var(--_focus-caret-color)}.error:focus-within .input{caret-color:var(--_error-focus-caret-color)}.text-field:not(.disabled) .prefix{color:var(--_input-text-prefix-color)}.text-field:not(.disabled) .suffix{color:var(--_input-text-suffix-color)}.text-field:not(.disabled) .input::placeholder{color:var(--_input-text-placeholder-color)}.prefix,.suffix{text-wrap:nowrap;width:min-content}.prefix{padding-inline-end:var(--_input-text-prefix-trailing-space)}.suffix{padding-inline-start:var(--_input-text-suffix-leading-space)}
`;
      shared_styles_cssresult_default7 = styles56.styleSheet;
    }
  });

  // node_modules/@material/web/textfield/filled-text-field.js
  var MdFilledTextField;
  var init_filled_text_field2 = __esm({
    "node_modules/@material/web/textfield/filled-text-field.js"() {
      init_tslib_es6();
      init_filled_field2();
      init_decorators();
      init_static_html();
      init_filled_styles_cssresult4();
      init_filled_text_field();
      init_shared_styles_cssresult7();
      MdFilledTextField = class MdFilledTextField2 extends FilledTextField {
        constructor() {
          super(...arguments);
          this.fieldTag = i6`md-filled-field`;
        }
      };
      MdFilledTextField.styles = [styles56, styles55];
      MdFilledTextField = __decorate([
        t("md-filled-text-field")
      ], MdFilledTextField);
    }
  });

  // node_modules/@material/web/textfield/internal/outlined-styles.cssresult.js
  var styles57, outlined_styles_cssresult_default4;
  var init_outlined_styles_cssresult4 = __esm({
    "node_modules/@material/web/textfield/internal/outlined-styles.cssresult.js"() {
      init_lit();
      styles57 = i`:host{--_caret-color: var(--md-outlined-text-field-caret-color, var(--md-sys-color-primary, #6750a4));--_disabled-input-text-color: var(--md-outlined-text-field-disabled-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-input-text-opacity: var(--md-outlined-text-field-disabled-input-text-opacity, 0.38);--_disabled-label-text-color: var(--md-outlined-text-field-disabled-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-label-text-opacity: var(--md-outlined-text-field-disabled-label-text-opacity, 0.38);--_disabled-leading-icon-color: var(--md-outlined-text-field-disabled-leading-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-leading-icon-opacity: var(--md-outlined-text-field-disabled-leading-icon-opacity, 0.38);--_disabled-outline-color: var(--md-outlined-text-field-disabled-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-outline-opacity: var(--md-outlined-text-field-disabled-outline-opacity, 0.12);--_disabled-outline-width: var(--md-outlined-text-field-disabled-outline-width, 1px);--_disabled-supporting-text-color: var(--md-outlined-text-field-disabled-supporting-text-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-supporting-text-opacity: var(--md-outlined-text-field-disabled-supporting-text-opacity, 0.38);--_disabled-trailing-icon-color: var(--md-outlined-text-field-disabled-trailing-icon-color, var(--md-sys-color-on-surface, #1d1b20));--_disabled-trailing-icon-opacity: var(--md-outlined-text-field-disabled-trailing-icon-opacity, 0.38);--_error-focus-caret-color: var(--md-outlined-text-field-error-focus-caret-color, var(--md-sys-color-error, #b3261e));--_error-focus-input-text-color: var(--md-outlined-text-field-error-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-focus-label-text-color: var(--md-outlined-text-field-error-focus-label-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-leading-icon-color: var(--md-outlined-text-field-error-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-focus-outline-color: var(--md-outlined-text-field-error-focus-outline-color, var(--md-sys-color-error, #b3261e));--_error-focus-supporting-text-color: var(--md-outlined-text-field-error-focus-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-focus-trailing-icon-color: var(--md-outlined-text-field-error-focus-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_error-hover-input-text-color: var(--md-outlined-text-field-error-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-hover-label-text-color: var(--md-outlined-text-field-error-hover-label-text-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-leading-icon-color: var(--md-outlined-text-field-error-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-hover-outline-color: var(--md-outlined-text-field-error-hover-outline-color, var(--md-sys-color-on-error-container, #410e0b));--_error-hover-supporting-text-color: var(--md-outlined-text-field-error-hover-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-hover-trailing-icon-color: var(--md-outlined-text-field-error-hover-trailing-icon-color, var(--md-sys-color-on-error-container, #410e0b));--_error-input-text-color: var(--md-outlined-text-field-error-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_error-label-text-color: var(--md-outlined-text-field-error-label-text-color, var(--md-sys-color-error, #b3261e));--_error-leading-icon-color: var(--md-outlined-text-field-error-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_error-outline-color: var(--md-outlined-text-field-error-outline-color, var(--md-sys-color-error, #b3261e));--_error-supporting-text-color: var(--md-outlined-text-field-error-supporting-text-color, var(--md-sys-color-error, #b3261e));--_error-trailing-icon-color: var(--md-outlined-text-field-error-trailing-icon-color, var(--md-sys-color-error, #b3261e));--_focus-input-text-color: var(--md-outlined-text-field-focus-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_focus-label-text-color: var(--md-outlined-text-field-focus-label-text-color, var(--md-sys-color-primary, #6750a4));--_focus-leading-icon-color: var(--md-outlined-text-field-focus-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-outline-color: var(--md-outlined-text-field-focus-outline-color, var(--md-sys-color-primary, #6750a4));--_focus-outline-width: var(--md-outlined-text-field-focus-outline-width, 3px);--_focus-supporting-text-color: var(--md-outlined-text-field-focus-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_focus-trailing-icon-color: var(--md-outlined-text-field-focus-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-input-text-color: var(--md-outlined-text-field-hover-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-label-text-color: var(--md-outlined-text-field-hover-label-text-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-leading-icon-color: var(--md-outlined-text-field-hover-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-outline-color: var(--md-outlined-text-field-hover-outline-color, var(--md-sys-color-on-surface, #1d1b20));--_hover-outline-width: var(--md-outlined-text-field-hover-outline-width, 1px);--_hover-supporting-text-color: var(--md-outlined-text-field-hover-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_hover-trailing-icon-color: var(--md-outlined-text-field-hover-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-color: var(--md-outlined-text-field-input-text-color, var(--md-sys-color-on-surface, #1d1b20));--_input-text-font: var(--md-outlined-text-field-input-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_input-text-line-height: var(--md-outlined-text-field-input-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_input-text-placeholder-color: var(--md-outlined-text-field-input-text-placeholder-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-prefix-color: var(--md-outlined-text-field-input-text-prefix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-size: var(--md-outlined-text-field-input-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_input-text-suffix-color: var(--md-outlined-text-field-input-text-suffix-color, var(--md-sys-color-on-surface-variant, #49454f));--_input-text-weight: var(--md-outlined-text-field-input-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_label-text-color: var(--md-outlined-text-field-label-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_label-text-font: var(--md-outlined-text-field-label-text-font, var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto)));--_label-text-line-height: var(--md-outlined-text-field-label-text-line-height, var(--md-sys-typescale-body-large-line-height, 1.5rem));--_label-text-populated-line-height: var(--md-outlined-text-field-label-text-populated-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_label-text-populated-size: var(--md-outlined-text-field-label-text-populated-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_label-text-size: var(--md-outlined-text-field-label-text-size, var(--md-sys-typescale-body-large-size, 1rem));--_label-text-weight: var(--md-outlined-text-field-label-text-weight, var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)));--_leading-icon-color: var(--md-outlined-text-field-leading-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_leading-icon-size: var(--md-outlined-text-field-leading-icon-size, 24px);--_outline-color: var(--md-outlined-text-field-outline-color, var(--md-sys-color-outline, #79747e));--_outline-width: var(--md-outlined-text-field-outline-width, 1px);--_supporting-text-color: var(--md-outlined-text-field-supporting-text-color, var(--md-sys-color-on-surface-variant, #49454f));--_supporting-text-font: var(--md-outlined-text-field-supporting-text-font, var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto)));--_supporting-text-line-height: var(--md-outlined-text-field-supporting-text-line-height, var(--md-sys-typescale-body-small-line-height, 1rem));--_supporting-text-size: var(--md-outlined-text-field-supporting-text-size, var(--md-sys-typescale-body-small-size, 0.75rem));--_supporting-text-weight: var(--md-outlined-text-field-supporting-text-weight, var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)));--_trailing-icon-color: var(--md-outlined-text-field-trailing-icon-color, var(--md-sys-color-on-surface-variant, #49454f));--_trailing-icon-size: var(--md-outlined-text-field-trailing-icon-size, 24px);--_container-shape-start-start: var(--md-outlined-text-field-container-shape-start-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-start-end: var(--md-outlined-text-field-container-shape-start-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-end: var(--md-outlined-text-field-container-shape-end-end, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_container-shape-end-start: var(--md-outlined-text-field-container-shape-end-start, var(--md-outlined-text-field-container-shape, var(--md-sys-shape-corner-extra-small, 4px)));--_icon-input-space: var(--md-outlined-text-field-icon-input-space, 16px);--_leading-space: var(--md-outlined-text-field-leading-space, 16px);--_trailing-space: var(--md-outlined-text-field-trailing-space, 16px);--_top-space: var(--md-outlined-text-field-top-space, 16px);--_bottom-space: var(--md-outlined-text-field-bottom-space, 16px);--_input-text-prefix-trailing-space: var(--md-outlined-text-field-input-text-prefix-trailing-space, 2px);--_input-text-suffix-leading-space: var(--md-outlined-text-field-input-text-suffix-leading-space, 2px);--_focus-caret-color: var(--md-outlined-text-field-focus-caret-color, var(--md-sys-color-primary, #6750a4));--_with-leading-icon-leading-space: var(--md-outlined-text-field-with-leading-icon-leading-space, 12px);--_with-trailing-icon-trailing-space: var(--md-outlined-text-field-with-trailing-icon-trailing-space, 12px);--md-outlined-field-bottom-space: var(--_bottom-space);--md-outlined-field-container-shape-end-end: var(--_container-shape-end-end);--md-outlined-field-container-shape-end-start: var(--_container-shape-end-start);--md-outlined-field-container-shape-start-end: var(--_container-shape-start-end);--md-outlined-field-container-shape-start-start: var(--_container-shape-start-start);--md-outlined-field-content-color: var(--_input-text-color);--md-outlined-field-content-font: var(--_input-text-font);--md-outlined-field-content-line-height: var(--_input-text-line-height);--md-outlined-field-content-size: var(--_input-text-size);--md-outlined-field-content-space: var(--_icon-input-space);--md-outlined-field-content-weight: var(--_input-text-weight);--md-outlined-field-disabled-content-color: var(--_disabled-input-text-color);--md-outlined-field-disabled-content-opacity: var(--_disabled-input-text-opacity);--md-outlined-field-disabled-label-text-color: var(--_disabled-label-text-color);--md-outlined-field-disabled-label-text-opacity: var(--_disabled-label-text-opacity);--md-outlined-field-disabled-leading-content-color: var(--_disabled-leading-icon-color);--md-outlined-field-disabled-leading-content-opacity: var(--_disabled-leading-icon-opacity);--md-outlined-field-disabled-outline-color: var(--_disabled-outline-color);--md-outlined-field-disabled-outline-opacity: var(--_disabled-outline-opacity);--md-outlined-field-disabled-outline-width: var(--_disabled-outline-width);--md-outlined-field-disabled-supporting-text-color: var(--_disabled-supporting-text-color);--md-outlined-field-disabled-supporting-text-opacity: var(--_disabled-supporting-text-opacity);--md-outlined-field-disabled-trailing-content-color: var(--_disabled-trailing-icon-color);--md-outlined-field-disabled-trailing-content-opacity: var(--_disabled-trailing-icon-opacity);--md-outlined-field-error-content-color: var(--_error-input-text-color);--md-outlined-field-error-focus-content-color: var(--_error-focus-input-text-color);--md-outlined-field-error-focus-label-text-color: var(--_error-focus-label-text-color);--md-outlined-field-error-focus-leading-content-color: var(--_error-focus-leading-icon-color);--md-outlined-field-error-focus-outline-color: var(--_error-focus-outline-color);--md-outlined-field-error-focus-supporting-text-color: var(--_error-focus-supporting-text-color);--md-outlined-field-error-focus-trailing-content-color: var(--_error-focus-trailing-icon-color);--md-outlined-field-error-hover-content-color: var(--_error-hover-input-text-color);--md-outlined-field-error-hover-label-text-color: var(--_error-hover-label-text-color);--md-outlined-field-error-hover-leading-content-color: var(--_error-hover-leading-icon-color);--md-outlined-field-error-hover-outline-color: var(--_error-hover-outline-color);--md-outlined-field-error-hover-supporting-text-color: var(--_error-hover-supporting-text-color);--md-outlined-field-error-hover-trailing-content-color: var(--_error-hover-trailing-icon-color);--md-outlined-field-error-label-text-color: var(--_error-label-text-color);--md-outlined-field-error-leading-content-color: var(--_error-leading-icon-color);--md-outlined-field-error-outline-color: var(--_error-outline-color);--md-outlined-field-error-supporting-text-color: var(--_error-supporting-text-color);--md-outlined-field-error-trailing-content-color: var(--_error-trailing-icon-color);--md-outlined-field-focus-content-color: var(--_focus-input-text-color);--md-outlined-field-focus-label-text-color: var(--_focus-label-text-color);--md-outlined-field-focus-leading-content-color: var(--_focus-leading-icon-color);--md-outlined-field-focus-outline-color: var(--_focus-outline-color);--md-outlined-field-focus-outline-width: var(--_focus-outline-width);--md-outlined-field-focus-supporting-text-color: var(--_focus-supporting-text-color);--md-outlined-field-focus-trailing-content-color: var(--_focus-trailing-icon-color);--md-outlined-field-hover-content-color: var(--_hover-input-text-color);--md-outlined-field-hover-label-text-color: var(--_hover-label-text-color);--md-outlined-field-hover-leading-content-color: var(--_hover-leading-icon-color);--md-outlined-field-hover-outline-color: var(--_hover-outline-color);--md-outlined-field-hover-outline-width: var(--_hover-outline-width);--md-outlined-field-hover-supporting-text-color: var(--_hover-supporting-text-color);--md-outlined-field-hover-trailing-content-color: var(--_hover-trailing-icon-color);--md-outlined-field-label-text-color: var(--_label-text-color);--md-outlined-field-label-text-font: var(--_label-text-font);--md-outlined-field-label-text-line-height: var(--_label-text-line-height);--md-outlined-field-label-text-populated-line-height: var(--_label-text-populated-line-height);--md-outlined-field-label-text-populated-size: var(--_label-text-populated-size);--md-outlined-field-label-text-size: var(--_label-text-size);--md-outlined-field-label-text-weight: var(--_label-text-weight);--md-outlined-field-leading-content-color: var(--_leading-icon-color);--md-outlined-field-leading-space: var(--_leading-space);--md-outlined-field-outline-color: var(--_outline-color);--md-outlined-field-outline-width: var(--_outline-width);--md-outlined-field-supporting-text-color: var(--_supporting-text-color);--md-outlined-field-supporting-text-font: var(--_supporting-text-font);--md-outlined-field-supporting-text-line-height: var(--_supporting-text-line-height);--md-outlined-field-supporting-text-size: var(--_supporting-text-size);--md-outlined-field-supporting-text-weight: var(--_supporting-text-weight);--md-outlined-field-top-space: var(--_top-space);--md-outlined-field-trailing-content-color: var(--_trailing-icon-color);--md-outlined-field-trailing-space: var(--_trailing-space);--md-outlined-field-with-leading-content-leading-space: var(--_with-leading-icon-leading-space);--md-outlined-field-with-trailing-content-trailing-space: var(--_with-trailing-icon-trailing-space)}
`;
      outlined_styles_cssresult_default4 = styles57.styleSheet;
    }
  });

  // node_modules/@material/web/textfield/internal/outlined-text-field.js
  var OutlinedTextField;
  var init_outlined_text_field = __esm({
    "node_modules/@material/web/textfield/internal/outlined-text-field.js"() {
      init_outlined_field2();
      init_static_html();
      init_text_field();
      OutlinedTextField = class extends TextField {
        constructor() {
          super(...arguments);
          this.fieldTag = i6`md-outlined-field`;
        }
      };
    }
  });

  // node_modules/@material/web/textfield/outlined-text-field.js
  var MdOutlinedTextField;
  var init_outlined_text_field2 = __esm({
    "node_modules/@material/web/textfield/outlined-text-field.js"() {
      init_tslib_es6();
      init_outlined_field2();
      init_decorators();
      init_static_html();
      init_outlined_styles_cssresult4();
      init_outlined_text_field();
      init_shared_styles_cssresult7();
      MdOutlinedTextField = class MdOutlinedTextField2 extends OutlinedTextField {
        constructor() {
          super(...arguments);
          this.fieldTag = i6`md-outlined-field`;
        }
      };
      MdOutlinedTextField.styles = [styles56, styles57];
      MdOutlinedTextField = __decorate([
        t("md-outlined-text-field")
      ], MdOutlinedTextField);
    }
  });

  // node_modules/@material/web/all.js
  var init_all = __esm({
    "node_modules/@material/web/all.js"() {
      init_elevated_button2();
      init_filled_button2();
      init_filled_tonal_button2();
      init_outlined_button2();
      init_text_button2();
      init_checkbox2();
      init_assist_chip2();
      init_chip_set2();
      init_filter_chip2();
      init_input_chip2();
      init_suggestion_chip2();
      init_dialog2();
      init_divider2();
      init_elevation2();
      init_branded_fab();
      init_fab2();
      init_filled_field2();
      init_outlined_field2();
      init_md_focus_ring();
      init_icon2();
      init_filled_icon_button();
      init_filled_tonal_icon_button();
      init_icon_button2();
      init_outlined_icon_button();
      init_list2();
      init_list_item2();
      init_menu2();
      init_menu_item2();
      init_sub_menu2();
      init_circular_progress2();
      init_linear_progress2();
      init_radio2();
      init_ripple2();
      init_filled_select2();
      init_outlined_select2();
      init_select_option2();
      init_slider2();
      init_switch2();
      init_primary_tab2();
      init_secondary_tab2();
      init_tabs2();
      init_filled_text_field2();
      init_outlined_text_field2();
      init_elevated_button2();
      init_filled_button2();
      init_filled_tonal_button2();
      init_outlined_button2();
      init_text_button2();
      init_checkbox2();
      init_assist_chip2();
      init_chip_set2();
      init_filter_chip2();
      init_input_chip2();
      init_suggestion_chip2();
      init_dialog2();
      init_divider2();
      init_elevation2();
      init_branded_fab();
      init_fab2();
      init_filled_field2();
      init_outlined_field2();
      init_md_focus_ring();
      init_icon2();
      init_filled_icon_button();
      init_filled_tonal_icon_button();
      init_icon_button2();
      init_outlined_icon_button();
      init_list2();
      init_list_item2();
      init_menu2();
      init_menu_item2();
      init_sub_menu2();
      init_circular_progress2();
      init_linear_progress2();
      init_radio2();
      init_ripple2();
      init_filled_select2();
      init_outlined_select2();
      init_select_option2();
      init_slider2();
      init_switch2();
      init_primary_tab2();
      init_secondary_tab2();
      init_tabs2();
      init_filled_text_field2();
      init_outlined_text_field2();
    }
  });

  // node_modules/@material/web/typography/md-typescale-styles.cssresult.js
  var styles58, md_typescale_styles_cssresult_default;
  var init_md_typescale_styles_cssresult = __esm({
    "node_modules/@material/web/typography/md-typescale-styles.cssresult.js"() {
      init_lit();
      styles58 = i`@layer{.md-typescale-display-small,.md-typescale-display-small-prominent{font:var(--md-sys-typescale-display-small-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-display-small-size, 2.25rem)/var(--md-sys-typescale-display-small-line-height, 2.75rem) var(--md-sys-typescale-display-small-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-display-medium,.md-typescale-display-medium-prominent{font:var(--md-sys-typescale-display-medium-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-display-medium-size, 2.8125rem)/var(--md-sys-typescale-display-medium-line-height, 3.25rem) var(--md-sys-typescale-display-medium-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-display-large,.md-typescale-display-large-prominent{font:var(--md-sys-typescale-display-large-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-display-large-size, 3.5625rem)/var(--md-sys-typescale-display-large-line-height, 4rem) var(--md-sys-typescale-display-large-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-headline-small,.md-typescale-headline-small-prominent{font:var(--md-sys-typescale-headline-small-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-headline-small-size, 1.5rem)/var(--md-sys-typescale-headline-small-line-height, 2rem) var(--md-sys-typescale-headline-small-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-headline-medium,.md-typescale-headline-medium-prominent{font:var(--md-sys-typescale-headline-medium-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-headline-medium-size, 1.75rem)/var(--md-sys-typescale-headline-medium-line-height, 2.25rem) var(--md-sys-typescale-headline-medium-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-headline-large,.md-typescale-headline-large-prominent{font:var(--md-sys-typescale-headline-large-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-headline-large-size, 2rem)/var(--md-sys-typescale-headline-large-line-height, 2.5rem) var(--md-sys-typescale-headline-large-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-title-small,.md-typescale-title-small-prominent{font:var(--md-sys-typescale-title-small-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-title-small-size, 0.875rem)/var(--md-sys-typescale-title-small-line-height, 1.25rem) var(--md-sys-typescale-title-small-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-title-medium,.md-typescale-title-medium-prominent{font:var(--md-sys-typescale-title-medium-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-title-medium-size, 1rem)/var(--md-sys-typescale-title-medium-line-height, 1.5rem) var(--md-sys-typescale-title-medium-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-title-large,.md-typescale-title-large-prominent{font:var(--md-sys-typescale-title-large-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-title-large-size, 1.375rem)/var(--md-sys-typescale-title-large-line-height, 1.75rem) var(--md-sys-typescale-title-large-font, var(--md-ref-typeface-brand, Roboto))}.md-typescale-body-small,.md-typescale-body-small-prominent{font:var(--md-sys-typescale-body-small-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-body-small-size, 0.75rem)/var(--md-sys-typescale-body-small-line-height, 1rem) var(--md-sys-typescale-body-small-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-body-medium,.md-typescale-body-medium-prominent{font:var(--md-sys-typescale-body-medium-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-body-medium-size, 0.875rem)/var(--md-sys-typescale-body-medium-line-height, 1.25rem) var(--md-sys-typescale-body-medium-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-body-large,.md-typescale-body-large-prominent{font:var(--md-sys-typescale-body-large-weight, var(--md-ref-typeface-weight-regular, 400)) var(--md-sys-typescale-body-large-size, 1rem)/var(--md-sys-typescale-body-large-line-height, 1.5rem) var(--md-sys-typescale-body-large-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-label-small,.md-typescale-label-small-prominent{font:var(--md-sys-typescale-label-small-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-label-small-size, 0.6875rem)/var(--md-sys-typescale-label-small-line-height, 1rem) var(--md-sys-typescale-label-small-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-label-medium,.md-typescale-label-medium-prominent{font:var(--md-sys-typescale-label-medium-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-label-medium-size, 0.75rem)/var(--md-sys-typescale-label-medium-line-height, 1rem) var(--md-sys-typescale-label-medium-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-label-medium-prominent{font-weight:var(--md-sys-typescale-label-medium-weight-prominent, var(--md-ref-typeface-weight-bold, 700))}.md-typescale-label-large,.md-typescale-label-large-prominent{font:var(--md-sys-typescale-label-large-weight, var(--md-ref-typeface-weight-medium, 500)) var(--md-sys-typescale-label-large-size, 0.875rem)/var(--md-sys-typescale-label-large-line-height, 1.25rem) var(--md-sys-typescale-label-large-font, var(--md-ref-typeface-plain, Roboto))}.md-typescale-label-large-prominent{font-weight:var(--md-sys-typescale-label-large-weight-prominent, var(--md-ref-typeface-weight-bold, 700))}}
`;
      md_typescale_styles_cssresult_default = styles58.styleSheet;
    }
  });

  // node_modules/@material/web/typography/md-typescale-styles.js
  var init_md_typescale_styles = __esm({
    "node_modules/@material/web/typography/md-typescale-styles.js"() {
      init_md_typescale_styles_cssresult();
    }
  });

  // entry.js
  var require_entry = __commonJS({
    "entry.js"() {
      init_all();
      init_md_typescale_styles();
      document.adoptedStyleSheets.push(styles58.styleSheet);
    }
  });
  require_entry();
})();
