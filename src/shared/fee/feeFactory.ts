
const feeMatrix = {
    free:   {
        whole:   require('./free'),
        free:    require('./free'),
        presets: require('./free')
    },
    flat:         {
        whole:   require('./flat'),
        free:    require('./flat'),
        presets: require('./flat')
    },
    ealing:       {
        whole:   require('./ealing'),
        free:    require('./ealing'),
        presets: require('./ealing-cg'),
    },
    big:          {
        whole:   require('./big'),
        free:    require('./free'),
        presets: require('./big')
    },
    vcamp:        {
        whole:   require('./free'),
        free:    require('./vcamp-free'),
        presets: require('./free')
    },
    commonground: {
        whole:   require('./free'),
        free:    require('./free'),
        presets: require('./cg-preset')
    }
};

function getFeeModel(event) {
    return feeMatrix[event.feeModel][event.partialDates];
};


export default getFeeModel