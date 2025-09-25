#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

console.log('🧹 Starting clean installation...');

// Remove node_modules and lock files
const pathsToRemove = [
    'node_modules',
    'package-lock.json',
    'smart-city-traveler-frontend/node_modules',
    'smart-city-traveler-frontend/package-lock.json'
];

pathsToRemove.forEach(p => {
    if (fs.existsSync(p)) {
        console.log(`🗑️  Removing ${p}...`);
        fs.rmSync(p, { recursive: true, force: true });
    }
});

console.log('📦 Installing root dependencies...');
execSync('npm install --silent --no-audit --no-fund', { stdio: 'inherit' });

console.log('📦 Installing frontend dependencies...');
process.chdir('smart-city-traveler-frontend');
execSync('npm install --silent --no-audit --no-fund', { stdio: 'inherit' });

console.log('✅ Clean installation completed!');
console.log('🚀 Run "npm start" to start the application');