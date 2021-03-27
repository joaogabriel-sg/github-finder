import React, { useState } from 'react';
import { IoSearch } from 'react-icons/io5';

import { Form, Input, Button } from './styles';

const SearchForm = () => {
  const [username, setUsername] = useState('');

  return (
    <Form>
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
