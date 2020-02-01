import React from 'react';
import {AppCont} from './Styles/globalStyles';

function App() {
  return (
    <AppCont className="App">
      {/* just some notes here for my team, since I have no life and worked all weekend lol */}
      <h1>Cleaned up starter files and installed dependencies:</h1>
      <p>react-router-dom</p>
      <p>not sure if we're using styled-components or not</p>
      <p>installed styled-components or not</p>
      <p> set up boilerplates for base components, styles structure and imported all styles to appropriate places</p>
      <p>if you don't like my styles structure with global and vars and all that just let me know. these are just idea</p>
      <p>all styels are controlled form 'styles/styleVars', from there the vars map into 'globalStyles' where I have some basic components set up. heading tags, paragraphs anchors etc.. they a are all dynamic. they all can take bgColor, color and some fontSize props or you can control defaults from styleVars</p>
      <p>at the top of globalStyles I used '<b>createGlobalStyle</b>' to set basic global styles like 'body' and '*'. This also where we would include a 'reset' if you want to</p>
    </AppCont>
  );
}

export default App;
