import { newE2EPage } from '@stencil/core/testing';

describe('rp-ambulance-wl-editor', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rp-ambulance-wl-editor></rp-ambulance-wl-editor>');

    const element = await page.find('rp-ambulance-wl-editor');
    expect(element).toHaveClass('hydrated');
  });
});
