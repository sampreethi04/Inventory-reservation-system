# Inventory-reservation-system

## Overview

The Inventory Reservation System is a frontend-based web application developed using HTML, CSS, and JavaScript. The project simulates a real-world inventory reservation workflow commonly used in e-commerce platforms, warehouse systems, and online retail applications.

In online shopping platforms, users may take several minutes to complete payments due to OTP verification, UPI confirmations, banking redirects, or wallet authentication. During this payment window, multiple users may attempt to purchase the same product simultaneously.

If stock is deducted only after successful payment, overselling can occur where multiple customers purchase the same limited stock item. If stock is deducted immediately after adding items to the cart, inventory appears unavailable even though many users abandon their carts.

To solve this problem, the application introduces a temporary reservation system.

When a user clicks the "Reserve" button:
- The selected stock is temporarily reserved
- A countdown timer begins
- The reservation remains active for a limited duration
- Users can either confirm or cancel the reservation
- If the reservation expires, stock is automatically restored

This project demonstrates the complete lifecycle of inventory reservation management including:
- Product listing
- Temporary stock reservation
- Countdown timer
- Reservation confirmation
- Reservation cancellation
- Automatic reservation expiry
- Error handling

---

# Features

## Product Listing

- Displays available products
- Shows warehouse information
- Displays available stock count
- Allows users to reserve products

## Reservation System

- Temporary stock reservation
- Reservation status tracking
- Reservation details display

## Live Countdown Timer

- 10-minute reservation timer
- Real-time countdown updates
- Automatic expiry handling

## Reservation Confirmation

- Confirm purchase before timer expires
- Reservation status updates dynamically

## Reservation Cancellation

- Cancel reservation manually
- Reserved stock is restored immediately

## Automatic Reservation Expiry

- Reservation automatically expires after countdown
- Stock is returned to inventory
- User receives expiry notification

## Error Handling

### 409 Conflict
Occurs when:
- Stock is unavailable
- Another reservation is already active

### 410 Gone
Occurs when:
- Reservation expires before confirmation

---

# Technologies Used

| Technology | Purpose |
|------------|---------|
| HTML | Application structure |
| CSS | Styling and layout |
| JavaScript | Dynamic functionality and reservation logic |

---

# Project Structure

```bash
Inventory-Reservation-System/
│
├── index.html
├── style.css
├── script.js
├── README.md
│
└── screenshots/
    ├── product-list.png
    ├── reservation-created.png
    ├── reservation-confirmed.png
    ├── reservation-cancelled.png
    ├── reservation-expired.png
    ├── error-409.png
    └── error-410.png
```

---

# Application Workflow

## Step 1: Product Display

The homepage displays:
- Product name
- Warehouse name
- Available stock
- Reserve button

Users can browse available inventory and select a product to reserve.

---

## Step 2: Product Reservation

When the user clicks the "Reserve" button:
- Available stock decreases temporarily
- Reservation status becomes "Pending"
- Reservation details appear
- Countdown timer starts

---

## Step 3: Reservation Management

The user can:

### Confirm Purchase
- Reservation becomes permanent
- Status changes to "Confirmed"

### Cancel Reservation
- Reservation is released
- Stock returns to inventory

---

## Step 4: Reservation Expiry

If the user does not confirm before the timer ends:
- Reservation automatically expires
- Reserved stock is restored
- User receives expiry notification

---

# Reservation Expiry Mechanism

The reservation expiry functionality is implemented using JavaScript's `setInterval()` method.

The timer:
- Updates every second
- Displays remaining time dynamically
- Automatically expires reservations at 00:00

When the timer expires:
- Reservation status changes to "Expired"
- Stock quantity is restored
- Error message is displayed

This simulates real-world reservation expiration systems used in e-commerce platforms.

---

# Error Handling

## 409 Conflict

Displayed when:
- Product stock is unavailable
- Another reservation is already active

Example:

```bash
409 Conflict: Not enough stock available.
```

---

## 410 Gone

Displayed when:
- Reservation expires before confirmation

Example:

```bash
410 Gone: Reservation expired.
```

---

# User Interface

## Product Cards

Each product card displays:
- Product name
- Warehouse location
- Available stock
- Reserve button

---

## Reservation Section

After reserving a product:
- Reservation details are shown
- Countdown timer becomes visible
- Confirm and Cancel buttons appear

---

# How to Run the Project

## Step 1: Clone the Repository

```bash
git clone <repository-url>
```

---

## Step 2: Open Project Folder

Navigate to the project directory.

---

## Step 3: Run the Application

Open:

```bash
index.html
```

in any web browser.

No installation or additional setup is required.

---

# Screenshots

## 1. Product Listing Page

Displays all available products and stock information.

![Product Listing](screenshots/product-list.png)

---

## 2. Reservation Created

Shows reservation details and countdown timer after reserving a product.

![Reservation Created](screenshots/reservation-created.png)

---

## 3. Reservation Confirmed

Displays successful purchase confirmation.

![Reservation Confirmed](screenshots/reservation-confirmed.png)

---

## 4. Reservation Cancelled

Displays reservation cancellation and stock restoration.

![Reservation Cancelled](screenshots/reservation-cancelled.png)

---

## 5. Reservation Expired

Shows automatic reservation expiry after countdown completion.

![Reservation Expired](screenshots/reservation-expired.png)

---

## 6. Error Handling – 409 Conflict

Displays stock unavailable or duplicate reservation error.

![409 Conflict](screenshots/error-409.png)

---

## 7. Error Handling – 410 Gone

Displays reservation expired error.

![410 Gone](screenshots/error-410.png)

---

# Future Improvements

The current project is a frontend simulation. In a production-level system, the following enhancements can be added:

## Backend Integration

- Next.js App Router
- REST APIs
- Node.js backend

## Database Support

- PostgreSQL
- Prisma ORM
- Supabase or Neon

## Real Concurrency Handling

- Redis distributed locking
- Atomic stock transactions

## Authentication System

- User login/signup
- Session management

## Real-Time Synchronization

- WebSocket integration
- Live stock updates

## Idempotency Support

- Safe retry handling
- Duplicate request prevention

## Multi-Warehouse Inventory

- Warehouse-based allocation
- Inventory balancing

---

# Learning Outcomes

This project helped in understanding:
- Inventory reservation systems
- Reservation lifecycle management
- Frontend state handling
- Dynamic DOM manipulation
- Countdown timer implementation
- Error handling
- Real-world e-commerce workflows

---

# Conclusion

The Inventory Reservation System successfully demonstrates the core concept of temporary stock reservation used in modern e-commerce applications.

The project provides:
- A clean user interface
- Reservation management workflow
- Countdown-based expiry handling
- Dynamic stock updates
- Reservation confirmation and cancellation

This project can serve as a foundation for developing scalable full-stack inventory and warehouse management systems.

---

# Author

Sampreethi
