import card_1 from "../src/images/survey.png";
import card_2 from "../src/images/ub.png";
import card_3 from "../src/images/istockphoto.jpg";

function Portfolio() {
  return(
    <>
   <section className="card-area" id="portfolio">
  <div className="wrapper">
    <h2>Projects</h2>
 <div className="box-area">
   <div className="box">
       <img src={card_1} alt=""/>
         <div className="over">
          <h3></h3>
           <p>SURVEY MOBILE APP</p>
            <a href="#">Read More</a>
</div>
    </div>
          <div className="box">
       <img src={card_2} alt=""/>
         <div className="over">
          <h3>Hire Driver Mobile App</h3>
           <p></p>
            <a href="#">Read More</a>
</div>
    </div>
           <div className="box">
       <img src={ card_3} alt=""/>
         <div className="over">
          <h3>DRONOTICS</h3>
           <p></p>
            <a href="#">Read More</a>
</div>
    </div>

      </div>
        </div>

   </section>
   </>

  )





}
export default Portfolio;