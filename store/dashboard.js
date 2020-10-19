export const state = () => ({
    dashboardPrices: [
        {
            title: 'Total Companies',
            amount: 253,
            gain: true,
            diff: 3.2,
            color: '#EFCF00',
            icon: 'mdi-home-modern'
        },
        {
            title: 'Total Employees',
            amount: 9036,
            gain: true,
            diff: 20.5,
            color: '#9E5DB8',
            icon: 'mdi-account-multiple'
        },
        {
            title: 'Paused Accounts',
            amount: 32,
            gain: false,
            color: 'primary',
            diff: 32,
            icon: 'mdi-pause'
        }
    ],

    increasePerMonth: {
        chart: {
          type: 'spline',
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          backgroundColor: 'white',
          borderColor: '',
          borderRadius: 6,
          className: 'card',
          shape: 'none',
          pointFormat: '<b>{point.y} Employees</b>'
        },
        credits: {
              enabled: false
      },
        plotOptions: {
              line: {
                  dataLabels: {
                      enabled: true
                  },
                  enableMouseTracking: false
              }
          },
          series: [
            {
              name: '',
              data: [40, 100, 40, 160, 60, 140, 100, 180]
            },
            {
              name: '',
              data: [120, 60, 120, 60, 90, 40, 90, 15]
            },
          ]
    },

    revenue: {
        chart: {
          type: 'spline',
          height: '75%'
        },
        title: {
          text: ''
        },
        xAxis: {
          categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
        },
        yAxis: {
          title: {
            text: ''
          }
        },
        legend: {
          enabled: false
        },
        tooltip: {
          backgroundColor: 'white',
          borderColor: '',
          borderRadius: 6,
          className: 'card',
          shape: 'none',
          pointFormat: '<b>₦ {point.y}</b>'
        },
        credits: {
              enabled: false
      },
        plotOptions: {
              line: {
                  dataLabels: {
                      enabled: true
                  },
                  enableMouseTracking: false
              }
          },
          series: [
            {
                name: '',
                data: [98000, 200000, 155000, 89000, 170000, 289000, 155000, 200000, 289000, 252000, 200000, 350000]
              },
          ]
    },

    headersNewCompany: [
      {
        class: 'accent lighten5 rounded-l-lg',
        text: 'DATE',
        align: 'start',
        sortable: false,
        value: 'onBoardingDate',
      },
      { 
        text: 'COMPANY NAME',
        class: 'accent',
        value: 'name',
        sortable: false,
        },
      // { 
      //   text: 'EMPLOYEE SIZE',
      //   value: 'employeeSize',
      //   sortable: false,
      //   class: 'accent', 
      //   },
      // { 
      //   text: 'LOCATION',
      //   value: 'location',
      //   sortable: false,
      //   class: 'accent'
      //   },
      { 
        text: 'STATUS',
        value: 'status',
        sortable: false,
        class: 'accent', 
        },
      // { 
      //   text: '',
      //   value: 'action',
      //   sortable: false,
      //   class: 'accent rounded-r-lg', 
      //   },
],
  })