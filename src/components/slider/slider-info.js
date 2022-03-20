import {css, html, LitElement} from "lit-element";

export class sliderInfo extends LitElement{
    constructor(){
        super();
       

    }

    render(){
        return html`
        <div class="wrapper">
            <slot name="title"></slot>
            <slot name="text"></slot>
            <slot name="button"></slot>
        </div>
        <div class="arow">
            <slot name="img"></slot>
            <slot name="img"></slot>
        </div>
                
        `;
    };

    static get properties (){
        return{

        }
    };

    static get styles(){
        return css`

        ::slotted([slot="title"]){
            width: 341px;
            height: 86px;
            font-size: 46px;
            line-height: 46px;
            color: #333333;
            font-family: "Georgia";
            margin-bottom: 30px;
        }

        ::slotted([slot="text"]){

            width: 319px;
            height: 140px;
            font-size: 12px;
            line-height: 19px;
            color: #979797;
            font-family: "Georgia";
            margin-bottom: 20px;
        }

        ::slotted([slot="button"]){

             font-size: 13px;
            line-height: 16px;
            --color: #ffffff;
            font-family: "Georgia";
            --max-width: 116px;
            --border-radius: 17px;
            --background-color: #006622;
            --border-color:#006622;
            border: none;
        }

        `;
    };

}

customElements.define("slider-info",sliderInfo);