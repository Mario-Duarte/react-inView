import {useContext} from 'react';
import Styled from 'styled-components';
import ThemeContext from '../themeContext';
import Image from './image.component';

const GalleryContainer = Styled.section`
    width: 100%;
    position: relative;
    padding: ${props => props.theme.spacing.largeSpacing};

    ${props => props.theme.media.minDesktop} {
        padding: ${props => props.theme.spacing.extraLargeSpacing};
    }
    
    .inner {
        position: relative;
        width: 100%;
        max-width: ${props => props.theme.breakpoints.maxWidth};
        margin: 0 auto;
        text-align: center;
        .gallery {
            position: relative;
            width: 100%;
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
            justify-content: flex-start;

            ${props => props.theme.media.tabletMin} {
                justify-content: space-between;
            }

            .gallery-image {
                position: relative;
                width: 100%;
                padding-top: 75%;
                overflow: hidden;
                background-color: ${props => props.theme.colors.lightGrey};
                margin-bottom: ${props => props.theme.spacing.mediumSpacing};
                img {
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: auto;
                    z-index: 1;
                }
                ${props => props.theme.media.minTablet} {
                    width: calc(50% - ${props => props.theme.spacing.smallSpacing});
                    padding-top: 36%;
                }
            }
        }
    }
`;

export default function Gallery({title="", description="", images=[""]}) {

    if ( typeof title !== 'string' ) { throw new Error(`Title needs to be of sting type and ${typeof title} was provided.`) }
    if ( typeof description !== 'string' ) { throw new Error(`Description needs to be of sting type and ${typeof title} was provided.`) }
    if ( typeof images !== 'object' ) { throw new Error(`Images needs to be of array type and ${typeof title} was provided.`) }

    const theme = useContext(ThemeContext);

    return (
        <GalleryContainer className="header" theme={theme}>
            <div className="inner">
                {title && <h1>{title}</h1>}
                {description && <p>{description}</p>}
                <div className="gallery">
                    {images.map((image, i) => <Image img={image} key={i} />)}
                </div>
            </div>
        </GalleryContainer>
    );
}