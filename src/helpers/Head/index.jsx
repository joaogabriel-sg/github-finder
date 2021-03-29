import { useEffect } from 'react';
import PropTypes from 'prop-types';

const Head = ({ title, description }) => {
  useEffect(() => {
    document.title = `GitHub Finder ${title ? `| ${title}` : ''}`;

    document
      .querySelector('meta[name="description"]')
      .setAttribute('content', description || '');
  }, []);

  return null;
};

Head.proptypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default Head;
