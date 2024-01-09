import React from 'react';
import HomeBlockImg from '../../../media/images/phonebook_v2.jpg';
import {
  StyledHomeImg,
  StyledHomeText,
    StyledHomeDiv,
  StyledHomeList
} from './HomeContent.styled';

export default function HomeContent() {
  return (
    <StyledHomeDiv>
      <StyledHomeImg src={HomeBlockImg} alt="phonebook" />
      <StyledHomeText>
        {/* Wonderfull phonebook application for your daily needs! You can manage
        all your contacts in one place from anywhere in the world. Personal
        account makes your contacts private, secure and accessible only by its
        owner. Feel free to test out the functionality on the Login page where
        login details are pre-entered for you to check! */}
        <StyledHomeList>
          <li>
            📞 Unlock the Power of Connectivity with your Phone Book App! Looking
            for a seamless way to manage your contacts? Look no further! My
            cutting-edge phone book application is designed to simplify your
            life and keep your contacts organized.
          </li>
          <li>
            🌐 Accessible Anywhere, Anytime: Access your contacts from anywhere
            in the world. Whether you're at home, at the office, or on the go,
            your phone book is just a tap away.
          </li>
          <li>
            🔒 Privacy and Security: Your personal account ensures that your
            contacts are private and secure. Rest easy knowing that only you
            have access to your valuable connections.
          </li>
          <li>
            🚀 Effortless Management: Add, edit, or delete contacts with ease.
            A user-friendly interface makes managing your phone book a breeze,
            saving you time and effort.
          </li>
          <li>
            🔍 Quick Search: Find the right contact in seconds with our powerful
            search feature. No more scrolling endlessly – locate the information
            you need swiftly.
          </li>
          <li>
            📱 Try it Now – Hassle-Free Login: Explore the functionality with
            pre-entered login details on our Login page. Experience the
            convenience firsthand!
          </li>
        </StyledHomeList>
      </StyledHomeText>
    </StyledHomeDiv>
  );
}
