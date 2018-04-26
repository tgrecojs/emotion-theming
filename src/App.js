import React from 'react';
import {injectGlobal}  from 'react-emotion/macro';
import { Header, Wrapper, PText } from './shared/components';
import Proptypes from 'prop-types';
const { string } = Proptypes;

injectGlobal`
    body {
        margin: 0;
    }
`;

const App = ({
  title = 'Heading Text',
  text = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero impedit voluptas harum non deserunt ut dicta accusantium fugit neque consectetur nulla quam cum eveniet maxime ea, culpa, sunt, eaque officiis!'
}) =>
  <Wrapper>
    <Header>{title}</Header>
    <PText>{text}</PText>
  </Wrapper>;



App.propTypes = {
  title: string.isRequired,
  text: string.isRequired
};


export default App;
