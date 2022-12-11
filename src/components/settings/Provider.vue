<template>
    <div class="grid flex align-items-center">
        <div class="flex col-4 col-offset-1">VPN:</div>
        <div class="flex col-7">{{ vpnSettings?.Provider.ServerSelection.VPN ?? '-'}}</div>
    </div>
    <div class="grid flex align-items-center">
        <div class="flex col-4 col-offset-1">Countries:</div>
        <div class="flex col-7">{{ vpnSettings?.Provider.ServerSelection.Countries ?? '-' }}</div>
    </div>
    <div class="grid flex align-items-center">
        <div class="flex col-4 col-offset-1">Regions:</div>
        <div class="flex col-7">{{ vpnSettings?.Provider.ServerSelection.Regions ?? '-'}}</div>
    </div>
    <div class="grid flex align-items-center">
        <div class="flex col-4 col-offset-1">Cities:</div>
        <div class="flex col-7">{{ vpnSettings?.Provider.ServerSelection.Cities ?? '-' }}</div>
    </div>
    <div class="grid flex align-items-center">
        <div class="col-4 col-offset-1">Hostnames:</div>
        <div class="flex col-7">
            <ul style="list-style: inside" class="pl-0" >
                <li v-for="hostname in vpnSettings?.Provider.ServerSelection.Hostnames">
                    {{ hostname }}
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