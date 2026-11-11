class CcMdcChips extends HTMLElement {
  constructor(label) {
    super();
    this.label = label;
    this._value = {};
    this._disabled = false;
    this._items = [];
    this.width = 200;
    this.valueOnly = false;
    this.addButton = false;
    this.valueAsArray = false;
  }

  set disabled (value) {
    this._disabled = value;
    this.applyDisabled();
  }

  applyDisabled() {
    if (this.mdcElement) {
      for(var chip of this.mdcElement.querySelectorAll("md-filter-chip, md-input-chip")) {
        chip.disabled = this._disabled ? true : false;
      }
    }
  }
  
  addItem (html, value, icon) {
    this._items.push({html, value, icon});
    this.applyValue();
  }

  set value (value) {
    if (this.valueAsArray) {
      let obj = {};
      if (value instanceof Array) {
        for(var v of value) {
          obj[v] = true;
        }
      }
      this._value = obj;
    } else {
      this._value = value ? value : {};
    }
    this.applyValue();
  }

  get value () {
    if (this.valueAsArray) {
      let arr = [];
      for(var key in this._value) {
        if (this._value[key]) {
          arr.push(key);
        }
      }
      return arr;
    }
    return this._value;
  }

  #makeRemovableChip(label, chipId) {
    var chip = document.createElement("md-input-chip");
    chip.id = chipId;
    chip.label = "";
    chip.innerHTML = `<span>${label}</span>`;
    if (this._disabled) {
      chip.disabled = true;
    }
    return chip;
  }

  applyValue() {
    if (!this.mdcElement) {
      return;
    }

    if (this._disabled) {
      this.style.opacity = "0.5";
    }

    if (this.addButton) {
      this.addBtn.style.display = "";
    } else {
      this.addBtn.style.display = "none";
    }

    if (this.valueOnly) {
      this.clearChips();

      if (this.bits) {
      } else {
        for(var item in this._value) {
          let chipId = JSON.stringify(item);
          let chip = this.#makeRemovableChip(item, chipId);
          chip.addEventListener("remove", (e) => {
            e.preventDefault();
            if (!this._disabled) {
              var v = JSON.parse(chipId);
              if (this._value[v]) {
                delete this._value[v];
                this.applyValue();
              }
            }
          });
          this.mdcElement.appendChild(chip);
        }
      }

      return;
    }

    if (this.addButton) {
      this.clearChips();

      if (this.bits) {
      } else {
        for(var item of this._items) {
          if (this._value[item.value]) {
            let chipId = item.value;
            let chip = this.#makeRemovableChip(item.html, chipId);
            chip.addEventListener("remove", (e) => {
              e.preventDefault();
              if (!this._disabled) {
                delete this._value[chipId];
                this.dispatchEvent(new CustomEvent("change", {detail: {value : this._value, changed : chipId}}));
                this.applyValue();
              }
            });
            this.mdcElement.appendChild(chip);
          }
        }
      }

      return;
    }

    for(var item of this._items) {
      let chip = document.createElement("md-filter-chip");
      chip.id = item.value;
      chip.label = "";
      chip.innerHTML = `<span>${item.html}</span>` +
        (isDefined(item.icon) ? `<span class="material-icons" style="margin-left:6px;">${item.icon}</span>` : ``);
      if (this._disabled) {
        chip.disabled = true;
      }
      chip.addEventListener("click", (e) => {
        if (this._disabled) {
          return;
        }
        setTimeout(() => {
          if (this.bits) {
            this._value = chip.selected ? this._value | parseInt(chip.id) : this._value & ~parseInt(chip.id);
            this.dispatchEvent(new CustomEvent("change", {detail: {value : this._value, changed : chip.id}}));
          } else {
            this._value[chip.id] = chip.selected;
            this.dispatchEvent(new CustomEvent("change", {detail: {value : this._value, changed : chip.id}}));
          }
        }, 0);
      });
      this.mdcElement.appendChild(chip);
    }
    this._items = [];
    for(var chip of this.mdcElement.querySelectorAll("md-filter-chip")) {
      if (this.bits) {
        chip.selected = (this._value & parseInt(chip.id)) ? true : false;
      } else {
        chip.selected = this._value && this._value[chip.id] ? true : false;
      }
    }
  }

  clearChips() {
    if (this.mdcElement) {
      this.mdcElement.innerHTML = "";
    }
  }

  connectedCallback() {
    this.style.display = "inline-block";
    
    this.bits = this.bits || this.getAttribute("bits") == "true" || false;

    this.innerHTML = `<md-chip-set></md-chip-set><i id="add" style="display:none;margin-left:10px;cursor:pointer;" class="material-icons" aria-hidden="true">add</i>`;

    this.mdcElement = this.childNodes[0];

    this.addBtn = this.querySelector("#add");
    if (this.addButton) {
      this.addBtn.style.display = "";
    }

    this.addBtn.addEventListener("click", (e) => {
      if (this._disabled) {
        return;
      }
      var items = this._items.filter((i) => { return !this._value[i.value] });
      CcChooser(`Add`, items, "html", "value", "")
      .then((value) => {
        this._value[value] = true;
        this.applyValue();
      })
      .catch(() => {
      });
    });

    var changefun = this.getAttribute("@change");
    if (htmlFunctionArray[changefun]) {
      let fun = htmlFunctionArray[changefun];
      this.addEventListener("change", (e) => {setTimeout(() => {fun.func(e)},0)});
    }

    var targetfun = htmlFunctionArray[this.getAttribute(".target")];
    if (targetfun && targetfun.func && targetfun.func instanceof CcD5cHolder) {
      let d5cholder = targetfun.func;
      d5cholder.addEventListener("d5c_changed", () => {
        if (this.value != d5cholder.toString()) {
          this.value = d5cholder.toString();
        }
      })
      this.addEventListener("change", () => {
        d5cholder.setValue(this.value);
      });
      this.value = d5cholder.toString();
    } else if (targetfun && targetfun.func && targetfun.func.__isTarget) {
      let { obj, prop } = targetfun.func();
      this.addEventListener("change", () => {
        obj[prop] = this.value;
      });
      if (isDefined(obj[prop])) {
        this.value = obj[prop];
      }
    }

    this.applyValue();
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-chips", CcMdcChips);
