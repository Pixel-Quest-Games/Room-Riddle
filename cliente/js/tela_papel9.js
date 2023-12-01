// eslint-disable-next-line no-undef
export default class telapapel9 extends Phaser.Scene {
  constructor () {
    super('tela_papel9')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('2papel', '../assets/imagens/tela_papel.png')
  }

  create () {
    // eslint-disable-next-line no-undef
    this.add.image(400, 225, '2papel')
    this.add.text(240, 130, '01010100 01010101 01000100', {
      fontSize: '20px',
      fill: 'black'
    })
    this.add.text(240, 160, '01001111 00100000 01010100', {
      fontSize: '20px',
      fill: 'black'
    })
    this.add.text(240, 190, '01000101 01001101 00100000', {
      fontSize: '20px',
      fill: 'black'
    })
    this.add.text(240, 220, '01010101 01001101 00100000', {
      fontSize: '20px',
      fill: 'black'
    })
    this.add.text(240, 250, '01010000 01010010 01000101', {
      fontSize: '20px',
      fill: 'black'
    })
    this.add.text(240, 280, '01000011 01001111', {
      fontSize: '20px',
      fill: 'black'
    })

    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_papel9')
        this.game.scene.start('sala_m2')
      })
  }

  update () {

  }
}
