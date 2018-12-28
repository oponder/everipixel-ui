everiPixel
==========

This is a fun application of everiToken's `Non Fungible Token` feature.
A canvas of pixels is presented to the user, and each pixel is represented by
a single NFT. Changes to pixels are recorded forever in the blockchain, and
people can actually own the pixel and transfer it.

## Usage


evtd must be running:

```
docker run --rm --name evtd -v /Users/oponder/Desktop/evtd-data/:/opt/evt/data -p 8888:8888 -p 9876:9876 -t oponder/evt /opt/evt/bin/evtd.sh --http-validate-host=false --charge-free-mode --producer-name=evt --enable-stale-production
```

everipixel-server must also be running, be sure to set PRIVATEKEY to the private key
of the pixel issuer.

PRIVATEKEY="xxxx" NODE_CONFIG="{\"host\":\"0.0.0.0\", \"evtNetwork\":{\"host\":\"0.0.0.0\", \"port\":8888, \"protocol\":\"http\"}}" PRIVATE_KEY= node server.js

Also look at the kubernetes folder of everipixel-server for more tips on how to start
evtd and the everipixel-server itself.

```
npm run dev
```

Visit `http://localhost:3000` to view the site.
