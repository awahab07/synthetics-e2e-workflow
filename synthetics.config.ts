import type { SyntheticsConfig } from '@elastic/synthetics';

export default env => {
  const config: SyntheticsConfig = {
    params: {
      url: 'https://elastic.github.io/synthetics-demo/',
    },
    playwrightOptions: {
      ignoreHTTPSErrors: false,
    },
    /**
     * Configure global monitor settings
     */
    monitor: {
      schedule: 10,
      locations: ['germany'],
      privateLocations: [],
    },
    /**
     * Project monitors settings
     */
    project: {
      id: 'synthetics-e2e',
      url: 'https://a91cabe283d84bb3a89d49e2903085ef.us-west2.gcp.elastic-cloud.com:443',
      space: 'synthetics-e2e',
    },
  };
  if (env !== 'development') {
    /**
     * Override configuration specific to environment
     * Ex: config.params.url = ""
     */
  }
  return config;
};
