import {css, html, LitElement} from "lit-element";

export class sliderCircle extends LitElement{
    constructor(){
        super();

    }

    render(){
        return html`
        <div class="container">
            <img class="wre" src="${this.src}">
        </div>
        `
    };
    static get properties (){
        return {
            src:String,
        };
    }

    static get styles(){
        return css`
        .wre{
            width: 380px;
            height: 380px;
            border-radius: 50%;
            background-color: #333333;
            border: 32px solid #336600;
            object-fit:cover;
            
        }
        `
    };
}

customElements.define("slider-circle",sliderCircle);