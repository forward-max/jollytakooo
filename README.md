# 🌆 Smart City Traveler

A full-stack web application for planning and managing city trips with smart recommendations and itinerary management.

## 🚀 Features

- **Place Discovery**: Search restaurants, hotels, attractions, and more
- **Trip Planning**: Create and manage travel itineraries  
- **Reviews & Ratings**: Share experiences and read community reviews
- **Smart Recommendations**: AI-powered suggestions based on preferences
- **Responsive Design**: Modern UI with Material-UI components
- **Mock Authentication**: User registration and login system

## 🛠️ Tech Stack

### Frontend
- React 18 with Material-UI
- Redux Toolkit for state management
- React Router for navigation
- Axios for API calls
- React Hook Form for forms

### Backend
- Node.js with Express
- Mock data for development
- CORS enabled
- RESTful API design

## 📁 Project Structure

```
smart-city-traveler/
├── 📱 Frontend
│   └── smart-city-traveler-frontend/
│       ├── public/
│       ├── src/
│       │   ├── components/
│       │   ├── pages/
│       │   ├── store/
│       │   └── services/
│       └── package.json
├── 🚂 Backend
│   └── server.js
├── 🐳 Deployment
│   ├── Dockerfile
│   ├── railway.json
│   └── .dockerignore
└── 📋 Configuration
    ├── package.json
    └── .gitignore
```

## 🏃‍♂️ Quick Start

### Local Development

1. **Install dependencies:**
   ```bash
   npm install
   ```

2. **Build the application:**
   ```bash
   npm run build
   ```

3. **Start the server:**
   ```bash
   npm start
   ```

4. **Open in browser:**
   ```
   http://localhost:3000
   ```

### Development Mode

```bash
cd smart-city-traveler-frontend
npm install
npm start
```

## 🚀 Deployment

### Railway (Recommended)

1. **Push to GitHub:**
   ```bash
   git add .
   git commit -m "Ready for deployment"
   git push origin main
   ```

2. **Deploy on Railway:**
   - Go to [railway.app/new](https://railway.app/new)
   - Select "Deploy from GitHub repo"
   - Choose your repository
   - Railway will automatically build and deploy

### Environment Variables

```
NODE_ENV=production
CI=false
PORT=3000
```

## 📡 API Endpoints

- `GET /api/places` - Get all places with filtering
- `GET /api/places/:id` - Get specific place details
- `GET /api/trips` - Get user trips
- `POST /api/trips` - Create new trip
- `GET /api/reviews/place/:id` - Get reviews for place
- `POST /api/reviews` - Create review
- `POST /api/auth/signin` - User login
- `POST /api/auth/signup` - User registration

## 🎯 Usage

1. **Browse Places**: Explore restaurants, hotels, and attractions
2. **Search & Filter**: Find places by name, category, or city
3. **Plan Trips**: Create itineraries with selected places
4. **Write Reviews**: Share your experiences with ratings
5. **Manage Account**: Sign up and manage your profile

## 🔧 Development

### Available Scripts

- `npm start` - Start production server
- `npm run build` - Build the application
- `npm run dev` - Start development mode

### Project Features

- ✅ Responsive design for all devices
- ✅ Material-UI components
- ✅ Redux state management
- ✅ Mock authentication system
- ✅ RESTful API architecture
- ✅ Docker containerization
- ✅ Railway deployment ready

## 📄 License

This project is open source and available under the MIT License.

---

**Built with ❤️ for city travelers everywhere! 🗺️✈️**