import styled from "styled-components";

export const ButtonResetStyled = styled.button`
  all: unset;
  cursor: pointer;

  &:disabled {
    cursor: not-allowed;
  }
`;

const SpanReset = styled.span`
  all: unset;
`;

export const SpanStartIcon = styled(SpanReset)`
`;

export const SpanContent = styled(SpanReset)`
`;

export const SpanEndIcon = styled(SpanReset)`
`;