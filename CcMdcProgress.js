class CcMdcProgress extends HTMLElement {
  constructor() {
    super();
    this.showCount = 0;
  }

  connectedCallback() {
    this.style = "display:none;position:absolute;top:0px;left:0px;right:0px;bottom:0px;padding-left:calc(50vw - 24px);padding-top:calc(50vh - 24px);background-color:rgba(128,128,128,0.5)";

    var label = this.label || this.getAttribute("label") || "";

    this.innerHTML = html`<md-circular-progress indeterminate style="--md-circular-progress-size:48px;" aria-label="${label}"></md-circular-progress>`;

    this.mdcComponent = this.childNodes[0];
    if (this.showCount > 0) {
      this.style.display = "block";
    }
  }

  show() {
    this.showCount++;
    this.style.display = "block";
  }

  hide() {
    this.showCount--;
    if (this.showCount <= 0) {
      this.style.display = "none";
    }
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-progress", CcMdcProgress);
