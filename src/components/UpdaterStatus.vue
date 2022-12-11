<template>
    <Card>
        <template #title>
            Updater
        </template>
        <template #content>
            <div class="grid flex align-items-center">
                <div class="flex col-fixed">
                    <i-heroicons-outline-status-online></i-heroicons-outline-status-online>
                </div>
                <div class="flex col-4">Status:</div>
                <div class="flex col-fixed">{{ updaterStatus?.status ?? 'unknown' }}</div>
            </div>
        </template>
        <template #footer styyle="mr">
            <Button>
                <i-material-symbols-cloud-sync-outline></i-material-symbols-cloud-sync-outline>
                <div style="margin-left: .5em">Update</div>
            </Button>
        </template>
    </Card>

</template>

<script setup lang="ts">
import { useUpdaterStore } from '@/stores/updater';
import { storeToRefs } from 'pinia';
import Card from 'primevue/card';
import Button from 'primevue/button';

const updaterStore = useUpdaterStore();
const { updaterStatus } = storeToRefs(updaterStore);

</script>