import React from "react";
import PropTypes from "prop-types";
import Editable from "common/Editable";
import { makeStylesWithTheme } from 'common/EditablesContext'

const useStyles = makeStylesWithTheme(theme => ({
  iframeContainer: props => ({
    position: "relative",
    overflow: "hidden",
    height: props.height,
    width: props.width,
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

const ResponsiveIframe = ({ content, onSave, ...props }) => {
  const { src, height, width, allowFullScreen, title } = content;
  const classes = useStyles({ height, width })

  console.log("responsive iframe props", props)
  console.log("responsive iframe content", content)

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
          height={`100%`}
          width={`100%`}
          title={title}
          frameBorder="0"
        />
      </div>
    </Editable>
  );
};

ResponsiveIframe.propTypes = {
  content: PropTypes.shape({
    src: PropTypes.string,
    height: PropTypes.string,
    width: PropTypes.string,
    allowFullScreen: PropTypes.boolean,
    title: PropTypes.string
  }).isRequired,
  onSave: PropTypes.func.isRequired,
}

ResponsiveIframe.defaultProps = {
  content: {
    src: 'https://www.youtube.com/embed/5qap5aO4i9A',
    height: '315',
    width: '560',
    title: 'Lofi hip hop radio',
  },
  onSave: newContent => console.log('Implement a function to save changes!', newContent),
}

export default ResponsiveIframe;
