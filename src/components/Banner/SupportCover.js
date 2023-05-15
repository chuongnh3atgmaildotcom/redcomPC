import React from 'react';
import { StaticImage } from 'gatsby-plugin-image'

const SupportCover = (props) => {
    return (

        <StaticImage
            style={{
                gridArea: "1/1",
                minHeight: "200px",
            }}
            // aspectRatio={5 / 2}
            // layout="fullWidth"
            src="../../../static/banners/support.jpg"
            // width={950}
            height={500}
            alt={"supportbanner"}
            loading={"eager"}
        />


    );
};

export default SupportCover;