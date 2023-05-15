import React from "react";
import { Script } from "gatsby";
import "./messengerchatstyles.css";

const MessengerChat = (prop) => {
    return (
        <div id="fb-component-container">
            <div id="fb-root" />
            <div id="fb-customer-chat" className="fb-customerchat"
                attribution="biz_inbox"
                page_id="101838542835014"
                greeting_dialog_display="icon"
            ></div>
            <Script id="messenger-chat-init" strategy="idle">
                {`
                  window.fbAsyncInit = function () {
                      window.FB.init({
                          xfbml: true,
                          version: 'v16.0'
                      });
                  };
          
                  (function (d, s, id) {
                      var js, fjs = d.getElementsByTagName(s)[0];
                      if (d.getElementById(id)) return;
                      js = d.createElement(s); js.id = id;
                      js.src = 'https://connect.facebook.net/vi_VN/sdk/xfbml.customerchat.js';
                      fjs.parentNode.insertBefore(js, fjs);
                  }(document, 'script', 'facebook-jssdk'));
          `}
            </Script>
        </div>
    );
}

export default MessengerChat;