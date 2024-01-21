const CrispChat = () => (
  <script
    type="text/javascript"
    dangerouslySetInnerHTML={{
      __html: `
          window.$crisp=[];
          window.CRISP_WEBSITE_ID="80e11e13-15b0-4aae-8d50-6e4a2c1515ff";
          (function(){
            var d=document;
            var s=d.createElement("script");
            s.src="https://client.crisp.chat/l.js";
            s.async=1;
            d.getElementsByTagName("head")[0].appendChild(s);
          })();
        `,
    }}
  />
);

export default CrispChat;
