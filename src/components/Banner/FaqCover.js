import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

const FaqCover = (props) => {
    return (

        <StaticImage
            style={{
                gridArea: "1/1",
                minHeight: "200px"
            }}
            // aspectRatio={9 / 5}
            // layout="fullWidth"
            src="../../../static/banners/faqCover.jpg"
            // width={650}
            height={450}
            alt={"faqbanner"}
            loading={"eager"}
        />


    );
};

export default FaqCover;