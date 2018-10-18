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
                -webkit-touch-callout: none; /* iOS Safari */
    -webkit-user-select: none; /* Safari */
     -khtml-user-select: none; /* Konqueror HTML */
       -moz-user-select: none; /* Firefox */
        -ms-user-select: none; /* Internet Explorer/Edge */
            user-select: none;
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
            }

            .clear {
              clear: both;
            }

            h1 {
              margin-top: 0px;
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
