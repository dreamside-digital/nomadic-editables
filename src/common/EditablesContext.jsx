import React, { createContext, useContext } from "react";
import { createUseStyles } from 'react-jss'

export const theme = {
  colors: {
    primary: "#FF6C45", // orange
    secondary: '#008080', // dark green
    light: "#EEEEEE", // light grey
    white: "#FDFDFD",
    dark: '#38302E',
    grey: '#ADADAD',
  },
  spacing: multiplier => (`${2**multiplier}px`),
  fontFamily: "Inconsolata, mono",
  fontSize: 14,
  editContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    border: "2px dashed #FF6C45",
    position: "relative",
    margin: '1px',
    marginBottom: '12px',
    borderRadius: '4px',
  },
  editContainerHighlight: {
    backgroundColor: "rgba(255,255,255,0.9)",
    zIndex: "2500",
    outline: "1px solid #FF6C45",
  },
  actions: {
    position: "absolute",
    right: "6px",
    bottom: "-12px",
    display: "flex",
    alignItems: "center",
    zIndex: "99",
    backgroundColor: "#FF6C45",
    borderRadius: "30px",
    padding: '2px',
    width: "fit-content",
    height: "fit-content",
  },
  button: {
    margin: '1px',
    border: "1px solid #000",
    color: "black",
    backgroundColor: "#fff",
    padding: "0.15rem 0.5rem",
    borderRadius: '4px',
    cursor: "pointer",
    display: "inline-flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Space Mono, mono",
    fontSize: "inherit",
    fontWeight: "700",
    "&:hover": {
      backgroundColor: "#eee"
    }
  }
};

export const makeStylesWithTheme = makeStyles => createUseStyles(makeStyles(theme));

export const EditablesContext = createContext({ showEditingControls: true, theme: theme });

export const EditablesProvider = ({ children, showEditingControls }) => {
  return (
    <EditablesContext.Provider value={{ showEditingControls, theme }}>
      {children}
    </EditablesContext.Provider>
  )
}

export const useEditables = () => useContext(EditablesContext)