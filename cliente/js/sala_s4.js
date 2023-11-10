// eslint-disable-next-line no-undef
export default class salas4 extends Phaser.Scene {
  constructor () {
    super('sala_s4')
  }

  preload() {
    this.load.image('parede_sebas', '../assets/imagens/parede_sebas.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
  }

  create() {
    // eslint-disable-next-line no-unused-expressions
    this.game.inventario
    this.add.image(400, 225, 'parede_sebas')
    this.add.image(400, 50, 'inventario')

    // Configuração do carrosel de cenas
    this.add.image(25, 225, 'seta_e')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_s4')
        this.game.scene.start('sala_s3')
      })

    this.add.image(775, 225, 'seta_d')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_s4')
        this.game.scene.start('sala_s1')
      })
  }

  update() { }
}
