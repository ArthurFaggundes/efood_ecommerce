class Food {
  id: number
  title: string
  rate: string
  description: string
  image: string
  infos: string[]
  link: string

  constructor(
    id: number,
    title: string,
    rate: string,
    description: string,
    image: string,
    infos: string[],
    link: string
  ) {
    this.id = id
    this.title = title
    this.rate = rate
    this.description = description
    this.image = image
    this.infos = infos
    this.link = link
  }
}
export default Food
