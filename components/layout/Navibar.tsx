import { Box, Button, Center, Flex, Grid, GridItem, HStack, Heading, Link, Spacer } from "@chakra-ui/react";
import { NextPage } from "next";

const NaviBar: NextPage = () => {
    return (
        <Flex
            align='center'
            h='100%'
            padding='0.5rem'
            justify="space-between"
            bg="blue.300"
            >

            {/* 이미지 로고 */}
            <Box
                padding='1.0rem'>
                <Heading color='white'>Doogle</Heading>
            </Box>
            
            {/* 네비게이션 */}
            <Box p='30'>
                <HStack spacing='24px'>
                    <Link href="#">
                        메뉴 1
                    </Link>
                    <Link href="#">
                        메뉴 2
                    </Link>
                </HStack>
            </Box>
            <Spacer />

            {/* 로그인 영역 */}
            <Box>
                <Button>로그인</Button>
            </Box>
        </Flex>
    )
}

export default NaviBar