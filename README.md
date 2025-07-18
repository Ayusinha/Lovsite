# Lovsite
🌹 Ultimate couples' platform built with React Native + GraphQL. AI-powered relationship enhancement, trip planning, wellness booking, and secure intimacy features. Production-ready with TypeScript, Redux, and comprehensive testing.

# Lovsite - React Native + GraphQL + TypeScript

## 🚀 Lovsite Mobile App

**Ultimate couples' relationship and intimacy platform** built with React Native, GraphQL, and TypeScript. Plan dates, enhance intimacy, and strengthen your connection with cutting-edge technology.

### ✨ Features

- **Trip Planning**: Collaborative travel planning with real-time synchronization
- **Dining & Entertainment**: Restaurant booking, movie tickets, and event discovery
- **Wellness & Spa**: Massage appointments and wellness activity scheduling
- **Intimacy Tools**: AI-powered relationship enhancement features
- **Secure Shopping**: Discreet couples' marketplace with consent-based browsing
- **Real-time Chat**: End-to-end encrypted messaging between partners
- **AR/VR Integration**: Immersive experiences for relationship building

### 🛠️ Tech Stack

#### Frontend
- **React Native** 0.74+ with TypeScript
- **Apollo Client** for GraphQL state management[1][2]
- **React Navigation** v6 for navigation
- **React Native Paper** for UI components
- **Redux Toolkit** for local state management
- **React Native Reanimated** for animations

#### Backend & Database
- **Node.js** with Express and TypeScript
- **GraphQL** with Apollo Server[3][4]
- **PostgreSQL** for relational data (user profiles, bookings, transactions)[5][6]
- **MongoDB** for unstructured data (messages, activity logs, preferences)[7][8]
- **Redis** for caching and session management

#### Cloud & Infrastructure
- **AWS** or **Google Cloud Platform** for hosting
- **Cloudflare** CDN for global content delivery
- **Firebase** for push notifications and real-time features

## 📋 Prerequisites

- Node.js 18+ 
- React Native CLI or Expo CLI
- iOS Simulator (macOS) or Android Studio
- PostgreSQL 13+
- MongoDB 5.0+
- Redis 6.0+

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/yourusername/lovsite.git
cd lovsite
```

### 2. Install Dependencies

```bash
# Install root dependencies
npm install

# Install iOS dependencies (macOS only)
cd ios && pod install && cd ..
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
# GraphQL API
GRAPHQL_ENDPOINT=http://localhost:4000/graphql
GRAPHQL_WS_ENDPOINT=ws://localhost:4000/graphql

# Database URLs
POSTGRES_URL=postgresql://user:password@localhost:5432/lovsite
MONGODB_URL=mongodb://localhost:27017/lovsite
REDIS_URL=redis://localhost:6379

# Authentication
JWT_SECRET=your-jwt-secret-key
REFRESH_TOKEN_SECRET=your-refresh-token-secret

# Third-party APIs
FIREBASE_CONFIG=your-firebase-config
STRIPE_PUBLIC_KEY=your-stripe-public-key
STRIPE_SECRET_KEY=your-stripe-secret-key

# Push Notifications
FCM_SERVER_KEY=your-fcm-server-key
```

### 4. Database Setup

```bash
# Start PostgreSQL and MongoDB
# Create databases
createdb lovsite
mongosh --eval "use lovsite"

# Run migrations (if using Prisma)
npx prisma migrate dev
```

### 5. Start the Development Server

```bash
# Start Metro bundler
npm start

# Run on iOS (macOS only)
npm run ios

# Run on Android
npm run android
```

## 📁 Project Structure

```
lovsite/
├── src/
│   ├── components/          # Reusable UI components
│   │   ├── atoms/          # Basic UI elements
│   │   ├── molecules/      # Complex UI components
│   │   └── organisms/      # Feature-specific components
│   ├── screens/            # Screen components
│   │   ├── Auth/          # Authentication screens
│   │   ├── Home/          # Dashboard screens
│   │   ├── Planning/      # Trip/date planning
│   │   ├── Wellness/      # Spa/wellness booking
│   │   ├── Shopping/      # Marketplace screens
│   │   └── Chat/          # Messaging interface
│   ├── navigation/         # Navigation configuration
│   ├── graphql/           # GraphQL queries, mutations, subscriptions
│   │   ├── queries/       # Query definitions
│   │   ├── mutations/     # Mutation definitions
│   │   └── subscriptions/ # Real-time subscriptions
│   ├── hooks/             # Custom React hooks
│   ├── services/          # API and external services
│   ├── utils/             # Utility functions
│   ├── types/             # TypeScript type definitions
│   └── constants/         # App constants and configuration
├── __tests__/             # Test files
├── android/               # Android-specific code
├── ios/                   # iOS-specific code
└── server/                # Backend GraphQL server (optional)
```

## 🔧 GraphQL Setup

### Apollo Client Configuration

```typescript
// src/services/apolloClient.ts
import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

const httpLink = createHttpLink({
  uri: process.env.GRAPHQL_ENDPOINT,
});

const authLink = setContext((_, { headers }) => {
  const token = getAuthToken(); // Implement token retrieval
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
  defaultOptions: {
    watchQuery: {
      errorPolicy: 'all',
    },
  },
});

export default client;
```

### Sample GraphQL Query

```typescript
// src/graphql/queries/user.ts
import { gql } from '@apollo/client';

export const GET_USER_PROFILE = gql`
  query GetUserProfile($userId: ID!) {
    user(id: $userId) {
      id
      name
      email
      profile {
        avatar
        bio
        preferences {
          intimacyLevel
          activityTypes
        }
      }
      partner {
        id
        name
        profile {
          avatar
        }
      }
    }
  }
`;
```

### Using GraphQL in Components

```typescript
// src/screens/Home/Dashboard.tsx
import React from 'react';
import { View, Text } from 'react-native';
import { useQuery } from '@apollo/client';
import { GET_USER_PROFILE } from '../../graphql/queries/user';

const Dashboard: React.FC = () => {
  const { loading, error, data } = useQuery(GET_USER_PROFILE, {
    variables: { userId: 'current-user-id' },
  });

  if (loading) return Loading...;
  if (error) return Error: {error.message};

  return (
    
      Welcome, {data.user.name}!
      {data.user.partner && (
        Partner: {data.user.partner.name}
      )}
    
  );
};

export default Dashboard;
```

## 🗄️ Database Recommendations

For Lovsite's complex requirements, we recommend a **hybrid database approach**:

### Primary Database: PostgreSQL
**Best for**: User profiles, relationships, bookings, transactions, and structured data[5][6]

**Why PostgreSQL?**
- ACID compliance for financial transactions
- Strong relational data modeling for user connections
- Excellent performance for complex queries
- Robust security features for sensitive data
- Full-text search capabilities
- JSON column support for flexible data

### Secondary Database: MongoDB
**Best for**: Messages, activity logs, preferences, and unstructured data[7][8][3]

**Why MongoDB?**
- Flexible schema for evolving feature requirements
- Excellent performance for real-time messaging
- Natural fit for storing activity logs and analytics
- Easy horizontal scaling
- Rich query capabilities for complex filtering

### Caching Layer: Redis
**Best for**: Session management, real-time features, and high-performance caching

**Why Redis?**
- In-memory performance for instant responses
- Pub/Sub for real-time notifications
- Session storage for authentication
- Rate limiting and API throttling
- Temporary data storage for AR/VR features

## 🧪 Testing

```bash
# Run all tests
npm test

# Run tests with coverage
npm run test:coverage

# Run E2E tests
npm run test:e2e
```

## 🚀 Deployment

### Production Build

```bash
# Build for production
npm run build

# Build iOS
npm run build:ios

# Build Android
npm run build:android
```

### Environment Variables

Set the following environment variables for production:

- `GRAPHQL_ENDPOINT`: Production GraphQL API endpoint
- `POSTGRES_URL`: Production PostgreSQL connection string
- `MONGODB_URL`: Production MongoDB connection string
- `REDIS_URL`: Production Redis connection string

## 📱 Features Roadmap

### Phase 1: Core Features ✅
- [x] User authentication and profile management
- [x] Partner pairing and relationship setup
- [x] Basic trip planning with calendar integration
- [x] Restaurant booking integration
- [x] Secure messaging between partners

### Phase 2: Advanced Features 🚧
- [ ] AI-powered date recommendations
- [ ] Wellness and spa booking system
- [ ] Intimate marketplace with consent management
- [ ] AR treasure hunt experiences
- [ ] VR relationship therapy sessions

### Phase 3: Patent-Worthy Innovations 🔮
- [ ] Biometric emotion synchronization
- [ ] Quantum compatibility matching
- [ ] Blockchain relationship milestones
- [ ] IoT smart home integration
- [ ] Genetic compatibility suggestions

## 🔐 Security & Privacy

- **End-to-end encryption** for all private communications
- **Biometric authentication** for app access
- **GDPR compliance** with data export/deletion capabilities
- **Multi-factor authentication** for sensitive features
- **Secure payment processing** with PCI compliance

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Apollo GraphQL team for excellent tooling[1][2]
- React Native community for continuous innovation
- MongoDB and PostgreSQL teams for robust database solutions[7][8][5]
- Firebase for real-time infrastructure support

**Built with ❤️ for couples everywhere**

For support, email us at support@lovsite.com or join our [Discord community](https://discord.gg/lovsite).
