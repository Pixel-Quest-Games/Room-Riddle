// eslint-disable-next-line no-undef
export default class salam4 extends Phaser.Scene {
  constructor () {
    super('sala_m4')
  }

  preload () {
    this.load.image('parede_mia', '../assets/imagens/parede_mia.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
    this.load.image('arbusto8', '../assets/imagens/arbusto83.png')
    this.load.image('entidade', '../assets/imagens/entidade52.png')
    this.load.image('livrop', '../assets/imagens/livro1p.png')
    this.load.image('frascop', '../assets/imagens/frascop.png')
    this.load.image('penap', '../assets/imagens/penap.png')
  }

  create () {
    // eslint-disable-next-line no-unused-expressions
    this.game.inventario
    this.add.image(400, 225, 'parede_mia')
    this.add.image(400, 50, 'inventario')
    this.add.image(400, 404, 'arbusto8')
    if (this.game.inventario1 === true) {
      this.add.image(121, 50, 'entidade')
    }
    if (this.game.inventario4 === true) {
      this.add.image(307, 51, 'livrop')
    }
    if (this.game.inventario5 === true) {
      this.add.image(370, 50, 'frascop')
    }
    if (this.game.inventario6 === true) {
      this.add.image(432, 50, 'penap')
    }
    // Configuração do carrosel de cenas
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
