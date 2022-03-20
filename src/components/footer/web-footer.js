import {css, html, LitElement} from "lit-element";
export class webFooter extends LitElement{
    constructor(){
        super();

    }
    render(){
        return html`
         <div class="conteineri">
     <div class="ran">
       <div class="twest">
        <div class="sweet">LATEST TWEETS</div>
          <div class="post">Post Title</div>
          <div class="by">Posted by Admin on 0000</div>
          <div class="loren">estibulumaccumsan egestibulum eu justo convallis augue estas aenean elit intesque sed. 
                Facilispede estibulum nulla orna nisl velit elit ac aliquat non tincidunt. 
                Namjusto cras urna urnaretra lor urna neque sed quis orci nulla.
                Laoremut vitae doloreet.</div>
          <button class="read">Read More »</button>
       </div>

       <div class="twest">
         <div class="link">QUICK LINKS</div>
          <div class="text">Link Text Here</div>
           <div class="xazi"></div>
            <div class="text">Link Text Here</div>
             <div class="xazi"></div>
              <div class="text">Link Text Here</div>
               <div class="xazi"></div>
                <div class="text">Link Text Here</div>
                 <div class="xazi"></div>
                  <div class="text">Link Text Here</div>
                   <div class="xazi"></div>
                    <div class="text">Link Text Here</div>
                      <div class="xazi"></div>
          </div>
              
          <div class="twest">
            <div class="contact">CONTACT US</div>
             <div class="compani">Company Name</div>
              <div class="town">
                Street Name & Number
                Town:
                Postcode/Zip</div>
                <div class="tel">
                  Tel:xxxxx xxxxxxxxxx</div>

                  <div class="tel">
                    Fax:xxxxx xxxxxxxxxx</div>

                    <div class="tel">
                      Email:contact@mydomain.com</div>
            </div>

            <div class="twest">
               <div class="social">SOCIALISE</div>
               <div class="icons">
                <img class="in" src="img/in.png">
                 <div class="nam">LinkedIn</div>
               </div>
                 <div class="add"></div>

               <div class="icons">
                  <img class="in" src="img/twit.png">
                   <div class="nam">Twitter</div>
               </div>
                    <div class="add"></div>
              

                   <div class="icons">
                    <img class="in" src="img/pint.png">
                     <div class="nam">Pinterest</div>
                   </div>
                      <div class="add"></div>

                      <div class="icons">
                      <img class="in" src="img/icon.png">
                       <div class="nam">RSS Feed</div>
                      </div>
                        <div class="add"></div>
            </div>
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

.conteineri{

    width: 1024px;
    margin: auto;
}

.xazi{

width: 1017px;
height: 7px;
background-color: #7e5c88;
}


.head{
    justify-content: space-between;
    display: flex;
    padding-bottom: 40px;
    margin-top: 35px;
}

.logo{
font-size: 32px;
line-height: 32px;
color: #96739f;
font-family: "Georgia";
margin-bottom: 11px;
}

.text{

font-size: 12px;
line-height: 12px;
color: #979797;
font-family: "Georgia";
}


.meniu{
    display: flex;
    align-items: center;
    color: #979797;

}

.info{
    margin-right: 20px;
    margin-bottom: 45px;
}

.HOME{
    margin-right: 20px;
}

.feri{
width: 76px;
height: 96px;
background-color: #7e5c88;
color: white;
padding: 17px;
}

.cursus{
    width: 341px;
    height: 86px;
    font-size: 46px;
    line-height: 46px;
    color: #333333;
    font-family: "Georgia";
    margin-bottom: 30px;
}

.texti{

    width: 319px;
    height: 70px;
    font-size: 12px;
    line-height: 19px;
    color: #979797;
    font-family: "Georgia";
    margin-bottom: 20px;
}

.mor{
    font-size: 13px;
    line-height: 16px;
    color: #ffffff;
    font-family: "Georgia";
    width: 142px;
    height: 35px;
    border-radius: 17px;
    background-color: #7e5c88;
    border: none;
}

.wre{
    width: 380px;
    height: 380px;
    border-radius: 190px;
    background-color: #333333;
    border: 32px solid #7e5c88;
}

.arrows{

    display: flex;
    align-items: center;
    justify-content: space-between;
}


.isari{
    width: 15px;
    height: 27px;
}


.isari1{
    width: 15px;
    height: 27px;
}


.xazi2{
width: 1024px; 
height: 3px;
background-color: #e6e6e6;
margin-top: 25px;
}

.work{
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    font-family: "Georgia";
    margin-top: 34px
}

.wrpe{

    width: 1024px;
    height: 3px;
    background-color: #e6e6e6;
    margin-top: 15px;
}

.run{

    margin-top: 50px;
    color: #333333;
    font-family: "Georgia";
    background-color: #eeeeee;
    width: 225px;
    padding: 11px;

}
.short{
    color: #333333;
    font-family: "Georgia";
    background-color: #eeeeee;
    width: 225px;
    padding: 11px;
    margin-top: -4px;
}

.surati{

    width:225px;
    height: 220px;
}

.project{
    display: flex;
    justify-content: space-between;
}

.titl:hover .run , .titl:hover .short{

    background-color: #7e5c88;
    cursor: pointer;
    color: white;
}

.the{
font-size: 16px;
line-height: 19px;
color: #333333;
font-family: "Georgia";
}

.xazi3{
    width: 730px;
    height: 1px;
    background-color: #e6e6e6;
    margin-top: 12px;
}

.to{

    width: 225px;
    height: 220px;
    object-fit: contain;
    background-color: #896;

}
.post{
font-size: 14px;
line-height: 20px;
color: #7e5c88;
font-family: "Georgia";
}

.mun{

font-size: 11px;
line-height: 15px;
color: #979797;
font-family: "Georgia";
}

.et{
width: 221px;
height: 67px;
font-size: 12px;
line-height: 17px;
color: #979797;
font-family: "Georgia";
}

.reakt{

    display: flex;
    margin-top: 40px;
}

.tea{

    margin-right: 25px;
}

.xazi{
    width: 225px;
    height: 2px;
    background-color: #e6e6e6;
    margin-bottom: 10px;
}

.us{
    font-size: 16px;
    line-height: 19px;
    color: #333333;
    font-family: "Georgia";
    margin-bottom: 10px;
}

.name{

    width: 60px;
    height: 60px;
    border: 1px solid #7777;
    padding: 4px;
}

.view{

    font-size: 12px;
    line-height: 14px;
    color: #9797B4;
    font-family: "Georgia";
}

.goes{

    width: 149px;
    height: 26px;
    font-size: 12px;
    line-height: 17px;
    color: #979797;
    font-family: "Georgia";
}

.prof{

    font-size: 12px;
    line-height: 14px;
    color: #7e5c88;
    font-family: "Georgia";
    border: none;
    margin-top: 10px;
    background-color: white;
}
.wrapper{
    display: flex;
    margin-top: 70px;
}

.abaut{
    border-bottom: 2px solid #e6e6e6;
    padding-bottom: 10px;
    margin-bottom: 10px;
}

.sweet{
    font-size: 12px;
    line-height: 14px;
    color: #979797;
    margin-top: 60px;
    margin-bottom: 40px;
}
.post{
    font-size: 13px;
    line-height: 16px;
    color: #979797;
}

.by{
    font-size: 11px;
    line-height: 13px;
    color: #979797;
}

.loren{
    width: 221px;
    height: 130px;
    font-size: 12px;
    line-height: 19px;
    color: #979797;
    margin-top: 17px;
}

.read{
    font-size: 12px;
    line-height: 14px;
    color: #7e5b87;
    font-family: "Georgia";
    text-align: right;
    border: none;
    background-color: white;
    margin-left: 12%;
}

.link{
    font-size: 12px;
    line-height: 14px;
    color: #979797;
    font-family: "Georgia";
    margin-bottom: 43px;
    margin-top: 58px;
}

.text{
    font-size: 12px;
    line-height: 14px;
    color: #7e5c88;
    margin-bottom: 10px;

}

.contact{
    font-size: 12px;
    line-height: 14px;
    color: #979797;
    margin-bottom: 32px;
    margin-top: 58px;
}

.compani{
    font-size: 12px;
    line-height: 16px;
    color: #979797;
    width: 89px;

}

.tel{
    font-size: 12px;
    line-height: 16px;
    color: #979797;
    margin-top: 10px;
}

.ran{
    display: flex;
    justify-content: space-between;
}
.town{
    font-size: 12px;
    line-height: 16px;
    color: #979797;
}

.in{
    width: 32px;
    height: 32px;
    border-radius: 16px;
    background-color: #c3c3c3;
    object-fit: none;
    margin-top: 8px;
    cursor: pointer;
}

.add{
    width: 210px;
    height: 1px;
    background-color: #e0e0e0;
    margin-top: 8px;
}

.social{
 font-size: 12px;
line-height: 14px;
color: #979797;
font-family: "Georgia";
margin-bottom: 27px;
margin-top: 58px;
}

.nam{
font-size: 12px;
line-height: 14px;
color: #7e5c88;
font-family: "Georgia";
display: initial;
margin-left: 8px;
}

.in:hover{

    background-color: #7e5c88;
}

.icons{
    display: flex;
    align-items: center;
}
        `;
    }
}
customElements.define("web-footer",webFooter);