import {css, html, LitElement} from "lit-element";

export class sliderCulumb extends LitElement{
    constructor(){
        super();

    }
    render(){
        return html`
        <div class="container">
            <slot name="img"></slot>
            <div class="info">
                <slot name="satauri"></slot>
                <slot name="text"></slot>
            </div>
        </div>
        `
    };
    static get styles(){
        return css`
        .container{
            display:flex;
            gap: 15px;
        }

        ::slotted([slot="img"]){
            width: 70px;
            height: 70px;
            border: 2px solid #d8d8d8;
            padding: 4px;
        }

        ::slotted([slot="satauri"]){
            font-size: 25px;
            line-height: 10px;
            color: #979797;
            font-family: "Georgia";
        }

        ::slotted([slot="text"]){
            width: 210px;
            height: 25px;
            font-size: 12px;
            line-height: 17px;
            color: rgb(151, 151, 151);
            font-family: Georgia;
            text-overflow: ellipsis;
            overflow: hidden;
            white-space: nowrap;
        }
        
        `
    };
}
customElements.define("slider-culumb",sliderCulumb);