import { newSpecPage } from '@stencil/core/testing';
import { RpAmbulanceWlList } from '../rp-ambulance-wl-list';

describe('rp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RpAmbulanceWlList],
      html: `<rp-ambulance-wl-list></rp-ambulance-wl-list>`,
    });
    const wlList = page.rootInstance as RpAmbulanceWlList;
    const expectedPatients = wlList?.waitingPatients?.length

    const items = page.root.shadowRoot.querySelectorAll("md-list-item");
    expect(items.length).toEqual(expectedPatients);
  });
});
