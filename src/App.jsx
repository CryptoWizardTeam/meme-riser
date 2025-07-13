import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import PromoBar from "./components/shared/PromoBar";
import HomePage from "./pages/HomePage";
import Footer from "./components/shared/Footer";
import { WalletModalProvider, WalletDisconnectButton, WalletModalButton } from '@solana/wallet-adapter-react-ui';
import '@solana/wallet-adapter-react-ui/styles.css';
import { WalletConnectProvider } from "./providers/WalletConnectProvider";

function App() {
  return (
    <WalletConnectProvider> 
      <WalletModalProvider>
        <Router>
            <PromoBar />
            <Routes>
              <Route path="/" element={<HomePage />} />
            </Routes>
            <Footer/>
        </Router>
      </WalletModalProvider>
    </WalletConnectProvider>
    
  );
}

export default App;
