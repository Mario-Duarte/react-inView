import React, {useRef, useState} from 'react';
import useInView from 'react-inview-callback';

const options = {
    root : 'root',
    rootMargin : '100px',
    threshold : 0.5
}

export default function Image({img=""}) {

    if ( typeof img !== 'string' ) { throw new Error(`Image needs to be of sting type and ${typeof title} was provided.`) }

    const [image, setImage] = useState('');
    const imgRef =useRef(null);
    useInView(imgRef, options, onEntry);

    function onEntry(entry) {
        if ( !imgRef.current.classList.contains("loaded") ) {
            const myImage = React.createElement("img", {
                src: img,
            }, null);
            setImage(myImage);
            imgRef.current.classList.add("loaded");
        }
    }

    return(
        <div className="gallery-image" ref={imgRef}>{image}</div>
    )

}