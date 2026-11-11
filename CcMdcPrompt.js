class CcMdcPrompt extends HTMLElement {
  constructor() {
    super();
  }
  
  set value (value) {
    this._value = value;
    this.applyValue();
  }

  get value () {
    return this._value;
  }

  applyValue() {
    if (this.availableObjects) {
      var valueinput = this.querySelector("#objects");
      if (valueinput) {
        valueinput.value = this._value;
      }

    } else {
      var valueinput = this.querySelector("#value");
      if (valueinput) {
        valueinput.value = this._value;
      }
    }
  }

  connectedCallback() {
    var label = this.label || this.getAttribute("label") || "";
    var ok = this.ok || this.getAttribute("ok") || t9n`Ok`;
    var cancel = this.cancel || this.getAttribute("cancel") || t9n`Cancel`;

    this.innerHTML = `<md-dialog style="z-index:1000;"
          role="alertdialog"
          aria-modal="true"
          aria-labelledby="my-dialog-title"
          aria-describedby="my-dialog-content">
      <div slot="content" id="my-dialog-content" style="box-sizing:border-box;">
        <cc-mdc-text-field id="value" type="text" style="margin:10px;" label="${label}"></cc-mdc-text-field>
        <cc-mdc-select id="objects" style="margin:10px;" label="${label}"></cc-mdc-select>
      </div>
      <div slot="actions">
        <md-text-button type="button" id="ok">
          <span class="mdc-button__label">${ok}</span>
        </md-text-button>
        <md-text-button type="button" id="cancel">
          <span class="mdc-button__label">${cancel}</span>
        </md-text-button>
      </div>
    </md-dialog>`;

    var okBtn = this.querySelector("#ok");
    okBtn.addEventListener("click", (e) => {
      var valueinput;
      if (this.availableObjects) {
        valueinput = this.querySelector("#objects");
      } else {
        valueinput = this.querySelector("#value");
      }
      if (valueinput) {
        this._value = valueinput.value;
      }

      if (this.checkFun) {
        if (!this.checkFun(this._value)) {
          return;
        }
      }

      if (this.dlgResolve) {
        this.dlgResolve("ok");
      }

      this.mdcComponent.close();
      setTimeout(() => {
        this.parentNode.removeChild(this);
      }, 100);
    })
    var cancelBtn = this.querySelector("#cancel");
    cancelBtn.addEventListener("click", (e) => {
      if (this.dlgResolve) {
        this.dlgResolve("cancel");
      }
      this.mdcComponent.close();
      setTimeout(() => {
        this.parentNode.removeChild(this);
      }, 100);
    })

    var dlgContent = this.querySelector("#my-dialog-content");
    if (this.contentElement) {
      if (this.contentElement.setDialogContainer) {
        this.contentElement.setDialogContainer(this);
      }
      dlgContent.appendChild(this.contentElement);
    }

    if (this.availableObjects) {
      var valueinput = this.querySelector("#value");
      valueinput.parentElement.removeChild(valueinput);

      var valueinput = this.querySelector("#objects");
      if (valueinput) {
        for(var obj of this.availableObjects) {
          valueinput.addItem(obj[this.nameProperty], this.idProperty ? obj[this.idProperty] : obj);
        }
      }
    } else {
      var valueinput = this.querySelector("#objects");
      valueinput.parentElement.removeChild(valueinput);
    }

    this.dialog = this.childNodes[0];
    this.mdcComponent = this.dialog;

    // Never close when the scrim is clicked (MDC scrimClickAction = "").
    this.dialog.addEventListener("cancel", (e) => {
      e.preventDefault();
    });
    // Close on escape key (MDC escapeKeyAction = "close").
    this.dialog.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        e.preventDefault();
        this.mdcComponent.close();
      }
    });
    
    this.mdcComponent.show();


    this.applyValue();
  }

  disconnectedCallback() {
    this.dlgResolve = null;
  }
}

window.customElements.define("cc-mdc-prompt", CcMdcPrompt);

function CcPrompt(label, defaultvalue, checkFun) {
  return new Promise((resolve, reject) => {
    var p = new CcMdcPrompt();
    p.label = label;
    p.value = defaultvalue;
    p.checkFun = checkFun;
    p.dlgResolve = (action) => {
      if (action == "ok") {
        resolve(p.value);
      } else {
        reject();
      }
    };
    document.body.appendChild(p);
  });
}

function CcChooser(label, availableObjects, nameProperty, idProperty, value) {
  return new Promise((resolve, reject) => {
    var p = new CcMdcPrompt();
    p.availableObjects = availableObjects;
    p.nameProperty = nameProperty;
    p.idProperty = idProperty;
    p.label = label;
    p.value = value;
    p.dlgResolve = (action) => {
      if (action == "ok") {
        resolve(p.value);
      } else {
        reject();
      }
    };
    document.body.appendChild(p);
  });
}
