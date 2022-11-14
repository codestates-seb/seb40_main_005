import type { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from 'react-query';
import { RecoilRoot } from 'recoil';
import "../styles/globals.css";
import Home from "../pages/index";

const App = ({ Component, pageProps }: AppProps) => {
  const queryClient = new QueryClient();

  return (
    <>
  <QueryClientProvider client={queryClient}>
      <RecoilRoot>
      {/* <Home/> */}
        <Component {...pageProps} />
      </RecoilRoot>
    </QueryClientProvider>
  </>
  )
  ;
};

export default App;


