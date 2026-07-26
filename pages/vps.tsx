import { Box, Divider, Stack, SimpleGrid, Tbody, Table, Thead, Th, Tr } from "@chakra-ui/react"
import Head from "next/head";
import React, { useRef, useState } from 'react';
import Footer from "../src/components/Footer"
import ProductInformation from "../src/components/ProductInformation";
import ProductDescribe from "../src/components/ProductDescribe";
import LocationCard from "../src/components/Minecraft/LocationCard";
import VPSProduct from "../src/components/VPSProduct";
import { vpsPlans } from "../src/data/plans";

export default function VPS() {
    const [isEUA, setEUA] = useState(true);

    const productsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>RyzenHosting - Servidores VPS</title>
            </Head>
            <ProductInformation virt onClick={() => {
                if (productsRef.current) productsRef.current.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Divider mt={15} />
            <Stack
                direction={{ base: 'column', md: 'row' }}
                textAlign="center"
                justify="center"
                spacing={{ base: 4, lg: 10 }}
                overflow={"auto"}
                mt={10}
                mb={10}
            >
                <SimpleGrid columns={[1, 1, 1, 2]} spacing={10} id="locations">
                    <LocationCard
                        image={"eua.png"}
                        location_describe={"Localização Estados Unidos, Virginia."}
                        id={"eua"}
                        bg={"green.100"} />
                </SimpleGrid>
            </Stack>

            <ProductDescribe title={"Tenha seu sistema online em segundos"} description={"Tenha seu serviço em instantes."} />

            <Box ref={productsRef}>
                <Table mt={10}>
                    <Thead>
                        <Tr>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Plano</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Armazenamento</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Núcleos de CPU</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Mémoria RAM</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Processador</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Proteção Anti-DDoS</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Preço</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {vpsPlans.map(plan => (
                            <VPSProduct 
                                key={plan.id}
                                id={plan.id} 
                                disk={plan.disk} 
                                ram={plan.ram} 
                                price={plan.price} 
                                vCPU={plan.vCPU} 
                                planName={plan.planName} 
                                cpu={plan.cpu} 
                            />
                        ))}
                    </Tbody>
                </Table>
            </Box>

            <Footer />
        </>
    )
}
