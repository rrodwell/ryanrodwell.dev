import React from "react"

import {
  FaTwitter as Twitter,
  FaGithub as Github,
  FaLinkedinIn as LinkedIn,
  // FaInstagram as Insta,
  FaEnvelope as Mail,
} from "react-icons/fa"

export default function Info() {
  return (
    <div className="container">
      <div className="my-5"></div>
      <div className="display-3" style={{ color: "#ff6347" }}>
        <span style = {{color : "white"}}>Hello, I'm</span> <br />
        Ryan.
      </div>
      <div className="h1 code mt-4 mb-3">{"const whoAmI = {"}</div>
      <div className="text-muted mx-5 my-4 h3 text-justify info">
        A Full Stack Developer with a passion for UI/UX, Technology Enthusiast, and an Apple Fanboy.
        <br />
        Always exploring new technologies and finding ways it can help improve my ability to design and create. 
      </div>
      <div className="h1 code mt-2 mb-3">{"}"}</div>
      <div className="h1 mt-5">
        <a className="mr-5 icon" href="https://twitter.com/rrodwell85">
          <Twitter />
        </a>
        {/* <a className="mr-5 icon" href="https://instagram.com/rodwell85">
          <Insta />
        </a> */}
        <a className="mr-5 icon" href="https://github.com/rrodwell">
          <Github />
        </a>
        <a
          className="mr-5 icon"
          href="https://www.linkedin.com/in/ryanrodwell/"
        >
          <LinkedIn />
        </a>
        <a className="mr-5 icon" href="mailto://ryanrodwell@gmail.com">
          <Mail />
        </a>
      </div>
    </div>
  )
}
