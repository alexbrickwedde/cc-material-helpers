var globalLabelCount = 0;

class CcMdcTextField extends HTMLElement {
  constructor() {
    super();
    this._disabled = false;
  }

  connectedCallback() {
    globalLabelCount++;

    var step = this.getAttribute("step") || undefined;
    var min = this.getAttribute("min") || undefined;
    var max = this.getAttribute("max") || undefined;

    this.type = this.getAttribute("type") || this.type || "text";
    var label = this._label || this.getAttribute("label") || "Label";
    var pattern = this.getAttribute("pattern") || this.pattern || undefined;

    if (this.hasAttribute("value")) {
      this._value = this.getAttribute("value");
    }
    
    if (this.getAttribute("disabled")) {
      this._disabled = true;
    }

    var hasWidth = ("" + this.style.width).indexOf("px") > 0 || ("" + this.style.width).indexOf("vw") > 0;
    var hasHeight = ("" + this.style.height).indexOf("px") > 0 || ("" + this.style.height).indexOf("vh") > 0;
    var hasTrailingIcon = this.getAttribute("trailingicon") || this.trailingicon || false;
    var type = this.type;
    switch (this.type) {
      case "minutes":
        type = "time";
        break;
    }

    if (this.type == "color") {
      this.innerHTML = html`<md-filled-text-field type="text" label="${label}" ${isDefined(pattern) ? `pattern="${pattern}"` : ``} ${(hasWidth || hasHeight) ? `style="width:100%"` : `style="width:140px"`}>
  <button slot="trailing-icon" style="vertical-align:top;padding:0px;border:1px solid var(--md-sys-color-outline);border-radius:4px;display:inline-block;width:24px;height:24px;cursor:pointer;"></button>
</md-filled-text-field>`;
      this.mdcComponent = this.childNodes[0];
      this.labeldiv = this.mdcComponent;
      this.input = this.mdcComponent;
      this.button = this.querySelector("button");
      this.button.addEventListener("click", () => {
        CcColorPickerDlg(t9n`color picker`, this.value)
        .then((color) => {
          this.value = "#" + color.rgba[0].toString(16).pad(2) + color.rgba[1].toString(16).pad(2) + color.rgba[2].toString(16).pad(2);
          this.dispatchEvent(new InputEvent("input"));
          this.dispatchEvent(new InputEvent("change"));
        })
        .catch((e) => {
          console.error(e)
        });
      })
      this.input.addEventListener("change", () => {
        this.button.style.backgroundColor = this.value;
      })
      this.input.addEventListener("input", () => {
        this.button.style.backgroundColor = this.value;
      })
    } else {
      this.innerHTML = html`<md-filled-text-field type="${type}" label="${label}" ${isDefined(step) ? `step="${step}"` : ``} ${isDefined(min) ? `min="${min}"` : ``} ${isDefined(max) ? `max="${max}"` : ``} ${isDefined(pattern) ? `pattern="${pattern}"` : ``} ${(hasWidth || hasHeight) ? `style="width:100%"` : ``}>
  <i id="trailingIcon" slot="trailing-icon" style="opacity:0.4;cursor:pointer;${hasTrailingIcon ? "" : "display:none;"}" class='material-icons'>${hasTrailingIcon}</i>
</md-filled-text-field>`;
      this.mdcComponent = this.childNodes[0];
      this.labeldiv = this.mdcComponent;
      this.input = this.mdcComponent;
    }

    if (hasTrailingIcon) {
      var i = this.querySelector("#trailingIcon");
      i.addEventListener("click", (e) => {
        e.stopPropagation();
        e.preventDefault();
        this.dispatchEvent(new CustomEvent("clicktrailingicon"));
      });
    }

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

    this.input.addEventListener("blur", () => {
      var mod = false;
      if (max !== undefined && this.value > parseFloat(max)) {
        this.value = max;
        mod = true;
      }
      if (min !== undefined && this.value < parseFloat(min)) {
        this.value = min;
        mod = true;
      }
      if (mod) {
        this.dispatchEvent(new InputEvent("input"));
        this.dispatchEvent(new InputEvent("change"));
      }
    });

    var inputfun = htmlFunctionArray[this.getAttribute("@input")];
    if (inputfun) {
      var d = debounce(inputfun.func, 100)
      this.input.addEventListener("input", d);
      this.input.addEventListener("keyup", d);
      this.input.addEventListener("keydown", d);
      this.input.addEventListener("change", d);
    }
    
    this.input.addEventListener("paste", (e) => {e.stopPropagation();}, true);
    this.input.addEventListener("copy", (e) => {e.stopPropagation();}, true);
    this.input.addEventListener("cut", (e) => {e.stopPropagation();}, true);

    var changefun = htmlFunctionArray[this.getAttribute("@change")];
    if (changefun) {
      this.addEventListener("change", changefun.func);
    }

    let enterfun = htmlFunctionArray[this.getAttribute("@enter")];
    if (enterfun) {
      this.addEventListener("keyup", (e) => {
        if (e.key === 'Enter' || e.keyCode === 13) {
          enterfun.func();
        }
      });
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
    switch (this.type) {
      case "hex":
        if (value && value.length > 0) {
          this._value = Array.from(value).map((v) => v.toHex(2)).join(",");
        } else {
          this._value = "";
        }
        break;
      case "datetime-local":
        if (value) {
          var tzoffset = (new Date(value)).getTimezoneOffset() * 60000;
          this._value = new Date(value - tzoffset).toISOString().slice(0,-5);
        } else {
          this._value = "";
        }
        break;
      case "minutes":
        this._value = CcMdcTextField_minutesToString(value);
        break;
      case "color":
        this._value = value;
        if (this.button) {
          this.button.style.backgroundColor = value;
        }
        break;
      default:
        this._value = value;
        break;
    }
    this.applyValue();
  }

  get value () {
    if (this.mdcComponent) {
      switch (this.type) {
        case "datetime-local":
          return new Date(this.mdcComponent.value).getTime();
        case "minutes":
          var x = this.mdcComponent.value.split(":");
          return parseInt(x[0]) * 60 + parseInt(x[1]);
        case "hex":
          var x = (this.mdcComponent.value || "").trim();
          if (x.length == 0) {
            return [];
          }
          x = x.split(",");
          x = x.map((v) => parseInt(v, 16))
          return x;
      }
  
      return this.mdcComponent.value;
    }
    
    switch (this.type) {
      case "datetime-local":
        return new Date(this._value).getTime();
      case "minutes":
        var x = this._value.split(":");
        return parseInt(x[0]) * 60 + parseInt(x[1]);
      case "hex":
        var x = this._value.split(",").map((v) => { return parseInt(v, 16); });
        return x;
    }
    return this._value;
  }

  applyValue() {
    if (this.mdcComponent && isDefined(this._value)) {
      this.mdcComponent.value = this._value;
    }
    if (this.type == "color") {
      if (this.button) {
        this.button.style.backgroundColor = this._value;
      }
    }
  }

  focus() {
    if (this.mdcComponent) {
      this.mdcComponent.focus();
    }
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-text-field", CcMdcTextField);

function CcMdcTextField_minutesToString(value) {
  return ("00" + parseInt(parseInt(value) / 60)).slice(-2) + ":" + ("00" + (parseInt(value) % 60)).slice(-2);
}

