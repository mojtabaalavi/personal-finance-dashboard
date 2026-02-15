# Quick Start Guide

## ⚡ 5-Minute Setup

### 1. Prerequisites Check

```powershell
# Verify Docker is installed and running
docker --version
docker-compose --version
```

Expected output: Docker version 20.0+ and Compose version 2.0+

### 2. Build & Start

```powershell
cd D:\Personal\personal-finance-dashboard\app

# Build all services (first time: 5-10 minutes)
docker-compose build

# Start all services  
docker-compose up -d

# Wait 30 seconds for services to initialize
Start-Sleep -Seconds 30
```

### 3. Verify Health

```powershell
# Run health check
.\check-health.ps1
```

You should see all services as **HEALTHY**.

### 4. Access Application

Open your browser and navigate to:
- **Web UI**: http://localhost:3000
- **API Gateway**: http://localhost:4000

### 5. First Login

1. Click **"Register"** on the login page
2. Create your account:
   - Email: your@email.com
   - Password: (min 8 characters)
3. Login with your new credentials

## 🎯 Common Tasks

### Upload Bank Statement

1. Navigate to **Transactions** page
2. Click **"Upload Statement"**
3. Drag & drop your bank CSV file
4. Review and confirm import

### View Dashboard

1. Click **"Dashboard"** in top navigation
2. View your financial overview:
   - Total balance
   - Monthly income/expenses
   - Recent transactions
   - Spending by category

### Add a Property

1. Navigate to **Properties** page
2. Click **"Add Property"**
3. Fill in property details
4. Save and view on properties list

### Ask AI Assistant

1. Click chat icon (bottom-right corner)
2. Ask questions like:
   - "How much did I spend last month?"
   - "What are my largest expenses?"
   - "Show my savings trend"

## 🛑 Stop Services

```powershell
# Stop all services (keeps data)
docker-compose down

# Stop and remove all data
docker-compose down -v
```

## 📊 View Logs

```powershell
# All services
docker-compose logs -f

# Specific service
docker-compose logs -f auth-service
```

## 🔄 Restart a Service

```powershell
docker-compose restart <service-name>
```

## 🆘 Troubleshooting

### Service Shows "UNREACHABLE"

```powershell
# Check service logs
docker-compose logs <service-name>

# Restart the service
docker-compose restart <service-name>
```

### Cannot Access UI

1. Check if client container is running:
   ```powershell
   docker ps | findstr pfd_client
   ```

2. View client logs:
   ```powershell
   docker-compose logs client
   ```

3. Rebuild and restart:
   ```powershell
   docker-compose build client
   docker-compose up -d client
   ```

### Database Connection Errors

```powershell
# Restart database
docker-compose restart db

# Wait 10 seconds for initialization
Start-Sleep -Seconds 10

# Restart dependent services
docker-compose restart auth-service finance-service property-service
```

## 📚 Next Steps

- Read the **[Complete User Guide](USER_GUIDE.md)** for detailed instructions
- Explore **[Architecture Documentation](docs/architecture_review.md)**
- Review **[Project Guidelines](docs/project_guidelines.md)**

## 🎉 You're All Set!

Your Personal Finance Dashboard is now running at **http://localhost:3000**

Happy tracking! 💰
