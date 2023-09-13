export default class enigma_final extends Phaser.Scene {

  constructor () {
    super('enigma_final')
  }

  preload () {
    this.load.image('enigma_final_tela_cheia', '../assets/imagens/enigma_final_tela_cheia.png')
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('buttom_down', '../assets/imagens/seta_down_enigma_final.png')
    this.load.spritesheet('alfabeto_spritesheet', '../assets/imagens/alfabeto_spritesheet.png', {
      frameWidth: 176,
      frameHeight: 176
    })

  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.add.image(400, 225, 'enigma_final_tela_cheia')
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('enigma_final')
        this.game.scene.start('sala_m1')
      })

    this.alfabeto = [
      {
        numero: '1',
        x: 173,
        y: 230
      },

      {
        numero: '2',
        x: 325,
        y: 230
      },
      {
        numero: '3',
        x: 476,
        y: 230
      },
      {
        numero: '4',
        x: 622,
        y: 230
      }
    ]
    this.alfabeto.forEach((item) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabeto_spritesheet')
    })

    this.botoes = [
      {
        numero: '1',
        x: 173,
        y: 333
      },

      {
        numero: '2',
        x: 325,
        y: 333
      },
      {
        numero: '3',
        x: 476,
        y: 333
      },
      {
        numero: '4',
        x: 622,
        y: 333
      }
    ]
    this.verificacao4 = 'V'
    this.botoes.forEach((item, index) => {
      item.botao = this.add.image(item.x, item.y, 'buttom_down')
        .setInteractive()
        .on('pointerdown', () => {
          this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)
          console.log(this.botoes[index].numero)
          //Verifica primeira caixa
          if (this.botoes[index].numero = '1' && this.alfabeto[index].objeto.frame.name == 21) {
            console.log('deu certo')
            this.verificacao1 = 'V' 
          } else {
            console.log('falsooo')
            this.verificacao1 = 'F'
          }
          //Verifica segunda caixa
          if (this.botoes[index].numero = '2' && this.alfabeto[index].objeto.frame.name == 8) {
            console.log('deu certo')
            this.verificacao2 = 'V'
          } else {
            console.log('falsooo')
            this.verificacao2 = 'F'
          }
          //Verifica terceira caixa
          if (this.botoes[index].numero = '3' && this.alfabeto[index].objeto.frame.name == 21) {
            console.log('deu certo')
            this.verificacao3 = 'V'
          } else {
            console.log('falsooo')
            this.verificacao3 = 'F'
          }
          //Verifica quarta caixa
          if (this.botoes[index].numero = '4' && this.alfabeto[index].objeto.frame.name == 0) {
            console.log('deu certo')
            this.verificacao4 = 'V'
          } else {
            console.log('falsooo')
            this.verificacao4 = 'F'
          }
          //Fazer outro if pra ver se fez o enigma anterior
          if (this.verificacao1 == 'V' && this.verificacao2 == 'V' && this.verificacao3 == 'V' && this.verificacao4 == 'V') {
            console.log('foi meu')
            this.add.image(200, 200, 'seta_down')
          }
          //if(this.botoes[index] & this.botoes.alfabeto)
        })
    })

  }
  update () { }
}