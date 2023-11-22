/* eslint-disable no-undef */
export default class salam2 extends Phaser.Scene {
  constructor () {
    super('sala_m2')
  }

  preload() {
    this.load.image('parede_mia', '../assets/imagens/parede_mia.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
    this.load.image('estante_livros', '../assets/imagens/estante_livros.png')
    this.load.image('janela', '../assets/imagens/janela.png')
    this.load.image('rasgo', '../assets/imagens/parede_rasgada.png')
    this.load.image('provisorio', '../assets/imagens/provisorio.png')
    this.load.image('arbusto9', '../assets/imagens/arbusto_flor9.png')
    this.load.image('entidade', '../assets/imagens/entidade52.png')
  }

  create() {
    // eslint-disable-next-line no-unused-expressions
    this.game.inventario
    this.add.image(400, 225, 'parede_mia')
    this.add.image(400, 50, 'inventario')
    if (this.game.inventario1 === true) {
      this.add.image(121, 50, 'entidade')
    }
    this.add.image(600, 200, 'janela')
    this.add.image(279, 404, 'arbusto9')
    this.add.image(185, 410, 'provisorio')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m2')
        this.game.scene.start('enigma5')
      })

    this.add.image(150, 291, 'estante_livros')

    // Configuração do carrosel de cenas
    this.add.image(25, 225, 'seta_e')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m2')
        this.game.scene.start('sala_m1')
      })

    this.add.image(775, 225, 'seta_d')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m2')
        this.game.scene.start('sala_m3')
      })

    if (this.game.verifica_enigma4 === 'V') {
      this.add.image(300, 200, 'rasgo')
    }
  }

  update() { }
}
