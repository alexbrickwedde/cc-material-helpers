class CcMdcTextArea extends HTMLElement {
  constructor() {
    super();
    this._disabled = false;
  }

  connectedCallback() {
    globalLabelCount++;
    var label = this._label || this.getAttribute("label") || "Label";

    var hasWidth = ("" + this.style.width).indexOf("px") > 0 || ("" + this.style.width).indexOf("vw") > 0;
    var hasHeight = ("" + this.style.height).indexOf("px") > 0 || ("" + this.style.height).indexOf("vh") > 0;

    this.innerHTML = html`<md-filled-text-field type="textarea" rows="8" cols="40" label="${label}" ${(hasWidth || hasHeight) ? `style="width:100%;height:100%;"` : ``}></md-filled-text-field>`;

    this.mdcComponent = this.childNodes[0];
    this.input = this.mdcComponent;

    var targetfun = htmlFunctionArray[this.getAttribute(".target")];
    if (targetfun && targetfun.func && targetfun.func instanceof CcD5cHolder) {
      let d5cholder = targetfun.func;
      d5cholder.addEventListener("d5c_changed", () => {
        this.value = d5cholder.toString();
      })
      this.addEventListener("change", () => {
        d5cholder.setValue(this.value);
      });
      this.value = d5cholder.toString();
    } else if (targetfun && targetfun.func && targetfun.func.__isTarget) {
      var { obj, prop } = targetfun.func();
      this.addEventListener("change", () => {
        obj[prop] = this.value;
      });
      if (isDefined(obj[prop])) {
        this.value = obj[prop];
      }
    }

    var inputfun = htmlFunctionArray[this.getAttribute("@input")];
    if (inputfun) {
      var d = debounce(inputfun.func, 100)
      this.input.addEventListener("input", d);
      this.input.addEventListener("keyup", d);
      this.input.addEventListener("keydown", d);
      this.input.addEventListener("change", d);
    }

    var changefun = htmlFunctionArray[this.getAttribute("@change")];
    if (changefun) {
      this.addEventListener("change", changefun.func);
    }

    this.applyValue();
    this.applyDisabled();
  }

  set disabled (value) {
    this._disabled = value;
    this.applyDisabled();
  }

  applyDisabled() {
    if (this.mdcComponent) {
      if (this._disabled) {
        this.mdcComponent.disabled = true;
      } else {
        this.mdcComponent.disabled = false;
      }
    }
  }

  set label (value) {
    this._label = value;
    if (this.mdcComponent) {
      this.mdcComponent.label = value;
    }
  }

  set value (value) {
    this._value = value;
    this.applyValue();
  }

  get value () {
    if (this.mdcComponent) {
      return this.mdcComponent.value;
    }
    return this._value;
  }

  applyValue() {
    if (this.mdcComponent && isDefined(this._value)) {
      this.mdcComponent.value = this._value;
    }
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-textarea", CcMdcTextArea);

