// eslint-disable-next-line no-undef
export default class cofreaberto extends Phaser.Scene {
  constructor () {
    super('cofre_aberto')
  }

  preload() {
    this.load.image('cofre_aberto', '../assets/imagens/cofre_aberto.png')
    this.load.image('boneco_entidade', '../assets/imagens/boneco_entidade.png')
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
  }

  create() {
    this.add.image(400, 225, 'cofre_aberto')
    this.add.image(400, 200, 'boneco_entidade')

    this.add.image(400, 400, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('cofre_aberto')
        this.game.scene.start('sala_m1')
      })
  }
    
update() { }
}
