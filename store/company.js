export const state = () => ({
  // details for all company data
    itemsAllCompany: [
        { title: 'Pause account', func: 'pause' },
        { title: 'View company details', path: true }
    ],
    headersAllCompany: [
          {
            class: 'accent lighten5 rounded-l-lg pb-n4',
            text: 'ONBOARDING DATE',
            align: 'start',
            sortable: false,
            value: 'onBoardingDate',
          },
          { 
            text: 'COMPANY NAME',
            class: 'accent pb-n4',
            value: 'name',
            sortable: false,
            },
          { 
            text: 'EMPLOYEE SIZE',
            value: 'employeeSize',
            sortable: false,
            class: 'accent pb-n4', 
            },
          { 
            text: 'LOCATION',
            value: 'location',
            sortable: false,
            class: 'accent pb-n4'
            },
          { 
            text: 'STATUS',
            value: 'status',
            sortable: false,
            class: 'accent pb-n4', 
            },
          { 
            text: '',
            value: 'action',
            sortable: false,
            class: 'accent pb-n4 rounded-r-lg', 
            },
    ],
    deatilsAllCompany: [
            {
              id: 1,
              name: 'The Logic Brand',
              onBoardingDate: '22-07-20',
              employeeSize: 520,
              location: 'Lagos, Nigeria',
              status: 'Invited',
              action: true,
              adderss: 'Goldlink House Ade Crescent, wuse 2, Abuja',
              sector: 'Other',
              description: 'Other',
              phone: '0703-695-8547',
              email: 'info@logic.com',
              teams: ['Finance', 'Tech', 'Human Resources']
            },
            {
              id: 2,
              name: 'Global Infometrics LTD.',
              onBoardingDate: '22-07-20',
              employeeSize: 123,
              location: 'Toronto, Canada',
              status: 'Active',
              action: true,
              adderss: 'FHA, Lugbe FCT Abuja',
              sector: 'Tech',
              description: 'We are number one in Tech',
              phone: '0805-321-7482',
              email: 'info@globalinfo.com',
              teams: ['Tech', 'Internet', 'Computing']
            },
            {
              id: 3,
              name: 'Unilever & Sons Co.',
              onBoardingDate: '22-07-20',
              employeeSize: 74,
              location: 'Kaduna, Nigeria',
              status: 'Active',
              action: true,
              adderss: 'ABC House CBD, Abuja',
              sector: 'Mining',
              description: 'Mining the earth precious metals',
              phone: '0905-881-3791',
              email: 'info@unilever.com',
              teams: ['Mining', 'Engineering', 'Machinery']
            },
            {
              id: 4,
              name: 'Aero Contractors',
              onBoardingDate: '22-07-20',
              employeeSize: 241,
              location: 'Dakar, Senegal',
              status: 'Active',
              action: true,
              adderss: 'Nnamdi Azikiwe International Airport Abuja',
              sector: 'Hospitality',
              description: 'Fly for free',
              phone: '0703-695-8547',
              email: 'info@aero.com',
              teams: ['Hotel', 'Hospitality', 'Spa']
            },
            {
              id: 5,
              name: 'Arik Air',
              onBoardingDate: '22-07-20',
              employeeSize: 387,
              location: 'Osun, Nigeria',
              status: 'Active',
              action: true,
              adderss: 'Nnamdi Azikiwe International Airport Abuja',
              sector: 'Airline',
              description: 'The best Airline in town',
              phone: '0905-636-8857',
              email: 'info@arik.com',
              teams: ['Air Travel', 'Space']
            },
            {
              id: 6,
              name: 'The Logic Brand',
              onBoardingDate: '22-07-20',
              employeeSize: 520,
              location: 'Lagos, Nigeria',
              status: 'Paused',
              action: true,
              adderss: 'Goldlink House Ade Crescent, wuse 2, Abuja',
              sector: 'Other',
              description: 'Other',
              phone: '0703-695-8547',
              email: 'info@logic.com',
              teams: ['Finance', 'Tech', 'Human Resources', 'Sales & Marketing']
            },
            {
              id: 7,
              name: 'Global Infometrics LTD.',
              onBoardingDate: '22-07-20',
              employeeSize: 123,
              location: 'Toronto, Canada',
              status: 'Active',
              action: true,
              adderss: 'FHA, Lugbe FCT Abuja',
              sector: 'Tech',
              description: 'We are number one in Tech',
              phone: '0805-321-7482',
              email: 'info@globalinfo.com',
              teams: ['Tech', 'Internet', 'Computing']
            },
            {
              id: 8,
              name: 'Unilever & Sons Co.',
              onBoardingDate: '22-07-20',
              employeeSize: 74,
              location: 'Kaduna, Nigeria',
              status: 'Active',
              action: true,
              adderss: 'ABC House CBD, Abuja',
              sector: 'Mining',
              description: 'Mining the earth precious metals',
              phone: '0905-881-3791',
              email: 'info@unilever.com',
              teams: ['Mining', 'Engineering', 'Machinery']
            },
            {
              id: 9,
              name: 'Aero Contractors',
              onBoardingDate: '22-07-20',
              employeeSize: 241,
              location: 'Dakar, Senegal',
              status: 'Active',
              action: true,
              adderss: 'Nnamdi Azikiwe International Airport Abuja',
              sector: 'Hospitality',
              description: 'Fly for free',
              phone: '0703-695-8547',
              email: 'info@aero.com',
              teams: ['Hotel', 'Hospitality', 'Spa']
            },
            {
              id: 10,
              name: 'Arik Air',
              onBoardingDate: '22-07-20',
              employeeSize: 387,
              location: 'Lagos, Nigeria',
              status: 'Invited',
              action: true,
              adderss: 'Nnamdi Azikiwe International Airport Abuja',
              sector: 'Airline',
              description: 'The best Airline in town',
              phone: '0905-636-8857',
              email: 'info@arik.com',
              teams: ['Air Travel', 'Space']
            },
            {
              id: 11,
              name: 'The Logic Brand',
              onBoardingDate: '22-07-20',
              employeeSize: 520,
              location: 'Lagos, Nigeria',
              status: 'Active',
              action: true,
              adderss: 'Goldlink House Ade Crescent, wuse 2, Abuja',
              sector: 'Other',
              description: 'Other',
              phone: '0703-695-8547',
              email: 'info@logic.com',
              teams: ['Finance', 'Tech', 'Human Resources', 'Sales & Marketing']
            },
            {
              id: 12,
              name: 'Global Infometrics LTD.',
              onBoardingDate: '22-07-20',
              employeeSize: 123,
              location: 'Toronto, Canada',
              status: 'Active',
              action: true,
              adderss: 'FHA, Lugbe FCT Abuja',
              sector: 'Tech',
              description: 'We are number one in Tech',
              phone: '0805-321-7482',
              email: 'info@globalinfo.com',
              teams: ['Tech', 'Internet', 'Computing']
            },
            {
              id: 13,
              name: 'Unilever & Sons Co.',
              onBoardingDate: '22-07-20',
              employeeSize: 74,
              location: 'Kaduna, Nigeria',
              status: 'Active',
              action: true,
              adderss: 'ABC House CBD, Abuja',
              sector: 'Mining',
              description: 'Mining the earth precious metals',
              phone: '0905-881-3791',
              email: 'info@unilever.com',
              teams: ['Mining', 'Engineering', 'Machinery']
            },
            {
              id: 14,
              name: 'Aero Contractors',
              onBoardingDate: '22-07-20',
              employeeSize: 241,
              location: 'Dakar, Senegal',
              status: 'Active',
              action: true,
              adderss: 'Nnamdi Azikiwe International Airport Abuja',
              sector: 'Hospitality',
              description: 'Fly for free',
              phone: '0703-695-8547',
              email: 'info@aero.com',
              teams: ['Hotel', 'Hospitality', 'Spa']
            },
    ],

    // data for paused accounts
    itemsPaused: [
      { title: 'Pause account', func: 'pause', path: true },
      { title: 'View company details', path: true }
    ],
    headersPaused: [
        {
          class: 'accent pb-n4 lighten5 rounded-l-lg',
          text: 'LAST ACTIVE',
          align: 'start',
          sortable: false,
          value: 'onBoardingDate',
        },
        { 
          text: 'COMPANY NAME',
          class: 'accent pb-n4',
          value: 'name',
          sortable: false,
          },
        { 
          text: '',
          value: 'action',
          sortable: false,
          class: 'accent pb-n4 rounded-r-lg', 
          },
    ],
    deatilsPaused: [
          {
            id: 1,
            name: 'The Logic Brand',
            onBoardingDate: '22-07-20',
            employeeSize: 520,
            location: 'Lagos, Nigeria',
            status: 'Invited',
            action: true,
            adderss: 'Goldlink House Ade Crescent, wuse 2, Abuja',
            sector: 'Other',
            description: 'Other',
            phone: '0703-695-8547',
            email: 'info@logic.com',
            teams: ['Finance', 'Tech', 'Human Resources']
          },
          {
            id: 2,
            name: 'Global Infometrics LTD.',
            onBoardingDate: '22-07-20',
            employeeSize: 123,
            location: 'Toronto, Canada',
            status: 'Active',
            action: true,
            adderss: 'FHA, Lugbe FCT Abuja',
            sector: 'Tech',
            description: 'We are number one in Tech',
            phone: '0805-321-7482',
            email: 'info@globalinfo.com',
            teams: ['Tech', 'Internet', 'Computing']
          },
          {
            id: 9,
            name: 'Aero Contractors',
            onBoardingDate: '22-07-20',
            employeeSize: 241,
            location: 'Dakar, Senegal',
            status: 'Active',
            action: true,
            adderss: 'Nnamdi Azikiwe International Airport Abuja',
            sector: 'Hospitality',
            description: 'Fly for free',
            phone: '0703-695-8547',
            email: 'info@aero.com',
            teams: ['Hotel', 'Hospitality', 'Spa']
          },
          {
            id: 11,
            name: 'The Logic Brand',
            onBoardingDate: '22-07-20',
            employeeSize: 520,
            location: 'Lagos, Nigeria',
            status: 'Active',
            action: true,
            adderss: 'Goldlink House Ade Crescent, wuse 2, Abuja',
            sector: 'Other',
            description: 'Other',
            phone: '0703-695-8547',
            email: 'info@logic.com',
            teams: ['Finance', 'Tech', 'Human Resources', 'Sales & Marketing']
          },
          {
            id: 12,
            name: 'Global Infometrics LTD.',
            onBoardingDate: '22-07-20',
            employeeSize: 123,
            location: 'Toronto, Canada',
            status: 'Active',
            action: true,
            adderss: 'FHA, Lugbe FCT Abuja',
            sector: 'Tech',
            description: 'We are number one in Tech',
            phone: '0805-321-7482',
            email: 'info@globalinfo.com',
            teams: ['Tech', 'Internet', 'Computing']
          },
          {
            id: 13,
            name: 'Unilever & Sons Co.',
            onBoardingDate: '22-07-20',
            employeeSize: 74,
            location: 'Kaduna, Nigeria',
            status: 'Active',
            action: true,
            adderss: 'ABC House CBD, Abuja',
            sector: 'Mining',
            description: 'Mining the earth precious metals',
            phone: '0905-881-3791',
            email: 'info@unilever.com',
            teams: ['Mining', 'Engineering', 'Machinery']
          },
          {
            id: 14,
            name: 'Aero Contractors',
            onBoardingDate: '22-07-20',
            employeeSize: 241,
            location: 'Dakar, Senegal',
            status: 'Active',
            action: true,
            adderss: 'Nnamdi Azikiwe International Airport Abuja',
            sector: 'Hospitality',
            description: 'Fly for free',
            phone: '0703-695-8547',
            email: 'info@aero.com',
            teams: ['Hotel', 'Hospitality', 'Spa']
          },
    ]
})

export const getters = {
     getCompanyDetailsById: (state) => (id) => {
        return state.deatilsAllCompany.find(item => item.id == id)
    }
}

export const mutations = {
     mutateCompanyData (state, payload) {
        state.deatilsAllCompany.unshift(payload)
    },
    
     mutatePauseCompanyData (state, payload) {
       let alreadyPaused = state.deatilsPaused.find((item) => item.id == payload.id)
       if (alreadyPaused) {
        //
       } else {
         state.deatilsPaused.unshift(payload)
       }
    }
}

export const actions = {
     addCompany ({ commit }, companyData) {
        commit('mutateCompanyData', companyData)
    },

     addPauseCompany ({ commit }, companyData) {
        commit('mutatePauseCompanyData', companyData)
    }
}