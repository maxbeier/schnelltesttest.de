import React from 'react';
import { Translate } from '../Localization';
import barcodeImage from './barcode.svg';

export function HowToOverlay(): JSX.Element {
  return (
    <div
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flexDirection: 'column',
        pointerEvents: 'none',
      }}
    >
      <img width="50%" src={barcodeImage} style={{ marginBottom: '2em', opacity: '20%' }} />
      <div
        style={{
          backgroundColor: 'rgba(0, 0, 0, 42%)',
          fontWeight: 'bold',
          color: 'white',
          padding: '1em',
          textAlign: 'center',
        }}
      >
        <Translate id="app.scanInstruction" />
      </div>
    </div>
  );
}
