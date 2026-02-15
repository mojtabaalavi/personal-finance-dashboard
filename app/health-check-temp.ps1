# Health Check Script for Personal Finance Dashboard
# This script checks the health of all services

Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Personal Finance Dashboard - Health Check" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$services = @(
    @{Name="Gateway"; Port=4000; Path="/health"},
    @{Name="Auth Service"; Port=4001; Path="/health"},
    @{Name="Finance Service"; Port=4002; Path="/health"},
    @{Name="Property Service"; Port=4003; Path="/health"},
    @{Name="AI Service"; Port=4004; Path="/health"},
    @{Name="Reporting Service"; Port=4005; Path="/health"},
    @{Name="Client (Frontend)"; Port=3000; Path="/"},
    @{Name="PostgreSQL"; Port=5432; Path=$null},
    @{Name="Ollama"; Port=11434; Path="/"}
)

$allHealthy = $true

foreach ($service in $services) {
    Write-Host "Checking $($service.Name)... " -NoNewline
    
    if ($service.Path) {
        try {
            $url = "http://localhost:$($service.Port)$($service.Path)"
            $response = Invoke-WebRequest -Uri $url -TimeoutSec 5 -UseBasicParsing -ErrorAction Stop
            if ($response.StatusCode -eq 200) {
                Write-Host "âœ“ HEALTHY" -ForegroundColor Green
            } else {
                Write-Host "âœ— UNHEALTHY (Status: $($response.StatusCode))" -ForegroundColor Red
                $allHealthy = $false
            }
        } catch {
            Write-Host "âœ— UNREACHABLE" -ForegroundColor Red
            $allHealthy = $false
        }
    } else {
        # For PostgreSQL, check if port is listening
        try {
            $connection = Test-NetConnection -ComputerName localhost -Port $service.Port -WarningAction SilentlyContinue
            if ($connection.TcpTestSucceeded) {
                Write-Host "âœ“ HEALTHY" -ForegroundColor Green
            } else {
                Write-Host "âœ— UNREACHABLE" -ForegroundColor Red
                $allHealthy = $false
            }
        } catch {
            Write-Host "âœ— UNREACHABLE" -ForegroundColor Red
            $allHealthy = $false
        }
    }
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan

if ($allHealthy) {
    Write-Host "All services are healthy! âœ“" -ForegroundColor Green
    exit 0
} else {
    Write-Host "Some services are not healthy. âœ—" -ForegroundColor Red
    Write-Host ""
    Write-Host "Troubleshooting:" -ForegroundColor Yellow
    Write-Host "1. Check if Docker containers are running: docker-compose ps" -ForegroundColor Yellow
    Write-Host "2. View logs: docker-compose logs SERVICE_NAME" -ForegroundColor Yellow
    Write-Host "3. Restart services: docker-compose restart" -ForegroundColor Yellow
    exit 1
}

