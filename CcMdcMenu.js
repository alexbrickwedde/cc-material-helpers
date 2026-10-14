class CcMdcMenu extends HTMLElement {
  constructor() {
    super();
    this.items = [];
    this.submenus = [];
    this._open = false;
    this.skipFocus = false;
  }

  connectedCallback() {
    this.innerHTML = `<md-menu positioning="fixed" role="menu"></md-menu>`;

    this.ulElem = this.childNodes[0];
    this.mdcComponent = this.ulElem;

    if (this.skipFocus) {
      this.mdcComponent.defaultFocus = "none";
      this.mdcComponent.skipRestoreFocus = true;
    }

    if (this.absoluteXY) {
      this.setAbsolutePosition (this.absoluteXY.x, this.absoluteXY.y);
    } else if (this.anchor) {
      this.mdcComponent.anchorElement = this.anchor;
      this.anchor = null;
    }

    this.mdcComponent.addEventListener("closed", (e) => {
      for(var submenu of this.submenus) {
        try {
          document.body.removeChild(submenu);
        } catch(e) {
        }
        submenu.hasAnchor = false;
      }
      this.dispatchEvent(new CustomEvent("closed", {detail : e.detail}));
    });

    for (var li of this.items) {
      this.ulElem.appendChild (li);
    }

    if (this._open) {
      this.open = this._open;
    }
  }

  #ensureAnchor() {
    if (this.mdcComponent && !this.mdcComponent.anchorElement) {
      this.mdcComponent.anchorElement = this;
    }
  }

  setAbsolutePosition (x, y) {
    if (this.mdcComponent) {
      if (!this.absoluteAnchor) {
        this.absoluteAnchor = document.createElement("div");
        this.absoluteAnchor.style.position = "fixed";
        this.absoluteAnchor.style.width = "0px";
        this.absoluteAnchor.style.height = "0px";
        this.insertBefore(this.absoluteAnchor, this.mdcComponent);
      }
      this.absoluteAnchor.style.left = x + "px";
      this.absoluteAnchor.style.top = y + "px";
      this.mdcComponent.anchorElement = this.absoluteAnchor;
    } else {
      this.absoluteXY = {x, y};
    }
  }

  setAnchorElement(anchor) {
    if (this.mdcComponent) {
      this.mdcComponent.anchorElement = anchor;
    } else {
      this.anchor = anchor;
    }
  }

  set open (value) {
    this._open = value;
    if (this.mdcComponent) {
      this.#ensureAnchor();
      this.mdcComponent.open = this._open;
    }
  }

  clearItems() {
    this.items = [];
    if (this.ulElem) {
      this.ulElem.innerHTML = ``;
    }
  }
  
  addElement(li, value) {
    if (this.ulElem) {
      this.ulElem.appendChild (li);
    }
    li.jsonvalue = JSON.stringify(value);
    if (li.role != "separator" && !li.ccMenuClickListener) {
      li.ccMenuClickListener = true;
      li.addEventListener("click", (e) => {
        var detail = { item : li, index : this.items.indexOf(li) };
        try {
          detail.value = JSON.parse(li.jsonvalue)
        } catch (e) {
        }
        this.dispatchEvent(new CustomEvent("selected", {detail : detail}));
      });
    }
    this.items.push(li);
    return li;
  }

  addItem(html, value) {
    var li = document.createElement("md-menu-item");
    li.role="menuitem";
    li.innerHTML = `<span class="mdc-list-item__text" slot="headline"></span>`;
    var span = li.querySelector(".mdc-list-item__text");
    if (typeof html == "string") {
      span.innerHTML = html;
    } else if (html instanceof HTMLElement) {
      span.appendChild(html);
    }
    this.addElement(li, value);
    return li;
  }

  addSubMenu(html, submenu) {
    this.submenus.push(submenu);

    var li = document.createElement("md-menu-item");
    li.role="menuitem";
    li.keepOpen = true;
    li.innerHTML = `<span class="mdc-list-item__text" slot="headline"></span><span style="margin-left:auto;" id="arrow" slot="end" class="material-icons">arrow_right</span>`;
    var span = li.querySelector(".mdc-list-item__text");

    li.addEventListener("click", (e) => {
      e.stopPropagation();
      e.stopImmediatePropagation();
      e.preventDefault();

      if (!submenu.hasAnchor) {
        submenu.hasAnchor = true;
        submenu.setAnchorElement(li.querySelector("#arrow"));
        document.body.appendChild(submenu);

        submenu.addEventListener("selected", (e) => {
          this.dispatchEvent(new CustomEvent("selected", {detail : e.detail}));
        });
      }

      submenu.open = true;
    });

    if (typeof html == "string") {
      span.innerHTML = html;
    } else if (html instanceof HTMLElement) {
      span.appendChild(html);
    }
    this.addElement(li, undefined);
    return li;
  }

  addSeparator() {
    var li = document.createElement("md-divider");
    li.role="separator";
    this.addElement(li);
    return li;
  }

  disconnectedCallback() {
    for(var submenu of this.submenus) {
      try {
        document.body.removeChild(submenu);
      } catch(e) {
      }
      submenu.hasAnchor = false;
    }
  }
}

window.customElements.define("cc-mdc-menu", CcMdcMenu);
