
// This script is loaded into the MapLibre worker thread.
// We need to fetch the PMTiles library and register the protocol.

// Use the CDN version for simplicity in the worker if we can't easily bundle it
importScripts('https://unpkg.com/pmtiles@4.4.0/dist/pmtiles.js');

if (self.pmtiles) {
    const protocol = new self.pmtiles.Protocol();
    self.addProtocol('pmtiles', protocol.tile);
}
