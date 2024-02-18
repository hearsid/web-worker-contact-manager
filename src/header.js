// Define the custom element
class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
                    <style>
                        /* Add your custom styles here */
                        .header {
                            background-color: #f0f0f0;
                            padding: 20px;
                            text-align: center;
                        }
                    </style>
                    <div class="header">
                        <header class="bs-header">
                        <div class="container">
                            <h1>Contact Manager</h1>
                            <p>Simple example application</p>
                        </div>
                        </header>
                        
                    </div>
                `;
    }
}

// Register the custom element
customElements.define('contact-manager-header', Header);