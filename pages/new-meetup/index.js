
import { Flex } from '@chakra-ui/react'
import NewMeetup  from '../../components/meetups/new-meetup'

export default function NewMeetups() {
    return (
        <Flex justify="center" p="10" mt="6">
            <NewMeetup />
        </Flex>
    )
}
