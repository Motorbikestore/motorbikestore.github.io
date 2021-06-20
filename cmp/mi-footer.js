class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
    `Copyright & Copy; 2021 Martinez Garcia Cristhian.`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
