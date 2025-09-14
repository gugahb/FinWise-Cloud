#!/bin/bash

# FinWise Cloud Setup Script
echo "🚀 Setting up FinWise Cloud..."

# Check if Docker is installed
if ! command -v docker &> /dev/null; then
    echo "❌ Docker is not installed. Please install Docker first."
    exit 1
fi

# Check if Docker Compose is installed
if ! command -v docker-compose &> /dev/null; then
    echo "❌ Docker Compose is not installed. Please install Docker Compose first."
    exit 1
fi

# Create environment files from examples
echo "📋 Creating environment files..."

if [ ! -f backend/.env ]; then
    cp backend/.env.example backend/.env
    echo "✅ Created backend/.env"
else
    echo "⏭️  backend/.env already exists"
fi

if [ ! -f frontend/.env.local ]; then
    cp frontend/.env.local.example frontend/.env.local
    echo "✅ Created frontend/.env.local"
else
    echo "⏭️  frontend/.env.local already exists"
fi

# Build and start services
echo "🐳 Building and starting Docker services..."
docker-compose up --build -d

# Wait for services to be ready
echo "⏳ Waiting for services to start..."
sleep 10

# Run database migrations
echo "🗄️  Running database migrations..."
docker-compose exec -T api npm run prisma:migrate

echo ""
echo "✅ Setup complete!"
echo ""
echo "🌐 Access your applications:"
echo "   Frontend: http://localhost:3001"
echo "   API:      http://localhost:3000"
echo "   API Docs: http://localhost:3000/api/docs"
echo ""
echo "🛠️  Useful commands:"
echo "   docker-compose logs api      # View API logs"
echo "   docker-compose logs web      # View frontend logs"
echo "   docker-compose down          # Stop all services"
echo ""