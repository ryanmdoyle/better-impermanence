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
  .img-wrapper {
    max-width: 500px;
  }
  img {
    width: 100%;
    height: auto;
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
    "c5daa9e645e4": () => null,
    "3cebc10a5360": () => null,
    "aee3945e09d5": () => null,
    "a72576b13bd4": () => null,
    "f317da9c391e": () => null,
    "29fc21b51b96": () => null,
    "445b2fb2a1db": () => null,
    "65f500bb7fb7": () => null,
  },
  types: {
    image: ({ node }) => {
      const { url, originalFilename } = node?.asset;
      return (
        <div css={imageContainer}>
          <div className='img-wrapper'>
            <img src={url} alt={originalFilename}></img>
          </div>
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