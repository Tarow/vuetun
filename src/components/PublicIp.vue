<template>
    <Card>
        <template #title>
            Public IP Information
        </template>
        <template #content>
            <div class="grid flex align-items-center">
                <div class="flex col-fixed">
                    <i-eos-icons-ip-outlined></i-eos-icons-ip-outlined>
                </div>
                <div class="flex col-4">Public IP:</div>
                <div class="flex col-fixed">{{ publicIpInformation?.public_ip ?? 'unknown' }}</div>
            </div>
            <div class="grid flex align-items-center">
                <div class="flex col-fixed">
                    <i-healthicons-city-outline></i-healthicons-city-outline>
                </div>
                <div class="flex col-4">Region:</div>
                <div class="flex col-fixed">{{ publicIpInformation?.region ?? 'unknown' }}</div>
            </div>
            <div class="grid flex align-items-center">
                <div class="flex col-fixed">
                    <i-ri-earth-line></i-ri-earth-line>
                </div>
                <div class="flex col-4">Country:</div>
                <div class="flex col-fixed">{{ publicIpInformation?.country ?? 'unknown' }}</div>
            </div>
        </template>
    </Card>

</template>

<script setup lang="ts">
import { usePublicIpStore } from '@/stores/publicIp';
import { storeToRefs } from 'pinia';
import Card from 'primevue/card';

const publicIpStore = usePublicIpStore();
const { publicIpInformation } = storeToRefs(publicIpStore);

</script>

