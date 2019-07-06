import { NbMenuItem } from '@nebular/theme';

export const MENU_ITEMS: NbMenuItem[] = [
  {
    title: 'Home',                                    // 'outstandingreport',
    icon: 'nb-home',
    link:  '/pages/home',                                           // '/pages/outstandingreport',
    home: true,
  },
  // {
  //   title: 'FEATURES',
  //   group: true,
  // },
    {
      title: 'Dashboard',
      icon: 'nb-grid-a',
      //  link: '/pages/dashboard',
       children: [
         {
           title: 'Cxo dashboard',
           link: '/pages/dashboard/Cxodashboard'
         },
         {
           title: 'Sales',
           link: '/pages/dashboard/Sales'
         },
         {
           title: 'Service',
           link: '/pages/dashboard/Service'
         },
         {
           title: 'Property',
           link: '/pages/dashboard/Property'
         }
       ]
    },
    {
      title: 'Reports',
      icon: 'nb-compose',
      // link: '/pages/reports',
      children: [
        {
          title: 'Sales',
          link: 'reports/Sales/reservation',
          children: [
            {
              title: 'Reservation',
              icon : 'nb-compose',
              link : '/pages/reports/sales/Reservation',
            },
            {
              title: 'Avalibility',
              icon: 'nb-compose',
              link : '/pages/reports/sales/Avalibility'
            },
            {
              title: 'Cancellation Report',
              icon: 'nb-compose',
              link : '/pages/reports/sales/Cancellation Report'
            },
            {
              title: 'Rate Card',
              icon: 'nb-compose',
              link : '/pages/reports/sales/Rate Card',
              children: [
                {
                    title: 'Property Wise',
                    icon: 'nb-compose',
                    link : '/pages/reports/sales/Property Wise'
                },
                {
                  title: 'Room Wise',
                  icon: 'nb-compose',
                  link : '/pages/reports/sales/Room Wise'
                }
              ],
              },
              {
                title: 'Offline Reservation',
                icon: 'nb-compose',
                link : '/pages/reports/sales/Offline Reservation'
              },
              {
                title: 'Offline Checkin',
                icon: 'nb-compose',
                link : '/pages/reports/sales/Offline Checkin'
              },
            {
                title: 'Performance Review',
                icon: 'nb-compose',
                link : '/pages/reports/sales/Performance Review',
                children: [
                  {
                    title: 'RSM MIS',
                    icon: 'nb-compose',
                    link : '/pages/reports/sales/RSM MIS',
                  },
                  {
                  title: 'ASM MIS',
                 icon: 'nb-compose',
                 link : '/pages/reports/sales/ASM MIS',
                  },
                  {
                    title: 'Sales ManagerTarget',
                   icon: 'nb-compose',
                   link : '/pages/reports/sales/Sales ManagerTarget',
                    },
                    {
                      title: 'SalesManager Performance',
                     icon: 'nb-compose',
                     link : '/pages/reports/sales/SalesManager Performance',
                      }
                ]
              },
              {
                title: 'Coupon Management',
               icon: 'nb-compose',
               link : '/pages/reports/sales/Coupon Management',
               children: [
                 {
                   title: 'Coupon Details',
                   icon: 'nb-compose',
                   link: '/pages/reports/sales/Coupon Details'
                 },
                 {
                  title: 'Coupon Code Config',
                  icon: 'nb-compose',
                  link: '/pages/reports/sales/Coupon Code Config'
                },
                {
                  title: 'Refferal Details',
                  icon: 'nb-compose',
                  link: '/pages/reports/sales/Retails Details'
                },
                {
                  title: 'Reservation Aging',
                  icon: 'nb-compose',
                  link: '/pages/reports/sales/Reservation Aging'
                },
               ]
                },
          ]
        },
        {
          title: 'MIS Reports',
          link: '/pages/reports/stepper',
          children: [
          {
            title: 'Revenue Management',
            icon: 'nb-compose',
            link: '/pages/reports/sales/Revenue Management',
            children: [
              {
                title: 'Invoice',
                icon: 'nb-compose',
                link: '/pages/reports/sales/Invoice',
              },
              {
                title: 'Receipts',
                icon: 'nb-compose',
                link: '/pages/reports/sales/Receipts',
              },
              {
                title: 'Settlement',
                icon: 'nb-compose',
                link: '/pages/reports/sales/Settlement',
              },
              {
                title: 'Settlement Config',
                icon: 'nb-compose',
                link: '/pages/reports/sales/Settlement Config',
              },
              {
                title: 'Payment History',
                icon: 'nb-compose',
                link: '/pages/reports/sales/Payment History',
              },
              {
                title: 'Targets Vs Actuals',
                icon: 'nb-compose',
                link: '/pages/reports/sales/Targets Vs Actuals',
              },
              {
                title: 'TrackingCollection percentage',
                icon: 'nb-compose',
                link: '/pages/reports/sales/TrackingCollection percentage',
              },
              {
                title: 'Offline Collection',
                icon: 'nb-compose',
                link: '/pages/reports/sales/Offline Collection',
              },
              {
                title: 'Zero Payment',
                icon: 'nb-compose',
                link: '/pages/reports/sales/Zero Payment',
              },
            ]
          },
          {
            title: 'Retention Management',
            icon: 'nb-compose',
            link: '/pages/reports/sales/Retention Management',
            children: [
              {
            title: 'Checkout Request',
            icon: 'nb-compose',
            link: '/pages/reports/sales/Checkout Request',
             }, {
             title: 'Checkout Form',
            icon: 'nb-compose',
            link: '/pages/reports/sales/Checkout Form',
             },
             {
              title: 'Notice Period',
             icon: 'nb-compose',
             link: '/pages/reports/sales/Notice Period',
              },
            ]
          },
          {
            title: 'MT',
           icon: 'nb-compose',
           link: '/pages/reports/sales/MT',
           children: [
            {
              title: 'Daily MIS',
             icon: 'nb-compose',
             link: '/pages/reports/sales/Daily MIS',
              },
              {
                title: 'Dashboard Details',
               icon: 'nb-compose',
               link: '/pages/reports/sales/Dashboard Details',
                },
                {
                  title: 'Monthly Accrued',
                 icon: 'nb-compose',
                 link: '/pages/reports/sales/Monthly Accrued',
                  },
                  {
                    title: 'Occupancy',
                   icon: 'nb-compose',
                   link: '/pages/reports/sales/Occupancy',
                    },
                    {
                      title: 'Security Deposit',
                     icon: 'nb-compose',
                     link: '/pages/reports/sales/Security Deposit',
                      },
                      {
                        title: 'PriceList Report',
                       icon: 'nb-compose',
                       link: '/pages/reports/sales/PriceList Report',
                        },
                        {
                          title: 'PPM Reports',
                         icon: 'nb-compose',
                         link: '/pages/reports/sales/PPM Reports',
                          },
           ]
            },
            {
              title: 'Move in Details',
             icon: 'nb-compose',
             link: '/pages/reports/sales/Move in Details',
              },
              {
                title: 'Comman Reports',
               icon: 'nb-compose',
               link: '/pages/reports/sales/Comman Reports',
                },
        ]
        },
        {
          title: 'OPS Reports',
          link: '/pages/reports-components/list',
          children: [
            {
              title: 'KPI',
             icon: 'nb-compose',
             link: '/pages/reports-components/sales/KPI',
              },
              {
                title: 'Receipt Reports',
               icon: 'nb-compose',
               link: '/pages/reports-components/sales/Receipt Reports',
                },
                {
                  title: 'Pending Analysis',
                 icon: 'nb-compose',
                 link: '/pages/reports-components/sales/Pending Analysis',
                  },
                  {
                    title: 'Due Collection',
                   icon: 'nb-compose',
                   link: '/pages/reports-components/sales/Due Collection',
                    },
                    {
                      title: 'Transfer',
                     icon: 'nb-compose',
                     link: '/pages/reports-components/sales/Transfer',
                      },
                      {
                        title: 'WIFIDabba',
                       icon: 'nb-compose',
                       link: '/pages/reports-components/sales/WIFIDabba',
                        },
                        {
                          title: 'Booking Analysis',
                         icon: 'nb-compose',
                         link: '/pages/reports-components/sales/Booking Analysis',
                          },
                          {
                            title: 'Age Bucket',
                           icon: 'nb-compose',
                           link: '/pages/reports-components/sales/Age Bucket',
                            },
                            {
                              title: 'Inventory',
                             icon: 'nb-compose',
                             link: '/pages/reports-components/sales/Inventory',
                              },
                              {
                                title: 'Room Inspection',
                               icon: 'nb-compose',
                               link: '/pages/reports-components/sales/Room Inspection',
                                },
                                {
                                  title: 'OutStanding',
                                 icon: 'nb-compose',
                                 link: '/pages/reports-components/sales/OutStanding',
                                  },
                                  {
                                    title: 'Accrued Due',
                                   icon: 'nb-compose',
                                   link: '/pages/reports-components/sales/Accrued Due',
                                    },
          ]
        },
      ]
    },


  {
    title: 'Auth',
    icon: 'nb-locked',
    children: [
      {
        title: 'Login',
        link: '/auth/login',
      },
      {
        title: 'Register',
        link: '/auth/register',
      },
      {
        title: 'Request Password',
        link: '/auth/request-password',
      },
      {
        title: 'Reset Password',
        link: '/auth/reset-password',
      },
    ],
  },
];
