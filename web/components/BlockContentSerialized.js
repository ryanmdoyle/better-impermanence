import React from 'react';
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react';

const serializers = {
  marks: {
    link: ({ mark, children }) => {
      console.log(mark, children)
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    }
  }
}

const BlockContentSerialized = ({ blocks }) => {
  return (
    <BlockContent blocks={blocks} serializers={serializers} />
  );
};

export default BlockContentSerialized;

BlockContentSerialized.propTypes = {
  blocks: PropTypes.array.isRequired,
}