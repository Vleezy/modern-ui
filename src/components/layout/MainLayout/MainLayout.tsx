import React from "react";
import Sidebar from "../Sidebar";
import Backdrop from "../Backdrop";
import Header from "../Header";
import BottomNavigation from "components/layout/BottomNavigation";

interface MainLayoutProps {
  sidebarVisible: boolean;
  setSidebarVisible: (visible: boolean) => void;
  headerVisible: boolean;
  isHomepage: boolean;
  children?: React.ReactNode;
  setTab: (tab: string) => void;
}

const MainLayout: React.FC<MainLayoutProps> = ({
  sidebarVisible,
  setSidebarVisible,
  headerVisible,
  isHomepage,
  children
}) => {
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
