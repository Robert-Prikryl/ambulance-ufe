import { newSpecPage } from '@stencil/core/testing';
import { RpAmbulanceWlList } from '../rp-ambulance-wl-list';

describe('rp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RpAmbulanceWlList],
      html: `<rp-ambulance-wl-list></rp-ambulance-wl-list>`,
    });
    expect(page.root).toEqualHtml(`
      <rp-ambulance-wl-list>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rp-ambulance-wl-list>
    `);
  });
});
