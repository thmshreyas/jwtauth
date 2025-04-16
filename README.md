# JWT Auth API

A simple JWT authentication system with Node.js/Express.

## Key Features

- 🔑 Login to get JWT tokens
- 🔒 Protected routes with Bearer tokens
- ♻️ Token refresh endpoint
- 🚪 Secure logout

## Endpoints

- `POST /login` - Get access token
- `GET /posts` - Protected route (requires token)
- `POST /token` - Refresh expired token
- `DELETE /logout` - Invalidate token

## Quick Start

1. `npm install`
2. `npm start`
3. Use sample requests from the repo

Requires Node.js 14+
