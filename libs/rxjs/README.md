# rxjs

## Installing

```bash
$ npm install --save @ascodix/ngx-octopus
```

## Quickstart

Provide NgxMask providers with `provideNgxOcpRxjs` function.

### With default config options application level

```typescript
import { provideNgxOcpRxjs } from '@ascodix/ngx-octopus/rxjs';

export const appConfig: ApplicationConfig = {
    providers: [
        (...)
        provideNgxOcpRxjs(),
        (...)
    ]
};
```

### Passing your own rxjs config options

```typescript
import { provideNgxOcpRxjs, withRxjsConfig } from '@ascodix/ngx-octopus/rxjs';

export const appConfig: ApplicationConfig = {
    providers: [
        (...)
        provideNgxOcpRxjs(withRxjsConfig({
          console: true
        })),
        (...)
    ]
};
```
