import {useContext} from 'react';
import Styled from 'styled-components';
import ThemeContext from '../themeContext';

const FooterContainer = Styled.header`
    width: 100%;
    position: relative;
    background-color: ${props => props.theme.colors.charcoal};
    border-top: 5px ${props => props.theme.colors.secondaryColor} solid;
    padding: ${props => props.theme.spacing.smallSpacing} ${props => props.theme.spacing.mediumSpacing};

    ${props => props.theme.media.minDesktop} {
    padding: ${props => props.theme.spacing.smallSpacing} ${props => props.theme.spacing.largeSpacing};
    }

    .inner {
    width: 100%;
    margin: 0 auto;
    max-width: ${props => props.theme.breakpoints.maxWidth};
    h1,p {
        margin: 0;
        color: ${props => props.theme.colors.light};
        & span, a {
            color: ${props => props.theme.colors.secondaryColor};
            &:visited, &:hover {
                text-decoration: none;
            }
        }
    }
    }
`;

export default function Footer() {

  const theme = useContext(ThemeContext);

  return (
    <FooterContainer className="footer" theme={theme}>
        <div className="inner">
            <p>Created with <span>&lt;code&#47;&gt;</span> and <span>❤</span> by <a href="https://www.marioduarte.co.uk/" target="_blank" rel="noreferrer">Mario Duarte</a></p>
        </div>
    </FooterContainer>
  );
}