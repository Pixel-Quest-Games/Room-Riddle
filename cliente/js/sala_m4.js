// eslint-disable-next-line no-undef
export default class salam4 extends Phaser.Scene {
  constructor () {
    super('sala_m4')
  }

  preload() {
    this.load.image('parede_mia', '../assets/imagens/parede_mia.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
    this.load.image('arbusto8', '../assets/imagens/arbusto83.png')
    this.load.image('entidade', '../assets/imagens/entidade52.png')
    this.load.image('livrop', '../assets/imagens/livro1p.png')
    this.load.image('frascop', '../assets/imagens/frascop.png')
    this.load.image('penap', '../assets/imagens/penap.png')
    this.load.image('caixa', '../assets/imagens/caixa.png')
    this.load.image('caixa2', '../assets/imagens/caixa.png')
    this.load.image('caixa3', '../assets/imagens/caixa.png')
    this.load.image('painel12', '../assets/imagens/painel_12.png')
    this.load.image('papel_enrolado', '../assets/imagens/papel_enrolado.png')
    this.load.spritesheet('alfabetom', '../assets/imagens/alfabetom.png', {
      frameWidth: 24,
      frameHeight: 30
    })
  }

  create() {
    // eslint-disable-next-line no-unused-expressions
    this.game.inventario
    this.add.image(400, 225, 'parede_mia')
    this.add.image(400, 50, 'inventario')
    this.add.image(616, 404, 'arbusto8')
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
    if (this.game.inventario7 === true) {
      this.add.image(495, 50, 'livrosp')
    }
    if (this.game.inventario8 === true) {
      this.add.image(555, 50, 'lupap')
    }
    if (this.game.inventario9 === true) {
      this.add.image(618, 50, 'papel_enrolado')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('sala_m4')
          this.game.scene.start('tela_papel9')
        })
    }
    if (this.game.verifica_enigma11 === 'V') {
      this.add.image(140, 320, 'painel12')
      this.alfabeto = [
        {
          numero: '1',
          x: 89,
          y: 298
        },

        {
          numero: '2',
          x: 123,
          y: 298
        },
        {
          numero: '3',
          x: 157,
          y: 298
        },
        {
          numero: '4',
          x: 191,
          y: 298
        },
        {
          numero: '5',
          x: 72,
          y: 344
        },
        {
          numero: '6',
          x: 106,
          y: 344
        },
        {
          numero: '7',
          x: 140,
          y: 344
        },
        {
          numero: '8',
          x: 174,
          y: 344
        },
        {
          numero: '9',
          x: 208,
          y: 344
        }
      ]
      this.verificacao4 = 'V'
      this.alfabeto.forEach((item, index) => {
        item.objeto = this.add.sprite(item.x, item.y, 'alfabetom')
          .setInteractive()
          .on('pointerdown', () => {
            if (this.game.verifica_enigma12 === 'F') {
              this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)

              if (this.alfabeto[index].numero === '1') {
                if (this.alfabeto[index].objeto.frame.name === 4) {
                  this.verificacao1 = 'V'
                  console.log('V')
                } else {
                  this.verificacao1 = 'F'
                  console.log('F')
                }
              }
              if (this.alfabeto[index].numero === '2') {
                if (this.alfabeto[index].objeto.frame.name === 18) {
                  console.log('deu certo')
                  this.verificacao2 = 'V'
                } else {
                  console.log('falsooo')
                  this.verificacao2 = 'F'
                }
              }
              if (this.alfabeto[index].numero === '3') {
                if (this.alfabeto[index].objeto.frame.name === 19) {
                  console.log('deu certo')
                  this.verificacao3 = 'V'
                } else {
                  console.log('falsooo')
                  this.verificacao3 = 'F'
                }
              }
              if (this.alfabeto[index].numero === '4') {
                if (this.alfabeto[index].objeto.frame.name === 0) {
                  console.log('deu certo')
                  this.verificacao4 = 'V'
                } else {
                  console.log('falsooo')
                  this.verificacao4 = 'F'
                }
              }
              if (this.alfabeto[index].numero === '5') {
                if (this.alfabeto[index].objeto.frame.name === 5) {
                  console.log('deu certo')
                  this.verificacao5 = 'V'
                } else {
                  console.log('falsooo')
                  this.verificacao5 = 'F'
                }
              }
              if (this.alfabeto[index].numero === '6') {
                if (this.alfabeto[index].objeto.frame.name === 4) {
                  console.log('deu certo')
                  this.verificacao6 = 'V'
                } else {
                  console.log('falsooo')
                  this.verificacao6 = 'F'
                }
              }
              if (this.alfabeto[index].numero === '7') {
                if (this.alfabeto[index].objeto.frame.name === 8) {
                  console.log('deu certo')
                  this.verificacao7 = 'V'
                } else {
                  console.log('falsooo')
                  this.verificacao7 = 'F'
                }
              }
              if (this.alfabeto[index].numero === '8') {
                if (this.alfabeto[index].objeto.frame.name === 19) {
                  console.log('deu certo')
                  this.verificacao8 = 'V'
                } else {
                  console.log('falsooo')
                  this.verificacao8 = 'F'
                }
              }
              if (this.alfabeto[index].numero === '9') {
                if (this.alfabeto[index].objeto.frame.name === 14) {
                  console.log('deu certo')
                  this.verificacao9 = 'V'
                } else {
                  console.log('falsooo')
                  this.verificacao9 = 'F'
                }
              }
              if (this.verificacao1 === 'V' && this.verificacao2 === 'V' && this.verificacao3 === 'V' && this.verificacao4 === 'V' && this.verificacao5 === 'V' && this.verificacao6 === 'V' && this.verificacao7 === 'V' && this.verificacao8 === 'V' && this.verificacao9 === 'V') {
                console.log('foi meu')
                this.game.verifica_enigma12 = 'V'
              } else {
                this.game.verifica_enigma12 = 'F'
              }
            }
          })
      })
    }

    this.add.image(756, 418, 'caixa')
    this.add.image(692, 418, 'caixa2')
    this.add.image(756, 354, 'caixa3')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_m4')
        this.game.scene.start('tela_caixa')
      })

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

  update() { }
}
