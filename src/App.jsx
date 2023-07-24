
import React from 'react'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
  const { unityProvider } = useUnityContext({
    loaderUrl: "buildUnity/DinoKeno.loader.js",
    dataUrl: "buildUnity/DinoKeno.data.unityweb",
    frameworkUrl: "buildUnity/DinoKeno.framework.js.unityweb",
    codeUrl: "buildUnity/DinoKeno.wasm.unityweb",
  });

  return <Unity unityProvider={unityProvider} />;
}

export default App


//dev command : npm run dev
//test with the smaller "flagbuild" files. 