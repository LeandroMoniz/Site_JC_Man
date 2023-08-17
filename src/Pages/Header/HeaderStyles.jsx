import styled from "styled-components"

export const HeaderStyles = styled.header`
@media (max-width: 768px){
    background: #262626;
    display: flex;
    justify-content: center;

}
    .flex-container{
    background: #262626;
    border-radius: 0px 0px 20px 20px; 
    box-shadow: 0px 4px 4px 0px rgba(0, 0, 0, 0.25);
    display: flex;
    justify-content: space-evenly;
    position: fixed;
    width: 100%;
}
.logo{
    width:10%;
    margin-left: 5%;
}
.logo img{
    width: 80%;
}

.link{
    width: 50%;
    display: flex;
    justify-content: center;
    align-self: center;  
    font-family: 'Cinzel', serif ;
    font-weight: 400;
    font-size: 1.2rem;
}
.link a {
    margin: 0 10px;
    padding: 5px;
    text-decoration: none;
    color: #fff;
}

.link a:hover {
    color: #ccc;
}

.whats {
    width: 20%;
    display: flex;
    justify-content: center;
    align-self: center; 
}
.mobile_header {
        display: none; }

@media (max-width: 768px) {
        .nav-bar {
            display: none;
        }
        .mobile_header {
            display: flex;
            justify-content: center;
            align-items: center;
            align-self: center; 
            
        }
        .mobile {
            color: #ffffff;
            width: 40%;
        }
        .mobile_header img {
            height: 70%;
            width: 70%;
            padding: 1% 2% 0% 2%;
        }
    }



`