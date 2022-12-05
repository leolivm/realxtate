import { Box } from '@chakra-ui/react'
import { Banner } from 'components/ui/home/Banner'

export default function Home() {
  return (
    <Box>
      <Banner
        purpose="ALUGAR UMA CASA"
        title="Casas de aluguel para"
        semiTitle="todos"
        description="Explore apartamentos, vilas, casas"
        text="and more"
        buttonText="Explorar aluguéis"
        link="/search?purpose=for-rent"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />

      <Banner
        purpose="COMPRAR UMA CASA"
        title="Encontre, compre e tenha a"
        semiTitle="casa dos seus sonhos"
        description="Explore desde apartamentos, terrenos, pisos de construtores,"
        text="vilas e muito mais"
        buttonText="Explorar compra"
        link="/search?purpose=for-sale"
        imageUrl="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
    </Box>
  )
}
