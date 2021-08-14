// archivo de configuración de Jest
import type {Config} from '@jest/types';

const config: Config.InitialOptions = {
    verbose: true,
    collectCoverage:true,
    maxWorkers:1,
    moduleFileExtensions:["ts", "js", "tsx"],
    transform: {
        "^.+\\.(ts|tsx)$": "ts-jest"
    },
    globals:{
        "NODE_ENV":"test"
    }
}

export default config;