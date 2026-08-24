# @tpi-demo/ui-kit

Small Tailwind v4 presentation package for the TPI examples. It owns visual tokens and typed display contracts only; it does not perform HTTP requests, authentication, persistence, routing, or shared application state.

## Use

An Angular application imports `@tpi-demo/ui-kit/styles.css` from its global stylesheet and consumes the exported classes from `@tpi-demo/ui-kit`. The application maps BFF responses into `UserDisplay` or `ProductDisplay`; it never puts session identifiers or authorization data in these display objects.

```bash
npm test
```
