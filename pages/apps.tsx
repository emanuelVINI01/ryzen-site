import { Box, Divider, Stack, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head";
import React, { useRef, useState } from 'react';
import Footer from "../src/components/Footer"
import ProductInformation from "../src/components/ProductInformation";
import ProductDescribe from "../src/components/ProductDescribe";
import LocationCard from "../src/components/Minecraft/LocationCard";
import ApplicationProduct from "../src/components/ApplicationProduct";
import { appPythonPlans, appJsPlans } from "../src/data/plans";

export default function Apps() {
    const [pySelected, setPy] = useState(false);
    const [jsSelected, setJs] = useState(true);

    const pyRef = useRef<HTMLDivElement>(null);
    const jsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>RyzenHosting - Aplicações</title>
            </Head>
            <ProductInformation onClick={() => {
                if (pySelected) {
                    pyRef.current?.scrollIntoView({ behavior: 'smooth' });
                } else {
                    jsRef.current?.scrollIntoView({ behavior: 'smooth' });
                }
            }} />
            <Divider mt={15} />
            <Box py={12}>
                <ProductDescribe title={"Hospede sua aplicações em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Stack
                    direction={{ base: 'column', md: 'row' }}
                    textAlign="center"
                    justify="center"
                    spacing={{ base: 4, lg: 10 }}
                    overflow={"auto"}
                    mt={10}
                >
                    <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} id="langs">
                        <LocationCard 
                            image={"py.png"} 
                            location_describe={"Aplicações escritas na linguagem Python."} 
                            id={"py"} 
                            onClick={() => {
                                if (pySelected) { return }
                                setJs(false)
                                setPy(true)
                            }} 
                            bg={pySelected ? "green.100" : undefined} 
                        />
                        <LocationCard 
                            image={"js.png"} 
                            location_describe={"Aplicações escritas na linguagem JavaScript."} 
                            id={"js"} 
                            onClick={() => {
                                if (jsSelected) { return }
                                setJs(true)
                                setPy(false)
                            }} 
                            bg={jsSelected ? "green.100" : undefined} 
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
                        {pySelected && (
                            <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} spacing={5} ref={pyRef}>
                                {appPythonPlans.map(plan => (
                                    <ApplicationProduct 
                                        key={plan.product_id}
                                        product_id={plan.product_id} 
                                        name={plan.name} 
                                        price={plan.price} 
                                        ram={plan.ram} 
                                        disk={plan.disk}
                                        ranked={plan.ranked} 
                                    />
                                ))}
                            </SimpleGrid>
                        )}
                        {jsSelected && (
                            <SimpleGrid columns={[1, 1, 1, 1, 2, 2]} spacing={5} ref={jsRef}>
                                {appJsPlans.map(plan => (
                                    <ApplicationProduct 
                                        key={plan.product_id}
                                        product_id={plan.product_id} 
                                        name={plan.name} 
                                        price={plan.price} 
                                        ram={plan.ram} 
                                        disk={plan.disk}
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
