import { newE2EPage } from '@stencil/core/testing';

describe('rp-ambulance-wl-list', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rp-ambulance-wl-list></rp-ambulance-wl-list>');

    const element = await page.find('rp-ambulance-wl-list');
    expect(element).toHaveClass('hydrated');
  });
});
