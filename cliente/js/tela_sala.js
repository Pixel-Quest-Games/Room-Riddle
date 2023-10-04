// eslint-disable-next-line no-undef
export default class telasala extends Phaser.Scene {
  constructor () {
    super('tela_sala')
  }

  // Pré-carregamento
  preload () {
    this.load.image('tela_salas', '../assets/imagens/tela_salas.png')
    this.load.spritesheet('porta', '../assets/imagens/porta_verde.png', {
      frameWidth: 64,
      frameHeight: 128
    })
  }

  create () {
    this.add.image(400, 225, 'tela_salas')
    // Criação dos objetos sala
    this.salas = [
      {
        numero: '1',
        x: 84,
        y: 210
      },
      {
        numero: '2',
        x: 242,
        y: 210
      },
      {
        numero: '3',
        x: 406,
        y: 210
      },
      {
        numero: '4',
        x: 568,
        y: 210
      },
      {
        numero: '5',
        x: 714,
        y: 210
      },
      {
        numero: '6',
        x: 84,
        y: 354
      },
      {
        numero: '7',
        x: 242,
        y: 354
      },
      {
        numero: '8',
        x: 406,
        y: 354
      },
      {
        numero: '9',
        x: 568,
        y: 354
      },
      {
        numero: '10',
        x: 714,
        y: 354
      }
    ]
    // Configuração da animação da porta
    this.anims.create({
      key: 'porta',
      frames: this.anims.generateFrameNumbers('porta', {
        start: 0,
        end: 5
      }),
      frameRate: 6
    })
    // Coloca portas no lugar delas
    this.salas.forEach((item) => {
      item.botao = this.add.sprite(item.x, item.y, 'porta')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.socket.emit('entrar-na-sala', item.numero)

          this.aguarde = this.add.text(this.game.config.width / 20, this.game.config.height / 20, 'Conectando...')
          this.game.socket.on('jogadores', (jogadores) => {
            this.game.jogadores = jogadores
            item.botao.anims.play('porta')
            this.timer = 0
            this.timedEvent = this.time.addEvent({
              delay: 1000,
              callback: this.countdown,
              callbackScope: this,
              loop: true
            })
          })
        })
    })
  }

  // Temporizador para virada de cena
  countdown () {
    this.timer -= 0.5
    if (this.timer <= 0) {
      this.timedEvent.destroy()
      this.game.scene.stop('tela_sala')
      this.game.scene.start('sala_m1')
    }
  }

  update () { }
}
