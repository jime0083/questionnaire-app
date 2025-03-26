<template>
    <v-form>
        <v-container>
            <v-row>
                <v-col cols="12" v-for="(question,index) in questions" :key="index">
                    <v-text-field v-model="answers[index]"v:label="question" />
                </v-col>
            </v-row>
            <v-btn color="success" @click="submit">送信</v-btn>
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
    methods:{
        submit(){
            console.log('回答',this.answers);
        }
    }
};

</script>