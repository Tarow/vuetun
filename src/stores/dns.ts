import { defineStore } from "pinia";
import { gluetunService } from "@/services/gluetun-api";
import type { DnsStatusReponse } from "@/types/gluetun-dns";

export const useDnsStore = defineStore("dns", {
  state: (): DnsState => ({
    dnsStatus: undefined,
  }),

  actions: {
    fetchDnsStatus() {
      gluetunService
        .getDnsStatus()
        .then((response) => (this.dnsStatus = response.data));
    },
  },
});

export interface DnsState {
  dnsStatus?: DnsStatusReponse;
}
