import { newSpecPage } from '@stencil/core/testing';
import { RpAmbulanceWlApp } from '../rp-ambulance-wl-app';

describe('rp-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RpAmbulanceWlApp],
      html: `<rp-ambulance-wl-app></rp-ambulance-wl-app>`,
    });
    expect(page.root).toEqualHtml(`
      <rp-ambulance-wl-app>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rp-ambulance-wl-app>
    `);
  });
});
