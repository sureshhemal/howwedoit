---
title: "Set up Laravel Sanctum API Authentication for Inertia.js Frontends"
description: "A step-by-step guide to implementing API authentication in a Laravel + Inertia.js app using Sanctum."
date: 2024-06-10
---

**Note:**  
This tutorial demonstrates how to set up API authentication for an Inertia.js frontend using Laravel Sanctum's cookie-based authentication. This is ideal for browser-based SPAs that share a domain or trusted subdomain with the backend.

> **This post specifically covers API authentication for Inertia.js frontends that are served by the same Laravel backend.**  
> If you are building a fully decoupled SPA (such as a separate Vue.js or React app) or a mobile app, the setup is different. We'll cover those scenarios in a separate post.

If you are building a mobile app or a fully decoupled frontend (where the client does not share cookies with the backend), you will need to use Sanctum's API token authentication (personal access tokens). We'll cover that scenario in a separate post.

In today's web development landscape, it's common to build applications using a Laravel backend paired with an Inertia.js frontend. This approach allows you to write your frontend in Vue.js (or React/Svelte) while still leveraging Laravel's routing and server-side features, all within a single unified application.

**This post demonstrates how to set up API authentication using Laravel Sanctum in a Laravel + Inertia.js application.**  
While Inertia apps typically use traditional web routes and controllers, there are many cases where you need to expose API endpoints as well—such as for mobile clients, third-party integrations, or even for certain frontend features that benefit from an API approach.

> **Note:**  
> If you are building a fully decoupled frontend (a separate Vue.js SPA that is not managed by Inertia), the setup for API authentication is a bit different. We'll cover that scenario in a separate post.

Whether you're adding API endpoints to your Inertia-powered Laravel app or preparing for hybrid use cases, this guide will walk you through the process of securing those endpoints with Sanctum.

# Server-Side Setup

## Step 1: Install Laravel API scaffolding

Laravel provides a convenient command to quickly scaffold the API layer of your application. This command sets up the necessary configuration, routes, and dependencies for building a secure API.

Run the following Artisan command in your Laravel project directory:

```bash
php artisan install:api
```

During this process, Laravel may notify you that a new database migration has been published and prompt you to run all pending migrations:

One new database migration has been published. Would you like to run all pending database migrations? 

Type `yes` and press Enter to run the migrations. This will create the necessary tables (such as `personal_access_tokens`) required for API authentication. 

## Step 2: Add `HasApiTokens` to the User Model

To enable API authentication with Sanctum, you need to add the `HasApiTokens` trait to your `User` model. This trait provides the necessary methods for issuing and managing API tokens.

Open the `app/Models/User.php` file and update the class to include the trait:

```php
use Laravel\Sanctum\HasApiTokens;

class User extends Authenticatable
{
    use HasApiTokens, HasFactory, Notifiable;

    // ... existing code ...
}
```

By including `HasApiTokens`, your user model can now generate and manage personal access tokens for API authentication. 

## Step 3: Enable Stateful API Middleware

To ensure your API routes are protected and support stateful authentication (such as cookie-based sessions for SPAs), you need to enable the stateful API middleware in your Laravel application.

Open the `bootstrap/app.php` file.  
**Add the following line inside the middleware registration closure:**

```php
$middleware->statefulApi();
```

Your `bootstrap/app.php` should now look like this (relevant section shown):

```php
return Application::configure(basePath: dirname(__DIR__))
    // ... existing code ...
    ->withMiddleware(function (Middleware $middleware) {
        $middleware->encryptCookies(except: ['appearance', 'sidebar_state']);

        $middleware->web(append: [
            HandleAppearance::class,
            HandleInertiaRequests::class,
            AddLinkHeadersForPreloadedAssets::class,
        ]);

        // Add this line to enable stateful API authentication
        $middleware->statefulApi();
    })
    // ... existing code ...
```

**Line changed:**  
You added `$middleware->statefulApi();` inside the `withMiddleware` closure, after the `$middleware->web(...)` call.

This enables Sanctum's stateful API authentication, which is essential for handling authentication cookies in fullstack applications.

> **Note:** This step is important for applications that use session-based authentication for APIs, such as when your frontend and backend share authentication cookies. 

# Client-Side Setup

Now that the server-side configuration is complete, let's move on to the client side. We'll use Axios to handle HTTP requests from our Vue.js frontend to the Laravel API.

## Step 4: Install Axios

Axios is a popular HTTP client for JavaScript applications, making it easy to send requests and handle responses.

Install Axios in your Vue.js project using npm or yarn:

```bash
npm install axios
# or
yarn add axios
```

Once installed, you can use Axios to interact with your Laravel API endpoints from your frontend application. 

## Step 5: Bootstrap Axios in a Separate File

To keep your project organized, it's a good practice to configure external services like Axios in a dedicated bootstrap file. This way, you can easily manage and update your HTTP client configuration in one place.

Create a new file called `bootstrap.ts` (or `bootstrap.js` for plain JavaScript) in your frontend source directory (e.g., `resources/js/bootstrap.ts`):

```typescript
import axios from 'axios';

declare global {
  interface Window {
    $http: typeof axios;
  }
}

window.$http = axios;
window.$http.defaults.withCredentials = true;
window.$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';
window.$http.defaults.baseURL = '/api/';
```

> **If you are using plain JavaScript, your `bootstrap.js` would look like:**
>
> ```js
> import axios from 'axios'
>
> window.$http = axios
> window.$http.defaults.withCredentials = true
> window.$http.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest'
> window.$http.defaults.baseURL = '/api/'
> ```

**Next, import this bootstrap file in your main app entry point (`app.ts` or `app.js`):**

```typescript
import './bootstrap.ts'
// ...other imports
```

This setup ensures that Axios is globally available as `window.$http` throughout your application, pre-configured to send credentials (cookies) and use the `/api/` base URL for all requests. This is especially important for authentication flows with Laravel Sanctum.

> **Note:**  
> In this guide, we're making Axios available globally as `$http` for convenience. However, this is a personal preference—if you prefer, you can always import and use `axios` directly in your components or composables. Both approaches are valid; choose the one that best fits your coding style and project needs. 

## Step 6: Fetch the Authenticated User in Your Vue App

With Axios bootstrapped and available as `$http`, you can now make authenticated API requests from your Vue components. For example, to fetch the currently authenticated user, you can use the following code inside the `onMounted` lifecycle hook:

```javascript
import { onMounted } from 'vue';

onMounted(async () => {
    const { data } = await $http.get('user');
    console.log({ data });
});
```

This code sends a GET request to the `/api/user` endpoint (thanks to the `baseURL` set in your Axios config) and logs the user data to the console.

> **Tip:**  
> If you prefer, you can also use `axios` directly instead of `$http`.  
> **Note:** If you have not set a `baseURL` in a bootstrap file, you need to use the full path:
> ```javascript
> import axios from 'axios';
> 
> onMounted(async () => {
>     // If you have NOT set baseURL in a bootstrap file:
>     const { data } = await axios.get('/api/user', { withCredentials: true });
>     console.log({ data });
> });
> ```
> But if you have set `baseURL` (as shown in the bootstrap step), just use the endpoint name (e.g., `'user'`), not `/api/user`.

This demonstrates how easy it is to interact with your Laravel API using Axios in a Vue.js application. 

## (Optional) Step: Initialize CSRF Protection for Cookie-Based Auth

If your frontend and backend are on the same domain (or trusted subdomains), and you are using cookie-based authentication (the default for SPAs with Sanctum), you need to initialize the CSRF token before attempting to log in. This is done by making a GET request to `/sanctum/csrf-cookie` from your frontend. This endpoint will set the necessary CSRF cookie for subsequent authentication requests.

For example, before sending a login request:

```javascript
await $http.get('sanctum/csrf-cookie');
// Now you can safely POST to /login
```

This step ensures that your authentication requests are protected and will not be rejected due to missing CSRF tokens.

> **Note:**  
> You only need to do this once per session, typically right before your login API call.

## When to Use Sanctum in a Laravel + Inertia.js App

Laravel Sanctum is an excellent choice for API authentication in the following scenarios:

- **Single-Page Applications (SPAs) with Inertia.js:** When your frontend (e.g., Vue.js, React) is served by the same Laravel backend (using Inertia.js), Sanctum makes it easy to authenticate users using cookies.
- **Session-based Authentication for APIs:** When you want to use Laravel's built-in session authentication for API routes in your Inertia.js app, Sanctum's stateful middleware makes this possible.

**When not to use Sanctum (in this context):**
- If you need OAuth2 features (like issuing access tokens to third-party apps, scopes, or advanced token management), consider using [Laravel Passport](https://laravel.com/docs/10.x/passport) instead.
- If you are building a fully decoupled SPA or a mobile app, you will need to use Sanctum's API token authentication (personal access tokens), which is not covered in this post.

Sanctum is designed to be simple and lightweight, making it ideal for most modern fullstack applications using Inertia.js that don't require the complexity of OAuth2.

## Further Reading

- [Laravel Sanctum Documentation](https://laravel.com/docs/10.x/sanctum)
- [Axios Documentation](https://axios-http.com/)
- [Example Pull Request: Set up Laravel Sanctum for API authentication](https://github.com/sureshhemal/howwedoit-examples/pull/4/files) 
