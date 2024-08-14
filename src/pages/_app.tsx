import { AppProps } from 'next/app';
import Footer from "@/components/Footer";
import Header from '../components/Header';
import '../app/globals.css';
import { Provider } from 'react-redux';
import store from '@/redux/store';

const MyApp = ({ Component, pageProps }: AppProps) => {
  return (
    <div className="flex flex-col h-screen">
        <Provider store={store}>

      <Header />
      <main className="flex-grow bg-gray-100">
            <Component {...pageProps} />
      </main>
      <Footer/>
      </Provider>
    </div>
  );
};

export default MyApp;

