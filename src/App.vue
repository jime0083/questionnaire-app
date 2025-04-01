<template>
  <v-app>
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="8">
          <v-toolbar color="primary" dark>
            <v-toolbar-title>簡易アンケートアプリ</v-toolbar-title>
          </v-toolbar>
          <v-main>
            <router-view />
          </v-main>
        </v-col>
      </v-row>
    </v-container>
  </v-app>
</template>


<script>
export default{
  name:'App'
};
</script>