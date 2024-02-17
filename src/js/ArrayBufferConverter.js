export default class ArrayBufferConverter {
  constructor(){
    this.data;
  }

  load(buffer) {
    this.data = buffer;
  }

  toString() {
    return JSON.stringify([...new Uint16Array(this.data)]);
  }
}