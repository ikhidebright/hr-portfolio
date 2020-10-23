<template>
  <div>
    <p class="headT ml-4 mb-n7 mt-n3">
      View Company details ({{ details.name }})
    </p>
    <v-row>
      <v-col cols="12" lg="10" md="10">
        <v-row class="ma-0 justify-end">
          <v-icon color="primary" class="mr-2">mdi-keyboard-backspace</v-icon>
          <router-link to="/companies">Go back to Companies</router-link>
        </v-row>
        <v-card class="rounded-lg mt-4 ml-3" flat>
          <v-card-text>
            <v-row justify="space-between" class="mb-n7">
              <v-col cols="12" lg="6" class="pr-9" md="6">
                <label>Company Name</label>
                <v-text-field
                  v-model="cName"
                  dense
                  readonly
                  filled
                  outlined
                ></v-text-field>
              </v-col>
              <v-col class="pl-9" cols="12" lg="6" md="6">
                <label>Office Address</label>
                <v-text-field
                  v-model="oAddress"
                  readonly
                  dense
                  filled
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="mb-n7">
              <v-col class="pr-9" cols="12" lg="6" md="6">
                <label>Business Sector</label>
                <v-select
                  readonly
                  filled
                  dense
                  outlined
                  v-model="bSector"
                  :items="bSectors"
                ></v-select>
              </v-col>
              <v-col class="pl-9" cols="12" lg="6" md="6">
                <label>Give a brief description of your company</label>
                <v-text-field
                  v-model="cDescrption"
                  readonly
                  dense
                  filled
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="mb-n7">
              <v-col class="pr-9" cols="12" lg="6" md="6">
                <label>Staff Size</label>
                <v-text-field
                  v-model="sSize"
                  readonly
                  filled
                  dense
                  outlined
                ></v-text-field>
              </v-col>
              <v-col class="pl-9" cols="12" lg="6" md="6">
                <label>Add teams</label>
                <v-select
                  v-model="aTeams"
                  :items="TeamsC"
                  readonly
                  filled
                  dense
                  chips
                  multiple
                  outlined
                ></v-select>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="mb-n7">
              <v-col class="pr-9" cols="12" lg="6" md="6">
                <label>Country</label>
                <v-select
                  readonly
                  filled
                  outlined
                  dense
                  v-model="country"
                  :items="countries"
                ></v-select>
              </v-col>
              <v-col class="pl-9" cols="12" lg="6" md="6">
                <label>State/city</label>
                <v-select
                  readonly
                  filled
                  outlined
                  dense
                  v-model="state"
                  :items="states"
                ></v-select>
              </v-col>
            </v-row>
            <v-row justify="space-between" class="mb-n7">
              <v-col class="pr-9" cols="12" lg="6" md="6">
                <label>Phone number</label>
                <v-text-field
                  v-model="phone"
                  readonly
                  prefix="(+234)"
                  filled
                  outlined
                  dense
                ></v-text-field>
              </v-col>
              <v-col class="pl-9" cols="12" lg="6" md="6">
                <label>Email Address</label>
                <v-text-field
                  v-model="email"
                  readonly
                  filled
                  dense
                  outlined
                ></v-text-field>
              </v-col>
            </v-row>
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<script>
export default {
  name: "companyById",
  data() {
    return {
      // forms
      details: [],
      email: "",
      phone: "",
      state: "",
      country: "",
      aTeams: "",
      sSize: "",
      cDescrption: "",
      bSector: "",
      cName: "",
      oAddress: "",
      // deatail from server
      TeamsC: [],
      states: [],
      countries: [],
      bSectors: []
    };
  },
  head() {
    return {
      title: `${this.details.name || ""} - HR Portfolio`,
      meta: [
        {
          hid: "description",
          name: "description",
          content: "Best HR Saas App"
        }
      ]
    };
  },
  mounted() {
    this.details = this.$store.getters["company/getCompanyDetailsById"](
      this.$route.params.id
    );
    this.cName = this.details.name;
    this.sSize = this.details.employeeSize;
    this.phone = this.details.phone;
    this.cDescrption = this.details.description;
    this.email = this.details.email;
    this.oAddress = this.details.adderss;
    this.TeamsC = this.details.teams;
    this.aTeams = this.details.teams;
    this.state = this.details.location.split(",")[0];
    this.states = [this.state];
    this.country = this.details.location.split(",")[1];
    this.countries = [this.country];
    this.bSector = this.details.sector;
    this.bSectors = [this.bSector];
  }
};
</script>
