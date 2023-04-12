const { journey, step, expect } = require('@elastic/synthetics');

journey('Recorded journey - Edited', async ({ page, context }) => {
  step('Go to https://www.elastic.co/', async () => {
    await page.goto('https://www.elastic.co/');
    await page.locator('button[role="button"]:has-text("Accept")').click();
  });
  step('Click [aria-label="Elastic Menu"] >> text=PlatformUse casesPricingCustomersResourcesCompany >> #platform', async () => {
    await page.locator('[aria-label="Elastic Menu"] >> text=PlatformUse casesPricingCustomersResourcesCompany >> #platform').click();
    await Promise.all([
      page.waitForNavigation(),
      page.locator('[aria-label="Elastic Menu"] >> text=ObservabilityUnified logs, metrics, and traces >> h5').click()
    ]);
  });
});