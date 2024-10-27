const WebSocketService = {
  websocket: null,

  connect(url) {
    this.websocket = new WebSocket(url);

    this.websocket.onopen = () => {
      console.log("WebSocket conectado");
    };

    this.websocket.onclose = () => {
      console.log("WebSocket desconectado");
    };

    this.websocket.onmessage = (event) => {
      const data = JSON.parse(event.data);
      console.log(data);
      this.handleMessage(data);
    };
  },

  send(data) {
    if (this.websocket && this.websocket.readyState === WebSocket.OPEN) {
      this.websocket.send(JSON.stringify(data));
    } else {
      console.error("WebSocket não está conectado.");
    }
  },

  handleMessage(data) {
    console.log("Mensagem recebida:", data);
  },

  disconnect() {
    if (this.websocket) {
      this.websocket.close();
    }
  },
};

export default WebSocketService;
