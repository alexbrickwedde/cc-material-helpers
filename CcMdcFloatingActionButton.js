class CcMdcFloatingActionButton extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.style.display = "inline-block";
    
    var label = this.getAttribute("label") || null;
    var icon = this.getAttribute("icon") || "add";

    if (label) {
      this.innerHTML = `<md-fab label="${label}" variant="primary">
      <span class="material-icons" slot="icon">${icon}</span>
    </md-fab>`;
    } else {
      this.innerHTML = `<md-fab variant="primary">
      <span class="material-icons" slot="icon">${icon}</span>
    </md-fab>`;
    }

    this.button = this.childNodes[0];
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-floating-action-button", CcMdcFloatingActionButton);
