// eslint-disable-next-line no-undef
export default class telacaixa extends Phaser.Scene {
  constructor () {
    super('tela_caixa')
  }

  preload () {
    this.load.image('caixaf', '../assets/imagens/tela_caixa.png')
    this.load.image('caixaa', '../assets/imagens/tela_caixaa.png')
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('osso', '../assets/imagens/osso.png')
    this.load.image('touchtg', '../assets/imagens/touch_giga.png')
    this.load.image('seleciona', '../assets/imagens/seleciona.png')
    this.load.image('livro_s', '../assets/imagens/livro_s.png')
    this.load.image('lupa', '../assets/imagens/lupa.png')
  }

  create () {
    this.add.image(400, 225, 'caixaf')
    this.add.image(400, 400, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.add.image(400, 225, 'caixaa')
        this.add.image(400, 340, 'osso')
        this.add.image(400, 50, 'inventario')
        this.seleciona7 = this.add.image(493, 50, 'seleciona').setVisible(false)
        this.seleciona8 = this.add.image(555, 50, 'seleciona').setVisible(false)
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
        if (this.game.inventario6 === true) {
          this.add.image(432, 50, 'penap')
        }
        if (this.game.inventario7 === true) {
          this.add.image(495, 50, 'livrosp')
            .setInteractive()
            .on('pointerdown', () => {
              this.seleciona7.setVisible(true)
              this.seleciona8.setVisible(false)
            })
        }
        if (this.game.inventario8 === true) {
          this.add.image(555, 50, 'lupap')
            .setInteractive()
            .on('pointerdown', () => {
              this.seleciona8.setVisible(true)
              this.seleciona7.setVisible(false)
            })
        }
        this.add.image(400, 240, 'touchtg')
          .setInteractive()
          .on('pointerdown', () => {
            if (this.seleciona7.visible === true) {
              this.add.image(400, 190, 'livro_s')
              this.livroenig = true
            }
            if (this.seleciona8.visible === true) {
              this.add.image(300, 200, 'lupa')
              this.lupaenig = true
            }
            if (this.livroenig === true && this.lupaenig === true) {
              this.seta = true
            }
          })
        this.add.image(400, 400, 'seta_down')
          .setInteractive()
          .on('pointerdown', () => {
            if (this.seta === true) {
              this.game.scene.stop('tela_caixa')
              this.game.scene.start('tela_papel12')
            } else {
              this.game.scene.stop('tela_caixa')
              this.game.scene.start('sala_m4')
            }
})
      })
  }

  update () { }
}
