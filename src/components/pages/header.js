import React from "react";
import NavTabs from "../NavTabs";

export default function Header(props) {
  const { currentTab, setCurrentTab } = props;

  return (
    <header>
      <div>
        <h2>React Portfolio</h2>
      </div>
      <div>
        <NavTabs
          currentTab={currentTab}
          setCurrentTab={setCurrentTab}
        ></NavTabs>
      </div>
    </header>
  );
}
