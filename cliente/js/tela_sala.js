export default class tela_sala extends Phaser.Scene {
  constructor () {
    super('tela_sala')
  }

  preload () {
    this.load.image('tela_salas', '../assets/imagens/tela_salas.png')
    this.load.spritesheet('porta', '../assets/imagens/porta_verde.png', {
      frameWidth: 64,
      frameHeight: 128
    })
  }

  /* add image(400,225, ...) por ser pela metade, começa pelo meio */
  create () {
    this.add.image(400, 225, 'tela_salas')

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

    this.anims.create({
      key: 'porta',
      frames: this.anims.generateFrameNumbers('porta', {
        start: 0,
        end: 5
      }),
      frameRate: 6
    })

    this.salas.forEach((item) => {
      item.botao = this.add.sprite(item.x, item.y, 'porta')
        .setInteractive()
        .on('pointerdown', () => {
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
  }

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
