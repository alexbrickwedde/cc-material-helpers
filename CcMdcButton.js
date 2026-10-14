class CcMdcButton extends HTMLElement {
  constructor() {
    super();
    this._disabled = false;
    this._color = null;
    this.addEventListener("click", (e) => {
      if (this._disabled) {
        e.cancelBubble = true;
        e.preventDefault();
        e.stopPropagation();
        e.stopImmediatePropagation();
        return false;
      }
    });
  }

  setIcon(icon) {
    this.icon = icon;

    if (icon && icon.charAt && icon.charAt(0) == "/") {
      icon = html`<img src="${icon}" style="width:16px;height:16px;">`;
    }
    var i = this.selfIcon ? this : this.querySelector(".material-icons");
    if (i) {
      i.innerHTML = icon;
    }
    return this;
  }

  setLabel(label) {
    this.label = label;
    return this;
  }

  set label (value) {
    this._label = value;
    var x = this.querySelector(".mdc-floating-label");
    if (x) {
      x.innerText = value;
    }
    var x = this.querySelector(".mdc-button__label");
    if (x) {
      x.innerText = value;
    }
  }

  setSelectStyle(label, value) {
    this.selectlabel = label;
    this.selectvalue = value;

    var sl = this.querySelector("#selectlabel");
    if (sl) {
      sl.innerText = this.selectlabel;
    }
    var sl = this.querySelector("#selectvalue");
    if (sl) {
      sl.innerText = this.selectvalue;
    }
  }

  setActionbar(actionbar) {
    this.actionbar = actionbar;
    return this;
  }

  setColor(color) {
    this._color = color;
    if (this.button) {
      this.applyColor();
    }
    return this;
  }

  applyColor() {
    if (this.button && this._color) {
      this.button.style.color = this._color;
      this.button.style.setProperty("--md-filled-button-label-text-color", this._color);
      this.button.style.setProperty("--md-filled-button-icon-color", this._color);
      this.button.style.setProperty("--md-icon-button-icon-color", this._color);
    }
  }

  set disabled (value) {
    this._disabled = value;
    this.applyDisabled();
  }

  applyDisabled() {
    if (this.button) {
      if (this.selectlabel) {
        var d = this.querySelector(".mdc-select");
        if (this._disabled) {
          d.className = "mdc-select mdc-select--disabled mdc-select--filled"
        } else {
          d.className = "mdc-select mdc-select--filled"
        }
        return;
      }
      if (this._disabled) {
        this.button.setAttribute("disabled", true);
      } else {
        this.button.removeAttribute("disabled");
      }
    }
  }
  
  connectedCallback() {
    var label = this._label || this.getAttribute("label") || null;
    var icon = this.icon || this.getAttribute("icon") || null;
    var actionbar = this.actionbar || this.getAttribute("actionbar") || false;
    this.selfIcon = isDefined(this.selfIcon) ? this.selfIcon : ((this.getAttribute("selficon") ? true : false) || false);

    if (icon && icon.charAt && icon.charAt(0) == "/") {
      icon = html`<img src="${icon}" style="width:16px;height:16px;">`;
    }

    var hasFontSize = ("" + this.style.fontSize).indexOf("p") > 0;
    var hasWidth = ("" + this.style.width).indexOf("px") > 0;
    var hasHeight = ("" + this.style.height).indexOf("px") > 0;

    this.style.userSelect = "none";

    if (this.selectlabel) {
      this.innerHTML = html`<button style="border:0px;background-color:transparent;padding:0px;cursor:pointer;">
      <div class="mdc-select mdc-select--filled" style="min-width:170px;max-width:170px;width:170px;">
        <span class="mdc-floating-label" id="selectlabel">${this.selectlabel}</span>
        <span class="mdc-select__selected-text" id="selectvalue">${this.selectvalue}</span>
      </div>
    </button>`;
      this.button = this.childNodes[0];
    } else if (icon && label) {
      this.innerHTML = html`<md-filled-button style="${hasWidth ? `width:100%;` : ``}${hasHeight ? `height:100%;` : ``}${hasFontSize ? `font-size:${this.style.fontSize};--md-filled-button-label-text-size:${this.style.fontSize};` : ``}">
      <i class="material-icons" slot="icon" aria-hidden="true">` + icon + `</i>
      <span class="mdc-button__label">` + label + html`</span>
    </md-filled-button>`;
      this.button = this.childNodes[0];
    } else if (label) {
      this.innerHTML = html`<md-filled-button style="${hasWidth ? `width:100%;` : ``}${hasHeight ? `height:100%;` : ``}${hasFontSize ? `font-size:${this.style.fontSize};--md-filled-button-label-text-size:${this.style.fontSize};` : ``}">
      <span class="mdc-button__label">` + label + html`</span>
    </md-filled-button>`;
      this.button = this.childNodes[0];
    } else if (icon) {
      if (this.selfIcon) {
        this.className = "material-icons mdc-button__icon"
        this.innerHTML = icon;
        this.button = this;
      } else {
        this.innerHTML = html`<md-icon-button aria-label=""><span class="material-icons" aria-hidden="true">` + icon + `</span></md-icon-button>`;
        this.button = this.childNodes[0];
      }
    }

    this.applyColor();

    this.applyDisabled();

    var clickfun = this.getAttribute("@click");
    if (htmlFunctionArray[clickfun]) {
      this.addEventListener("click", htmlFunctionArray[clickfun].func);
    }
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-button", CcMdcButton);
