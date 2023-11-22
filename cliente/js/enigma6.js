// eslint-disable-next-line no-undef
export default class enigma6 extends Phaser.Scene {
  constructor () {
    super('enigma6')
  }

  preload () {
    this.load.image('tela', '../assets/imagens/tela_1989.png')
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
  }

  create () {
    // eslint-disable-next-line no-unused-expressions

    this.add.image(400, 225, 'tela')

    // Configuração do carrosel de cenas
    this.add.image(400, 400, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('enigma6')
        this.game.scene.start('sala_m2')
      })
  }

  update () { }
}
