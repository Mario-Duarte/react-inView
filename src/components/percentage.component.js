import {useRef, useContext} from 'react';
import Styled from 'styled-components';
import ThemeContext from '../themeContext';
import useInView from 'react-inview-callback';

const Percentage = Styled.section`
    width: 100%;
    min-height: 50vh;
    position: relative;
    background-color: ${props => props.theme.colors.secondaryColor};
    padding: ${props => props.theme.spacing.smallSpacing} ${props => props.theme.spacing.mediumSpacing};
    color: ${props => props.theme.colors.light};

    display: flex;
    flex-direction: column;
    flex-wrap: nowrap;
    justify-content: center;
    align-items: center;
    text-align: center;

    ${props => props.theme.media.minDesktop} {
    padding: ${props => props.theme.spacing.smallSpacing} ${props => props.theme.spacing.largeSpacing};
    }

    h1 {
        margin: 10px;
        font-weight: 800;
        font-style: italic;
        font-size: 64px;
    }
`;

function buildThresholdList() {
    const thresholds = [];
    const steps = 100;

    for (let i=1.0; i<=steps; i++) {
        let ratio = i/steps;
        thresholds.push(ratio);
    }
    
    thresholds.push(0);
    return thresholds;
}

const options = {
    root : 'root',
    rootMargin : '0px',
    threshold : buildThresholdList()
}

export default function PercentageSection() {
    const theme = useContext(ThemeContext);
    const myRef = useRef(null);
    useInView(myRef, options, onEntry);

    function onEntry(e) {
        const elements = myRef.current.querySelectorAll('h1')[0];
        const rate = parseFloat(e.intersectionRatio * 100).toFixed("0");
        elements.innerHTML = rate + '%';
    }

    return(
        <Percentage ref={myRef} theme={theme}>
            <p>This section is</p>
            <h1>0%</h1>
            <p>visible in the viewport!</p>
        </Percentage>
    );
}