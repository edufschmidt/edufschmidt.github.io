import styled from '@emotion/styled';
import { StackOverflowIcon, LinkedInIcon, GoogleScholarIcon, GitHubIcon, EmailIcon } from '../assets/icons';

const Root = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 10px;

    a {
        padding: 2px;
        border-radius: 50%;
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
        height: 40px;
        width: 40px;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    > a:hover {
        transform: scale(1.1);
        box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1px 3px 0 rgba(0, 0, 0, 0.1);
    }
`;



const SocialLinks = () => {
    return (
        <Root>
            <a href="mailto:edufschmidt@gmail.com" target="_blank" rel="noreferrer">
                <EmailIcon />
            </a>
            <a href="https://github.com/edufschmidt" target="_blank" rel="noreferrer">
                <GitHubIcon />
            </a>
            <a href="https://linkedin.com/in/eduardo-schmidt" target="_blank" rel="noreferrer">
                <LinkedInIcon />
            </a>
            <a href="https://stackoverflow.com/users/3422069/edu" target="_blank" rel="noreferrer">
                <StackOverflowIcon />
            </a>
            <a href="https://scholar.google.com/citations?user=QihL5UcAAAAJ&hl" target="_blank" rel="noreferrer">
                <GoogleScholarIcon />
            </a>
        </Root>
    );
};

export default SocialLinks;