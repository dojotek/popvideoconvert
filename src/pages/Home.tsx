import * as React from 'react';
import { dialog } from 'electron';

export default function Home() {

  function pickVideoFile() {
    window.electron.wkwk('asdf', (data: any) => {
      console.log('woy');
    });
  }

  function receive() {
    window.electron.receive("fromMain", (data: any) => {
      console.log(`Received ${data} from main process`);
    });
  }

  function send() {
    console.log('calling IPC send');
    window.electron.send("toMain", "some data");
  }

  return (
    <div>
      <button onClick={pickVideoFile}>
        Pick Video File
      </button>
      
      <button onClick={receive}>
        Electron window api receive
      </button>

      <button onClick={send}>
        Electron window api send
      </button>
    </div>
  )
}
