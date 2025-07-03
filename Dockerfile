# Base image with Node.js
FROM mcr.microsoft.com/playwright:v1.45.0-jammy

# Set working directory
WORKDIR /app

# Copy your project files
COPY . .

# Install dependencies
RUN npm ci

# Install Allure CLI
RUN npm install -g allure-commandline --save-dev

# Run tests and generate report
CMD ["sh", "-c", "npx playwright install && npx playwright test && allure generate allure-results --clean -o allure-report"]
