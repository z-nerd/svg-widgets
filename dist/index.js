var E = Object.defineProperty;
var H = (c, r, t) => r in c ? E(c, r, { enumerable: !0, configurable: !0, writable: !0, value: t }) : c[r] = t;
var o = (c, r, t) => (H(c, typeof r != "symbol" ? r + "" : r, t), t), w = (c, r, t) => {
  if (!r.has(c))
    throw TypeError("Cannot " + t);
};
var b = (c, r, t) => {
  if (r.has(c))
    throw TypeError("Cannot add the same private member more than once");
  r instanceof WeakSet ? r.add(c) : r.set(c, t);
};
var L = (c, r, t) => (w(c, r, "access private method"), t);
import "./preact.module-PZ3PIv-r.js";
import { DragListener as M } from "./event.js";
import { v as d, p as l, h as z, s as f, r as p } from "./matrix-T0Pr0xQM.js";
const D = `<div>
    <slot class="class-one" name="title1"></slot>
    <span><slot class="class-two" name="title2"></slot></span>
</div>`, U = ".class-one{font-size:2rem;color:tomato}.class-two{font-size:4rem;color:#6495ed}", I = document.createElement("template");
I.innerHTML = `<style>${U}</style>${D}`;
class C extends HTMLDivElement {
  constructor() {
    super(), this.attachShadow({
      mode: "open"
    }), this.shadowRoot.appendChild(I.content.cloneNode(!0));
  }
}
customElements.define("my-component", C, {
  extends: "div"
});
const G = ["x", "y", "width", "height", "rotate", "scalex", "scaley", "origin"];
var g, u;
class R extends HTMLDivElement {
  constructor(t, A, e, s = 0, i = 0, n = 0, h, a = 1, x = 1) {
    super();
    b(this, g);
    o(this, "root");
    this.attachShadow({
      mode: "open"
    }), this.shadowRoot.appendChild(t.content.cloneNode(!0)), this.root = this.shadowRoot.querySelector("svg"), this.width = A, this.height = e, this.x = s, this.y = i, this.rotate = n, this.scaleX = a, this.scaleY = x, this.origin = h || (this.width && this.height ? `${this.width / 2} ${this.height / 2}` : "0 0"), this.transform = {
      x: s,
      y: i,
      scaleX: a,
      scaleY: x,
      rotate: n
    };
  }
  get transform() {
    return L(this, g, u).call(this, this.root.getAttribute("transform"));
  }
  set transform(t) {
    const A = {
      ...L(this, g, u).call(this, this.root.getAttribute("transform")),
      ...t
    };
    this.root.setAttribute("transform", `translate(${A.x},${A.y}) rotate(${A.rotate}) scale(${A.scaleX},${A.scaleY})`);
  }
  get x() {
    return this.transform.x;
  }
  get y() {
    return this.transform.y;
  }
  set x(t) {
    this.transform = {
      x: t
    };
  }
  set y(t) {
    this.transform = {
      y: t
    };
  }
  set scaleX(t) {
    this.transform = {
      scaleX: t
    };
  }
  set scaleY(t) {
    this.transform = {
      scaleY: t
    };
  }
  set rotate(t) {
    this.transform = {
      rotate: -t
    };
  }
  get width() {
    return +this.root.getAttribute("width");
  }
  set width(t) {
    t !== void 0 && this.root.setAttribute("width", t.toString());
  }
  get height() {
    return +this.root.getAttribute("height");
  }
  set height(t) {
    t !== void 0 && this.root.setAttribute("height", t.toString());
  }
  get origin() {
    var s, i;
    const t = (i = (s = this.root.getAttribute("transform-origin")) == null ? void 0 : s.trim()) == null ? void 0 : i.split(" "), A = +t[0], e = +t[1];
    return {
      x: A,
      y: e
    };
  }
  set origin(t) {
    this.root.setAttribute("transform-origin", t);
  }
  setOriginCenter() {
    if (this.width !== void 0 && this.height !== void 0) {
      const t = `${this.width / 2} ${this.height / 2}`, A = this.root.getAttribute("transform-origin");
      this.originUpdate(A, t);
    }
  }
  attributeChangedCallback(t, A, e) {
    switch (t) {
      case "x":
        this.xUpdate(+A, +e);
        break;
      case "y":
        this.yUpdate(+A, +e);
        break;
      case "width":
        this.widthUpdate(+A, +e);
        break;
      case "height":
        this.heightUpdate(+A, +e);
        break;
      case "rotate":
        this.rotateUpdate(+A, +e);
        break;
      case "scalex":
        this.scaleXUpdate(+A, +e);
        break;
      case "scaley":
        this.scaleYUpdate(+A, +e);
        break;
      case "origin":
        this.originUpdate(A, e);
        break;
      default:
        this.attributeUpdate(t, A, e);
    }
  }
  connectedCallback() {
    this.mount();
  }
  disconnectedCallback() {
    this.unmount();
  }
  xUpdate(t, A) {
    this.x = A;
  }
  yUpdate(t, A) {
    this.y = A;
  }
  widthUpdate(t, A) {
    this.width = A, this.setOriginCenter();
  }
  heightUpdate(t, A) {
    this.height = A, this.setOriginCenter();
  }
  rotateUpdate(t, A) {
    this.rotate = A;
  }
  scaleXUpdate(t, A) {
    this.scaleX = A;
  }
  scaleYUpdate(t, A) {
    this.scaleY = A;
  }
  originUpdate(t, A) {
    this.origin = A;
  }
  attributeUpdate(t, A, e) {
  }
  mount() {
  }
  unmount() {
  }
}
g = new WeakSet(), u = function(t) {
  let A = 0, e = 0, s = 1, i = 1, n = 0;
  if (t) {
    const h = /translate\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(t), a = /scale\(\s*([^\s,)]+)[ ,]([^\s,)]+)/.exec(t);
    n = +/rotate\(\s*([^\s,)]+)/.exec(t)[1], A = +h[1], e = +h[2], s = +a[1], i = +a[2];
  }
  return {
    x: A,
    y: e,
    scaleX: s,
    scaleY: i,
    rotate: n
  };
};
const B = `<svg viewBox="0 0 212.42054748535156 158.1199951171875" width="200" height="200" overflow="visible"
    preserveAspectRatio="none" style="user-select: none; position: absolute;">
    <defs>
        <linearGradient id="a" x1="27.44" x2="167.21" y1="48.56" y2="48.56" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#f5f6f6"></stop>
            <stop offset="1" stop-color="#eaeaea"></stop>
        </linearGradient>
        <linearGradient id="b" x1="18.99" x2="198.77" y1="55.56" y2="55.56" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#c7c6c5"></stop>
            <stop offset="1" stop-color="#d3d3d3"></stop>
        </linearGradient>
        <linearGradient id="d" x1="164.95" x2="124.86" y1="-120.2" y2="-120.2"
            gradientTransform="rotate(-88.17 218.29 28.584)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#cacaca"></stop>
            <stop offset="1" stop-color="#eaeaea"></stop>
        </linearGradient>
        <linearGradient id="e" x1="151.22" x2="141.4" y1="-76.69" y2="-86.51"
            gradientTransform="rotate(-88.17 218.29 28.584)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#fff"></stop>
            <stop offset="0.42" stop-color="#ebebeb"></stop>
            <stop offset="1" stop-color="#cacaca"></stop>
        </linearGradient>
        <linearGradient id="f" x1="110.95" x2="103.38" y1="-104.08" y2="-109.65"
            gradientTransform="rotate(-125.17 119.624 14.64)" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#a72123"></stop>
            <stop offset="1" stop-color="#ee2f24"></stop>
        </linearGradient>
        <radialGradient id="c" cx="247.34" cy="279.03" r="194.47" gradientTransform="matrix(.44 0 0 .44 -2.79 -15.84)"
            gradientUnits="userSpaceOnUse">
            <stop offset="0.95" stop-color="#fff"></stop>
            <stop offset="1" stop-color="#989898"></stop>
        </radialGradient>
    </defs>
    <g data-name="Layer 2" style="isolation: isolate;">
        <g data-name="Layer 1">
            <path
                d="M105.51 119.2c-9.24 0-17.09-6.9-18.27-16.04-.6-4.65-4.5-8.16-9.07-8.16H55.61c2.35-9.29 7.63-17.75 15.26-24.32 9.52-8.19 21.89-12.7 34.83-12.7s25.31 4.51 34.83 12.7c7.63 6.56 12.91 15.03 15.26 24.32h-22.93c-4.57 0-8.47 3.51-9.07 8.16-1.18 9.15-9.03 16.04-18.27 16.04z"
                style="fill: rgb(81, 82, 81);"></path>
            <path
                d="M105.51 119.2c-9.24 0-17.09-6.9-18.27-16.04-.6-4.65-4.5-8.16-9.07-8.16H55.61c2.35-9.29 7.63-17.75 15.26-24.32 9.52-8.19 21.89-12.7 34.83-12.7s25.31 4.51 34.83 12.7c7.63 6.56 12.91 15.03 15.26 24.32h-22.93c-4.57 0-8.47 3.51-9.07 8.16-1.18 9.15-9.03 16.04-18.27 16.04z"
                style="fill: none; stroke: rgb(167, 169, 172); stroke-linecap: round; stroke-linejoin: round; stroke-width: 5;">
            </path>
            <path
                d="M105.69 57.98c12.94 0 25.31 4.51 34.83 12.7 7.63 6.56 12.91 15.03 15.26 24.32h-22.93c-4.57 0-8.47 3.51-9.07 8.16-1.18 9.15-9.03 16.04-18.27 16.04s-17.09-6.9-18.27-16.04c-.6-4.65-4.5-8.16-9.07-8.16H55.61c2.35-9.29 7.63-17.75 15.26-24.32 9.52-8.19 21.89-12.7 34.83-12.7m0-3c-13.66 0-26.73 4.77-36.79 13.43-8.08 6.96-13.69 15.9-16.21 25.86a3.004 3.004 0 0 0 2.91 3.74h22.56c3.07 0 5.69 2.38 6.1 5.54 1.37 10.64 10.5 18.66 21.25 18.66 10.74 0 19.88-8.02 21.25-18.66.41-3.16 3.03-5.54 6.1-5.54h22.93a3.004 3.004 0 0 0 2.91-3.74c-2.52-9.96-8.13-18.9-16.21-25.86-10.06-8.66-23.13-13.43-36.79-13.43z"
                style="fill: rgb(109, 110, 113);"></path>
            <path
                d="M212.42 93.32c-.04-.47-.1-.95-.17-1.42-3.61-25.3-16.23-48.54-35.55-65.43C157.2 9.4 132.16 0 106.22 0s-50.99 9.4-70.5 26.46C16.41 43.36 3.78 66.6.18 91.9c-.07.47-.12.95-.16 1.42-.08.83.21 1.64.8 2.29.88.96 2.43 1.52 4.24 1.52h32.17c7.7 0 14.36-6.17 16.97-12.26 8.93-20.84 29.34-34.3 52.01-34.3s43.08 13.46 52.01 34.3c2.61 6.09 9.28 12.26 16.97 12.26h32.18c1.82 0 3.36-.55 4.24-1.52.59-.65.87-1.46.8-2.29Z"
                style="fill: rgb(109, 110, 110);"></path>
            <path
                d="M209.99 92.22c-3.53-24.76-15.88-47.5-34.79-64.03-19.09-16.71-43.59-25.9-68.98-25.9s-49.9 9.19-68.99 25.89C18.32 44.72 5.97 67.46 2.44 92.22c-.06.44-.11.87-.15 1.31-.07.72 1.19 1.31 2.77 1.31h32.17c6.31 0 12.39-5.07 14.87-10.87 8.99-20.99 29.83-35.69 54.11-35.69s45.12 14.7 54.11 35.69c2.49 5.8 8.56 10.87 14.87 10.87h32.18c1.58 0 2.83-.59 2.77-1.31-.04-.44-.09-.87-.15-1.31z"
                style="fill: url(&quot;#a&quot;);"></path>
            <image
                xlink:href="data:image/png;base64,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"
                width="711" height="308" transform="matrix(.24 0 0 .24 20.89 21.08)"></image>
            <path
                d="M106.22 16.28c-45.09 0-82.55 33.92-90.09 78.56h4.98c5.96-41.67 41.79-73.7 85.11-73.7s79.15 32.03 85.11 73.7h4.98c-7.53-44.63-44.99-78.56-90.09-78.56z"
                style="fill: url(&quot;#b&quot;);"></path>
            <path
                d="M105.93 31.99c37.01 0 67.65 27.29 72.9 62.84h12.49c-5.96-41.67-41.79-73.7-85.11-73.7s-79.14 32.04-85.1 73.71h11.92C38.28 59.28 68.92 32 105.93 32z"
                style="fill: url(&quot;#c&quot;); mix-blend-mode: multiply;"></path>
            <path
                d="M105.14 112.31c-8.32-.27-91.37-15.3-91.29-17.99.08-2.56 83.93-12.41 92.25-12.14s14.85 7.23 14.59 15.55c-.27 8.32-7.23 14.85-15.55 14.59z"
                transform="rotate(0)" transform-origin="105.62 97.24" class="gaugeHand"
                style="fill: url(&quot;#d&quot;);"></path>
            <path
                d="M105.38 104.55c-4.03-.13-7.2-3.5-7.07-7.54.13-4.03 3.5-7.2 7.54-7.07 4.03.13 7.2 3.5 7.07 7.54-.13 4.03-3.5 7.2-7.54 7.07z"
                style="fill: url(&quot;#e&quot;);"></path>
            <path d="M13.85 94.32c-.03 1.01 11.71 3.77 26.81 6.84l.56-11.92c-15.35 2.11-27.34 4.12-27.37 5.08z"
                class="gaugeLittleHand" transform="rotate(0)" transform-origin="105.62 97.24"
                style="fill: url(&quot;#f&quot;);"></path>
            <circle cx="105.62" cy="97.24" r="4.04" style="fill: rgb(194, 193, 193);"></circle><text class="gaugeText"
                transform="translate(77.56 152.12)"
                style="font-family: Arial-Black, Arial; font-size: 29.46px; fill: rgb(81, 82, 81);">
                <tspan x="15" y="0">0</tspan>
            </text>
        </g>
    </g>
</svg>`, Y = document.createElement("template");
Y.innerHTML = `${B}`;
const N = ["zero"];
class O extends R {
  constructor(r = 212.42054748535156, t = 158.1199951171875, A = 0, e = 0, s = 0) {
    super(Y, r, t, A, e, s);
  }
  attributeUpdate(r, t, A) {
  }
}
o(O, "observedAttributes", [...G, ...N]);
customElements.define("my-gauge", O, {
  extends: "div"
});
const P = `<svg viewBox="0 0 414.89 42.37" width="653" height="66.68661572947046" overflow="visible" preserveAspectRatio="xMidYMid"
    style="user-select: none; position: absolute;">
    <defs>
        <linearGradient id="linear-gradient" x1="2" x2="412.89" y1="21.18" y2="21.18" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#f4f5f5"></stop>
            <stop offset="1" stop-color="#e9e8e9"></stop>
        </linearGradient>
        <linearGradient id="linear-gradient-2" x1="5" x2="409.89" y1="21.18" y2="21.18" gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#c7c5c3"></stop>
            <stop offset="1" stop-color="#d3d3d3"></stop>
        </linearGradient>
        <linearGradient id="linear-gradient-3" x1="-143.84" x2="-143.84" y1="42.04" y2="1.43"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#1f2d5e"></stop>
            <stop offset="0.12" stop-color="#164d7a"></stop>
            <stop offset="0.26" stop-color="#0f6a93"></stop>
            <stop offset="0.41" stop-color="#0a81a7"></stop>
            <stop offset="0.58" stop-color="#0691b5"></stop>
            <stop offset="0.76" stop-color="#039abe"></stop>
            <stop offset="1" stop-color="#039ec1"></stop>
        </linearGradient>
        <linearGradient id="linear-gradient-4" x1="67.75" x2="23.52" y1="57.11" y2="12.88"
            gradientUnits="userSpaceOnUse">
            <stop offset="0" stop-color="#d5d5d5"></stop>
            <stop offset="0.43" stop-color="#d5d5d5"></stop>
            <stop offset="1" stop-color="#fff"></stop>
        </linearGradient>
        <clipPath id="clippath">
            <path
                d="M21.19 35.37c-3.79 0-7.35-1.48-10.03-4.15a14.185 14.185 0 0 1 0-20.06c2.68-2.68 6.24-4.15 10.03-4.15H393.7c3.79 0 7.35 1.48 10.03 4.15 2.42 2.42 3.88 5.63 4.12 9.03.29 4.11-1.22 8.12-4.12 11.03a14.083 14.083 0 0 1-10.03 4.15H21.19Z"
                style="fill: none;"></path>
        </clipPath>
        <filter id="drop-shadow-1" filterUnits="userSpaceOnUse">
            <feOffset dx="7" dy="7"></feOffset>
            <feGaussianBlur result="blur" stdDeviation="5"></feGaussianBlur>
            <feFlood flood-color="#8f8f8f" flood-opacity="0.45"></feFlood>
            <feComposite in2="blur" operator="in"></feComposite>
            <feComposite in="SourceGraphic"></feComposite>
        </filter>
        <style>
            .cls-2 {
                fill: #a8a7b0
            }
        </style>
    </defs>
    <g data-name="Layer 1">
        <path
            d="M21.19 42.37c-5.66 0-10.98-2.2-14.98-6.21A21.186 21.186 0 0 1 .05 19.7C.41 14.61 2.59 9.82 6.2 6.21A21.05 21.05 0 0 1 21.19 0H393.7c5.66 0 10.98 2.2 14.98 6.2a21.191 21.191 0 0 1 0 29.96c-4 4-9.32 6.21-14.98 6.21H21.19Z"
            style="fill: rgb(109, 110, 110);"></path>
        <path
            d="M21.19 40.37c-5.12 0-9.94-2-13.57-5.62a19.168 19.168 0 0 1-5.57-14.91c.32-4.61 2.3-8.95 5.57-12.22C11.25 4 16.06 2 21.19 2H393.7c5.12 0 9.94 2 13.57 5.62 3.27 3.28 5.25 7.62 5.57 12.22.39 5.55-1.64 10.98-5.57 14.91a19.069 19.069 0 0 1-13.57 5.62H21.19Z"
            style="fill: url(&quot;#linear-gradient&quot;);"></path>
        <path
            d="M21.19 37.37c-4.32 0-8.39-1.68-11.44-4.74a16.186 16.186 0 0 1 0-22.89C12.81 6.68 16.87 5 21.19 5H393.7c4.32 0 8.39 1.68 11.44 4.74a16.186 16.186 0 0 1 0 22.89 16.066 16.066 0 0 1-11.44 4.74H21.19Z"
            style="fill: url(&quot;#linear-gradient-2&quot;);"></path>
        <image
            xlink:href="data:image/png;base64,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"
            width="1672" height="119" transform="matrix(.24 0 0 .24 6.77 6.96)"></image>
        <g clip-path="url(#clippath)" style="clip-path: url(&quot;#clippath&quot;);">
            <path
                d="M-330.1 35.37c-3.79 0-7.35-1.48-10.03-4.15a14.185 14.185 0 0 1 0-20.06c2.68-2.68 6.24-4.15 10.03-4.15H42.42c3.79 0 7.35 1.48 10.03 4.15 2.42 2.42 3.88 5.63 4.12 9.03.29 4.11-1.22 8.12-4.12 11.03a14.083 14.083 0 0 1-10.03 4.15H-330.1z"
                style="fill: url(&quot;#linear-gradient-3&quot;);"></path>
            <path
                d="M42.42 7H21.23C13.4 7 7.05 13.35 7.05 21.18s6.35 14.18 14.18 14.18h21.19c7.83 0 14.18-6.35 14.18-14.18S50.25 7 42.42 7z"
                style="fill: url(&quot;#linear-gradient-4&quot;); filter: url(&quot;#drop-shadow-1&quot;);"></path>
            <path
                d="M26.45 14.43c-.99 0-1.79.8-1.79 1.79v10.21c0 .99.8 1.79 1.79 1.79s1.79-.8 1.79-1.79V16.22c0-.99-.8-1.79-1.79-1.79zM37.2 14.43c-.99 0-1.79.8-1.79 1.79v10.21c0 .99.8 1.79 1.79 1.79s1.79-.8 1.79-1.79V16.22c0-.99-.8-1.79-1.79-1.79z"
                class="cls-2"></path>
        </g>
    </g>
</svg>`, v = document.createElement("template");
v.innerHTML = `${P}`;
const S = ["zero"];
class W extends R {
  constructor(r = 653, t = 66.68661572947046, A = 0, e = 0, s = 0) {
    super(v, r, t, A, e, s);
  }
  attributeUpdate(r, t, A) {
  }
}
o(W, "observedAttributes", [...G, ...S]);
customElements.define("my-slider", W, {
  extends: "div"
});
const X = `<svg overflow="visible" preserveAspectRatio="xMidYMid"
    style="user-select: none; position: absolute;">
    <rect id="body" stroke-width="5" stroke="red" stroke-dashoffset="0" fill="#fff"
        fill-opacity="0" stroke-dasharray="12, 8" />
    <g>
        <circle id="rotate" style="cursor: crosshair;" />
        <rect id="tl-resize" />
        <rect id="lmid-resize" />
        <rect id="bl-resize" />
        <rect id="bmid-resize" style="cursor: s-resize;" />
        <rect id="br-resize" style="cursor: se-resize;" />
        <rect id="rmid-resize" style="cursor: e-resize;" />
        <rect id="tmid-resize" />
    </g>
</svg>`;
class K {
  constructor(r, t) {
    o(this, "dragListener");
    o(this, "edListener");
    this.dragListener = new M(r), this.edListener = t, this.dragListener.onDragStart = (A, e) => {
      const {
        x: s,
        y: i,
        rotate: n
      } = this.edListener.transform, h = d(s, i, this.edListener.width, this.edListener.height, n);
      e(h);
    }, this.dragListener.onDragMove = (A, e) => {
      if (e) {
        const s = l(A.clientX, A.clientY), {
          x: i,
          y: n,
          rotate: h
        } = this.edListener.transform, a = d(i, n, this.edListener.width, this.edListener.height, h);
        let x = z(s, a.tr, a.tl);
        const j = d(i, n, this.edListener.width, x, h);
        this.fixResizePosition(i, n, e, j), x > 10 && this.edListener.setAttribute("height", x.toString());
      }
    };
  }
  fixResizePosition(r, t, A, e) {
    const s = f(e.tl, A.tl), i = p(f(l(r, t), s));
    this.edListener.setAttribute("x", i.x.toString()), this.edListener.setAttribute("y", i.y.toString());
  }
  removeListener() {
    this.dragListener.removeEvent();
  }
}
class T {
  constructor(r, t) {
    o(this, "dragListener");
    o(this, "edListener");
    this.dragListener = new M(r), this.edListener = t, this.dragListener.onDragStart = (A, e) => {
      const {
        x: s,
        y: i,
        rotate: n
      } = this.edListener.transform, h = d(s, i, this.edListener.width, this.edListener.height, n);
      e(h);
    }, this.dragListener.onDragMove = (A, e) => {
      if (e) {
        const s = l(A.clientX, A.clientY), {
          x: i,
          y: n,
          rotate: h
        } = this.edListener.transform, a = d(i, n, this.edListener.width, this.edListener.height, h);
        let x = z(s, a.tl, a.bl), j = z(s, a.tr, a.tl);
        const y = d(i, n, x, j, h);
        this.fixResizePosition(i, n, e, y), x > 10 && j > 10 && (this.edListener.setAttribute("width", x.toString()), this.edListener.setAttribute("height", j.toString()));
      }
    };
  }
  fixResizePosition(r, t, A, e) {
    const s = f(e.tl, A.tl), i = p(f(l(r, t), s));
    this.edListener.setAttribute("x", i.x.toString()), this.edListener.setAttribute("y", i.y.toString());
  }
  removeListener() {
    this.dragListener.removeEvent();
  }
}
class Q {
  constructor(r, t) {
    o(this, "dragListener");
    o(this, "edListener");
    this.dragListener = new M(r), this.edListener = t, this.dragListener.onDragStart = (A, e) => {
      const {
        x: s,
        y: i
      } = this.edListener.transform;
      e({
        x: s,
        y: i,
        clientX: A.clientX,
        clientY: A.clientY
      });
    }, this.dragListener.onDragMove = (A, e) => {
      if (e) {
        const s = l(e.clientX, e.clientY), i = l(A.clientX, A.clientY), n = s.x - e.x, h = s.y - e.y, a = i.x - n, x = i.y - h;
        this.edListener.setAttribute("x", a.toString()), this.edListener.setAttribute("y", x.toString());
      }
    };
  }
  removeListener() {
    this.dragListener.removeEvent();
  }
}
class Z {
  constructor(r, t) {
    o(this, "dragListener");
    o(this, "edListener");
    this.dragListener = new M(r), this.edListener = t, this.dragListener.onDragStart = (A, e) => {
      const {
        x: s,
        y: i,
        rotate: n
      } = this.edListener.transform, h = d(s, i, this.edListener.width, this.edListener.height, n);
      e(h);
    }, this.dragListener.onDragMove = (A, e) => {
      if (e) {
        const s = l(A.clientX, A.clientY), {
          x: i,
          y: n,
          rotate: h
        } = this.edListener.transform, a = d(i, n, this.edListener.width, this.edListener.height, h);
        let x = z(s, a.tl, a.bl);
        const j = d(i, n, x, this.edListener.height, h);
        this.fixResizePosition(i, n, e, j), x > 10 && this.edListener.setAttribute("width", x.toString());
      }
    };
  }
  fixResizePosition(r, t, A, e) {
    const s = f(e.tl, A.tl), i = p(f(l(r, t), s));
    this.edListener.setAttribute("x", i.x.toString()), this.edListener.setAttribute("y", i.y.toString());
  }
  removeListener() {
    this.dragListener.removeEvent();
  }
}
class V {
  constructor(r, t) {
    o(this, "dragListener");
    o(this, "edListener");
    this.dragListener = new M(r), this.edListener = t, this.dragListener.onDragMove = (A) => {
      const e = l(A.clientX, A.clientY), {
        x: s,
        y: i
      } = this.edListener.transform, n = l(s + this.edListener.width / 2, i + this.edListener.height / 2), h = Math.atan2(e.y - n.y, e.x - n.x) * (180 / Math.PI), a = Math.atan2(i - n.y, s + this.edListener.width - n.x) * (180 / Math.PI), x = Math.floor((h - a) * -1);
      this.edListener.setAttribute("rotate", x.toString());
    };
  }
  removeListener() {
    this.dragListener.removeEvent();
  }
}
const m = document.createElement("template");
m.innerHTML = `${X}`;
const k = ["zero"];
class F extends R {
  constructor(t = 100, A = 100, e = 0, s = 0, i = 0) {
    super(m, t, A, e, s, i);
    o(this, "controllerSize");
    o(this, "bodyRef");
    o(this, "rotateRef");
    o(this, "tlResizeRef");
    o(this, "lmidResizeRef");
    o(this, "blResizeRef");
    o(this, "bmidResizeRef");
    o(this, "brResizeRef");
    o(this, "rmidResizeRef");
    o(this, "tmidResizeRef");
    o(this, "rmidResizeListener");
    o(this, "bmidResizeListener");
    o(this, "brResizeListener");
    o(this, "rotateListener");
    o(this, "moveListener");
    this.controllerSize = 12, this.bodyRef = this.root.querySelector("#body"), this.rotateRef = this.root.querySelector("#rotate"), this.tlResizeRef = this.root.querySelector("#tl-resize"), this.lmidResizeRef = this.root.querySelector("#lmid-resize"), this.blResizeRef = this.root.querySelector("#bl-resize"), this.bmidResizeRef = this.root.querySelector("#bmid-resize"), this.brResizeRef = this.root.querySelector("#br-resize"), this.rmidResizeRef = this.root.querySelector("#rmid-resize"), this.tmidResizeRef = this.root.querySelector("#tmid-resize"), this.moveListener = new Q(this.bodyRef, this), this.rotateListener = new V(this.rotateRef, this), this.rmidResizeListener = new Z(this.rmidResizeRef, this), this.bmidResizeListener = new K(this.bmidResizeRef, this), this.brResizeListener = new T(this.brResizeRef, this);
  }
  attributeUpdate(t, A, e) {
  }
  render() {
    this.bodyRef.setAttribute("width", this.width.toString()), this.bodyRef.setAttribute("height", this.height.toString()), this.rotateRef = this.root.querySelector("#rotate"), this.rotateRef.setAttribute("cx", this.width.toString()), this.rotateRef.setAttribute("r", (this.controllerSize / 2).toString()), this.bmidResizeRef.setAttribute("width", this.controllerSize.toString()), this.bmidResizeRef.setAttribute("height", this.controllerSize.toString()), this.bmidResizeRef.setAttribute("x", (this.width * 0.5 - this.controllerSize / 2).toString()), this.bmidResizeRef.setAttribute("y", (this.height - this.controllerSize / 2).toString()), this.brResizeRef.setAttribute("width", this.controllerSize.toString()), this.brResizeRef.setAttribute("height", this.controllerSize.toString()), this.brResizeRef.setAttribute("x", (this.width - this.controllerSize / 2).toString()), this.brResizeRef.setAttribute("y", (this.height - this.controllerSize / 2).toString()), this.rmidResizeRef.setAttribute("width", this.controllerSize.toString()), this.rmidResizeRef.setAttribute("height", this.controllerSize.toString()), this.rmidResizeRef.setAttribute("x", (this.width - this.controllerSize / 2).toString()), this.rmidResizeRef.setAttribute("y", (this.height * 0.5 - this.controllerSize / 2).toString());
  }
  widthUpdate(t, A) {
    this.width = A, this.setOriginCenter(), this.render();
  }
  heightUpdate(t, A) {
    this.height = A, this.setOriginCenter(), this.render();
  }
  unmount() {
    this.moveListener.removeListener(), this.rotateListener.removeListener(), this.rmidResizeListener.removeListener(), this.bmidResizeListener.removeListener(), this.brResizeListener.removeListener();
  }
}
o(F, "observedAttributes", [...G, ...k]);
customElements.define("my-editbox", F, {
  extends: "div"
});
export {
  F as EditBox,
  O as Gauge,
  C as MyComponent,
  W as Slider
};
//# sourceMappingURL=index.js.map