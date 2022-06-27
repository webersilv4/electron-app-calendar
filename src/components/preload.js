const { ipcRenderer } = require('electron');
const ipc = ipcRenderer;

const minimizeBtn = document.getElementById('minimize-btn');
const maxUnmaxBtn = document.getElementById('max-unmax-btn');
const closeBtn = document.getElementById('close-btn');

minimizeBtn.addEventListener('click', ()=> {
  ipc.send('minimizeBtn');
});

maxUnmaxBtn.addEventListener('click', ()=> {
  ipc.send('maxUnmaxBtn');
});

closeBtn.addEventListener('click', ()=> {
  ipc.send('closeApp');
});