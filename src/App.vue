<template>
  <v-app>
    <v-container>
      <v-row jsutify="center">
        <v-cal cols="12" md="8">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>簡易アンケートアプリ</v-toolbar-title>
          </v-toolbar>
          <router-view />
        </v-cal>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
export default{
  name:'App'
};
</script>