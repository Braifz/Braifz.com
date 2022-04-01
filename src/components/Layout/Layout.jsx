import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './Layout.css';

const Layout = ({ children }) => {
  return (
    <main>
      <Header />
      <div className='children-container'>{children}</div>
      <Footer />
    </main>
  );
};

export default Layout;
