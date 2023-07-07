import { extendBaseTheme } from "@chakra-ui/react"

import chakraTheme from '@chakra-ui/theme'

const theme = extendBaseTheme({
    initialColorMode: 'dark',
    useSystemColorMode: true,
    components: { 
        ...chakraTheme.components
    }
})

export default theme