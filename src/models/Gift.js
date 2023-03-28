export class Gift {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.tag = data.tag || "Here is your gift!"
    this.opened = data.opened || false
  }

}