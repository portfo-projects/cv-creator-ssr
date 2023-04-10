import styled, { css } from "styled-components";

import ContentEditable from "@src/components/content-editable/content-editable";
import { Color, Page, Space } from "@src/styles/variables";

export const Wrapper = styled.div`
  width: 100%;
  max-width: ${Page.WidthPx};
  min-height: calc(${Page.WidthPx} * ${Page.Ratio});
  background-color: ${Color.White};
  padding: ${Page.Padding};

  ${(props: { isInPreview: boolean }) => css`
    margin: ${props.isInPreview ? "auto" : "80px auto"};
    box-shadow: ${props.isInPreview
      ? "none"
      : "rgba(0, 0, 0, 0.3) 0.4rem 0.7rem 9.3rem 0.3rem"};
  `}
`;

export const YourName = styled(ContentEditable)`
  margin: 0 0 ${Space.px6};
`;

export const YourPosition = styled(ContentEditable)`
  margin: 0;
`;