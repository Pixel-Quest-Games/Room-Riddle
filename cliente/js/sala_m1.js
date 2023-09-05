export default class sala_m1 extends Phaser.Scene {

  constructor () {
    super('sala_m1')
  }

  preload () {
    this.load.image('parede_mia', '../assets/imagens/parede_mia.png')
    this.load.image('porta_final', '../assets/imagens/porta_final.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
    this.load.image('enigma_final', '../assets/imagens/enigma_final.png')
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.game.inventario
    this.add.image(400, 225, 'parede_mia')
    this.add.image(400, 323, 'porta_final')
    this.add.image(400, 50, 'inventario')
    this.add.image(400, 175, 'enigma_final')
    this.add.image(25, 225, 'seta_e')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m1')
        this.game.scene.start('sala_m4')
      })

    this.add.image(775, 225, 'seta_d')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m1')
        this.game.scene.start('sala_m2')
      })
  }
  update () { }
}