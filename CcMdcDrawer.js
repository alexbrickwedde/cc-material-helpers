class CcMdcDrawer extends HTMLElement {
  constructor() {
    super();
    this._drawerTitleHtml = "";
    this.openDrawer = true;
  }

  connectedCallback() {
    this.innerHTML = html`<aside class="mdc-drawer mdc-drawer--dismissible">
      <div class="mdc-drawer__header"></div>
      <div class="mdc-drawer__content"></div>
    </aside>
    <div class="mdc-drawer-app-content" style="height:100%;">
    </div>`;

    this.mdcList = new CcMdcList();
    this.mdcList.lines = 1;
    this.mdcList.dndarrowconfig = this.dndarrowconfig;
    this.querySelector(".mdc-drawer__content").appendChild(this.mdcList);

    this.drawerElem = this.childNodes[0];
    let self = this;
    this.mdcComponent = {
      get open () {
        return !self.drawerElem.classList.contains("mdc-drawer--closed");
      },
      set open (value) {
        self.drawerElem.classList.toggle("mdc-drawer--closed", !value);
        var content = self.querySelector(".mdc-drawer-app-content");
        if (content) {
          content.classList.toggle("mdc-drawer-app-content--full", !value);
        }
      },
    };
    this.mdcComponent.open = this.openDrawer;
    this.contentElement = this.querySelector(".mdc-drawer-app-content");

    this.header = this.querySelector(".mdc-drawer__header");
    this.header.innerHTML = this._drawerTitleHtml;
  }

  set drawerTitleHtml (drawerTitleHtml) {
    this._drawerTitleHtml = drawerTitleHtml;
    if (this.header) {
      this.header.innerHTML = this._drawerTitleHtml;
    }
  }

  addItem(item) {
    return this.mdcList.addElement(item);
  }

  showDndArrow(li, position) {
    this.mdcList.showDndArrow(li, position);
  }

  hideDndArrow() {
    this.mdcList.hideDndArrow();
  }

  addHeader(html) {
    var hr = document.createElement("hr");
    hr.className = "mdc-list-divider";
    this.mdcList.appendChild(hr);
    var h6 = document.createElement("h6");
    h6.className = "mdc-list-group__subheader";
    h6.innerHTML = html;
    this.mdcList.appendChild(h6);
  }

  clear() {
    this.mdcList.clearItems();
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-drawer", CcMdcDrawer);
