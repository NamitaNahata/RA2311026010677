# Frontend Logging Dashboard 🚀

## 📌 Overview

This project is a **React-based Frontend Logging Dashboard** that demonstrates how a frontend application can send structured logs to an external logging API using authentication.

Users can trigger different types of logs (info, warning, error, debug) through UI interactions, and these logs are sent to a backend logging service using REST APIs.

---

## 🛠️ Tech Stack

* React.js
* JavaScript (ES6)
* Fetch API
* CSS (Vanilla)

---

## 📂 Project Structure

```
afformed_project/
│
├── notification_app_fe/
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
│
├── logging_middleware/
├── notification_app_be/
├── notification_system_design.md
└── README.md
```

---

## ⚙️ Features

* Send logs from frontend to backend API
* Supports multiple log levels:

  * Info
  * Warning
  * Error
  * Debug
* Interactive UI with buttons
* Displays log status (Sending / Sent / Failed)
* Shows last triggered log
* Clean and responsive design

---

## 🔗 API Integration

### Endpoint

```
POST /evaluation-service/logs
```

### Headers

```
Content-Type: application/json
Authorization: Bearer <access_token>
```

### Request Body Example

```json
{
  "stack": "frontend",
  "level": "info",
  "package": "component",
  "message": "App loaded successfully"
}
```

---

## 🔐 Authentication

A Bearer token is generated using the authentication API:

```
POST /evaluation-service/auth
```

This token is used in `logger.js` to authorize all logging requests.

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

3. Start the app:

```
npm start
```

4. Open in browser:

```
http://localhost:3000
```

---

## 📸 Screenshots

### 🖥️ UI

(Add your UI screenshot here)

### 🌐 Network Request

(Add screenshot of POST /logs request)

### 📦 Request Payload

(Add JSON request screenshot)

### ✅ API Response

(Add response screenshot)

---

## 🧠 Working Flow

1. User interacts with UI (clicks button)
2. `Log()` function is triggered
3. Request is sent to logging API
4. Log is processed by backend
5. UI updates status and displays last log

---

## 📌 Notes

* Only frontend implementation is included.
* Logging middleware is reusable and modular.
* No external UI libraries were used.

---

## 👩‍💻 Author

Roll Number: RA2311026010677
