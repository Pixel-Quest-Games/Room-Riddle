export default class abertura_jogo extends Phaser.Scene {

  constructor () {
    super('abertura_jogo')
  }

  preload() {
    this.load.image('background1', '../assets/imagens/background1.png')
    this.load.image('botao_start', '../assets/imagens/botao_start.png')
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create() {
    this.add.image(400, 225, 'background1')
    this.jogar = this.add.image(400, 250, 'botao_start')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('abertura_jogo')
        this.game.scene.start('salas')
      })
  }

  update() { }

}