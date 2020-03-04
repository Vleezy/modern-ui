import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Backdrop from "../../Backdrop";
import BottomNavigation from "components/layout/BottomNavigation";
import Header from "components/layout/Header";
import Helmet from "react-helmet";

interface IMainLayoutProps {
  headerVisible?: boolean;
  isHomepage?: boolean;
  children?: React.ReactNode;
}

const MainLayout = (props: IMainLayoutProps) => {
  const { headerVisible = true, isHomepage = false, children } = props;
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
          <Header toggleSidebar={setSidebarVisible} isHomepage={isHomepage} />
        )}
        <div className="max-w-4xl mx-auto flex flex-col">
          <div className="hidden lg:flex w-full p-1 justify-between mt-2 lg:mt-0 rounded">
            <div></div>
            <div className="flex justify-end"></div>
          </div>
          {children}
        </div>
        <BottomNavigation />
      </div>
    </>
  );
};

export default MainLayout;
