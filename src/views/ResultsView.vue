<template>
    <v-container>
        <v-row justify="center">
            <v-col cols="12" md="8">
                <h1>アンケート結果</h1>
                <ResultList :answers="answers" />
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import ResultList from '../components/ResultList.vue';
import { computed } from 'vue';
import { useStore } from 'vuex';

export default{
    components:{
        ResultList,
    },
    setup(){
        const store=useStore();
        const answers=computed(()=>store.state.answers);

        return{answers};
    }
}
</script>