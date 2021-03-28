import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { IoSearch } from 'react-icons/io5';

import { Form, Input, Button } from './styles';

import { GithubUserContext } from '../../../contexts/GithubUser';

const SearchForm = () => {
  const [username, setUsername] = useState('');
  const { getGithubUser } = useContext(GithubUserContext);
  const history = useHistory();

  function handleSubmitForm(e) {
    e.preventDefault();
    if (username) {
      getGithubUser(username);
      setUsername('');
      history.push(`/user/${username}`);
    }
  }

  return (
    <Form onSubmit={handleSubmitForm}>
      <Input
        placeholder="username"
        value={username}
        onChange={({ target }) => setUsername(target.value)}
      />
      <Button>
        <IoSearch size={24} />
      </Button>
    </Form>
  );
};

export default SearchForm;
