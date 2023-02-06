import styled from "@emotion/styled"

const Root = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
`

const Title = styled.h1`
    font-size: 48px;
`

const Text = styled.p`
    font-size: 16px;
    color: #666;
    text-align: justify;
    line-height: 1.5;
`


const About = () => <Root>
    <Title>About me</Title>
    <Text>
        I am an engineer with a strong theoretical background and over 7 years of software development experience.
        I earned both my B.Sc. and M.Sc. degrees from the Federal University of Santa Catarina (UFSC), one of the most prestigious engineering schools in South America. During my years as an undergraduate I have also spent some time abroad as a visiting student at Brown University.
    </Text>
    <Text>
        I am proficient in Golang, Python, and Typescript, and passionate about the intersection of mobile robotics, machine learning, and computer vision. My interests include large-scale, distributed systems and infrastructure, and I am an open-source enthusiast and former startup founder. I am a highly adaptable professional, with a proven ability to quickly learn new concepts and navigate between diverse domains. I am also a skilled communicator, with a strong track record of collaborating effectively with people from various backgrounds and levels of expertise. I am a dual citizen of Brazil and the EU, bringing a unique cultural perspective to international projects and cross-functional teams. I am always seeking opportunities to leverage my versatility and expertise to drive results and make a meaningful impact.
    </Text>
    <Text>
        I grew up in Ijuí, a small city in the south of Brazil, but lived in Porto Alegre, Florianópolis, Providence, Berlin and, more recently, in Luxembourg. In my spare time, I enjoy reading, hanging out with friends, playing footbal, biking, and programming.

    </Text>
</Root>

export default About