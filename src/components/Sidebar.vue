	<template>
		<aside :class="`${isExpanded ? 'is-expanded' : ''}`">
		<div class="logo">
			<img :src="logoURL" alt="Vue" /> 
		</div>
	
		<div class="menu-toggle-wrap">
			<button class="menu-toggle" @click="toggleMenu">
			<span class="material-icons">keyboard_double_arrow_right</span>
			</button>
		</div>
	
		<h3>Menu</h3>
		<div class="menu">
			
				<div  class="button" :to="{ name: 'Attente' }">
				<span class="material-icons">pause</span>
				<span class="text">Actions En Attente</span>
				</div>
			
	
			<div  @click="toggleMenuItem('enseignements')" class="button" v-if="roles.includes('responsable_master')" >

				<span class="material-icons">school</span>
				<span class="text">Gestion des enseignements</span>
			</div>


							<div v-if="menuItems.enseignements" class="sub-menu ">

					<div v-if="roles.includes('responsable_master')" @click="() => navigateTo('AnneeList')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer" >
					<span class="text text-light hover:text-primary">Les Enseignements</span>
					</div>

					<div v-if="roles.includes('responsable_master')"  class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
					<span class="text text-light hover:text-primary">Les Enseignants</span>
					</div>


					</div>
			

			<div @click="toggleMenuItem('attribution')" class="button" v-if="roles.includes('enseignant') || roles.includes('responsable_master')">
			<span class="material-icons">hourglass_empty</span>
			<span class="text">Attribution des heures</span>
			</div>

			<div v-if="menuItems.attribution" class="sub-menu ">

					<div v-if="roles.includes('responsable_master')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer" >
					<span class="text text-light hover:text-primary">Mes Demandes</span>
					</div>

					<div v-if="roles.includes('enseignant')"  class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
					<span class="text text-light hover:text-primary">Demandes Reçues</span>
					</div>

					<div v-if="roles.includes('enseignant')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
					<span class="text text-light hover:text-primary">Mes Voeux</span>
					</div>

					<div v-if="roles.includes('responsable_master')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
					<span class="text text-light hover:text-primary">Voeux Reçues</span>
					</div>

					<div v-if="roles.includes('responsable_master')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
					<span class="text text-light hover:text-primary">UEs avec heures manquantes</span>
					</div>

			</div>

	
			<div v-if="roles.includes('enseignant') || roles.includes('responsable_annee') || roles.includes('admin') "  @click="toggleMenuItem('documentation')" class="button">
			<span class="material-icons">description</span>
			<span class="text">Documentation Et Validation Des Heures</span>
			</div>
			<div v-if="menuItems.documentation" class="sub-menu">

			<div v-if="roles.includes('enseignant')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
				<span class="text">Mes Demandes de fiche d'intervention semestrielles</span>
			</div>

			<div v-if="roles.includes('responsable_annee') || roles.includes('admin')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
				<span class="text">Voir les demandes de fiche d'intervention semestrielles</span>
			</div>

			<div v-if="roles.includes('responsable_annee') || roles.includes('admin')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
				<span class="text">Génération document de comparaison similaire à la fiche des services effectués</span>
			</div>


			</div>

			<!-- Repeat for other main menu items -->
		<div v-if="roles.includes('admin')" @click="toggleMenuItem('utilisateurs')" class="button">
			<span class="material-icons">admin_panel_settings</span>
			<span class="text">Administration</span>
			</div>
			<div v-if="menuItems.utilisateurs" class="sub-menu">

				<div v-if="roles.includes('admin')" @click="() => navigateTo('ActivationComptes')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
    <span class="text">Utilisateurs En Attente</span>
</div>

			<div v-if="roles.includes('admin') || roles.includes('admin')" @click="() => navigateTo('ListUsers')" class="button hover:bg-dark-alt transition duration-200 ease-in-out cursor-pointer">
				<span class="text">Tous les utilisateurs</span>
			</div>

			</div>



		</div>
		<div class="user-info flex flex-col justify-end" v-if="isExpanded">
	<p>{{ username }}</p>
	<button @click="logout">Logout</button>
	</div>
		</aside>
	</template>

	<script setup>
	import { ref, reactive } from 'vue'
	import logoURL from '../assets/logo.png'
	import { computed } from 'vue';
	import { useStore } from 'vuex';
	import { useRouter } from 'vue-router';

    const router = useRouter();


	const store = useStore() 	
	const roles = computed(() => store.state.userRoles);


	const firstName = computed(() => store.getters.getUserFirstName);
	const lastName = computed(() => store.getters.getUserLastName);

	const username = computed(() => `${firstName.value} ${lastName.value}`);



	console.log('mes roles :', roles);

	const isExpanded = ref(localStorage.getItem("is_expanded") === "true")
	const menuItems = reactive({
	actions: false,
	enseignements: false,
	attribution: false,
	documentation: false,
	utilisateurs: false,
	});



	const toggleMenu = () => {
	isExpanded.value = !isExpanded.value
	Object.keys(menuItems).forEach(key => {
		menuItems[key] = false;
	});

	localStorage.setItem("is_expanded", isExpanded.value)
	}

	const toggleMenuItem = (item) => {
	menuItems[item] = !menuItems[item];
	}

	const navigateTo = (routeName) => {
    router.push({ name: routeName });
}



	const logout = () => {
	store.commit('setAuth', false);
	store.commit('setUserRoles', []);
	store.commit('setUserFirstName', '');
	store.commit('setUserLastName', '');
	localStorage.removeItem('userToken');
	window.location = '/login';
	};



	</script>	


		<style scoped>
		aside {
			display: flex;
			flex-direction: column;

			background-color: var(--dark);
			color: var(--light);

			width: calc(2rem + 32px);
			overflow: hidden;
			min-height: 100vh;
			padding: 1rem;

			transition: 0.2s ease-in-out;

			.flex {
				flex: 1 1 0%;
			}

			.logo {
				margin-bottom: 1rem;

				img {
					width: 2rem;
				}
			}

			.menu-toggle-wrap {
				display: flex;
				justify-content: flex-end;
				margin-bottom: 1rem;

				position: relative;
				top: 0;
				transition: 0.2s ease-in-out;

				.menu-toggle {
					transition: 0.2s ease-in-out;
					.material-icons {
						font-size: 2rem;
						color: var(--light);
						transition: 0.2s ease-out;
					}
					
					&:hover {
						.material-icons {
							color: var(--primary);
							transform: translateX(0.5rem);
						}
					}
				}
			}

			h3, .button .text {
				opacity: 0;
				transition: opacity 0.3s ease-in-out;
			}

			h3 {
				color: var(--grey);
				font-size: 0.875rem;
				margin-bottom: 0.5rem;
				text-transform: uppercase;
			}

			.menu {
				margin: 0 -1rem;

				.button {
					display: flex;
					align-items: center;
					text-decoration: none;
					cursor: pointer;

					transition: 0.2s ease-in-out;
					padding: 0.5rem 1rem;

					.material-icons {
						font-size: 2rem;
						color: var(--light);
						transition: 0.2s ease-in-out;
					}
					.text {
						color: var(--light);
						transition: 0.2s ease-in-out;
					}

					&:hover {
						background-color: var(--dark-alt);

						.material-icons, .text {
							color: var(--primary);
						}
					}

					&.router-link-exact-active {
						background-color: var(--dark-alt);
						border-right: 5px solid var(--primary);

						.material-icons, .text {
							color: var(--primary);
						}
					}
				}
			}

			.footer {
				opacity: 0;
				transition: opacity 0.3s ease-in-out;

				p {
					font-size: 0.875rem;
					color: var(--grey);
				}
			}

			&.is-expanded {
				width: var(--sidebar-width);

				.menu-toggle-wrap {
					top: -3rem;
					
					.menu-toggle {
						transform: rotate(-180deg);
					}
				}

				h3, .button .text {
					opacity: 1;
				}

				.button {
					.material-icons {
						margin-right: 1rem;
					}
				}

				.footer {
					opacity: 0;
				}
			}

			.user-info {
		margin-top: auto; /* Push user info and logout button to the bottom of the sidebar */
		}

		.user-info p {
		color: var(--light);
		margin-bottom: 0.5rem;
		}

		.user-info button {
		background-color: var(--primary);
		color: var(--light);
		border: none;
		padding: 0.5rem 1rem;
		border-radius: 4px;
		cursor: pointer;
		transition: background-color 0.3s ease;

		&:hover {
			background-color: var(--primary-dark);
		}
		}


			@media (max-width: 1024px) {
				position: absolute;
				z-index: 99;
			}
		}
		</style>