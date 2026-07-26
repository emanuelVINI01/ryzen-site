import { Box, Divider, Stack, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head";
import React, { useRef, useState } from 'react';
import Footer from "../src/components/Footer"
import ProductInformation from "../src/components/ProductInformation";
import MinecraftProduct from "../src/components/Minecraft/MinecraftProduct";
import ProductDescribe from "../src/components/ProductDescribe";
import PlanTimeSwitch from "../src/components/PlanTimeSwitch";
import { minecraftGamingPlans } from "../src/data/plans";

export default function MinecraftGaming() {
    const [quarterlySelected, setQuarterly] = useState(false);
    const minecraftRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>RyzenHosting - Minecraft Gaming</title>
            </Head>
            <ProductInformation onClick={() => {
                minecraftRef.current?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Divider mt={15} />
            <Box py={12}>
                <ProductDescribe title={"Comece seu servidor em segundos"} description={"Planos Gaming com processadores i7 para alta perfomance."} />
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    overflow={"auto"}
                >
                    <div>
                        <Stack align={"center"} mt={10} mb={10}>
                            <PlanTimeSwitch setSelected={setQuarterly} isSelected={quarterlySelected} />
                        </Stack>
                        <SimpleGrid columns={[1, 1, 1, 1, 2, 4]} spacing={5} ref={minecraftRef}>
                            {minecraftGamingPlans.map(plan => (
                                <MinecraftProduct 
                                    key={plan.product_id}
                                    isQuartetely={quarterlySelected} 
                                    product_id={plan.product_id} 
                                    name={plan.name} 
                                    diskType={plan.diskType} 
                                    price={plan.price} 
                                    priceQuartetely={plan.priceQuarterly}
                                    ram={plan.ram} 
                                    ping={plan.ping} 
                                    cpu={plan.cpu} 
                                    ranked={plan.ranked} 
                                />
                            ))}
                        </SimpleGrid>
                    </div>
                </Stack>
            </Box>
            <Divider />
            <Footer />
        </>
    )
}
