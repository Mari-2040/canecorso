import {css, html, LitElement} from "lit-element";

export class card extends LitElement{
    constructor(){
        super();

    }

    render(){
        return html`
         <div class="title">
           <slot name="title"></slot>
           <slot name="img"></slot>
           <slot name="texti"></slot>
        </div>
        `;
    }
    static get styles(){
        return css`

        .title {
            width: 225px;
        }

        ::slotted([slot="title"]) {
            margin-top: 50px;
            color: #333333;
            font-family: "Georgia";
            background-color: #eeeeee;
            width: 100%;
            padding: 11px;
            font-size:12px;
            box-sizing: border-box;
        }
        ::slotted([slot="img"]){
            width:225px;
            height: 220px;
            object-fit: none;
        }

        ::slotted([slot="texti"]){

            color: #333333;
            font-family: "Georgia";
            background-color: #eeeeee;
            width: 100%;
            padding: 11px;
            margin-top: -4px;
            font-size:12px;
            box-sizing: border-box;
        }

        .title:hover ::slotted([slot="title"]), .title:hover ::slotted([slot="texti"]) {
            background-color: #336600;
            cursor: pointer;
            color: white;
        }

        `;
    }
}
customElements.define("card-app",card);