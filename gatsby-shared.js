import React from 'react'
import { Script } from "gatsby"
import { LiveChatLoaderProvider, Messenger } from 'react-live-chat-loader'

import { CartProvider } from './src/context/CartProvider';

export const wrapRootElement = ({ element }) => (
  <CartProvider>
    {element}
    {/* <Script
      src={`https://www.googletagmanager.com/gtm.js?id=${process.env.GATSBY_GTM}`}
      // strategy="off-main-thread"
      forward={[`dataLayer.push`]}
    /> */}
    {/* <Script id="gtm-init"
      // strategy="off-main-thread"
    >
      {`
          window.dataLayer = window.dataLayer || []
          window.dataLayer.push({ 'gtm.start': new Date().getTime(), 'event': 'gtm.js' })
      `}
    </Script> */}
  </CartProvider>
);

export const wrapPageElement = ({ element }) => {
  return (
    <>
      {element}
      {/* <LiveChatLoaderProvider
        provider="messenger"
        providerKey="101838542835014"
        locale="vi_VN"
      >
        <Messenger 
          color="#ff7e29"
          greetingDialogDisplay="icon"
        />
      </LiveChatLoaderProvider> */}
    </>
  )
}