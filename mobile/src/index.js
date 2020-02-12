import React from 'react';
import { StatusBar, YellowBox } from 'react-native';

import Routes from './routes';

YellowBox.ignoreWarnings([
    'Warning: Failed prop type: Invalid prop `color`',
    'Warning: WebView'
])

export default function App() {
    return(
        <>
            <StatusBar barStyle="light-content" backgroundColor="#Da552F"/>
            <Routes />
        </>
    )
}