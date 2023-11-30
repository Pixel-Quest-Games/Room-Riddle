// eslint-disable-next-line no-undef
export default class salam3 extends Phaser.Scene {
  constructor () {
    super('sala_m3')
  }

  preload () {
    this.load.image('parede_mia', '../assets/imagens/parede_mia.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
    this.load.image('escrivaninha', '../assets/imagens/escrivaninha.png')
    this.load.image('arbusto95', '../assets/imagens/arbusto_flor95.png')
    this.load.image('entidade', '../assets/imagens/entidade52.png')
    this.load.image('estante', '../assets/imagens/estante_m3.png')
    this.load.image('cxlivro', '../assets/imagens/caixa_livro.png')
    this.load.image('abregaveta', '../assets/imagens/prov_gavetaesc.png')
  }

  create () {
    // eslint-disable-next-line no-unused-expressions
    this.game.inventario
    this.add.image(400, 225, 'parede_mia')
    this.add.image(180, 376, 'estante')
    this.add.image(400, 50, 'inventario')
    if (this.game.inventario1 === true) {
      this.add.image(121, 50, 'entidade')
    }
    this.add.image(630, 386, 'escrivaninha')
    this.add.image(706, 366, 'abregaveta')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m3')
        this.game.scene.start('enigma9')
      })
    this.add.image(88, 257, 'arbusto95')

    this.add.image(210, 436, 'cxlivro')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m3')
        this.game.scene.start('enigma8')
      })

    // Configuração do carrosel de cenas
    this.add.image(25, 225, 'seta_e')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m3')
        this.game.scene.start('sala_m2')
      })

    this.add.image(775, 225, 'seta_d')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m3')
        this.game.scene.start('sala_m4')
      })
  }

  update () { }
}
