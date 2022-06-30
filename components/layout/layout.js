import { Flex, Heading, VStack, Spacer } from "@chakra-ui/react"
import ColorModeSwitcher from "../UI/ColorModeSwitcher"


const Layout = ({ children }) => {
    return <VStack>
        <Flex w="100%" p="5">
            <Heading>Next Meetups</Heading>
            <Spacer />
            <Flex flexBasis="20%" justifyContent="space-around">
                <h1>Link placeholder</h1>
                <h1>Link placeholder</h1>
                <ColorModeSwitcher />
            </Flex>
        </Flex>
        {children}
    </VStack>
}


export default Layout