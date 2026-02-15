# Database Seed Script
# Creates default admin and user accounts for testing

Write-Host "========================================" -ForegroundColor Cyan
Write-Host "Database Seed - Personal Finance Dashboard" -ForegroundColor Cyan
Write-Host "========================================" -ForegroundColor Cyan
Write-Host ""

Write-Host "Seeding database with default users..." -ForegroundColor Yellow
Write-Host ""

# Run seed script inside auth service container
$result = docker exec pfd_auth npm run seed 2>&1

if ($LASTEXITCODE -eq 0) {
    Write-Host "✅ Database seeded successfully!" -ForegroundColor Green
    Write-Host ""
    Write-Host "Default Admin User:" -ForegroundColor Cyan
    Write-Host "  Email: admin@example.com" -ForegroundColor White
    Write-Host "  Password: password123" -ForegroundColor White
    Write-Host "  Role: ADMIN" -ForegroundColor White
    Write-Host ""
    Write-Host "Default Regular User:" -ForegroundColor Cyan
    Write-Host "  Email: user@example.com" -ForegroundColor White
    Write-Host "  Password: password123" -ForegroundColor White
    Write-Host "  Role: USER" -ForegroundColor White
    Write-Host ""
    Write-Host "⚠️  Note: Use EMAIL ADDRESS (not username) to login" -ForegroundColor Yellow
    Write-Host ""
    Write-Host "You can now login at: http://localhost:3000" -ForegroundColor Green
} else {
    Write-Host "❌ Failed to seed database" -ForegroundColor Red
    Write-Host ""
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "1. Ensure services are running: docker-compose ps" -ForegroundColor Yellow
    Write-Host "2. Check auth service logs: docker-compose logs auth-service" -ForegroundColor Yellow
    Write-Host "3. Restart services: docker-compose restart" -ForegroundColor Yellow
    exit 1
}
