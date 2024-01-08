import { Email, GitHub, LinkedIn, Telegram } from '@mui/icons-material';
import styled from 'styled-components';

export const StyledFooter = styled.footer`
  padding: 8px 20px;
  margin-top: 20px;
  background: rgba(133, 255, 250, 0.12);
  border-radius: 8px;
  box-shadow: rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px;
  border: 1px solid rgba(133, 255, 250, 0.3);
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const OwnerName = styled.span`
display: block;
`

export const SocialElement = styled.li`
  cursor: pointer;
`;

export const SocialUl = styled.ul`
  display: flex;
  gap: 10px;
  list-style: none;
`;

export const LinkedInIcon = styled(LinkedIn)`
  color: black;
`;

export const TelegramInIcon = styled(Telegram)`
  color: black;
`;
export const GitHubIcon = styled(GitHub)`
  color: black;
`;
export const MailInIcon = styled(Email)`
  color: black;
`;
