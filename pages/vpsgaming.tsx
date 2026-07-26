import { Box, Divider, Table, Thead, Th, Tr, Tbody } from "@chakra-ui/react"
import Head from "next/head";
import React, { useRef } from 'react';
import Footer from "../src/components/Footer"
import ProductInformation from "../src/components/ProductInformation";
import ProductDescribe from "../src/components/ProductDescribe";
import VPSProduct from "../src/components/VPSProduct";
import { vpsGamingPlans } from "../src/data/plans";

export default function VPSGaming() {
    const productsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>RyzenHosting - Servidores VPS Gaming</title>
            </Head>
            <ProductInformation virt onClick={() => {
                productsRef.current?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Divider mt={15} />

            <Box py={12} ref={productsRef}>
                <ProductDescribe title={"Tenha seu sistema online em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Table mt={10}>
                    <Thead>
                        <Tr p={3}>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Plano</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Armazenamento</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Núcleos de CPU</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Mémoria RAM</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Processador</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Proteção Anti-DDoS</Th>
                            <Th fontWeight={900} color={"white"} fontSize={"lg"}>Preço</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {vpsGamingPlans.map(plan => (
                            <VPSProduct
                                key={plan.id}
                                id={plan.id}
                                dtype={plan.dtype}
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
