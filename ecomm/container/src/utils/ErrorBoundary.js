class MicroFrontendError extends Error {
    constructor(message) {
        super(message);
        this.name = 'MicroFrontendError';
    }
}

export const loadRemoteModule = async (loadFn) => {
    try {
        return await loadFn();
    } catch (error) {
        throw new MicroFrontendError(`Failed to load remote module: ${error.message}`);
    }
}; 