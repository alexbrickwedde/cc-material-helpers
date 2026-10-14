class CcMdcCheckbox extends HTMLElement {
  constructor() {
    super();
    this._disabled = false;
  }

  connectedCallback() {
    globalLabelCount++;

    var label = this.label || this.getAttribute("label") || "Label";
    this._disabled = this.getAttribute("disabled") ? true : false;

    this.innerHTML = html`<div class="mdc-form-field" style="display:inline-flex;align-items:center;gap:12px;">
      <md-checkbox id="cc-mdc-label-${globalLabelCount}" touch-target="wrapper"></md-checkbox>
      <label for="cc-mdc-label-${globalLabelCount}">${label}</label>
    </div>
    `;

    this.mdcComponent = this.querySelector("md-checkbox");
    this.input = this.mdcComponent;
    this.labeldiv = this.querySelector("label");

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
    if (this.labeldiv) {
      if (this._disabled) {
        this.labeldiv.style.color = "rgba(0, 0, 0, 0.38)";
      } else {
        this.labeldiv.style.color = "inherit";
      }
    }
  }

  set value (value) {
    this._value = value;
    this.applyValue();
  }

  get value () {
    if (this.mdcComponent) {
      return this.mdcComponent.checked;
    }
    return this._value;
  }

  applyValue() {
    if (this.mdcComponent && isDefined(this._value)) {
      if (this._value === "true") {
        this.mdcComponent.checked = true;
      } else if (this._value === "false") {
        this.mdcComponent.checked = false;
      } else if (this._value === "on") {
        this.mdcComponent.checked = true;
      } else if (this._value === true) {
        this.mdcComponent.checked = true;
      } else if (this._value === false) {
        this.mdcComponent.checked = false;
      } else {
        this.mdcComponent.checked = this._value;
      }
    }
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-checkbox", CcMdcCheckbox);
