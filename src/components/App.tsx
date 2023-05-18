import React, { VFC } from 'react';
import { TCanvas } from './TCanvas';


export const App: VFC = () => {
	return (
    <>
      <div style={{ width: 'calc(100vw - 60px)', height: 'calc(100vh - 60px)', overflow: 'hidden' }} className='background'>
        <TCanvas />
      </div>
    </>
	)
}

