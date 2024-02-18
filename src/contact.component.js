class ContactComponent extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        this.render();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                /* Add your CSS styles here */
            </style>
            <div class="my-repeat-animation contact media">
                <div class="thumbnail">
                    <img class="media-object contact-image" alt="contact" 
                        src="./assets/images/${this.getAttribute('id')}.jpg">
                </div>
                <div class="media-body">
                    <h3 class="contact-name">${this.getAttribute('name')}
                        <!-- Uncomment the following line if you want to use it -->
                        <!-- <a class="delete" href="#">
                            <i class="gg-trash"></i>
                        </a> -->
                    </h3>
                    <div class="info-container">
                        <div class="row">
                            <div class="label">Phone Number:</div>
                            <div class="value">${this.getAttribute('tel')}</div>
                        </div>
                        <div class="row">
                            <div class="label">Email:</div>
                            <div class="value">${this.getAttribute('email')}</div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    }
}

customElements.define('contact-component', ContactComponent);