<template>
  <v-card class="rounded-lg mr-2" flat full-width>
    <v-card-text>
      <v-row class="ma-0">
        <div class="ml-2">
          {{ company.title }}
        </div>
        <v-spacer />
        <v-btn
          fab
          width="3"
          height="3"
          small
          depressed
          dense
          class="mt-n2 pa-0"
          color="#0000001E"
        >
          <v-icon x-small color="#1D1D1D99">
            mdi-dots-vertical
          </v-icon>
        </v-btn>
      </v-row>

      <v-row class="ma-0">
        <p class="display-1 text--primary ml-2">
          {{ company.amount.toLocaleString() }}
        </p>
        <p
          v-if="company.gain"
          :class="company.gain ? 'gain mt-3' : 'loss mt-3'"
        >
          +{{ company.diff }}%
        </p>
        <p
          v-if="!company.gain"
          :class="company.gain ? 'gain mt-3' : 'loss mt-3'"
        >
          -{{ company.diff }}%
        </p>
      </v-row>

      <v-row class="ma-0 mt-n9" justify="end">
        <!-- <v-spacer />  -->
        <v-btn
          class="rounded-xs mr-n0 lighten-2 elevation-0 ml-4"
          :color="company.color"
          height="35"
          width="35"
          small
        >
          <v-img :src="`${company.icon}`"></v-img>
          <!-- <v-icon color="primary" x-small>{{ company.icon }}</v-icon> -->
        </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "priceCard",
  props: {
    company: {
      type: Object,
      default: () => {}
    }
  }
};
</script>

<style scoped>
.gain {
  text-align: left;
  font: normal normal 600 13px/18px Nunito;
  letter-spacing: 0px;
  color: #27c601;
  opacity: 1;
}

.loss {
  text-align: left;
  font: normal normal 600 13px/18px Nunito;
  letter-spacing: 0px;
  color: #fc0000;
  opacity: 1;
}

.v-btn {
  width: 28px !important;
  min-width: 28px !important;
  height: 25px !important;
  min-height: 25px !important;
}
</style>
