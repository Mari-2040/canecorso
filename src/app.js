import { html,css,LitElement } from "lit-element";
import "./components/card";
import "./components/button-app";
import "./components/header/header-logo";
import "./components/header/web-heder";
import "./components/slider/slider-info";
import "./components/slider/slider-circle";
import "./components/slider/web-slider";
import "./components/web-section";
import "./components/slider/slider-content";
import "./components/slider/slidet-culumb";
import "./components/footer/web-footer";

class App extends LitElement{
    constructor(){
        super();

    }

    static get styles(){
        return css`
        .button{
            --color:rgb(151, 151, 151);
            --background-color:white;
            --border-radius: 30px;
            --hover-color:rgb(126, 92, 136);
            --max-width:auto;
            --padding:14px;
            --border:none;
        }
        `
    }
    render(){
        return html`
        <div class="wrapper">
            <web-section no-border>
                <web-header>
                    <header-logo 
                        logo ="Canecorso"
                        text="Free PSD Website Tem"
                        slot="logo"
                    ></header-logo>
                    <button-app slot="buttons" class ="button">HOME</button-app>
                    <button-app slot="buttons"  class ="button">STYLE DEMO</button-app>
                    <button-app slot="buttons"  class ="button">FULL WIDTH</button-app>
                    <button-app slot="buttons"  class ="button">DROPDOWN</button-app>
                    <button-app slot="buttons"  class ="button">PORTFOLIO</button-app>
                    <button-app slot="buttons"  class ="button">GALLERY</button-app>
                </web-header>
            </web-section>
            <web-section no-border>
                <web-slider>
                    <slider-info slot="info">
                        <h1 slot="title">კანე კორსო</h1>
                        <p slot="text">უძველესი იტალიური ჯიშის ძაღლი. მას იყენებდნენ დიდ ცხოველებზე სანადიროდ, 
                            სასახლეების და ეკლესია-მონასტრების დასაცავად, პირად მცველებად და ბრძოლებში.
                            ეს ჯიში სამოცდაათიანი წლების ბოლოს გადაშენების პირას იყო, 
                            მაგრამ იტალიელი მეცნიერის ჯოვანი ბონატის ძალისხმევით გადარჩა.
                            დღეს მას მრავალი ქვეყნის ძაღლთსაშენებში ამრავლებენ.</p>
                        <button-app slot="button">Reade More Here</button-app>
                    </slider-info>
                        <slider-circle 
                            slot="img"
                            src="img/03.jpg";
                        ></slider-circle>
                </web-slider>
            </web-section>

            
            <web-section flex-row title="Latest Project Work">
             <card-app>
                 <h1 slot="title">Cane corso italiano</h1>
                 <img slot="img" src=img/01.jpg >
                 <p slot="texti">მასალა ვიკიპედიიდან</p>
             </card-app>

             <card-app>
                 <h1 slot="title">Cane corso italiano</h1>
                 <img slot="img" src=img/02.jpg >
                 <p slot="texti">მასალა ვიკიპედიიდან</p>
             </card-app>

             <card-app>
                 <h1 slot="title">Cane corso italiano</h1>
                 <img slot="img" src=img/04.jpg >
                 <p slot="texti">მასალა ვიკიპედიიდან</p>
             </card-app>

             <card-app>
                 <h1 slot="title">Cane corso italiano</h1>
                 <img slot="img" src=img/05.jpg >
                 <p slot="texti">მასალა ვიკიპედიიდან</p>
             </card-app>
            </web-section>

            <web-section flex-row no-border >
             <web-section flex-row inside title="From The Blog">
            <slider-content >
                <img slot="img" src="img/09.jpg" >
                <h1 slot="satauri">შინაური კატა</h1>
                <p slot="text"> მტაცებელი ძუძუმწოვარი ცხოველი კატისებრთა ოჯახისა.
                     შინაური კატა გამოირჩევა მეგობრობის უნარით. 
                     ადამიანისა და კატის მეგობრობა 10 000 წელია გრძელდება,
                     თავიდან მან ადამიანების დაფასება მოიპოვა იმით, რომ ანადგურებდა პარაზიტებს.</p>
            </slider-content>

            <slider-content>
                <img slot= "img" src="img/07.webp" >
                <h1 slot="satauri">შინაური კატა</h1>
                <p slot= "text">ის ჭკვიან ძუძუმწოვრებს მიეკუთვნება და ექვემდებარება გაწვრთნას.
                     უბრალო კატამ შეიძლება მოახდინოს მანიპულირება სხვადასხვა საგანზე ან მექანიზმზე.
                     გამოირჩევა მისტიციზმითა და უცნაურობით. მასზე შექმნილი და დაწერილია მრავალი მითი. </p>
            </slider-content>

            <slider-content>
                <img slot="img" src="img/011.jpg" >
                <h1 slot="satauri">შინაური კატა</h1>
                <p slot="text">სახლის კატები შეგუების უნარით ხასიათდებიან. ზოგიერთი კატა მტაცებელია (უყვარს ნადირობა), 
                    ამიტომ მათ უწევთ ფიქრი, თუ როგორ მოიტაცონ ესა თუ ის ცხოველი,
                  შემდეგ შეკრან მსხვერპლი, როგორც აკეთებენ მგლები.</p>
            </slider-content>
            </web-section>

            <web-section flex-column inside title="About Us">
            <slider-culumb>
                <img slot="img" src=img/06.webp>
                 <h1 slot="satauri">კვება</h1>
                 <p slot="text">კატები არიან ხორცისმჭამელი ცხოველები.
                      მგლების, ძაღლების, მელიების და სხვა ზოგიერთი მტაცებლებლისგან 
                      განსხვავებით კატები არიან ყველაფრის მჭამელები.</p>
            </slider-culumb>

            <slider-culumb>
                <img slot="img" src=img/010.jpg>
                 <h1 slot="satauri">კვება</h1>
                 <p slot="text">მიჩვევის შემთხვევაში, 
                     კატას შეუძლია გახდეს ვეგეტარიანელი,
                      თუმცა, ჩვეულებრივ მოითხოვენ ხორცს.
                       მათ ბრჭყალებს შეუძლია საჭმლის დაჭრა.</p>
            </slider-culumb>

            <slider-culumb>
                <img slot="img" src=img/08.webp>
                 <h1 slot="satauri">კვება</h1>
                 <p slot="text">კატებს, რომლებსაც შეუძლიათ გარეთ გასვლა, 
                     ცდილობენ მოიპოვონ საკვები,
                      როგორიცაა თაგვები და მცირე ფრინველები.</p>
            </slider-culumb>
          </web-section>
        </web-section>

        <web-section>
            <web-footer>
                
            </web-footer>
        </web-section>
        </div>
        `
    }
}
customElements.define("app-component",App);