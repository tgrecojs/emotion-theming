import React from 'react';
import styled, {css, injectGlobal}  from 'react-emotion/macro';
import { ThemeProvider, withTheme } from 'emotion-theming';
import { Header, Wrapper } from './shared/components';
import { theme } from './shared/themes';
import Proptypes from 'prop-types';
const { string } = Proptypes;

injectGlobal`
    body {
        margin: 0;
    }

`;

const App = ({
  title = 'Emotion Themeing Lesson',
  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit voluptas harum non deserunt ut dicta accusantium fugit neque consectetur nulla quam cum eveniet maxime ea, culpa, sunt, eaque officiis!'
}) =>
  <Wrapper>
    <Header>Header</Header>
    <p>{text}</p>
  </Wrapper>;



App.propTypes = {
  title: string.isRequired,
  text: string.isRequired
};


export default App;
