import React from 'react';
import PropTypes from 'prop-types'
import BlockContent from '@sanity/block-content-to-react';
import { css } from '@emotion/core'

const imageContainer = css`
  width: 100%;
  display: flex;
  justify-content: center;
  align-content: center;
  margin: 1rem 0;
  img {
    max-width: 500px;
  }
`;

const serializers = {
  marks: {
    link: ({ mark, children }) => {
      const { blank, href } = mark
      return blank ?
        <a href={href} target="_blank" rel="noopener">{children}</a>
        : <a href={href}>{children}</a>
    },
  },
  types: {
    image: ({ node }) => {
      // console.log(props)
      const { url, originalFilename } = node?.asset;
      return (
        <div css={imageContainer}>
          <img src={url} alt={originalFilename} width='100%'></img>
        </div>
      )
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