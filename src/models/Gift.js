export class Gift {
  constructor(data) {
    this.id = data.id
    this.url = data.url
    this.tag = data.tag || "Here is your gift!"
    this.isOpened = data.isOpened || false
  }

}