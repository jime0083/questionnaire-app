<template>
    <v-list>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>質問{{ index +1 }}</v-list-item-title>
                <v-list-item-subtitle>{{ answer }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default{
    props:{
        answers:{
            type:Array,
            require:true,
        },
    },
};
</script>