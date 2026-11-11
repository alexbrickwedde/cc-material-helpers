class CcMdcRadio extends HTMLElement {
  constructor() {
    super();
    this._disabled = false;
  }

  connectedCallback() {
    globalLabelCount++;

    var label = this.getAttribute("label") || "Label";
    var name = this.getAttribute("name") || `cc-mdc-label-${globalLabelCount}`;

    this.innerHTML = `<div class="mdc-form-field" style="display:inline-flex;align-items:center;gap:12px;">
      <md-radio id="cc-mdc-label-${globalLabelCount}" touch-target="wrapper"></md-radio>
      <label for="cc-mdc-label-${globalLabelCount}"></label>
    </div>
    `;

    this.mdcComponent = this.querySelector("md-radio");
    this.mdcComponent.setAttribute("name", name);
    this.input = this.mdcComponent;
    this.label = this.querySelector("label");
    this.label.innerText = label;
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
    if (this.label) {
      if (this._disabled) {
        this.label.style.color = "rgba(0, 0, 0, 0.38)";
      } else {
        this.label.style.color = "inherit";
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

window.customElements.define("cc-mdc-radio", CcMdcRadio);
