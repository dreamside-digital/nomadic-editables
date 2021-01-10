import React, { createContext, useContext } from "react";

export const theme = {
  primaryColor: "#FF6C45", // orange
  secondaryColor: 'black',
  lightColor: "#E5E5E5", // light grey
  fontFamily: "Space Mono, mono",
  fontSize: 14,
  editContainer: {
    backgroundColor: "rgba(255,255,255,0.3)",
    outline: "2px dashed #FF6C45",
    position: "relative",
    cursor: "pointer",
    margin: '1px',
    marginBottom: '12px'
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
    height: "20px",
    width: "20px",
    padding: "2px",
    borderRadius: "30px",
    cursor: "pointer",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontFamily: "Space Mono, mono",
    fontSize: "18px",
    "&:hover": {
      backgroundColor: "#eee"
    }
  }
};

export const EditablesContext = createContext({ showEditingControls: true, theme: theme });

export const EditablesProvider = ({ children, showEditingControls }) => {
  return (
    <EditablesContext.Provider value={{ showEditingControls, theme }}>
      {children}
    </EditablesContext.Provider>
  )
}

export const useEditables = () => useContext(EditablesContext)