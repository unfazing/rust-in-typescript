import { initialise } from "conductor/dist/conductor/runner/util/"
import { RustConductorEvaluator } from './RustConductorEvaluator.js'

const {runnerPlugin, conduit} = initialise(RustConductorEvaluator);