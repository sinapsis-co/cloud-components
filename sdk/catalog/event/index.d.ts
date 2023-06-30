export type EventInterfaceKeys = {
    name: string;
    payload: unknown;
};
export type EventInterface<keys extends EventInterfaceKeys = EventInterfaceKeys> = {
    name: keys['name'];
    payload: keys['payload'];
};
export type EventConfig<Event extends EventInterface = EventInterface> = {
    name: Event['name'];
    source: string;
    detail?: {
        [key: string]: any;
    };
};
