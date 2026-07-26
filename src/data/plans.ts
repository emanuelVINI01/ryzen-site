import { VPSPlan, ApplicationPlan, MinecraftPlan, DedicatedPlan, WebPlan, Testimonial } from "../types";

export const testimonials: Testimonial[] = [
  {
    role: "C.E.O - The Ensight Corporation",
    describe: "Recomendo muito a RyzenHosting. Após começar a trabalhar com eles e me tornar cliente, posso falar com propriedade que é algo de qualidade. A RyzenHosting não faz overselling como outras hospedagens e garantem total qualidade em seus produtos. Recomendo que comprem com a Ryzen.",
    photo: "https://cdn.discordapp.com/avatars/396049406773952512/a_c7d94f0b7502c3e992c6018b0d426383.webp?size=128",
    name: "Confinity"
  },
  {
    role: "C.E.O - Wolves",
    describe: "Recomendo bastante a RyzenHosting, possui um ótimo suporte, hosts baratas e que valem apena, cada centavo que gastei do meu bolso renovando a host foi a melhor escolha que tive, a RyzenHosting possui uma qualidade em seus produtos muito grande, após começar a ser um cliente deles nunca tive problemas com nenhum produtos e nem com atendimento! Super recomendo que façam suas compras na RyzenHosting.",
    photo: "https://cdn.discordapp.com/attachments/985861706272096296/987694135194554389/unknown.png",
    name: "Lowercase"
  },
  {
    role: "C.E.O - Optimize Team",
    describe: "Após muito tempo na ryzen hosting, o desempenho mudou muito em questão de performace, tenho o plano revenda da i7 recomendo muito realmente superaram minhas expectativas e conseguiram ganhar minha confiança, um ótimo suporte e foi a minha primeira máquina da minha empresa, então tive uma experiencia diferenciada, realmente mudaram minha rotina a cada dia, obrigado ryzen hosting.",
    photo: "https://cdn.discordapp.com/icons/895266471196913665/46ce2bda2b19ad4f55975527cd8b6160.webp?size=128",
    name: "Nuno"
  }
];

export const vpsPlans: VPSPlan[] = [
  { id: 12, disk: 40, ram: 2, price: "R$21,99", vCPU: 1, planName: "#1", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 13, disk: 70, ram: 4, price: "R$29,99", vCPU: 2, planName: "#2", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 14, disk: 100, ram: 8, price: "R$43,99", vCPU: 4, planName: "#3", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 15, disk: 150, ram: 12, price: "R$59,99", vCPU: 6, planName: "#4", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 16, disk: 200, ram: 16, price: "R$73,99", vCPU: 8, planName: "#5", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 17, disk: 360, ram: 24, price: "R$99,99", vCPU: 12, planName: "#6", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 18, disk: 490, ram: 32, price: "R$134,99", vCPU: 14, planName: "#7", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 19, disk: 600, ram: 48, price: "R$184,99", vCPU: 16, planName: "#8", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 20, disk: 800, ram: 64, price: "R$229,99", vCPU: 16, planName: "#9", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { id: 22, disk: 1600, ram: 128, price: "R$349,99", vCPU: 16, planName: "#11", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" }
];

export const vpsGamingPlans: VPSPlan[] = [
  { id: 23, dtype: "NVMe", disk: 40, ram: 2, price: "R$23,99", vCPU: 1, planName: "#1", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz" },
  { id: 24, dtype: "NVMe", disk: 90, ram: 4, price: "R$32,99", vCPU: 1, planName: "#2", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz" },
  { id: 25, dtype: "NVMe", disk: 120, ram: 8, price: "R$49,99", vCPU: 3, planName: "#3", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz" },
  { id: 26, dtype: "NVMe", disk: 160, ram: 12, price: "R$63,99", vCPU: 3, planName: "#4", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz" },
  { id: 35, dtype: "NVMe", disk: 180, ram: 16, price: "R$94,99", vCPU: 4, planName: "#5", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz" },
  { id: 27, dtype: "NVMe", disk: 200, ram: 24, price: "R$144,99", vCPU: 5, planName: "#6", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz" },
  { id: 28, dtype: "NVMe", disk: 250, ram: 32, price: "R$189,99", vCPU: 6, planName: "#7", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz" }
];

export const minecraftPlans: MinecraftPlan[] = [
  { product_id: 1, name: "Plano EUA 1", price: "3,00", priceQuarterly: "9,00", ram: 1, ping: "de 120 a 150ms", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { product_id: 2, name: "Plano EUA 2", price: "6,00", priceQuarterly: "12,00", ram: 2, ping: "de 120 a 150ms", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { product_id: 4, name: "Plano EUA 3", price: "12,00", priceQuarterly: "36,00", ram: 4, ping: "de 120 a 150ms", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz", ranked: true },
  { product_id: 5, name: "Plano EUA 4", price: "24,00", priceQuarterly: "72,00", ram: 8, ping: "de 120 a 150ms", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { product_id: 6, name: "Plano EUA 5", price: "36,00", priceQuarterly: "108,00", ram: 12, ping: "de 120 a 150ms", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { product_id: 7, name: "Plano EUA 6", price: "48,00", priceQuarterly: "144,00", ram: 16, ping: "de 120 a 150ms", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { product_id: 8, name: "Plano EUA 7", price: "72,00", priceQuarterly: "216,00", ram: 24, ping: "de 120 a 150ms", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" },
  { product_id: 9, name: "Plano EUA 8", price: "96,00", priceQuarterly: "288,00", ram: 32, ping: "de 120 a 150ms", cpu: "Intel(R) Xeon(R) CPU E5-2650 v2 @ 3.40GHz" }
];

export const minecraftGamingPlans: MinecraftPlan[] = [
  { product_id: 30, name: "Plano EUA Gaming 1", price: "4,00", priceQuarterly: "12,00", ram: 1, ping: "de 120 a 150ms", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz", diskType: "NVMe" },
  { product_id: 31, name: "Plano EUA Gaming 2", price: "8,00", priceQuarterly: "24,00", ram: 2, ping: "de 120 a 150ms", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz", diskType: "NVMe" },
  { product_id: 32, name: "Plano EUA Gaming 3", price: "16,00", priceQuarterly: "48,00", ram: 4, ping: "de 120 a 150ms", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz", diskType: "NVMe" },
  { product_id: 33, name: "Plano EUA Gaming 4", price: "32,00", priceQuarterly: "96,00", ram: 8, ping: "de 120 a 150ms", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz", diskType: "NVMe" },
  { product_id: 34, name: "Plano EUA Gaming 5", price: "48,00", priceQuarterly: "114,00", ram: 12, ping: "de 120 a 150ms", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz", diskType: "NVMe", ranked: true },
  { product_id: 35, name: "Plano EUA Gaming 6", price: "64,00", priceQuarterly: "192,00", ram: 16, ping: "de 120 a 150ms", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz", diskType: "NVMe" },
  { product_id: 36, name: "Plano EUA Gaming 7", price: "96,00", priceQuarterly: "288,00", ram: 24, ping: "de 120 a 150ms", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz", diskType: "NVMe" },
  { product_id: 37, name: "Plano EUA Gaming 8", price: "128,00", priceQuarterly: "384,00", ram: 32, ping: "de 120 a 150ms", cpu: "Intel(R) Core(R) I7 7700k @ 5.00GHz", diskType: "NVMe" }
];

export const appPythonPlans: ApplicationPlan[] = [
  { product_id: 47, name: "Plano Python 1", price: "2,50", ram: "512MB", disk: 2.5 },
  { product_id: 48, name: "Plano Python 2", price: "5,00", ram: "1GB", disk: 5, ranked: true }
];

export const appJsPlans: ApplicationPlan[] = [
  { product_id: 47, name: "Plano JavaScript 1", price: "2,50", ram: "512MB", disk: 2.5 },
  { product_id: 48, name: "Plano JavaScript 2", price: "5,00", ram: "1GB", disk: 5, ranked: true }
];

export const dedicatedPlans: DedicatedPlan[] = [
  { id: 1, network: "500MBPS", disk: "480GB SSD", ram: "32GB DDR3", price: "R$349,99", location: "Brasil, São Paulo", cpu: "Intel Xeon E5-2470v2 10c/20t 3.2Ghz" },
  { id: 2, network: "500MBPS", disk: "480GB SSD", ram: "64GB DDR3", price: "R$469,99", location: "Brasil, São Paulo", cpu: "Intel Xeon E5-2470v2 10c/20t 3.2Ghz" },
  { id: 3, network: "1GBPS", disk: "480GB SSD + 2x2TB HDD", ram: "64GB DDR4", price: "R$329,99", location: "Estados Unidos, Vint Hill", cpu: "Intel Xeon E5-1650v4 - 6c/12t - @ 3.6GHz/4GHz" },
  { id: 4, network: "1GBPS", disk: "2x450GB NVMe", ram: "64GB DDR4", price: "R$399,99", location: "Estados Unidos, Vint Hill", cpu: "Intel Core i7-7700K OC - 4c/8t 5.0Ghz" },
  { id: 5, network: "1GBPS", disk: "2x240GB SSD + 4x2TB HDD", ram: "256GB DDR3", price: "R$799,99", location: "Estados Unidos, Vint Hill", cpu: "Dual Xeon E5-2650v2 - 16c/32t - 3.4GHZ" }
];

export const webPlans: WebPlan[] = [
  { id: 55, disk: "30GB", price: "9,99", name: "Plano Starter", domains: "1", subdomains: "5", price_quarterly: "29,99" },
  { id: 56, disk: "50GB", price: "19,99", name: "Plano Medium", domains: "5", subdomains: "10", price_quarterly: "59,99" },
  { id: 57, disk: "100GB", price: "29,99", name: "Plano Pro", domains: "Ilimitado", subdomains: "Ilimitado", price_quarterly: "99,99" }
];
