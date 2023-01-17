import Link from 'next/link'
import millify from 'millify'
import Image from 'next/image'
import { BsGridFill } from 'react-icons/bs'
import { GoVerified } from 'react-icons/go'
import { FaBed, FaBath } from 'react-icons/fa'
import { Flex, Box, Text } from '@chakra-ui/react'

export function Property({ property }: PropertyProps) {
  return (
    <Link href={`/${property.id}`}>
      <Flex
        p="5"
        pt="0"
        w="420px"
        flexWrap="wrap"
        cursor="pointer"
        justifyContent="flex-start"
      >
        <Box>
          <Image
            width={400}
            height={200}
            src={property.image_url}
            alt={property.description}
          />
        </Box>

        <Box w="full">
          <Flex pt="2" alignItems="center" justifyContent="space-between">
            <Flex alignItems="center">
              <Box pr="3" color="green.400">
                {property.is_verified && <GoVerified />}
              </Box>

              <Text fontWeight="bold" fontSize="lg">
                {property.currency}{' '}
                {property.rent
                  ? `${millify(property.monthly_cost!)}/montlhy`
                  : `${millify(property.cost!)}`}
              </Text>
            </Flex>

            <Flex
              p="1"
              w="250px"
              color="white"
              alignItems="center"
              justifyContent="space-between"
            >
              {property.bedrooms} <FaBed /> | {property.bathrooms} <FaBath /> |{' '}
              {millify(property.square_feets)} sqft <BsGridFill />
            </Flex>

            <Text fontSize="lg">
              {property.title.length > 30
                ? `${property.title.substring(0, 30)}...`
                : property.title}
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Link>
  )
}
