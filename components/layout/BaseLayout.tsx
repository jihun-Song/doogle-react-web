import { Grid, GridItem } from "@chakra-ui/react";
import { NextPage } from "next";
import NaviBar from "./Navibar";

const BaseLayout: NextPage = () => {
    return (
        <Grid
            templateAreas={`
                "header"
                "main"
                "footer"
            `}
            gridTemplateRows={'5% 1000px 50px'}
            color='blackAlpha.700'
            fontWeight='bold'
        >
            <GridItem area={'header'}>
                <NaviBar />
            </GridItem>
            <GridItem area={'main'}>
                Main
            </GridItem>
            <GridItem area={'footer'}>
                Footer
            </GridItem>
        </Grid>
    )
}

export default BaseLayout