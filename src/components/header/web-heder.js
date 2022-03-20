import { css, html, LitElement } from "lit-element";

export class webHeader extends LitElement{
    constructor(){
        super();

    }
    
    render(){
        return html`
        <div class="container">
            <div class="logo">
              <slot name="logo"></slot>
            </div>

            <div class="buttons">
              <slot name="buttons"></slot>
            </div>
        </div>
        `
    };
    static get styles(){
        return css`
        *{
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
      }

      .container{
          display:flex;
          justify-content: space-between;
        }
        .buttons{
            display: flex;
            justify-content: space-between;
           gap: 15px;
        }
        `;
    };
}
customElements.define("web-header",webHeader);