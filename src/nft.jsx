import React from 'react';
import LoaderGif from './photos/load.gif';
import b1 from './photos/b1.jpg';
import c1 from './photos/c1.png';
import insta from './photos/instagram.svg';
import behance from './photos/behance.svg';
import git from './photos/github.svg';
import tweet from './photos/twitter.svg';
import ImageComponents from './image_components';

export default function portfolio() {
  return (
    <div>
      <div className="loader" id="loader">
        <img src={LoaderGif} />
        <h1>LOADING...</h1>
      </div>
      <div className="logo">
        <p><a className="nft" href="/"><img className="logo" src="/images/white-logo_2.svg" height="auto" width="120px" alt="Sparsh Bajaj | Visual Artist" /></a></p>
      </div>
      <nav className="col-3">
        <div>
          <a className="about_me" href="/about">About Me</a>
          <a className="nft" href="/">Home</a>
        </div>
        <div>
          <a target="_blank" href="https://www.behance.net/SparshBajaj"><img className="icon" src={behance} height="auto" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a target="_blank" href="https://twitter.com/Sparsh_Nerd"><img className="icon" src={tweet} height="auto" /></a><br />
          <a target="_blank" href="https://instagram.com/sparsh_bajaj"><img className="icon" src={insta} height="auto" /></a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a target="_blank" href="https://github.com/sparshbajaj"><img className="icon" src={git} height="auto" /></a><br />
        </div>
      </nav>
      {/*MAIN*/}
      {/*SCROLL-CTN*/}
      <div id="luxy">
        {/*BANNER*/}
        <div className="bnr col-12">
          <div className="bnr_c">
            <img id="scroll" src="/images/scroll.png" />
            <div className="intro">
              <p className="delay">
                <span className="row">
                  <span data-emergence="hidden">Hello! I'm Sparsh, based in New Delhi</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">I do illustrations and &amp; throuh NFT I am trying to raise funds for my higher eductaion.</span>
                </span>
                <span className="row">
                  <span data-emergence="hidden">I aslo design thoughtful digital experiences &amp; beautiful brand aesthetics.</span>
                </span>
              </p>
            </div>
          </div><br />
          <div className="bnr_t">
            <div className="no-out" style={{ zIndex: 1 }}>
              <h1 className="luxy-el" data-horizontal={1} data-speed-x={-35}>
                <span className="row">
                  <span data-emergence="hidden">NFT NFT NFT NFT NFT NFT</span>
                </span>
              </h1>
              <h1 className="le luxy-el" data-horizontal={1} data-speed-x={35}>
                <span className="row">
                  <span data-emergence="hidden">CRYPTO ART ETHEREUM</span>
                </span>
              </h1>
            </div>
            <div style={{ zIndex: 2, marginLeft: '30.3%'}} className="bnr_img imgrev luxy-el" data-speed-y={-19} data-offset={-50} data-emergence="hidden">
              <img id="imgb" className="ai imgrev luxy-el" src={b1} />
              <div>
                <img id="imgc" className="ai imgrev luxy-el" src={c1} data-speed-y={15} />
              </div>
            </div>
            <div style={{ zIndex: 3 }}>
              <h1 className="luxy-el outline" data-horizontal={1} data-speed-x={-35}>
                <span className="row">
                  <span data-emergence="hidden">NFT NFT NFT NFT NFT NFT</span>
                </span>
              </h1>
              <h1 className="le luxy-el outline" data-horizontal={1} data-speed-x={35}>
                <span className="row">
                  <span data-emergence="hidden">CRYPTO ART ETHEREUM</span>
                </span>
              </h1>
            </div>
          </div>
        </div><br /><br/>
      <div className="wrk">
        <div className="wrk_t">
            <h1>
              <span className="row">
                <span className="outline -o" data-emergence="hidden">Archive</span>
              </span>
              <span className="row">
                <span data-emergence="hidden">Archive</span>
              </span>
            </h1>
        </div>
          <ImageComponents />
      </div>
      <div>
        <h2 style={{color:'white', marginLeft:'6.2%', marginTop:'6%',marginRight:'5.2%'}}>
        I have more artworks that I created in the last few years that are worth minting but I don't have money or Ether to mint them and pay gas fees.<br></br><br></br>
        I am trying to raise funds for my Higher Education from Cardiff University or NCI Dublin (I've received offer letters) MSc. Cyber Security.
        Due to covid our business was impacted and we don't have enough funds to sponsor my education, so I am trying to do my part.
        <br></br><br></br>
        If you wish to buy NFT Please consider bidding for my first minted artwork above
        or Donate directly for gas money here - <u>0x090F05714376526c6266886E23f57A0AC2d33c56</u> (Meta Mask). Do email me if you want any specific artwork if you donated of gas money. :) 💖
        </h2>
      </div>
        <div>
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
                <img src="/images/cont2.gif" />
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
                  <span data-emergence="hidden"><img src="/images/larro.svg" /></span>
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
      <span id="float" className="float beh"><img src="/images/beh.png" /></span>
    </div>
  );
}
