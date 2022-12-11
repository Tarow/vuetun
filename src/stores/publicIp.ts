import { defineStore } from "pinia";
import type { IpInformationResponse } from "@/types/gluetun-publicip";
import { gluetunService } from "@/services/gluetun-api";

export const usePublicIpStore = defineStore("publicIp", {
  state: (): PublicIpState => ({
    publicIpInformation: undefined,
  }),

  actions: {
    fetchPublicIpInformation() {
      gluetunService
        .getPublicIpInformation()
        .then((response) => (this.publicIpInformation = response.data));
    },
  },
});

export interface PublicIpState {
  publicIpInformation?: IpInformationResponse;
}
