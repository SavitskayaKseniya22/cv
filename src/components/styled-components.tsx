import styled, { css } from 'styled-components';

export const StyledInput = styled('input')`
  padding: 0.5rem;
  border: none;
  color: white;
  outline: 0;
  background-color: transparent;
  border-bottom: 2px solid #d62222;
`;

export const StyledButton = styled(StyledInput)`
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #d62222;
  border: none;
  cursor: pointer;
`;

export const enum SVGType {
  BIG,
  MIDDLE,
  SMALL,
}

export const StyledSVG = css<{ $type: SVGType; $color: string }>`
  width: ${(props) => {
    switch (props.$type) {
      case SVGType.BIG:
        return '2rem';
      case SVGType.MIDDLE:
        return '1.5rem';
      case SVGType.SMALL:
        return '1rem';
      default:
        return '1rem';
    }
  }};
  height: ${(props) => {
    switch (props.$type) {
      case SVGType.BIG:
        return '2rem';
      case SVGType.MIDDLE:
        return '1.5rem';
      case SVGType.SMALL:
        return '1rem';
      default:
        return '1rem';
    }
  }};
  color: ${(props) => props.$color};
  flex-shrink: 0;
`;

export const StyledLiWithMarker = css<{
  $type: SVGType;
  $color: string;
}>`
  display: flex;
  align-items: center;

  gap: ${(props) => {
    switch (props.$type) {
      case SVGType.BIG:
        return '1.5rem';
      case SVGType.MIDDLE:
        return '1rem';
      case SVGType.SMALL:
        return '0.5rem';
      default:
        return '0.5rem';
    }
  }};

  .marker {
    ${StyledSVG}
  }
`;
