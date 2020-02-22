import React, { useState } from "react";
import Sidebar from "../Sidebar";
import Backdrop from "../../Backdrop";
import BottomNavigation from "components/layout/BottomNavigation";
import Header from "components/layout/Header";

interface MainLayoutProps {
  headerVisible?: boolean;
  isHomepage?: boolean;
  children?: React.ReactNode;
}

const MainLayout = (props: MainLayoutProps) => {
  const { headerVisible = true, isHomepage = false, children } = props;

  const [sidebarVisible, setSidebarVisible] = useState(false);

  return (
    <div id="main-layout">
      <Sidebar
        sidebarVisible={sidebarVisible}
        toggleSidebar={setSidebarVisible}
      />
      {sidebarVisible ? (
        <>
          <Backdrop callback={() => setSidebarVisible(false)} />
        </>
      ) : null}
      {headerVisible && (
        <Header toggleSidebar={setSidebarVisible} isHomepage={isHomepage} />
      )}
      <div className="max-w-4xl mx-auto">
        <div className="hidden lg:flex w-full p-1 justify-between mt-2 lg:mt-0 rounded">
          <div></div>
          <div className="flex justify-end"></div>
        </div>
        {children}
      </div>
      <BottomNavigation />
    </div>
  );
};

export default MainLayout;
