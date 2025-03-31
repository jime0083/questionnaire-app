<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" v-for="(question,index) in questions" :key="index">
                    <v-text-field v-model="answers[index]" :label="question" />
                </v-col>
            </v-row>
            <v-btn color="success" @click="submit" :disabled="!allAnswered">送信</v-btn>
        </v-container>
    </v-form>
</template>

<script>
export default{
    data(){
        return{
            question:[
                'あなたの名前は？',
                '好きな食べ物は？',
                '趣味は？'
            ],
            answers:[]
        };
    },

    computed:{
        allAnswered(){
            return this.answers.length===this.questions.length && this.answers.every(ans=>ans.trim() !=='');
        }
    },


    methods:{
        submit(){
            this.$emit('submit-answers', this.answers)
        }
    }
};

</script>