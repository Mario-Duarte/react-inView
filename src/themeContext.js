import React from 'react';

const sizes = {
    mobileMax: 768,
    tabletMin: 769,
    tabletMax: 1023,
    desktopMin: 1024,
    maxWidth: 960,
}

const theme = {
    main : {
        colors : {
            primaryBlue : '#74b9ff',
            secondaryBlue : '#c0e0ff',
            secondaryColor: '#e55039',
            light : '#f9f9f9',
            vapor : '#eee',
            lightGrey : '#ccc',
            grey : '#999',
            darkGrey : '#555',
            charcoal : '#333',
            dark : '#212121'
        },
        breakpoints : {
            mobileMax: sizes.mobileMax + "px",
            tabletMin: sizes.tabletMin + "px",
            tabletMax: sizes.tabletMax + "px",
            desktopMin: sizes.desktopMin + "px",
            maxWidth: sizes.maxWidth + "px",
            maxWidthBlog: sizes.maxWidth/1.5 + "px"
        },
        media : {
            get maxMobile() {return `@media all and (max-width: ${sizes.mobileMax}px)`},
            get minTablet() {return `@media all and (min-width: ${sizes.tabletMin}px)`},
            get maxTablet() {return `@media all and (max-width: ${sizes.tabletMax}px)`},
            get minDesktop() {return `@media all and (min-width: ${sizes.desktopMin}px)`}
        },
        spacing : {
            smallSpacing : '10px',
            mediumSpacing : '20px',
            largeSpacing : '40px',
            extraLargeSpacing : '60px',
        }
    }
}

const ThemeContext = React.createContext(theme.main);
export default ThemeContext;