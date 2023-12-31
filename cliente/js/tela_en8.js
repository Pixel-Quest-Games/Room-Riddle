// eslint-disable-next-line no-undef
export default class enigma8 extends Phaser.Scene {
  constructor () {
    super('enigma8')
  }

  preload () {
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
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seleciona', '../assets/imagens/seleciona.png')
    this.load.image('frasco', '../assets/imagens/frasco.png')
    this.load.image('pena', '../assets/imagens/pena.png')
    this.load.image('touchtg', '../assets/imagens/touch_giga.png')
    this.load.image('livro_s', '../assets/imagens/livro_s.png')
    this.load.image('papelenr', '../assets/imagens/papel_enroladog.png')
    this.load.image('tela_papel', '../assets/imagens/tela_papel.png')
  }

  create () {
    this.add.image(400, 225, 'tela8a')

    this.lampada = this.add.image(630, 300, 'lampada')
    this.papel = this.add.image(160, 142, 'papel')
    this.add.image(400, 50, 'inventario')
    this.seleciona5 = this.add.image(370, 50, 'seleciona').setVisible(false)
    this.seleciona6 = this.add.image(432, 50, 'seleciona').setVisible(false)
    this.add.image(400, 430, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.seleciona5.setVisible(false)
        this.seleciona6.setVisible(false)
        this.game.scene.stop('enigma8')
        this.game.scene.start('sala_m3')
      })
    if (this.game.inventario1 === true) {
      this.add.image(121, 50, 'entidade')
    }
    if (this.game.inventario4 === true) {
      this.add.image(307, 51, 'livrop')
    }
    if (this.game.inventario5 === true) {
      this.add.image(370, 50, 'frascop')
        .setInteractive()
        .on('pointerdown', () => {
          this.seleciona5.setVisible(true)
          this.seleciona6.setVisible(false)
        })
    }
    if (this.game.inventario6 === true) {
      this.add.image(432, 50, 'penap')
        .setInteractive()
        .on('pointerdown', () => {
          this.seleciona6.setVisible(true)
          this.seleciona5.setVisible(false)
        })
    }
    this.add.image(400, 240, 'touchtg')
      .setInteractive()
      .on('pointerdown', () => {
        if (this.seleciona5.visible === true) {
          this.add.image(220, 310, 'frasco')
          this.frascoenig = true
        }
        if (this.seleciona6.visible === true) {
          this.add.image(430, 280, 'pena')
          this.penaenig = true
        }
        if (this.penaenig === true && this.frascoenig === true) {
          this.game.verifica_enigma8 = 'V'
          this.add.image(400, 225, 'tela8')
          this.add.image(300, 120, 'papelenr')
            .setInteractive()
            .on('pointerdown', () => {
              this.game.scene.stop('enigma8')
              this.game.scene.start('tela_papel9')
              this.game.inventario9 = true
            })
          this.livros = this.add.image(400, 225, 'livro_s')
            .setInteractive()
            .on('pointerdown', () => {
              this.game.inventario7 = true
              this.livros.setVisible(false)
            })
        }
      })
  }

  update () {
  }
}
