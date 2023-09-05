export default class sala_m4 extends Phaser.Scene {

  constructor () {
    super('sala_m4')
  }

  preload () {
    this.load.image('parede_mia', '../assets/imagens/parede_mia.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.game.inventario
    this.add.image(400, 225, 'parede_mia')
    this.add.image(400, 50, 'inventario')

    this.add.image(25, 225, 'seta_e')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m4')
        this.game.scene.start('sala_m3')
      })

    this.add.image(775, 225, 'seta_d')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m4')
        this.game.scene.start('sala_m1')
      })
  }

  update () { }

}