import React, { createContext, useContext } from "react";
import { createUseStyles } from 'react-jss'

export const theme = {
  colors: {
    primary: "#F18664", // orange
    secondary: '#008080', // dark green
    light: "#EEEEEE", // light grey
    white: "#FDFDFD",
    dark: '#38302E',
    grey: '#ADADAD',
    darkgrey: '#525252',
    error: '#83280C',
    inputBackground: 'rgba(255,255,255,0.8)',
  },
  spacing: multiplier => (`${2**multiplier}px`),
  fontFamily: "Inconsolata, mono",
  fontSize: 14,
  editContainer: {

  },
  editContainerHighlight: {
    backgroundColor: "rgba(255,255,255,0.9)",
    zIndex: "2500",
    outline: "1px solid #F18664",
  },
  actions: {
    position: "absolute",
    right: "6px",
    bottom: "-12px",
    display: "flex",
    alignItems: "center",
    zIndex: "99",
    backgroundColor: "#F18664",
    borderRadius: "30px",
    padding: '2px',
    width: "fit-content",
    height: "fit-content",
  },
  button: {
    margin: '1px',
    border: "1px solid #38302E",
    color: "#38302E",
    backgroundColor: "#FDFDFD",
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
      backgroundColor: "#EEEEEE"
    }
  }
};

export const makeStylesWithTheme = makeStyles => createUseStyles(makeStyles(theme), { link: true });

export const EditablesContext = createContext({
  showEditingControls: true,
  theme
});

export const EditablesProvider = ({ children, showEditingControls }) => {
  return (
    <EditablesContext.Provider value={{ showEditingControls, theme }}>
      {children}
    </EditablesContext.Provider>
  )
}

export const useEditables = () => useContext(EditablesContext)