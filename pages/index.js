import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Flex, Heading, Text, Box } from '@chakra-ui/react'
import MeetupLists from '../components/meetups/meetup-lists'
const DUMMY_MEETUPS = [{
  title: 'Test meetup',
  address: 'Barcelona, Spain',
  imageUrl: 'https://media.istockphoto.com/photos/view-of-the-sea-from-a-height-pescola-castelln-spain-beautiful-view-picture-id670888198?k=20&m=670888198&s=612x612&w=0&h=mitgcHCefjARfgIHMD4YSsje-sUO4Q_3XZHozHxb9Qs=',
  description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet tempore magni cum delectus labore suscipit quas aliquam fuga similique in distinctio nostrum quo eum sint, beatae, neque dicta, nobis alias"
}]

export default function Home() {
  return (
    <Box p="10" mt="6">
      {DUMMY_MEETUPS.map(meetup => {
        return <MeetupLists title={meetup.title} address={meetup.address}
          imageUrl={meetup.imageUrl}
          description={meetup.description} />
      })}
    </Box>
  )
}
