// eslint-disable-next-line no-undef
export default class enigma9 extends Phaser.Scene {
  constructor () {
    super('enigma9')
  }

  preload() {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('tela9', '../assets/imagens/tela_en9.png')
    this.load.image('tela9a', '../assets/imagens/tela_en9a.png')
    this.load.image('botao', '../assets/imagens/botao_cofre.png')
    this.load.image('cima', '../assets/imagens/seta_cima.png')
    this.load.image('lupa', '../assets/imagens/lupa.png')
    this.load.spritesheet('alfabetomini', '../assets/imagens/alfabeto_mini_24_30.png', {
      frameWidth: 48,
      frameHeight: 60
    })
  }

  create() {
    this.add.image(400, 225, 'tela9')

    this.alfabeto = [
      {
        numero: '1',
        x: 230,
        y: 90
      },

      {
        numero: '2',
        x: 342,
        y: 90
      },
      {
        numero: '3',
        x: 454,
        y: 90
      },
      {
        numero: '4',
        x: 566,
        y: 90
      },
      {
        numero: '5',
        x: 118,
        y: 218
      },
      {
        numero: '6',
        x: 230,
        y: 218
      },
      {
        numero: '7',
        x: 342,
        y: 218
      },
      {
        numero: '8',
        x: 566,
        y: 218
      },
      {
        numero: '9',
        x: 678,
        y: 218
      },
      {
        numero: '10',
        x: 174,
        y: 356
      },
      {
        numero: '11',
        x: 286,
        y: 356
      },
      {
        numero: '12',
        x: 398,
        y: 356
      },
      {
        numero: '13',
        x: 510,
        y: 356
      },

      {
        numero: '14',
        x: 622,
        y: 356
      }
    ]
    this.alfabeto.forEach((item, index) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabetomini')
        .setInteractive()
        .on('pointerdown', () => {
          if (this.game.verifica_enigma9 === 'F') {
            this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)

            if (this.alfabeto[index].numero === '1') {
              if (this.alfabeto[index].objeto.frame.name === 19) {
                this.verificacao1 = 'V'
                console.log('V')
              } else {
                this.verificacao1 = 'F'
                console.log('F')
              }
            }
            if (this.alfabeto[index].numero === '2') {
              if (this.alfabeto[index].objeto.frame.name === 20) {
                console.log('deu certo')
                this.verificacao2 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao2 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '3') {
              if (this.alfabeto[index].objeto.frame.name === 3) {
                console.log('deu certo')
                this.verificacao3 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao3 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '4') {
              if (this.alfabeto[index].objeto.frame.name === 14) {
                console.log('deu certo')
                this.verificacao4 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao4 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '5') {
              if (this.alfabeto[index].objeto.frame.name === 19) {
                console.log('deu certo')
                this.verificacao5 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao5 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '6') {
              if (this.alfabeto[index].objeto.frame.name === 4) {
                console.log('deu certo')
                this.verificacao6 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao6 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '7') {
              if (this.alfabeto[index].objeto.frame.name === 12) {
                console.log('deu certo')
                this.verificacao7 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao7 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '8') {
              if (this.alfabeto[index].objeto.frame.name === 20) {
                console.log('deu certo')
                this.verificacao8 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao8 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '9') {
              if (this.alfabeto[index].objeto.frame.name === 12) {
                console.log('deu certo')
                this.verificacao9 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao9 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '10') {
              if (this.alfabeto[index].objeto.frame.name === 15) {
                console.log('deu certo')
                this.verificacao10 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao10 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '11') {
              if (this.alfabeto[index].objeto.frame.name === 17) {
                console.log('deu certo')
                this.verificacao11 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao11 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '12') {
              if (this.alfabeto[index].objeto.frame.name === 4) {
                console.log('deu certo')
                this.verificacao12 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao12 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '13') {
              if (this.alfabeto[index].objeto.frame.name === 2) {
                console.log('deu certo')
                this.verificacao13 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao13 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '14') {
              if (this.alfabeto[index].objeto.frame.name === 14) {
                console.log('deu certo')
                this.verificacao14 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao14 = 'F'
              }

              if (this.verificacao1 === 'V' && this.verificacao2 === 'V' && this.verificacao3 === 'V' && this.verificacao4 === 'V' && this.verificacao5 === 'V' && this.verificacao6 === 'V' && this.verificacao7 === 'V' && this.verificacao8 === 'V' && this.verificacao9 === 'V' && this.verificacao10 === 'V' && this.verificacao11 === 'V' && this.verificacao12 === 'V' && this.verificacao13 === 'V' && this.verificacao14 === 'V') {
                console.log('foi meu')
                this.game.verifica_enigma9 = 'V'
              } else {
                this.game.verifica_enigma9 = 'F'
              }
            }
          }
        })
    })

    this.add.image(400, 430, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        if (this.game.verifica_enigma9 === 'V') {
          this.add.image(400, 225, 'tela9a')
          this.add.image(260, 300, 'lupa')
          this.add.image(400, 400, 'seta_down')
            .setInteractive()
            .on('pointerdown', () => {
              this.game.scene.stop('enigma9')
              this.game.scene.start('sala_m3')
            })
        } else {
          this.game.scene.stop('enigma9')
          this.game.scene.start('sala_m3')
        }
      })
  }

  update() {
  }
}
