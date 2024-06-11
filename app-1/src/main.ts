import React from 'react'
import ReactDOMClient from 'react-dom/client'
import './config/i18n.ts'
import '../node_modules/@foris/avocado-core/dist/style.css';
import '../node_modules/@foris/avocado-suite/dist/style.css';
import rootComponent from './App';
import singleSpaReact from 'single-spa-react';


export const { bootstrap, mount, unmount } = singleSpaReact({
  React,
  ReactDOMClient,
  rootComponent,
  errorBoundary(err: any, info: any, props: any) {
    console.error(err);
  },
});