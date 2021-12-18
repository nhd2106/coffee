import Document, { Html, Head, Main, NextScript } from 'next/document';
import Script from 'next/script'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <Html lang="vi">
        <Head >
        </Head>
        <body>
          <Main />
          <NextScript />
          <div id="fb-root"></div>
      <script dangerouslySetInnerHTML={
              { __html: `
              window.fbAsyncInit = function() {
                FB.init({
                  xfbml            : true,
                  version          : 'v12.0'
                });
              };
        
              (function(d, s, id) {
                var js, fjs = d.getElementsByTagName(s)[0];
                if (d.getElementById(id)) return;
                js = d.createElement(s); js.id = id;
                js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                fjs.parentNode.insertBefore(js, fjs);
              }(document, 'script', 'facebook-jssdk'));
              `}
          }>
        </script>

 
      <div className="fb-customerchat"
        attribution="setup_tool"
        page_id="109041544686258">
      </div>
        </body>
      </Html>
    )
  }
}

export default MyDocument