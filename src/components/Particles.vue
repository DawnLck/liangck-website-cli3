<template>
    <div id="particles-js"></div>
</template>

<script>
import 'particles.js'
export default {
  name: 'particle',
  props: {
    msg: String
  },
  mounted () {
    this.initParticles()
    // this.$nextTick(() => {
    //
    // })
  },
  methods: {
    initParticles () {
      window.particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 400,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            'value': '#fff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 5
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.3286994724774322,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            }
          },
          'size': {
            'value': 4,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 40,
              'size_min': 0.1,
              'sync': false
            }
          },
          'line_linked': {
            'enable': false,
            'distance': 500,
            'color': '#ffffff',
            'opacity': 0.6012795228245711,
            'width': 2
          },
          'move': {
            'enable': true,
            'speed': 2,
            'direction': 'top-right',
            'random': false,
            'straight': false,
            'out_mode': 'out',
            'bounce': false,
            'attract': {
              'enable': false,
              'rotateX': 600,
              'rotateY': 1200
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': true,
              'mode': 'bubble'
            },
            'onclick': {
              'enable': true,
              'mode': 'repulse'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 400,
              'line_linked': {
                'opacity': 0.5
              }
            },
            'bubble': {
              'distance': 400,
              'size': 4,
              'duration': 0.3,
              'opacity': 1,
              'speed': 3
            },
            'repulse': {
              'distance': 200,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
    #particles-js{
        position: absolute;
        width: 100%;
        height: 100%;
        min-height: 10rem;
        background-size: cover;
        background: black no-repeat 50% 50%;
    }
</style>
