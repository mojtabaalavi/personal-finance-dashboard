# Database Initialization Script
# Runs Prisma db push for all services to create database schemas

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Database Initialization" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Initializing database schemas for all services..." -ForegroundColor Yellow
Write-Host ""

# Function to initialize a service database
function Init-ServiceDB {
    param(
        [string]$ServiceName,
        [string]$ContainerName,
        [string]$Schema
    )
    
    Write-Host "[$ServiceName] Creating schema..." -ForegroundColor Cyan
    
    # Create schema using psql
    docker exec pfd_postgres psql -U admin pfd_db -c "CREATE SCHEMA IF NOT EXISTS $Schema;" 2>&1 | Out-Null
    
    # Run db push from service container
    $result = docker exec $ContainerName sh -c "cd /app && DATABASE_URL='postgresql://admin:password123@db:5432/pfd_db?schema=$Schema' npx prisma db push --accept-data-loss" 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✅ $ServiceName schema created" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $ServiceName schema initialization had an issue" -ForegroundColor Yellow
        Write-Host "     $result" -ForegroundColor Gray
    }
    Write-Host ""
}

# Initialize all services
Init-ServiceDB -ServiceName "Auth Service" -ContainerName "pfd_auth" -Schema "auth"
Init-ServiceDB -ServiceName "Finance Service" -ContainerName "pfd_finance" -Schema "finance"
Init-ServiceDB -ServiceName "Property Service" -ContainerName "pfd_property" -Schema "property"
Init-ServiceDB -ServiceName "AI Service" -ContainerName "pfd_ai" -Schema "ai"

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "✅ Database initialization complete!" -ForegroundColor Green
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""
Write-Host "You can now run: .\seed-database.ps1" -ForegroundColor Yellow
