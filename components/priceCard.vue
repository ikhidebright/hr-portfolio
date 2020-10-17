<template>
  <v-card
    class="mx-auto rounded-lg"
    max-width="250"
    flat
  >
    <v-card-text>
      <v-row>
          <div class="ml-2">
            Total of Companies
            </div>
          <v-spacer /> 
          <v-btn
                fab
                dark
                small
                text
                class="mt-n2"
                color="#0000001E"
              >
                <v-icon 
                small 
                color="#1D1D1D99">
                mdi-dots-vertical
                </v-icon>
              </v-btn>
        </v-row>
      <p class="display-1 text--primary ml-n1">
        9,036
      </p>
      <v-row class="mt-n9">
      <v-spacer /> 
      <v-btn
      class="rounded-lg mr-n0"
      color="primary"
      text
      small
      >
      <v-icon color="#003187" small>mdi-image-filter-vintage</v-icon>
      </v-btn>
      </v-row>
    </v-card-text>
  </v-card>
</template>