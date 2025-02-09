import * as fs from "node:fs";
import * as sinon from "sinon";
import * as chai from "chai";
import * as utils from "../../dist/index.js";
import * as lib from "../../dist/lib/index.js";
import * as path from "path";
import { randomBytes } from "node:crypto";
import chaiAsPromised from "chai-as-promised";

chai.use(chaiAsPromised);

const __dirname = import.meta.dirname;

global.__dirname = __dirname;
global.expect = chai.expect;
global.fs = fs;
global.path = path;
global.sinon = sinon;
global.randomBytes = randomBytes;
Object.keys(utils).forEach((key) => {
  global[key] = utils[key];
});
Object.keys(lib).forEach((key) => {
  global[key] = lib[key];
});
