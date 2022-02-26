import styled from "styled-components";

const SvgContainer = styled.div`
  height: ${(props) => props.height || "24px"};
  margin-left: ${(props) => props.marginLeft || 0};
  ${(props) => ({ ...props.styles })}
`;

export default SvgContainer;
