import { createRouter,createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import QuestionnaireView from "../views/QuestionnaireView.vue";
import ResultsView from "../views/ResultsView.vue";

const routes =[
    {path:'/',component:HomeView},
    {path:'/questionnaire',component:QuestionnaireView},
    {path:'/result',component:ResultsView},
];

const router=createRouter({
    history:createWebHistory(),
    routes,
});

export default router;