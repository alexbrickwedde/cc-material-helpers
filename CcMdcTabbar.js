class CcMdcTabbar extends HTMLElement {
  constructor() {
    super();
    this.items = [];
    this._activeTab = -1;
  }

  connectedCallback() {
    this.innerHTML = html`<md-tabs></md-tabs>`;

    this.tabbarContent = this.childNodes[0];
    this.tabbar = this.tabbarContent;
    this.mdcComponent = this.tabbarContent;
    for (let i = 0; i < this.items.length; i++) {
      var e = this.items[i];
      e.addEventListener("click", () => {
        this.activateTab(i);
      });
      this.tabbarContent.appendChild (e);
    }

    this.tabbar.addEventListener("change", (e) => {
      var index = this.mdcComponent.activeTabIndex;
      this.dispatchEvent(new CustomEvent("change", { detail : index }))
      var item = this.items[index];
      if (item) {
        item.dispatchEvent(new CustomEvent("activated", { detail : null }));
      }
    });

    if (this._activeTab >= 0) {
      this.mdcComponent.activeTabIndex = this._activeTab;
    }
  }

  clearItems() {
    this.items = [];
    if (this.tabbarContent) {
      this.tabbarContent.innerHTML = ``;
    }
  }
  
  activateTab (index) {
    this._activeTab = index;
    if (this.mdcComponent) {
      this.mdcComponent.activeTabIndex = this._activeTab;
    }
  }

  addTab(icon, text) {
    var e = document.createElement("md-primary-tab");
    e.role = "tab";
    e.tabindex = this.items.length;
    e.innerHTML = `
          <span class="material-icons" slot="icon" aria-hidden="true">${icon}</span>
          <span class="mdc-tab__text-label">${text}</span>`;
    return this.addElement(e);
  }

  addElement(li) {
    if (this.tabbarContent) {
      li.addEventListener("click", () => {
        this.activateTab(li.tabindex);
      });
      this.tabbarContent.appendChild (li);
    }
    this.items.push(li);
    return li;
  }

  disconnectedCallback() {
  }
}

window.customElements.define("cc-mdc-tabbar", CcMdcTabbar);
