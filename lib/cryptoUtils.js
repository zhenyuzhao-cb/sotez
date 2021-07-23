"use strict";
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.verify = exports.sign = exports.encryptSecretKey = exports.generateKeys = exports.checkAddress = exports.generateMnemonic = exports.extractKeys = void 0;
var bip39_1 = require("bip39");
var pbkdf2_1 = __importDefault(require("pbkdf2"));
var libsodium_wrappers_sumo_1 = __importDefault(require("libsodium-wrappers-sumo"));
var elliptic_1 = __importDefault(require("elliptic"));
var utility_1 = require("./utility");
var constants_1 = require("./constants");
/**
 * @description Extract key pairs from a secret key
 * @param {string} sk The secret key to extract key pairs from
 * @param {string} [passphrase] The password used to encrypt the sk
 * @returns {Promise} The extracted key pairs
 * @example
 * cryptoUtils.extractKeys('edskRqAF8s2MKKqRMxq53CYYLMnrqvokMyrtmPRFd5H9osc4bFmqKBY119jiiqKQMti2frLAoKGgZSQN3Lc3ybf5sgPUy38e5A')
 *   .then(({ sk, pk, pkh }) => console.log(sk, pk, pkh));
 */
var extractKeys = function (sk, passphrase) {
    if (passphrase === void 0) { passphrase = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var curve, encrypted, constructedKey, salt, encryptedSk, key, secretKey, privateKeys, publicKey, _a, publicKeyDerived, privateKey, keyPair, prefixVal, pad, publicKey, keyPair, prefixVal, pad, publicKey;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0: return [4 /*yield*/, libsodium_wrappers_sumo_1.default.ready];
                case 1:
                    _b.sent();
                    curve = sk.substring(0, 2);
                    if (![54, 55, 88, 98].includes(sk.length)) {
                        throw new Error('Invalid length for a key encoding');
                    }
                    encrypted = sk.substring(2, 3) === 'e';
                    constructedKey = utility_1.b58cdecode(sk, constants_1.prefix["" + curve + (encrypted ? 'e' : '') + "sk"]);
                    if (encrypted) {
                        salt = constructedKey.slice(0, 8);
                        encryptedSk = constructedKey.slice(8);
                        if (!passphrase) {
                            throw new Error('No passphrase was provided to decrypt the key');
                        }
                        key = pbkdf2_1.default.pbkdf2Sync(passphrase, salt, 32768, 32, 'sha512');
                        constructedKey = libsodium_wrappers_sumo_1.default.crypto_secretbox_open_easy(new Uint8Array(encryptedSk), new Uint8Array(24), new Uint8Array(key));
                    }
                    secretKey = new Uint8Array(constructedKey);
                    privateKeys = {
                        sk: sk,
                    };
                    if (encrypted) {
                        privateKeys = {
                            esk: sk,
                            sk: utility_1.b58cencode(secretKey, constants_1.prefix[curve + "sk"]),
                            salt: salt,
                        };
                    }
                    if (curve === 'ed') {
                        publicKey = void 0;
                        if (constructedKey.length === 64) {
                            publicKey = new Uint8Array(libsodium_wrappers_sumo_1.default.crypto_sign_ed25519_sk_to_pk(secretKey));
                        }
                        else {
                            _a = libsodium_wrappers_sumo_1.default.crypto_sign_seed_keypair(secretKey, 'uint8array'), publicKeyDerived = _a.publicKey, privateKey = _a.privateKey;
                            publicKey = new Uint8Array(publicKeyDerived);
                            secretKey = new Uint8Array(privateKey);
                            if (encrypted) {
                                privateKeys = {
                                    esk: sk,
                                    sk: utility_1.b58cencode(secretKey, constants_1.prefix[curve + "sk"]),
                                    salt: salt,
                                };
                            }
                        }
                        return [2 /*return*/, __assign(__assign({}, privateKeys), { pk: utility_1.b58cencode(publicKey, constants_1.prefix.edpk), pkh: utility_1.b58cencode(libsodium_wrappers_sumo_1.default.crypto_generichash(20, publicKey), constants_1.prefix.tz1) })];
                    }
                    if (curve === 'sp') {
                        keyPair = new elliptic_1.default.ec('secp256k1').keyFromPrivate(constructedKey);
                        prefixVal = keyPair.getPublic().getY().toArray()[31] % 2 ? 3 : 2;
                        pad = new Array(32).fill(0);
                        publicKey = new Uint8Array([prefixVal].concat(pad.concat(keyPair.getPublic().getX().toArray()).slice(-32)));
                        return [2 /*return*/, __assign(__assign({}, privateKeys), { pk: utility_1.b58cencode(publicKey, constants_1.prefix.sppk), pkh: utility_1.b58cencode(libsodium_wrappers_sumo_1.default.crypto_generichash(20, new Uint8Array(publicKey)), constants_1.prefix.tz2) })];
                    }
                    if (curve === 'p2') {
                        keyPair = new elliptic_1.default.ec('p256').keyFromPrivate(constructedKey);
                        prefixVal = keyPair.getPublic().getY().toArray()[31] % 2 ? 3 : 2;
                        pad = new Array(32).fill(0);
                        publicKey = new Uint8Array([prefixVal].concat(pad.concat(keyPair.getPublic().getX().toArray()).slice(-32)));
                        return [2 /*return*/, __assign(__assign({}, privateKeys), { pk: utility_1.b58cencode(publicKey, constants_1.prefix.p2pk), pkh: utility_1.b58cencode(libsodium_wrappers_sumo_1.default.crypto_generichash(20, new Uint8Array(publicKey)), constants_1.prefix.tz3) })];
                    }
                    throw new Error('Invalid prefix for a key encoding');
            }
        });
    });
};
exports.extractKeys = extractKeys;
/**
 * @description Generate a mnemonic
 * @returns {string} The 15 word generated mnemonic
 */
var generateMnemonic = function () { return bip39_1.generateMnemonic(160); };
exports.generateMnemonic = generateMnemonic;
/**
 * @description Check the validity of a tezos implicit address (tz1...)
 * @param {string} address The address to check
 * @returns {boolean} Whether address is valid or not
 */
var checkAddress = function (address) {
    try {
        utility_1.b58cdecode(address, constants_1.prefix.tz1);
        return true;
    }
    catch (e) {
        return false;
    }
};
exports.checkAddress = checkAddress;
/**
 * @description Generate a new key pair given a mnemonic and passphrase
 * @param {string} mnemonic The mnemonic seed
 * @param {string} passphrase The passphrase used to encrypt the seed
 * @returns {Promise} The generated key pair
 * @example
 * cryptoUtils.generateKeys('raw peace visual boil prefer rebel anchor right elegant side gossip enroll force salmon between', 'my_password_123')
 *   .then(({ mnemonic, passphrase, sk, pk, pkh }) => console.log(mnemonic, passphrase, sk, pk, pkh));
 */
var generateKeys = function (mnemonic, passphrase) { return __awaiter(void 0, void 0, void 0, function () {
    var s, kp;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, libsodium_wrappers_sumo_1.default.ready];
            case 1:
                _a.sent();
                return [4 /*yield*/, bip39_1.mnemonicToSeed(mnemonic, passphrase).then(function (seed) {
                        return seed.slice(0, 32);
                    })];
            case 2:
                s = _a.sent();
                kp = libsodium_wrappers_sumo_1.default.crypto_sign_seed_keypair(new Uint8Array(s));
                return [2 /*return*/, {
                        mnemonic: mnemonic,
                        passphrase: passphrase,
                        sk: utility_1.b58cencode(kp.privateKey, constants_1.prefix.edsk),
                        pk: utility_1.b58cencode(kp.publicKey, constants_1.prefix.edpk),
                        pkh: utility_1.b58cencode(libsodium_wrappers_sumo_1.default.crypto_generichash(20, kp.publicKey), constants_1.prefix.tz1),
                    }];
        }
    });
}); };
exports.generateKeys = generateKeys;
/**
 * @description Encrypts a secret key with a passphrase
 * @param {string} key The secret key
 * @param {string} passphrase The passphrase to encrypt the key
 * @param {Uint8Array} salt The salt to apply to the encryption
 * @returns {string} The encrypted secret key
 * @example
 * const encryptedSecretKey = cryptoUtils.encryptSecretKey(
 *  'p2sk3T9fYpibobxRr7daoPzywLpLAXJVd3bkXpAaqYVtVB37aAp7bU',
 *  'password',
 * );
 */
var encryptSecretKey = function (key, passphrase, salt) {
    if (salt === void 0) { salt = libsodium_wrappers_sumo_1.default.randombytes_buf(8); }
    if (!passphrase) {
        throw new Error('passphrase is require when encrypting a secret key');
    }
    var curve = key.substring(0, 2);
    var secretKey = utility_1.b58cdecode(key, constants_1.prefix[curve + "sk"]);
    if (curve === 'ed') {
        if (secretKey.length !== 64) {
            // seed
            var privateKey = libsodium_wrappers_sumo_1.default.crypto_sign_seed_keypair(secretKey, 'uint8array').privateKey;
            secretKey = new Uint8Array(privateKey);
        }
    }
    if (curve === 'ed') {
        secretKey = libsodium_wrappers_sumo_1.default.crypto_sign_ed25519_sk_to_seed(secretKey, 'uint8array');
    }
    var encryptionKey = pbkdf2_1.default.pbkdf2Sync(passphrase, salt, 32768, 32, 'sha512');
    var encryptedSk = libsodium_wrappers_sumo_1.default.crypto_secretbox_easy(secretKey, new Uint8Array(24), new Uint8Array(encryptionKey));
    return utility_1.b58cencode(utility_1.mergebuf(salt, encryptedSk), constants_1.prefix[curve + "esk"]);
};
exports.encryptSecretKey = encryptSecretKey;
/**
 * @description Sign bytes
 * @param {string} bytes The bytes to sign
 * @param {string} sk The secret key to sign the bytes with
 * @param {Object} magicBytes The magic bytes for the operation
 * @param {string} [password] The password used to encrypt the sk
 * @returns {Promise} The signed bytes
 * @example
 * import { magicBytes as magicBytesMap } from 'sotez';
 *
 * cryptoUtils.sign(opbytes, keys.sk, magicBytesMap.generic)
 *   .then(({ bytes, magicBytes, sig, prefixSig, sbytes }) => console.log(bytes, magicBytes, sig, prefixSig, sbytes));
 */
var sign = function (bytes, sk, magicBytes, password) {
    if (password === void 0) { password = ''; }
    return __awaiter(void 0, void 0, void 0, function () {
        var curve, encrypted, constructedKey, salt, encryptedSk, key, secretKey, bb, bytesHash, privateKey, signature, sbytes, key, sig, signature, sbytes, key, sig, signature, sbytes;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, libsodium_wrappers_sumo_1.default.ready];
                case 1:
                    _a.sent();
                    curve = sk.substring(0, 2);
                    if (![54, 55, 88, 98].includes(sk.length)) {
                        throw new Error('Invalid length for a key encoding');
                    }
                    encrypted = sk.substring(2, 3) === 'e';
                    constructedKey = utility_1.b58cdecode(sk, constants_1.prefix["" + curve + (encrypted ? 'e' : '') + "sk"]);
                    if (encrypted) {
                        salt = constructedKey.slice(0, 8);
                        encryptedSk = constructedKey.slice(8);
                        if (!password) {
                            throw new Error('No password was provided to decrypt the key');
                        }
                        key = pbkdf2_1.default.pbkdf2Sync(password, salt, 32768, 32, 'sha512');
                        constructedKey = libsodium_wrappers_sumo_1.default.crypto_secretbox_open_easy(new Uint8Array(encryptedSk), new Uint8Array(24), new Uint8Array(key));
                    }
                    secretKey = new Uint8Array(constructedKey);
                    bb = utility_1.hex2buf(bytes);
                    if (typeof magicBytes !== 'undefined') {
                        bb = utility_1.mergebuf(magicBytes, bb);
                    }
                    bytesHash = new Uint8Array(libsodium_wrappers_sumo_1.default.crypto_generichash(32, bb));
                    if (curve === 'ed') {
                        if (constructedKey.length !== 64) {
                            privateKey = libsodium_wrappers_sumo_1.default.crypto_sign_seed_keypair(secretKey, 'uint8array').privateKey;
                            secretKey = new Uint8Array(privateKey);
                        }
                        signature = libsodium_wrappers_sumo_1.default.crypto_sign_detached(bytesHash, secretKey);
                        sbytes = bytes + utility_1.buf2hex(signature);
                        return [2 /*return*/, {
                                bytes: bytes,
                                magicBytes: magicBytes ? utility_1.buf2hex(magicBytes) : '',
                                sig: utility_1.b58cencode(signature, constants_1.prefix.sig),
                                prefixSig: utility_1.b58cencode(signature, constants_1.prefix.edsig),
                                sbytes: sbytes,
                            }];
                    }
                    if (curve === 'sp') {
                        key = new elliptic_1.default.ec('secp256k1').keyFromPrivate(secretKey);
                        sig = key.sign(bytesHash, { canonical: true });
                        signature = new Uint8Array(sig.r.toArray(undefined, 32).concat(sig.s.toArray(undefined, 32)));
                        sbytes = bytes + utility_1.buf2hex(signature);
                        return [2 /*return*/, {
                                bytes: bytes,
                                magicBytes: magicBytes ? utility_1.buf2hex(magicBytes) : '',
                                sig: utility_1.b58cencode(signature, constants_1.prefix.sig),
                                prefixSig: utility_1.b58cencode(signature, constants_1.prefix.spsig),
                                sbytes: sbytes,
                            }];
                    }
                    if (curve === 'p2') {
                        key = new elliptic_1.default.ec('p256').keyFromPrivate(secretKey);
                        sig = key.sign(bytesHash, { canonical: true });
                        signature = new Uint8Array(sig.r.toArray(undefined, 32).concat(sig.s.toArray(undefined, 32)));
                        sbytes = bytes + utility_1.buf2hex(signature);
                        return [2 /*return*/, {
                                bytes: bytes,
                                magicBytes: magicBytes ? utility_1.buf2hex(magicBytes) : '',
                                sig: utility_1.b58cencode(signature, constants_1.prefix.sig),
                                prefixSig: utility_1.b58cencode(signature, constants_1.prefix.p2sig),
                                sbytes: sbytes,
                            }];
                    }
                    throw new Error('Provided curve not supported');
            }
        });
    });
};
exports.sign = sign;
/**
 * @description Verify signed bytes
 * @param {string} bytes The signed bytes
 * @param {string} sig The signature of the signed bytes
 * @param {string} pk The public key
 * @returns {boolean} Whether the signed bytes are valid
 */
var verify = function (bytes, sig, pk) { return __awaiter(void 0, void 0, void 0, function () {
    var curve, publicKey, bytesBuffer, signature, key, formattedSig, match, r, s, key, formattedSig, match, r, s;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, libsodium_wrappers_sumo_1.default.ready];
            case 1:
                _a.sent();
                if (!pk) {
                    throw new Error('Cannot verify without a public key');
                }
                curve = pk.substring(0, 2);
                publicKey = new Uint8Array(utility_1.b58cdecode(pk, constants_1.prefix[curve + "pk"]));
                if (sig.substring(0, 3) !== 'sig') {
                    if (curve !== sig.substring(0, 2)) {
                        // 'sp', 'p2' 'ed'
                        throw new Error('Signature and public key curves mismatch.');
                    }
                }
                bytesBuffer = libsodium_wrappers_sumo_1.default.crypto_generichash(32, utility_1.hex2buf(bytes));
                if (sig.substring(0, 3) === 'sig') {
                    signature = utility_1.b58cdecode(sig, constants_1.prefix.sig);
                }
                else if (sig.substring(0, 5) === curve + "sig") {
                    signature = utility_1.b58cdecode(sig, constants_1.prefix[curve + "sig"]);
                }
                else {
                    throw new Error("Invalid signature provided: " + sig);
                }
                if (curve === 'ed') {
                    try {
                        return [2 /*return*/, libsodium_wrappers_sumo_1.default.crypto_sign_verify_detached(new Uint8Array(signature), new Uint8Array(bytesBuffer), publicKey)];
                    }
                    catch (e) {
                        return [2 /*return*/, false];
                    }
                }
                else if (curve === 'sp') {
                    key = new elliptic_1.default.ec('secp256k1').keyFromPublic(publicKey);
                    formattedSig = utility_1.buf2hex(signature);
                    match = formattedSig.match(/([a-f\d]{64})/gi);
                    if (match) {
                        try {
                            r = match[0], s = match[1];
                            return [2 /*return*/, key.verify(bytesBuffer, { r: r, s: s })];
                        }
                        catch (e) {
                            return [2 /*return*/, false];
                        }
                    }
                    return [2 /*return*/, false];
                }
                else if (curve === 'p2') {
                    key = new elliptic_1.default.ec('p256').keyFromPublic(publicKey);
                    formattedSig = utility_1.buf2hex(signature);
                    match = formattedSig.match(/([a-f\d]{64})/gi);
                    if (match) {
                        try {
                            r = match[0], s = match[1];
                            return [2 /*return*/, key.verify(bytesBuffer, { r: r, s: s })];
                        }
                        catch (e) {
                            return [2 /*return*/, false];
                        }
                    }
                    return [2 /*return*/, false];
                }
                else {
                    throw new Error("Curve '" + curve + "' not supported");
                }
                return [2 /*return*/];
        }
    });
}); };
exports.verify = verify;
exports.default = {
    extractKeys: exports.extractKeys,
    encryptSecretKey: exports.encryptSecretKey,
    generateKeys: exports.generateKeys,
    checkAddress: exports.checkAddress,
    generateMnemonic: exports.generateMnemonic,
    sign: exports.sign,
    verify: exports.verify,
};
