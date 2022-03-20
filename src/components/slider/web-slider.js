import {css, html, LitElement} from "lit-element";

export class webSlider extends LitElement{
    constructor(){
        super();

    }
    render(){
        return html`
        <div class="wrapper">
            <img class="arrow" src="img/Arrow.png">
             <slot name="info"></slot>
             <slot name="img"></slot>
             <img class="arrow" src="img/Arow.png">
        </div>
        `
    };

    static get styles(){
        return css`
        .arrow{
            width: 15px;
            height: 27px;
        }
        .wrapper{
            display: flex;
            align-items: center;
            justify-content: space-between;
            border-bottom:2px solid #e0e0e0;
            padding-bottom:55px;
        }
        `
    };
}
customElements.define("web-slider",webSlider);