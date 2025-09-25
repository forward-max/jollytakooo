#!/bin/bash

echo "🐳 Building Smart City Traveler Docker Image..."

# Remove existing lock files to prevent conflicts
echo "🧹 Cleaning lock files..."
rm -f package-lock.json
rm -f smart-city-traveler-frontend/package-lock.json

# Build the Docker image
echo "🔨 Building Docker image..."
docker build -t smart-city-traveler .

if [ $? -eq 0 ]; then
    echo "✅ Docker build successful!"
    echo "🚀 To run the container:"
    echo "   docker run -p 3000:3000 smart-city-traveler"
else
    echo "❌ Docker build failed!"
    exit 1
fi