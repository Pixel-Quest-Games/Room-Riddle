export default class sala_m3 extends Phaser.Scene {

  constructor () {
    super('sala_m3')
  }

  preload () {
    this.load.image('parede_s1', '../assets/imagens/background1.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.game.inventario
    this.add.image(400, 225, 'parede_s1')
    this.add.image(400, 50, 'inventario')

    this.add.image(15, 225, 'seta_e')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m3')
        this.game.scene.start('sala_m2')
      })

    this.add.image(785, 225, 'seta_d')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m3')
        this.game.scene.start('sala_m4')
      })
  }

  update () { }

}