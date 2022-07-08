import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite'
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import { resolve} from 'path';

function pathResolver(dir: string) {
  return resolve(process.cwd(), '.' , dir);
}


export default defineConfig({
  plugins: [
      vue(),
    Components({
      resolvers: [NaiveUiResolver()]
    })
  ],
  resolve: {
    alias: [
      {
        find:'@',
        replacement: pathResolver('src')
      }
    ]
  },
  server: {
    host: 'localhost',
    port: 8000,
  }
})
