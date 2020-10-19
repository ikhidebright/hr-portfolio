<template>
    <div>
        <p class="headT ml-3 mt-n5">Companies</p>
        <v-row>
        <v-col
        cols="12"
        lg="8"
        md="8"
        > 
        <newCompanyModal />
        <tableCard
        class="ml-3"
        :showShowBy="true"
        :twidth="2000" 
        :headers="company.headersAllCompany" 
        :items="company.itemsAllCompany" 
        :data="company.deatilsAllCompany"/>
        </v-col>
        <v-col
        cols="12"
        lg="4"
        md="4"
        >
        <tableCard
        :twidth="700" 
        :showPaused="false"
        :theading="'Paused Accounts'"
        :headers="company.headersPaused" 
        :items="company.itemsPaused" 
        :data="company.deatilsPaused"/>
        </v-col>
        </v-row>
    </div>
</template>

<script>
import tableCard from '@/components/tableCard'
import newCompanyModal from '@/components/newCompanyModal'
import { mapState } from 'vuex'

export default {
    name: 'companies',
    components: { tableCard, newCompanyModal },
     computed: {
        ...mapState({
            company: state => state.company
        })
    }
}
</script>