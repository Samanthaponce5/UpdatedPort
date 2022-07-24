const options = {
    fullScreen: {
      enable: false
    },
    themes: [
      {
        name: "light",
        default: {
          value: true,
          mode: "light"
        },
        options: {
          background: {
            color: ""
          },
          particles: {
            color: {
                value: "#7db1de75"
            }
          }
        }
      },
      {
        name: "dark",
        default: {
          value: true,
          mode: "dark"
        },
        options: {
          background: {
            color: ""
          },
          particles: {
            color: {
                value: "#e91e6295"

            }
          }
        }
      }
    ],
    
    fpsLimit: 160,
    particles: {
      number: {
        value: 60,
        density: {
          enable: true,
          value_area: 800
        }
      },
      shape: {
        type: "circle"
      },
      opacity: {
        value: 1
      },
      size: {
        value: 5,
        random: {
          enable: true,
        }
      },
      rotate: {
        value: 0,
        direction: "random",
        animation: {
          speed: 5,
          enable: true
        }
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        out_mode: "out"
      }
    },
    interactivity: {
      detectsOn: "canvas",
      events: {
        onHover: {
          enable: true,
          mode: "repulse"
        },
        onClick: {
          enable: true,
          mode: "push"
        },
        resize: true
      }
    },
    detectRetina: true
  };
  
  export default options;
  