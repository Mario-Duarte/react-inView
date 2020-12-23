import {useContext} from 'react';
import Styled from 'styled-components';
import ThemeContext from '../themeContext';
import npmImg from '../npm.svg';
import githubImg from '../github.svg';

const HeaderContainer = Styled.header`
      width: 100%;
      position: fixed;
      top: 0;
      left: 0;
      background-color: ${props => props.theme.colors.light};
      border-bottom: 5px ${props => props.theme.colors.secondaryColor} solid;
      padding: ${props => props.theme.spacing.smallSpacing} ${props => props.theme.spacing.mediumSpacing};
      z-index: 9;

      ${props => props.theme.media.minDesktop} {
        padding: ${props => props.theme.spacing.smallSpacing} ${props => props.theme.spacing.largeSpacing};
      }

      .inner {
        width: 100%;
        margin: 0 auto;
        max-width: ${props => props.theme.breakpoints.maxWidth};
        display: flex;
        flex-direction: row;
        flex-wrap: nowrap;
        justify-content: space-between;
        align-items: center;
        h1,p {
          margin: 0;
        }

        .logo {
          position: relative;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
          img {
            width: auto;
            height: 32px;
            border-radius: 5px;
            margin-right: ${props => props.theme.spacing.smallSpacing};
          }
        }

        .app-nav {
          position: relative;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: flex-end;
          align-items: center;

          li {
            list-style: none;

            &.tablet-desktop {
              display: none;
              ${props => props.theme.media.minTablet} {
                display: block;
              }
            }

            a {
              text-decoration: none;
              padding: 0 5px;
              opacity: 1;
              transition: opacity 0.2s ease-in-out;
              img {
                width: auto;
                height: 24px;
              }
              &:hover {
                opacity: 0.6;
              }
            }
          }
        }

      }
  `;

export default function Header({title='Default Title', description='Short description'}) {

  if ( typeof title !== 'string' ) { throw new Error(`Title needs to be of sting type and ${typeof title} was provided.`) }
  if ( typeof description !== 'string' ) { throw new Error(`Description needs to be of sting type and ${typeof title} was provided.`) }

  const theme = useContext(ThemeContext);

  return (
    <HeaderContainer className="header" theme={theme}>
      <div className="inner">
        <div className="logo">
          <img src={process.env.PUBLIC_URL + '/logo192.png'} alt="inView Hook" />
          <h1>{title}</h1>
        </div>
        
        <ul className="app-nav">
          <li className="tablet-desktop">{description}</li>
          <li><a href="https://github.com/Mario-Duarte/react-inView" target="_blank" rel="noreferrer"><img src={githubImg} alt="view it on GitHub" /></a></li>
          <li><a href="https://www.npmjs.com/package/react-inview-callback" target="_blank" rel="noreferrer"><img src={npmImg} alt="view it on NPM" /></a></li>
        </ul>
      </div>
    </HeaderContainer>
  );
}