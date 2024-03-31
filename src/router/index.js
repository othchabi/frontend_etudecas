import { createRouter, createWebHistory } from "vue-router";
import { store } from "../store/authStore";
import Dashboard from "../views/Dashboard.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "auth",
      component: () => import("../views/auth/Authentification.vue"),
      redirect: "login",
      children: [
        {
          path: "login",
          name: "login",
          component: () => import("../views/auth/LoginForm.vue"),
        },
        {
          path: "register",
          name: "register",
          component: () => import("../views/auth/RegisterForm.vue"),
        },
      ],
    },
    {
      path: "/dashboard",
      name: "Dashboard",
      component: Dashboard,
      meta: { requiresAuth: true },
      children: [
        {
          path: "attente",
          name: "Attente",
          component: () => import("../components/Attente/ActionsAttente.vue"),
        },
        {
          path: "users",
          name: "Users",
          component: () => import("../components/Administration/Users.vue"),
          children: [
            {
              path: "",
              name: "ListUsers",
              component: () =>
                import("../components/Administration/ListUsers.vue"),
            },
            {
              path: "activation-comptes",
              name: "ActivationComptes",
              component: () =>
                import("../components/Administration/ActivationComptes.vue"),
            },
            {
              path: "create",
              name: "CreateUser",
              component: () =>
                import("../components/Administration/CreateUser.vue"),
            },
            {
              path: ":userId",
              component: () => import("../components/Administration/User.vue"),
              children: [
                {
                  path: "",
                  name: "DetailsUser",
                  component: () =>
                    import("../components/Administration/DetailsUser.vue"),
                },
                {
                  path: "edit",
                  name: "EditUser",
                  component: () =>
                    import("../components/Administration/EditUser.vue"),
                },
              ],
            },
          ],
        },

        {
          path: "annees-universitaire",
          name: "Annees",
          component: () =>
            import(
              "../components/GestionEnseignements/AnneeUniversitaire/Annees.vue"
            ),
          children: [
            {
              path: "",
              name: "AnneeList",
              component: () =>
                import(
                  "../components/GestionEnseignements/AnneeUniversitaire/AnneeList.vue"
                ),
            },
            {
              path: "create",
              name: "CreateAnnee",
              component: () =>
                import(
                  "../components/GestionEnseignements/AnneeUniversitaire/CreateAnnee.vue"
                ),
            },
            {
              path: ":anneeId",
              name: "Annee",
              component: () =>
                import(
                  "../components/GestionEnseignements/AnneeUniversitaire/Annee.vue"
                ),
              children: [
                {
                  path: "edit",
                  name: "EditAnnee",
                  component: () =>
                    import(
                      "../components/GestionEnseignements/AnneeUniversitaire/EditAnnee.vue"
                    ),
                },
                {
                  path: "niveaux",
                  name: "Niveaux",
                  component: () =>
                    import(
                      "../components/GestionEnseignements/Niveaux/Niveaux.vue"
                    ),
                  children: [
                    {
                      path: "",
                      name: "NiveauList",
                      component: () =>
                        import(
                          "../components/GestionEnseignements/Niveaux/NiveauList.vue"
                        ),
                    },
                    {
                      path: "create",
                      name: "CreateNiveau",
                      component: () =>
                        import(
                          "../components/GestionEnseignements/Niveaux/CreateNiveau.vue"
                        ),
                    },
                    {
                      path: ":niveauId",
                      component: () =>
                        import(
                          "../components/GestionEnseignements/Niveaux/Niveau.vue"
                        ),
                      children: [
                        {
                          path: "",
                          name: "DetailsNiveau",
                          component: () =>
                            import(
                              "../components/GestionEnseignements/Niveaux/DetailsNiveau.vue"
                            ),
                        },
                        {
                          path: "edit",
                          name: "EditNiveau",
                          component: () =>
                            import(
                              "../components/GestionEnseignements/Niveaux/EditNiveau.vue"
                            ),
                        },
                        {
                          path: "parcours",
                          name: "Parcours",
                          component: () =>
                            import(
                              "../components/GestionEnseignements/Parcours/Parcours.vue"
                            ),
                          children: [
                            {
                              path: "",
                              name: "ParcoursList",
                              component: () =>
                                import(
                                  "../components/GestionEnseignements/Parcours/ParcoursList.vue"
                                ),
                            },
                            {
                              path: "create",
                              name: "CreateParcours",
                              component: () =>
                                import(
                                  "../components/GestionEnseignements/Parcours/CreateParcours.vue"
                                ),
                            },
                            {
                              path: ":parcoursId",
                              component: () =>
                                import(
                                  "../components/GestionEnseignements/Parcours/Parcour.vue"
                                ),
                              children: [
                                {
                                  path: "",
                                  name: "DetailsParcours",
                                  component: () =>
                                    import(
                                      "../components/GestionEnseignements/Parcours/DetailsParcours.vue"
                                    ),
                                },
                                {
                                  path: "edit",
                                  name: "EditParcours",
                                  component: () =>
                                    import(
                                      "../components/GestionEnseignements/Parcours/EditParcours.vue"
                                    ),
                                },
                              ],
                            },
                          ],
                        },
                        {
                          path: "ues",
                          name: "UE",
                          component: () =>
                            import(
                              "../components/GestionEnseignements/UEs/UEs.vue"
                            ),
                          children: [
                            {
                              path: "",
                              name: "UEList",
                              component: () =>
                                import(
                                  "../components/GestionEnseignements/UEs/UEList.vue"
                                ),
                            },
                            {
                              path: "create",
                              name: "CreateUE",
                              component: () =>
                                import(
                                  "../components/GestionEnseignements/UEs/CreateUE.vue"
                                ),
                            },
                            {
                              path: ":ueId",
                              component: () =>
                                import(
                                  "../components/GestionEnseignements/UEs/UE.vue"
                                ),
                              children: [
                                {
                                  path: "",
                                  name: "DetailsUE",
                                  component: () =>
                                    import(
                                      "../components/GestionEnseignements/UEs/DetailsUE.vue"
                                    ),
                                },
                                {
                                  path: "edit",
                                  name: "EditUE",
                                  component: () =>
                                    import(
                                      "../components/GestionEnseignements/UEs/EditUE.vue"
                                    ),
                                },


                                {
                                  path: "groupes",
                                  name: "Groupes",
                                  component: () =>
                                    import(
                                      "../components/GestionEnseignements/Groupes/Groupes.vue"
                                    ),
                                  children: [
                                    
                                    {
                                      path: "",
                                      name: "ListGroupes",
                                      component: () =>
                                        import(
                                          "../components/GestionEnseignements/Groupes/ListGroupes.vue"
                                        ),
                                    },
                                    {
                                      path: "create",
                                      name: "CreateGroupe",
                                      component: () =>
                                        import(
                                          "../components/GestionEnseignements/Groupes/CreateGroupe.vue"
                                        ),
                                    },

                                    {
                                      path: ":groupeId",
                                      component: () =>
                                        import(
                                          "../components/GestionEnseignements/Groupes/Groupe.vue"
                                        ),
                                      children: [
                                        {
                                          path: "",
                                          name: "DetailsGroupe",
                                          component: () =>
                                            import(
                                              "../components/GestionEnseignements/Groupes/DetailsGroupe.vue"
                                            ),
                                        },
                                        {
                                          path: "edit",
                                          name: "EditGroupe",
                                          component: () =>
                                            import(
                                              "../components/GestionEnseignements/Groupes/EditGroupe.vue"
                                            ),
                                        },



                                      ]}

                                  ]
                                },



                              ],
                            },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
          ],
        },
      ],
    },
  ],
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!store.getters.isAuthenticated) {
      next({ name: "Login", query: { redirect: to.fullPath } });
    } else {
      next();
    }
  } else {
    next();
  }
});

export { router, store };
