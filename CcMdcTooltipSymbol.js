class CcMdcTooltipSymbol extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    var icon = this.getAttribute("icon") || this.innerText || "info";
    var descriptionid = this.getAttribute("descriptionid");

    this.innerHTML = html`<i class="material-icons mdc-button__icon" aria-hidden="true">${icon}</i>`;
    this.querySelector("i").addEventListener("click", () => {
      var desc = window.descriptionmapping[descriptionid];
      if (desc) {
        CcAlert("", desc);
      }
    });
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-tooltip-symbol", CcMdcTooltipSymbol);
