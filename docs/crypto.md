<!-- Generated by documentation.js. Update this documentation by updating the source code. -->

## checkAddress

Check the validity of a tezos implicit address (tz1...)

### Parameters

*   `address` **[string][1]** The address to check

Returns **[boolean][2]** Whether address is valid or not

## encryptSecretKey

Encrypts a secret key with a passphrase

### Parameters

*   `key` **[string][1]** The secret key
*   `passphrase` **[string][1]** The passphrase to encrypt the key
*   `salt` **[Uint8Array][3]** The salt to apply to the encryption

### Examples

```javascript
const encryptedSecretKey = cryptoUtils.encryptSecretKey(
 'p2sk3T9fYpibobxRr7daoPzywLpLAXJVd3bkXpAaqYVtVB37aAp7bU',
 'password',
);
```

Returns **[string][1]** The encrypted secret key

## extractKeys

Extract key pairs from a secret key

### Parameters

*   `sk` **[string][1]** The secret key to extract key pairs from
*   `passphrase` **[string][1]?** The password used to encrypt the sk

### Examples

```javascript
cryptoUtils.extractKeys('edskRqAF8s2MKKqRMxq53CYYLMnrqvokMyrtmPRFd5H9osc4bFmqKBY119jiiqKQMti2frLAoKGgZSQN3Lc3ybf5sgPUy38e5A')
  .then(({ sk, pk, pkh }) => console.log(sk, pk, pkh));
```

Returns **[Promise][4]** The extracted key pairs

## generateKeys

Generate a new key pair given a mnemonic and passphrase

### Parameters

*   `mnemonic` **[string][1]** The mnemonic seed
*   `passphrase` **[string][1]** The passphrase used to encrypt the seed

### Examples

```javascript
cryptoUtils.generateKeys('raw peace visual boil prefer rebel anchor right elegant side gossip enroll force salmon between', 'my_password_123')
  .then(({ mnemonic, passphrase, sk, pk, pkh }) => console.log(mnemonic, passphrase, sk, pk, pkh));
```

Returns **[Promise][4]** The generated key pair

## generateMnemonic

Generate a mnemonic

Returns **[string][1]** The 15 word generated mnemonic

## sign

Sign bytes

### Parameters

*   `bytes` **[string][1]** The bytes to sign
*   `sk` **[string][1]** The secret key to sign the bytes with
*   `magicBytes` **[Object][5]** The magic bytes for the operation
*   `password` **[string][1]?** The password used to encrypt the sk

### Examples

```javascript
import { magicBytes as magicBytesMap } from 'sotez';

cryptoUtils.sign(opbytes, keys.sk, magicBytesMap.generic)
  .then(({ bytes, magicBytes, sig, prefixSig, sbytes }) => console.log(bytes, magicBytes, sig, prefixSig, sbytes));
```

Returns **[Promise][4]** The signed bytes

## verify

Verify signed bytes

### Parameters

*   `bytes` **[string][1]** The signed bytes
*   `sig` **[string][1]** The signature of the signed bytes
*   `pk` **[string][1]** The public key

Returns **[boolean][2]** Whether the signed bytes are valid

[1]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/String

[2]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Boolean

[3]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Uint8Array

[4]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Promise

[5]: https://developer.mozilla.org/docs/Web/JavaScript/Reference/Global_Objects/Object
