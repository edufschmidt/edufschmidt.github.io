import styled from "@emotion/styled"
import SocialLinks from "../components/SocialLinks"

const Root = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 48px;
`

const Subtitle = styled.span`
    font-size: 16px;
    color: #666;
    margin-bottom: 40px;
`

const Photo = styled.img`
    width: 120px;
    height: 120px;
    border-radius: 50%;
`

const Home = () => <Root>
    <Photo src="https://avatars.githubusercontent.com/u/7011650?v=4" alt="Eduardo Schmidt" />
    <Title>Hey, I'm Eduardo</Title>
    <Subtitle>Welcome to my personal page!</Subtitle>
    <SocialLinks />
</Root>

export default Home