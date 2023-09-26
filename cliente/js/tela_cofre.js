export default class tela_cofre extends Phaser.Scene {

  constructor () {
    super('tela_cofre')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('background', '../assets/imagens/tela_cofre.png')
  }

  
  create () {
    this.add.image(400, 225, 'background')
    this.add.image(400, 400, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_cofre')
        this.game.scene.start('sala_m1')
      })
  }

  update () { }

}