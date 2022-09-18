import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export const ViteLibProvider: React.FC<{ children?: React.ReactNode }> = ({
  children,
}) => {
  return <ThemeProvider theme={{}}>{children}</ThemeProvider>;
};
