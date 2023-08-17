import styled from "styled-components"

import backgroundHome from "../../assets/img/backgroundHome.jpg"


export const HomeStyles = styled.main`
    height: 100vh;
    background-image: url(${backgroundHome});
    background-size: cover;
    background-position: center center;
    padding-top: 10%;
    .home-container{
        display: flex;
        flex-direction: row;
    }
    .div-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        margin-left: 10%;
    }
    .img-container{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
    img {
        width: 50%;
    }
   .text-container h1{
        color: #FFF;
        font-family: Teko;
        font-size: 55px;
        font-style: normal;
        font-weight: 700;
        line-height: 120%;
        text-align: center;
        
    }
   
`