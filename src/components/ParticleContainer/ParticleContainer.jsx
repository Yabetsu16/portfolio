import React from 'react';
import Particles from 'react-tsparticles';

import './particleCanvas.css';

const ParticleContainer = ({ theme }) => {
  return (
    <>
      <Particles
        id="tsparticles"
        canvasClassName="particleCanvas"
        options={{
          fpsLimit: 60,
          interactivity: {
            detectsOn: 'canvas',
            events: {
              onClick: {
                enable: true,
                mode: 'push'
              },
              onhover: {
                enable: true,
                mode: 'grab'
              }
            },
            modes: {
              push: {
                quantity: 1
              },
              grab: {
                distance: 200,
                line_linked: {
                  opacity: 0.1
                }
              }
            }
          },
          particles: {
            color: {
              value: theme.palette.mode === 'dark' ? '#FFF' : '#000'
            },
            links: {
              color: theme.palette.mode === 'dark' ? '#FFF' : '#000',
              distance: 150,
              enable: true,
              opacity: 0.5,
              width: 1
            },
            collisions: {
              enable: true
            },
            move: {
              direction: 'none',
              enable: true,
              outMode: 'bounce',
              random: false,
              speed: 1,
              straight: false
            },
            number: {
              density: {
                enable: true,
                value_area: 800
              },
              value: 20
            },
            opacity: {
              value: 0.5
            },
            shape: {
              type: 'circle'
            },
            size: {
              random: true,
              value: 5
            }
          },
          detectRetina: true
        }}
      />
    </>
  );
};

export default ParticleContainer;
