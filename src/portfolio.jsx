import React from 'react';
import LoaderGif from './photos/load.gif';
import b1 from './photos/b1.jpg';
import c1 from './photos/c1.png';
import insta from './photos/instagram.svg';
import behance from './photos/behance.svg';
import { Link } from 'react-router-dom'

export default function portfolio() {
  return (
    <div>
      <div className="loader" id="loader">
        <img src={LoaderGif} />
        <h1>LOADING...</h1>
      </div>
      <div className="logo">
        <p><img className="logo" src="https://sparshbajaj.co/wp-content/uploads/2019/11/white-logo_2.svg" height="auto" width="120px" alt="Sparsh Bajaj | Visual Artist" /></p>
      </div>
      <nav className="col-3">
        <div>
          <Link className="about_me" to="/about">About Me</Link>
        </div>
        <div>
          <a target="_blank" href="https://www.behance.net/SparshBajaj"><img className="icon" src={behance} height="auto" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
              <a target="_blank" href="https://instagram.com/sparsh_bajaj"><img className="icon" src={insta} height="auto" /></a><br />
        </div>
      </nav>
      {/*MAIN*/}
      {/*SCROLL-CTN*/}
      <div id="luxy">
        {/*BANNER*/}
        <div className="bnr col-12">
          <div className="bnr_c">
            <img id="scroll" src="https://portfolio-sparsh.web.app/photos/scroll.png" />
            <div className="intro">
              <p className="delay">
                <span className="row">
                  <span data-emergence="hidden">Hello! I'm Sparsh, based in New Delhi</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">I am a passionate and creative Visual artist. </span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">I design thoughtful digital experiences &amp; beautiful brand aesthetics.</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">I provide high quality web design services.</span>
                </span><br />
                <span className="row">
                  <span data-emergence="hidden"><a style={{ textDecoration: 'underline' }} href="about/#">Read More About Me</a></span>
                </span>
              </p>
            </div>
          </div><br />
          <div className="bnr_t">
            <div className="no-out" style={{ zIndex: 1 }}>
              <h1 className="luxy-el" data-horizontal={1} data-speed-x={-35}>
                <span className="row">
                  <span data-emergence="hidden">Master of mesmerizing</span>
                </span>
              </h1>
              <h1 className="le luxy-el" data-horizontal={1} data-speed-x={35}>
                <span className="row">
                  <span data-emergence="hidden">Illustrations &amp; Design</span>
                </span>
              </h1>
            </div>
            <div style={{ zIndex: 2, marginLeft: '30.3%' }} className="bnr_img imgrev luxy-el" data-speed-y={-19} data-offset={-80} data-emergence="hidden">
              <img id="imgb" src={b1} />
              <div>
                <img id="imgc" src={c1} className="luxy-el" data-speed-y={15} />
              </div>
            </div>
            <div style={{ zIndex: 3 }}>
              <h1 className="luxy-el outline" data-horizontal={1} data-speed-x={-35}>
                <span className="row">
                  <span data-emergence="hidden">Master of mesmerizing</span>
                </span>
              </h1>
              <h1 className="le luxy-el outline" data-horizontal={1} data-speed-x={35}>
                <span className="row">
                  <span data-emergence="hidden">Illustrations &amp; Design</span>
                </span>
              </h1>
            </div>
          </div>
        </div><br /><br />
        {/*WORK*/}
        <div className="wrk">
          <div className="wrk_t">
            <p className="row" style={{ marginTop: '12px' }}>
              <span data-emergence="hidden" style={{ transitionDelay: '.8s' }}>FEATURED PROJECTS</span>
            </p>
            <h1>
              <span className="row">
                <span className="outline -o" data-emergence="hidden">work</span>
              </span>
              <span className="row">
                <span data-emergence="hidden">work</span>
              </span>
              <span className="row">
                <span className="outline -o" data-emergence="hidden">work</span>
              </span>
            </h1>
          </div>
          <div className="wrk_s">
            <div className="wrk_e" style={{ width: '40vw' }}>
              <a target="_blank" href="#Change">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="https://portfolio-sparsh.web.app/photos/chbg.jpg" />
                  <div style={{ left: '30.8%' }} className="luxy-el" data-speed-y={4} data-offset={-65}>
                    <img id="img_chu" src="https://portfolio-sparsh.web.app/photos/chuu.png" />
                  </div>
                </div>
              </a>
              <div className="w-txt">
                <p>01.</p>
                <div>
                  <p>Project 1</p>
                  <span>sub heading</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wrk_s flex jus" style={{ padding: '12.5% 0 15% 0', alignItems: 'flex-end' }}>
            <a target="_blank" href="https://www.behance.net/SparshBajaj" className="prj_btn btn">
              <p>
                <span className="row">
                  <span data-emergence="hidden">See All Projects</span>
                </span>
              </p>
              <span className="row">
                <span data-emergence="hidden"><img src="https://portfolio-sparsh.web.app/photos/larro.svg" /></span>
              </span>
            </a>
            <div className="wrk_e" style={{ width: '45vw' }}>
              <a target="_blank" href="#change">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="https://portfolio-sparsh.web.app/photos/shbg.jpg" />
                  <div style={{ left: '5%' }} className="luxy-el" data-speed-y={-5} data-offset={110}>
                    <img id="img_sho" src="https://portfolio-sparsh.web.app/photos/shoe.png" />
                  </div>
                </div>
              </a>
              <div className="w-txt">
                <p>02.</p>
                <div>
                  <p>Project 2</p>
                  <span>sub heading</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wrk_s">
            <div className="wrk_e" style={{ width: '40vw' }}>
              <a target="_blank" href="#Change">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="https://portfolio-sparsh.web.app/photos/chbg.jpg" />
                  <div style={{ left: '30.8%' }} className="luxy-el" data-speed-y={4} data-offset={-65}>
                    <img id="img_chu" src="https://portfolio-sparsh.web.app/photos/chuu.png" />
                  </div>
                </div>
              </a>
              <div className="w-txt">
                <p>03.</p>
                <div>
                  <p>Project</p>
                  <span>sub</span>
                </div>
              </div>
            </div>
          </div>
          <div className="wrk_s flex jus" style={{ padding: '12.5% 0 15% 0', alignItems: 'flex-end' }}>
            <a target="_blank">
            </a>
            <div className="wrk_e" style={{ width: '45vw' }}>
              <a target="_blank" href="#change">
                <div className="w-img imgrev" data-emergence="hidden" onmousemove="vis();" onmouseout="hid();">
                  <img className="bg" src="https://portfolio-sparsh.web.app/photos/shbg.jpg" />
                  <div style={{ left: '5%' }} className="luxy-el" data-speed-y={-5} data-offset={110}>
                    <img id="img_sho" src="https://portfolio-sparsh.web.app/photos/shoe.png" />
                  </div>
                </div>
              </a>
              <div className="w-txt">
                <p>04.</p>
                <div>
                  <p>Project 4</p>
                  <span>sub heading</span>
                </div>
              </div>
            </div>
          </div>
          {/*CONTACT*/}
          <div className="con flex">
            <div className="con_t">
              <h1 style={{ position: 'relative', zIndex: 4 }}>
                <span className="row">
                  <span className="outline -o" data-emergence="hidden">CONTACT</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">CONTACT</span>
                </span>
              </h1>
              <h1>
                <span className="row">
                  <span className="outline -o" style={{ transitionDelay: '.5s' }} data-emergence="hidden">CONTACT</span>
                </span>
              </h1>
              <div className="imgrev luxy-el" data-speed-y="-4.5" data-offset={160} data-emergence="hidden">
                <img src="https://portfolio-sparsh.web.app/photos/cont2.gif" />
              </div>
            </div>
            <div className="con_p">
              <p className="delay">
                <span className="row">
                  <span data-emergence="hidden">Have a project in mind? Would you like</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">to share it? Feel free to reach out</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">by writing an e-mail.</span>
                </span>
              </p><br />
              <a href="mailto:sparshbajaj@reviewitnerd.com?subject=Lets%20Work%20Together" className="btn " title="I usually respond in a day.">
                <p>
                  <span className="row">
                    <span data-emergence="hidden">Get in touch</span>
                  </span>
                </p>
                <span className="row">
                  <span data-emergence="hidden"><img src="https://portfolio-sparsh.web.app/photos/larro.svg" /></span>
                </span>
              </a>
              <p className="delay copy">
                <span className="row">
                  <span data-emergence="hidden">Developed with 💖 by Sparsh Bajaj.</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">© <span style={{ display: 'inline' }} id="year" /> All rights reserved.</span>
                </span>
              </p>
            </div>
          </div>
        </div>
        {/*SCROLL-END*/}
      </div>
      <span id="float" className="float beh"><img src="https://portfolio-sparsh.web.app/photos/beh.png" /></span>
    </div>
  );
}
