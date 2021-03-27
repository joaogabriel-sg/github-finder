import React from 'react';
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

const Profile = () => {
  const githubUser = {
    avatar_url: 'https://avatars.githubusercontent.com/u/74667683?v=4',
    login: 'joaogabriel-sg',
    name: 'João Gabriel',
    followers: 27,
    following: 43,
    company: null,
    location: 'Ceará, BR',
    blog: 'https://github.com/joaogabriel-sg',
  };

  return (
    <Container>
      <Header>
        <Avatar src={githubUser.avatar_url} alt={githubUser.name} />
        <Login>{githubUser.login}</Login>
        <Name>{githubUser.name}</Name>
      </Header>
      <Content>
        <Data>
          <IoPeople size={16} /> {githubUser.followers} followers &middot;{' '}
          {githubUser.following} following
        </Data>
        {githubUser.company && (
          <Data>
            <IoBusiness size={16} /> {githubUser.company}
          </Data>
        )}
        {githubUser.location && (
          <Data>
            <IoLocation size={16} /> {githubUser.location}
          </Data>
        )}
        {githubUser.blog && (
          <Data>
            <IoLink size={16} />
            <a href={githubUser.blog} target="_blank" rel="noreferrer">
              {githubUser.blog}
            </a>
          </Data>
        )}
      </Content>
    </Container>
  );
};

export default Profile;
