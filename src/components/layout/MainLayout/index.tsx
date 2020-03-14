import BottomNavigation from 'components/layout/BottomNavigation';
import Header from 'components/layout/Header';
import React, { useState } from 'react';
import Helmet from 'react-helmet';

import Backdrop from '../../Backdrop';
import Sidebar from '../Sidebar';

interface IMainLayoutProps {
  headerVisible?: boolean;
  headerTransparent?: boolean;
  isHomepage?: boolean;
  children?: React.ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  const {
    headerVisible = true,
    isHomepage = false,
    children,
    headerTransparent = false
  } = props;
  const [sidebarVisible, setSidebarVisible] = useState(false);
  return (
    <>
      <Helmet>
        <title>Modern UI</title>
        <meta
          name="description"
          content="This is the description of the app."
        ></meta>
      </Helmet>
      <div id="main-layout">
        <Sidebar
          sidebarVisible={sidebarVisible}
          toggleSidebar={setSidebarVisible}
        />
        {sidebarVisible && (
          <>
            <Backdrop callback={() => setSidebarVisible(false)} />
          </>
        )}
        {headerVisible && (
          <Header
            headerTransparent={headerTransparent}
            toggleSidebar={setSidebarVisible}
            isHomepage={isHomepage}
          />
        )}
        <div className="max-w-4xl mx-auto flex flex-col mt-2">{children}</div>
        <BottomNavigation />
      </div>
    </>
  );
};

export default MainLayout;
