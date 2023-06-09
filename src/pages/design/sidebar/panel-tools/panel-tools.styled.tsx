import styled from "styled-components";

import { Color, Space } from "@src/styles/variables";

export const PanelWrapper = styled.div`
  color: ${Color.White};
  background-color: ${Color.Light1};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: ${Space.px8} 0;
  box-shadow: rgba(0, 0, 0, 0.3) 0.4rem 0.7rem 9.3rem 0.3rem;
  border: 0.5px solid ${Color.Light3};
`;

export const ToolItem = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 2px;
  margin: ${Space.px6};
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;

  &:last-child {
    margin-bottom: ${Space.px6};
  }

  &:hover {
    background-color: ${Color.Light2};
  }
`;
