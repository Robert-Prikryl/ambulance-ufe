import { newE2EPage } from '@stencil/core/testing';

describe('rp-ambulance-wl-app', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<rp-ambulance-wl-app></rp-ambulance-wl-app>');

    const element = await page.find('rp-ambulance-wl-app');
    expect(element).toHaveClass('hydrated');
  });
});
