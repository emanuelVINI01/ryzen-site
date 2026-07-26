import { Box, Heading, Stack, Thead, Table, Th, Tr, Tbody } from "@chakra-ui/react"
import Head from "next/head";
import React from 'react';
import Footer from "../src/components/Footer"
import DedicatedServer from "../src/components/DedicatedServer";
import { dedicatedPlans } from "../src/data/plans";

export default function Dedicated() {

    return (
        <>
            <Head>
                <title>RyzenHosting - Servidores Dedicados</title>
            </Head>
            <Stack align={"center"} mt={10}>
                <Heading
                    fontWeight={900}
                    fontSize={{ base: '2xl', sm: '4xl', md: '5xl' }}
                    lineHeight={'110%'}>
                    SERVIDORES DEDICADOS
                </Heading>
            </Stack>

            <Box py={12} id={"products"}>
                <Table mt={10} maxH={"10xl"}>
                    <Thead>
                        <Tr p={3}>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Servidor</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Armazenamento</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Processador</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Mémoria RAM</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Localização</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Preço</Th>
                            <Th></Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {dedicatedPlans.map(plan => (
                            <DedicatedServer 
                                key={plan.id}
                                id={plan.id} 
                                network={plan.network} 
                                disk={plan.disk} 
                                ram={plan.ram} 
                                price={plan.price} 
                                location={plan.location} 
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
