import styled from 'react-emotion/macro';

const Header = styled.h2`
    font-size: ${props => props.theme.fontStyles.size * 2};
    background: ${props => props.theme.pallete.primaryTwo};
    font-family: ${props => props.theme.headings.fontFamily};
    color: ${props => props.theme.fontStyles.color};
    padding: ${props => props.theme.defaultPadding};
`;

const Wrapper = styled.div`
    height: ${props => props.theme.containerHeight};
    background: ${props => props.theme.pallete.primaryOne};
    color: ${props => props.theme.fontStyles.color};
    font-family: ${props => props.theme.fontStyles.family};
`;

const PText = styled.p`
   padding: ${props => props.theme.defaultPadding};
   line-height: 1.4;
`;

export { Header, Wrapper, PText };
