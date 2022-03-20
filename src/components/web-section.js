import {css, html, LitElement} from "lit-element";

export class webSection extends LitElement{
    constructor(){
        super();

    }

    render(){
        return html`
        <div class="container">
         <h2>${this.title}</h2>
            <div class="content">
                <slot></slot>
            </div>
            
        </div>
        `
    };

    static get properties(){
        return{
            title:String,
        }
    };

    static get styles(){
        return css`

        :host(:not([inside])) .container{
            width: 1024px;
            margin: auto;
            margin-top:55px;
        }

        :host(:not([no-border])) .content{
            border-top:2px solid #e6e6e6;
            padding-top:45px;
            
        }

        :host([flex-column]) .content {
            display:flex;
            justify-content: space-between;
            flex-direction: column;
            gap:15px;
        }


        :host([flex-row]) .content {
            display:flex;
            justify-content: space-between;
            flex-direction: row;
            gap:15px;
        }

        `
    };
}
customElements.define("web-section",webSection);