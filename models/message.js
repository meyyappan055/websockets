class Message {
    constructor(content, from) {
        this.content = content;
        this.from = from;
        this.timestamp = new Date();
    }
}

export default Message;
