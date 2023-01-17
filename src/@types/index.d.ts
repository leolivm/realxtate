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

type Rents = {
  id: string
  title: string
  description: string
  image_url: string
  contact: string
  bedrooms: number
  bathrooms: number
  square_feets: number
  is_verified: boolean
  location: string
  latitude: string
  longitude: string
  monthly_cost?: number
  cost?: number
  rent: boolean
  currency: string
}

type FindAllRentsPayload = {
  findAllRents: Rents[]
}

type AllRentsPayload = {
  rents: Rents[]
}

type PropertyProps = {
  property: Rents
}
