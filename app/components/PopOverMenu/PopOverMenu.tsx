import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { IMenu } from '../../(portfolio)/helpers/TopNavMenu';
import { useRouter } from 'next/navigation'

interface PopOverMenuProps{
    menu:IMenu;
}
const  PopOverMenu=({menu}:PopOverMenuProps)=> {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const router = useRouter();

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    if(menu.requireNavigation){
      handleNavigationClick(menu.navigate);
    } else {
      setAnchorEl(event.currentTarget);
    }
    
  };
  const handleSubMenuClick = (subMenu:IMenu) => {
    setAnchorEl(null);
    if(subMenu.requireNavigation){
      handleNavigationClick(subMenu.navigate);
    }
  };

  const handleNavigationClick = (navigationURL:string)=>{
    router.push(navigationURL)
  }

  return (
    <div>
      <Button
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        variant='text'
        size='large'
      >
        {menu.name}
      </Button>
      {menu.subMenu.length >0 && 
      <Menu
      id="basic-menu"
      anchorEl={anchorEl}
      open={open}
      onClose={handleSubMenuClick}
      MenuListProps={{
        'aria-labelledby': 'basic-button',
      }}
    >
    {menu.subMenu.map((submenu,index)=> <MenuItem key={index} onClick={()=>handleSubMenuClick(submenu)}>{submenu.name}</MenuItem>)}
    </Menu>
      }
      
    </div>
  );
}
export default PopOverMenu;