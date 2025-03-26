<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h1>アンケート</h1>
                <QuestionnaireForm />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import QuestionnaireForm from '../components/QuestionnaireForm.vue'

export default{
    components:{
        QuestionnaireForm,
    }
}
</script>