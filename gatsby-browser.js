// export const onClientEntry = () => {
//     console.log('cliententry')
//     document.getElementById('loader-wrapper').style.display = "flex";
//     document.getElementById('loader-wrapper').style.animation = "";
// }
// export const onPreRouteUpdate = () => {
//     console.log('preroute')
//     document.getElementById('loader-wrapper').style.display = "flex";
//     document.getElementById('loader-wrapper').style.animation = "";
// }
export const onRouteUpdateDelayed = () => {
    // console.log('route delayed')
    document.getElementById('loader-wrapper').style.display = "flex";
    document.getElementById('loader-wrapper').style.animation = "";
}
export const onRouteUpdate = () => {
    // console.log('route updated')
    document.getElementById('loader-wrapper').style.animation = "fadeOut 1s";
    setTimeout(() => {
        document.getElementById('loader-wrapper').style.display = "none";
    }, 1000);
}

export { wrapRootElement, wrapPageElement } from "./gatsby-shared"