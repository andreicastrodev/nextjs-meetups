import { Image, Heading, Text, Box, Flex, Button } from '@chakra-ui/react'

const MeetupLists = (props) => {



    return <Box w="30%" p="15" borderRadius="10px">
        <Flex direction="column" alignItems="center">
            <Image boxSize='250px' w="100%"
                objectFit='cover' src={props.imageUrl} />
            <Heading>{props.title}</Heading>
            <Text fontSize="xl">{props.address}</Text>
            <Text textAlign="center">{props.description}</Text>
            <Button mt="2">Details</Button>
        </Flex>
    </Box >
}


export default MeetupLists