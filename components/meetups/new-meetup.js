import { Button, Flex, FormControl, FormHelperText, FormLabel, Heading, Input, Text } from "@chakra-ui/react";

const NewMeetup = () => {
    return <Flex direction="column">
        <Flex direction="column">
            <Heading>
                Create new meetups!
            </Heading>
            <Text mt="5">make plans and meet your friends ✌️</Text>
        </Flex>
        <Flex mt="10">
            <form>
                <FormControl>
                    <FormLabel>Title</FormLabel>
                    <Input type="text" name="title" />
                </FormControl>
                <FormControl>
                    <FormLabel mt="3">Address</FormLabel>
                    <Input type="text" name="address" />
                </FormControl>
                <FormControl>
                    <FormLabel mt="3">Description</FormLabel>
                    <Input type="text" name="description" />
                </FormControl>
                <FormControl>
                    <FormLabel >Image</FormLabel>
                    <Input border="none" type="file" name="imageUrl" />
                </FormControl>
                <Button mt="5">Submit</Button>
            </form>
        </Flex>
    </Flex>
}


export default NewMeetup;