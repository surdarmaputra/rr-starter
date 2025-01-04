import './DocsContainer.css';

import {
  DocsContainer as BaseContainer,
  type DocsContainerProps,
} from '@storybook/blocks';
import { addons } from '@storybook/preview-api';
import { themes } from '@storybook/theming';
import React from 'react';
import { DARK_MODE_EVENT_NAME } from 'storybook-dark-mode';

const channel = addons.getChannel();

// Thanks to https://github.com/hipstersmoothie/storybook-dark-mode/issues/127#issuecomment-2558385581
export function DocsContainer(props: DocsContainerProps) {
  const [darkMode, setDarkMode] = React.useState(false);

  React.useEffect(() => {
    channel.on(DARK_MODE_EVENT_NAME, (value) => {
      setDarkMode(value);
    });
  }, []);

  return (
    <BaseContainer
      {...props}
      context={props.context}
      theme={darkMode ? themes.dark : themes.light}
    />
  );
}
