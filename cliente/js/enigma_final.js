export default class enigma_final extends Phaser.Scene {

  constructor () {
    super('enigma_final')
  }

  preload () {
    this.load.image('enigma_final_tela_cheia', '../assets/imagens/enigma_final_tela_cheia.png')
    this.load.image('seta_down','../assets/imagens/seta_down.png')
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.add.image(400, 225, 'enigma_final_tela_cheia')
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('enigma_final')
        this.game.scene.start('sala_m1')
      })
  }
  update () { }
}