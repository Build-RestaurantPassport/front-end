import React from 'react';
import './Styles/styleVars';
import {GlobalStyle, AppCont, Heading1, Para} from './Styles/globalStyles';

function App() {
  return (
    // AppCont is a default styled-component I made. just some default basics to help us get started. we can change and tweak later as needed.
    <AppCont className="App">  
    <GlobalStyle />
      {/* just some notes here for my team, since I have no life and worked all weekend lol */}
      <Heading1>Notes for the team: by Scott Fuston</Heading1>

      <Para>Cleaned up starter files and installed dependencies:</Para>

      <Para>react-router-dom</Para>

      <Para>not sure if we're using styled-components or not</Para>

      <Para>installed styled-components or not</Para>

      <Para> set up boilerplates for base components, styles structure and imported all styles to appropriate places</Para>

      <Para>if you don't like my styles structure with global and vars and all that just let me know. these are just idea proposals.</Para>

      <Para>all styels are controlled form 'styles/styleVars', from there the vars map into 'globalStyles' where I have some basic components set up. heading tags, paragraphs anchors etc.. they a are all dynamic. they all can take bgColor, color and some fontSize props or you can control defaults from styleVars</Para>

      <Para>at the top of globalStyles I used '<b>createGlobalStyle</b>' to set basic global styles like 'body' and '*'. This also where we would include a 'reset' if you want to</Para>

    </AppCont>
  );
}

export default App;
