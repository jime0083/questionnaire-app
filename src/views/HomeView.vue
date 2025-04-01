<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h1>簡易アンケートアプリ</h1>
                <v-btn color="primary" @click="$router.push('/questionnaire')">
                    アンケートを開始
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
export default {
  mounted() {
    console.log("✅ HomeView.vue がマウントされました");
  }
};
</script>