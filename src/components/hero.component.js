import {useContext, useRef} from 'react';
import Styled from 'styled-components';
import ThemeContext from '../themeContext';
import useInView from 'react-inview-callback';

const HeroContainer = Styled.section`
        width: 100%;
        position: relative;
        padding: ${props => props.theme.spacing.smallSpacing};
        background-color: ${props => props.theme.colors.SecondaryBlue};
        background: linear-gradient(45deg, ${props => props.theme.colors.primaryBlue} 0%, ${props => props.theme.colors.secondaryBlue} 100%);

        ${props => props.theme.media.minDesktop} {
            padding: ${props => props.theme.spacing.largeSpacing};
        }

        .inner {
            width: 100%;
            min-height: 90vh;
            margin: 0 auto;
            max-width: ${props => props.theme.breakpoints.maxWidthBlog};
            display: flex;
            flex-direction: column;
            flex-wrap: nowrap;
            justify-content: center;
            align-items: center;
            text-align: center;
            color: white;
            h1 {
                font-weight: 800;
            }
            p {
                font-size: 20px;
                opacity: 1;
                transform: translateY(0px);
                transition: all 0.8s ease-in-out;
                &.hidden {
                    opacity: 0;
                    transform: translateY(40px);
                } 
                &.cta-text {
                    text-decoration: underline;
                }
            }
        }
    `;

export default function Hero({title='Sample Title', description='Sample description in long format', cta='Do something now!'}) {

    if ( typeof title !== 'string' ) { throw new Error(`Title needs to be of sting type and ${typeof title} was provided.`) }
    if ( typeof description !== 'string' ) { throw new Error(`Description needs to be of sting type and ${typeof title} was provided.`) }
    if ( typeof cta !== 'string' ) { throw new Error(`CTA needs to be of sting type and ${typeof title} was provided.`) }

    const theme = useContext(ThemeContext);
    const myRef = useRef(null);

    const options = {
        root : 'root',
        rootMargin : '0px',
        threshold : 0.5
    }

    function onEntry(e) {
        const elements = myRef.current.querySelectorAll('p');
        [...elements].forEach((elm) => {
            elm.classList.remove('hidden');
        });
    }

    function onExit(e) {
        const elements = myRef.current.querySelectorAll('p');
        [...elements].forEach((elm) => {
            elm.classList.add('hidden');
        });
    }

    useInView(myRef, options, onEntry, onExit);

    return(
        <HeroContainer ref={myRef} theme={theme}>
            <div className="inner">
                <h1>{title}</h1>
                <p>{description}</p>
                <p className="cta-text">{cta}</p>
            </div>
        </HeroContainer>
    );
}