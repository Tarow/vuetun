import { ref, computed, type Ref } from "vue";
import { defineStore } from "pinia";
import type { IpInformationResponse } from "@/types/gluetun-publicip";
import { gluetunService } from "@/services/gluetun-api";
import type {
  VpnSettingsResponse,
  VpnStatusResponse,
} from "@/types/gluetun-vpn";

export const useVpnInformationStore = defineStore("vpnInformation", {
  state: (): VpnInformationState => ({
    vpnSettings: undefined,
    vpnStatus: undefined,
  }),

  actions: {
    fetchVpnSettings() {
      gluetunService
        .getVpnSettings()
        .then((response) => (this.vpnSettings = response.data));
    },
    fetchVpnStatus() {
      gluetunService
        .getVpnStatus()
        .then((response) => (this.vpnStatus = response.data));
    },
  },
});

export interface VpnInformationState {
  vpnSettings?: VpnSettingsResponse;
  vpnStatus?: VpnStatusResponse;
}
