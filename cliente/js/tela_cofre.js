export default class tela_cofre extends Phaser.Scene {

  constructor () {
    super('tela_cofre')
  }

  preload () {
    this.load.image('seta_down', '../assets/imagens/seta_down.png')
    this.load.image('background', '../assets/imagens/tela_cofre.png')
    this.load.image('botao', '../assets/imagens/botao_cofre.png')
    this.load.spritesheet('alfabeto', '../assets/imagens/alfabeto_menor_64.png', {
      frameWidth: 96,
      frameHeight: 96
    })
  }

  
  create () {
    this.add.image(400, 225, 'background')
    this.add.image(400, 400, 'seta_down')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('tela_cofre')
        this.game.scene.start('sala_m1')
      })

    this.alfabeto = [
      {
        numero: '1',
        x: 171,
        y: 110
      },

      {
        numero: '2',
        x: 246,
        y: 110
      },
      {
        numero: '3',
        x: 321,
        y: 110
      },
      {
        numero: '4',
        x: 396,
        y: 110
      },
      {
        numero: '5',
        x: 471,
        y: 110
      },
      {
        numero: '6',
        x: 546,
        y: 110
      },
      {
        numero: '7',
        x: 621,
        y: 110
      }
    ]

    this.alfabeto.forEach((item) => {
      item.objeto = this.add.sprite(item.x, item.y, 'alfabeto')
    })

    this.botoes = [
      {
        numero: '1',
        x: 171,
        y: 250
      },

      {
        numero: '2',
        x: 246,
        y: 250
      },
      {
        numero: '3',
        x: 321,
        y: 250
      },
      {
        numero: '4',
        x: 396,
        y: 250
      },
      {
        numero: '5',
        x: 471,
        y: 250
      },
      {
        numero: '6',
        x: 546,
        y: 250
      },
      {
        numero: '7',
        x: 621,
        y: 250
      }
    ]
    this.botoes.forEach((item) => {
      item.botao = this.add.image(item.x, item.y, 'botao')
    })
  }

  update () { }

}