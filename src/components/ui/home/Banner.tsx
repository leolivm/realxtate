import Link from 'next/link'
import Image from 'next/image'
import { Flex, Box, Text, Button } from '@chakra-ui/react'

export function Banner(props: BannerType) {
  return (
    <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
      <Image src={props.imageUrl} width={500} height={300} alt="banner" />

      <Box p="5">
        <Text color="gray.500" fontSize="sm" fontWeight="medium">{props.purpose}</Text>

        <Text fontSize="3xl" fontWeight="bold">{props.title}<br />{props.semiTitle}</Text>

        <Text fontSize="lg" pt="3" pb="3" color="gray.700">{props.description}<br />{props.text}</Text>

        <Button fontSize="xl" bg="blue.300" color="white">
          <Link href={props.link}>{props.buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  )
}