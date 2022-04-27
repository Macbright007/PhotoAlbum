import { Card, Wrapper } from "./Style"
// import { Splide, SplideSlide } from "@splidejs/react-splide";
// import '@splidejs/splide/dist/css/splide.min.css';
import { useContext } from "react";
import HeroContext from "../contexts/HeroContext";
// import { HeroContextInterface } from "../contexts/HeroContext";

interface HeroProps {
  searchValue: string;
}


const Hero = ({ searchValue }: HeroProps) => {

  const products = useContext(HeroContext)
  const filteredProducts = searchValue !== "" ? 
    products?.filter((productsItem) => productsItem.name.toLowerCase().includes(searchValue.toLowerCase()))
    : products


  return (
    <Wrapper>
      {filteredProducts?.map((product) => {
        return <Card key={product.id}>
          <img src={product.image} alt="pics" />
          <p>{product.name}</p>
        </Card>
      })}
    </Wrapper>

  )
}

export default Hero;