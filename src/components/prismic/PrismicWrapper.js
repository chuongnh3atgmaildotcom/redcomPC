import React, { forwardRef } from "react";
import { Link as GatsbyLink } from "gatsby";
import { PrismicLink, PrismicProvider } from "@prismicio/react";

import { Heading } from "./Heading";

/**
 * An adapter to support Gatsby's `<Link>` component when using `<PrismicLink>`.
 */
const GatsbyLinkShim = forwardRef(({ href, ...props }, ref) => {
    return <GatsbyLink to={href} ref={ref} {...props} />;
});
GatsbyLinkShim.displayName = "GatsbyLinkShim";

const richTextComponents = {
    heading1: ({ children }) => (
        <Heading as="h2" size="3xl" >
            {children}
        </Heading>
    ),
    heading2: ({ children }) => (
        <Heading as="h3" size="2xl" >
            {children}
        </Heading>
    ),
    heading3: ({ children, text }) => (
        <Heading as="h4" size="xl" id={text.replace(/ /g,"-").replace(/#/g,"")}>
            {children}
        </Heading>
    ),
    paragraph: ({ children }) => <p >{children}</p>,
    oList: ({ children }) => (
        <ol >{children}</ol>
    ),
    oListItem: ({ children }) => (
        <li >{children}</li>
    ),
    list: ({ children }) => (
        <ul >{children}</ul>
    ),
    listItem: ({ children }) => (
        <li >{children}</li>
    ),
    preformatted: ({ children }) => (
        <pre >
            <code>{children}</code>
        </pre>
    ),
    strong: ({ children }) => (
        <strong >{children}</strong>
    ),
    hyperlink: ({ children, node }) => (
        <PrismicLink
            field={node.data}

        >
            {children}
        </PrismicLink>
    ),
};

const PrismicWrapper = ({ children }) => {
    return (
        <PrismicProvider
            internalLinkComponent={GatsbyLinkShim}
            richTextComponents={richTextComponents}
        >{children}</PrismicProvider>)
}

export default PrismicWrapper