import React from 'react'

const Dashboard = React.lazy(() => import('./views/dashboard/Dashboard'))






//Forms
const Addnewitem = React.lazy(() => import('./views/products/Addnew'))
const Itemlist = React.lazy(() => import('./views/products/Itemlist'))

const Charts = React.lazy(() => import('./views/charts/Charts'))

// Icons
const CoreUIIcons = React.lazy(() => import('./views/icons/coreui-icons/CoreUIIcons'))
const Flags = React.lazy(() => import('./views/icons/flags/Flags'))
const Brands = React.lazy(() => import('./views/icons/brands/Brands'))

// Notifications


const Widgets = React.lazy(() => import('./views/widgets/Widgets'))

const routes = [
  { path: '/', exact: true, name: 'Home' },
  { path: '/dashboard', name: 'Dashboard', element: Dashboard },
 
  
  { path: '/charts', name: 'Charts', element: Charts },
  { path: '/Addnewitem', name: 'Addnewitem', element: Addnewitem  },
  { path: '/Itemlist', name: 'itemlist', element: Itemlist  },

  { path: '/icons', exact: true, name: 'Icons', element: CoreUIIcons },
  { path: '/icons/coreui-icons', name: 'CoreUI Icons', element: CoreUIIcons },
  { path: '/icons/flags', name: 'Flags', element: Flags },
  { path: '/icons/brands', name: 'Brands', element: Brands },
  { path: '/widgets', name: 'Widgets', element: Widgets },
]

export default routes
