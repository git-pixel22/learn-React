import React, { useState, useEffect } from "react";
import { useNavigate } from 'react-router-dom';

import {
  Navbar,
  Collapse,
  Typography,
  List,
  ListItem,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
} from "@material-tailwind/react";
import {
  ChevronDownIcon,
} from "@heroicons/react/24/outline";
import {
  UserPlusIcon,
  ListBulletIcon,
  IdentificationIcon,
  UserGroupIcon,
  RectangleStackIcon,
  AdjustmentsVerticalIcon,
  CubeTransparentIcon,
  PlusIcon,
  ArrowLeftStartOnRectangleIcon,
} from "@heroicons/react/24/solid";

const navListMenuItems = [
  { title: "Invite People To EF", icon: UserPlusIcon },
  { title: "Manage Members", icon: ListBulletIcon },
  { title: "Manage Guests", icon: IdentificationIcon },
  { title: "Manage Teams", icon: UserGroupIcon },
  { title: "Manage Integrations", icon: RectangleStackIcon },
  { title: "Workspace Settings", icon: AdjustmentsVerticalIcon },
  { title: "Upgrade EF", icon: CubeTransparentIcon },
  { title: "Create New Workspace", icon: PlusIcon },
];

function NavListMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navigate = useNavigate();


  
  const handleItemClick = (title) => {
    if(title === "Manage Members") {
      navigate('/manage-members');
    }
  };

  const renderItems = navListMenuItems.map(({ icon: Icon, title }, key) => (
    <a href="#" key={key} onClick={() => handleItemClick(title)}>
      <MenuItem className="flex items-center gap-3 rounded-lg">
        <div className="flex items-center justify-center rounded-lg !bg-blue-gray-50 p-2">
          <Icon className="h-6 w-6 text-gray-900" />
        </div>
        <Typography variant="h6" color="blue-gray" className="text-sm font-bold">
          {title}
        </Typography>
      </MenuItem>
    </a>
  ));

  return (
    <>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        offset={{ mainAxis: 20 }}
        placement="bottom"
        allowHover={true}
      >
        <MenuHandler>
          <Typography as="div" variant="small" className="font-medium">
            <ListItem
              className="flex items-center gap-2 py-2 pr-4 font-medium text-gray-900"
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={() => setIsMobileMenuOpen((cur) => !cur)}
            >
              EF
              <ChevronDownIcon
                className={`h-3 w-3 transition-transform ${isMenuOpen ? "rotate-180" : ""} ${
                  isMobileMenuOpen ? "block lg:hidden" : "hidden lg:block"
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList className="hidden max-w-screen-xl rounded-xl lg:block">
          <ul className="grid grid-cols-3 gap-y-2">{renderItems}</ul>
        </MenuList>
      </Menu>
      <div className="block lg:hidden">
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </>
  );
}

function NavList() {
  return (
    <List className="mt-4 mb-6 p-0 lg:mt-0 lg:mb-0 lg:flex-row lg:p-1">
      <Typography as="a" href="#" variant="small" color="blue-gray" className="font-medium">
        <ListItem className="flex items-center gap-2 py-2 pr-4">
        
        <ArrowLeftStartOnRectangleIcon className="h-5 w-5" />

        </ListItem>
      </Typography>
      <NavListMenu />
    </List>
  );
}

export function NavbarWithMegaMenu() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => window.innerWidth >= 960 && setOpenNav(false);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Navbar className="mx-auto max-w-screen-xl px-4 py-2">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography as="a" href="#" variant="h6" className="mr-4 cursor-pointer py-1.5 lg:ml-2">
          <div className="hidden lg:block">
            <NavList />
          </div>
        </Typography>
      </div>
    </Navbar>
  );
}

export default NavbarWithMegaMenu;