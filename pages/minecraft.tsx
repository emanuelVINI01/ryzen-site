import { Box, Divider, Stack, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head";
import React, { useRef, useState } from 'react';
import Footer from "../src/components/Footer"
import ProductInformation from "../src/components/ProductInformation";
import MinecraftProduct from "../src/components/Minecraft/MinecraftProduct";
import ProductDescribe from "../src/components/ProductDescribe";
import LocationCard from "../src/components/Minecraft/LocationCard";
import PlanTimeSwitch from "../src/components/PlanTimeSwitch";
import { minecraftPlans } from "../src/data/plans";

export default function Minecraft() {
    const [euaSelected, setEua] = useState(true);
    const [quarterlySelected, setQuarterly] = useState(false);
    
    const euaRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>RyzenHosting - Minecraft</title>
            </Head>
            <ProductInformation onClick={() => {
                euaRef.current?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Divider mt={15} />
            <Box py={12}>
                <ProductDescribe title={"Comece seu servidor em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    overflow={"auto"}
                    mt={10}
                >
                    <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} id="locations">
                        <LocationCard 
                            image={"eua.png"} 
                            location_describe={"Localização Estados Unidos, Virginia. 100-150ms."} 
                            id={"eua"} 
                            onClick={() => {
                                if (euaSelected) { return }
                                setEua(true);
                            }} 
                            bg={euaSelected ? "green.100" : undefined} 
                        />
                    </SimpleGrid>
                </Stack>
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
                        
                        {euaSelected && (
                            <SimpleGrid columns={[1, 1, 1, 1, 2, 4]} spacing={5} ref={euaRef}>
                                {minecraftPlans.map(plan => (
                                    <MinecraftProduct 
                                        key={plan.product_id}
                                        isQuartetely={quarterlySelected} 
                                        product_id={plan.product_id} 
                                        name={plan.name} 
                                        price={plan.price} 
                                        priceQuartetely={plan.priceQuarterly} 
                                        ram={plan.ram} 
                                        ping={plan.ping} 
                                        cpu={plan.cpu} 
                                        ranked={plan.ranked}
                                    />
                                ))}
                            </SimpleGrid>
                        )}
                    </div>
                </Stack>
            </Box>
            <Divider />
            <Footer />
        </>
    )
}
