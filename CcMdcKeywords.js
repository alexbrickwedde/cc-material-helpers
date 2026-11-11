class CcMdcKeywords extends HTMLElement {
  constructor(label) {
    super();
    this.label = label;
    this._disabled = false;
    this._items = [];
    this.width = 200;
  }

  set disabled (value) {
    this._disabled = value;
    this.applyDisabled();
  }

  applyDisabled() {
    if (this.mdcElement) {
      for(var chip of this.mdcElement.querySelectorAll("md-assist-chip, md-input-chip")) {
        chip.disabled = this._disabled ? true : false;
      }
    }
  }
  
  set value (value) {
    try {
      if (value && value.push && value.unshift) {
        this._items = JSON.parse(JSON.stringify(value));
      }
    } catch (e) {
    }
    this.applyValue();
  }

  get value () {
    return this._items;
  }

  applyValue() {
    if (!this.mdcElement) {
      return;
    }

    this.mdcElement.innerHTML = "";

    var addChip = document.createElement("md-assist-chip");
    addChip.id = "@@add@@";
    addChip.label = "";
    addChip.innerHTML = `<span>${this._label}</span><span slot="icon" class="material-icons">add</span>`;
    addChip.addEventListener("click", (e) => {
      e.stopPropagation();
      e.preventDefault();
      if (this._disabled) {
        return;
      }
      CcPrompt("Keyword", "")
      .then((keyword) => {
        this._items.push(keyword);
        this.applyValue();
      });
    });
    this.mdcElement.appendChild(addChip);

    for(let i = 0; i < this._items.length; i++) {
      let item = this._items[i];
      var chip = document.createElement("md-input-chip");
      chip.id = item.value;
      chip.label = "";
      chip.innerHTML = `<span>${item}</span>`;
      chip.addEventListener("remove", (e) => {
        e.preventDefault();
        if (this._disabled) {
          return;
        }
        this._items.splice(i, 1);
        this.applyValue();
      });
      this.mdcElement.appendChild(chip);
    }

    this.applyDisabled();
  }

  connectedCallback() {
    this.style.display = "inline-block";

    this._label = this.label || this.getAttribute("label") || "";
    var width = this.getAttribute("width") || this.width || 200;

    this.innerHTML = `<md-chip-set></md-chip-set>`;

    this.mdcElement = this.childNodes[0];

    this.applyValue();
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-keywords", CcMdcKeywords);
