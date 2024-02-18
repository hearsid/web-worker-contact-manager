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
                .contacts-container {
                    display: flex;
                    flex-wrap: wrap;
                    justify-content: center;
                }

                .contact-image {
                    border: 1px solid darkgrey;
                    border-radius: 3px;
                    padding: 2px;
                }

                @keyframes scale-image {
                    0% {
                        transform: scale(1.5, 1.5);
                    }
                    30% {
                        transform: rotate(10deg);
                    }
                    60% {
                        transform: rotate(-10deg);
                    }
                    80% {
                        border: 5px solid mediumpurple;
                        border-radius: 4px;
                        display: inherit;
                    }
                }

                .my-repeat-animation.ng-enter.ng-enter-active,
                .my-repeat-animation.ng-leave {
                    opacity: 1;
                    -webkit-transition: opacity 300ms linear;
                    -moz-transition: opacity 300ms linear;
                    transition: opacity 300ms linear;
                }

                .my-repeat-animation.ng-leave.ng-leave-active,
                .my-repeat-animation.ng-enter {
                    opacity: 0;
                    -webkit-transition: opacity 300ms linear;
                    -moz-transition: opacity 300ms linear;
                    transition: opacity 300ms linear;
                }

                .contact {
                    text-align: center;
                    display: inline-flex;
                    border: 1px solid gray;
                    border-radius: 5px;
                    margin: 4px;
                    padding: 4px;
                    min-width: 400px;
                }

                .contact:hover {
                    background: var(--opaque-background);
                }

                .contact .thumbnail {
                    float: none !important;
                    width: 100%;
                    border: 0px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    flex-basis: content;
                }

                .contact .media-body {
                    width: 100%;
                    text-align: left;
                    padding: 5px;
                    display: flex;
                    flex-direction: column;
                }

                .contact .media-body .info-container {
                    display: flex;
                    flex-direction: column;
                    line-height: 20px;
                    margin-top: auto;
                    margin-bottom: auto;
                    font-weight: 400;
                    font-size: 12px;
                }

                .contact .media-body .info-container .row {
                    display: flex;
                }

                .contact .media-body .info-container .row .label {
                    margin-right: auto;
                    color: rgba(58, 57, 57, 0.837);
                }

                .contact .media-body .info-container .row .value {
                    margin-left: auto;
                }

                .contact .media-body .media-heading {
                    width: 100%;
                }

                .contact .media-body .media-heading a {
                    display: inline-block;
                    float: right;
                    margin-right: 10px;
                }

                .media-object {
                    width: 128px;
                    height: 128px;
                    border-radius: 5px;
                }

                .gg-trash {
                    box-sizing: border-box;
                    position: relative;
                    display: block;
                    transform: scale(var(--ggs, 1));
                    width: 10px;
                    height: 12px;
                    border: 2px solid transparent;
                    box-shadow: 0 0 0 2px, inset -2px 0 0, inset 2px 0 0;
                    border-bottom-left-radius: 1px;
                    border-bottom-right-radius: 1px;
                    margin-top: 4px;
                }

                .gg-trash::after,
                .gg-trash::before {
                    content: "";
                    display: block;
                    box-sizing: border-box;
                    position: absolute;
                }

                .gg-trash::after {
                    background: currentColor;
                    border-radius: 3px;
                    width: 16px;
                    height: 2px;
                    top: -4px;
                    left: -5px;
                }

                .gg-trash::before {
                    width: 10px;
                    height: 4px;
                    border: 2px solid;
                    border-bottom: transparent;
                    border-top-left-radius: 2px;
                    border-top-right-radius: 2px;
                    top: -7px;
                    left: -2px;
                }

                .gg-trash:hover {
                    cursor: pointer;
                }
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