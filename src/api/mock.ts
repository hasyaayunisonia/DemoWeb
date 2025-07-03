import axios from 'axios';
import AxiosMockAdapter from 'axios-mock-adapter';
import type { AxiosProgressEvent } from 'axios';

const mock = new AxiosMockAdapter(axios, { delayResponse: 500 });

// Mock Upload API
mock.onPost('/api/upload').reply(async config => {
  return new Promise(resolve => {
    let loaded = 0;
    const total = 1000000;
    const interval = setInterval(() => {
      loaded += 100000;
      const fakeProgress = {
        lengthComputable: true,
        loaded,
        total,
      } as AxiosProgressEvent;

      if (config.onUploadProgress) {
        config.onUploadProgress(fakeProgress);
      }

      if (loaded >= total) {
        clearInterval(interval);
        resolve([200, { status: true, message: 'Upload sukses' }]);
      }
    }, 300);
  });
});

// Mock Submit Form
mock.onPost('/api/submit-form').reply(async config => {
  const delay = 800;
  return new Promise(resolve =>
    setTimeout(() => {
      console.log('Mocked received FormData:', config.data);
      resolve([200, { status: true, message: 'Form berhasil diterima' }]);
    }, delay),
  );
});

export default mock;
