<template>
    <div>
      <template v-if="roles.includes('admin')">
        <AttenteAdministrateur />
      </template>
      <template v-if="roles.includes('responsable_master')">
        <AttenteResponsableMaster />
      </template>
      <template v-if="roles.includes('responsable_annee')">
        <AttenteResponsableAnnee />
      </template>
      <template v-if="roles.includes('enseignant')">
        <AttenteEnseignant />
      </template>
    </div>
  </template>
  
<script setup>
import { computed } from 'vue';
import { useStore } from 'vuex';

import AttenteAdministrateur from './AttenteAdministrateur.vue';
import AttenteEnseignant from './AttenteEnseignant.vue';
import AttenteResponsableAnnee from './AttenteResponsableAnnee.vue';
import AttenteResponsableMaster from './AttenteResponsableMaster.vue';

const store = useStore();
const roles = computed(() => store.state.userRoles || []);

</script>

  