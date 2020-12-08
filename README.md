# InView Callback a Custom React Hook 

Custom React hook that will detect an element entry and exit on the viewport using the [Intersection Observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API),  check the browser support on [canisue](https://caniuse.com/?search=IntersectionObserver) website, for older browsers support I recommend the use of polyfill as [IntersectionObserver polyfill](https://www.npmjs.com/package/intersection-observer). 

View it in action [on this demo page!]()<br/>
Alternatively on this [Pen @CodePen](https://github.com/Mario-Duarte/react-inView)

[Buy me a coffee to keep me going!](https://www.paypal.com/paypalme/MarioDuarte/2)

## Why?

As a long user of jQuery I have developed many plugins over the years that have helped me developing solutions faster and more reliably. As I move and transition to React(♥) I wanted some of these to come along with me on this new journey.

I like my plugins(now components/hooks) to be as flexible as possible and to not get in the way of the styling of the app/site that is been implemented to and this is no different.

Want to come along on this journey and/or have some great ideas on how to improve this Hook? [Check out the repo here!](https://github.com/Mario-Duarte/react-inView)

## How it works?

Custom Hook that as the Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport that will run a custom callback on entry and exit.

## How to install

To install this on your project run the following command on your terminal:<br/>
`npm install react-inview-callback`

Alternatively you can also install using yarn:<br/>
`yarn add react-inview-callback`

## How to Use

Import the custom hook in your component:

```(javascript)
import useInView from 'react-inview-callback';
```

And now you can start using the hook on your on your component, the hook will take in 4 parameters.
```useInView(elmRef, options, onEntry, onExit);```

The `elmRef` is the reference to the DOM element you want to observe in the viewport and you can set this using the [useRef react hook](https://reactjs.org/docs/hooks-reference.html#useref), here is simple example of this.

```(javascript)
  import {useRef} from 'react';
  import useInView from 'react-inview-callback';

  export default function myComponent() {
    const myref = useRef(null);

    return(
      <div className="my-component" ref={myref}>
      </div>
    );
  }
```

You can then call the custom hook on you reference element like so:<br/>
```(javascript)
  useInView(myref, options, onEntry, onExit);
```

The `options` parameter is an object that you can pass to the hook to control circumstances under which the observer's will use the callback in a similar fashion to the option object in the Intersection Observer API.

```(javascript)
  const options = {
    root : 'root',
    rootMargin : '0px',
    threshold : 1
  }
```

__root__ :<br/>
The element that is used as the viewport for checking visibility of the target. Must be an ancestor of the reference element. Defaults to the document body if not specified or if null.

__rootMargin__:<br/>
Margin around the root element, this can take values in a similar way to css using a variety of units such as pixel and percentage. You can also set this to a negative number and serves to modify the root bounding box before computing intersections.

__threshold__:<br/>
This is a number between 1 and 0 that defines when the callbacks are called, for example, if you want to detect when 50% of the element is visible in the viewport you you would set it to 0.5.<br/>
If you want your callbacks to run at multiple steps, for example, when the element is 50% visible and then again when it is 100% visible you can pass an array of number like `[0.5,1]`.

The `onEntry` and `onExit` parameters are callback functions that are executed once the reference element enters and exits the viewport, when the hook executes these callbacks it returns to them the Intersection Observer entry object that you can use to get the boundingClientRect, intersectionRatio, intersectionRect, isIntersecting, rootBounds, target, time properties. You can read more about these on the [Intersection Observer API webpage](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

So all together now our example would look like:<br/>
```(javascript)
  import {useRef} from 'react';
  import useInView from 'react-inview-callback';

  export default function myComponent() {
    const myref = useRef(null);

    function onEntry(entry) {
      console.log('Element has entered the view port');
      myref.current.classList.add('visible');
      setVisibility(true);
    }

    function onExit(entry) {
      console.log('Element has exited the view port');
      myref.current.classList.remove('visible');
      setVisibility(false);
    }

    const options = {
      root : 'root',
      rootMargin : '0px',
      threshold : 1
    }

    useInView(myref, options, onEntry, onExit);

    return(
      <div className="my-component" ref={myref}>
      </div>
    );
  }
```

## Bugs and issues

Please report all bugs and issues [here](https://github.com/Mario-Duarte/react-inView/issues).
