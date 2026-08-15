🚀 MeetPortfolio

Personal portfolio website built with React and containerized using Docker for consistent and reproducible development across environments.

📦 Prerequisites

Ensure the following is installed on your machine:

Docker Desktop
https://www.docker.com/products/docker-desktop/

Verify installation:

docker --version
docker compose version

🛠️ Getting Started (Docker Recommended)

Clone the repository:

git clone https://github.com/<your-username>/MeetPortfolio.git


Navigate into the project directory:

cd MeetPortfolio


Build and start the container:

docker compose up --build


After the container starts, open:

http://localhost:3001

⚡ Running in Detached Mode (Optional)

Run the container in the background:

docker compose up -d


View running containers:

docker ps


Stop the container:

docker compose down

🔄 Rebuilding After Dependency Changes

If you modify dependencies or Docker configuration:

docker compose build --no-cache
docker compose up

🧹 Cleaning Docker (If Things Get Weird)
docker compose down --rmi all --volumes --remove-orphans
docker system prune -a


Use this only when necessary.

💻 Running Without Docker (Local Development)

If you prefer running the app locally:

Install Node.js 18 LTS.

Verify:

node -v


Install dependencies:

npm install


Start the development server:

npm start


Open:

http://localhost:3000

🔌 Port Configuration

Docker maps:

Host:      3001  
Container: 3000


You must access the application via localhost:3001 when using Docker.

🏗️ Tech Stack

React

Docker

Docker Compose

Node 18 (LTS)

📌 Notes

Docker ensures consistent runtime across machines.

The development build is not optimized for production.

For production deployment, consider a multi-stage Docker build with Nginx.

End paste.