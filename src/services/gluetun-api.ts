import type { DnsStatusReponse } from "@/types/gluetun-dns";
import type { IpInformationResponse } from "@/types/gluetun-publicip";
import type { UpdaterStatusResponse } from "@/types/gluetun-updater";
import type {
  VpnSettingsResponse,
  VpnStatusResponse,
} from "@/types/gluetun-vpn";
import axios from "axios";

const api = axios.create({
  baseURL: "https://gluetun.ntasler.de/v1",
  headers: {
    Accept: "application/json",
  },
});

class GluetunService {
  getPublicIpInformation() {
    return api.get<IpInformationResponse>("/publicip/ip");
  }

  getVpnStatus() {
    return api.get<VpnStatusResponse>("/vpn/status");
  }

  getVpnSettings() {
    return api.get<VpnSettingsResponse>("/vpn/settings");
  }

  getDnsStatus() {
    return api.get<DnsStatusReponse>("/dns/status");
  }

  getUpdaterStatus() {
    return api.get<UpdaterStatusResponse>("/updater/status");
  }
}

export const gluetunService = new GluetunService();
