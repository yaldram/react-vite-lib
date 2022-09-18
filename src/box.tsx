import styled from 'styled-components';
import {
  compose,
  space,
  layout,
  typography,
  color,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  LayoutProps &
  TypographyProps &
  ColorProps &
  React.ComponentPropsWithoutRef<'div'> & {
    as?: React.ElementType;
  };

export const Box = styled.div<BoxProps>`
  box-sizing: border-box;
  ${compose(space, layout, typography, color)}
`;
