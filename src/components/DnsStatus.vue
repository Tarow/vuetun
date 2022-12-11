<template>
    <Card>
        <template #title>
            DNS
        </template>
        <template #content>
            <div class="grid flex align-items-center">
                <div class="flex col-fixed">
                    <i-heroicons-outline-status-online></i-heroicons-outline-status-online>
                </div>
                <div class="flex col-4">Status:</div>
                <div class="flex col-fixed">{{ dnsStatus?.status ?? 'unknown' }}</div>
            </div>
        </template>
        <template #footer>
            <Button icon="pi pi-check" label="Start" />
            <Button icon="pi pi-times" label="Stop" class="p-button-secondary" style="margin-left: .5em" />
        </template>
    </Card>

</template>

<script setup lang="ts">
import { useDnsStore } from '@/stores/dns';
import { storeToRefs } from 'pinia';
import Card from 'primevue/card';
import Button from 'primevue/button';

const dnsStore = useDnsStore();
const { dnsStatus } = storeToRefs(dnsStore);

</script>

