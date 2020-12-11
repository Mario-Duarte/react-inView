import {useContext} from 'react';
import Styled from 'styled-components';
import ThemeContext from '../themeContext';

const HeaderContainer = Styled.header`
      width: 100%;
      position: relative;
      background-color: ${props => props.theme.colors.light};
      border-bottom: 5px ${props => props.theme.colors.secondaryColor} solid;
      padding: ${props => props.theme.spacing.smallSpacing} ${props => props.theme.spacing.mediumSpacing};

      ${props => props.theme.media.minDesktop} {
        padding: ${props => props.theme.spacing.smallSpacing} ${props => props.theme.spacing.largeSpacing};
      }

      .inner {
        width: 100%;
        margin: 0 auto;
        max-width: ${props => props.theme.breakpoints.maxWidth};
        display: flex;
        flex-direction: column;
        flex-wrap: nowrap;
        justify-content: flex-start;
        align-items: flex-start;
        h1,p {
          margin: 0;
        }

        ${props => props.theme.media.minTablet} {
          flex-direction: row;
          flex-wrap: nowrap;
          justify-content: space-between;
          align-items: center;
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
        <h1>{title}</h1>
        <p>{description}</p>
      </div>
    </HeaderContainer>
  );
}