class MiFooter
  extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `<p>
        &copy; 2021
        Martinez Garcia Cristhian.
      </p>`;
  }
}

customElements.define(
  "mi-footer", MiFooter);
