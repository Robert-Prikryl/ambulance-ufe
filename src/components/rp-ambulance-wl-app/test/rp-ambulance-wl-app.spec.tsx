import { newSpecPage } from '@stencil/core/testing';
import { RpAmbulanceWlApp } from '../rp-ambulance-wl-app';

describe('rp-ambulance-wl-app', () => {

  it('renders editor', async () => {
    const page = await newSpecPage({
      url: `http://localhost/entry/@new`,
      components: [RpAmbulanceWlApp],
      html: `<rp-ambulance-wl-app base-path="/"></rp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual ("rp-ambulance-wl-editor");

  });

  it('renders list', async () => {
    const page = await newSpecPage({
      url: `http://localhost/ambulance-wl/`,
      components: [RpAmbulanceWlApp],
      html: `<rp-ambulance-wl-app base-path="/ambulance-wl/"></rp-ambulance-wl-app>`,
    });
    page.win.navigation = new EventTarget()
    const child = await page.root.shadowRoot.firstElementChild;
    expect(child.tagName.toLocaleLowerCase()).toEqual("rp-ambulance-wl-list");
  });
});