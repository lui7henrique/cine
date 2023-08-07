import "src/styles/globals.css";
import type { AppProps } from "next/app";
import { Space_Grotesk } from "next/font/google";

import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();
const font = Space_Grotesk({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <main className={font.className}>
        <Component {...pageProps} />
      </main>
    </QueryClientProvider>
  );
}
