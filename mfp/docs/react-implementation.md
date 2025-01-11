# React Implementation

The project is structured using a monorepo approach with multiple packages located in `mfp/packages/`:

- auth: Authentication related features
- container: Main application shell/container
- dashboard: Dashboard application
- marketing: Marketing/landing pages

## Project Structure
```
mfp/
  ├── packages/
  │   ├── auth/
  │   │   ├── src/
  │   │   ├── package.json
  │   │   └── webpack.config.js
  │   ├── container/
  │   │   ├── src/
  │   │   ├── package.json
  │   │   └── webpack.config.js
  │   ├── dashboard/
  │   │   ├── src/
  │   │   ├── package.json
  │   │   └── webpack.config.js
  │   └── marketing/
  │       ├── src/
  │       ├── package.json
  │       └── webpack.config.js
  └── README.md
```

## Package Details

### Required Packages

- **Auth**
  - Material UI
  - React Router
  - Auth0

- **Container** 
  - React Router
  - Module Federation

- **Dashboard**
  - Material UI
  - Chart.js
  - React Router

- **Marketing**
  - Material UI
  - React Router



# Now to wokr on the code we need to seup webpack config for each package
we would need dev webpack prod webpack and a common webpack config for botht dev and webpack

so we created a common config where we setup how our js files need to be handled
where we specifiy that js files need to be handled by babel presets and added plugin transform runtime to handle async code to be handled in client side

Sertup the code and in dev used merge to merge the common and dev webpack sepcified port and ran it

working as expected



