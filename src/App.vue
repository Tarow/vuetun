
<template>
    <HomeView class="w-12"/>
</template>

<script setup lang="ts">
import { onBeforeMount, onBeforeUnmount } from 'vue';
import { usePublicIpStore } from './stores/publicIp';
import { useVpnInformationStore } from './stores/vpn';
import { useDnsStore } from './stores/dns';
import { useUpdaterStore } from './stores/updater';
import HomeView from './views/HomeView.vue';

const publicIpStore = usePublicIpStore();
const vpnInformationStore = useVpnInformationStore();
const dnsStore = useDnsStore();
const updaterStore = useUpdaterStore();

var publicIpInterval: number;

onBeforeMount(() => {
    publicIpInterval = setInterval(() => {
        publicIpStore.fetchPublicIpInformation();
        vpnInformationStore.fetchVpnSettings();
        dnsStore.fetchDnsStatus();
        updaterStore.fetchUpdaterStatus();
    }, 5000);
})

onBeforeUnmount(() => {
    clearInterval(publicIpInterval);
})


</script>

<style>
body {
  background-color: var(--surface-0);
  font-family: var(--font-family);
  font-weight: 400;
  color: var(--text-color);
}
</style>