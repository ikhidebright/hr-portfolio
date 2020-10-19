<template>
<v-card
    class="rounded-lg mx-1"
    :max-width="twidth"
    flat
  >
  <v-card-text>
  <p class="font-weight-medium orange--text">{{theading}}</p>

  <v-row v-if="showShowBy" justify="end" class="pa-0 mt-n8 mb-n9 ml-5">
    <v-col cols="2">
    <label class="mt-n4 ml-7">Show by</label>
    </v-col>
    <v-col cols="2">
  <v-select
  dense
     class="mt-n2 ml-n2 showby font-weight-black"
     flat
     height="5"
     solo
    :items="showByData"
    v-model="showByDataSelected"
  ></v-select>
    </v-col>
  </v-row>

  <v-data-table
    :headers="headers"
    :items="data"
    :items-per-page="99999999999999999"
    hide-default-footer
    class="elevation-0 theme--light font-weight-light text-caption"
  >
  <template v-slot:[`item.status`]="{ item }">
      <v-chip
        :color="getColor(item.status)"
        class="lighten-5 rounded-0"
        x-small
        label
        :text-color="getColor(item.status)"
      >
        {{ item.status }}
      </v-chip>
    </template>

  <template v-slot:[`item.name`]="{ item }">
      <p
        class="font-weight-regular"
      >
        {{ item.name }}
      </p>
    </template>

    <template v-slot:[`item.action`]="{ item }">
        <v-menu
            bottom
            left
            rounded="lg"
            offset-y
          >
            <template v-slot:activator="{ on, attrs }">
              <v-btn
                x-small
                icon
                v-bind="attrs"
                v-on="on"
              >
                <v-icon x-small>mdi-dots-vertical</v-icon>
              </v-btn>
            </template>

            <v-list
                dense
                >
              <v-list-item
                v-for="(list, i) in items"
                :key="i"
                link
                @click="list.func == 'pause' && showPaused ? pauseAccount(item) : cantPause('Sorry, Account already paused')"
                :to="list.path? `/companies/${item.id}` : null"
              >
                <v-list-item-title>{{ list.title }}</v-list-item-title>
              </v-list-item>
            </v-list>
          </v-menu>
    </template>
  </v-data-table>
  </v-card-text>
</v-card>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    data () {
      return {
        showByData: ["All", 'Active', 'Invited', 'Paused'],
        showByDataSelected: 'All'
      }
    },
    props: {
      items: {
        type: Array,
        default: () => []
      },
      showPaused: {
        type: Boolean,
        default: true
      },
      showShowBy: {
        type: Boolean,
        default: false
      },
      twidth: {
        type: Number,
        default: 2000
      },
      theading: {
        type: String
      },
      headers: {
        type: Array,
        default: () => []
      },
      data: {
        type: Array,
        default: () => []
      }
    },
    methods: {
      ...mapActions({
      addPaused: 'company/addPauseCompany'
    }),
      cantPause (message) {
        this.$popup.show({
        message: message,
			  })
      },
      pauseAccount (item) {
        this.addPaused(item)
      },
      getColor (status) {
        if (status == 'Invited') return 'yellow'
        else if (status == 'Paused') return 'red'
        else return 'green'
      },
    },
  }
</script>

<style scoped>
.v-data-table > .v-data-table__wrapper > table > tbody > tr > td {
  border-bottom: none!important;
}

.head {
  background-color: green;
  height: 5px
}

label, .showby {
    font-family: Nunito;
    font-size: 12px;
}
</style>
