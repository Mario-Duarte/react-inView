import {useContext} from 'react';
import Styled from 'styled-components';
import ThemeContext from '../themeContext';

const ContentContainer = Styled.section`
    width: 100%;
    position: relative;
    padding: ${props => props.theme.spacing.largeSpacing};

    ${props => props.theme.media.minDesktop} {
    padding: ${props => props.theme.spacing.extraLargeSpacing};
    }
    .inner {
        position: relative;
        width: 100%;
        margin: 0 auto;
        max-width: ${props => props.theme.breakpoints.maxWidthBlog};
        text-align: center;

        a.cta, a.cta:visited {
            text-transform: uppercase;
            color: ${props => props.theme.colors.secondaryColor};
            text-decoration: underline;
            transition: 0.6s color ease-in-out;
            &:hover {
                color: ${props => props.theme.colors.primaryBlue};
            }
        }

        ${props => props.theme.media.minTablet} {
            
        }
    }
`;

export default function Content({title='', description='Short description', cta=''}) {

    if ( typeof title !== 'string' ) { throw new Error(`Title needs to be of sting type and ${typeof title} was provided.`) }
    if ( typeof description !== 'string' ) { throw new Error(`Description needs to be of sting type and ${typeof title} was provided.`) }
    if ( typeof cta !== 'object' ) { throw new Error(`The cta text needs to be of array type and ${typeof title} was provided.`) }

    const theme = useContext(ThemeContext);

    return (
        <ContentContainer className="header" theme={theme}>
            <div className="inner">
                {title && <h1>{title}</h1>}
                <p>{description}</p>
                {cta.map((link, i) => <p><a className="cta" href={link.url} target="_blank" rel="noreferrer">{link.title}</a></p>)}
            </div>
        </ContentContainer>
    );
}