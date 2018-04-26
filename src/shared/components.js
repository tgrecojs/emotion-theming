import styled from 'react-emotion/macro';

const Header = styled.h2`
    font-size: 32;
    background-color: #003594;
    font-family: "Hammersmith One";
    color: #fff;
    padding: 10px;
`;

const Wrapper = styled.div`
    height: 100vh;
    background: #041E42;
    color: #fff;
    font-family: "Josefin Sans";
`;

const PText = styled.p`
   padding: 10px;
   line-height: 1.4;
`;

export { Header, Wrapper, PText };
