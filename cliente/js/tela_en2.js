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
    this.load.image('papel_enrolado', '../assets/imagens/papel_enrolado.png')
  }

  // Ordem: mas, ent, fem
  create () {
    this.add.image(400, 225, 'topo')
    this.add.image(400, 360, 'inventario')
    if (this.game.verifica_enigma2 === 'V') {
      this.add.image(150, 200, 'papel_enrolado')
        .setInteractive()
        .on('pointerdown', () => { 
          this.game.scene.stop('enigma2')
          this.game.scene.start('tela_papel3')
        })
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
    } else {
      // Imagens
      this.seleciona1 = this.add.image(121, 360, 'seleciona').setVisible(false)
      this.seleciona2 = this.add.image(183, 360, 'seleciona').setVisible(false)
      this.seleciona3 = this.add.image(245, 360, 'seleciona').setVisible(false)
      this.mulher_inv = this.add.image(245, 362, 'mulher_inv').setVisible(false)
      this.homem_inv = this.add.image(184, 362, 'homem_inv').setVisible(false)
      this.entidade_inv = this.add.image(121, 360, 'entidade').setVisible(false)
      this.mulher_esp1 = this.add.image(292, 110, 'mulher').setVisible(false)
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
      this.mulher_esp2 = this.add.image(426, 110, 'mulher').setVisible(false)
        .setInteractive()
        .on('pointerdown', () => {
          this.mulher_esp2.setVisible(false)
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
      this.mulher_esp3 = this.add.image(555, 110, 'mulher').setVisible(false)
        .setInteractive()
        .on('pointerdown', () => {
          this.mulher_esp3.setVisible(false)
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
      this.homem_esp1 = this.add.image(292, 110, 'homem').setVisible(false)
        .setInteractive()
        .on('pointerdown', () => {
          this.homem_esp1.setVisible(false)
          this.game.inventario2 = true
          if (this.game.inventario2 === true) {
            this.homem_inv.setVisible(true)
              .setInteractive()
              .on('pointerdown', () => {
                this.seleciona1.setVisible(false)
                this.seleciona3.setVisible(false)
                this.seleciona2.setVisible(true)
              })
          }
        })
      this.homem_esp2 = this.add.image(426, 110, 'homem').setVisible(false)
        .setInteractive()
        .on('pointerdown', () => {
          this.homem_esp2.setVisible(false)
          this.game.inventario2 = true
          if (this.game.inventario2 === true) {
            this.homem_inv.setVisible(true)
              .setInteractive()
              .on('pointerdown', () => {
                this.seleciona1.setVisible(false)
                this.seleciona3.setVisible(false)
                this.seleciona2.setVisible(true)
              })
          }
        })
      this.homem_esp3 = this.add.image(555, 110, 'homem').setVisible(false)
        .setInteractive()
        .on('pointerdown', () => {
          this.homem_esp3.setVisible(false)
          this.game.inventario2 = true
          if (this.game.inventario2 === true) {
            this.homem_inv.setVisible(true)
              .setInteractive()
              .on('pointerdown', () => {
                this.seleciona1.setVisible(false)
                this.seleciona3.setVisible(false)
                this.seleciona2.setVisible(true)
              })
          }
        })
      this.entidade_esp1 = this.add.image(292, 110, 'entidade_maior').setVisible(false)
        .setInteractive()
        .on('pointerdown', () => {
          this.entidade_esp1.setVisible(false)
          this.game.inventario1 = true
          if (this.game.inventario1 === true) {
            this.entidade_inv.setVisible(true)
              .setInteractive()
              .on('pointerdown', () => {
                this.seleciona1.setVisible(false)
                this.seleciona3.setVisible(false)
                this.seleciona2.setVisible(true)
              })
          }
        })
      this.entidade_esp2 = this.add.image(426, 110, 'entidade_maior').setVisible(false)
        .setInteractive()
        .on('pointerdown', () => {
          this.entidade_esp2.setVisible(false)
          this.game.inventario1 = true
          if (this.game.inventario1 === true) {
            this.entidade_inv.setVisible(true)
              .setInteractive()
              .on('pointerdown', () => {
                this.seleciona1.setVisible(false)
                this.seleciona3.setVisible(false)
                this.seleciona2.setVisible(true)
              })
          }
        })
      this.entidade_esp3 = this.add.image(555, 110, 'entidade_maior').setVisible(false)
        .setInteractive()
        .on('pointerdown', () => {
          this.entidade_esp3.setVisible(false)
          this.game.inventario1 = true
          if (this.game.inventario1 === true) {
            this.entidade_inv.setVisible(true)
              .setInteractive()
              .on('pointerdown', () => {
                this.seleciona1.setVisible(false)
                this.seleciona3.setVisible(false)
                this.seleciona2.setVisible(true)
              })
          }
        })

      // Verificações inicio de cena
      if (this.game.inventario1 === true) {
        this.entidade_inv.setVisible(true)
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
        this.mulher_esp1.setVisible(true)
      }
      if (this.game.inventario2 === true) {
        this.homem_inv.setVisible(true)
          .setInteractive()
          .on('pointerdown', () => {
            this.seleciona2.setVisible(true)
            this.seleciona1.setVisible(false)
            this.seleciona3.setVisible(false)
          })
      } else {
        this.homem_esp2.setVisible(true)
          .setInteractive()
          .on('pointerdown', () => {
            this.homem_esp2.setVisible(false)
            this.game.inventario2 = true
            if (this.game.inventario2 === true) {
              this.homem_inv.setVisible(true)
                .setInteractive()
                .on('pointerdown', () => {
                  this.seleciona1.setVisible(false)
                  this.seleciona3.setVisible(false)
                  this.seleciona2.setVisible(true)
                })
            }
          })
      }

      // Seta para sair de cena
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
      // FFF FFV FVF FVV VFF VFV VVF VVV
      // Inventario
      this.touch1 = this.add.image(295, 185, 'touch')
        .setInteractive()
        .on('pointerdown', () => {
          console.log(this.homem_esp1.visible)
          if (this.entidade_esp1 === true || this.homem_esp1 === true || this.mulher_esp1 === true) {
            console.log('bloqueio')
          } else {
            if (this.seleciona1.visible === true) {
              this.entidade_esp1.setVisible(true)
              this.entidade_inv.setVisible(false)
              this.seleciona1.setVisible(false)
            }
            if (this.seleciona2.visible === true) {
              this.homem_esp1.setVisible(true)
              this.homem_inv.setVisible(false)
              this.seleciona2.setVisible(false)
            }
            if (this.seleciona3.visible === true) {
              this.mulher_esp1.setVisible(true)
              this.mulher_inv.setVisible(false)
              this.seleciona3.setVisible(false)
            }
          }
          if (this.homem_esp1 === true && this.entidade_esp2 === true && this.mulher_esp3 === true) {
            console.log('Enigma Feito')
            this.game.verifica_enigma2 = 'V'
            this.mulher_esp3.setVisible(false)
            this.homem_esp1.setVisible(false)
            this.entidade_esp2.setVisible(false)
            this.add.image(150, 200, 'papel_enrolado')
              .setInteractive()
              .on('pointerdown', () => {
                this.game.scene.stop('enigma2')
                this.game.scene.start('tela_papel3')
              })
          }
        })
      this.touch2 = this.add.image(427, 185, 'touch')
        .setInteractive()
        .on('pointerdown', () => {
          if (this.mulher_esp2.visible === false || this.homem_esp2.visible === false || this.entidade_esp2 === false) {
            if (this.seleciona1.visible === true) {
              this.entidade_esp2.setVisible(true)
              this.entidade_inv.setVisible(false)
              this.seleciona1.setVisible(false)
            }
            if (this.seleciona2.visible === true) {
              this.homem_esp2.setVisible(true)
              this.homem_inv.setVisible(false)
              this.seleciona2.setVisible(false)
            }
            if (this.seleciona3.visible === true) {
              this.mulher_esp2.setVisible(true)
              this.mulher_inv.setVisible(false)
              this.seleciona3.setVisible(false)
            }
          }
          if (this.homem_esp1 === true && this.entidade_esp2 === true && this.mulher_esp3 === true) {
            console.log('Enigma Feito')
            this.game.verifica_enigma2 = 'V'
            this.mulher_esp3.setVisible(false)
            this.homem_esp1.setVisible(false)
            this.entidade_esp2.setVisible(false)
            this.add.image(150, 200, 'papel_enrolado')
              .setInteractive()
              .on('pointerdown', () => {
                this.game.scene.stop('enigma2')
                this.game.scene.start('tela_papel3')
              })
          }
        })
      this.touch3 = this.add.image(555, 185, 'touch')
        .setInteractive()
        .on('pointerdown', () => {
          if (this.mulher_esp3.visible === false || this.homem_esp3.visible === false || this.entidade_esp3.visible === false) {
            if (this.seleciona1.visible === true) {
              this.entidade_esp3.setVisible(true)
              this.entidade_inv.setVisible(false)
              this.seleciona1.setVisible(false)
            }
            if (this.seleciona2.visible === true) {
              this.homem_esp3.setVisible(true)
              this.homem_inv.setVisible(false)
              this.seleciona2.setVisible(false)
            }
            if (this.seleciona3.visible === true) {
              this.mulher_esp3.setVisible(true)
              this.mulher_inv.setVisible(false)
              this.seleciona3.setVisible(false)
            }
          }
          if (this.homem_esp1.visible === true && this.entidade_esp2.visible === true && this.mulher_esp3.visible === true) {
            console.log('Enigma Feito')
            this.game.verifica_enigma2 = 'V'
            this.mulher_esp3.setVisible(false)
            this.homem_esp1.setVisible(false)
            this.entidade_esp2.setVisible(false)
            this.add.image(150, 200, 'papel_enrolado')
              .setInteractive()
              .on('pointerdown', () => {
                this.game.scene.stop('enigma2')
                this.game.scene.start('tela_papel3')
              })
          }
        })
    }
  }

  update () {
  }
}
