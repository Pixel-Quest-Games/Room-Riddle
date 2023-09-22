export default class tela_papel extends Phaser.Scene {

  constructor () {
    super('tela_papel')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('papel', '../assets/imagens/tela_papel.png')
  }


  create () {
    WebFont.load({
      custom: {
        families: ['fonte_papel'],
        urls: ['../main.css']
      }
    }
    )
    this.add.image(400, 225, 'papel')
    this.add.text(400, 225, '0101', {
      fontFamily: 'fonte_papel',
      fontSize: '34px',
      fill: 'black'
    })

    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_papel')
        this.game.scene.start('sala_m1')
      })
  }

  update () { }

}