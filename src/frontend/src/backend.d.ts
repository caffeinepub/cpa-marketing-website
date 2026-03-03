import type { Principal } from "@icp-sdk/core/principal";
export interface Some<T> {
    __kind__: "Some";
    value: T;
}
export interface None {
    __kind__: "None";
}
export type Option<T> = Some<T> | None;
export interface ContactSubmission {
    subject: string;
    name: string;
    email: string;
    message: string;
    timestamp: Time;
}
export type Time = bigint;
export interface backendInterface {
    addAdmin(newAdmin: Principal): Promise<void>;
    getAllContactSubmissions(): Promise<Array<ContactSubmission>>;
    getSubscribers(): Promise<Array<string>>;
    initialize(): Promise<void>;
    isSubscribed(email: string): Promise<boolean>;
    submitContactForm(name: string, email: string, subject: string, message: string): Promise<void>;
    subscribe(email: string): Promise<bigint>;
    unsubscribe(email: string): Promise<void>;
}
