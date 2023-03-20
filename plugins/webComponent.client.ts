export default defineNuxtPlugin(() => {
    const componentName = 'custom-div'
    if (!customElements.get(componentName)) {
        class HelloWorldComponent extends HTMLElement {
            constructor() {
                super();
            }

            connectedCallback() {
                this.innerHTML = `<h1>Hello world! I'm a custom element</h1>`
            }

        }

        customElements.define(componentName, HelloWorldComponent)
    }
})
