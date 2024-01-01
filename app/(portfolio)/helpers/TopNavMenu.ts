export interface IMenu{
    name:string;
    subMenu:IMenu[];
    navigate:string;
    requireNavigation:boolean;
}

export const MenuList:IMenu[] =[
    {
        name:'Home',
        subMenu:[],
        navigate:'/home',
        requireNavigation:true
    },
    {
        name:'About',
        subMenu:[],
        navigate:'/about',
        requireNavigation:true
    },

    {
        name:'Skills',
        subMenu:[],
        navigate:'/skills',
        requireNavigation:true
    },
    {
        name:'Projects',
        subMenu:[],
        navigate:'/projects',
        requireNavigation:true
    },
    {
        name:'Contact',
        subMenu:[],
        navigate:'/contact',
        requireNavigation:true
    }
]