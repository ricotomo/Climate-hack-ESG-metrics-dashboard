import React from "react";
import { withRouter } from "react-router-dom";
import { useHistory } from "react-router";

import { Button } from "@progress/kendo-react-buttons";
import { Drawer, DrawerContent } from "@progress/kendo-react-layout";
import { DrawerSelectEvent } from "@progress/kendo-react-layout/dist/npm/drawer/interfaces/DrawerSelectEvent";



const items = [
  { text: "Home", icon: "k-i-home", route: "/", children: null },
  { text: "About", icon: "k-i-question", route: "/", children: null },
  { text: "Contact", icon: "k-i-email", route: "/", children: null },
  { text: "Find us on LinkedIn", icon: "k-i-linkedin-box", route: "/", children: null },
  { text: "Find us on Facebook", icon: "k-i-facebook", route: "/tech-fund", children: null }
];

const DrawerRouterContainer = (props: React.PropsWithChildren<any>) => {
  const history = useHistory();
  const [expanded, setExpanded] = React.useState(false);
  const [selectedId, setSelectedId] = React.useState(0);

  const onSelect = (e: DrawerSelectEvent) => {
    setSelectedId(e.itemIndex);
    setExpanded(false);
    history.push(e.itemTarget.props.route);
    // this.props.history.push(e.itemTarget.props.route);
  }
  const closeDrawer = () => {
    setExpanded(true);
  }
  const toggleDrawer = () => {
    setExpanded(currentExpanded => {
      return !currentExpanded;
    });
  }

  return (
    <div>
      <Drawer
        expanded={expanded}
        items={items.map(
          (item) => ({ ...item, selected: items[selectedId].text === item.text }))}
        onSelect={onSelect}
        animation={{ duration: 400 }}
        position="start"
        onOverlayClick={closeDrawer}
      >
        <DrawerContent>
          <div className="header">
            <h1>
              <span>
                <Button icon="menu" look="flat" onClick={toggleDrawer} />
                {/* <img src="../../public/logo.png" alt="Logo" /> */}
                <span className="title">
                  TransCircular
                  <span className="divider">|</span>
                  <span className="fund">Product Dashboard</span>
                </span>
              </span>
    
            </h1>
          </div>
          {props.children}
        </DrawerContent>
      </Drawer>
    </div>
  );
}

export default withRouter(DrawerRouterContainer);
