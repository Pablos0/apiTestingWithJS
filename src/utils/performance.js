
export const measure = async (fn) => {
    const start = Date.now();
    const result = await fn();
    return { response: result, duration: Date.now() - start };
};

export default measure;