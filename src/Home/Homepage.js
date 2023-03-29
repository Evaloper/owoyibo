import "./Home.css";
import design1 from "./image/Design(8).jpg";
import design2 from "./image/Design(9).jpg";
import design3 from "./image/Design(12).jpg";
import design4 from "./image/Design(20).jpg";
import design5 from "./image/Design(18).jpg";
import design6 from "./image/Design(25).jpg";

function Home() {
    return (
        <main>
            <div className="first-sect">
                <div className="top-container">
                    <div className="img1 images">
                        <img src={design1} alt="" />
                    </div>
                    <div className="img2 images">
                        <img src={design2} alt="" />
                    </div>
                    <div className="img3 images">
                        <img src={design3} alt="" />
                    </div>
                </div>
                <div className="btm-container">
                    <div className="img4 images">
                        <img src={design4} alt="" />
                    </div>
                    <div className="img5 images">
                        <img src={design5} alt="" />
                    </div>
                    <div className="img6 images">
                        <img src={design6} alt="" />
                    </div>
                </div>
            </div>
        </main>
        
    );
}

export default Home;
