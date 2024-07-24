import React from 'react';
import styled from 'styled-components'

const StyledCard = styled.div`
    position: relative;


`
const CardImage = styled.div`
    height: 100%;
    width: 100%;
    border-radius: 8px ;
`
const CardImg = styled.img`
    display: block;
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: inherit;
`

const CardContent = styled.div`
    position: absolute;
    width: calc(100% - 36px);
    left: 50%;
    transform: translate(-50%,50%);
    background-color: ${props => props.theme.color.white};;
    z-index: 10;
    border-radius:20px;
    padding: 20px;
    bottom: 0;
`

const CardTop = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 30px;
`
const CardUser = styled.div`
    display: flex;
    align-items: center;
    column-gap: 12px;
`
const UserAvt = styled.img`
    width: 30px;
    height: 30px;
    border-radius: 100rem;
    object-fit: cover;
    flex-shrink: 0;
`
const CardFooter = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
`
const CardTitle = styled.h3`
    font-size: 18px;
    font-weight: 600;
    color: black;
`

const CardAmount = styled.span`
    font-size: 18px;
    font-weight: bold;
    background: linear-gradient(86.88deg, #7D6AFF 1.38%, #FFB86C 64.35%, #FC2872 119.91%);
    color: transparent;
    -webkit-background-clip: text;
    background-clip: text;
`
const UserName = styled.span`
    font-weight: 300;
    font-size: 16px;
    color: #333;
`

const UserMeta = styled.div`
    display:flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`
const Card = () => {
    return (

        <StyledCard>
            <CardImage>
                <CardImg src='https://cdn.dribbble.com/userupload/15691805/file/original-925419340784d350019770f349fad62c.png?resize=400x300&vertical=center'></CardImg>
            </CardImage>
            <CardContent>
                <CardTop>
                    <CardUser>
                        <UserAvt src='https://cdn.dribbble.com/userupload/15691805/file/original-925419340784d350019770f349fad62c.png?resize=400x300&vertical=center'>
                        </UserAvt>
                        <UserName>@zndrson</UserName>
                    </CardUser>
                    <UserMeta>
                        <img src='/icon-heart.svg'></img>
                        <span>256</span>
                    </UserMeta>
                   
                </CardTop>
                <CardFooter>
                    <CardTitle>Cosmic Perspective</CardTitle>
                    <CardAmount>12,000 PSL</CardAmount>
                </CardFooter>
            </CardContent>
        </StyledCard>

    );
};

export default Card;