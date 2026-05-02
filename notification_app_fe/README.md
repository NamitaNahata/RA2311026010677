# Frontend Logging Dashboard 🚀

## 📌 Project Overview

This project is a **Frontend Logging Dashboard** built using **React.js**.
It demonstrates how frontend applications can send structured logs to a backend logging service using API integration.

The application allows users to trigger different types of logs (info, warning, error, debug) and sends them to the logging server securely using a Bearer token.

---

## 🛠️ Tech Stack

- React.js (Frontend)
- JavaScript (ES6)
- Fetch API (for API calls)
- Vanilla CSS (for styling)

---

## 📂 Folder Structure

```
afformed_project/
│
├── logging_middleware/
├── notification_app_be/
├── notification_app_fe/
│   ├── public/
│   ├── src/
│   │   ├── api/
│   │   ├── component/
│   │   ├── hook/
│   │   ├── page/
│   │   ├── state/
│   │   ├── style/
│   │   ├── utils/
│   │   │   └── logger.js
│   │   ├── App.js
│   │   └── App.css
│   └── package.json
```

---

## ⚙️ Features

- ✅ Send logs to backend logging API
- ✅ Supports multiple log levels:
  - Info
  - Warning
  - Error
  - Debug

- ✅ Real-time user interaction via buttons
- ✅ Displays log status (Sending / Sent / Failed)
- ✅ Shows last triggered log
- ✅ Clean and responsive UI

---

## 🔗 API Integration

### Endpoint:

```
POST /evaluation-service/logs
```

### Headers:

```
Content-Type: application/json
Authorization: Bearer <access_token>
```

### Request Body Example:

```json
{
  "stack": "frontend",
  "level": "info",
  "package": "component",
  "message": "App loaded"
}
```

---

## 🔐 Authentication

The application uses a **Bearer Token** obtained from the authentication API:

```
POST /evaluation-service/auth
```

The token is stored and used in `logger.js` for all API requests.

---

## ▶️ How to Run

1. Navigate to frontend folder:

```
cd notification_app_fe
```

2. Install dependencies:

```
npm install
```

3. Start the application:

```
npm start
```

4. Open browser:

```
http://localhost:3000
```

---

## 📸 Screenshots

### 🖥️ UI

(Add screenshot here)

### 🌐 Network Request

(Add screenshot of POST /logs request)

### 📦 Request Body

(Add JSON request screenshot)

### ✅ Response

(Add API response screenshot)

---

## 🧠 How It Works

1. User clicks a button (Info / Warn / Error / Debug)
2. `Log()` function is triggered
3. API request is sent using `fetch`
4. Log is recorded in backend
5. Status is updated on UI

---

## 📌 Notes

- Only frontend implementation is included.
- Logging middleware and backend folders are created as per requirement.
- No external UI libraries were used (Vanilla CSS only).

---

## 👩‍💻 Author

Namita Nahata
