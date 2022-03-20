import {css, html, LitElement} from "lit-element";

export class sliderContent extends LitElement{
    constructor(){
        super();

    }

    render(){
        return html`
        <div class="container">
            <slot name="img"></slot>
             <slot name="satauri"></slot>
              <slot name="text"></slot>
        </div>
        `
    };

    static get styles(){
        return css`
        ::slotted([slot="img"]){
            width: 225px;
            height: 125px;
            object-fit:cover;
        }

        ::slotted([slot="satauri"]){
            font-size: 14px;
            line-height: 20px;
            color:#ff3333;
        }

        ::slotted([slot="text"]){
             width: 221px;
            height: 67px;
            font-size: 12px;
            line-height: 17px;
            color: #979797;
            font-family: "Georgia";
        }

        .wraper{
            display:flex;
        }
        `
    };

}

customElements.define("slider-content",sliderContent);