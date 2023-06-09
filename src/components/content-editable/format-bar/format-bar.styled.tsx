import styled, { css } from "styled-components";

import { Color, Space } from "@src/styles/variables";

export const FormatItem = styled.button`
  min-width: 32px;
  min-height: 32px;
  padding: ${Space.px4} 0;
  margin-right: ${Space.px6};
  border-radius: 2px;
  border: none;
  outline: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  ${({ isActive }: { isActive?: boolean }) => css`
    background-color: ${isActive ? Color.Light9 : "transparent"};
  `}

  &:last-child {
    margin-right: 0;
  }

  svg {
    fill: ${Color.Light1};

    g {
      fill: ${Color.Light1};
    }
  }
`;

export const FormatBarWrapper = styled.div`
  display: flex;
  align-items: center;
  padding: ${Space.px4};
`;

export const Divider = styled.div`
  width: 1px;
  height: 26px;
  background-color: ${Color.Light9};
  margin: 0 ${Space.px4};
`;

export const ColorPickerInput = styled.input`
  display: none;
`;

export const ColorIconLabel = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
