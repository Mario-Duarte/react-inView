import Styled from 'styled-components';
//import inView from 'react-inview-callback';
import Header from './components/header.component';
import Hero from './components/hero.component';
import PercentageSection from './components/percentage.component';
import Content from './components/content.component';
import Gallery from './components/gallery.component';
import Footer from './components/footer.component';

const AppContainer = Styled.div`
  width: 100%;
  position: relative;
`;

export default function App() {

  const baseURL = (seed) => {return `https://picsum.photos/seed/${seed}/800/600`; };
  const imagesArr = [];
  const gallerySize = 7;

  for (let i = 1; i < gallerySize; i++) {
    const img = baseURL(i);
    imagesArr.push(img);
  }

  return (
    <AppContainer className="App">
      <Header 
        title="inView" 
        description="A custom ReactJS Hook with callbacks.">
      </Header>
      <Hero 
        title="inView ReactJS Hook" 
        description="Custom Hook that provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport (powered by the Intersection Observer API) that will run a custom callback on entry/exit leaving you the developer in full control."
        cta="Scroll down to view it in action!">
      </Hero>
      <PercentageSection/>
      <Content title="Say good bye to scroll event listeners!" description="Detect when your elements enters and leaves the view port as well as how much of it is currently visible with a light weight and fast solution for modern all browsers." url="https://github.com/Mario-Duarte/react-inView" cta="View the docs" />
      <Gallery title="Infinite ways to use it" description="You can use this hook to lazy load in images in your page, making you pages load faster and progressively load content as needed!" images={imagesArr} />
      <Footer />
    </AppContainer>
  );
}
