import { Component } from '@angular/core';
import { Container, Main } from 'tsparticles';
import { Options } from 'tsparticles/dist/Options/Classes/Options';

@Component({
  selector: 'app-particles',
  templateUrl: './particles.component.html',
  styleUrls: ['./particles.component.scss'],
})
export class ParticlesComponent {
  id = 'tsparticles';
  id2 = 'tsparticles2';
  particlesUrl = 'http://foo.bar/particles.json';
  get options(): Options {
    return (this.particlesOptions as unknown) as Options;
  }
  get options2(): Options {
    return (this.particlesOptions2 as unknown) as Options;
  }
  particlesOptions = {
    fpsLimit: 60,
    fullScreen: { enable: true },
    particles: {
      color: {
        value: '#ffffff',
      },
      move: {
        direction: 'bottom-left',
        enable: true,
        random: true,
        straight: false,
      },
      rotate: {
        animation: {
          enable: true,
          speed: 8,
        },
        direction: 'random',
      },
      number: {
        value: 100,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'images',
        images: [
          { src: 'assets/particles/p1.png' },
          { src: 'assets/particles/p2.png' },
          { src: 'assets/particles/p1.png' },
          { src: 'assets/particles/p2.png' },
          { src: 'assets/particles/p3.png' },
        ],
      },
      size: {
        value: 24,
      },
    },
    detectRetina: true,
  };
  particlesOptions2 = {
    fpsLimit: 60,
    fullScreen: { enable: true },
    particles: {
      color: {
        value: '#ffffff',
      },
      move: {
        direction: 'bottom-left',
        enable: true,
        random: true,
        straight: false,
      },
      rotate: {
        animation: {
          enable: true,
          speed: 8,
        },
        direction: 'random',
      },
      number: {
        value: 150,
      },
      opacity: {
        value: 1,
      },
      shape: {
        type: 'images',
        images: [
          { src: 'assets/particles/p1.png' },
          { src: 'assets/particles/p2.png' },
          { src: 'assets/particles/p1.png' },
          { src: 'assets/particles/p2.png' },
          { src: 'assets/particles/p3.png' },
        ],
      },
      size: {
        value: 18,
      },
    },
    detectRetina: true,
  };
}
