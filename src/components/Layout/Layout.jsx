import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { motion } from 'framer-motion/dist/es/index';

import './Layout.css';

const variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const Layout = ({ children }) => {
  return (
    <motion.div initial='hidden' animate='visible' variants={variants}>
      <Header />
      <div className='children-container'>{children}</div>
      <Footer />
    </motion.div>
  );
};

export default Layout;
