const enum BuildOnlyEnv {
    IS_CHARTDB_IO = 'IS_CHARTDB_IO',
    APP_URL = 'APP_URL',
    HOST_URL = 'HOST_URL',
}

enum OverridableEnv {
    OPENAI_API_KEY = 'OPENAI_API_KEY',
    OPENAI_API_ENDPOINT = 'OPENAI_API_ENDPOINT',
    LLM_MODEL_NAME = 'LLM_MODEL_NAME',
    HIDE_CHARTDB_CLOUD = 'HIDE_CHARTDB_CLOUD',
    DISABLE_ANALYTICS = 'DISABLE_ANALYTICS',
}

export const OverridableEnvValues: OverridableEnv[] =
    Object.values(OverridableEnv);

export type Env = BuildOnlyEnv | OverridableEnv;

export function getBuildEnv(key: Env) {
    return (
        window.env?.[key] ??
        (import.meta.env[`VITE_${key}`] as string | undefined)
    );
}

export function getOverridableEnv(key: OverridableEnv) {
    return localStorage.getItem(key);
}

export function getEnv(key: OverridableEnv) {
    return getOverridableEnv(key) ?? getBuildEnv(key);
}

export function setOverridableEnv(key: OverridableEnv, value: string) {
    return localStorage.setItem(key, value);
}

export function removeOverridableEnv(key: OverridableEnv) {
    return localStorage.removeItem(key);
}

export function clearOverridableEnvs() {
    OverridableEnvValues.forEach(removeOverridableEnv);
}

export const IS_CHARTDB_IO: boolean =
    getBuildEnv(BuildOnlyEnv.IS_CHARTDB_IO) === 'true';
export const APP_URL: string | undefined = getBuildEnv(BuildOnlyEnv.APP_URL);
export const HOST_URL: string | undefined = getBuildEnv(BuildOnlyEnv.HOST_URL);

export let OPENAI_API_KEY: string | undefined = getEnv(
    OverridableEnv.OPENAI_API_KEY
);
export let OPENAI_API_ENDPOINT: string | undefined = getEnv(
    OverridableEnv.OPENAI_API_ENDPOINT
);
export let LLM_MODEL_NAME: string | undefined = getEnv(
    OverridableEnv.LLM_MODEL_NAME
);
export let HIDE_CHARTDB_CLOUD: boolean =
    getEnv(OverridableEnv.HIDE_CHARTDB_CLOUD) === 'true';
export let DISABLE_ANALYTICS: boolean =
    getEnv(OverridableEnv.DISABLE_ANALYTICS) === 'true';
