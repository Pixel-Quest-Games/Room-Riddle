// eslint-disable-next-line no-undef
export default class gaveta4 extends Phaser.Scene {
  constructor () {
    super('gaveta4')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('gaveta4_f', '../assets/imagens/gaveta4_f.png')
    this.load.image('gaveta4_a', '../assets/imagens/gaveta4_a.png')
    this.load.image('botao', '../assets/imagens/botao_cofre.png')
    this.load.image('livro', '../assets/imagens/livrod.png')
    this.load.spritesheet('alfabetomini', '../assets/imagens/alfabeto_mini_24_30.png', {
      frameWidth: 48,
      frameHeight: 60
    })
  }

  create () {
    this.add.image(400, 225, 'gaveta4_f')

    this.alfabeto = [
      {
        numero: '1',
        x: 174,
        y: 82
      },

      {
        numero: '2',
        x: 236,
        y: 82
      },
      {
        numero: '3',
        x: 298,
        y: 82
      },
      {
        numero: '4',
        x: 360,
        y: 82
      },
      {
        numero: '5',
        x: 436,
        y: 82
      },
      {
        numero: '6',
        x: 498,
        y: 82
      },
      {
        numero: '7',
        x: 560,
        y: 82
      },
      {
        numero: '8',
        x: 622,
        y: 82
      },
      {
        numero: '9',
        x: 338,
        y: 202
      },
      {
        numero: '10',
        x: 400,
        y: 202
      },
      {
        numero: '11',
        x: 462,
        y: 202
      },
      {
        numero: '12',
        x: 152,
        y: 326
      },
      {
        numero: '13',
        x: 214,
        y: 326
      },

      {
        numero: '14',
        x: 276,
        y: 326
      },
      {
        numero: '15',
        x: 338,
        y: 326
      },
      {
        numero: '16',
        x: 400,
        y: 326
      },
      {
        numero: '17',
        x: 462,
        y: 326
      },
      {
        numero: '18',
        x: 524,
        y: 326
      },
      {
        numero: '19',
        x: 586,
        y: 326
      },
      {
        numero: '20',
        x: 648,
        y: 326
      }
    ]
    /* ONDE ESTA SUA ESPERANCA */
    this.verificacao8 = 'V'
    this.verificacao11 = 'V'
    this.verificacao17 = 'V'
    this.verificacao20 = 'V'
    this.alfabeto.forEach((item, index) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabetomini')
        .setInteractive()
        .on('pointerdown', () => {
          if (this.game.verifica_enigma3 === 'F') {
            this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)

            if (this.alfabeto[index].numero === '1') {
              if (this.alfabeto[index].objeto.frame.name === 14) {
                this.verificacao1 = 'V'
                console.log('V')
              } else {
                this.verificacao1 = 'F'
                console.log('F')
              }
            }
            if (this.alfabeto[index].numero === '2') {
              if (this.alfabeto[index].objeto.frame.name === 13) {
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
              if (this.alfabeto[index].objeto.frame.name === 4) {
                console.log('deu certo')
                this.verificacao4 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao4 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '5') {
              if (this.alfabeto[index].objeto.frame.name === 4) {
                console.log('deu certo')
                this.verificacao5 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao5 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '6') {
              if (this.alfabeto[index].objeto.frame.name === 18) {
                console.log('deu certo')
                this.verificacao6 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao6 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '7') {
              if (this.alfabeto[index].objeto.frame.name === 19) {
                console.log('deu certo')
                this.verificacao7 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao7 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '8') {
              if (this.alfabeto[index].objeto.frame.name === 0) {
                console.log('deu certo')
                this.verificacao8 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao8 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '9') {
              if (this.alfabeto[index].objeto.frame.name === 18) {
                console.log('deu certo')
                this.verificacao9 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao9 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '10') {
              if (this.alfabeto[index].objeto.frame.name === 20) {
                console.log('deu certo')
                this.verificacao10 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao10 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '11') {
              if (this.alfabeto[index].objeto.frame.name === 0) {
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
              if (this.alfabeto[index].objeto.frame.name === 18) {
                console.log('deu certo')
                this.verificacao13 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao13 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '14') {
              if (this.alfabeto[index].objeto.frame.name === 15) {
                console.log('deu certo')
                this.verificacao14 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao14 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '15') {
              if (this.alfabeto[index].objeto.frame.name === 4) {
                console.log('deu certo')
                this.verificacao15 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao15 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '16') {
              if (this.alfabeto[index].objeto.frame.name === 17) {
                console.log('deu certo')
                this.verificacao16 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao16 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '17') {
              if (this.alfabeto[index].objeto.frame.name === 0) {
                console.log('deu certo')
                this.verificacao17 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao17 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '18') {
              if (this.alfabeto[index].objeto.frame.name === 13) {
                console.log('deu certo')
                this.verificacao18 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao18 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '19') {
              if (this.alfabeto[index].objeto.frame.name === 2) {
                console.log('deu certo')
                this.verificacao19 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao19 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '20') {
              if (this.alfabeto[index].objeto.frame.name === 0) {
                console.log('deu certo')
                this.verificacao20 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao20 = 'F'
              }
            }
            if (this.verificacao1 === 'V' && this.verificacao2 === 'V' && this.verificacao3 === 'V' && this.verificacao4 === 'V' && this.verificacao5 === 'V' && this.verificacao6 === 'V' && this.verificacao7 === 'V' && this.verificacao8 === 'V' && this.verificacao9 === 'V' && this.verificacao10 === 'V' && this.verificacao11 === 'V' && this.verificacao12 === 'V' && this.verificacao13 === 'V' && this.verificacao14 === 'V' && this.verificacao15 === 'V' && this.verificacao16 === 'V' && this.verificacao17 === 'V' && this.verificacao18 === 'V' && this.verificacao19 === 'V' && this.verificacao20 === 'V') {
              console.log('foi meu')
              this.game.verifica_enigma3 = 'V'
            } else {
              this.game.verifica_enigma3 = 'F'
            }
          }
        }
        )
    })

    this.add.image(400, 400, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        if (this.game.verifica_enigma3 === 'V') {
          this.add.image(400, 225, 'gaveta4_a')
          this.add.image(218, 360, 'livro')
          this.add.image(400, 400, 'seta_down')
            .setInteractive()
            .on('pointerdown', () => {
              this.game.scene.stop('gaveta4')
              this.game.scene.start('sala_m1')
            })
        } else {
          this.game.scene.stop('gaveta4')
          this.game.scene.start('sala_m1')
        }
      })
  }

  update () {
  }
}
