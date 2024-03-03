import { Col, Container, Row } from 'styled-bootstrap-grid';
import styled from 'styled-components';
import Text from './Text';

const Link = styled.a`
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

const Wrapper = styled.header`
  padding: 40px 120px;
`;

export default function Header() {
  return (
    <Wrapper>
      <Container>
        <Row alignItems="center" justifyContent="between">
          <Col col={4}>
            <Text variant="heading-2">Casey O'Neill</Text>
          </Col>
          <Col col={4}>
            <Link>Home</Link>
            <Link>Projects</Link>
            <Link>Resume</Link>
            <Link>Misc</Link>
          </Col>
        </Row>
      </Container>
    </Wrapper>
  );
}
