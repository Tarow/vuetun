<template>
    <Card>
        <template #title>
            <div>Settings</div>
        </template>
        <template #content>
            <div class="grid flex align-items-center">
                <div class="flex col-1">
                    <i-material-symbols-shield></i-material-symbols-shield>
                </div>
                <div class="flex col-4">Type:</div>
                <div v-if="vpnSettings?.Type === 'wireguard'" class="flex col-fixed align-items-center">
                    <span class="pr-3">Wireguard</span>
                    <i-simple-icons-wireguard
                        style="width: 2rem; height: 2rem; color: white"></i-simple-icons-wireguard>
                </div>
                <div v-else-if="vpnSettings?.Type === 'openvpn'" class="flex col-fixed align-items-center">
                    <span class="pr-3">Wireguard</span>
                    <i-simple-icons-openvpn style="width: 2rem; height: 2rem; color: white"></i-simple-icons-openvpn>
                </div>

                <div v-else class="flex col-fixed align-items-center">
                    <span>{{ vpnSettings?.Type ?? 'Unknown' }}</span>
                </div>
            </div>
            <div class="grid flex align-items-center">
                <div class="flex col-4 col-offset-1">Provider:</div>
                <div class="flex col-7">{{ vpnSettings?.Provider.Name }}</div>
            </div>
            <Divider align="center">Server Selection</Divider>
            <Provider />

            <div v-if="vpnSettings?.Type === 'wireguard'">
                <Divider align="center">Wireguard</Divider>
                <Wireguard v-if="vpnSettings?.Type === 'wireguard'" />
            </div>

        </template>
    </Card>

</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import Card from 'primevue/card';
import Divider from 'primevue/divider';
import Provider from './settings/Provider.vue';
import { useVpnInformationStore } from '@/stores/vpn';
import Wireguard from './settings/Wireguard.vue';

const vpnInformationStore = useVpnInformationStore();
const { vpnSettings } = storeToRefs(vpnInformationStore);

</script>

<style>
.p-divider-solid.p-divider-horizontal:before {
    border-top-style: solid !important;
}

.p-divider-dashed.p-divider-horizontal:before {
    border-top-style: dashed !important;
}

.p-divider-solid.p-divider-vertical:before {
    border-left-style: solid !important;
}
</style>