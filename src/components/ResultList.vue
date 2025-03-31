<template>
    <v-list>
        <v-list-item>
            <v-list-item-content>
                <v-list-item-title>質問{{ index +! }}</v-list-item-title>
                <v-list-item-subtitle>{{ answer }}</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>
    </v-list>
</template>

<script>
export default{
    props:{
        answers:{
            tyoe:Array,
            require:true,
        },
    },
};
</script>