# Database Seed Script
# Creates sample data for all services (auth, finance, property, AI)
# SAFE TO RUN MULTIPLE TIMES - Uses upsert patterns to avoid data loss

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Database Seed - Personal Finance Dashboard" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Seeding all services with sample data..." -ForegroundColor Yellow
Write-Host "Note: This is safe for existing data - only creates missing sample entries" -ForegroundColor Green
Write-Host ""

# Check and install Ollama model if needed
Write-Host "[0/5] Checking AI model installation..." -ForegroundColor Cyan
$ollamaModels = docker exec pfd_ollama ollama list 2>&1
if ($ollamaModels -notmatch "llama3.2") {
    Write-Host "  AI model not found. Downloading llama3.2 (~2GB, may take 2-5 minutes)..." -ForegroundColor Yellow
    docker exec pfd_ollama ollama pull llama3.2
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✅ AI model installed successfully" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  Failed to install AI model. AI features may not work." -ForegroundColor Yellow
    }
} else {
    Write-Host "  ✅ AI model already installed" -ForegroundColor Green
}
Write-Host ""

$totalSteps = 4
$currentStep = 0
$failedServices = @()

# Function to run seed for a service
function Seed-Service {
    param(
        [string]$ServiceName,
        [string]$ContainerName,
        [string]$Description
    )
    
    $script:currentStep++
    Write-Host "[$script:currentStep/$totalSteps] Seeding $ServiceName ($Description)..." -ForegroundColor Cyan
    
    $result = docker exec $ContainerName npm run seed 2>&1
    
    if ($LASTEXITCODE -eq 0) {
        Write-Host "  ✅ $ServiceName seeded successfully" -ForegroundColor Green
    } else {
        Write-Host "  ⚠️  $ServiceName seeding encountered an issue" -ForegroundColor Yellow
        $script:failedServices += $ServiceName
    }
    Write-Host ""
}

# Seed all services
Seed-Service -ServiceName "Auth Service" -ContainerName "pfd_auth" -Description "users and authentication"
Seed-Service -ServiceName "Finance Service" -ContainerName "pfd_finance" -Description "accounts and transactions"
Seed-Service -ServiceName "Property Service" -ContainerName "pfd_property" -Description "assets and liabilities"
Seed-Service -ServiceName "AI Service" -ContainerName "pfd_ai" -Description "conversations and insights"

# Summary
Write-Host "========================================" -ForegroundColor Cyan
if ($failedServices.Count -eq 0) {
    Write-Host "✅ All services seeded successfully!" -ForegroundColor Green
} else {
    Write-Host "⚠️  Some services had issues: $($failedServices -join ', ')" -ForegroundColor Yellow
    Write-Host "Check docker-compose logs for details" -ForegroundColor Yellow
}
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Sample Data Created:" -ForegroundColor Cyan
Write-Host "  - Auth: 2 test users (administrator + standard user)" -ForegroundColor White
Write-Host "  - Finance: 3 bank accounts, 20 transactions, 7 categories" -ForegroundColor White
Write-Host "  - Property: 4 assets, 4 liabilities, insurance policies" -ForegroundColor White
Write-Host "  - AI: Sample conversation with insights" -ForegroundColor White
Write-Host ""

Write-Host "Test Credentials:" -ForegroundColor Cyan
Write-Host "  Admin: admin@example.com / password123" -ForegroundColor White
Write-Host "  User:  user@example.com / password123" -ForegroundColor White
Write-Host ""
Write-Host "Note: Use EMAIL ADDRESS (not username) to login" -ForegroundColor Yellow
Write-Host ""
Write-Host "Access your dashboard at: http://localhost:3000" -ForegroundColor Green
Write-Host ""

if ($failedServices.Count -gt 0) {
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "1. Ensure all services are running: docker-compose ps" -ForegroundColor Yellow
    Write-Host "2. Check service logs: docker-compose logs <service-name>" -ForegroundColor Yellow
    Write-Host "3. Restart services: docker-compose restart" -ForegroundColor Yellow
    exit 1
}
