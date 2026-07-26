export interface VPSPlan {
  id: number;
  disk: number;
  ram: number;
  price: string;
  vCPU: number;
  planName: string;
  cpu: string;
  dtype?: string;
}

export interface ApplicationPlan {
  product_id: number;
  name: string;
  price: string;
  ram: string;
  disk: number;
  ranked?: boolean;
}

export interface MinecraftPlan {
  product_id: number;
  name: string;
  price: string;
  priceQuarterly?: string;
  ram: number;
  ping: string;
  cpu: string;
  diskType?: string;
  ranked?: boolean;
}

export interface DedicatedPlan {
  id: number;
  network: string;
  disk: string;
  ram: string;
  price: string;
  location: string;
  cpu: string;
}

export interface WebPlan {
  id: number;
  disk: string;
  price: string;
  name: string;
  domains: string;
  subdomains: string;
  price_quarterly?: string;
}

export interface Testimonial {
  name: string;
  role: string;
  describe: string;
  photo: string;
}
