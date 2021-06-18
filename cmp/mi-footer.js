class MiFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = /* html */
            `Copyright &copy; 2021 Martinez Garcia Cristhian.`;
    }
}
customElements.define("mi-footer", MiFooter);
