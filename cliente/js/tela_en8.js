// eslint-disable-next-line no-undef
export default class enigma8 extends Phaser.Scene {
  constructor () {
    super('enigma8')
  }

  preload() {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('tela8', '../assets/imagens/caixa_en8f.png')
    this.load.image('tela8a', '../assets/imagens/caixa_en8a.png')
    this.load.image('botao', '../assets/imagens/botao_cofre.png')
    this.load.image('cima', '../assets/imagens/seta_cima.png')
  }

  create() {
    this.add.image(400, 225, 'tela8')
    this.add.image(400, 430, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('enigma8')
        this.game.scene.start('sala_m3')
      })
    this.add.image(400, 20, 'cima')
      .setInteractive()
      .on('pointerdown', () => {
        if (this.game.verifica_enigma8 === 'V') {
          this.add.image(400, 225, 'tela8a')
          this.add.image(400, 225, 'livro')
          this.add.image(400, 430, 'seta_down')
            .setInteractive()
            .on('pointerdown', () => {
              this.add.image(400, 225, 'tela8')
              this.add.image(400, 430, 'seta_down')
                .setInteractive()
                .on('pointerdown', () => {
                  this.game.scene.stop('enigma8')
                  this.game.scene.start('sala_m3')
                })
            })
        } else {
          this.add.image(400, 225, 'tela8a')
          this.add.image(400, 430, 'seta_down')
            .setInteractive()
            .on('pointerdown', () => {
              this.add.image(400, 225, 'tela8')
              this.add.image(400, 430, 'seta_down')
                .setInteractive()
                .on('pointerdown', () => {
                  this.game.scene.stop('enigma8')
                  this.game.scene.start('sala_m3')
                })
            })
        }
      })
  }

  update() {
  }
}
