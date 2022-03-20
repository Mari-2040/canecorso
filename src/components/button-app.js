import {css, html, LitElement} from "lit-element";

export class buttonApp extends LitElement{
    constructor(){
        super();
        this.type;

    }

    render(){
        return html`
        <div class="wrapper">
            <span>
                <slot></slot>
            </span>
        </div>
        `;
    }

    static get properties (){
        return {
            type:String,
        };
    }

    static get styles(){
        return css`

        :host {
            --color:white;
            --background-color: gray;
            --border-color: gray;
            --border-radius:12px;
            --max-width:100px;
            --padding:8px;
            --hover-color:white;
            --border:1px solid var(--border-color);
        }
        .wrapper{
            
            background-color:var(--background-color);
            color:var(--color);
            max-width:var(--max-width);
            padding:var(--padding);
            text-align:center;
            border-radius:var(--border-radius);
            cursor:pointer;
            margin-top:10px;
            border:var(--border);
            transition:0.3s;
            
        }

        .wrapper:hover{
            background-color:var(--hover-color);
            color:var(--background-color);
            transition:0.3s;

        }

        :host([type="error"]){
            --background-color:red;
            --border-color:red;
        }
        :host([type="success"]){
            --background-color:green;
            --border-color:green;
        }
        :host([type="warning"]){
            --background-color:blue;
            --border-color:blue;
        }
        `
    }
}
customElements.define("button-app",buttonApp);