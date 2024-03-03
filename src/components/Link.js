import styled from 'styled-components';

const StyledLink = styled.a`
  background: linear-gradient(0deg, ${props => props.theme.dark}, ${props => props.theme.dark}) bottom center no-repeat;
  background-size: 0px 1px;
  color: ${props => props.theme.dark};
  cursor: pointer;
  font-family: Lora;
  font-size: 16px;
  font-weight: 500;
  padding: 16px 8px;
  text-transform: uppercase;
  transition: 0.3s;
  text-decoration: none;
  user-select: none;

  &:hover {
    background-size: 100% 1px;
  }
`;

export default function Link({ children = '', onClick = () => { } }) {
  return (
    <StyledLink onClick={onClick}>{children}</StyledLink>
  );
}
