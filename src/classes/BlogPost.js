export class BlogPost {
  constructor(id) {
    this.id = id;
    this.result = null;
    this.attempts = 0;
  }

  attempt() {
    this.attempts++;
  }

  fill(payload) {
    this.result = payload;
  }
}
