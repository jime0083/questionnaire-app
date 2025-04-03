<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h1>アンケート</h1>
                <QuestionnaireForm @submit-answers="handleSubmit" />
                <div v-show="submitted">
                    <h2>回答内容</h2>
                    <ul>
                        <li v-for="(answer,index) in answers" :key="index">
                            {{ answer }}
                        </li>
                    </ul>
                </div>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import QuestionnaireForm from '../components/QuestionnaireForm.vue'

export default{
    components:{
        QuestionnaireForm,
    },
    data(){
        return{
            answers:[],
            submitted:false,
        };
    },
    methods:{
        handleSubmit(answers){
            this.answers=answers;
            this.submitted=true;
            console.log("アンケートが送信されました:", this.answers);
        }
    },
    mounted() {
        console.log("✅ QuestionnaireView.vue がマウントされました！");
        console.log("質問リスト:", this.questions);
    }
};
</script>