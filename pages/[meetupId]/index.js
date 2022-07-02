
import { Flex } from '@chakra-ui/react'
import MeetupDetails from '../../components/meetups/meetup-details'
const DUMMY_MEETUPS = {
    title: 'Test meetup',
    address: 'Barcelona, Spain',
    imageUrl: 'https://media.istockphoto.com/photos/view-of-the-sea-from-a-height-pescola-castelln-spain-beautiful-view-picture-id670888198?k=20&m=670888198&s=612x612&w=0&h=mitgcHCefjARfgIHMD4YSsje-sUO4Q_3XZHozHxb9Qs=',
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore magni cum delectus labore suscipit quas aliquam fuga similique in distinctio nostrum quo eum sint, beatae, neque dicta, nobis alias"
}

export default function MeetupDetail() {
    return (
        <Flex justify="center" p="10" mt="6">
            <MeetupDetails title={DUMMY_MEETUPS.title} address={DUMMY_MEETUPS.address}
                imageUrl={DUMMY_MEETUPS.imageUrl}
                description={DUMMY_MEETUPS.description} />
        </Flex>
    )
}
