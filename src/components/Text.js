import styled from 'styled-components';

const Heading1 = styled.h1`
  background: transparent;
  font-family: Playfair Display;
  font-size: 56px;
  font-weight: 900;
  margin: 0;
`;

const Heading2 = styled.h2`
  background: transparent;
  font-family: Playfair Display;
  font-size: 34px;
  font-weight: 500;
  margin: 0;
`;

export default function Text({ children, variant }) {
  switch (variant) {
    case 'heading-1':
      return <Heading1>{children}</Heading1>;
    case 'heading-2':
      return <Heading2>{children}</Heading2>;
    default:
      return null;
  }
}
