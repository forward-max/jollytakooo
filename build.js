#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🚀 Building Smart City Traveler for Railway...');

try {
    // Install root dependencies
    console.log('📦 Installing root dependencies...');
    execSync('npm install --force --no-audit --no-fund', { stdio: 'inherit' });

    // Install frontend dependencies
    console.log('📦 Installing frontend dependencies...');
    process.chdir('smart-city-traveler-frontend');
    execSync('npm install --force --no-audit --no-fund', { stdio: 'inherit' });

    // Build the React app
    console.log('🔨 Building React application...');
    execSync('npm run build', { stdio: 'inherit' });

    // Go back to root
    process.chdir('..');

    console.log('✅ Build completed successfully!');
    console.log('🚀 Ready to start with: node server.js');

} catch (error) {
    console.error('❌ Build failed:', error.message);
    process.exit(1);
}