import { ref, computed, type Ref } from 'vue'
import { defineStore } from 'pinia'
import type { IpInformationResponse } from '@/types/gluetun-publicip'
import { gluetunService } from '@/services/gluetun-api'
import type { UpdaterStatusResponse } from '@/types/gluetun-updater'


export const useUpdaterStore = defineStore('updater', {

  state: (): UpdaterState => ({
    updaterStatus: undefined
  }),

  actions: {
    fetchUpdaterStatus(){
      gluetunService.getUpdaterStatus().then(response => this.updaterStatus = response.data);
    }
  }
})

export interface UpdaterState {
  updaterStatus?: UpdaterStatusResponse
}