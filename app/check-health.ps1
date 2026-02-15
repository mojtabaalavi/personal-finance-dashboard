# Simple Health Check for Personal Finance Dashboard
Write-Host "============================================" -ForegroundColor Cyan
Write-Host "Personal Finance Dashboard - Health Check" -ForegroundColor Cyan
Write-Host "============================================" -ForegroundColor Cyan
Write-Host ""

$services = @(
    @{Name="Gateway"; Url="http://localhost:4000/health"},
    @{Name="Auth Service"; Url="http://localhost:4001/health"},
    @{Name="Finance Service"; Url="http://localhost:4002/health"},
    @{Name="Property Service"; Url="http://localhost:4003/health"},
    @{Name="AI Service"; Url="http://localhost:4004/health"},
    @{Name="Reporting Service"; Url="http://localhost:4005/health"},
    @{Name="Client"; Url="http://localhost:3000"}
)

$allHealthy = $true

foreach ($service in $services) {
    Write-Host "Checking $($service.Name)... " -NoNewline
    try {
        $response = Invoke-WebRequest -Uri $service.Url -TimeoutSec 5 -UseBasicParsing -ErrorAction Stop
        if ($response.StatusCode -eq 200) {
            Write-Host "HEALTHY" -ForegroundColor Green
        } else {
            Write-Host "UNHEALTHY" -ForegroundColor Red
            $allHealthy = $false
        }
    } catch {
        Write-Host "UNREACHABLE" -ForegroundColor Red
        $allHealthy = $false
    }
}

Write-Host ""
Write-Host "Database Check..." -NoNewline
try {
    $connection = Test-NetConnection -ComputerName localhost -Port 5432 -WarningAction SilentlyContinue
    if ($connection.TcpTestSucceeded) {
        Write-Host "PostgreSQL HEALTHY" -ForegroundColor Green
    } else {
        Write-Host "PostgreSQL UNREACHABLE" -ForegroundColor Red
        $allHealthy = $false
    }
} catch {
    Write-Host "PostgreSQL UNREACHABLE" -ForegroundColor Red
    $allHealthy = $false
}

Write-Host ""
Write-Host "============================================" -ForegroundColor Cyan

if ($allHealthy) {
    Write-Host "All services are healthy!" -ForegroundColor Green
} else {
    Write-Host "Some services are not healthy." -ForegroundColor Red
    Write-Host "Run 'docker-compose logs SERVICE_NAME' to check logs" -ForegroundColor Yellow
}
