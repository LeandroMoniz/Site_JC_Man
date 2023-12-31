import styled from "styled-components"

export const FooterStyles = styled.footer`
background: linear-gradient(180deg, #A19E9E 0%, rgba(158, 158, 158, 0.00) 50%);

   .flex-container {
    background: #262626;
    height: 303px;
    display: flex;
    justify-content: space-evenly;

    @media (max-width: 425px) {
         flex-direction: column;
        }
   }
   /* logo */
   .img img {
      width: 130%;
      height: 130%;
   }
   .img{
      /* width: 30%; */
      padding: 2% 5% 5% 5%;
      @media (max-width: 768px) {
            display: none;
        }

   }
   /* Informação */
   .fullInfo {
      align-self: center;
      width: 40%;
      @media (max-width: 425px) {
        align-self: baseline;
         margin-left: 10%;
         width: 70%;
        }
   }

   .info{
         color: #172E4E;
         padding: 0% 0% 5% ;
         font-size: 2.6rem;
         font-family: 'Cinzel', serif ;
         font-weight: 400;
   }
   .email{
         padding: 3% 0% 3% 6%;
        font-size: 1rem;
   }
   .phone{
      padding-left: 6%;
      font-size: 1rem;
   }
   /* Rede Social */
   .rede {
      font-family: 'Cinzel', serif ;
      font-weight: 400;
      align-self: center;
      width: 40%;
      @media (max-width: 425px) {
         align-self: baseline;
         width: 70%;
        }
   }
   .rede a{
      padding: 3%;
   }
   .social-media{
      margin-left: 10%;
   }
   .rede h1{
      color: #172E4E;
      padding: 0% 3% 1% 0%;
   }
   .rede h2{
      padding: 0% 0% 1% 8%;
   }
   .rede p{
      color: #172E4E;
      padding: 1% 0% 5% 10%;
      @media (max-width: 768px) {
            display: none;
        }
   }
   /* bass track */
   .bass {
    height: 50px;
    background: #172E4E;
   }
`