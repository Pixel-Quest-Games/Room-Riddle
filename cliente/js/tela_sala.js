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
    this.load.audio('efeitoporta', '../assets/audios/porta_efeito.mp3')
  }

  create () {
    this.efeitoporta = this.sound.add('efeitoporta')
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
          item.botao.anims.play('porta')
          this.game.sala = item.numero
          this.game.socket.emit('entrar-na-sala', this.game.sala)
          this.aguarde = this.add.text(this.game.config.width / 20, this.game.config.height / 20, 'Conectando...')
        })
    })

    this.game.socket.on('jogadores', (jogadores) => {
      this.game.jogadores = jogadores
      console.log(jogadores)
      //  this.game.item = item.numero
      if (this.game.jogadores.primeiro === this.game.socket.id) {
        // item.botao.anims.play('porta')
        this.efeitoporta.play()
        this.timer = 0
        this.timedEvent = this.time.addEvent({
          delay: 1000,
          callback: this.countdown,
          callbackScope: this,
          loop: true
        })
        // this.mensagem.setText('Aguardando segundo jogador...')
        navigator.mediaDevices
          .getUserMedia({ video: false, audio: true })
          .then((stream) => {
            this.game.midias = stream
          })
          .catch((error) => console.error(error))
      } else if (this.game.jogadores.segundo === this.game.socket.id) {
        // item.botao.anims.play('porta')
        this.efeitoporta.play()
        this.timer = 0
        this.timedEvent = this.time.addEvent({
          delay: 1000,
          callback: this.countdown2,
          callbackScope: this,
          loop: true
        })
        // this.mensagem.setText('Conectando...')
      }
      this.game.jogadores = jogadores
    })

    this.game.socket.on('offer', (description) => {
      this.game.remoteConnection = new RTCPeerConnection(this.game.ice_servers)

      this.game.remoteConnection.onicecandidate = ({ candidate }) =>
        candidate && this.game.socket.emit('candidate', this.game.sala, candidate)

      this.game.remoteConnection.ontrack = ({ streams: [midia] }) =>
        this.game.audio.srcObject = midia

      this.game.midias.getTracks()
        .forEach((track) => this.game.remoteConnection.addTrack(track, this.game.midias))

      this.game.remoteConnection.setRemoteDescription(description)
        .then(() => this.game.remoteConnection.createAnswer())
        .then((answer) => this.game.remoteConnection.setLocalDescription(answer))
        .then(() => this.game.socket.emit('answer', this.game.sala, this.game.remoteConnection.localDescription))
    })

    this.game.socket.on('answer', (description) =>
      this.game.localConnection.setRemoteDescription(description)
    )

    this.game.socket.on('candidate', (candidate) => {
      const conn = this.game.localConnection || this.game.remoteConnection
      conn.addIceCandidate(new RTCIceCandidate(candidate))
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

  countdown2 () {
    this.timer -= 0.5
    if (this.timer <= 0) {
      this.timedEvent.destroy()
      this.game.scene.stop('tela_sala')
      this.game.scene.start('sala_s1')
    }
  }

  update () { }
}
