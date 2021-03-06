class LogoFooterMagic {

  constructor(options) {
    this.elID = options.elem
    this.color = options.color;
    this.prefix = options.prefix;
    this.domEl = document.getElementById(this.elID);
    if (this.domEl !== undefined && this.domEl !== null) {
      this.initDom();
      this.initAnimation();
    }
  }

  initDom() {
    this.domEl.innerHTML = `
      <div id="${this.prefix}createspbBox">
        <a id="${this.prefix}createspbBoxLink" target="_blank" href="http://createdigital.me/"></a>
        <div id="${this.prefix}createspbBoxDev">Разработано в</div>
        <div id="${this.prefix}createspbBoxLogo">
          <div id="${this.prefix}createspbBoxLogoC">&#59392;</div>
          <div id="${this.prefix}createspbBoxLogoR">&#59393;</div>
          <div id="${this.prefix}createspbBoxLogoE">&#59394;</div>
          <div id="${this.prefix}createspbBoxLogoA">&#59395;</div>
          <div id="${this.prefix}createspbBoxLogoT">&#59396;</div>
          <div id="${this.prefix}createspbBoxLogoE1">&#59394;</div>
        </div>
      </div>
      <style>
        @font-face {
          font-family: 'create_logo_fontregular';
          src: url(data:application/font-woff2;charset=utf-8;base64,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) format('woff2'),
               url(data:application/font-woff;charset=utf-8;base64,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) format('woff'),
               url('create_logo_font-webfont.ttf') format('truetype');
          font-weight: normal;
          font-style: normal;
        }
        #${this.prefix}createspbBox {
          position: relative;
          text-align: left;
        }
        #${this.prefix}createspbBoxLink {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          z-index: 5;
        }
        #${this.prefix}createspbBox .opacity {
          opacity: .3;
        }
        #${this.prefix}createspbBoxDev {
          margin: 0 0 3px 0;
          transition: all .5s;
          line-height: 16px;
          font-size: 12px;
          font-family: Arial, sans-serif;
          color: ${this.color};
          opacity: .7;
        }
        #${this.prefix}createspbBoxLogo {
          overflow: hidden;
          font-family: 'create_logo_fontregular';
          color: ${this.color};
          font-size: 23px;
          line-height: normal;
        }
        #${this.prefix}createspbBoxLogoC  { margin: 0 4px 0 0; }
        #${this.prefix}createspbBoxLogoR  { margin: 0 5px 0 0; }
        #${this.prefix}createspbBoxLogoE  { margin: 0 2px 0 0; }
        #${this.prefix}createspbBoxLogoA  { margin: 0 0 0 0; }
        #${this.prefix}createspbBoxLogoT  { margin: 0 3px 0 0; }
        #${this.prefix}createspbBoxLogoE1 { margin: 0 0 0 0; }
        #${this.prefix}createspbBoxLogo div {
          float: left;
          transition: all .5s;
          padding: 0 1px;
        }
      </style>
    `;
    this.dev = document.getElementById(`${this.prefix}createspbBoxDev`);
    this.letters = [
      document.getElementById(`${this.prefix}createspbBoxLogoE1`),
      document.getElementById(`${this.prefix}createspbBoxLogoT`),
      document.getElementById(`${this.prefix}createspbBoxLogoA`),
      document.getElementById(`${this.prefix}createspbBoxLogoE`),
      document.getElementById(`${this.prefix}createspbBoxLogoR`),
      document.getElementById(`${this.prefix}createspbBoxLogoC`)
    ];
    this.right = true;
  }

  initAnimation() {
    setTimeout(() => {
      this.animate();
    }, 2500);
  }

  animate() {
    this.letters = this.letters.reverse();
    if (this.right === true) {
      this.animateElem(this.dev);
    } else {
      setTimeout(() => {
        this.animateElem(this.dev);
      }, 500)
    }
    this.right = !this.right;
    for (var i in this.letters) {
      this.animateElem(this.letters[i], i);
    }
    setTimeout(() => {
      this.animate();
    }, 2500);
  }

  animateElem(el, i) {
    setTimeout(() => {
      el.className = 'opacity';
      setTimeout(() => {
        el.className = '';
      }, 500);
    }, i * 100);
  }

}

export default LogoFooterMagic;
