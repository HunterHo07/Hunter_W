'use client';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';
import '@mantine/charts/styles.css';
import '@mantine/notifications/styles.css';
import '@mantine/tiptap/styles.css';
import '@mantine/dropzone/styles.css';
import '@mantine/carousel/styles.css';
import '@mantine/spotlight/styles.css';
import '@mantine/nprogress/styles.css';
import '@mantine/code-highlight/styles.css';
import React, { useState } from 'react';
import { MantineProvider, ColorSchemeScript, Button } from '@mantine/core';
import { theme } from '../theme';
import styles from './Layout.module.css';
import { Sidebar } from './Sidebar';

export default function RootLayout({ children }: { children: any }) {
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const handleSidebarToggle = (visible: boolean) => {
    setSidebarVisible(visible);
  };

  const sidebarStyle = sidebarVisible
    ? { width: '350px' }
    : { width: '50px' };

  const mainStyle = sidebarVisible
    ? { marginLeft: '350px' }
    : { marginLeft: '50px' };

  return (
    <html lang="en">
      <head>
        <ColorSchemeScript />
        <link rel="shortcut icon" href="/favicon.svg" />
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, user-scalable=no"
        />
      </head>
      <body>
        <MantineProvider theme={theme}>
          <div className={styles.sidebar} style={sidebarStyle}>
            <Sidebar onToggle={handleSidebarToggle} />
          </div>
          <div className={styles.main} style={mainStyle}>
            {children}
          </div>
        </MantineProvider>
      </body>
    </html>
  );
}