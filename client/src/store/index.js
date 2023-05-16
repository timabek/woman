import { proxy } from 'valtio';

const state = proxy({
  intro: true,
  color: '#8c0303',
  isLogoTexture: true,
  isFullTexture: false,
  logoDecal: './threejs.png',
  fullDecal: './threejs.png',
});

export default state;