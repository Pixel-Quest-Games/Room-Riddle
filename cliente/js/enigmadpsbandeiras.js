// eslint-disable-next-line no-undef
export default class enigma11 extends Phaser.Scene {
  constructor () {
    super('enigma11')
  }

  // Pré-carregamento
  preload () {
    this.load.image('enigma11', '../assets/imagens/enigma11.png')
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('buttom_down', '../assets/imagens/seta_down_enigma_final.png')
    // this.load.audio('trilha', '../assets/audios/musica_fundo.mp3')
    this.load.spritesheet('alfabeto_spritesheet', '../assets/imagens/alfabeto_spritesheet.png', {
      frameWidth: 176,
      frameHeight: 176
    })
  }

  create () {
    this.add.image(400, 225, 'enigma11')
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        // this.trilha.stop()
        this.game.scene.stop('enigma11')
        this.game.scene.start('sala_m3')
      })
    // Configuração dos locais
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
    // Adiciona posições do alfabeto
    this.alfabeto.forEach((item) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabeto_spritesheet')
    })
    // Configuração dos botões
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

    // Adição dos botoes e configuração da interatividade.
    this.verificacao2 = 'V'

    this.botoes.forEach((item, index) => {
      item.botao = this.add.image(item.x, item.y, 'buttom_down')
        .setInteractive()
        .on('pointerdown', () => {
          // if(this.game.verifica_enigma = )
          if (this.game.verifica_enigma11 === 'V') {
            console.log('Enigma Feito')
          } else {
            this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)
            console.log(this.botoes[index].numero)
            console.log(this.alfabeto[index].objeto.frame.name)

            // Verifica primeira caixa
            if (this.botoes[index].numero === '1') {
              if (this.alfabeto[index].objeto.frame.name === 2) {
                console.log('deu certo')
                this.verificacao1 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao1 = 'F'
              }
            }
            // Verifica segunda caixa
            if (this.botoes[index].numero === '2') {
              if (this.alfabeto[index].objeto.frame.name === 0 || this.alfabeto[index].objeto.frame.name === null) {
                console.log('deu certo')
                this.verificacao2 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao2 = 'F'
              }
              console.log(this.alfabeto[index].objeto.frame.name === null)
            }
            // Verifica terceira caixa
            if (this.botoes[index].numero === '3') {
              if (this.alfabeto[index].objeto.frame.name === 14) {
                console.log('deu certo')
                this.verificacao3 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao3 = 'F'
              }
            }
            // Verifica quarta caixa
            if (this.botoes[index].numero === '4') {
              if (this.alfabeto[index].objeto.frame.name === 18) {
                console.log('deu certo')
                this.verificacao4 = 'V'
              } else {
                console.log('falsooo')
                this.verificacao4 = 'F'
              }
            }
            // Fazer outro if pra ver se fez o enigma anterior!!!!! -> podem passar a resposta um para outro
            // Verificação pra ver se corresponde ao código
            if (this.verificacao1 === 'V' && this.verificacao2 === 'V' && this.verificacao3 === 'V' && this.verificacao4 === 'V') {
              console.log('foi meu')
              // Ilumina letras para verde
              this.game.verifica_enigma11 = 'V'
              console.log(this.game.verifica_enigma11)
            }
          }
        })
    })
  }

  update () { }
}
