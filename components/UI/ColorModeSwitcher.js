import {
    useColorMode,
    useColorModeValue,
    IconButton,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";


const ColorModeSwitcher = () => {
    const { toggleColorMode } = useColorMode();
    const SwitchIcon = useColorModeValue(FaMoon, FaSun);

    return (
        <IconButton
            size="md"
            fontSize="lg"
            variant="ghost"
            color="current"
            marginLeft="2"
            onClick={toggleColorMode}
            icon={<SwitchIcon />}

        />
    );
};

export default ColorModeSwitcher;