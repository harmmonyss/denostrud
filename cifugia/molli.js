const errorBandDef = {
    interpolate: true,
    // Other properties...
};

const interpolate = { ...(errorBandDef.interpolate ? { type: 'linear' } : {}) };
console.log(interpolate); // Output: { type: 'linear' }
