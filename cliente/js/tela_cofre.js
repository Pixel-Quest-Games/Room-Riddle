export default class tela_cofre extends Phaser.Scene {

  constructor () {
    super('tela_cofre')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
  }

  
  create () {
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_cofre')
        this.game.scene.start('sala_m1')
      })
  }

  update () { }

}