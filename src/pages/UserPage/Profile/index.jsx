import React, { useContext } from 'react';
import { IoPeople, IoBusiness, IoLocation, IoLink } from 'react-icons/io5';

import {
  Container,
  Header,
  Avatar,
  Login,
  Name,
  Content,
  Data,
} from './styles';

import { GithubUserContext } from '../../../contexts/GithubUser';

const Profile = () => {
  const { profileData } = useContext(GithubUserContext);

  return (
    <Container>
      <Header>
        <Avatar src={profileData.avatar_url} alt={profileData.name} />
        <Login>{profileData.login}</Login>
        <Name>{profileData.name}</Name>
      </Header>
      <Content>
        <Data>
          <IoPeople size={16} /> {profileData.followers} followers &middot;{' '}
          {profileData.following} following
        </Data>
        {profileData.company && (
          <Data>
            <IoBusiness size={16} /> {profileData.company}
          </Data>
        )}
        {profileData.location && (
          <Data>
            <IoLocation size={16} /> {profileData.location}
          </Data>
        )}
        {profileData.blog && (
          <Data>
            <IoLink size={16} />
            <a
              href={
                /http(s?):\/\//.test(profileData.blog)
                  ? profileData.blog
                  : `https://${profileData.blog}`
              }
              target="_blank"
              rel="noreferrer"
            >
              {profileData.blog}
            </a>
          </Data>
        )}
      </Content>
    </Container>
  );
};

export default Profile;
