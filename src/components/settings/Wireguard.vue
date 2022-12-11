<template>
    <div class="grid flex align-items-center">
        <div class="flex col-4 col-offset-1">Private Key:</div>
        <div style="overflow-wrap: anywhere;" class="flex col-7">{{ vpnSettings?.Wireguard.PrivateKey ?? '-' }}</div>
    </div>
    <div class="grid flex align-items-center">
        <div class="flex col-4 col-offset-1">Preshared Key:</div>
        <div class="flex col-7">{{ vpnSettings?.Wireguard.PreSharedKey ?? '-' }}</div>
    </div>
    <div class="grid flex align-items-center">
        <div class="flex col-4 col-offset-1">Interface:</div>
        <div class="flex col-7">{{ vpnSettings?.Wireguard.Interface ?? '-' }}</div>
    </div>
    <div class="grid flex align-items-center">
        <div class="col-4 col-offset-1">Addresses:</div>
        <div class="flex col-7">
            <ul style="list-style: inside" class="pl-0">
                <li v-for="address in vpnSettings?.Wireguard.Addresses">
                    {{ address.IP }}
                </li>
            </ul>
        </div>
    </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useVpnInformationStore } from '@/stores/vpn';


const vpnInformationStore = useVpnInformationStore();
const { vpnSettings } = storeToRefs(vpnInformationStore);

</script>