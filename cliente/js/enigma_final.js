export default class enigma_final extends Phaser.Scene {

  constructor () {
    super('enigma_final')
  }

  preload () {
    this.load.image('enigma_final_tela_cheia', '../assets/imagens/enigma_final_tela_cheia.png')
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('buttom_down', '../assets/imagens/seta_down_enigma_final.png')
    this.load.spritesheet('alfabeto_spritesheet', '../assets/imagens/alfabeto_spritesheet.png', {
      frameWidth: 176,
      frameHeight: 176
    })

  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.add.image(400, 225, 'enigma_final_tela_cheia')
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('enigma_final')
        this.game.scene.start('sala_m1')
      })

    this.alfabeto = [
      {
        numero: '1',
        x: 173,
        y: 230
      },

      {
        numero: '2',
        x: 325,
        y: 230
      },
      {
        numero: '3',
        x: 476,
        y: 230
      },
      {
        numero: '4',
        x: 622,
        y: 230
      }
    ]
    this.alfabeto.forEach((item) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabeto_spritesheet')
    })

    this.botoes = [
      {
        numero: '1',
        x: 173,
        y: 333
      },

      {
        numero: '2',
        x: 325,
        y: 333
      },
      {
        numero: '3',
        x: 476,
        y: 333
      },
      {
        numero: '4',
        x: 622,
        y: 333
      }
    ]
    this.botoes.forEach((item, index) => {
      item.botao = this.add.image(item.x, item.y, 'buttom_down')
        .setInteractive()
        .on('pointerdown', () => {
          this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)
        })
    })

  }
  update () { }
}