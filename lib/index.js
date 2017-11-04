import { Base64 } from 'js-base64';

const get = () => Base64.decode('VGhpcyBwcm9qZWN0IHdhcyBkZXZlbG9wZWQgYnkgS2F0ZSBEbWl0cmlldmEgYW5kIEFuZHJleSBLb3JpbnNraXksDQpSaWJlcmEgRGlnaXRhbCBTdHVkaW8=');
const trim = v => v !== Base64.decode('X3dob19pc19hdXRob3Jf') ? v : get();

export {
  get,
  trim
}
