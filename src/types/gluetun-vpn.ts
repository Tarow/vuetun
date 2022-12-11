export interface VpnStatusResponse {
  status: string;
}

export interface VpnSettingsResponse {
  Type: string;
  Provider: ProviderSettings;
  OpenVPN: OpenVpnSettings;
  Wireguard: WireguardSettings;
}

export interface ProviderSettings {
  Name: string;
  ServerSelection: ServerSelection;
  PortForwarding: PortForwarding;
}

export interface ServerSelection {
  VPN: string;
  TargetIP: string;
  Countries: any;
  Regions: any;
  Cities: any;
  ISPs: any;
  Names: any;
  Numbers: any;
  Hostnames: string[];
  OwnedOnly: boolean;
  FreeOnly: boolean;
  PremiumOnly: boolean;
  StreamOnly: boolean;
  MultiHopOnly: boolean;
  OpenVPN: OpenVpnServerSelection;
  Wireguard: WireguardServerSelection;
}

export interface OpenVpnServerSelection {
  ConfFile: string;
  TCP: boolean;
  CustomPort: number;
  PIAEncPreset: string;
}

export interface WireguardServerSelection {
  EndpointIP: string;
  EndpointPort: number;
  PublicKey: string;
}

export interface PortForwarding {
  Enabled: boolean;
  Filepath: string;
}

export interface OpenVpnSettings {
  Version: string;
  User: string;
  Password: string;
  ConfFile: string;
  Ciphers: any;
  Auth: string;
  Cert: string;
  Key: string;
  EncryptedKey: string;
  KeyPassphrase: string;
  PIAEncPreset: string;
  MSSFix: number;
  Interface: string;
  ProcessUser: string;
  Verbosity: number;
  Flags: any;
}

export interface WireguardSettings {
  PrivateKey: string;
  PreSharedKey: string;
  Addresses: Address[];
  Interface: string;
}

export interface Address {
  IP: string;
  Mask: string;
}
