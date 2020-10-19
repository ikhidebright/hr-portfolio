<template>
  <div class="text-center ma-2">
    <v-snackbar
      v-model="show"
    >
      {{ options.message }}
      <template v-slot:action="{ attrs }">
        <v-btn
          color="pink"
          text
          v-bind="attrs"
          @click="show = false"
        >
          Close
        </v-btn>
      </template>
    </v-snackbar>
  </div>
</template>

<script>
import popup from "~/plugins/alert/popup";

export default {
	data: () => ({
		options: {
			message: "",
		},
		show: false,
	}),
	beforeMount() {
		popup.event.$on("show", options => {
			this.options = options;
			this.show = true;
		});
	}
}
</script>

