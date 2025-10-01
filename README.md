# 🎓 Smart Campus SuperApp

**Advanced Campus Management System**  
React Native + Expo + Firebase

## 🚀 Features

### Core Modules
- 🍔 **Canteen & Food Services** - Order food, track orders, manage menu
- 🧹 **Cleanliness & Facility Reporting** - Report issues, track progress
- 🎧 **Lost & Found** - Report lost/found items with AI matching
- 📢 **Events & Notifications** - Register for events, get updates
- 📚 **Library Services** - Search books, track borrowed items
- 🏢 **Hostel Management** - Maintenance requests, room allocation
- 🚍 **Transport** - Live bus tracking, shuttle booking
- 🎓 **Academic Services** - Timetable, attendance, grades
- 💸 **Marketplace** - Buy/sell items within campus
- 🎮 **Gamification** - Points, badges, leaderboards

### Authentication
- Multi-role login (Student/Faculty/Authority/Admin/Guest)
- Email/Password authentication
- Role-based access control
- Forgot password functionality

### Design
- 🌞 Playful Light Theme (Gradient backgrounds, glassmorphism)
- 🌙 Dark Theme Support
- Smooth animations with React Native Reanimated
- Glassmorphism effects with Expo Blur

## 📱 Tech Stack

- **Frontend**: React Native + Expo SDK 51
- **State Management**: Redux Toolkit
- **Navigation**: React Navigation 6
- **Backend**: Firebase (Auth, Firestore, Storage)
- **UI Components**: Custom components with Expo Linear Gradient & Blur
- **Icons**: Expo Vector Icons

## 🛠️ Setup Instructions

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator (for Mac) or Android Studio (for Android development)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/tanishq-fig/smart-campus-superapp.git
   cd smart-campus-superapp
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Configure Firebase**
   
   Create a `.env` file in the root directory:
   ```bash
   cp .env.example .env
   ```
   
   Add your Firebase configuration to `.env`:
   ```
   FIREBASE_API_KEY=your_api_key_here
   FIREBASE_AUTH_DOMAIN=your_auth_domain_here
   FIREBASE_PROJECT_ID=your_project_id_here
   FIREBASE_STORAGE_BUCKET=your_storage_bucket_here
   FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id_here
   FIREBASE_APP_ID=your_app_id_here
   ```

4. **Start the development server**
   ```bash
   npm start
   ```

5. **Run on your device**
   - **iOS**: Press `i` in the terminal or scan QR code with Expo Go app
   - **Android**: Press `a` in the terminal or scan QR code with Expo Go app
   - **Web**: Press `w` in the terminal

## 📂 Project Structure

```
smart-campus-superapp/
├── App.js                      # Main app entry point
├── src/
│   ├── components/             # Reusable UI components
│   │   ├── Button.js
│   │   ├── Card.js
│   │   ├── Input.js
│   │   ├── Header.js
│   │   ├── Loading.js
│   │   └── index.js
│   ├── config/
│   │   └── firebase.js         # Firebase configuration
│   ├── navigation/
│   │   ├── AuthNavigator.js    # Authentication screens navigator
│   │   ├── MainNavigator.js    # Main app navigator (tabs)
│   │   ├── ModulesNavigator.js # Modules stack navigator
│   │   └── index.js
│   ├── screens/
│   │   ├── auth/               # Authentication screens
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   ├── RoleSelectionScreen.js
│   │   │   └── ForgotPasswordScreen.js
│   │   ├── dashboard/          # Dashboard screens
│   │   │   └── StudentDashboard.js
│   │   └── modules/            # Module-specific screens
│   │       ├── canteen/
│   │       ├── cleanliness/
│   │       ├── lostFound/
│   │       ├── events/
│   │       ├── library/
│   │       ├── hostel/
│   │       ├── transport/
│   │       ├── academic/
│   │       ├── marketplace/
│   │       └── gamification/
│   └── store/                  # Redux store
│       ├── store.js
│       └── slices/             # Redux slices
│           ├── authSlice.js
│           ├── themeSlice.js
│           ├── canteenSlice.js
│           ├── cleanlinessSlice.js
│           ├── lostFoundSlice.js
│           ├── eventsSlice.js
│           ├── librarySlice.js
│           ├── hostelSlice.js
│           ├── transportSlice.js
│           ├── academicSlice.js
│           ├── marketplaceSlice.js
│           └── gamificationSlice.js
├── assets/                     # Images, fonts, etc.
├── .env.example               # Environment variables template
├── app.json                   # Expo configuration
├── babel.config.js            # Babel configuration
└── package.json               # Dependencies
```

## 🎯 Available Modules

### 1. Canteen & Food Services
- Browse menu with categories
- Add items to cart
- Track order status
- Order history

### 2. Cleanliness & Facility Reporting
- Report cleanliness issues
- Upload photos
- Track report status
- View all reports

### 3. Lost & Found
- Report lost items
- Browse found items
- Claim items
- Track claim status

### 4. Events & Notifications
- Browse upcoming events
- Register for events
- View event details
- Get notifications

### 5. Library Services
- Search books
- Check availability
- Borrow books
- Track borrowed items

### 6. Hostel Management
- View room information
- Submit maintenance requests
- Track request status
- View announcements

### 7. Transport
- Live bus tracking
- View bus schedules
- Book shuttles
- Track booking status

### 8. Academic Services
- View timetable
- Check attendance
- View grades
- Course information

### 9. Marketplace
- List items for sale
- Browse listings
- Chat with sellers
- Manage your listings

### 10. Gamification
- Earn points
- Unlock badges
- View leaderboard
- Track achievements

## 🔐 User Roles

- **Student**: Access to all modules
- **Faculty**: Manage classes, attendance, grades
- **Authority**: Review reports, manage facilities
- **Admin**: Full system access
- **Guest**: Limited access to public features

## 🎨 UI Components

All screens use custom reusable components:
- `Button` - Gradient buttons with loading states
- `Card` - Glassmorphism cards with blur effects
- `Input` - Text inputs with icons and validation
- `Header` - Navigation headers with back buttons
- `Loading` - Loading indicators

## 🔥 Firebase Configuration

The app uses Firebase for:
- **Authentication**: User login/registration
- **Firestore**: Real-time database
- **Storage**: Image and file uploads

Make sure to enable these services in your Firebase console.

## 📱 Screenshots

Coming soon...

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 👨‍💻 Developer

Built with ❤️ by Tanishq

---

**Status**: ✅ Complete Implementation with Firebase, Navigation, Auth, Dashboards, and All Modules
