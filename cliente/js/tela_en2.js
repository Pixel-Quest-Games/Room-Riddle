// eslint-disable-next-line no-undef
export default class enigma2 extends Phaser.Scene {
  constructor () {
    super('enigma2')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('topo', '../assets/imagens/topo_estante.png')
    this.load.image('mulher', '../assets/imagens/boneco_mulher.png')
    this.load.image('homem', '../assets/imagens/boneco_homem.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('homem_inv', '../assets/imagens/boneco_homem_inv.png')
    this.load.image('mulher_inv', '../assets/imagens/boneco_mulher_inv.png')
    this.load.image('entidade', '../assets/imagens/entidade52.png')
    this.load.image('seleciona', '../assets/imagens/seleciona.png')
    this.load.image('touch', '../assets/imagens/invisivel_p_touch.png')
    this.load.image('entidade_maior', '../assets/imagens/boneco_entidade0.png')
  }

  // Ordem: mas, ent, fem
  create () {
    this.add.image(400, 225, 'topo')
    this.add.image(400, 360, 'inventario')
    this.seleciona1 = this.add.image(121, 360, 'seleciona').setVisible(false)
    this.seleciona2 = this.add.image(183, 360, 'seleciona').setVisible(false)
    this.seleciona3 = this.add.image(245, 360, 'seleciona').setVisible(false)
    this.mulher_inv = this.add.image(245, 362, 'mulher_inv').setVisible(false)
    if (this.game.inventario1 === true) {
      this.add.image(121, 360, 'entidade')
        .setInteractive()
        .on('pointerdown', () => {
          this.seleciona1.setVisible(true)
          this.seleciona2.setVisible(false)
          this.seleciona3.setVisible(false)
        })
    }
    if (this.game.inventario3 === true) {
      this.mulher_inv.setVisible(true)
        .setInteractive()
        .on('pointerdown', () => {
          this.seleciona3.setVisible(true)
          this.seleciona2.setVisible(false)
          this.seleciona1.setVisible(false)
        })
    } else {
      this.mulher_esp1 = this.add.image(292, 110, 'mulher')
        .setInteractive()
        .on('pointerdown', () => {
          this.mulher_esp1.setVisible(false)
          this.game.inventario3 = true
          if (this.game.inventario3 === true) {
            this.mulher_inv.setVisible(true)
              .setInteractive()
              .on('pointerdown', () => {
                this.seleciona3.setVisible(true)
                this.seleciona2.setVisible(false)
                this.seleciona1.setVisible(false)
              })
          }
        })
    }
    if (this.game.inventario2 === true) {
      this.add.image(184, 362, 'homem_inv')
        .setInteractive()
        .on('pointerdown', () => {
          this.seleciona2.setVisible(true)
          this.seleciona1.setVisible(false)
          this.seleciona3.setVisible(false)
        })
    } else {
      this.homem = this.add.image(426, 110, 'homem')
        .setInteractive()
        .on('pointerdown', () => {
          this.homem.setVisible(false)
          this.game.inventario2 = true
          if (this.game.inventario2 === true) {
            this.add.image(184, 362, 'homem_inv')
              .setInteractive()
              .on('pointerdown', () => {
                this.seleciona1.setVisible(false)
                this.seleciona3.setVisible(false)
                this.seleciona2.setVisible(true)
              })
          }
        })
    }
    this.add.image(400, 430, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('enigma2')
        this.game.scene.start('sala_m1')
        if (this.seleciona1.visible === true) {
          this.seleciona1.setVisible(false)
        }
        if (this.seleciona2.visible === true) {
          this.seleciona2.setVisible(false)
        }
        if (this.seleciona3.visible === true) {
          this.seleciona3.setVisible(false)
        }
      })
    this.touch1 = this.add.image(295, 185, 'touch')
      .setInteractive()
      .on('pointerdown', () => {
        console.log('bvfbv')
        if (this.seleciona1.visible === true) {
          console.log('sele1')
          this.add.image(555, 110, 'entidade_maior')
        }
        if (this.seleciona2.visible === true) {
          console.log('sele1')
          this.homem.setVisible(true)
        }
        if (this.seleciona3.visible === true) {
          this.mulher_esp1.setVisible(true)
          this.mulher_inv.setVisible(false)
          this.seleciona3.setVisible(false)
        }
      })
    /* this.touch2 = this.add.image(427, 185, 'touch')
      .setInteractive()
      .on('pointerdown', () => {

      })
    this.touch3 = this.add.image(555, 185, 'touch')
      .setInteractive()
      .on('pointerdown', () => {

      }) */
  }

  update () {
  }
}
