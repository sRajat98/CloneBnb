import styled from "styled-components";

const Image = styled.img`
  ${(props) => ({ ...props.imageStyles })}
`;

export default Image;
