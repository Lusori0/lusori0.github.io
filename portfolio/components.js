import {LitElement, css,html} from 'https://cdn.jsdelivr.net/gh/lit/dist@2/core/lit-core.min.js';
import {tachyons} from './tachyons.js'

const fadein = css`
    div{
      animation: fadeInAnimation linear 1s;
      animation-iteration-count: 1;
      animation-fill-mode: forwards;
    }
    @keyframes fadeInAnimation{
      0%{
        opacity: 0;
      }
      100%{
        opacity: 1;
      }
    }
`

export class BaseSite extends LitElement{
  static styles = [tachyons, fadein];
  constructor(){
    super();
  }
  render(){
    return html`
      <div class="h-100 w-100 absolute bg-near-black avenir b">
        <slot></slot>
      </div>
      `
  }
}
customElements.define('base-site', BaseSite);

export class GeneralHeader extends LitElement{
  static styles = [tachyons];

  constructor(){
    super();
  }

  render(){
    return html`
      <div class="bg-red pa1"></div>
      <nav class="ph4 pv3 pa4-ns">
        <a class="link hover-red underline-hover b white f6 f4-ns dib" href="./portfolio.html" title="Home">Lusorio</a>
        <a class="link underline-hover b hover-red white fr f6 f4-ns dib" href="https://lusori0.github.io">About Me</a>
        <h1 class="white tc f3 f2-ns mt4 mt5-ns mb2 mb5-ns">
          <slot></slot>
        </h1>
      </nav>
    `
  }
}
customElements.define('general-header', GeneralHeader);

export class HomeMenu extends LitElement{
  static styles = [tachyons, css`
    ol{
      list-style-type: none;
      padding: 0px;
      counter-reset: my-counter;
    }
    `];

  constructor(){
    super();
  }

  render(){return html`<div class="menu">
    <ol class="link white tc f3 f2-ns">
      <slot></slot>
    </ol>
  </div>
  `
  }
}
customElements.define('home-menu', HomeMenu);

export class HomeMenuItem extends LitElement{
  static properties = {
    href: {},
  };

  static styles = [tachyons, css`
    li{
      counter-increment: my-counter;
    }

    li::before{
      content: "0" counter(my-counter);
      color: grey;
      font-size: 15px;
      display: flex;
      justify-content: space-around;
      margin-bottom: 10px;
    }
    `];

  constructor(){
    super();
    this.href = "";
  }

  render(){return html`
    <li class="mb4">
      <a class="link hover-red white" href="${this.href}"><slot></slot></a>
    </li>
  `
  }
}
customElements.define('home-menu-item', HomeMenuItem);

export class ImageContainer extends LitElement{
  static styles = [tachyons];

  constructor(){
    super();
  }

  render(){return html`
    <div class="pa2 pa4-ns center bg-near-black">
      <slot></slot>
    </div>
  `
  }
}
customElements.define('image-container', ImageContainer);

export class VideoElement extends LitElement{
  static properties = {
    src: {},
    width: {},
  }
  static styles = [tachyons];
  constructor(){
    super();
    this.src="";
    this.width=30;
  }
  render(){return html`
    <img class=" transparent db w-${parseInt(this.width)+50} w-${this.width}-ns mb5 center" src="${this.src}" alt="">
  `
  }
}
customElements.define('video-element', VideoElement);

export class ImageElement extends LitElement{
  static properties = {
    src: {},
    width: {},
  }
  static styles = [tachyons];

  constructor(){
    super();
    this.src="";
    this.width=50;
  }

  render(){return html`
    <img class="db w-${parseInt(this.width)+30} w-${this.width}-ns mb4 mb5-ns center" src="${this.src}" alt="">
  `
  }
}
customElements.define('image-element', ImageElement);


export class SectionDivider extends LitElement{
  static styles = [tachyons];

  constructor(){
    super();
  }

  render(){return html`
    <div class="bg-moon-gray">
      <h1 class="near-black tc f3 mt4 mb4 pv2 pv5-ns">
        <slot></slot>
      </h1>
    </div>
  `
  }
}
customElements.define('section-divider', SectionDivider);
