import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <title>everiPixel</title>
          <link type="text/css" rel="stylesheet" href="//fast.fonts.net/cssapi/347fb4c4-0a7f-47ab-91c8-e03e876c5849.css"/>
          <style>{`
            html {
              height: 100%;
              margin: 0;
              padding: 0;
              background-color: #000;
            }

            body {
              margin: 0;
              padding: 0;
              min-height: 100%;
              font-family: Bubbledot Fine W01 Pos;
              font-size: 25px;

              /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,001b28+100 */
              background-color: #000;
              background: #000000; /* Old browsers */
              background: -moz-linear-gradient(top, #000000 0%, #001b28 100%); /* FF3.6-15 */
              background: -webkit-linear-gradient(top, #000000 0%,#001b28 100%); /* Chrome10-25,Safari5.1-6 */
              background: linear-gradient(to bottom, #000000 0%,#001b28 100%); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
              filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#000000', endColorstr='#001b28',GradientType=0 ); /* IE6-9 */
              padding-bottom: 200px;
            }

            button {
              border: 1px solid #001b28;
              font-family: Bubbledot Fine W01 Pos;
              font-size: 16px;
              padding: 10px 20px;
              border-radius: 5px;
              margin-right: 10px;
              cursor: pointer;
            }

            button.primary:hover {
              background-color: #B8770D;
              border: 1px solid #fca311;
            }

            button.primary:active {
              background-color: #8A590A;
              outline: none;
            }

            button.primary:focus{
              box-shadow: 0px 0px 10px #fca311;
              outline: none;
            }

            button.primary {
              background-color: #fca311;
              color: #fff;
              text-shadow: 2px 2px #222;
            }

            button.secondary {
              background-color: #888;
            }

            button.secondary:active, button.secondary:focus {
              outline: none;
              box-shadow: 0px 0px 10px #fca311;
            }

            .clear {
              clear: both;
            }

            h1 {
              margin-top: 0px;
            }

            .pixel {
              box-sizing: border-box;
            }

            .pixel:hover {
              border: 1px solid #555;
            }

            .pixel.selected {
              border: 1px solid #F55;
            }

            .pullRight {
              display: inline;
              float: right;
            }

            h3 {
              margin-top: 0px;
            }

            .header {
              border-bottom: 1px solid #222222;
              padding: 20px;
              margin-bottom: 20px;
            }

            .user {
              color: #ccc;
              font-size: 16px;
              padding-top: 5px;
              position: relative;
            }

            .user a {
              cursor: pointer;
              color: #999;
            }

            .user a:hover {
              color: #fff
            }

            .createAccount {
              position: absolute;
              top: 30px;
              right: 0px;
              background-color: #000;
              border: 1px solid #222222;
              padding: 10px;
            }

            .overlayWindow {
              width: 400px;
              box-shadow: 0px 0px 25px #555;
            }

            label {
              display: block;
            }

            input {
              display: block;
              width: 80%;
              padding: 8px;
              font-size: 16px;
              font-family: Bubbledot Fine W01 Pos;
              margin: 10px 0px;
              background-color: #333;
              border: 1px solid #999;
              color: #eee;
            }

            .caption {
              color: #999;
              font-size: 16px;
              width: 500px;
            }

            .caption span {
              color: #fff;
            }

            .main {
              width: 912px;
              margin: auto;
            }

            .explanation {
              font-size: 16px;
              margin-top: 50px;
              color: #999;
              border-top: 1px solid #333;
              padding-top: 20px;
            }


            .explanation h2 {
              color: #ddd;
              margin-top: 40px;
            }

            `}
          </style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
          <div className="clear"></div>
        </body>
      </html>
    )
  }
}
