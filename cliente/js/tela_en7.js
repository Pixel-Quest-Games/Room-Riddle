// eslint-disable-next-line no-undef
export default class enigma7 extends Phaser.Scene {
  constructor () {
    super('enigma7')
  }

  preload() {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('tela7', '../assets/imagens/caixa_cofre_fechada.png')
    this.load.image('tela7a', '../assets/imagens/caixa_cofre_aberta.png')
    this.load.image('botao', '../assets/imagens/botao_cofre.png')
    this.load.spritesheet('alfabetomini', '../assets/imagens/alfabeto_mini_24_30.png', {
      frameWidth: 48,
      frameHeight: 60
    })
  }

  create() {
    this.add.image(400, 225, 'tela7')

    this.alfabeto = [
      {
        numero: '1',
        x: 176,
        y: 92
      },

      {
        numero: '2',
        x: 288,
        y: 92
      },
      {
        numero: '3',
        x: 400,
        y: 92
      },
      {
        numero: '4',
        x: 512,
        y: 92
      },
      {
        numero: '5',
        x: 624,
        y: 92
      },
      {
        numero: '6',
        x: 344,
        y: 224
      },
      {
        numero: '7',
        x: 456,
        y: 224
      },
      {
        numero: '8',
        x: 232,
        y: 356
      },
      {
        numero: '9',
        x: 344,
        y: 356
      },
      {
        numero: '10',
        x: 456,
        y: 356
      },
      {
        numero: '11',
        x: 568,
        y: 356
      }
    ]
    this.alfabeto.forEach((item, index) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabetomini')
        .setInteractive()
        .on('pointerdown', () => {
          if (this.game.verifica_enigma7 === 'F') {
            this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)

            if (this.alfabeto[index].numero === '1') {
              if (this.alfabeto[index].objeto.frame.name === 11) {
                this.verificacao1 = 'V'
              } else {
                this.verificacao1 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '2') {
              if (this.alfabeto[index].objeto.frame.name === 14) {
                this.verificacao2 = 'V'
              } else {
                this.verificacao2 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '3') {
              if (this.alfabeto[index].objeto.frame.name === 13) {
                this.verificacao3 = 'V'
              } else {
                this.verificacao3 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '4') {
              if (this.alfabeto[index].objeto.frame.name === 6) {
                this.verificacao4 = 'V'
              } else {
                this.verificacao4 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '5') {
              if (this.alfabeto[index].objeto.frame.name === 4) {
                this.verificacao5 = 'V'
              } else {
                this.verificacao5 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '6') {
              if (this.alfabeto[index].objeto.frame.name === 3) {
                this.verificacao6 = 'V'
              } else {
                this.verificacao6 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '7') {
              if (this.alfabeto[index].objeto.frame.name === 4) {
                this.verificacao7 = 'V'
              } else {
                this.verificacao7 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '8') {
              if (this.alfabeto[index].objeto.frame.name === 19) {
                this.verificacao8 = 'V'
              } else {
                this.verificacao8 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '9') {
              if (this.alfabeto[index].objeto.frame.name === 20) {
                this.verificacao9 = 'V'
              } else {
                this.verificacao9 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '10') {
              if (this.alfabeto[index].objeto.frame.name === 3) {
                this.verificacao10 = 'V'
              } else {
                this.verificacao10 = 'F'
              }
            }
            if (this.alfabeto[index].numero === '11') {
              if (this.alfabeto[index].objeto.frame.name === 14) {
                this.verificacao11 = 'V'
              } else {
                this.verificacao11 = 'F'
              }
            }
            if (this.verificacao1 === 'V' && this.verificacao2 === 'V' && this.verificacao3 === 'V' && this.verificacao4 === 'V' && this.verificacao5 === 'V' && this.verificacao6 === 'V' && this.verificacao7 === 'V' && this.verificacao8 === 'V' && this.verificacao9 === 'V' && this.verificacao10 === 'V' && this.verificacao11 === 'V') {
              this.game.verifica_enigma7 = 'V'
            } else {
              this.game.verifica_enigma7 = 'F'
            }
          }
        }
        )
    })

    this.add.image(400, 400, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        if (this.game.verifica_enigma7 === 'V') {
          this.add.image(400, 225, 'tela7a')
          this.add.image(400, 400, 'seta_down')
            .setInteractive()
            .on('pointerdown', () => {
              this.game.scene.stop('enigma7')
              this.game.scene.start('sala_m2')
            })
        } else {
          this.game.scene.stop('enigma7')
          this.game.scene.start('sala_m2')
        }
      })
  }

  update() {
  }
}
