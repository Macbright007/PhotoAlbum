import styled from "styled-components"


export const Container = styled.div`
    // background-color: red;
    width: 100%;
    max-width: 1500px;
`
export const Nav = styled.nav`
    padding: 10px;
    border-bottom: 2px solid gray;    
`
export const Card = styled.div`
    color: blue;
    font-weight: 700;
    border: 1px solid white;
    border-radius: 1rem;

    img{
        height: 15rem;
        width: 14rem;
        border-radius: 15px 50px;
        // max-height: 800rem;
        // transition-property: max-height;
        // transition-duration: 750ms;
        // transition-timing-function: linear;
    }
    img:hover {
        // max-height: 180px;
        cursor: pointer;
      }
`
export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(10rem, 1fr));
    min-height: 10rem;
    grid-gap: 6rem;
    margin-top: 60px;

    // @media(max-width: 1000px){
    //     grid-template-columns: 1fr 1fr; 
    // }
    @media(max-width: 750px){
        grid-gap: 8rem;
        img {
            height: 25rem;
            width: 18rem;
        }
    }
`

export const FormStyle = styled.form`
    position: relative;
    width: 100%;
    margin-top: 3rem;

    input{
        border: none;
        background: linear-gradient(35deg, #494949, #313131);
        font-size: 1.5rem;
        color: white;
        padding: 0.4rem 3rem;
        border-radius: 1rem;
        outline: none;
    }
`