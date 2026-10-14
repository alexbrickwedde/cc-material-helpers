class CcMdcSlider extends HTMLElement {
  constructor() {
    super();
    this._disabled = false;
    this._value = 0;
    this._min = 0;
    this._max = 100;
    this._step = 1;

    const resizeObserver = new ResizeObserver((entries) => {
      this.resizehandler();
    });
    resizeObserver.observe(this);
  }

  connectedCallback() {
    var label = this.getAttribute("label") || "Label";
    if (this.hasAttribute("value")) {
      this._value = this.getAttribute("value");
    }
    this._disabled = this.getAttribute("disabled") ? true : false;

    this.innerHTML = html`<md-slider labeled ticks min="${this._min}" max="${this._max}" step="${this._step}" aria-label="${label}" style="width:100%;"></md-slider>
      <span class="mdc-slider__pin-value-marker" style="display:none;"></span>
      <span class="mdc-slider__pin-value-marker marker1" style="display:none;"></span>`;

    this.rootElement = this.childNodes[0];
    this.mdcComponent = this.rootElement;

    this.rootElement.addEventListener("change", (e) => {
      e.stopPropagation();
      var origmarker = this.querySelector(".mdc-slider__pin-value-marker")
      var custommarker = this.querySelector(".marker1")
      this._value = this.mdcComponent.value;
      this.dispatchEvent(new CustomEvent("change", { detail: { value : this._value, custommarker, origmarker }}));
    });

    this.rootElement.addEventListener("input", (e) => {
      e.stopPropagation();
      var origmarker = this.querySelector(".mdc-slider__pin-value-marker")
      var custommarker = this.querySelector(".marker1")
      this._value = this.mdcComponent.value;
      this.dispatchEvent(new CustomEvent("input", { detail: { value : this._value, custommarker, origmarker }}));
    });

    this.applyValue();
    this.applyDisabled();
  }

  disconnectedCallback() {
  }

  resizehandler () {
  }

  set disabled (value) {
    this._disabled = value;
    this.applyDisabled();
  }

  applyDisabled() {
    if (this.mdcComponent) {
      this.mdcComponent.disabled = this._disabled ? true : false;
    }
  }

  set value (value) {
    this._value = value;
    this.applyValue();
  }

  set min (value) {
    this._min = value;
    if (this.mdcComponent) {
      this.mdcComponent.min = this._min;
    }
  }

  set max (value) {
    this._max = value;
    if (this.mdcComponent) {
      this.mdcComponent.max = this._max;
    }
  }

  set step (value) {
    this._step = value;
    if (this.mdcComponent) {
      this.mdcComponent.step = this._step;
    }
  }

  get value () {
    if (this.mdcComponent) {
      return this.mdcComponent.value;
    }
    return this._value;
  }

  applyValue() {
    if (this.mdcComponent && isDefined(this._value)) {
      this.mdcComponent.min = this._min;
      this.mdcComponent.max = this._max;
      this.mdcComponent.value = (this._value);
    }
  }

  refresh() {
  }
}

window.customElements.define("cc-mdc-slider", CcMdcSlider);

