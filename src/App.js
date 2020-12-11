import Styled from 'styled-components';
//import inView from 'react-inview-callback';
import Header from './components/header.component';
import Hero from './components/hero.component';
import PercentageSection from './components/percentage.component';

const AppContainer = Styled.div`
  width: 100%;
  position: relative;
  min-height: 300vh;
`;

export default function App() {
  return (
    <AppContainer className="App">
      <Header 
        title="inView" 
        description="A custom ReactJS Hook with callbacks.">
      </Header>
      <Hero 
        title="inView ReactJS Hook" 
        description="Custom Hook that as the Intersection Observer API provides a way to asynchronously observe changes in the intersection of a target element with an ancestor element or with a top-level document's viewport that will run a custom callback on entry and exit."
        cta="Scroll down to view it in action!">
      </Hero>
      <PercentageSection/>
    </AppContainer>
  );
}
