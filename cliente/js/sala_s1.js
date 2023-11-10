// eslint-disable-next-line no-undef
export default class salas1 extends Phaser.Scene {
  constructor () {
    super('sala_s1')
  }

  preload() {
    this.load.image('parede_sebas', '../assets/imagens/parede_sebas.png')
    this.load.image('inventario', '../assets/imagens/inventario.png')
    this.load.image('seta_e', '../assets/imagens/seta_esquerda.png')
    this.load.image('seta_d', '../assets/imagens/seta_direita.png')
    this.load.image('porta_final_aberta_s', '../assets/imagens/porta_final_aberta.png')
    this.load.image('porta_final', '../assets/imagens/porta_final.png')
    this.load.image('enigma_finals', '../assets/imagens/enigma_final.png')
  }

  create() {
    // eslint-disable-next-line no-unused-expressions
    this.game.inventario
    this.add.image(400, 225, 'parede_sebas')
    this.add.image(400, 50, 'inventario')

    if (this.game.jogadores.segundo === this.game.socket.id) {
      navigator.mediaDevices.getUserMedia({ video: false, audio: true })
        .then((stream) => {
          this.game.localConnection = new RTCPeerConnection(this.game.ice_servers)

          this.game.localConnection.onicecandidate = ({ candidate }) =>
            candidate && this.game.socket.emit('candidate', this.game.sala, candidate)

          this.game.localConnection.ontrack = ({ streams: [stream] }) =>
            this.game.audio.srcObject = stream

          stream.getTracks()
            .forEach((track) => this.game.localConnection.addTrack(track, stream))

          this.game.localConnection.createOffer()
            .then((offer) => this.game.localConnection.setLocalDescription(offer))
            .then(() => this.game.socket.emit('offer', this.game.sala, this.game.localConnection.localDescription))

          this.game.midias = stream
        })
        .catch((error) => console.error(error))
    }

    this.add.image(400, 323, 'porta_final')

    if (this.game.verifica_enigmaf_s === 'V') {
      this.add.image(400, 323, 'porta_final_aberta_s')
        .setInteractive()
        .on('pointerdown', () => {
          this.game.scene.stop('sala_s1')
          this.game.scene.start('tela_final')
        })
    }

    this.add.image(400, 175, 'enigma_finals')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_s1')
        this.game.scene.start('enigma_finals')
      })

    // Configuração do carrosel de cenas
    this.add.image(25, 225, 'seta_e')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_s1')
        this.game.scene.start('sala_s4')
      })

    this.add.image(775, 225, 'seta_d')
      .setInteractive()
      .on('pointerdown', () => {
        this.game.scene.stop('sala_s1')
        this.game.scene.start('sala_s2')
      })
  }

  update() { }
}
