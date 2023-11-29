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
    this.load.image('janela', '../assets/imagens/janela.png')
    this.load.image('rasgo', '../assets/imagens/parede_rasgada.png')
    this.load.image('provisorio', '../assets/imagens/provisorio.png')
    this.load.image('arbusto9', '../assets/imagens/arbusto_flor9.png')
    this.load.image('entidade', '../assets/imagens/entidade52.png')
    this.load.image('painel', '../assets/imagens/painel_1989.png')
    this.load.image('cxcofre', '../assets/imagens/caixa_cofre.png')
    this.load.spritesheet('estante_livros', '../assets/imagens/estante_livros.png', {
      frameWidth: 160,
      frameHeight: 320
    })
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

    this.objeto = this.add.sprite(150, 291, 'estante_livros')
    if (this.game.verifica_enigma4 === 'V') {
      this.add.image(185, 410, 'provisorio')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('sala_m2')
          this.game.scene.start('enigma5')
        })
      this.objeto.setFrame(this.objeto.frame.name + 1)
    }
    if (this.game.verifica_enigma6 === 'V') {
      this.add.image(115, 420, 'cxcofre')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('sala_m2')
          this.game.scene.start('enigma7')
        })
      this.objeto.setFrame(this.objeto.frame.name + 1)
    }

    if (this.game.verifica_enigma5 === 'V') {
      this.add.image(180, 200, 'painel')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('sala_m2')
          this.game.scene.start('enigma6')
        })
    }
  }

  update() { }
}
