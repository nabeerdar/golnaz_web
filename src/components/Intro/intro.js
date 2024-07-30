import React from "react";
import './intro.css';
import image from '../../assets/image.png';
import GolnazCV from '../../assets/GolnazCV.pdf';

const Intro = () => {
    return (
        <section>
            <div id="intro">
                <div className="introContent">
                    <span className="hello">Hello,</span>
                    <span className="introText">
                        I'm <span className="introName">Golnaz Shahrestani</span><br />
                    </span>

                    <div>
                        <p className="introPara">
                            Thanks for visiting my website. I am a mechanical Engineering student with a passion for flying planes. In my freetime I enjoy doing arts and adding to my photography portfolio. If you want to know more about me, you can have a look at my CV below and if you have any further questions, feel free to contact me.
                        </p>
                        {/* Link to view CV */}
                        <a className='btn' href={GolnazCV} target="_blank">View CV</a>
                    </div >

                </div>
                <img src={image} alt="profile" className="Golnaz-image" />
            </div>
        </section>
    );
};

export default Intro;
