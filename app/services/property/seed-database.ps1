# Property Service Database Seeding Script
Write-Host "🚀 Starting Property Service Database Setup..." -ForegroundColor Cyan

# Check if we're in the right directory
if (!(Test-Path "prisma/schema.prisma")) {
    Write-Host "❌ Error: prisma/schema.prisma not found!" -ForegroundColor Red
    Write-Host "Please run this script from the property service directory" -ForegroundColor Yellow
    exit 1
}

Write-Host "`n📦 Step 1: Generating Prisma Client..." -ForegroundColor Yellow
npx prisma generate
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to generate Prisma client" -ForegroundColor Red
    exit 1
}

Write-Host "`n🌱 Step 2: Running seed script..." -ForegroundColor Yellow
npm run seed
if ($LASTEXITCODE -ne 0) {
    Write-Host "❌ Failed to seed database" -ForegroundColor Red
    exit 1
}

Write-Host "`n✅ Property Service Database Setup Complete!" -ForegroundColor Green
Write-Host "You can now restart the property container: docker restart pfd_property" -ForegroundColor Cyan
