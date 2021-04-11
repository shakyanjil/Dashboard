import React from 'react'
import CIcon from '@coreui/icons-react'

const _nav =  [
  {
    _tag: 'CSidebarNavItem',
    name: 'Dashboard',
    to: '/dashboard',
    icon: <CIcon name="cil-speedometer" customClasses="c-sidebar-nav-icon"/>,
    badge: {
      color: 'info',
      text: 'NEW',
    }
  },
  // {
  //   _tag: 'CSidebarNavTitle',
  //   _children: ['Theme']
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Colors',
  //   to: '/theme/colors',
  //   icon: 'cil-drop',
  // },
  // {
  //   _tag: 'CSidebarNavItem',
  //   name: 'Typography',
  //   to: '/theme/typography',
  //   icon: 'cil-pencil',
  // },
  {
    _tag: 'CSidebarNavTitle',
    _children: ['Components']
  },
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Products',
    route: '/products',
    icon: 'cil-puzzle',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'All Products',
        to: '/products',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Add Products',
        to: '/products/add-new-products',
      },
    ],
  },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Cards',
      //   to: '/base/cards',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Carousel',
      //   to: '/base/carousels',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Collapse',
      //   to: '/base/collapses',
      // },
      {
        _tag: 'CSidebarNavItem',
        name: 'Forms',
        to: '/base/forms',
        icon: 'cil-list-rich'
      },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Jumbotron',
      //   to: '/base/jumbotrons',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'List group',
      //   to: '/base/list-groups',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navs',
      //   to: '/base/navs',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Navbars',
      //   to: '/base/navbars',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Pagination',
      //   to: '/base/paginations',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Popovers',
      //   to: '/base/popovers',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Progress',
      //   to: '/base/progress-bar',
      // },
      // {
      //   _tag: 'CSidebarNavItem',
      //   name: 'Switches',
      //   to: '/base/switches',
      // },
      {
        _tag: 'CSidebarNavItem',
        name: 'Tables',
        to: '/base/tables',
        icon: 'cil-spreadsheet'
      },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tabs',
  //       to: '/base/tabs',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Tooltips',
  //       to: '/base/tooltips',
  //     },
  // {
  //   _tag: 'CSidebarNavDropdown',
  //   name: 'Buttons',
  //   route: '/buttons',
  //   icon: 'cil-cursor',
  //   _children: [
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons',
  //       to: '/buttons/buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Brand buttons',
  //       to: '/buttons/brand-buttons',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Buttons groups',
  //       to: '/buttons/button-groups',
  //     },
  //     {
  //       _tag: 'CSidebarNavItem',
  //       name: 'Dropdowns',
  //       to: '/buttons/button-dropdowns',
  //     }
  //   ],
  // },
  {
    _tag: 'CSidebarNavItem',
    name: 'Charts',
    to: '/charts',
    icon: 'cil-chart-pie'
  },

/*-------------------------------------------------



 
  {
    _tag: 'CSidebarNavDropdown',
    name: 'Pages',
    route: '/pages',
    icon: 'cil-star',
    _children: [
      {
        _tag: 'CSidebarNavItem',
        name: 'Login',
        to: '/login',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Register',
        to: '/register',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 404',
        to: '/404',
      },
      {
        _tag: 'CSidebarNavItem',
        name: 'Error 500',
        to: '/500',
      },
    ],
  },

*/
]

export default _nav
