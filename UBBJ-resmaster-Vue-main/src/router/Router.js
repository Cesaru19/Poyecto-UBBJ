import { createRouter, createWebHistory } from "vue-router";
const base = "ubbj_site"
const routes = [{
        path: "/",
        name: "home",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Home.vue"),
    },
    {
        path: "/Login",
        name: "Login",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Auth/Login.vue"),
        props: (route) => {
            const { id, rolUsuario } = route.query;
            return {
                id,
                rolUsuario,
            };
        },
    },
    {
        path: "/recuperacion",
        name: "recuperacion",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Auth/Recuperacion.vue"),
        props: (route) => {
            const { id, rolUsuario } = route.query;
            return {
                id,
                rolUsuario,
            };
        },
    },
    {
        path: "/registro_usuarios",
        name: "registro_usuarios",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Registros/Registro_usuarios"
            ),
        props: (route) => {
            const { rolUsuario } = route.query;

            return {
                rolUsuario,
            };
        },
    },
    {
        path: "/registro_estudiante",
        name: "registro_estudiante",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Registros/Registro_estudiantes.vue"
            ),
    },
    {
        path: "/registro_docente",
        name: "registro_docente",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Registros/Registro_docentes.vue"
            ),
    },
    {
        path: "/registro_sedes",
        name: "registro_sedes",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Registros/Registro_sedes.vue"
            ),
    },
    {
        path: "/directorio",
        name: "directorio",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/Directorio.vue"),
    },
    {
        path: "/sedes",
        name: "sedesDGP",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Sedes_y_Carreras/Registros_DGP.vue"
            ),
    },
    {
        path: "/carreras",
        name: "carreras",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Sedes_y_Carreras/Carreras_y_Mayas.vue"
            ),
    },
    {
        path: "/areas_de_conocimiento",
        name: "areas_de_conocimiento",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Sedes_y_Carreras/Areas_de_conocimiento.vue"
            ),
    },
    {
        path: "/planes_de_estudio",
        name: "planes_de_estudio",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Sedes_y_Carreras/Planes_de_Estudio.vue"
            ),
    },
    {
        path: "/Instalaciones",
        name: "Instalaciones",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Sedes_y_Carreras/Instituciones.vue"
            ),
    },
    {
        path: "/Documentos/:documento",
        name: "Documentos",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/documents/Documentos.vue"
            ),
        props: (route) => {
            const { documento } = route.params;
            return {
                documento,
            };
        },
    },
    {
        path: "/Convocatorias",
        name: "Convocatorias",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Convocatorias/Convocatorias.vue"
            ),
    },
    {
        path: "/nuevas_sedes",
        name: "nuevas_sedes",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Convocatorias/Nuevas_sedes.vue"
            ),
    },
    {
        path: "/aspirante_a_docente",
        name: "aspirante_a_docente",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Convocatorias/Aspirantes_a_docente.vue"
            ),
    },
    {
        path: "/aspirante_a_estudiante",
        name: "aspirante_a_estudiante",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../views/Convocatorias/Aspirantes_a_estudiantes.vue"
            ),
    },
    {
        path: "/about",
        name: "about",
        component: () =>
            import ( /* webpackChunkName: "about" */ "../views/AboutView.vue"),
    },
    {
        path: "/notFount",
        name: "notFount",
        component: () =>
            import (
                /* webpackChunkName: "about" */
                "../components/shared/NotFoundPage.vue"
            ),
    },
    {
        path: "/:pathMatch(.*)*",
        redirect: { name: "notFount" },
    },
];

const router = createRouter({
    history: createWebHistory(base),
    routes,
});

export default router;