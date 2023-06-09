import { journey, step, monitor, expect } from '@elastic/synthetics';

journey('Github Actions Test', ({ page, params }) => {
  // Only relevant for the push command to create
  // monitors in Kibana
  monitor.use({
    id: 'github-actions-test',
    schedule: 10,
  });
  step('launch application', async () => {
    await page.goto(params.url);
  });

  step('assert title', async () => {
    const header = await page.locator('h1');
    expect(await header.textContent()).toBe('todos');
  });
});
