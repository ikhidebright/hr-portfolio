<template>
    <div class="mt-n5">
        <v-row class="pa-0 ml-0">
            <v-col cols="2">
            <p class="headT">Dashboard</p>
            </v-col>
            <v-col cols="2" class="mt-3 ml-n3 mr-n12">
            <label class="ml-0 showby">Show by</label>
            </v-col>
            <v-col cols="2" class="ml-n12 mt-1">
            <v-select
            dense
            class="ml-n5 showby font-weight-black"
            flat
            disabled
            filled
            background-color="#f4f4f4"
            height="5"
            solo
            :items="showByData"
            v-model="showByDataSelected"
        ></v-select>
            </v-col>
        </v-row>
        <v-row class="ma-0">
            <v-col
            cols="12"
            sm="6"
            md="8"
            >

            <v-row class="ma-0 ml-0 mt-n7">
            <v-col v-for="(company, i) in dashboardPrices" :key="i" cols="4" class="pa-0">
            <priceCard :company="company" />
            </v-col>
            </v-row>

            <v-row class="ma-0">
            <v-card
            class="rounded-lg mt-4 ml-0"
            flat
            width="1050"
            >
            <v-card-text>
            <p class="font-weight-bold">Increase Per Month</p>
            <client-only>
            <vue-highcharts :options="increasePerMonth" ref="lineCharts"></vue-highcharts>
            </client-only>
            </v-card-text>
            </v-card>
            </v-row>

            </v-col>

            <v-col
            cols="6"
            md="4"
            > 
            <!-- revenue graph -->
            <v-card
            class="rounded-lg mt-n8 ml-1"
            flat
            width="900"
            >
            <v-card-text>
            <p class="font-weight-bold">Revenue</p>
            <client-only>
            <vue-highcharts :options="revenue" ref="revenueCharts"></vue-highcharts>
            </client-only>

            </v-card-text>
            </v-card>
            <tableCard
            class="mt-5"
            :twidth="700" 
            :showPaused="false"
            :theading="'New Companies'"
            :headers="headersNewCompany" 
            :items="company.itemsPaused" 
            :data="items"/>
            </v-col>
        </v-row>
    </div>
</template>

<script>
import priceCard from "@/components/priceCard"
import tableCard from '@/components/tableCard'
import { mapState } from 'vuex'

export default {
    name: "dashboard",
    components: { priceCard, tableCard },
    data () {
        return {
        showByData: ["This Year", 'Active', 'Invited', 'Paused'],
        showByDataSelected: 'This Year'
   }
  },
    computed: {
        ...mapState({
            dashboardPrices: state => state.dashboard.dashboardPrices,
            headersNewCompany: state => state.dashboard.headersNewCompany,
            revenue: state => state.dashboard.revenue,
            increasePerMonth: state => state.dashboard.increasePerMonth,
            company: state => state.company,
            items: state => state.company.deatilsAllCompany.slice(0, 6)
        })
    }
}
</script>

<style scoped>
label, .showby {
    font-family: Nunito;
    font-size: 15px;
}
</style>