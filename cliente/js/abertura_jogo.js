// eslint-disable-next-line no-undef
export default class aberturajogo extends Phaser.Scene {
  constructor () {
    super('abertura_jogo')
  }

  // Pré carregamento
  preload () {
    this.load.image('tela_inicio', '../assets/imagens/tela_inicio.png')
    this.load.image('room_riddle', '../assets/imagens/room_riddle.png')
    this.load.image('setajump', '../assets/imagens/setajump.png')
    this.load.image('login', '../assets/imagens/icone_login.png')

    this.load.audio('musica', '../assets/audios/musica.mp3')
    this.load.audio('botaoefeito', '../assets/audios/sound_button.mp3')

    this.load.spritesheet('botao_start', '../assets/imagens/botao_start.png', {
      frameWidth: 192,
      frameHeight: 192
    })
    this.load.spritesheet('tela-cheia', '../assets/imagens/tela-cheia.png', {
      frameWidth: 64,
      frameHeight: 64
    })
  }

  create () {
    // Adição de música de fundo
    this.trilha = this.sound.add('musica')
    this.botaoefeito = this.sound.add('botaoefeito')
    this.trilha.loop = true
    this.trilha.play()

    // Adição de imagens
    this.add.image(400, 225, 'tela_inicio')
    this.add.image(400, 230, 'room_riddle')
    // this.add.image(720, 380, 'login')

    // Provisório
    this.pular = this.add.image(80, 380, 'setajump')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('abertura_jogo')
        this.game.scene.start('sala_m1')
      })
    // Animação do botão
    this.anims.create({
      key: 'botao',
      frames: this.anims.generateFrameNumbers('botao_start', {
        start: 0,
        end: 5
      }),
      frameRate: 8
    })
    // Temporizador para animação ocorrer a tempo antes de fechar a cena
    this.timer = 0
    this.jogar = this.add.sprite(390, 410, 'botao_start')
      .setInteractive()
      .on('pointerdown', () => {
        this.jogar.anims.play('botao')
        this.botaoefeito.play()
        this.timedEvent = this.time.addEvent({
          delay: 1000,
          callback: this.countdown,
          callbackScope: this,
          loop: true
        })
      })
    // Tela cheia
    this.tela_cheia = this.add
      .sprite(750, 50, 'tela-cheia', 0)
      .setInteractive()
      .on('pointerdown', () => {
        if (this.scale.isFullscreen) {
          this.tela_cheia.setFrame(0)
          this.scale.stopFullscreen()
        } else {
          this.tela_cheia.setFrame(1)
          this.scale.startFullscreen()
        }
      })
      .setScrollFactor(0, 0)
  }

  // Temporizador para animação do botão
  countdown () {
    this.timer -= 2
    if (this.timer <= 0) {
      this.jogar.destroy()
      this.timedEvent.destroy()
      this.trilha.stop()
      this.game.scene.stop('abertura_jogo')
      this.game.scene.start('tela_sala')
    }
  }

  update () { }
}
