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
    this.load.image('lampada', '../assets/imagens/lampada.png')
    this.load.image('papel', '../assets/imagens/papel.png')
    this.load.image('frasco', '../assets/imagens/frasco.png')
    this.load.image('frascoinv', '../assets/imagens/frascop.png')
    this.load.image('pena', '../assets/imagens/pena.png')
    this.load.image('penainv', '../assets/imagens/penap.png')
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
          this.add.image(630, 300, 'lampada')
          this.add.image(160, 142, 'papel')
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
