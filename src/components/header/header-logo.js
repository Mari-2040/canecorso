import { css, html, LitElement } from "lit-element";

export class hederLogo extends LitElement{
    constructor(){
        super();

    }

    render(){
        return html`
        <div class="wrapper">
           <p class="logo">${this.logo}</p>
           <p class="texti">${this.text}</p>
        </div>
        `
    }
    
    static get properties() {
        return {
            logo: {
                type: String,
            },
            text: {
                type: String,
            },
        }
    }

    static get styles(){
        return css `
     *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
    }

       .logo{
            font-size: 32px;
            line-height: 32px;
            color: #96739f;
            font-family: "Georgia";
            margin-bottom: 11px;
         }
         .texti{
            font-size: 12px;
            line-height: 12px;
            color: #979797;
            font-family: "Georgia";
        }
     `;
   }
}

customElements.define("header-logo",hederLogo);