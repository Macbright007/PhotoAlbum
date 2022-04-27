import Hero from "../components/Hero";
import { useState } from "react"
import Navbar from "../components/Navbar";
import Search from "../components/Search";
import { Container } from "../components/Style";

const Main = () => {
    const [searchWord, setSearchWord] = useState<string>("")

    const handleSearchChange = (val: string) => {
        setSearchWord(val)
    }
    return (
        <Container>
            <Navbar />
            <Search value={searchWord} onChange={handleSearchChange}/>
            <Hero searchValue={searchWord} />
        </Container>
    )
}

export default Main