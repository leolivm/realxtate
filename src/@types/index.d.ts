type BannerType = {
  purpose: string
  imageUrl: string
  title: string
  semiTitle: string
  description: string
  text: string
  link: string
  buttonText: string
}

type FindAllRentsPayload = {
  findAllRents: AllRentsPayload
}

type AllRentsPayload = {
  id: string
  title: string
  description: string
  image_url: string
  contact: string
  bedrooms: number
  bathrooms: number
  square_feets: number
}[]
