# Personal Finance Dashboard

A comprehensive, privacy-first personal finance management application built with modern microservices architecture.

## 🚀 Quick Start

```powershell
# Navigate to app directory
cd app

# Build all services
docker-compose build

# Start all services
docker-compose up -d

# Check health
.\check-health.ps1

# Seed database with test users (optional)
.\seed-database.ps1

# Open application
Start http://localhost:3000
```

### Default Test Credentials

After running the seed script:

**Admin User**:
- Email: `admin@example.com`
- Password: `password123`

**Regular User**:
- Email: `user@example.com`  
- Password: `password123`

⚠️ **Login requires EMAIL ADDRESS, not username**

## ✅ System Status

All services are now running and healthy:

- ✅ **Gateway** (Port 4000) - API routing
- ✅ **Auth Service** (Port 4001) - User authentication  
- ✅ **Finance Service** (Port 4002) - Transactions & bank accounts
- ✅ **Property Service** (Port 4003) - Assets & rentals
- ✅ **AI Service** (Port 4004) - Intelligent categorization
- ✅ **Reporting Service** (Port 4005) - Analytics & reports
- ✅ **Client** (Port 3000) - React web UI
- ✅ **PostgreSQL** (Port 5432) - Database
- ✅ **Ollama** (Port 11434) - Local LLM

## 📖 Documentation

**[Complete User Guide](USER_GUIDE.md)** - Comprehensive setup, configuration, and usage guide

### Quick Links

- **Architecture**: [docs/architecture_review.md](docs/architecture_review.md)
- **Implementation Plan**: [docs/implementation_plan.md](docs/implementation_plan.md)
- **Project Guidelines**: [docs/project_guidelines.md](docs/project_guidelines.md)
- **Task List**: [docs/task.md](docs/task.md)

## 🎯 Key Features

### 🏦 Smart Banking
- Auto-parse CSV files from ASB, ANZ, KiwiBank
- Intelligent transaction categorization
- Duplicate detection
- Multi-account management

### 🏠 Property Management
- Track rental properties and owner-occupied homes
- Mortgage tracking with rate expiry alerts
- Automatic rent matching from bank transactions
- Insurance and rates management

### 📊 Financial Insights
- Real-time dashboard with net worth tracking
- Income vs expense analysis
- Category-based spending reports
- Financial year tax reports (NZ: 1 Apr - 31 Mar)

### 🤖 AI-Powered
- Local LLM (Ollama) for privacy
- Natural language queries
- Smart categorization suggestions
- Chat assistant for financial questions

### 🔒 Privacy First
- All data stored locally (no cloud)
- Docker-based deployment
- Role-based access control
- Change Data Capture (CDC) for audit trails

## 🛠️ Technology Stack

- **Frontend**: React 18 + TypeScript + Vite
- **Backend**: Node.js 22 + Express + TypeScript  
- **Database**: PostgreSQL 15 with Prisma ORM 7.4.0
- **AI**: Ollama (llama3 model)
- **Testing**: Vitest, Playwright, Pact
- **Deployment**: Docker + Docker Compose

## 📋 Requirements

- Docker Desktop 4.0+
- 8 GB RAM (16 GB recommended)
- 10 GB free disk space
- Modern web browser

## 🎨 UI Preview

The application features a premium, clean design following the MJ Solutionss brand guidelines:

- **Primary**: MJ Dark Blue (#2E3A8C)
- **Secondary**: MJ Light Blue (#4A5FD9)
- **Typography**: Inter font family
- **Style**: Glassmorphism with modern card layouts

## 📝 Essential Commands

```bash
# Start services
docker-compose up -d

# Stop services
docker-compose down

# View logs
docker-compose logs -f

# Health check
.\check-health.ps1

# Rebuild service
docker-compose build <service-name>

# Restart service
docker-compose restart <service-name>

# Access database
docker exec -it pfd_postgres psql -U admin pfd_db
```

## 🔧 Configuration

### Default Ports

| Service | Port | URL |
|---------|------|-----|
| Client (UI) | 3000 | http://localhost:3000 |
| Gateway | 4000 | http://localhost:4000 |
| Auth | 4001 | http://localhost:4001 |
| Finance | 4002 | http://localhost:4002 |
| Property | 4003 | http://localhost:4003 |
| AI | 4004 | http://localhost:4004 |
| Reporting | 4005 | http://localhost:4005 |

### Default Credentials

**Database**:
- Username: `admin`
- Password: `password123`
- Database: `pfd_db`

**JWT Secret**: `supersecretkey`

⚠️ **Change these for production use!**

## 🚨 Troubleshooting

### Services Won't Start

```bash
# Check Docker is running
docker ps

# Remove old containers
docker-compose down -v

# Rebuild from scratch
docker-compose build --no-cache
docker-compose up -d
```

### Check Service Health

```powershell
# Windows
.\check-health.ps1

# View specific service logs
docker-compose logs -f <service-name>
```

### Database Connection Issues

```bash
# Restart database
docker-compose restart db

# Check database logs  
docker-compose logs db
```

## 📦 Project Structure

```
personal-finance-dashboard/
├── app/
│   ├── client/              # React frontend (Vite)
│   ├── gateway/             # API Gateway (Express)
│   ├── services/
│   │   ├── auth/           # Authentication & user management
│   │   ├── finance/        # Transactions & bank accounts
│   │   ├── property/       # Properties & rentals
│   │   ├── ai/             # AI categorization & chat
│   │   └── reporting/      # Analytics & reports
│   ├── docker-compose.yml  # Container orchestration
│   ├── check-health.ps1    # Health check script
│   └── package.json        # Monorepo configuration
├── docs/                   # Architecture & planning docs
├── categories.csv          # Transaction categories & keywords
├── sampleBankStatements/   # Example bank CSV files
└── USER_GUIDE.md          # Complete user documentation
```

## 🧪 Testing

```bash
# Run all tests
npm test

# Run E2E tests
npm run test:e2e

# Run specific service tests
npm test --workspace=services/auth
```

## 🔄 Development Workflow

### Running Locally (Without Docker)

```bash
# Install dependencies
npm install

# Start all services in dev mode
npm run dev

# Services will start on their respective ports
# Frontend on http://localhost:5173 (Vite dev server)
```

### Making Changes

```bash
# After code changes, rebuild affected services
docker-compose build <service-name>
docker-compose up -d <service-name>
```

## 📊 Monitoring

### View Container Status

```bash
docker-compose ps
```

### Monitor Resources

```bash
docker stats
```

### Export Logs

```bash
docker-compose logs > app-logs.txt
```

## 🔐 Security Notes

For production deployment:

1. **Update credentials** in `docker-compose.yml`
2. **Enable HTTPS** with Nginx reverse proxy
3. **Configure firewall** rules
4. **Regular backups** of PostgreSQL database
5. **Update dependencies** regularly

## 📄 License

Private project for personal use.

## 🙏 Acknowledgments

- Built with modern enterprise patterns scaled for personal use
- Follows microservices best practices
- Implements CDC for data integrity
- Privacy-focused design (local-first)

---

**Status**: ✅ All services running and healthy  
**Version**: 1.0.0  
**Last Updated**: February 15, 2026
