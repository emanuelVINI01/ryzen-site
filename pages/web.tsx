import { Box, Divider, Stack, SimpleGrid } from "@chakra-ui/react"
import Head from "next/head";
import React, { useRef, useState } from 'react';
import Footer from "../src/components/Footer"
import ProductInformation from "../src/components/ProductInformation";
import ProductDescribe from "../src/components/ProductDescribe";
import PlanTimeSwitch from "../src/components/PlanTimeSwitch";
import CPanelProduct from "../src/components/cPanel/cPanelProduct";
import { webPlans } from "../src/data/plans";

export default function Web() {
    const [quarterly, setQuarterly] = useState(false);
    const productsRef = useRef<HTMLDivElement>(null);

    return (
        <>
            <Head>
                <title>RyzenHosting - Hospedagem de Sites</title>
            </Head>
            <ProductInformation onClick={() => {
                productsRef.current?.scrollIntoView({ behavior: 'smooth' });
            }} />
            <Divider mt={15} />

            <Box py={12} ref={productsRef}>
                <ProductDescribe title={"Tenha seu site online em segundos"} description={"Todos planos são atividos automaticamente."} />
                <Stack align={"center"} mt={5} mb={5}>
                    <PlanTimeSwitch setSelected={setQuarterly} isSelected={quarterly} />
                </Stack>

                <SimpleGrid columns={[1, 1, 2, 3]} spacing={4}>
                    {webPlans.map(plan => (
                        <CPanelProduct 
                            key={plan.id}
                            disk={plan.disk} 
                            price={plan.price} 
                            name={plan.name} 
                            domains={plan.domains} 
                            subdomains={plan.subdomains} 
                            id={plan.id} 
                            quartetely={quarterly} 
                            price_quartetely={plan.price_quarterly} 
                        />
                    ))}
                </SimpleGrid>
            </Box>
            <Divider mt={15} />
            <Footer />
        </>
    )
}
