<template>
  <v-row justify="end">
    <v-dialog
      v-model="dialog"
      max-width="550px"
    >
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          color="primary"
          class="text-capitalize font-weight-light mb-3 mr-4"
          dark
          v-bind="attrs"
          v-on="on"
        >
          Add Company
        </v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headT mx-auto mb-n3">Add Company</span>
        </v-card-title>
        <v-card-text>
          <v-container>
                <v-form
                ref="form"
                @submit="addCompany"
                v-model="valid"
            >
            <v-row>
              <v-col cols="12">
                <label>Company Name</label>
                    <v-text-field
                    v-model="cName"
                    :rules="cNameRules"
                    filled
                    outlined
                    required
                ></v-text-field>
              </v-col>
              <v-col cols="12" class="mt-n8">
                <label>Email address</label>
                    <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    filled
                    label="example@gmail.com"
                    outlined
                    reverse
                    required
                ></v-text-field>
              </v-col>
            </v-row>
                </v-form>
            <v-row justify="end" class="mt-n0 mr-0">
            <v-btn
            color="primary"
            type="submit"
            class="text-capitalize font-weight-light"
            dark
            @click="addCompany"
            >
            Invite company
        </v-btn>
            </v-row>
          </v-container>
        </v-card-text>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
import { mapActions } from 'vuex'

  export default {
    data: () => ({
      valid: true,
      cName: '',
      cNameRules: [
        v => !!v || 'Name is required'
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+\..+/.test(v) || 'E-mail must be valid',
      ],
      dialog: false,
    }),
    methods: {
        validate () {
        this.$refs.form.validate()
      },
      async addCompany () {
          this.validate()
          if (this.valid) {
              let d = new Date();
              let day = d.getDate()
              let m = d.getMonth() + 1
              let y = d.getFullYear().toString().split('')
              let cy = y[y.length - 2] + y[y.length - 1]
              let formatDate = day+'-'+m+'-'+cy
              let id = Math.floor(Math.random() * d.getMilliseconds());
              let data = {
                    id: id,
                    name: this.cName,
                    onBoardingDate: formatDate,
                    employeeSize: id,
                    location: 'Toronto, Canada',
                    status: 'Active',
                    action: true,
                    adderss: 'FHA, Lugbe FCT Abuja',
                    sector: 'Tech',
                    description: 'We are number one in Tech',
                    phone: '0805-321-7482',
                    email: this.email,
                    teams: ['Tech', 'Internet', 'Computing']
            }
            await this.add(data)
            this.$popup.show({
            message: 'Company added Succefully',
            })
            this.cName = ''
            this.email = ''
            this.$refs.form.resetValidation()
          }
      },
    ...mapActions({
      add: 'company/addCompany'
    })
    }
  }
</script>