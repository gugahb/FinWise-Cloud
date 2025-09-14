# 💰 FinWise Cloud

<div align="center">
  <h3>🏦 Your Personal Financial Management Platform</h3>
  <p>A modern, cloud-native monorepo for comprehensive financial tracking and analytics</p>
  
  ![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat&logo=typescript&logoColor=white)
  ![NestJS](https://img.shields.io/badge/NestJS-E0234E?style=flat&logo=nestjs&logoColor=white)
  ![Next.js](https://img.shields.io/badge/Next.js-000000?style=flat&logo=nextdotjs&logoColor=white)
  ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-316192?style=flat&logo=postgresql&logoColor=white)
  ![Redis](https://img.shields.io/badge/Redis-DC382D?style=flat&logo=redis&logoColor=white)
  ![Docker](https://img.shields.io/badge/Docker-2496ED?style=flat&logo=docker&logoColor=white)
</div>

---

## 🏗️ Project Structure

```
finwise-cloud/
├── 🔧 backend/          # NestJS API Server
├── 🎨 frontend/         # Next.js Web Application
├── ☁️ cfn/              # CloudFormation Templates
├── 🐳 docker-compose.yml # Development Environment
└── 📖 README.md         # This file
```

---

## 🚀 Quick Start

### Prerequisites
- 🐳 Docker & Docker Compose
- 📦 Node.js 20+ (for local development)

### 🐳 Development with Docker (Recommended)

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd finwise-cloud
   ```

2. **Start all services**
   ```bash
   docker-compose up --build
   ```

3. **Access the applications**
   - 🌐 **Frontend**: http://localhost:3001
   - 🔌 **API**: http://localhost:3000
   - 📖 **API Docs**: http://localhost:3000/api/docs
   - 🗄️ **Database**: localhost:5432 (postgres/postgres)
   - 🔴 **Redis**: localhost:6379

### 🛠️ Local Development Setup

#### Backend Setup
```bash
cd backend
cp .env.example .env
npm install
npm run prisma:migrate
npm run start:dev
```

#### Frontend Setup
```bash
cd frontend  
cp .env.local.example .env.local
npm install
npm run dev
```

---

## 📊 Database Management

### Prisma Migrations
```bash
# Generate Prisma client
npm run prisma:generate

# Create and apply migration
npm run prisma:migrate

# Reset database (dev only)
npx prisma migrate reset

# Open Prisma Studio
npm run prisma:studio
```

### Database Access
```bash
# Connect to PostgreSQL
docker-compose exec db psql -U postgres -d finwise

# View logs
docker-compose logs db
```

---

## 🔧 Available Services

| Service | Port | Description |
|---------|------|-------------|
| 🎨 **Web** | 3001 | Next.js Frontend |
| 🔌 **API** | 3000 | NestJS Backend |
| 🗄️ **Database** | 5432 | PostgreSQL |
| 🔴 **Redis** | 6379 | Cache & Queues |

---

## 🎯 Features

### ✅ Implemented
- 🏗️ **Monorepo Structure** - Organized codebase
- 🐳 **Docker Development** - Containerized services  
- 🔌 **RESTful API** - NestJS with Swagger docs
- 🗄️ **Database ORM** - Prisma with PostgreSQL
- 🔴 **Caching & Queues** - Redis integration
- 🎨 **Modern Frontend** - Next.js 14 with App Router
- 🎭 **Type Safety** - Full TypeScript support
- 📖 **API Documentation** - Auto-generated Swagger

### 🚧 Coming Soon
- 🔐 **Authentication** - JWT-based auth system
- 👤 **User Management** - Registration & profiles
- 💰 **Account Tracking** - Multiple account types
- 📊 **Transaction Management** - Income & expense tracking
- 📈 **Financial Analytics** - Charts & insights
- 🎯 **Budget Goals** - Goal setting & tracking
- 📱 **Mobile Responsive** - Optimized for all devices

---

## 🛠️ Development Commands

### 🔧 Backend (NestJS)
```bash
npm run start:dev    # Development server
npm run build        # Production build
npm run test         # Run tests
npm run lint         # Code linting
```

### 🎨 Frontend (Next.js)
```bash
npm run dev          # Development server
npm run build        # Production build
npm run start        # Production server
npm run lint         # Code linting
```

### 🐳 Docker
```bash
docker-compose up --build    # Build and start all services
docker-compose down          # Stop all services
docker-compose logs api      # View API logs
docker-compose exec api sh   # Access API container
```

---

## ☁️ AWS Deployment

### CloudFormation Templates
```bash
# Deploy infrastructure
aws cloudformation deploy \
  --template-file cfn/infrastructure.yml \
  --stack-name finwise-infrastructure \
  --parameter-overrides Environment=dev

# View stack outputs
aws cloudformation describe-stacks \
  --stack-name finwise-infrastructure \
  --query 'Stacks[0].Outputs'
```

---

## 🔍 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| `GET` | `/` | Welcome message |
| `GET` | `/health` | Health check |
| `GET` | `/api/docs` | Swagger documentation |

*More endpoints will be added as features are implemented*

---

## 🤝 Contributing

1. 🍴 Fork the repository
2. 🌿 Create your feature branch (`git checkout -b feature/amazing-feature`)
3. 💾 Commit your changes (`git commit -m 'Add amazing feature'`)
4. 📤 Push to the branch (`git push origin feature/amazing-feature`)
5. 🔄 Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the LICENSE file for details.

---

<div align="center">
  <p>🚀 Built with ❤️ for better financial management</p>
  <p>⭐ Star this repo if you find it useful!</p>
</div>
