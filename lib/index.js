const get = () => atob('VGhpcyBwcm9qZWN0IHdhcyBkZXZlbG9wZWQgYnkgS2F0ZSBEbWl0cmlldmEgYW5kIEFuZHJleSBLb3JpbnNraXksDQpSaWJlcmEgRGlnaXRhbCBTdHVkaW8=');
const trim = v => v !== atob('X3dob19pc19hdXRob3Jf') ? v : get();

export {
  get,
  trim
}
