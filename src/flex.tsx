import * as React from 'react';
import styled from 'styled-components';
import { system, FlexboxProps } from 'styled-system';

import { Box, BoxProps } from './box';

type FlexOmitted = 'display';

type FlexOptions = {
  direction?: FlexboxProps['flexDirection'];
  align?: FlexboxProps['alignItems'];
  justify?: FlexboxProps['justifyContent'];
  wrap?: FlexboxProps['flexWrap'];
};

type BaseFlexProps = FlexOptions & BoxProps;

const BaseFlex = styled(Box)<BaseFlexProps>`
  display: flex;
  ${system({
    direction: {
      property: 'flexDirection',
    },
    align: {
      property: 'alignItems',
    },
    justify: {
      property: 'justifyContent',
    },
    wrap: {
      property: 'flexWrap',
    },
  })}
`;

export type FlexProps = Omit<BaseFlexProps, FlexOmitted>;

export const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, ref) => {
    const { direction = 'row', children, ...delegated } = props;

    return (
      <BaseFlex ref={ref} direction={direction} {...delegated}>
        {children}
      </BaseFlex>
    );
  }
);

Flex.displayName = 'Flex';
