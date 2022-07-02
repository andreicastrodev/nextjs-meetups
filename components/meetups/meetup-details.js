import { Image, Heading, Text, Box, Flex, Button } from '@chakra-ui/react'

const MeetupDetails = (props) => {



    return <Box w="70%" p="15" borderRadius="10px">
        <Flex direction="column" alignItems="center">
            <Image boxSize='500px' w="100%"
                objectFit='cover' src={props.imageUrl} />
            <Heading mt="5">{props.title}</Heading>
            <Text mt="5" fontSize="xl">{props.address}</Text>
            <Text mt="5" textAlign="center">{props.description}</Text>
        </Flex>
    </Box >
}


export default MeetupDetails