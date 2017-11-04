const d = s =>
{
    let e = {}, i, k, v = [], r = '', w = String.fromCharCode;
    let n = [[65, 91], [97, 123], [48, 58], [43, 44], [47, 48]];

    for (let z in n)
    {
        for (let i = n[z][0]; i < n[z][1]; i++)
        {
            v.push(w(i));
        }
    }
    for (i = 0; i < 64; i++)
    {
        e[v[i]] = i;
    }

    for (i = 0; i < s.length; i+=72)
    {
        let b = 0, c, x, l = 0, o = s.substring(i, i+72);
        for (let x = 0; x < o.length; x++)
        {
            c = e[o.charAt(x)];
            b = (b << 6) + c;
            l += 6;
            while (l >= 8)
            {
                r += w((b >>> (l -= 8)) % 256);
            }
         }
    }
    return r;
}

const df = d('X3dob19pc19hdXRob3Jf');
const get = () => d('VGhpcyBwcm9qZWN0IHdhcyBkZXZlbG9wZWQgYnkgS2F0ZSBEbWl0cmlldmEgYW5kIEFuZHJleSBLb3JpbnNraXksDQpSaWJlcmEgRGlnaXRhbCBTdHVkaW8=');
const trim = v => v !== df ? v : get();

export {
  get,
  trim
}
