import { createRouter,createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionnaireView from "../views/QuestionnaireView.vue";

const routes =[
    {path:'/',component:HomeView},
    {path:'/questionnaire',component:QuestionnaireView}
];

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;