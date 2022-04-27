import { FC, createContext } from "react";
import faker from 'faker';


 export interface HeroContextInterface {
    id: string;
    name: string;
    image: string;
}


const HeroContext = createContext<HeroContextInterface[] | null>(null);

 export const Data: FC = ({ children }) => {
    const products: HeroContextInterface[] = [...Array(20)].map(() => ({
        id: faker.datatype.uuid(),
        name: faker.commerce.productName(),
        image: faker.random.image(),
    }));
 
    return <HeroContext.Provider value={products}>
        {children}
    </HeroContext.Provider>
}

export default HeroContext
