"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Sotez = void 0;
var tez_core_1 = require("./tez-core");
var key_1 = require("./key");
var contract_1 = require("./contract");
var forge_1 = require("./forge");
var utility_1 = require("./utility");
var constants_1 = require("./constants");
var DEFAULT_FEE = 1420;
/**
 * Main Sotez Library
 *
 * @example
 * import { Sotez } from 'sotez';
 * const sotez = new Sotez('https://127.0.0.1:8732', 'main', { defaultFee: 1275, useMutez: false });
 * await sotez.importKey('edskRv6ZnkLQMVustbYHFPNsABu1Js6pEEWyMUFJQTqEZjVCU2WHh8ckcc7YA4uBzPiJjZCsv3pC1NDdV99AnyLzPjSip4uC3y');
 * sotez.transfer({
 *   to: 'tz1RvhdZ5pcjD19vCCK9PgZpnmErTba3dsBs',
 *   amount: 1000000,
 * });
 */
var Sotez = /** @class */ (function (_super) {
    __extends(Sotez, _super);
    function Sotez(provider, chain, options) {
        if (provider === void 0) { provider = 'http://127.0.0.1:8732'; }
        if (chain === void 0) { chain = 'main'; }
        if (options === void 0) { options = {}; }
        var _this = _super.call(this, provider, chain, options.debugMode) || this;
        /**
         * @description Import a secret key
         * @param {string} key The secret key
         * @param {string} [passphrase] The passphrase of the encrypted key
         * @param {string} [email] The email associated with the fundraiser account
         * @example
         * await sotez.importKey('edskRv6ZnkLQMVustbYHFPNsABu1Js6pEEWyMUFJQTqEZjVCU2WHh8ckcc7YA4uBzPiJjZCsv3pC1NDdV99AnyLzPjSip4uC3y')
         */
        _this.importKey = function (key, passphrase, email) { return __awaiter(_this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        this.key = new key_1.Key({ key: key, passphrase: passphrase, email: email });
                        return [4 /*yield*/, this.key.ready];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        }); };
        /**
         * @description Import a ledger public key
         * @param {Object} transport The ledger transport (https://github.com/LedgerHQ/ledgerjs)
         * @param {string} [path="44'/1729'/0'/0'"] The ledger path
         * @param {string} [curve="tz1"] The curve parameter
         * @example
         * import TransportNodeHid from "@ledgerhq/hw-transport-node-hid";
         * await sotez.importLedger(TransportNodeHid, "44'/1729'/0'/0'");
         */
        _this.importLedger = function (transport, path, curve) {
            if (path === void 0) { path = "44'/1729'/0'/0'"; }
            if (curve === void 0) { curve = 'tz1'; }
            return __awaiter(_this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.key = new key_1.Key({
                                ledgerPath: path,
                                ledgerCurve: curve,
                                ledgerTransport: transport,
                            });
                            return [4 /*yield*/, this.key.ready];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * @description Originate a new account
         * @param {Object} paramObject The parameters for the origination
         * @param {number} paramObject.balance The amount in tez to transfer for the initial balance
         * @param {boolean} [paramObject.spendable] Whether the keyholder can spend the balance from the new account
         * @param {boolean} [paramObject.delegatable] Whether the new account is delegatable
         * @param {string} [paramObject.delegate] The delegate for the new account
         * @param {number} [paramObject.fee=1420] The fee to set for the transaction
         * @param {number} [paramObject.gasLimit=10600] The gas limit to set for the transaction
         * @param {number} [paramObject.storageLimit=257] The storage limit to set for the transaction
         * @returns {Promise} Object containing the injected operation hash
         * @example
         * sotez.account({
         *   balance: 10,
         *   spendable: true,
         *   delegatable: true,
         *   delegate: 'tz1fXdNLZ4jrkjtgJWMcfeNpFDK9mbCBsaV4',
         * }).then(res => console.log(res.operations[0].metadata.operation_result.originated_contracts[0]));
         */
        _this.account = function (_a) {
            var balance = _a.balance, spendable = _a.spendable, delegatable = _a.delegatable, delegate = _a.delegate, _b = _a.fee, fee = _b === void 0 ? _this.defaultFee : _b, _c = _a.gasLimit, gasLimit = _c === void 0 ? 10600 : _c, _d = _a.storageLimit, storageLimit = _d === void 0 ? 257 : _d;
            return __awaiter(_this, void 0, void 0, function () {
                var params, operation;
                return __generator(this, function (_e) {
                    params = __assign(__assign(__assign({}, (spendable ? { spendable: spendable } : {})), (delegatable ? { delegatable: delegatable } : {})), (delegate ? { delegate: delegate } : {}));
                    operation = __assign(__assign(__assign(__assign({ kind: 'origination', balance: balance,
                        fee: fee, manager_pubkey: this.key.publicKeyHash() }, (gasLimit ? { gas_limit: gasLimit } : {})), (storageLimit ? { storage_limit: storageLimit } : {})), (delegatable ? { delegatable: delegatable } : {})), params);
                    return [2 /*return*/, this.sendOperation({ operation: operation })];
                });
            });
        };
        /**
         * @description Get the balance for a contract
         * @param {string} address The contract for which to retrieve the balance
         * @returns {Promise} The balance of the contract
         * @example
         * sotez.getBalance('tz1fXdNLZ4jrkjtgJWMcfeNpFDK9mbCBsaV4')
         *   .then(balance => console.log(balance));
         */
        _this.getBalance = function (address) {
            return _this.query("/chains/" + _this.chain + "/blocks/head/context/contracts/" + address + "/balance");
        };
        /**
         * @description Get the delegate for a contract
         * @param {string} address The contract for which to retrieve the delegate
         * @returns {Promise} The delegate of a contract, if any
         * @example
         * sotez.getDelegate('tz1fXdNLZ4jrkjtgJWMcfeNpFDK9mbCBsaV4')
         *   .then(delegate => console.log(delegate));
         */
        _this.getDelegate = function (address) {
            return _this.query("/chains/" + _this.chain + "/blocks/head/context/contracts/" + address + "/delegate").then(function (delegate) {
                if (!delegate) {
                    return '';
                }
                return delegate;
            });
        };
        /**
         * @description Get the manager for a contract
         * @param {string} address The contract for which to retrieve the manager
         * @returns {Promise} The manager of a contract
         * @example
         * sotez.getManager('tz1fXdNLZ4jrkjtgJWMcfeNpFDK9mbCBsaV4')
         *   .then(({ manager, key }) => console.log(manager, key));
         */
        _this.getManager = function (address) {
            return _this.query("/chains/" + _this.chain + "/blocks/head/context/contracts/" + address + "/manager_key");
        };
        /**
         * @description Get the counter for an contract
         * @param {string} address The contract for which to retrieve the counter
         * @returns {Promise} The counter of a contract, if any
         * @example
         * sotez.getCounter('tz1fXdNLZ4jrkjtgJWMcfeNpFDK9mbCBsaV4')
         *   .then(counter => console.log(counter));
         */
        _this.getCounter = function (address) {
            return _this.query("/chains/" + _this.chain + "/blocks/head/context/contracts/" + address + "/counter");
        };
        /**
         * @description Get the baker information for an address
         * @param {string} address The contract for which to retrieve the baker information
         * @returns {Promise} The information of the delegate address
         * @example
         * sotez.getBaker('tz1fXdNLZ4jrkjtgJWMcfeNpFDK9mbCBsaV4')
         *   .then(({
         *     balance,
         *     frozen_balance,
         *     frozen_balance_by_cycle,
         *     staking_balance,
         *     delegated_contracts,
         *     delegated_balance,
         *     deactivated,
         *     grace_period,
         *   }) => console.log(
         *     balance,
         *     frozen_balance,
         *     frozen_balance_by_cycle,
         *     staking_balance,
         *     delegated_contracts,
         *     delegated_balance,
         *     deactivated,
         *     grace_period,
         *   ));
         */
        _this.getBaker = function (address) {
            return _this.query("/chains/" + _this.chain + "/blocks/head/context/delegates/" + address);
        };
        /**
         * @description Get the header of the current head
         * @returns {Promise} The whole block header
         * @example
         * sotez.getHeader().then(header => console.log(header));
         */
        _this.getHeader = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/header");
        };
        /**
         * @description Get the metadata of the current head
         * @returns {Promise} The head block metadata
         * @example
         * sotez.getHeadMetadata().then(metadata => console.log(metadata));
         */
        _this.getHeadMetadata = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/metadata");
        };
        /**
         * @description Get the current head block of the chain
         * @returns {Promise} The current head block
         * @example
         * sotez.getHead().then(head => console.log(head));
         */
        _this.getHead = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head");
        };
        /**
         * @description Get the current head block hash of the chain
         * @returns {Promise} The block's hash, its unique identifier
         * @example
         * sotez.getHeadHash().then(headHash => console.log(headHash))
         */
        _this.getHeadHash = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/hash");
        };
        /**
         * @description Ballots casted so far during a voting period
         * @returns {Promise} Ballots casted so far during a voting period
         * @example
         * sotez.getBallotList().then(ballotList => console.log(ballotList));
         */
        _this.getBallotList = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/votes/ballot_list");
        };
        /**
         * @description List of proposals with number of supporters
         * @returns {Promise} List of proposals with number of supporters
         * @example
         * sotez.getProposals().then(proposals => {
         *   console.log(proposals[0][0], proposals[0][1])
         *   console.log(proposals[1][0], proposals[1][1])
         * );
         */
        _this.getProposals = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/votes/proposals");
        };
        /**
         * @description Sum of ballots casted so far during a voting period
         * @returns {Promise} Sum of ballots casted so far during a voting period
         * @example
         * sotez.getBallots().then(({ yay, nay, pass }) => console.log(yay, nay, pass));
         */
        _this.getBallots = function () { return _this.query("/chains/" + _this.chain + "/blocks/head/votes/ballots"); };
        /**
         * @description List of delegates with their voting weight, in number of rolls
         * @returns {Promise} The ballots of the current voting period
         * @example
         * sotez.getListings().then(listings => console.log(listings));
         */
        _this.getListings = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/votes/listings");
        };
        /**
         * @description Current proposal under evaluation
         * @returns {Promise} Current proposal under evaluation
         * @example
         * sotez.getCurrentProposal().then(currentProposal => console.log(currentProposal));
         */
        _this.getCurrentProposal = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/votes/current_proposal");
        };
        /**
         * @description Current period kind
         * @returns {Promise} Current period kind
         * @example
         * sotez.getCurrentPeriod().then(currentPeriod => console.log(currentPeriod));
         */
        _this.getCurrentPeriod = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/votes/current_period_kind");
        };
        /**
         * @description Current expected quorum
         * @returns {Promise} Current expected quorum
         * @example
         * sotez.getCurrentQuorum().then(currentQuorum => console.log(currentQuorum));
         */
        _this.getCurrentQuorum = function () {
            return _this.query("/chains/" + _this.chain + "/blocks/head/votes/current_quorum");
        };
        /**
         * @description Check for the inclusion of an operation in new blocks
         * @param {string} hash The operation hash to check
         * @param {number} [interval=10] The interval to check new blocks (in seconds)
         * @param {number} [timeout=180] The time before the operation times out (in seconds)
         * @returns {Promise} The hash of the block in which the operation was included
         * @example
         * sotez.awaitOperation('ooYf5iK6EdTx3XfBusgDqS6znACTq5469D1zQSDFNrs5KdTuUGi')
         *  .then((hash) => console.log(hash));
         */
        _this.awaitOperation = function (hash, interval, timeout) {
            if (interval === void 0) { interval = 10; }
            if (timeout === void 0) { timeout = 180; }
            if (!hash) {
                throw new Error('No operation hash provided to awaitOperation');
            }
            if (timeout <= 0) {
                throw new Error('Timeout must be more than 0');
            }
            if (interval <= 0) {
                throw new Error('Interval must be more than 0');
            }
            var timeoutHandle;
            var operationCheck = function (operation) {
                return operation.hash === hash;
            };
            return new Promise(function (resolve, reject) {
                var clearTimeoutHandle = setTimeout(function () {
                    clearTimeout(timeoutHandle);
                    reject(new Error("Timed out waiting for operation " + hash + " after " + timeout + " seconds"));
                }, timeout * 1000);
                var repeater = function () {
                    _this.getHead().then(function (head) {
                        for (var i = 3; i >= 0; i--) {
                            if (head.operations[i].some(operationCheck)) {
                                clearTimeout(clearTimeoutHandle);
                                resolve(head.hash);
                                return;
                            }
                        }
                        timeoutHandle = setTimeout(repeater, interval * 1000);
                    });
                };
                repeater();
            });
        };
        /**
         * @description Prepares an operation
         * @param {Object} paramObject The parameters for the operation
         * @param {string} [paramObject.source] The source address of the operation
         * @param {boolean} paramObject.skipCounter Skip incrementing the counter within sotez
         * @param {boolean} paramObject.skipEstimate Skip the estimator if enabled
         * @param {Object | Array} paramObject.operation The operation to include in the transaction
         * @returns {Promise} Object containing the prepared operation
         * @example
         * sotez.prepareOperation({
         *   operation: {
         *     kind: 'transaction',
         *     fee: 1420,
         *     gas_limit: 10600,
         *     storage_limit: 300,
         *     amount: 1000,
         *     destination: 'tz1RvhdZ5pcjD19vCCK9PgZpnmErTba3dsBs',
         *   }
         * }).then(({ opbytes, opOb, counter }) => console.log(opbytes, opOb, counter));
         */
        _this.prepareOperation = function (_a) {
            var operation = _a.operation, source = _a.source, _b = _a.skipCounter, skipCounter = _b === void 0 ? false : _b, _c = _a.skipEstimate, skipEstimate = _c === void 0 ? false : _c;
            var counter;
            var opOb = {};
            var promises = [];
            var requiresReveal = false;
            var preOps = [];
            var head;
            promises.push(_this.getHeader());
            promises.push(_this.getHeadMetadata());
            if (Array.isArray(operation)) {
                preOps = __spreadArray([], operation);
            }
            else {
                preOps = [operation];
            }
            var publicKeyHash = source || _this.key.publicKeyHash();
            for (var i = 0; i < preOps.length; i++) {
                if ([
                    'transaction',
                    'origination',
                    'delegation',
                    'baker_registration',
                ].includes(preOps[i].kind)) {
                    requiresReveal = true;
                    promises.push(_this.getManager(publicKeyHash));
                    promises.push(_this.getCounter(publicKeyHash));
                    break;
                }
            }
            return Promise.all(promises).then(function (_a) {
                var header = _a[0], metadata = _a[1], manager = _a[2], headCounter = _a[3];
                return __awaiter(_this, void 0, void 0, function () {
                    var managerKey, ops, constructOps, remoteForgedBytes, fullOp;
                    var _this = this;
                    return __generator(this, function (_b) {
                        switch (_b.label) {
                            case 0:
                                head = header;
                                if (requiresReveal) {
                                    managerKey = this.getManagerKey(manager, metadata.protocol);
                                    if (!managerKey && preOps.every(function (op) { return op.kind !== 'reveal'; })) {
                                        preOps.unshift({
                                            kind: 'reveal',
                                            fee: this.defaultFee,
                                            public_key: this.key.publicKey(),
                                            source: publicKeyHash,
                                            gas_limit: 10600,
                                            storage_limit: 300,
                                        });
                                    }
                                }
                                counter = parseInt(headCounter, 10);
                                if (!this._counters[publicKeyHash] ||
                                    this._counters[publicKeyHash] < counter) {
                                    this._counters[publicKeyHash] = counter;
                                }
                                ops = preOps;
                                if (!(this.dryRunLimiter && !skipEstimate)) return [3 /*break*/, 2];
                                return [4 /*yield*/, this.estimateLimits(preOps, source)];
                            case 1:
                                ops = _b.sent();
                                _b.label = 2;
                            case 2:
                                constructOps = function (cOps) {
                                    // In case prepareOperation should not increment the counter
                                    var opCounter = _this._counters[publicKeyHash];
                                    return cOps.map(function (op) {
                                        var _a, _b, _c;
                                        // @ts-ignore
                                        var constructedOp = __assign({}, op);
                                        if ([
                                            'proposals',
                                            'ballot',
                                            'transaction',
                                            'origination',
                                            'delegation',
                                        ].includes(op.kind)) {
                                            constructedOp.source || (constructedOp.source = publicKeyHash);
                                        }
                                        if (['reveal', 'transaction', 'origination', 'delegation'].includes(op.kind)) {
                                            var fee = "" + ((_a = op.fee) !== null && _a !== void 0 ? _a : _this.defaultFee);
                                            constructedOp.fee = _this.useMutez ? fee : utility_1.mutez(fee);
                                            constructedOp.gas_limit = "" + ((_b = op.gas_limit) !== null && _b !== void 0 ? _b : 0);
                                            constructedOp.storage_limit = "" + ((_c = op.storage_limit) !== null && _c !== void 0 ? _c : 0);
                                            if (typeof op.balance !== 'undefined') {
                                                constructedOp.balance = _this.useMutez
                                                    ? "" + op.balance
                                                    : utility_1.mutez(op.balance);
                                            }
                                            if (typeof op.amount !== 'undefined') {
                                                constructedOp.amount = _this.useMutez
                                                    ? "" + op.amount
                                                    : utility_1.mutez(op.amount);
                                            }
                                            if (skipCounter) {
                                                constructedOp.counter = "" + ++opCounter;
                                            }
                                            else {
                                                constructedOp.counter = "" + ++_this._counters[publicKeyHash];
                                            }
                                        }
                                        return _this._conformOperation(constructedOp, metadata.next_protocol);
                                    });
                                };
                                opOb.branch = head.hash;
                                opOb.contents = constructOps(ops);
                                remoteForgedBytes = '';
                                if (!(!this._localForge || this._validateLocalForge)) return [3 /*break*/, 4];
                                return [4 /*yield*/, this.query("/chains/" + this.chain + "/blocks/" + head.hash + "/helpers/forge/operations", opOb)];
                            case 3:
                                remoteForgedBytes = _b.sent();
                                _b.label = 4;
                            case 4:
                                opOb.protocol = metadata.next_protocol;
                                if (!this._localForge) {
                                    return [2 /*return*/, {
                                            opbytes: remoteForgedBytes,
                                            opOb: opOb,
                                            counter: counter,
                                            chainId: head.chain_id,
                                        }];
                                }
                                return [4 /*yield*/, forge_1.forge(opOb, counter, metadata.next_protocol)];
                            case 5:
                                fullOp = _b.sent();
                                if (this._validateLocalForge) {
                                    if (fullOp.opbytes === remoteForgedBytes) {
                                        return [2 /*return*/, __assign(__assign({}, fullOp), { counter: counter, chainId: head.chain_id })];
                                    }
                                    console.log(fullOp.opbytes);
                                    console.log(remoteForgedBytes);
                                    throw new Error("Forge validation error - local and remote bytes don't match");
                                }
                                return [2 /*return*/, __assign(__assign({}, fullOp), { counter: counter, chainId: head.chain_id })];
                        }
                    });
                });
            });
        };
        /**
         * @description Simulate an operation
         * @param {Object} paramObject The parameters for the operation
         * @param {Object|Array} paramObject.operation The operation to include in the transaction
         * @param {string} [paramObject.source] The source address of the operation
         * @param {boolean} [paramObject.skipEstimate] The operation to include in the transaction
         * @returns {Promise} The simulated operation result
         * @example
         * sotez.simulateOperation({
         *   operation: {
         *     kind: 'transaction',
         *     fee: 1420,
         *     gas_limit: 10600,
         *     storage_limit: 300,
         *     amount: 1000,
         *     destination: 'tz1RvhdZ5pcjD19vCCK9PgZpnmErTba3dsBs',
         *   },
         * }).then(result => console.log(result));
         */
        _this.simulateOperation = function (_a) {
            var operation = _a.operation, source = _a.source, skipEstimate = _a.skipEstimate;
            return _this.prepareOperation({
                operation: operation,
                source: source,
                skipCounter: true,
                skipEstimate: skipEstimate,
            }).then(function (fullOp) {
                delete fullOp.opOb.protocol;
                fullOp.opOb.signature =
                    'edsigtXomBKi5CTRf5cjATJWSyaRvhfYNHqSUGrn4SdbYRcGwQrUGjzEfQDTuqHhuA8b2d8NarZjz8TRf65WkpQmo423BtomS8Q';
                return _this.query("/chains/" + _this.chain + "/blocks/head/helpers/scripts/run_operation", {
                    chain_id: fullOp.chainId,
                    operation: fullOp.opOb,
                });
            });
        };
        /**
         * @description Send an operation
         * @param {Object} paramObject The parameters for the operation
         * @param {Object|Array} paramObject.operation The operation to include in the transaction
         * @param {string} [paramObject.source] The source address of the operation
         * @param {boolean} [paramObject.skipSignature=false] Use default signature for specific transactions
         * @param {boolean} [paramObject.skipPrevalidation=false] Skip prevalidation before injecting operation
         * @returns {Promise} Object containing the injected operation hash
         * @example
         * const operation = {
         *   kind: 'transaction',
         *   fee: 1420,
         *   gas_limit: 10600,
         *   storage_limit: 300,
         *   amount: 1000,
         *   destination: 'tz1RvhdZ5pcjD19vCCK9PgZpnmErTba3dsBs',
         * };
         *
         * sotez.sendOperation({ operation }).then(result => console.log(result));
         *
         * sotez.sendOperation({ operation: [operation, operation] }).then(result => console.log(result));
         */
        _this.sendOperation = function (_a) {
            var operation = _a.operation, source = _a.source, _b = _a.skipPrevalidation, skipPrevalidation = _b === void 0 ? false : _b, _c = _a.skipSignature, skipSignature = _c === void 0 ? false : _c;
            return __awaiter(_this, void 0, void 0, function () {
                var fullOp, signed, publicKeyHash;
                var _this = this;
                return __generator(this, function (_d) {
                    switch (_d.label) {
                        case 0: return [4 /*yield*/, this.prepareOperation({
                                operation: operation,
                                source: source,
                            })];
                        case 1:
                            fullOp = _d.sent();
                            if (!skipSignature) return [3 /*break*/, 2];
                            fullOp.opbytes +=
                                '00000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000000';
                            fullOp.opOb.signature =
                                'edsigtXomBKi5CTRf5cjATJWSyaRvhfYNHqSUGrn4SdbYRcGwQrUGjzEfQDTuqHhuA8b2d8NarZjz8TRf65WkpQmo423BtomS8Q';
                            return [3 /*break*/, 4];
                        case 2: return [4 /*yield*/, this.key.sign(fullOp.opbytes, constants_1.magicBytes.generic)];
                        case 3:
                            signed = _d.sent();
                            fullOp.opbytes = signed.sbytes;
                            fullOp.opOb.signature = signed.prefixSig;
                            _d.label = 4;
                        case 4:
                            publicKeyHash = source || this.key.publicKeyHash();
                            if (skipPrevalidation) {
                                return [2 /*return*/, this.silentInject(fullOp.opbytes).catch(function (e) {
                                        _this._counters[publicKeyHash] = fullOp.counter;
                                        throw e;
                                    })];
                            }
                            return [2 /*return*/, this.inject(fullOp.opOb, fullOp.opbytes).catch(function (e) {
                                    _this._counters[publicKeyHash] = fullOp.counter;
                                    throw e;
                                })];
                    }
                });
            });
        };
        /**
         * @description Inject an operation
         * @param {Object} opOb The operation object
         * @param {string} sopbytes The signed operation bytes
         * @returns {Promise} Object containing the injected operation hash
         */
        _this.inject = function (opOb, sopbytes) {
            var opResponse = [];
            var errors = [];
            return _this.query("/chains/" + _this.chain + "/blocks/head/helpers/preapply/operations", [opOb])
                .then(function (results) {
                if (!Array.isArray(results)) {
                    throw new Error('RPC Fail');
                }
                results.forEach(function (result) {
                    result.contents.forEach(function (content) {
                        var _a;
                        opResponse.push(content);
                        if (((_a = content.metadata.operation_result) === null || _a === void 0 ? void 0 : _a.status) === 'failed') {
                            errors.push(content.metadata.operation_result.errors);
                        }
                    });
                });
                if (errors.length) {
                    throw new Error(JSON.stringify({ error: 'Operation Failed', errors: errors }, null, 2));
                }
                return _this.query('/injection/operation', sopbytes);
            })
                .then(function (hash) { return ({
                hash: hash,
                operations: opResponse,
            }); });
        };
        /**
         * @description Inject an operation without prevalidation
         * @param {string} sopbytes The signed operation bytes
         * @returns {Promise} Object containing the injected operation hash
         */
        _this.silentInject = function (sopbytes) {
            return _this.query('/injection/operation', sopbytes).then(function (hash) { return ({
                hash: hash,
            }); });
        };
        /**
         * @description Transfer operation
         * @param {Object|Array} transferParams The parameters for the operation
         * @param {string} transferParams.to The address of the recipient
         * @param {number} transferParams.amount The amount in tez to transfer for the initial balance
         * @param {string} [transferParams.source] The source address of the transfer
         * @param {number} [transferParams.fee=1420] The fee to set for the transaction
         * @param {string} [transferParams.parameters] The parameter for the transaction
         * @param {number} [transferParams.gasLimit=10600] The gas limit to set for the transaction
         * @param {number} [transferParams.storageLimit=300] The storage limit to set for the transaction
         * @returns {Promise} Object containing the injected operation hash
         * @example
         * sotez.transfer({
         *   to: 'tz1RvhdZ5pcjD19vCCK9PgZpnmErTba3dsBs',
         *   amount: 1000000,
         *   fee: 1420,
         * }).then(result => console.log(result));
         */
        _this.transfer = function (transferParams) { return __awaiter(_this, void 0, void 0, function () {
            var transfers, operations;
            return __generator(this, function (_a) {
                transfers = Array.isArray(transferParams)
                    ? __spreadArray([], transferParams) : [transferParams];
                operations = transfers.map(function (_a) {
                    var to = _a.to, amount = _a.amount, source = _a.source, fee = _a.fee, gasLimit = _a.gasLimit, storageLimit = _a.storageLimit, parameters = _a.parameters;
                    var op = __assign(__assign(__assign({ kind: 'transaction', destination: to, amount: amount,
                        fee: fee }, (source ? { source: source } : {})), (gasLimit ? { gas_limit: gasLimit } : {})), (storageLimit ? { storage_limit: storageLimit } : {}));
                    if (parameters) {
                        if (typeof parameters === 'string') {
                            op.parameters = utility_1.sexp2mic(parameters);
                        }
                        else {
                            op.parameters = parameters;
                        }
                    }
                    return op;
                });
                return [2 /*return*/, this.sendOperation({
                        operation: operations,
                    })];
            });
        }); };
        /**
         * @description Activate an account
         * @param {Object} pkh The public key hash of the account
         * @param {string} secret The secret to activate the account
         * @returns {Promise} Object containing the injected operation hash
         * @example
         * sotez.activate(pkh, secret)
         *   .then((activateOperation) => console.log(activateOperation));
         */
        _this.activate = function (pkh, secret) {
            var operation = {
                kind: 'activate_account',
                pkh: pkh,
                secret: secret,
            };
            return _this.sendOperation({
                operation: [operation],
                source: pkh,
                skipSignature: true,
            });
        };
        /**
         * @description Originate a new contract
         * @param {Object} paramObject The parameters for the operation
         * @param {number} paramObject.balance The amount in tez to transfer for the initial balance
         * @param {string | Micheline} paramObject.code The code to deploy for the contract
         * @param {string | Micheline} paramObject.init The initial storage of the contract
         * @param {boolean} [paramObject.spendable=false] Whether the keyholder can spend the balance from the new account
         * @param {boolean} [paramObject.delegatable=false] Whether the new account is delegatable
         * @param {string} [paramObject.delegate] The delegate for the new account
         * @param {number} [paramObject.fee=1420] The fee to set for the transaction
         * @param {number} [paramObject.gasLimit=10600] The gas limit to set for the transaction
         * @param {number} [paramObject.storageLimit=257] The storage limit to set for the transaction
         * @returns {Promise} Object containing the injected operation hash
         */
        _this.originate = function (_a) {
            var balance = _a.balance, code = _a.code, init = _a.init, _b = _a.spendable, spendable = _b === void 0 ? false : _b, _c = _a.delegatable, delegatable = _c === void 0 ? false : _c, delegate = _a.delegate, _d = _a.fee, fee = _d === void 0 ? _this.defaultFee : _d, _e = _a.gasLimit, gasLimit = _e === void 0 ? 10600 : _e, _f = _a.storageLimit, storageLimit = _f === void 0 ? 257 : _f;
            return __awaiter(_this, void 0, void 0, function () {
                var _code, _init, script, publicKeyHash, operation;
                return __generator(this, function (_g) {
                    if (typeof code === 'string') {
                        _code = utility_1.ml2mic(code);
                    }
                    else {
                        _code = code;
                    }
                    if (typeof init === 'string') {
                        _init = utility_1.sexp2mic(init);
                    }
                    else {
                        _init = init;
                    }
                    script = {
                        code: _code,
                        storage: _init,
                    };
                    publicKeyHash = this.key.publicKeyHash();
                    operation = __assign(__assign({ kind: 'origination', fee: fee,
                        balance: balance, manager_pubkey: publicKeyHash, spendable: spendable,
                        delegatable: delegatable,
                        script: script }, (gasLimit ? { gas_limit: gasLimit } : {})), (storageLimit ? { storage_limit: storageLimit } : {}));
                    if (delegate) {
                        operation.delegate = delegate;
                    }
                    return [2 /*return*/, this.sendOperation({ operation: operation })];
                });
            });
        };
        /**
         * @description Set a delegate for an account
         * @param {Object} paramObject The parameters for the operation
         * @param {string} [paramObject.delegate] The delegate for the new account
         * @param {number} [paramObject.fee=1420] The fee to set for the transaction
         * @param {number} [paramObject.gasLimit=10600] The gas limit to set for the transaction
         * @param {string} [paramObject.source] The source address of the operation
         * @param {number} [paramObject.storageLimit=0] The storage limit to set for the transaction
         * @returns {Promise} Object containing the injected operation hash
         */
        _this.setDelegate = function (_a) {
            var delegate = _a.delegate, _b = _a.source, source = _b === void 0 ? _this.key.publicKeyHash() : _b, _c = _a.fee, fee = _c === void 0 ? _this.defaultFee : _c, _d = _a.gasLimit, gasLimit = _d === void 0 ? 10600 : _d, _e = _a.storageLimit, storageLimit = _e === void 0 ? 0 : _e;
            return __awaiter(_this, void 0, void 0, function () {
                var operation;
                return __generator(this, function (_f) {
                    operation = __assign(__assign({ kind: 'delegation', source: source,
                        fee: fee,
                        delegate: delegate }, (gasLimit ? { gas_limit: gasLimit } : {})), (storageLimit ? { storage_limit: storageLimit } : {}));
                    return [2 /*return*/, this.sendOperation({
                            operation: operation,
                            source: source,
                        })];
                });
            });
        };
        /**
         * @description Register an account as a delegate
         * @param {Object} paramObject The parameters for the operation
         * @param {number} [paramObject.fee=1420] The fee to set for the transaction
         * @param {number} [paramObject.gasLimit=10600] The gas limit to set for the transaction
         * @param {number} [paramObject.storageLimit=0] The storage limit to set for the transaction
         * @returns {Promise} Object containing the injected operation hash
         */
        _this.registerDelegate = function (_a) {
            var _b = _a === void 0 ? {} : _a, _c = _b.fee, fee = _c === void 0 ? _this.defaultFee : _c, _d = _b.gasLimit, gasLimit = _d === void 0 ? 10600 : _d, _e = _b.storageLimit, storageLimit = _e === void 0 ? 0 : _e;
            return __awaiter(_this, void 0, void 0, function () {
                var operation;
                return __generator(this, function (_f) {
                    operation = __assign(__assign({ kind: 'delegation', fee: fee, delegate: this.key.publicKeyHash() }, (gasLimit ? { gas_limit: gasLimit } : {})), (storageLimit ? { storage_limit: storageLimit } : {}));
                    return [2 /*return*/, this.sendOperation({ operation: operation })];
                });
            });
        };
        /**
         * @description Typechecks the provided code
         * @param {string | Micheline} code The code to typecheck
         * @param {number} gas The the gas limit
         * @returns {Promise} Typecheck result
         */
        _this.typecheckCode = function (code, gas) {
            if (gas === void 0) { gas = 10000; }
            var _code = code;
            if (typeof code === 'string') {
                _code = utility_1.ml2mic(code);
            }
            return _this.query("/chains/" + _this.chain + "/blocks/head/helpers/scripts/typecheck_code", {
                program: _code,
                gas: gas,
            });
        };
        /**
         * @description Serializes a piece of data to a binary representation
         * @param {string | Micheline} data The data
         * @param {string | Micheline} type The data type
         * @returns {Promise} Serialized data
         */
        _this.packData = function (data, type) {
            var _data = data;
            var _type = type;
            if (typeof data === 'string') {
                _data = utility_1.sexp2mic(data);
            }
            if (typeof type === 'string') {
                _type = utility_1.sexp2mic(type);
            }
            var check = {
                data: _data,
                type: _type,
                gas: '4000000',
            };
            return _this.query("/chains/" + _this.chain + "/blocks/head/helpers/scripts/pack_data", check);
        };
        /**
         * @description Typechecks data against a type
         * @param {string | Micheline} data The data
         * @param {string | Micheline} type The data type
         * @returns {Promise} Typecheck result
         */
        _this.typecheckData = function (data, type) {
            var _data = data;
            var _type = type;
            if (typeof data === 'string') {
                _data = utility_1.sexp2mic(data);
            }
            if (typeof type === 'string') {
                _type = utility_1.sexp2mic(type);
            }
            var check = {
                data: _data,
                type: _type,
                gas: '4000000',
            };
            return _this.query("/chains/" + _this.chain + "/blocks/head/helpers/scripts/typecheck_data", check);
        };
        /**
         * @description Runs or traces code against an input and storage
         * @param {string | Micheline} code Code to run
         * @param {number} amount Amount in tez to send
         * @param {string | Micheline} input Input to run though code
         * @param {string | Micheline} storage State of storage
         * @param {boolean} [trace=false] Whether to trace
         * @returns {Promise} Run results
         */
        _this.runCode = function (code, amount, input, storage, trace) {
            if (trace === void 0) { trace = false; }
            var ep = trace ? 'trace_code' : 'run_code';
            var _code = code;
            var _input = input;
            var _storage = storage;
            if (typeof code === 'string') {
                _code = utility_1.sexp2mic(code);
            }
            if (typeof input === 'string') {
                _input = utility_1.sexp2mic(input);
            }
            if (typeof storage === 'string') {
                _storage = utility_1.sexp2mic(storage);
            }
            return _this.query("/chains/" + _this.chain + "/blocks/head/helpers/scripts/" + ep, {
                script: _code,
                amount: _this.useMutez ? "" + amount : "" + utility_1.mutez(amount),
                input: _input,
                storage: _storage,
            });
        };
        /**
         * @description Get the mananger key from the protocol dependent query
         * @param {Object|string} manager The manager key query response
         * @param {string} protocol The protocol of the current block
         * @returns {string} If manager exists, returns the manager key
         */
        _this.getManagerKey = function (manager, protocol) {
            var _a;
            if (!manager) {
                return null;
            }
            var protocolMap = (_a = {},
                _a[constants_1.protocols['001']] = manager.key,
                _a[constants_1.protocols['002']] = manager.key,
                _a[constants_1.protocols['003']] = manager.key,
                _a[constants_1.protocols['004']] = manager.key,
                _a[constants_1.protocols['005a']] = manager,
                _a[constants_1.protocols['005']] = manager,
                _a[constants_1.protocols['006']] = manager,
                _a[constants_1.protocols['007a']] = manager,
                _a[constants_1.protocols['007']] = manager,
                _a[constants_1.protocols['008a']] = manager,
                _a[constants_1.protocols['008']] = manager,
                _a[constants_1.protocols['009']] = manager,
                _a[constants_1.protocols['009a']] = manager,
                _a);
            if (!protocolMap[protocol]) {
                throw new Error("Unrecognized protocol: " + protocol);
            }
            return protocolMap[protocol];
        };
        /**
         * @description Conforms the operation to a specific protocol
         * @param {Object} constructedOp The operation object
         * @param {string} nextProtocol The next protocol of the current block
         * @returns {string} The protocol specific operation
         */
        _this._conformOperation = function (constructedOp, nextProtocol) {
            var _a;
            var constructOp001 = function (op) {
                return op;
            };
            var constructOp005 = function (op) {
                // @ts-ignore
                delete op.manager_pubkey;
                // @ts-ignore
                delete op.spendable;
                // @ts-ignore
                delete op.delegatable;
                return op;
            };
            var protocolMap = (_a = {},
                _a[constants_1.protocols['001']] = constructOp001,
                _a[constants_1.protocols['002']] = constructOp001,
                _a[constants_1.protocols['003']] = constructOp001,
                _a[constants_1.protocols['004']] = constructOp001,
                _a[constants_1.protocols['005a']] = constructOp005,
                _a[constants_1.protocols['005']] = constructOp005,
                _a[constants_1.protocols['006']] = constructOp005,
                _a[constants_1.protocols['007a']] = constructOp005,
                _a[constants_1.protocols['007']] = constructOp005,
                _a[constants_1.protocols['008a']] = constructOp005,
                _a[constants_1.protocols['008']] = constructOp005,
                _a[constants_1.protocols['009']] = constructOp005,
                _a[constants_1.protocols['009a']] = constructOp005,
                _a);
            return protocolMap[nextProtocol](constructedOp);
        };
        /**
         * @description Given operation objects, return the operations with their estimated limits
         * @param {Object|Array} operation The operation object or list of objects
         * @param {string} [source] The source of the operation
         * @returns {Promise} The operations with populated limits
         */
        _this.estimateLimits = function (operation, source) { return __awaiter(_this, void 0, void 0, function () {
            var operations, simulated, simulatedOperations;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        operations = Array.isArray(operation) ? __spreadArray([], operation) : [operation];
                        simulated = operations.map(function (op) {
                            if (['reveal', 'transaction', 'origination', 'delegation'].includes(op.kind)) {
                                return __assign(__assign({}, op), { gas_limit: 1040000, storage_limit: 60000 });
                            }
                            return op;
                        });
                        return [4 /*yield*/, this.simulateOperation({
                                operation: simulated,
                                source: source,
                                skipEstimate: true,
                            })];
                    case 1:
                        simulatedOperations = (_a.sent()).contents;
                        return [2 /*return*/, operations.map(function (op, index) {
                                var _a, _b;
                                var metadata = (_a = simulatedOperations[index]) === null || _a === void 0 ? void 0 : _a.metadata;
                                if (((_b = metadata === null || metadata === void 0 ? void 0 : metadata.operation_result) === null || _b === void 0 ? void 0 : _b.status) === 'applied') {
                                    var _c = metadata.operation_result, _d = _c.consumed_gas, consumed_gas = _d === void 0 ? 0 : _d, _e = _c.storage_size, storage_size = _e === void 0 ? 0 : _e;
                                    var consumedGas = parseInt(consumed_gas, 10);
                                    var storageSize = parseInt(storage_size, 10);
                                    return __assign({ gas_limit: consumedGas + 100, storage_limit: storageSize ? storageSize + 20 : 0 }, op);
                                }
                                return op;
                            })];
                }
            });
        }); };
        /**
         * @description Looks up a contract and returns an initialized contract
         * @param {Object} address The contract address
         * @returns {Promise} An initialized contract class
         * @example
         * // Load contract
         * const contract = await sotez.loadContract('KT1MKm4ynxPSzRjw26jPSJbaMFTqTc4dVPdK');
         * // List defined contract methods
         * const { methods } = contract;
         * // Retrieve contract storage
         * const storage = await contract.storage();
         * // Get big map keys
         * await storage.ledger.get('tz1P1n8LvweoarK3DTPSnAHtiGVRujhvR2vk');
         * // Determine method schema
         * await contract.methods.transfer('tz1P1n8LvweoarK3DTPSnAHtiGVRujhvR2vk', 100).schema();
         * // Send contract operation
         * await contract.methods.transfer('tz1P1n8LvweoarK3DTPSnAHtiGVRujhvR2vk', 100).send({
         *   fee: '100000',
         *   gasLimit: '800000',
         *   storageLimit: '60000',
         * });
         */
        _this.loadContract = function (address) { return __awaiter(_this, void 0, void 0, function () {
            var contract;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        contract = new contract_1.Contract(this, address);
                        return [4 /*yield*/, contract.loaded];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, contract];
                }
            });
        }); };
        _this._localForge = options.localForge !== false;
        _this._validateLocalForge = options.validateLocalForge || false;
        _this._debugMode = options.debugMode || false;
        _this._useMutez = options.useMutez !== false;
        _this._dryRunLimiter = options.dryRunLimiter || false;
        _this._defaultFee =
            options.defaultFee || (_this._useMutez ? DEFAULT_FEE : utility_1.totez(DEFAULT_FEE));
        _this._counters = {};
        return _this;
    }
    Object.defineProperty(Sotez.prototype, "defaultFee", {
        get: function () {
            return this._defaultFee;
        },
        set: function (fee) {
            this._defaultFee = fee;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sotez.prototype, "localForge", {
        get: function () {
            return this._localForge;
        },
        set: function (value) {
            this._localForge = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sotez.prototype, "validateLocalForge", {
        get: function () {
            return this._validateLocalForge;
        },
        set: function (value) {
            this._validateLocalForge = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sotez.prototype, "counters", {
        get: function () {
            return this._counters;
        },
        set: function (counters) {
            this._counters = counters;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sotez.prototype, "debugMode", {
        get: function () {
            return this._debugMode;
        },
        set: function (t) {
            this._debugMode = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sotez.prototype, "useMutez", {
        get: function () {
            return this._useMutez;
        },
        set: function (t) {
            this._useMutez = t;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Sotez.prototype, "dryRunLimiter", {
        get: function () {
            return this._dryRunLimiter;
        },
        set: function (t) {
            this._dryRunLimiter = t;
        },
        enumerable: false,
        configurable: true
    });
    Sotez.prototype.setProvider = function (provider, chain) {
        if (chain === void 0) { chain = this.chain; }
        _super.prototype.setProvider.call(this, provider, chain);
        this.provider = provider;
        this.chain = chain;
    };
    return Sotez;
}(tez_core_1.AbstractTezModule));
exports.Sotez = Sotez;
