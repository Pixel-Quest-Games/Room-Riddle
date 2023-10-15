// eslint-disable-next-line no-undef
export default class enigma5 extends Phaser.Scene {
  constructor () {
    super('enigma5')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.spritesheet('enigma5', '../assets/imagens/tela_en5_ss.png', {
      frameWidth: 800,
      frameHeight: 450
    })

    this.load.image('botao', '../assets/imagens/botao_cofre.png')
    this.load.spritesheet('img_en5', '../assets/imagens/img_en5_ss.png', {
      frameWidth: 88,
      frameHeight: 88
    })
  }

  create () {
    this.add.sprite(400, 225, 'enigma5')

    /*
        this.alfabeto = [
          {
            numero: '1',
            x: 171,
            y: 110
          },

          {
            numero: '2',
            x: 246,
            y: 110
          },
          {
            numero: '3',
            x: 321,
            y: 110
          },
          {
            numero: '4',
            x: 396,
            y: 110
          },
          {
            numero: '5',
            x: 471,
            y: 110
          },
          {
            numero: '6',
            x: 546,
            y: 110
          },
          {
            numero: '7',
            x: 621,
            y: 110
          }
        ]

        this.alfabeto.forEach((item) => {
          item.objeto = this.add.sprite(item.x, item.y, 'alfabeto')
        })

        this.botoes = [
          {
            numero: '1',
            x: 171,
            y: 250
          },

          {
            numero: '2',
            x: 246,
            y: 250
          },
          {
            numero: '3',
            x: 321,
            y: 250
          },
          {
            numero: '4',
            x: 396,
            y: 250
          },
          {
            numero: '5',
            x: 471,
            y: 250
          },
          {
            numero: '6',
            x: 546,
            y: 250
          },
          {
            numero: '7',
            x: 621,
            y: 250
          }
        ]
        this.verificacao2 = 'V'
        this.botoes.forEach((item, index) => {
          item.botao = this.add.image(item.x, item.y, 'botao')
            .setInteractive()
            .on('pointerdown', () => {
              if (this.game.verifica_enigma2 === 'F') {
                this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)

                if (this.botoes[index].numero === '1') {
                  if (this.alfabeto[index].objeto.frame.name === 21) {
                    this.verificacao1 = 'V'
                    console.log('V')
                  } else {
                    this.verificacao1 = 'F'
                    console.log('F')
                  }
                }
                if (this.botoes[index].numero === '2') {
                  if (this.alfabeto[index].objeto.frame.name === 0) {
                    console.log('deu certo')
                    this.verificacao2 = 'V'
                  } else {
                    console.log('falsooo')
                    this.verificacao2 = 'F'
                  }
                }
                if (this.botoes[index].numero === '3') {
                  if (this.alfabeto[index].objeto.frame.name === 11) {
                    console.log('deu certo')
                    this.verificacao3 = 'V'
                  } else {
                    console.log('falsooo')
                    this.verificacao3 = 'F'
                  }
                }
                if (this.botoes[index].numero === '4') {
                  if (this.alfabeto[index].objeto.frame.name === 4) {
                    console.log('deu certo')
                    this.verificacao4 = 'V'
                  } else {
                    console.log('falsooo')
                    this.verificacao4 = 'F'
                  }
                }
                if (this.botoes[index].numero === '5') {
                  if (this.alfabeto[index].objeto.frame.name === 13) {
                    console.log('deu certo')
                    this.verificacao5 = 'V'
                  } else {
                    console.log('falsooo')
                    this.verificacao5 = 'F'
                  }
                }
                if (this.botoes[index].numero === '6') {
                  if (this.alfabeto[index].objeto.frame.name === 3) {
                    console.log('deu certo')
                    this.verificacao6 = 'V'
                  } else {
                    console.log('falsooo')
                    this.verificacao6 = 'F'
                  }
                }
                if (this.botoes[index].numero === '7') {
                  if (this.alfabeto[index].objeto.frame.name === 14) {
                    console.log('deu certo')
                    this.verificacao7 = 'V'
                  } else {
                    console.log('falsooo')
                    this.verificacao7 = 'F'
                  }
                }
                if (this.verificacao1 === 'V' && this.verificacao2 === 'V' && this.verificacao3 === 'V' && this.verificacao4 === 'V' && this.verificacao5 === 'V' && this.verificacao6 === 'V' && this.verificacao7 === 'V') {
                  console.log('foi meu')
                  this.game.verifica_enigma2 = 'V'
                } else {
                  this.game.verifica_enigma2 = 'F'
                }
              }
            }
            )
        }) */

    this.add.image(400, 430, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('enigma5')
        this.game.scene.start('sala_m2')
      })
  }

  update () {
  }
}
