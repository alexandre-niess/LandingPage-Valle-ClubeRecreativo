import React, { createContext, useState, useEffect } from "react";

export const IframeContext = createContext();

export const IframeProvider = ({ children }) => {
  const [iframeLoaded, setIframeLoaded] = useState(false);
  const [showIframe, setShowIframe] = useState(false);

  // Assim que a página carregar, o iframe já começa a carregar
  useEffect(() => {
    setIframeLoaded(true);
  }, []);

  // Função para mostrar o iframe instantaneamente
  const handleShowIframe = () => {
    setShowIframe(true);
  };

  return (
    <IframeContext.Provider
      value={{ iframeLoaded, showIframe, setShowIframe, handleShowIframe }}
    >
      {children}
    </IframeContext.Provider>
  );
};
