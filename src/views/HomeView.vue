<template>
  <div class="grid">
    <div class="col-6 col-sm:12 col-offset-3">
      <div class="h-5rem border-round text-3xl font-bold p-card flex justify-content-center align-items-center">
        Vuetun
      </div>
    </div>
    <div class="col-6 col-offset-3">
      <div class="grid">
        <div class="col-6">
          <VpnSettings />
        </div>
        <div class="col-6">
          <div class="col-12 m-0 p-0">
            <PublicIp />
          </div>
          <div class="col-12 p-0 pt-3">
            <UpdaterStatus />
          </div>
          <div class="col-12 p-0 pt-3">
            <DnsStatus />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import PublicIp from '@/components/PublicIp.vue';
import UpdaterStatus from '@/components/UpdaterStatus.vue'
import DnsStatus from '@/components/DnsStatus.vue';
import VpnSettings from '@/components/VpnSettings.vue';
</script>
