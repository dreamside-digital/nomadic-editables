import React from "react";
import PropTypes from "prop-types";
import Editable from "common/Editable";
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  iframeContainer: props => ({
    position: "relative",
    paddingBottom: `${props.ratio}%`,
    height: 0,
    overflow: "hidden",
    width: "100%",
    maxWidth: "100%",
  }),
  iframe: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  }
}))

const EmbeddedIframe = ({ content, onSave, ...props }) => {
  const { src, height, width, allowFullScreen, title } = content;
  const ratio = (parseInt(height) / parseInt(width)) * 100
  const classes = useStyles({ ratio })

  return (
    <Editable
      loader={() => import("editingTools/EmbeddedIframeEditor")}
      onSave={onSave}
      content={{ ...content }}
      {...props}
    >
      <div className={classes.iframeContainer}>
        <iframe
          title={title}
          src={src}
          className={classes.iframe}
          allowFullScreen={allowFullScreen==='true'}
          height={`${height}px`}
          width={`${width}px`}
          title={title}
          frameBorder="0"
        />
      </div>
    </Editable>
  );
};

EmbeddedIframe.propTypes = {
  content: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    allowFullScreen: PropTypes.boolean,
    title: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired,
}

EmbeddedIframe.defaultProps = {
  content: {
    src: 'https://www.youtube.com/embed/5qap5aO4i9A',
    height: '300',
    width: '560',
    title: 'Lofi hip hop radio',
  },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default EmbeddedIframe;
