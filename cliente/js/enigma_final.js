export default class enigma_final extends Phaser.Scene {

  constructor () {
    super('enigma_final')
  }
  //Pré-carregamento
  preload () {
    this.load.image('enigma_final_tela_cheia', '../assets/imagens/enigma_final_tela_cheia.png')
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('buttom_down', '../assets/imagens/seta_down_enigma_final.png')
    this.load.image('vverde', '../assets/imagens/v_verde.png')
    this.load.image('iverde', '../assets/imagens/i_verde.png')
    this.load.image('averde', '../assets/imagens/a_verde.png')
    //this.load.audio('trilha', '../assets/audios/musica_fundo.mp3')
    this.load.audio('porta_abrindo', '../assets/audios/porta_abrindo.mp3')
    this.load.spritesheet('alfabeto_spritesheet', '../assets/imagens/alfabeto_spritesheet.png', {
      frameWidth: 176,
      frameHeight: 176
    })


  }

  create () {
    //Adição de música de fundo
    /*this.trilha = this.sound.add('trilha')
    this.trilha.loop = true
    this.trilha.play()*/

    this.cliqueporta = this.sound.add('porta_abrindo')
    //Adição de plano de fundo
    this.add.image(400, 225, 'enigma_final_tela_cheia')
    //Adição de seta e interatividade
    this.add.image(400, 395, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        //this.trilha.stop()
        this.game.scene.stop('enigma_final')
        this.game.scene.start('sala_m1')
      })
    //Configuração dos locais
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
    //Adiciona posições do alfabeto
    this.alfabeto.forEach((item) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabeto_spritesheet')
    })
    //Configuração dos botões
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

    //Adição dos botoes e configuração da interatividade.
    this.verificacao4 = 'V'

    this.botoes.forEach((item, index) => {
      item.botao = this.add.image(item.x, item.y, 'buttom_down')
        .setInteractive()
        .on('pointerdown', () => {
          //if(this.game.verifica_enigma = )
          this.alfabeto[index].objeto.setFrame(this.alfabeto[index].objeto.frame.name + 1)
          console.log(this.botoes[index].numero)
          console.log(this.alfabeto[index].objeto.frame.name)

          //Verifica primeira caixa
          if (this.botoes[index].numero == '1') {
            if (this.alfabeto[index].objeto.frame.name == 21) {
              console.log('deu certo')
              this.verificacao1 = 'V'
            } else {
              console.log('falsooo')
              this.verificacao1 = 'F'
            }
          }
          //Verifica segunda caixa
          if (this.botoes[index].numero == '2') {
            if (this.alfabeto[index].objeto.frame.name == 8) {
              console.log('deu certo')
              this.verificacao2 = 'V'
            } else {
              console.log('falsooo')
              this.verificacao2 = 'F'
            }
          }
          //Verifica terceira caixa
          if (this.botoes[index].numero == '3') {
            if (this.alfabeto[index].objeto.frame.name == 21) {
              console.log('deu certo')
              this.verificacao3 = 'V'
            } else {
              console.log('falsooo')
              this.verificacao3 = 'F'
            }
          }
          //Verifica quarta caixa
          if (this.botoes[index].numero == '4') {
            if (this.alfabeto[index].objeto.frame.name == 0 || this.alfabeto[index].objeto.frame.name === null) {
              console.log('deu certo')
              this.verificacao4 = 'V'
            } else {
              console.log('falsooo')
              this.verificacao4 = 'F'
            }
          }
          //Fazer outro if pra ver se fez o enigma anterior!!!!! -> podem passar a resposta um para outro
          //Verificação pra ver se corresponde ao código
          if (this.verificacao1 == 'V' && this.verificacao2 == 'V' && this.verificacao3 == 'V' && this.verificacao4 == 'V') {
            console.log('foi meu')
            //Ilumina letras para verde
            this.cliqueporta.play()
            this.add.image(173, 230, 'vverde')
            this.add.image(325, 230, 'iverde')
            this.add.image(476, 230, 'vverde')
            this.add.image(622, 230, 'averde')
            this.game.verifica_enigma = 'V'
            this.alfabeto.forEach((index) => {
              this.alfabeto[index].setVisible.value == 0
            })
          }
        })
    })
  }
  update () { }
}