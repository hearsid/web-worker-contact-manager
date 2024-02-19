// Define the custom element
class Header extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
                    <style>
                        .bs-header {
                            position: relative;
                            width: 100%;
                            padding: 30px 0px;
                            font-size: 20px;
                            color: #cdbfe3;
                            text-align: center;
                            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.1);
                            background-color: #6f5499;
                            background-image: -webkit-linear-gradient(top, var(--primary-color) 0%, #6f5499 100%);
                            background-image: linear-gradient(to bottom, var(--primary-color) 0%, #6f5499 100%);
                            background-repeat: repeat-x;
                            filter: progid:DXImageTransform.Microsoft.gradient(startColorstr="var(--primary-color)", endColorstr="#6F5499", GradientType=0);
                        }

                        .bs-header h1 {
                            margin-top: 0;
                            color: #fff;
                        }

                        .bs-header p {
                            margin-bottom: 0;
                            font-weight: 300;
                            line-height: 1.4;
                        }

                        .container {
                            margin: auto;
                            width: 80%;
                        }
                    </style>
                    <div class="header">
                        <header class="bs-header">
                        <div class="container">
                            <h1>Contact Manager</h1>
                            <p>Web Worker- Simple Example</p>
                        </div>
                        </header>
                    </div>
                `;
    }
}

// Register the custom element
customElements.define('contact-manager-header', Header);