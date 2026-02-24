export interface ProductVariant {
    sku: string;
    strength: string;
    packSize: string;
    price: number;
    priceUnit: string;
    inStock: boolean;
    volume?: string;
}

export interface BaseProduct {
    id: string;
    name: string;
    description: string;
    mechanism?: string;
    researchAreas?: string[];
    administration?: string;
    halfLife?: string;
    variants: ProductVariant[];
    alsoKnownAs?: string[];
    fullName?: string;
    category: string; // The parent category name
    type: string; // e.g., 'Peptides', 'Steroids', etc.
}

export interface PeptideProduct extends BaseProduct {
    wadaStatus?: string;
    fdaStatus?: string;
    aminoAcids?: number;
}

export interface SteroidProduct extends BaseProduct {
    ester?: string;
    composition?: string | Record<string, string>;
}

export interface ResearchChemicalProduct extends BaseProduct {
    cas?: string;
    molecularFormula?: string;
    molecularWeight?: string;
}

export type Product = PeptideProduct | SteroidProduct | ResearchChemicalProduct | BaseProduct;

export interface Category {
    name: string;
    description: string;
    icon: string;
    products: Product[];
    type: string; // The file name or top-level group
}

export interface ProjectData {
    metadata: {
        category: string;
        description: string;
        lastUpdated: string;
        totalProducts: number;
        disclaimer: string;
    };
    categories: {
        name: string;
        description: string;
        icon: string;
        products: any[];
    }[];
}
