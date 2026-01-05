# One-Time Passcode App

Modern OTP verification flow built with React 19, Vite 7, and Tailwind CSS. The UI guides a user from entering an email address to confirming a six-digit code, handling validation, focus management, and call-to-action states along the way.

## Features
- Email capture form with live validation that toggles the primary CTA state.
- OTP keypad with auto-advance, backspace navigation, and final-state verification button.
- Reusable `Input`, `Button`, and `Otp` components styled with Tailwind gradients and subtle transparency.
- Accessible keyboard-only flow with focused states and visual feedback.

## Demo
![OTP flow walkthrough](public/otp-demo.gif)

## Tech Stack
- React 19 (functional components + hooks)
- Vite 7 tooling with instant HMR
- Tailwind CSS 3 for utility-first styling

## Getting Started
1. **Install dependencies**
	```bash
	npm install
	```
2. **Run the development server**
	```bash
	npm run dev
	```
	Vite prints the local and network URLs (defaults to http://localhost:5173).
3. **Build for production**
	```bash
	npm run build
	```
4. **Preview the production build**
	```bash
	npm run preview
	```

## Project Structure
```
src/
 ├── App.jsx
 ├── App.css
 ├── index.css
 ├── main.jsx
 └── components/
	  ├── Input.jsx
	  ├── Otp.jsx
	  └── buttons.jsx
```

## Key Components
- `src/components/Input.jsx` – email entry field and shared input styles.
- `src/components/buttons.jsx` – CTA button with disabled styling states.
- `src/components/Otp.jsx` – manages OTP digits, focus control, and verification CTA.

## Available Scripts
- `npm run dev` – start Vite in development mode.
- `npm run build` – bundle the app for production.
- `npm run preview` – run the built app locally.
- `npm run lint` – run the ESLint configuration.

## Roadmap Ideas
- Hook up to an API that dispatches real emails or SMS messages.
- Add resend countdown timers and inline error states.
- Support configurable OTP lengths and masking options.

## License
No license has been specified.
