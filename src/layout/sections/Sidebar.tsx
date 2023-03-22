import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { MenuTypes } from "../../@types/types";
import SVG from "../../components/SVG";
import menuItems from "./menu.json";

export default function Sidebar() {

  const url = useLocation();
  
  const [menu, setMenu] = useState(menuItems);
  const [toggleDropdown, setToggleDropdown] = useState<String | undefined>(url.pathname);
  const [activeMenu, setActiveMenu] = useState<String | undefined>("");
  useEffect(() => {
    setActiveMenu(url.pathname);
  }, [url.pathname]);

  console.log("url pathname ==>> ", activeMenu);
  

  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 mt-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
      >
        <span className="sr-only">Open sidebar</span>
        <SVG type="feather" icon="menu" />
      </button>
      <aside
        id="default-sidebar"
        className="fixed top-0 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0"
        aria-label="Sidebar"
      >
        <div className="h-full py-4 px-2 overflow-y-auto bg-slate-900 dark:bg-gray-800">
          <ul className="space-y-2">
            {menu &&
              menu.map((item, idx) => (
                <React.Fragment key={idx}>
                  {
                    item.menuHeader &&
                    <h6 className="font-semibold text-[14px] pt-5 pb-2 px-3 text-slate-400">{item.menuHeader}</h6>
                  }
                  {
                    !item.menuHeader &&
                      <li 
                        className={`flex flex-col rounded-lg text-white hover:bg-slate-800 cursor-pointer px-3 py-2 ${(item.url == toggleDropdown || item.slug == activeMenu) ? 'bg-slate-800 text-white' : ''}`}                         
                        onClick={() => {
                          if(toggleDropdown == item.slug) {
                            setToggleDropdown("");
                            // setActiveMenu("");
                          } else {
                            setToggleDropdown(item.slug);
                            setActiveMenu(item.url);
                          }
                        }}
                      >
                        <a
                          href={item?.url ? item?.url : "#"}
                          className="flex items-center"
                        >
                          <SVG type={item?.type} icon={item?.icon} />
                          <span className="ml-3 text-[15px]">{item?.name}</span>
                          {
                            item.submenu && 
                            <SVG type={'bootstrap'} icon={'chevron-down'} sizeClass='child_icon ml-auto block' />
                          }
                        </a>

                        {
                          item?.submenu && 
                          <ul className={`space-y-1 overflow-hidden transition-all duration-300 ${(item.slug == toggleDropdown || item?.submenu?.filter((u: MenuTypes)  => u.url == activeMenu).length > 0) ? "max-h-80 py-2" : "max-h-0"}`}>
                            {
                              item?.submenu?.map((subItem, ind) => (
                                <li key={ind}>
                                  <a
                                    href={subItem?.url}
                                  className={`pl-6 flex items-center px-2 py-1.5 text-sm font-normal text-white rounded-lg hover:bg-slate-700 ${subItem.url == activeMenu ? 'bg-slate-700' : ''}`}
                                  >
                                    <SVG type={'bootstrap'} icon={'circle'} sizeClass={'child_icon mr-2'} />
                                    {subItem?.name}
                                    </a>
                                </li>
                              ))
                            }
                          </ul>
                        }

                      </li>
                  }
                </React.Fragment>
              ))}
          </ul>
        </div>
      </aside>      
    </>
  );
}
