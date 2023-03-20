import { Text, Button, HStack, Stack } from "@chakra-ui/react"

export function Navbar() {
    return(
        <HStack
            as="nav"
        >
            <Stack>
                <Text
                as="p"
                textTransform={"uppercase"}
                >
                    Pão dos sonhos
                </Text>

                 
            </Stack>    
        </HStack>
    )
}