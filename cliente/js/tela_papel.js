// eslint-disable-next-line no-undef
export default class telapapel extends Phaser.Scene {
  constructor () {
    super('tela_papel')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('papel', '../assets/imagens/tela_papel.png')
  }

  create () {
    // eslint-disable-next-line no-undef
    WebFont.load({
      custom: {
        families: ['fonte_papel'],
        urls: ['../main.css']
      }
    }
    )
    this.add.image(400, 225, 'papel')
    this.add.text(240, 150, '01010110 01000001 ', {
      fontFamily: 'fonte_papel',
      fontSize: '20px',
      fill: 'black'
    })
    this.add.text(240, 200, '01001100 01000101 ', {
      fontFamily: 'fonte_papel',
      fontSize: '20px',
      fill: 'black'
    })
    this.add.text(240, 250, '01001110 01000100', {
      fontFamily: 'fonte_papel',
      fontSize: '20px',
      fill: 'black'
    })
    this.add.text(330, 300, '01001111', {
      fontFamily: 'fonte_papel',
      fontSize: '20px',
      fill: 'black'
    })

    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_papel')
        this.game.scene.start('sala_m1')
      })
  }

  update () {

  }
}
