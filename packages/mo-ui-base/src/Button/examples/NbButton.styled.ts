import styled from "styled-components";
import { Button } from "../Button";
import { SpanContent } from "../Button.styled";

export const StyledNbButton = styled(Button)`
  background-color: #f16222;
  border: none;
  padding: 0.5em 1.5em calc(0.5em + 1px) 1.5em;
  color: white;
  font-size: 1rem;

  &:hover {
    background-color: #b23c08;
  }

  ${SpanContent} {
    position: relative;
    top: 2px;
  }
`;
