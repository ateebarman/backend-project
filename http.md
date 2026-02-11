# HTTP Complete Notes

URL: Uniform Resource Locator
URI: Uniform Resource Identifier
URN: Uniform Resource Name  

## 1. What is HTTP?

HTTP (HyperText Transfer Protocol) is an **application-layer protocol** used for communication between a **client** (usually a browser) and a **server** over the web.

* It follows a **request–response model**
* It is **stateless** by default
* It works on top of **TCP/IP** (and TLS for HTTPS)

Example:
Client → sends HTTP Request
Server → sends HTTP Response

---

## 2. Why HTTP is Stateless

Each HTTP request is **independent**.
The server does NOT remember previous requests.

Problems caused by statelessness:

* No login memory
* No shopping cart
* No user sessions

Solutions:

* Cookies
* Sessions
* Tokens (JWT)

---

## 3. HTTP vs HTTPS

| Feature  | HTTP         | HTTPS       |
| -------- | ------------ | ----------- |
| Security | ❌ Not secure | ✅ Encrypted |
| Protocol | TCP          | TCP + TLS   |
| Port     | 80           | 443         |
| Data     | Plain text   | Encrypted   |

HTTPS uses **TLS/SSL** to encrypt data.

---

## 4. HTTP Request Structure

An HTTP request has **4 parts**:

### 1. Request Line

```
METHOD /path HTTP/version
```

Example:

```
GET /users HTTP/1.1
```

### 2. Headers

Key-value pairs that provide metadata 
about the request, such as:

```
Host: api.example.com
Authorization: Bearer eyJhbGciOiJIUzI1Ni...
Accept: application/json
User-Agent: Mozilla/5.0

```

### 3. Blank Line

Separates headers and body

### 4. Body (optional)

Used in POST, PUT, PATCH

---

## 5. HTTP Response Structure

### 1. Status Line

```
HTTP/1.1 200 OK
```

### 2. Headers

```
Content-Type: application/json
Content-Length: 120
```

### 3. Blank Line

### 4. Body

```
{ "message": "Success" }
```

---

## 6. HTTP Methods (Verbs)

### GET

* Fetch data
* No request body
* Idempotent

### POST

* Create data
* Has body
* Not idempotent

### PUT

* Replace entire resource
* Idempotent

### PATCH

* Partial update

### DELETE

* Remove resource

### HEAD

* Same as GET but no body

### OPTIONS

* Returns allowed methods
* Used in CORS

---

## 7. Idempotency

A request is **idempotent** if repeating it gives the same result.

| Method | Idempotent |
| ------ | ---------- |
| GET    | ✅          |
| PUT    | ✅          |
| DELETE | ✅          |
| POST   | ❌          |

---

## 8. HTTP Status Codes

### 1xx – Informational

* 100 Continue

### 2xx – Success

* 200 OK
* 201 Created
* 204 No Content

### 3xx – Redirection

* 301 Moved Permanently
* 302 Found
* 304 Not Modified

### 4xx – Client Errors

* 400 Bad Request
* 401 Unauthorized
* 403 Forbidden
* 404 Not Found
* 409 Conflict
* 422 Unprocessable Entity

### 5xx – Server Errors

* 500 Internal Server Error
* 502 Bad Gateway
* 503 Service Unavailable

---

## 9. HTTP Headers

### Common Request Headers

* Authorization
* Content-Type
* Accept
* Cookie
* User-Agent

### Common Response Headers

* Set-Cookie
* Content-Type
* Cache-Control
* Location

---

## 10. Content-Type

Tells server/client how to interpret body

Examples:

* application/json
* multipart/form-data
* application/x-www-form-urlencoded
* text/html

---

## 11. Cookies

* Small data stored in browser
* Sent automatically with requests

Attributes:

* HttpOnly
* Secure
* SameSite
* Max-Age / Expires

---

## 12. Sessions

* Stored on server
* Client stores session ID (cookie)

Flow:
Client → Session ID
Server → Session Data

---

## 13. Tokens (JWT)

* Stateless authentication
* Stored in client
* Sent via Authorization header

Format:

```
Authorization: Bearer <token>
```

---

## 14. CORS (Cross-Origin Resource Sharing)

Controls which origins can access resources

Important Headers:

* Access-Control-Allow-Origin
* Access-Control-Allow-Methods
* Access-Control-Allow-Headers

Preflight Request:

* OPTIONS request

---

## 15. Caching

Reduces server load

Headers:

* Cache-Control
* ETag
* Last-Modified

---

## 16. HTTP Versions

### HTTP/1.1

* One request per connection

### HTTP/2

* Multiplexing
* Header compression

### HTTP/3

* Uses QUIC
* Runs on UDP

---

## 17. REST over HTTP

REST uses HTTP methods semantically:

```
GET    /users
POST   /users
GET    /users/:id
PUT    /users/:id
DELETE /users/:id
```

---

## 18. Security Concepts

* HTTPS
* CSRF
* XSS
* Rate limiting
* Input validation

---

## 19. HTTP in Node.js / Express

* req.method
* req.headers
* req.body
* res.status()
* res.json()

---

## 20. Interview One-Liners

* HTTP is stateless
* HTTPS encrypts data using TLS
* GET should never change server state
* POST is not idempotent
* Status codes define request outcome

---

## Final Summary

HTTP is the foundation of web communication. Understanding requests, responses, headers, methods, and status codes is **mandatory for backend, full-stack, and system design interviews**.

---

End of Notes
