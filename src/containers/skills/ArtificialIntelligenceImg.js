import React, { Component } from "react";
import programmer from "../../assests/images/programmer.svg";

export default class ArtificialIntelligenceImg extends Component {
  render() {
    const theme = this.props.theme || {};
    const overlayStroke = theme.compImgHighlight || "#E5E7EB";
    const overlayAccent = theme.secondaryText || "#6B7280";

    return (
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "700px",
          margin: "0 auto",
          aspectRatio: "1041 / 554",
        }}
      >
        <img
          src={programmer}
          alt="Developer working with artificial intelligence systems"
          style={{ width: "100%", height: "100%", display: "block" }}
        />
        <svg
          viewBox="0 0 1041 554"
          aria-hidden="true"
          style={{ position: "absolute", inset: 0, width: "100%", height: "100%", pointerEvents: "none" }}
        >
          <g fill="none" stroke={overlayStroke} strokeLinecap="round" strokeLinejoin="round">
            <path strokeWidth="5" d="M205 155h85m-70 20h55m-35 20h45M205 214l20-17 20 15 22-28 22 30" />
            <circle cx="225" cy="197" r="7" fill={overlayStroke} stroke="none" />
            <path strokeWidth="5" d="M420 138h64m-54 18h44m-34 18h24M420 132v48m64-48v48" />
            <circle cx="420" cy="132" r="7" fill={overlayStroke} stroke="none" />
            <circle cx="484" cy="132" r="7" fill={overlayStroke} stroke="none" />
            <circle cx="452" cy="174" r="7" fill={overlayStroke} stroke="none" />
            <path strokeWidth="5" d="M675 152h83m-68 22h53m-33 20 17 16 17-16m-17 16v20" />
            <circle cx="727" cy="145" r="14" />
            <path strokeWidth="4" d="M245 395c12-18 37-18 49 0 12 18-6 40-25 40s-37-22-24-40zm24-12v40m-18-20h36" />
          </g>
          <g fill={overlayAccent} fontFamily="Arial, sans-serif" fontWeight="700">
            <text x="430" y="385" fontSize="24">AI</text>
            <text x="620" y="385" fontSize="22">ML</text>
          </g>
          <g fill="none" stroke={overlayAccent} strokeWidth="4" strokeLinecap="round">
            <path d="M470 410h45m-38-15 30 30m0-30-30 30M665 410c0-18 28-18 28 0s28 18 28 0" />
          </g>
        </svg>
      </div>
    );
  }
}
