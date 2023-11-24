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

    this.numeros = [
      {
        numero: '1',
        x: 294,
        y: 106
      },

      {
        numero: '2',
        x: 310,
        y: 225
      },
      {
        numero: '3',
        x: 490,
        y: 225
      },
      {
        numero: '4',
        x: 670,
        y: 225
      }
    ]

    this.numeros.forEach((item, index) => {
      item.objeto = this.add.sprite(item.x, item.y, 'img_en5')
        .setInteractive()
        .on('pointerdown', () => {
          if (this.game.verifica_enigma5 === 'F') {
            this.numeros[index].objeto.setFrame(this.numeros[index].objeto.frame.name + 1)

            if (this.numeros[index].numero === '1') {
              if (this.numeros[index].objeto.frame.name === 1) {
                this.verificacao1 = 'V'
                console.log('V')
              } else {
                this.verificacao1 = 'F'
                console.log('F')
              }
            }
            if (this.numeros[index].numero === '2') {
              if (this.numeros[index].objeto.frame.name === 9) {
                console.log('deu certo')
                this.verificacao2 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao2 = 'F'
              }
            }
            if (this.numeros[index].numero === '3') {
              if (this.numeros[index].objeto.frame.name === 8) {
                console.log('deu certo')
                this.verificacao3 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao3 = 'F'
              }
            }
            if (this.numeros[index].numero === '4') {
              if (this.numeros[index].objeto.frame.name === 9) {
                console.log('deu certo')
                this.verificacao4 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao4 = 'F'
              }
            }
            if (this.verificacao1 === 'V' && this.verificacao2 === 'V' && this.verificacao3 === 'V' && this.verificacao4 === 'V') {
              console.log('foi meu')
              this.game.verifica_enigma5 = 'V'
            } else {
              this.game.verifica_enigma5 = 'F'
            }
          }
        }
        )
    })

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
