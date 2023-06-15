export type SecretInterfaceKeys = {
    name: string;
    payload: unknown;
};
export type SecretInterface<keys extends SecretInterfaceKeys = SecretInterfaceKeys> = {
    name: keys['name'];
    payload: keys['payload'];
};
export type SecretConfig<Event extends SecretInterface = SecretInterface> = {
    name: Event['name'];
};
