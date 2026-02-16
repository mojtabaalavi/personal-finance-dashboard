#!/usr/bin/env pwsh
# Seed Finance Database Script

Write-Host "Finance Database Seed Script" -ForegroundColor Cyan
Write-Host "============================`n" -ForegroundColor Cyan

# Check if running from correct directory
if (!(Test-Path "prisma/schema.prisma")) {
    Write-Host "Error: Please run this script from the finance service directory" -ForegroundColor Red
    Write-Host "   Current: $PWD" -ForegroundColor Yellow
    Write-Host "   Expected: app/services/finance" -ForegroundColor Yellow
    exit 1
}

Write-Host "Step 1: Generating Prisma Client..." -ForegroundColor Yellow
npm run prisma:generate

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to generate Prisma client" -ForegroundColor Red
    exit 1
}

Write-Host "`nPrisma client generated`n" -ForegroundColor Green

Write-Host "Step 2: Running seed script..." -ForegroundColor Yellow
npm run seed

if ($LASTEXITCODE -ne 0) {
    Write-Host "Failed to seed database" -ForegroundColor Red
    exit 1
}

Write-Host "`nDatabase seeded successfully!`n" -ForegroundColor Green

Write-Host "All done! Your finance database is ready to use." -ForegroundColor Cyan
Write-Host "`nYou can now:" -ForegroundColor White
Write-Host "  - View transactions at http://localhost:3000/transactions" -ForegroundColor Gray
Write-Host "  - Access API at http://localhost:4000/api/finance/transactions" -ForegroundColor Gray
Write-Host "`nSample data created:" -ForegroundColor White
Write-Host "  - 3 bank accounts" -ForegroundColor Gray
Write-Host "  - 20+ sample transactions" -ForegroundColor Gray
Write-Host "  - 7 categories with subcategories" -ForegroundColor Gray
