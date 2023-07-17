
import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/Kenogames.loader.js",
    dataUrl: "buildUnity/Kenogames.data.unityweb",
    frameworkUrl: "buildUnity/Kenogames.framework.js.unityweb",
    codeUrl: "buildUnity/Kenogames.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App


//dev command : npm run dev
//test with the smaller "flagbuild" files. 