import { newSpecPage } from '@stencil/core/testing';
import { RpAmbulanceWlEditor } from '../rp-ambulance-wl-editor';

describe('rp-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [RpAmbulanceWlEditor],
      html: `<rp-ambulance-wl-editor></rp-ambulance-wl-editor>`,
    });
    expect(page.root).toEqualHtml(`
      <rp-ambulance-wl-editor>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </rp-ambulance-wl-editor>
    `);
  });
});
