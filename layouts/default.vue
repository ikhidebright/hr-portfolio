<template>
  <v-app light>
    <v-navigation-drawer
      v-model="drawer"
      :clipped="clipped"
      fixed
      light
      app
    >
      <v-row 
      justify="center"
      class="mb-9 mt-9">
      <v-avatar size="125">
        <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
      <!-- <p>Super Admin</p> -->
  </v-row>
      <v-list dense flat>
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          :to="item.to"
          router
          exact
          color="#003187"
          class="mb-3"
        >
          <v-list-item-action>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title v-text="item.title" />
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-app-bar
      fixed
      light
      color="#F4F4F4"
      flat
      app
    >
      <v-app-bar-nav-icon class="d-block d-sm-none" @click.stop="drawer = !drawer" />
      <v-text-field
        class="mt-7 rounded-lg ml-4"
        filled
        light
        flat
        dense
        solo
        color="#003187"
        placeholder="Search"
        background-color="white"
        append-icon="mdi-magnify"
      ></v-text-field>
      <v-spacer />
      <v-btn
      class="mx-5 rounded-lg"
      color="white"
      depressed
      shaped
      >
      <v-badge
          color="#9E5DB8"
          offset-x="11"
          dot
          overlap
        >
      <v-icon color="#003187">mdi-bell</v-icon>
      </v-badge>
      </v-btn>
      <v-btn
      class="mr-5 rounded-lg"
      color="white"
      depressed
      shaped
      >
      <v-icon color="#003187">mdi-image-filter-vintage</v-icon>
      </v-btn>
      <v-avatar size="40">
          <v-img src="https://cdn.vuetifyjs.com/images/lists/2.jpg"></v-img>
      </v-avatar>
    </v-app-bar>
    <v-main>
      <v-container class="main-content">
        <div>
        <nuxt />
        </div>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      clipped: false,
      drawer: null,
      fixed: false,
      items: [
        {
          icon: 'mdi-gauge',
          title: 'Dashboard',
          to: '/dashboard'
        },
        {
          icon: 'mdi-city',
          title: 'Companies',
          to: '/companies'
        },
        {
          icon: 'mdi-file-outline',
          title: 'Reports',
          to: '/inspire'
        },
        {
          icon: 'mdi-bell',
          title: 'Notifications',
          to: '/inspire'
        },
        {
          icon: 'mdi-help-circle-outline',
          title: 'Help',
          to: '/inspire'
        }
      ],
      miniVariant: false,
      right: true,
      rightDrawer: false,
      title: 'Vuetify.js'
    }
  }
}
</script>

<style scoped>
.main-content {
  background-color: #F4F4F4;
  min-height:89vh;
  max-height: auto
}
</style>
